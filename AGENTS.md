# AGENTS.md

## Quick commands

```bash
yarn install          # install deps (yarn, not npm)
yarn build            # build all apps (nest build, webpack)
yarn lint             # lint + auto-fix all TS
yarn format           # prettier write
yarn test             # unit tests (*.spec.ts)
yarn test:e2e         # e2e for default app only (nestjs-testing-template)
```

**Run order:** `yarn lint` → `yarn build` → `yarn test` → `yarn test:e2e`

## Monorepo structure

Four independent NestJS apps under `apps/`:

| App | Path | Purpose |
|-----|------|---------|
| `nestjs-testing-template` | `apps/nestjs-testing-template/` | Default/root app |
| `auth-ms` | `apps/auth-ms/` | Auth microservice |
| `ordering-ms` | `apps/ordering-ms/` | Ordering microservice |
| `shipping-ms` | `apps/shipping-ms/` | Shipping microservice |

All apps are scaffolded with identical boilerplate (Hello World endpoint). Each app has its own `src/` and `test/` directories. Shared libs go in `libs/` (not yet created).

Build output: `dist/apps/<app-name>/`

## Key configs

- **Package manager:** Yarn (lockfile present, not npm)
- **Build:** NestJS CLI + Webpack (`nest-cli.json` enables `"webpack": true`)
- **TypeScript:** `nodenext` module resolution, ES2023 target, `emitDecoratorMetadata` enabled
- **Prettier:** single quotes, trailing commas all
- **ESLint:** flat config, type-checked rules. `no-explicit-any` is OFF, `no-floating-promises` and `no-unsafe-argument` are WARN
- **Jest:** root config in `package.json`, roots set to `<rootDir>/apps/`, ts-jest transform
- **E2e:** each app has its own `test/jest-e2e.json`; `yarn test:e2e` only runs the default app's e2e

## Gotchas

- E2e tests are app-specific. To run e2e for a non-default app, run jest directly with that app's config: `jest --config ./apps/<app-name>/test/jest-e2e.json`
- `nest build` deletes `dist/` before rebuilding (`deleteOutDir: true`)
- All apps default to `process.env.PORT ?? 3000` — they conflict if run simultaneously without different ports
- ESLint uses `projectService` with type-aware rules; builds may fail if tsconfig is inconsistent
