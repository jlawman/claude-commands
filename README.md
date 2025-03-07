# Claude Commands Playground

This project serves as a development playground for testing and using Claude Commands. The included site provides a simple UI for experimenting with the different Claude command implementations.

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


## Adding the commands to Claude Code
In order to run the commands you simply need the .claude folder in your project (to make them available as project specific commands) or at the root directory (to make them available as personal commands across all claude code projects).


## Running the playground website
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

Once you are in the coding agent using the add api route with a custom parameter (openai in this example):

```bash
/frontend-add-an-API-and-sample-page openai
```



## Project Structure

- `.claude/commands/`: Contains all the Claude command definitions
- `src/app/`: A sample playground next js page to test the commands