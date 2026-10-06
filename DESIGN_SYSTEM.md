# Notify Design System Specification

> **Focus and reminder app for forgetful, easily overwhelmed people.**

---

## 1. Style & Philosophy
- **Vibe:** Modern, minimalist, calm, reassuring, and shame-free. Never loud, noisy, or cluttered.
- **Visuals:** Soft gradients, subtle glows, soft shadows, and generous white space.
- **Corners:** Soft rounded corners (12px buttons, 16px cards, fully rounded pills).
- **Focus Rule:** One to three main actions per screen. Use only **one** bright primary blue accent per screen.

---

## 2. Themes & Modes
- Supports **Light Mode** and **Dark Mode**.
- **Dark Mode is the default** to match the app logo and deep navy aesthetic.

---

## 3. Color Tokens

### Light Mode (`lightColors`)
| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `bg` | `#FAF8F5` | Warm off-white page background |
| `surface` | `#FFFFFF` | Cards & surface containers |
| `border` | `#E5E1DA` | Card & container borders |
| `text` | `#1F2933` | Primary text |
| `textSecondary` | `#5B6670` | Secondary & subheader text |
| `primary` | `#2B6BFF` | Main buttons, links, focus rings |
| `primaryPressed` | `#1D54D6` | Primary button pressed state |
| `primaryTint` | `#E4ECFF` | Hint boxes & soft highlights |
| `onPrimary` | `#FFFFFF` | Text/icons on primary background |
| `pausedText` | `#7A6BC4` | Paused/missed text specific to light background |

### Dark Mode (`darkColors`) — *Default Theme*
| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `bg` | `#0A0E1A` | Deep navy page background |
| `surface` | `#131A2B` | Dark surface containers & cards |
| `border` | `#1F2A44` | Dark container borders |
| `text` | `#EEF2FF` | Primary text |
| `textSecondary` | `#9AA7C7` | Secondary text |
| `primary` | `#2B6BFF` | Main buttons, links, focus rings |
| `primaryPressed` | `#1D54D6` | Primary button pressed state |
| `primaryTint` | `#14234A` | Dark hint boxes & soft highlights |
| `highlight` | `#4DB2FF` | Small labels & active accents |
| `hintText` | `#9CC4FF` | Accent text inside hint boxes |
| `onPrimary` | `#FFFFFF` | Text/icons on primary background |

### Shared Status Colors
*Crucial Rule: **Never** use red for missed or paused tasks. Red reads as failure and triggers shame.*

| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `done` | `#6BBF8E` | Completed tasks, progress indicators |
| `paused` | `#B8A9E8` | Paused or missed tasks |
| `like` | `#FF6B8A` | Hearts, kudos, positive encouragement |
| `milestone` | `#F7C948` | Big wins, achievements |

### Notification Escalation Levels
| Level | Color | Icon | Description |
| :--- | :--- | :--- | :--- |
| **Level 1** | `#5B8DEF` | Bell | Gentle nudge |
| **Level 2** | `#F5A524` | Bell-ringing | Still waiting |
| **Level 3** | `#F26B5B` | Alert | Needs you now |

*Accessibility Requirement: Notification levels must differ by icon, sound, and visual pattern — not color alone.*

---

## 4. Typography
- **Font Family:** System default sans-serif or Inter.
- **Font Weights:** Strictly two weights — `400` (Regular) and `500` (Medium).
- **Casing:** Sentence case everywhere. **No ALL CAPS**.
- **Line Height:** 1.5 - 1.7 relative multiplier.

### Size Scale
- **Body:** `16px` (Line height: `24px`)
- **Small:** `13px` (Line height: `20px`)
- **Caption:** `12px` (Line height: `18px`)
- **Heading:** `20px` (Line height: `30px`)
- **Heading Large:** `22px` (Line height: `33px`)

---

## 5. Shape, Spacing & Layout
- **Spacing Scale (8px system):** `4px`, `8px`, `12px`, `16px`, `24px`, `32px`.
- **Border Radii:**
  - **Cards:** `16px` (0.5px–1px border width, no heavy dropshadows)
  - **Buttons:** `12px`
  - **Chips & Pills:** Fully rounded (`9999px`)
- **Touch Target:** Minimum `44px` height/width for touchable controls.

---

## 6. Component Specs
- **Primary Button:** Solid `--primary`, white text, full-width on mobile. Maximum one per screen.
- **Secondary Button:** Surface background, 1px border, normal text color.
- **Ghost / Tertiary:** Text-only button (e.g., "Not now").
- **Task Card:** Surface background, border, `--highlight` label ("Your one thing"), title, and `--primary-tint` box containing the "first 5 minutes" micro-step.
- **Streaks:** Paused streaks display `--paused` color, never a reset or red warning badge.
- **Reactions:** Pill chips using `--like` and `--milestone` with subtle micro-animations.

---

## 7. Motion & Accessibility
- **Motion:** 150ms – 250ms `ease-out` transitions. No flashing, bouncing, or jarring motion.
- **Contrast:** Minimum 4.5:1 text contrast ratio across all light/dark themes.
- **Focus Rings:** Visible focus ring utilizing `--primary`.
- **Accessibility:** Color must never be the sole indicator of state. Respect system settings (prefers-reduced-motion, dark theme default).

---

## 8. Brand Logo Rules
- Keep the supplied bell icon unchanged.
- **Do not** recolor, redraw, or replace the logo.
- Display on dark navy background (`--bg` dark: `#0A0E1A`) or inside a rounded-square app icon.
