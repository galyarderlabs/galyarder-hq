<p align="center">
  <img src="framework/public/logo.png" width="200" alt="Galyarder Logo">
</p>

# GALYARDER

**Digital Company Operating System for Solo Founders**

Galyarder transforms AI coding assistants into a fully structured, autonomous workforce. It provides **35 specialized agents** and **132 execution-grade skills** across the full product lifecycle — from fundraising and product strategy to engineering, security, growth, and legal compliance.

**Two Ways to Use:**

1. **Standalone Framework** - Install in Claude Code, Cursor, or Gemini. Chat with your digital company.
2. **With Dashboard** - Visual web platform for managing multiple companies, agents, and tasks with real-time monitoring.

Built for the **1-Man Army** - one founder with the leverage of an entire company.

---

## How it works

It starts from the moment you fire up your coding agent. As soon as it sees that you're building something, it *doesn't* just jump into trying to write code. Instead, it steps back and asks you what you're really trying to do. 

Once it's teased a spec out of the conversation, it shows it to you in chunks short enough to actually read and digest. 

After you've signed off on the design, your agent puts together an implementation plan that's clear enough for an enthusiastic junior engineer with poor taste, no judgement, no project context, and an aversion to testing to follow. It emphasizes true red/green TDD, YAGNI (You Aren't Gonna Need It), and DRY. 

Next up, once you say "go", it launches a *subagent-driven-development* process, routing each engineering task through the host's available delegation model while preserving the same review and orchestration workflow. On some hosts this appears as named agent dispatch; on others it is implemented through native subagents using Galyarder role prompts. It's not uncommon for Claude to be able to work autonomously for a couple hours at a time without deviating from the plan you put together.

Finally, Galyarder Framework shifts into **Marketing Mode**, triggering skills for SEO, CRO, and Remotion (Video) to ensure what you built actually achieves market fit.

There's a bunch more to it, but that's the core of the system. The workflow philosophy stays consistent across hosts, while runtime mechanics such as installation, command invocation, and subagent dispatch vary by platform.

---

## 🚀 Quick Start

### Option 1: Standalone Framework (Chat-Based)

Install Framework directly in your AI coding assistant:

#### Claude Code / Copilot CLI

```bash
/plugin marketplace add galyarderlabs/galyarder-framework
/plugin install galyarder-framework@galyarderlabs-marketplace
```

#### Cursor

```text
/add-plugin galyarder-framework
```

#### Gemini CLI

```bash
gemini extensions install https://github.com/galyarderlabs/galyarder-framework
```

#### Codex

```
Fetch and follow instructions from https://raw.githubusercontent.com/galyarderlabs/galyarder-framework/refs/heads/main/.codex/INSTALL.md
```

**Full installation guide:** [`framework/README.md`](framework/README.md)

### Option 2: Dashboard + Framework (Web Platform)

Run the complete platform with visual management:

```bash
# 1. Install pnpm (if not installed)
npm install -g pnpm

# 2. Install dependencies
cd /path/to/galyarder-framework
pnpm install

# 3. Start Dashboard
pnpm dev

# 4. Open browser
# http://localhost:3100
```

**Testing guide:** [`TESTING.md`](TESTING.md)

---

## 📦 What's Inside

### 1. Galyarder Framework (`framework/`)

**35 specialized agents** organized by department:

- **Executive:** galyarder-specialist (CEO/Orchestrator)
- **Founder Office:** fundraising-operator (Capital & investor relations)
- **Product:** product-manager, planner (Requirements & roadmap)
- **Engineering:** super-architect, elite-developer, qa-automation-engineer (Implementation & quality)
- **Security:** security-guardian, perseus, cyber-intel (Threat analysis & pentesting)
- **Growth:** growth-strategist, conversion-engineer, retention-specialist (Acquisition & retention)
- **Operations:** devops-engineer, release-manager (Infrastructure & deployment)
- **Legal/Finance:** legal-counsel, finops-manager (Compliance & cost optimization)
- **Knowledge:** obsidian-architect (Documentation & memory)

**132 production-ready skills** across:
- Design & Planning
- Engineering & Testing
- Security & Compliance
- Growth & Marketing
- Operations & Infrastructure
- Documentation & Knowledge Management

See [`framework/README.md`](framework/README.md) for full agent list and capabilities.

### 2. Galyarder Dashboard (root)

**Visual control plane** for managing AI companies:

- **Multi-company support** - Manage multiple AI companies from one interface
- **Org charts** - Visual hierarchy of agents and departments
- **Task management** - Create, assign, and track issues
- **Cost tracking** - Monitor token usage and enforce budgets
- **Heartbeat execution** - Autonomous 24/7 agent execution
- **Real-time monitoring** - Live updates on agent activity
- **Mobile-ready** - Manage your AI workforce from anywhere

**Architecture:**
- `server/` - Express REST API + orchestration services
- `ui/` - React + Vite board UI
- `packages/db/` - Drizzle schema, migrations, DB clients
- `packages/shared/` - Shared types, constants, validators
- `packages/adapters/` - Agent adapter implementations

See [`doc/DEVELOPING.md`](doc/DEVELOPING.md) for development guide.

### 3. Framework Adapter (`packages/adapters/galyarder-framework/`)

**Integration layer** connecting Framework to Dashboard:

- Loads 35 agents from `framework/agents/`
- Executes 132 skills from `framework/skills/`
- Routes tasks to appropriate agents
- Reports execution status back to Dashboard
- Enables visual management of Framework workforce

---

## 🎯 Use Cases

### Standalone Framework
- Chat-based development with structured workflow
- Subagent-driven development (SDD)
- Full lifecycle: design → implementation → marketing
- Works in your existing AI coding assistant
- Tasks tracked in Linear (optional)
- Reports in Obsidian (optional)

### Dashboard + Framework
- Manage multiple AI companies from one control plane
- Visual org charts and task management
- Cost tracking and budget enforcement
- Autonomous 24/7 execution with heartbeats
- Mobile-ready monitoring
- Database-backed persistence
- Multi-company data isolation

---

## 🏗️ Repository Structure

```
galyarder-framework/              # Root = Dashboard
├── framework/                    # Framework (35 agents + 132 skills)
│   ├── agents/                   # Agent definitions (.md)
│   ├── skills/                   # Skill implementations (132 dirs)
│   ├── design/                   # Design specs
│   └── docs/                     # Framework documentation
├── packages/
│   ├── adapters/
│   │   └── galyarder-framework/  # Framework → Dashboard adapter
│   ├── db/                       # Database schema
│   ├── shared/                   # Shared types
│   └── adapter-utils/            # Adapter utilities
├── server/                       # Dashboard API
├── ui/                           # Dashboard UI
├── doc/                          # Dashboard documentation
└── cli/                          # Dashboard CLI
```

---

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start Dashboard (dev mode)
pnpm dev

# Build everything
pnpm build

# Type checking
pnpm typecheck

# Run tests
pnpm test:run

# Database migrations
pnpm db:generate
pnpm db:migrate
```

See [`doc/DEVELOPING.md`](doc/DEVELOPING.md) for full development guide.

---

## 📖 Documentation

### Framework
- [`framework/README.md`](framework/README.md) - Installation & usage
- [`framework/docs/ORG_CHART.md`](framework/docs/ORG_CHART.md) - Organization structure
- [`framework/docs/INTEGRATION.md`](framework/docs/INTEGRATION.md) - Integration guide
- [`framework/docs/QUICK_START.md`](framework/docs/QUICK_START.md) - Quick start guide

### Dashboard
- [`doc/DEVELOPING.md`](doc/DEVELOPING.md) - Development guide
- [`doc/DATABASE.md`](doc/DATABASE.md) - Database schema
- [`doc/PRODUCT.md`](doc/PRODUCT.md) - Product overview
- [`TESTING.md`](TESTING.md) - Integration testing

### Contributing
- [`CONTRIBUTING.md`](CONTRIBUTING.md) - Contribution guidelines
- [`AGENTS.md`](AGENTS.md) - Agent development guide

---

## 🔧 Recommended MCP Stack

For peak "1-Man Army" efficiency, we recommend:

- **[RTK (Rust Token Killer)](https://github.com/rtk-ai/rtk)** - Mandatory proxy for shell commands (60-90% token savings)
- **[Linear](https://linear.app/docs/mcp)** - Real-time project management
- **[Stitch](https://stitch.withgoogle.com/docs/mcp/setup)** - Rapid UI generation
- **[BrowserOS](https://docs.browseros.com/features/use-with-claude-code)** - Automated browser testing
- **[Context7](https://context7.com/docs/resources/all-clients)** - Up-to-date documentation
- **[Sequential Thinking](https://mcpservers.org/servers/modelcontextprotocol/sequentialthinking)** - Complex problem decomposition
- **[Neon](https://github.com/neondatabase/mcp-server-neon) / [Supabase](https://supabase.com/docs/guides/getting-started/mcp)** - Serverless database management
- **[PostHog](https://posthog.com/docs/model-context-protocol)** - Product analytics

---

## 🤝 Contributing

We welcome contributions! See [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © 2026 Galyarder Labs

---

## 🌟 Sponsorship

If Galyarder has helped you build something that makes money, consider [sponsoring this work](https://github.com/sponsors/galyarderlabs).

Thanks!  
— Galyarder Labs

---

<p align="center">
  <strong>Open source. Self-hosted. No account required.</strong>
</p>
