# DESIGN.md — Galyarder HQ Design

## Status

This is the product-specific design guide for **Galyarder HQ**.

For Labs-level canon, read:

- [`docs/galyarder-labs/DESIGN.md`](./docs/galyarder-labs/DESIGN.md)
- [`docs/galyarder-labs/BRAND.md`](./docs/galyarder-labs/BRAND.md)

This file governs HQ product UI, command surfaces, org views, governance flows, and admin/control-plane design.

---

## Design Role

HQ is the **Strategic Command Interface**.

It should feel like:

- command center,
- company control plane,
- governance console,
- agentic org operating layer,
- self-hosted infrastructure UI.

It must not feel like:

- generic dashboard,
- chat app,
- project board clone,
- marketing page,
- cute agent gallery.

---

## Required Surfaces

HQ UI must show:

- companies,
- org charts,
- departments,
- roles,
- reporting lines,
- agents/adapters,
- goals,
- tasks,
- heartbeats,
- queues,
- budgets,
- token costs,
- approval gates,
- hard stops,
- logs,
- rollback/version context,
- multi-company isolation.

---

## Visual System

HQ is mostly Machine layer:

- neutral structure,
- dense but readable surfaces,
- semantic status colors,
- strong hierarchy,
- low decoration,
- visible state,
- audit/log clarity.

Labs Dream layer may appear only on public/open-source presentation surfaces. Auth/onboarding may use Airlock identity continuity.

---

## Color Rules

Brand colors are identity, not operational state.

Use violet/gold for:

- logo,
- identity moments,
- auth/onboarding,
- selected brand-level states.

Use semantic colors for:

- running,
- paused,
- failed,
- blocked,
- approval required,
- budget warning,
- destructive action.

Do not use violet/gold for budget warnings, failures, task health, or risk severity.

---

## Layout Rules

HQ must prioritize:

- structural clarity,
- parent/child relationships,
- command history,
- budget and approval visibility,
- fast operator scan,
- multi-company boundaries.

Org and portfolio views must not collapse into flat card spam.

---

## Motion

Motion should explain:

- heartbeat activity,
- task checkout,
- approval request,
- pause/resume,
- rollback/version changes,
- budget hard stop.

Avoid ambient spectacle and fake terminal drama.

---

## Quality Gate

Before shipping HQ UI, verify:

- HQ is not called or treated as a dashboard,
- command state is visible,
- budgets and approvals are visible,
- agent activity is inspectable,
- multi-company isolation is clear,
- destructive actions have confirmation and audit trail,
- Labs identity is present without turning the product into marketing chrome.
