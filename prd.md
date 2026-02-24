# Product Requirements Document
## Bootstrap Page Builder — Vue 3

**Version:** 1.0
**Date:** 2026-02-24
**Status:** Approved

---

## 1. Overview

### 1.1 Purpose

Bootstrap Page Builder is a browser-based, drag-and-drop visual page composition tool. It enables users to assemble professional, responsive web pages by combining pre-built Bootstrap 5 sections — without writing HTML or CSS manually.

### 1.2 Goals

- Allow non-developers to build Bootstrap-based landing pages visually
- Produce clean, standalone HTML output that works without a build step
- Make all block text editable inline within the builder canvas
- Deliver a fast, intuitive single-page application experience

### 1.3 Success Criteria

| Metric | Target |
|---|---|
| Blocks available at launch | ≥ 20 across 10 categories |
| Export output | Valid Bootstrap 5 HTML, self-contained with CDN links |
| Inline editing | All text nodes in any block are editable on click |
| Drag-and-drop latency | Block drops feel instant (< 100ms visual feedback) |
| Browser support | Latest Chrome, Firefox, Safari, Edge |

---

## 2. User Stories

### 2.1 Core Workflow

**US-01 — Browse blocks**
As a user, I want to see a categorized list of Bootstrap blocks in the left sidebar so I can browse what's available before placing them.

**US-02 — Drag to canvas**
As a user, I want to drag a block from the sidebar and drop it onto the canvas so I can build my page layout.

**US-03 — Reorder blocks**
As a user, I want to drag blocks already on the canvas to reorder them so I can change the page structure.

**US-04 — Edit text**
As a user, I want to click on a block and edit the text directly in the canvas so I can customize headings, body copy, and button labels without touching HTML.

**US-05 — Block controls**
As a user, I want to move a block up/down, duplicate it, or delete it using a toolbar that appears when I select a block.

**US-06 — Preview**
As a user, I want to see a full-page preview of my assembled page (with Bootstrap JS working) so I can verify the result before exporting.

**US-07 — Export**
As a user, I want to download my page as a standalone HTML file so I can host it anywhere without a build process.

**US-08 — Clear canvas**
As a user, I want to clear the canvas and start over so I can build a different page.

---

## 3. Functional Requirements

### 3.1 Application Layout

The app uses a fixed three-panel layout:

```
┌──────────────────────────────────────────────────────────┐
│  App Header (56px): Title | Preview | Export | Clear     │
├────────────────────┬─────────────────────────────────────┤
│                    │                                     │
│  Sidebar (300px)   │  Canvas (flex-grow, scrollable)     │
│  ─────────────     │  ──────────────────────────────     │
│  Category Tabs     │  [ Drag blocks here to start ]      │
│  ─────────────     │                                     │
│  Block Palette     │  [Dropped Block 1]                  │
│  (scrollable)      │  [Dropped Block 2]                  │
│                    │  [Dropped Block 3]                  │
│                    │                                     │
└────────────────────┴─────────────────────────────────────┘
```

### 3.2 Sidebar

- **FR-01**: Display 10 category tabs: Navigation, Heroes, Features, Content, Cards, Testimonials, Call to Action, Forms, Pricing, Footers
- **FR-02**: Clicking a tab filters the block palette to that category
- **FR-03**: Each block shown as a labeled card with category color accent
- **FR-04**: Blocks are draggable from the sidebar; dragging does not remove them from the palette (clone behavior)
- **FR-05**: Sidebar scrolls independently of the canvas

### 3.3 Canvas

- **FR-06**: Accept block drops from the sidebar
- **FR-07**: Dropped blocks render using authentic Bootstrap 5 HTML (not simplified previews)
- **FR-08**: Blocks can be reordered by dragging within the canvas
- **FR-09**: Show an empty-state prompt when no blocks are present
- **FR-10**: Canvas scrolls independently of the sidebar
- **FR-11**: Canvas background is visually distinct from page content (subtle grey)

### 3.4 Block Selection and Controls

- **FR-12**: Clicking a block selects it (blue outline)
- **FR-13**: Clicking outside any block deselects
- **FR-14**: Selected block shows a floating toolbar with: Move Up, Move Down, Duplicate, Delete
- **FR-15**: Move Up/Down is disabled at the top/bottom of the canvas respectively
- **FR-16**: Delete removes the block from the canvas immediately

### 3.5 Inline Text Editing

- **FR-17**: When a block is selected, all text-bearing child elements (h1–h6, p, a, span, li, button, label, small, blockquote) become contenteditable
- **FR-18**: Editable elements are indicated by a dashed blue outline
- **FR-19**: Changes are saved to the store automatically (debounced 300ms)
- **FR-20**: Edits persist when the block is deselected and re-selected
- **FR-21**: Non-text elements (icons, images, structural divs) are not made editable

### 3.6 Preview

- **FR-22**: A "Preview" button in the header opens a full-screen modal
- **FR-23**: The preview renders inside a sandboxed `<iframe>` using `srcdoc`
- **FR-24**: Bootstrap JS is active in the preview (dropdowns, accordions function correctly)
- **FR-25**: Preview shows the page exactly as it would appear when exported
- **FR-26**: An "Open in new tab" button in the preview modal opens the page in a new browser tab

### 3.7 HTML Export

- **FR-27**: Clicking "Export HTML" downloads a file named `page.html`
- **FR-28**: The exported file is a complete `<!DOCTYPE html>` document
- **FR-29**: Bootstrap 5 CSS and JS are included via CDN links (no local dependencies)
- **FR-30**: Bootstrap Icons are included via CDN link
- **FR-31**: All contenteditable attributes are stripped from the output
- **FR-32**: All builder-specific CSS classes are stripped from the output
- **FR-33**: Blocks that the user dropped twice have unique IDs (no Bootstrap accordion/dropdown conflicts)

---

## 4. Non-Functional Requirements

- **NFR-01**: App must render in a modern browser with no backend; purely client-side
- **NFR-02**: All blocks must be valid Bootstrap 5.3 HTML that renders correctly in a standalone HTML file
- **NFR-03**: The builder UI chrome must not interfere with Bootstrap styles inside canvas blocks
- **NFR-04**: Export output must pass W3C HTML validation
- **NFR-05**: No TypeScript — plain JavaScript throughout for accessibility and simplicity
- **NFR-06**: App loads and is interactive within 3 seconds on a standard broadband connection

---

## 5. Block Library Catalog

### 5.1 Categories and Blocks (21 blocks total)

| Category | Block ID | Label |
|---|---|---|
| **Navigation** | nav-default | Default Navbar |
| | nav-dark | Dark Navbar with Dropdown |
| **Heroes** | hero-centered | Centered Hero |
| | hero-split | Split Hero (Text + Visual) |
| | hero-dark-gradient | Dark Gradient Hero |
| **Features** | features-icons-3col | 3-Column Icon Features |
| | features-alternating | Alternating Feature Rows |
| | features-stats | Stats / Numbers Bar |
| **Content** | content-text-image | Text + Image |
| | content-faq | FAQ Accordion |
| **Cards** | cards-team | Team Member Cards |
| | cards-blog | Blog Post Cards |
| **Testimonials** | testimonials-3col | 3-Column Testimonials |
| | testimonials-large-quote | Large Quote + Logo Bar |
| **Call to Action** | cta-centered | Centered CTA Banner |
| | cta-email-signup | Email Signup Banner |
| **Forms** | form-contact | Contact Form |
| | form-login | Login Card |
| **Pricing** | pricing-3col | 3-Tier Pricing Table |
| **Footers** | footer-4col | 4-Column Footer |
| | footer-simple | Minimal Single-Row Footer |

### 5.2 Block Definition Schema

Each block is defined as a plain JavaScript object:

```js
{
  id: 'hero-centered',        // unique string identifier
  categoryId: 'heroes',       // matches a category id
  label: 'Centered Hero',     // display name shown in sidebar
  html: `<section>...</section>` // Bootstrap 5 HTML markup
}
```

---

## 6. Technical Stack

| Layer | Technology | Version |
|---|---|---|
| Frontend Framework | Vue 3 (Composition API, `<script setup>`) | ^3.4 |
| Build Tool | Vite | ^5.2 |
| State Management | Pinia | ^2.1 |
| Drag and Drop | vuedraggable (SortableJS) | ^4.1 |
| UI Framework | Bootstrap | 5.3.3 (CDN) |
| Icons | Bootstrap Icons | 1.11.3 (CDN) |
| Language | JavaScript (no TypeScript) | ES2022+ |

Bootstrap is loaded via CDN in `index.html` (not installed as an npm package) to ensure `window.bootstrap` is available globally. This allows the editor to programmatically initialize Bootstrap JS components (dropdowns, accordions, tooltips) on newly dropped blocks.

---

## 7. Architecture Overview

### 7.1 Data Flow

```
Block Library (static JS)
        │
        ▼
  Sidebar Palette  ──drag──▶  Canvas Drop Zone
        │                           │
        │                     blockCloner.js
        │                     (assign instanceId,
        │                      deduplicate IDs)
        │                           │
        │                           ▼
        │                     Pinia Store
        │                     canvasBlocks[]
        │                           │
        │                    CanvasBlock.vue
        │                    (renders v-html,
        │                     manages editing)
        │                           │
        │                    htmlExporter.js
        │                           │
        │                    Preview iframe / Download
```

### 7.2 State Shape (Pinia Store)

```js
{
  activeCategory: 'navigation',   // selected sidebar category
  canvasBlocks: [                 // blocks on the canvas
    {
      instanceId: 'block_1708_1', // unique per-drop identifier
      blockId: 'hero-centered',   // references block definition
      categoryId: 'heroes',
      label: 'Centered Hero',
      html: '...',                // original block HTML (with unique IDs)
      editedHtml: null            // null = use original; string = user-edited
    }
  ],
  selectedBlockId: null,          // instanceId of selected block
  previewOpen: false              // preview modal visibility
}
```

---

## 8. Out of Scope (v1.0)

The following features are explicitly excluded from the initial release:

- Image upload or media management
- User authentication or accounts
- Server-side persistence (save/load pages to a backend)
- Undo / Redo history
- Custom CSS / theme variable editing
- Responsive design preview (mobile/tablet viewport toggle)
- Copy-paste blocks via keyboard shortcuts
- Multi-select or group operations on blocks
- Custom block creation by the user
- Collaboration / multi-user editing

These may be considered for v2.0.

---

## 9. UI Design Principles

- **Editor chrome is neutral**: The sidebar and header use a dark navy (`#1e293b`) to visually separate the builder UI from the white Bootstrap canvas
- **Canvas blocks look exactly as exported**: No placeholder styling — blocks render their real Bootstrap HTML
- **Selection is clear**: Selected blocks have a solid 2px blue (`#0d6efd`) outline; hover state uses a 50% opacity version
- **Editing is obvious**: Contenteditable text elements show a dashed blue outline so users know what is clickable
- **Controls are non-intrusive**: Block controls appear as a floating toolbar only on selection, not permanently

---

## 10. Acceptance Criteria

| ID | Scenario | Expected Result |
|---|---|---|
| AC-01 | User drags a block from sidebar to canvas | Block renders immediately with correct Bootstrap HTML |
| AC-02 | User drags same block again | Second instance appears without ID conflicts |
| AC-03 | User clicks a dropped block | Block gets blue outline; text elements become editable (dashed outline) |
| AC-04 | User edits text in a block | Text updates in real time; change persists after deselection |
| AC-05 | User reorders blocks by dragging | Order updates smoothly with animation |
| AC-06 | User clicks Move Up on second block | Block moves to first position |
| AC-07 | User duplicates a block | Identical copy inserted directly below original |
| AC-08 | User deletes a block | Block removed; canvas reflows |
| AC-09 | User opens Preview | Modal shows full Bootstrap page; accordion/dropdown works |
| AC-10 | User exports HTML | File downloaded; opening it in browser shows correct styled page |
| AC-11 | Exported HTML contains no `contenteditable` attributes | Confirmed via browser DevTools |
| AC-12 | User clears canvas | All blocks removed; empty-state message shown |
