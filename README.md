<p align="center">
  <img src="doc/assets/G-HQ.jpeg" width="600" alt="Galyarder HQ">
</p>

<h1 align="center">Galyarder HQ</h1>

<p align="center">The control plane for AI-native companies.</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="https://github.com/galyarderlabs/galyarder-hq/stargazers"><img src="https://img.shields.io/github/stars/galyarderlabs/galyarder-hq" alt="Stars"></a>
  <a href="https://github.com/galyarderlabs/galyarder-framework"><img src="https://img.shields.io/badge/framework-galyarder-black" alt="Framework"></a>
</p>

<p align="center">
  Open source · Self-hosted · No account required
</p>

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

**Mobile ready**  
Monitor and manage your autonomous businesses from anywhere. The UI is fully responsive.

**Plugin system**  
Extend HQ with custom plugins — add knowledge bases, custom tracing, queues, or any integration you need.

---

## Problems it solves

| Without Galyarder HQ | With Galyarder HQ |
|---|---|
| 20 Claude Code tabs open, no idea what each one is doing. On reboot you lose everything. | Tasks are ticket-based, conversations are threaded, sessions persist across reboots. |
| You manually gather context from several places to remind your agent what you're actually building. | Context flows from the task up through the project and company goals — agents always know what to do and why. |
| Runaway loops waste hundreds of dollars before you even notice. | Cost tracking surfaces token budgets and throttles agents when they're out. |
| Recurring jobs (reports, support, social) have to be manually kicked off every time. | Heartbeats handle regular work on a schedule. Management supervises. |
| Agent configs are scattered across folders. No coordination, no visibility. | Org charts, ticketing, delegation, and governance out of the box. |

---

## What it's not

**Not a chatbot.** Agents have jobs, not chat windows.

**Not an agent framework.** We don't tell you how to build agents. We tell you how to run a company made of them.

**Not a workflow builder.** No drag-and-drop pipelines. Galyarder HQ models companies — with org charts, goals, budgets, and governance.

**Not a single-agent tool.** This is for teams. If you have one agent, you probably don't need Galyarder HQ. If you have twenty — you definitely do.

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

Install Framework in Claude Code, Cursor, Gemini, or Codex. Connect it to HQ. Now your agents have a company to work in — with org charts, budgets, and governance.

---

## Supported agents

| Agent | Type |
|---|---|
| Claude Code | Local |
| Codex | Local |
| Cursor | Local |
| Gemini | Local |
| OpenCode | Local |
| HTTP | Any agent via REST |

If it can receive a heartbeat, it's hired.

---

## FAQ

**What does a typical setup look like?**  
Locally, a single Node.js process manages an embedded Postgres and local file storage. For production, point it at your own Postgres and deploy however you like. Configure companies, agents, and goals — the agents take care of the rest.

**Can I run multiple companies?**  
Yes. A single deployment can run an unlimited number of companies with complete data isolation.

**How is Galyarder HQ different from just using Claude Code or Codex directly?**  
Galyarder HQ uses those agents. It orchestrates them into a company — with org charts, budgets, goals, governance, and accountability. The agents do the work. HQ runs the company.

**Do agents run continuously?**  
By default, agents run on scheduled heartbeats and event-based triggers (task assignment, @-mentions). You can also hook in continuous agents. You bring your agent and HQ coordinates.

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

---

<p align="center">
  Open source. Self-hosted. No account required.<br>
  Built for people who want to run companies, not babysit agents.
</p>
