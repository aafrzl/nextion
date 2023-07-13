
# Sumz Aplikasi Web Rangkum Article Dengan OpenAI GPT-4

Nextion adalah Aplikasi clone Notion dibuat dengan Nextjs, ORM Prisma, DB MySql (PlanetScale), Clerk, TipTap, Shadcn/UI.
## Fitur

- Menyimpan catatan dokumen dengan editor Markdown dari Tiptap
- Menggunakan Framework Next.js
- Shadcn/UI
- Menyimpan dokumen
- Realtime update data



![App Screenshot](https://i.ibb.co/jyhGrf5/Nextion-login.png)
![App Screenshot](https://i.ibb.co/jvwMNsd/homepage.png)
## Demo

Demo bisa dilihat di link berikut [Demo Aplikasi](https://nextion-rosy.vercel.app/)
## Environment Variables

Untuk menjalankan project ini, Kamu perlu menambahkan variabel lingkungan berikut ke file .env kamu.

`DATABASE_URL` Enviroment untuk connect Database MySql ke Prisma, didapat dari PlanetScale atau pakai database MySql local kamu. Cek dokumentasi berikut jika ingin pakai PlanetScale sebagai databasenya. (https://planetscale.com/docs/prisma/prisma-quickstart)

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` Publish key dari Clerk auth (https://clerk.com/docs/upgrade-guides/api-keys)

CLERK_SECRET_KEY Secret key dari Clerk auth (https://clerk.com/docs/upgrade-guides/api-keys)

## Run Locally

Clone the project

```bash
  git clone https://github.com/aafrzl/nextion.git
```

Go to the project directory

```bash
  cd nextion
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Youtube Tutorial (Coming soon)
