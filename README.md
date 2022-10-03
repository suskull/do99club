## Features

Developer experience first:

- Type checking TypeScript

## Start Project in Development Environment
```sh
$ npm install
$ cp .env.example .env
$ npm run dev
```
## Deployment App with docker-compose
```sh
$ docker-compose up --build
```

## Structure

```sh
.
├── Dockerfile
├── README.md
├── commitlint.config.js
├── docker-compose.yml
├── index.html
├── nginx.conf
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── api
│   ├── assets
│   │   └── images
│   │       └── react.svg
│   ├── components
│   │   └── themes
│   │       └── Button.tsx
│   ├── hooks
│   │   └── <common>
│   │   └── <posts>
│   │   └── <users>
│   ├── layouts
│   │   └── index.tsx
│   ├── locales
│   │   ├── en.json
│   │   ├── ja.json
│   │   └── vi.json
│   ├── main.tsx
│   ├── pages
│   │   ├── 404.tsx
│   │   ├── About
│   │   │   └── index.tsx
│   │   └── Home
│   │       └── index.tsx
│   ├── routes
│   │   └── index.tsx
│   ├── store
│   │   ├── index.ts
│   │   └── postsSlice.ts
│   ├── types
│   │   └── index.d.ts
│   ├── utils
│   │   ├── constant.ts
│   │   ├── helper.ts
│   │   ├── i18n.ts
│   │   ├── loadable.tsx
│   │   └── theme.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
