import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.GITHUB_REPOSITORY_OWNER
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : 'http://localhost:4321',
  base: process.env.GITHUB_ACTIONS ? '/cabenomes/' : '/',
});
