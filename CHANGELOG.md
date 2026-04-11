# Changelog

All notable changes to Galyarder HQ will be documented in this file.

## [1.0.0] - 2026-04-11

![Galyarder HQ](doc/assets/G-HQ.jpeg)

### Initial Release

Galyarder HQ — the control plane for AI-native companies.

**Core Features:**
- Multi-company management with complete data isolation
- Agent orchestration with org charts and reporting lines
- Heartbeat-based autonomous execution (24/7)
- Cost tracking and budget enforcement per agent
- Full audit trail — every tool call, every decision logged
- Governance controls — approval gates, config versioning, rollback
- Real-time activity feed and execution monitoring
- Mobile-ready interface
- Embedded PGlite for zero-setup local development

**Supported Adapters:**
- Claude Code (`claude_local`)
- Codex (`codex_local`)
- Cursor (`cursor`)
- Gemini (`gemini_local`)
- OpenCode (`opencode_local`)
- HTTP (`http`) — any agent via REST
- External plugins via `~/.galyarder/adapter-plugins.json`

**Framework Integration:**
- Works with [Galyarder Framework](https://github.com/galyarderlabs/galyarder-framework) — 35 agents, 132 skills
