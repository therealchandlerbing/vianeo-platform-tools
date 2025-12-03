# Vianeo Business Model Validation Methodology

Complete reference for the Vianeo 12-step Product-Market Fit methodology. The Viability Dashboard (Step 12) synthesizes outputs from all prior steps.

---

## Methodology Overview

Vianeo is a structured approach to validating business models through customer discovery and iterative refinement. It progresses from problem identification through solution validation to business model coherence.

**Core Principle:** Validate assumptions with real customer evidence before building.

---

## Step-by-Step Reference

### Phase 1: Problem Space (Steps 1-4)

#### Step 1: Field Definition

**Purpose:** Define the domain and scope of innovation

**Outputs:**
- Field name and description
- Geographic/market boundaries
- Key trends and dynamics

**Dashboard Usage:** Displayed in header metadata

---

#### Step 2: Stakeholder Mapping

**Purpose:** Identify all actors in the ecosystem

**Outputs:**
- Stakeholder categories (clients, partners, regulators, etc.)
- Relationship mapping
- Power/interest analysis

**Dashboard Usage:** Informs client segment identification

---

#### Step 3: Need Identification

**Purpose:** Discover unmet needs through customer interviews

**Outputs:**
- Need statements (verbatim from customers)
- Need intensity ratings:
  - **Fundamental:** Must-have, blocking if unmet
  - **Important:** High value, significant pain
  - **Nice-to-have:** Desirable but not critical
- Evidence quality (interview count, validation status)

**Dashboard Usage:** Need Coverage Analysis table

**Data Structure:**
```typescript
Need {
  statement: string (customer verbatim)
  intensity: "Fundamental" | "Important" | "Nice-to-have"
  source_interviews: number
  validated: boolean
}
```

---

#### Step 4: Product Definition

**Purpose:** Define the solution that addresses validated needs

**Outputs:**
- Product name (≤60 characters for platform)
- Product description (≤250 characters for platform)
- Product positioning statement

**Dashboard Usage:** Product header section

**Character Limits (Vianeo platform constraints):**

| Field | Max Characters |
|-------|----------------|
| Product name | 60 |
| Product description | 250 |
| Feature name | 60 |
| Platform input fields | 250 |

---

### Phase 2: Solution Space (Steps 5-8)

#### Step 5: Feature Ideation

**Purpose:** Generate features that could address needs

**Outputs:**
- Feature list with descriptions
- Need-to-feature mapping
- Technical feasibility notes

**Dashboard Usage:** Features grid (raw list)

---

#### Step 6: Feature Prioritization

**Purpose:** Determine MVP vs. phased feature set

**Outputs:**
- MVP features (launch requirements)
- Phased features (future roadmap)
- Timeline estimates:
  - **Already available:** Exists today
  - **Short term:** 0-6 months
  - **Mid term:** 6-12 months
  - **Long term:** 12+ months

**Dashboard Usage:** Features grid with MVP/Phased badges

**Data Structure:**
```typescript
Feature {
  name: string (≤60 chars)
  status: "MVP" | "Phased"
  timeline: "Already available" | "Short term" | "Mid term" | "Long term"
  addresses_needs: Need[]
  benefit_category: string
}
```

---

#### Step 7: Client Segmentation

**Purpose:** Define distinct customer segments with different needs/contexts

**Outputs:**
- Client segment definitions
- Segment-specific contexts
- Requester identification (who actually buys/decides)

**Dashboard Usage:** Client cards structure

**Client Context Types:**
- Clinical Research Context
- Clinical Care Context
- Public Healthcare Context
- Enterprise Context
- Consumer Context
- (Custom as needed)

---

#### Step 8: Requester Validation

**Purpose:** Validate that identified requesters have authority and budget

**Outputs:**
- Requester profiles
- Validation status per requester
- Interview evidence

**Dashboard Usage:** Requester tags within client cards

**Validation Status:**
```typescript
Requester {
  name: string
  validation_status: "validated" | "partial" | "unvalidated"
  interview_count: number  // Display as ">5" or "2-5" or "Not yet validated"
}
```

**Validation thresholds:**
- **Validated (green dot):** >5 interviews with positive signal
- **Partial (yellow dot):** 2-5 interviews, mixed signal
- **Unvalidated (gray dot):** <2 interviews or no validation

---

### Phase 3: Business Model (Steps 9-10)

#### Step 9: Business Model Canvas Components

**Purpose:** Define how value is created, delivered, and captured per segment

**Outputs per client segment:**

**Value Proposition (250 chars)**
- Core positioning
- Competitive advantages
- Differentiation points

**Revenue Model (250 chars)**
- Primary revenue streams
- Pricing model
- Payment terms

**Distribution Channels (250 chars)**
- Primary channels
- Discovery mechanisms
- Partnership strategy

**Cost Structure (250 chars)**
- Major cost categories
- CAC considerations
- Margin expectations

**Dashboard Usage:** Business model grid within each client card

**Data Structure:**
```typescript
BusinessModel {
  value_proposition: {
    content: string (detailed explanation)
    platform_input: string (≤250 chars, validated for Vianeo platform)
    char_status: "valid" | "warning" | "error"
  }
  revenue_model: { ... }
  distribution: { ... }
  cost_structure: { ... }
}
```

---

#### Step 10: Business Model Refinement

**Purpose:** Iterate based on market feedback

**Outputs:**
- Refined business model components
- Validation evidence
- Risk identification

**Dashboard Usage:** Warning indicators on unvalidated components

**Validation Indicator Logic:**
```javascript
if (validated && interview_count > 5) → class="valid"
if (partially_validated || needs_refinement) → class="warning"
if (unvalidated || contradictory_evidence) → class="error"
```

---

### Phase 4: Validation (Steps 11-12)

#### Step 11: Coherence Validation

**Purpose:** Verify internal consistency of business model

**Coherence Checks:**

| Check | Question | Pass Criteria |
|-------|----------|---------------|
| Value ↔ Features | Do features deliver the promised value? | All value claims supported by MVP features |
| Value ↔ Revenue | Does pricing match perceived value? | Price point validated with customers |
| Revenue ↔ Distribution | Do channels support revenue model? | Channel economics work at target price |
| Distribution ↔ Costs | Are CAC assumptions realistic? | CAC validated or benchmarked |

**Dashboard Usage:** Coherence validation grid

**Data Structure:**
```typescript
CoherenceCheck {
  relationship: string (e.g., "Value ↔ Features")
  status: "pass" | "warn" | "fail"
  explanation: string
}
```

---

#### Step 12: Viability Dashboard (THIS OUTPUT)

**Purpose:** Synthesize all steps into executive-ready visualization

**Components:**
- Summary metrics (products, clients, features, coverage)
- Product definition with features
- Client-specific business models
- Need coverage matrix
- Coherence validation results

---

## Acceptability Assessment

Each client segment receives an acceptability rating based on customer response:

| Rating | Criteria | Dashboard Display |
|--------|----------|-------------------|
| Favorable | Strong positive signals, clear purchase intent | Green badge |
| Neutral | Mixed signals, conditional interest | Yellow badge |
| Unfavorable | Negative signals, significant objections | Red badge |

---

## Need Coverage Calculations

**Coverage Status per Need:**

- **Covered:** Feature directly addresses need, validated with customers
- **Partial:** Feature partially addresses need or validation incomplete
- **Gap:** No feature addresses this need

**Overall Coverage Percentage:**
```
coverage_pct = (covered_fundamental + covered_important) /
               (total_fundamental + total_important) * 100
```

*Note: "Nice-to-have" needs excluded from core coverage calculation but displayed in table.*

---

## Dashboard Data Schema Summary

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

## Common Validation Patterns

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

## Related Documentation

| Document | Purpose |
|----------|---------|
| `docs/VIANEO_Viability_Dashboard_Skill.md` | Dashboard generation skill |
| `prompts/step_12_viability.md` | Main Step 12 prompt |
| `prompts/step_12_dashboard_generation.md` | Dashboard generation prompt |
| `templates/Step12_PMF_Template.md` | Product-Market Fit template |
| `templates/Step12_Business_Model_Template.md` | Business Model Canvas template |

---

**Version:** 1.0
**Last Updated:** December 2025
**Framework:** VIANEO Business Model Evaluation Methodology
