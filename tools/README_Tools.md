# Vianeo Platform Tools - Automation Scripts

**Version 2.0 | November 2025**

This directory contains Python automation tools for generating professional DOCX documents following the Vianeo Business Model Evaluation Framework specifications.

---

## Overview

The tools in this directory complement the AI-based prompt workflow by providing:
- **Precise formatting control** (BCG-level presentation quality)
- **Automated validation** (character limits, entry counts, required fields)
- **Repeatable generation** (consistent output across multiple projects)
- **Batch processing** capabilities

## Available Tools

### 1. Players/Influencers Generator

**File:** `players_influencers_generator.py`

**Purpose:** Generate professional 2-page DOCX documents mapping ecosystem stakeholders with acceptability ratings (Step 7 of the Vianeo Framework).

**Output:**
- 2-page professional DOCX document
- Page 1: Document title, executive context, Ecosystem Players table (8-10 entries)
- Page 2: Ecosystem Influencers table (8-10 entries)
- Color-coded acceptability ratings
- BCG-level visual presentation

---

## Installation

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Setup

1. **Install dependencies:**
   ```bash
   cd /path/to/vianeo-platform-tools/tools
   pip install -r requirements.txt
   ```

   This installs:
   - `python-docx` - For DOCX document generation and formatting

2. **Verify installation:**
   ```bash
   python players_influencers_generator.py --help
   ```

---

## Usage Guide

### Players/Influencers Generator

#### Basic Usage

```bash
python players_influencers_generator.py <input.json> <output.docx>
```

**Example:**
```bash
python players_influencers_generator.py example_rayla_ai.json rayla_ai_ecosystem.docx
```

#### Input JSON Structure

Create a JSON file with the following structure:

```json
{
  "project_name": "Your Project Name",
  "executive_context": "2-3 sentence explanation of scope and interpretation. Players are active market participants. Influencers shape market dynamics.",
  "players": [
    {
      "name": "Entity Name (max 60 chars)",
      "acceptability": "Favorable",
      "note": "Strategic implication under 250 characters"
    },
    {
      "name": "Another Player",
      "acceptability": "Neutral",
      "note": "Another strategic note"
    }
    // ... 6-8 more entries (8-10 total)
  ],
  "influencers": [
    {
      "name": "Regulatory Body Name",
      "acceptability": "Unfavorable",
      "note": "Strategic note about influence"
    }
    // ... 7-9 more entries (8-10 total)
  ]
}
```

#### Field Requirements

| Field | Type | Constraints |
|-------|------|-------------|
| `project_name` | string | 1-100 characters |
| `executive_context` | string | 1-500 characters |
| `players` | array | Exactly 8-10 entries |
| `influencers` | array | Exactly 8-10 entries |
| `name` | string | Max 60 characters |
| `acceptability` | string | One of: `Favorable`, `Neutral`, `Unfavorable`, `Don't know` |
| `note` | string | Max 250 characters |

#### Acceptability Values

| Value | Meaning | Visual Treatment |
|-------|---------|------------------|
| **Favorable** | Will actively support or benefit | Soft green background, green text |
| **Neutral** | No strong position either way | Soft yellow background, amber text |
| **Unfavorable** | Likely to resist or oppose | Soft red background, red text |
| **Don't know** | Insufficient information | Light gray background, gray text |

#### Example Workflow

1. **Create input file:**
   ```bash
   nano my_project.json
   ```

2. **Populate with your stakeholders:**
   - Use the `example_rayla_ai.json` as a template
   - Ensure 8-10 players and 8-10 influencers
   - Keep names under 60 characters
   - Keep notes under 250 characters

3. **Generate document:**
   ```bash
   python players_influencers_generator.py my_project.json my_project_ecosystem.docx
   ```

4. **Validation:**
   The script will automatically validate:
   - Entry counts (8-10 per category)
   - Character limits (names, notes)
   - Required fields
   - Valid acceptability values

   If validation fails, errors will be displayed:
   ```
   Validation Errors:
     - Players must have 8-10 entries (found 7)
     - Player 3: Name exceeds 60 characters (67)
     - Influencer 5: Note exceeds 250 characters (278)
   ```

5. **Review output:**
   Open the generated DOCX file in:
   - Microsoft Word
   - Google Docs
   - LibreOffice Writer
   - Any DOCX-compatible word processor

---

## Programmatic Usage

You can also import and use the generator in your own Python scripts:

```python
from players_influencers_generator import generate_document

data = {
    "project_name": "My Innovation",
    "executive_context": "This analysis maps critical stakeholders...",
    "players": [
        {"name": "Player 1", "acceptability": "Favorable", "note": "Strategic note..."},
        # ... 7-9 more
    ],
    "influencers": [
        {"name": "Influencer 1", "acceptability": "Neutral", "note": "Strategic note..."},
        # ... 7-9 more
    ]
}

success = generate_document(data, "output.docx")
if success:
    print("Document generated successfully!")
```

---

## Design Specifications

### Typography
- **Font:** Calibri throughout
- **Title:** 48pt bold
- **Subtitle:** 24pt italic
- **Section Headers:** 28pt bold
- **Body Text:** 20pt
- **Table Headers:** 22pt bold (white on blue-gray)
- **Strategic Notes:** 19pt

### Colors
- **Title:** #1a1a1a (near black)
- **Headers:** #2c3e50 (dark blue-gray)
- **Table Header Background:** #34495e (blue-gray)
- **Favorable:** #d5f4e6 background, #27ae60 text
- **Neutral:** #fff4d9 background, #f39c12 text
- **Unfavorable:** #fadbd8 background, #c0392b text
- **Don't know:** #f5f5f5 background, #7f8c8d text

### Layout
- **Page Size:** Letter (8.5" × 11")
- **Margins:** 0.75 inches all sides
- **Column Widths:**
  - Entity: 3.33 inches
  - Acceptability: 2.5 inches
  - Strategic Implication: 7.17 inches
- **Spacing:** 1.15 line spacing, 6pt paragraph spacing

### Professional Standards
- BCG consultant-level presentation quality
- Clean, scannable tables
- Consistent color coding
- Appropriate white space
- No visual clutter

---

## Troubleshooting

### Common Issues

**Issue:** `ModuleNotFoundError: No module named 'docx'`
- **Solution:** Install dependencies with `pip install -r requirements.txt`

**Issue:** "Validation Errors: Players must have 8-10 entries"
- **Solution:** Ensure your JSON has exactly 8-10 players and 8-10 influencers

**Issue:** "Note exceeds 250 characters"
- **Solution:** Edit notes to be more concise. Use semicolons to separate thoughts efficiently.

**Issue:** Generated DOCX has formatting issues
- **Solution:** Ensure you're using python-docx >= 0.8.11. Update with `pip install --upgrade python-docx`

**Issue:** Permission denied when saving
- **Solution:** Check write permissions on the output directory or choose a different location

### Getting Help

For questions or issues:
1. Review this documentation
2. Check the example files (`example_rayla_ai.json`)
3. Consult the main Vianeo documentation in `/docs/`
4. Review the Python script source code (includes detailed comments)

---

## Best Practices

### Content Quality

1. **Strategic Selection:** Choose the 8-10 MOST CRITICAL stakeholders, not every possible entity
2. **Specific Names:** Use specific entities, not generic categories ("Mayo Clinic" not "hospitals")
3. **Actionable Notes:** Include strategic implications, not just descriptions
4. **Character Efficiency:** Use semicolons to separate thoughts; remove unnecessary articles
5. **Evidence-Based:** Rate acceptability based on evidence, not assumptions

### Note Writing Formula

**Structure:** [Current Situation] + [Impact] + [Strategic Implication]

**Good Examples:**
- "Primary target struggling with 40+ hr proposals; no consultant budget; desperately need affordable AI solution"
- "Direct competitor at $3K-$7K/year; discovery-focused but could add AI writing to compete"
- "Major federal funder; sets research proposal standards; unclear AI stance; could mandate or ban"

**Poor Examples:**
- ❌ "Important stakeholder" (too vague)
- ❌ "Government agency" (no insight)
- ❌ "Will resist" (no strategy)

### Workflow Optimization

1. **Start with research:** Map all potential stakeholders first
2. **Prioritize ruthlessly:** Select only the most critical 8-10 per category
3. **Draft notes:** Write strategic implications for each
4. **Validate early:** Run validation before investing time in perfect wording
5. **Iterate on content:** Focus on strategic insights, not formatting (script handles that)

---

## Integration with Vianeo Framework

### Input Sources

This tool works best when you've completed:
- **Step 3:** 29-Question Market Maturity Assessment (Q3, Q10, Q17, Q20, Q23, Q24)
- **Step 5:** Needs/Requesters Desirability Analysis (requesters table)

### Data Flow

```
Step 3 (Market Maturity)
  ├─→ Q3: Ecosystem player identification
  ├─→ Q10: Stakeholder interests
  ├─→ Q17: Resistance and barriers
  ├─→ Q20: Market structure
  ├─→ Q23: Regulatory environment
  └─→ Q24: Partner identification
      ↓
Step 5 (Desirability)
  └─→ Requesters table (6-10 customer segments)
      ↓
Step 7 (Players/Influencers) ← THIS TOOL
  └─→ Acceptability analysis with strategic implications
      ↓
Step 8 (Network Visualization)
  └─→ Visual ecosystem map
```

### Output Usage

The generated DOCX is used for:
- **Strategic planning:** Engagement prioritization and mitigation strategies
- **Investor presentations:** Ecosystem risk assessment
- **Partnership development:** Stakeholder identification and approach
- **Risk management:** Understanding potential barriers
- **Team alignment:** Shared stakeholder understanding

---

## Alternative Approach: AI Prompt Method

If you prefer not to use Python scripting, you can generate the same analysis using AI prompts:

**See:** `/prompts/step_7_players_influencers.md`

**Advantages of prompt method:**
- No installation required
- Conversational refinement
- Integrated with AI analysis workflow

**Advantages of Python script (this tool):**
- Precise formatting control
- Automated validation
- Batch processing
- Consistent output

**Recommendation:** Use both!
1. Start with AI prompts for initial analysis and strategic thinking
2. Use Python script for final professional documentation

---

## Version History

### Version 2.0 (November 2025)
- Initial release of Players/Influencers generator
- BCG-level formatting standards
- Automated validation
- Strategic selection approach (8-10 most critical)

### Planned Enhancements
- Batch processing for multiple projects
- HTML output format option
- Integration with Step 8 network visualization
- CLI wizard for guided input
- Template library for common industries

---

## Examples Provided

### `example_rayla_ai.json`
Complete example for Rayla AI (grant writing AI platform):
- 9 ecosystem players (nonprofits, universities, consultants, competitors)
- 9 ecosystem influencers (NSF, NIH, associations, media)
- Strategic notes demonstrating best practices
- Mix of Favorable/Neutral/Unfavorable ratings

**Test it:**
```bash
python players_influencers_generator.py example_rayla_ai.json rayla_ai_test.docx
```

---

## Contributing

To add new tools or enhance existing ones:

1. Follow Python PEP 8 style guidelines
2. Include comprehensive docstrings
3. Add validation for all inputs
4. Provide example files
5. Update this README
6. Test with multiple scenarios

---

## License

Part of the Vianeo Business Model Evaluation Framework.
For internal use and authorized evaluation partners.

---

**Questions?** Refer to `/docs/VIANEO_Complete_Evaluation_Skill.md` for the complete framework documentation.
