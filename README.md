<p align="center">
  <img src="doc/assets/G-HQ.jpeg" width="600" alt="Galyarder HQ">
</p>

<h1 align="center">Galyarder HQ</h1>

<p align="center">
  <strong>Strategic Command Interface for AI-native companies.</strong><br>
  The Command Layer of Galyarder Labs.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="https://github.com/galyarderlabs/galyarder-hq/stargazers"><img src="https://img.shields.io/github/stars/galyarderlabs/galyarder-hq" alt="Stars"></a>
  <a href="https://github.com/galyarderlabs/galyarder-framework"><img src="https://img.shields.io/badge/framework-galyarder-black" alt="Framework"></a>
</p>

<p align="center">Open source · Self-hosted · Operator-controlled</p>

---

**Galyarder HQ** gives autonomous work a command structure.

It is a self-hosted Strategic Command Interface where operators define agentic companies, departments, reporting lines, goals, budgets, approval gates, rollback controls, and multi-company boundaries — then coordinate agents inside that structure.

HQ exists because AI-native company systems without command architecture become babysitting. Real leverage requires structure, context, governance, cost discipline, and a record of what happened.

## What It Does

- **Company structure** — companies, departments, roles, reporting lines, and ownership boundaries.
- **Goal assignment** — tasks flow through a hierarchy instead of disappearing into loose chats.
- **Agent orchestration** — Claude Code, Codex, Cursor, Gemini, OpenCode, HTTP agents, and adapters can operate inside a governed company model.
- **Budget discipline** — per-agent budgets, token/cost tracking, and hard stops.
- **Approval gates** — governed actions require operator review where stakes demand it.
- **Rollback and versioning** — configuration changes can be inspected and reversed.
- **Portfolio isolation** — multiple companies can run from one deployment with clean data boundaries.

## How It Works

You define the organization. HQ gives every agent a place in that structure.

Agents receive heartbeats or events, check assigned work, execute through their adapter, and report back into the command record. The operator reviews what matters. The system enforces budgets, gates, and boundaries.

The result is not a chat interface. It is a company control plane for AI-native execution.

## Quick Start

```bash
git clone https://github.com/galyarderlabs/galyarder-hq.git
cd galyarder-hq
pnpm install
pnpm dev
```

Open `http://localhost:3100`.

Development uses embedded PGlite when `DATABASE_URL` is unset.

Requirements: Node.js 20+, pnpm 9+.

## Galyarder Ecosystem

Galyarder HQ pairs with **Galyarder Framework**, the Intelligence Layer for Autonomous Goal Integration that supplies agents, skills, SOPs, planning, review, and verification workflows.

HQ provides the command structure those agents work inside.

## Supported Agents

Claude Code · Codex · Cursor · Gemini · OpenCode · HTTP agents · external adapter plugins

If an agent can receive work through an adapter or heartbeat, HQ can coordinate it inside the company structure.

## Development

```bash
pnpm dev           # Start dev server (API + UI)
pnpm build         # Build everything
pnpm typecheck     # Type check
pnpm test:run      # Run tests
pnpm db:generate   # Generate migrations
pnpm db:migrate    # Apply migrations
```

Full guide: [`doc/DEVELOPING.md`](doc/DEVELOPING.md)

## Documentation

- [`doc/GOAL.md`](doc/GOAL.md)
- [`doc/PRODUCT.md`](doc/PRODUCT.md)
- [`doc/SPEC-implementation.md`](doc/SPEC-implementation.md)
- [`doc/DEVELOPING.md`](doc/DEVELOPING.md)
- [`doc/DATABASE.md`](doc/DATABASE.md)
- [`AGENTS.md`](AGENTS.md)

## License

MIT © 2026 Galyarder Labs

---

<p align="center">
  Structure, assign, govern, and execute.<br>
  Built for operators who think in systems.
</p>
