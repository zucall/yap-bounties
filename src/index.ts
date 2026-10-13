import { countries } from "./zap/countries.js";
import type { Bounties } from "./types.js";

const collections: Readonly<Record<string, Bounties>> = Object.freeze({ zap: countries });

/** Return a frozen bounty collection by name, for example getBounties("zap"). */
export function getBounties(name: string): Bounties {
  if (typeof name !== "string" || !name.trim()) {
    throw new TypeError("The bounty collection name must be a nonempty string.");
  }
  const key = name.trim().toLowerCase();
  if (!Object.hasOwn(collections, key)) {
    throw new RangeError(`Unknown bounty collection: ${name}. Available collections: ${Object.keys(collections).join(", ")}.`);
  }
  return collections[key]!;
}

export type { Bounties, Bounty, Coordinates, Corners, Country, Province, ProvinceCountry } from "./types.js";
