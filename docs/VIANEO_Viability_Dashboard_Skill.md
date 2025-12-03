# Vianeo Viability Dashboard Generator

**Skill Name:** `vianeo-viability-dashboard`

**Description:** Generate production-grade Viability Dashboard (Step 12) from Vianeo business model validation data. Use when user provides Vianeo methodology outputs including products, features, clients, business models, need coverage, or requests a viability assessment dashboard. Transforms structured PMF data into interactive HTML dashboards with Stripe/Linear design quality.

---

## Prerequisites

Verify user has completed prior Vianeo steps. Required data sources:

| Step | Data Required |
|------|---------------|
| Step 3-4 | Product definition (name, description, 60/250 char limits) |
| Step 5-6 | Features list with MVP/Phased status and timeline |
| Step 7-8 | Client segments with requesters and validation status |
| Step 9-10 | Business model components per client (value prop, revenue, distribution, cost) |
| Step 11 | Need coverage mapping and coherence validation |

See `references/vianeo-methodology.md` for complete step context.

---

## Dashboard Generation Workflow

### 1. Data Extraction

Extract from user's Vianeo outputs:

```yaml
PRODUCT:
- name (≤60 chars)
- description (≤250 chars)
- icon/emoji

FEATURES (per feature):
- name
- status: MVP | Phased
- timeline: Already available | Short term | Mid term | Long term
- benefit_category

CLIENTS (per segment):
- name
- context_type: Research | Clinical | Public Healthcare | etc.
- icon_class: research | patient | institution
- acceptability: Favorable | Neutral | Unfavorable
- coherence: Model Coherent | Needs Validation
- requesters[]: {name, validation_status, interview_count}
- business_model:
  - value_proposition: {content, platform_input_250}
  - revenue_model: {content, platform_input_250}
  - distribution: {content, platform_input_250}
  - cost_structure: {content, platform_input_250}

NEED_COVERAGE (per need):
- statement
- intensity: Fundamental | Important | Nice-to-have
- covered_by_feature
- clients_served[]
- status: Covered | Partial | Gap

COHERENCE_CHECKS[]:
- relationship (e.g., "Value ↔ Features")
- status: pass | warn | fail
- explanation
```

---

### 2. Template Application

Load `assets/viability-dashboard-template.html` and populate:

- **Header Section:** Project name, field, date, status percentage
- **Summary Cards:** Products count, clients count, MVP features count, need coverage %
- **Product Section:** Name, description with char indicators, features grid
- **Client Cards:** Expandable accordion per segment with business model grid
- **Coverage Table:** Need statements with intensity badges and coverage status
- **Coherence Grid:** Validation checks with pass/warn icons

---

### 3. Character Count Validation

Enforce Vianeo platform limits:

| Field | Limit | Indicator Class |
|-------|-------|-----------------|
| Product name | 60 | `valid` if ≤60 |
| Product description | 250 | `valid` if ≤250 |
| Platform inputs | 250 | `valid/warning/error` |

Display as: `<span class="char-indicator valid">248/250</span>`

---

### 4. Design System Application

The template uses production-grade styling. Key elements:

#### Animation System:

- Staggered `fadeInUp` on cards (50ms delays)
- Smooth expand/collapse on accordions (`max-height` transition)
- `--ease-out-expo` for natural motion
- `prefers-reduced-motion` support

#### Shadow System (layered composite):

```css
--shadow-md:
    0 2px 4px rgba(0,0,0,0.02),
    0 4px 8px rgba(0,0,0,0.04),
    0 8px 16px rgba(0,0,0,0.04);
```

#### Status Colors:

| Status | Color | Background |
|--------|-------|------------|
| Success (green) | `#00D68F` | `rgba(0,214,143,0.08)` |
| Warning (yellow) | `#FFB800` | `rgba(255,184,0,0.08)` |
| Error (red) | `#FF5B5B` | — |
| Info (blue) | `#635BFF` | — |

#### Business Model Card Accents:

| Component | Left Border Color |
|-----------|-------------------|
| Value Proposition | Blue (`--accent-blue`) |
| Revenue Model | Green (`--accent-green`) |
| Distribution | Orange (`--accent-orange`) |
| Cost Structure | Red (`--accent-red`) |

---

## Output Specifications

Generate single HTML file containing:

- Embedded CSS (no external dependencies)
- Minimal JavaScript (accordion toggle, keyboard support)
- Print stylesheet
- Responsive breakpoints (1024px, 640px)
- ARIA attributes for accessibility

**File naming:** `Step12_Viability_Dashboard_{ProjectName}.html`

---

## Validation Checklist

Before delivery, verify:

- [ ] All char indicators show accurate counts
- [ ] Client cards expand/collapse smoothly
- [ ] Coherence checks reflect actual validation status
- [ ] Need coverage percentages calculated correctly
- [ ] Business model content fits 250-char platform inputs
- [ ] Keyboard navigation works on accordions
- [ ] Print view shows all sections expanded

---

## Common Adaptations

### Missing Data

Use `[VALIDATION NEEDED]` prefix in platform inputs, apply warning indicator class:

```html
<span class="char-indicator warning">Needs validation</span>
```

### Multiple Products

Create separate product sections, update summary card count.

### Additional Coherence Checks

Add rows to coherence grid following pass/warn pattern:

```html
<div class="coherence-icon warn">!</div>
```

### Custom Client Types

Add new icon classes with appropriate background colors following the pattern:

```css
.client-icon.{type} {
    background: var(--status-{color}-bg);
    border-color: var(--status-{color}-border);
}
```

---

## Data Schema Summary

```typescript
interface ViabilityDashboard {
  metadata: {
    project_name: string;
    field: string;
    date: string;
    completion_status: number; // 0-100
  };

  summary: {
    products_count: number;
    clients_count: number;
    mvp_features_count: number;
    need_coverage_pct: number;
  };

  products: Product[];
  features: Feature[];
  clients: Client[];
  needs: Need[];
  coherence_checks: CoherenceCheck[];
}

interface Product {
  name: string; // ≤60 chars
  description: string; // ≤250 chars
  icon: string;
}

interface Feature {
  name: string;
  status: "MVP" | "Phased";
  timeline: string;
  benefit: string;
}

interface Client {
  name: string;
  context_type: string;
  icon_class: "research" | "patient" | "institution" | string;
  acceptability: "Favorable" | "Neutral" | "Unfavorable";
  model_coherence: "Model Coherent" | "Needs Validation";
  requesters: Requester[];
  business_model: BusinessModel;
}

interface Requester {
  name: string;
  validation_status: "validated" | "partial" | "unvalidated";
  interview_display: string; // ">5 interviewed" | "2-5 interviewed" | "Not yet validated"
}

interface BusinessModel {
  value_proposition: BMComponent;
  revenue_model: BMComponent;
  distribution: BMComponent;
  cost_structure: BMComponent;
}

interface BMComponent {
  content_html: string;
  platform_input: string; // ≤250 chars
  char_count: number;
  validation_status: "valid" | "warning" | "error";
}

interface Need {
  statement: string;
  intensity: "Fundamental" | "Important" | "Nice-to-have";
  covered_by: string;
  clients_served: string[];
  status: "Covered" | "Partial" | "Gap";
}

interface CoherenceCheck {
  relationship: string;
  status: "pass" | "warn" | "fail";
  explanation: string;
}
```

---

## Validation Patterns

### Insufficient Interview Data

When requester validation is incomplete:

```html
<span class="requester-dot unvalidated"></span>
<span class="requester-validation">Not yet validated</span>
```

### Unvalidated Business Model Component

When business model element needs validation:

```html
<span class="char-indicator warning">Needs validation</span>
```

Platform input prefix:

```
[VALIDATION NEEDED] Description of assumption requiring validation...
```

### Coherence Warning

When coherence check identifies risk:

```html
<div class="coherence-icon warn">!</div>
```

With explanation noting specific risk and recommended action.

---

## Related Files

| File | Purpose |
|------|---------|
| `references/vianeo-methodology.md` | Complete 12-step methodology reference |
| `assets/viability-dashboard-template.html` | Production-grade HTML template |
| `examples/Step12_Viability_Dashboard_IRDose.html` | Worked example |
| `prompts/step_12_dashboard_generation.md` | Dashboard generation prompt |
| `templates/Step12_Dashboard_Template.md` | Markdown dashboard template |

---

## Quick Launch

```
Generate Viability Dashboard for [PROJECT NAME]

Based on completed Vianeo Steps 3-11:
- Product: [name, description]
- Features: [X MVP, Y phased]
- Clients: [list with context types]
- Business models: [per client]
- Need coverage: [percentage]

Generate production-grade HTML dashboard following Stripe/Linear design system.
Save as: Step12_Viability_Dashboard_[ProjectName].html
```

---

**Version:** 1.0
**Last Updated:** December 2025
**Framework:** VIANEO Business Model Evaluation Methodology
