# Value Network Map: Definitive Build Guide

## Overview
This guide provides exact specifications for creating Value Network Maps that maintain consistent structure, design, and formatting across different teams and projects. The only elements that change are the data content; all design specifications remain constant.

---

## Document Structure

### 1. HTML Foundation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[PROJECT NAME] Value Network</title>
```

**Variable Element:**
- `<title>`: Update with project/team name following pattern: `[Team/Product Name] Value Network`

---

## Layout Specifications

### Container Dimensions (FIXED)
```
Presentation Container: 1900px × 1100px minimum
Padding: 80px
Background: White with rounded corners (20px radius)
Shadow: 0 15px 50px rgba(0, 0, 0, 0.1)
```

### Grid System (FIXED)
```
Display: Grid with 5 columns
Column widths: 1fr | 1.2fr | 1fr | 1fr | 1fr
Gap: 45px
```

**Column Order (NEVER CHANGES):**
1. Enablers & Inputs (Upstream)
2. Product/Service (Core)
3. Channels & Partners
4. Buyers & Clients
5. End Users (Downstream)

---

## Header Section

### Structure (FIXED)
```html
<div class="header">
    <h1>[VARIABLE: Main Title]</h1>
    <p>[VARIABLE: Subtitle/Context]</p>
</div>
```

### Styling (FIXED)
```
H1: 36px, font-weight 700, color #1a1a1a, margin-bottom 12px
P: 18px, color #6c757d, font-weight 400
Alignment: Center
Margin-bottom: 50px
```

**Variable Elements:**
- H1 text: Project/product name
- P text: Brief context or description

---

## Column Headers

### Color System (FIXED, NEVER CHANGE)

**1. Enablers & Inputs**
```css
Background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)
Color: #1565c0
```

**2. Product/Service**
```css
Background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)
Color: #6a1b9a
```

**3. Channels & Partners**
```css
Background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%)
Color: #f57c00
```

**4. Buyers & Clients**
```css
Background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)
Color: #c62828
```

**5. End Users (Downstream)**
```css
Background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)
Color: #2e7d32
```

### Header Styling (FIXED)
```
Font-size: 12px
Font-weight: 700
Text-transform: uppercase
Letter-spacing: 1.2px
Padding: 10px
Border-radius: 8px
Margin-bottom: 20px
Text-align: Center
```

---

## Player Boxes

### Base Box Specifications (FIXED)
```css
Background: white
Border: 2px solid #e0e0e0
Border-radius: 10px
Padding: 14px
Margin-bottom: 14px
Min-height: 65px
```

### Box States (FIXED)

**1. Favorable Box**
```css
Background: linear-gradient(135deg, #ffffff 0%, #f1f8e9 100%)
Border-color: #66bb6a
```

**2. Neutral Box**
```css
Background: linear-gradient(135deg, #ffffff 0%, #fff8e1 100%)
Border-color: #ffa726
```

**3. Unfavorable Box**
```css
Background: linear-gradient(135deg, #ffffff 0%, #ffebee 100%)
Border-color: #ef5350
```

**4. Priority Box** (Favorable + Has Needs)
```css
Background: linear-gradient(135deg, #e8f5e9 0%, #dcedc8 100%)
Border: 4px solid #4caf50
Box-shadow: 0 4px 16px rgba(76, 175, 80, 0.25)
```

### Box Content Structure
```html
<div class="player-box [box-state-class]">
    <span class="need-badge [badge-class]">[BADGE TEXT]</span> <!-- Optional -->
    <div class="player-title">[VARIABLE: Organization/Role Name]</div>
    <div class="player-subtitle">[VARIABLE: Description/Context]</div>
    <div class="acceptability-indicator">
        <div class="acceptability-dot [dot-class]"></div>
    </div>
</div>
```

### Text Specifications (FIXED)
```
Player Title: 14px, font-weight 600, color #1a1a1a, margin-bottom 4px
Player Subtitle: 11px, color #6c757d, italic, line-height 1.4
```

---

## Core Product Box (Column 2)

### Special Styling (FIXED)
```css
Background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Color: white
Padding: 28px
Min-height: 240px
Box-shadow: 0 10px 40px rgba(102, 126, 234, 0.35)
```

### Content Structure
```html
<div class="player-box core-product">
    <div class="player-title">[VARIABLE: Product Name]</div>
    <div class="player-content">
        [VARIABLE: Product Description]
        <ul class="feature-list">
            <li>[VARIABLE: Feature 1]</li>
            <li>[VARIABLE: Feature 2]</li>
            <li>[VARIABLE: Feature 3]</li>
            <!-- Add 4-8 features typically -->
        </ul>
    </div>
</div>
```

### Core Product Text Specifications (FIXED)
```
Title: 20px, font-weight 700, color white, margin-bottom 12px
Content: 14px, line-height 1.5, color rgba(255,255,255,0.95)
Feature List: 13px, color rgba(255,255,255,0.9), padding-left 20px
```

---

## Need Badges

### Badge Types (FIXED)

**1. Critical Need**
```css
Background: linear-gradient(135deg, #ff5252 0%, #f44336 100%)
Color: white
Text: "CRITICAL NEED"
```

**2. Need**
```css
Background: linear-gradient(135deg, #ffa726 0%, #ff9800 100%)
Color: white
Text: "NEED"
```

### Badge Specifications (FIXED)
```css
Padding: 3px 8px
Border-radius: 12px
Font-size: 10px
Font-weight: 700
Text-transform: uppercase
Letter-spacing: 0.5px
Position: absolute
Top: -10px
Right: 12px
```

### Usage Logic
- **CRITICAL NEED**: Use for end users with urgent, unmet needs
- **NEED**: Use for stakeholders with important requirements
- **No badge**: Use when stakeholder has no immediate unmet needs

---

## Acceptability Indicators

### Dot System (FIXED)

**1. Favorable Dot**
```css
Background: #66bb6a
Box-shadow: 0 0 0 3px rgba(102, 187, 106, 0.2)
```

**2. Neutral Dot**
```css
Background: #ffa726
Box-shadow: 0 0 0 3px rgba(255, 167, 38, 0.2)
```

**3. Unfavorable Dot**
```css
Background: #ef5350
Box-shadow: 0 0 0 3px rgba(239, 83, 80, 0.2)
```

### Dot Specifications (FIXED)
```css
Width: 10px
Height: 10px
Border-radius: 50%
Position: absolute
Top: 12px
Right: 12px
```

### Alignment with Box State
```
Favorable Dot → Favorable or Priority Box
Neutral Dot → Neutral Box
Unfavorable Dot → Unfavorable Box
```

---

## Legend Section

### Structure (FIXED)
```html
<div class="legend-container">
    <div class="legend-section">
        <h3>Priority Targets</h3>
        <!-- Priority and Favorable box examples -->
    </div>
    <div class="legend-section">
        <h3>Acceptability Status</h3>
        <!-- Dot examples -->
    </div>
    <div class="legend-section">
        <h3>Requester Status</h3>
        <!-- Badge examples -->
    </div>
</div>
```

### Legend Styling (FIXED)
```css
Container: display flex, justify-content space-between, gap 40px
Background: #f8f9fa
Border-radius: 12px
Padding: 30px
Margin-top: 60px
```

---

## Footer Section

### Structure (FIXED)
```html
<div class="footer-info">
    <div class="flow-indicator">
        <div class="flow-arrow">
            <span>Upstream</span>
            <div class="arrow-line"></div>
            <span>Value Flow</span>
            <div class="arrow-line"></div>
            <span>Downstream</span>
        </div>
    </div>
    <p class="footer-note">
        Green highlighted boxes indicate priority targets for initial engagement (favorable players with unmet needs)
    </p>
</div>
```

### Footer Styling (FIXED)
```css
Margin-top: 40px
Text-align: Center
Color: #6c757d
Font-size: 13px
```

---

## Data Population Guide

### Step 1: Identify Stakeholders for Each Column

**Enablers & Inputs**
- Technology providers
- Research partners
- Manufacturing capabilities
- IP/licensing sources
- Regulatory bodies
- Funding sources

**Product/Service (Only 1 box)**
- Core offering name
- Brief description
- 4-8 key features/characteristics

**Channels & Partners**
- Distribution partners
- Implementation sites
- Market access partners
- Integration platforms

**Buyers & Clients**
- Direct purchasers
- Decision makers
- Budget holders
- Professional associations

**End Users (Downstream)**
- Direct beneficiaries
- Indirect beneficiaries
- Affected communities
- Advocacy groups
- Concerned parties (positive or negative)

### Step 2: Assess Each Stakeholder

For each stakeholder, determine:

**Acceptability Status:**
- Favorable: Supportive, engaged, positive toward innovation
- Neutral: Aware but uncommitted, needs convincing
- Unfavorable: Resistant, concerned, or negatively impacted

**Need Status:**
- Critical Need: Urgent, unmet requirements (typically end users)
- Need: Important requirements that innovation addresses
- No Need: No immediate unmet needs

**Box State Logic:**
```
IF Acceptability = Favorable AND Has Need → Priority Box (green border)
ELSE IF Acceptability = Favorable → Favorable Box (light green)
ELSE IF Acceptability = Neutral → Neutral Box (light yellow)
ELSE IF Acceptability = Unfavorable → Unfavorable Box (light red)
```

### Step 3: Write Content

**Player Title:**
- Organization name or role category
- Keep to 2-6 words
- Be specific enough to be actionable

**Player Subtitle:**
- Clarifying descriptor or value proposition
- Keep to 2-6 words
- Explains why they matter

**Core Product Content:**
- One-line description of offering
- 4-8 bullet points of key features/capabilities
- Focus on differentiation and value

---

## Quality Checklist

Before finalizing, verify:

**Structure:**
- [ ] 5 columns in correct order
- [ ] Column headers use correct color gradients
- [ ] Only 1 product box in center column
- [ ] All boxes have title, subtitle, and acceptability dot
- [ ] Priority boxes (green border) only for favorable + need stakeholders

**Visual Hierarchy:**
- [ ] Core product box stands out (purple gradient)
- [ ] Priority targets clearly visible (green borders)
- [ ] Acceptability dots match box states
- [ ] Need badges only on stakeholders with unmet needs

**Content:**
- [ ] All stakeholder names are specific and actionable
- [ ] Subtitles add clarifying context
- [ ] Product features are concrete and differentiating
- [ ] Legend accurately reflects all states used

**Technical:**
- [ ] HTML structure matches template exactly
- [ ] All CSS classes applied correctly
- [ ] Fixed dimensions maintained (1900px × 1100px)
- [ ] Typography specifications followed

---

## Common Patterns

### Typical Priority Targets (Green Border + Need Badge)
- Early adopter customers
- Pilot test sites
- Stakeholders with urgent unmet needs
- Strategic partners with aligned interests

### Typical Favorable (No Need Badge)
- Supportive advocacy groups
- Academic researchers
- Environmental/social benefit groups
- Aligned professional associations

### Typical Neutral
- Incumbent competitors
- Traditional distribution channels
- Professional groups needing education
- Regulatory bodies (pre-approval)

### Typical Unfavorable
- Threatened incumbents
- Displaced workers/unions
- Groups concerned about risks
- Resistant professional communities

---

## File Naming Convention

Format: `[project_code]_[team_name]_ecosystem_value_network.html`

Example: `irdose_ipen_ecosystem_value_network.html`

---

## Variable Elements Summary

**What Changes:**
- Document title
- Header H1 and P text
- Player titles and subtitles (all columns)
- Core product name, description, and feature list
- Number of boxes per column (typically 4-6)
- Box states (favorable/neutral/unfavorable/priority)
- Acceptability dots (favorable/neutral/unfavorable)
- Need badges (present/absent, critical/need)

**What NEVER Changes:**
- Grid layout (5 columns, specific widths)
- Column header colors and order
- Box styling specifications
- Core product purple gradient
- Typography specifications
- Legend structure and content
- Footer structure
- All CSS values and colors
- Container dimensions
- Hover effects

---

## Edge Cases

**Too Many Stakeholders in One Column:**
- Prioritize 4-6 most important per column
- Combine similar stakeholders under broader categories
- Consider separating into sub-categories with descriptive subtitles

**Stakeholder Fits Multiple Columns:**
- Place in column where their primary role/function sits
- Reference their multi-role nature in subtitle if relevant

**Unclear Acceptability Status:**
- Default to Neutral when uncertain
- Can be refined through stakeholder interviews
- Better to be conservative than overstate support

**Product with Many Features:**
- Limit to 6-8 most differentiating features
- Focus on what makes it unique vs. alternatives
- Group related features when possible

---

## Maintenance Notes

This template is designed for:
- Innovation teams mapping commercialization ecosystems
- Partnership strategy development
- Stakeholder prioritization and engagement planning
- Business validation and go-to-market planning

The format prioritizes:
- Visual clarity at presentation scale
- Quick pattern recognition (colors, borders, badges)
- Actionable stakeholder categorization
- Strategic focus on priority targets (green boxes)

Version: 1.0
Last Updated: November 2025
