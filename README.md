<p align="center">
  <img src="framework/public/logo.png" width="200" alt="Galyarder Framework Logo">
</p>

# GALYARDER FRAMEWORK

**Digital Company Operating System for Solo Founders**

Galyarder Framework is a complete AI workforce platform that transforms coding assistants into a structured, autonomous company. It combines 35 specialized agents and 132 production-ready skills with an optional visual Dashboard for orchestration and monitoring.

Built for the **1-Man Army** - one founder with the leverage of an entire company.

## What is Galyarder Framework?

Galyarder Framework is a unified platform that provides everything you need to run an AI-powered company:

**Agent Workforce**
- 35 specialized agents across all departments (Engineering, Product, Growth, Security, Legal, Operations)
- Clear organizational hierarchy with CEO orchestrator
- Agents communicate and delegate work autonomously

**Skills Library**
- 132 production-ready skills covering the full product lifecycle
- From fundraising and design to implementation, security, and marketing
- Battle-tested workflows: TDD, subagent-driven development, systematic debugging

**Visual Dashboard** (Optional)
- Web-based control plane for managing multiple AI companies
- Real-time monitoring of agent activity and task execution
- Cost tracking, budget enforcement, and autonomous execution
- Multi-company support with complete data isolation

## How It Works

When you start working with Galyarder Framework, it doesn't immediately jump into writing code. Instead, it asks what you're really trying to build.

After understanding your goals, it shows you a design specification in digestible chunks. Once you approve, it creates an implementation plan clear enough for any developer to follow, emphasizing TDD, YAGNI, and DRY principles.

Then it launches **subagent-driven development** - routing tasks through specialized agents while maintaining review and orchestration. Claude can work autonomously for hours without deviating from the plan.

Finally, it shifts into **Marketing Mode**, executing SEO, conversion optimization, and video generation to ensure your product achieves market fit.

The workflow stays consistent across platforms (Claude Code, Cursor, Gemini, Codex), while runtime mechanics adapt to each host's capabilities.

## Two Deployment Modes

### Mode 1: Standalone (Chat-Based)

Install Framework in your AI coding assistant and work through conversation.

**How it works:**
- Chat with galyarder-specialist (CEO agent)
- Agents execute through conversation
- Optional integrations: Linear (tasks), Obsidian (docs)
- No server required

**Installation:**

Claude Code / Copilot CLI:
```bash
/plugin marketplace add galyarderlabs/galyarder-framework
/plugin install galyarder-framework@galyarderlabs-marketplace
```

Cursor:
```bash
/add-plugin galyarder-framework
```

Gemini:
```bash
gemini extensions install https://github.com/galyarderlabs/galyarder-framework
```

Codex:
```
Fetch and follow instructions from https://raw.githubusercontent.com/galyarderlabs/galyarder-framework/refs/heads/main/.codex/INSTALL.md
```

**Best for:** Individual developers who want AI assistance in their existing workflow.

### Mode 2: With Dashboard (Web-Based)

Run the complete platform with visual management and autonomous execution.

**How it works:**
- Web UI at http://localhost:3100
- Create multiple AI companies
- Hire agents from Framework library
- Assign tasks and monitor execution
- Agents work 24/7 via heartbeat system
- Database-backed persistence (PostgreSQL/PGlite)

**Installation:**

```bash
# Install pnpm
npm install -g pnpm

# Clone and install
git clone https://github.com/galyarderlabs/galyarder-framework.git
cd galyarder-framework
pnpm install

# Start Dashboard
pnpm dev

# Open http://localhost:3100
```

**Dashboard Features:**
- Multi-company management with data isolation
- Visual org charts showing agent hierarchy
- Task assignment and execution tracking
- Token usage monitoring and budget limits
- Autonomous execution with configurable intervals
- Activity logging for all mutations
- Mobile-ready interface

**Best for:** Managing multiple AI companies, running autonomous operations, or team collaboration.

## The Agent Workforce

Galyarder Framework provides 35 specialized agents organized by department:

**Executive**
- galyarder-specialist (CEO/Orchestrator)

**Founder Office**
- fundraising-operator (Capital & investor relations)

**Product**
- product-manager (Linear tickets, ROI prioritization)
- planner (Requirements & roadmap)
- analytics-architect (Tracking & KPIs)

**Engineering**
- super-architect (System design, Vertical Slice planning)
- interface-designer (Module interfaces, API design)
- elite-developer (Implementation, TDD, debugging)
- vercel-react-expert (React/Next.js optimization)
- architect, build-error-resolver, code-reviewer, tdd-guide, refactor-cleaner

**Design**
- ui-ux-designer (UI generation via Stitch, design systems)
- experimentation-engineer (A/B testing, statistical analysis)

**Security**
- security-guardian (Zero-trust audits, IDOR/SSRF remediation)
- perseus (Offensive security, red teaming, pentesting)
- cyber-intel (Threat intelligence, data leak monitoring)
- security-reviewer

**Growth & Marketing**
- growth-strategist (SEO, high-signal copywriting)
- conversion-engineer (Onboarding CRO, paywall optimization)
- growth-engineer (Engineering-as-marketing, referral loops)
- retention-specialist (LTV, CRM, psychological onboarding)
- social-strategist (Social media, distribution)
- remotion-engineer (Programmatic video generation)

**Operations**
- devops-engineer (CI/CD, Docker, zero-downtime deployment)
- release-manager (Versioning, changelogs, launch orchestration)
- qa-automation-engineer (E2E testing via BrowserOS)
- e2e-runner

**Legal & Finance**
- legal-counsel (TOS/Privacy, GDPR, AI governance)
- finops-manager (Cloud cost optimization, pricing strategy)
- revenue-architect (Monetization strategy)

**Knowledge Management**
- obsidian-architect (Documentation, Canvas mapping, technical KB)
- doc-updater

**Support**
- support-lead (User education, FAQ automation, troubleshooting)

See [framework/docs/ORG_CHART.md](framework/docs/ORG_CHART.md) for complete organizational structure.

## Skills Library (132 Skills)

**Design & Planning**
- 50+ elite design specifications from industry leaders (Vercel, Stripe, Linear)
- brainstorming, writing-plans, executing-plans
- prd-to-plan, prd-to-issues, write-a-prd
- ubiquitous-language

**Engineering & Testing**
- test-driven-development (RED-GREEN-REFACTOR)
- systematic-debugging (4-phase root cause analysis)
- subagent-driven-development
- verification-before-completion

**Security & Compliance**
- executing-red-team-exercise
- monitoring-darkweb-sources
- tracking-threat-actor-infrastructure
- testing-for-xss-vulnerabilities-with-burpsuite
- legal-tos-privacy, gdpr-compliance
- iso-42001-ai-governance

**Business & Finance**
- founder-context, pitch-deck, investor-research
- fundraising-email, data-room, board-update
- accelerator-application, market-research
- saas-finops-optimization
- finance-based-pricing-advisor
- lead-scoring, founder-thought-leadership

**Growth & Marketing**
- seo-audit, schema-markup
- onboarding-cro, marketing-psychology
- copywriting, viral-referral-loops
- remotion-best-practices, video-generation
- email-sequence

**Product Management**
- linear-ticket-management
- analytics tracking and KPI definition

**Documentation**
- obsidian-cli, json-canvas
- obsidian-bases, obsidian-markdown
- defuddle

**Meta**
- writing-skills
- using-galyarder-framework

## Commands

Framework provides shorthand commands for rapid execution:

- **/brainstorm** - Socratic design refinement
- **/plan** - Implementation planning with vertical slices
- **/tdd** - Test-driven development session
- **/review** - Principal-level code review
- **/cybersecurity** - Offensive security audit
- **/analytics** - Tracking schema design
- **/finops** - Cloud cost audit
- **/legal** - TOS/Privacy generation
- **/release** - Version and launch management
- **/build-fix** - Fix build and type errors
- **/triage** - Bug diagnosis and reproduction
- **/marketing** - Copy and growth optimization
- **/video** - Programmatic video generation
- **/deploy** - Infrastructure automation
- **/seo** - SEO audit and schema injection
- **/cro** - Onboarding and paywall optimization
- **/docs** - Documentation updates
- **/e2e** - End-to-end test generation
- **/clean** - Dead code removal and refactoring

Command invocation varies by platform. Some expose native slash commands, others use config-based mapping.

## Architecture

```
galyarder-framework/
├── framework/                    # Agent workforce & skills
│   ├── agents/                   # 35 agent definitions (.md)
│   ├── skills/                   # 132 skill implementations
│   ├── design/                   # Elite design specs
│   └── docs/                     # Framework documentation
├── packages/
│   ├── adapters/
│   │   └── galyarder-framework/  # Framework adapter for Dashboard
│   ├── db/                       # Database schema (Drizzle ORM)
│   ├── shared/                   # Shared types and validators
│   └── adapter-utils/            # Adapter utilities
├── server/                       # Dashboard API (Express + TypeScript)
├── ui/                           # Dashboard UI (React + Vite)
├── cli/                          # Dashboard CLI
└── doc/                          # Dashboard documentation
```

**Technology Stack:**
- Backend: Express.js, Drizzle ORM, PostgreSQL/PGlite
- Frontend: React, Vite, TanStack Query, Tailwind CSS, Radix UI
- Adapters: Plugin system with dynamic loading
- Database: PostgreSQL (production), PGlite (development)

## Development

```bash
# Install dependencies
pnpm install

# Start Dashboard in dev mode
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

See [doc/DEVELOPING.md](doc/DEVELOPING.md) for complete development guide.

## Recommended MCP Stack

For maximum efficiency, we recommend these MCP servers:

- **[RTK (Rust Token Killer)](https://github.com/rtk-ai/rtk)** - Shell command proxy (60-90% token savings)
- **[Linear](https://linear.app/docs/mcp)** - Project management and issue tracking
- **[Stitch](https://stitch.withgoogle.com/docs/mcp/setup)** - Rapid UI generation
- **[BrowserOS](https://docs.browseros.com/features/use-with-claude-code)** - Automated browser testing
- **[Context7](https://context7.com/docs/resources/all-clients)** - Up-to-date documentation
- **[Sequential Thinking](https://mcpservers.org/servers/modelcontextprotocol/sequentialthinking)** - Complex problem decomposition
- **[Neon](https://github.com/neondatabase/mcp-server-neon) / [Supabase](https://supabase.com/docs/guides/getting-started/mcp)** - Serverless database management
- **[PostHog](https://posthog.com/docs/model-context-protocol)** - Product analytics

## Philosophy

- **Test-Driven Development** - Write tests first, always
- **Context Economy** - Use RTK proxy for all terminal operations
- **Math Over Magic** - Base decisions on data, ROI, and psychological leverage
- **Code to Market** - Code is a liability until it achieves market fit

## Contributing

We welcome contributions to both Framework and Dashboard.

**Framework contributions:**
1. Fork the repository
2. Create a branch for your skill or agent
3. Follow `framework/skills/writing-skills/SKILL.md` for skill development
4. Submit a PR

**Dashboard contributions:**
See [CONTRIBUTING.md](CONTRIBUTING.md) and [AGENTS.md](AGENTS.md) for guidelines.

## Documentation

- [TESTING.md](TESTING.md) - Integration testing guide
- [doc/DEVELOPING.md](doc/DEVELOPING.md) - Development guide
- [doc/DATABASE.md](doc/DATABASE.md) - Database schema
- [doc/PRODUCT.md](doc/PRODUCT.md) - Product overview
- [framework/docs/ORG_CHART.md](framework/docs/ORG_CHART.md) - Organization structure
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [AGENTS.md](AGENTS.md) - Agent development guide

## Updating

**Standalone Framework:**
```bash
# Claude Code / Copilot CLI
/plugin update galyarder-framework@galyarderlabs-marketplace

# Gemini CLI
gemini extensions update galyarder-framework
```

**Dashboard + Framework:**
```bash
git pull origin main
pnpm install
pnpm dev
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- Issues: https://github.com/galyarderlabs/galyarder-framework/issues
- Marketplace: https://github.com/galyarderlabs/galyarder-framework

## Sponsorship

If Galyarder Framework has helped you build something that makes money, consider [sponsoring this work](https://github.com/sponsors/galyarderlabs).

Thanks!  
— Galyarder Labs
