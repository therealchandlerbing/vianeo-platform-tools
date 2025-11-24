# Vianeo Sprint Step Dependencies

This document defines critical data flow requirements between sprint steps.

## Quick Reference

| Downstream | Upstream | Data That Must Match |
|------------|----------|---------------------|
| Step 7 | Step 5 | Requesters (columns), Needs (rows) |
| Step 9 | Step 5 | Requesters (inside org boxes in Buyers/End Users) |
| Step 9 | Step 8 | Players (value chain nodes), Influencers (top nodes), Acceptability |
| Step 11 (Needs) | Step 5 | Needs (columns) |
| Step 11 (Needs) | Step 7 | Importance/Satisfaction (column colors, requester dropdowns) |
| Step 11 (Means) | Step 4 | Means (columns), Differentiation status |

## Visual Flow

```
Step 5 (Needs/Requesters)
    │
    ├── Requesters (individual names + organizational grouping)
    ├── Needs (list)
    │
    ├──────────────────────────────────────────┐
    │                                          │
    ▼                                          │
Step 7 (Needs Qualification)                   │
    │                                          │
    ├── Importance × Satisfaction ratings      │
    │                                          │
    │                                          ▼
    │                                    Step 9 (Value Network)
    │                                          ▲
    │                                          │
Step 8 (Players/Influencers)                   │
    │                                          │
    ├── Players (with acceptability) ──────────┤
    ├── Influencers (with acceptability) ──────┘


Step 4 (Legitimacy/Means) ──────────────────► Step 11 (Features/Means Matrix)
                                                      ▲
Step 5 (Needs) ─────────────────────────────────────┘
                                                      │
Step 7 (Importance/Satisfaction) ─────────────────────┘
                                              Step 11 (Features/Needs Matrix)
```

## Grouping Logic

### Requesters (Step 5 -> Step 9)

Step 5 captures individual requesters AND their organizational context:

```
Individual Requester    ->    Organizational Context (Step 9 box)
-------------------------------------------------------------
Field operator          ->    Industrial Operational Staff
maintenance staff       ->    Industrial Operational Staff
plant manager           ->    Industrial manufacturer (management)
board directors         ->    Industrial manufacturer (management)
```

In Step 9, the organizational context becomes the box label, with individual requesters listed inside.

### Players vs Influencers (Step 8 -> Step 9)

| Step 8 Category | Step 9 Position |
|-----------------|-----------------|
| Players (suppliers) | Left side of network |
| Players (channels) | Channels & Partners column |
| Players (customers) | Buyers & Clients column |
| Influencers | Enablers & Influencers column (top) |

## Why Exact Matching Matters

Without enforced dependencies:
1. Requester names may differ between matrices (Step 7) and network (Step 9)
2. Need statements may be paraphrased differently across Steps 5, 7, 11
3. Means may not match between Step 4 definition and Step 11 matrix
4. Acceptability ratings may be inconsistent between Step 8 and Step 9

These inconsistencies undermine evaluation integrity and confuse committee presentations.

## Validation Protocol

Before generating any downstream step:
1. Retrieve the upstream step output for the project
2. Extract exact data (do not paraphrase)
3. Run validation checklist before finalizing output
4. Flag any mismatches for review

---

## Detailed Dependency Specifications

### Step 4 -> Step 11 (Means View)

**Data Flow:**
- Human Means descriptions become column headers
- Physical/Intellectual Means descriptions become column headers
- Financial Means become column headers
- Differentiation status (Yes/No) shows as icon in column header

**Exact Match Required:**
- Mean descriptions must be copied verbatim
- Differentiation status must match exactly
- Do not add, remove, or modify means

### Step 5 -> Step 7 (Needs Qualification Matrix)

**Data Flow:**
- Individual requester names become column headers
- Need statements become row labels
- Interview counts become reliability indicators

**Exact Match Required:**
- All requester names copied exactly as written
- All need statements preserved verbatim (60-char limit)
- Interview counts must match Step 5 validation status

### Step 5 -> Step 9 (Value Network - Requesters)

**Data Flow:**
- Organizational contexts become box labels in Buyers/End Users columns
- Individual requesters appear nested inside organizational boxes

**Grouping Logic:**
- Group requesters by organizational context from Step 5
- Each unique organizational context = one box in value network
- List all requesters sharing that context inside the box

### Step 5 -> Step 11 (Needs View)

**Data Flow:**
- Need statements become column headers
- Requester segments inform "See requesters" dropdown

**Exact Match Required:**
- All need statements copied verbatim
- Need ordering may follow opportunity priority

### Step 7 -> Step 11 (Needs View Color Coding)

**Data Flow:**
- Importance ratings determine column color (Opportunity vs Expected)
- Satisfaction ratings inform opportunity analysis
- Requester-need relationships populate dropdowns

**Derived Data:**
- High importance + Low satisfaction = Opportunity (green column)
- Expected functionality = Gray column

### Step 8 -> Step 9 (Value Network - Players/Influencers)

**Data Flow:**
- Player names become boxes in value chain columns
- Player types determine column position
- Influencer names become boxes in Enablers column
- Acceptability ratings become colored dots

**Exact Match Required:**
- All player names copied exactly
- All influencer names copied exactly
- Acceptability ratings (Favorable/Neutral/Unfavorable) must match

**Positioning Rules:**
| Player Type | Value Network Column |
|------------|---------------------|
| Supplier | Enablers & Inputs |
| Channel | Channels & Partners |
| Partner | Channels & Partners |
| Competitor | Channels & Partners |
| Customer | Buyers & Clients |

---

## Validation Checklists

### Before Generating Step 7

- [ ] Step 5 complete with requesters and needs
- [ ] All requester names available (6-10)
- [ ] All need statements available (10-16)
- [ ] Interview counts documented per requester

### Before Generating Step 9

- [ ] Step 5 complete with requesters and organizational contexts
- [ ] Step 8 complete with players and influencers
- [ ] All organizational groupings defined
- [ ] All acceptability ratings assigned

### Before Generating Step 11

- [ ] Step 4 complete with available means
- [ ] Step 5 complete with need statements
- [ ] Step 7 complete with opportunity analysis
- [ ] Differentiation status assigned to all means

---

## Error Prevention

### Common Mistakes

1. **Paraphrasing need statements**
   - Wrong: Step 5 says "Track equipment downtime", Step 11 says "Monitor downtime"
   - Right: Use exact same wording in both steps

2. **Inconsistent requester names**
   - Wrong: Step 5 says "Plant managers", Step 7 says "Manufacturing managers"
   - Right: Use exact same name in both steps

3. **Missing organizational context**
   - Wrong: List requesters without organizational grouping
   - Right: Every requester has organizational context for Step 9 grouping

4. **Acceptability rating mismatch**
   - Wrong: Step 8 says "Neutral", Step 9 shows green (Favorable) dot
   - Right: Dots in Step 9 must match Step 8 ratings exactly

### Prevention Strategies

1. **Copy-paste, don't retype**: Always copy data from upstream steps
2. **Count validation**: Verify counts match (e.g., 10 needs in Step 5 = 10 columns in Step 11)
3. **Visual inspection**: Compare upstream and downstream outputs side-by-side
4. **Checklist discipline**: Complete validation checklist before finalizing

---

## Testing Protocol

After updates, validate with a test project:

1. Run Steps 4, 5, 8 sequentially
2. Run Step 7 and verify:
   - Requester columns match Step 5 names exactly
   - Need rows match Step 5 statements exactly
3. Run Step 9 and verify:
   - Requesters appear inside organizational grouping boxes
   - All players from Step 8 appear in network
   - All influencers from Step 8 appear at top
   - Acceptability colors match Step 8
4. Run Step 11 and verify:
   - Features/Needs columns match Step 5 needs exactly
   - Features/Means columns match Step 4 means exactly
   - Differentiation icons match Step 4

---

**Document Version:** 2.5
**Last Updated:** November 2025
**Compatible With:** Vianeo 13-Step Evaluation Framework
