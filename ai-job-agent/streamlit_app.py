import streamlit as st
import os
from crew import JobHuntingCrew
from fast_job_crew import FastJobCrew
from config import OPENAI_API_KEY, SERPAPI_API_KEY

# Set environment variables for CrewAI
os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY
os.environ["SERPAPI_API_KEY"] = SERPAPI_API_KEY

st.set_page_config(
    page_title="AI Job Hunting Agent",
    page_icon="🎯",
    layout="wide"
)

st.title("🎯 AI Job Hunting Agent")
st.markdown("*Powered by CrewAI - Find your perfect job with AI-driven search and filtering*")

# Initialize session state
if 'search_results' not in st.session_state:
    st.session_state.search_results = None
if 'search_running' not in st.session_state:
    st.session_state.search_running = False

# Sidebar for job preferences
with st.sidebar:
    st.header("Job Search Preferences")
    
    job_query = st.text_input(
        "Job Title/Keywords",
        placeholder="e.g., Software Engineer, Data Scientist",
        help="Enter the job title or keywords you're looking for"
    )
    
    location = st.text_input(
        "Location",
        placeholder="e.g., San Francisco, Remote",
        help="Enter your preferred location or 'Remote' for remote work"
    )
    
    num_results = st.slider(
        "Number of Results",
        min_value=5,
        max_value=50,
        value=10,
        help="How many job listings to search for"
    )
    
    st.subheader("Additional Preferences")
    
    experience_level = st.selectbox(
        "Experience Level",
        ["Any", "Entry Level", "Mid Level", "Senior Level", "Executive"],
        help="Select your experience level"
    )
    
    work_arrangement = st.selectbox(
        "Work Arrangement",
        ["Any", "Remote", "Hybrid", "On-site"],
        help="Select your preferred work arrangement"
    )
    
    salary_range = st.text_input(
        "Salary Range (Optional)",
        placeholder="e.g., $80k - $120k",
        help="Enter your desired salary range"
    )
    
    required_skills = st.text_area(
        "Required Skills",
        placeholder="e.g., Python, Machine Learning, AWS",
        help="List skills you want to match (comma-separated)"
    )
    
    company_size = st.selectbox(
        "Company Size",
        ["Any", "Startup (1-50)", "Small (51-200)", "Medium (201-1000)", "Large (1000+)"],
        help="Select preferred company size"
    )

# Main content area
col1, col2 = st.columns([2, 1])

with col1:
    st.header("Job Search")
    
    # Speed option
    use_fast_search = st.checkbox("⚡ Fast Search (Single Agent)", value=True, help="Faster but less detailed analysis")
    
    if st.button("🔍 Search Jobs", type="primary", disabled=not job_query):
        if not job_query:
            st.error("Please enter a job title or keywords")
        else:
            # Create user preferences string
            user_preferences = f"""
            Experience Level: {experience_level}
            Work Arrangement: {work_arrangement}
            Salary Range: {salary_range if salary_range else 'Not specified'}
            Required Skills: {required_skills if required_skills else 'Not specified'}
            Company Size: {company_size}
            """
            
            st.session_state.search_running = True
            
            spinner_text = "⚡ Fast AI search in progress..." if use_fast_search else "🤖 AI agents are searching for jobs..."
            with st.spinner(spinner_text):
                try:
                    if use_fast_search:
                        # Use fast single-agent approach
                        job_crew = FastJobCrew()
                        result = job_crew.search_jobs(
                            job_query=job_query,
                            location=location,
                            user_preferences=user_preferences,
                            num_results=num_results
                        )
                    else:
                        # Use original multi-agent approach
                        job_crew = JobHuntingCrew()
                        result = job_crew.run_job_search(
                            job_query=job_query,
                            location=location,
                            user_preferences=user_preferences,
                            num_results=num_results
                        )
                    
                    st.session_state.search_results = result
                    st.session_state.search_running = False
                    st.success("✅ Job search completed!")
                    
                except Exception as e:
                    st.error(f"❌ Error during job search: {str(e)}")
                    st.session_state.search_running = False

with col2:
    st.header("Search Status")
    
    if st.session_state.search_running:
        st.info("🔄 Search in progress...")
        st.progress(0.5)
    elif st.session_state.search_results:
        st.success("✅ Search completed")
        st.metric("Status", "Ready")
    else:
        st.info("⏳ Ready to search")

# Display results
if st.session_state.search_results:
    st.header("Job Search Results")
    
    # Display the formatted results
    st.markdown("### 📊 AI-Generated Job Report")
    
    # Create expandable sections for better organization
    with st.expander("📋 Full Report", expanded=True):
        st.markdown(str(st.session_state.search_results))
    
    # Download button for results
    st.download_button(
        label="📥 Download Results",
        data=str(st.session_state.search_results),
        file_name=f"job_search_results_{job_query.replace(' ', '_')}.txt",
        mime="text/plain"
    )

# Footer
st.markdown("---")
st.markdown("*Built with CrewAI, Streamlit, and SerpAPI*")