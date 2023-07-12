import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
// import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "m6nqlh0y",
  dataset: "production",
  title: "sonny-portfolio",
  apiVersion: "2023-07-08",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
