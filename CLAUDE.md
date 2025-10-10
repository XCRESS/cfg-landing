# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CosmosFin is a Next.js 15 + React 19 + TypeScript application using Tailwind CSS v4 for styling and GSAP for animations.

**About Cosmos Financial Group:**
- India-based financial services company (Headquarters: Delhi, India)
- Public company with 11-50 employees
- Focus: Alternative asset management, corporate advisory, investment opportunities
- Slogan: "An Avant-Garde FinServ Co. | Creating Cosmos of Sieved Investment. Elevating Opportunities, Unlocking Prosperity"

**Content Guidelines:**
- ONLY use factual information from [content.md](content.md)
- NEVER assume or invent stats, years of experience, client numbers, or any claims not explicitly stated
- We are a serious finance group - accuracy and truthfulness are paramount

## Development Commands

- **Start dev server**: `pnpm dev` (or `npm run dev`) - runs Next.js dev server with Turbopack
- **Build**: `pnpm build` - builds Next.js app with Turbopack
- **Start production**: `pnpm start` - runs built app
- **Lint**: `pnpm lint`

## Tech Stack

- **Framework**: Next.js 15 with React 19 and TypeScript
- **Build tool**: Next.js with Turbopack (next-generation bundler)
- **Styling**: Tailwind CSS v4 (using @tailwindcss/postcss plugin)
- **Animation**: GSAP
- **Fonts**: Roboto (Google Fonts) via next/font/google
- **Linting**: ESLint with Next.js config

## Code Structure

- Entry point: [src/app/layout.tsx](src/app/layout.tsx) - Root layout with metadata and fonts
- Main page: [src/app/page.tsx](src/app/page.tsx) - Home page component
- Global styles: [src/app/globals.css](src/app/globals.css) - Tailwind imports and theme configuration
- Next.js App Router is used for routing

## TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- JSX: preserve (Next.js handles JSX transformation)
- Module resolution: bundler mode
- Configured via [tsconfig.json](tsconfig.json) with incremental builds

## Styling

Tailwind CSS v4 is integrated via the PostCSS plugin ([postcss.config.mjs](postcss.config.mjs)).

### Design System Philosophy

**Minimalist | Sharp | Serious | Modern Finance**

- **NO rounded borders** — Everything is sharp, clean, rectangular
- **Line-based design** — Sharp lines complement every component, even in small details
- **Attention to detail** — Every UI element has thoughtful micro-interactions
- **Mobile-first** — Always write Tailwind classes with mobile-first approach
- **Micro-interactions**: Use Tailwind for small animations, GSAP for major page transitions/animations

### Color Theme

- **Primary (Eastern Blue)**: `#2596be` — Main brand color for buttons, links, accents, and key UI elements
- **Background**: `#fafafa` (soft white) — Main background color, `#ffffff` for cards/elevated surfaces
- **Text Colors**:
  - Primary text: `#0a0a0a` — Body copy
  - Secondary text: `#525252` — Descriptions, labels
  - Tertiary text: `#737373` — Hints, placeholder text
- **Neutral Palette**: Use grays (`#f5f5f5`, `#e5e5e5`, `#d4d4d4`, etc.) for borders, dividers, and UI elements

### Typography

- **Font**: Roboto (Google Fonts) with weights: 300 (light), 400 (normal), 500 (medium), 700 (bold), 900 (black)
- Choose weight appropriately:
  - 300 for subtle text
  - 400 for body copy
  - 500 for emphasis
  - 700 for headings
  - 900 for strong brand statements

### Design Principles

- **Sharp edges only**: `rounded-none` everywhere, no curves
- **Precise spacing**: Use consistent spacing scale (4px, 8px, 12px, 16px, 24px, 32px)
- **Line accents**: Use thin borders and line shadows to add depth and visual interest
- **Professional**: Serious, modern finance aesthetic — not traditional/old-school
- **Icon style**: Use thin outline icons with sharp, clean lines