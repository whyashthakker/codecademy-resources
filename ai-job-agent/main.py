#!/usr/bin/env python3
"""
AI Job Hunting Agent - Command Line Interface
"""

import argparse
import os
from crew import JobHuntingCrew
from config import OPENAI_API_KEY, SERPAPI_API_KEY


def main():
    # Set environment variables
    os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY
    os.environ["SERPAPI_API_KEY"] = SERPAPI_API_KEY
    
    parser = argparse.ArgumentParser(description="AI Job Hunting Agent")
    parser.add_argument("--job-query", required=True, help="Job title or keywords to search for")
    parser.add_argument("--location", default="", help="Location to search (optional)")
    parser.add_argument("--num-results", type=int, default=10, help="Number of results to return")
    parser.add_argument("--experience", default="Any", help="Experience level preference")
    parser.add_argument("--work-arrangement", default="Any", help="Work arrangement preference")
    parser.add_argument("--salary-range", default="", help="Salary range preference")
    parser.add_argument("--skills", default="", help="Required skills (comma-separated)")
    parser.add_argument("--company-size", default="Any", help="Company size preference")
    
    args = parser.parse_args()
    
    # Create user preferences
    user_preferences = f"""
    Experience Level: {args.experience}
    Work Arrangement: {args.work_arrangement}
    Salary Range: {args.salary_range if args.salary_range else 'Not specified'}
    Required Skills: {args.skills if args.skills else 'Not specified'}
    Company Size: {args.company_size}
    """
    
    print("🎯 AI Job Hunting Agent Starting...")
    print(f"Searching for: {args.job_query}")
    print(f"Location: {args.location if args.location else 'Any'}")
    print(f"Number of results: {args.num_results}")
    print("=" * 50)
    
    try:
        # Initialize and run the crew
        job_crew = JobHuntingCrew()
        result = job_crew.run_job_search(
            job_query=args.job_query,
            location=args.location,
            user_preferences=user_preferences,
            num_results=args.num_results
        )
        
        print("✅ Job search completed!")
        print("=" * 50)
        print("RESULTS:")
        print("=" * 50)
        print(result)
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return 1
    
    return 0


if __name__ == "__main__":
    exit(main())