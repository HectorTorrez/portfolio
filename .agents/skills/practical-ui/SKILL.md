---
name: practical-ui
description: Apply logic-driven UI design guidelines from Adham Dannaway's Practical UI (2nd Edition). Use when designing interfaces, reviewing UI/UX, building components, creating design systems, improving accessibility, or when the user mentions Practical UI, logic-driven design, or wants intuitive accessible interfaces.
---

# Practical UI

Guidelines distilled from **Practical UI** (2nd Edition) by Adham Dannaway — a logic-driven approach to intuitive, accessible, and beautiful interfaces for web and mobile apps.

These are **guidelines, not strict rules**. Apply them in most cases; adapt when context demands.

## Core philosophy

1. **Every design detail needs a logical reason** — not just "it looks nice."
2. **Minimise usability risk** — cater to diverse users (low vision, motor impairments, low literacy).
3. **Minimise interaction cost and cognitive load** — fewer clicks, scrolls, decisions, and distractions.
4. **Use a design system** — predefined tokens for colour, typography, spacing, shadows, and radius.
5. **Aim for WCAG 2.1 AA** minimum; consider APCA for better perceptual contrast (especially dark mode).

## When to use this skill

| Task | Approach |
|------|----------|
| **Design new UI** | Follow the workflow below; apply relevant chapter guidelines |
| **Review existing UI** | Run the audit checklist; cite violated guidelines |
| **Build/refactor components** | Match design system tokens; check buttons, forms, typography |
| **Improve accessibility** | Prioritise contrast, labels, non-colour cues, target sizes |

## Design workflow

1. **Define the task** — What is the user trying to achieve? What is the primary action?
2. **Simplify first (Less is more)** — Remove unnecessary info, styles, and choices.
3. **Structure (Layout & spacing)** — Group related elements; establish visual hierarchy.
4. **Typography & copy** — Single sans serif; sentence case; plain language; descriptive labels.
5. **Colour purposefully** — Brand colour for interactive elements; sufficient contrast.
6. **Buttons & forms last** — Clear hierarchy; single column; minimal fields.

## Quick reference — key numbers

| Property | Guideline |
|----------|-----------|
| Contrast (WCAG 2.1 AA) | 4.5:1 small text; 3:1 large text & UI components |
| Body text size | ≥ 18px for long reading |
| Line height (body) | ≥ 1.5 (150%); decrease as font size increases |
| Line length | 40–80 characters per line |
| Touch targets | ≥ 48pt × 48pt; ≥ 8pt between adjacent buttons |
| Spacing scale | 4px grid; predefined options (e.g. 8, 16, 24, 32, 48, 80pt) |
| Border radius | 3 options: 8pt (small), 16pt (medium), 32pt (large) |
| Button weights | Primary, secondary, tertiary — hierarchy not colour alone |
| Form layout | Single column; labels stacked above inputs |
| Dropdown threshold | ≤ ~10 options → prefer radio buttons |

## Audit output format

When reviewing UI, report findings as:

```
[Chapter] Guideline — file:line or element
Issue: what violates the guideline
Fix: specific change aligned with Practical UI
```

Severity: **Critical** (accessibility/blocker) · **Important** (usability) · **Suggestion** (polish)

## Chapter summaries

### 1. Fundamentals
- Minimise usability risks before testing (low contrast, unlabeled icons, ambiguous colour).
- Have a rationale for every design decision.
- Reduce interaction cost: keep related actions close (Fitts's Law), reduce distractions, limit choices (Hick's Law).
- Reduce cognitive load: remove clutter, break into groups, use familiar patterns, maintain consistency, clear hierarchy.
- Build a design system: colour palette, typography scale, spacing tokens, components, usage guidelines.
- Ensure accessibility (WCAG 2.1 AA); use common patterns; apply 80/20 rule; indicate interaction states clearly.

### 2. Less is more
- Remove unnecessary information and decorative styles.
- Use progressive disclosure for secondary content.
- Minimal ≠ simple — don't hide critical labels or actions.
- Keep important content visible or discoverable.
- Design mobile-first; reduce/group/recommend choices.

### 3. Colour
- Sufficient contrast; don't rely on colour alone for meaning.
- System colours for status (success, warning, error).
- One brand colour applied consistently to interactive elements.
- Build a rule-governed palette (HSB system; ~5 variations often enough).
- Consider transparent colours and dark mode palettes.

### 4. Layout and spacing
- Group via: common region (containers), proximity, similarity, continuity (alignment).
- Visual hierarchy via size, colour, contrast, spacing, position, depth.
- Squint test to verify hierarchy.
- 8pt spacing scale; space by relatedness; generous whitespace.
- 12-column grid; left-align text; avoid multiple alignments; keep related actions close.

### 5. Typography
- Single sans serif typeface (regular + bold only); optional second typeface for headings.
- Type scale (e.g. 1.200 Minor Third from 16px base).
- Left-align text; ideal line length; avoid light grey and pure black text.

### 6. Copywriting
- Be concise (< 20 words/sentence); sentence case; plain language.
- Front-load important info; inverted pyramid; descriptive headings.
- Limit uppercase, abbreviations, jargon; consistent vocabulary.
- Descriptive link text (never "click here"); clear error messages.

### 7. Buttons
- 3 weights: primary (filled brand), secondary (outlined), tertiary (underlined text).
- One primary button per view; avoid disabled buttons (validate on submit).
- Left-align buttons (most → least important); verb + noun labels; 48pt targets.
- Add friction to destructive actions (confirm → red highlight → checkbox for severe).

### 8. Forms
- Single column; labels on top; minimal fields; mark required/optional explicitly.
- Match field width to expected input; conventional field styles.
- Labels always visible (not placeholder-only); hints above fields.
- Prefer radio (≤10 options), autocomplete (long lists), steppers (small numbers).
- Break long forms into steps; high-contrast borders; validate on submit.

## Additional resources

- Full guideline index with actionable rules: [guidelines.md](guidelines.md)
- Book: [practical-ui.com](https://www.practical-ui.com) by Adham Dannaway (2nd Edition, 2024)
