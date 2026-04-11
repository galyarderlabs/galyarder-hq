<p align="center">
  <img src="doc/assets/header.png" width="600" alt="Galyarder HQ">
</p>

# GALYARDER HQ

**Digital Company Control Plane**

Galyarder HQ is a visual web platform for running AI-native companies. Hire agents, assign tasks, monitor execution, and manage costs — all from one interface.

Designed for the **1-Man Army** — one founder running an entire company with AI agents.

## What is Galyarder HQ?

Galyarder HQ is the operational control plane for AI-native companies:

- **Multi-company management** — run multiple AI companies from one dashboard
- **Agent orchestration** — hire, configure, and monitor agents
- **Task management** — create issues, assign to agents, track execution
- **Cost control** — token usage tracking, budget limits, auto-pause on overspend
- **Autonomous execution** — heartbeat-based 24/7 agent operation
- **Real-time monitoring** — live activity feeds and execution logs
- **Mobile-ready** — manage your AI workforce from anywhere

## Agent Framework

Galyarder HQ connects to [Galyarder Framework](https://github.com/galyarderlabs/galyarder-framework) — 35 specialized agents and 132 production-ready skills for AI coding assistants.

Install Framework in Claude Code, Cursor, Gemini, or Codex. Then connect to HQ for visual management.

## Quick Start

```bash
# Install pnpm
npm install -g pnpm

# Clone and install
git clone https://github.com/galyarderlabs/galyarder-hq.git
cd galyarder-hq
pnpm install

# Start (uses embedded PGlite in dev, no DB setup needed)
pnpm dev

# Open http://localhost:3100
```

## Architecture

```
galyarder-hq/
├── server/          # Express REST API + orchestration
├── ui/              # React + Vite board UI
├── cli/             # CLI for managing HQ
├── packages/
│   ├── db/          # Drizzle ORM + PostgreSQL/PGlite
│   ├── shared/      # Shared types and validators
│   └── adapters/    # Agent adapter implementations
└── doc/             # Documentation
```

**Stack:**
- Backend: Express.js, Drizzle ORM, PostgreSQL / PGlite (embedded dev)
- Frontend: React, Vite, TanStack Query, Tailwind CSS, Radix UI
- Adapters: Plugin system with dynamic loading

## Supported Adapters

- Claude Code (`claude_local`)
- Codex (`codex_local`)
- Cursor (`cursor`)
- Gemini (`gemini_local`)
- OpenCode (`opencode_local`)
- HTTP (`http`) — any agent via REST
- External plugins via `~/.galyarder/adapter-plugins.json`

## Development

```bash
pnpm install       # Install all workspace dependencies
pnpm dev           # Start dev server (http://localhost:3100)
pnpm build         # Build everything
pnpm typecheck     # Type checking
pnpm test:run      # Run tests
pnpm db:generate   # Generate DB migrations
pnpm db:migrate    # Apply migrations
```

Reset local dev database:
```bash
rm -rf data/pglite
pnpm dev
```

See [doc/DEVELOPING.md](doc/DEVELOPING.md) for full development guide.

## Documentation

- [doc/DEVELOPING.md](doc/DEVELOPING.md) — Development guide
- [doc/DATABASE.md](doc/DATABASE.md) — Database schema
- [doc/PRODUCT.md](doc/PRODUCT.md) — Product overview
- [doc/SPEC-implementation.md](doc/SPEC-implementation.md) — V1 build contract
- [AGENTS.md](AGENTS.md) — Contributor guide for AI agents

## License

MIT © 2026 Galyarder Labs

## Support

- Issues: https://github.com/galyarderlabs/galyarder-hq/issues
- Framework: https://github.com/galyarderlabs/galyarder-framework
