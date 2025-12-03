# Step 12a: Product-Market Fit Definition - Generation Prompt

**Version**: 3.0
**Last Updated**: December 2025

---

## Context

You are analyzing [PROJECT NAME] to define product-market fit configurations that connect validated customer needs with specific product/service offerings. This step defines the PRODUCT level—identity, features, and client-requester mappings—before business models are developed per client in Step 12b.

---

## Instructions for AI Assistant

Define product-market fit configurations for each product: identity (name, description), MVP features (6-10), and mapping of clients to their nested requesters. Use only validated data from Steps 5-7, 8-9, and Step 11—flag all assumptions explicitly with [ASSUMPTION] tag.

**Critical Understanding**: A single product may serve MULTIPLE clients. Each client will have their own business model in Step 12b, but this step focuses on defining the product itself and identifying which clients it serves.

---

## Platform Hierarchy Reminder

```
PRODUCT/SERVICE (defined in this step)
├── Product Name (≤60 chars)
├── Product Description (≤250 chars)
├── Product Features (6-10 MVP from Step 11)
│
├── CLIENT 1 (identified from Value Network)
│   └── Targeted Requesters (personas from Steps 5-7)
│
├── CLIENT 2 (different organization type)
│   └── Targeted Requesters (different personas)
│
└── CLIENT 3...
```

**Key Distinction**:
- **Clients** = Organizations from the Value Network who PAY (hospitals, facilities, enterprises)
- **Targeted Requesters** = Individual personas WITHIN those organizations who have NEEDS

---

## Available Data

### From Ecosystem Analysis (Steps 8-9) - CLIENT IDENTIFICATION

**Potential Clients**: [List client organizations from value network - these are PAYING organizations]

Format:
```
- [Client Organization Name/Type] | Acceptability: [Favorable/Neutral/Unfavorable] | Position in Value Chain: [Enabler/Product/Channel/Buyer/End User]
```

### From Desirability Analysis (Steps 5-7) - REQUESTER & NEED IDENTIFICATION

**Requester Personas**: [List requesters with the client organizations they belong to]

Format:
```
- [Requester Persona Name] | Within Client: [Organization they work for/interact with] | Role: [Decision maker/User/Influencer]
```

**Validated Needs**: [List needs with intensity ratings and interview counts]

Format:
```
- [Need statement] | Intensity: [Fundamental/Important/Secondary] | Satisfaction: [Not at all/Rather not/Pretty much/Totally] | Validation: [>5/<5/Not interviewed] | Requesters: [Which personas have this need]
```

### From Feasibility Analysis (Step 11) - FEATURE IDENTIFICATION

**Validated Features**: [List features with need mappings]

Format:
```
- [Feature name]: Addresses [Need 1, Need 2] | Timeline: [Available/Short/Mid/Long] | Validation: [>5/<5/Not interviewed]
```

**Available Means**: [List resources, team capabilities, assets]

**Technical Partners**: [List partners with their contributions]

### Project Context

**Field of Application** (60 chars): [Domain]

**Problem Statement** (250 chars): [Problem being solved]

**Project Stage**: [Idea/Prototype/Pilot/Early Commercialization/Growth]

---

## Your Task

Define product-market fit for [PRODUCT NAME] by:
1. Establishing clear product identity (name, description)
2. Identifying ALL clients this product will serve
3. Mapping requesters to their client organizations
4. Selecting MVP features that cover needs across all clients
5. Validating coverage of fundamental needs for each client

---

## Output Structure

### PRODUCT: [Product Name]

---

## 1. PRODUCT IDENTITY

**Product/Service Name** (60 chars max):
[Clear, client-facing name that any client type would understand]

**Character Count**: [X]/60 ✓

---

**Product Description** (250 chars max):
[What the client understands they're buying - format: what it is, for whom, key capabilities, key differentiator]

**Character Count**: [X]/250 ✓

---

**Product Description Formula**:
> A [product category] with [key technology/approach] that enables [primary capability] for [target users]. [Optional: key differentiator].

---

## 2. CLIENTS SERVED

### Client Identification Table

| # | Client | Organization Type | Acceptability | Nested Requesters | Priority |
|---|--------|------------------|---------------|-------------------|----------|
| 1 | [Client Org 1] | [Hospital/Facility/Enterprise/etc.] | [Favorable/Neutral/Unfavorable] | [Requester A, Requester B] | [High/Med/Low] |
| 2 | [Client Org 2] | [Type] | [Rating] | [Requester C, Requester D] | [Priority] |
| 3 | [Client Org 3] | [Type] | [Rating] | [Requester E] | [Priority] |

**Client Selection Criteria Applied**:
- ✅ From validated Value Network (Steps 8-9)
- ✅ Acceptable or Favorable rating preferred
- ✅ Has nested requesters with validated needs
- ✅ Business relationship identified (can reach them)

---

### Client 1: [Client Organization Name/Type]

**Organization Context**:
[Brief description: What kind of organization? What's their relationship to the problem? Why would they pay?]

**Targeted Requesters Within This Client**:

#### Requester: [Persona Name]

**Profile**: [Brief description from Step 6]

**Key Characteristics**:
- [Behavior/attitude 1]
- [Behavior/attitude 2]
- [Context/pain point]

**Primary Needs** (from Step 7):
| Need Statement | Intensity | Current Satisfaction | Validation |
|---------------|-----------|---------------------|------------|
| [Need 1] | Fundamental | Not at all | >5 interviewed |
| [Need 2] | Important | Rather not | >5 interviewed |
| [Need 3] | Important | Pretty much | <5 interviewed |

#### Requester: [Persona Name 2] (if applicable)

[Repeat structure]

**Client 1 Need Summary**:
- Fundamental needs: [Count]
- Important needs: [Count]
- Validation strength: [Strong/Moderate/Weak]

---

### Client 2: [Client Organization Name/Type]

[Repeat full structure for each client]

---

### Client 3: [Client Organization Name/Type]

[Repeat full structure for each client]

---

## 3. MVP FEATURES

### Feature Selection Criteria

Pull from Step 11 Features-Needs Matrix. Prioritize:
1. Features addressing FUNDAMENTAL needs (must have for any client)
2. Features with >5 interviews validation (high confidence)
3. Features with "Short term" or "Already available" timeline
4. Features that serve MULTIPLE clients (efficiency)

---

### MVP Features Table

| # | Feature Name | Needs Covered | Clients Served | Timeline | Validation | MVP Rationale |
|---|-------------|---------------|----------------|----------|------------|---------------|
| 1 | [Feature 1] | [Need A, Need B] | [Client 1, Client 2] | Available | >5 interviewed | [Why MVP: covers fundamental need across clients] |
| 2 | [Feature 2] | [Need C] | [Client 1, Client 3] | Short term | >5 interviewed | [Why MVP] |
| 3 | [Feature 3] | [Need D, Need E] | [Client 2] | Short term | <5 interviewed | [Why MVP despite lower validation] |

[Continue for 6-10 MVP features]

---

### MVP Summary

**Total MVP Features**: [Number] *(target: 6-10)*

**Timeline Distribution**:
- Available now: [Count]
- Short-term (0-6 mo): [Count]
- Mid-term (6-18 mo): [Count if any in MVP]

**Validation Strength**:
- High validation (>5 interviews): [Count]/[Total] = [%]

**Client Coverage**:
- Features serving all clients: [Count]
- Features serving 2+ clients: [Count]
- Client-specific features: [Count]

---

### Additional Features (Phased - Post-MVP)

| Feature Name | Needs Covered | Clients | Timeline | Validation | Phasing Rationale |
|--------------|---------------|---------|----------|------------|-------------------|
| [Feature X] | [Need F] | [Client 2] | Mid term | >5 interviewed | [Why phased: important not fundamental] |
| [Feature Y] | [Need G] | [Client 1] | Long term | Not interviewed | [Why phased: low validation, enhancement] |

---

## 4. COVERAGE VALIDATION

### Fundamental Needs Coverage (Per Client)

#### Client 1: [Name]

| Fundamental Need | Covered by Feature | Status |
|-----------------|-------------------|--------|
| [Need 1] | [Feature X] | ✓ Covered |
| [Need 2] | [Feature Y] | ✓ Covered |
| [Need 3] | — | ⚠️ Gap |

**Coverage**: [X]/[Y] fundamental needs covered

#### Client 2: [Name]

| Fundamental Need | Covered by Feature | Status |
|-----------------|-------------------|--------|
| [Need 1] | [Feature X] | ✓ Covered |
| [Need 2] | [Feature Z] | ✓ Covered |

**Coverage**: [X]/[Y] fundamental needs covered

[Repeat for each client]

---

### Cross-Client Coverage Matrix

| Need | Intensity | Client 1 | Client 2 | Client 3 | Feature |
|------|-----------|----------|----------|----------|---------|
| [Need A] | Fundamental | ✓ | ✓ | — | Feature 1 |
| [Need B] | Fundamental | ✓ | — | ✓ | Feature 2 |
| [Need C] | Important | ✓ | ✓ | ✓ | Feature 3 |
| [Need D] | Important | — | ✓ | ✓ | Feature 4 |

---

### Coverage Summary

| Client | Fundamental Needs | Covered | Coverage % | Status |
|--------|------------------|---------|------------|--------|
| Client 1 | [X] | [Y] | [%] | [Complete/Gaps] |
| Client 2 | [X] | [Y] | [%] | [Status] |
| Client 3 | [X] | [Y] | [%] | [Status] |
| **Portfolio** | [Total] | [Covered] | [%] | [Status] |

**Coverage Quality Checks**:
- [ ] All fundamental needs have at least one MVP feature ✓
- [ ] All MVP features map to fundamental or important needs ✓
- [ ] MVP size is 6-10 features ✓
- [ ] >50% of MVP features have >5 interviews validation ✓
- [ ] Each client has fundamental needs covered ✓

**Gaps Identified**:
[List any fundamental needs without feature coverage per client, or note "None - all fundamental needs covered for all clients"]

---

## 5. RESOURCE REQUIREMENTS

### Means Required (from Step 11)

**Development/Technical**:
- [Resource 1 - e.g., "iOS/Android development team (2 developers on staff)"]
- [Resource 2 - e.g., "Clinical advisory board (3 part-time advisors)"]
- [Resource 3 - e.g., "Cloud infrastructure budget"]

**Shared Across Clients**:
- [Resources that serve all clients]

**Client-Specific Resources**:
- Client 1 specific: [Resources]
- Client 2 specific: [Resources]

---

### Technical Partners Critical for MVP

| Partner | Contribution | Clients Impacted | Status |
|---------|-------------|------------------|--------|
| [Partner 1] | [What they provide] | [All / Client 1,2 / etc.] | [Secured/High confidence/Uncertain] |
| [Partner 2] | [Contribution] | [Clients] | [Status] |

*[If no partners needed: "No critical external partnerships required for MVP."]*

---

### Resource Gaps & Mitigation

| Gap | Impact | Clients Affected | Mitigation Strategy |
|-----|--------|------------------|---------------------|
| [Gap 1] | [Timeline/feature impact] | [Which clients] | [Plan to address] |
| [Gap 2] | [Impact] | [Clients] | [Mitigation] |

*[If no gaps: "No significant resource gaps identified."]*

---

## 6. CONFIGURATION RATIONALE

### Feature Selection Logic

[Paragraph 1: Core Value Focus - 3-4 sentences]
Explain which fundamental need cluster this configuration prioritizes across clients. Describe which core capabilities compose the MVP and what validation evidence supports these choices. Reference specific interview counts and need intensity levels.

[Paragraph 2: Multi-Client Efficiency - 3-4 sentences]
Explain how the feature set serves multiple clients efficiently. Identify which features provide cross-client value versus client-specific value. Justify any client-specific features included in MVP.

[Paragraph 3: Phasing Strategy - 2-3 sentences]
Explain which features are phased to mid/long-term and why (need intensity, validation levels, resource constraints). Clarify the logic for what's MVP vs. enhancement.

---

## 7. NEXT STEPS

### Business Model Development (Step 12b)

For each client identified, develop a complete business model:

| Client | Business Model Priority | Key Considerations |
|--------|------------------------|-------------------|
| [Client 1] | [High/Med/Low] | [Value prop focus, revenue model type, distribution approach] |
| [Client 2] | [Priority] | [Considerations] |
| [Client 3] | [Priority] | [Considerations] |

---

### Validation Needs Before Business Model

| Validation Needed | Client(s) | Method | Timeline |
|------------------|-----------|--------|----------|
| [e.g., Price sensitivity testing] | [Client 1] | [Customer interviews] | [Before Step 12b] |
| [Validation item] | [Clients] | [Method] | [Timeline] |

---

## Quality Standards Checklist

### Completeness
- [ ] Product identity defined with character limits verified
- [ ] All clients from Value Network considered
- [ ] Each client has requesters mapped
- [ ] 6-10 MVP features selected with rationale
- [ ] Coverage validation completed per client
- [ ] Resource requirements documented

### Consistency
- [ ] Clients from validated Value Network (Steps 8-9)
- [ ] Requesters from validated personas (Steps 5-7)
- [ ] Needs from qualification matrix (Step 7)
- [ ] Features from feature library (Step 11)
- [ ] Every feature maps to at least one need
- [ ] Every fundamental need has feature coverage

### Clarity
- [ ] Product name/description client-comprehensible
- [ ] Client-requester relationships clear
- [ ] Feature-need mappings explicit
- [ ] Rationale explains logic clearly

### Evidence Basis
- [ ] Interview counts accurate
- [ ] Validation levels correctly assigned
- [ ] Assumptions flagged with [ASSUMPTION] tag
- [ ] No invented data

---

## Common Pitfalls to Avoid

1. **Confusing Clients and Requesters**: Requesters are personas; Clients are organizations that pay
2. **Single Client Assumption**: Most products serve multiple clients with different needs
3. **Feature Bloat**: Including >12 features in MVP indicates lack of focus
4. **Ignoring Client-Specific Needs**: Each client type may have unique fundamental needs
5. **Generic Product Description**: Should be immediately clear what client is buying
6. **Missing Coverage**: Fundamental needs without feature coverage
7. **Unvalidated Data**: Using needs or features not from prior steps

---

## Document Metadata

**Product/Market Fit Definition**
**Project**: [Project Name]
**Product**: [Product Name]
**Clients Served**: [Count]
**Version**: 1.0
**Date**: [YYYY-MM-DD]

**Based on**:
- Desirability (Steps 5-7): Requesters, Needs, Qualification Matrix
- Acceptability (Steps 8-9): Value Network, Client Identification
- Feasibility (Step 11): Features-Needs Matrix, Resources

**Next Steps**:
- Business Model Definition per Client (Step 12b)
- Platform Entry Card (Step 12 synthesis)
- Financial Modeling (Step 13)

---

**END OF PRODUCT-MARKET FIT DEFINITION**
