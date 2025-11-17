# Value Network Map: Quick Reference for Stakeholder Categorization

## Decision Tree for Box States

### Step 1: Assess Acceptability
Ask: **How does this stakeholder feel about our innovation?**

**FAVORABLE** → Supportive, engaged, sees value
- Examples: Early adopters, aligned partners, advocacy groups, beneficiaries

**NEUTRAL** → Aware but uncommitted, needs convincing, or uncertain
- Examples: Traditional channels, cautious buyers, regulatory bodies (pre-approval)

**UNFAVORABLE** → Resistant, concerned, or negatively impacted
- Examples: Threatened incumbents, displaced workers, concerned communities

---

### Step 2: Identify Needs
Ask: **Does this stakeholder have urgent, unmet needs our innovation addresses?**

**CRITICAL NEED** → Urgent, primary beneficiaries
- Typically: End users with acute problems
- Badge: "CRITICAL NEED" (red)

**NEED** → Important requirements we can fulfill
- Typically: Partners/buyers seeking solutions
- Badge: "NEED" (orange)

**NO NEED** → No immediate unmet requirements
- Typically: Supportive but not actively seeking
- Badge: None

---

### Step 3: Determine Box State

```
IF Favorable + Has Need → PRIORITY BOX (green border, 4px)
   Use class: box-priority
   Dot: dot-favorable
   Badge: badge-need or badge-critical

ELSE IF Favorable + No Need → FAVORABLE BOX (light green)
   Use class: box-favorable
   Dot: dot-favorable
   Badge: None

ELSE IF Neutral → NEUTRAL BOX (light yellow)
   Use class: box-neutral
   Dot: dot-neutral
   Badge: Rarely (only if strong need exists)

ELSE IF Unfavorable → UNFAVORABLE BOX (light red)
   Use class: box-unfavorable
   Dot: dot-unfavorable
   Badge: None
```

---

## Column-by-Column Guide

### Column 1: Enablers & Inputs (Upstream)

**Who Goes Here:**
- Technology providers
- Manufacturing/production partners
- IP/licensing sources
- Research institutions
- Regulatory approvers
- Funding sources
- Raw material suppliers

**Common Patterns:**
- Priority: Research partners ready to collaborate, manufacturers seeking applications
- Favorable: Academic institutions, supportive regulators
- Neutral: Standard component suppliers, potential funders
- Unfavorable: Protective IP holders, restrictive regulators

**Typical Needs:**
- Access to markets/applications
- Co-development opportunities
- Validation/proof points
- Partnership revenue

---

### Column 2: Product/Service (Core)

**What Goes Here:**
- ONE box only
- Your core innovation/offering
- Name + description + 4-8 key features

**No variations** (always purple gradient, always centered)

---

### Column 3: Channels & Partners

**Who Goes Here:**
- Distribution channels
- Implementation partners
- Pilot/test sites
- System integrators
- Market access facilitators
- Complementary platforms

**Common Patterns:**
- Priority: Pilot sites eager to test, strategic distribution partners
- Favorable: Aligned platforms, supportive networks
- Neutral: Traditional channels, standard distributors
- Unfavorable: Competing platforms, protective gatekeepers

**Typical Needs:**
- Novel solutions to offer customers
- Differentiation in market
- Access to innovation
- Implementation support

---

### Column 4: Buyers & Clients

**Who Goes Here:**
- Direct purchasers
- Budget holders
- Procurement decision makers
- Professional associations (influencing purchases)
- Health plans/insurers
- Government agencies (as buyers)

**Common Patterns:**
- Priority: Organizations with urgent cost/quality problems
- Favorable: Forward-thinking institutions, aligned associations
- Neutral: Traditional procurement, cautious buyers
- Unfavorable: Incumbents preferring status quo

**Typical Needs:**
- Cost reduction
- Quality improvement
- Risk mitigation
- Compliance solutions
- Competitive advantage

---

### Column 5: End Users (Downstream)

**Who Goes Here:**
- Direct beneficiaries of the innovation
- Patient populations
- Healthcare workers affected
- Community groups impacted
- Advocacy organizations
- Environmental/social stakeholders
- Anyone indirectly affected (positive or negative)

**Common Patterns:**
- Priority: Primary beneficiaries with acute unmet needs (use CRITICAL NEED)
- Favorable: Advocacy groups, researchers, positive externalities
- Neutral: Indirectly affected parties
- Unfavorable: Those concerned about risks, displaced workers

**Typical Needs:**
- Solution to urgent problem (CRITICAL)
- Better outcomes
- Access/affordability
- Safety/security
- Quality of life

---

## Box State Combinations Reference

| Acceptability | Need Status | Box Class | Border | Badge | Dot |
|--------------|-------------|-----------|--------|-------|-----|
| Favorable | Critical | box-priority | 4px green | badge-critical | dot-favorable |
| Favorable | Need | box-priority | 4px green | badge-need | dot-favorable |
| Favorable | None | box-favorable | 2px light green | None | dot-favorable |
| Neutral | Need | box-neutral | 2px orange | badge-need | dot-neutral |
| Neutral | None | box-neutral | 2px orange | None | dot-neutral |
| Unfavorable | Any | box-unfavorable | 2px red | None | dot-unfavorable |

**Note:** Unfavorable stakeholders rarely have "needs" (they're resistant), but if they do exist as unfavorable with needs, don't use priority box (they're not targets for engagement).

---

## Writing Content

### Player Titles
**Good Examples:**
- "HC/FMUSP" (specific institution)
- "Public Hospitals (SUS)" (clear category with context)
- "Medical Physics Assoc" (abbreviated but clear)
- "Hyperthyroid Patients" (specific beneficiary group)

**Avoid:**
- Too generic: "Hospitals"
- Too vague: "Potential partners"
- Too long: "Association of Medical Physics Professionals in Brazil"

**Guideline:** 2-6 words, specific enough to be actionable

---

### Player Subtitles
**Good Examples:**
- "Pilot test site" (clarifies relationship)
- "72.8M potential patients" (quantifies scale)
- "Cost reduction focus" (explains motivation)
- "Job displacement concerns" (reveals why unfavorable)

**Avoid:**
- Repeating title: "Hospital system"
- Too generic: "Important stakeholder"
- No context: "Interested party"

**Guideline:** 2-6 words, adds clarity about role or motivation

---

### Core Product Features
**Good Examples:**
- "IoT real-time monitoring" (technology + benefit)
- "50% cost reduction vs traditional" (quantified value)
- "LGPD-compliant system" (addresses concern)
- "Organ-specific dose calculation" (specific capability)

**Avoid:**
- Too generic: "High quality"
- Too technical: "Uses scintillation crystal arrays"
- Not differentiating: "User-friendly interface"

**Guideline:** 4-8 features, focus on differentiation and concrete value

---

## Common Questions

**Q: What if someone fits multiple columns?**
Place them where their primary role is. Reference multi-role nature in subtitle if relevant.

**Q: What if I'm unsure about acceptability?**
Default to Neutral. Better to be conservative. Can refine through interviews.

**Q: Can I have more than 6 boxes per column?**
Limit to 4-6 most important. Combine similar stakeholders or focus on key players.

**Q: Should government regulators go in Enablers or Buyers?**
Enablers if they approve/enable the innovation. Buyers if they purchase it.

**Q: What if a stakeholder is both buyer and end user?**
If they're the primary beneficiary, put in End Users. If they're decision maker first, put in Buyers.

**Q: How do I decide between NEED and CRITICAL NEED?**
CRITICAL NEED: Reserved for end users with urgent, acute problems (typically patients/primary beneficiaries)
NEED: For partners/buyers with important requirements

**Q: Can Neutral or Unfavorable stakeholders be Priority boxes?**
No. Priority box = Favorable + Need. By definition, priority targets are supportive stakeholders with needs.

---

## Workshop Process

### Pre-Work
1. List all stakeholders in ecosystem
2. Research their positions/motivations
3. Gather quantitative data (market sizes, patient numbers)

### During Mapping
1. Sort stakeholders into columns (where they fit)
2. For each, assess: Favorable/Neutral/Unfavorable?
3. For each, identify: Do they have unmet needs we address?
4. Apply box states based on decision tree
5. Write clear titles and subtitles
6. Review: Are priority targets (green boxes) realistic?

### Post-Mapping
1. Validate assumptions with team
2. Plan engagement strategy for priority targets
3. Develop messaging for each stakeholder type
4. Set metrics for moving stakeholders toward favorable

---

## Quality Checks

Before finalizing, verify:

**Visual Clarity:**
- [ ] Priority targets (green borders) immediately visible
- [ ] Color coding consistent (favorable = green tints, etc.)
- [ ] Only 1 core product box (purple, center)
- [ ] Need badges only on stakeholders with actual needs

**Strategic Logic:**
- [ ] Priority targets are both favorable AND have needs
- [ ] Unfavorable stakeholders realistically positioned
- [ ] Column placement makes sense (role-based)
- [ ] End users include those negatively affected (if any)

**Content Quality:**
- [ ] All titles specific and actionable
- [ ] Subtitles add meaningful context
- [ ] Product features differentiate from alternatives
- [ ] No generic placeholder text remains

---

## File Checklist

When delivering to client:

- [ ] Title updated with project name
- [ ] All placeholder comments removed or replaced
- [ ] 4-6 stakeholders per column (except product = 1)
- [ ] Box states correctly applied
- [ ] Dots match box colors
- [ ] Badges only where needs exist
- [ ] Legend and footer unchanged
- [ ] File saved as: `[project]_[team]_ecosystem_value_network.html`

---

## Strategic Insights from the Map

**Use the completed map to:**

1. **Prioritize Engagement:** Start with priority targets (green borders)
2. **Develop Messaging:** Tailor value proposition to each stakeholder type
3. **Identify Risks:** Pay attention to unfavorable stakeholders
4. **Find Champions:** Favorable stakeholders can advocate
5. **Plan Pilots:** Channel partners with needs are ideal test sites
6. **Anticipate Barriers:** Neutral stakeholders may need education
7. **Measure Progress:** Track movement from neutral to favorable

**Key Question:** Can we move any neutral stakeholders to favorable through targeted engagement?

---

Last Updated: November 2025
