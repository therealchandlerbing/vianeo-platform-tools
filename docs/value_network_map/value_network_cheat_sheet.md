# Value Network Map: One-Page Cheat Sheet

## Box State Decision Matrix

| Acceptability | Has Need? | Box Class | Border | Badge | Dot | Priority? |
|--------------|-----------|-----------|--------|-------|-----|-----------|
| Favorable | Yes (Critical) | `box-priority` | 4px green | `badge-critical` | `dot-favorable` | ✓ |
| Favorable | Yes (Important) | `box-priority` | 4px green | `badge-need` | `dot-favorable` | ✓ |
| Favorable | No | `box-favorable` | 2px lt green | none | `dot-favorable` | |
| Neutral | Yes/No | `box-neutral` | 2px orange | `badge-need`* | `dot-neutral` | |
| Unfavorable | Any | `box-unfavorable` | 2px red | none | `dot-unfavorable` | |

*Rare: only if neutral stakeholder has strong unmet need

---

## Column Quick Reference

| Column | Header Color | Who Goes Here | Typical Priorities |
|--------|-------------|---------------|-------------------|
| 1. Enablers | Blue | Tech providers, research partners, IP sources, manufacturers, regulators, funders | Ready collaborators, manufacturers seeking applications |
| 2. Product | Purple | **ONE BOX ONLY** - Your core innovation | N/A (always purple gradient) |
| 3. Channels | Yellow | Distribution, pilots, system integrators, implementation partners | Pilot sites, strategic distributors with unmet needs |
| 4. Buyers | Red | Purchasers, budget holders, procurement, insurers, professional associations | Organizations with urgent cost/quality problems |
| 5. End Users | Green | Direct beneficiaries, patients, workers, advocacy, affected communities | Primary beneficiaries with acute problems (CRITICAL NEED) |

---

## HTML Structure Template

```html
<!-- STANDARD BOX -->
<div class="player-box [STATE]">
    <span class="need-badge [TYPE]">[TEXT]</span> <!-- Optional -->
    <div class="player-title">[NAME]</div>
    <div class="player-subtitle">[CONTEXT]</div>
    <div class="acceptability-indicator">
        <div class="acceptability-dot [COLOR]"></div>
    </div>
</div>

<!-- CORE PRODUCT BOX (Column 2 only) -->
<div class="player-box core-product">
    <div class="player-title">[PRODUCT NAME]</div>
    <div class="player-content">
        [DESCRIPTION]
        <ul class="feature-list">
            <li>[Feature 1]</li>
            <!-- 4-8 features total -->
        </ul>
    </div>
</div>
```

---

## CSS Classes Reference

**Box States:**
- `box-priority` - Green border (4px), Favorable + Need
- `box-favorable` - Light green gradient, Favorable only
- `box-neutral` - Light yellow gradient, Neutral
- `box-unfavorable` - Light red gradient, Unfavorable

**Dots:**
- `dot-favorable` - Green (#66bb6a)
- `dot-neutral` - Orange (#ffa726)
- `dot-unfavorable` - Red (#ef5350)

**Badges:**
- `badge-critical` - "CRITICAL NEED" (red gradient)
- `badge-need` - "NEED" (orange gradient)

**Column Headers:**
- `enablers-header` - Blue
- `product-header` - Purple
- `channels-header` - Yellow
- `buyers-header` - Red
- `users-header` - Green

---

## Fixed Specifications (Never Change)

**Grid Layout:** `1fr | 1.2fr | 1fr | 1fr | 1fr`
**Container:** 1900px × 1100px, 80px padding
**Typography:** Inter font family
**Box Padding:** 14px standard, 28px core product
**Column Gap:** 45px
**Box Margin:** 14px bottom
**Box Min-Height:** 65px standard, 240px core product

**Header:**
- H1: 36px, weight 700, color #1a1a1a
- P: 18px, color #6c757d, weight 400

**Player Content:**
- Title: 14px, weight 600 (20px in core product)
- Subtitle: 11px, italic, color #6c757d
- Features: 13px, rgba(255,255,255,0.9)

---

## Content Guidelines

**Player Title:** 2-6 words, specific and actionable
✓ "HC/FMUSP" | "Public Hospitals (SUS)" | "Hyperthyroid Patients"
✗ "Partners" | "Potential buyers" | "Users"

**Player Subtitle:** 2-6 words, adds context/motivation
✓ "Pilot test site" | "Cost reduction focus" | "Primary beneficiaries"
✗ "Important stakeholder" | "Key player" | "Interested"

**Product Features:** 4-8 bullets, concrete and differentiating
✓ "50% cost reduction vs traditional" | "LGPD-compliant system"
✗ "High quality" | "User-friendly" | "Innovative"

---

## Workflow Checklist

**Pre-Work:**
- [ ] List all ecosystem stakeholders
- [ ] Research their positions/needs
- [ ] Gather quantitative data

**Mapping:**
- [ ] Sort into 5 columns by role
- [ ] Assess each: Favorable/Neutral/Unfavorable?
- [ ] Identify unmet needs
- [ ] Determine box states
- [ ] Write titles and subtitles

**Building:**
- [ ] Open template file
- [ ] Search for `<!-- EDIT:`
- [ ] Replace all placeholders
- [ ] Verify 4-6 boxes per column (except Product = 1)
- [ ] Check box class matches dot color
- [ ] Save as: `[project]_[team]_ecosystem_value_network.html`

**Quality Check:**
- [ ] Priority targets (green) immediately visible
- [ ] Color coding consistent
- [ ] Only 1 purple product box
- [ ] Badges only where needs exist
- [ ] Dots match box states
- [ ] All text specific and actionable
- [ ] No placeholder comments remain

---

## Common Mistakes

❌ Priority box for neutral/unfavorable → ✅ Priority = Favorable + Need only
❌ CRITICAL NEED everywhere → ✅ Reserved for end users with urgent needs
❌ Multiple product boxes → ✅ Always exactly 1 (center column)
❌ Changing column colors → ✅ Colors are fixed (Blue-Purple-Yellow-Red-Green)
❌ Generic titles → ✅ Specific, actionable stakeholder names
❌ Mismatched dots/boxes → ✅ Favorable box = favorable dot

---

## Quick Decisions

**"Where does this stakeholder go?"**
→ Which role describes them best? Enabler / Channel / Buyer / End User?

**"What box state?"**
→ How do they feel? (Favorable/Neutral/Unfavorable)
→ Do they have needs? (Yes = consider priority if favorable)

**"Do they get a badge?"**
→ Only if they have unmet needs we address
→ CRITICAL = urgent end user needs
→ NEED = important partner/buyer needs

**"What dot color?"**
→ Must match box state (Favorable=green, Neutral=orange, Unfavorable=red)

---

## File Naming

Format: `[project]_[team]_ecosystem_value_network.html`
Example: `irdose_ipen_ecosystem_value_network.html`

---

## Support Resources

**Strategic questions** → value_network_quick_reference.md
**Technical specs** → value_network_map_build_guide.md
**Starting point** → value_network_map_template.html
**System overview** → value_network_implementation_guide.md

---

**Remember:** The template does all the styling. You just add the data.

November 2025 | 360 Social Impact Studios
