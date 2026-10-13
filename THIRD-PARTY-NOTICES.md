# Geographic source data

The ZAP country and province grid configurations were extracted from the
Zukall Addressing Protocol source files. Their names, keys, corners, versions,
additional source areas, and historical coverage notes are preserved.

The source code uses the MIT license, whose notice is included in this package.
The geographic data derive from Natural Earth at 1:10 million scale, in WGS84
coordinates. Natural Earth places its map data in the public domain:
https://www.naturalearthdata.com/about/terms-of-use/.

## Country snapshot

- Source: https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-countries/
- Recorded snapshot: `ne-admin0-239eec57ac17-v1`.
- Recorded source SHA256: `239eec57ac17f100a11e2536cffc56752c318b50ae765b0918ff7aab4ce8f255`.

## Province snapshot

- Source: https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/
- Source GeoJSON: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson
- Recorded snapshot: `ne-admin1-snapshot-22d0e3ad85eb-v1`.
- Recorded source SHA256: `22d0e3ad85eb3e27f17cabf8ba2d50e554fbc27a87796ff891d958185da62fb5`.
- Retrieval date recorded by the supplied source files: 2026-10-10.

A retrieval date does not establish the current validity of administrative
divisions. These frozen rectangles define address grids, not verified
administrative membership. Source groupings, synthetic `NE_` keys, and coverage
limitations are retained in the data and their notes. Updates require a new
snapshot; replacing existing corners can change generated addresses.
