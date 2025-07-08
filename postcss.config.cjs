/**
 * PostCSS runs Tailwind’s compiler and autoprefixer during
 * both `npm run dev` (Vite) and `npm run build`.
 * Using the .cjs extension forces CommonJS syntax so
 * Node doesn’t try to parse this as an ES-module.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
