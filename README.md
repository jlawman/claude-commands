# Claude Commands Playground

This project serves as a development playground for testing and using Claude Commands. The site itself is a Next.js application that provides a UI for experimenting with different Claude command implementations.

## Project Overview

- **Purpose**: Create a sandbox environment for testing Claude commands
- **Structure**: Next.js application with various pages to modify using Claude commands
- **Focus**: The website itself is secondary - the primary focus is the Claude commands in `.claude/commands/`

## Claude Commands

The following commands are available:

- `add-or-update-readme`: Updates README documentation. Pass in a focus as an argument to direct the generation.
- `update-readme-based-on-diff`: Updates README based on git diffs
- `code-review`: Performs code review on specified files
- `frontend-add-an-API-and-sample-page`: Adds API endpoints and sample pages
- `frontend-spruce-up-page`: Improves UI/UX of a page
- `security-scanner`: Scans code for security issues
- `make-sure-it-builds`: Ensures the application builds successfully
- `test-generator`: Generates tests

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the playground


## Running Commands

To run a Claude command, open up Claude Code and use the following syntax:

```bash
/[command-name] [args]
```

**Example 1:**
```bash
claude 
```

Once you are in the coding agent:

```bash
/frontend-spruce-up-page
```

**Example 2:**
```bash
claude 
```

Once you are in the coding agent:

```bash
/frontend-add-an-API-and-sample-page openai
```



## Project Structure

- `.claude/commands/`: Contains all the Claude command definitions
- `src/app/`: A sample playground next js page to test the commands