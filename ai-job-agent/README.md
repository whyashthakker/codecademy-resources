# 🎯 AI Job Hunting Agent

An intelligent job search assistant powered by CrewAI that helps you find, filter, and format job opportunities based on your preferences.

## Features

- **Multi-Agent System**: Three specialized AI agents working together
  - **Job Scraper**: Searches job listings using SerpAPI
  - **Job Filter**: Analyzes and filters jobs based on your preferences
  - **Job Formatter**: Creates professional summaries and recommendations

- **Intelligent Filtering**: Match jobs based on:
  - Skills and experience level
  - Salary requirements
  - Work arrangement (remote, hybrid, on-site)
  - Company size preferences
  - Location preferences

- **User-Friendly Interface**: 
  - Streamlit web interface for easy interaction
  - Command-line interface for automation
  - Real-time status updates and progress tracking

## Setup

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the project root:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   SERPAPI_API_KEY=your_serpapi_api_key_here
   ```

3. **Get API Keys**:
   - OpenAI API Key: Get from [OpenAI Platform](https://platform.openai.com/api-keys)
   - SerpAPI Key: Get from [SerpAPI](https://serpapi.com/manage-api-key)

## Usage

### Web Interface (Recommended)

Launch the Streamlit app:
```bash
streamlit run streamlit_app.py
```

Then open your browser to `http://localhost:8501`

### Command Line Interface

```bash
python main.py --job-query "Software Engineer" --location "San Francisco" --num-results 15
```

**Command Line Options**:
- `--job-query`: Job title or keywords (required)
- `--location`: Location to search (optional)
- `--num-results`: Number of results (default: 10)
- `--experience`: Experience level preference
- `--work-arrangement`: Work arrangement preference
- `--salary-range`: Salary range preference
- `--skills`: Required skills (comma-separated)
- `--company-size`: Company size preference

## Project Structure

```
ai-job-agent/
├── agents/                 # AI agent definitions
│   ├── job_scraper_agent.py
│   ├── job_filter_agent.py
│   └── job_formatter_agent.py
├── crew/                   # CrewAI orchestration
│   └── job_crew.py
├── tasks/                  # Task definitions
│   └── job_tasks.py
├── tools/                  # Custom tools
│   └── serpapi_tool.py
├── config.py              # Configuration management
├── main.py                # CLI interface
├── streamlit_app.py       # Web interface
└── requirements.txt       # Dependencies
```

## How It Works

1. **Job Scraping**: The scraper agent uses SerpAPI to search Google Jobs for relevant positions
2. **Intelligent Filtering**: The filter agent analyzes job descriptions and matches them against your preferences
3. **Professional Formatting**: The formatter agent creates clear, actionable job reports with recommendations
4. **Sequential Processing**: CrewAI orchestrates the agents to work together in a structured workflow

## Example Output

The AI generates comprehensive reports including:
- Executive summary of findings
- Top job recommendations with explanations
- Key highlights for each position
- Skill match analysis
- Next steps and application guidance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.