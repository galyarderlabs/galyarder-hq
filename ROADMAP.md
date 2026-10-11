# Galyarder HQ — Roadmap

Galyarder HQ is a self-hosted control plane for a company that runs on AI agents. You define the company, its goal, its org chart, and its budgets. Agents wake on heartbeats, pick up work from their queue, execute through an adapter, and report back. HQ keeps that work bounded: issues and comments instead of open chat, approval gates where they matter, a cost ledger per agent, and an activity log for every mutation. It is for a founder or small team running several agents at once who want them to behave like a team rather than a pile of disconnected sessions. The control plane does not run the agents; it coordinates them.

## Where this comes from

Galyarder HQ is a modified derivative of [paperclip](https://github.com/paperclipai/paperclip) (MIT). Portions of the server, UI, CLI, and packaging layout originate there and have been adapted, renamed, and extended for the Galyarder ecosystem. Upstream copyright is kept in `LICENSE` alongside the Galyarder Labs notice in `NOTICE`. The work here is the product direction on top of that base: a company-scoped model, governance, budgets, portability, and a plugin surface. The repository is public and licensed MIT.

## Where it is now

The control loop is real and runs today. The monorepo (pnpm workspaces) contains `server/` (Express + TypeScript), `ui/` (React + Vite), `cli/`, and the packages `db`, `shared`, `adapters`, `adapter-utils`, `mcp-server`, and `plugins`. Facts verified against the repository:

- **Companies are first-order.** `packages/db/src/schema/companies.ts` defines the company row; one instance hosts multiple companies. A company carries a goal, employees, org structure, a monthly budget, and an issue hierarchy.
- **Agents live in a strict tree.** `agents.reports_to` is a nullable self-reference; `ui/src/pages/OrgChart.tsx` renders it.
- **Eight built-in adapter types.** `packages/shared/src/constants.ts` lists `process`, `http`, `claude_local`, `codex_local`, `gemini_local`, `opencode_local`, `pi_local`, `cursor`, and `openclaw_gateway`. External adapters load from `~/.galyarder/adapter-plugins.json` (`server/src/services/adapter-plugin-store.ts`).
- **Work is issue-centric with atomic checkout.** `server/src/services/issues.ts` checks out an issue inside a transaction with `SELECT FOR UPDATE` and returns `409` on a conflicting claim. `server/src/routes/issues.ts` exposes 41 route handlers.
- **Heartbeats execute.** `server/src/services/heartbeat.ts` builds run context, records `heartbeat_runs` and `heartbeat_run_events`, and keeps per-task sessions in `agent_task_sessions`. Wakeups are queued on assignment (`issue-assignment-wakeup.ts`) and stored in `agent_wakeup_requests`.
- **Budgets enforce.** `server/src/services/budgets.ts` warns at a configurable percentage (default 80) and hard-stops at 100, pausing the scope with `pauseReason = "budget"`. `budget_policies` and `budget_incidents` back it.
- **Governance and audit exist.** Hiring flows through `approvals` (`hire_agent`); the board can pause, resume, or terminate agents. Every mutation writes to `activity_log`, surfaced at `ui/src/pages/Activity.tsx`.
- **The database is large and versioned.** 53 SQL migrations and 63 Drizzle schema files under `packages/db/src/`. Dev uses an embedded Postgres (`embedded-postgres`) with a patched dependency; production points at Postgres via `DATABASE_URL`.
- **Interfaces are broad.** The CLI (`cli/`, binary `galyarder`) covers `onboard`, `doctor`, `configure`, `run`, `heartbeat`, and client commands for company, issue, agent, approval, activity, and dashboard. `packages/mcp-server` (binary `galyarder-mcp-server`) is a thin MCP wrapper over the REST API. The REST surface is documented under `docs/api/`.
- **Portability ships.** `company-portability` exports a markdown-first package rooted at `COMPANY.md` with a `.galyarder.yaml` sidecar, and imports as a new or existing company. `ui/src/pages/CompanyExport.tsx` and `CompanyImport.tsx` drive it.
- **There is a plugin runtime.** `packages/plugins/sdk`, `create-galyarder-plugin`, examples, and a set of `server/src/services/plugin-*.ts` services exist.
- **Testing is present.** 123 test files under `server/src/__tests__`, 24 under `cli/src/__tests__`, a Playwright suite in `tests/e2e`, a release-smoke suite in `tests/release-smoke`, and a promptfoo eval harness in `evals/promptfoo`.
- **One release.** `v1.0.0` (2026-04-11) is the only tag and the only published release. The changelog opens at `1.0.0`.

Parts of this are still thin, and several public claims do not match the code. Naming these is part of the roadmap:

- **CI targets the wrong branch.** `pr.yml`, `release.yml`, `docker.yml`, and `refresh-lockfile.yml` all trigger on branch `master`, but the default branch is `main`. As written, pull requests against `main` do not run the typecheck, test, build, and e2e jobs in `pr.yml`.
- **The docs say "embedded PGlite", the code uses embedded Postgres.** `README.md`, `CHANGELOG.md`, `docs/start/architecture.md`, and `doc/SPEC.md` all mention PGlite. `packages/db/package.json` depends on `embedded-postgres` and patches it, and `server/src/index.ts` starts an embedded Postgres instance.
- **Public links are stale.** `docs/docs.json` points its GitHub links at `github.com/galyarder-ai/galyarder` and `github.com/galyarder/galyarder`; neither resolves. The repository is `galyarderlabs/galyarder-hq`.
- **Framework counts disagree.** `README.md` says "40 specialized agents and 132 production-ready skills"; `CHANGELOG.md` says "35 agents, 132 skills"; the framework repository currently has 45 agents, 149 skills, 25 commands, and 12 integrations.
- **Leftover upstream identifiers.** `packages/mcp-server/README.md` still shows `@paperclipai/mcp-server` in its usage examples, and the default company issue prefix is `PAP` (`packages/db/src/schema/companies.ts`).
- **Versions are not single-sourced.** Most packages are `0.3.1`, `packages/mcp-server` is `0.1.0`, and the root `package.json` has no version field.
- **The task model is ahead of the code.** `doc/TASKS.md` describes teams, per-team workflow states, milestones, initiatives, estimates, and issue relations. Only some of that exists; `issue_relations` currently supports a single type, `blocks`.
- **Attachments and outputs are uneven.** `server/src/attachment-types.ts` allows images, PDF, markdown, plain text, JSON, CSV, and HTML by default, but comment-level attachment rendering is incomplete and there is no dedicated deliverables surface in the UI.
- **The plugin surface is early.** Per `doc/plugins/PLUGIN_SPEC.md`, plugin UI runs as same-origin trusted code, installs assume a writable local filesystem, and there is no cross-node distribution.
- **Some capabilities are proposals, not code.** Deterministic wake gating and a per-agent circuit breaker are specified in `doc/plans/2026-03-13-features.md` (sections 8A and 8C). Smart model routing is `Status: Proposed` in `doc/plans/2026-04-06-smart-model-routing.md`. None is shipped.
- **Multi-user is coarse.** V1 assumed a single board operator. `company_memberships`, `instance_user_roles`, `invites`, and `join_requests` exist, but roles are not fine-grained.
- **No issues, no pull requests.** The repository has zero open issues and zero open pull requests.

## Now

- **Make CI run on the default branch.** Point the pull-request, release, Docker, and lockfile workflows at `main` (or set the default branch to `master`). Right now a change to `main` can merge without the test and typecheck gate that `pr.yml` already defines. This is the highest-value fix because it protects everything else.
- **Add deterministic wake gating.** Do a cheap, explicit work check before any model call, so an idle company does not spend tokens on scheduled scans with nothing to do. Specified in `doc/plans/2026-03-13-features.md` section 8A; not implemented.
- **Add a per-agent circuit breaker.** Stop an agent that makes no progress across several runs, fails repeatedly, or spikes token use against its rolling average, and surface the pause in the activity log. Specified in `doc/plans/2026-03-13-features.md` section 8C; not implemented.
- **Correct the public claims.** Fix the PGlite/embedded-Postgres wording, the stale `docs.json` GitHub links, the `@paperclipai` references in the MCP server README, and the framework agent/skill counts. Small edits, but they are the difference between a repo a reader trusts and one they do not.
- **Make budget enforcement legible.** The rules work (warning at 80, hard stop at 100, auto-pause). The work is showing the enforced state clearly in the UI and the audit trail, so a paused agent is never a mystery.
- **Ship the attachment and output path.** Storage and the `assets` and `issue_attachments` tables exist. Finish comment attachments and add a Deliverables section so finished work shows up as a file, document, or link rather than pasted text.

## Next

- **Segmented execution reporting, then smart model routing.** A heartbeat that uses more than one model must report cost per phase before routing is honest. Add the segment contract first, then the opt-in cheap preflight for supported adapters, per `doc/plans/2026-04-06-smart-model-routing.md`.
- **Broaden issue relations.** `issue_relations` supports only `blocks`. Add the relation kinds agents actually need for coordination (related, duplicate) and surface them in the issue view.
- **Canonical shared and cloud deployment recipes.** Document and test one supported path for shared-private and one for public cloud, so the local-first mental model survives the move to a shared instance.
- **Coarse multi-user roles.** Owner, admin, operator, viewer, with correct attribution in the activity log and enforced membership boundaries. Not enterprise RBAC.
- **Finish and gate issue-scoped workspaces.** The runtime can realize an isolated git worktree per issue, but the UI is off behind `experimentalSettings.enableIsolatedWorkspaces` (`ui/src/components/NewIssueDialog.tsx`) because the workflow is not final. Decide the operator ergonomics and re-enable deliberately.
- **A first-class artifact model.** Attachments, workspace files, preview URLs, and generated reports are separate shapes today. `issue_work_products` is a start; one model with a Deliverables section makes outputs the default view of finished work.

## Later

- **Remote runtime drivers.** Let agents run in remote sandboxes and report back through the same heartbeat contract, so HQ stays a control plane rather than an execution plane.
- **A real plugin capability boundary.** Move plugin UI into a sandboxed surface with a host-provided component kit and company-scoped permissions, so plugins can be shared without trusting arbitrary same-origin code.
- **A company registry.** Publish and install portable company templates. The export/import contract already exists; the registry does not.
- **An explainability layer over runs.** Summary first, steps second, raw transcript last, derived from run and activity data.

## Not planned

- **A hosted Galyarder cloud service.** HQ is self-hosted by design. The control plane runs where the operator runs it.
- **A general chat app.** Communication stays attached to issues and comments. There is no separate chat subsystem in the core.
- **A built-in code review or diff viewer.** Engineering handoff goes to external tools through workspaces, previews, and PR links. HQ is not a review tool.
- **Enterprise-grade RBAC, SCIM, or SSO as a first-class feature.** Multi-user support stays coarse and company-scoped.
- **A complete Jira or GitHub replacement.** HQ orchestrates a company; it is not a general project tracker.
- **Model training or fine-tuning.** HQ routes and governs work; it does not train models.
- **Automatic self-healing orchestration.** Stale work is surfaced, not silently reassigned. Recovery stays manual and explicit.

## How to follow along

The product docs live in `docs/` (Mintlify, `docs.json`) and the operational specs live in `doc/` — start with `doc/SPEC-implementation.md` for the V1 contract and `doc/PRODUCT.md` for the product definition. Read `CONTRIBUTING.md` before a change: pull requests need the template, a green CI run, and a 5/5 Greptile score, and larger ideas should be raised in the Discord `#dev` channel first. The repository currently has no open issues, so the working surface is a new, well-scoped issue against `main` using the templates in `.github/ISSUE_TEMPLATE/`.
