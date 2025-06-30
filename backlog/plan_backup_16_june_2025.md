# Project Dialog Optimization Plan

## Notes

- Fixed React hook order error in `ProjectDialog` by moving all hooks to the top and combining early‐return conditions.
- Observed that every `ProjectCard` rendered its own `ProjectDialog`, causing repeated unnecessary renders and state duplication.
- Implemented lifting dialog state to `ProjectsSection`; now a single shared `ProjectDialog` instance is rendered.
- Updated `ProjectCard` to use `onOpenDialog` callback instead of internal dialog state.
- Optimized `ProjectCard` with `React.memo` and custom prop comparison to reduce unnecessary re-renders.
- Next improvement: test dialog interactions and clean up.
- Dialog still not opening; `ProjectDialog` receives undefined project. Need to debug `ProjectCard` click handling.
- Simplified `ProjectCard` `handleCardInteraction` to always invoke `onOpenDialog` and removed stale prototype‐link logic.
- Removed duplicate `aria-expanded` attribute to fix JSX lint error.
- Added null checks and stronger type safety in `ProjectDialog`; resolved syntax issues in handler.
- Dialog should open correctly now; remaining TypeScript lint errors need addressing.
- Enhanced type safety: refactored `getPrototypeUrl` & `handleExternalLink` with explicit null checks and parameter typing.
- Imported `useCallback` and refactored functions in `ProjectDialog` to resolve missing import and remaining TS errors.
- Console logs still show `ProjectDialog` rendering with `project: undefined`; `selectedProject` likely not being set on click.
- Accessibility audit reveals multiple issues (missing button text, heading hierarchy, nested interactive controls, missing alt text).
- Confirmed `ProjectCard` logs "Opening dialog for project", indicating `onOpenDialog` executes; issue likely a stale callback passed via `useMemo` of `projectCards` excluding `handleOpenDialog`.
- Added `handleOpenDialog` to `projectCards` dependency array to remove stale closure; `selectedProject` should update.
- Enhanced click handling in `ProjectCard` to avoid false positive interactive element detection and added capture‐phase click listener.
- Detected new JSX duplicate attribute lint in `ProjectCard` (line 165) to fix.
- User decided to remove modal dialog and instead display all projects stacked vertically, following design inspiration from justux.framer.website. Dialog-related optimizations are now deprioritized.
- Resolved duplicate JSX attribute lint in `ProjectCard` and other TypeScript errors in `ProjectsSection` (duplicate Locale, missing ids).
- Refactored `ProjectsSection` to vertical list of project articles, removed dialog state/handlers, added new responsive layout with Cards.
- Dialog component will be simplified and retained only for live previews.
- Created separate `LivePreviewDialog` component for live iframe previews; ProjectsSection integration started.
- User requested improving link color contrast for better accessibility.
- Created reusable `Link` component and integrated it into `ProjectsSection`, standardizing link styles and satisfying contrast requirements.
- Added shared `config/component-styles.ts` with common `linkVariants` (and draft `buttonVariants`); file name subject to review.
- Began migrating `Button` to shared variants; current compilation errors need fixing.
- Completed migration of `buttonVariants` to shared `component-styles.ts`, removing circular dependency.
- Fixed compilation errors in `Button` component; imports cleaned and duplicates removed.
- Added `buttonVariants` definitions to shared styles file.
- Resolved TypeScript lint errors in `ProjectDialog` (event typing) and `Nav` (event typing and language handler).
- All TypeScript errors cleared; project compiles successfully.
- Next focus: use new `Link` (and shared `buttonVariants`) across remaining components.
- Moved `buttonVariants` back into `Button.tsx` to remove circular dependency; removed them from `component-styles.ts`.
- Added `LivePreviewDialog` and committed new `Link` component; application compiles and runs on port 3002.
- Pre-commit hook failed due to conditional hook usage in `ProjectDialog`; early-return logic adjusted, need to re-commit.
- Several Playwright report and test-result files are untracked; decide whether to add to `.gitignore` or commit.
- Replaced raw <img> with Next.js Image in `ProjectsSection` and resolved related TypeScript & lint errors.
- Added test artifact directories and temp file patterns to `.gitignore` to keep repo clean.
- Adjusted `ProjectDialog` again: moved early return below all hooks, but pre-commit still reports two conditional `useCallback` hooks; further refactor required.
- Fully resolved React hooks order issues in `ProjectDialog`; pre-commit now passes and commit succeeded.
- Committed `playwright.config.ts` for Playwright tests; only markdown article changes remain.
- Commit succeeded; decide on remaining untracked files and updated markdown article.
- Added `docs/components/Link.md` with comprehensive Link component documentation.
- Updated `README.md` with Documentation section linking to component docs.
- Pushed `accessibility-fixes-backup` branch to remote GitHub.
- Pushed branch to remote GitHub.
- Open Pull Request for code review.
- Address feedback and merge changes to main.

## Task List

- [x] Investigate "Rendered more hooks than during the previous render" error.
- [x] Refactor `ProjectDialog` to ensure consistent hook order and remove conditional hook calls.
- [x] Analyze `ProjectCard` / `ProjectsSection` for redundant dialog renders.
- [x] Lift dialog state (`selectedProject`, `isDialogOpen`) to `ProjectsSection`.
  - [x] Add `selectedProject` & `isDialogOpen` state in `ProjectsSection`.
  - [x] Pass an `openDialog(project)` callback to each `ProjectCard`.
- [x] Update `ProjectCard` to remove internal dialog state and call the provided callback.
- [x] Render a single `ProjectDialog` within `ProjectsSection` bound to the lifted state.
- [x] Optimize `ProjectCard` with `React.memo` and custom comparison.
- [x] Ensure `handleOpenDialog` maintains referential equality to prevent needless re-renders.
- [x] Include `handleOpenDialog` in `projectCards` dependency array or refactor rendering to avoid stale closure.
- [ ] Ensure history URL updates still occur on open/close.
- [ ] Test dialog open/close interactions and regression.
- [ ] Debug ProjectCard click handling (selectedProject remains null).
  - [x] Simplify `handleCardInteraction` to open dialog unconditionally.
  - [ ] Verify dialog opens and `selectedProject` is set.
  - [ ] Trace `handleOpenDialog` and click propagation to ensure `selectedProject` updates.
- [x] Fix remaining TypeScript errors and lint issues in `ProjectDialog` and `ProjectCard`.
- [ ] Address accessibility issues flagged by audit (discernible text, heading levels, nested controls, SVG alt text).
- [ ] Clean up debug console logs and unused code after verification.
- [ ] Remove redundant legacy `ProjectCard` implementation after verifying new file integration.
- [x] Resolve duplicate JSX attribute lint in `ProjectCard` (line 165).
- [x] Refactor `ProjectsSection` to render full project details in a vertical list.
- [x] Adapt styling/layout to match reference design (justux).
- [x] Create `LivePreviewDialog` component to embed live preview iframe.
- [ ] Integrate `LivePreviewDialog` into `ProjectsSection` with "Live Preview" buttons.
- [x] Improve link contrast to meet accessibility guidelines.
- [ ] Replace direct anchor tags with `Link` component across remaining components.
- [ ] Decide on final name/location for shared variant styles file and update imports.
- [x] Complete migration of `Button` to shared `buttonVariants` and fix compile errors.
- [ ] Simplify `ProjectDialog` to embed live preview iframe only.
- [ ] Add "Live preview" trigger/button for each project that opens the dialog.
- [ ] Re-audit accessibility for the new layout.
- [x] Fix React Hook lint errors in `ProjectDialog` to satisfy pre-commit.
- [x] Review untracked Playwright/test artefacts; add to `.gitignore` or commit (committed `playwright.config.ts`).
- [x] Replace <img> tags with Next.js `Image` in `ProjectsSection` and resolve lint errors.
- [x] Decide whether to commit or discard changes in `ai_coding_tools_comparison.md`.
- [x] Document `Link` component usage and continue replacing raw `<a>` tags.
- [x] Add Documentation section to README linking to component docs.
- [x] Push branch to remote GitHub.
- [ ] Open Pull Request for code review.
- [ ] Address feedback and merge changes to main.

## Current Goal

Open PR and request review.
