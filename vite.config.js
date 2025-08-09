import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://kumanan2003.github.io/FoodRecipeApp/",
  plugins: [react()]
})
