import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "https://angelgcdev.github.io/react-rick-and-morty/",
  plugins: [react()],
});
