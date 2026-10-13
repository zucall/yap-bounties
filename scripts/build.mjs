import { rmSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = fileURLToPath(new URL("../", import.meta.url));
const compiler = resolve(root, "node_modules/typescript/bin/tsc");
rmSync(resolve(root, "dist"), { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
for (const [config, directory, type] of [
  ["tsconfig.json", "esm", "module"],
  ["tsconfig.cjs.json", "cjs", "commonjs"],
]) {
  execFileSync(process.execPath, [compiler, "--project", config], { cwd: root, stdio: "inherit" });
  const output = resolve(root, "dist", directory);
  mkdirSync(output, { recursive: true });
  writeFileSync(resolve(output, "package.json"), JSON.stringify({ type }) + "\n");
}
console.log("Built YAP Bounties with ESM, CommonJS, and TypeScript declarations.");
