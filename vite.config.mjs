import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [react(), viteTsconfigPaths()],
	build: {
		commonjsOptions: { transformMixedEsModules: true },
	},
	base: "/Test-page/dist/",
});
