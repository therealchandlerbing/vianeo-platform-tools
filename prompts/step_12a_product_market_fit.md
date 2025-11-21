# Step 12a: Product-Market Fit Definition - Generation Prompt

## Context

You are analyzing [PROJECT NAME] to define product-market fit configurations that connect validated customer needs with specific product/service offerings.

---

## Available Data

### From Desirability Analysis (Steps 5-7)

**Validated Clients**: [List client segments from value network]

**Requester Personas**: [List requesters with their associated clients]

**Validated Needs**: [List needs with intensity ratings and interview counts]

Format:
```
- [Need statement] | Intensity: [Fundamental/Important/Secondary] | Satisfaction: [Not at all/Rather not/Pretty much/Totally] | Validation: [>5/<5/Not interviewed]
```

### From Feasibility Analysis (Step 11)

**Validated Features**: [List features with need mappings]

Format:
```
- [Feature name]: Addresses [Need 1, Need 2] | Timeline: [Available/Short/Mid/Long] | Validation: [>5/<5/Not interviewed]
```

**Available Means**: [List resources, team capabilities, assets]

**Technical Partners**: [List partners with their contributions]

**Timeline Estimates**: [Feature readiness by phase]

### Project Context

**Field of Application** (60 chars): [Domain]

**Problem Statement** (250 chars): [Problem being solved]

**Project Stage**: [Idea/Prototype/Pilot/Early Commercialization/Growth]

---

## Your Task

Define [NUMBER] product/service configuration(s) that represent viable product-market fit. For each configuration, specify all required elements following the structure below.

---

## Output Structure (For Each Product)

### PRODUCT/SERVICE [NUMBER]: [Product Name]

#### PRODUCT IDENTITY

**Product/Service Name** (60 chars max):
[Clear, client-facing name]

**Description** (250 chars max):
[What the client understands they're buying - format: "[What it is] for [who] combining [key capabilities] without [pain point]"]

**Target Client**:
[Specific validated client segment from value network]

**Character Count Verification**:
- Name: [X]/60 characters
- Description: [X]/250 characters

---

#### TARGETED REQUESTERS

**Requesters Within This Client Segment**:

1. **[Requester Persona Name]**
   - Profile: [Brief description]
   - Key characteristics: [Behavior, context, pain points]
   - Primary needs: [3-5 key needs this persona has]

2. **[Requester Persona Name]**
   - Profile: [Brief description]
   - Key characteristics: [Behavior, context, pain points]
   - Primary needs: [3-5 key needs this persona has]

[Continue for 2-4 total requesters]

---

#### PRIMARY NEEDS ADDRESSED

**Needs Table**:

| # | Need Statement | Intensity | Current Satisfaction | Validation | Requesters |
|---|----------------|-----------|---------------------|------------|------------|
| 1 | [Full need statement] | Fundamental | Not at all | >5 interviewed | [Requester 1, 2] |
| 2 | [Full need statement] | Fundamental | Rather not | >5 interviewed | [Requester 1] |
| 3 | [Full need statement] | Important | Rather not | >5 interviewed | [Requester 2] |
| 4 | [Full need statement] | Important | Pretty much | <5 interviewed | [Requester 1, 2] |
| 5 | [Full need statement] | Secondary | Pretty much | Not interviewed | [Requester 2] |

[Continue for 5-10 total needs]

**Summary**:
- Total Needs Addressed: [Number]
- Fundamental: [Count]
- Important: [Count]
- Secondary: [Count]
- Validation Level: [>5 interviewed for majority/mixed/<5 for majority]

---

#### PRODUCT FEATURES

**MVP Features (Must Have)**

| Feature Name | Timeline | Needs Covered | Validation | MVP Rationale |
|--------------|----------|---------------|------------|---------------|
| [Feature 1] | Already available | [Need 1, Need 2] | >5 interviewed | [Why this is MVP-critical: covers fundamental need X with strong validation] |
| [Feature 2] | Short term | [Need 3] | >5 interviewed | [Why this is MVP-critical] |
| [Feature 3] | Short term | [Need 4, Need 5] | <5 interviewed | [Why this is MVP-critical despite lower validation] |

[Continue for 6-10 MVP features]

**MVP Summary**:
- Total MVP Features: [Number] (target: 6-10)
- Available Now: [Count]
- Short-term: [Count]
- Mid-term: [Count if any in MVP]
- High Validation (>5): [Count]
- Coverage Check: All [X] fundamental needs have at least one MVP feature ✓

**Additional Features (Phased - Not MVP)**

| Feature Name | Timeline | Needs Covered | Validation | Phasing Rationale |
|--------------|----------|---------------|------------|-------------------|
| [Feature X] | Mid term | [Need 6] | >5 interviewed | [Why phased: important not fundamental/requires additional dev time/etc.] |
| [Feature Y] | Long term | [Need 7] | Not interviewed | [Why phased: secondary need/low validation/future enhancement] |

[Continue for 0-5 phased features]

---

#### FEATURE SELECTION RATIONALE

**MVP Decision Logic**:

[2-3 paragraphs explaining:]

Paragraph 1: **Core Value Focus**
This configuration prioritizes [key need cluster - list 2-3 fundamental needs] which represents the fundamental value proposition for [client segment]. The MVP focuses on [core capabilities - list 3-4 key features] which address the highest-priority needs validated through [number] interviews: [list top 2-3 needs with evidence].

Paragraph 2: **Differentiation & Validation**
[Feature set highlights - name 2-3 specific features] were included because they enable [specific outcome] without [current pain point identified in needs], differentiating from alternatives like [competitor approach if known] which [limitation based on needs analysis]. All MVP features either cover fundamental needs or provide critical enabling capabilities (e.g., payment security enabling transactions).

Paragraph 3: **Phasing Strategy**
[Secondary features - name 2-3 phased features] are deferred to [mid/long-term] because they address [important but not fundamental/secondary] needs and require [constraint: partnerships/additional validation/extended development time]. [Any long-term features] are positioned as future enhancements since they [reason: enhance vs. enable core value/lower validation confidence/etc.].

---

#### RESOURCE REQUIREMENTS

**Means Required** (from Feasibility):
- [Resource/capability 1 from Step 11 analysis]
- [Resource/capability 2 from Step 11 analysis]
- [Resource/capability 3 from Step 11 analysis]
- [Team/asset/financial resource needed]

**Technical Partners Critical for MVP**:
- **[Partner Name]**: [Specific contribution to solution - what capability they provide]
- **[Partner Name]**: [Specific contribution to solution]

[If no partners needed: "No critical external partnerships required for MVP"]

**Resource Gaps & Mitigation**:
- **Gap**: [Missing capability or uncertainty]
  - **Impact**: [How this affects timeline or features]
  - **Mitigation Strategy**: [Plan to address - Phase feature/Secure partnership/Build internally/etc.]

[If no gaps: "No significant resource gaps identified. All MVP requirements covered by available means and confirmed partnerships."]

---

#### COVERAGE VALIDATION

**Need Coverage Matrix**:

| Need Intensity | Total Needs | Covered by MVP | Coverage % |
|----------------|-------------|----------------|------------|
| Fundamental | [X] | [Y] | [Y/X × 100]% |
| Important | [X] | [Y] | [Y/X × 100]% |
| Secondary | [X] | [Y] | [Y/X × 100]% |

**Quality Checks**:
- [ ] All fundamental needs have at least one MVP feature ✓
- [ ] All MVP features map to fundamental or important needs ✓
- [ ] MVP size is 6-10 features ✓
- [ ] >50% of MVP features have >5 interviews validation ✓
- [ ] Timeline is realistic given available resources ✓
- [ ] No features included without clear need mapping ✓

**Gaps Identified**:
[List any fundamental needs without feature coverage, or note "None - all fundamental needs covered"]

---

## Decision Framework for Feature Selection

### Include in MVP if:
- ✅ Covers "Fundamental" or "Important" need
- ✅ Information reliability: >5 people interviewed
- ✅ Timeline: Already available or Short term
- ✅ Critical for core value proposition
- ✅ Differentiates from alternatives
- ✅ Table stakes (must-have for market entry)

### Phase to Mid/Long-term if:
- 🔄 Covers "Important" need BUT long timeline or <5 interviewed
- 🔄 Covers "Secondary" need
- 🔄 Enhancement rather than core functionality
- 🔄 Requires partnerships not yet secured
- 🔄 Moderate validation (3-5 interviews)

### Exclude entirely if:
- ❌ Not validated in Feasibility (not in feature library)
- ❌ No clear need mapping
- ❌ Resource gaps without mitigation strategy
- ❌ Long timeline + low validation + secondary need

### Border Cases (use judgment):
- 🤔 **Important need + medium validation (4-5 interviews)**: Include if resources allow and addresses gap in fundamental need coverage
- 🤔 **Fundamental need + long timeline**: Flag as critical gap, consider if timeline can be accelerated or feature simplified
- 🤔 **High validation + secondary need**: Include if very low cost/effort and enhances offering without bloat
- 🤔 **Competitive parity feature**: Include if table stakes (expected by market) even if not differentiating

---

## Example Output (Condensed)

```markdown
### PRODUCT/SERVICE 1: Thinkie Cognitive Training Platform

#### PRODUCT IDENTITY

**Product/Service Name** (48/60 chars):
Thinkie Cognitive Training Platform

**Description** (246/250 chars):
At-home digital cognitive training system for seniors (55-75) combining evidence-based exercises, objective performance tracking, and clinical-grade assessment without facility visits.

**Target Client**:
Senior Living Facilities

---

#### TARGETED REQUESTERS

1. **Active Seniors (65-75)**
   - Profile: Independently living seniors concerned about cognitive health
   - Key characteristics: Health-conscious, technology-accepting, value independence
   - Primary needs: Maintain sharpness, track performance objectively, access tools without facility visits

2. **Adult Children/Caregivers**
   - Profile: 45-60 year olds with aging parents, geographically distributed
   - Key characteristics: Concerned about decline, want oversight, budget-conscious
   - Primary needs: Monitor parent's cognitive health, access affordable solutions, scientifically validated approaches

---

#### PRIMARY NEEDS ADDRESSED

| # | Need Statement | Intensity | Current Satisfaction | Validation | Requesters |
|---|----------------|-----------|---------------------|------------|------------|
| 1 | Maintain cognitive sharpness during aging | Fundamental | Rather not | >5 interviewed | Active Seniors |
| 2 | Track cognitive performance objectively over time | Fundamental | Not at all | >5 interviewed | Active Seniors, Caregivers |
| 3 | Access clinical-grade tools without facility visits | Important | Rather not | >5 interviewed | Active Seniors |
| 4 | Practice evidence-based brain training regularly | Important | Rather not | >5 interviewed | Active Seniors |
| 5 | Identify early signs of cognitive decline | Important | Not at all | >5 interviewed | Caregivers |

**Summary**: 5 needs addressed (2 Fundamental, 3 Important, 0 Secondary) | Validation: >5 interviewed for all

---

#### PRODUCT FEATURES

**MVP Features (Must Have)**

| Feature Name | Timeline | Needs Covered | Validation | MVP Rationale |
|--------------|----------|---------------|------------|---------------|
| Daily adaptive cognitive exercises | Already available | Need 1, 4 | >5 interviewed | Core value - enables practice and maintenance |
| Objective performance tracking dashboard | Already available | Need 2, 5 | >5 interviewed | Fundamental need - differentiates from games |
| Clinical assessment integration | Short term | Need 3 | >5 interviewed | Access fundamental - brings clinical rigor home |
| Progress reports for caregivers | Short term | Need 2, 5 | <5 interviewed | Enables oversight need - two requesters |

**MVP Summary**: 4 features (2 available, 2 short-term) | High validation: 3/4 features | All fundamental needs covered ✓

**Additional Features (Phased - Not MVP)**

| Feature Name | Timeline | Needs Covered | Validation | Phasing Rationale |
|--------------|----------|---------------|------------|-------------------|
| Personalized training recommendations | Mid term | Need 1, 4 | >5 interviewed | Enhancement - ML requires more data |
| Social engagement features | Long term | Need 1 | Not interviewed | Secondary benefit - community building |

---

#### FEATURE SELECTION RATIONALE

This configuration prioritizes **objective measurement and clinical-grade accessibility**, addressing the gap between expensive facility-based clinical assessment (infrequent, inconvenient) and consumer brain games (not validated, no tracking). The MVP focuses on validated exercises plus tracking, the two fundamental needs with strongest evidence.

The key differentiators are **objective performance tracking** (vs. subjective clinical observation) and **daily home accessibility** (vs. quarterly facility visits), both validated through 8+ senior interviews showing current dissatisfaction. Clinical assessment integration brings medical-grade tools to the home context, addressing the "access clinical-grade tools" need rated as highly important.

Personalized recommendations are phased to mid-term because the ML algorithms require user data to be effective (can't launch day one). Social features are deferred as they address a secondary outcome (social engagement from cognitive training) rather than the primary need (maintain sharpness), and validation is weak (mentioned by 2/8 interviewees as "nice to have").

---

#### RESOURCE REQUIREMENTS

**Means Required**:
- Neuroscience research partnership (validates exercise efficacy)
- iOS/Android development team (2 developers on staff)
- Clinical advisory board (3 part-time advisors secured)
- Cloud infrastructure (AWS budget allocated)

**Technical Partners Critical for MVP**:
- **University Memory Clinic**: Provides clinical assessment protocols and validation studies
- **Senior Care Association**: Distribution access to 50+ facilities for pilots

**Resource Gaps & Mitigation**:
- **Gap**: FDA clearance pathway expertise
  - **Impact**: Regulatory uncertainty for clinical claims
  - **Mitigation**: Engage regulatory consultant Q1, may defer "clinical assessment" claim until clearance
```

---

## Quality Standards for Output

### Completeness:
- [ ] All sections filled with specific data (no [TBD] or blank fields)
- [ ] Character limits verified and within range
- [ ] 5-10 needs identified and classified
- [ ] 6-10 MVP features selected with clear rationale
- [ ] All fundamental needs have feature coverage
- [ ] Resource requirements and gaps documented

### Consistency:
- [ ] Every feature maps to at least one need
- [ ] Every fundamental need has at least one MVP feature
- [ ] Timeline assignments realistic given resources
- [ ] Validation levels accurately reflect evidence
- [ ] No contradictions between sections

### Clarity:
- [ ] Product description client-comprehensible
- [ ] Features described action-orientedly
- [ ] Rationale explains logic clearly
- [ ] Specific not generic language throughout
- [ ] Evidence cited explicitly

### Evidence Basis:
- [ ] Clients from validated value network (Desirability)
- [ ] Requesters from validated personas (Desirability)
- [ ] Needs from qualification matrix (Step 7)
- [ ] Features from feature library (Step 11)
- [ ] Resources from means assessment (Step 11)
- [ ] Interview counts accurate
- [ ] Assumptions flagged when made

---

## Common Pitfalls to Avoid

1. **Feature Bloat**: Including >12 features in MVP (indicates lack of focus)
2. **Unsupported Claims**: Listing features not validated in Step 11
3. **Need Misalignment**: Selecting features that don't map to fundamental needs
4. **Reliability Gaps**: Building MVP on features with <5 interviews for majority
5. **Client Confusion**: Using internal terminology in product description
6. **Resource Wishful Thinking**: Assuming partnerships or capabilities not confirmed
7. **Generic Rationale**: Rationale that could apply to any product ("users need features")
8. **Timeline Optimism**: Marking everything "Short term" without resource check

---

## Validation Before Finalizing

**Ask yourself**:
- [ ] Would a potential client clearly understand what they're buying from the description?
- [ ] Does the MVP cover ALL fundamental needs identified?
- [ ] Are all MVP features achievable with available resources and timeline?
- [ ] Is the feature set coherent and focused (not just everything possible)?
- [ ] Have I adhered to character limits (60/250 chars)?
- [ ] Are all claims evidence-based with validation data cited?
- [ ] Have I flagged all assumptions and gaps explicitly?
- [ ] Could someone build this product from this specification?

If any answer is "No" or "Uncertain", revise before finalizing.

---

## Metadata to Include

**Document Footer**:
```
---
**Product/Market Fit Definition**
**Project**: [Project Name]
**Product**: [Product Name]
**Version**: 1.0
**Date**: [YYYY-MM-DD]
**Based on**: Desirability (Steps 5-7) + Feasibility (Step 11)
**Next Steps**: Business Model Definition (Step 12b), Financial Modeling (Step 13)
```
