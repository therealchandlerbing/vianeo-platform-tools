# Step 12: Viability Assessment (Product-Market Fit & Business Model)

**Version**: 3.0
**Last Updated**: December 2025
**Dimension**: Viability (20% of VIANEO score)

---

## Overview

Transform validated customer needs and technical capabilities into commercial structures. This step produces Product-Market Fit configurations and Business Model Canvases for committee evaluation and platform entry.

**Critical Understanding**: The Vianeo platform structures business models **per client**, not per product. A single product may serve multiple clients, each with their own business model tailored to how that client purchases, receives value, and pays.

---

## Platform Hierarchy (Must Understand)

```
PRODUCT/SERVICE
├── Product Name (≤60 chars)
├── Product Description (≤250 chars)
├── Product Features (6-10 MVP from Step 11)
│
├── CLIENT 1 (from Value Network - Step 8/9)
│   ├── Targeted Requesters (personas from Steps 5-7, nested under this client)
│   └── BUSINESS MODEL for Client 1
│       ├── Value Proposition (≤250 chars)
│       ├── Revenue Stream (≤250 chars)
│       ├── Distribution Channel (≤250 chars)
│       └── Cost Structure (≤250 chars)
│
├── CLIENT 2 (different organization type from Value Network)
│   ├── Targeted Requesters (different personas relevant to this client)
│   └── BUSINESS MODEL for Client 2
│       ├── Value Proposition (≤250 chars)
│       ├── Revenue Stream (≤250 chars)
│       ├── Distribution Channel (≤250 chars)
│       └── Cost Structure (≤250 chars)
│
└── CLIENT 3...
```

**Key Distinction**:
- **Clients** = Organizations from the Value Network who PAY (hospitals, facilities, enterprises)
- **Targeted Requesters** = Individual personas WITHIN those organizations who have NEEDS (clinicians, patients, administrators)

---

## Instructions for AI Assistant

### Primary Directive

Generate complete Viability documentation for each product configuration. For EACH client served by the product, create a distinct business model with platform-ready 250-character summaries.

### Core Philosophy

**Evidence-based configuration, not aspirational planning.**

Only include:
- ✅ Validated features (from Step 11)
- ✅ Validated clients (from Value Network, Steps 8-9)
- ✅ Validated requesters (from Steps 5-7)
- ✅ Validated needs (from Step 7 Qualification Matrix)
- ⚠️ Assumptions explicitly flagged with [ASSUMPTION] tag

---

## Essential Inputs

### From Desirability Analysis (Steps 5-7)

| Data Element | Source | Use In Step 12 |
|-------------|--------|----------------|
| Requester personas | Step 6 | Targeted requesters per client |
| Needs statements | Step 7 | Value proposition foundation |
| Need intensity (Fundamental/Important/Secondary) | Step 7 Matrix | Feature prioritization |
| Current satisfaction levels | Step 7 Matrix | Opportunity identification |
| Interview validation counts | Step 7 | Evidence strength |

### From Ecosystem Analysis (Steps 8-9)

| Data Element | Source | Use In Step 12 |
|-------------|--------|----------------|
| Potential clients (Players) | Step 8/9 Value Network | Client selection |
| Acceptability ratings | Step 8/9 | Client prioritization |
| Business relationships (arrows) | Step 9 Network Map | Distribution channel design |
| Organizational context | Step 9 | Revenue model alignment |

### From Feasibility (Step 11)

| Data Element | Source | Use In Step 12 |
|-------------|--------|----------------|
| Feature library | Step 11 | MVP feature selection |
| Feature-to-need mappings | Step 11 | Coverage validation |
| Implementation timelines | Step 11 | Phasing strategy |
| Resource requirements | Step 11 | Cost structure inputs |
| Technical partnerships | Step 11 | Distribution/cost inputs |

---

## Character Limits (Platform Integration)

### Product-Level Fields

| Field | Limit | Notes |
|-------|-------|-------|
| Product Name | 60 chars | Clear, client-understandable name |
| Product Description | 250 chars | What it is, for whom, key capabilities |

### Business Model Fields (Per Client)

| Field | Limit | Notes |
|-------|-------|-------|
| Value Proposition | 250 chars | Use formula (see below) |
| Revenue Stream | 250 chars | Who pays, how, when, pricing examples |
| Distribution Channel | 250 chars | Discovery + purchase + delivery |
| Cost Structure | 250 chars | Major categories, fixed vs variable |

### Supporting Fields

| Field | Limit | Notes |
|-------|-------|-------|
| Need statements | 60 chars each | From Step 7 |
| Feature names | 60 chars each | From Step 11 |

---

## Value Proposition Formula

The Vianeo platform prompts users with this structure:

> "For (clients) who (has this problem/needs), X is a (product/service) who (provides added value/advantages vs existing solutions)."

### Formula Components

```
For [CLIENT TYPE] who [PROBLEM/NEED STATEMENT],
[PRODUCT NAME] is a [PRODUCT CATEGORY] that [KEY VALUE/ADVANTAGE]
[without/enabling/reducing] [PAIN POINT ADDRESSED].
```

### Examples (250 chars max)

**Research-Focused Client:**
> For clinical researchers who need precise dosimetry data for radioiodine therapy studies, IRDose is a wearable gamma spectrometer that provides validated measurement precision, enabling reproducible data collection without traditional SPECT/CT complexity. [248 chars]

**Patient-Focused Client:**
> For hyperthyroidism patients (adults 25-75) who undergo radioiodine therapy and face multiple clinic visits, IRDose is a wearable home monitoring system that enables comfortable 3-5 day thyroid tracking, reducing travel burden while improving treatment precision. [250 chars]

**Institutional Client:**
> For hospital administrators managing nuclear medicine departments, IRDose is an automated dosimetry platform that reduces physicist workload by 60%, enabling higher patient throughput without additional staffing costs. [219 chars]

---

## Six-Phase Generation Process

### Phase 1: Input Review & Client Identification (15-20 min)

**Step 1.1**: Review all prior deliverables
- Step 7: Needs Qualification Matrix (need intensity, satisfaction, validation)
- Step 8/9: Value Network Map (potential clients, acceptability, relationships)
- Step 11: Features-Needs Matrix (capabilities, timelines, resources)

**Step 1.2**: Identify distinct clients
- Extract "Potential Clients" from Value Network (green boxes in visualization)
- Note their acceptability ratings (Favorable/Neutral/Unfavorable)
- Identify which requesters are nested within each client organization

**Step 1.3**: Determine product configurations needed
- Single product serving multiple clients = Multiple business models
- Multiple products = Repeat entire process per product

**Output**: Client identification table

| Client | Organization Type | Acceptability | Nested Requesters | Priority |
|--------|------------------|---------------|-------------------|----------|
| [Client 1] | [Type] | [Rating] | [Requester list] | [1-3] |

---

### Phase 2: Product-Market Fit Definition (30-45 min per product)

**Step 2.1**: Define product identity

```
Product Name: [≤60 characters]
Character count: [X]/60

Product Description: [≤250 characters]
Character count: [X]/250
```

**Product Description Formula**:
> A [product category] with [key technology/approach] that enables [primary capability] for [target users]. [Optional: key differentiator].

**Step 2.2**: Select MVP features (6-10)

Pull from Step 11 Features-Needs Matrix. Prioritize:
1. Features addressing FUNDAMENTAL needs (must have)
2. Features with >5 interviews validation (high confidence)
3. Features with "Short term" or "Already available" timeline

| # | Feature Name | Addresses Need | Timeline | Validation |
|---|-------------|----------------|----------|------------|
| 1 | [Feature] | [Need from Step 7] | [Timeline] | [Interview count] |

**Step 2.3**: Map clients and their requesters

For each client identified in Phase 1:

```
CLIENT: [Organization name/type]
├── Requester 1: [Persona name from Step 6]
│   └── Key needs: [List from Step 7]
├── Requester 2: [Persona name]
│   └── Key needs: [List]
```

---

### Phase 3: Business Model Design (20-30 min per client)

**CRITICAL**: Generate a complete business model for EACH client. Different clients have different:
- Value propositions (what matters to them)
- Revenue streams (how they pay, budget sources)
- Distribution channels (how they discover and purchase)
- Cost structures (what it costs to serve them)

#### 3.1 Value Proposition (per client)

**Process**:
1. Identify the client's primary requesters and their needs
2. Map which MVP features address those needs
3. Articulate the competitive advantage for THIS client specifically
4. Write using the formula, staying under 250 characters

**Template**:
```
Client: [Name]
Targeted Requesters: [List]
Primary Needs Addressed: [From Step 7]
Competitive Advantage for This Client: [Specific to their context]

Value Proposition (250 chars max):
"[Full value proposition statement]"
Character count: [X]/250
```

#### 3.2 Revenue Stream (per client)

**Components to include**:
- **Who pays**: End user, organization, third party, government
- **Pricing model**: Subscription, per-unit, license, commission, usage-based
- **Pricing examples**: Specific numbers where possible
- **Payment timing**: Upfront, recurring, milestone-based

**Template**:
```
Client: [Name]

Revenue Model: [Type]
Who Pays: [Payer]
Pricing: [Specific examples]

Revenue Stream (250 chars max):
"[Full revenue stream statement]"
Character count: [X]/250
```

**Examples by Client Type**:

| Client Type | Typical Revenue Model |
|------------|----------------------|
| Research institutions | Hardware purchase + platform subscription |
| Public hospitals (SUS) | Government reimbursement, per-procedure |
| Private clinics | Direct purchase or lease + service contracts |
| Patients (B2C) | Indirect (through institution) or out-of-pocket |
| Enterprise | Annual license, per-seat, or usage-based |

#### 3.3 Distribution Channel (per client)

**Components to include**:
- **Discovery**: How they learn about the solution
- **Purchase**: Where/how they buy (direct, distributor, procurement)
- **Delivery**: How they receive/access the solution
- **Support**: Onboarding and ongoing assistance

**Template**:
```
Client: [Name]

Discovery Channels: [How they find you]
Purchase Process: [How they buy]
Delivery Method: [How they receive]

Distribution Channel (250 chars max):
"[Full distribution statement]"
Character count: [X]/250
```

#### 3.4 Cost Structure (per client)

**Components to include**:
- **Major cost categories**: Development, operations, sales, support
- **Fixed vs variable**: What scales with volume
- **Client-specific costs**: Any unique costs to serve this client type

**Template**:
```
Client: [Name]

Major Costs to Serve This Client:
- [Category 1]: [Items]
- [Category 2]: [Items]

Fixed Costs: [List]
Variable Costs: [List]

Cost Structure (250 chars max):
"[Full cost structure statement]"
Character count: [X]/250
```

---

### Phase 4: Output Generation (30-45 min)

Generate three deliverable types:

#### Deliverable 1: Product-Market Fit Sheet (Markdown)

```markdown
# Product-Market Fit Sheet: [Product Name]

**Project**: [Project Name]
**Date**: [YYYY-MM-DD]
**Version**: 1.0

---

## Product Identity

**Product Name**: [Name]
Character count: [X]/60 ✓

**Product Description**:
[Description]
Character count: [X]/250 ✓

---

## Clients Served

### Client 1: [Client Name/Type]

**Organization Context**: [Brief description of this client type]

**Targeted Requesters**:
- [Requester 1]: [Brief profile]
- [Requester 2]: [Brief profile]

**Primary Needs Addressed**:
| Need | Intensity | Satisfaction | Validation |
|------|-----------|--------------|------------|
| [Need 1] | Fundamental | Not at all | >5 interviewed |

### Client 2: [Client Name/Type]
[Repeat structure]

---

## MVP Features

| # | Feature | Need Addressed | Timeline | Validation |
|---|---------|----------------|----------|------------|
| 1 | [Feature] | [Need] | [Timeline] | [Count] |

---

## Coverage Validation

| Fundamental Need | Covered by Feature | Status |
|-----------------|-------------------|--------|
| [Need 1] | [Feature X] | ✓ Covered |
| [Need 2] | [Feature Y] | ✓ Covered |

**Coverage Summary**: [X]/[Y] fundamental needs covered by MVP features

---
```

#### Deliverable 2: Business Model Canvas (Per Client)

```markdown
# Business Model Canvas: [Product Name] for [Client Type]

**Project**: [Project Name]
**Date**: [YYYY-MM-DD]
**Client**: [Client Name/Type]

---

## 1. Value Proposition

**Targeted Requesters**: [List]

**Needs Addressed**:
- [Need 1]: [Intensity]
- [Need 2]: [Intensity]

**Competitive Advantages**:
1. [Advantage 1]: [Why better than alternatives]
2. [Advantage 2]: [Why better]

**Platform Input (250 chars)**:
```
[Value proposition statement]
```
Character count: [X]/250 ✓

---

## 2. Revenue Stream

**Model Type**: [Subscription/Purchase/License/etc.]
**Who Pays**: [Payer]
**Payment Timing**: [When]

**Pricing Structure**:
- [Mechanism 1]: [Price example]
- [Mechanism 2]: [Price example]

**Platform Input (250 chars)**:
```
[Revenue stream statement]
```
Character count: [X]/250 ✓

---

## 3. Distribution Channel

**Discovery**: [How they find you]
**Purchase**: [How they buy]
**Delivery**: [How they receive]
**Support**: [Ongoing relationship]

**Platform Input (250 chars)**:
```
[Distribution channel statement]
```
Character count: [X]/250 ✓

---

## 4. Cost Structure

**Development Costs**: [List]
**Operations Costs**: [List]
**Sales/Marketing Costs**: [List]
**Support Costs**: [List]

**Fixed vs Variable**:
- Fixed: [Items]
- Variable: [Items]

**Platform Input (250 chars)**:
```
[Cost structure statement]
```
Character count: [X]/250 ✓

---

## Business Model Coherence Check

| Alignment | Status | Notes |
|-----------|--------|-------|
| Value ↔ Features | ✓/⚠️ | [Assessment] |
| Value ↔ Revenue | ✓/⚠️ | [Assessment] |
| Revenue ↔ Distribution | ✓/⚠️ | [Assessment] |
| Distribution ↔ Costs | ✓/⚠️ | [Assessment] |

**Overall Coherence**: [Coherent / Minor Issues / Major Issues]

---
```

#### Deliverable 3: Platform-Ready Summary Card

```markdown
# Platform Entry Card: [Product Name]

## Product Level
- **Name**: [60 chars max]
- **Description**: [250 chars max]

## Client 1: [Client Type]
- **Requesters**: [List]
- **Value Proposition**: [250 chars max]
- **Revenue Stream**: [250 chars max]
- **Distribution Channel**: [250 chars max]
- **Cost Structure**: [250 chars max]

## Client 2: [Client Type]
[Repeat]

## Client 3: [Client Type]
[Repeat]

---
*Ready for direct copy/paste into Vianeo platform*
```

---

### Phase 5: Quality Validation (15-20 min)

#### Character Limit Validation

| Field | Limit | Actual | Status |
|-------|-------|--------|--------|
| Product Name | 60 | [X] | ✓/✗ |
| Product Description | 250 | [X] | ✓/✗ |
| [Client 1] Value Prop | 250 | [X] | ✓/✗ |
| [Client 1] Revenue | 250 | [X] | ✓/✗ |
| [Client 1] Distribution | 250 | [X] | ✓/✗ |
| [Client 1] Cost | 250 | [X] | ✓/✗ |

#### Completeness Validation

- [ ] All identified clients have business models
- [ ] All business models have all four components
- [ ] All fundamental needs covered by MVP features
- [ ] All platform inputs within character limits
- [ ] Evidence citations included for key claims

#### Coherence Validation

- [ ] Value propositions use the formula
- [ ] Revenue models match client payment patterns
- [ ] Distribution channels reach target requesters
- [ ] Cost structures account for delivery method
- [ ] No internal contradictions

#### Evidence Validation

- [ ] Requesters from Steps 5-7 (not invented)
- [ ] Needs from Step 7 Matrix (not assumed)
- [ ] Features from Step 11 (not aspirational)
- [ ] Clients from Value Network (not hypothetical)
- [ ] Assumptions flagged with [ASSUMPTION] tag

---

### Phase 6: Dashboard Generation (Optional, 30-45 min)

Generate an HTML visualization showing:
- Product portfolio overview
- Client coverage matrix
- Need coverage heatmap
- Business model coherence indicators

See `templates/Step12_Viability_Dashboard.html` for format.

---

## Common Pitfalls to Avoid

### 1. Single Business Model for Multiple Clients
**Wrong**: One generic business model for the product
**Right**: Distinct business model per client type

### 2. Confusing Clients and Requesters
**Wrong**: "Clinical Research Teams" as a client (they're requesters)
**Right**: "HC/FMUSP (Hospital das Clínicas)" as client, with Clinical Research Teams as requesters within

### 3. Exceeding Character Limits
**Wrong**: 300-character value propositions
**Right**: Ruthlessly edit to 250 characters, preserving core message

### 4. Generic Value Propositions
**Wrong**: "We provide innovative solutions for healthcare"
**Right**: "For hyperthyroidism patients who face multiple clinic visits, IRDose enables home monitoring, reducing travel burden by 80%."

### 5. Inventing Data
**Wrong**: Creating needs or features not in prior steps
**Right**: Pulling exact language from Steps 5-7 and Step 11

---

## Timeline Expectations

| Scope | Time |
|-------|------|
| Single product, 1 client | 2-3 hours |
| Single product, 2-3 clients | 3-4 hours |
| Single product, 4+ clients | 4-6 hours |
| Multiple products | Add 2-3 hours per additional product |

---

## Output Summary

### Per Product Deliverables

1. **Product-Market Fit Sheet** (Markdown)
   - Product identity
   - Client-requester mapping
   - MVP features
   - Coverage validation

2. **Business Model Canvas** (Markdown, one per client)
   - Four components with full context
   - Platform-ready 250-char summaries
   - Coherence validation

3. **Platform Entry Card** (Markdown)
   - Copy/paste ready content
   - All character limits verified

### Portfolio Deliverables (if multiple products)

4. **Viability Dashboard** (HTML)
   - Portfolio overview
   - Cross-product analysis
   - Strategic recommendations

---

## Quick Reference: "See My Data" Feature

The Vianeo platform includes a "See my data" toggle that surfaces:
- Needs from Step 7 relevant to selected requesters
- Features from Step 11 that address those needs
- Validation counts for each data element

When generating outputs, structure content to align with what users will see when they click "See my data" in the platform.

---

## Document Metadata

**Based On**:
- Desirability Analysis: Steps 5-7 (Requesters, Needs, Qualification Matrix)
- Acceptability Analysis: Steps 8-9 (Ecosystem, Value Network)
- Feasibility Analysis: Step 11 (Features-Needs Matrix)

**Feeds Into**:
- Committee Presentation: Final evaluation materials
- Financial Modeling: Revenue projections, cost budgets
- Go-to-Market Strategy: Distribution execution
- Investor Materials: Pitch deck, business plan

---

**END OF STEP 12 PROMPT**
