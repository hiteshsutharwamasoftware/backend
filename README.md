# new-backend

A Node.js + Express + TypeScript backend project managed by Verity.

## Getting started

```bash
npm ci
npm run dev      # development server with hot reload (port 3001)
npm run build    # compile TypeScript to dist/
npm start        # run compiled output
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/items` | List items |

## Environment variables

Create a `.env` file in the project root (never commit it):

```
PORT=3002
```
