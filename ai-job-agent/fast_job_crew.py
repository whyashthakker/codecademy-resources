from crewai import Agent, Task, Crew, Process
from tools.serpapi_tool import SerpAPIJobSearchTool


def create_fast_job_agent():
    return Agent(
        role="Job Search Specialist",
        goal="Quickly search, filter, and format job listings with application links",
        backstory="""You are an efficient job search expert who can quickly find, 
        analyze, and present relevant job opportunities. You work fast and focus 
        on delivering actionable results with clear application links.""",
        tools=[SerpAPIJobSearchTool()],
        verbose=False,
        allow_delegation=False
    )


def create_fast_job_task(agent, job_query, location, user_preferences, num_results=10):
    return Task(
        description=f"""Complete job search in ONE step:
        
        1. Search for: {job_query} in {location} (get {num_results} results)
        2. Filter based on: {user_preferences}
        3. Format results with APPLICATION LINKS prominently displayed
        
        Return a clean report with:
        - Top 5 best matches
        - Job title, company, location
        - Key highlights
        - APPLY NOW links for each job
        - Brief why it matches user preferences
        
        Be concise and actionable.""",
        agent=agent,
        expected_output="Concise job report with top matches and prominent application links"
    )


class FastJobCrew:
    def __init__(self):
        self.agent = create_fast_job_agent()
    
    def search_jobs(self, job_query, location, user_preferences, num_results=10):
        task = create_fast_job_task(
            self.agent, job_query, location, user_preferences, num_results
        )
        
        crew = Crew(
            agents=[self.agent],
            tasks=[task],
            process=Process.sequential,
            verbose=False
        )
        
        return crew.kickoff()