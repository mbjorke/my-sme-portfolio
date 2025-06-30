# Demo Flow Plan (Backup - 2025-06-25)

## Notes

- AI must explicitly notify the user in chat when a requested action deviates from the demo plan and may affect the timeline.
- User wants a 20-minute live demo showing dev workflow.
- Demo should include Husky, autotesting, breaking/fixing accessibility, local dev, and prod deploy.
- User suggested adding a new multi-choice field to the contact form and database as a demo task.

## Demo Flow

### 1. Introduction (2 min)

- Show the current working contact form
- Explain the task: "Let's add a multi-choice field to track how users found us"

### 2. Planning Phase (3 min)

- Analyze the current codebase structure
- Identify files that need modification
- Plan the implementation steps

### 3. Implementation (8 min)

- Add the new field to the form state and types
- Update the form UI with the select input
- Add validation and error handling
- Update translations for multiple languages

### 4. Testing (3 min)

- Test the form submission
- Verify validation works
- Check responsive behavior

### 5. Cleanup (2 min)

- Revert changes to prepare for the next demo
- Verify the code is back to its original state

### 6. Q&A (2 min)

- Answer any questions about the implementation
- Discuss potential improvements or alternatives
