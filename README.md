<br />

<p align="center">
<img src=".github/static/logo.svg" alt="Carrot logo" width="60%" />
</p>

<br />

<p align="center">
Carrot is a web3 protocol trying to make incentivization easier and more capital
efficient.
</p>

<br />

<p align="center">
<img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License: GPL v3">
<img src="https://github.com/carrot-kpi/v1-monorepo/actions/workflows/ci.yml/badge.svg" alt="CI">
</p>

# Carrot landing page

A [Next.js](https://nextjs.org/) app bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
for the Carrot landing page.

## Getting Started

Start by installing the dependencies with `yarn`:

```
yarn install
```

An env variable is required to start the landing page and it determines if the
landing page should run in dev mode or not. Create a `.env.local` file at the
root of the repo and add the `NEXT_PUBLIC_DEV` env. You can set it to either
true or false to determine how the landing page will run.

Alternatively, just copy/paste and rename the `.env.example` file at the root of
the project to `.env.local` and give a value to the env variables there.

Once the env has been set up, you can start the dev server with:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

The app auto-updates as you edit the code.
