# Value Network Map Documentation Package

## What This Is

A complete system for creating consistent, professional Value Network Maps across all innovation projects at 360 Social Impact Studios. Every map will have the same structure, design, and formatting while containing unique stakeholder data for each project.

---

## Package Contents

This package contains five documents that work together:

### 1. **START HERE: value_network_implementation_guide.md**
Your introduction to the entire system. Read this first.

**Purpose:**
- Explains how all documents work together
- Provides workflows for different scenarios
- Shows which document to use when
- Contains success metrics and best practices

**Read this when:**
- You're new to the system
- Training someone else
- Need to understand the big picture
- Want to see recommended workflows

---

### 2. **value_network_map_template.html**
Your working file for creating new maps. This is what you'll actually edit.

**Purpose:**
- Complete HTML with all styling built in
- Clear `<!-- EDIT: -->` comments show exactly what to customize
- Example boxes for each state already included
- No CSS or layout editing required

**Use this when:**
- Creating a new Value Network Map
- Starting a new project
- You need a clean slate with all formatting done

**How to use:**
1. Open in text editor (VS Code, Sublime, etc.)
2. Search for `<!-- EDIT:` to find all customization points
3. Replace placeholder content with your data
4. Save with project name

---

### 3. **value_network_quick_reference.md**
Your decision-making guide during stakeholder mapping sessions.

**Purpose:**
- Decision tree for categorizing stakeholders
- Column-by-column guidance
- Box state logic and combinations
- Content writing tips and examples
- Common patterns and edge cases

**Use this when:**
- Conducting stakeholder mapping workshops
- Deciding which stakeholders go where
- Determining box states (priority, favorable, neutral, unfavorable)
- Writing player titles and subtitles
- Need examples of good vs. bad content

**Keep this open:**
- During client workshops
- While populating the template
- When training new team members

---

### 4. **value_network_map_build_guide.md**
Complete technical specifications for the format. Reference manual for all design details.

**Purpose:**
- Every CSS specification documented
- Fixed vs. variable elements clearly marked
- Typography, colors, spacing, dimensions
- Quality checklist
- Troubleshooting reference

**Use this when:**
- Something doesn't look right
- Need exact color codes or measurements
- Verifying technical specifications
- Building from scratch (rare)
- Training on the technical aspects

**You probably won't need this often** - the template handles all technical details.

---

### 5. **value_network_cheat_sheet.md**
One-page quick reference for experienced users.

**Purpose:**
- Box state decision matrix
- Column quick reference table
- HTML structure snippets
- CSS class reference
- Workflow checklist
- Common mistakes to avoid

**Use this when:**
- You know the system and just need quick lookups
- Working on multiple maps
- Need a reminder of class names
- Want a printable reference beside you

**Print this** and keep it at your desk once you're comfortable with the system.

---

## Recommended Learning Path

### First-Time User (Allow 2 hours)

**1. Understand the System (30 min)**
Read: `value_network_implementation_guide.md`
- Understand how documents work together
- Review key principles
- See workflow examples

**2. Learn Stakeholder Logic (30 min)**
Read: `value_network_quick_reference.md`
- Study decision tree
- Review column definitions
- Read content guidelines
- Look at examples

**3. See the Structure (30 min)**
Open: `value_network_map_template.html`
- View in browser to see result
- Open in text editor to see structure
- Find all `<!-- EDIT:` comments
- Note example boxes

**4. Try a Practice Map (30 min)**
Create: Your first test map
- Pick a familiar project
- List 5-10 stakeholders
- Edit template with real data
- Save and review result

### Experienced User (3 minutes)

**Reference:**
- `value_network_cheat_sheet.md` (beside you)
- `value_network_quick_reference.md` (open during mapping)
- `value_network_map_template.html` (edit and save)

---

## Quick Start Guide

**Creating Your First Map:**

1. **Map Stakeholders** (30 min)
   - List everyone in the ecosystem
   - Sort into 5 columns by role
   - Determine acceptability (Favorable/Neutral/Unfavorable)
   - Identify who has unmet needs
   - Use: `value_network_quick_reference.md`

2. **Build the Map** (20 min)
   - Open: `value_network_map_template.html` in text editor
   - Search for: `<!-- EDIT:`
   - Replace all placeholders with your data
   - Save as: `[project]_[team]_ecosystem_value_network.html`

3. **Quality Check** (10 min)
   - Priority targets visible (green borders)
   - Colors consistent
   - Only 1 product box (purple)
   - All text specific and actionable
   - Use: Checklist in `value_network_quick_reference.md`

---

## Document Dependencies

```
value_network_implementation_guide.md
    ↓ (explains)
    ├─ value_network_quick_reference.md ←─ (use during) ─→ Stakeholder Mapping
    │       ↓ (informs)
    ├─ value_network_map_template.html ←─ (edit) ─→ Your Completed Map
    │       ↓ (verified by)
    ├─ value_network_map_build_guide.md ←─ (troubleshoot)
    │
    └─ value_network_cheat_sheet.md ←─ (quick lookup)
```

---

## File Usage Matrix

| Document | First Use | Daily Use | Reference | Training | Troubleshoot |
|----------|-----------|-----------|-----------|----------|--------------|
| Implementation Guide | ✓✓✓ | | | ✓✓✓ | ✓ |
| Template HTML | ✓✓✓ | ✓✓✓ | | ✓✓ | |
| Quick Reference | ✓✓✓ | ✓✓✓ | ✓✓ | ✓✓✓ | ✓ |
| Build Guide | ✓ | | ✓✓✓ | ✓✓ | ✓✓✓ |
| Cheat Sheet | ✓ | ✓✓✓ | ✓✓✓ | | ✓ |

---

## Key Concepts

### Fixed vs. Variable

**FIXED (Never Change):**
- 5-column grid layout
- Column widths (1fr | 1.2fr | 1fr | 1fr | 1fr)
- Column header colors (Blue-Purple-Yellow-Red-Green)
- All CSS: colors, fonts, spacing, shadows
- Legend and footer content
- Container dimensions (1900px × 1100px)

**VARIABLE (Customize Each Time):**
- Document title
- Header H1 and subtitle
- All stakeholder names and descriptions
- Core product features
- Number of boxes per column (aim for 4-6)
- Box state assignments
- Need badge placement

### Box State Logic

```
Favorable + Need = Priority Box (green border, 4px)
Favorable + No Need = Favorable Box (light green gradient)
Neutral = Neutral Box (light yellow gradient)
Unfavorable = Unfavorable Box (light red gradient)
```

### Need Badges

```
CRITICAL NEED (red) = Urgent end user needs
NEED (orange) = Important partner/buyer needs
No Badge = No immediate unmet needs
```

---

## Common Questions

**Q: Which document do I start with?**
A: Implementation Guide for overview, then Quick Reference for your first mapping session.

**Q: Do I need to know HTML/CSS?**
A: No. The template has all styling built in. You just edit text between tags.

**Q: Can I change the colors?**
A: No. Colors are fixed to ensure consistency across all projects. This is by design.

**Q: How long does it take to create a map?**
A: 30 min for stakeholder mapping, 20 min to populate template, 10 min quality check = 1 hour total.

**Q: What if I have more than 6 stakeholders in a column?**
A: Prioritize the 4-6 most important. Combine similar stakeholders under broader categories.

**Q: Can I create my own box states?**
A: No. Use the four defined states (priority, favorable, neutral, unfavorable) to maintain consistency.

**Q: What if I need help?**
A: Check Quick Reference for logic questions, Build Guide for technical questions, or compare against Template.

---

## Success Criteria

You've mastered the system when you can:

- [ ] Create a new map in under 60 minutes
- [ ] Maps are visually identical to previous ones (except data)
- [ ] Priority targets clearly identified
- [ ] Stakeholder categorizations withstand scrutiny
- [ ] You rarely need to consult Build Guide
- [ ] New team members can learn from your maps

---

## Version Control

**These Documents (Master Templates):**
- Keep unchanged in project folder
- Don't edit unless updating system specifications
- Version: 1.0 (November 2025)

**Your Maps (Project Deliverables):**
- Save with unique project names
- Format: `[project]_[team]_ecosystem_value_network.html`
- Each is standalone (complete HTML, no dependencies)
- Can be opened directly in any browser

---

## What Makes This System Work

**Consistency:** Every map uses identical structure/design
**Efficiency:** Template + data = map (no design work)
**Quality:** Tested specifications ensure professional output
**Scalability:** Train once, create unlimited maps
**Clarity:** Priority targets immediately visible
**Professionalism:** Client-ready presentation format

---

## Next Steps

1. **Read** `value_network_implementation_guide.md` (20 min)
2. **Study** `value_network_quick_reference.md` (30 min)
3. **Open** `value_network_map_template.html` in browser and editor (10 min)
4. **Create** your first practice map (60 min)
5. **Print** `value_network_cheat_sheet.md` for desk reference

---

## Support

**For strategic/content questions:**
→ value_network_quick_reference.md

**For technical/design questions:**
→ value_network_map_build_guide.md

**For workflow questions:**
→ value_network_implementation_guide.md

**For quick lookups:**
→ value_network_cheat_sheet.md

---

## Package Information

**Created:** November 2025
**Organization:** 360 Social Impact Studios
**Version:** 1.0
**Purpose:** Standardized ecosystem mapping across all innovation projects

**Files in this package:**
1. README.md (this file)
2. value_network_implementation_guide.md
3. value_network_map_template.html
4. value_network_quick_reference.md
5. value_network_map_build_guide.md
6. value_network_cheat_sheet.md

All files work together as an integrated system. Keep complete package together.

---

**You're ready to start. Begin with the Implementation Guide.**
