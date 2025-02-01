import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// Use dynamic import here:
import viteTsconfigPaths from "vite-tsconfig-paths"; // Correct import

export default defineConfig({
	plugins: [react(), viteTsconfigPaths()], // Use the imported function

	build: {
		commonjsOptions: { transformMixedEsModules: true },
	},
});
