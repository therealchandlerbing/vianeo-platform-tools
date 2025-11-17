# Value Network Map System: Implementation Guide

## What You've Received

This package contains everything you need to create consistent, professional Value Network Maps for any innovation project:

### 1. **value_network_map_build_guide.md**
**Purpose:** Complete technical specification
**Use When:** Building from scratch, troubleshooting design issues, ensuring exact formatting
**Contains:**
- All CSS specifications
- Fixed vs. variable elements
- Grid layout details
- Color codes and typography
- Quality checklist

### 2. **value_network_map_template.html**
**Purpose:** Ready-to-use starting point
**Use When:** Creating a new map for a project
**Contains:**
- Complete HTML structure with all styling
- Clear comment markers showing where to edit
- Example boxes for each state
- No editing required for CSS or layout

### 3. **value_network_quick_reference.md**
**Purpose:** Decision-making guide
**Use When:** Conducting stakeholder mapping sessions, categorizing stakeholders
**Contains:**
- Decision tree for box states
- Column-by-column guidance
- Content writing tips
- Common patterns and examples

---

## How to Create a New Value Network Map

### Quick Start (30-60 minutes)

**Step 1: Stakeholder Mapping Session**
Open: `value_network_quick_reference.md`

1. List all ecosystem stakeholders
2. Sort into 5 columns (Enablers, Product, Channels, Buyers, End Users)
3. For each stakeholder:
   - Assess: Favorable / Neutral / Unfavorable?
   - Identify: Do they have unmet needs we address?
   - Determine box state using decision tree
4. Write clear titles and subtitles
5. List 4-8 product features

**Step 2: Build the Map**
Open: `value_network_map_template.html` in a text editor

1. Search for `<!-- EDIT:` comments (there are clear markers throughout)
2. Update header title and subtitle
3. For each column:
   - Update player titles and subtitles
   - Apply correct box class (box-priority, box-favorable, box-neutral, box-unfavorable)
   - Apply correct dot class (dot-favorable, dot-neutral, dot-unfavorable)
   - Add/remove need badges as appropriate
   - Duplicate or remove boxes to have 4-6 per column
4. Update core product section (Column 2)
5. Save file as: `[project]_[team]_ecosystem_value_network.html`

**Step 3: Quality Check**
Reference: `value_network_quick_reference.md` (final section)

1. Verify visual clarity (priority targets visible, colors consistent)
2. Check strategic logic (priority = favorable + needs)
3. Confirm content quality (specific, actionable text)
4. Review against file checklist

---

## Workflow for Different Scenarios

### Scenario 1: First Time User
**Path:** Quick Reference → Template → Build Guide (if needed)

1. Read through `value_network_quick_reference.md` to understand logic
2. Open `value_network_map_template.html` to see structure
3. Conduct stakeholder mapping using Quick Reference
4. Edit Template file with your data
5. Consult Build Guide only if you need to troubleshoot

### Scenario 2: Experienced User Creating New Map
**Path:** Quick Reference → Template

1. Conduct stakeholder mapping (you know the drill)
2. Open Template file
3. Search/replace all `<!-- EDIT:` sections
4. Save with project name

### Scenario 3: Training Someone New
**Path:** All three documents

1. Start with Quick Reference (explains the "why")
2. Walk through Template together (shows the "what")
3. Reference Build Guide for questions (details the "how")

### Scenario 4: Troubleshooting Design Issues
**Path:** Build Guide

1. Compare your file against specifications
2. Check fixed vs. variable elements
3. Verify CSS classes applied correctly
4. Review quality checklist

---

## Key Principles (Don't Skip This)

### What NEVER Changes
These are locked specifications that ensure consistency:

- 5-column grid layout with specific widths
- Column header colors (Blue → Purple → Yellow → Red → Green)
- Typography specifications (all font sizes, weights, spacing)
- Box state styling (favorable, neutral, unfavorable, priority)
- Core product purple gradient
- Legend and footer structure
- All CSS values, shadows, transitions
- Container dimensions (1900px × 1100px)

### What Changes with Each Project
These are the data inputs you customize:

- Document title
- Header text (H1 and subtitle)
- All player titles and subtitles
- Core product name, description, and features
- Number of boxes per column (4-6 recommended)
- Box state assignments (which boxes are priority, favorable, etc.)
- Presence/absence of need badges
- Acceptability dot colors

### The Golden Rule
**If it's a number, color code, or layout specification, don't change it.**
**If it's text content or a stakeholder name, customize it.**

---

## Decision-Making Flowchart

```
Starting a New Map?
│
├─ Experienced with system?
│  ├─ YES → Open Template, edit data, save
│  └─ NO → Read Quick Reference first
│
├─ Need to understand stakeholder logic?
│  └─ → Use Quick Reference decision tree
│
├─ Need exact CSS specifications?
│  └─ → Consult Build Guide
│
└─ Something looks wrong?
   └─ → Compare against Build Guide specs
```

---

## Common Mistakes to Avoid

**Content Mistakes:**
1. ❌ Putting stakeholders in wrong columns
   ✅ Use column definitions in Quick Reference

2. ❌ Using Priority box for neutral/unfavorable stakeholders
   ✅ Priority = Favorable + Need only

3. ❌ CRITICAL NEED badges everywhere
   ✅ Reserve for end users with urgent needs

4. ❌ Vague titles like "Potential Partners"
   ✅ Specific names like "HC/FMUSP"

5. ❌ Too many boxes per column (7+)
   ✅ Focus on 4-6 most important

**Technical Mistakes:**
1. ❌ Changing grid column widths
   ✅ Keep fixed: 1fr | 1.2fr | 1fr | 1fr | 1fr

2. ❌ Modifying header colors
   ✅ Colors map to columns, never change

3. ❌ Adding multiple product boxes
   ✅ Always exactly 1 product box (Column 2)

4. ❌ Removing legend or footer
   ✅ These stay constant for consistency

5. ❌ Mismatching dot color and box state
   ✅ Favorable box → favorable dot, etc.

---

## File Organization

Recommended folder structure:
```
project_name/
├── source/
│   ├── value_network_map_build_guide.md
│   ├── value_network_map_template.html
│   └── value_network_quick_reference.md
├── working/
│   └── [project]_[team]_stakeholder_notes.md
└── deliverables/
    └── [project]_[team]_ecosystem_value_network.html
```

---

## Quality Standards

Every delivered map should:

**Visual:**
- Print/display at high resolution (presentation-ready)
- Priority targets immediately visible (green borders)
- Consistent color usage across all projects
- Professional polish (no misalignments or errors)

**Strategic:**
- Accurately categorize stakeholders
- Identify realistic priority targets
- Reveal engagement opportunities
- Surface potential barriers

**Operational:**
- Specific enough to be actionable
- Current (not outdated stakeholder info)
- Validated with project team
- Ready for client presentation

---

## When to Use Each Document

### During Client Workshops
**Primary:** Quick Reference
- Decision tree for real-time categorization
- Column definitions for placement
- Box state logic for prioritization

**Supporting:** Template (projected on screen)
- Show visual examples
- Demonstrate end result

### During Map Development
**Primary:** Template
- Your working file
- Search for `<!-- EDIT:` to find all customization points

**Supporting:** Quick Reference
- Content writing tips
- Verify box state decisions

### During Quality Review
**Primary:** Build Guide
- Technical specifications
- Quality checklist
- Fixed vs. variable reference

**Supporting:** Quick Reference
- Strategic logic check
- Content standards

### During Training Sessions
**All three in sequence:**
1. Quick Reference (teach the logic)
2. Template (show the structure)
3. Build Guide (explain the details)

---

## Success Metrics

You know you've mastered this system when:

- [ ] You can create a new map in under 60 minutes
- [ ] Your maps are visually consistent with previous ones
- [ ] Priority targets are immediately obvious to viewers
- [ ] Stakeholder categorizations stand up to scrutiny
- [ ] You rarely need to consult the Build Guide
- [ ] New team members can use your maps as examples

---

## Support & Iteration

### If You Need Help
1. Check Quick Reference for stakeholder logic questions
2. Check Build Guide for technical/design questions
3. Compare your file against Template for structure issues

### If You Find an Issue
Document:
- What you were trying to do
- What went wrong
- What you expected to happen

This helps refine the system over time.

### Version Control
- Save each project's map as separate file
- Use consistent naming: `[project]_[team]_ecosystem_value_network_[YYYYMMDD].html`
- Keep source documents (these 3 files) unchanged as master

---

## Next Steps

**Right Now:**
1. Read through Quick Reference to understand stakeholder logic
2. Open Template in browser to see visual result
3. Open Template in text editor to see structure

**First Project:**
1. Schedule stakeholder mapping session
2. Use Quick Reference to categorize all stakeholders
3. Open Template and search for `<!-- EDIT:` comments
4. Replace all placeholder content
5. Run through quality checklist
6. Save and review

**Ongoing:**
- Template becomes your go-to starting point
- Quick Reference sits beside you during mapping sessions
- Build Guide gets referenced only when troubleshooting

---

## The Value of Consistency

This system exists because consistent formatting across projects:

**Enables pattern recognition:** Clients see the same visual language across engagements
**Reduces cognitive load:** Don't reinvent design for each project
**Builds credibility:** Professional, polished outputs every time
**Speeds delivery:** Template + data = map (not design + data = map)
**Supports training:** New team members learn one system
**Allows comparison:** Same structure reveals different strategic landscapes

The discipline of maintaining these specifications pays dividends in efficiency and professionalism.

---

## Quick Reference Card

**Creating a Map:**
1. Stakeholder session (Quick Ref)
2. Edit Template file
3. Quality check (Quick Ref)
4. Save with project name

**Box State Logic:**
- Favorable + Need = Priority (green border)
- Favorable + No Need = Favorable (light green)
- Neutral = Neutral (light yellow)
- Unfavorable = Unfavorable (light red)

**Need Badges:**
- CRITICAL NEED (red) = End users with urgent needs
- NEED (orange) = Partners/buyers with requirements
- No badge = No immediate unmet needs

**File Naming:**
`[project]_[team]_ecosystem_value_network.html`

---

Last Updated: November 2025
Built by: 360 Social Impact Studios
