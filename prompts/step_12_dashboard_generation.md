# Step 12: Viability Dashboard Generation Prompt

**Professional Executive Dashboard for Product-Market Fit & Business Model Portfolio**

Use this prompt to transform Step 12 Viability outputs into presentation-grade HTML dashboards for stakeholders, committees, and boards.

---

## Instructions for AI Assistant

Transform Step 12 Viability outputs into a presentation-grade HTML dashboard. Read all product/market fit sheets and business model canvases, then generate a single self-contained HTML file with: Header with portfolio metrics, Executive Summary, interactive Product Portfolio Grid, Need Coverage Analysis table, Progress Metrics, Strategic Insights, and Product Detail Modals. Apply VIANEO design system (blue scale: #1a365d primary) with responsive layout and WCAG AA accessibility.

---

## When to Use This Dashboard

**Perfect for:**
- Presenting product portfolio strategy to boards or investment committees
- Creating executive summaries from completed viability assessments
- Visualizing product-market fit and business model configurations
- Board presentations requiring commercial model visualization
- Investor-facing deliverables showcasing business viability
- Strategic planning sessions with leadership teams

**Timing in VIANEO Process:**
- After completing Step 12 (Viability Assessment - all products defined)
- When packaging complete evaluation for committee presentation
- For quarterly reviews of product strategy
- Before entering financial modeling phase (Step 13)

---

## Dashboard Generation Prompt

```
Generate Professional Viability Dashboard

Project: [Company/Initiative Name]
Purpose: Viability Assessment Summary | Product Portfolio Strategy | Business Model Validation

Please:
1. Read complete viability outputs:
   - Product/Market Fit Sheets (all products)
   - Business Model Canvases (all products)
   - Summary Dashboard (markdown version)
   - Step 12 viability assessment deliverables

2. Use this source data:
   - From Step 12a: Product configurations (MVP features, requesters, resources)
   - From Step 12b: Business models (value props, revenue, distribution, costs)
   - From Step 12c: Portfolio analysis (need coverage, insights, recommendations)
   - From Step 5-7: Desirability data (needs, intensity, validation levels)
   - From Step 11: Feasibility data (features, means, partnerships)

3. Dashboard structure needed:
   ☐ Header with project metadata and key portfolio metrics
   ☐ Executive Summary (2-3 paragraphs synthesizing viability)
   ☐ Product Portfolio Grid (interactive cards for each product)
   ☐ Need Coverage Analysis (table showing which products address which needs)
   ☐ Progress Metrics (validation, resource readiness, coherence, coverage)
   ☐ Strategic Insights (strengths, opportunities, concerns, recommendations)
   ☐ Product Detail Modals (full PMF and business model for each product)
   ☐ Footer with credits and methodology

4. Design specifications:
   - Single self-contained HTML file
   - Professional design system (VIANEO blue scale: #1a365d primary)
   - Fully responsive (desktop/tablet/mobile)
   - Interactive modals for product details
   - WCAG AA accessible
   - Print-optimized

5. Generate output:
   - Save as: [ProjectName]_Viability_Dashboard_[Date].html
   - Test all interactive elements (modals, cards)
   - Verify responsive breakpoints
   - Validate accessibility (keyboard navigation)

Target audience: [Board members / Investors / Executive team / Committee / Strategic partners]

Tone: [Strategic / Executive / Investor-facing / Technical-strategic]
```

---

## Quick Launch Variants

### Variant 1: Product Portfolio Summary Dashboard

```
Generate Product Portfolio Summary Dashboard for [Company Name]

Transform Step 12 viability outputs into executive portfolio dashboard:

Source data:
- Product/Market Fit Sheets for [3] products
- Business Model Canvases for all products
- Summary Dashboard (markdown)
- Need coverage analysis from Step 12

Dashboard elements:
- 4 key metrics: Products defined, MVP features, Need coverage, Viability score
- Product portfolio grid: [3] interactive product cards with hover states
- Need coverage table: Showing which products address fundamental needs
- 4 progress bars: MVP validation, Resource readiness, Business model coherence, Need coverage
- Strategic insights: 4 cards (strength, opportunity, concern, recommendation)
- Interactive modals: Full product details on card click

Professional format for investment committee presentation.
```

### Variant 2: Business Model Comparison Dashboard

```
Generate Business Model Comparison Dashboard for [Project Name]

Based on: Step 12 Business Model Canvases (all products)

Dashboard elements:
- 4 key metrics: Products, Revenue models, Distribution channels, Cost efficiency
- Business model comparison table: Value props, revenue streams, distribution, costs
- Product cards with business model highlights
- Timeline: Implementation phases across portfolio
- Coherence indicators: All products showing alignment status

Focus: Commercial model viability and portfolio economics

Target audience: CFO and finance leadership
```

### Variant 3: MVP Strategy Dashboard

```
Generate MVP Strategy Dashboard for [Initiative Name]

Synthesize from:
- Product/Market Fit Sheets (MVP features focus)
- Resource requirements across products
- Implementation timelines from Step 12

Dashboard elements:
- 4 key metrics: MVP features total, Timeline to launch, Resource gaps, Validation strength
- Product cards highlighting MVP scope for each
- Feature comparison: Showing MVP features across products
- Resource requirements grid: Shared vs product-specific
- Launch sequencing: Recommended product rollout order

Professional deliverable for product development kickoff.
```

### Variant 4: Strategic Viability Dashboard

```
Generate Strategic Viability Dashboard for [Project Name]

Based on: Complete Step 12 outputs + Strategic recommendations

Dashboard elements:
- 4 key metrics: Viability score, Market coverage, Revenue potential, Implementation complexity
- Executive summary: 3-paragraph strategic assessment
- Product portfolio with strategic positioning
- Need coverage visualization
- Insights section: 4-6 strategic insights (strengths, opportunities, concerns, recommendations)
- Next steps: Priority actions with owners and timelines

Target audience: Board of directors and strategic advisors
```

---

## Data Collection Checklist

Before generating dashboard, verify you have:

### Project Information
- [ ] Project/initiative name
- [ ] Target date for presentation
- [ ] Overall portfolio status (Planning/In Progress/MVP Ready/Launched)
- [ ] Assessment date and version
- [ ] Viability score (if calculated)

### Portfolio Metrics (Top of Dashboard)
- [ ] Total products defined (count)
- [ ] Total MVP features across portfolio
- [ ] Need coverage percentage (fundamental needs)
- [ ] Overall viability assessment score or status

### Executive Summary
- [ ] 2-3 paragraphs written summarizing:
  - Portfolio overview and product count
  - Product-market fit validation strength
  - Business model coherence assessment
  - Critical success factors identified
  - Primary strategic recommendation

### Product Data (Per Product)
For each product, confirm you have:
- [ ] Product name (60 chars max)
- [ ] Product description (250 chars)
- [ ] Target client segment
- [ ] Product status (MVP Ready/In Progress/Planning/Blocked)
- [ ] Number of MVP features
- [ ] Number of requesters targeted
- [ ] Number of needs covered
- [ ] Revenue model type (Subscription/Commission/License/etc.)
- [ ] Distribution channel type (Direct/Sales/Partners)

### Product Details for Modals
For each product, confirm:
- [ ] Full product identity (name, description, client, timeline)
- [ ] MVP features list (6-10 features with timeline indicators)
- [ ] Additional features (if any, marked as "Phased")
- [ ] Complete business model:
  - Value proposition (core statement + 2-4 advantages)
  - Revenue stream (pricing approach and mechanisms)
  - Distribution channel (discovery and purchase paths)
  - Cost structure (fixed/variable split and drivers)
- [ ] Resource requirements (means, partners, gaps)

### Need Coverage Analysis
- [ ] List of all fundamental needs (from Step 7)
- [ ] Which products address each need (checkmarks/coverage status)
- [ ] Coverage assessment per need (Strong/Partial/Gap)
- [ ] Overall coverage percentage

### Progress Metrics (4 categories)
- [ ] MVP Validation: % of MVP features with >5 interview validation
- [ ] Resource Readiness: % of critical resources secured
- [ ] Business Model Coherence: % of products with aligned models
- [ ] Need Coverage: % of fundamental needs with feature coverage

### Strategic Insights (4-6 insights)
For each insight card:
- [ ] Type: Strength / Opportunity / Concern / Recommendation
- [ ] Title (5-8 words)
- [ ] Description (2-3 sentences with specific evidence)
- [ ] Products affected (which products this applies to)
- [ ] Priority level (High/Medium/Low)

---

## Design System Standards

**VIANEO Viability Dashboard follows established design conventions:**

### Colors (Primary Blue Scale)
- **Primary Dark**: #1a365d (headers, primary text, key elements)
- **Primary**: #2c5282 (interactive elements, gradients)
- **Primary Light**: #4a5d7f (hover states, secondary elements)
- **Surface**: #ffffff (cards, backgrounds)
- **Background**: #f7fafc (page background)
- **Border**: #e2e8f0 (dividers, card borders)

### Status Colors
- **Success/Ready**: #10b981 (green) - MVP ready, high validation, completed
- **Warning/In Progress**: #f59e0b (orange) - medium priority, in progress
- **Info/Planning**: #3b82f6 (blue) - planning phase, information
- **Danger/Blocked**: #ef4444 (red) - high priority concerns, blocked status

### Typography
- **Font**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', Roboto)
- **Headers**: 24-32px, weight 700, color #1a365d
- **Subheaders**: 16-20px, weight 600-700
- **Body**: 14-16px, weight 400, color #4a5568
- **Metadata**: 11-13px, weight 500-600

### Spacing System
- **Section margins**: 48px between major sections
- **Card padding**: 24-32px internal padding
- **Grid gaps**: 20-24px between grid items
- **Element spacing**: 8px base unit (12px, 16px, 24px multiples)

### Components
- **Product Cards**: White background, 2px border, 12px border-radius, 4px accent bar on hover
- **Status Badges**: Colored backgrounds, 12px border-radius, uppercase 11px font
- **Progress Bars**: 8px height, animated fill, gradient primary colors
- **Modals**: White background, 12px border-radius, gradient header, max-width 800px
- **Buttons**: Primary color, 8px border-radius, hover lift effect

### Interactive States
- **Hover**: Border color change, subtle shadow, 2px translateY
- **Focus**: 4px outline in primary color with opacity
- **Active**: Modal overlay with fade-in animation (0.2s)
- **Transitions**: All 0.15-0.3s ease for smooth interactions

---

## Quality Checklist

Before delivery, verify:

### Visual Standards
- [ ] Consistent VIANEO blue color palette (#1a365d primary)
- [ ] Proper spacing system (8px base unit) throughout
- [ ] Typography hierarchy clear and consistent
- [ ] Status colors match conventions (green=ready, orange=progress, blue=planning)
- [ ] No placeholder text remaining (all [BRACKETS] replaced)

### Content Accuracy
- [ ] All product names correct and spelled consistently
- [ ] All metrics have real values (no [PLACEHOLDER] text)
- [ ] All percentages verified against source data
- [ ] Character counts respected (product descriptions ≤250 chars)
- [ ] Need coverage table matches products accurately

### Functionality
- [ ] Product cards clickable (all 3 open modals)
- [ ] Modals close on button click, overlay click, and Escape key
- [ ] Progress bars animate on page load
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus trap in modals working correctly

### Responsive Design
- [ ] Desktop view (1200px+): Grid layouts display properly
- [ ] Tablet view (768-1199px): Cards reflow to 2-column
- [ ] Mobile view (<768px): Single column stacked layout
- [ ] Header adapts on mobile (vertical stack)
- [ ] Tables scroll horizontally on mobile
- [ ] Modal readable and usable on mobile

### Accessibility
- [ ] All interactive elements keyboard accessible (Tab navigation)
- [ ] ARIA labels present on progress bars and modals
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Skip link present for screen readers
- [ ] Modal focus management (focus trap and return focus)
- [ ] Role attributes on semantic sections

### Print Optimization
- [ ] Clean print layout (no dashboard chrome)
- [ ] Page breaks avoid splitting cards
- [ ] Hidden elements don't print (modals, buttons)
- [ ] Header prints with proper branding
- [ ] Footer metadata prints

### Performance
- [ ] Single file, no external dependencies
- [ ] File size under 250KB
- [ ] Loads in under 2 seconds
- [ ] No console errors or warnings
- [ ] Smooth animations (no jank)

---

## Common Mappings from Step 12 to Dashboard

### From Product/Market Fit Sheets → Product Cards
- **Product Name** → Card title
- **Product Description** (250 chars) → Card description
- **Target Client** → Card subtitle
- **MVP Feature Count** → Metric 1 on card
- **Requester Count** → Metric 2 on card
- **Needs Covered** → Metric detail
- **Revenue Model** → Tag (revenue-model class)
- **Distribution Channel** → Tag (distribution class)
- **Product Status** → Status badge (mvp-ready/in-progress/planning)

### From Business Model Canvases → Modal Content
- **Value Proposition** → Business Model Grid component 1
- **Revenue Stream** → Business Model Grid component 2
- **Distribution Channel** → Business Model Grid component 3
- **Cost Structure** → Business Model Grid component 4
- **MVP Features** → Features List with badges

### From Summary Dashboard → Progress & Insights
- **Need Coverage Analysis** → Comparison Table
- **Validation Metrics** → Progress Bars (4 categories)
- **Strengths** → Insight Card (strength class, green left border)
- **Opportunities** → Insight Card (opportunity class, blue left border)
- **Concerns** → Insight Card (concern class, orange left border)
- **Recommendations** → Insight Card (recommendation class, primary border)

### From Portfolio Analysis → Header Metrics
- **Total Products** → Key Metric 1
- **Total MVP Features** → Key Metric 2
- **Need Coverage %** → Key Metric 3
- **Viability Score** → Key Metric 4

---

## Tips for Professional Results

### Content Strategy for Viability Dashboards

**Executive Summary Guidelines**:
- Paragraph 1: Portfolio overview (# products, coverage, validation strength)
- Paragraph 2: Product-market fit quality and business model coherence
- Paragraph 3: Critical success factors and primary recommendation
- Keep under 200 words total (digestible for executives)
- Use strong, confident language ("demonstrates," "validates," not "may" or "could")

**Product Card Optimization**:
- Lead with most validated/ready product first
- Use status badges to quickly convey readiness
- Highlight differentiation in tags (unique revenue model or distribution)
- Keep descriptions focused on value proposition, not features

**Insight Card Prioritization**:
- Maximum 6 insight cards (more dilutes impact)
- Balance: 1-2 strengths, 1-2 opportunities, 1-2 concerns/recommendations
- Lead with evidence (specific numbers, validation counts)
- End with actionable next steps (who, what, when)

### Visual Hierarchy for Stakeholders

**Board Member View** (strategic focus):
- Emphasize portfolio metrics and viability score in header
- Executive summary prominent (first thing they read)
- Insights section large and clear (strategic implications)
- Business model comparison visible (commercial sustainability)

**Investor View** (commercial focus):
- Highlight revenue models and market coverage
- Business model coherence indicators prominent
- Resource readiness and gaps transparent
- Timeline to revenue in product cards

**Product Team View** (execution focus):
- MVP features front and center
- Resource requirements detailed in modals
- Need coverage granular
- Implementation timeline clear

### Modal Content Guidelines

**Product Detail Modals Should Include**:
1. **Product Identity** (4-metric grid): Client, MVP Features, Requesters, Timeline
2. **MVP Features** (bulleted list): Feature name, MVP/Phased badge, Timeline
3. **Business Model** (4-component grid): Value, Revenue, Distribution, Costs
4. **Resource Requirements** (paragraph format): Means, Partners, Gaps

**Keep Modals Scannable**:
- Use clear section titles with border separators
- Grid layouts for metrics (2-4 columns)
- Lists with icons or badges for visual anchoring
- Short paragraphs (2-3 sentences max)

### Responsive Considerations

**Desktop (1200px+)**:
- Product cards: 3-column grid
- Full comparison table visible
- Modals: 800px max-width, centered

**Tablet (768-1199px)**:
- Product cards: 2-column grid
- Comparison table may scroll horizontally
- Modals: Full width with 20px side margins

**Mobile (<768px)**:
- Product cards: Single column, stacked
- Header: Vertical layout (title above meta)
- Key metrics: Single column
- Modals: Full screen with scroll
- Comparison table: Horizontal scroll with sticky first column

---

## Integration with VIANEO Workflow

### Standard Workflow

1. **Complete Step 12 Viability** (all products defined with PMF and business models)
2. **Review all deliverables** for dashboard-worthy content
3. **Collect data** using checklist above (1-2 hours)
4. **Generate dashboard** using this prompt (1-2 hours)
5. **Quality check** against validation checklist (30 min)
6. **Stakeholder preview** for feedback (optional)
7. **Final delivery** as single HTML file

### Fast Track

For quick portfolio summaries:
1. Complete Step 12 for 1-2 core products (MVP only)
2. Generate simplified dashboard with:
   - Header and summary
   - Product cards (1-2 products)
   - 2-3 progress metrics
   - 2-3 key insights
   - Skip comparison tables

### Complete Track

For comprehensive board presentations:
1. Complete Step 12 for all products (3+ products)
2. Generate full dashboard with:
   - All sections included
   - Interactive product modals with complete business models
   - Full need coverage comparison table
   - 4 progress metrics
   - 4-6 strategic insights
   - Print-optimized layout

---

## File Naming Convention

```
[ProjectName]_Viability_Dashboard_[YYYYMMDD]_[Version].html

Examples:
AcmeCorp_Viability_Dashboard_20251121_v1.html
HealthTech_Viability_Dashboard_20251121_Board.html
MVPStrategy_Viability_Dashboard_20251121_Investment.html
```

---

## Delivery Checklist

Ready to share with stakeholders:

**Content Complete**:
- [ ] All products included with accurate data
- [ ] Executive summary written and approved
- [ ] All metrics verified against source data
- [ ] All character limits respected (product descriptions ≤250)
- [ ] Strategic insights reviewed and prioritized

**Quality Validated**:
- [ ] Quality checklist complete (all items checked)
- [ ] Tested on multiple devices (desktop, tablet, mobile)
- [ ] Tested in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] File size under 250KB
- [ ] No console errors or warnings

**Functionality Verified**:
- [ ] All product cards open correct modals
- [ ] Modals close properly (button, overlay, Escape)
- [ ] Progress bars animate on load
- [ ] Keyboard navigation works throughout
- [ ] Print layout tested and clean

**Accessibility Confirmed**:
- [ ] WCAG AA color contrast verified
- [ ] Keyboard-only navigation tested
- [ ] Screen reader compatibility checked (ARIA labels)
- [ ] Focus management in modals working

**Delivery Ready**:
- [ ] Professional appearance maintained throughout
- [ ] Proper file naming convention used
- [ ] Backup copy saved with version number
- [ ] Stakeholder presentation notes prepared (if needed)

---

## Example Generation Request

```
Generate Viability Dashboard for Acme Healthcare Platform

Source: Completed Step 12 Viability Assessment (3 products)

Products:
1. Acme Patient Portal (target: Healthcare Facilities, MVP Ready)
2. Acme Provider Network (target: Medical Practices, In Progress)
3. Acme Analytics Suite (target: Hospital Systems, Planning)

Dashboard structure:
- Header: Acme Healthcare Platform, Viability Assessment, November 21, 2025
- Executive Summary: Synthesize from Summary Dashboard markdown
  - Portfolio: 3 products serving distinct client segments
  - PMF: 85% MVP validation (20/24 features with >5 interviews)
  - Business Models: All coherent, subscription-based recurring revenue
  - Recommendation: Launch Product 1 Q2 2026 (strongest validation)
- 4 Key Metrics:
  1. Products Defined: 3 (2 core, 1 enhancement)
  2. MVP Features: 24 (across portfolio)
  3. Need Coverage: 100% (all 12 fundamental needs)
  4. Viability Score: 4.2/5 (Strong viability)
- Product Cards: 3 interactive cards with full PMF and business model in modals
- Need Coverage Table: 12 fundamental needs × 3 products (checkmark matrix)
- 4 Progress Bars:
  - MVP Validation: 85%
  - Resource Readiness: 70%
  - Business Model Coherence: 95%
  - Need Coverage: 100%
- Strategic Insights: 4 cards
  - Strength: Product 1 MVP fully validated (8/8 features >5 interviews)
  - Opportunity: Products 2-3 share 60% cost structure (portfolio efficiency)
  - Concern: Product 1 pricing unvalidated ($49/month assumption)
  - Recommendation: Launch Product 1 Q2 2026, Products 2-3 in phased approach

Target audience: Investment committee and board of directors
Tone: Strategic and evidence-based
Status: Ready for committee review

Generate professional HTML dashboard following VIANEO design system.
Save as: AcmeHealthcare_Viability_Dashboard_20251121_v1.html
```

---

## Next Steps After Dashboard Generation

Once viability dashboard is generated:

1. **Present to Stakeholders**: Use dashboard in investment committee or board presentation
2. **Gather Feedback**: Note any concerns or questions about business models
3. **Proceed to Step 13**: Financial Modeling (quantify revenue, costs, projections)
4. **Update Dashboard**: Revise if new validation data or strategic decisions emerge
5. **Archive**: Save version-controlled copies as portfolio strategy evolves

---

**The Viability Dashboard transforms Step 12 analytical outputs into executive-ready visual portfolio strategy that drives investment and go-to-market decisions.**
