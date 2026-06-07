# Goal: Implement PrimeMOS.com theme and mobile‑optimized navigation bar

## User Review Required
> [!IMPORTANT]
> The user requested removal of the dark/light theme toggle, a consistent PrimeMOS color scheme (warm yellow/gold), and a compact header/navbar with hover effects for mobile. This plan outlines the required file modifications.

## Open Questions
> [!WARNING]
> - None at this time; the design direction is clear.

## Proposed Changes
---
### HTML
- **[MODIFY]** `index.html`
  - Remove the `<button id="themeToggle" class="theme-toggle" ...>` element.
  - Ensure the footer logo link points to `https://www.primemos.com` (already done).
  - Add a `data-theme="primemos"` attribute on `<body>` to indicate the fixed theme.

### CSS (`style.css`)
- **[MODIFY]** `style.css`
  - Update `:root` color variables to PrimeMOS palette (gold/yellow). Replace `--accent-emerald`, `--accent-cyan`, etc., with appropriate shades (e.g., `--primary-gold: #f59e0b`).
  - Remove the `body.light-mode` block entirely (no light mode toggle).
  - Adjust navbar padding and font sizes for a more compact mobile header.
  - Add hover styles for navbar links on mobile (use media query `@media (max-width: 768px)` with `:hover` support).
  - Remove `.theme-toggle` related styles.
  - Ensure background colors use the new gold‑based theme.

### JavaScript (`script.js`)
- **[MODIFY]** `script.js`
  - Delete the entire “Dark/Light Mode Theme Toggle” block (lines 1‑30).
  - Remove any references to `themeToggle` and `themeIcon`.
  - Ensure the mobile menu toggle logic remains functional.
  - Add a short comment noting the theme is fixed.

---
## Verification Plan
### Automated Tests
- Run the local dev server (`npm run dev` if applicable) and manually verify:
  1. No theme toggle button appears.
  2. Page colors match the PrimeMOS gold palette.
  3. Navbar remains sticky, compact, and shows hover effects on desktop and mobile.
  4. Mobile hamburger menu functions and the navbar height is reduced.
  5. Console shows no errors.

### Manual Verification
- Open the site on a mobile device or emulator to confirm layout fits small screens.
- Click the footer logo to ensure it navigates to `https://www.primemos.com`.
- Verify that the theme does not switch when reloading the page.

*End of implementation plan.*
