# STEP 12: Viability Assessment - Product-Market Fit & Business Model

**Time Required:** 2-4 hours per product (1-1.5h PMF definition, 50min-1h business model, 30-45min validation)
**Output:** THREE document sets per product - (1) Product/Market Fit Sheet, (2) Business Model Canvas, (3) Summary Dashboard
**Prerequisites:** Steps 5-11 essential (Desirability: needs/requesters/personas, Feasibility: features matrix), Steps 2-4 recommended for context

---

## Instructions for AI Assistant

Conduct a comprehensive Viability Assessment to define product-market fit and business models. Using validated needs from Steps 5-7 and features from Step 11, configure specific product offerings with: Product identity (name, description within 250 chars, target client), targeted requesters with validated needs, MVP features mapped to needs, and complete business model (value proposition, revenue stream, distribution channel, cost structure). Generate THREE deliverables per product: Product/Market Fit Sheet, Business Model Canvas, and Summary Dashboard.

---

## Overview

Step 12 translates validated customer needs (from Desirability) and technical capabilities (from Feasibility) into concrete commercial structures. You'll define specific product-market fit configurations and complete business models ready for financial modeling and go-to-market execution.

**Philosophy:** Evidence-based configuration, not aspirational planning. Only include validated features, validated clients, and validated needs. Flag assumptions explicitly. Build tight, coherent MVPs focused on fundamental needs.

**Key Principle:** Viability validates commercial logic (what business model, how to monetize) before Financial Modeling quantifies projections (how much revenue, when break-even).

---

## Why Viability Assessment Matters

Many startups fail not because they build something useful, but because they:
- Don't clearly define what they're selling to whom
- Create feature bloat instead of focused MVPs
- Build business models with internal contradictions
- Assume pricing without validating willingness to pay
- Ignore cost structure realities until too late

**This framework prevents that failure.** By systematically mapping features to needs, defining clear value propositions, and validating business model coherence, you create commercially viable products before spending on development.

---

## Position in Vianeo Framework

### The Five Proofs of Value

1. **Legitimacy** (15%): Problem validation - Steps 3-4
2. **Desirability** (25%): Customer needs - Steps 5-7
3. **Acceptability** (20%): Ecosystem alignment - Steps 8-9
4. **Feasibility** (20%): Technical viability - Step 11
5. **Viability** (20%): **→ Business model sustainability - Step 12 (THIS STEP)**

This is the final validation step before financial modeling and go-to-market planning.

---

## Required Inputs

### From Desirability (Steps 5-7) - ESSENTIAL

**Step 5: Needs/Requesters Analysis**
- Validated clients from value network
- Requester personas (who has needs within client orgs)
- Primary needs expressed by requesters

**Step 7: Needs Qualification Matrix**
- Need intensity ratings (Fundamental/Important/Secondary)
- Current satisfaction levels
- Interview validation counts (>5, <5, not interviewed)

### From Feasibility (Step 11) - ESSENTIAL

**Step 11: Features-Needs Matrix**
- Validated feature library
- Feature-to-need mappings
- Implementation timelines (Available/Short/Mid/Long term)
- Available means/resources
- Technical partnerships identified

### From Other Steps - RECOMMENDED

**Step 4: Legitimacy Worksheet**
- Problem statement (250 chars)
- Field of application (60 chars)
- Project context

**Steps 8-9: Ecosystem Analysis**
- Value network structure
- Client segments defined
- Ecosystem players and positions

---

## Output Structure: THREE-FILE PACKAGE PER PRODUCT

### Output 1: Product/Market Fit Sheet

**File Name:** `[ProductName]_PMF_Sheet.md` and `.docx`

**Contents:**
- Product identity (name, description, target client)
- Targeted requesters within client segment
- Primary needs addressed (5-10 needs with intensity)
- Feature configuration (MVP + phased features)
- Resource requirements (means, partners, gaps)
- Configuration rationale (why this feature set)

**Character Limits:**
- Product name: ≤60 characters
- Product description: ≤250 characters

### Output 2: Business Model Canvas

**File Name:** `[ProductName]_Business_Model.md` and `.docx`

**Contents:**
- **Value Proposition** (core message + competitive advantages + client benefits)
- **Revenue Stream** (model description + pricing approach + mechanisms)
- **Distribution Channel** (discovery channels + purchase channels + intermediaries)
- **Cost Structure** (major categories + fixed/variable split + cost drivers)
- Business model coherence validation

**Character Limits:** All four components ≤250 characters for platform input

### Output 3: Summary Dashboard

**File Name:** `[ProjectName]_Viability_Dashboard.md`

**Contents:**
- Portfolio overview (all product configurations)
- Need coverage analysis across products
- Feature comparison matrix
- Business model comparison
- Resource requirements summary
- Key insights and recommendations

---

## Generation Process (Follow Exactly)

### Phase 1: Setup & Scoping (10-15 minutes)

#### Step 1.1: Review Prior Work

**Gather Desirability outputs:**
```
Query: "value network clients requesters needs fundamental important [project name]"
Query: "needs qualification matrix intensity satisfaction interviews [project name]"
Query: "persona profiles [project name]"
```

**Gather Feasibility outputs:**
```
Query: "features library capabilities timeline available short mid long term [project name]"
Query: "features needs matrix mapping coverage [project name]"
Query: "means resources partnerships technical dependencies [project name]"
```

**Gather Context:**
```
Query: "problem statement field application [project name]"
Query: "maturity stage TRL funding resources [project name]"
```

#### Step 1.2: Determine Product Strategy

**Decision Point:** How many product configurations are needed?

**Ask user:**
```
Before creating Product-Market Fit definitions, I need to determine the product strategy:

1. How many distinct products/services do you envision offering?
   - One product with pricing tiers
   - Multiple products for different client segments
   - Two-sided marketplace (separate products for each side)

2. Are there fundamentally different client types with different needs?

3. Do business models differ significantly across segments?

Based on your Desirability analysis, I see [X] client segments. Would you like:
- Option A: One product serving all segments with variations
- Option B: Separate products for [segment 1] and [segment 2]
- Option C: Let me analyze and recommend based on need differences
```

**Output:** Number of products to define (typically 1-3)

---

### Phase 2: Product-Market Fit Definition (PER PRODUCT)

**REPEAT THIS PHASE FOR EACH PRODUCT CONFIGURATION**

#### Step 2.1: Define Product Identity (10 minutes)

**Create product name (60 chars max):**
- Use client-facing language
- Be specific about what it is
- Avoid internal project names

**Write product description (250 chars max):**
- What client understands they're buying
- Who it's for
- What problem it solves
- Format: "[What it is] for [who] combining [key capabilities] without [pain point]"

**Select target client segment:**
- Choose from validated value network
- Be specific (not "healthcare" but "senior living facilities")
- Confirm validated in Desirability

**Quality Check:**
- [ ] Would client immediately understand what this is?
- [ ] Is client segment specific and validated?
- [ ] Fits within 60/250 character limits?

#### Step 2.2: Map Targeted Requesters (5-10 minutes)

**Identify requesters within client segment:**
- From Desirability analysis personas
- Typically 2-4 requesters per product
- Those with relevant needs for this product

**List their primary needs:**
- Focus on fundamental and important needs
- Note current satisfaction levels
- Typically 5-10 needs per requester group

**Quality Check:**
- [ ] Validated requester personas (not assumptions)?
- [ ] Represent actual users/influencers within client org?
- [ ] Needs clearly expressed and prioritized?

#### Step 2.3: Select Product Features (20-30 minutes)

**Review available features from Step 11:**
- Pull complete feature library
- Note which needs each feature addresses
- Check information reliability per feature

**Identify MVP candidates:**

Include in MVP if feature:
- ✅ Covers fundamental or important need
- ✅ High information reliability (>5 interviewed)
- ✅ Available or short-term achievable
- ✅ Core to value proposition

**MVP Sizing:** 6-10 features typically

**Exclude from MVP if:**
- ❌ Covers only secondary needs
- ❌ Low information reliability (<5 interviews)
- ❌ Long-term timeline
- ❌ Enhancement rather than core

**Create feature table:**

```markdown
### MVP Features (Must Have)

| Feature | Timeline | Needs Covered | Validation | Rationale |
|---------|----------|---------------|------------|-----------|
| [Name] | [Phase] | [Need 1, Need 2] | [>5/<5/Not] | [Why MVP] |
```

**Quality Check:**
- [ ] All fundamental needs have feature coverage?
- [ ] All MVP features map to fundamental/important needs?
- [ ] MVP is 6-10 features (focused, not bloated)?
- [ ] Timeline realistic given resources?
- [ ] Every feature has clear need mapping?

#### Step 2.4: Confirm Resource Requirements (5-10 minutes)

**Link to available means:**
- Which resources from Step 11 are required?
- Team capabilities needed
- Assets required

**Identify required partnerships:**
- Which technical partners critical?
- For which features?
- What is their contribution?

**Flag resource gaps:**
- Missing capabilities?
- Partnerships needed but not secured?
- Impact on MVP vs. phased features?

#### Step 2.5: Write Configuration Rationale (5-10 minutes)

**Explain feature selection logic:**
- Why this specific feature set?
- How does it address fundamental needs?
- What makes this configuration coherent?

**Justify MVP priorities:**
- Why these features MVP vs. phased?
- What validation supports choices?

**Note strategic decisions:**
- What features excluded and why?
- What's the phasing logic?

**Output:** 2-3 paragraphs explaining product configuration

---

### Phase 3: Business Model Design (PER PRODUCT)

**REPEAT THIS PHASE FOR EACH PRODUCT CONFIGURATION**

#### Step 3.1: Develop Value Proposition (15-20 minutes)

**List opportunity needs covered:**
- From needs qualification matrix
- Focus on fundamental needs
- Note current satisfaction gaps

**Map features to outcomes:**
- What do clients achieve with these features?
- Frame as outcomes, not capabilities
- Use client language

**Write core positioning statement:**
- One sentence: "For [who], [product] delivers [what outcome]"
- Include key differentiator
- Test for immediate comprehension

**Articulate 2-4 competitive advantages:**
- How is this better than alternatives?
- Why choose this vs. existing solutions?
- Tie to specific validated needs

**Define client benefits by requester:**
- For each requester type, what outcome?
- Be specific and measurable where possible

**Create platform input (250 chars):**
- Condense full value prop to character limit
- Keep core message and top 1-2 advantages

**Quality Check:**
- [ ] Uses client language (no jargon)?
- [ ] Focuses on outcomes (not features)?
- [ ] Differentiates from alternatives?
- [ ] Grounded in validated needs?
- [ ] Platform input ≤250 characters?

#### Step 3.2: Define Revenue Stream (10-15 minutes)

**Describe revenue model:**
- How is money earned?
- What is being charged for?
- Clear explanation in plain language

**Specify pricing approach:**
- Per unit, subscription, commission, license, usage, etc.
- One-time, recurring, or mixed?

**Provide concrete examples:**
- Actual pricing mechanisms with numbers
- "$49/month subscription per user"
- "15% commission per transaction"

**Note dependencies:**
- Partner revenue shares
- Payment timing constraints
- Minimum commitments or contracts

**Create platform input (250 chars)**

**Quality Check:**
- [ ] Revenue model specific and actionable?
- [ ] Pricing approach clear?
- [ ] Examples concrete (not vague)?
- [ ] Dependencies noted?
- [ ] Platform input ≤250 characters?

#### Step 3.3: Define Distribution Channel (10-15 minutes)

**Map discovery channels:**
- How do clients become aware?
- What marketing/awareness methods?
- Digital, traditional, referral, direct?

**Map purchase channels:**
- Where/how is product bought?
- Self-serve web, sales team, marketplace?
- Direct or through intermediaries?

**Identify intermediaries:**
- List specific intermediary types if applicable
- Or mark as "Direct" if none

**Note geographic variations:**
- Any regional differences?
- Phased rollout by geography?

**Create platform input (250 chars)**

**Quality Check:**
- [ ] Separates awareness from purchase?
- [ ] Matches client buying behavior?
- [ ] Specific about intermediaries or Direct?
- [ ] Realistic and actionable?
- [ ] Platform input ≤250 characters?

#### Step 3.4: Define Cost Structure (10-15 minutes)

**List development costs:**
- Product/platform development
- Technology infrastructure
- R&D and validation

**List production/operations costs:**
- Delivery and fulfillment
- Support and maintenance
- Vendors and subcontracting

**List marketing/sales costs:**
- Customer acquisition
- Marketing campaigns
- Sales team and partnerships

**List human resources costs:**
- Core team
- Part-time and contractors
- Training and development

**Separate fixed vs. variable:**
- Fixed: Don't scale with volume
- Variable: Scale with customers/usage

**Identify cost drivers:**
- What causes costs to increase?
- Customer count, features, geography?

**Create platform input (250 chars)**

**Quality Check:**
- [ ] Includes all major cost categories?
- [ ] Separates fixed vs. variable?
- [ ] Identifies cost drivers?
- [ ] Realistic given product requirements?
- [ ] Platform input ≤250 characters?

#### Step 3.5: Validate Business Model Coherence (10 minutes)

**Check internal alignment:**
- Does value prop match features? (claim = deliver)
- Does revenue align with value? (pricing = worth)
- Does distribution match buying behavior?
- Do costs support revenue model?

**Test consistency:**
- Any contradictions between components?
- Red flags:
  - Premium value prop + self-serve channel
  - High CAC + low-margin revenue
  - Complex product + no support costs

**Verify evidence basis:**
- Value prop tied to validated needs?
- Revenue informed by willingness to pay?
- Distribution based on ecosystem analysis?

**Assess sustainability:**
- Can revenue model support cost structure?
- At what scale does this become viable?
- What's the margin potential?

**Quality Check:**
- [ ] No internal contradictions?
- [ ] All components align logically?
- [ ] Evidence-based throughout?
- [ ] Commercially sustainable (at scale)?

---

### Phase 4: Output Generation (PER PRODUCT)

#### Step 4.1: Create Product/Market Fit Sheet (15-20 minutes)

**Use template from Step12_PMF_Template.md**

**Compile complete product data:**
- Product identity (name, description, client)
- Targeted requesters
- Primary needs addressed
- Feature set (MVP and phased)
- Resource requirements
- Configuration rationale

**Format for presentation:**
- Visual indicators (MVP markers, timeline colors)
- Group by category (Desirability, Feasibility, Viability)
- Professional formatting

**Generate two versions:**
- Markdown for collaboration: `[ProductName]_PMF_Sheet.md`
- DOCX spec included for formal presentation

#### Step 4.2: Create Business Model Canvas (10-15 minutes)

**Use template from Step12_Business_Model_Template.md**

**Compile business model data:**
- Value proposition
- Revenue stream
- Distribution channel
- Cost structure

**Create visual canvas:**
- Four-quadrant layout
- Professional formatting
- Ensure readability

**Generate two versions:**
- Detailed text format: `[ProductName]_Business_Model.md`
- Visual canvas specification for slide format

---

### Phase 5: Summary Dashboard (AFTER ALL PRODUCTS)

#### Step 5.1: Generate Portfolio Dashboard (20-30 minutes)

**Use template from Step12_Dashboard_Template.md**

**Compile all product-client combinations:**
- List all products created
- Show target clients for each
- Highlight MVP features across portfolio

**Create comparison views:**
- Feature comparison across products
- Business model comparison
- Resource requirements comparison

**Identify portfolio insights:**
- Which needs covered across portfolio?
- Where are gaps or overlaps?
- What's the overall commercial strategy?

**Flag key considerations:**
- Resource constraints affecting multiple products
- Partnership dependencies
- Prioritization recommendations

**File name:** `[ProjectName]_Viability_Dashboard.md`

---

### Phase 6: Quality Validation (15-20 minutes)

#### Step 6.1: Run Completeness Check

**For each product verify:**
- [ ] All required fields populated
- [ ] Character limits respected
- [ ] Evidence citations included
- [ ] MVP features cover all fundamental needs
- [ ] Resource requirements documented
- [ ] Platform inputs ≤250 characters

#### Step 6.2: Validate Consistency

**Cross-check alignment:**
- [ ] Value prop → Features (claims deliverable)
- [ ] Value → Revenue (pricing reflects value)
- [ ] Revenue → Distribution (channel matches payment)
- [ ] Distribution → Costs (CAC costs included)
- [ ] Costs → Revenue (margin potential at scale)

#### Step 6.3: Test Clarity

**Review for comprehension:**
- [ ] Client can understand value prop in one reading
- [ ] Product description clear (client knows what buying)
- [ ] Revenue model specific (concrete examples)
- [ ] Distribution actionable (not vague)
- [ ] No jargon or internal terminology

#### Step 6.4: Document Gaps and Next Steps

**List information gaps:**
- Where did we make assumptions?
- What still needs validation?
- Which features lack reliability data?

**Identify action items:**
- What research is needed?
- Which partnerships need confirmation?
- What decisions are pending?

**Propose next steps:**
- Immediate actions (this sprint)
- Short-term actions (1-3 months)
- Long-term actions (3-12 months)

---

## Output Templates

### Product/Market Fit Sheet Structure

```markdown
# Product/Market Fit Sheet: [Product Name]

**Project**: [Project Name]
**Date**: [Date]
**Client Segment**: [Client Type]

## Product Identity
**Product/Service Name**: [Name] (60 chars)
**Description**: [250-char description]
**Target Client**: [Specific client segment]

## Market Validation (Desirability)
### Targeted Requesters
1. **[Requester Name]**: [Profile and key characteristics]
2. **[Requester Name]**: [Profile and key characteristics]

### Primary Needs Addressed
| Need | Intensity | Satisfaction | Validation |
|------|-----------|--------------|------------|
| [Need statement] | Fundamental | Not at all | >5 interviewed |

## Solution Configuration (Feasibility)
### MVP Features
| Feature | Timeline | Needs Covered | Validation |
|---------|----------|---------------|------------|
| [Feature] | Available | [Need 1, 2] | >5 interviewed |

### Resource Requirements
**Means**: [Resources needed]
**Partners**: [Technical partnerships]
**Gaps**: [Missing capabilities]

## Business Model (Viability)
### Value Proposition
**Core**: [One-sentence positioning]
**Advantages**: [2-4 competitive advantages]
**Benefits**: [Client outcomes by requester type]

### Revenue Stream
**Model**: [How revenue generated]
**Pricing**: [Approach and mechanisms]

### Distribution Channel
**Discovery**: [Awareness channels]
**Purchase**: [Sales channels]
**Intermediaries**: [Types or Direct]

### Cost Structure
**Categories**: [Development, Operations, Marketing, HR]
**Fixed/Variable**: [Classification]
**Drivers**: [What increases costs]

## Configuration Rationale
[2-3 paragraphs explaining feature selection, MVP priorities, phasing logic]
```

### Business Model Canvas Structure

```markdown
# Business Model: [Product Name] for [Client Segment]

## Value Proposition
**Core Message**: [One sentence]
**Competitive Advantages**:
1. [Advantage 1 tied to validated need]
2. [Advantage 2 tied to validated need]
3. [Advantage 3 tied to validated need]

**Client Benefits**:
- For [Requester 1]: [Specific outcome]
- For [Requester 2]: [Specific outcome]

**Platform Input (250 chars)**: "[Concise value prop]"

## Revenue Stream
**Model**: [Description]
**Pricing**: [Approach and type]
**Mechanisms**: [Concrete examples with numbers]
**Dependencies**: [Constraints and shares]

**Platform Input (250 chars)**: "[Concise revenue stream]"

## Distribution Channel
**Discovery**: [How clients become aware]
**Purchase**: [Where/how bought]
**Intermediaries**: [Types or Direct]
**Geographic**: [Any variations]

**Platform Input (250 chars)**: "[Concise distribution]"

## Cost Structure
**Development**: [Major items]
**Operations**: [Major items]
**Marketing**: [Major items]
**HR**: [Major items]
**Fixed/Variable**: [Split]
**Drivers**: [What increases costs]

**Platform Input (250 chars)**: "[Concise costs]"

## Coherence Check
- [ ] Value → Features aligned
- [ ] Value → Revenue aligned
- [ ] Revenue → Distribution aligned
- [ ] Distribution → Costs aligned
- [ ] Costs → Revenue sustainable
```

### Dashboard Summary Structure

```markdown
# Viability Summary Dashboard: [Project Name]

## Product Portfolio Overview
| Product | Client | Requesters | MVP Features | Revenue Model |
|---------|--------|------------|--------------|---------------|
| [Product 1] | [Client] | [Count] | [Count] | [Model] |

## Need Coverage Analysis
[Matrix showing which products address which fundamental needs]

## Feature Comparison
[Table showing MVP features across products]

## Business Model Comparison
[Revenue models, distribution channels by product]

## Resource Requirements
**Shared**: [Resources used by multiple products]
**Product-Specific**: [Unique resources per product]
**Gaps**: [Missing capabilities]

## Key Insights
**Strengths**: [Portfolio strengths]
**Opportunities**: [Portfolio opportunities]
**Concerns**: [Issues to address]
**Recommendations**: [Priority actions]

## Next Steps
**Immediate** (This Sprint): [Actions]
**Short-Term** (1-3 Months): [Actions]
**Long-Term** (3-12 Months): [Actions]
```

---

## Quality Standards Summary

### Every Viability output must demonstrate:

1. **Completeness**: All required fields populated with validated data
2. **Consistency**: Alignment across needs, features, and business model
3. **Clarity**: Client-understandable language throughout
4. **Evidence**: Citations for key claims, explicit gaps flagged
5. **Viability**: Coherent business model that could sustain operations

### Character limit compliance:
- Product name: ≤60 characters
- All descriptions: ≤250 characters
- Platform inputs: ≤250 characters

### Common pitfalls to avoid:
- Feature bloat (MVP >12 features)
- Unsupported claims (features not in Step 11)
- Need misalignment (features without need mapping)
- Reliability gaps (MVP on <5 interviews)
- Vague value props ("best-in-class" without specifics)
- Undefined revenue ("figure out pricing later")
- Unrealistic channels (assuming "viral growth")
- Incomplete costs (missing support, compliance)

---

## Time Estimates

**Per Product Configuration**: 2-3 hours
- Product-Market Fit: 60-90 minutes
- Business Model Design: 50-70 minutes
- Output Generation: 30-45 minutes

**Portfolio Activities**: 1.5-2 hours
- Setup and scoping: 30-45 minutes
- Summary dashboard: 20-30 minutes
- Quality validation: 30-40 minutes
- Deliverable packaging: 30-40 minutes

**Typical Projects**:
- **1 Product**: 3-4 hours total
- **2 Products**: 5-6 hours total
- **3 Products**: 7-9 hours total

---

## Supporting Documentation

This step includes comprehensive reference materials:

1. **Step12_Reference_Guide.md** (70+ pages)
   - Complete methodology and definitions
   - Decision frameworks
   - Industry-specific patterns
   - Integration with other Vianeo steps

2. **Step12_Quality_Checklist.md**
   - Completeness validation criteria
   - Consistency cross-checks
   - Clarity standards
   - Commercial viability assessment

3. **Step12_Airbnb_Example.md** (45+ pages)
   - Complete worked example with 3 products
   - Shows actual decision-making process
   - Quality standards demonstration

4. **Step12_PMF_Generation_Prompt.txt**
   - Detailed prompt for Product-Market Fit creation
   - Input data structure
   - Step-by-step task breakdown
   - Quality standards

5. **Step12_Business_Model_Prompt.txt**
   - Detailed prompt for Business Model definition
   - Component-by-component guidance
   - Decision frameworks
   - Examples and validation

---

## Next Phase After Viability

Once Viability is complete, proceed to:

1. **Financial Modeling**: Quantify revenue projections, calculate margins, forecast cash flow
2. **Go-to-Market Strategy**: Detailed launch and growth plan based on distribution channels
3. **Product Development**: Build MVP based on feature priorities
4. **Validation Testing**: Test business model assumptions with market
5. **Investor Materials**: Pitch deck, business plan incorporating viability findings

**Viability provides the commercial foundation for all of these next steps.**

---

## Files Generated Per Project

**Minimum Output** (1 product):
- `[ProductName]_PMF_Sheet.md`
- `[ProductName]_Business_Model.md`
- `[ProjectName]_Viability_Dashboard.md`

**Complete Output** (1 product with professional formatting):
- `[ProductName]_PMF_Sheet.md` + `.docx`
- `[ProductName]_Business_Model.md` + `.docx`
- `[ProjectName]_Viability_Dashboard.md`
- `[ProjectName]_Platform_Inputs.md` (extracted 250-char inputs)

**Multi-Product Output** (e.g., 3 products):
- 3 × PMF Sheets (md + docx each)
- 3 × Business Model Canvases (md + docx each)
- 1 × Dashboard (md)
- 1 × Platform Inputs extraction (md)

**Total for typical 2-product assessment**: 10 files

---

## When to Use This Step

**Use Step 12 when:**
- User requests "Viability analysis" or "business model evaluation"
- User asks to "define product-market fit" or "create business model canvas"
- User has completed Desirability (Steps 5-7) and Feasibility (Step 11)
- User needs to validate commercial structure before financial modeling
- User asks to create Product/Market Fit sheets
- User needs business model economics validation

**Prerequisites check:**
- Do you have validated needs from Step 7? (need intensity + validation counts)
- Do you have validated features from Step 11? (feature library + timeline)
- Do you know the client segments from value network?

If prerequisites missing, guide user to complete Steps 5-7 and 11 first.

---

## Integration with Vianeo Score (20%)

Viability contributes 20% to overall Vianeo score alongside:
- Legitimacy (15%)
- Desirability (25%)
- Acceptability (20%)
- Feasibility (20%)

**Viability scoring considers:**
- Business model coherence (all four components align)
- Commercial sustainability (revenue can support costs)
- Value proposition strength (tied to fundamental needs)
- Market access feasibility (distribution realistic)
- MVP viability (can deliver minimum valuable product)

Strong viability (4.0-5.0) demonstrates:
- Coherent business model with no contradictions
- Clear path to revenue exceeding costs
- Value proposition grounded in validated fundamental needs
- Realistic distribution and cost structure
- Tight, achievable MVP focused on core value

---

**Remember:** Every product configuration must pass the "could this actually work" test. If the business model has internal contradictions, flag them explicitly. If costs clearly exceed revenue potential, call it out. Viability is about honest commercial assessment, not aspirational planning.
