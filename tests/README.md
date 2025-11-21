# Test Suite for Vianeo Platform Tools

This directory contains automated tests for the Vianeo Platform Tools, focusing on the Python utilities.

## Test Structure

```
tests/
├── __init__.py                     # Test package initialization
├── README.md                       # This file
├── test_validation.py              # Validation logic tests (30 tests)
└── fixtures/                       # Test data fixtures
    ├── valid_input.json           # Valid test data
    ├── missing_project_name.json  # Missing required field
    ├── too_few_players.json       # Count constraint violation
    └── invalid_acceptability.json # Invalid enum value
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

# Run with test name pattern
pytest tests/ -k "test_validate_data"
```

## Test Coverage Summary

### Current Coverage (Validation Tests)

| Component | Tests | Coverage |
|-----------|-------|----------|
| **validate_data()** | 20 tests | ~95% |
| **validate_stakeholder()** | 10 tests | ~95% |
| **Overall module** | 30 tests | ~30% |

**Note:** Overall module coverage is lower because document generation, file I/O, and CLI functions are not yet tested (planned for Phase 2).

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

## Next Testing Phases

### Phase 2: Document Generation Tests (Planned)
- DOCX file creation
- Table structure validation
- Color coding verification
- Font and styling tests
- Page breaks and layout

### Phase 3: Integration Tests (Planned)
- CLI interface testing
- File I/O operations
- End-to-end workflow tests
- Error handling and recovery

### Phase 4: JavaScript Tests (Planned)
- HTML template interactions
- CSV export functionality
- View toggle features
- Keyboard shortcuts

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
