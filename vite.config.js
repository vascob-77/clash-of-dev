import { defineConfig } from 'vite'; 

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/src/main.ts',
        cards: '/src/components/cards.html',
        footer: '/src/components/footer.html',
        landing: '/src/components/landing.html',
        index: 'index.html',
      },
    },
  },
});