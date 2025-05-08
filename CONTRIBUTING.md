# Contributing to My SME Portfolio

Thank you for your interest in contributing! Please follow these guidelines to keep our codebase clean, consistent, and high quality.

## Coding Style

- Use **TypeScript** for all components and logic.
- Use functional React components and hooks.
- Prefer named exports for components.
- Use Tailwind CSS utility classes for styling.
- Keep components small and focused.

## UI/UX

- Use [shadcn/ui](https://ui.shadcn.com/) for shared UI components (e.g., Badge, Card, Button).
- Use [Lucide React](https://lucide.dev/) for icons.
- All user-facing text should be localizable.
- Ensure mobile responsiveness and accessibility (e.g., alt text on images, aria-labels on buttons).

## Git & Workflow

- Use feature branches for new features or fixes.
- Write clear, descriptive commit messages.
- Pull requests must be reviewed before merging to `main`.
- Keep `main` branch deployable at all times.

## Documentation

- Document any non-obvious logic in code comments.
- Update README with any new setup or usage instructions.

## Testing

- Manual testing required for all UI changes.
- Automated tests are encouraged (add if/when a test framework is in place).

## Tooling

- Code must pass **ESLint** and **Prettier** checks before commit.
- Husky will run these checks automatically (see below).

---

# Local Development Rules (Enforced)

- **Pre-commit:** Lint and format your code (`eslint` and `prettier`) before committing.
- **Pre-push:** (Optional) Run tests before push, if/when tests are set up.
- **No direct pushes to main:** Use PRs for all changes to `main`.

---

# Questions or Suggestions?

Open an issue or start a discussion!
