import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  server: {
    port: 3000, // Set your desired port here
  },
  plugins: [
    {
      name: 'tailwindcss',
      ...tailwindcss({
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {},
          fontFamily: {
            signature: ["Great Vibes"],
          },
        },
        plugins: [],
      }),
    },
  ],
});
