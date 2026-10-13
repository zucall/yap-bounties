export type Coordinates = Readonly<{
  latitude: number;
  longitude: number;
}>;

/** WGS84 corners in top-left, top-right, bottom-right, bottom-left order. */
export type Corners = readonly [Coordinates, Coordinates, Coordinates, Coordinates];

/** A named grid whose version identifies its frozen geographic snapshot. */
export type Bounty = Readonly<{
  name: string;
  version: string;
  corners: Corners;
}>;

export type Province = Bounty;

/** A country-wide grid or a country containing province grids. */
export type Country = Readonly<{
  name: string;
  version: string;
}> & (
  | { readonly corners: Corners; readonly provinces?: never }
  | { readonly corners?: never; readonly provinces: Readonly<Record<string, Province>> }
);

/** Original province-source shape, retained for existing data consumers. */
export type ProvinceCountry = Readonly<{
  name: string;
  version: string;
  province: Readonly<Record<string, Province>>;
}>;

export type Bounties = Readonly<Record<string, Country>>;
