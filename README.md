# OC Hotel Guest App

A guest-first tablet-friendly app for **OC Hotel**.

## What it includes

- Guest home screen with only two choices:
  - Review check-in
  - Review check-out
- Fast check-in flow
- Fast check-out flow
- Hidden admin panel at `/admin`
- Simple Express backend with local JSON storage
- White, modern, glass-style interface designed for iPad Air or other tablets

## Run the backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:4000
```

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

## Admin panel

Open this manually in the browser:

```bash
http://localhost:5173/admin
```

There is no admin button on the guest screen.

## Current storage

Submissions are saved in:

```bash
backend/data/submissions.json
```

This is good for demo and testing. Later it can be replaced with a real database.
