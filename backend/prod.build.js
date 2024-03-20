const { resolve } = require("path");
const BUILD_PATH = resolve(__dirname, "../build/backend");

const { build } = require("esbuild");

build({
  entryPoints: ["./client/*.ts", "./server/*.ts"],
  outdir: BUILD_PATH,
  bundle: true,
  minify: true,
  platform: "browser",
  target: "es2020",
  logLevel: "info",
}).catch(() => process.exit(1));