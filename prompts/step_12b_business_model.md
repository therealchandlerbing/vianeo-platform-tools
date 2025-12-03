# Step 12b: Business Model Definition (Per Client) - Generation Prompt

**Version**: 3.0
**Last Updated**: December 2025

---

## Context

You are defining the complete business model for **[PRODUCT NAME]** serving **[SPECIFIC CLIENT]** as part of the Vianeo Viability assessment for **[PROJECT NAME]**.

**CRITICAL**: Business models are defined PER CLIENT, not per product. A single product serving 3 clients requires 3 separate business models. Each client has different:
- Value propositions (what matters to THEM)
- Revenue streams (how THEY pay, their budget sources)
- Distribution channels (how THEY discover and purchase)
- Cost structures (what it costs to serve THEM)

---

## Instructions for AI Assistant

Define the complete business model for **ONE specific client**. Ensure all four components (Value Proposition, Revenue Stream, Distribution Channel, Cost Structure) are tailored to THIS client's context, needs, and purchasing behavior. Repeat this process for each client the product serves.

---

## Platform Hierarchy Reminder

```
PRODUCT/SERVICE
├── Product Name (defined in Step 12a)
├── Product Description (defined in Step 12a)
├── MVP Features (defined in Step 12a)
│
└── CLIENT [THIS BUSINESS MODEL]  ← You are here
    ├── Targeted Requesters (personas within this client)
    └── BUSINESS MODEL
        ├── Value Proposition (≤250 chars) - Tailored to this client
        ├── Revenue Stream (≤250 chars) - How this client pays
        ├── Distribution Channel (≤250 chars) - How this client buys
        └── Cost Structure (≤250 chars) - Cost to serve this client
```

---

## Available Data (From Step 12a)

### Product Configuration

**Product/Service Name**: [Name from Step 12a]

**Product Description**: [250-char description from Step 12a]

**MVP Features**: [List from Step 12a - shared across all clients]

### This Client's Context

**Client Name/Type**: [Specific client from Step 12a client list]

**Organization Type**: [Hospital/Facility/Enterprise/Research Institution/etc.]

**Acceptability Rating**: [Favorable/Neutral/Unfavorable - from Steps 8-9]

**Targeted Requesters Within This Client**:
- [Requester 1]: [Brief profile from Step 12a]
- [Requester 2]: [Brief profile]

**Primary Needs of These Requesters** (from Step 7):
- [Need 1]: [Intensity] | [Current Satisfaction] | [Validation]
- [Need 2]: [Intensity] | [Satisfaction] | [Validation]

### Resources & Partnerships (from Step 11/12a)

**Available Means**: [Resources/capabilities relevant to serving this client]

**Technical Partners**: [Partner organizations relevant to this client]

**Client-Specific Resources**: [Any unique resources needed for this client type]

---

## Your Task

Define the complete business model for serving **[CLIENT NAME]** specifically. Consider:
- What value proposition resonates with THIS client's priorities?
- How does THIS client typically pay for solutions? (procurement, budget cycles, decision process)
- How does THIS client discover and purchase products? (conferences, sales teams, procurement portals)
- What does it cost to acquire and serve THIS client type?

---

## Output Structure

# BUSINESS MODEL: [Product Name] for [Client Name/Type]

**Project**: [Project Name]
**Product**: [Product Name]
**Client**: [Client Name/Type]
**Date**: [YYYY-MM-DD]
**Version**: 1.0

---

## Client Context

**Organization Type**: [What kind of organization]

**Why They Pay**: [Their motivation - operational efficiency, patient outcomes, regulatory compliance, competitive advantage, etc.]

**Decision Process**: [Who decides, budget source, procurement requirements, typical timeline]

**Targeted Requesters**:
- [Requester 1]: [Role in decision - decision maker, user, influencer]
- [Requester 2]: [Role]

---

## 1. VALUE PROPOSITION

**Purpose**: Articulate why THIS client chooses this offering. What matters to THEM specifically?

### Value Proposition Formula

```
For [THIS CLIENT TYPE] who [THEIR SPECIFIC PROBLEM/NEED],
[PRODUCT NAME] is a [PRODUCT CATEGORY] that [KEY VALUE FOR THIS CLIENT]
[without/enabling/reducing] [PAIN POINT THIS CLIENT FACES].
```

### Needs Addressed (for this client's requesters)

| Need | Intensity | Requester | Current Satisfaction |
|------|-----------|-----------|---------------------|
| [Need 1] | Fundamental | [Requester A] | Not at all |
| [Need 2] | Important | [Requester A, B] | Rather not |

### Competitive Advantages (relevant to THIS client)

**Advantage 1**: [Title]
- **What**: [Description of advantage]
- **Why It Matters to This Client**: [Specific relevance to their context]
- **Evidence**: [Validation data]

**Advantage 2**: [Title]
- **What**: [Description]
- **Why It Matters to This Client**: [Relevance]
- **Evidence**: [Data]

[Add 1-2 more advantages as relevant]

### Client Benefits by Requester

**For [Requester 1 within this client]**:
- Primary outcome: [Specific measurable result]
- Supporting outcomes: [List 2-3]
- Value delivered by: [Which MVP features enable this]

**For [Requester 2 within this client]**:
- Primary outcome: [Result]
- Supporting outcomes: [List]
- Value delivered by: [Features]

### Platform Input (250 chars max)

```
[Value proposition tailored to THIS CLIENT - use the formula]
```

**Character Count**: [X]/250 ✓

**Quality Check**:
- [ ] Specific to THIS client type (not generic) ✓
- [ ] Uses language this client understands ✓
- [ ] Addresses their specific needs/problems ✓
- [ ] Differentiates from their current alternatives ✓

---

## 2. REVENUE STREAM

**Purpose**: How does THIS client pay? What's their purchasing context?

### Client Payment Context

**Who Holds the Budget**: [Department, role, or entity]

**Budget Type**: [Operating budget, capital expenditure, grant funding, reimbursement, etc.]

**Decision Timeline**: [Annual cycle, project-based, as-needed, etc.]

**Procurement Process**: [Direct purchase, RFP, committee approval, etc.]

### Revenue Model for This Client

**Model Type**: [Subscription | Purchase | License | Per-procedure | Commission | Usage-based | Mixed]

**Revenue Type**: [One-time | Recurring | Mixed]

**Who Pays**: [End user / Organization / Third party / Government]

**Payment Timing**: [Upfront / Monthly / Quarterly / Annual / Per-use]

### Pricing Structure

**Mechanism 1**: [Primary revenue mechanism]
- **Pricing Example**: [Specific price - e.g., "$X/month per user" or "$Y per procedure"]
- **Rationale**: [Why this pricing for this client type]
- **Tied to**: [Which value element or need]

**Mechanism 2** (if applicable): [Secondary mechanism]
- **Pricing Example**: [Price]
- **Rationale**: [Why]

### Revenue Dependencies for This Client

- **Payment Timing**: [When collected vs. when value delivered]
- **Minimum Commitments**: [Contract length, volume minimums]
- **Intermediary Shares**: [If any partners take a cut for this client channel]
- **Churn Risk**: [Expected retention pattern for this client type]

### Platform Input (250 chars max)

```
[Revenue stream description specific to THIS CLIENT - who pays, how, when, pricing examples]
```

**Character Count**: [X]/250 ✓

**Quality Check**:
- [ ] Matches how this client actually pays ✓
- [ ] Pricing appropriate for this client's budget context ✓
- [ ] Concrete examples (not vague) ✓
- [ ] Dependencies noted ✓

---

## 3. DISTRIBUTION CHANNEL

**Purpose**: How does THIS client discover, evaluate, and purchase solutions?

### This Client's Buying Behavior

**Discovery Sources**: [Where they learn about new solutions - conferences, peer recommendations, publications, sales outreach, etc.]

**Evaluation Process**: [How they assess options - demos, pilots, references, RFP scoring, etc.]

**Purchase Path**: [How they actually buy - direct, through procurement, via group purchasing, etc.]

**Typical Timeline**: [From awareness to purchase - weeks, months, quarters]

### Distribution Strategy for This Client

#### Discovery/Awareness Channels

**Primary Channels** (3-4):
1. **[Channel]**: [How it works for this client] | Expected effectiveness: [High/Med/Low]
2. **[Channel]**: [Approach] | Effectiveness: [Level]
3. **[Channel]**: [Approach] | Effectiveness: [Level]

**Supporting Channels**:
- [Channel]: [Role]
- [Channel]: [Role]

#### Purchase Channel

**Primary**: [Direct web | Sales team | Marketplace | Partner/Reseller | Procurement portal]

**Transaction Process**: [Step-by-step how this client purchases]

**Why This Channel**: [How it matches this client's buying behavior]

#### Intermediary Strategy

**Approach**: [Direct to client] OR [Through intermediaries]

If intermediaries:
- **[Intermediary type]**: Role: [What they do] | Economics: [Revenue share]

**Rationale**: [Why direct or intermediary for this client type]

#### Delivery Method

**How They Receive**: [Digital delivery, physical installation, onboarding process, etc.]

**Support Model**: [Training, ongoing support, account management]

### Platform Input (250 chars max)

```
[Distribution channel description for THIS CLIENT - discovery, purchase path, delivery]
```

**Character Count**: [X]/250 ✓

**Quality Check**:
- [ ] Matches how this client actually buys ✓
- [ ] Channels are accessible to us ✓
- [ ] Realistic CAC implied ✓
- [ ] Support model included ✓

---

## 4. COST STRUCTURE

**Purpose**: What does it cost to acquire and serve THIS client type specifically?

### Client-Specific Cost Considerations

**Acquisition Complexity**: [Low/Med/High] - [Why - e.g., "High: requires enterprise sales cycle with multiple demos"]

**Service Complexity**: [Low/Med/High] - [Why - e.g., "Med: requires initial training but then self-serve"]

**Support Intensity**: [Low/Med/High] - [Why - e.g., "High: regulatory environment requires dedicated support"]

### Cost Categories for This Client

#### Customer Acquisition Costs (CAC)

- [Cost item 1]: [e.g., "Sales team time: 40 hours per client close"]
- [Cost item 2]: [e.g., "Trade show presence: $5K per relevant conference"]
- [Cost item 3]: [e.g., "Pilot/demo costs: $2K per pilot"]

**Estimated CAC**: [Range or estimate for this client type]

#### Delivery Costs

- [Cost item]: [e.g., "Onboarding and training: 8 hours per facility"]
- [Cost item]: [e.g., "Implementation support: 20 hours first month"]

#### Ongoing Service Costs (per client)

- [Cost item]: [e.g., "Customer success management: 2 hours/month"]
- [Cost item]: [e.g., "Technical support: 4 hours/month average"]
- [Cost item]: [e.g., "Account management: 1 hour/month"]

### Fixed vs Variable Split (for this client type)

**Fixed Costs** (don't scale with this client count):
- [Item]: [Why fixed]
- [Item]: [Why fixed]

**Variable Costs** (scale with each additional client of this type):
- [Item]: [Why variable]
- [Item]: [Why variable]

### Cost Drivers

**Driver 1**: [e.g., "Client size"] → Impact: [How it affects costs]

**Driver 2**: [e.g., "Support requirements"] → Impact: [Effect]

### Margin Potential

**Revenue per Client** (typical): [Estimate based on pricing]

**Cost to Serve** (typical): [Estimate based on costs above]

**Gross Margin Potential**: [High/Med/Low] - [Rough estimate %]

### Platform Input (250 chars max)

```
[Cost structure for serving THIS CLIENT - major categories, fixed vs variable, key drivers]
```

**Character Count**: [X]/250 ✓

**Quality Check**:
- [ ] CAC realistic for this client type ✓
- [ ] Service costs reflect delivery model ✓
- [ ] Fixed/variable split correct ✓
- [ ] Margin potential assessed ✓

---

## 5. BUSINESS MODEL COHERENCE CHECK

**Purpose**: Verify all four components align for THIS client's business model.

### Alignment Checks

| Alignment | Question | Status | Notes |
|-----------|----------|--------|-------|
| Value ↔ Features | Can MVP features deliver this value prop? | ✓/⚠️ | [Assessment] |
| Value ↔ Revenue | Does pricing reflect value delivered? | ✓/⚠️ | [Assessment] |
| Revenue ↔ Distribution | Does channel support payment model? | ✓/⚠️ | [Assessment] |
| Distribution ↔ Costs | Is CAC included in cost structure? | ✓/⚠️ | [Assessment] |
| Costs ↔ Revenue | Can revenue support costs at scale? | ✓/⚠️ | [Assessment] |

### Red Flag Assessment

**Check for these contradictions**:
- ⚠️ Premium value prop + self-serve channel → Mismatch?
- ⚠️ High-touch sales + low price point → Unsustainable CAC?
- ⚠️ Enterprise client + consumer pricing → Underpriced?
- ⚠️ Complex onboarding + no support costs → Missing costs?

**Red Flags for This Client**: [List any identified OR "None - coherent"]

### Coherence Summary

**Overall Assessment**: [Coherent | Minor Issues | Major Issues]

**Narrative** (2-3 sentences):
[Explain overall coherence of this client's business model. Note strongest alignment points and any concerns.]

---

## 6. COMPARISON TO OTHER CLIENTS (if applicable)

### How This Business Model Differs

| Component | This Client | Client 2 | Client 3 |
|-----------|-------------|----------|----------|
| Value Prop Focus | [Key theme] | [Theme] | [Theme] |
| Revenue Model | [Type] | [Type] | [Type] |
| Primary Channel | [Channel] | [Channel] | [Channel] |
| CAC Level | [High/Med/Low] | [Level] | [Level] |
| Margin Potential | [Level] | [Level] | [Level] |

**Strategic Implications**: [Why different business models? Which client is priority?]

---

## 7. NEXT STEPS

### Validation Needs

| What to Validate | Method | Timeline | Owner |
|-----------------|--------|----------|-------|
| [e.g., Pricing acceptance] | [Customer interviews] | [Before launch] | [Name] |
| [e.g., Channel effectiveness] | [Pilot campaign] | [Timeline] | [Name] |

### Risks for This Client

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [e.g., Long sales cycle] | [High/Med/Low] | [Impact] | [Strategy] |
| [e.g., Budget constraints] | [Level] | [Impact] | [Strategy] |

---

## Quality Standards Checklist

### Completeness
- [ ] All four business model components defined
- [ ] All platform inputs ≤250 characters
- [ ] Client context clearly established
- [ ] Concrete pricing examples provided
- [ ] Cost categories identified with drivers

### Client-Specificity
- [ ] Value prop tailored to THIS client's priorities
- [ ] Revenue model matches THIS client's payment patterns
- [ ] Distribution matches THIS client's buying behavior
- [ ] Costs reflect serving THIS client type
- [ ] Not a generic business model copy/pasted

### Consistency
- [ ] Value prop tied to validated needs from Step 12a
- [ ] Features can deliver value claims
- [ ] Pricing appropriate for client's budget context
- [ ] Distribution channels accessible
- [ ] Costs account for implied activities

### Evidence Basis
- [ ] Advantages cite validation data
- [ ] Pricing informed by need intensity/satisfaction
- [ ] Distribution based on client behavior research
- [ ] Cost estimates grounded in resource assessment
- [ ] Assumptions flagged with [ASSUMPTION] tag

---

## Common Mistakes to Avoid

1. **Generic Business Model**: Same value prop for every client → Must be tailored
2. **Copy-Paste Revenue**: "Subscription" without considering how this client actually pays
3. **Ignoring Client Context**: Enterprise client given consumer-style self-serve model
4. **Missing CAC**: Distribution costs not reflected in cost structure
5. **Optimistic Margins**: Revenue model doesn't support cost to serve
6. **Character Violations**: Platform inputs exceeding 250 chars

---

## Document Metadata

**Business Model Definition**
**Project**: [Project Name]
**Product**: [Product Name]
**Client**: [Client Name/Type]
**Version**: 1.0
**Date**: [YYYY-MM-DD]

**Based On**:
- Product-Market Fit Definition (Step 12a)
- Desirability Analysis: Steps 5-7
- Ecosystem Analysis: Steps 8-9
- Feasibility Analysis: Step 11

**Feeds Into**:
- Platform Entry Card (Step 12 synthesis)
- Financial Modeling: Step 13
- Go-to-Market Strategy
- Committee Presentation

---

**END OF BUSINESS MODEL DEFINITION FOR [CLIENT NAME]**

---

## Repeat for Each Client

**Important**: Create a separate Business Model Definition for EACH client the product serves. The same product may have very different business models depending on the client.

**Example**:
- **Product**: IRDose Wearable Dosimetry System
- **Client 1**: Research Institutions → Hardware purchase + annual platform subscription
- **Client 2**: Private Clinics → Lease + per-patient service fee
- **Client 3**: Public Hospitals (SUS) → Government reimbursement model per procedure

Each requires its own complete business model document using this template.
