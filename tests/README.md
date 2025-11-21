# Test Suite for Vianeo Platform Tools

This directory contains automated tests for the Vianeo Platform Tools, focusing on the Python utilities.

## Test Structure

```
tests/
├── __init__.py                       # Test package initialization
├── README.md                         # This file
├── test_validation.py                # Validation logic tests (30 tests)
├── test_document_generation.py       # Document generation tests (24 tests)
├── test_integration.py               # Integration tests (28 tests)
└── fixtures/                         # Test data fixtures
    ├── valid_input.json              # Valid test data
    ├── missing_project_name.json     # Missing required field
    ├── too_few_players.json          # Count constraint violation
    ├── invalid_acceptability.json    # Invalid enum value
    ├── malformed.json                # Malformed JSON for error testing
    ├── empty.json                    # Empty JSON object
    └── not_json.txt                  # Non-JSON file for error testing
```

## Running Tests

### Install Dependencies

```bash
pip install -r tools/requirements-dev.txt
```

### Run All Tests

```bash
# From project root directory
pytest tests/

# With verbose output
pytest tests/ -v

# Run specific test file
pytest tests/test_validation.py
```

### Run Tests with Coverage

```bash
# Terminal coverage report
pytest tests/ --cov=. --cov-report=term-missing

# HTML coverage report (opens in browser)
pytest tests/ --cov=. --cov-report=html
# Then open: htmlcov/index.html
```

### Run Specific Test Categories

```bash
# Run only validation tests
pytest tests/ -m validation

# Run only integration tests
pytest tests/ -m integration

# Run with test name pattern
pytest tests/ -k "test_validate_data"

# Run excluding slow tests
pytest tests/ -m "not slow"
```

## Test Coverage Summary

### Current Coverage (82 Total Tests)

| Component | Tests | Coverage |
|-----------|-------|----------|
| **validate_data()** | 20 tests | ~95% |
| **validate_stakeholder()** | 10 tests | ~95% |
| **generate_document()** | 24 tests | ~90% |
| **load_json_data()** | 5 tests | ~100% |
| **CLI interface** | 10 tests | ~95% |
| **End-to-end workflows** | 13 tests | ~100% |
| **Overall module** | 82 tests | **89%** |
| **Total project** | 82 tests | **96%** |

**Uncovered Areas (11%):**
- `main()` entry point wrapper (~5 lines)
- Utility functions (hex_to_rgb - tested indirectly)
- Error handling for python-docx import failure
- Print message formatting functions

## Test Categories

### 1. Valid Data Tests (2 tests)
- Valid input with 8 entries
- Valid input with 10 entries (boundary)

### 2. Missing Required Fields (4 tests)
- Missing project_name
- Missing executive_context
- Missing players
- Missing influencers

### 3. Character Limit Tests (8 tests)
- project_name too long (>100 chars)
- project_name empty
- executive_context too long (>500 chars)
- executive_context empty
- Stakeholder name too long (>60 chars)
- Stakeholder note too long (>250 chars)
- Max length boundary tests (exactly at limit)

### 4. Count Constraint Tests (5 tests)
- Too few players (<8)
- Too many players (>10)
- Too few influencers (<8)
- Too many influencers (>10)
- Zero players

### 5. Acceptability Value Tests (3 tests)
- Invalid acceptability value
- Case-sensitive validation
- All valid values (Favorable, Neutral, Unfavorable, Don't know)

### 6. Missing Stakeholder Fields (3 tests)
- Missing name
- Missing acceptability
- Missing note

### 7. Edge Cases (5 tests)
- Boundary length tests (exactly at max)
- Unicode characters (中文, العربية, émojis)
- Special characters (@#$%^&*()_+-=[]{}|)
- Multiple simultaneous errors
- Complex punctuation

## Document Generation Tests (24 tests)

### 1. Successful Generation (3 tests)
- File creation verification
- Return value on success
- Return value on validation failure

### 2. Document Structure (6 tests)
- Correct number of sections
- Exactly 2 tables (Players and Influencers)
- Page break between tables
- Players table structure (9 rows, 3 columns)
- Influencers table structure (9 rows, 3 columns)
- Table header text validation

### 3. Content Accuracy (5 tests)
- Project name in title
- Executive context in document
- Players data correctness
- Influencers data correctness
- All stakeholder information preserved

### 4. Color Coding (5 tests)
- Favorable → Green background
- Neutral → Yellow/amber background
- Unfavorable → Red background
- Don't know → Gray background
- Table headers → Dark blue-gray background

### 5. Font and Styling (2 tests)
- Table header background color
- Stakeholder names are bold

### 6. Page Layout (2 tests)
- Letter size (8.5 x 11 inches)
- 0.75 inch margins (all sides)

### 7. Error Handling and Edge Cases (3 tests)
- Invalid output path handling
- Maximum entries (10 players/influencers)
- Unicode character preservation

## Integration Tests (28 tests)

### 1. File Loading Tests (5 tests)
- Valid JSON file loading
- Missing file error handling
- Malformed JSON detection
- Non-JSON file handling
- Empty JSON object handling

### 2. End-to-End Workflow Tests (4 tests)
- Complete workflow with example file (Rayla AI)
- Complete workflow with test fixtures
- Workflow validation failure handling
- Workflow with missing required fields

### 3. CLI Interface Tests (7 tests)
- No arguments (show usage)
- One argument (show usage)
- Valid arguments (success)
- Example Rayla AI file processing
- Missing input file error
- Invalid JSON error
- Validation failure error

### 4. Error Recovery and Edge Cases (9 tests)
- Output paths with spaces
- Nested directory creation
- Overwriting existing files
- Unicode in file paths
- Relative vs absolute paths
- Concurrent file generation
- Empty JSON object handling

### 5. Exit Codes and Error Messages (3 tests)
- Exit code 0 on success
- Exit code 1 on validation failure
- Exit code 1 on file not found
- Helpful error messages

### 6. Real-World Scenarios (1 test)
- Full workflow with all acceptability states

## Integration Testing Methodology

Integration tests use **subprocess** to test the CLI as a black box, ensuring:
- Argument parsing works correctly
- Exit codes are appropriate (0 for success, 1 for errors)
- Error messages are helpful and informative
- File I/O operations succeed in various scenarios

### Key Integration Test Features

1. **Real subprocess execution** - Tests run the actual CLI script
2. **End-to-end validation** - Complete JSON → DOCX workflows
3. **Error scenario coverage** - Missing files, malformed JSON, validation failures
4. **Path edge cases** - Spaces, unicode, nested directories, relative/absolute
5. **File operations** - Overwriting, concurrent generation, permission handling

### Example Integration Test Flow

```python
# Test complete CLI workflow
result = subprocess.run(
    [sys.executable, "players_influencers_generator.py",
     "input.json", "output.docx"],
    capture_output=True,
    text=True
)

assert result.returncode == 0  # Success exit code
assert output_file.exists()    # File created
assert "✓" in result.stdout    # Success message
```

## JavaScript Tests (32 tests)

### Setup

JavaScript tests are located in `tests/js/` and use Jest with jsdom.

```bash
# Install Node.js dependencies
npm install

# Run JavaScript tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

### Test Files

#### `step11-dual-view.test.js` (32 tests)

Tests for the Features & Needs Dual View HTML template.

**Coverage:**
- Initialization and DOM setup (7 tests)
- View toggle functionality (8 tests)
- Keyboard shortcuts (6 tests)
- CSV export (3 tests)
- Accessibility (5 tests)
- State management (2 tests)
- Error handling (2 tests)

**Current Status:** 29/32 passing (90.6%)

### Test Approach

JavaScript tests use jsdom to create a browser-like environment:

```javascript
const { JSDOM } = require('jsdom');

// Load HTML template
const html = fs.readFileSync('template.html', 'utf8');
const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  resources: 'usable'
});

// Test interactions
const toggle = dom.window.document.getElementById('toggleSwitch');
toggle.click();
```

See `tests/js/README.md` for detailed documentation.

## Combined Test Suite Summary

**Total:** 114 tests across Python and JavaScript
- ✅ Python tests: 82 tests (96% coverage)
- ✅ JavaScript tests: 32 tests (90.6% passing)

**Execution:**
- Python: ~6.5 seconds
- JavaScript: ~11 seconds
- **Total: ~17.5 seconds**

## Next Testing Phases

### Future Enhancements
- Additional HTML template tests (Step 7, Step 9)
- End-to-end browser tests with Playwright
- Visual regression testing
- Performance benchmarking

## Writing New Tests

### Test Function Naming

Follow the pattern: `test_<function>_<scenario>`

```python
def test_validate_data_missing_project_name():
    """Should fail when project_name is missing"""
```

### Using Fixtures

```python
@pytest.fixture
def valid_data():
    """Valid input data"""
    return {...}

def test_something(valid_data):
    # Test uses the fixture
    errors = validate_data(valid_data)
    assert errors == []
```

### Markers

Use markers to categorize tests:

```python
@pytest.mark.validation
def test_validate_data_valid_input():
    ...

@pytest.mark.slow
def test_large_document_generation():
    ...
```

## Continuous Integration

To integrate with CI/CD, add to your workflow:

```yaml
# .github/workflows/test.yml
- name: Run tests
  run: pytest tests/ --cov=. --cov-report=term
```

## Troubleshooting

### Import Errors

If tests can't find the module:
```python
# Add to top of test file
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent / "tools"))
```

### Coverage Not Detected

Make sure to run coverage from the project root:
```bash
cd /path/to/vianeo-platform-tools
pytest tests/ --cov=.
```

## Test Data Guidelines

### Valid Input Requirements

- **project_name:** 1-100 characters
- **executive_context:** 1-500 characters
- **players:** 8-10 entries
- **influencers:** 8-10 entries
- **Stakeholder name:** 1-60 characters
- **Stakeholder note:** 1-250 characters
- **Acceptability values:** Exactly one of:
  - "Favorable"
  - "Neutral"
  - "Unfavorable"
  - "Don't know"

### Creating Test Fixtures

Add new fixtures to `tests/fixtures/`:

```json
{
  "project_name": "Test Name",
  "executive_context": "Test context",
  "players": [...],
  "influencers": [...]
}
```

## Contributing

When adding new tests:

1. Write descriptive test names
2. Include docstrings explaining what's being tested
3. Use appropriate markers (@pytest.mark.validation, etc.)
4. Add test data to fixtures/ directory
5. Update this README if adding new test categories
6. Ensure all tests pass before committing

## Resources

- [Pytest Documentation](https://docs.pytest.org/)
- [pytest-cov Documentation](https://pytest-cov.readthedocs.io/)
- [VIANEO Framework Documentation](../README.md)
