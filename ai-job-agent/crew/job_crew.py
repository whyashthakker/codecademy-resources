from crewai import Crew, Process
from agents import create_job_scraper_agent, create_job_filter_agent, create_job_formatter_agent
from tasks import create_job_search_task, create_job_filter_task, create_job_format_task


class JobHuntingCrew:
    def __init__(self):
        self.job_scraper = create_job_scraper_agent()
        self.job_filter = create_job_filter_agent()
        self.job_formatter = create_job_formatter_agent()
        
    def create_crew(self, job_query, location, user_preferences, num_results=10):
        # Create search task
        search_task = create_job_search_task(
            agent=self.job_scraper,
            job_query=job_query,
            location=location,
            num_results=num_results
        )
        
        # Create filter task
        filter_task = create_job_filter_task(
            agent=self.job_filter,
            user_preferences=user_preferences,
            job_data="Use the output from the job search task"
        )
        
        # Create format task
        format_task = create_job_format_task(
            agent=self.job_formatter,
            filtered_jobs="Use the output from the job filter task"
        )
        
        # Set task dependencies
        filter_task.context = [search_task]
        format_task.context = [filter_task]
        
        # Create and return crew
        return Crew(
            agents=[self.job_scraper, self.job_filter, self.job_formatter],
            tasks=[search_task, filter_task, format_task],
            process=Process.sequential,
            verbose=True
        )
    
    def run_job_search(self, job_query, location, user_preferences, num_results=10):
        crew = self.create_crew(job_query, location, user_preferences, num_results)
        result = crew.kickoff()
        return result