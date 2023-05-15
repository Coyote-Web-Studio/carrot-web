# Contributing

This document provides a guide on how to begin contributing to the Carrot
landing page frontend. The frontend is developed using Next.js with Typescript,
and the preferred package manager is `yarn`.

## General info

This application serves as Carrot's landing page, providing an overview of the
protocol and its key features. It was built using Next.js and bootstrapped with
create-next-app, utilizing Typescript

## Getting started

The first step to get started is installing the package's dependencies using
`yarn`.

```
yarn install
```

### Setting up envs

The frontend incorporates [Fathom](https://app.usefathom.com) analytics to
anonymously track user interactions. To enable this feature, you can define a an
environment variable:

- `NEXT_PUBLIC_FATHOM_SITE_ID`: id of an existing Fathom site, used to
  initialize the anonymous tracking (this env is optional). You can get one by
  registering [here](https://app.usefathom.com).

After you have this env, you should create a `.env` file in the root of the
package (or copy the `.env.example` available at the root of the package) and
paste the values there.

The `.env` file may also define 2 additional envs that will be used by the
`build` command to generate code related to Fathom at build time.

- `FATHOM_SITE_ID`: same id described above.
- `FATHOM_API_KEY`: secret API key for the Fathom APIs. You can get one by
  registering [here](https://app.usefathom.com).

If the `FATHOM_*` environment variables are not defined, the script will still
work; however, it will skip the events synchronization process. Instead, it will
only generate the output files.

### Running the application

To start a local development server run the following command:

```
yarn dev
```
