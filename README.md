# Fullstack Notion Clone: Next.js 13, React, Convex, Tailwind

![Nextion Demo](https://raw.githubusercontent.com/aafrzl/nextion/main/public/hero-light.png)

This is a fullstack Notion clone built with Next.js 13, React, Convex(Real-time database), Tailwind CSS, and more. This project is update from old project Nextion adding new features and fixing bugs.

Key Features:

- Real-time database  🔗 
- Notion-style editor 📝 
- Light and Dark mode 🌓
- Infinite children documents 🌲
- Trash can & soft delete 🗑️
- Authentication 🔐 
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time) 🌠
- Expandable sidebar ➡️🔀⬅️
- Full mobile responsiveness 📱
- Publish your note to the web 🌐
- Fully collapsable sidebar ↕️
- Landing page 🛬
- Cover image of each document 🖼️
- Recover deleted files 🔄📄

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/notion-clone-tutorial.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT='YOUR_DEPLOYMENT'

NEXT_PUBLIC_CONVEX_URL='YOUR_CONVEX_URL'

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='YOUR_CLERK_PUBLISHABLE_KEY'
CLERK_SECRET_KEY='YOUR_CLERK_SECRET_KEY'

EDGE_STORE_ACCESS_KEY='YOUR_EDGE_STORE_ACCESS_KEY'
EDGE_STORE_SECRET_KEY='YOUR_EDGE_STORE_SECRET_KEY'
```

### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
```