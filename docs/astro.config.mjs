import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	compressHTML: false,
	site: "https://kissflow.github.io/",
	base: "",
	integrations: [
		starlight({
			favicon: "/favicon.ico",
			title: "SDK Docs",
			logo: {
				light: "./src/assets/logo.light.png",
				dark: "./src/assets/logo.dark.png"
			},
			social: {
				github: "https://github.com/kissflow/lcnc-sdk-js"
			},
			customCss: ["./src/styles/override.css"],
			sidebar: [
				{
					label: "Getting started",
					link: "/"
				},
				{
					label: "Installation",
					link: "/installation"
				},
				{
					label: "Utilities",
					link: "/utils"
				},
				{
					label: "Context",
					link: "/context"
				},
				{
					label: "Form",
					autogenerate: { directory: "form" }
				},
				{
					label: "Application",
					autogenerate: { directory: "app" }
				},
				{
					label: "Custom Component",
					link: "/component"
				},
				{
					label: "Formatter",
					link: "/formatter"
				},
				{
					label: "Integration",
					link: "/integration"
				}
			]
		})
	]
});
