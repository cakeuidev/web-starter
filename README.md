## Installation

```bash
npx degit cakeuidev/web-starter <project-name>
```

## Development

```bash
npm i
npm run dev
```

## Production preview

```bash
npm run build
npm run preivew
```

## Build only the front end

Ensure your application's entry point uses `createRoot` for rendering.

```tsx
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <App />
)
```

Build `src`.

```bash
npm run build:src
```

Deploy the `dist/src` directory to a static web server or hosting service.

## Build as a library

Develop your library code in the `lib` directory and build it.

```bash
npm run build:lib
```

Configure `package.json` for Publishing.

```json
{
  "name": "",
  "version": "",
  "description": "",
  "license": "",
  "author": "",
  "homepage": "",
  "repository": "",
  "type": "module",
  "files": ["dist/lib"],
  "exports": {
    ".": "./dist/lib/index.js"
  },
  "scripts": {
    "build:lib": "vite build -c vite.lib.config.ts",
    "prepublishOnly": "npm run build:lib"
  },
  "dependencies": {},
  "peerDependencies": {},
  "devDependencies": {}
}
```

Publish to `npm`.

```bash
npm publish
```
