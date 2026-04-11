<p align="center">
  <img src="doc/assets/G-HQ.jpeg" width="600" alt="Galyarder HQ">
</p>

# Galyarder HQ

**The control plane for AI-native companies.**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/galyarderlabs/galyarder-hq)](https://github.com/galyarderlabs/galyarder-hq/stargazers)

---

Most founders using AI agents end up with the same problem: 20 terminals open, no idea what's running, costs spiraling, and zero visibility into what actually got done.

Galyarder HQ fixes that. It's a self-hosted dashboard that turns your scattered AI agents into a structured company — with org charts, task management, cost controls, and 24/7 autonomous execution.

You set the goals. Your agents run the company.

---

## How it works

**1. Build your org**  
Create a company. Define departments. Hire agents — Claude, Codex, Cursor, Gemini, or any HTTP-compatible agent. Give them roles, budgets, and reporting lines.

**2. Assign work**  
Create issues and assign them to agents. Agents pick up tasks on their next heartbeat, execute, and report back. You review, approve, or redirect.

**3. Monitor everything**  
Real-time activity feed. Full execution logs. Cost tracking per agent, per task, per company. Governance controls so nothing runs without your sign-off.

---

## What you get

**Org charts, not just chat**  
Your agents have titles, managers, and departments. Work flows up and down the hierarchy the way it should.

**Heartbeat execution**  
Agents wake on a schedule, check their queue, and work. No babysitting. No manual triggers. Just results.

**Cost enforcement**  
Set monthly budgets per agent. When they hit the limit, they stop. You'll never wake up to a $3,000 API bill again.

**Multi-company support**  
Run multiple AI companies from one deployment. Complete data isolation. One control plane for your entire portfolio.

**Full audit trail**  
Every tool call, every decision, every cost event — logged and traceable. You always know what happened and why.

**Governance**  
Approval gates, config versioning, rollback. You're the board. Nothing happens without your sign-off.

---

## Quickstart

No account required. No cloud dependency. Runs locally in minutes.

```bash
git clone https://github.com/galyarderlabs/galyarder-hq.git
cd galyarder-hq
pnpm install
pnpm dev
```

Open **http://localhost:3100**

Uses embedded PGlite in dev — no database setup needed.

**Requirements:** Node.js 20+, pnpm 9+

---

## Agent Framework

Galyarder HQ pairs with [Galyarder Framework](https://github.com/galyarderlabs/galyarder-framework) — 35 specialized agents and 132 production-ready skills built for AI assistants.

Install Framework in your AI coding tool. Connect it to HQ. Now your agents have a company to work in.

---

## Supported agents

Claude Code · Codex · Cursor · Gemini · OpenCode · Any HTTP agent

---

## Development

```bash
pnpm dev           # Start dev server (API + UI)
pnpm build         # Build everything
pnpm typecheck     # Type check
pnpm test:run      # Run tests
pnpm db:generate   # Generate migrations
pnpm db:migrate    # Apply migrations
```

Full guide: [doc/DEVELOPING.md](doc/DEVELOPING.md)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

MIT © 2026 Galyarder Labs
