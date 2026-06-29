# Practical UI — Complete Guideline Reference

Actionable rules from **Practical UI** (2nd Edition) by Adham Dannaway. Each guideline includes a brief rationale.

---

## 1. Fundamentals

### Minimise usability risks
Evaluate every design choice for who might struggle: low vision, motor impairments, cognitive disabilities, low computer literacy. Fix vague or unclear elements before usability testing. Aim for WCAG 2.1 AA.

**Common risks:** thin light-grey text, icons without labels, coloured headings mistaken for links, low-contrast UI components.

### Have a logical reason for every design detail
UI design is not decoration. Every element should improve usability. Articulate the *why* behind decisions — "that looks nice" is not constructive feedback.

### Minimise interaction cost
Sum of physical + mental effort (looking, scrolling, clicking, typing, remembering). Lower it everywhere.

- **Keep related actions close** — Fitts's Law: closer + larger targets = faster interaction. Min 48pt × 48pt targets.
- **Reduce distractions** — avoid animated banners, pop-ups, unnecessary visuals.
- **Minimise choice** — Hick's Law: fewer options = faster decisions. Highlight recommended/popular items.

**Example:** Replace quantity dropdowns with steppers; place "Add to cart" adjacent to quantity selector.

### Minimise cognitive load
Free mental resources for the user's task.

- Remove unnecessary styles, info, and decisions
- Break information into smaller related groups
- Use conventional, familiar patterns
- Maintain consistency (similar elements look and work similarly)
- Create clear visual hierarchy

**Example:** Break large forms into multi-step flows.

### Create a design system (3 steps)

1. **Predefined style options (tokens)**
   - Colour palette with named purposes (text strong/weak, stroke, fill, brand)
   - Typography scale (font size + line height pairs)
   - Spacing scale (4px grid: 8, 16, 24, 32, 48, 80pt)
   - 2 shadow levels (raised, overlay)
   - 3 border radii (8, 16, 32pt for small/medium/large)

2. **Reusable modules** — buttons, inputs, avatars → combined components → page templates

3. **Usage guidelines** — document when and how to use each token and component

### Ensure an interface is accessible
Good accessibility = great usability. Meet WCAG 2.1 AA. Design for keyboard, screen reader, and touch users. Don't rely on colour alone.

### Use common design patterns
Leverage conventions users already know (navigation placement, link styling, form patterns). Deviate only when testing shows improvement.

### Use the 80/20 rule to prioritise
Focus on the 20% of design knowledge that delivers 80% of results. Don't over-engineer edge cases early.

### Keep costs in mind
Balance ideal UX with development, maintenance, and performance costs. Simple, conventional solutions often win.

### Be consistent
Similar functionality → similar appearance and behaviour. Inconsistency increases cognitive load and errors.

### Clearly indicate interaction states
Show default, hover, focus, active, disabled, and error states. Never leave users guessing whether something is interactive.

---

## 2. Less is more

### Remove unnecessary information
Every element competes for attention. Remove repeated content, filler words, and info that doesn't serve the task.

### Remove unnecessary styles
Avoid decorative lines, colours, backgrounds, and animations that don't convey information. Trendy styles (glassmorphism, neumorphism) often harm hierarchy and contrast.

### Not all links need to be underlined
Cards, nav items, and tabs have other interactive cues — conventional blue underlined treatment can be omitted when context is clear. Remove link colour when it disrupts visual hierarchy.

### Use progressive disclosure
Reveal secondary info on demand. Reduces cognitive load despite adding interactions. Use descriptive link labels ("Benefits of a custom domain" not "Learn more").

### Don't confuse minimalism with simplicity
Minimal interfaces can be vague — unlabeled icons, hidden actions, subtle selected states. Simplification ≠ removal of critical details.

### Make sure important content is visible
People don't use what they can't see. Expose nav links and key actions. If content is off-screen, show partial edges for discoverability.

### Design for the smallest screen first
Restricted space forces prioritisation. Desktop-first leads to filling space with unnecessary info.

### Reduce choice to speed up decisions
1. **Remove** unnecessary options
2. **Group/categorise** choices
3. **Break into steps** (multi-step flows)
4. **Recommend** popular/default options

---

## 3. Colour

### Ensure sufficient contrast

**WCAG 2.1 AA:**
- Small text (≤18px): **4.5:1**
- Large text (≥24px regular or ≥18px bold): **3:1**
- UI components (inputs, buttons, icons): **3:1**

**APCA (preferred for personal projects; WCAG 3 draft):**
- 90: preferred body text (14px+)
- 75: minimum body (18px+)
- 60: other text (24px+ or 16px bold+)
- 45: large text (36px+ or 24px bold+) and UI elements
- 30: absolute minimum (placeholders, disabled text)
- 15: non-text elements

APCA handles dark mode and perceived brightness better than WCAG 2 ratios. For commercial compliance, meet WCAG 2; aim to pass both.

### Don't rely on colour alone to convey meaning
Add icons, borders, backgrounds, underlines, or labels for errors, links, status, and selection states. ~8% of men have colour vision deficiency.

### Use system colours to indicate status
Green = success, red = error/destructive, amber = warning, blue = info. Use consistently across the product.

### Use colour to define visual hierarchy
More important = higher contrast or brand colour. Less important = lower contrast (text weak, lighter strokes).

### Use black and white for a timeless aesthetic
Design spacing, size, layout, and hierarchy in greyscale first. Add colour purposefully.

### Add a tinge of colour to black and white
Pure black (#000) and pure white (#FFF) can feel harsh. Tint greys slightly (e.g. hue 220) for warmth and cohesion.

### Use 1 brand colour
One accent colour applied consistently. Multiple accent colours create noise and confusion.

### Apply the brand colour to interactive elements
Buttons, links, active states, focus rings — consistent colour teaches users what's clickable.

### Create a colour palette with rules
Name colours by purpose, not hex value:
- `text-strong`, `text-weak`
- `stroke-strong`, `stroke-weak`
- `fill`, `brand`
- `success`, `warning`, `error`

Define which colour applies to which element type.

### Use the HSB colour system
Adjust hue, saturation, brightness systematically when building palette variations.

### 5 colour variations is often all you need
Brand + 4 grey variations (strong text → weak text → stroke → fill) covers most UI needs.

### Create a dark colour palette
Don't invert light palette naively. Dark backgrounds need separate contrast tuning (APCA helps).

### Add depth using colour and shadows
Raised shadow for cards; overlay shadow for modals/dropdowns. Depth reinforces hierarchy.

### Consider using transparent colours
Transparent overlays maintain consistent prominence across different backgrounds.

### Name colours to keep them organised
Systematic naming ensures consistent application across designers and code.

### Adjust photo colour temperature to match palette
Photos with mismatched white balance clash with UI colours.

---

## 4. Layout and spacing

### Group related elements
Four methods (combine for clarity):
1. **Common region** — containers (cards, borders, backgrounds). Strongest cue; don't overuse.
2. **Proximity** — less space within groups, more between groups.
3. **Similarity** — same size, shape, colour for related items.
4. **Continuity** — align in continuous lines (lists, grids).

**Rule:** Similar appearance → similar function. Different function → different appearance.

### Create a clear visual hierarchy
Present information in order of importance using: **size, colour, contrast, spacing, position, depth**.

### Test visual hierarchy — Squint Test
Squint at the design. Can you still identify the most important elements? If not, strengthen hierarchy.

### Use depth to create visual hierarchy
Shadows and layering make elements feel closer (more important) or further (less important).

### Understand the box model
Every element: content → padding → border → margin. Control spacing deliberately.

### Design @1x using points (pt)
Use pt for consistent sizing across devices. 1pt ≈ 1px @1x.

### Create predefined spacing options
4px grid increments. Example scale: XS 8, S 16, M 24, L 32, XL 48, XXL 80pt.

### Space elements by relatedness
Closer spacing = stronger relationship. Inner spacing < outer spacing within a group.

### Be generous with white space
Whitespace reduces cognitive load and improves scannability. Don't fill every pixel.

### Align main layout to 12-column grid
Consistent grid improves alignment and predictability.

### Align text to improve readability
Left-align body text (F-pattern reading for LTR languages).

### Avoid multiple alignments
Too many alignment points create visual chaos. Stick to one or two.

### Keep related actions close
Place buttons near the content they affect. Reduces mouse movement and errors.

### Ensure your interface is unbreakable
Design for content overflow, long text, missing images, and edge cases. Use truncation, wrapping, and min/max constraints.

### Rule of Thirds for photos
Place focal points at grid intersections for balanced imagery.

---

## 5. Typography

### Use a single sans serif typeface
Most legible and neutral for UI. Avoid mixing multiple typefaces early on.

### Evoke emotion with a second typeface (headings only)
Optional display/serif for headings once confident. Keep body in sans serif.

### Use regular and bold font weights only
More weights = noise and inconsistency. Bold for headings; regular for body.

### Use a type scale
Multiply base size (16px) by scale factor. Common scales: 1.125 (Major Second) for dense apps; 1.200 (Minor Third) balanced; 1.333+ (Perfect Fourth) for marketing sites. Round to whole numbers; line heights divisible by 4.

Example (1.200 from 16px): 14, 16, 20, 24, 32, 40px.

### Make long body text bigger
≥ **18px** for articles and long-form content read at arm's length.

### Use ≥ 1.5 line height for body text
150–200% for paragraphs. Taller line height for longer lines, darker/heavier typefaces.

### Decrease line height as font size increases
Headings don't need 1.5 line height — use ~1.2–1.3 for large text.

### Ensure ideal line length
**40–80 characters** per line (including spaces).

### Left align text
Centred or justified text harms readability for body copy.

### Decrease letter spacing for large text
Display headings often need tighter tracking.

### Ensure text on photos is legible
Use scrims, overlays, or text shadows. Never rely on photo brightness alone.

### Avoid light grey and pure black text
Light grey fails contrast. Pure black (#000) is harsh — use tinted dark greys.

---

## 6. Copywriting

### Be concise
Remove filler words. Prefer short words. Keep sentences under **20 words**. Every word must earn its place.

### Use sentence case
Capitalise first word and proper nouns only. Not Title Case For Every Heading.

### Use plain and simple language
Avoid jargon, slang, and complex vocabulary. Write conversationally for broader comprehension.

### Front-load text
Put the most important information first for faster scanning.

### Use the inverted pyramid
Most important → supporting details → background info.

### Limit abbreviations and acronyms
Spell out on first use or avoid entirely in UI.

### Limit uppercase
ALL CAPS is hard to read (uniform rectangular word shapes). Reserve for tiny labels if needed.

### Break up content with descriptive headings and bullets
Headings must make sense out of context (screen reader users scan heading lists).

### Avoid "my" on form labels
"My email" → "Email". The form context already implies ownership.

### Use vocabulary consistently
Same concept = same word everywhere. Don't swap "Delete" and "Remove" arbitrarily.

### Use numerals for numbers
"3 items" not "three items" — faster to scan.

### Avoid full stops where possible
Headings, buttons, and labels rarely need periods.

### Ensure similar text length across similar elements
Consistent button/link lengths improve visual balance.

### Ensure text links describe their destination
"5 UI design eBooks" not "Click here". Links must make sense out of context.

### Write clear error messages
State what happened, why, and how to fix it. Never blame the user. Avoid "Oops", "Please", and robotic jargon. Use descriptive button labels in error dialogs.

---

## 7. Buttons

### Define 3 button weights

| Weight | Style | Use |
|--------|-------|-----|
| **Primary** | Filled brand colour, white text, rounded corners | Single most important action |
| **Secondary** | Outlined, brand-colour border + text, no fill | Alternative/supporting actions |
| **Tertiary** | Transparent, underlined brand-colour text | Least important / cancel / back |

Hierarchy must not depend on colour alone — use fill, border, and underline differences.

**Avoid:** light grey secondary buttons (look disabled), identical primary/secondary styles, insufficient contrast borders/fills.

### One primary button per view
Multiple primaries confuse hierarchy. Secondary/tertiary for alternatives.

### Try to avoid disabled buttons
They trap users who don't know why action is blocked. Enable button; validate on submit with clear errors.

### Left-align buttons (LTR)
Order: most important → least important (left to right). Reduces mouse travel; helps screen magnifier users.

### Ensure button text describes the action
**Verb + noun:** "Save post", "Start workout", "Delete account". Must make sense out of context.

### Sufficient target size
≥ **48pt × 48pt** per button. ≥ **8pt** gap between adjacent buttons.

### Balance icon and text pairs
Icon + label together; ensure icon doesn't replace descriptive text for primary actions.

### Add friction to destructive actions

| Severity | Pattern |
|----------|---------|
| Light | Confirmation dialog |
| Moderate | Red-highlighted warning text |
| Heavy | Red + checkbox must be checked before action |

Allow undo where feasible ("Restore message").

---

## 8. Forms

### Stack forms in single column
Maintains downward momentum; lowest interaction cost; screen magnifier friendly. Avoid multi-column except short related pairs (expiry + CVC).

### Stack labels on top of inputs
Never left-aligned labels (zig-zag eye movement, jagged edges). Keep label close to field (4pt gap, not 32pt).

### Minimise form fields
Only ask for essential information. Fewer fields = higher completion, fewer errors, less dev cost.

### Mark optional fields
Add "(optional)" to optional labels. Better: eliminate optional fields via opt-in checkboxes (progressive disclosure).

### Mark both required and optional fields
Don't make users guess. Use "(optional)" or "Required fields marked with *" — pick one system and be consistent.

### Match field width to intended input
Width sets expectations (postcode narrow, address wide).

### Stick with conventional field styles
Standard bordered inputs outperform novel styles. Familiar = faster completion.

### Display hints above form fields
Helper text goes above the input, not below (avoids being missed).

### Don't use placeholder as label
Placeholders disappear on focus; fail accessibility. Always visible labels required. Placeholders OK only as examples with proper labels.

### Labels close to fields
Related elements spaced closer together than unrelated ones.

### Prefer radio buttons over dropdowns (≤ ~10 options)
Radios: one click, always visible, easy to compare. Dropdowns: high interaction cost, hidden options, easy to skip accidentally.

### Autocomplete for long lists
Country, product search — type-ahead with bold differentiation. Keep suggestions ≤ ~10.

### Steppers for small numeric changes
Replace quantity/guest dropdowns. Horizontal +/- buttons, 48pt targets, adequate spacing.

### Checkbox or toggle for 2 options
Lower cost than dropdown. Toggle for immediate effect; checkbox when submit required.

### Positive phrasing for checkboxes
"Receive news and offers" not "Don't send me spam".

### Break long forms into steps
Reduces cognitive load and errors. Show progress indicator.

### Group related fields under headings
Descriptive section headings aid scanning and completion.

### High-contrast form field borders
Border ≥ 3:1 against background (WCAG UI component requirement).

### Choose validation approach
Validate on submit (preferred) or inline on blur — be consistent. Clear, helpful error messages at field level.

---

## Design system starter values (from book examples)

**Spacing:** XS 8pt · S 16pt · M 24pt · L 32pt · XL 48pt · XXL 80pt

**Type scale (1.200):** H1 40/48 · H2 32/40 · H3 24/32 · H4 20/28 · Small 16/24 · Tiny 14/20

**Shadows:** Raised (cards) · Overlay (modals/menus)

**Radius:** Small 8pt · Medium 16pt · Large 32pt

**Colour naming:** text-strong · text-weak · stroke-strong · stroke-weak · fill · brand
