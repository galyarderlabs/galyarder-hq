import fs from "node:fs";
import { galyarderConfigSchema, type GalyarderDashboardConfig } from "@galyarder-framework/shared";
import { resolveGalyarderConfigPath } from "./paths.js";

export function readConfigFile(): GalyarderDashboardConfig | null {
  const configPath = resolveGalyarderConfigPath();

  if (!fs.existsSync(configPath)) return null;

  try {
    const raw = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    return galyarderConfigSchema.parse(raw);
  } catch {
    return null;
  }
}
