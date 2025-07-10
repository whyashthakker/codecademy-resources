from crewai import Agent
from tools.serpapi_tool import SerpAPIJobSearchTool


def create_job_scraper_agent():
    return Agent(
        role="Job Scraper",
        goal="Search and collect job listings from various sources using SerpAPI",
        backstory="""You are an expert job scraper with extensive knowledge of job boards 
        and recruitment platforms. You excel at finding relevant job opportunities 
        by crafting effective search queries and extracting comprehensive job data.""",
        tools=[SerpAPIJobSearchTool()],
        verbose=True,
        allow_delegation=False
    )