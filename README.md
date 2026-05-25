# Veseli Piksel

https://veselipiksel.vercel.app

<a href="https://veselipiksel.vercel.app/">
  <img src="./public/screenshotforreadme.png" alt="Veseli Piksel screenshot" width="100%" />
</a>

[Live demo](https://veselipiksel.vercel.app/)

Veseli Piksel is a web app for generating stylized AI portraits and images without writing prompts or adjusting complex settings. The user uploads an image, chooses a style, previews the direction, and generates a result with one click.

## Problem

Most AI image tools require prompt writing, model knowledge, and a lot of trial and error. Veseli Piksel simplifies that workflow into a guided experience:

- upload a photo
- choose a category and style
- preview how the result can look
- generate with one click
- keep previous generations in history

The goal is to make AI image styling fast, predictable, and approachable for users who want a polished result without technical setup.

## Features

- AI image styling powered by OpenAI image models
- curated styles for animated characters, portraits, and business portraits
- original/result preview before generation
- user accounts and authentication
- monthly generation quota tracking
- private generation history
- responsive landing page and studio interface

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-20232a?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?logo=tailwindcss&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6c47ff?logo=clerk&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-111111?logo=openai&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169e1?logo=postgresql&logoColor=white)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-c5f74f)
![Sentry](https://img.shields.io/badge/Sentry-362d59?logo=sentry&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

- **Framework:** Next.js App Router
- **UI:** Tailwind CSS, shadcn/ui, Motion
- **Auth and billing:** Clerk
- **AI:** OpenAI image models through the AI SDK
- **Database:** Neon PostgreSQL and Drizzle ORM
- **Media:** ImageKit
- **Monitoring and deployment:** Sentry and Vercel
