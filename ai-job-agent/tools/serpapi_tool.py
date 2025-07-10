from serpapi import GoogleSearch
from crewai.tools  import BaseTool
from typing import Type, Any
from pydantic import BaseModel, Field
from config import SERPAPI_API_KEY


class SearchInput(BaseModel):
    query: str = Field(..., description="The search query for job listings")
    location: str = Field(default="", description="Location to search for jobs")
    num_results: int = Field(default=10, description="Number of results to return")


class SerpAPIJobSearchTool(BaseTool):
    name: str = "Job Search Tool"
    description: str = "Search for job listings using SerpAPI Google Jobs search"
    args_schema: Type[BaseModel] = SearchInput

    def _run(self, query: str, location: str = "", num_results: int = 10) -> str:
        try:
            search_params = {
                "engine": "google_jobs",
                "q": query,
                "api_key": SERPAPI_API_KEY,
                "num": num_results
            }
            
            if location:
                search_params["location"] = location
            
            search = GoogleSearch(search_params)
            results = search.get_dict()
            
            if "jobs_results" not in results:
                return "No job results found"
            
            jobs = results["jobs_results"]
            formatted_jobs = []
            
            for job in jobs:
                job_info = {
                    "title": job.get("title", ""),
                    "company": job.get("company_name", ""),
                    "location": job.get("location", ""),
                    "description": job.get("description", ""),
                    "via": job.get("via", ""),
                    "job_id": job.get("job_id", ""),
                    "thumbnail": job.get("thumbnail", ""),
                    "posted_at": job.get("detected_extensions", {}).get("posted_at", ""),
                    "schedule_type": job.get("detected_extensions", {}).get("schedule_type", ""),
                    "salary": job.get("detected_extensions", {}).get("salary", ""),
                    "apply_link": job.get("apply_options", [{}])[0].get("link", "") if job.get("apply_options") else "",
                    "job_link": job.get("share_link", ""),
                    "related_links": [link.get("link", "") for link in job.get("related_links", [])]
                }
                formatted_jobs.append(job_info)
            
            return str(formatted_jobs)
            
        except Exception as e:
            return f"Error searching for jobs: {str(e)}"