# YAP Bounties

Named, versioned geographic grid collections for YAP-based addressing schemes.
The first collection is **ZAP**, the Zukall Addressing Protocol.

In this package, a **bounty** is a named geographic grid with a snapshot version
and four WGS84 corners. Each collection supplies grid configurations for an
addressing scheme.

## Install

```sh
npm install @zukall/yap-bounties
```

## Get the ZAP bounties

```js
import { getBounties } from "@zukall/yap-bounties";

const bounties = getBounties("zap");
console.log(bounties.UG);
console.log(bounties.US.provinces.FL);
```

`getBounties("zap")` returns a country-code keyed object. Country-wide entries
contain `name`, `version`, and `corners`. Countries that use province grids contain
`name`, `version`, and a `provinces` object instead of country-wide corners.
Each province contains its own `name`, `version`, and `corners`.

The collection contains 239 country and territory entries. Of these, 217 use
country-wide grids, and 22 contain a total of 530 province grids. The result and
all nested objects are frozen to preserve their snapshot versions.

Collection names are case-insensitive, and surrounding whitespace is ignored.
An empty or non-string name throws `TypeError`; an unknown collection throws
`RangeError`. `zap` is the only collection in this release.

## CommonJS

```js
const { getBounties } = require("@zukall/yap-bounties");
const bounties = getBounties("zap");
```

## TypeScript

```ts
import { getBounties, type Bounties } from "@zukall/yap-bounties";

const bounties: Bounties = getBounties("zap");
const uganda = bounties.UG;
if (uganda?.corners) {
  console.log(uganda.corners[0].latitude);
}
```

ESM, CommonJS, and TypeScript declarations are included. The package has no
runtime dependencies and makes no network requests. Node.js consumers need
Node.js 20 or newer; browser bundles can also use the package.

## Source data and compatibility

```js
import {
  additionalSourceAreas,
  provinceCountries,
  provinceGrids,
  provinceCounts,
  provinceDataNotes,
} from "@zukall/yap-bounties/zap";
```

The `zap` subpath preserves the source data exports used by `@zukall/zap/data`.
`provinceCountries` retains the original singular `province` field;
`provinceGrids` adapts it to the plural `provinces` field.
Additional source areas remain separate from the 239 selectable entries.

Corners retain the existing ZAP snapshots and their exact numeric values.
Their order is top-left, top-right, bottom-right, bottom-left.
Rectangles can overlap, and date-line rectangles can have a western longitude
greater than their eastern longitude. Six decimal places describe representation
precision rather than boundary accuracy. Read `provinceDataNotes` before using
the snapshot as an administrative selector.

These data derive from Natural Earth. See [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md)
for the sources and snapshot details. Changing a grid can change the addresses
generated from it; preserve the original snapshot with saved address records.

## Development

```sh
npm install
npm run build
```

## Links

- [GitHub](https://github.com/zucall/yap-bounties)
- [npm](https://www.npmjs.com/package/@zukall/yap-bounties)
- [Zukall](https://www.zukall.com)

## License

The code uses the MIT license. The underlying Natural Earth map data are in the
public domain; their source terms remain separate from the code license.
