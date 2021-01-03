# Nextjs [Link](https://nextjs.org/)

## Setup
Create a Next project using npx
```bash
npx create-next-app <project name>
```

### TypeScript
Convert `.js` to `.ts` and react files to `.tsx`, create a `tsconfig.json` in the root directory

Install the following
```bash
npm i typescript @types/node @types/react --save-dev
```

Next will automatically recognize the presence of typescipt in the project and will populate the `tsconfig.json`

---

## File Structure
public - Any file placed inside this directory will be transferred to the root of the build, this usually works for static files, such as images, text files, etc.

pages - You’ll need to have a “pages/” directory, which behaves as a sort of one-to-one static router for your site.

---
## Resources
[Learn Next.js in One Video - Fundamentals of Next.js](https://www.youtube.com/watch?v=tt3PUvhOVzo)