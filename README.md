# VIANEO Platform Tools

> **Evidence-based startup evaluation framework** | 5 Dimensions | 13-Step Process | Committee-Ready Outputs

![status](https://img.shields.io/badge/status-production--ready-brightgreen) ![prompts](https://img.shields.io/badge/prompts-18%20complete-blue) ![content](https://img.shields.io/badge/content-50000%2B%20lines-orange)

## Repository Status

**PRODUCTION READY** - Complete evaluation toolkit with 18 prompts, comprehensive reference materials, scoring frameworks, and quality checklists. This repository contains everything needed to conduct rigorous, evidence-based startup evaluations.

**Recent Updates (November 2025):**

- All 18 evaluation prompts complete with executable content
- 50,000+ lines of comprehensive methodology added
- Full question frameworks embedded (40Q, 29Q, and all deep-dive prompts)
- Evidence requirements and validation checklists included
- Professional output specifications and templates integrated
- AI assistant execution instructions added to all steps
- Interactive HTML visualizations for Steps 7, 9, 11, and 12

---

## Table of Contents

- [Quick Start](#quick-start)
- [What is VIANEO?](#what-this-system-does)
- [Framework at a Glance](#framework-at-a-glance)
- [Repository Structure](#repository-structure)
- [The 5 VIANEO Dimensions](#the-five-vianeo-dimensions)
- [Execution Paths](#three-execution-paths)
- [Usage Examples](#usage-examples)
- [Integration with Claude](#ai-assisted-execution)
- [Contributing](#contributing)

---

## Quick Start

**First-time users** - Get started in 5 minutes:

1. **Read** [Complete Evaluation Skill Guide](docs/VIANEO_Complete_Evaluation_Skill.md) - Understand the 13 steps
2. **Start** with [Step 0: Executive Brief](prompts/step_00_executive_brief_extraction.md) - Transform raw materials into structured brief
3. **Assess** with [Step 2: 40Q Diagnostic](prompts/step_02_diagnostic_40q.md) - Rapid comprehensive assessment
4. **Validate** with [Step 3: Market Maturity](prompts/step_03_market_maturity_29q.md) - Score across 5 dimensions

**Experienced users** - Quick reference:

- **Prompts:** `prompts/` - All 18 evaluation prompts (Steps 0-12)
- **Templates:** `templates/` - Professional output templates
- **Docs:** `docs/` - Methodology guides and checklists
- **Examples:** `examples/` - Sample assessments

---

## What This System Does

A comprehensive, AI-assisted framework for systematic startup assessment using the VIANEO methodology. Transform raw applications into evidence-based evaluations across five dimensions with professional visual outputs and executive-ready diagnostic comments.

This is a complete evaluation toolkit that takes you from initial startup application to committee-ready assessment package in **90 minutes to 6 hours** (depending on depth needed).

**You Get:**

- Structured business model canvas extraction
- 40-question diagnostic across Team/Technology/Management/Commercial
- 29-question market maturity assessment with dimensional scores
- Deep-dive legitimacy and desirability analysis
- Interactive HTML visualizations (needs matrix, features matrix, network map)
- Features-needs alignment mapping with coverage analytics
- Complete committee report with recommendations
- Professional presentation deck ready for investors/boards

---

## Who This Is For

| Audience | Use Case | Time Investment |
|----------|----------|-----------------|
| **Accelerators & Incubators** | Screen applications efficiently, compare cohorts objectively | 90 min per startup |
| **Investors** | Systematic due diligence, standardized deal flow evaluation | 3-4 hours per deal |
| **Advisors & Mentors** | Structured feedback, identify critical gaps | 2-3 hours per founder |
| **Founders** | Self-assess business readiness, identify evidence gaps | 4-6 hours self-evaluation |

---

## Framework at a Glance

**The 13-Step Evaluation Process:**

| Phase | Step | Name | Time | Key Output |
|-------|------|------|------|------------|
| **Phase 1: Foundation** | 0 | Executive Brief | 20-30m | Structured 7-section brief |
| | 1 | Application Forms | 15-20m | Program-specific docs |
| | 2 | 40Q Diagnostic | 30-45m | 4-dimension assessment |
| | 3 | 29Q Market Maturity | 45-60m | 5-dimension VIANEO scores |
| **Phase 2: Deep Dive** | 4 | Legitimacy Worksheet | 30-40m | Foundation validation |
| | 5 | Needs/Requesters | 45-60m | WHO/WHAT/WHY/HOW analysis |
| | 6 | Personas | 30-45m | Evidence-based personas |
| | 7 | Needs Qualification | 45-90m | Interactive matrix + report |
| | 8 | Players/Influencers | 30-40m | Ecosystem acceptability |
| | 9 | Value Network Map | 45-60m | Network visualization |
| **Phase 3: Synthesis** | 10 | Diagnostic Comment | 25-35m | Executive decision brief |
| | 11 | Features-Needs Matrix | 30-45m | MVP scope analysis |
| **Phase 4: Viability** | 12 | Viability Assessment | 2-4h | PMF sheets, Business models, Dashboard |

**Core Steps:** Steps 0, 2, and 3 are required. Others are optional based on project needs.

---

## Repository Structure

```
vianeo-platform-tools/
├── docs/                           # Core documentation
│   ├── VIANEO_Complete_Evaluation_Skill.md   # MASTER GUIDE - Start here
│   ├── VIANEO_Comprehensive_Reference_Guide.md   # All frameworks consolidated
│   ├── VIANEO_Quick_Reference_Card.md        # Print this! All essentials
│   ├── step11/                     # Step 11 complete skill package
│   └── value_network_map/          # Step 9 documentation package
│
├── prompts/                        # Step-by-step prompts (18 files)
│   ├── step_00_executive_brief_extraction.md
│   ├── step_02_diagnostic_40q.md
│   ├── step_03_market_maturity_29q.md
│   └── ... (Steps 0-12 complete)
│
├── templates/                      # Blank templates and HTML visualizations
│   ├── Step7_Needs_Matrix_Template.html      # Interactive needs matrix
│   ├── Step9_Value_Network_Visualization.html    # Network visualization
│   ├── Step11_FeaturesNeeds_DualView_Template.html   # Dual-view matrix
│   ├── Step12_Viability_Dashboard.html       # Interactive dashboard
│   └── ... (40+ templates)
│
├── tools/                          # Automation scripts
│   └── players_influencers_generator.py      # DOCX generator
│
├── examples/                       # Complete worked examples
│   ├── Example_Assessment_Early_Stage.md     # Score ~1.9
│   └── Example_Assessment_Promising_Stage.md     # Score ~4.1
│
├── DEPENDENCIES.md                 # Step dependency documentation
└── README.md                       # This file
```

---

## The Five VIANEO Dimensions

| Dimension | Weight | Threshold | Focus |
|-----------|--------|-----------|-------|
| **Legitimacy** | 15% | ≥ 3.0 | Is the problem real and significant? |
| **Desirability** | 25% | ≥ 3.5 | Do customers actually want this solution? |
| **Acceptability** | 20% | ≥ 3.0 | Will the ecosystem support this? |
| **Feasibility** | 20% | ≥ 3.0 | Can the team actually deliver this? |
| **Viability** | 20% | ≥ 3.0 | Is the business model sustainable? |

### Scoring Scale

| Score | Meaning | Evidence Required |
|-------|---------|------------------|
| **5** | Exceptional | 15-20+ external validations |
| **4** | Strong | 10-15 external validations |
| **3** | Adequate | 5-10 external validations |
| **2** | Weak | 1-4 validations |
| **1** | Insufficient | No external validation |

---

## Three Execution Paths

### Fast Track (90 minutes)
**Best For:** Initial screening, processing 10+ applications

**Steps:** 0 → 2 → 4 → 5

**Output:** Executive Brief, 40Q scores, dimensional gaps, Go/No-Go recommendation

---

### Standard (3-4 hours)
**Best For:** Committee-ready evaluation of top finalists

**Steps:** 0 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 10

**Output:** Complete diagnostics, all five dimensional scores, personas, needs matrix, ecosystem mapping, investment recommendation

---

### Complete (5-6 hours)
**Best For:** Executive presentations, Series A+ due diligence

**Steps:** All 0-12

**Output:** Everything from Standard + network visualization, features-needs matrix, MVP definition, board-ready presentation

---

## Critical Red Flags

| Pattern | Signals | Action |
|---------|---------|--------|
| **No Customer Validation** | Q7=1, Q13=1, Q22=1 | STOP building. START customer discovery. |
| **Ecosystem Blindness** | Q3=1, Q17=1, unfavorable players | Map ecosystem before investing more. |
| **Business Model Untested** | Q14=1, Q19=1, Q27=1 | Define and test revenue model immediately. |
| **Resource Constraints** | Q1=1, Q16=1, part-time team | Secure resources before proceeding. |

---

## Usage Examples

### For Accelerators
1. Use Fast Track (90 min) for all applications
2. Select top 10 based on dimensional scores
3. Use Standard (4 hours) for top 10
4. Use Complete (6 hours) for final 5 demo day packages

### For Investors
1. Use Standard path for preliminary evaluation
2. Identify red flags and deal-breakers
3. Use Complete path for investment committee presentation

### For Founders
1. Use Standard path for honest self-evaluation
2. Identify critical gaps requiring validation
3. Reassess after validation work

---

## AI-Assisted Execution

This system is optimized for AI assistance (Claude recommended):

```
"Execute VIANEO Step 0 canvas extraction on this application"

"Run the 40-question diagnostic with evidence citations"

"Complete the 29-question market maturity assessment"

"Generate needs qualification matrix HTML"

"Compile complete committee report"
```

Each step has a detailed prompt in `/prompts/` for consistent execution.

---

## Documentation

| Resource | Description |
|----------|-------------|
| [Complete Evaluation Skill](docs/VIANEO_Complete_Evaluation_Skill.md) | Master system guide |
| [Comprehensive Reference](docs/VIANEO_Comprehensive_Reference_Guide.md) | All frameworks consolidated |
| [Quick Reference Card](docs/VIANEO_Quick_Reference_Card.md) | Print-friendly essentials |
| [System Overview](docs/VIANEO_System_Overview.md) | How components fit together |

---

## Version & Attribution

**Version:** 2.5 (Complete 13-Step System with Viability Assessment)
**Framework:** VIANEO Business Model Evaluation Methodology
**Last Updated:** November 2025

---

## Contributing

To suggest improvements:
1. Use the framework extensively
2. Document specific issues or enhancements
3. Provide evidence for suggested changes
4. Submit pull requests with clear rationale

---

**Ready to conduct your first evaluation?** Start with [docs/VIANEO_Complete_Evaluation_Skill.md](docs/VIANEO_Complete_Evaluation_Skill.md)

**Transform startup applications into evidence-based investment decisions.**
