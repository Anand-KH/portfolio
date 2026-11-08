# Anand K H — Portfolio

Personal portfolio website for Anand K H, a full-stack software engineer. The site presents professional experience, skills, projects, education, resume, and contact details in a responsive single-page layout.

## Built With

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Motion and Lucide React
- Next Image optimization

## Requirements

- Node.js 20 or newer
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── app/                  # App Router entry points and global styles
├── components/
│   ├── layout/           # Navigation and footer
│   ├── sections/         # Portfolio page sections
│   └── ui/               # Reusable UI components
public/
├── images/               # Profile and project images
└── resume.pdf            # Downloadable resume
```

## Updating Content

- Edit section content in `src/components/sections/`.
- Replace the profile image at `public/images/Profile-new.png` and update the `src` in `src/components/sections/hero-section.tsx` if the filename changes.
- Replace `public/resume.pdf` to update the downloadable resume.
- Update page metadata in `src/app/layout.tsx`.

## Deployment

The project can be deployed to [Vercel](https://vercel.com/) or any platform that supports Next.js:

```bash
npm run build
npm run start
```
