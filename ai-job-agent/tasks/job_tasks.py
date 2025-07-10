from crewai import Task


def create_job_search_task(agent, job_query, location, num_results=10):
    return Task(
        description=f"""Search for job listings using the following criteria:
        - Job Query: {job_query}
        - Location: {location}
        - Number of results: {num_results}
        
        Use the Job Search Tool to find relevant job opportunities. 
        Return comprehensive job data including titles, companies, locations, 
        descriptions, application links, job URLs, and any additional metadata available.""",
        agent=agent,
        expected_output="A list of job opportunities with complete details including title, company, location, description, application links, job URLs, and metadata."
    )


def create_job_filter_task(agent, user_preferences, job_data):
    return Task(
        description=f"""Analyze and filter the provided job listings based on these user preferences:
        {user_preferences}
        
        Job data to analyze:
        {job_data}
        
        Filter and rank the jobs based on:
        - Skills match
        - Experience level requirements
        - Salary range (if specified)
        - Work arrangement preferences (remote, hybrid, on-site)
        - Company size preferences
        - Industry preferences
        
        Return only the most relevant job opportunities that match the user's criteria.""",
        agent=agent,
        expected_output="A filtered list of job opportunities ranked by relevance to user preferences, with match explanations."
    )


def create_job_format_task(agent, filtered_jobs):
    return Task(
        description=f"""Format the filtered job listings into a user-friendly summary:
        
        Jobs to format:
        {filtered_jobs}
        
        Create a comprehensive report that includes:
        - Executive summary of findings
        - Top job recommendations with clear explanations
        - Key highlights for each position
        - PROMINENT APPLICATION LINKS and job URLs for each opportunity
        - Comparison of opportunities
        - Next steps and application guidance
        
        IMPORTANT: Always include clickable application links and job URLs prominently 
        in your report so users can easily apply to jobs. Format the output in a clean, 
        professional manner that's easy to read and actionable.""",
        agent=agent,
        expected_output="A well-formatted, professional job search report with recommendations, actionable insights, and prominent application links for each job opportunity."
    )