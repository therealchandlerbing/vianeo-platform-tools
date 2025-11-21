"""
Test suite for players_influencers_generator validation functions

Tests cover:
- Input data structure validation
- Required field validation
- Character limit validation
- Count constraints (8-10 players/influencers)
- Acceptability value validation
- Edge cases and error messages
"""

import pytest
import sys
import json
from pathlib import Path

# Add tools directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent / "tools"))

from players_influencers_generator import (
    validate_data,
    validate_stakeholder,
    ACCEPTABILITY_CONFIG
)


# ============================================================================
# FIXTURES
# ============================================================================

@pytest.fixture
def valid_data():
    """Valid input data that should pass all validation"""
    return {
        "project_name": "Test Project",
        "executive_context": "This is a valid executive context for testing.",
        "players": [
            {"name": f"Player {i}", "acceptability": "Favorable", "note": f"Note {i}"}
            for i in range(1, 9)
        ],
        "influencers": [
            {"name": f"Influencer {i}", "acceptability": "Neutral", "note": f"Note {i}"}
            for i in range(1, 9)
        ]
    }


@pytest.fixture
def fixtures_dir():
    """Return path to test fixtures directory"""
    return Path(__file__).parent / "fixtures"


# ============================================================================
# TESTS: Valid Data
# ============================================================================

@pytest.mark.validation
def test_validate_data_valid_input(valid_data):
    """Valid data should return no errors"""
    errors = validate_data(valid_data)
    assert errors == [], f"Expected no errors but got: {errors}"


@pytest.mark.validation
def test_validate_data_with_10_entries(valid_data):
    """Should accept exactly 10 players and 10 influencers"""
    # Add 2 more to each to make 10
    valid_data["players"].extend([
        {"name": "Player 9", "acceptability": "Favorable", "note": "Note 9"},
        {"name": "Player 10", "acceptability": "Neutral", "note": "Note 10"}
    ])
    valid_data["influencers"].extend([
        {"name": "Influencer 9", "acceptability": "Unfavorable", "note": "Note 9"},
        {"name": "Influencer 10", "acceptability": "Don't know", "note": "Note 10"}
    ])

    errors = validate_data(valid_data)
    assert errors == [], f"Expected no errors but got: {errors}"


# ============================================================================
# TESTS: Missing Required Fields
# ============================================================================

@pytest.mark.validation
def test_validate_data_missing_project_name(valid_data):
    """Should fail when project_name is missing"""
    del valid_data["project_name"]
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("project_name" in err for err in errors)


@pytest.mark.validation
def test_validate_data_missing_executive_context(valid_data):
    """Should fail when executive_context is missing"""
    del valid_data["executive_context"]
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("executive_context" in err for err in errors)


@pytest.mark.validation
def test_validate_data_missing_players(valid_data):
    """Should fail when players field is missing"""
    del valid_data["players"]
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("players" in err for err in errors)


@pytest.mark.validation
def test_validate_data_missing_influencers(valid_data):
    """Should fail when influencers field is missing"""
    del valid_data["influencers"]
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("influencers" in err for err in errors)


# ============================================================================
# TESTS: Character Limits
# ============================================================================

@pytest.mark.validation
def test_validate_data_project_name_too_long(valid_data):
    """Should fail when project_name exceeds 100 characters"""
    valid_data["project_name"] = "A" * 101
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("project_name" in err and "100" in err for err in errors)


@pytest.mark.validation
def test_validate_data_project_name_empty(valid_data):
    """Should fail when project_name is empty string"""
    valid_data["project_name"] = ""
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("project_name" in err for err in errors)


@pytest.mark.validation
def test_validate_data_executive_context_too_long(valid_data):
    """Should fail when executive_context exceeds 500 characters"""
    valid_data["executive_context"] = "A" * 501
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("executive_context" in err and "500" in err for err in errors)


@pytest.mark.validation
def test_validate_data_executive_context_empty(valid_data):
    """Should fail when executive_context is empty string"""
    valid_data["executive_context"] = ""
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("executive_context" in err for err in errors)


@pytest.mark.validation
def test_validate_stakeholder_name_too_long():
    """Should fail when stakeholder name exceeds 60 characters"""
    stakeholder = {
        "name": "A" * 61,
        "acceptability": "Favorable",
        "note": "Valid note"
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert len(errors) > 0
    assert any("60 characters" in err for err in errors)


@pytest.mark.validation
def test_validate_stakeholder_note_too_long():
    """Should fail when stakeholder note exceeds 250 characters"""
    stakeholder = {
        "name": "Valid Name",
        "acceptability": "Favorable",
        "note": "A" * 251
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert len(errors) > 0
    assert any("250 characters" in err for err in errors)


# ============================================================================
# TESTS: Count Constraints
# ============================================================================

@pytest.mark.validation
def test_validate_data_too_few_players(valid_data):
    """Should fail when players < 8"""
    valid_data["players"] = valid_data["players"][:7]  # Only 7 players
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("8-10" in err and "Players" in err for err in errors)


@pytest.mark.validation
def test_validate_data_too_many_players(valid_data):
    """Should fail when players > 10"""
    # Add 3 more players to get 11
    for i in range(9, 12):
        valid_data["players"].append({
            "name": f"Player {i}",
            "acceptability": "Favorable",
            "note": f"Note {i}"
        })
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("8-10" in err and "Players" in err for err in errors)


@pytest.mark.validation
def test_validate_data_too_few_influencers(valid_data):
    """Should fail when influencers < 8"""
    valid_data["influencers"] = valid_data["influencers"][:5]  # Only 5 influencers
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("8-10" in err and "Influencers" in err for err in errors)


@pytest.mark.validation
def test_validate_data_too_many_influencers(valid_data):
    """Should fail when influencers > 10"""
    # Add 4 more influencers to get 12
    for i in range(9, 13):
        valid_data["influencers"].append({
            "name": f"Influencer {i}",
            "acceptability": "Neutral",
            "note": f"Note {i}"
        })
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("8-10" in err and "Influencers" in err for err in errors)


@pytest.mark.validation
def test_validate_data_zero_players(valid_data):
    """Should fail when players list is empty"""
    valid_data["players"] = []
    errors = validate_data(valid_data)
    assert len(errors) > 0
    assert any("Players" in err and "8-10" in err for err in errors)


# ============================================================================
# TESTS: Acceptability Values
# ============================================================================

@pytest.mark.validation
def test_validate_stakeholder_invalid_acceptability():
    """Should fail when acceptability value is invalid"""
    stakeholder = {
        "name": "Valid Name",
        "acceptability": "InvalidValue",
        "note": "Valid note"
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert len(errors) > 0
    assert any("acceptability" in err.lower() for err in errors)


@pytest.mark.validation
def test_validate_stakeholder_acceptability_case_sensitive():
    """Should fail when acceptability value has wrong case"""
    stakeholder = {
        "name": "Valid Name",
        "acceptability": "favorable",  # lowercase instead of Favorable
        "note": "Valid note"
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert len(errors) > 0


@pytest.mark.validation
def test_validate_all_acceptability_values():
    """Should accept all valid acceptability values"""
    valid_values = list(ACCEPTABILITY_CONFIG.keys())

    for value in valid_values:
        stakeholder = {
            "name": "Valid Name",
            "acceptability": value,
            "note": "Valid note"
        }
        errors = validate_stakeholder(stakeholder, "Test")
        assert errors == [], f"Valid acceptability '{value}' should not produce errors"


# ============================================================================
# TESTS: Missing Stakeholder Fields
# ============================================================================

@pytest.mark.validation
def test_validate_stakeholder_missing_name():
    """Should fail when stakeholder name is missing"""
    stakeholder = {
        "acceptability": "Favorable",
        "note": "Valid note"
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert len(errors) > 0
    assert any("name" in err.lower() for err in errors)


@pytest.mark.validation
def test_validate_stakeholder_missing_acceptability():
    """Should fail when stakeholder acceptability is missing"""
    stakeholder = {
        "name": "Valid Name",
        "note": "Valid note"
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert len(errors) > 0
    assert any("acceptability" in err.lower() for err in errors)


@pytest.mark.validation
def test_validate_stakeholder_missing_note():
    """Should fail when stakeholder note is missing"""
    stakeholder = {
        "name": "Valid Name",
        "acceptability": "Favorable"
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert len(errors) > 0
    assert any("note" in err.lower() for err in errors)


# ============================================================================
# TESTS: Edge Cases
# ============================================================================

@pytest.mark.validation
def test_validate_data_project_name_max_length(valid_data):
    """Should accept project_name at exactly 100 characters"""
    valid_data["project_name"] = "A" * 100
    errors = validate_data(valid_data)
    assert errors == []


@pytest.mark.validation
def test_validate_data_executive_context_max_length(valid_data):
    """Should accept executive_context at exactly 500 characters"""
    valid_data["executive_context"] = "A" * 500
    errors = validate_data(valid_data)
    assert errors == []


@pytest.mark.validation
def test_validate_stakeholder_name_max_length():
    """Should accept stakeholder name at exactly 60 characters"""
    stakeholder = {
        "name": "A" * 60,
        "acceptability": "Favorable",
        "note": "Valid note"
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert errors == []


@pytest.mark.validation
def test_validate_stakeholder_note_max_length():
    """Should accept stakeholder note at exactly 250 characters"""
    stakeholder = {
        "name": "Valid Name",
        "acceptability": "Favorable",
        "note": "A" * 250
    }
    errors = validate_stakeholder(stakeholder, "Test")
    assert errors == []


@pytest.mark.validation
def test_validate_data_with_unicode_characters(valid_data):
    """Should handle unicode characters in text fields"""
    valid_data["project_name"] = "Test Project 中文 العربية"
    valid_data["executive_context"] = "Context with émojis 🚀 and spëcial çharacters"
    valid_data["players"][0]["name"] = "Player with 日本語"
    valid_data["players"][0]["note"] = "Note with Ñoño and café"

    errors = validate_data(valid_data)
    assert errors == []


@pytest.mark.validation
def test_validate_data_with_special_characters(valid_data):
    """Should handle special characters and punctuation"""
    valid_data["project_name"] = "Test: Project (2024) - Version 1.0"
    valid_data["executive_context"] = "Context with special chars: @#$%^&*()_+-=[]{}|;:',.<>?/"
    valid_data["players"][0]["name"] = "Company & Partners, Ltd."
    valid_data["players"][0]["note"] = "Note with quotes \"double\" and 'single'"

    errors = validate_data(valid_data)
    assert errors == []


@pytest.mark.validation
def test_validate_data_multiple_errors(valid_data):
    """Should return multiple errors when multiple validations fail"""
    # Introduce multiple errors
    valid_data["project_name"] = ""  # Empty
    valid_data["executive_context"] = "A" * 501  # Too long
    valid_data["players"] = valid_data["players"][:5]  # Too few
    valid_data["influencers"][0]["acceptability"] = "BadValue"  # Invalid

    errors = validate_data(valid_data)
    assert len(errors) >= 4, "Should report multiple validation errors"
