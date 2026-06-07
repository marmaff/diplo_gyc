# diplo_gyc monorepo

Monorepo con tres aplicaciones:

- `frontend`: SPA React + Vite
- `bff`: Backend for Frontend con Node.js + Express
- `backend`: API monolítica modular con Java 21 + Spring Boot 3

## Arquitectura

- Frontend consume al BFF en `http://localhost:3000`
- BFF consume al backend Java vía `BACKEND_URL`
- Backend persiste datos en memoria (sin base de datos)

## Requisitos previos

- Node.js 20
- Java 21
- Maven 3.9+
- Docker + Docker Compose

## Levantar todo con Docker Compose

```bash
docker compose up --build
```

Servicios expuestos:

- Frontend: `http://localhost:8081`
- BFF: `http://localhost:3000`
- Backend: `http://localhost:8080`

## Desarrollo local

```bash
cd frontend && npm run dev
cd bff && npm run dev
cd backend && mvn spring-boot:run
```

## Convención de branches y commits

Ramas permanentes:

- `main`: integración/staging
- `production`: estable

Ramas de trabajo (siempre desde `production`):

- `feature_three-word-featureName`
- `hotfix_three-word-hotfixName`

Flujo:

`production -> feature/hotfix -> PR a main -> staging -> PR a production -> producción`

Convención de commits: **Conventional Commits** (ej: `feat: add products endpoint`).

## CI/CD

### Push a feature/hotfix (`ci-feature.yml`)

- Path filter por cambios en `frontend`, `bff`, `backend`
- Frontend: ESLint + Vitest cobertura >= 70%
- BFF: ESLint + Jest cobertura >= 70%
- Backend: Checkstyle + tests + Jacoco cobertura >= 70%

### Pull Request a `main` o `production` (`ci-pr.yml`)

- Path filter por app
- Validación completa por app (lint/test/cobertura)
- SonarQube scan por app
- Build y push de imágenes Docker a GHCR
- Deploy placeholder a staging (PR mergeado a `main`) o production (PR mergeado a `production`)

## Secrets GitHub requeridos

Configurar en Settings > Secrets and variables > Actions:

- `SONAR_TOKEN`
- `SONAR_HOST_URL`
- `GITHUB_TOKEN` (provisto por GitHub Actions)
