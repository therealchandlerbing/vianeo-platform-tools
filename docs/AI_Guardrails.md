# AI Guardrails for VIANEO Evaluation System

**Document Version:** 1.0
**Last Updated:** 2025-01-15
**Applies To:** All AI-assisted assessment work in VIANEO framework

---

## Purpose

This document establishes **explicit rules for AI-assisted business design and evaluation work**. AI accelerates analysis and drafting, but truth comes from field validation, interviews, and primary sources. These guardrails ensure traceability, prevent hallucination, and maintain ethical standards.

**Core Principle:** AI is an acceleration tool, not a validation tool.

---

## Fundamental Rules

### Rule 1: Require Sources for All Claims

**Rule:** Every factual claim must cite a specific source or be labeled as unverified.

**Application:**
- ✅ GOOD: "Rural clinics face 2+ week delays (E001: INT-045, Dr. Chen interview)"
- ❌ BAD: "Rural clinics face long delays" (no source, vague)

**AI Instruction:**
> "Provide a source for every factual claim. If no source exists, prefix the claim with [UNVERIFIED] and note that validation is required."

**Enforcement:**
- All assessment scores ≥3 must cite Evidence IDs
- All market size claims must cite published research or data sources
- All problem statements must cite stakeholder interviews or studies

---

### Rule 2: Prohibit Invented Citations

**Rule:** Never invent, fabricate, or hallucinate sources. If a source doesn't exist, say so explicitly.

**Application:**
- ✅ GOOD: "I don't have a source for market size. Recommend consulting [specific database] or conducting [specific research]."
- ❌ BAD: "According to a 2023 study by XYZ Research..." (when study doesn't exist)

**AI Instruction:**
> "Never invent citations. If you don't have access to a source, state: 'No source available. Recommend validation method: [specific method].' Do not make up study names, URLs, or publication details."

**Detection Methods:**
- Require DOIs or stable URLs for all published research
- Spot-check all citations for validity
- Flag vague citations ("studies show", "research indicates") without specifics

---

### Rule 3: Label Confidence Levels Explicitly

**Rule:** Every claim must be labeled with its confidence level based on evidence quality.

**Confidence Levels:**
- **L1 (Internal Assertion):** Team belief, no external source → Label as "UNVERIFIED - L1"
- **L2 (Team Corroboration):** Multiple team members, no external source → Label as "TEAM VIEW - L2"
- **L3 (External Validated):** Primary source, interview, or published data → Label with Evidence ID "E###"

**AI Instruction:**
> "For every claim, assign and display a confidence level: L1 (internal assertion), L2 (team corroboration), or L3 (external validated). Only L3 claims should be used for scoring ≥3 or Gate A decisions."

**Application:**
- All scores must show confidence level
- Low confidence scores must have validation plans
- Gate A requires all critical hypotheses at L3 or have active validation

---

### Rule 4: Keep AI Outputs at Draft Status Until Field Verified

**Rule:** All AI-generated analysis, recommendations, and insights are drafts until validated by primary research.

**Application:**
- AI can draft interview guides → Validate by pilot testing with 2-3 interviewees
- AI can suggest hypotheses → Validate through discovery interviews
- AI can analyze competitors → Validate by interviewing customers who use competitors
- AI can propose pricing → Validate with willingness-to-pay interviews

**AI Instruction:**
> "Label all outputs as DRAFT. Include a validation checklist showing what evidence is required to upgrade from draft to validated."

**Workflow:**
1. AI generates draft analysis
2. Mark as "[DRAFT - Requires Validation]"
3. Execute validation method (interviews, research, pilot)
4. Update with Evidence IDs and confidence levels
5. Remove draft label when validated

---

### Rule 5: Disclose AI Limitations Explicitly

**Rule:** AI must acknowledge when it lacks information, is uncertain, or is making assumptions.

**Application:**
- ✅ GOOD: "I don't have interview data on willingness to pay. This is an assumption requiring validation through pricing interviews."
- ❌ BAD: "Customers will pay $300/month" (stated as fact without source)

**AI Instruction:**
> "When you lack information, explicitly state: 'I don't have data on [topic]. Recommended validation method: [specific method].' Never fill gaps with assumptions presented as facts."

**Disclosure Phrases to Use:**
- "No data available on [X]. Recommend [validation method]."
- "This is an assumption based on [limited data]. Confidence: Low. Validation needed."
- "I can only provide general industry patterns here. Specific to your context requires [primary research]."

---

## AI Use Cases and Guardrails by VIANEO Step

### Step 0: Executive Brief Extraction

**What AI Can Do:**
- Extract information from application materials
- Enforce character limits by editing for brevity
- Flag solution-embedded language in problem statements
- Suggest maturity stage based on traction data

**Guardrails:**
- Must cite source document and page/section for every B1-B7 claim
- If information missing, mark field as "[INSUFFICIENT DATA]", don't invent
- Flag all assumptions as L1 or L2, require validation plans
- All traction metrics (B6) must have source in application or be marked "Claimed by founders - unverified"

**AI Prompt Template:**
```
Extract Executive Brief from [application materials]. For each B1-B7 section:
1. Extract content within character limits
2. Cite source (document name, page, section)
3. If information missing, write "[INSUFFICIENT DATA - Not provided in application]"
4. Flag any claims without evidence as "[UNVERIFIED - Requires validation]"
5. Do not invent data or make assumptions
```

---

### Step 1: Application Forms (360 SIS / CNEN)

**What AI Can Do:**
- Map Executive Brief content to application fields
- Expand within sentence limits (2-3 or 3-5)
- Ensure consistency across sections
- Format tables and structure

**Guardrails:**
- All content must trace to Executive Brief (Step 0)
- Sentence limits are hard constraints, not suggestions
- If expanding content, note what's inferred vs. stated
- Theory of Change must be logical, even if unvalidated

**AI Prompt Template:**
```
Generate [360 SIS / CNEN] application from Executive Brief. Rules:
1. Map each application field to Executive Brief section (cite B#)
2. Stay within sentence limits (2-3 or 3-5)
3. If expanding, note: "[Inferred from B# - Confirm with founders]"
4. Do not add claims not in Executive Brief
5. Flag gaps: "[Missing from Executive Brief - Request from founders]"
```

---

### Step 2: 40-Question Diagnostic

**What AI Can Do:**
- Score questions based on Executive Brief evidence
- Identify gaps where evidence is insufficient
- Generate "Questions to Ask Founders" list
- Calculate dimension averages

**Guardrails:**
- Score 1-2: Allowed, note what's missing
- Score 3: Requires at least 1 cited evidence source
- Score 4-5: Requires 2-3+ cited evidence sources
- Use "INSUFFICIENT DATA" when application doesn't provide info
- Never invent evidence to justify a higher score

**AI Prompt Template:**
```
Score 40-question diagnostic. For each question:
1. Review Executive Brief for relevant evidence
2. Assign score 1-5 OR mark "INSUFFICIENT DATA"
3. Cite evidence (E### or Executive Brief section)
4. If scoring ≥3, provide evidence quote
5. If INSUFFICIENT DATA, add to "Questions to Ask Founders"
6. Calculate dimension averages
7. Identify red flags per framework
```

---

### Step 3: Market Maturity 29Q

**What AI Can Do:**
- Score based on all prior assessment evidence
- Map questions to prior steps (Executive Brief, 40Q, interviews)
- Calculate weighted dimensional scores
- Check against thresholds

**Guardrails:**
- Must reference Evidence Log for all scores ≥3
- Confidence level must match evidence quality
- Overall score is formula-based, not subjective
- All threshold checks are pass/fail, no adjustment

**AI Prompt Template:**
```
Complete 29-question Market Maturity Assessment:
1. Review all prior evidence (Executive Brief, 40Q, Evidence Log)
2. For each question, cite Evidence IDs
3. Assign confidence level (L1/L2/L3) matching evidence quality
4. Calculate dimensional scores per formula
5. Apply weightings: L=15%, D=25%, A=20%, F=20%, V=20%
6. Check each dimension against threshold
7. Provide overall score and pass/fail determination
```

---

### Step 4: Legitimacy Deep Dive

**What AI Can Do:**
- Draft counterfactual questions (what could invalidate problem)
- Analyze problem statement for solution neutrality
- Structure problem significance analysis
- Identify evidence gaps in problem validation

**Guardrails:**
- Counterfactuals must be testable and specific
- Cannot declare problem "significant" without evidence
- All claims about problem magnitude require sources
- Must distinguish "problem exists" from "problem is significant"

**AI Prompt Template:**
```
Conduct Legitimacy Deep Dive:
1. Analyze problem statement for solution neutrality
2. Generate 5 counterfactual questions to test problem validity
3. Assess problem significance based on cited evidence (E###)
4. Identify evidence gaps requiring field validation
5. Do not assert significance without quantitative evidence
6. Recommend specific validation methods for gaps
```

---

### Step 5: Desirability Analysis (Needs Extraction)

**What AI Can Do:**
- Extract needs from interview transcripts
- Normalize needs into measurable outcomes
- Check needs for distinctness (independence)
- Draft personas from interview patterns

**Guardrails:**
- All needs must cite interview sources (INT-###)
- Cannot invent needs not stated by interviewees
- Distinctness test: AI must explain why two needs are different
- Importance/satisfaction scores must come from interviewees, not AI judgment

**AI Prompt Template:**
```
Extract needs from interview transcripts:
1. Identify need statements from verbatim quotes
2. Normalize into format: [Verb] + [Object] + [Context if needed]
3. Keep under 60 characters
4. Cite interview source (INT-###) for each need
5. Test distinctness: explain why each pair is independent
6. Do not add needs not mentioned by interviewees
7. Assign importance/satisfaction only if stated by interviewees
```

---

### Steps 6-8: Ecosystem and Visuals

**What AI Can Do:**
- Structure ecosystem actor lists
- Generate HTML for visualizations
- Classify actors by type (enabler, channel, buyer, user, etc.)
- Draft stance rationales based on interview notes

**Guardrails:**
- Actor names must come from interviews or research, not invented
- Stance classification (favorable/neutral/unfavorable) requires evidence
- All value flows must be validated or marked as hypothetical
- HTML outputs are tools for presentation, not evidence themselves

**AI Prompt Template:**
```
Generate ecosystem map:
1. List actors mentioned in interviews (cite INT-###)
2. Classify by type using framework (enabler/channel/buyer/user)
3. Assign stance (favorable/neutral/unfavorable) based on interview evidence
4. If stance is inferred, mark "[INFERRED - Validate with interview]"
5. Map value flows based on validated relationships
6. Generate HTML visualization
7. Include legend noting validated vs. hypothetical elements
```

---

## Prompt Design Best Practices

### Modular Prompts

**Principle:** Each prompt should produce one artifact aligned to VIANEO steps.

**Structure:**
```
Role: [Specify what AI should act as]
Context: [Provide background, prior steps, evidence]
Task: [Specific output to produce]
Constraints: [Character limits, evidence requirements, prohibitions]
Format: [Table, JSON, narrative, checklist]
Guardrails: [Cite sources, label confidence, flag gaps]
```

**Example: Evidence Extraction Prompt**
```
Role: You are a qualitative researcher extracting evidence from interview transcripts.

Context: Interview INT-045 with rural clinic director about specialist access delays.

Task: Extract 5-10 key claims with verbatim quotes that validate or invalidate our problem hypothesis.

Constraints:
- Every claim must have verbatim quote
- Note whether claim validates, contradicts, or is neutral to hypothesis
- Assign Evidence ID (E###) to each claim
- Do not paraphrase or interpret - extract exact words

Format: Table with columns [Evidence ID | Claim | Verbatim Quote | Validates/Contradicts/Neutral | Theme]

Guardrails:
- Do not invent quotes
- If transcript unclear, note "[UNCLEAR - requires clarification]"
- Tag emotional signals (frustration, urgency, resignation)
```

---

### Response Schemas (Structured Outputs)

**Principle:** Request structured outputs that separate facts from interpretation.

**Standard Schema:**
```json
{
  "summary": "High-level takeaway",
  "assumptions": ["List explicit assumptions made"],
  "validated_claims": [
    {
      "claim": "Specific statement",
      "evidence_id": "E###",
      "source": "INT-###, page/timestamp",
      "confidence": "L3"
    }
  ],
  "unverified_claims": [
    {
      "claim": "Statement without evidence",
      "validation_method": "Specific method to validate",
      "confidence": "L1"
    }
  ],
  "insights": ["Interpreted patterns or themes"],
  "open_questions": ["What we still don't know"],
  "next_actions": [
    {
      "action": "Specific step",
      "owner": "Role",
      "due": "Date",
      "success_criteria": "What validates this"
    }
  ]
}
```

**Benefits:**
- Separates validated from unvalidated
- Forces explicit confidence levels
- Identifies gaps and next actions
- Enables automated quality checks

---

## Quality Assurance Process

### Pre-Execution Checks

Before using AI for any VIANEO step:

- [ ] Prompt includes guardrails (cite sources, label confidence, flag gaps)
- [ ] Prompt specifies what NOT to do (no invented data, no assumptions as facts)
- [ ] Prompt requests structured output with evidence fields
- [ ] Validation plan exists for AI-generated drafts
- [ ] Human review step identified before publishing outputs

### Post-Execution Checks

After AI generates output:

- [ ] All factual claims have sources or "[UNVERIFIED]" label
- [ ] Confidence levels assigned (L1/L2/L3)
- [ ] No invented citations (spot-check 3-5 citations for validity)
- [ ] Gaps explicitly noted with validation methods
- [ ] Output labeled as [DRAFT] if not yet field-validated
- [ ] Evidence Log updated with all cited sources
- [ ] Hypotheses Log updated with tested hypotheses

### Human Oversight Requirements

**Always Require Human Review:**
1. **Gate A Decision Briefs** - Too critical to automate
2. **Go/Pivot/Stop Recommendations** - Judgment call, not formula
3. **Pricing Validation** - AI cannot determine willingness to pay
4. **Regulatory/Legal Analysis** - Too risky to rely on AI
5. **Interview Analysis** - Human must listen to tone, emotion, context

**AI Can Draft, Human Must Validate:**
1. Problem statements
2. Need extraction from interviews
3. Hypothesis generation
4. Competitive analysis
5. Risk enumeration
6. Business model options

**AI Can Automate with Spot Checks:**
1. Character limit enforcement
2. Evidence ID citation checking
3. Calculation of scores and averages
4. HTML generation for visualizations
5. File naming and organization

---

## Common AI Pitfalls and Mitigations

### Pitfall 1: Over-Confidence in Uncertain Claims

**Problem:** AI states assumptions as facts without qualification.

**Mitigation:**
- Require confidence labels on all claims
- Prompt: "For any claim without direct evidence, preface with [ASSUMED] or [INFERRED]"
- Use structured schema with separate fields for validated vs. unverified

**Example:**
- ❌ Bad: "The market size is $2.4B"
- ✅ Good: "[ASSUMED] Market size estimated at $2.4B based on [calculation method]. Requires validation through [specific research source]."

---

### Pitfall 2: Hallucinated Statistics

**Problem:** AI invents plausible-sounding numbers without sources.

**Mitigation:**
- Require citation for every number
- Prompt: "For any statistic, provide source with URL or DOI. If source doesn't exist, write [NO SOURCE - REQUIRES RESEARCH]"
- Spot-check all statistics by searching claimed sources

**Example:**
- ❌ Bad: "Studies show 35% of rural clinics face staffing shortages"
- ✅ Good: "35% of rural clinics face staffing shortages (Source: HRSA 2023 Report, Table 4.3, URL: [link])" OR "[NO SOURCE - Anecdotal from interviews, requires published research]"

---

### Pitfall 3: Generic Recommendations

**Problem:** AI provides boilerplate advice not specific to evidence.

**Mitigation:**
- Require all recommendations to cite evidence
- Prompt: "Every recommendation must reference a specific evidence gap or validated insight. No generic advice."
- Format: "RECOMMENDATION: [Action] BECAUSE [Evidence-based reason citing E###] TO ADDRESS [Specific gap]"

**Example:**
- ❌ Bad: "Conduct more customer interviews"
- ✅ Good: "Conduct 10 additional interviews with rural clinic administrators (E001-E005 covered physicians only) to validate pricing willingness at organizational level (Gap: all current WTP data from physician-level, not buyer-level)"

---

### Pitfall 4: Ignoring Contradictory Evidence

**Problem:** AI cherry-picks supporting evidence, ignores contradictions.

**Mitigation:**
- Prompt: "List all evidence, including contradictory. If evidence conflicts, explain the contradiction and what additional validation is needed."
- Require "Contradictions" section in all analysis outputs
- Human review to ensure balanced presentation

**Example:**
- ❌ Bad: "Problem validated by 10 interviews" (ignores 3 interviews that contradicted)
- ✅ Good: "Problem validated by 10 of 13 interviews (E001-E010). Contradictions: 3 interviewees (E011-E013) reported adequate specialist access via telemedicine. Hypothesis: problem may be region-specific (Southeast vs. Northwest). Validation needed: 5 interviews in Northwest region."

---

### Pitfall 5: Solution Bias Creep

**Problem:** AI subtly embeds solution in problem statement or need extraction.

**Mitigation:**
- Explicit prompt: "Problem statement must be solution-neutral. Flag any mention of technology, product, or approach."
- Test: "Can this problem be solved by multiple different approaches?" If no, it's solution-embedded.
- Human review of all problem statements and needs

**Example:**
- ❌ Bad (solution-embedded): "Rural clinics need an AI-powered diagnostic tool"
- ✅ Good (solution-neutral): "Rural clinics need faster access to specialist expertise for complex diagnoses"

---

## Ethical Considerations

### Privacy and Confidentiality

**Rule:** Never include personally identifiable information (PII) in AI-shared contexts.

**Application:**
- Redact names, email addresses, phone numbers, organization names before sharing with AI
- Use role-based anonymization: "Clinic Director A" not "Dr. Sarah Chen"
- If using AI with access to transcripts, ensure compliance with data processing agreements
- Store recordings and transcripts separately from AI-processed analyses

**Checklist:**
- [ ] PII redacted from all interview transcripts before AI processing
- [ ] Organization names generalized (e.g., "a rural health system" not "XYZ Health")
- [ ] Quotes anonymized before including in public reports
- [ ] Consent obtained for any non-anonymized usage

---

### Bias Detection

**Rule:** AI can amplify biases in training data. Actively check for and mitigate bias.

**Common Biases:**
- **Confirmation bias:** AI finds evidence supporting pre-existing hypothesis
- **Sampling bias:** AI generalizes from non-representative interview sample
- **Cultural bias:** AI interprets needs through dominant culture lens
- **Availability bias:** AI over-weights recent or salient evidence

**Mitigation:**
- Prompt for counterexamples: "What evidence contradicts this hypothesis?"
- Diversify interview sample (demographics, geographies, roles, organization types)
- Human review by people from target user communities
- Test assumptions with users from different backgrounds

---

### Localization and Cultural Context

**Rule:** AI lacks cultural nuance. Always validate cross-cultural assumptions with local experts.

**Application:**
- Prompt: "Flag any cultural assumptions or generalizations. Note where local expertise is required."
- For non-US markets: require local collaborator review before finalizing assessments
- For marginalized communities: include community members in assessment process
- Translate back: if using AI translation, have native speaker back-translate to check accuracy

---

## Version Control and Audit Trail

### Document AI Usage

**Requirement:** Maintain log of all AI-assisted work.

**Log Format:**

| Step | AI Tool | Prompt Summary | Input Sources | Output Artifact | Validation Method | Validated By | Date |
|------|---------|----------------|---------------|-----------------|-------------------|--------------|------|
| Step 0 | GPT-4 | Extract Executive Brief from application | [Application.pdf] | Executive_Brief.md | Manual review of citations | John | 2025-01-15 |
| Step 2 | Claude | Score 40Q Diagnostic | Executive_Brief.md | 40Q_Assessment.md | Evidence Log cross-check | Sarah | 2025-01-18 |

**Purpose:**
- Traceability of AI-assisted work
- Replicability if re-running assessment
- Audit trail for compliance
- Learning to improve prompts

---

### Version Control for AI-Generated Artifacts

**Rule:** Use clear version labels to track evolution from draft to validated.

**Version Labels:**
- **v0.1-DRAFT-AI:** Initial AI-generated output, not validated
- **v0.2-DRAFT-HUMAN:** Human-edited draft, not yet field-validated
- **v1.0-VALIDATED:** Field-validated with evidence, ready for decision-making
- **v1.1-REVISED:** Updated based on new evidence

**File Naming:**
```
[ProjectName]_[Step]_[Artifact]_v[Version]-[Status]_[Date].md

Examples:
- RuralHealthAI_Step0_ExecutiveBrief_v0.1-DRAFT-AI_2025-01-15.md
- RuralHealthAI_Step0_ExecutiveBrief_v1.0-VALIDATED_2025-01-22.md
```

---

## Training and Onboarding

### For Evaluators Using AI

**Required Training:**
1. Complete this AI Guardrails document
2. Practice prompt engineering with sample projects
3. Demonstrate ability to validate AI outputs against Evidence Log
4. Complete ethics and privacy training

**Certification Criteria:**
- Can write prompts with proper guardrails
- Can identify hallucinated citations
- Can distinguish L1/L2/L3 evidence
- Knows when human review is required vs. AI automation acceptable

---

### For Reviewers of AI-Assisted Work

**Review Checklist:**
- [ ] All factual claims have sources or "[UNVERIFIED]" label
- [ ] Confidence levels assigned and match evidence quality
- [ ] No invented statistics or citations
- [ ] Contradictory evidence acknowledged
- [ ] Problem statements are solution-neutral
- [ ] Privacy requirements met (PII redacted)
- [ ] Gaps explicitly noted with validation plans
- [ ] Recommendations are specific and evidence-based

---

## Continuous Improvement

### Prompt Library Curation

**Process:**
1. Team maintains shared prompt library
2. Each prompt includes guardrails template
3. Track success rate (% outputs requiring major revision)
4. Monthly review: retire ineffective prompts, promote effective ones
5. Document lessons learned

**Prompt Effectiveness Metrics:**
- Time saved vs. human-only baseline
- Error rate (hallucinations, unsourced claims)
- Revision cycles required before validated
- User satisfaction ratings

---

### Feedback Loop

**After Every Assessment:**
- [ ] Log what AI did well
- [ ] Log where AI failed or required significant human correction
- [ ] Update relevant prompts in library
- [ ] Share learnings with team

**Quarterly Review:**
- Analyze AI error patterns
- Update guardrails based on new failure modes discovered
- Benchmark against industry best practices
- Update training materials

---

## Summary: The AI-Augmented Evaluation Workflow

```
1. Human: Define evaluation question or assessment need
   ↓
2. AI: Draft analysis using prompt with guardrails
   ↓ (AI outputs labeled [DRAFT])
3. Human: Review for hallucinations, unsourced claims, bias
   ↓
4. Human: Design and execute validation (interviews, research, pilots)
   ↓
5. Human: Update artifacts with Evidence IDs, upgrade confidence levels
   ↓ (Remove [DRAFT] label when validated)
6. AI: Generate visualizations, calculations, formatted outputs
   ↓
7. Human: Final review for decision-making
   ↓
8. Human: Make go/pivot/stop decision (never automated)
```

**Key Principle:** AI accelerates steps 2 and 6. Humans own steps 1, 3, 4, 5, 7, 8.

---

**Document Version:** 1.0
**Last Updated:** 2025-01-15
**Owner:** [Evaluation Team Lead]
**Review Cycle:** Quarterly
**Next Review:** 2025-04-15

---

## Appendix: Prompt Templates

### Template A: Evidence Extraction from Interview

```
Role: Qualitative researcher extracting evidence from interview transcript

Context: Interview [INT-###] with [role] about [topic]

Task: Extract all claims that validate or invalidate hypothesis: "[hypothesis statement]"

Output Format:
| Evidence ID | Claim | Verbatim Quote | Source | Validates/Contradicts/Neutral | Confidence |
|-------------|-------|----------------|--------|-------------------------------|------------|

Guardrails:
- Cite interview ID and timestamp for every quote
- Use exact words from transcript, no paraphrasing
- If unclear, note "[UNCLEAR - requires follow-up]"
- Assign L3 confidence if directly stated, L2 if inferred
- Do not add claims not in transcript
```

---

### Template B: Hypothesis Generation from Evidence

```
Role: Business analyst translating evidence into testable hypotheses

Context: Evidence Log entries [E001-E025] from [source]

Task: Generate 10 testable hypotheses covering all 5 VIANEO dimensions

Output Format:
| H# | Hypothesis Statement | Proof Area | Confidence | Evidence IDs | Validation Method |
|----|---------------------|------------|------------|--------------|-------------------|

Guardrails:
- Each hypothesis must cite evidence (E###) that inspired it
- Hypothesis must be testable (falsifiable)
- If no evidence exists, note "[ASSUMPTION - requires validation]"
- Specify concrete validation method for each
- Do not generate hypotheses unsupported by evidence
```

---

### Template C: Scoring with Evidence Citation

```
Role: Assessment evaluator scoring [Step/Question]

Context: Evidence Log, Executive Brief, prior assessment outputs

Task: Score [question/dimension] on 1-5 scale with evidence

Output Format:
Score: [1-5 or INSUFFICIENT DATA]
Evidence IDs: [E###, E###]
Rationale: [Why this score based on evidence]
Confidence: [L1/L2/L3]
Gap: [What evidence would upgrade score]

Guardrails:
- Score ≥3 requires cited evidence (E###)
- If no evidence, use "INSUFFICIENT DATA" not a guess
- Confidence must match evidence level (L1/L2/L3)
- Rationale must reference specific evidence
- Identify what's needed to upgrade score
```

---

**End of AI Guardrails Document**
