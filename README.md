# Vianeo Platform Tools

**Complete 8-Step Business Model Evaluation System**

A comprehensive, AI-assisted framework for systematic startup assessment using the VIANEO methodology. Transform raw applications into evidence-based evaluations across five dimensions with professional visual outputs.

---

## What This System Does

This is a complete evaluation toolkit that takes you from initial startup application to committee-ready assessment package in **90 minutes to 6 hours** (depending on depth needed).

**You Get:**
- ✅ Structured business model canvas extraction
- ✅ 40-question diagnostic across Team/Technology/Management/Commercial
- ✅ 29-question market maturity assessment with dimensional scores
- ✅ Deep-dive legitimacy and desirability analysis
- ✅ Interactive HTML visualizations (needs matrix, network map)
- ✅ Complete committee report with recommendations
- ✅ Professional presentation deck ready for investors/boards

---

## Who This Is For

**🎯 Accelerators & Incubators**
- Screen applications efficiently (90 min per startup)
- Compare cohorts objectively
- Track progress through milestones

**💰 Investors**
- Conduct systematic due diligence
- Standardize deal flow evaluation
- Identify risks before investment

**🤝 Advisors & Mentors**
- Provide structured feedback to founders
- Identify critical gaps requiring attention
- Track validation progress over time

**🚀 Founders**
- Self-assess business readiness
- Identify evidence gaps before fundraising
- Prioritize validation activities

---

## The Complete 8-Step Workflow

```
Step 0: Executive Brief Extraction (20-30 min)
  → B1-B7 structure (150-300 char limits) + Maturity Stage (TRL 1-9)

Step 1: Application Forms [OPTIONAL] (15-20 min)
  → 360 SIS (social impact) or CNEN (research) format with DOCX output

Step 2: 40-Question Diagnostic (30-45 min)
  → Team (9Q), Technology (11Q), Management (12Q), Commercial (8Q)
  → Two documents: Assessment Results + Score Summary

Step 3: 29-Question Market Maturity (45-60 min)
  → Five dimensional scores: Legitimacy, Desirability, Acceptability, Feasibility, Viability
  → Three professional outputs: Markdown report + 2 DOCX documents

Step 4: Legitimacy Deep Dive (20-30 min)
  → Problem definition, application domain, team & approach, available resources
  → Two professional outputs: Markdown worksheet + DOCX formatted version

Step 5: Desirability - Needs/Requesters Analysis (30-40 min)
  → Requesters (6-10 roles), Needs (10: Tasks/Pains/Expectations), Existing Solutions
  → FOUR professional outputs: Markdown analysis + 3 DOCX (Core Analysis, Strategic Analysis, Interview Guide)

Step 6: Needs Qualification Matrix (45 min)
  → Interactive HTML heatmap showing priority targets

Step 7: Ecosystem Mapping (30-45 min)
  → Stakeholder analysis with acceptability ratings

Step 8: Network Visualization (60-90 min)
  → Interactive HTML value network map
```

---

## Three Execution Paths

### 🏃 Fast Track (90 minutes)

**Best For:** Initial screening, processing 10+ applications

**Steps:** 0 → 2 → 4 → 5

**Output:**
- Executive Brief (B1-B7 with maturity stage)
- 40Q diagnostic scores (2 documents)
- Dimensional scores (Team/Tech/Mgmt/Commercial)
- Key gaps identified
- Go/No-Go recommendation

---

### 🚶 Standard (3-4 hours)

**Best For:** Committee-ready evaluation of top 5 finalists

**Steps:** 0 → 2 → 3 → 4 → 5 → 6 → 7

**Output:**
- Executive Brief + Application form (if needed)
- Complete diagnostics (40Q with 2 docs)
- All five dimensional scores (29Q with 3 docs: Markdown + Assessment Results DOCX + Dimension Analysis DOCX)
- Needs matrix HTML visualization
- Ecosystem mapping
- Investment recommendation with conditions

---

### 🎯 Complete (5-6 hours)

**Best For:** Executive presentations, Series A+ due diligence

**Steps:** All 0-8

**Output:**
- Everything from Standard
- Interactive network visualization
- Professional committee report
- Board-ready presentation deck

---

## Quick Start

### Option 1: Use Complete System (Recommended)

1. **Read the Complete Evaluation Skill Guide** (15 min)
   ```
   docs/VIANEO_Complete_Evaluation_Skill.md
   ```
   Understand the complete 8-step process

2. **Print the Quick Reference Card**
   ```
   docs/VIANEO_Quick_Reference_Card.md
   ```
   Keep visible for thresholds, scoring scales, quality gates

3. **Choose Your Execution Path**
   - Fast Track: 90 min screening
   - Standard: 3-4 hour evaluation
   - Complete: 5-6 hour package

4. **Execute Step-by-Step**
   Use prompts in `/prompts/` directory for each step

---

### Option 2: Market Maturity Assessment Only (Step 3)

If you only need the 29-question dimensional assessment:

1. **Read Quick Start Card** (5 min)
   ```
   docs/VIANEO_Quick_Start_Card.md
   ```

2. **Use the System Prompt**
   ```
   docs/VIANEO_Market_Maturity_System_Prompt.md
   ```

3. **Follow the Workflow**
   ```
   docs/VIANEO_Assessment_Workflow_Guide.md
   ```

---

## Repository Structure

```
vianeo-platform-tools/
├── docs/                                    # Core documentation
│   ├── VIANEO_Complete_Evaluation_Skill.md      # ⭐ MASTER GUIDE - Start here
│   ├── VIANEO_Quick_Reference_Card.md          # Print this! All essentials
│   ├── VIANEO_System_Overview.md               # How components fit together
│   ├── VIANEO_Market_Maturity_System_Prompt.md # Step 3: Primary prompt
│   ├── VIANEO_Assessment_Workflow_Guide.md     # Step 3: Detailed process
│   ├── VIANEO_29Question_Quick_Reference.md    # Step 3: Question details
│   └── VIANEO_Evidence_Checklist.md            # Step 3: Evidence requirements
│
├── prompts/                                 # Step-by-step prompts
│   ├── step_0_canvas_extraction.md              # Extract business model canvas
│   ├── step_1_application_form.md               # Optional: Program applications
│   ├── step_2_diagnostic_40q.md                 # 40-question diagnostic
│   ├── step_3_market_maturity_29q.md            # 29-question market maturity (complete)
│   ├── step_4_legitimacy_worksheet.md           # Legitimacy deep dive (complete)
│   ├── step_5_needs_requesters.md               # Needs/Requesters analysis (complete)
│   ├── step_6_needs_matrix_html.md              # HTML matrix generator (TODO)
│   ├── step_7_ecosystem_mapping.md              # Stakeholder analysis (TODO)
│   └── step_8_network_visualization.md          # HTML network map (TODO)
│
├── visualizations/                          # HTML templates
│   ├── needs_matrix_template.html               # Priority heatmap (TODO)
│   └── network_map_template.html                # Value network (TODO)
│
├── worksheets/                              # Analysis worksheets
│   ├── Legitimacy_Analysis_Template.md          # Problem validation (TODO)
│   └── Ecosystem_Mapping_Template.md            # Stakeholder table (TODO)
│
├── templates/                               # Blank templates
│   ├── Step3_MarketMaturity_Markdown_Template.md    # Step 3: Full report (18 sections)
│   ├── Step3_Assessment_Results_Template.md         # Step 3: DOCX table format
│   ├── Step3_Dimension_Analysis_Template.md         # Step 3: DOCX narrative format
│   ├── Step4_Legitimacy_Markdown_Template.md        # Step 4: Legitimacy worksheet
│   ├── Step4_Legitimacy_DOCX_Template.md            # Step 4: DOCX format reference
│   ├── Step5_NeedsRequesters_Markdown_Template.md   # Step 5: Complete analysis (12 sections)
│   ├── Step5_NeedsRequesters_DOCX_Part1_Template.md # Step 5: Core Analysis DOCX format
│   ├── Step5_NeedsRequesters_DOCX_Part2_Template.md # Step 5: Strategic Analysis DOCX format
│   ├── Step5_NeedsRequesters_DOCX_Part3_Template.md # Step 5: Interview Guide DOCX format
│   ├── Evidence_Log_Template.md                     # Evidence tracking with E### IDs
│   ├── Hypotheses_Log_Template.md                   # Hypothesis validation tracking
│   ├── Gate_A_Decision_Brief_Template.md            # Go/pivot/stop decision framework
│   ├── Interview_Guide_Template.md                  # Discovery interview protocol
│   └── Committee_Report_Template.md                 # Final report (TODO)
│
├── examples/                                # Complete examples
│   ├── Example_Assessment_Early_Stage.md        # Score ~1.9 (Step 3)
│   └── Example_Assessment_Promising_Stage.md    # Score ~4.1 (Step 3)
│
└── README.md                                # This file
```

---

## The Five VIANEO Dimensions

### 1. Legitimacy (15% Weight, Threshold ≥ 3.0)

**Focus:** Is the problem real and significant?

**Critical Questions:**
- Is the problem validated by external stakeholders?
- Is the field of application appropriate?
- Does the team have unique insight?

**Evidence Required:**
- Multiple stakeholders confirming problem
- Data quantifying problem magnitude
- Domain expertise or personal connection

---

### 2. Desirability (25% Weight, Threshold ≥ 3.5)

**Focus:** Do customers actually want this solution?

**Critical Questions:**
- Have 5+ users per segment been interviewed?
- Are user needs distinct and validated?
- Is there evidence of problem-solution fit?
- How does it compare to alternatives?

**Evidence Required:**
- Customer discovery interviews (5-20+ per segment)
- User testing with prototypes
- Competitive analysis with direct testing
- Validated willingness to pay

---

### 3. Acceptability (20% Weight, Threshold ≥ 3.0)

**Focus:** Will the ecosystem support this?

**Critical Questions:**
- Are all key stakeholders mapped?
- What are their acceptability ratings?
- Are critical partners willing to collaborate?
- Are barriers identified and addressable?

**Evidence Required:**
- Ecosystem map with 5-20+ players
- Acceptability ratings (favorable/neutral/unfavorable)
- Mitigation strategies for resistance
- Partnership discussions initiated

---

### 4. Feasibility (20% Weight, Threshold ≥ 3.0)

**Focus:** Can the team actually deliver this?

**Critical Questions:**
- Does team have necessary skills?
- Is technology proven or feasible?
- Are resources secured or accessible?
- Is there a realistic plan?

**Evidence Required:**
- Team completeness assessment
- Technical proof-of-concept or prototype
- Resource plan with funding
- Development timeline with milestones

---

### 5. Viability (20% Weight, Threshold ≥ 3.0)

**Focus:** Is the business model sustainable?

**Critical Questions:**
- Is revenue model clearly defined?
- Has pricing been tested with customers?
- Is there a path to profitability?
- Are unit economics favorable?

**Evidence Required:**
- Business model canvas complete
- Pricing tested with 5+ customers
- Financial projections with validated assumptions
- Unit economics (LTV:CAC ratio)

---

## Scoring Scales

### Evidence-Based Scale (All Steps)

| Score | Meaning | Evidence Required |
|-------|---------|------------------|
| **5** | **Exceptional** | 15-20+ external validations, multiple sources, documented |
| **4** | **Strong** | 10-15 external validations, clear evidence |
| **3** | **Adequate** | 5-10 external validations (minimum threshold) |
| **2** | **Weak** | 1-4 validations, mostly assumptions |
| **1** | **Insufficient** | No external validation, pure assumption |

### Overall Score Categories

| Score Range | Category | Recommendation |
|-------------|----------|----------------|
| 4.5-5.0 | **Strong** | Proceed with implementation |
| 3.5-4.4 | **Promising** | Proceed, strengthen gaps |
| 3.0-3.4 | **Developing** | Conditional proceed, address gaps |
| 2.0-2.9 | **Problematic** | Reassess assumptions, pivot likely |
| <2.0 | **Non-viable** | Consider pivot or validation sprint |

---

## Key Features

### Character Limits Enforced

**Executive Brief (Step 0) - Strict Limits:**
- B1 One-Line Description: 150 chars
- B2 Problem Statement: 300 chars
- B3 Proposed Solution: 300 chars
- B4 Target Market/Users: 300 chars
- B5 Business Model/Revenue: 300 chars
- B6 Traction/Validation: 300 chars
- B7 Team/Resources: 200 chars
- Supplementary Notes: 250 chars each

**Application Forms (Step 1):**
- Project Summary: 500 chars (2-3 sentences)
- All other sections: 750 chars (3-5 sentences)

**Needs & Ecosystem (Steps 5-8):**
- Needs Statements: 60 chars each
- Player Names: 60 chars each
- Ecosystem Notes: 250 chars

### Evidence Requirements

Every score ≥3 requires:
- Specific external validation cited
- Source documented
- Numbers provided (X interviews, Y customers)

Every score of 1 requires:
- Exactly what evidence is needed specified
- No vague "needs validation"

### Visual Outputs

**Needs Qualification Matrix** (Step 6):
- Interactive HTML heatmap
- Priority zones color-coded (Critical/High/Medium/Low)
- Importance vs. Satisfaction across segments

**Network Visualization** (Step 8):
- Interactive HTML value network
- 5-column layout (Enablers → Product → Channels → Buyers → Users)
- Color-coded by acceptability
- Priority targets highlighted

### Quality Control

Built-in quality gates between steps:
- Character limit verification
- Evidence citation checks
- Consistency validation
- Red flag identification

---

## Critical Red Flags

### 🚨 Pattern 1: No Customer Validation
- Q7 = 1 (no interviews)
- Q13 = 1 (problem not validated)
- Q22 = 1 (not tested with customers)

**Action:** STOP building. START customer discovery immediately.

### 🚨 Pattern 2: Ecosystem Blindness
- Q3 = 1 (no ecosystem map)
- Q17 = 1 (no resistance identified)
- Multiple unfavorable critical players

**Action:** Map ecosystem before investing more. May face unexpected resistance.

### 🚨 Pattern 3: Business Model Untested
- Q14 = 1 (revenue undefined)
- Q19 = 1 (not tested with customers)
- Q27 = 1 (can't articulate value)

**Action:** Define and test revenue model immediately. Great product ≠ sustainable business.

### 🚨 Pattern 4: Resource Constraints
- Q1 = 1 (lacking resources)
- Q16 = 1 (no committed team)
- Team all part-time

**Action:** Secure resources before proceeding. Execution impossible without fundamentals.

---

## Usage Examples

### For Accelerators

**Cohort Screening:**
1. Use Fast Track (90 min per startup) for all 50 applications
2. Select top 10 based on dimensional scores
3. Use Standard (4 hours) for top 10
4. Select final 5 based on complete evaluation
5. Use Complete (6 hours) for final 5 for demo day packages

**Result:** Systematic, evidence-based cohort selection with professional outputs

---

### For Investors

**Deal Flow Processing:**
1. Request standardized materials from founders
2. Use Standard path (4 hours) for preliminary evaluation
3. Identify red flags and deal-breakers
4. Request additional evidence for gaps
5. Use Complete path (6 hours) for investment committee
6. Visual outputs support IC presentation

**Result:** Consistent evaluation framework, reduced bias, clear investment criteria

---

### For Founders

**Self-Assessment:**
1. Gather all business materials
2. Use Standard path for honest self-evaluation
3. Identify critical gaps requiring validation
4. Create 30-60-90 day validation plan
5. Reassess after validation work
6. Use before fundraising to identify weaknesses investors will find

**Result:** Proactive gap identification, stronger fundraising position

---

## Time Investment

### Per Project

- **Fast Track:** 90 minutes (screening)
- **Standard:** 3-4 hours (committee evaluation)
- **Complete:** 5-6 hours (executive package)

### Per Cohort (10 Startups)

- **Initial screening:** 15 hours (Fast Track all)
- **Deep dive top 5:** 15-20 hours (Standard)
- **Final packages top 3:** 15-18 hours (Complete)
- **Total:** 45-53 hours for complete cohort

### ROI

**Instead of:**
- Subjective gut decisions
- Inconsistent evaluation criteria
- Missing critical risks
- Endless committee debates

**You get:**
- Evidence-based decisions
- Standardized criteria
- Red flags identified early
- Clear, defensible recommendations

---

## Getting Started

**Step 1:** Read the master guide
```
docs/VIANEO_Complete_Evaluation_Skill.md
```

**Step 2:** Print the quick reference
```
docs/VIANEO_Quick_Reference_Card.md
```

**Step 3:** Choose your execution path
- Fast Track: Quick screening
- Standard: Committee ready
- Complete: Executive presentation

**Step 4:** Execute step-by-step
Use prompts in `/prompts/` directory

**Step 5:** Generate outputs
- Canvas, diagnostics, scores
- HTML visualizations
- Committee report

---

## AI-Assisted Execution

This system is optimized for AI assistance (Claude recommended):

```
"Execute VIANEO Step 0 canvas extraction on this application"

"Run the 40-question diagnostic with evidence citations"

"Complete the 29-question market maturity assessment"

"Generate needs qualification matrix HTML"

"Create interactive network visualization"

"Compile complete committee report"
```

Each step has a detailed prompt in `/prompts/` for consistent execution.

---

## Support & Documentation

**Complete Guides:**
- Master System Guide: `docs/VIANEO_Complete_Evaluation_Skill.md`
- Quick Reference: `docs/VIANEO_Quick_Reference_Card.md`
- System Overview: `docs/VIANEO_System_Overview.md`

**Step-Specific:**
- Market Maturity (Step 3): `docs/VIANEO_Market_Maturity_System_Prompt.md`
- All Other Steps: `prompts/step_[0-8]_*.md`

**Examples:**
- Early Stage: `examples/Example_Assessment_Early_Stage.md`
- Promising Stage: `examples/Example_Assessment_Promising_Stage.md`

---

## Version & Attribution

**Version:** 2.0 (Complete 8-Step System)
**Framework:** VIANEO Business Model Evaluation Methodology
**Last Updated:** 2025-01-15

---

## License

This assessment framework is provided for business evaluation purposes. Use it to make better-informed decisions about venture development and investment.

---

## Contributing

To suggest improvements:
1. Use the framework extensively
2. Document specific issues or enhancements
3. Provide evidence for suggested changes
4. Submit pull requests with clear rationale

---

**Ready to conduct your first complete evaluation?**

1. Start with `docs/VIANEO_Complete_Evaluation_Skill.md`
2. Print `docs/VIANEO_Quick_Reference_Card.md`
3. Choose your execution path (Fast/Standard/Complete)
4. Execute step-by-step using prompts in `/prompts/`
5. Generate professional outputs with HTML visualizations

**Transform startup applications into evidence-based investment decisions.**
