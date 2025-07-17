# AI Job Agent Architecture

## System Architecture Diagram

```mermaid
graph TB
    subgraph "User Interfaces"
        CLI[Command Line Interface<br/>main.py]
        WEB[Web Interface<br/>streamlit_app.py]
    end
    
    subgraph "Core System"
        CREW[Job Hunting Crew<br/>job_crew.py]
        CONFIG[Configuration<br/>config.py]
    end
    
    subgraph "AI Agents"
        SCRAPER[Job Scraper Agent<br/>job_scraper_agent.py]
        FILTER[Job Filter Agent<br/>job_filter_agent.py]
        FORMATTER[Job Formatter Agent<br/>job_formatter_agent.py]
    end
    
    subgraph "Tasks"
        SEARCH_TASK[Job Search Task<br/>job_tasks.py]
        FILTER_TASK[Job Filter Task<br/>job_tasks.py]
        FORMAT_TASK[Job Format Task<br/>job_tasks.py]
    end
    
    subgraph "Tools & APIs"
        SERPAPI[SerpAPI Tool<br/>serpapi_tool.py]
        OPENAI[OpenAI API]
        GOOGLE[Google Jobs API<br/>via SerpAPI]
    end
    
    subgraph "External Services"
        SERP_SERVICE[SerpAPI Service]
        OPENAI_SERVICE[OpenAI Service]
    end
    
    %% User Interface Connections
    CLI --> CREW
    WEB --> CREW
    
    %% Core System Connections
    CREW --> CONFIG
    CREW --> SCRAPER
    CREW --> FILTER
    CREW --> FORMATTER
    
    %% Agent to Task Connections
    SCRAPER --> SEARCH_TASK
    FILTER --> FILTER_TASK
    FORMATTER --> FORMAT_TASK
    
    %% Task Dependencies
    SEARCH_TASK --> FILTER_TASK
    FILTER_TASK --> FORMAT_TASK
    
    %% Tool Connections
    SEARCH_TASK --> SERPAPI
    SERPAPI --> GOOGLE
    
    %% External API Connections
    SCRAPER --> OPENAI
    FILTER --> OPENAI
    FORMATTER --> OPENAI
    SERPAPI --> SERP_SERVICE
    OPENAI --> OPENAI_SERVICE
    GOOGLE --> SERP_SERVICE
    
    %% Styling
    classDef userInterface fill:#e1f5fe
    classDef core fill:#f3e5f5
    classDef agent fill:#e8f5e8
    classDef task fill:#fff3e0
    classDef tool fill:#fce4ec
    classDef external fill:#f1f8e9
    
    class CLI,WEB userInterface
    class CREW,CONFIG core
    class SCRAPER,FILTER,FORMATTER agent
    class SEARCH_TASK,FILTER_TASK,FORMAT_TASK task
    class SERPAPI,OPENAI,GOOGLE tool
    class SERP_SERVICE,OPENAI_SERVICE external
```

## Component Overview

### User Interfaces
- **Command Line Interface (main.py)**: CLI for automated job searching with command-line arguments
- **Web Interface (streamlit_app.py)**: Interactive web application for user-friendly job searching

### Core System
- **Job Hunting Crew (job_crew.py)**: Orchestrates the entire job search workflow using CrewAI
- **Configuration (config.py)**: Manages API keys and system configuration

### AI Agents
- **Job Scraper Agent**: Searches for job listings using SerpAPI and Google Jobs
- **Job Filter Agent**: Analyzes and filters jobs based on user preferences
- **Job Formatter Agent**: Creates professional summaries and recommendations

### Tasks
- **Job Search Task**: Handles the job scraping workflow
- **Job Filter Task**: Manages job filtering logic
- **Job Format Task**: Formats final output for users

### Tools & APIs
- **SerpAPI Tool**: Custom tool for interacting with SerpAPI
- **OpenAI API**: Provides AI capabilities for all agents
- **Google Jobs API**: Source of job listings (accessed via SerpAPI)

## Data Flow

1. **Input**: User provides job query, location, and preferences
2. **Scraping**: Job Scraper Agent searches for jobs using SerpAPI
3. **Filtering**: Job Filter Agent analyzes jobs against user preferences
4. **Formatting**: Job Formatter Agent creates final report
5. **Output**: Formatted job recommendations delivered to user

## Key Features

- **Multi-Agent Collaboration**: Three specialized agents working in sequence
- **Intelligent Filtering**: AI-powered job matching based on preferences
- **Dual Interface**: Both CLI and web interfaces available
- **Real-time Processing**: Live status updates during job search
- **Professional Output**: Structured, actionable job reports