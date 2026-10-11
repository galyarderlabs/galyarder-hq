# Galyarder HQ — Product Requirements

**Status**: Active
**Scope**: Requirements for Galyarder HQ, the self-hosted control plane that runs a company of AI agents through companies, org structure, issues, heartbeats, budgets, and board governance.

## Problem

Most agent setups stop at chat. A founder runs one agent, then a few more, and the work stays loose: no durable scope, no clear ownership, no review gate, no audit trail. Sessions forget what happened yesterday. Two agents touch the same task with no coordination. Token spend is invisible until the bill arrives. Nobody can answer "what is the company doing right now, and why" without reading raw transcripts.

The underlying problem is that an AI workforce has no company around it. There is no org chart to route work through, no goal hierarchy to keep tasks honest, no budget to bound cost, and no governance to keep a human in the loop where it matters. Task software assumes human assignees and stops short of running agents. Agent frameworks assume a single session and stop short of running a company.

Galyarder HQ supplies that missing layer: a control plane that gives a group of agents structure, continuity, cost discipline, and accountability, without taking over where or how they execute. It is a modified derivative of [paperclip](https://github.com/paperclipai/paperclip) (MIT); the company-scoped model, governance, budgets, portability, and plugin surface are the Galyarder direction.

## Who it is for

- A solo founder or operator running several coding or knowledge agents at once who wants them to work as a coordinated team.
- A small technical team that shares one self-hosted instance and needs a shared view of what the agents are doing and what it costs.
- A builder who already uses Claude Code, Codex, Cursor, Gemini, OpenCode, or a custom agent and wants a place for that agent to report into and receive work from.
- The agent itself, as an API client: agents read tasks, claim them, post comments, and report cost through a defined contract.
- A maintainer adding an adapter, a plugin, or a skill, who needs a clear contract for what a good addition looks like.

## Goals

- Give a group of agents a real company structure, so every unit of work has an owner, a parent, and a reason.
- Keep autonomous work bounded: budgets that stop spending, approval gates on consequential actions, and a complete audit trail.
- Make the state of the company legible at a glance: who is working, on what, at what cost, and what needs a human decision.
- Keep the control plane independent of any single agent runtime, so any agent that can receive a call can be hired.
- Stay self-hosted and local-first, so the same mental model works on one laptop and on a shared deployment.
- Keep the core small and let optional surfaces (chat, knowledge, extra tooling) live in plugins.

## Non-goals

- A hosted Galyarder cloud service. HQ is self-hosted.
- A general chat application. Communication is attached to issues and comments.
- A code review or diff tool. Engineering handoff goes to external tools.
- A complete Jira or GitHub replacement.
- Enterprise RBAC, SSO, or SCIM as a first-class feature.
- Revenue and expense accounting beyond model and token cost as a core feature.
- Automatic self-healing orchestration such as auto-reassign or retry planners.
- Model training or fine-tuning.

## Requirements

Status legend: `[implemented]` (exists in the repo, with the file or path named), `[partial]` (exists but incomplete), `[planned]` (specified, not built), `[not implemented]` (a gap with no code).

### Company and organization

- **R1 — Company as the unit of organization.** A company is a first-order object carrying a goal, employees, an org structure, a budget, and a task hierarchy. `[implemented]` — `packages/db/src/schema/companies.ts`; the company row is referenced by every business table.
- **R2 — Multiple companies with data isolation.** One instance runs multiple companies, and every business record belongs to exactly one company. `[implemented]` — company-scoped foreign keys throughout `packages/db/src/schema/`; `ui/src/pages/Companies.tsx` and the global company selector.
- **R3 — Agents as employees in a strict tree.** Every employee is an agent with a role, a single manager, capabilities, a budget, and a status. `[implemented]` — `packages/db/src/schema/agents.ts` (`reports_to` self-reference, `status`, `budget_monthly_cents`); `ui/src/pages/OrgChart.tsx`.
- **R4 — Adapter independence.** HQ does not mandate a runtime; the minimum contract is "be callable." Built-in adapters cover `process`, `http`, `claude_local`, `codex_local`, `gemini_local`, `opencode_local`, `pi_local`, `cursor`, and `openclaw_gateway`, and external adapters load from a manifest. `[implemented]` — `packages/shared/src/constants.ts`; `packages/adapters/*`; `server/src/services/adapter-plugin-store.ts`.
- **R5 — Goal hierarchy.** Goals are linked to the company mission and can be nested (company, team, agent, task). `[implemented]` — `packages/db/src/schema/goals.ts`; `server/src/routes/goals.ts`; `ui/src/pages/Goals.tsx`, `GoalDetail.tsx`.

### Work management

- **R6 — Issue-centric work with hierarchy.** Work is tracked as issues with a title, description, status, priority, a single assignee, and a parent, so work traces up to the company goal. `[implemented]` — `packages/db/src/schema/issues.ts`; `server/src/routes/issues.ts`.
- **R7 — Atomic checkout.** The transition to `in_progress` requires an atomic checkout so two agents cannot own the same issue. A conflicting claim returns `409`. `[implemented]` — `server/src/services/issues.ts` (`checkout`, transaction with `SELECT FOR UPDATE`); `server/src/routes/issues.ts` returns `409`.
- **R8 — Comments and mentions as the communication model.** Humans and agents communicate through threaded comments on issues, with agent and project mentions that can wake a heartbeat. There is no separate chat subsystem in the core. `[implemented]` — `packages/db/src/schema/issue_comments.ts`; `findMentionedAgents` and mention extraction in `server/src/services/issues.ts` and `packages/shared`.
- **R9 — Issue relations.** Issues should express more than one relationship kind (blocks, blocked_by, related, duplicate). `[partial]` — `packages/db/src/schema/issue_relations.ts` currently types the relation as `"blocks"` only; `server/src/routes/issues.ts` returns `blockedBy` and `blocks` summaries.
- **R10 — Recurring work.** Recurring tasks should exist as first-class routines rather than repeated one-time issues. `[implemented]` — `packages/db/src/schema/routines.ts`; `server/src/routes/routines.ts`; `ui/src/pages/Routines.tsx`, `RoutineDetail.tsx`.
- **R11 — Documents with revision history.** Issues should carry editable, versioned documents (for example a plan or design) with a stable workflow key. `[implemented]` — `packages/db/src/schema/documents.ts`, `document_revisions.ts`, `issue_documents.ts`; `server/src/services/documents.ts`; `ui/src/components/IssueDocumentsSection.tsx`.
- **R12 — Attachments and deliverables.** Non-image files (markdown, JSON, CSV, PDF, HTML) should be attachable and openable from the issue page, and finished work should surface as an output. `[partial]` — `server/src/attachment-types.ts` allows those MIME types by default and `issue_attachments` exists, but comment-level attachment rendering is incomplete and there is no dedicated Deliverables surface; `issue_work_products` is a partial start (`server/src/services/work-products.ts`).

### Execution

- **R13 — Heartbeat execution.** Agents wake on schedule, assignment, mention, manual invocation, or approval resolution; each run records status and events. `[implemented]` — `server/src/services/heartbeat.ts`; `packages/db/src/schema/heartbeat_runs.ts`, `heartbeat_run_events.ts`, `agent_wakeup_requests.ts`, `agent_task_sessions.ts`.
- **R14 — Deterministic wake gating.** A heartbeat must do a cheap, explicit work check before invoking a model, so an idle company generates no model calls from scheduled scans. `[planned]` — specified in `doc/plans/2026-03-13-features.md` section 8A; no gating code exists.
- **R15 — Per-agent circuit breaker.** An agent that makes no progress across several runs, fails repeatedly, or spikes token use against its rolling average should pause, with the pause visible in the audit trail. `[planned]` — specified in `doc/plans/2026-03-13-features.md` section 8C; not implemented.
- **R16 — Segmented execution reporting.** A heartbeat that uses more than one model must report cost and usage per phase, so multi-model routing does not collapse into one misleading model row. `[planned]` — stated as the contract prerequisite in `doc/plans/2026-04-06-smart-model-routing.md`; cost accounting currently records one provider/model tuple per run.
- **R17 — Smart model routing for supported adapters.** An opt-in, adapter-local cheap preflight phase for supported adapters, followed by primary execution on the normal model, with preflight sessions not persisted as the canonical task session. `[planned]` — `doc/plans/2026-04-06-smart-model-routing.md` is `Status: Proposed`.
- **R18 — Issue-scoped execution workspaces.** An issue should be able to run in an isolated git worktree with a project-defined provision command. `[partial]` — the runtime exists (`server/src/services/execution-workspaces.ts`, `workspace-runtime.ts`), but the UI entrypoints are gated off behind `experimentalSettings.enableIsolatedWorkspaces` (`ui/src/components/NewIssueDialog.tsx`); see `doc/experimental/issue-worktree-support.md`.

### Cost and governance

- **R19 — Cost tracking and rollups.** Cost events are ingested and rolled up per agent, issue, project, and company. `[implemented]` — `packages/db/src/schema/cost_events.ts`; `server/src/services/costs.ts`; `server/src/routes/costs.ts`; `ui/src/pages/Costs.tsx`.
- **R20 — Budget enforcement.** Monthly budgets enforce a warning threshold and a hard stop that auto-pauses the scope and blocks new work until a human overrides it. `[implemented]` — `server/src/services/budgets.ts` (default warn at 80, hard stop at 100, `pauseReason = "budget"`); `packages/db/src/schema/budget_policies.ts`, `budget_incidents.ts`.
- **R21 — Budget state legibility.** The enforced state (warning, paused, override) should be unmistakable in the UI and the audit trail. `[partial]` — enforcement and incident records exist, but surfacing the state cleanly in the operator UI and the activity stream is unfinished.
- **R22 — Governance and approvals.** Hiring an agent and the CEO's initial strategy require board approval; the board can pause, resume, or terminate any agent and reassign any task. `[implemented]` — `packages/db/src/schema/approvals.ts` (`hire_agent`); `server/src/services/approvals.ts`; `ui/src/pages/Approvals.tsx`, `ApprovalDetail.tsx`.
- **R23 — Complete audit trail.** Every mutation writes to the activity log with actor, action, entity, and details. `[implemented]` — `packages/db/src/schema/activity_log.ts`; `server/src/services/activity-log.ts`; `ui/src/pages/Activity.tsx`.

### Interfaces and platform

- **R24 — Agent and operator interfaces.** A REST API, an agent-facing contract for task read/write, heartbeat reporting, and cost reporting, a CLI, and an MCP server. `[implemented]` — `docs/api/`; `cli/` (binary `galyarder`: `onboard`, `doctor`, `configure`, `run`, `heartbeat`, company/issue/agent/approval/activity/dashboard commands); `packages/mcp-server` (binary `galyarder-mcp-server`).
- **R25 — Company portability.** A company exports to a portable markdown-first package rooted at `COMPANY.md` with a `.galyarder.yaml` sidecar, and imports as a new or existing company with preview and collision strategies; secret values are never exported. `[implemented]` — `server/src/services/company-portability.ts`, `company-export-readme.ts`; `ui/src/pages/CompanyExport.tsx`, `CompanyImport.tsx`.
- **R26 — Deployment modes.** Three canonical shapes: `local_trusted` (loopback, no login), `authenticated` with private exposure, and `authenticated` with public exposure; onboarding and `doctor` are mode-aware. `[implemented]` — `doc/DEPLOYMENT-MODES.md`; `server/src/middleware/private-hostname-guard.ts`; `cli/src/commands/onboard.ts`, `doctor.ts`.
- **R27 — Extensibility without bloating the core.** A plugin runtime, manifest, capability validation, and example plugins, with a real capability boundary for plugin UI. `[partial]` — `packages/plugins/sdk`, `create-galyarder-plugin`, and `server/src/services/plugin-*.ts` exist, but per `doc/plugins/PLUGIN_SPEC.md` plugin UI runs as same-origin trusted code and there is no cross-node distribution.
- **R28 — Coarse multi-user collaboration.** Owner, admin, operator, and viewer roles with correct attribution and enforced membership boundaries, without fine-grained per-field permissions. `[partial]` — `company_memberships`, `instance_user_roles`, `invites`, and `join_requests` schema exist, but V1 assumed a single board operator and roles are not fine-grained.
- **R29 — Verification harness.** Unit and integration tests, an end-to-end suite, a release-smoke suite, and an agent-behavior eval harness. `[implemented]` — 123 test files under `server/src/__tests__`, 24 under `cli/src/__tests__`; `tests/e2e` (Playwright); `tests/release-smoke`; `evals/promptfoo`.
- **R30 — CI gate on the default branch.** The typecheck, test, build, and end-to-end checks should run on every pull request against the default branch. `[not implemented]` — `.github/workflows/pr.yml` (and `release.yml`, `docker.yml`, `refresh-lockfile.yml`) trigger on branch `master`, but the default branch is `main`, so those jobs do not run for `main` pull requests.

## Success signals

- A new operator goes from install to seeing a CEO agent take a first real action in one sitting, with no manual JSON or environment editing.
- An idle company with no new work generates no model calls from heartbeat scans.
- A budget limit pauses an agent and blocks further work until a human overrides it, and the pause is visible in the audit trail.
- A board operator can answer "who is doing what, why, and at what cost" from the default UI, without reading raw logs.
- Work finishes as a visible output: a file, a document, a preview link, or a report.
- A task can always be traced up through its parents to the company goal.
- A pull request that breaks the build or a test fails CI before review, on the default branch.
- Adding a new agent runtime does not require changing the core control plane.
- Two humans can share one authenticated instance and every action is attributed correctly.

## Open questions

- Which branch is canonical: rename the default branch to `master`, or repoint the four workflows at `main`? The CI gate depends on the answer.
- Should the embedded database be described as PGlite (as the README and docs say) or embedded Postgres (as `packages/db/package.json` and `server/src/index.ts` actually use)? The public copy and the code need to agree.
- What is the final operator workflow for issue-scoped execution workspaces, and which of the currently gated controls should ship versus stay advanced-only?
- Does the phase-based routing in R17 need a text-based fallback for trivial runs, or should it stay strictly phase-based?
- Which task-model pieces (per-team workflow states, labels, relations, milestones, initiatives) are needed for agent coordination versus board reporting, and in what order? `doc/TASKS.md` describes more than the schema implements.
- What is the right capability boundary for plugin UI, given it currently runs as trusted same-origin code?
- Where should the first remote runtime driver land, and does the heartbeat contract need to change for remote execution handles?
- How should multi-user roles interact with the current single-board-operator assumption without turning into enterprise RBAC?
- Should versions be single-sourced across the monorepo? Most packages are `0.3.1`, `packages/mcp-server` is `0.1.0`, and the root `package.json` has no version field.
