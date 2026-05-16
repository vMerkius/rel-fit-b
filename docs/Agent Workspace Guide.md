---
title: Agent Workspace Guide
tags:
  - agents
  - workflow
  - docs
---

# Agent Workspace Guide

This note is the canonical entry point for agent work in this repository.

## Purpose

Use this note first to understand how to work safely in the workspace, where durable guidance lives, and which project notes to read next.

## Operating Rules

1. Treat `docs/` as the home for durable agent guidance.
2. Keep `AGENTS.md` short and use it only as a pointer to this note.
3. Prefer small, surgical changes that map directly to the request.
4. Update documentation when the working rules or project shape changes.

## Required Skills

1. Always use the `karpathy-guidelines` skill for work in this repository.
2. Use the `obsidian-markdown` skill whenever creating or editing notes in `docs/` or when Obsidian-specific markdown is helpful.

## Working Style

1. Read the relevant note in `docs/` before making broad changes.
2. Match the current code and docs structure instead of inventing extra layers too early.
3. Prefer documenting decisions and setup steps close to where future agents will look for them.

## Documentation Map

- [[architecture/README|Architecture]]
- [[setup/README|Setup]]

## Project Snapshot

The current codebase is a minimal NestJS backend starter with source files in `src/` and tests in `test/`.

## When To Extend Docs

Add a new note in `docs/` when:

- a workflow rule should persist across sessions
- setup requires non-obvious steps
- architecture decisions need a durable home
- agents would otherwise have to rediscover the same context
