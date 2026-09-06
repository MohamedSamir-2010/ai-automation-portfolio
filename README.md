# AI-Powered Lead Qualification System

## Overview

An intelligent lead management system built with n8n that automatically processes incoming leads, analyzes their business requirements using AI, calculates a lead score, and triggers personalized follow-up actions.

---

## The Problem

Businesses often receive leads from multiple sources. Manually reviewing each lead, identifying high-value opportunities, and sending follow-ups can be slow and inconsistent.

---

## The Solution

This workflow automates the complete lead qualification process.

```text
Lead Submission
      ↓
Data Validation
      ↓
Duplicate Check
      ↓
AI Lead Analysis
      ↓
Lead Scoring
      ↓
Lead Classification
      ↓
Database Storage
      ↓
Automated Follow-Up
```

---

## Key Features

### 🤖 AI Lead Analysis

The AI analyzes incoming lead information and extracts:

* Company information
* Business requirements
* Budget
* Timeline
* Automation needs

### 📊 Lead Scoring

Each lead receives a score based on predefined qualification criteria.

### 🔄 Lead Classification

Leads are automatically classified as:

* Hot
* Warm
* Cold

### 🚫 Duplicate Prevention

The workflow checks whether a lead already exists before creating a new database record.

### 📧 Automated Follow-Up

Different follow-up actions are triggered depending on the lead classification.

---

## Tech Stack

* n8n
* OpenAI API
* Supabase
* Gmail API
* Webhooks

---

## Workflow Architecture

![Workflow Overview](./images/workflow-overview.png)

---

## Example Input

```json
{
  "name": "Sarah Mitchell",
  "email": "sarah@example.com",
  "company": "NovaTech Solutions",
  "company_size": "50-100 employees",
  "automation_need": "Automate customer inquiry routing and lead qualification",
  "budget": "$5,000-$10,000",
  "timeline": "Within 30 days"
}
```

---

## Results

The system:

1. Validates the lead information.
2. Checks for duplicates.
3. Uses AI to analyze the lead.
4. Calculates a lead score.
5. Classifies the lead.
6. Stores the result in Supabase.
7. Sends an automated follow-up.

---

## How to Use

1. Import `workflow.json` into n8n.
2. Configure the required credentials.
3. Set up the Supabase database.
4. Configure environment variables.
5. Activate the workflow.

---

## Important Note

All credentials, API keys, and sensitive information have been removed from the exported workflow.
