/**
 * Frozen address-grid snapshot; historical coverage notes are exported below.
 * Scope: 22 countries and 530 province grids.
 * Source: Natural Earth Admin-1 States/Provinces, 1:10 million, public domain.
 * https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/
 * https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson
 * Retrieved: 2026-10-10. Retrieval date is NOT the date of administrative validity.
 * SHA256: 22d0e3ad85eb3e27f17cabf8ba2d50e554fbc27a87796ff891d958185da62fb5
 *
 * Every country constant has exactly name, version, province.
 * Province entries have name, version, corners.
 * Four corners: topLeft, topRight, bottomRight, bottomLeft.
 * Six decimal places, rounded OUTWARD to contain source geometry.
 * Precision of representation does not imply centimeter boundary accuracy.
 * For date-line rectangles, left/west longitude can exceed right/east longitude.
 * ZAP supports these date-line rectangles.
 *
 * Keys prefer the source ISO-3166-2 suffix, e.g. AK, TX, ON, XJ, 01.
 * Source codes are not verified current ISO codes. Duplicated, synthetic, or
 * nonmatching codes get a stable NE_ source-ID key; none are silently overwritten.
 * Review provinceDataNotes before presenting these as administrative choices.
 * These snapshots can define fixed grid origins, but must not be advertised as
 * current/all provinces. Replacing bounds later changes generated addresses.
 * Source territorial groupings reflect map conventions, not sovereignty claims.
 *
 * Integration: the source constants use singular `province`.
 * `provinceGrids` below adapts them to plural `provinces` for generateAddress.
 */

import type { Country, ProvinceCountry } from "../types.js";
import { deepFreeze } from "../internal.js";

export const DZ: ProvinceCountry = deepFreeze({
  name: "Algeria",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    "01": {
      name: "Adrar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 31.658585, longitude: -5.661525 },
        { latitude: 31.658585, longitude: 3.790291 },
        { latitude: 18.975561, longitude: 3.790291 },
        { latitude: 18.975561, longitude: -5.661525 },
      ],
    },
    "02": {
      name: "Chlef",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.547919, longitude: 0.702366 },
        { latitude: 36.547919, longitude: 1.719203 },
        { latitude: 35.841559, longitude: 1.719203 },
        { latitude: 35.841559, longitude: 0.702366 },
      ],
    },
    "03": {
      name: "Laghouat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 34.69287, longitude: 1.336229 },
        { latitude: 34.69287, longitude: 4.176211 },
        { latitude: 32.695988, longitude: 4.176211 },
        { latitude: 32.695988, longitude: 1.336229 },
      ],
    },
    "04": {
      name: "Oum el Bouaghi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.192442, longitude: 6.148441 },
        { latitude: 36.192442, longitude: 7.865857 },
        { latitude: 35.447811, longitude: 7.865857 },
        { latitude: 35.447811, longitude: 6.148441 },
      ],
    },
    "05": {
      name: "Batna",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.915793, longitude: 4.777001 },
        { latitude: 35.915793, longitude: 6.787267 },
        { latitude: 34.764493, longitude: 6.787267 },
        { latitude: 34.764493, longitude: 4.777001 },
      ],
    },
    "06": {
      name: "Béjaïa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.898017, longitude: 4.356355 },
        { latitude: 36.898017, longitude: 5.47546 },
        { latitude: 36.222906, longitude: 5.47546 },
        { latitude: 36.222906, longitude: 4.356355 },
      ],
    },
    "07": {
      name: "Biskra",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.288441, longitude: 4.184426 },
        { latitude: 35.288441, longitude: 6.749542 },
        { latitude: 33.57268, longitude: 6.749542 },
        { latitude: 33.57268, longitude: 4.184426 },
      ],
    },
    "08": {
      name: "Béchar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.327304, longitude: -6.000766 },
        { latitude: 32.327304, longitude: 0.399129 },
        { latitude: 28.207245, longitude: 0.399129 },
        { latitude: 28.207245, longitude: -6.000766 },
      ],
    },
    "09": {
      name: "Blida",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.71347, longitude: 2.476262 },
        { latitude: 36.71347, longitude: 3.51036 },
        { latitude: 36.353285, longitude: 3.51036 },
        { latitude: 36.353285, longitude: 2.476262 },
      ],
    },
    "10": {
      name: "Bouira",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.695797, longitude: 3.283035 },
        { latitude: 36.695797, longitude: 4.404466 },
        { latitude: 35.861119, longitude: 4.404466 },
        { latitude: 35.861119, longitude: 3.283035 },
      ],
    },
    "11": {
      name: "Tamanghasset",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 29.123546, longitude: 0.825407 },
        { latitude: 29.123546, longitude: 11.968862 },
        { latitude: 19.06077, longitude: 11.968862 },
        { latitude: 19.06077, longitude: 0.825407 },
      ],
    },
    "12": {
      name: "Tébessa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.004211, longitude: 7.135772 },
        { latitude: 36.004211, longitude: 8.431299 },
        { latitude: 34.108306, longitude: 8.431299 },
        { latitude: 34.108306, longitude: 7.135772 },
      ],
    },
    "13": {
      name: "Tlemcen",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.319899, longitude: -2.222565 },
        { latitude: 35.319899, longitude: -0.758474 },
        { latitude: 34.092021, longitude: -0.758474 },
        { latitude: 34.092021, longitude: -2.222565 },
      ],
    },
    "14": {
      name: "Tiaret",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.689812, longitude: 0.492248 },
        { latitude: 35.689812, longitude: 2.620285 },
        { latitude: 34.068929, longitude: 2.620285 },
        { latitude: 34.068929, longitude: 0.492248 },
      ],
    },
    "15": {
      name: "Tizi Ouzou",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.911607, longitude: 3.733654 },
        { latitude: 36.911607, longitude: 4.648068 },
        { latitude: 36.46625, longitude: 4.648068 },
        { latitude: 36.46625, longitude: 3.733654 },
      ],
    },
    "16": {
      name: "Alger",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.814968, longitude: 2.966309 },
        { latitude: 36.814968, longitude: 3.229809 },
        { latitude: 36.649934, longitude: 3.229809 },
        { latitude: 36.649934, longitude: 2.966309 },
      ],
    },
    "17": {
      name: "Djelfa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.80474, longitude: 2.285731 },
        { latitude: 35.80474, longitude: 5.121786 },
        { latitude: 32.840761, longitude: 5.121786 },
        { latitude: 32.840761, longitude: 2.285731 },
      ],
    },
    "18": {
      name: "Jijel",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.935315, longitude: 5.427348 },
        { latitude: 36.935315, longitude: 6.478499 },
        { latitude: 36.523972, longitude: 6.478499 },
        { latitude: 36.523972, longitude: 5.427348 },
      ],
    },
    "19": {
      name: "Sétif",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.590635, longitude: 4.785216 },
        { latitude: 36.590635, longitude: 5.983336 },
        { latitude: 35.632399, longitude: 5.983336 },
        { latitude: 35.632399, longitude: 4.785216 },
      ],
    },
    "20": {
      name: "Saïda",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.160593, longitude: -0.499681 },
        { latitude: 35.160593, longitude: 0.856878 },
        { latitude: 33.915036, longitude: 0.856878 },
        { latitude: 33.915036, longitude: -0.499681 },
      ],
    },
    "21": {
      name: "Skikda",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 37.09394, longitude: 6.24783 },
        { latitude: 37.09394, longitude: 7.384232 },
        { latitude: 36.432867, longitude: 7.384232 },
        { latitude: 36.432867, longitude: 6.24783 },
      ],
    },
    "22": {
      name: "Sidi Bel Abbès",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.429388, longitude: -1.120417 },
        { latitude: 35.429388, longitude: -0.052574 },
        { latitude: 34.215121, longitude: -0.052574 },
        { latitude: 34.215121, longitude: -1.120417 },
      ],
    },
    "23": {
      name: "Annaba",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 37.082994, longitude: 7.262676 },
        { latitude: 37.082994, longitude: 7.798596 },
        { latitude: 36.612443, longitude: 7.798596 },
        { latitude: 36.612443, longitude: 7.262676 },
      ],
    },
    "24": {
      name: "Guelma",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.726131, longitude: 6.937953 },
        { latitude: 36.726131, longitude: 7.987865 },
        { latitude: 36.042503, longitude: 7.987865 },
        { latitude: 36.042503, longitude: 6.937953 },
      ],
    },
    "25": {
      name: "Constantine",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.607895, longitude: 6.317734 },
        { latitude: 36.607895, longitude: 7.048283 },
        { latitude: 36.106892, longitude: 7.048283 },
        { latitude: 36.106892, longitude: 6.317734 },
      ],
    },
    "26": {
      name: "Médéa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.490176, longitude: 2.158194 },
        { latitude: 36.490176, longitude: 3.633867 },
        { latitude: 35.439077, longitude: 3.633867 },
        { latitude: 35.439077, longitude: 2.158194 },
      ],
    },
    "27": {
      name: "Mostaganem",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.337755, longitude: -0.11438 },
        { latitude: 36.337755, longitude: 0.741278 },
        { latitude: 35.68206, longitude: 0.741278 },
        { latitude: 35.68206, longitude: -0.11438 },
      ],
    },
    "28": {
      name: "M'Sila",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.029093, longitude: 3.379514 },
        { latitude: 36.029093, longitude: 5.379704 },
        { latitude: 34.2322, longitude: 5.379704 },
        { latitude: 34.2322, longitude: 3.379514 },
      ],
    },
    "29": {
      name: "Mascara",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.783759, longitude: -0.545363 },
        { latitude: 35.783759, longitude: 0.880494 },
        { latitude: 35.02148, longitude: 0.880494 },
        { latitude: 35.02148, longitude: -0.545363 },
      ],
    },
    "30": {
      name: "Ouargla",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 33.441887, longitude: 2.985998 },
        { latitude: 33.441887, longitude: 9.519709 },
        { latitude: 28.461855, longitude: 9.519709 },
        { latitude: 28.461855, longitude: 2.985998 },
      ],
    },
    "31": {
      name: "Oran",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.90705, longitude: -1.106354 },
        { latitude: 35.90705, longitude: -0.113677 },
        { latitude: 35.294538, longitude: -0.113677 },
        { latitude: 35.294538, longitude: -1.106354 },
      ],
    },
    "32": {
      name: "El Bayadh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 34.438182, longitude: -0.401134 },
        { latitude: 34.438182, longitude: 2.34485 },
        { latitude: 30.708694, longitude: 2.34485 },
        { latitude: 30.708694, longitude: -0.401134 },
      ],
    },
    "33": {
      name: "Illizi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 30.022793, longitude: 5.815748 },
        { latitude: 30.022793, longitude: 11.71014 },
        { latitude: 24.000137, longitude: 11.71014 },
        { latitude: 24.000137, longitude: 5.815748 },
      ],
    },
    "34": {
      name: "Bordj Bou Arréridj",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.42478, longitude: 4.084329 },
        { latitude: 36.42478, longitude: 5.254181 },
        { latitude: 35.777326, longitude: 5.254181 },
        { latitude: 35.777326, longitude: 4.084329 },
      ],
    },
    "35": {
      name: "Boumerdès",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.917222, longitude: 3.173269 },
        { latitude: 36.917222, longitude: 4.039464 },
        { latitude: 36.597327, longitude: 4.039464 },
        { latitude: 36.597327, longitude: 3.173269 },
      ],
    },
    "36": {
      name: "El Tarf",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.958075, longitude: 7.649744 },
        { latitude: 36.958075, longitude: 8.642552 },
        { latitude: 36.404135, longitude: 8.642552 },
        { latitude: 36.404135, longitude: 7.649744 },
      ],
    },
    "37": {
      name: "Tindouf",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 29.579127, longitude: -8.682386 },
        { latitude: 29.579127, longitude: -2.974257 },
        { latitude: 25.508881, longitude: -2.974257 },
        { latitude: 25.508881, longitude: -8.682386 },
      ],
    },
    "38": {
      name: "Tissemsilt",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.005658, longitude: 1.245587 },
        { latitude: 36.005658, longitude: 2.311778 },
        { latitude: 35.544032, longitude: 2.311778 },
        { latitude: 35.544032, longitude: 1.245587 },
      ],
    },
    "39": {
      name: "El Oued",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 34.499807, longitude: 5.008045 },
        { latitude: 34.499807, longitude: 9.063304 },
        { latitude: 32.000192, longitude: 9.063304 },
        { latitude: 32.000192, longitude: 5.008045 },
      ],
    },
    "40": {
      name: "Khenchela",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.68392, longitude: 6.510899 },
        { latitude: 35.68392, longitude: 7.544843 },
        { latitude: 34.160577, longitude: 7.544843 },
        { latitude: 34.160577, longitude: 6.510899 },
      ],
    },
    "41": {
      name: "Souk Ahras",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.491995, longitude: 7.324959 },
        { latitude: 36.491995, longitude: 8.359676 },
        { latitude: 35.830992, longitude: 8.359676 },
        { latitude: 35.830992, longitude: 7.324959 },
      ],
    },
    "42": {
      name: "Tipaza",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.815863, longitude: 1.647785 },
        { latitude: 36.815863, longitude: 3.035041 },
        { latitude: 36.366669, longitude: 3.035041 },
        { latitude: 36.366669, longitude: 1.647785 },
      ],
    },
    "43": {
      name: "Mila",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.624251, longitude: 5.7372 },
        { latitude: 36.624251, longitude: 6.525009 },
        { latitude: 35.892797, longitude: 6.525009 },
        { latitude: 35.892797, longitude: 5.7372 },
      ],
    },
    "44": {
      name: "Aïn Defla",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.443151, longitude: 1.553167 },
        { latitude: 36.443151, longitude: 2.66111 },
        { latitude: 35.860499, longitude: 2.66111 },
        { latitude: 35.860499, longitude: 1.553167 },
      ],
    },
    "45": {
      name: "Naâma",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 34.31372, longitude: -1.746789 },
        { latitude: 34.31372, longitude: 0.086021 },
        { latitude: 32.10463, longitude: 0.086021 },
        { latitude: 32.10463, longitude: -1.746789 },
      ],
    },
    "46": {
      name: "Aïn Témouchent",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.623236, longitude: -1.361977 },
        { latitude: 35.623236, longitude: -0.62949 },
        { latitude: 35.087393, longitude: -0.62949 },
        { latitude: 35.087393, longitude: -1.361977 },
      ],
    },
    "47": {
      name: "Ghardaïa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 33.029638, longitude: 1.943427 },
        { latitude: 33.029638, longitude: 4.978281 },
        { latitude: 29.036367, longitude: 4.978281 },
        { latitude: 29.036367, longitude: 1.943427 },
      ],
    },
    "48": {
      name: "Relizane",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.201357, longitude: 0.22937 },
        { latitude: 36.201357, longitude: 1.411625 },
        { latitude: 35.43608, longitude: 1.411625 },
        { latitude: 35.43608, longitude: 0.22937 },
      ],
    },
  },
});

export const CD: ProvinceCountry = deepFreeze({
  name: "Democratic Republic of the Congo",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    BC: {
      name: "Bas-Congo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -4.277102, longitude: 12.210541 },
        { latitude: -4.277102, longitude: 16.278677 },
        { latitude: -6.051928, longitude: 16.278677 },
        { latitude: -6.051928, longitude: 12.210541 },
      ],
    },
    BN: {
      name: "Bandundu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -0.743107, longitude: 15.888018 },
        { latitude: -0.743107, longitude: 21.007122 },
        { latitude: -8.111236, longitude: 21.007122 },
        { latitude: -8.111236, longitude: 15.888018 },
      ],
    },
    EQ: {
      name: "Équateur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 5.15519, longitude: 16.52497 },
        { latitude: 5.15519, longitude: 24.421538 },
        { latitude: -2.522895, longitude: 24.421538 },
        { latitude: -2.522895, longitude: 16.52497 },
      ],
    },
    KA: {
      name: "Katanga",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -4.999953, longitude: 21.751054 },
        { latitude: -4.999953, longitude: 30.752107 },
        { latitude: -13.458351, longitude: 30.752107 },
        { latitude: -13.458351, longitude: 21.751054 },
      ],
    },
    KE: {
      name: "Kasaï-Oriental",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -1.746198, longitude: 21.899056 },
        { latitude: -1.746198, longitude: 26.269436 },
        { latitude: -7.93812, longitude: 26.269436 },
        { latitude: -7.93812, longitude: 21.899056 },
      ],
    },
    KN: {
      name: "Kinshasa City",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -3.940523, longitude: 15.150678 },
        { latitude: -3.940523, longitude: 16.548066 },
        { latitude: -5.031992, longitude: 16.548066 },
        { latitude: -5.031992, longitude: 15.150678 },
      ],
    },
    KW: {
      name: "Kasaï-Occidental",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -2.338978, longitude: 19.689837 },
        { latitude: -2.338978, longitude: 23.739047 },
        { latitude: -7.90143, longitude: 23.739047 },
        { latitude: -7.90143, longitude: 19.689837 },
      ],
    },
    MA: {
      name: "Maniema",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -0.090123, longitude: 24.450683 },
        { latitude: -0.090123, longitude: 28.824525 },
        { latitude: -4.999953, longitude: 28.824525 },
        { latitude: -4.999953, longitude: 24.450683 },
      ],
    },
    NK: {
      name: "Nord-Kivu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 0.960614, longitude: 27.205915 },
        { latitude: 0.960614, longitude: 29.982194 },
        { latitude: -2.061889, longitude: 29.982194 },
        { latitude: -2.061889, longitude: 27.205915 },
      ],
    },
    OR: {
      name: "Orientale",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 5.37528, longitude: 22.289937 },
        { latitude: 5.37528, longitude: 31.280448 },
        { latitude: -2.110879, longitude: 31.280448 },
        { latitude: -2.110879, longitude: 22.289937 },
      ],
    },
    SK: {
      name: "Sud-Kivu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -1.666668, longitude: 26.821236 },
        { latitude: -1.666668, longitude: 29.410898 },
        { latitude: -4.999953, longitude: 29.410898 },
        { latitude: -4.999953, longitude: 26.821236 },
      ],
    },
  },
});

export const SD: ProvinceCountry = deepFreeze({
  name: "Sudan",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    DE: {
      name: "Central Darfur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.566588, longitude: 22.537053 },
        { latitude: 13.566588, longitude: 24.616411 },
        { latitude: 10.686817, longitude: 24.616411 },
        { latitude: 10.686817, longitude: 22.537053 },
      ],
    },
    DN: {
      name: "North Darfur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 20.008391, longitude: 23.489398 },
        { latitude: 20.008391, longitude: 27.522642 },
        { latitude: 11.827289, longitude: 27.522642 },
        { latitude: 11.827289, longitude: 23.489398 },
      ],
    },
    DW: {
      name: "Western Darfur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.749014, longitude: 21.809449 },
        { latitude: 15.749014, longitude: 24.153545 },
        { latitude: 12.03043, longitude: 24.153545 },
        { latitude: 12.03043, longitude: 21.809449 },
      ],
    },
    GD: {
      name: "Gedarif",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.706613, longitude: 33.544082 },
        { latitude: 15.706613, longitude: 36.526381 },
        { latitude: 12.665421, longitude: 36.526381 },
        { latitude: 12.665421, longitude: 33.544082 },
      ],
    },
    GZ: {
      name: "Gezira",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.431978, longitude: 32.421256 },
        { latitude: 15.431978, longitude: 34.251223 },
        { latitude: 13.526539, longitude: 34.251223 },
        { latitude: 13.526539, longitude: 32.421256 },
      ],
    },
    KA: {
      name: "Kassala",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 17.177376, longitude: 34.19629 },
        { latitude: 17.177376, longitude: 36.999736 },
        { latitude: 14.602055, longitude: 36.999736 },
        { latitude: 14.602055, longitude: 34.19629 },
      ],
    },
    KH: {
      name: "Khartoum",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.671127, longitude: 31.602442 },
        { latitude: 16.671127, longitude: 34.362172 },
        { latitude: 15.178195, longitude: 34.362172 },
        { latitude: 15.178195, longitude: 31.602442 },
      ],
    },
    KN: {
      name: "North Kordufan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.67875, longitude: 26.916528 },
        { latitude: 16.67875, longitude: 32.307828 },
        { latitude: 11.340674, longitude: 32.307828 },
        { latitude: 11.340674, longitude: 26.916528 },
      ],
    },
    KS: {
      name: "South Kordufan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.736148, longitude: 27.224881 },
        { latitude: 12.736148, longitude: 32.435363 },
        { latitude: 9.324545, longitude: 32.435363 },
        { latitude: 9.324545, longitude: 27.224881 },
      ],
    },
    NB: {
      name: "Blue Nile",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.733693, longitude: 33.082921 },
        { latitude: 12.733693, longitude: 35.148556 },
        { latitude: 9.454592, longitude: 35.148556 },
        { latitude: 9.454592, longitude: 33.082921 },
      ],
    },
    NE_SDN_5856: {
      name: "Southern Darfur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.099433, longitude: 23.00555 },
        { latitude: 13.099433, longitude: 25.843578 },
        { latitude: 8.681642, longitude: 25.843578 },
        { latitude: 8.681642, longitude: 23.00555 },
      ],
    },
    NE_SDN_5857: {
      name: "Eastern Darfur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.064319, longitude: 25.181735 },
        { latitude: 13.064319, longitude: 27.895072 },
        { latitude: 9.476012, longitude: 27.895072 },
        { latitude: 9.476012, longitude: 25.181735 },
      ],
    },
    NO: {
      name: "Northern",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 22.226965, longitude: 24.980521 },
        { latitude: 22.226965, longitude: 32.68553 },
        { latitude: 16.538758, longitude: 32.68553 },
        { latitude: 16.538758, longitude: 24.980521 },
      ],
    },
    NR: {
      name: "River Nile",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 21.995403, longitude: 31.851936 },
        { latitude: 21.995403, longitude: 35.672739 },
        { latitude: 15.913241, longitude: 35.672739 },
        { latitude: 15.913241, longitude: 31.851936 },
      ],
    },
    NW: {
      name: "White Nile",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.209305, longitude: 31.517693 },
        { latitude: 15.209305, longitude: 33.209219 },
        { latitude: 11.999811, longitude: 33.209219 },
        { latitude: 11.999811, longitude: 31.517693 },
      ],
    },
    RS: {
      name: "Red Sea",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 21.995714, longitude: 33.15976 },
        { latitude: 21.995714, longitude: 38.603853 },
        { latitude: 16.989222, longitude: 38.603853 },
        { latitude: 16.989222, longitude: 33.15976 },
      ],
    },
    SI: {
      name: "Sennar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 14.09852, longitude: 32.803145 },
        { latitude: 14.09852, longitude: 35.70137 },
        { latitude: 11.871229, longitude: 35.70137 },
        { latitude: 11.871229, longitude: 32.803145 },
      ],
    },
  },
});

export const LY: ProvinceCountry = deepFreeze({
  name: "Libya",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AJ: {
      name: "Ajdabiya",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 31.262821, longitude: 18.499264 },
        { latitude: 31.262821, longitude: 24.981245 },
        { latitude: 27.007628, longitude: 24.981245 },
        { latitude: 27.007628, longitude: 18.499264 },
      ],
    },
    BA: {
      name: "Benghazi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.562712, longitude: 19.917246 },
        { latitude: 32.562712, longitude: 21.31904 },
        { latitude: 31.006997, longitude: 21.31904 },
        { latitude: 31.006997, longitude: 19.917246 },
      ],
    },
    BU: {
      name: "Al Butnan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.22419, longitude: 22.955633 },
        { latitude: 32.22419, longitude: 25.156261 },
        { latitude: 28.096701, longitude: 25.156261 },
        { latitude: 28.096701, longitude: 22.955633 },
      ],
    },
    GD: {
      name: "Ghadamis",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.417863, longitude: 9.286543 },
        { latitude: 32.417863, longitude: 11.963022 },
        { latitude: 28.529008, longitude: 11.963022 },
        { latitude: 28.529008, longitude: 9.286543 },
      ],
    },
    GT: {
      name: "Ghat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.818642, longitude: 9.377803 },
        { latitude: 27.818642, longitude: 11.480985 },
        { latitude: 24.326339, longitude: 11.480985 },
        { latitude: 24.326339, longitude: 9.377803 },
      ],
    },
    JA: {
      name: "Al Jabal al Akhdar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.950385, longitude: 21.331855 },
        { latitude: 32.950385, longitude: 22.112481 },
        { latitude: 31.065623, longitude: 22.112481 },
        { latitude: 31.065623, longitude: 21.331855 },
      ],
    },
    JI: {
      name: "Al Jifarah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.721207, longitude: 12.819611 },
        { latitude: 32.721207, longitude: 13.250799 },
        { latitude: 32.260202, longitude: 13.250799 },
        { latitude: 32.260202, longitude: 12.819611 },
      ],
    },
    JU: {
      name: "Al Jufrah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 29.86195, longitude: 14.408143 },
        { latitude: 29.86195, longitude: 19.172194 },
        { latitude: 26.003762, longitude: 19.172194 },
        { latitude: 26.003762, longitude: 14.408143 },
      ],
    },
    KF: {
      name: "Al Kufrah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.049239, longitude: 19.168059 },
        { latitude: 27.049239, longitude: 24.981245 },
        { latitude: 19.496124, longitude: 24.981245 },
        { latitude: 19.496124, longitude: 19.168059 },
      ],
    },
    MB: {
      name: "Al Marqab",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.758236, longitude: 13.236433 },
        { latitude: 32.758236, longitude: 14.758408 },
        { latitude: 31.945596, longitude: 14.758408 },
        { latitude: 31.945596, longitude: 13.236433 },
      ],
    },
    MI: {
      name: "Misratah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.449675, longitude: 13.397662 },
        { latitude: 32.449675, longitude: 16.531219 },
        { latitude: 29.37676, longitude: 16.531219 },
        { latitude: 29.37676, longitude: 13.397662 },
      ],
    },
    MJ: {
      name: "Al Marj",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.781073, longitude: 20.309282 },
        { latitude: 32.781073, longitude: 21.717156 },
        { latitude: 31.032783, longitude: 21.717156 },
        { latitude: 31.032783, longitude: 20.309282 },
      ],
    },
    MQ: {
      name: "Murzuq",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.075169, longitude: 11.33257 },
        { latitude: 27.075169, longitude: 19.185837 },
        { latitude: 21.864177, longitude: 19.185837 },
        { latitude: 21.864177, longitude: 11.33257 },
      ],
    },
    MZ: {
      name: "Mizdah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.317383, longitude: 11.589918 },
        { latitude: 32.317383, longitude: 14.982373 },
        { latitude: 28.426973, longitude: 14.982373 },
        { latitude: 28.426973, longitude: 11.589918 },
      ],
    },
    NQ: {
      name: "An Nuqat al Khams",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 33.181225, longitude: 11.449203 },
        { latitude: 33.181225, longitude: 12.573217 },
        { latitude: 32.305729, longitude: 12.573217 },
        { latitude: 32.305729, longitude: 11.449203 },
      ],
    },
    QB: {
      name: "Al Qubbah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.947944, longitude: 21.917763 },
        { latitude: 32.947944, longitude: 23.251357 },
        { latitude: 30.791558, longitude: 23.251357 },
        { latitude: 30.791558, longitude: 21.917763 },
      ],
    },
    SB: {
      name: "Sabha",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.741149, longitude: 13.932307 },
        { latitude: 27.741149, longitude: 16.280692 },
        { latitude: 26.245013, longitude: 16.280692 },
        { latitude: 26.245013, longitude: 13.932307 },
      ],
    },
    SR: {
      name: "Surt",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 31.261236, longitude: 16.114602 },
        { latitude: 31.261236, longitude: 18.780529 },
        { latitude: 28.484618, longitude: 18.780529 },
        { latitude: 28.484618, longitude: 16.114602 },
      ],
    },
    TN: {
      name: "Tajura' wa an Nawahi al Arba",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.918647, longitude: 13.076338 },
        { latitude: 32.918647, longitude: 13.954436 },
        { latitude: 32.333737, longitude: 13.954436 },
        { latitude: 32.333737, longitude: 13.076338 },
      ],
    },
    WD: {
      name: "Wadi al Hayaa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.292185, longitude: 11.303665 },
        { latitude: 27.292185, longitude: 14.146249 },
        { latitude: 25.547795, longitude: 14.146249 },
        { latitude: 25.547795, longitude: 11.303665 },
      ],
    },
    WS: {
      name: "Ash Shati'",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 29.56755, longitude: 9.776952 },
        { latitude: 29.56755, longitude: 15.894048 },
        { latitude: 26.21747, longitude: 15.894048 },
        { latitude: 26.21747, longitude: 9.776952 },
      ],
    },
    ZA: {
      name: "Az Zawiyah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.87742, longitude: 11.862665 },
        { latitude: 32.87742, longitude: 13.110962 },
        { latitude: 32.232607, longitude: 13.110962 },
        { latitude: 32.232607, longitude: 11.862665 },
      ],
    },
  },
});

export const TD: ProvinceCountry = deepFreeze({
  name: "Chad",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    BA: {
      name: "Batha",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.181959, longitude: 16.939565 },
        { latitude: 16.181959, longitude: 20.304788 },
        { latitude: 12.155641, longitude: 20.304788 },
        { latitude: 12.155641, longitude: 16.939565 },
      ],
    },
    BG: {
      name: "Barh El Gazel",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.341869, longitude: 15.590456 },
        { latitude: 16.341869, longitude: 17.992887 },
        { latitude: 13.047576, longitude: 17.992887 },
        { latitude: 13.047576, longitude: 15.590456 },
      ],
    },
    BO: {
      name: "Borkou",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 21.99685, longitude: 15.468516 },
        { latitude: 21.99685, longitude: 20.893329 },
        { latitude: 15.383867, longitude: 20.893329 },
        { latitude: 15.383867, longitude: 15.468516 },
      ],
    },
    CB: {
      name: "Chari-Baguirmi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.463299, longitude: 14.894831 },
        { latitude: 12.463299, longitude: 17.533742 },
        { latitude: 9.814802, longitude: 17.533742 },
        { latitude: 9.814802, longitude: 14.894831 },
      ],
    },
    GR: {
      name: "Guéra",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.055575, longitude: 17.254954 },
        { latitude: 13.055575, longitude: 20.174925 },
        { latitude: 9.866685, longitude: 20.174925 },
        { latitude: 9.866685, longitude: 17.254954 },
      ],
    },
    HL: {
      name: "Hadjer-Lamis",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.405125, longitude: 14.481041 },
        { latitude: 13.405125, longitude: 17.625572 },
        { latitude: 11.493193, longitude: 17.625572 },
        { latitude: 11.493193, longitude: 14.481041 },
      ],
    },
    KA: {
      name: "Kanem",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.90491, longitude: 13.608051 },
        { latitude: 16.90491, longitude: 16.671386 },
        { latitude: 13.168757, longitude: 16.671386 },
        { latitude: 13.168757, longitude: 13.608051 },
      ],
    },
    LC: {
      name: "Lac",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 14.518266, longitude: 13.449184 },
        { latitude: 14.518266, longitude: 15.560137 },
        { latitude: 12.999827, longitude: 15.560137 },
        { latitude: 12.999827, longitude: 13.449184 },
      ],
    },
    LO: {
      name: "Logone Occidental",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 9.238713, longitude: 15.264008 },
        { latitude: 9.238713, longitude: 16.597106 },
        { latitude: 8.257636, longitude: 16.597106 },
        { latitude: 8.257636, longitude: 15.264008 },
      ],
    },
    LR: {
      name: "Logone Oriental",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 9.140424, longitude: 15.210705 },
        { latitude: 9.140424, longitude: 17.24947 },
        { latitude: 7.455567, longitude: 17.24947 },
        { latitude: 7.455567, longitude: 15.210705 },
      ],
    },
    MA: {
      name: "Mandoul",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 9.643753, longitude: 17.033461 },
        { latitude: 9.643753, longitude: 18.175432 },
        { latitude: 7.810801, longitude: 18.175432 },
        { latitude: 7.810801, longitude: 17.033461 },
      ],
    },
    MC: {
      name: "Moyen-Chari",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 10.618474, longitude: 17.329515 },
        { latitude: 10.618474, longitude: 19.932092 },
        { latitude: 8.021952, longitude: 19.932092 },
        { latitude: 8.021952, longitude: 17.329515 },
      ],
    },
    ME: {
      name: "Mayo-Kebbi Est",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 11.186036, longitude: 14.722846 },
        { latitude: 11.186036, longitude: 16.246276 },
        { latitude: 9.18683, longitude: 16.246276 },
        { latitude: 9.18683, longitude: 14.722846 },
      ],
    },
    MO: {
      name: "Mayo-Kebbi Ouest",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 9.995308, longitude: 13.945948 },
        { latitude: 9.995308, longitude: 15.463895 },
        { latitude: 8.421822, longitude: 15.463895 },
        { latitude: 8.421822, longitude: 13.945948 },
      ],
    },
    ND: {
      name: "Ville de N'Djamena",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.180917, longitude: 15.011826 },
        { latitude: 12.180917, longitude: 15.125296 },
        { latitude: 12.055648, longitude: 15.125296 },
        { latitude: 12.055648, longitude: 15.011826 },
      ],
    },
    NE_TCD_5579: {
      name: "Ennedi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 21.02094, longitude: 20.004278 },
        { latitude: 21.02094, longitude: 23.984407 },
        { latitude: 15.681318, longitude: 23.984407 },
        { latitude: 15.681318, longitude: 20.004278 },
      ],
    },
    OD: {
      name: "Ouaddaï",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 14.470745, longitude: 20.00005 },
        { latitude: 14.470745, longitude: 22.275984 },
        { latitude: 12.667532, longitude: 22.275984 },
        { latitude: 12.667532, longitude: 20.00005 },
      ],
    },
    SA: {
      name: "Salamat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.158948, longitude: 18.846323 },
        { latitude: 12.158948, longitude: 22.36469 },
        { latitude: 9.063331, longitude: 22.36469 },
        { latitude: 9.063331, longitude: 18.846323 },
      ],
    },
    SI: {
      name: "Sila",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.092328, longitude: 19.818976 },
        { latitude: 13.092328, longitude: 22.956459 },
        { latitude: 10.919154, longitude: 22.956459 },
        { latitude: 10.919154, longitude: 19.818976 },
      ],
    },
    TA: {
      name: "Tandjilé",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 10.251674, longitude: 15.437796 },
        { latitude: 10.251674, longitude: 17.561027 },
        { latitude: 8.991131, longitude: 17.561027 },
        { latitude: 8.991131, longitude: 15.437796 },
      ],
    },
    TI: {
      name: "Tibesti",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 23.44472, longitude: 14.979908 },
        { latitude: 23.44472, longitude: 18.91712 },
        { latitude: 17.124537, longitude: 18.91712 },
        { latitude: 17.124537, longitude: 14.979908 },
      ],
    },
    WF: {
      name: "Wadi Fira",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.000677, longitude: 20.00005 },
        { latitude: 16.000677, longitude: 23.119249 },
        { latitude: 13.917394, longitude: 23.119249 },
        { latitude: 13.917394, longitude: 20.00005 },
      ],
    },
  },
});

export const NE: ProvinceCountry = deepFreeze({
  name: "Niger",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    "1": {
      name: "Agadez",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 23.517351, longitude: 4.22861 },
        { latitude: 23.517351, longitude: 15.970323 },
        { latitude: 15.334517, longitude: 15.970323 },
        { latitude: 15.334517, longitude: 4.22861 },
      ],
    },
    "2": {
      name: "Diffa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 18.000039, longitude: 10.612561 },
        { latitude: 18.000039, longitude: 15.567699 },
        { latitude: 13.064165, longitude: 15.567699 },
        { latitude: 13.064165, longitude: 10.612561 },
      ],
    },
    "3": {
      name: "Dosso",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 14.657865, longitude: 2.474712 },
        { latitude: 14.657865, longitude: 4.625845 },
        { latitude: 11.695773, longitude: 4.625845 },
        { latitude: 11.695773, longitude: 2.474712 },
      ],
    },
    "4": {
      name: "Maradi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.443295, longitude: 6.282645 },
        { latitude: 15.443295, longitude: 8.54132 },
        { latitude: 12.991844, longitude: 8.54132 },
        { latitude: 12.991844, longitude: 6.282645 },
      ],
    },
    "5": {
      name: "Tahoua",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 18.645374, longitude: 3.873849 },
        { latitude: 18.645374, longitude: 6.673681 },
        { latitude: 13.640822, longitude: 6.673681 },
        { latitude: 13.640822, longitude: 3.873849 },
      ],
    },
    "6": {
      name: "Tillabéri",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.720882, longitude: 0.15294 },
        { latitude: 15.720882, longitude: 4.253623 },
        { latitude: 11.896536, longitude: 4.253623 },
        { latitude: 11.896536, longitude: 0.15294 },
      ],
    },
    "7": {
      name: "Zinder",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 17.500379, longitude: 7.324493 },
        { latitude: 17.500379, longitude: 12.000126 },
        { latitude: 12.80139, longitude: 12.000126 },
        { latitude: 12.80139, longitude: 7.324493 },
      ],
    },
    "8": {
      name: "Niamey",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.626881, longitude: 1.972452 },
        { latitude: 13.626881, longitude: 2.27822 },
        { latitude: 13.365831, longitude: 2.27822 },
        { latitude: 13.365831, longitude: 1.972452 },
      ],
    },
  },
});

export const AO: ProvinceCountry = deepFreeze({
  name: "Angola",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    BGO: {
      name: "Bengo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -7.619845, longitude: 13.094134 },
        { latitude: -7.619845, longitude: 14.718255 },
        { latitude: -10.439001, longitude: 14.718255 },
        { latitude: -10.439001, longitude: 13.094134 },
      ],
    },
    BGU: {
      name: "Benguela",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -11.74874, longitude: 12.512706 },
        { latitude: -11.74874, longitude: 15.11084 },
        { latitude: -13.874088, longitude: 15.11084 },
        { latitude: -13.874088, longitude: 12.512706 },
      ],
    },
    BIE: {
      name: "Bié",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -10.574186, longitude: 15.748165 },
        { latitude: -10.574186, longitude: 19.235963 },
        { latitude: -14.311633, longitude: 19.235963 },
        { latitude: -14.311633, longitude: 15.748165 },
      ],
    },
    CAB: {
      name: "Cabinda",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -4.391204, longitude: 12.009607 },
        { latitude: -4.391204, longitude: 13.073704 },
        { latitude: -5.763442, longitude: 13.073704 },
        { latitude: -5.763442, longitude: 12.009607 },
      ],
    },
    CCU: {
      name: "Cuando Cubango",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -13.57235, longitude: 16.461766 },
        { latitude: -13.57235, longitude: 23.382273 },
        { latitude: -18.031405, longitude: 23.382273 },
        { latitude: -18.031405, longitude: 16.461766 },
      ],
    },
    CNN: {
      name: "Cunene",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -15.150651, longitude: 13.144499 },
        { latitude: -15.150651, longitude: 17.417471 },
        { latitude: -17.423587, longitude: 17.417471 },
        { latitude: -17.423587, longitude: 13.144499 },
      ],
    },
    CNO: {
      name: "Cuanza Norte",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -7.934089, longitude: 14.074004 },
        { latitude: -7.934089, longitude: 15.817567 },
        { latitude: -9.781728, longitude: 15.817567 },
        { latitude: -9.781728, longitude: 14.074004 },
      ],
    },
    CUS: {
      name: "Cuanza Sul",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -9.673311, longitude: 13.489085 },
        { latitude: -9.673311, longitude: 16.611577 },
        { latitude: -12.205973, longitude: 16.611577 },
        { latitude: -12.205973, longitude: 13.489085 },
      ],
    },
    HUA: {
      name: "Huambo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -11.443746, longitude: 14.806568 },
        { latitude: -11.443746, longitude: 16.582843 },
        { latitude: -13.764069, longitude: 16.582843 },
        { latitude: -13.764069, longitude: 14.806568 },
      ],
    },
    HUI: {
      name: "Huíla",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -13.339599, longitude: 13.220722 },
        { latitude: -13.339599, longitude: 16.748001 },
        { latitude: -16.366546, longitude: 16.748001 },
        { latitude: -16.366546, longitude: 13.220722 },
      ],
    },
    LNO: {
      name: "Lunda Norte",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -6.915959, longitude: 17.333392 },
        { latitude: -6.915959, longitude: 21.920554 },
        { latitude: -10.416366, longitude: 21.920554 },
        { latitude: -10.416366, longitude: 17.333392 },
      ],
    },
    LSU: {
      name: "Lunda Sul",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -8.332101, longitude: 18.451257 },
        { latitude: -8.332101, longitude: 22.313398 },
        { latitude: -11.474803, longitude: 22.313398 },
        { latitude: -11.474803, longitude: 18.451257 },
      ],
    },
    LUA: {
      name: "Luanda",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -8.581556, longitude: 12.99236 },
        { latitude: -8.581556, longitude: 13.640749 },
        { latitude: -9.330255, longitude: 13.640749 },
        { latitude: -9.330255, longitude: 12.99236 },
      ],
    },
    MAL: {
      name: "Malanje",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -7.32162, longitude: 15.109392 },
        { latitude: -7.32162, longitude: 18.836867 },
        { latitude: -11.726157, longitude: 18.836867 },
        { latitude: -11.726157, longitude: 15.109392 },
      ],
    },
    MOX: {
      name: "Moxico",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -10.588707, longitude: 17.945241 },
        { latitude: -10.588707, longitude: 24.061714 },
        { latitude: -16.165886, longitude: 24.061714 },
        { latitude: -16.165886, longitude: 17.945241 },
      ],
    },
    NAM: {
      name: "Namibe",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -13.521655, longitude: 11.669394 },
        { latitude: -13.521655, longitude: 13.681108 },
        { latitude: -17.26587, longitude: 13.681108 },
        { latitude: -17.26587, longitude: 11.669394 },
      ],
    },
    UIG: {
      name: "Uíge",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -5.854629, longitude: 13.797483 },
        { latitude: -5.854629, longitude: 17.097896 },
        { latitude: -8.40822, longitude: 17.097896 },
        { latitude: -8.40822, longitude: 13.797483 },
      ],
    },
    ZAI: {
      name: "Zaire",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -5.841606, longitude: 12.275059 },
        { latitude: -5.841606, longitude: 14.967646 },
        { latitude: -7.792777, longitude: 14.967646 },
        { latitude: -7.792777, longitude: 12.275059 },
      ],
    },
  },
});

export const ML: ProvinceCountry = deepFreeze({
  name: "Mali",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    "1": {
      name: "Kayes",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.697854, longitude: -12.264131 },
        { latitude: 15.697854, longitude: -8.132055 },
        { latitude: 11.890386, longitude: -8.132055 },
        { latitude: 11.890386, longitude: -12.264131 },
      ],
    },
    "2": {
      name: "Koulikoro",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.495581, longitude: -9.14138 },
        { latitude: 15.495581, longitude: -5.945005 },
        { latitude: 11.456312, longitude: -5.945005 },
        { latitude: 11.456312, longitude: -9.14138 },
      ],
    },
    "3": {
      name: "Sikasso",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.816944, longitude: -8.700731 },
        { latitude: 12.816944, longitude: -4.386885 },
        { latitude: 10.140054, longitude: -4.386885 },
        { latitude: 10.140054, longitude: -8.700731 },
      ],
    },
    "4": {
      name: "Ségou",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.552953, longitude: -7.081009 },
        { latitude: 15.552953, longitude: -3.958022 },
        { latitude: 12.554945, longitude: -3.958022 },
        { latitude: 12.554945, longitude: -7.081009 },
      ],
    },
    "5": {
      name: "Mopti",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.894947, longitude: -5.664042 },
        { latitude: 15.894947, longitude: -0.771271 },
        { latitude: 13.165761, longitude: -0.771271 },
        { latitude: 13.165761, longitude: -5.664042 },
      ],
    },
    "6": {
      name: "Timbuktu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 24.995065, longitude: -6.593108 },
        { latitude: 24.995065, longitude: 0.003736 },
        { latitude: 15.056619, longitude: 0.003736 },
        { latitude: 15.056619, longitude: -6.593108 },
      ],
    },
    "7": {
      name: "Gao",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 18.955277, longitude: -1.706919 },
        { latitude: 18.955277, longitude: 4.235639 },
        { latitude: 14.910977, longitude: 4.235639 },
        { latitude: 14.910977, longitude: -1.706919 },
      ],
    },
    "8": {
      name: "Kidal",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 21.848899, longitude: -2.043385 },
        { latitude: 21.848899, longitude: 4.232408 },
        { latitude: 17.628743, longitude: 4.232408 },
        { latitude: 17.628743, longitude: -2.043385 },
      ],
    },
    BKO: {
      name: "Bamako",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.704045, longitude: -8.068961 },
        { latitude: 12.704045, longitude: -7.931268 },
        { latitude: 12.542916, longitude: -7.931268 },
        { latitude: 12.542916, longitude: -8.068961 },
      ],
    },
  },
});

export const ZA: ProvinceCountry = deepFreeze({
  name: "South Africa",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    EC: {
      name: "Eastern Cape",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -29.978587, longitude: 22.736627 },
        { latitude: -29.978587, longitude: 30.195975 },
        { latitude: -34.205662, longitude: 30.195975 },
        { latitude: -34.205662, longitude: 22.736627 },
      ],
    },
    FS: {
      name: "Free State",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -26.666537, longitude: 24.34082 },
        { latitude: -26.666537, longitude: 29.774958 },
        { latitude: -30.680556, longitude: 29.774958 },
        { latitude: -30.680556, longitude: 24.34082 },
      ],
    },
    GT: {
      name: "Gauteng",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -25.114901, longitude: 27.157317 },
        { latitude: -25.114901, longitude: 29.088954 },
        { latitude: -26.904042, longitude: 29.088954 },
        { latitude: -26.904042, longitude: 27.157317 },
      ],
    },
    LP: {
      name: "Limpopo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -22.126452, longitude: 26.404 },
        { latitude: -22.126452, longitude: 31.856492 },
        { latitude: -25.411034, longitude: 31.856492 },
        { latitude: -25.411034, longitude: 26.404 },
      ],
    },
    MP: {
      name: "Mpumalanga",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -23.962958, longitude: 28.255826 },
        { latitude: -23.962958, longitude: 31.995753 },
        { latitude: -27.510879, longitude: 31.995753 },
        { latitude: -27.510879, longitude: 28.255826 },
      ],
    },
    NC: {
      name: "Northern Cape",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -24.752493, longitude: 16.46998 },
        { latitude: -24.752493, longitude: 25.521988 },
        { latitude: -32.936852, longitude: 25.521988 },
        { latitude: -32.936852, longitude: 16.46998 },
      ],
    },
    NL: {
      name: "KwaZulu-Natal",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -26.808285, longitude: 28.859014 },
        { latitude: -26.808285, longitude: 32.893078 },
        { latitude: -31.077895, longitude: 32.893078 },
        { latitude: -31.077895, longitude: 28.859014 },
      ],
    },
    NW: {
      name: "North West",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -24.622372, longitude: 22.620862 },
        { latitude: -24.622372, longitude: 28.293705 },
        { latitude: -28.099577, longitude: 28.293705 },
        { latitude: -28.099577, longitude: 22.620862 },
      ],
    },
    WC: {
      name: "Western Cape",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -30.47075, longitude: 17.767112 },
        { latitude: -30.47075, longitude: 37.977795 },
        { latitude: -46.965753, longitude: 37.977795 },
        { latitude: -46.965753, longitude: 17.767112 },
      ],
    },
  },
});

export const ET: ProvinceCountry = deepFreeze({
  name: "Ethiopia",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AA: {
      name: "Addis Ababa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 9.096887, longitude: 38.655035 },
        { latitude: 9.096887, longitude: 38.907941 },
        { latitude: 8.832588, longitude: 38.907941 },
        { latitude: 8.832588, longitude: 38.655035 },
      ],
    },
    AF: {
      name: "Afar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 14.465966, longitude: 39.668204 },
        { latitude: 14.465966, longitude: 42.379459 },
        { latitude: 8.842923, longitude: 42.379459 },
        { latitude: 8.842923, longitude: 39.668204 },
      ],
    },
    AM: {
      name: "Amhara",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.776176, longitude: 35.248379 },
        { latitude: 13.776176, longitude: 40.196649 },
        { latitude: 8.756107, longitude: 40.196649 },
        { latitude: 8.756107, longitude: 35.248379 },
      ],
    },
    BE: {
      name: "Benshangul-Gumaz",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.03787, longitude: 34.066891 },
        { latitude: 12.03787, longitude: 37.046142 },
        { latitude: 8.787113, longitude: 37.046142 },
        { latitude: 8.787113, longitude: 34.066891 },
      ],
    },
    DD: {
      name: "Dire Dawa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 9.780566, longitude: 41.731748 },
        { latitude: 9.780566, longitude: 42.341014 },
        { latitude: 9.473763, longitude: 42.341014 },
        { latitude: 9.473763, longitude: 41.731748 },
      ],
    },
    GA: {
      name: "Gambela Peoples",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 8.607692, longitude: 32.9898 },
        { latitude: 8.607692, longitude: 35.365626 },
        { latitude: 7.012053, longitude: 35.365626 },
        { latitude: 7.012053, longitude: 32.9898 },
      ],
    },
    HA: {
      name: "Harari People",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 9.384828, longitude: 42.061132 },
        { latitude: 9.384828, longitude: 42.274145 },
        { latitude: 9.188664, longitude: 42.274145 },
        { latitude: 9.188664, longitude: 42.061132 },
      ],
    },
    OR: {
      name: "Oromiya",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 10.382235, longitude: 34.083096 },
        { latitude: 10.382235, longitude: 42.914311 },
        { latitude: 3.513585, longitude: 42.914311 },
        { latitude: 3.513585, longitude: 34.083096 },
      ],
    },
    SN: {
      name: "Southern Nations, Nationalities and Peoples",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 8.457288, longitude: 34.195773 },
        { latitude: 8.457288, longitude: 39.135007 },
        { latitude: 4.43118, longitude: 39.135007 },
        { latitude: 4.43118, longitude: 34.195773 },
      ],
    },
    SO: {
      name: "Somali",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 11.08966, longitude: 39.090441 },
        { latitude: 11.08966, longitude: 47.97917 },
        { latitude: 3.403333, longitude: 47.97917 },
        { latitude: 3.403333, longitude: 39.090441 },
      ],
    },
    TI: {
      name: "Tigray",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 14.879532, longitude: 36.432121 },
        { latitude: 14.879532, longitude: 39.99984 },
        { latitude: 12.251061, longitude: 39.99984 },
        { latitude: 12.251061, longitude: 36.432121 },
      ],
    },
  },
});

export const MR: ProvinceCountry = deepFreeze({
  name: "Mauritania",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    "01": {
      name: "Hodh ech Chargui",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 23.123981, longitude: -9.149747 },
        { latitude: 23.123981, longitude: -5.353286 },
        { latitude: 15.493422, longitude: -5.353286 },
        { latitude: 15.493422, longitude: -9.149747 },
      ],
    },
    "02": {
      name: "Hodh el Gharbi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 17.72282, longitude: -11.093634 },
        { latitude: 17.72282, longitude: -8.289229 },
        { latitude: 15.364748, longitude: -8.289229 },
        { latitude: 15.364748, longitude: -11.093634 },
      ],
    },
    "03": {
      name: "Assaba",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 18.310924, longitude: -12.836472 },
        { latitude: 18.310924, longitude: -10.584745 },
        { latitude: 15.102904, longitude: -10.584745 },
        { latitude: 15.102904, longitude: -12.836472 },
      ],
    },
    "04": {
      name: "Gorgol",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.858299, longitude: -13.722775 },
        { latitude: 16.858299, longitude: -12.004895 },
        { latitude: 15.131136, longitude: -12.004895 },
        { latitude: 15.131136, longitude: -13.722775 },
      ],
    },
    "05": {
      name: "Brakna",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 18.557007, longitude: -14.948935 },
        { latitude: 18.557007, longitude: -12.310224 },
        { latitude: 16.1185, longitude: -12.310224 },
        { latitude: 16.1185, longitude: -14.948935 },
      ],
    },
    "06": {
      name: "Trarza",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 19.00052, longitude: -16.542349 },
        { latitude: 19.00052, longitude: -12.669065 },
        { latitude: 15.808824, longitude: -12.669065 },
        { latitude: 15.808824, longitude: -16.542349 },
      ],
    },
    "07": {
      name: "Adrar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 24.275967, longitude: -14.295598 },
        { latitude: 24.275967, longitude: -6.371633 },
        { latitude: 18.557007, longitude: -6.371633 },
        { latitude: 18.557007, longitude: -14.295598 },
      ],
    },
    "08": {
      name: "Dakhlet Nouadhibou",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 21.333226, longitude: -17.081176 },
        { latitude: 21.333226, longitude: -14.173185 },
        { latitude: 19.408271, longitude: -14.173185 },
        { latitude: 19.408271, longitude: -17.081176 },
      ],
    },
    "09": {
      name: "Tagant",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 19.725411, longitude: -12.669067 },
        { latitude: 19.725411, longitude: -7.987723 },
        { latitude: 17.086167, longitude: -7.987723 },
        { latitude: 17.086167, longitude: -12.669067 },
      ],
    },
    "10": {
      name: "Guidimaka",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.055429, longitude: -12.746639 },
        { latitude: 16.055429, longitude: -11.500325 },
        { latitude: 14.734399, longitude: -11.500325 },
        { latitude: 14.734399, longitude: -12.746639 },
      ],
    },
    "11": {
      name: "Tiris Zemmour",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.285416, longitude: -13.165497 },
        { latitude: 27.285416, longitude: -4.821613 },
        { latitude: 21.351617, longitude: -4.821613 },
        { latitude: 21.351617, longitude: -13.165497 },
      ],
    },
    "12": {
      name: "Inchiri",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 21.150802, longitude: -16.535472 },
        { latitude: 21.150802, longitude: -14.154479 },
        { latitude: 18.995876, longitude: -14.154479 },
        { latitude: 18.995876, longitude: -16.535472 },
      ],
    },
    NKC: {
      name: "Nouakchott",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 18.393064, longitude: -16.060118 },
        { latitude: 18.393064, longitude: -15.780013 },
        { latitude: 17.886402, longitude: -15.780013 },
        { latitude: 17.886402, longitude: -16.060118 },
      ],
    },
  },
});

export const RU: ProvinceCountry = deepFreeze({
  name: "Russia",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AD: {
      name: "Adygey",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.193521, longitude: 38.671882 },
        { latitude: 45.193521, longitude: 40.754133 },
        { latitude: 43.751232, longitude: 40.754133 },
        { latitude: 43.751232, longitude: 38.671882 },
      ],
    },
    AL: {
      name: "Gorno-Altay",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 52.667793, longitude: 84.00493 },
        { latitude: 52.667793, longitude: 89.869171 },
        { latitude: 49.071011, longitude: 89.869171 },
        { latitude: 49.071011, longitude: 84.00493 },
      ],
    },
    ALT: {
      name: "Altay",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.488044, longitude: 77.784656 },
        { latitude: 54.488044, longitude: 87.187475 },
        { latitude: 50.634613, longitude: 87.187475 },
        { latitude: 50.634613, longitude: 77.784656 },
      ],
    },
    AMU: {
      name: "Amur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 57.040653, longitude: 119.669522 },
        { latitude: 57.040653, longitude: 134.956446 },
        { latitude: 48.853453, longitude: 134.956446 },
        { latitude: 48.853453, longitude: 119.669522 },
      ],
    },
    ARK: {
      name: "Arkhangel'sk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 81.85871, longitude: 35.857377 },
        { latitude: 81.85871, longitude: 69.033947 },
        { latitude: 60.645963, longitude: 69.033947 },
        { latitude: 60.645963, longitude: 35.857377 },
      ],
    },
    AST: {
      name: "Astrakhan'",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.868904, longitude: 44.984158 },
        { latitude: 48.868904, longitude: 49.306 },
        { latitude: 45.447903, longitude: 49.306 },
        { latitude: 45.447903, longitude: 44.984158 },
      ],
    },
    BA: {
      name: "Bashkortostan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.53841, longitude: 53.140457 },
        { latitude: 56.53841, longitude: 59.974562 },
        { latitude: 51.572098, longitude: 59.974562 },
        { latitude: 51.572098, longitude: 53.140457 },
      ],
    },
    BEL: {
      name: "Belgorod",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 51.421564, longitude: 35.282218 },
        { latitude: 51.421564, longitude: 39.272363 },
        { latitude: 49.803473, longitude: 39.272363 },
        { latitude: 49.803473, longitude: 35.282218 },
      ],
    },
    BRY: {
      name: "Bryansk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.032723, longitude: 31.247063 },
        { latitude: 54.032723, longitude: 35.313949 },
        { latitude: 51.826811, longitude: 35.313949 },
        { latitude: 51.826811, longitude: 31.247063 },
      ],
    },
    BU: {
      name: "Buryat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 57.243483, longitude: 98.629152 },
        { latitude: 57.243483, longitude: 116.927469 },
        { latitude: 49.967353, longitude: 116.927469 },
        { latitude: 49.967353, longitude: 98.629152 },
      ],
    },
    CE: {
      name: "Chechnya",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 44.015195, longitude: 44.838535 },
        { latitude: 44.015195, longitude: 46.67553 },
        { latitude: 42.470647, longitude: 46.67553 },
        { latitude: 42.470647, longitude: 44.838535 },
      ],
    },
    CHE: {
      name: "Chelyabinsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.375784, longitude: 57.136284 },
        { latitude: 56.375784, longitude: 63.340351 },
        { latitude: 51.99261, longitude: 63.340351 },
        { latitude: 51.99261, longitude: 57.136284 },
      ],
    },
    CHU: {
      name: "Chukchi Autonomous Okrug",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 71.600043, longitude: 157.691078 },
        { latitude: 71.600043, longitude: -168.994618 },
        { latitude: 61.814643, longitude: -168.994618 },
        { latitude: 61.814643, longitude: 157.691078 },
      ],
    },
    CU: {
      name: "Chuvash",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.335166, longitude: 45.920122 },
        { latitude: 56.335166, longitude: 48.412373 },
        { latitude: 54.630257, longitude: 48.412373 },
        { latitude: 54.630257, longitude: 45.920122 },
      ],
    },
    DA: {
      name: "Dagestan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.000509, longitude: 45.104978 },
        { latitude: 45.000509, longitude: 48.578949 },
        { latitude: 41.192681, longitude: 48.578949 },
        { latitude: 41.192681, longitude: 45.104978 },
      ],
    },
    IN: {
      name: "Ingush",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 43.619844, longitude: 44.497469 },
        { latitude: 43.619844, longitude: 45.18022 },
        { latitude: 42.609648, longitude: 45.18022 },
        { latitude: 42.609648, longitude: 44.497469 },
      ],
    },
    IRK: {
      name: "Irkutsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 64.299719, longitude: 95.653107 },
        { latitude: 64.299719, longitude: 119.132811 },
        { latitude: 51.131866, longitude: 119.132811 },
        { latitude: 51.131866, longitude: 95.653107 },
      ],
    },
    IVA: {
      name: "Ivanovo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 57.74986, longitude: 39.385534 },
        { latitude: 57.74986, longitude: 43.863298 },
        { latitude: 56.368007, longitude: 43.863298 },
        { latitude: 56.368007, longitude: 39.385534 },
      ],
    },
    KAM: {
      name: "Kamchatka",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 64.934254, longitude: 155.551177 },
        { latitude: 64.934254, longitude: 174.512378 },
        { latitude: 50.863917, longitude: 174.512378 },
        { latitude: 50.863917, longitude: 155.551177 },
      ],
    },
    KB: {
      name: "Kabardin-Balkar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 43.998555, longitude: 42.36256 },
        { latitude: 43.998555, longitude: 44.433702 },
        { latitude: 42.886882, longitude: 44.433702 },
        { latitude: 42.886882, longitude: 42.36256 },
      ],
    },
    KC: {
      name: "Karachay-Cherkess",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 44.494752, longitude: 40.689966 },
        { latitude: 44.494752, longitude: 42.683214 },
        { latitude: 43.18057, longitude: 42.683214 },
        { latitude: 43.18057, longitude: 40.689966 },
      ],
    },
    KDA: {
      name: "Krasnodar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 46.862955, longitude: 36.577322 },
        { latitude: 46.862955, longitude: 41.729372 },
        { latitude: 43.38899, longitude: 41.729372 },
        { latitude: 43.38899, longitude: 36.577322 },
      ],
    },
    KEM: {
      name: "Kemerovo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.832965, longitude: 84.410382 },
        { latitude: 56.832965, longitude: 89.449043 },
        { latitude: 52.168005, longitude: 89.449043 },
        { latitude: 52.168005, longitude: 84.410382 },
      ],
    },
    KGD: {
      name: "Kaliningrad",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 55.28996, longitude: 19.609547 },
        { latitude: 55.28996, longitude: 22.848353 },
        { latitude: 54.342937, longitude: 22.848353 },
        { latitude: 54.342937, longitude: 19.609547 },
      ],
    },
    KGN: {
      name: "Kurgan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.841802, longitude: 61.966894 },
        { latitude: 56.841802, longitude: 68.734235 },
        { latitude: 54.16269, longitude: 68.734235 },
        { latitude: 54.16269, longitude: 61.966894 },
      ],
    },
    KHA: {
      name: "Khabarovsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 62.574424, longitude: 130.391659 },
        { latitude: 62.574424, longitude: 147.158802 },
        { latitude: 46.625914, longitude: 147.158802 },
        { latitude: 46.625914, longitude: 130.391659 },
      ],
    },
    KHM: {
      name: "Khanty-Mansiy",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 65.717126, longitude: 59.223186 },
        { latitude: 65.717126, longitude: 85.973905 },
        { latitude: 58.589086, longitude: 85.973905 },
        { latitude: 58.589086, longitude: 59.223186 },
      ],
    },
    KIR: {
      name: "Kirov",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 61.059116, longitude: 46.30046 },
        { latitude: 61.059116, longitude: 53.922011 },
        { latitude: 56.073012, longitude: 53.922011 },
        { latitude: 56.073012, longitude: 46.30046 },
      ],
    },
    KK: {
      name: "Khakass",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 55.44559, longitude: 87.834567 },
        { latitude: 55.44559, longitude: 91.846415 },
        { latitude: 51.316351, longitude: 91.846415 },
        { latitude: 51.316351, longitude: 87.834567 },
      ],
    },
    KL: {
      name: "Kalmyk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.25907, longitude: 41.647101 },
        { latitude: 48.25907, longitude: 47.538259 },
        { latitude: 44.751868, longitude: 47.538259 },
        { latitude: 44.751868, longitude: 41.647101 },
      ],
    },
    KLU: {
      name: "Kaluga",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 55.319673, longitude: 33.424243 },
        { latitude: 55.319673, longitude: 37.25905 },
        { latitude: 53.270547, longitude: 37.25905 },
        { latitude: 53.270547, longitude: 33.424243 },
      ],
    },
    KO: {
      name: "Komi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 68.431276, longitude: 45.427128 },
        { latitude: 68.431276, longitude: 66.209531 },
        { latitude: 59.208376, longitude: 66.209531 },
        { latitude: 59.208376, longitude: 45.427128 },
      ],
    },
    KOS: {
      name: "Kostroma",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 59.632536, longitude: 40.385162 },
        { latitude: 59.632536, longitude: 47.604362 },
        { latitude: 57.276349, longitude: 47.604362 },
        { latitude: 57.276349, longitude: 40.385162 },
      ],
    },
    KR: {
      name: "Karelia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 66.684147, longitude: 29.277059 },
        { latitude: 66.684147, longitude: 37.942418 },
        { latitude: 60.645704, longitude: 37.942418 },
        { latitude: 60.645704, longitude: 29.277059 },
      ],
    },
    KRS: {
      name: "Kursk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 52.432976, longitude: 34.0795 },
        { latitude: 52.432976, longitude: 38.505072 },
        { latitude: 50.90573, longitude: 38.505072 },
        { latitude: 50.90573, longitude: 34.0795 },
      ],
    },
    KYA: {
      name: "Krasnoyarsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 81.288804, longitude: 76.051443 },
        { latitude: 81.288804, longitude: 113.890148 },
        { latitude: 51.781439, longitude: 113.890148 },
        { latitude: 51.781439, longitude: 76.051443 },
      ],
    },
    LEN: {
      name: "Leningrad",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 61.321012, longitude: 26.944508 },
        { latitude: 61.321012, longitude: 35.691806 },
        { latitude: 58.440309, longitude: 35.691806 },
        { latitude: 58.440309, longitude: 26.944508 },
      ],
    },
    LIP: {
      name: "Lipetsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 53.592388, longitude: 37.711838 },
        { latitude: 53.592388, longitude: 40.702767 },
        { latitude: 51.878953, longitude: 40.702767 },
        { latitude: 51.878953, longitude: 37.711838 },
      ],
    },
    MAG: {
      name: "Maga Buryatdan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 66.359387, longitude: 144.71864 },
        { latitude: 66.359387, longitude: 163.460856 },
        { latitude: 58.832562, longitude: 163.460856 },
        { latitude: 58.832562, longitude: 144.71864 },
      ],
    },
    ME: {
      name: "Mariy-El",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 57.330119, longitude: 45.628667 },
        { latitude: 57.330119, longitude: 50.197588 },
        { latitude: 55.828169, longitude: 50.197588 },
        { latitude: 55.828169, longitude: 45.628667 },
      ],
    },
    MO: {
      name: "Mordovia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 55.176762, longitude: 42.183606 },
        { latitude: 55.176762, longitude: 46.742502 },
        { latitude: 53.66135, longitude: 46.742502 },
        { latitude: 53.66135, longitude: 42.183606 },
      ],
    },
    MOS: {
      name: "Moskva",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.059637, longitude: 36.904341 },
        { latitude: 56.059637, longitude: 37.888547 },
        { latitude: 54.990824, longitude: 37.888547 },
        { latitude: 54.990824, longitude: 36.904341 },
      ],
    },
    MOW: {
      name: "Moskovskaya",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.953578, longitude: 35.171321 },
        { latitude: 56.953578, longitude: 40.206467 },
        { latitude: 54.244674, longitude: 40.206467 },
        { latitude: 54.244674, longitude: 35.171321 },
      ],
    },
    MUR: {
      name: "Murmansk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 80.174872, longitude: 28.410234 },
        { latitude: 80.174872, longitude: 41.390392 },
        { latitude: 66.054998, longitude: 41.390392 },
        { latitude: 66.054998, longitude: 28.410234 },
      ],
    },
    NEN: {
      name: "Nenets",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 70.479804, longitude: 43.273673 },
        { latitude: 70.479804, longitude: 65.654423 },
        { latitude: 65.808076, longitude: 65.654423 },
        { latitude: 65.808076, longitude: 43.273673 },
      ],
    },
    NE_RUS_283: {
      name: "Crimea",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 46.218106, longitude: 32.481618 },
        { latitude: 46.218106, longitude: 36.638358 },
        { latitude: 44.381049, longitude: 36.638358 },
        { latitude: 44.381049, longitude: 32.481618 },
      ],
    },
    NE_RUS_5482: {
      name: "Sevastopol",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 44.852465, longitude: 33.371104 },
        { latitude: 44.852465, longitude: 33.852069 },
        { latitude: 44.397974, longitude: 33.852069 },
        { latitude: 44.397974, longitude: 33.371104 },
      ],
    },
    NE_RUS_99: {
      name: "Unnamed source area RUS+99?",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 68.82038, longitude: 67.115815 },
        { latitude: 68.82038, longitude: 67.4074 },
        { latitude: 68.75731, longitude: 67.4074 },
        { latitude: 68.75731, longitude: 67.115815 },
      ],
    },
    NGR: {
      name: "Novgorod",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 59.432135, longitude: 29.653414 },
        { latitude: 59.432135, longitude: 36.237407 },
        { latitude: 56.930634, longitude: 36.237407 },
        { latitude: 56.930634, longitude: 29.653414 },
      ],
    },
    NIZ: {
      name: "Nizhegorod",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 58.089219, longitude: 41.781666 },
        { latitude: 58.089219, longitude: 47.768485 },
        { latitude: 54.471042, longitude: 47.768485 },
        { latitude: 54.471042, longitude: 41.781666 },
      ],
    },
    NVS: {
      name: "Novosibirsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 57.250253, longitude: 75.08692 },
        { latitude: 57.250253, longitude: 85.079386 },
        { latitude: 53.32744, longitude: 85.079386 },
        { latitude: 53.32744, longitude: 75.08692 },
      ],
    },
    OMS: {
      name: "Omsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 58.581024, longitude: 70.383952 },
        { latitude: 58.581024, longitude: 76.318991 },
        { latitude: 53.430021, longitude: 76.318991 },
        { latitude: 53.430021, longitude: 70.383952 },
      ],
    },
    ORE: {
      name: "Orenburg",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.37725, longitude: 50.767009 },
        { latitude: 54.37725, longitude: 61.663657 },
        { latitude: 50.474646, longitude: 61.663657 },
        { latitude: 50.474646, longitude: 50.767009 },
      ],
    },
    ORL: {
      name: "Orel",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 53.644039, longitude: 34.794703 },
        { latitude: 53.644039, longitude: 38.038433 },
        { latitude: 51.926598, longitude: 38.038433 },
        { latitude: 51.926598, longitude: 34.794703 },
      ],
    },
    PER: {
      name: "Perm'",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 61.682178, longitude: 51.774235 },
        { latitude: 61.682178, longitude: 59.472371 },
        { latitude: 56.099573, longitude: 59.472371 },
        { latitude: 56.099573, longitude: 51.774235 },
      ],
    },
    PNZ: {
      name: "Penza",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.017013, longitude: 42.087488 },
        { latitude: 54.017013, longitude: 46.983211 },
        { latitude: 52.316135, longitude: 46.983211 },
        { latitude: 52.316135, longitude: 42.087488 },
      ],
    },
    PRI: {
      name: "Primor'ye",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.445002, longitude: 130.379669 },
        { latitude: 48.445002, longitude: 139.026377 },
        { latitude: 42.295111, longitude: 139.026377 },
        { latitude: 42.295111, longitude: 130.379669 },
      ],
    },
    PSK: {
      name: "Pskov",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 59.014383, longitude: 27.328026 },
        { latitude: 59.014383, longitude: 31.510563 },
        { latitude: 55.57777, longitude: 31.510563 },
        { latitude: 55.57777, longitude: 27.328026 },
      ],
    },
    ROS: {
      name: "Rostov",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 50.22634, longitude: 38.188706 },
        { latitude: 50.22634, longitude: 44.334381 },
        { latitude: 45.946808, longitude: 44.334381 },
        { latitude: 45.946808, longitude: 38.188706 },
      ],
    },
    RYA: {
      name: "Ryazan'",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 55.339982, longitude: 38.671883 },
        { latitude: 55.339982, longitude: 42.699544 },
        { latitude: 53.334678, longitude: 42.699544 },
        { latitude: 53.334678, longitude: 38.671883 },
      ],
    },
    SA: {
      name: "Sakha (Yakutia)",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 77.1258, longitude: 105.540152 },
        { latitude: 77.1258, longitude: 162.84694 },
        { latitude: 55.465194, longitude: 162.84694 },
        { latitude: 55.465194, longitude: 105.540152 },
      ],
    },
    SAK: {
      name: "Sakhalin",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.426825, longitude: 141.639008 },
        { latitude: 54.426825, longitude: 156.51099 },
        { latitude: 43.402248, longitude: 156.51099 },
        { latitude: 43.402248, longitude: 141.639008 },
      ],
    },
    SAM: {
      name: "Samara",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.676353, longitude: 47.945114 },
        { latitude: 54.676353, longitude: 52.538531 },
        { latitude: 51.7594, longitude: 52.538531 },
        { latitude: 51.7594, longitude: 47.945114 },
      ],
    },
    SAR: {
      name: "Saratov",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 52.81011, longitude: 42.479609 },
        { latitude: 52.81011, longitude: 50.794501 },
        { latitude: 49.809674, longitude: 50.794501 },
        { latitude: 49.809674, longitude: 42.479609 },
      ],
    },
    SE: {
      name: "North Ossetia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 43.830762, longitude: 43.386178 },
        { latitude: 43.830762, longitude: 44.944368 },
        { latitude: 42.55221, longitude: 44.944368 },
        { latitude: 42.55221, longitude: 43.386178 },
      ],
    },
    SMO: {
      name: "Smolensk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.07451, longitude: 30.762649 },
        { latitude: 56.07451, longitude: 35.398492 },
        { latitude: 53.414389, longitude: 35.398492 },
        { latitude: 53.414389, longitude: 30.762649 },
      ],
    },
    SPE: {
      name: "City of St. Petersburg",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 60.266012, longitude: 29.417898 },
        { latitude: 60.266012, longitude: 30.756191 },
        { latitude: 59.603856, longitude: 30.756191 },
        { latitude: 59.603856, longitude: 29.417898 },
      ],
    },
    STA: {
      name: "Stavropol'",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 46.241416, longitude: 40.840846 },
        { latitude: 46.241416, longitude: 45.717344 },
        { latitude: 43.652116, longitude: 45.717344 },
        { latitude: 43.652116, longitude: 40.840846 },
      ],
    },
    SVE: {
      name: "Sverdlovsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 61.993271, longitude: 57.218657 },
        { latitude: 61.993271, longitude: 66.197024 },
        { latitude: 56.053995, longitude: 66.197024 },
        { latitude: 56.053995, longitude: 57.218657 },
      ],
    },
    TA: {
      name: "Tatarstan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.676102, longitude: 47.241902 },
        { latitude: 56.676102, longitude: 54.230933 },
        { latitude: 53.969161, longitude: 54.230933 },
        { latitude: 53.969161, longitude: 47.241902 },
      ],
    },
    TAM: {
      name: "Tambov",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 53.823485, longitude: 39.95108 },
        { latitude: 53.823485, longitude: 43.237909 },
        { latitude: 51.594112, longitude: 43.237909 },
        { latitude: 51.594112, longitude: 39.95108 },
      ],
    },
    TOM: {
      name: "Tomsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 61.04723, longitude: 75.069144 },
        { latitude: 61.04723, longitude: 89.390647 },
        { latitude: 55.680581, longitude: 89.390647 },
        { latitude: 55.680581, longitude: 75.069144 },
      ],
    },
    TUL: {
      name: "Tula",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.838307, longitude: 35.910293 },
        { latitude: 54.838307, longitude: 38.921998 },
        { latitude: 52.961677, longitude: 38.921998 },
        { latitude: 52.961677, longitude: 35.910293 },
      ],
    },
    TVE: {
      name: "Tver'",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 58.869482, longitude: 30.780787 },
        { latitude: 58.869482, longitude: 38.308288 },
        { latitude: 55.631798, longitude: 38.308288 },
        { latitude: 55.631798, longitude: 30.780787 },
      ],
    },
    TY: {
      name: "Tuva",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 53.729072, longitude: 88.7357 },
        { latitude: 53.729072, longitude: 99.249787 },
        { latitude: 49.725545, longitude: 99.249787 },
        { latitude: 49.725545, longitude: 88.7357 },
      ],
    },
    TYU: {
      name: "Tyumen'",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 59.989181, longitude: 64.827392 },
        { latitude: 59.989181, longitude: 75.159475 },
        { latitude: 55.131985, longitude: 75.159475 },
        { latitude: 55.131985, longitude: 64.827392 },
      ],
    },
    UD: {
      name: "Udmurt",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 58.543817, longitude: 51.115567 },
        { latitude: 58.543817, longitude: 54.399812 },
        { latitude: 55.85672, longitude: 54.399812 },
        { latitude: 55.85672, longitude: 51.115567 },
      ],
    },
    ULY: {
      name: "Ul'yanovsk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 55.01628, longitude: 45.791551 },
        { latitude: 55.01628, longitude: 50.25712 },
        { latitude: 52.567076, longitude: 50.25712 },
        { latitude: 52.567076, longitude: 45.791551 },
      ],
    },
    VGG: {
      name: "Volgograd",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 51.240439, longitude: 41.165786 },
        { latitude: 51.240439, longitude: 47.43446 },
        { latitude: 47.44465, longitude: 47.43446 },
        { latitude: 47.44465, longitude: 41.165786 },
      ],
    },
    VLA: {
      name: "Vladimir",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.824697, longitude: 38.293405 },
        { latitude: 56.824697, longitude: 42.947901 },
        { latitude: 55.10891, longitude: 42.947901 },
        { latitude: 55.10891, longitude: 38.293405 },
      ],
    },
    VLG: {
      name: "Vologda",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 61.594432, longitude: 34.7299 },
        { latitude: 61.594432, longitude: 47.136689 },
        { latitude: 58.490229, longitude: 47.136689 },
        { latitude: 58.490229, longitude: 34.7299 },
      ],
    },
    VOR: {
      name: "Voronezh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 52.105011, longitude: 38.139202 },
        { latitude: 52.105011, longitude: 42.905424 },
        { latitude: 49.541473, longitude: 42.905424 },
        { latitude: 49.541473, longitude: 38.139202 },
      ],
    },
    YAN: {
      name: "Yamal-Nenets",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 73.579047, longitude: 62.018467 },
        { latitude: 73.579047, longitude: 86.030542 },
        { latitude: 62.177962, longitude: 86.030542 },
        { latitude: 62.177962, longitude: 62.018467 },
      ],
    },
    YAR: {
      name: "Yaroslavl'",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 58.953766, longitude: 37.345554 },
        { latitude: 58.953766, longitude: 41.163927 },
        { latitude: 56.538306, longitude: 41.163927 },
        { latitude: 56.538306, longitude: 37.345554 },
      ],
    },
    YEV: {
      name: "Yevrey",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 49.485507, longitude: 130.529738 },
        { latitude: 49.485507, longitude: 134.986624 },
        { latitude: 47.661536, longitude: 134.986624 },
        { latitude: 47.661536, longitude: 130.529738 },
      ],
    },
    ZAB: {
      name: "Chita",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 58.407805, longitude: 107.744603 },
        { latitude: 58.407805, longitude: 122.139139 },
        { latitude: 49.134521, longitude: 122.139139 },
        { latitude: 49.134521, longitude: 107.744603 },
      ],
    },
  },
});

export const CA: ProvinceCountry = deepFreeze({
  name: "Canada",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AB: {
      name: "Alberta",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 60.000059, longitude: -120.001016 },
        { latitude: 60.000059, longitude: -109.999321 },
        { latitude: 48.992515, longitude: -109.999321 },
        { latitude: 48.992515, longitude: -120.001016 },
      ],
    },
    BC: {
      name: "British Columbia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 60.000059, longitude: -139.060207 },
        { latitude: 60.000059, longitude: -114.037451 },
        { latitude: 48.306098, longitude: -114.037451 },
        { latitude: 48.306098, longitude: -139.060207 },
      ],
    },
    MB: {
      name: "Manitoba",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 60.000067, longitude: -102.001598 },
        { latitude: 60.000067, longitude: -88.947 },
        { latitude: 48.99267, longitude: -88.947 },
        { latitude: 48.99267, longitude: -102.001598 },
      ],
    },
    NB: {
      name: "New Brunswick",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.075141, longitude: -69.06356 },
        { latitude: 48.075141, longitude: -63.771108 },
        { latitude: 44.602757, longitude: -63.771108 },
        { latitude: 44.602757, longitude: -69.06356 },
      ],
    },
    NL: {
      name: "Newfoundland and Labrador",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 60.372746, longitude: -67.808068 },
        { latitude: 60.372746, longitude: -52.616606 },
        { latitude: 46.618354, longitude: -52.616606 },
        { latitude: 46.618354, longitude: -67.808068 },
      ],
    },
    NS: {
      name: "Nova Scotia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 47.034817, longitude: -66.327748 },
        { latitude: 47.034817, longitude: -59.688628 },
        { latitude: 43.422065, longitude: -59.688628 },
        { latitude: 43.422065, longitude: -66.327748 },
      ],
    },
    NT: {
      name: "Northwest Territories",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 78.766343, longitude: -136.445387 },
        { latitude: 78.766343, longitude: -101.986585 },
        { latitude: 60.000059, longitude: -101.986585 },
        { latitude: 60.000059, longitude: -136.445387 },
      ],
    },
    NU: {
      name: "Nunavut",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 83.116523, longitude: -120.68082 },
        { latitude: 83.116523, longitude: -61.085479 },
        { latitude: 51.918647, longitude: -61.085479 },
        { latitude: 51.918647, longitude: -120.68082 },
      ],
    },
    ON: {
      name: "Ontario",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 56.861274, longitude: -95.161196 },
        { latitude: 56.861274, longitude: -74.346181 },
        { latitude: 41.669086, longitude: -74.346181 },
        { latitude: 41.669086, longitude: -95.161196 },
      ],
    },
    PE: {
      name: "Prince Edward Island",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 47.067328, longitude: -64.41682 },
        { latitude: 47.067328, longitude: -61.976958 },
        { latitude: 45.950751, longitude: -61.976958 },
        { latitude: 45.950751, longitude: -64.41682 },
      ],
    },
    QC: {
      name: "Québec",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 62.593817, longitude: -79.765615 },
        { latitude: 62.593817, longitude: -57.10033 },
        { latitude: 44.99803, longitude: -57.10033 },
        { latitude: 44.99803, longitude: -79.765615 },
      ],
    },
    SK: {
      name: "Saskatchewan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 60.000059, longitude: -109.999974 },
        { latitude: 60.000059, longitude: -101.364339 },
        { latitude: 48.992618, longitude: -101.364339 },
        { latitude: 48.992618, longitude: -109.999974 },
      ],
    },
    YT: {
      name: "Yukon",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 69.654202, longitude: -141.005564 },
        { latitude: 69.654202, longitude: -123.819102 },
        { latitude: 60.000059, longitude: -123.819102 },
        { latitude: 60.000059, longitude: -141.005564 },
      ],
    },
  },
});

export const US: ProvinceCountry = deepFreeze({
  name: "United States",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AK: {
      name: "Alaska",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 71.412502, longitude: 172.476085 },
        { latitude: 71.412502, longitude: -129.989246 },
        { latitude: 51.215399, longitude: -129.989246 },
        { latitude: 51.215399, longitude: 172.476085 },
      ],
    },
    AL: {
      name: "Alabama",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.009745, longitude: -88.486151 },
        { latitude: 35.009745, longitude: -84.897943 },
        { latitude: 30.223619, longitude: -84.897943 },
        { latitude: 30.223619, longitude: -88.486151 },
      ],
    },
    AR: {
      name: "Arkansas",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.499833, longitude: -94.61833 },
        { latitude: 36.499833, longitude: -89.667304 },
        { latitude: 33.010942, longitude: -89.667304 },
        { latitude: 33.010942, longitude: -94.61833 },
      ],
    },
    AZ: {
      name: "Arizona",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 37.003129, longitude: -114.822109 },
        { latitude: 37.003129, longitude: -109.046625 },
        { latitude: 31.327185, longitude: -109.046625 },
        { latitude: 31.327185, longitude: -114.822109 },
      ],
    },
    CA: {
      name: "California",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 41.99954, longitude: -124.409202 },
        { latitude: 41.99954, longitude: -114.11906 },
        { latitude: 32.531669, longitude: -114.11906 },
        { latitude: 32.531669, longitude: -124.409202 },
      ],
    },
    CO: {
      name: "Colorado",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 40.999833, longitude: -109.046625 },
        { latitude: 40.999833, longitude: -102.039569 },
        { latitude: 36.999809, longitude: -102.039569 },
        { latitude: 36.999809, longitude: -109.046625 },
      ],
    },
    CT: {
      name: "Connecticut",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.054545, longitude: -73.722968 },
        { latitude: 42.054545, longitude: -71.795746 },
        { latitude: 41.001065, longitude: -71.795746 },
        { latitude: 41.001065, longitude: -73.722968 },
      ],
    },
    DC: {
      name: "District of Columbia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 38.996136, longitude: -77.119781 },
        { latitude: 38.996136, longitude: -76.909314 },
        { latitude: 38.802768, longitude: -76.909314 },
        { latitude: 38.802768, longitude: -77.119781 },
      ],
    },
    DE: {
      name: "Delaware",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 39.838627, longitude: -75.788645 },
        { latitude: 39.838627, longitude: -75.043974 },
        { latitude: 38.453276, longitude: -75.043974 },
        { latitude: 38.453276, longitude: -75.788645 },
      ],
    },
    FL: {
      name: "Florida",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 31.000102, longitude: -87.626924 },
        { latitude: 31.000102, longitude: -80.032378 },
        { latitude: 24.542548, longitude: -80.032378 },
        { latitude: 24.542548, longitude: -87.626924 },
      ],
    },
    GA: {
      name: "Georgia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.000444, longitude: -85.605682 },
        { latitude: 35.000444, longitude: -80.835683 },
        { latitude: 30.362699, longitude: -80.835683 },
        { latitude: 30.362699, longitude: -85.605682 },
      ],
    },
    HI: {
      name: "Hawaii",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 28.401679, longitude: -178.304366 },
        { latitude: 28.401679, longitude: -154.814064 },
        { latitude: 18.906117, longitude: -154.814064 },
        { latitude: 18.906117, longitude: -178.304366 },
      ],
    },
    IA: {
      name: "Iowa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 43.500956, longitude: -96.637959 },
        { latitude: 43.500956, longitude: -90.140276 },
        { latitude: 40.379521, longitude: -90.140276 },
        { latitude: 40.379521, longitude: -96.637959 },
      ],
    },
    ID: {
      name: "Idaho",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.992515, longitude: -117.21535 },
        { latitude: 48.992515, longitude: -111.050237 },
        { latitude: 41.99954, longitude: -111.050237 },
        { latitude: 41.99954, longitude: -117.21535 },
      ],
    },
    IL: {
      name: "Illinois",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.511772, longitude: -91.518939 },
        { latitude: 42.511772, longitude: -87.018818 },
        { latitude: 36.978324, longitude: -87.018818 },
        { latitude: 36.978324, longitude: -91.518939 },
      ],
    },
    IN: {
      name: "Indiana",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 41.759721, longitude: -88.111859 },
        { latitude: 41.759721, longitude: -84.783954 },
        { latitude: 37.781938, longitude: -84.783954 },
        { latitude: 37.781938, longitude: -88.111859 },
      ],
    },
    KS: {
      name: "Kansas",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 40.000102, longitude: -102.051263 },
        { latitude: 40.000102, longitude: -94.610467 },
        { latitude: 36.999809, longitude: -94.610467 },
        { latitude: 36.999809, longitude: -102.051263 },
      ],
    },
    KY: {
      name: "Kentucky",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 39.14622, longitude: -89.577949 },
        { latitude: 39.14622, longitude: -81.965228 },
        { latitude: 36.498637, longitude: -81.965228 },
        { latitude: 36.498637, longitude: -89.577949 },
      ],
    },
    LA: {
      name: "Louisiana",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 33.014336, longitude: -94.043232 },
        { latitude: 33.014336, longitude: -88.810942 },
        { latitude: 28.928371, longitude: -88.810942 },
        { latitude: 28.928371, longitude: -94.043232 },
      ],
    },
    MA: {
      name: "Massachusetts",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.886796, longitude: -73.507246 },
        { latitude: 42.886796, longitude: -69.924671 },
        { latitude: 41.239257, longitude: -69.924671 },
        { latitude: 41.239257, longitude: -73.507246 },
      ],
    },
    MD: {
      name: "Maryland",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 39.721757, longitude: -79.487933 },
        { latitude: 39.721757, longitude: -75.043974 },
        { latitude: 37.931138, longitude: -75.043974 },
        { latitude: 37.931138, longitude: -79.487933 },
      ],
    },
    ME: {
      name: "Maine",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 47.459688, longitude: -71.084952 },
        { latitude: 47.459688, longitude: -66.977325 },
        { latitude: 43.083808, longitude: -66.977325 },
        { latitude: 43.083808, longitude: -71.084952 },
      ],
    },
    MI: {
      name: "Michigan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.305115, longitude: -90.412544 },
        { latitude: 48.305115, longitude: -82.145446 },
        { latitude: 41.696806, longitude: -82.145446 },
        { latitude: 41.696806, longitude: -90.412544 },
      ],
    },
    MN: {
      name: "Minnesota",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 49.369494, longitude: -97.229218 },
        { latitude: 49.369494, longitude: -89.498962 },
        { latitude: 43.500126, longitude: -89.498962 },
        { latitude: 43.500126, longitude: -97.229218 },
      ],
    },
    MO: {
      name: "Missouri",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 40.618803, longitude: -95.773042 },
        { latitude: 40.618803, longitude: -89.118889 },
        { latitude: 35.986186, longitude: -89.118889 },
        { latitude: 35.986186, longitude: -95.773042 },
      ],
    },
    MS: {
      name: "Mississippi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.000077, longitude: -91.657343 },
        { latitude: 35.000077, longitude: -88.088153 },
        { latitude: 30.181545, longitude: -88.088153 },
        { latitude: 30.181545, longitude: -91.657343 },
      ],
    },
    MT: {
      name: "Montana",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.992618, longitude: -116.048944 },
        { latitude: 48.992618, longitude: -104.038592 },
        { latitude: 44.376615, longitude: -104.038592 },
        { latitude: 44.376615, longitude: -116.048944 },
      ],
    },
    NC: {
      name: "North Carolina",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.60955, longitude: -84.324629 },
        { latitude: 36.60955, longitude: -75.451812 },
        { latitude: 33.847968, longitude: -75.451812 },
        { latitude: 33.847968, longitude: -84.324629 },
      ],
    },
    ND: {
      name: "North Dakota",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.99267, longitude: -104.047574 },
        { latitude: 48.99267, longitude: -96.556341 },
        { latitude: 45.941752, longitude: -96.556341 },
        { latitude: 45.941752, longitude: -104.047574 },
      ],
    },
    NE: {
      name: "Nebraska",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 43.00037, longitude: -104.053729 },
        { latitude: 43.00037, longitude: -95.317254 },
        { latitude: 40.000102, longitude: -95.317254 },
        { latitude: 40.000102, longitude: -104.053729 },
      ],
    },
    NH: {
      name: "New Hampshire",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.304293, longitude: -72.556171 },
        { latitude: 45.304293, longitude: -70.704212 },
        { latitude: 42.700859, longitude: -70.704212 },
        { latitude: 42.700859, longitude: -72.556171 },
      ],
    },
    NJ: {
      name: "New Jersey",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 41.356254, longitude: -75.558218 },
        { latitude: 41.356254, longitude: -73.907134 },
        { latitude: 38.924384, longitude: -73.907134 },
        { latitude: 38.924384, longitude: -75.558218 },
      ],
    },
    NM: {
      name: "New Mexico",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.999809, longitude: -109.047431 },
        { latitude: 36.999809, longitude: -103.000237 },
        { latitude: 31.327391, longitude: -103.000237 },
        { latitude: 31.327391, longitude: -109.047431 },
      ],
    },
    NV: {
      name: "Nevada",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.000077, longitude: -120.000751 },
        { latitude: 42.000077, longitude: -114.040204 },
        { latitude: 35.003569, longitude: -114.040204 },
        { latitude: 35.003569, longitude: -120.000751 },
      ],
    },
    NY: {
      name: "New York",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.010122, longitude: -79.763008 },
        { latitude: 45.010122, longitude: -71.857411 },
        { latitude: 40.499435, longitude: -71.857411 },
        { latitude: 40.499435, longitude: -79.763008 },
      ],
    },
    OH: {
      name: "Ohio",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.323782, longitude: -84.82353 },
        { latitude: 42.323782, longitude: -80.520233 },
        { latitude: 38.405522, longitude: -80.520233 },
        { latitude: 38.405522, longitude: -84.82353 },
      ],
    },
    OK: {
      name: "Oklahoma",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.999809, longitude: -103.000801 },
        { latitude: 36.999809, longitude: -94.43908 },
        { latitude: 33.647416, longitude: -94.43908 },
        { latitude: 33.647416, longitude: -103.000801 },
      ],
    },
    OR: {
      name: "Oregon",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 46.255944, longitude: -124.566763 },
        { latitude: 46.255944, longitude: -116.454998 },
        { latitude: 41.99954, longitude: -116.454998 },
        { latitude: 41.99954, longitude: -124.566763 },
      ],
    },
    PA: {
      name: "Pennsylvania",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.537705, longitude: -80.520234 },
        { latitude: 42.537705, longitude: -74.698553 },
        { latitude: 39.721049, longitude: -74.698553 },
        { latitude: 39.721049, longitude: -80.520234 },
      ],
    },
    RI: {
      name: "Rhode Island",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.01641, longitude: -71.877915 },
        { latitude: 42.01641, longitude: -71.121896 },
        { latitude: 41.145779, longitude: -71.121896 },
        { latitude: 41.145779, longitude: -71.877915 },
      ],
    },
    SC: {
      name: "South Carolina",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.218315, longitude: -83.355487 },
        { latitude: 35.218315, longitude: -78.573157 },
        { latitude: 32.032474, longitude: -78.573157 },
        { latitude: 32.032474, longitude: -83.355487 },
      ],
    },
    SD: {
      name: "South Dakota",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.942021, longitude: -104.05666 },
        { latitude: 45.942021, longitude: -96.453557 },
        { latitude: 42.518339, longitude: -96.453557 },
        { latitude: 42.518339, longitude: -104.05666 },
      ],
    },
    TN: {
      name: "Tennessee",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.689701, longitude: -90.312665 },
        { latitude: 36.689701, longitude: -81.658856 },
        { latitude: 34.983647, longitude: -81.658856 },
        { latitude: 34.983647, longitude: -90.312665 },
      ],
    },
    TX: {
      name: "Texas",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.500199, longitude: -106.662178 },
        { latitude: 36.500199, longitude: -93.514764 },
        { latitude: 25.843902, longitude: -93.514764 },
        { latitude: 25.843902, longitude: -106.662178 },
      ],
    },
    UT: {
      name: "Utah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.000077, longitude: -114.042549 },
        { latitude: 42.000077, longitude: -109.046332 },
        { latitude: 36.999809, longitude: -109.046332 },
        { latitude: 36.999809, longitude: -114.042549 },
      ],
    },
    VA: {
      name: "Virginia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 39.450834, longitude: -83.667475 },
        { latitude: 39.450834, longitude: -75.243335 },
        { latitude: 36.539775, longitude: -75.243335 },
        { latitude: 36.539775, longitude: -83.667475 },
      ],
    },
    VT: {
      name: "Vermont",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.013731, longitude: -73.438544 },
        { latitude: 45.013731, longitude: -71.505707 },
        { latitude: 42.729277, longitude: -71.505707 },
        { latitude: 42.729277, longitude: -73.438544 },
      ],
    },
    WA: {
      name: "Washington",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 48.992515, longitude: -124.734607 },
        { latitude: 48.992515, longitude: -116.878827 },
        { latitude: 45.566313, longitude: -116.878827 },
        { latitude: 45.566313, longitude: -124.734607 },
      ],
    },
    WI: {
      name: "Wisconsin",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 47.308061, longitude: -92.901727 },
        { latitude: 47.308061, longitude: -86.250623 },
        { latitude: 42.491777, longitude: -86.250623 },
        { latitude: 42.491777, longitude: -92.901727 },
      ],
    },
    WV: {
      name: "West Virginia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 40.646781, longitude: -82.637373 },
        { latitude: 40.646781, longitude: -77.734685 },
        { latitude: 37.204765, longitude: -77.734685 },
        { latitude: 37.204765, longitude: -82.637373 },
      ],
    },
    WY: {
      name: "Wyoming",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.000102, longitude: -111.051386 },
        { latitude: 45.000102, longitude: -104.052362 },
        { latitude: 40.999833, longitude: -104.052362 },
        { latitude: 40.999833, longitude: -111.051386 },
      ],
    },
  },
});

export const CN: ProvinceCountry = deepFreeze({
  name: "China",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AH: {
      name: "Anhui",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 34.642847, longitude: 114.875913 },
        { latitude: 34.642847, longitude: 119.629784 },
        { latitude: 29.407869, longitude: 119.629784 },
        { latitude: 29.407869, longitude: 114.875913 },
      ],
    },
    BJ: {
      name: "Beijing",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 41.047727, longitude: 115.421823 },
        { latitude: 41.047727, longitude: 117.488571 },
        { latitude: 39.440435, longitude: 117.488571 },
        { latitude: 39.440435, longitude: 115.421823 },
      ],
    },
    CQ: {
      name: "Chongqing",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.19757, longitude: 105.28518 },
        { latitude: 32.19757, longitude: 110.175477 },
        { latitude: 28.19182, longitude: 110.175477 },
        { latitude: 28.19182, longitude: 105.28518 },
      ],
    },
    FJ: {
      name: "Fujian",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 28.325972, longitude: 115.84128 },
        { latitude: 28.325972, longitude: 120.429211 },
        { latitude: 23.572654, longitude: 120.429211 },
        { latitude: 23.572654, longitude: 115.84128 },
      ],
    },
    GD: {
      name: "Guangdong",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 25.51759, longitude: 109.661225 },
        { latitude: 25.51759, longitude: 117.174622 },
        { latitude: 20.238267, longitude: 117.174622 },
        { latitude: 20.238267, longitude: 109.661225 },
      ],
    },
    GS: {
      name: "Gansu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.787061, longitude: 92.764498 },
        { latitude: 42.787061, longitude: 108.705334 },
        { latitude: 32.594341, longitude: 108.705334 },
        { latitude: 32.594341, longitude: 92.764498 },
      ],
    },
    GX: {
      name: "Guangxi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 26.389888, longitude: 104.48306 },
        { latitude: 26.389888, longitude: 112.052572 },
        { latitude: 21.021186, longitude: 112.052572 },
        { latitude: 21.021186, longitude: 104.48306 },
      ],
    },
    GZ: {
      name: "Guizhou",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 29.246096, longitude: 103.596292 },
        { latitude: 29.246096, longitude: 109.521409 },
        { latitude: 24.631391, longitude: 109.521409 },
        { latitude: 24.631391, longitude: 103.596292 },
      ],
    },
    HA: {
      name: "Henan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.3653, longitude: 110.327664 },
        { latitude: 36.3653, longitude: 116.641181 },
        { latitude: 31.395138, longitude: 116.641181 },
        { latitude: 31.395138, longitude: 110.327664 },
      ],
    },
    HB: {
      name: "Hubei",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 33.266472, longitude: 108.380393 },
        { latitude: 33.266472, longitude: 116.147257 },
        { latitude: 29.06634, longitude: 116.147257 },
        { latitude: 29.06634, longitude: 108.380393 },
      ],
    },
    HE: {
      name: "Hebei",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 42.621456, longitude: 113.438379 },
        { latitude: 42.621456, longitude: 119.85019 },
        { latitude: 36.056559, longitude: 119.85019 },
        { latitude: 36.056559, longitude: 113.438379 },
      ],
    },
    HI: {
      name: "Hainan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 20.16356, longitude: 108.615245 },
        { latitude: 20.16356, longitude: 111.034679 },
        { latitude: 18.169338, longitude: 111.034679 },
        { latitude: 18.169338, longitude: 108.615245 },
      ],
    },
    HL: {
      name: "Heilongjiang",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 53.569444, longitude: 121.166899 },
        { latitude: 53.569444, longitude: 134.772579 },
        { latitude: 43.432698, longitude: 134.772579 },
        { latitude: 43.432698, longitude: 121.166899 },
      ],
    },
    HN: {
      name: "Hunan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 30.098396, longitude: 108.787913 },
        { latitude: 30.098396, longitude: 114.2343 },
        { latitude: 24.642656, longitude: 114.2343 },
        { latitude: 24.642656, longitude: 108.787913 },
      ],
    },
    JL: {
      name: "Jilin",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 46.293454, longitude: 121.649504 },
        { latitude: 46.293454, longitude: 131.281836 },
        { latitude: 40.859195, longitude: 131.281836 },
        { latitude: 40.859195, longitude: 121.649504 },
      ],
    },
    JS: {
      name: "Jiangsu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.112586, longitude: 116.377216 },
        { latitude: 35.112586, longitude: 121.930383 },
        { latitude: 30.763704, longitude: 121.930383 },
        { latitude: 30.763704, longitude: 116.377216 },
      ],
    },
    JX: {
      name: "Jiangxi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 30.05646, longitude: 113.558526 },
        { latitude: 30.05646, longitude: 118.476263 },
        { latitude: 24.49959, longitude: 118.476263 },
        { latitude: 24.49959, longitude: 113.558526 },
      ],
    },
    LN: {
      name: "Liaoning",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 43.472282, longitude: 118.847557 },
        { latitude: 43.472282, longitude: 125.768892 },
        { latitude: 38.720933, longitude: 125.768892 },
        { latitude: 38.720933, longitude: 118.847557 },
      ],
    },
    NE_PFA_00: {
      name: "Paracel Islands",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.933254, longitude: 111.192882 },
        { latitude: 16.933254, longitude: 112.736827 },
        { latitude: 15.775377, longitude: 112.736827 },
        { latitude: 15.775377, longitude: 111.192882 },
      ],
    },
    NM: {
      name: "Inner Mongol",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 53.324059, longitude: 97.190679 },
        { latitude: 53.324059, longitude: 126.056265 },
        { latitude: 37.390328, longitude: 126.056265 },
        { latitude: 37.390328, longitude: 97.190679 },
      ],
    },
    NX: {
      name: "Ningxia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 39.372998, longitude: 104.358519 },
        { latitude: 39.372998, longitude: 107.661677 },
        { latitude: 35.255316, longitude: 107.661677 },
        { latitude: 35.255316, longitude: 104.358519 },
      ],
    },
    QH: {
      name: "Qinghai",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 39.324267, longitude: 89.43514 },
        { latitude: 39.324267, longitude: 103.040358 },
        { latitude: 31.534742, longitude: 103.040358 },
        { latitude: 31.534742, longitude: 89.43514 },
      ],
    },
    SC: {
      name: "Sichuan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 34.299715, longitude: 97.360961 },
        { latitude: 34.299715, longitude: 108.523485 },
        { latitude: 26.034845, longitude: 108.523485 },
        { latitude: 26.034845, longitude: 97.360961 },
      ],
    },
    SD: {
      name: "Shandong",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 38.395453, longitude: 114.83421 },
        { latitude: 38.395453, longitude: 122.688732 },
        { latitude: 34.397229, longitude: 122.688732 },
        { latitude: 34.397229, longitude: 114.83421 },
      ],
    },
    SH: {
      name: "Shanghai",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 31.841077, longitude: 120.860768 },
        { latitude: 31.841077, longitude: 121.986599 },
        { latitude: 30.69124, longitude: 121.986599 },
        { latitude: 30.69124, longitude: 120.860768 },
      ],
    },
    SN: {
      name: "Shaanxi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 39.580788, longitude: 105.498553 },
        { latitude: 39.580788, longitude: 111.226732 },
        { latitude: 31.705249, longitude: 111.226732 },
        { latitude: 31.705249, longitude: 105.498553 },
      ],
    },
    SX: {
      name: "Shanxi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 40.742578, longitude: 110.237437 },
        { latitude: 40.742578, longitude: 114.540948 },
        { latitude: 34.583677, longitude: 114.540948 },
        { latitude: 34.583677, longitude: 110.237437 },
      ],
    },
    TJ: {
      name: "Tianjin",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 40.257026, longitude: 116.68061 },
        { latitude: 40.257026, longitude: 118.013086 },
        { latitude: 38.559249, longitude: 118.013086 },
        { latitude: 38.559249, longitude: 116.68061 },
      ],
    },
    XJ: {
      name: "Xinjiang",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 49.165837, longitude: 73.602256 },
        { latitude: 49.165837, longitude: 96.366341 },
        { latitude: 34.339961, longitude: 96.366341 },
        { latitude: 34.339961, longitude: 73.602256 },
      ],
    },
    XZ: {
      name: "Xizang",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 36.454829, longitude: 78.380983 },
        { latitude: 36.454829, longitude: 99.108814 },
        { latitude: 27.312385, longitude: 99.108814 },
        { latitude: 27.312385, longitude: 78.380983 },
      ],
    },
    YN: {
      name: "Yunnan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 29.223772, longitude: 97.513251 },
        { latitude: 29.223772, longitude: 106.199958 },
        { latitude: 21.134473, longitude: 106.199958 },
        { latitude: 21.134473, longitude: 97.513251 },
      ],
    },
    ZJ: {
      name: "Zhejiang",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 31.177839, longitude: 117.999237 },
        { latitude: 31.177839, longitude: 122.531099 },
        { latitude: 27.182196, longitude: 122.531099 },
        { latitude: 27.182196, longitude: 117.999237 },
      ],
    },
  },
});

export const BR: ProvinceCountry = deepFreeze({
  name: "Brazil",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AC: {
      name: "Acre",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -7.117879, longitude: -74.018475 },
        { latitude: -7.117879, longitude: -66.648924 },
        { latitude: -11.141128, longitude: -66.648924 },
        { latitude: -11.141128, longitude: -74.018475 },
      ],
    },
    AL: {
      name: "Alagoas",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -8.832587, longitude: -38.235197 },
        { latitude: -8.832587, longitude: -35.148339 },
        { latitude: -10.50213, longitude: -35.148339 },
        { latitude: -10.50213, longitude: -38.235197 },
      ],
    },
    AM: {
      name: "Amazonas",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 2.235889, longitude: -73.812338 },
        { latitude: 2.235889, longitude: -56.311932 },
        { latitude: -9.837952, longitude: -56.311932 },
        { latitude: -9.837952, longitude: -73.812338 },
      ],
    },
    AP: {
      name: "Amapá",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 4.441122, longitude: -54.797916 },
        { latitude: 4.441122, longitude: -49.873045 },
        { latitude: -1.219202, longitude: -49.873045 },
        { latitude: -1.219202, longitude: -54.797916 },
      ],
    },
    BA: {
      name: "Bahia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -8.528626, longitude: -46.571856 },
        { latitude: -8.528626, longitude: -37.360828 },
        { latitude: -18.32322, longitude: -37.360828 },
        { latitude: -18.32322, longitude: -46.571856 },
      ],
    },
    CE: {
      name: "Ceará",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -2.78631, longitude: -41.449378 },
        { latitude: -2.78631, longitude: -37.236392 },
        { latitude: -7.853991, longitude: -37.236392 },
        { latitude: -7.853991, longitude: -41.449378 },
      ],
    },
    DF: {
      name: "Distrito Federal",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -15.489855, longitude: -48.2779 },
        { latitude: -15.489855, longitude: -47.302481 },
        { latitude: -16.04207, longitude: -47.302481 },
        { latitude: -16.04207, longitude: -48.2779 },
      ],
    },
    ES: {
      name: "Espírito Santo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -17.874258, longitude: -41.881857 },
        { latitude: -17.874258, longitude: -28.877065 },
        { latitude: -21.274029, longitude: -28.877065 },
        { latitude: -21.274029, longitude: -41.881857 },
      ],
    },
    GO: {
      name: "Goiás",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -12.399863, longitude: -53.244781 },
        { latitude: -12.399863, longitude: -45.912463 },
        { latitude: -19.485942, longitude: -45.912463 },
        { latitude: -19.485942, longitude: -53.244781 },
      ],
    },
    MA: {
      name: "Maranhão",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -1.055084, longitude: -48.743196 },
        { latitude: -1.055084, longitude: -41.812532 },
        { latitude: -10.317716, longitude: -41.812532 },
        { latitude: -10.317716, longitude: -48.743196 },
      ],
    },
    MG: {
      name: "Minas Gerais",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -14.238924, longitude: -51.027603 },
        { latitude: -14.238924, longitude: -39.86074 },
        { latitude: -22.892918, longitude: -39.86074 },
        { latitude: -22.892918, longitude: -51.027603 },
      ],
    },
    MS: {
      name: "Mato Grosso do Sul",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -17.187271, longitude: -58.162673 },
        { latitude: -17.187271, longitude: -50.937092 },
        { latitude: -24.050393, longitude: -50.937092 },
        { latitude: -24.050393, longitude: -58.162673 },
      ],
    },
    MT: {
      name: "Mato Grosso",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -7.339138, longitude: -61.611299 },
        { latitude: -7.339138, longitude: -50.235719 },
        { latitude: -18.031612, longitude: -50.235719 },
        { latitude: -18.031612, longitude: -61.611299 },
      ],
    },
    PA: {
      name: "Pará",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 2.608989, longitude: -58.972026 },
        { latitude: 2.608989, longitude: -46.064686 },
        { latitude: -9.843983, longitude: -46.064686 },
        { latitude: -9.843983, longitude: -58.972026 },
      ],
    },
    PB: {
      name: "Paraíba",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -6.022423, longitude: -38.744374 },
        { latitude: -6.022423, longitude: -34.793608 },
        { latitude: -8.283525, longitude: -34.793608 },
        { latitude: -8.283525, longitude: -38.744374 },
      ],
    },
    PE: {
      name: "Pernambuco",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -7.26984, longitude: -41.370804 },
        { latitude: -7.26984, longitude: -34.805303 },
        { latitude: -9.487896, longitude: -34.805303 },
        { latitude: -9.487896, longitude: -41.370804 },
      ],
    },
    PI: {
      name: "Piauí",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -2.744806, longitude: -45.981426 },
        { latitude: -2.744806, longitude: -40.413289 },
        { latitude: -10.896285, longitude: -40.413289 },
        { latitude: -10.896285, longitude: -45.981426 },
      ],
    },
    PR: {
      name: "Paraná",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -22.521726, longitude: -54.612451 },
        { latitude: -22.521726, longitude: -48.032488 },
        { latitude: -26.704778, longitude: -48.032488 },
        { latitude: -26.704778, longitude: -54.612451 },
      ],
    },
    RJ: {
      name: "Rio de Janeiro",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -20.776871, longitude: -44.865551 },
        { latitude: -20.776871, longitude: -40.959217 },
        { latitude: -23.353204, longitude: -40.959217 },
        { latitude: -23.353204, longitude: -44.865551 },
      ],
    },
    RN: {
      name: "Rio Grande do Norte",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 0.891343, longitude: -38.609112 },
        { latitude: 0.891343, longitude: -29.345326 },
        { latitude: -6.977817, longitude: -29.345326 },
        { latitude: -6.977817, longitude: -38.609112 },
      ],
    },
    RO: {
      name: "Rondônia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -8.000493, longitude: -66.830515 },
        { latitude: -8.000493, longitude: -59.82226 },
        { latitude: -13.662845, longitude: -59.82226 },
        { latitude: -13.662845, longitude: -66.830515 },
      ],
    },
    RR: {
      name: "Roraima",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 5.267225, longitude: -64.815549 },
        { latitude: 5.267225, longitude: -58.87051 },
        { latitude: -1.418311, longitude: -58.87051 },
        { latitude: -1.418311, longitude: -64.815549 },
      ],
    },
    RS: {
      name: "Rio Grande do Sul",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -27.071991, longitude: -57.611699 },
        { latitude: -27.071991, longitude: -49.699674 },
        { latitude: -33.74228, longitude: -49.699674 },
        { latitude: -33.74228, longitude: -57.611699 },
      ],
    },
    SC: {
      name: "Santa Catarina",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -25.971541, longitude: -53.842007 },
        { latitude: -25.971541, longitude: -48.377308 },
        { latitude: -29.355365, longitude: -48.377308 },
        { latitude: -29.355365, longitude: -53.842007 },
      ],
    },
    SE: {
      name: "Sergipe",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -9.526808, longitude: -38.244844 },
        { latitude: -9.526808, longitude: -36.40807 },
        { latitude: -11.568906, longitude: -36.40807 },
        { latitude: -11.568906, longitude: -38.244844 },
      ],
    },
    SP: {
      name: "São Paulo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -19.780756, longitude: -53.167964 },
        { latitude: -19.780756, longitude: -44.162001 },
        { latitude: -25.307319, longitude: -44.162001 },
        { latitude: -25.307319, longitude: -53.167964 },
      ],
    },
    TO: {
      name: "Tocantins",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -5.163767, longitude: -50.742659 },
        { latitude: -5.163767, longitude: -45.757692 },
        { latitude: -13.385178, longitude: -45.757692 },
        { latitude: -13.385178, longitude: -50.742659 },
      ],
    },
  },
});

export const AU: ProvinceCountry = deepFreeze({
  name: "Australia",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    ACT: {
      name: "Australian Capital Territory",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -35.139509, longitude: 148.769452 },
        { latitude: -35.139509, longitude: 149.4044 },
        { latitude: -35.919616, longitude: 149.4044 },
        { latitude: -35.919616, longitude: 148.769452 },
      ],
    },
    NE_ATC_00: {
      name: "Ashmore and Cartier Islands",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -12.426609, longitude: 123.575043 },
        { latitude: -12.426609, longitude: 123.597749 },
        { latitude: -12.438572, longitude: 123.597749 },
        { latitude: -12.438572, longitude: 123.575043 },
      ],
    },
    NE_AUS_00: {
      name: "Macquarie Island",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -54.469334, longitude: 158.832042 },
        { latitude: -54.469334, longitude: 158.963227 },
        { latitude: -54.750421, longitude: 158.963227 },
        { latitude: -54.750421, longitude: 158.832042 },
      ],
    },
    NE_AUS_1932: {
      name: "Jervis Bay Territory",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -35.120442, longitude: 150.613048 },
        { latitude: -35.120442, longitude: 150.770356 },
        { latitude: -35.199395, longitude: 150.770356 },
        { latitude: -35.199395, longitude: 150.613048 },
      ],
    },
    NSW: {
      name: "New South Wales",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -28.149265, longitude: 141.000107 },
        { latitude: -28.149265, longitude: 159.106456 },
        { latitude: -37.510292, longitude: 159.106456 },
        { latitude: -37.510292, longitude: 141.000107 },
      ],
    },
    NT: {
      name: "Northern Territory",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -10.968357, longitude: 129.000115 },
        { latitude: -10.968357, longitude: 138.000187 },
        { latitude: -25.999911, longitude: 138.000187 },
        { latitude: -25.999911, longitude: 129.000115 },
      ],
    },
    QLD: {
      name: "Queensland",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -9.240167, longitude: 138.000173 },
        { latitude: -9.240167, longitude: 153.548839 },
        { latitude: -29.170622, longitude: 153.548839 },
        { latitude: -29.170622, longitude: 138.000173 },
      ],
    },
    SA: {
      name: "South Australia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -25.999911, longitude: 129.000092 },
        { latitude: -25.999911, longitude: 141.000107 },
        { latitude: -38.070571, longitude: 141.000107 },
        { latitude: -38.070571, longitude: 129.000092 },
      ],
    },
    TAS: {
      name: "Tasmania",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -39.571466, longitude: 143.837169 },
        { latitude: -39.571466, longitude: 148.484549 },
        { latitude: -43.64129, longitude: 148.484549 },
        { latitude: -43.64129, longitude: 143.837169 },
      ],
    },
    VIC: {
      name: "Victoria",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -33.986452, longitude: 140.967086 },
        { latitude: -33.986452, longitude: 149.972076 },
        { latitude: -39.144952, longitude: 149.972076 },
        { latitude: -39.144952, longitude: 140.967086 },
      ],
    },
    WA: {
      name: "Western Australia",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -13.723565, longitude: 112.919444 },
        { latitude: -13.723565, longitude: 129.000116 },
        { latitude: -35.137872, longitude: 129.000116 },
        { latitude: -35.137872, longitude: 112.919444 },
      ],
    },
  },
});

export const IN: ProvinceCountry = deepFreeze({
  name: "India",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AN: {
      name: "Andaman and Nicobar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.680243, longitude: 92.217296 },
        { latitude: 13.680243, longitude: 94.290782 },
        { latitude: 6.745551, longitude: 94.290782 },
        { latitude: 6.745551, longitude: 92.217296 },
      ],
    },
    AP: {
      name: "Andhra Pradesh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 19.161673, longitude: 76.719482 },
        { latitude: 19.161673, longitude: 84.78004 },
        { latitude: 12.631917, longitude: 84.78004 },
        { latitude: 12.631917, longitude: 76.719482 },
      ],
    },
    AR: {
      name: "Arunachal Pradesh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 29.369286, longitude: 91.564354 },
        { latitude: 29.369286, longitude: 97.362254 },
        { latitude: 26.647625, longitude: 97.362254 },
        { latitude: 26.647625, longitude: 91.564354 },
      ],
    },
    AS: {
      name: "Assam",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.993305, longitude: 89.655798 },
        { latitude: 27.993305, longitude: 96.011845 },
        { latitude: 24.127778, longitude: 96.011845 },
        { latitude: 24.127778, longitude: 89.655798 },
      ],
    },
    BR: {
      name: "Bihar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.516874, longitude: 83.323006 },
        { latitude: 27.516874, longitude: 88.303893 },
        { latitude: 24.301695, longitude: 88.303893 },
        { latitude: 24.301695, longitude: 83.323006 },
      ],
    },
    CH: {
      name: "Chandigarh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 30.799025, longitude: 76.693748 },
        { latitude: 30.799025, longitude: 76.82728 },
        { latitude: 30.672288, longitude: 76.82728 },
        { latitude: 30.672288, longitude: 76.693748 },
      ],
    },
    CT: {
      name: "Chhattisgarh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 24.140232, longitude: 80.260559 },
        { latitude: 24.140232, longitude: 84.353333 },
        { latitude: 17.776073, longitude: 84.353333 },
        { latitude: 17.776073, longitude: 80.260559 },
      ],
    },
    DH: {
      name: "Dadra and Nagar Haveli and Daman and Diu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 20.739571, longitude: 70.971562 },
        { latitude: 20.739571, longitude: 73.170036 },
        { latitude: 20.026607, longitude: 73.170036 },
        { latitude: 20.026607, longitude: 70.971562 },
      ],
    },
    DL: {
      name: "Delhi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 28.882088, longitude: 76.833688 },
        { latitude: 28.882088, longitude: 77.337534 },
        { latitude: 28.432606, longitude: 77.337534 },
        { latitude: 28.432606, longitude: 76.833688 },
      ],
    },
    GA: {
      name: "Goa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 15.783042, longitude: 73.685882 },
        { latitude: 15.783042, longitude: 74.304231 },
        { latitude: 14.8876, longitude: 74.304231 },
        { latitude: 14.8876, longitude: 73.685882 },
      ],
    },
    GJ: {
      name: "Gujarat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 24.708363, longitude: 68.143403 },
        { latitude: 24.708363, longitude: 74.459053 },
        { latitude: 20.072644, longitude: 74.459053 },
        { latitude: 20.072644, longitude: 68.143403 },
      ],
    },
    HP: {
      name: "Himachal Pradesh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 33.232856, longitude: 75.577846 },
        { latitude: 33.232856, longitude: 78.997071 },
        { latitude: 30.382177, longitude: 78.997071 },
        { latitude: 30.382177, longitude: 75.577846 },
      ],
    },
    HR: {
      name: "Haryana",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 30.934262, longitude: 74.459362 },
        { latitude: 30.934262, longitude: 77.587958 },
        { latitude: 27.670404, longitude: 77.587958 },
        { latitude: 27.670404, longitude: 74.459362 },
      ],
    },
    JH: {
      name: "Jharkhand",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 25.323778, longitude: 83.337063 },
        { latitude: 25.323778, longitude: 87.899989 },
        { latitude: 21.986126, longitude: 87.899989 },
        { latitude: 21.986126, longitude: 83.337063 },
      ],
    },
    JK: {
      name: "Jammu and Kashmir",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 34.773434, longitude: 73.774856 },
        { latitude: 34.773434, longitude: 76.739844 },
        { latitude: 32.300587, longitude: 76.739844 },
        { latitude: 32.300587, longitude: 73.774856 },
      ],
    },
    KA: {
      name: "Karnataka",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 18.460811, longitude: 74.091155 },
        { latitude: 18.460811, longitude: 78.568982 },
        { latitude: 11.625596, longitude: 78.568982 },
        { latitude: 11.625596, longitude: 74.091155 },
      ],
    },
    KL: {
      name: "Kerala",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 12.779944, longitude: 74.854259 },
        { latitude: 12.779944, longitude: 77.404506 },
        { latitude: 8.285174, longitude: 77.404506 },
        { latitude: 8.285174, longitude: 74.854259 },
      ],
    },
    LA: {
      name: "Ladakh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 35.495406, longitude: 75.344128 },
        { latitude: 35.495406, longitude: 79.620674 },
        { latitude: 32.346373, longitude: 79.620674 },
        { latitude: 32.346373, longitude: 75.344128 },
      ],
    },
    LD: {
      name: "Lakshadweep",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 11.694159, longitude: 72.172618 },
        { latitude: 11.694159, longitude: 73.684418 },
        { latitude: 8.249498, longitude: 73.684418 },
        { latitude: 8.249498, longitude: 72.172618 },
      ],
    },
    MH: {
      name: "Maharashtra",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 22.023049, longitude: 72.649181 },
        { latitude: 22.023049, longitude: 80.897007 },
        { latitude: 15.613543, longitude: 80.897007 },
        { latitude: 15.613543, longitude: 72.649181 },
      ],
    },
    ML: {
      name: "Meghalaya",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 26.089261, longitude: 89.795015 },
        { latitude: 26.089261, longitude: 92.811628 },
        { latitude: 25.004773, longitude: 92.811628 },
        { latitude: 25.004773, longitude: 89.795015 },
      ],
    },
    MN: {
      name: "Manipur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 25.687631, longitude: 92.977922 },
        { latitude: 25.687631, longitude: 94.713837 },
        { latitude: 23.841647, longitude: 94.713837 },
        { latitude: 23.841647, longitude: 92.977922 },
      ],
    },
    MP: {
      name: "Madhya Pradesh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 26.859808, longitude: 74.024866 },
        { latitude: 26.859808, longitude: 82.818026 },
        { latitude: 21.074812, longitude: 82.818026 },
        { latitude: 21.074812, longitude: 74.024866 },
      ],
    },
    MZ: {
      name: "Mizoram",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 24.482976, longitude: 92.250006 },
        { latitude: 24.482976, longitude: 93.432364 },
        { latitude: 21.957007, longitude: 93.432364 },
        { latitude: 21.957007, longitude: 92.250006 },
      ],
    },
    NL: {
      name: "Nagaland",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.033182, longitude: 93.335936 },
        { latitude: 27.033182, longitude: 95.246934 },
        { latitude: 25.2058, longitude: 95.246934 },
        { latitude: 25.2058, longitude: 93.335936 },
      ],
    },
    OR: {
      name: "Odisha",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 22.556737, longitude: 81.390721 },
        { latitude: 22.556737, longitude: 87.477388 },
        { latitude: 17.787235, longitude: 87.477388 },
        { latitude: 17.787235, longitude: 81.390721 },
      ],
    },
    PB: {
      name: "Punjab",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.516749, longitude: 73.842344 },
        { latitude: 32.516749, longitude: 76.910376 },
        { latitude: 29.559824, longitude: 76.910376 },
        { latitude: 29.559824, longitude: 73.842344 },
      ],
    },
    PY: {
      name: "Puducherry",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 16.750296, longitude: 75.221796 },
        { latitude: 16.750296, longitude: 82.301365 },
        { latitude: 10.809108, longitude: 82.301365 },
        { latitude: 10.809108, longitude: 75.221796 },
      ],
    },
    RJ: {
      name: "Rajasthan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 30.204077, longitude: 69.465093 },
        { latitude: 30.204077, longitude: 78.246522 },
        { latitude: 23.036062, longitude: 78.246522 },
        { latitude: 23.036062, longitude: 69.465093 },
      ],
    },
    SK: {
      name: "Sikkim",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 28.106606, longitude: 88.004663 },
        { latitude: 28.106606, longitude: 88.892332 },
        { latitude: 27.084574, longitude: 88.892332 },
        { latitude: 27.084574, longitude: 88.004663 },
      ],
    },
    TG: {
      name: "Telangana",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 19.891293, longitude: 77.257434 },
        { latitude: 19.891293, longitude: 81.786569 },
        { latitude: 15.829657, longitude: 81.786569 },
        { latitude: 15.829657, longitude: 77.257434 },
      ],
    },
    TN: {
      name: "Tamil Nadu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 13.535867, longitude: 76.23052 },
        { latitude: 13.535867, longitude: 80.34783 },
        { latitude: 8.075995, longitude: 80.34783 },
        { latitude: 8.075995, longitude: 76.23052 },
      ],
    },
    TR: {
      name: "Tripura",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 24.542183, longitude: 91.132348 },
        { latitude: 24.542183, longitude: 92.331968 },
        { latitude: 22.944466, longitude: 92.331968 },
        { latitude: 22.944466, longitude: 91.132348 },
      ],
    },
    UP: {
      name: "Uttar Pradesh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 30.402021, longitude: 77.05817 },
        { latitude: 30.402021, longitude: 84.612438 },
        { latitude: 23.911047, longitude: 84.612438 },
        { latitude: 23.911047, longitude: 77.05817 },
      ],
    },
    UT: {
      name: "Uttarakhand",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 31.461664, longitude: 77.565323 },
        { latitude: 31.461664, longitude: 81.003304 },
        { latitude: 28.732872, longitude: 81.003304 },
        { latitude: 28.732872, longitude: 77.565323 },
      ],
    },
    WB: {
      name: "West Bengal",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.249163, longitude: 85.822389 },
        { latitude: 27.249163, longitude: 89.888499 },
        { latitude: 21.523586, longitude: 89.888499 },
        { latitude: 21.523586, longitude: 85.822389 },
      ],
    },
  },
});

export const AR: ProvinceCountry = deepFreeze({
  name: "Argentina",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    A: {
      name: "Salta",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -21.99323, longitude: -68.578574 },
        { latitude: -21.99323, longitude: -62.334381 },
        { latitude: -26.38857, longitude: -62.334381 },
        { latitude: -26.38857, longitude: -68.578574 },
      ],
    },
    B: {
      name: "Buenos Aires",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -33.256574, longitude: -63.388814 },
        { latitude: -33.256574, longitude: -56.664865 },
        { latitude: -41.045017, longitude: -56.664865 },
        { latitude: -41.045017, longitude: -63.388814 },
      ],
    },
    C: {
      name: "Ciudad de Buenos Aires",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -34.52158, longitude: -58.560533 },
        { latitude: -34.52158, longitude: -58.31503 },
        { latitude: -34.774928, longitude: -58.31503 },
        { latitude: -34.774928, longitude: -58.560533 },
      ],
    },
    D: {
      name: "San Luis",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -31.846841, longitude: -67.395907 },
        { latitude: -31.846841, longitude: -64.874121 },
        { latitude: -36.001316, longitude: -64.874121 },
        { latitude: -36.001316, longitude: -67.395907 },
      ],
    },
    E: {
      name: "Entre Ríos",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -30.151441, longitude: -60.769231 },
        { latitude: -30.151441, longitude: -57.794994 },
        { latitude: -34.048981, longitude: -57.794994 },
        { latitude: -34.048981, longitude: -60.769231 },
      ],
    },
    F: {
      name: "La Rioja",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -27.735774, longitude: -69.654045 },
        { latitude: -27.735774, longitude: -65.401893 },
        { latitude: -31.933813, longitude: -65.401893 },
        { latitude: -31.933813, longitude: -69.654045 },
      ],
    },
    G: {
      name: "Santiago del Estero",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -25.579885, longitude: -65.180668 },
        { latitude: -25.579885, longitude: -61.709328 },
        { latitude: -30.156609, longitude: -61.709328 },
        { latitude: -30.156609, longitude: -65.180668 },
      ],
    },
    H: {
      name: "Chaco",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -24.120646, longitude: -63.398579 },
        { latitude: -24.120646, longitude: -58.351274 },
        { latitude: -28.002683, longitude: -58.351274 },
        { latitude: -28.002683, longitude: -63.398579 },
      ],
    },
    J: {
      name: "San Juan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -28.400994, longitude: -70.591371 },
        { latitude: -28.400994, longitude: -66.730521 },
        { latitude: -32.336579, longitude: -66.730521 },
        { latitude: -32.336579, longitude: -70.591371 },
      ],
    },
    K: {
      name: "Catamarca",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -25.159997, longitude: -69.13406 },
        { latitude: -25.159997, longitude: -64.882468 },
        { latitude: -30.140175, longitude: -64.882468 },
        { latitude: -30.140175, longitude: -69.13406 },
      ],
    },
    L: {
      name: "La Pampa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -35.000499, longitude: -68.29319 },
        { latitude: -35.000499, longitude: -63.384057 },
        { latitude: -39.325765, longitude: -63.384057 },
        { latitude: -39.325765, longitude: -68.29319 },
      ],
    },
    M: {
      name: "Mendoza",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -31.955672, longitude: -70.578891 },
        { latitude: -31.955672, longitude: -66.505134 },
        { latitude: -37.557035, longitude: -66.505134 },
        { latitude: -37.557035, longitude: -70.578891 },
      ],
    },
    N: {
      name: "Misiones",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -25.494567, longitude: -56.019057 },
        { latitude: -25.494567, longitude: -53.661552 },
        { latitude: -28.147738, longitude: -53.661552 },
        { latitude: -28.147738, longitude: -56.019057 },
      ],
    },
    P: {
      name: "Formosa",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -22.472261, longitude: -62.341358 },
        { latitude: -22.472261, longitude: -57.55692 },
        { latitude: -26.885812, longitude: -57.55692 },
        { latitude: -26.885812, longitude: -62.341358 },
      ],
    },
    Q: {
      name: "Neuquén",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -36.129402, longitude: -71.955577 },
        { latitude: -36.129402, longitude: -68.010417 },
        { latitude: -41.095114, longitude: -68.010417 },
        { latitude: -41.095114, longitude: -71.955577 },
      ],
    },
    R: {
      name: "Río Negro",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -37.557035, longitude: -71.925968 },
        { latitude: -37.557035, longitude: -62.801625 },
        { latitude: -42.010675, longitude: -62.801625 },
        { latitude: -42.010675, longitude: -71.925968 },
      ],
    },
    S: {
      name: "Santa Fe",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -27.999324, longitude: -62.853808 },
        { latitude: -27.999324, longitude: -58.864747 },
        { latitude: -34.382139, longitude: -58.864747 },
        { latitude: -34.382139, longitude: -62.853808 },
      ],
    },
    T: {
      name: "Tucumán",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -26.074584, longitude: -66.194636 },
        { latitude: -26.074584, longitude: -64.482777 },
        { latitude: -28.05436, longitude: -64.482777 },
        { latitude: -28.05436, longitude: -66.194636 },
      ],
    },
    U: {
      name: "Chubut",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -41.999038, longitude: -72.148538 },
        { latitude: -41.999038, longitude: -63.579335 },
        { latitude: -46.00003, longitude: -63.579335 },
        { latitude: -46.00003, longitude: -72.148538 },
      ],
    },
    V: {
      name: "Tierra del Fuego",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -52.639572, longitude: -68.654135 },
        { latitude: -52.639572, longitude: -63.812122 },
        { latitude: -55.052016, longitude: -63.812122 },
        { latitude: -55.052016, longitude: -68.654135 },
      ],
    },
    W: {
      name: "Corrientes",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -27.257043, longitude: -59.672786 },
        { latitude: -27.257043, longitude: -55.623041 },
        { latitude: -30.747331, longitude: -55.623041 },
        { latitude: -30.747331, longitude: -59.672786 },
      ],
    },
    X: {
      name: "Córdoba",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -29.424302, longitude: -65.767272 },
        { latitude: -29.424302, longitude: -61.732971 },
        { latitude: -35.002101, longitude: -61.732971 },
        { latitude: -35.002101, longitude: -65.767272 },
      ],
    },
    Y: {
      name: "Jujuy",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -21.786938, longitude: -67.251329 },
        { latitude: -21.786938, longitude: -64.158766 },
        { latitude: -24.613949, longitude: -64.158766 },
        { latitude: -24.613949, longitude: -67.251329 },
      ],
    },
    Z: {
      name: "Santa Cruz",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -45.999414, longitude: -73.572741 },
        { latitude: -45.999414, longitude: -65.713013 },
        { latitude: -52.390749, longitude: -65.713013 },
        { latitude: -52.390749, longitude: -73.572741 },
      ],
    },
  },
});

export const KZ: ProvinceCountry = deepFreeze({
  name: "Kazakhstan",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AKM: {
      name: "Aqmola",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 53.687679, longitude: 65.430145 },
        { latitude: 53.687679, longitude: 74.273638 },
        { latitude: 49.987078, longitude: 74.273638 },
        { latitude: 49.987078, longitude: 65.430145 },
      ],
    },
    AKT: {
      name: "Aqtöbe",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 51.295862, longitude: 53.670966 },
        { latitude: 51.295862, longitude: 64.203554 },
        { latitude: 45.161911, longitude: 64.203554 },
        { latitude: 45.161911, longitude: 53.670966 },
      ],
    },
    AST: {
      name: "Astana",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 51.305896, longitude: 71.244093 },
        { latitude: 51.305896, longitude: 71.607216 },
        { latitude: 50.974697, longitude: 71.607216 },
        { latitude: 50.974697, longitude: 71.244093 },
      ],
    },
    ATY: {
      name: "Atyrau",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 49.18444, longitude: 47.044239 },
        { latitude: 49.18444, longitude: 56.473173 },
        { latitude: 45.738449, longitude: 56.473173 },
        { latitude: 45.738449, longitude: 47.044239 },
      ],
    },
    KAR: {
      name: "Qaraghandy",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 51.273021, longitude: 62.652228 },
        { latitude: 51.273021, longitude: 77.732859 },
        { latitude: 45.936886, longitude: 77.732859 },
        { latitude: 45.936886, longitude: 62.652228 },
      ],
    },
    KUS: {
      name: "Qostanay",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.702554, longitude: 59.985722 },
        { latitude: 54.702554, longitude: 68.272868 },
        { latitude: 48.15117, longitude: 68.272868 },
        { latitude: 48.15117, longitude: 59.985722 },
      ],
    },
    KZY: {
      name: "Qyzylorda",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 47.776464, longitude: 59.027228 },
        { latitude: 47.776464, longitude: 68.202897 },
        { latitude: 42.352893, longitude: 68.202897 },
        { latitude: 42.352893, longitude: 59.027228 },
      ],
    },
    MAN: {
      name: "Mangghystau",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 46.480419, longitude: 49.986095 },
        { latitude: 46.480419, longitude: 56.70761 },
        { latitude: 41.258878, longitude: 56.70761 },
        { latitude: 41.258878, longitude: 49.986095 },
      ],
    },
    NE_KAZ_3207: {
      name: "Almaty",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 47.304296, longitude: 73.8132 },
        { latitude: 47.304296, longitude: 82.636383 },
        { latitude: 42.189519, longitude: 82.636383 },
        { latitude: 42.189519, longitude: 73.8132 },
      ],
    },
    NE_KAZ_4829: {
      name: "Almaty City",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 43.401158, longitude: 76.808652 },
        { latitude: 43.401158, longitude: 77.033542 },
        { latitude: 43.192336, longitude: 77.033542 },
        { latitude: 43.192336, longitude: 76.808652 },
      ],
    },
    PAV: {
      name: "Pavlodar",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 54.464687, longitude: 73.446091 },
        { latitude: 54.464687, longitude: 79.304324 },
        { latitude: 50.002736, longitude: 79.304324 },
        { latitude: 50.002736, longitude: 73.446091 },
      ],
    },
    SEV: {
      name: "North Kazakhstan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 55.43455, longitude: 66.019773 },
        { latitude: 55.43455, longitude: 74.031585 },
        { latitude: 52.208441, longitude: 74.031585 },
        { latitude: 52.208441, longitude: 66.019773 },
      ],
    },
    VOS: {
      name: "East Kazakhstan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 51.686378, longitude: 76.630083 },
        { latitude: 51.686378, longitude: 87.323797 },
        { latitude: 45.548383, longitude: 87.323797 },
        { latitude: 45.548383, longitude: 76.630083 },
      ],
    },
    YUZ: {
      name: "South Kazakhstan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.95766, longitude: 66.006492 },
        { latitude: 45.95766, longitude: 70.947793 },
        { latitude: 40.584656, longitude: 70.947793 },
        { latitude: 40.584656, longitude: 66.006492 },
      ],
    },
    ZAP: {
      name: "West Kazakhstan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 51.774541, longitude: 46.478278 },
        { latitude: 51.774541, longitude: 54.551224 },
        { latitude: 47.938108, longitude: 54.551224 },
        { latitude: 47.938108, longitude: 46.478278 },
      ],
    },
    ZHA: {
      name: "Zhambyl",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 45.955852, longitude: 69.170796 },
        { latitude: 45.955852, longitude: 75.807059 },
        { latitude: 42.338575, longitude: 75.807059 },
        { latitude: 42.338575, longitude: 69.170796 },
      ],
    },
  },
});

export const SA: ProvinceCountry = deepFreeze({
  name: "Saudi Arabia",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    "01": {
      name: "Ar Riyad",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.532635, longitude: 41.976176 },
        { latitude: 27.532635, longitude: 48.304576 },
        { latitude: 19.256913, longitude: 48.304576 },
        { latitude: 19.256913, longitude: 41.976176 },
      ],
    },
    "02": {
      name: "Makkah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 23.967323, longitude: 38.643836 },
        { latitude: 23.967323, longitude: 43.667548 },
        { latitude: 18.121127, longitude: 43.667548 },
        { latitude: 18.121127, longitude: 38.643836 },
      ],
    },
    "03": {
      name: "Al Madinah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.394375, longitude: 36.77913 },
        { latitude: 27.394375, longitude: 42.096428 },
        { latitude: 22.49116, longitude: 42.096428 },
        { latitude: 22.49116, longitude: 36.77913 },
      ],
    },
    "04": {
      name: "Ash Sharqiyah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 29.095745, longitude: 44.938683 },
        { latitude: 29.095745, longitude: 55.637565 },
        { latitude: 17.093104, longitude: 55.637565 },
        { latitude: 17.093104, longitude: 44.938683 },
      ],
    },
    "05": {
      name: "Al Quassim",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 27.327893, longitude: 41.409804 },
        { latitude: 27.327893, longitude: 44.84546 },
        { latitude: 24.611521, longitude: 44.84546 },
        { latitude: 24.611521, longitude: 41.409804 },
      ],
    },
    "06": {
      name: "Ha'il",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 28.875964, longitude: 39.000131 },
        { latitude: 28.875964, longitude: 44.7989 },
        { latitude: 25.31197, longitude: 44.7989 },
        { latitude: 25.31197, longitude: 39.000131 },
      ],
    },
    "07": {
      name: "Tabuk",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 28.984278, longitude: 34.572765 },
        { latitude: 28.984278, longitude: 40.169932 },
        { latitude: 24.53957, longitude: 40.169932 },
        { latitude: 24.53957, longitude: 34.572765 },
      ],
    },
    "08": {
      name: "Al Hudud ash Shamaliyah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 32.121348, longitude: 37.861595 },
        { latitude: 32.121348, longitude: 46.427323 },
        { latitude: 27.458195, longitude: 46.427323 },
        { latitude: 27.458195, longitude: 37.861595 },
      ],
    },
    "09": {
      name: "Jizan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 18.322448, longitude: 41.593515 },
        { latitude: 18.322448, longitude: 43.341985 },
        { latitude: 16.370958, longitude: 43.341985 },
        { latitude: 16.370958, longitude: 41.593515 },
      ],
    },
    "10": {
      name: "Najran",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 19.531263, longitude: 43.638194 },
        { latitude: 19.531263, longitude: 47.745128 },
        { latitude: 16.94305, longitude: 47.745128 },
        { latitude: 16.94305, longitude: 43.638194 },
      ],
    },
    "11": {
      name: "Al Bahah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 20.762867, longitude: 40.799039 },
        { latitude: 20.762867, longitude: 42.033901 },
        { latitude: 19.36471, longitude: 42.033901 },
        { latitude: 19.36471, longitude: 40.799039 },
      ],
    },
    "12": {
      name: "Al Jawf",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 31.753358, longitude: 34.825368 },
        { latitude: 31.753358, longitude: 41.904761 },
        { latitude: 28.136784, longitude: 41.904761 },
        { latitude: 28.136784, longitude: 34.825368 },
      ],
    },
    "14": {
      name: "`Asir",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 20.976239, longitude: 41.383706 },
        { latitude: 20.976239, longitude: 44.516952 },
        { latitude: 17.43851, longitude: 44.516952 },
        { latitude: 17.43851, longitude: 41.383706 },
      ],
    },
  },
});

export const ID: ProvinceCountry = deepFreeze({
  name: "Indonesia",
  version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
  province: {
    AC: {
      name: "Aceh",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 5.910102, longitude: 95.012705 },
        { latitude: 5.910102, longitude: 98.282482 },
        { latitude: 2.014716, longitude: 98.282482 },
        { latitude: 2.014716, longitude: 95.012705 },
      ],
    },
    BA: {
      name: "Bali",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -8.055108, longitude: 114.447927 },
        { latitude: -8.055108, longitude: 115.714203 },
        { latitude: -8.851821, longitude: 115.714203 },
        { latitude: -8.851821, longitude: 114.447927 },
      ],
    },
    BB: {
      name: "Bangka-Belitung",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -1.48919, longitude: 105.125498 },
        { latitude: -1.48919, longitude: 108.293713 },
        { latitude: -3.242446, longitude: 108.293713 },
        { latitude: -3.242446, longitude: 105.125498 },
      ],
    },
    BE: {
      name: "Bengkulu",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -2.236246, longitude: 101.026595 },
        { latitude: -2.236246, longitude: 103.765274 },
        { latitude: -5.499282, longitude: 103.765274 },
        { latitude: -5.499282, longitude: 101.026595 },
      ],
    },
    BT: {
      name: "Banten",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -5.881036, longitude: 105.117685 },
        { latitude: -5.881036, longitude: 106.766176 },
        { latitude: -7.002699, longitude: 106.766176 },
        { latitude: -7.002699, longitude: 105.117685 },
      ],
    },
    GO: {
      name: "Gorontalo",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 1.027665, longitude: 121.160439 },
        { latitude: 1.027665, longitude: 123.501073 },
        { latitude: 0.297838, longitude: 123.501073 },
        { latitude: 0.297838, longitude: 121.160439 },
      ],
    },
    JA: {
      name: "Jambi",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -0.74618, longitude: 101.113911 },
        { latitude: -0.74618, longitude: 104.531586 },
        { latitude: -2.782362, longitude: 104.531586 },
        { latitude: -2.782362, longitude: 101.113911 },
      ],
    },
    JB: {
      name: "Jawa Barat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -5.914321, longitude: 106.375364 },
        { latitude: -5.914321, longitude: 108.895121 },
        { latitude: -7.818501, longitude: 108.895121 },
        { latitude: -7.818501, longitude: 106.375364 },
      ],
    },
    JI: {
      name: "Jawa Timur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -5.726007, longitude: 110.944349 },
        { latitude: -5.726007, longitude: 115.896007 },
        { latitude: -8.777927, longitude: 115.896007 },
        { latitude: -8.777927, longitude: 110.944349 },
      ],
    },
    JK: {
      name: "Jakarta Raya",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -6.058852, longitude: 106.684114 },
        { latitude: -6.058852, longitude: 106.989316 },
        { latitude: -6.381522, longitude: 106.989316 },
        { latitude: -6.381522, longitude: 106.684114 },
      ],
    },
    JT: {
      name: "Jawa Tengah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -5.831638, longitude: 108.546894 },
        { latitude: -5.831638, longitude: 111.672699 },
        { latitude: -8.226372, longitude: 111.672699 },
        { latitude: -8.226372, longitude: 108.546894 },
      ],
    },
    KB: {
      name: "Kalimantan Barat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 2.083239, longitude: 108.677257 },
        { latitude: 2.083239, longitude: 114.208927 },
        { latitude: -3.080743, longitude: 114.208927 },
        { latitude: -3.080743, longitude: 108.677257 },
      ],
    },
    KI: {
      name: "Kalimantan Timur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 4.396787, longitude: 113.776393 },
        { latitude: 4.396787, longitude: 119.011729 },
        { latitude: -2.362976, longitude: 119.011729 },
        { latitude: -2.362976, longitude: 113.776393 },
      ],
    },
    KR: {
      name: "Kepulauan Riau",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 4.772366, longitude: 103.314789 },
        { latitude: 4.772366, longitude: 109.113943 },
        { latitude: -0.661716, longitude: 109.113943 },
        { latitude: -0.661716, longitude: 103.314789 },
      ],
    },
    KS: {
      name: "Kalimantan Selatan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -1.360744, longitude: 114.310682 },
        { latitude: -1.360744, longitude: 116.572891 },
        { latitude: -4.827813, longitude: 116.572891 },
        { latitude: -4.827813, longitude: 114.310682 },
      ],
    },
    KT: {
      name: "Kalimantan Tengah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 0.740058, longitude: 110.754241 },
        { latitude: 0.740058, longitude: 115.81658 },
        { latitude: -3.572035, longitude: 115.81658 },
        { latitude: -3.572035, longitude: 110.754241 },
      ],
    },
    LA: {
      name: "Lampung",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -3.751657, longitude: 103.608153 },
        { latitude: -3.751657, longitude: 105.909679 },
        { latitude: -5.930434, longitude: 105.909679 },
        { latitude: -5.930434, longitude: 103.608153 },
      ],
    },
    MA: {
      name: "Maluku",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -2.780043, longitude: 125.774181 },
        { latitude: -2.780043, longitude: 134.888194 },
        { latitude: -8.351332, longitude: 134.888194 },
        { latitude: -8.351332, longitude: 125.774181 },
      ],
    },
    MU: {
      name: "Maluku Utara",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 2.633612, longitude: 124.300628 },
        { latitude: 2.633612, longitude: 129.571545 },
        { latitude: -2.474216, longitude: 129.571545 },
        { latitude: -2.474216, longitude: 124.300628 },
      ],
    },
    NB: {
      name: "Nusa Tenggara Barat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -8.083266, longitude: 115.828638 },
        { latitude: -8.083266, longitude: 119.203624 },
        { latitude: -9.107293, longitude: 119.203624 },
        { latitude: -9.107293, longitude: 115.828638 },
      ],
    },
    NT: {
      name: "Nusa Tenggara Timur",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -8.069594, longitude: 118.935394 },
        { latitude: -8.069594, longitude: 125.162366 },
        { latitude: -10.922621, longitude: 125.162366 },
        { latitude: -10.922621, longitude: 118.935394 },
      ],
    },
    PA: {
      name: "Papua",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -0.627618, longitude: 134.233801 },
        { latitude: -0.627618, longitude: 140.977627 },
        { latitude: -9.106134, longitude: 140.977627 },
        { latitude: -9.106134, longitude: 134.233801 },
      ],
    },
    PB: {
      name: "Papua Barat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 1.075914, longitude: 129.714854 },
        { latitude: 1.075914, longitude: 135.265108 },
        { latitude: -4.300714, longitude: 135.265108 },
        { latitude: -4.300714, longitude: 129.714854 },
      ],
    },
    RI: {
      name: "Riau",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 2.554551, longitude: 100.065705 },
        { latitude: 2.554551, longitude: 103.813976 },
        { latitude: -1.084946, longitude: 103.813976 },
        { latitude: -1.084946, longitude: 100.065705 },
      ],
    },
    SA: {
      name: "Sulawesi Utara",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 5.565375, longitude: 123.097191 },
        { latitude: 5.565375, longitude: 127.145763 },
        { latitude: 0.266506, longitude: 127.145763 },
        { latitude: 0.266506, longitude: 123.097191 },
      ],
    },
    SB: {
      name: "Sumatera Barat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 0.88806, longitude: 98.59376 },
        { latitude: 0.88806, longitude: 101.84255 },
        { latitude: -3.334405, longitude: 101.84255 },
        { latitude: -3.334405, longitude: 98.59376 },
      ],
    },
    SG: {
      name: "Sulawesi Tenggara",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -2.865561, longitude: 120.867685 },
        { latitude: -2.865561, longitude: 124.073985 },
        { latitude: -6.027439, longitude: 124.073985 },
        { latitude: -6.027439, longitude: 120.867685 },
      ],
    },
    SN: {
      name: "Sulawesi Selatan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -1.837665, longitude: 119.352794 },
        { latitude: -1.837665, longitude: 121.837087 },
        { latitude: -7.416925, longitude: 121.837087 },
        { latitude: -7.416925, longitude: 119.352794 },
      ],
    },
    SR: {
      name: "Sulawesi Barat",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -0.833692, longitude: 118.757335 },
        { latitude: -0.833692, longitude: 119.87349 },
        { latitude: -3.573989, longitude: 119.87349 },
        { latitude: -3.573989, longitude: 118.757335 },
      ],
    },
    SS: {
      name: "Sumatera Selatan",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -1.688941, longitude: 102.066825 },
        { latitude: -1.688941, longitude: 106.079764 },
        { latitude: -4.946726, longitude: 106.079764 },
        { latitude: -4.946726, longitude: 102.066825 },
      ],
    },
    ST: {
      name: "Sulawesi Tengah",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 1.353664, longitude: 119.486949 },
        { latitude: 1.353664, longitude: 123.889659 },
        { latitude: -3.245864, longitude: 123.889659 },
        { latitude: -3.245864, longitude: 119.486949 },
      ],
    },
    SU: {
      name: "Sumatera Utara",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: 4.294777, longitude: 97.06365 },
        { latitude: 4.294777, longitude: 100.443979 },
        { latitude: -0.586602, longitude: 100.443979 },
        { latitude: -0.586602, longitude: 97.06365 },
      ],
    },
    YO: {
      name: "Yogyakarta",
      version: "ne-admin1-snapshot-22d0e3ad85eb-v1",
      corners: [
        { latitude: -7.560055, longitude: 110.042739 },
        { latitude: -7.560055, longitude: 110.843561 },
        { latitude: -8.200844, longitude: 110.843561 },
        { latitude: -8.200844, longitude: 110.042739 },
      ],
    },
  },
});

export const provinceCountries: Readonly<Record<string, ProvinceCountry>> = deepFreeze({
  DZ,
  CD,
  SD,
  LY,
  TD,
  NE,
  AO,
  ML,
  ZA,
  ET,
  MR,
  RU,
  CA,
  US,
  CN,
  BR,
  AU,
  IN,
  AR,
  KZ,
  SA,
  ID,
});

/** Use this adapter to replace country-wide entries in address_bounty.ts. */
export const provinceGrids: Readonly<Record<string, Country>> = deepFreeze(
  Object.fromEntries(
    Object.entries(provinceCountries).map(([code, entry]) => [
      code,
      { name: entry.name, version: entry.version, provinces: entry.province },
    ]),
  ),
);

export const provinceDataNotes: Readonly<Record<string, readonly string[]>> = deepFreeze({
  DZ: [
    "Historical 48-province division; later province additions are not represented.",
  ],
  CD: [
    "Historical 11-province division; the later 26-province division is not represented.",
  ],
  SD: [
    "Source has 17 units, not a verified current state directory. Source duplicates SD-DS for Southern and Eastern Darfur; those units use NE_ keys.",
  ],
  LY: [
    "Source municipality/governorate units; verify current administrative structure before use.",
  ],
  TD: ["Historical 22-unit division; current province changes require review."],
  AO: [
    "Historical 18-province division; newer province additions are not represented.",
  ],
  ML: [
    "Historical 9-unit division; later region additions are not represented.",
  ],
  ET: [
    "Historical 11-unit division; subsequent regional-state changes are not represented.",
  ],
  MR: [
    "Historical 13-unit division; subsequent Nouakchott subdivision changes require review.",
  ],
  RU: [
    "De facto source grouping includes disputed areas whose source ISO prefix is UA. They use NE_ keys, not Russia ISO keys. One unnamed source area is retained with a source-ID label.",
  ],
  CN: [
    "Source includes 31 mainland province-level units and a separate Paracel Islands area under an NE_ key. This is source coverage, not a statement on sovereignty.",
  ],
  AU: [
    "Lord Howe Island geometry is merged with New South Wales. Some islands/territories use source-defined NE_ keys rather than official province codes.",
  ],
  IN: [
    "Source includes states and union territories; codes follow this frozen map snapshot, not necessarily current ISO codes.",
  ],
  KZ: [
    "Historical 16 units; later regions/cities are not represented. Source duplicated KZ-ALA for Almaty region and Almaty City; both use NE_ keys.",
  ],
  ID: ["Historical 33-province division; newer provinces are not represented."],
  US: [
    "50 states plus Washington, DC; territories are not included in this US object.",
  ],
});

export const provinceCounts: Readonly<Record<string, number>> = deepFreeze({
  DZ: 48,
  CD: 11,
  SD: 17,
  LY: 22,
  TD: 22,
  NE: 8,
  AO: 18,
  ML: 9,
  ZA: 9,
  ET: 11,
  MR: 13,
  RU: 86,
  CA: 13,
  US: 51,
  CN: 32,
  BR: 27,
  AU: 11,
  IN: 36,
  AR: 24,
  KZ: 16,
  SA: 13,
  ID: 33,
});
