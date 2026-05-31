# Veseli Piksel

https://veselipiksel.vercel.app

<a href="https://veselipiksel.vercel.app/">
  <img src="./public/screenshotforreadme.png" alt="Veseli Piksel screenshot" width="100%" />
</a>

Veseli Piksel is a full-stack AI image transformation SaaS built for users who want to turn an uploaded photo into a polished stylized result without writing prompts or adjusting complex settings. The app gives users a premium landing page, authenticated studio workspace, curated visual presets, OpenAI-powered image edits, generation history, monthly usage limits, and plan-based upgrades through Clerk Billing.

I built this project to practice and demonstrate production-oriented full-stack development with modern React, Next.js App Router, authentication, billing-aware usage limits, AI image generation, file uploads, database persistence, observability, and responsive UI design.

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth_And_Billing-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-Image_Models-412991?style=for-the-badge&logo=openai&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45.1-C5F74F?style=for-the-badge&logo=drizzle&logoColor=111827)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-Uploads_And_CDN-0B63F6?style=for-the-badge&logo=imagekit&logoColor=white)
![Sentry](https://img.shields.io/badge/Sentry-Monitoring-362D59?style=for-the-badge&logo=sentry&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)

## What I Built

- A premium marketing homepage with hero video, gallery showcase, workflow section, pricing, testimonials, and footer navigation.
- A protected studio workspace where signed-in users can upload an image and generate a styled result.
- Curated AI presets for Storybook 3D, Anime Cel, Clay Render, Pixart, Voxel Block, and Marble Sculpture outputs.
- OpenAI image-edit workflow using `gpt-image-1` and `gpt-image-1.5`.
- Image upload flow through ImageKit, including signed upload credentials and stored result images.
- Monthly generation quota system connected to Clerk Billing plans.
- Free, Pro, and Studio usage tiers with 3, 75, and 175 monthly generations.
- Generation history saved per Clerk user, with preview and download actions.
- PostgreSQL data model using Drizzle ORM for persisted generation records.
- Sentry instrumentation for upload auth, generation success, quota warnings, and OpenAI request spans.
- Responsive UI with a polished studio layout, preview panels, loading states, error states, and mobile-friendly controls.
- Deployment-ready setup hosted on Vercel.

## How I Built It

The application uses the Next.js App Router as the main architecture. The landing page is composed from reusable sections, while the `/studio` route loads authenticated user data, generation history, and the current quota snapshot on the server before rendering the workbench.

Authentication and billing are handled with Clerk. Users must be signed in before generating images, and the app reads the active Clerk plan to decide the monthly generation limit. The quota logic counts the user's saved generations from the start of the current UTC month, then blocks new generations when the plan limit is reached.

The studio workflow is managed with a React context. It stores the selected style, selected OpenAI model, uploaded file, source preview, generated result, generation history, quota state, loading state, and any user-facing errors. This keeps the controls panel, preview panel, and history UI synchronized without duplicating state across components.

Image uploads are handled in two steps. First, the client requests signed ImageKit upload credentials from a protected API route. Then the selected JPG, PNG, or WEBP file is uploaded directly to ImageKit under the signed user folder. The generated result is also uploaded to ImageKit after OpenAI returns the image.

AI generation happens through a protected Next.js API route. The route validates authentication, quota, source image URL, MIME type, selected style, and selected model. It fetches the uploaded source image, uses Sharp to infer the best output aspect ratio, builds a prompt from the selected preset, sends the image-edit request to OpenAI, uploads the generated PNG to ImageKit, and saves the completed generation in PostgreSQL.

Database access is implemented with Drizzle ORM on top of PostgreSQL. The `generations` table stores the Clerk user ID, original file name, source image URL, result image URL, selected style, selected model, prompt used, and creation time. This gives each user a persistent generation history and also supports quota calculation.

## Core Features

### Landing Page

The homepage presents the product with a visual hero, gallery examples, a simple three-step workflow, pricing powered by Clerk, testimonials, and navigation to the studio. It is built as a polished SaaS-style first impression rather than a plain demo page.

### Studio Workspace

Users can upload an image, select a visual style, choose an OpenAI image model, and generate a result from one focused workspace. The interface shows source and result previews, loading skeletons, quota information, and validation errors.

### Style Presets

The project includes curated prompt presets for several visual directions. Each preset has a slug, label, description, thumbnail reference, alt text, and prompt text. This keeps the user flow simple because users do not need to write prompts manually.

### Quotas And Billing

The app supports plan-aware monthly limits:

- `free`: 3 generations per month.
- `pro`: 75 generations per month.
- `studio`: 175 generations per month.

The studio shows the remaining monthly generations and links users to pricing when they run out.

### Generation History

Every successful generation is saved to the database and shown in the user's studio history. Users can preview older results and download generated images directly from the history grid.

### Observability

Sentry is configured for error monitoring and generation telemetry. The generation route records OpenAI request spans, token usage metadata when available, quota exceeded warnings, and successful generation events.

## Project Structure

```txt
app/
  page.tsx                         Marketing homepage
  studio/page.tsx                  Authenticated studio workspace
  api/upload/route.ts              Signed ImageKit upload credentials
  api/generate-image/route.ts      OpenAI image generation endpoint
  global-error.tsx                 Sentry-aware global error page
  globals.css                      Global theme and studio styling

components/
  HomeHeroSection.tsx              Landing hero section
  GalleryShowcaseSection.tsx       Visual examples section
  HowItWorksSection.tsx            Three-step workflow section
  PricingSection.tsx               Clerk Billing pricing table
  Testimonials.tsx                 Social proof section
  Footer.tsx                       Footer navigation
  studio/                          Workbench, controls, preview, history UI
  ui/                              Reusable UI primitives

context/
  StudioWorkbenchContext.tsx       Client-side studio state and actions

db/
  schema.ts                        Drizzle schema for generations
  generations.ts                   Generation queries, inserts, and quota counts
  index.ts                         Database client

lib/
  generation-quota.ts              Plan limits and quota snapshots
  style-presets.ts                 AI preset definitions and prompts
  openai.ts                        OpenAI provider setup
  openai-image-models.ts           Supported image model options
  imagekit.ts                      Server-side ImageKit upload helper
  constants.ts                     Marketing and upload constants
```

## Data Model

The database is focused on generation persistence:

- `generations`: stores each completed AI image transformation for a Clerk user.
- `clerk_user_id`: connects saved records to the authenticated user.
- `source_image_url`: stores the uploaded source image from ImageKit.
- `result_image_url`: stores the final generated image from ImageKit.
- `style_slug` and `style_label`: keep the selected visual preset attached to the record.
- `model`: stores the OpenAI image model used for the generation.
- `prompt_used`: keeps the exact prompt that produced the result.
- `created_at`: supports history ordering and monthly quota calculations.

This structure keeps the app simple while still supporting the important SaaS behaviors: authenticated history, billing-aware limits, previews, downloads, and auditability of generated results.

## Result

The result is a working AI image SaaS project that demonstrates:

- End-to-end product development from landing page to authenticated studio.
- AI image transformation with uploaded source images and curated style prompts.
- Protected server routes with authentication, validation, and error handling.
- Billing-aware monthly usage limits through Clerk plans.
- Persistent generation history with PostgreSQL and Drizzle ORM.
- File upload and CDN delivery through ImageKit.
- Production monitoring with Sentry.
- Responsive, polished UI designed around a practical creative workflow.
- Live deployment on Vercel.

This project is suitable as a portfolio/CV project because it goes beyond a static landing page. It includes authentication, billing logic, AI generation, file uploads, persistent data, quota enforcement, generation history, monitoring, and a deployment-ready Next.js architecture.

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL database, for example Neon
- Clerk application with Billing plans
- OpenAI API key
- ImageKit account
- Sentry project, optional for monitoring

### Environment Variables

Create a `.env.local` file and configure the required services:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=

OPENAI_API_KEY=

SENTRY_AUTH_TOKEN=
```

Depending on your Clerk setup, you may also need the standard Clerk route variables for sign-in, sign-up, and post-auth redirects.

### Install Dependencies

```bash
npm install
```

### Push Database Schema

```bash
npm run db:push
```

### Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
npm run db:push  # Push the Drizzle schema to the database
```

## Quality Checks

The project can be verified with:

```bash
npm run lint
npm run build
```
