# STEP 1: Application Forms Generation

**Time Required:** 15-20 minutes
**Output:** Standardized application form (360 SIS or CNEN format)
**Purpose:** Transform Executive Brief into program-specific application formats
**Status:** OPTIONAL - Skip if not managing formal program applications

> Shared scaffolding for time/output/skip criteria is maintained in [`_common_prompt_guidelines.md`](./_common_prompt_guidelines.md). Update that file first if you need to tweak baseline instructions that multiple prompts reuse.

---

## Overview

Step 1 converts the Executive Brief from Step 0 into standardized application formats used by specific programs or institutions. This step is useful for:
- **Accelerators and incubators** managing cohort applications
- **Research institutions** requiring standardized submissions
- **Investment programs** with specific application requirements
- **Government programs** with regulatory formats

**Skip this step if:**
- Conducting ad-hoc evaluations without formal program structure
- No standardized application format required
- Moving directly to diagnostic assessment (Step 2) or market maturity (Step 3)

---

## Two Standard Formats

### Format 1: 360 SIS Application
**Use for:** Social impact startups, impact investing programs, accelerators focused on SDGs

**Characteristics:**
- 6-stage maturity framework (Discovery → Scaling)
- Emphasis on social/environmental impact metrics
- Theory of Change integration
- Stakeholder ecosystem mapping
- Impact measurement framework

### Format 2: CNEN Application
**Use for:** Research institutions, technology transfer, academic spin-outs, government research programs

**Characteristics:**
- 5-section structure (Project → Team → Market → Technology → Resources)
- Technology Readiness Level (TRL) emphasis
- Academic/research background integration
- Innovation assessment framework
- Commercialization pathway focus

---

## Instructions for AI Assistant

Using the completed Executive Brief from Step 0, populate the appropriate application format below. Map the B1-B7 sections from Step 0 to the corresponding application fields, expanding within sentence limits.

### Fast-Transfer Field Lists (for quick data entry)
If you only need a structured, form-style export without narrative expansions, use these condensed field lists before moving to the detailed sections.

**360 SIS Quick Fields**
- Company information (name, legal name, incorporation country, year founded, website, one-line description)
- Problem statement and solution summary with field of application
- Target user and client segments (primary/secondary) with market size snapshot (TAM/SAM/initial target)
- Business model snapshot (revenue model, pricing strategy, key metrics such as LTV/CAC/gross margin)
- Traction and validation (customer validation counts, revenue status, product status checklist)
- Team overview (founders, additional team members, advisors, key gaps)
- Funding history and current ask with runway
- Application details (program, dates, referral source)

**CNEN Quick Fields**
- Identificação (company name, CNPJ, foundation date, site, one-line description)
- Problema e solução (problem statement, field of application, solution summary)
- Mercado e usuários (user/client segments, TAM/SAM/initial target)
- Modelo de negócio (revenue model, pricing)
- Tração e validação (customer validation counts, product status, revenue status)
- Equipe e lacunas-chave
- Financiamento (previous funding, current ask, use of funds)

Proceed to the detailed format sections below when you need the fuller guidance, examples, and quality checks.

---

# FORMAT 1: 360 SIS APPLICATION

## Application Metadata

**Program Name:** [Name of accelerator/program]
**Application Date:** [YYYY-MM-DD]
**Application ID:** [If assigned]
**Applicant Type:** [For-profit Social Enterprise / Non-profit / Hybrid / B-Corp]

---

## SECTION 1: PROJECT OVERVIEW

### 1.1 Project Name and Tagline

**Project Name:** [Official name]

**Tagline (15 words max):**
[One compelling sentence - maps from Step 0 B1 one-line description]

---

### 1.2 Project Summary (2-3 sentences)

[Provide a concise overview covering: (1) What problem you're solving, (2) Your solution approach, and (3) Who benefits. Map from Step 0 B2 + B3.]

**Sentence Limit:** 2-3 sentences
**Character Limit:** 500 characters max

**Quality Check:**
- [ ] Covers problem, solution, and beneficiaries
- [ ] Within 2-3 sentences
- [ ] ≤ 500 characters
- [ ] Compelling and clear to non-experts

---

### 1.3 Problem Statement (3-5 sentences)

[Describe the specific problem or need your project addresses. Be clear about who is affected, the scale of the problem, and current inadequacies. Map from Step 0 B2, expanded.]

**Sentence Limit:** 3-5 sentences
**Character Limit:** 750 characters max

**Required Elements:**
- Specific population affected with size estimates
- Measurable impact or cost of problem
- Current gaps or inadequate solutions
- Validation evidence (cite sources)

**Quality Check:**
- [ ] Solution-neutral (no mention of your product/technology)
- [ ] Quantified impact where possible
- [ ] Specific population identified
- [ ] Within 3-5 sentences
- [ ] ≤ 750 characters

---

### 1.4 Proposed Solution (3-5 sentences)

[Explain your approach to addressing the problem. Focus on how it works and what makes it innovative or differentiated. Map from Step 0 B3, expanded.]

**Sentence Limit:** 3-5 sentences
**Character Limit:** 750 characters max

**Required Elements:**
- Core approach/methodology
- Key innovation or differentiation
- How it addresses the problem specifically
- Technology or approach validation status

**Quality Check:**
- [ ] Clearly connects to problem in 1.3
- [ ] Innovation/differentiation articulated
- [ ] Approach explained, not just feature list
- [ ] Within 3-5 sentences
- [ ] ≤ 750 characters

---

### 1.5 Theory of Change

**If [Input/Activity], Then [Output], Leading to [Outcome], Resulting in [Impact]**

| Element | Description | Measurement |
|---------|-------------|-------------|
| **Input** | [Resources/activities you deploy] | [How measured] |
| **Output** | [Direct result of activities] | [Quantity/metric] |
| **Outcome** | [Change for beneficiaries] | [Indicator] |
| **Impact** | [Long-term systemic change] | [How assessed] |

**Example:**
- **Input:** Training 50 rural clinicians on AI diagnostic tool over 3 months
- **Output:** 50 clinicians equipped to use tool, 1,000 patient diagnoses analyzed
- **Outcome:** 40% reduction in misdiagnosis rates for complex conditions
- **Impact:** Improved health outcomes for 100K+ rural patients annually

**Quality Check:**
- [ ] Clear causal chain from input to impact
- [ ] Each element measurable
- [ ] Realistic and evidence-based
- [ ] Timeframe indicated

---

### 1.6 Stage of Development

**Select Current Stage:** [Check one]

- [ ] **Discovery** - Problem identified, solution concept being explored (Idea stage, TRL 1-2)
- [ ] **Validation** - Prototype developed, testing with users (Prototype stage, TRL 3-4)
- [ ] **Preparation** - MVP launched, pilots underway, refining model (Pilot stage, TRL 5-6)
- [ ] **Growth** - Product-market fit achieved, scaling operations (Early commercialization, TRL 7-8)
- [ ] **Scaling** - Proven model, rapid expansion underway (Growth stage, TRL 9)
- [ ] **Maturity** - Established operations, optimizing for efficiency

**Current Stage:** [Name]

**Stage Justification (3-5 sentences):**
[Explain why you selected this stage, citing specific evidence from traction, product development, and customer validation. Map from Step 0 Maturity Stage Classification.]

**Quality Check:**
- [ ] Stage matches evidence in Section 3 (Traction)
- [ ] TRL rating consistent with product status
- [ ] Justification cites specific evidence
- [ ] Within 3-5 sentences

---

## SECTION 2: TARGET BENEFICIARIES AND MARKET

### 2.1 Primary Beneficiaries (3-5 sentences)

[Describe who directly benefits from your solution. Be specific about demographics, geography, and scale. Map from Step 0 B4.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Specific demographics and characteristics
- Geographic scope (region, country, global)
- Estimated population size
- Why this population was chosen
- Current validated vs. projected reach

**Example:**
"Primary beneficiaries are rural primary care physicians serving underserved populations in Southeast US. Target: 3,500 physicians across 280 Federally Qualified Health Centers (FQHCs), collectively serving 2.3M patients annually. This population experiences 35% higher misdiagnosis rates for complex conditions due to limited specialist access. Currently validated with 45 physicians across 8 pilot clinics. Expansion to 100 clinics within 18 months."

**Quality Check:**
- [ ] Specific population with demographics
- [ ] Size estimates provided
- [ ] Geographic scope clear
- [ ] Within 3-5 sentences

---

### 2.2 Secondary Beneficiaries (3-5 sentences)

[Describe indirect beneficiaries - those who benefit but don't directly use your solution.]

**Sentence Limit:** 3-5 sentences

**Example:**
"Secondary beneficiaries are the 2.3M patients served by these rural clinics, who experience faster, more accurate diagnoses. Additionally, rural health systems benefit from reduced malpractice risk and improved outcomes. State Medicaid programs benefit from reduced downstream costs due to earlier, more accurate diagnosis."

---

### 2.3 Market Size and Opportunity (3-5 sentences)

[Quantify the total market opportunity and your addressable portion. Map from Step 0 B4, expanded.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- TAM (Total Addressable Market)
- SAM (Serviceable Addressable Market)
- Initial target market (beachhead)
- Market sizing methodology
- Growth projections

**Example:**
"TAM: 12,000 rural health clinics in US serving 50M patients, representing $2.4B market opportunity. SAM: 3,800 FQHCs and Critical Access Hospitals in targeted regions ($380M). Initial target: 280 FQHCs in Southeast US representing $32M opportunity. Bottom-up sizing based on HRSA data and $11K average annual subscription per clinic. Market growing 8% annually driven by rural physician shortages."

**Quality Check:**
- [ ] TAM, SAM, and initial target specified
- [ ] Dollar amounts and user counts provided
- [ ] Methodology noted (top-down/bottom-up/comparable)
- [ ] Growth rate indicated
- [ ] Within 3-5 sentences

---

### 2.4 Customer Segments and Decision-Makers

**User vs. Buyer Distinction:** [Users and buyers are the same / Users and buyers are different]

| Segment Type | Description | Size | Decision-Making Unit | Engagement Status |
|--------------|-------------|------|----------------------|-------------------|
| Primary User | [Description] | [#] | [Who decides] | [Interviews/pilots/paying] |
| Secondary User | [Description] | [#] | [Who decides] | [Interviews/pilots/paying] |
| Primary Buyer | [Description] | [#] | [Titles/roles] | [Discussions/LOI/contract] |
| Secondary Buyer | [Description] | [#] | [Titles/roles] | [Discussions/LOI/contract] |

**Quality Check:**
- [ ] Users and buyers clearly distinguished
- [ ] Decision-making unit identified for each
- [ ] Engagement status quantified
- [ ] All segments from Step 0 B4 included

---

## SECTION 3: TRACTION AND VALIDATION

### 3.1 Customer Discovery and Validation (3-5 sentences)

[Describe customer discovery efforts: interviews, surveys, user testing. Quantify everything. Map from Step 0 B6.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Number of discovery interviews conducted (by segment)
- Key insights learned
- Validation of problem and solution
- Pivot or iterations based on feedback

**Example:**
"Conducted 45 customer discovery interviews with rural physicians across 12 states (March-August 2024). Key insight: 89% cited lack of specialist access as top 3 challenge; 78% expressed willingness to pay $200-400/month for rapid diagnostic support. Validated problem-solution fit through 8 pilot clinics (6-month pilot). Iteration: Added asynchronous specialist consultation based on user feedback (85% requested this feature)."

**Quality Check:**
- [ ] All numbers quantified (# interviews, # pilots, %)
- [ ] Insights specific and evidence-based
- [ ] Iterations/pivots based on learning noted
- [ ] Within 3-5 sentences

---

### 3.2 Product Development Status (3-5 sentences)

[Describe current product status: stage, features, performance. Map from Step 0 B6.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Development stage: Concept/Prototype/MVP/Beta/Production
- Core features completed
- Technical performance metrics
- Development roadmap for next 12 months

**Example:**
"Beta product launched October 2024, currently deployed in 8 pilot clinics. Core features: symptom analysis, case history review, diagnostic recommendations, specialist referral matching. Performance: 92% diagnostic accuracy vs. specialist gold standard (validated on 500 cases), <15 min average response time, 98% uptime. Roadmap: Full production launch Q2 2025, integration with top 3 EHR platforms by Q4 2025."

**Quality Check:**
- [ ] Stage clearly stated
- [ ] Features listed
- [ ] Performance quantified
- [ ] Roadmap with timeline
- [ ] Within 3-5 sentences

---

### 3.3 Current Traction Metrics

| Metric | Current | 3 Months Ago | 6 Months Ago | Target (12 mo) |
|--------|---------|--------------|--------------|----------------|
| **Customer Interviews** | [#] | [#] | [#] | [#] |
| **Pilot Users/Customers** | [#] | [#] | [#] | [#] |
| **Paying Customers** | [#] | [#] | [#] | [#] |
| **Monthly Recurring Revenue** | $[X] | $[X] | $[X] | $[X] |
| **Users (MAU/DAU)** | [#] | [#] | [#] | [#] |
| **Key Product Metric** | [specify] | [#] | [#] | [#] |
| **NPS or Customer Sat** | [score] | [score] | [score] | [target] |

**Key Product Metric:** [Define your most important product metric, e.g., diagnoses completed, hours saved, accuracy rate]

**Growth Rate:** [% MoM or QoQ for key metrics]

**Quality Check:**
- [ ] All cells filled with actual numbers or "N/A"
- [ ] Trend shows progress over time
- [ ] Targets are ambitious but realistic
- [ ] Key product metric defined and measured

---

### 3.4 Partnerships and Commitments (3-5 sentences)

[Describe key partnerships, MOUs, LOIs, or commitments. Map from Step 0 B6.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Partner names and types (distribution, technology, strategic)
- Commitment level (discussion/MOU/LOI/contract)
- Value of partnership to business model
- Timeline for activation

**Example:**
"MOU signed with Southeast Rural Health Association (represents 280 FQHCs) for pilot expansion (December 2024). LOI from three regional health systems totaling 45 clinics pending budget approval (Q1 2025 decision). Technology partnership with Epic Systems for EHR integration, currently in API certification process. Strategic advisory relationship with American Academy of Family Physicians for clinical validation."

**Quality Check:**
- [ ] Partner names provided (not just "in discussions")
- [ ] Commitment level specified
- [ ] Value/role explained
- [ ] Timeline noted
- [ ] Within 3-5 sentences

---

## SECTION 4: BUSINESS MODEL AND SUSTAINABILITY

### 4.1 Revenue Model (3-5 sentences)

[Explain how money flows, pricing strategy, and unit economics. Map from Step 0 B5, expanded.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Revenue streams identified
- Pricing strategy and tiers
- Unit economics (LTV, CAC, gross margin)
- Path to profitability timeline

**Example:**
"SaaS subscription model: $299/month per clinic (1-5 providers), $599/month (6-15 providers), $999/month (16+ providers). Annual contracts with 15% discount, quarterly payment option. Unit economics: LTV $18K (5-year expected), CAC $3.5K (5:1 ratio), gross margin 78%. Currently 8 paying customers generating $12K MRR. Break-even at 180 customers (projected Q3 2026)."

**Quality Check:**
- [ ] Pricing specific with tiers if applicable
- [ ] Unit economics provided (LTV, CAC, margin)
- [ ] Current revenue status quantified
- [ ] Path to profitability noted
- [ ] Within 3-5 sentences

---

### 4.2 Cost Structure (3-5 sentences)

[Describe major cost categories and current burn rate.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Major cost categories (personnel, technology, sales/marketing, operations)
- Current monthly burn rate
- Planned changes with growth
- Cost efficiencies or economies of scale

**Example:**
"Current monthly burn: $42K. Major costs: personnel (65%, 6 FTEs), cloud infrastructure (18%), sales/marketing (12%), operations (5%). As scale increases, infrastructure costs decrease as % of revenue (projected 8% at 500 customers). Personnel costs will increase to 12 FTEs within 18 months but decrease to 55% of revenue at scale."

---

### 4.3 Funding and Financial Status

**Current Financial Position:**
- **Cash on Hand:** $[amount]
- **Monthly Burn Rate:** $[amount]
- **Current Runway:** [# months]

**Funding History:**

| Date | Amount | Stage | Investors | Use of Funds |
|------|--------|-------|-----------|--------------|
| [MM/YYYY] | $[X] | [Stage] | [Names] | [Primary use] |
| [MM/YYYY] | $[X] | [Stage] | [Names] | [Primary use] |

**Current Fundraising:**
- **Amount Seeking:** $[X]
- **Stage:** [Pre-seed / Seed / Series A / etc.]
- **Primary Use of Funds:** [Top 3 priorities with % allocation]
  1. [Priority 1]: [%]
  2. [Priority 2]: [%]
  3. [Priority 3]: [%]
- **Expected Milestones with This Funding:** [What will be achieved]
- **Expected Runway:** [# months after funding]

**Quality Check:**
- [ ] All financial figures current (within 30 days)
- [ ] Funding history complete
- [ ] Use of funds specific and allocated
- [ ] Milestones tied to funding are clear and measurable

---

### 4.4 Impact Metrics and Measurement (3-5 sentences)

[Describe how social/environmental impact is measured. Required for 360 SIS applications.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Primary impact metrics (aligned with Theory of Change)
- Measurement methodology
- Current impact quantified
- Projected impact at scale

**Example:**
"Primary impact metric: Reduction in misdiagnosis rates for complex conditions in rural settings. Measurement: Compare diagnostic outcomes pre/post implementation using medical record review and specialist confirmation. Current impact: 40% reduction in misdiagnosis (validated across 8 pilot clinics, 500 cases). Projected impact at scale (500 clinics): Improve diagnostic accuracy for 50K+ complex cases annually, potentially preventing 15K+ adverse events."

**Quality Check:**
- [ ] Impact metric clearly defined
- [ ] Measurement methodology described
- [ ] Current impact quantified
- [ ] Scale impact projected
- [ ] Within 3-5 sentences

---

## SECTION 5: TEAM AND ORGANIZATIONAL CAPACITY

### 5.1 Founding Team (3-5 sentences per founder)

**Founder 1:**
- **Name:** [Full name]
- **Role/Title:** [Position]
- **Background:** [3-5 sentences covering relevant experience, domain expertise, previous ventures, education. Map from Step 0 B7.]
- **Commitment:** [Full-time / Part-time / Transitioning to full-time [date]]

**Founder 2:**
- **Name:** [Full name]
- **Role/Title:** [Position]
- **Background:** [3-5 sentences]
- **Commitment:** [Full-time / Part-time / Transitioning to full-time [date]]

[Repeat for additional founders]

**Quality Check:**
- [ ] Domain expertise clearly demonstrated
- [ ] Technical capability noted
- [ ] Startup experience mentioned if applicable
- [ ] Commitment level specified
- [ ] 3-5 sentences per founder

---

### 5.2 Team Composition and Gaps

**Current Team Size:** [# FTE equivalent]

**Team Breakdown:**

| Role/Function | Count | Names (if key roles) | Full-time/Part-time |
|---------------|-------|----------------------|---------------------|
| Leadership | [#] | [Names] | [FT/PT] |
| Technical/Product | [#] | [Names if key] | [FT/PT] |
| Sales/Marketing | [#] | [Names if key] | [FT/PT] |
| Operations | [#] | [Names if key] | [FT/PT] |
| Advisors | [#] | [Names if notable] | [Advisory] |

**Critical Gaps Identified (3-5 sentences):**
[List 1-3 critical missing roles or capabilities. Include hiring plan and timeline. Map from Step 0 B7.]

**Example:**
"Critical gap: VP Sales/Business Development with rural healthcare experience. Currently covered by CEO but needs dedicated hire for scaling. Plan: Hire Q2 2025 when reaching $30K MRR. Secondary gap: Healthcare compliance specialist for multi-state expansion. Advisor currently providing guidance but will need FTE by Q4 2025."

**Quality Check:**
- [ ] All roles accounted for
- [ ] Gaps explicitly identified
- [ ] Hiring plan with timeline for critical gaps
- [ ] Within 3-5 sentences

---

### 5.3 Advisors and Mentors

**Key Advisors:**

| Name | Expertise/Background | Engagement Level | Value to Venture |
|------|----------------------|------------------|------------------|
| [Name] | [Background] | [Monthly / Quarterly / Occasional] | [Specific value] |
| [Name] | [Background] | [Monthly / Quarterly / Occasional] | [Specific value] |

**Engagement Level Definitions:**
- **Monthly:** Regular scheduled meetings, active involvement
- **Quarterly:** Periodic check-ins and strategic guidance
- **Occasional:** Ad-hoc advice as needed

**Quality Check:**
- [ ] Advisors provide clear value (not just prestigious names)
- [ ] Engagement level is realistic
- [ ] Expertise relevant to current stage and challenges

---

## SECTION 6: RISK ASSESSMENT AND MITIGATION

### 6.1 Key Risks (3-5 sentences per risk category)

**Market Risk:**
[Risk description and mitigation strategy. 3-5 sentences.]

**Example:**
"Risk: Rural health systems may face budget constraints limiting adoption. Mitigation: (1) Demonstrate ROI through pilot data showing cost savings from reduced malpractice claims and improved outcomes. (2) Explore alternative funding through state Medicaid innovation grants. (3) Offer flexible pricing including pay-per-use option for cash-constrained clinics. Early validation: 3 of 8 pilot clinics initially cited budget concerns but all signed contracts after seeing 6-month pilot results."

**Technical Risk:**
[Risk description and mitigation strategy. 3-5 sentences.]

**Regulatory/Compliance Risk:**
[Risk description and mitigation strategy. 3-5 sentences. Especially important for healthcare, finance, education.]

**Competition Risk:**
[Risk description and mitigation strategy. 3-5 sentences.]

**Execution Risk:**
[Risk description and mitigation strategy. 3-5 sentences.]

**Quality Check (per risk):**
- [ ] Specific risk clearly stated
- [ ] Multiple mitigation strategies provided
- [ ] Evidence of proactive risk management
- [ ] Within 3-5 sentences

---

## SECTION 7: PROGRAM FIT AND EXPECTATIONS

### 7.1 Why This Program? (3-5 sentences)

[Explain specifically why you're applying to this program and what you hope to gain.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Specific program elements that match your needs
- Current stage and how program accelerates progress
- Expected outcomes from participation

---

### 7.2 Expected Outcomes from Program (3-5 sentences)

[Be specific about milestones you aim to achieve during program participation.]

**Sentence Limit:** 3-5 sentences

**Example:**
"Goal 1: Expand from 8 to 30 pilot clinics through program network and guidance (6 months). Goal 2: Refine sales process and reach $50K MRR through mentorship on B2B healthcare sales. Goal 3: Secure Series A lead investor through program investor network. Goal 4: Build board of directors with program guidance on governance."

---

## APPLICATION CHECKLIST (360 SIS)

Before submitting:

### Content Completeness
- [ ] All required sections completed
- [ ] All sentence limits respected (2-3 or 3-5 as specified)
- [ ] All character limits met
- [ ] All tables filled with actual data

### Evidence and Quantification
- [ ] All traction claims quantified with numbers
- [ ] Evidence sources cited where applicable
- [ ] No vague statements like "good traction" or "strong interest"
- [ ] Validation status clear for all major claims

### Theory of Change
- [ ] Clear causal chain from inputs to impact
- [ ] All elements measurable
- [ ] Realistic and evidence-based
- [ ] Aligned with traction metrics

### Stage Classification
- [ ] Stage selection matches evidence in traction section
- [ ] TRL rating consistent with product status
- [ ] Justification cites specific evidence

### Consistency with Step 0
- [ ] Content accurately reflects Executive Brief (B1-B7)
- [ ] No contradictions introduced
- [ ] Evidence levels consistent
- [ ] Red flags from Step 0 addressed or noted

### Professional Quality
- [ ] No typos or grammatical errors
- [ ] Professional tone throughout
- [ ] Clear and concise writing
- [ ] Ready for evaluation committee review

---

# FORMAT 2: CNEN APPLICATION

## Application Metadata

**Institution Name:** [University/Research institution]
**Research Center/Lab:** [Specific department or lab]
**Application Date:** [YYYY-MM-DD]
**Technology Transfer Office Contact:** [Name and email]
**Principal Investigator:** [Name and title]

---

## SECTION 1: PROJECT IDENTIFICATION

### 1.1 Project Title

**Official Project Name:** [Full formal name]

**Short Name/Acronym:** [If applicable]

---

### 1.2 Executive Summary (2-3 sentences)

[Concise summary: (1) Innovation/technology, (2) Application/market, (3) Impact. Map from Step 0 B1-B3.]

**Sentence Limit:** 2-3 sentences
**Character Limit:** 500 characters max

---

### 1.3 Field of Application (3-5 sentences)

[Describe the specific domain or sector where this innovation applies. Map from Step 0 B2.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Specific industry/sector (not generic)
- Sub-segment or niche within sector
- Current state of this field
- Gap or need this innovation addresses

---

### 1.4 Technology Readiness Level (TRL)

**Current TRL:** [1-9]

**TRL Scale Reference:**
- **TRL 1:** Basic principles observed and reported
- **TRL 2:** Technology concept and/or application formulated
- **TRL 3:** Analytical and experimental critical function proof-of-concept
- **TRL 4:** Component and/or breadboard validation in laboratory environment
- **TRL 5:** Component and/or breadboard validation in relevant environment
- **TRL 6:** System/subsystem model demonstration in relevant environment
- **TRL 7:** System prototype demonstration in operational environment
- **TRL 8:** Actual system completed and qualified through test and demonstration
- **TRL 9:** Actual system proven in operational environment

**TRL Justification (3-5 sentences):**
[Explain current TRL rating citing specific evidence. Map from Step 0 Maturity Stage.]

**Target TRL at Project Completion:** [1-9]
**Expected Timeline to Next TRL:** [Months/years]

---

## SECTION 2: INNOVATION AND TECHNOLOGY

### 2.1 Technical Description (3-5 sentences)

[Describe the core technology or innovation. Suitable for technical reviewers. Map from Step 0 B3.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Technical approach or methodology
- Key technological components
- How it works (high-level)
- Novel aspects or innovation

---

### 2.2 Innovation Assessment (3-5 sentences)

[Explain what is innovative compared to existing solutions or state-of-the-art.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- State-of-the-art comparison
- Key differentiating factors
- Performance improvements (quantified if possible)
- Scientific or technological advances

**Example:**
"Existing diagnostic AI systems achieve 75-80% accuracy on rural health datasets due to training on urban hospital data. Our innovation: Transfer learning approach combining general medical AI with rural-specific case library (500K cases). Results: 92% accuracy vs. 78% for leading commercial system (validated on 500-case test set). Additional innovation: Asynchronous specialist loop enabling human-AI collaboration for edge cases."

---

### 2.3 Intellectual Property Status

**Patents:**

| Patent Title | Status | Filing Date | Patent Number | Countries |
|--------------|--------|-------------|---------------|-----------|
| [Title] | [Filed/Pending/Granted] | [MM/YYYY] | [#] | [Countries] |

**Other IP:**
- [ ] Trade secrets documented: [Brief description]
- [ ] Copyright registered: [Description]
- [ ] Trademark filed: [Marks]
- [ ] Know-how documented: [Description]

**Freedom to Operate:**
- [ ] FTO analysis completed: [Summary of findings]
- [ ] Potential infringement risks: [None identified / Risks: ___ / Analysis pending]

**IP Strategy (3-5 sentences):**
[Describe approach to protecting and leveraging IP.]

---

### 2.4 Technical Validation and Testing (3-5 sentences)

[Describe validation work completed: lab tests, prototypes, pilots, performance metrics.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Testing environment (lab/field/operational)
- Key performance metrics and results
- Validation methodology
- Remaining technical risks

---

## SECTION 3: MARKET AND COMMERCIALIZATION

### 3.1 Target Market (3-5 sentences)

[Describe target customers/users and market size. Map from Step 0 B4.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Customer segments clearly defined
- Market size quantified (TAM/SAM)
- Geographic scope
- Market sizing methodology

---

### 3.2 Competitive Landscape (3-5 sentences)

[Identify main competitors or alternative solutions and differentiation.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- 3-5 main competitors or alternatives
- How they currently address the problem
- Your key differentiators
- Competitive advantage sustainability

---

### 3.3 Business Model (3-5 sentences)

[Explain commercialization approach and revenue model. Map from Step 0 B5.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Revenue model (licensing, product sales, service, SaaS, etc.)
- Pricing strategy
- Go-to-market approach
- Path to sustainability

---

### 3.4 Market Validation (3-5 sentences)

[Evidence of market demand: customer interviews, pilots, LOIs. Map from Step 0 B6.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Customer discovery: # interviews
- Pilots or trials: # customers, duration, results
- Letters of Intent or commitments
- Revenue if any

---

## SECTION 4: TEAM AND RESOURCES

### 4.1 Research Team

**Principal Investigator:**
- **Name:** [Full name]
- **Title/Position:** [Academic title and department]
- **Relevant Expertise:** [3-5 sentences on background, publications, previous commercialization. Map from Step 0 B7.]
- **Time Commitment:** [% FTE to project]

**Co-Investigators:**

| Name | Title/Department | Relevant Expertise | Role in Project | Time Commit |
|------|------------------|--------------------| ----------------|-------------|
| [Name] | [Title] | [Brief expertise] | [Specific role] | [% FTE] |
| [Name] | [Title] | [Brief expertise] | [Specific role] | [% FTE] |

---

### 4.2 Commercialization Team (if separate from research team)

[Describe business-side team members if different from research team.]

| Name | Role | Background | Commitment |
|------|------|------------|------------|
| [Name] | [Role] | [3-5 sentence background] | [FT/PT] |

---

### 4.3 Resource Requirements (3-5 sentences)

[Describe resources needed: personnel, equipment, facilities, funding.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Personnel needs (additional hires)
- Equipment or infrastructure
- Facility requirements
- Estimated total budget for next phase

---

### 4.4 Institutional Support

**Technology Transfer Office Involvement:** [Description of support]

**Institutional Resources Committed:**
- Lab space: [Description]
- Equipment access: [Description]
- Shared facilities: [Description]
- Gap funding or internal grants: $[amount]

**External Partnerships:**

| Partner Organization | Type | Commitment/Support | Status |
|---------------------|------|-------------------|--------|
| [Organization] | [Academic/Industry/Gov't] | [Description] | [MOU/LOI/Contract] |

---

## SECTION 5: IMPACT AND SUSTAINABILITY

### 5.1 Scientific/Technological Impact (3-5 sentences)

[Describe expected contribution to scientific knowledge or technological advancement.]

**Sentence Limit:** 3-5 sentences

---

### 5.2 Economic Impact (3-5 sentences)

[Describe potential economic benefits: job creation, industry growth, export potential.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Jobs created (direct and indirect)
- Economic value generated
- Industry development potential
- Regional or national economic benefit

---

### 5.3 Social/Environmental Impact (3-5 sentences)

[Describe broader societal or environmental benefits.]

**Sentence Limit:** 3-5 sentences

**Required Elements:**
- Social problem addressed
- Population benefiting
- Alignment with SDGs or national priorities
- Environmental benefits if applicable

---

### 5.4 Sustainability and Long-term Vision (3-5 sentences)

[Describe path to sustainability and long-term impact.]

**Sentence Limit:** 3-5 sentences

---

## APPLICATION CHECKLIST (CNEN)

Before submitting:

### Content Completeness
- [ ] All required sections completed
- [ ] All sentence limits respected (2-3 or 3-5 as specified)
- [ ] All tables filled with actual data
- [ ] TRL rating justified with evidence

### Technical Quality
- [ ] Technical description suitable for expert reviewers
- [ ] Innovation clearly differentiated from state-of-the-art
- [ ] Validation evidence provided with metrics
- [ ] Technical risks identified

### IP and Commercialization
- [ ] IP status documented completely
- [ ] Freedom to operate addressed
- [ ] Commercial potential demonstrated
- [ ] Market validation evidence provided

### Team and Resources
- [ ] All team members listed with roles
- [ ] Time commitments realistic
- [ ] Resource requirements specified
- [ ] Institutional support documented

### Consistency with Step 0
- [ ] Content accurately reflects Executive Brief
- [ ] Evidence levels consistent
- [ ] No contradictions introduced
- [ ] All mappings from B1-B7 accurate

---

## OUTPUT FORMAT

### File Naming

**360 SIS Application:**
- `[ProjectName]_[Date]_01_360SIS.md`
- `[ProjectName]_[Date]_01_360SIS.docx`

**CNEN Application:**
- `[ProjectName]_[Date]_01_CNEN.md`
- `[ProjectName]_[Date]_01_CNEN.docx`

**Examples:**
- `HealthTech_2025-01-15_01_360SIS.md`
- `RuralDiagnostics_2025-01-15_01_CNEN.docx`

### DOCX Formatting

**Page Setup:**
- Standard letter size (8.5" x 11")
- Margins: 1 inch all sides
- Page limit: 8-12 pages depending on format

**Typography:**
- Body text: Times New Roman or Arial 11pt
- Section headers: Bold 12pt
- Subsection headers: Bold 11pt
- Tables: Arial 10pt

**Structure:**
- Cover page with project name, institution, date
- Table of contents for longer applications
- Page numbers
- Headers with project name and section

---

## NEXT STEPS

After completing Step 1:

1. **Quality review** - Check all sentence limits, character limits, table completeness
2. **Consistency check** - Verify alignment with Step 0 Executive Brief
3. **DOCX generation** - Convert to professionally formatted Word document
4. **Save both formats** - MD for editing, DOCX for submission
5. **Proceed to Step 2** - 40-Question Diagnostic Assessment

**Estimated Time:** 15-20 minutes for experienced evaluator

---

## NOTES

**When to use 360 SIS vs. CNEN:**

- **Use 360 SIS** for:
  - Social enterprises and impact startups
  - Impact investing programs
  - Accelerators focused on SDGs
  - B-Corps and social ventures
  - Non-profits with earned revenue

- **Use CNEN** for:
  - University spin-outs
  - Research institution innovations
  - Technology transfer programs
  - Government research funding applications
  - Academic commercialization pathways

**Both formats can be adapted** to your specific program requirements by modifying section headers or adding institution-specific fields while maintaining the core structure and character/sentence limits.
