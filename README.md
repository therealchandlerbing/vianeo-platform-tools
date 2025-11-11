# Vianeo Platform Tools

A comprehensive business model assessment framework using the Vianeo Market Maturity Assessment methodology. This repository provides everything needed to conduct evidence-based assessments of business ventures across five dimensions: Legitimacy, Desirability, Acceptability, Feasibility, and Viability.

## Overview

The Vianeo Market Maturity Assessment is a 29-question framework for evaluating business ventures objectively using external validation and evidence. It helps founders, investors, advisors, and accelerators make informed decisions about business viability.

### Key Features

- **29-Question Framework**: Comprehensive assessment across 5 dimensions
- **Evidence-Based**: Scores based on external validation, not assumptions
- **Claude-Optimized**: System prompt designed for AI-assisted assessment
- **Complete Documentation**: Guides, references, checklists, and examples
- **Ready-to-Use Templates**: Start assessing immediately
- **Proven Methodology**: Based on Vianeo's business model evaluation framework

---

## Quick Start

### For First-Time Users

1. **Read the Quick Start Card** (5 minutes)
   ```
   docs/VIANEO_Quick_Start_Card.md
   ```
   Print this and keep it visible during assessment.

2. **Review the System Overview** (10 minutes)
   ```
   docs/VIANEO_System_Overview.md
   ```
   Understand how all the pieces fit together.

3. **Follow the Workflow Guide** (60-90 minutes)
   ```
   docs/VIANEO_Assessment_Workflow_Guide.md
   ```
   Step-by-step process for conducting assessments.

4. **Use the Template**
   ```
   templates/Assessment_Template.md
   ```
   Fill in as you assess your business.

### For Claude-Assisted Assessment

Use Claude to help conduct assessments by providing the system prompt:

```
I need help conducting a Vianeo Market Maturity Assessment.

Please use the system prompt in docs/VIANEO_Market_Maturity_System_Prompt.md
to evaluate this business using the 29-question framework.

Return a table with columns: Question #, Score, Justification, Evidence Reference

[Attach or paste your business materials here]
```

---

## Repository Structure

```
vianeo-platform-tools/
├── docs/                           # Core documentation
│   ├── VIANEO_Quick_Start_Card.md           # One-page reference (print this!)
│   ├── VIANEO_System_Overview.md            # System architecture and usage
│   ├── VIANEO_Market_Maturity_System_Prompt.md  # PRIMARY: Claude prompt ⭐
│   ├── VIANEO_Assessment_Workflow_Guide.md  # Complete step-by-step process
│   ├── VIANEO_29Question_Quick_Reference.md # Detailed question guidance
│   └── VIANEO_Evidence_Checklist.md         # Evidence requirements per question
├── templates/                      # Assessment templates
│   └── Assessment_Template.md               # Blank assessment template
├── examples/                       # Example assessments
│   ├── Example_Assessment_Early_Stage.md    # Score ~2.0 example
│   └── Example_Assessment_Promising_Stage.md # Score ~4.0 example
└── README.md                       # This file
```

---

## The Framework

### Five Dimensions

| Dimension | Weight | Threshold | Questions | Focus |
|-----------|--------|-----------|-----------|-------|
| **Legitimacy** | 15% | 3.0 | 2 | Is the problem real and significant? |
| **Desirability** | 25% | 3.5 | 12 | Do customers want this solution? |
| **Acceptability** | 20% | 3.0 | 6 | Will the ecosystem support it? |
| **Feasibility** | 20% | 3.0 | 5 | Can the team deliver it? |
| **Viability** | 20% | 3.0 | 4 | Is the business model sustainable? |

**Overall Threshold**: 3.2

### Scoring Scale (1-5)

| Score | Meaning | Evidence Required |
|-------|---------|------------------|
| **5** | Exceptional | 15-20+ external validations, multiple sources |
| **4** | Strong | 10-15 external validations, clear evidence |
| **3** | Adequate | 5-10 external validations (minimum threshold) |
| **2** | Weak | 1-4 validations, mostly assumptions |
| **1** | Insufficient | No external validation, pure assumption |

### Overall Categories

| Score | Category | Recommendation |
|-------|----------|----------------|
| 4.5-5.0 | **Strong** | Proceed with implementation |
| 3.5-4.4 | **Promising** | Proceed, strengthen gaps |
| 3.0-3.4 | **Developing** | Conditional proceed, address gaps |
| 2.0-2.9 | **Problematic** | Reassess assumptions, pivot likely |
| <2.0 | **Non-viable** | Consider pivot or validation sprint |

---

## Core Principles

### 1. Evidence Over Assumptions
- Score what **exists**, not what's **planned**
- External validation (interviews, testing) required for Score 3+
- Internal beliefs or assumptions receive low scores

### 2. Specificity Over Generality
- Cite exact sources and documents
- Use specific numbers (interviews, tests, customers)
- Avoid vague language ("good progress", "working on it")

### 3. Honesty Over Optimism
- Lower scores are not failures - they show where to focus
- Acknowledge gaps transparently
- Distinguish validated facts from aspirational goals

### 4. Action Over Judgment
- Every Score 1 must specify exactly what's needed
- Focus on how to improve, not just what's wrong
- Use results to drive specific next steps

---

## Document Guide

### 🎯 Start Here

**[Quick Start Card](docs/VIANEO_Quick_Start_Card.md)**
- Print and keep visible during assessment
- One-page reference with all essentials
- Scoring scale, thresholds, formulas
- Evidence requirements summary

### 📋 Core System

**[System Prompt](docs/VIANEO_Market_Maturity_System_Prompt.md)** ⭐ **MOST IMPORTANT**
- Primary prompt for Claude-assisted assessment
- Complete instructions and scoring guidance
- All 29 questions with detailed criteria
- Output format specifications

**[Workflow Guide](docs/VIANEO_Assessment_Workflow_Guide.md)**
- Complete step-by-step process
- Pre-assessment preparation
- Quality control procedures
- Common scenarios and solutions

**[System Overview](docs/VIANEO_System_Overview.md)**
- How all documents fit together
- Recommended workflows
- Quality standards
- Maintenance and updates

### 🔍 Detailed References

**[29 Question Quick Reference](docs/VIANEO_29Question_Quick_Reference.md)**
- All questions organized by dimension
- Detailed scoring guidance per question
- Evidence requirements
- Red flag identification

**[Evidence Checklist](docs/VIANEO_Evidence_Checklist.md)**
- Specific evidence requirements for each question
- What to look for in documentation
- Evidence quality guidelines
- Pre-submission checklist

### 📝 Templates & Examples

**[Assessment Template](templates/Assessment_Template.md)**
- Blank template for conducting assessments
- All sections included
- Ready to fill in

**[Early Stage Example](examples/Example_Assessment_Early_Stage.md)**
- Example assessment of early-stage startup
- Overall score: 1.9 (Non-viable - needs validation)
- Shows common early-stage patterns

**[Promising Stage Example](examples/Example_Assessment_Promising_Stage.md)**
- Example assessment of validated startup
- Overall score: 4.1 (Promising)
- Shows what strong validation looks like

---

## Common Use Cases

### For Founders

**Self-Assessment**:
1. Gather all business documentation
2. Follow Workflow Guide to complete assessment
3. Identify critical gaps
4. Create action plan to address gaps
5. Reassess after validation work

**Benefits**:
- Objective view of business readiness
- Identify blind spots before investors do
- Prioritize validation work
- Track progress over time

### For Investors

**Due Diligence**:
1. Request standardized materials from founders
2. Complete independent assessment
3. Verify external evidence
4. Identify deal-breakers
5. Use as basis for investment decision

**Benefits**:
- Standardized evaluation framework
- Evidence-based decision making
- Identify red flags early
- Compare ventures objectively

### For Advisors/Mentors

**Startup Evaluation**:
1. Request materials in advance
2. Complete assessment independently
3. Schedule review meeting
4. Collaborate on action plan
5. Set follow-up assessment date

**Benefits**:
- Structured feedback framework
- Clear, actionable guidance
- Track progress between sessions
- Focus mentoring time effectively

### For Accelerators/Incubators

**Selection & Progress Tracking**:
1. Require assessment for all applicants
2. Multiple evaluators assess independently
3. Compare scores for consistency
4. Use for selection decisions
5. Reassess at program milestones

**Benefits**:
- Fair, consistent selection process
- Baseline for progress tracking
- Identify program interventions needed
- Measure program impact

---

## Critical Questions

Some questions are particularly critical and **cannot be Score 1** for a viable business:

**Q7: Customer Discovery**
- Must have 5+ interviews per segment (minimum Score 3)
- No customer interviews = cannot validate anything else

**Q13: Problem Validation**
- Problem must be validated by multiple people (minimum Score 3)
- If problem doesn't exist, solution is irrelevant

**Q19: Revenue Model Testing**
- Revenue model must be tested with customers (minimum Score 2)
- Untested pricing = business model is pure assumption

**Q22: Customer Testing per Segment**
- Must test with customers per segment (minimum Score 2)
- No segment validation = no product-market fit

---

## Red Flag Patterns

### 🚨 Pattern 1: No Customer Validation
- Q7 = 1 (no interviews)
- Q13 = 1 (problem not validated)
- Q22 = 1 (not tested with customers)

**Action**: STOP building immediately. START customer discovery interviews.

### 🚨 Pattern 2: Ecosystem Blindness
- Q3 = 1 (no ecosystem map)
- Q17 = 1 (no resistance identified)
- Q20 = 1 (can't map market)

**Action**: Map ecosystem before investing more. May face unexpected resistance.

### 🚨 Pattern 3: Business Model Untested
- Q14 = 1 (revenue undefined)
- Q19 = 1 (not tested with customers)
- Q27 = 1 (can't articulate value)

**Action**: Define and test revenue model immediately. Great product ≠ sustainable business.

### 🚨 Pattern 4: Resource Constraints
- Q1 = 1 (lacking resources)
- Q16 = 1 (no committed team)
- Q26 = 1 (can't develop offer)

**Action**: Address resource gaps before proceeding. Execution impossible without fundamentals.

---

## Reassessment Schedule

| Overall Score | Reassess Every | Reason |
|---------------|----------------|--------|
| < 2.0 | 2-4 weeks | Rapid validation needed |
| 2.0-2.9 | 4 weeks | Building evidence |
| 3.0-3.4 | 4-6 weeks | Addressing gaps |
| 3.5-4.4 | 2-3 months | Monitoring progress |
| 4.5+ | Quarterly | Maintaining excellence |

**Also reassess immediately after**:
- Major business model pivot
- Significant funding round
- New market entry
- Major competitive development
- Regulatory environment change
- Key partnership formation or loss

---

## Tips for Effective Assessment

### Do's ✅

- **Do** score based on documented evidence
- **Do** cite specific sources (documents, interviews, reports)
- **Do** use numbers when available (X interviews, Y customers)
- **Do** require external validation for scores 3+
- **Do** specify exactly what's needed for Score 1s
- **Do** check consistency across related questions
- **Do** focus on actionable improvements

### Don'ts ❌

- **Don't** score based on plans or intentions
- **Don't** use vague justifications ("team believes", "good progress")
- **Don't** inflate scores to look better
- **Don't** accept internal opinions as evidence
- **Don't** skip the evidence checklist
- **Don't** rush - take time for thorough assessment
- **Don't** ignore red flag patterns

---

## Quality Standards

### Excellent Assessment

- ✅ All 29 questions scored with specific evidence
- ✅ Every Score 4-5 cites external validation
- ✅ Every Score 1 specifies exact evidence needed
- ✅ Justifications are clear and concise (one sentence)
- ✅ Dimension scores calculated correctly
- ✅ Action recommendations are specific and prioritized
- ✅ Follow-up schedule established

### Before Submitting

Verify this checklist:

- [ ] All 29 questions scored
- [ ] Every Score 4-5 has specific external evidence cited
- [ ] Every Score 1 specifies what evidence is needed
- [ ] Justifications are one sentence, specific, factual
- [ ] All dimension calculations correct
- [ ] Overall weighted score calculated
- [ ] All thresholds checked
- [ ] Top 3-5 strengths identified
- [ ] Top 3-5 critical gaps identified
- [ ] Action plan prioritized
- [ ] Next assessment date set
- [ ] Consistency checks completed

---

## Frequently Asked Questions

### Q: What materials do I need for an assessment?

**Essential**:
- Business plan or pitch deck
- Customer research documentation
- Financial projections
- Team information

**Helpful**:
- Competitive analysis
- User testing results
- Market research reports
- Partnership agreements

### Q: How long does an assessment take?

- **Quick scan**: 10 minutes (initial impression)
- **Full assessment**: 45-90 minutes (depends on materials)
- **With Claude**: 20-30 minutes (AI-assisted)

### Q: Can I assess my own business?

Yes, but be rigorous:
- Score what exists, not what's planned
- Require same evidence standards as external evaluator
- Consider having someone else assess independently
- Compare self-assessment with external assessment

### Q: What if I don't have evidence for a question?

- Score it as **1**
- Specify exactly what evidence is needed
- Create plan to gather that evidence
- Reassess after evidence collected

### Q: How accurate is the assessment?

Accuracy depends on:
- Quality of evidence provided
- Honesty in scoring
- Consistency in evaluation
- Multiple evaluators (recommended) increase accuracy

### Q: What's a "good" score?

- **3.2+** = Viable business, can proceed
- **3.5+** = Promising, ready for investment consideration
- **4.0+** = Strong, well-validated
- **2.0-3.2** = Needs more validation before proceeding
- **<2.0** = Requires significant validation work

---

## Contributing

This is a business assessment framework. To suggest improvements:

1. Use the framework extensively
2. Document specific issues or enhancements
3. Provide evidence for suggested changes
4. Submit pull requests with clear rationale

---

## Version History

- **v1.0** (2025-01-15): Initial release
  - Complete 29-question framework
  - Full documentation suite
  - Claude-optimized system prompt
  - Templates and examples

---

## Support

For questions or issues:

1. Review the documentation thoroughly
2. Check the examples for similar scenarios
3. Consult the FAQ above
4. Open an issue in the repository

---

## License

This assessment framework is provided for business evaluation purposes. Use it to make better-informed decisions about venture development and investment.

---

## Acknowledgments

Based on the Vianeo Business Model Evaluation methodology and the Five Proofs of Value framework.

---

**Ready to start?**

1. Print the [Quick Start Card](docs/VIANEO_Quick_Start_Card.md)
2. Read the [System Overview](docs/VIANEO_System_Overview.md)
3. Follow the [Workflow Guide](docs/VIANEO_Assessment_Workflow_Guide.md)
4. Use the [Assessment Template](templates/Assessment_Template.md)

Or get Claude to help:
```
Use docs/VIANEO_Market_Maturity_System_Prompt.md to assess this business.
```

**Good luck with your assessment!**
