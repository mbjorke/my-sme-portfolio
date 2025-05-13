# UnoCSS Removal & Gradient Migration Plan

## Objective

Safely remove UnoCSS from the project and migrate all gradients to Tailwind CSS (including advanced gradients using arbitrary values and oklch color space), ensuring no visual regressions.

---

## Step-by-Step Plan

### 1. Remove UnoCSS Configuration & Dependencies

- [x] Delete `uno.config.ts`.
- [x] Remove UnoCSS from `package.json` dependencies:
  - `pnpm remove unocss` or `npm uninstall unocss`
- [x] Remove any UnoCSS-related scripts from `package.json` or your build process.

### 2. Audit & Replace UnoCSS Classes

- [ ] Search for UnoCSS-specific classes or attributes:
  - `bg-gradient-to-*`, `from-*`, `via-*`, `to-*` (if any differ from Tailwind)
  - Any `[un-*]` attributes or UnoCSS-only syntax
- [ ] Replace with Tailwind equivalents or arbitrary value gradients, e.g.:
  - `bg-[linear-gradient(to_right_in_oklch,#7ed6df,#16a085,#1de9b6)]`

### 3. Test All Gradients

- [x] Review all pages/components:
  - Ensure text, border, and background gradients render as intended
  - Confirm no missing styles or build errors

### 4. Purge Unused CSS (Optional)

- [x] Run Tailwind’s purge/content scan to remove unused CSS classes

---

## Rollback Plan

- Restore `uno.config.ts` from version control
- Reinstall UnoCSS: `pnpm add -D unocss` or `npm install --save-dev unocss`
- Revert any class changes as needed

## Notes

- Use Tailwind’s arbitrary value syntax for advanced gradients and color spaces (e.g., oklch) to match UnoCSS output.
- Test in multiple browsers for oklch support if possible.

---

**Prepared: 2025-05-12**
