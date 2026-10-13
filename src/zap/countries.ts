/**
 * Direct country/province configuration for generateAddress.
 * Natural Earth 1:10 million, WGS84 degrees, public-domain map data.
 * Sources retrieved 2026-10-10:
 * https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-countries/
 * https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/
 *
 * 239 country/territory keys; 22 countries use province grids, including US states.
 * The remaining 217 entries use country-wide rectangles. No invented province codes.
 * Source units without ISO/EH codes are exported separately under NE_ keys.
 * Some territories are grouped under a parent: this is not ISO-249 coverage.
 * XK is the source's Kosovo code, not an officially assigned ISO code.
 * Source de facto territorial grouping is retained.
 *
 * Corner order: topLeft, topRight, bottomRight, bottomLeft.
 * Numbers are rounded outward to six decimals to contain source geometry.
 * Six decimals are representation precision, not centimeter boundary accuracy.
 * Rectangles can overlap; administrative membership must be verified separately.
 * For date-line crossings west > east. ZAP supports these rectangles.
 * AQ (Antarctica) spans all longitudes. ZAP handles its explicit 360-degree span.
 * US territories such as PR and GU have separate country/territory entries.
 * These versions and corners are frozen at runtime. Updates require a new snapshot.
 */

import type { Country } from "../types.js";
import { deepFreeze } from "../internal.js";
import { provinceGrids } from "./provinces.js";

export const countries: Readonly<Record<string, Country>> = deepFreeze({
  AD: {
    name: "Andorra",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 42.649362, longitude: 1.406455 },
      { latitude: 42.649362, longitude: 1.765092 },
      { latitude: 42.428677, longitude: 1.765092 },
      { latitude: 42.428677, longitude: 1.406455 },
    ],
  },
  AE: {
    name: "United Arab Emirates",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 26.074792, longitude: 51.569346 },
      { latitude: 26.074792, longitude: 56.383638 },
      { latitude: 22.620946, longitude: 56.383638 },
      { latitude: 22.620946, longitude: 51.569346 },
    ],
  },
  AF: {
    name: "Afghanistan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 38.473673, longitude: 60.486777 },
      { latitude: 38.473673, longitude: 74.892308 },
      { latitude: 29.386605, longitude: 74.892308 },
      { latitude: 29.386605, longitude: 60.486777 },
    ],
  },
  AG: {
    name: "Antigua and Barbuda",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 17.727688, longitude: -62.34826 },
      { latitude: 17.727688, longitude: -61.667592 },
      { latitude: 16.93197, longitude: -61.667592 },
      { latitude: 16.93197, longitude: -62.34826 },
    ],
  },
  AI: {
    name: "Anguilla",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.601264, longitude: -63.428823 },
      { latitude: 18.601264, longitude: -62.925681 },
      { latitude: 18.169094, longitude: -62.925681 },
      { latitude: 18.169094, longitude: -63.428823 },
    ],
  },
  AL: {
    name: "Albania",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 42.654814, longitude: 19.272032 },
      { latitude: 42.654814, longitude: 21.036679 },
      { latitude: 39.637013, longitude: 21.036679 },
      { latitude: 39.637013, longitude: 19.272032 },
    ],
  },
  AM: {
    name: "Armenia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 41.290452, longitude: 43.436294 },
      { latitude: 41.290452, longitude: 46.602612 },
      { latitude: 38.863701, longitude: 46.602612 },
      { latitude: 38.863701, longitude: 43.436294 },
    ],
  },

  AQ: {
    name: "Antarctica",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -60.516209, longitude: -180.0 },
      { latitude: -60.516209, longitude: 180.0 },
      { latitude: -90.0, longitude: 180.0 },
      { latitude: -90.0, longitude: -180.0 },
    ],
  },

  AS: {
    name: "American Samoa",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -11.051365, longitude: -171.086538 },
      { latitude: -11.051365, longitude: -168.160471 },
      { latitude: -14.532892, longitude: -168.160471 },
      { latitude: -14.532892, longitude: -171.086538 },
    ],
  },
  AT: {
    name: "Austria",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 49.009774, longitude: 9.521154 },
      { latitude: 49.009774, longitude: 17.148338 },
      { latitude: 46.378643, longitude: 17.148338 },
      { latitude: 46.378643, longitude: 9.521154 },
    ],
  },

  AW: {
    name: "Aruba",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 12.632148, longitude: -70.062408 },
      { latitude: 12.632148, longitude: -69.87682 },
      { latitude: 12.41767, longitude: -69.87682 },
      { latitude: 12.41767, longitude: -70.062408 },
    ],
  },
  AX: {
    name: "Aland",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 60.48078, longitude: 19.513194 },
      { latitude: 60.48078, longitude: 21.096691 },
      { latitude: 59.904486, longitude: 21.096691 },
      { latitude: 59.904486, longitude: 19.513194 },
    ],
  },
  AZ: {
    name: "Azerbaijan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 41.890442, longitude: 44.774558 },
      { latitude: 41.890442, longitude: 50.625743 },
      { latitude: 38.392645, longitude: 50.625743 },
      { latitude: 38.392645, longitude: 44.774558 },
    ],
  },
  BA: {
    name: "Bosnia and Herzegovina",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 45.284524, longitude: 15.716073 },
      { latitude: 45.284524, longitude: 19.618886 },
      { latitude: 42.559212, longitude: 19.618886 },
      { latitude: 42.559212, longitude: 15.716073 },
    ],
  },
  BB: {
    name: "Barbados",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 13.34455, longitude: -59.654206 },
      { latitude: 13.34455, longitude: -59.42691 },
      { latitude: 13.051174, longitude: -59.42691 },
      { latitude: 13.051174, longitude: -59.654206 },
    ],
  },
  BD: {
    name: "Bangladesh",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 26.623544, longitude: 88.02179 },
      { latitude: 26.623544, longitude: 92.642851 },
      { latitude: 20.738715, longitude: 92.642851 },
      { latitude: 20.738715, longitude: 88.02179 },
    ],
  },
  BE: {
    name: "Belgium",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 51.496238, longitude: 2.5218 },
      { latitude: 51.496238, longitude: 6.374526 },
      { latitude: 49.495223, longitude: 6.374526 },
      { latitude: 49.495223, longitude: 2.5218 },
    ],
  },
  BF: {
    name: "Burkina Faso",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 15.079908, longitude: -5.522579 },
      { latitude: 15.079908, longitude: 2.39017 },
      { latitude: 9.391883, longitude: 2.39017 },
      { latitude: 9.391883, longitude: -5.522579 },
    ],
  },
  BG: {
    name: "Bulgaria",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 44.228435, longitude: 22.345022 },
      { latitude: 44.228435, longitude: 28.603526 },
      { latitude: 41.238104, longitude: 28.603526 },
      { latitude: 41.238104, longitude: 22.345022 },
    ],
  },
  BH: {
    name: "Bahrain",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 26.287439, longitude: 50.380529 },
      { latitude: 26.287439, longitude: 50.819875 },
      { latitude: 25.579891, longitude: 50.819875 },
      { latitude: 25.579891, longitude: 50.380529 },
    ],
  },
  BI: {
    name: "Burundi",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -2.303062, longitude: 28.986891 },
      { latitude: -2.303062, longitude: 30.833963 },
      { latitude: -4.463344, longitude: 30.833963 },
      { latitude: -4.463344, longitude: 28.986891 },
    ],
  },
  BJ: {
    name: "Benin",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 12.399244, longitude: 0.759881 },
      { latitude: 12.399244, longitude: 3.83742 },
      { latitude: 6.213894, longitude: 3.83742 },
      { latitude: 6.213894, longitude: 0.759881 },
    ],
  },
  BL: {
    name: "Saint Barthelemy",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 17.929145, longitude: -62.867341 },
      { latitude: 17.929145, longitude: -62.791655 },
      { latitude: 17.881985, longitude: -62.791655 },
      { latitude: 17.881985, longitude: -62.867341 },
    ],
  },
  BM: {
    name: "Bermuda",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 32.388658, longitude: -64.885994 },
      { latitude: 32.388658, longitude: -64.64763 },
      { latitude: 32.248077, longitude: -64.64763 },
      { latitude: 32.248077, longitude: -64.885994 },
    ],
  },
  BN: {
    name: "Brunei",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 5.057196, longitude: 113.998789 },
      { latitude: 5.057196, longitude: 115.360742 },
      { latitude: 4.016681, longitude: 115.360742 },
      { latitude: 4.016681, longitude: 113.998789 },
    ],
  },
  BO: {
    name: "Bolivia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -9.679821, longitude: -69.666492 },
      { latitude: -9.679821, longitude: -57.465661 },
      { latitude: -22.897258, longitude: -57.465661 },
      { latitude: -22.897258, longitude: -69.666492 },
    ],
  },

  BS: {
    name: "The Bahamas",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 26.928412, longitude: -79.594351 },
      { latitude: 26.928412, longitude: -72.746165 },
      { latitude: 20.912399, longitude: -72.746165 },
      { latitude: 20.912399, longitude: -79.594351 },
    ],
  },
  BT: {
    name: "Bhutan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 28.358399, longitude: 88.730066 },
      { latitude: 28.358399, longitude: 92.088776 },
      { latitude: 26.696149, longitude: 92.088776 },
      { latitude: 26.696149, longitude: 88.730066 },
    ],
  },
  BW: {
    name: "Botswana",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -17.781808, longitude: 19.978345 },
      { latitude: -17.781808, longitude: 29.350075 },
      { latitude: -26.891794, longitude: 29.350075 },
      { latitude: -26.891794, longitude: 19.978345 },
    ],
  },
  BY: {
    name: "Belarus",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 56.156806, longitude: 23.165645 },
      { latitude: 56.156806, longitude: 32.719533 },
      { latitude: 51.235168, longitude: 32.719533 },
      { latitude: 51.235168, longitude: 23.165645 },
    ],
  },
  BZ: {
    name: "Belize",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.490759, longitude: -89.236512 },
      { latitude: 18.490759, longitude: -87.78307 },
      { latitude: 15.879652, longitude: -87.78307 },
      { latitude: 15.879652, longitude: -89.236512 },
    ],
  },

  CF: {
    name: "Central African Republic",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 11.000828, longitude: 14.387265 },
      { latitude: 11.000828, longitude: 27.441302 },
      { latitude: 2.236454, longitude: 27.441302 },
      { latitude: 2.236454, longitude: 14.387265 },
    ],
  },
  CG: {
    name: "Republic of the Congo",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 3.708276, longitude: 11.114015 },
      { latitude: 3.708276, longitude: 18.642407 },
      { latitude: -5.019631, longitude: 18.642407 },
      { latitude: -5.019631, longitude: 11.114015 },
    ],
  },
  CH: {
    name: "Switzerland",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 47.801166, longitude: 5.954809 },
      { latitude: 47.801166, longitude: 10.466627 },
      { latitude: 45.820718, longitude: 10.466627 },
      { latitude: 45.820718, longitude: 5.954809 },
    ],
  },
  CI: {
    name: "Ivory Coast",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 10.726478, longitude: -8.618721 },
      { latitude: 10.726478, longitude: -2.506327 },
      { latitude: 4.344062, longitude: -2.506327 },
      { latitude: 4.344062, longitude: -8.618721 },
    ],
  },
  CK: {
    name: "Cook Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -8.94671, longitude: -165.824534 },
      { latitude: -8.94671, longitude: -157.312815 },
      { latitude: -21.938897, longitude: -157.312815 },
      { latitude: -21.938897, longitude: -165.824534 },
    ],
  },
  CL: {
    name: "Chile",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -17.506588, longitude: -109.453726 },
      { latitude: -17.506588, longitude: -66.420805 },
      { latitude: -55.918504, longitude: -66.420805 },
      { latitude: -55.918504, longitude: -109.453726 },
    ],
  },
  CM: {
    name: "Cameroon",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 13.081141, longitude: 8.505055 },
      { latitude: 13.081141, longitude: 16.207723 },
      { latitude: 1.654551, longitude: 16.207723 },
      { latitude: 1.654551, longitude: 8.505055 },
    ],
  },

  CO: {
    name: "Colombia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 13.578355, longitude: -81.723704 },
      { latitude: 13.578355, longitude: -66.875061 },
      { latitude: -4.236484, longitude: -66.875061 },
      { latitude: -4.236484, longitude: -81.723704 },
    ],
  },
  CR: {
    name: "Costa Rica",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 11.209937, longitude: -87.117665 },
      { latitude: 11.209937, longitude: -82.562837 },
      { latitude: 5.515082, longitude: -82.562837 },
      { latitude: 5.515082, longitude: -87.117665 },
    ],
  },
  CU: {
    name: "Cuba",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 23.26557, longitude: -84.949615 },
      { latitude: 23.26557, longitude: -74.132882 },
      { latitude: 19.827826, longitude: -74.132882 },
      { latitude: 19.827826, longitude: -84.949615 },
    ],
  },
  CV: {
    name: "Cabo Verde",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 17.196601, longitude: -25.360422 },
      { latitude: 17.196601, longitude: -22.666574 },
      { latitude: 14.803941, longitude: -22.666574 },
      { latitude: 14.803941, longitude: -25.360422 },
    ],
  },
  CW: {
    name: "Curaçao",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 12.391506, longitude: -69.171742 },
      { latitude: 12.391506, longitude: -68.739735 },
      { latitude: 12.041327, longitude: -68.739735 },
      { latitude: 12.041327, longitude: -69.171742 },
    ],
  },
  CY: {
    name: "Cyprus",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 35.187082, longitude: 32.271738 },
      { latitude: 35.187082, longitude: 34.099132 },
      { latitude: 34.625019, longitude: 34.099132 },
      { latitude: 34.625019, longitude: 32.271738 },
    ],
  },
  CZ: {
    name: "Czechia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 51.040012, longitude: 12.076141 },
      { latitude: 51.040012, longitude: 18.837434 },
      { latitude: 48.557916, longitude: 18.837434 },
      { latitude: 48.557916, longitude: 12.076141 },
    ],
  },
  DE: {
    name: "Germany",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 55.065334, longitude: 5.852489 },
      { latitude: 55.065334, longitude: 15.02206 },
      { latitude: 47.271121, longitude: 15.02206 },
      { latitude: 47.271121, longitude: 5.852489 },
    ],
  },
  DJ: {
    name: "Djibouti",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 12.707913, longitude: 41.74911 },
      { latitude: 12.707913, longitude: 43.418712 },
      { latitude: 10.929825, longitude: 43.418712 },
      { latitude: 10.929825, longitude: 41.74911 },
    ],
  },
  DK: {
    name: "Denmark",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 57.751166, longitude: 8.094005 },
      { latitude: 57.751166, longitude: 15.151379 },
      { latitude: 54.56859, longitude: 15.151379 },
      { latitude: 54.56859, longitude: 8.094005 },
    ],
  },
  DM: {
    name: "Dominica",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 15.633857, longitude: -61.488922 },
      { latitude: 15.633857, longitude: -61.249257 },
      { latitude: 15.201809, longitude: -61.249257 },
      { latitude: 15.201809, longitude: -61.488922 },
    ],
  },
  DO: {
    name: "Dominican Republic",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 19.93769, longitude: -72.009838 },
      { latitude: 19.93769, longitude: -68.328602 },
      { latitude: 17.545559, longitude: -68.328602 },
      { latitude: 17.545559, longitude: -72.009838 },
    ],
  },

  EC: {
    name: "Ecuador",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 1.664374, longitude: -92.011586 },
      { latitude: 1.664374, longitude: -75.227263 },
      { latitude: -5.011373, longitude: -75.227263 },
      { latitude: -5.011373, longitude: -92.011586 },
    ],
  },
  EE: {
    name: "Estonia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 59.670885, longitude: 21.832367 },
      { latitude: 59.670885, longitude: 28.186475 },
      { latitude: 57.515819, longitude: 28.186475 },
      { latitude: 57.515819, longitude: 21.832367 },
    ],
  },
  EG: {
    name: "Egypt",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 31.65648, longitude: 24.688343 },
      { latitude: 31.65648, longitude: 36.899181 },
      { latitude: 21.994369, longitude: 36.899181 },
      { latitude: 21.994369, longitude: 24.688343 },
    ],
  },
  EH: {
    name: "Western Sahara",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 27.661465, longitude: -17.104645 },
      { latitude: 27.661465, longitude: -8.680808 },
      { latitude: 20.766913, longitude: -8.680808 },
      { latitude: 20.766913, longitude: -17.104645 },
    ],
  },
  ER: {
    name: "Eritrea",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.004828, longitude: 36.423647 },
      { latitude: 18.004828, longitude: 43.123872 },
      { latitude: 12.360022, longitude: 43.123872 },
      { latitude: 12.360022, longitude: 36.423647 },
    ],
  },
  ES: {
    name: "Spain",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 43.793443, longitude: -18.167227 },
      { latitude: 43.793443, longitude: 4.337087 },
      { latitude: 27.642239, longitude: 4.337087 },
      { latitude: 27.642239, longitude: -18.167227 },
    ],
  },

  FI: {
    name: "Finland",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 70.07531, longitude: 20.623164 },
      { latitude: 70.07531, longitude: 31.569525 },
      { latitude: 59.811225, longitude: 31.569525 },
      { latitude: 59.811225, longitude: 20.623164 },
    ],
  },
  FJ: {
    name: "Fiji",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -12.475274, longitude: 174.588878 },
      { latitude: -12.475274, longitude: -178.216135 },
      { latitude: -21.711114, longitude: -178.216135 },
      { latitude: -21.711114, longitude: 174.588878 },
    ],
  },
  FK: {
    name: "Falkland Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -51.027765, longitude: -61.318187 },
      { latitude: -51.027765, longitude: -57.734283 },
      { latitude: -52.406523, longitude: -57.734283 },
      { latitude: -52.406523, longitude: -61.318187 },
    ],
  },
  FM: {
    name: "Federated States of Micronesia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 9.77558, longitude: 138.063812 },
      { latitude: 9.77558, longitude: 163.04656 },
      { latitude: 0.918158, longitude: 163.04656 },
      { latitude: 0.918158, longitude: 138.063812 },
    ],
  },
  FO: {
    name: "Faroe Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 62.398912, longitude: -7.644155 },
      { latitude: 62.398912, longitude: -6.275787 },
      { latitude: 61.39411, longitude: -6.275787 },
      { latitude: 61.39411, longitude: -7.644155 },
    ],
  },
  FR: {
    name: "France",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 51.087541, longitude: -109.234242 },
      { latitude: 51.087541, longitude: 55.854503 },
      { latitude: -21.370782, longitude: 55.854503 },
      { latitude: -21.370782, longitude: -109.234242 },
    ],
  },
  GA: {
    name: "Gabon",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 2.322495, longitude: 8.695566 },
      { latitude: 2.322495, longitude: 14.498992 },
      { latitude: -3.936856, longitude: 14.498992 },
      { latitude: -3.936856, longitude: 8.695566 },
    ],
  },
  GB: {
    name: "United Kingdom",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 60.847886, longitude: -13.691315 },
      { latitude: 60.847886, longitude: 1.771169 },
      { latitude: 49.909613, longitude: 1.771169 },
      { latitude: 49.909613, longitude: -13.691315 },
    ],
  },
  GD: {
    name: "Grenada",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 12.529731, longitude: -61.790518 },
      { latitude: 12.529731, longitude: -61.421619 },
      { latitude: 12.002834, longitude: -61.421619 },
      { latitude: 12.002834, longitude: -61.790518 },
    ],
  },
  GE: {
    name: "Georgia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 43.575843, longitude: 39.985975 },
      { latitude: 43.575843, longitude: 46.694804 },
      { latitude: 41.044111, longitude: 46.694804 },
      { latitude: 41.044111, longitude: 39.985975 },
    ],
  },
  GG: {
    name: "Guernsey",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 49.731391, longitude: -2.673451 },
      { latitude: 49.731391, longitude: -2.170317 },
      { latitude: 49.411566, longitude: -2.170317 },
      { latitude: 49.411566, longitude: -2.673451 },
    ],
  },
  GH: {
    name: "Ghana",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 11.162937, longitude: -3.26251 },
      { latitude: 11.162937, longitude: 1.187969 },
      { latitude: 4.737128, longitude: 1.187969 },
      { latitude: 4.737128, longitude: -3.26251 },
    ],
  },
  GI: {
    name: "Gibraltar",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 36.14112, longitude: -5.358387 },
      { latitude: 36.14112, longitude: -5.338772 },
      { latitude: 36.1105, longitude: -5.338772 },
      { latitude: 36.1105, longitude: -5.358387 },
    ],
  },
  GL: {
    name: "Greenland",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 83.634101, longitude: -73.05724 },
      { latitude: 83.634101, longitude: -11.376819 },
      { latitude: 59.792629, longitude: -11.376819 },
      { latitude: 59.792629, longitude: -73.05724 },
    ],
  },
  GM: {
    name: "Gambia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 13.819984, longitude: -16.829701 },
      { latitude: 13.819984, longitude: -13.818713 },
      { latitude: 13.065009, longitude: -13.818713 },
      { latitude: 13.065009, longitude: -16.829701 },
    ],
  },
  GN: {
    name: "Guinea",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 12.673388, longitude: -15.081125 },
      { latitude: 12.673388, longitude: -7.662446 },
      { latitude: 7.190208, longitude: -7.662446 },
      { latitude: 7.190208, longitude: -15.081125 },
    ],
  },
  GQ: {
    name: "Equatorial Guinea",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 3.772406, longitude: 5.611989 },
      { latitude: 3.772406, longitude: 11.336342 },
      { latitude: -1.475681, longitude: 11.336342 },
      { latitude: -1.475681, longitude: 5.611989 },
    ],
  },
  GR: {
    name: "Greece",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 41.750476, longitude: 19.626475 },
      { latitude: 41.750476, longitude: 28.239757 },
      { latitude: 34.815009, longitude: 28.239757 },
      { latitude: 34.815009, longitude: 19.626475 },
    ],
  },
  GS: {
    name: "South Georgia and the Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -53.972426, longitude: -38.087027 },
      { latitude: -53.972426, longitude: -26.239328 },
      { latitude: -59.472752, longitude: -26.239328 },
      { latitude: -59.472752, longitude: -38.087027 },
    ],
  },
  GT: {
    name: "Guatemala",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 17.81602, longitude: -92.246258 },
      { latitude: 17.81602, longitude: -88.220936 },
      { latitude: 13.731404, longitude: -88.220936 },
      { latitude: 13.731404, longitude: -92.246258 },
    ],
  },
  GU: {
    name: "Guam",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 13.65412, longitude: 144.624196 },
      { latitude: 13.65412, longitude: 144.952159 },
      { latitude: 13.241034, longitude: 144.952159 },
      { latitude: 13.241034, longitude: 144.624196 },
    ],
  },
  GW: {
    name: "Guinea-Bissau",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 12.679434, longitude: -16.728437 },
      { latitude: 12.679434, longitude: -13.660711 },
      { latitude: 10.927639, longitude: -13.660711 },
      { latitude: 10.927639, longitude: -16.728437 },
    ],
  },
  GY: {
    name: "Guyana",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 8.55801, longitude: -61.396714 },
      { latitude: 8.55801, longitude: -56.481818 },
      { latitude: 1.18582, longitude: -56.481818 },
      { latitude: 1.18582, longitude: -61.396714 },
    ],
  },
  HK: {
    name: "Hong Kong S.A.R.",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 22.563946, longitude: 113.837332 },
      { latitude: 22.563946, longitude: 114.401296 },
      { latitude: 22.177069, longitude: 114.401296 },
      { latitude: 22.177069, longitude: 113.837332 },
    ],
  },
  HM: {
    name: "Heard Island and McDonald Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -52.961602, longitude: 73.236013 },
      { latitude: -52.961602, longitude: 73.812185 },
      { latitude: -53.19256, longitude: 73.812185 },
      { latitude: -53.19256, longitude: 73.236013 },
    ],
  },
  HN: {
    name: "Honduras",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 17.418647, longitude: -89.363791 },
      { latitude: 17.418647, longitude: -83.130444 },
      { latitude: 12.979777, longitude: -83.130444 },
      { latitude: 12.979777, longitude: -89.363791 },
    ],
  },
  HR: {
    name: "Croatia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 46.546979, longitude: 13.501475 },
      { latitude: 46.546979, longitude: 19.407838 },
      { latitude: 42.416327, longitude: 19.407838 },
      { latitude: 42.416327, longitude: 13.501475 },
    ],
  },
  HT: {
    name: "Haiti",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 20.089789, longitude: -74.489167 },
      { latitude: 20.089789, longitude: -71.63911 },
      { latitude: 18.025946, longitude: -71.63911 },
      { latitude: 18.025946, longitude: -74.489167 },
    ],
  },
  HU: {
    name: "Hungary",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 48.569233, longitude: 16.094034 },
      { latitude: 48.569233, longitude: 22.877601 },
      { latitude: 45.741343, longitude: 22.877601 },
      { latitude: 45.741343, longitude: 16.094034 },
    ],
  },

  IE: {
    name: "Ireland",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 55.386379, longitude: -10.478179 },
      { latitude: 55.386379, longitude: -5.993519 },
      { latitude: 51.445705, longitude: -5.993519 },
      { latitude: 51.445705, longitude: -10.478179 },
    ],
  },
  IL: {
    name: "Israel",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 33.406723, longitude: 34.24835 },
      { latitude: 33.406723, longitude: 35.888073 },
      { latitude: 29.489691, longitude: 35.888073 },
      { latitude: 29.489691, longitude: 34.24835 },
    ],
  },
  IM: {
    name: "Isle of Man",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 54.419013, longitude: -4.790152 },
      { latitude: 54.419013, longitude: -4.311919 },
      { latitude: 54.056952, longitude: -4.311919 },
      { latitude: 54.056952, longitude: -4.790152 },
    ],
  },

  IO: {
    name: "British Indian Ocean Territory",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -5.226983, longitude: 71.260997 },
      { latitude: -5.226983, longitude: 72.49464 },
      { latitude: -7.432224, longitude: 72.49464 },
      { latitude: -7.432224, longitude: 71.260997 },
    ],
  },
  IQ: {
    name: "Iraq",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 37.375498, longitude: 38.77451 },
      { latitude: 37.375498, longitude: 48.559256 },
      { latitude: 29.063137, longitude: 48.559256 },
      { latitude: 29.063137, longitude: 38.77451 },
    ],
  },
  IR: {
    name: "Iran",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 39.771527, longitude: 44.014862 },
      { latitude: 39.771527, longitude: 63.319628 },
      { latitude: 25.059408, longitude: 63.319628 },
      { latitude: 25.059408, longitude: 44.014862 },
    ],
  },
  IS: {
    name: "Iceland",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 66.564154, longitude: -24.539906 },
      { latitude: 66.564154, longitude: -13.502919 },
      { latitude: 63.396715, longitude: -13.502919 },
      { latitude: 63.396715, longitude: -24.539906 },
    ],
  },
  IT: {
    name: "Italy",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 47.085215, longitude: 6.602727 },
      { latitude: 47.085215, longitude: 18.517426 },
      { latitude: 35.489244, longitude: 18.517426 },
      { latitude: 35.489244, longitude: 6.602727 },
    ],
  },
  JE: {
    name: "Jersey",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 49.267035, longitude: -2.242015 },
      { latitude: 49.267035, longitude: -2.008289 },
      { latitude: 49.171332, longitude: -2.008289 },
      { latitude: 49.171332, longitude: -2.242015 },
    ],
  },
  JM: {
    name: "Jamaica",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.525092, longitude: -78.374664 },
      { latitude: 18.525092, longitude: -76.187977 },
      { latitude: 17.703192, longitude: -76.187977 },
      { latitude: 17.703192, longitude: -78.374664 },
    ],
  },
  JO: {
    name: "Jordan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 33.371685, longitude: 34.949385 },
      { latitude: 33.371685, longitude: 39.292 },
      { latitude: 29.189951, longitude: 39.292 },
      { latitude: 29.189951, longitude: 34.949385 },
    ],
  },
  JP: {
    name: "Japan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 45.520413, longitude: 122.938162 },
      { latitude: 45.520413, longitude: 153.985606 },
      { latitude: 24.212104, longitude: 153.985606 },
      { latitude: 24.212104, longitude: 122.938162 },
    ],
  },
  KE: {
    name: "Kenya",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 5.030376, longitude: 33.890468 },
      { latitude: 5.030376, longitude: 41.885019 },
      { latitude: -4.677504, longitude: 41.885019 },
      { latitude: -4.677504, longitude: 33.890468 },
    ],
  },
  KG: {
    name: "Kyrgyzstan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 43.261702, longitude: 69.226295 },
      { latitude: 43.261702, longitude: 80.257562 },
      { latitude: 39.189237, longitude: 80.257562 },
      { latitude: 39.189237, longitude: 69.226295 },
    ],
  },
  KH: {
    name: "Cambodia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 14.704582, longitude: 102.313424 },
      { latitude: 14.704582, longitude: 107.610517 },
      { latitude: 10.415774, longitude: 107.610517 },
      { latitude: 10.415774, longitude: 102.313424 },
    ],
  },
  KI: {
    name: "Kiribati",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 4.72309, longitude: 169.522146 },
      { latitude: 4.72309, longitude: -151.780955 },
      { latitude: -11.461114, longitude: -151.780955 },
      { latitude: -11.461114, longitude: 169.522146 },
    ],
  },
  KM: {
    name: "Comoros",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -11.361261, longitude: 43.213226 },
      { latitude: -11.361261, longitude: 44.529064 },
      { latitude: -12.380304, longitude: 44.529064 },
      { latitude: -12.380304, longitude: 43.213226 },
    ],
  },
  KN: {
    name: "Saint Kitts and Nevis",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 17.415839, longitude: -62.861074 },
      { latitude: 17.415839, longitude: -62.536772 },
      { latitude: 17.100531, longitude: -62.536772 },
      { latitude: 17.100531, longitude: -62.861074 },
    ],
  },
  KP: {
    name: "North Korea",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 43.01027, longitude: 124.211316 },
      { latitude: 43.01027, longitude: 130.699963 },
      { latitude: 37.675605, longitude: 130.699963 },
      { latitude: 37.675605, longitude: 124.211316 },
    ],
  },
  KR: {
    name: "South Korea",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 38.624335, longitude: 124.613616 },
      { latitude: 38.624335, longitude: 131.862523 },
      { latitude: 33.197577, longitude: 131.862523 },
      { latitude: 33.197577, longitude: 124.613616 },
    ],
  },
  KW: {
    name: "Kuwait",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 30.098216, longitude: 46.532435 },
      { latitude: 30.098216, longitude: 48.432782 },
      { latitude: 28.533505, longitude: 48.432782 },
      { latitude: 28.533505, longitude: 46.532435 },
    ],
  },
  KY: {
    name: "Cayman Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 19.757631, longitude: -81.416543 },
      { latitude: 19.757631, longitude: -79.726642 },
      { latitude: 19.263864, longitude: -79.726642 },
      { latitude: 19.263864, longitude: -81.416543 },
    ],
  },

  LA: {
    name: "Laos",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 22.496044, longitude: 100.097073 },
      { latitude: 22.496044, longitude: 107.664363 },
      { latitude: 13.915457, longitude: 107.664363 },
      { latitude: 13.915457, longitude: 100.097073 },
    ],
  },
  LB: {
    name: "Lebanon",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 34.687548, longitude: 35.09962 },
      { latitude: 34.687548, longitude: 36.604102 },
      { latitude: 33.05558, longitude: 36.604102 },
      { latitude: 33.05558, longitude: 35.09962 },
    ],
  },
  LC: {
    name: "Saint Lucia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 14.111884, longitude: -61.078522 },
      { latitude: 14.111884, longitude: -60.882965 },
      { latitude: 13.714667, longitude: -60.882965 },
      { latitude: 13.714667, longitude: -61.078522 },
    ],
  },
  LI: {
    name: "Liechtenstein",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 47.262801, longitude: 9.475886 },
      { latitude: 47.262801, longitude: 9.615724 },
      { latitude: 47.0524, longitude: 9.615724 },
      { latitude: 47.0524, longitude: 9.475886 },
    ],
  },
  LK: {
    name: "Sri Lanka",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 9.829576, longitude: 79.655772 },
      { latitude: 9.829576, longitude: 81.89031 },
      { latitude: 5.923733, longitude: 81.89031 },
      { latitude: 5.923733, longitude: 79.655772 },
    ],
  },
  LR: {
    name: "Liberia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 8.565396, longitude: -11.476186 },
      { latitude: 8.565396, longitude: -7.384117 },
      { latitude: 4.347235, longitude: -7.384117 },
      { latitude: 4.347235, longitude: -11.476186 },
    ],
  },
  LS: {
    name: "Lesotho",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -28.570761, longitude: 27.002154 },
      { latitude: -28.570761, longitude: 29.435909 },
      { latitude: -30.658799, longitude: 29.435909 },
      { latitude: -30.658799, longitude: 27.002154 },
    ],
  },
  LT: {
    name: "Lithuania",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 56.442602, longitude: 20.924568 },
      { latitude: 56.442602, longitude: 26.800721 },
      { latitude: 53.886841, longitude: 26.800721 },
      { latitude: 53.886841, longitude: 20.924568 },
    ],
  },
  LU: {
    name: "Luxembourg",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 50.174975, longitude: 5.714926 },
      { latitude: 50.174975, longitude: 6.502579 },
      { latitude: 49.441324, longitude: 6.502579 },
      { latitude: 49.441324, longitude: 5.714926 },
    ],
  },
  LV: {
    name: "Latvia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 58.075138, longitude: 20.968597 },
      { latitude: 58.075138, longitude: 28.217275 },
      { latitude: 55.666991, longitude: 28.217275 },
      { latitude: 55.666991, longitude: 20.968597 },
    ],
  },

  MA: {
    name: "Morocco",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 35.926519, longitude: -17.013743 },
      { latitude: 35.926519, longitude: -1.031999 },
      { latitude: 21.419971, longitude: -1.031999 },
      { latitude: 21.419971, longitude: -17.013743 },
    ],
  },
  MC: {
    name: "Monaco",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 43.763506, longitude: 7.365749 },
      { latitude: 43.763506, longitude: 7.437455 },
      { latitude: 43.717969, longitude: 7.437455 },
      { latitude: 43.717969, longitude: 7.365749 },
    ],
  },
  MD: {
    name: "Moldova",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 48.486034, longitude: 26.617888 },
      { latitude: 48.486034, longitude: 30.131576 },
      { latitude: 45.461774, longitude: 30.131576 },
      { latitude: 45.461774, longitude: 26.617888 },
    ],
  },
  ME: {
    name: "Montenegro",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 43.547886, longitude: 18.43353 },
      { latitude: 43.547886, longitude: 20.355172 },
      { latitude: 41.852362, longitude: 20.355172 },
      { latitude: 41.852362, longitude: 18.43353 },
    ],
  },
  MF: {
    name: "Saint Martin",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.122138, longitude: -63.14684 },
      { latitude: 18.122138, longitude: -63.010732 },
      { latitude: 18.033391, longitude: -63.010732 },
      { latitude: 18.033391, longitude: -63.14684 },
    ],
  },
  MG: {
    name: "Madagascar",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -11.943617, longitude: 43.222911 },
      { latitude: -11.943617, longitude: 50.503917 },
      { latitude: -25.598565, longitude: 50.503917 },
      { latitude: -25.598565, longitude: 43.222911 },
    ],
  },
  MH: {
    name: "Marshall Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 14.6105, longitude: 165.282237 },
      { latitude: 14.6105, longitude: 172.029797 },
      { latitude: 4.573798, longitude: 172.029797 },
      { latitude: 4.573798, longitude: 165.282237 },
    ],
  },
  MK: {
    name: "North Macedonia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 42.370335, longitude: 20.444156 },
      { latitude: 42.370335, longitude: 23.009582 },
      { latitude: 40.849394, longitude: 23.009582 },
      { latitude: 40.849394, longitude: 20.444156 },
    ],
  },

  MM: {
    name: "Myanmar",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 28.538466, longitude: 92.174973 },
      { latitude: 28.538466, longitude: 101.173855 },
      { latitude: 9.790717, longitude: 101.173855 },
      { latitude: 9.790717, longitude: 92.174973 },
    ],
  },
  MN: {
    name: "Mongolia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 52.129584, longitude: 87.735708 },
      { latitude: 52.129584, longitude: 119.907027 },
      { latitude: 41.586145, longitude: 119.907027 },
      { latitude: 41.586145, longitude: 87.735708 },
    ],
  },
  MO: {
    name: "Macao S.A.R",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 22.220771, longitude: 113.519866 },
      { latitude: 22.220771, longitude: 113.587494 },
      { latitude: 22.105373, longitude: 113.587494 },
      { latitude: 22.105373, longitude: 113.519866 },
    ],
  },
  MP: {
    name: "Northern Mariana Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 20.555406, longitude: 144.90211 },
      { latitude: 20.555406, longitude: 145.868908 },
      { latitude: 14.110663, longitude: 145.868908 },
      { latitude: 14.110663, longitude: 144.90211 },
    ],
  },

  MS: {
    name: "Montserrat",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 16.819322, longitude: -62.230134 },
      { latitude: 16.819322, longitude: -62.140533 },
      { latitude: 16.67536, longitude: -62.140533 },
      { latitude: 16.67536, longitude: -62.230134 },
    ],
  },
  MT: {
    name: "Malta",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 36.075588, longitude: 14.183604 },
      { latitude: 36.075588, longitude: 14.567149 },
      { latitude: 35.801215, longitude: 14.567149 },
      { latitude: 35.801215, longitude: 14.183604 },
    ],
  },
  MU: {
    name: "Mauritius",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -10.323907, longitude: 56.524181 },
      { latitude: -10.323907, longitude: 63.493908 },
      { latitude: -20.517348, longitude: 63.493908 },
      { latitude: -20.517348, longitude: 56.524181 },
    ],
  },
  MV: {
    name: "Maldives",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 7.107245, longitude: 72.684824 },
      { latitude: 7.107245, longitude: 73.753185 },
      { latitude: -0.688572, longitude: 73.753185 },
      { latitude: -0.688572, longitude: 72.684824 },
    ],
  },
  MW: {
    name: "Malawi",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -9.381235, longitude: 32.663308 },
      { latitude: -9.381235, longitude: 35.9043 },
      { latitude: -17.135335, longitude: 35.9043 },
      { latitude: -17.135335, longitude: 32.663308 },
    ],
  },
  MX: {
    name: "Mexico",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 32.712837, longitude: -118.368805 },
      { latitude: 32.712837, longitude: -86.700592 },
      { latitude: 14.546279, longitude: -86.700592 },
      { latitude: 14.546279, longitude: -118.368805 },
    ],
  },
  MY: {
    name: "Malaysia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 7.35578, longitude: 99.645227 },
      { latitude: 7.35578, longitude: 119.278088 },
      { latitude: 0.85137, longitude: 119.278088 },
      { latitude: 0.85137, longitude: 99.645227 },
    ],
  },
  MZ: {
    name: "Mozambique",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -10.469008, longitude: 30.213844 },
      { latitude: -10.469008, longitude: 40.847993 },
      { latitude: -26.860272, longitude: 40.847993 },
      { latitude: -26.860272, longitude: 30.213844 },
    ],
  },
  NA: {
    name: "Namibia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -16.951057, longitude: 11.71762 },
      { latitude: -16.951057, longitude: 25.259782 },
      { latitude: -28.959368, longitude: 25.259782 },
      { latitude: -28.959368, longitude: 11.71762 },
    ],
  },
  NC: {
    name: "New Caledonia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -19.623712, longitude: 163.615732 },
      { latitude: -19.623712, longitude: 171.343765 },
      { latitude: -22.670668, longitude: 171.343765 },
      { latitude: -22.670668, longitude: 163.615732 },
    ],
  },

  NF: {
    name: "Norfolk Island",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -28.997491, longitude: 167.912119 },
      { latitude: -28.997491, longitude: 167.996349 },
      { latitude: -29.080011, longitude: 167.996349 },
      { latitude: -29.080011, longitude: 167.912119 },
    ],
  },
  NG: {
    name: "Nigeria",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 13.880291, longitude: 2.671082 },
      { latitude: 13.880291, longitude: 14.669937 },
      { latitude: 4.272162, longitude: 14.669937 },
      { latitude: 4.272162, longitude: 2.671082 },
    ],
  },
  NI: {
    name: "Nicaragua",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 15.03097, longitude: -87.685822 },
      { latitude: 15.03097, longitude: -82.725696 },
      { latitude: 10.713482, longitude: -82.725696 },
      { latitude: 10.713482, longitude: -87.685822 },
    ],
  },
  NL: {
    name: "Netherlands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 53.558092, longitude: -68.417389 },
      { latitude: 53.558092, longitude: 7.198507 },
      { latitude: 12.02204, longitude: 7.198507 },
      { latitude: 12.02204, longitude: -68.417389 },
    ],
  },
  NO: {
    name: "Norway",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 80.770087, longitude: -9.117422 },
      { latitude: 80.770087, longitude: 33.640391 },
      { latitude: -54.462498, longitude: 33.640391 },
      { latitude: -54.462498, longitude: -9.117422 },
    ],
  },
  NP: {
    name: "Nepal",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 30.416904, longitude: 80.030287 },
      { latitude: 30.416904, longitude: 88.169067 },
      { latitude: 26.343768, longitude: 88.169067 },
      { latitude: 26.343768, longitude: 80.030287 },
    ],
  },
  NR: {
    name: "Nauru",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -0.490411, longitude: 166.906993 },
      { latitude: -0.490411, longitude: 166.958263 },
      { latitude: -0.551853, longitude: 166.958263 },
      { latitude: -0.551853, longitude: 166.906993 },
    ],
  },
  NU: {
    name: "Niue",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -18.964044, longitude: -169.950429 },
      { latitude: -18.964044, longitude: -169.782908 },
      { latitude: -19.142755, longitude: -169.782908 },
      { latitude: -19.142755, longitude: -169.950429 },
    ],
  },
  NZ: {
    name: "New Zealand",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -8.543227, longitude: 165.886485 },
      { latitude: -8.543227, longitude: -171.185658 },
      { latitude: -52.600313, longitude: -171.185658 },
      { latitude: -52.600313, longitude: 165.886485 },
    ],
  },
  OM: {
    name: "Oman",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 26.385972, longitude: 51.978614 },
      { latitude: 26.385972, longitude: 59.844575 },
      { latitude: 16.642401, longitude: 59.844575 },
      { latitude: 16.642401, longitude: 51.978614 },
    ],
  },
  PA: {
    name: "Panama",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 9.629292, longitude: -83.053247 },
      { latitude: 9.629292, longitude: -77.163269 },
      { latitude: 7.205715, longitude: -77.163269 },
      { latitude: 7.205715, longitude: -83.053247 },
    ],
  },
  PE: {
    name: "Peru",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -0.029093, longitude: -81.337558 },
      { latitude: -0.029093, longitude: -68.684252 },
      { latitude: -18.337746, longitude: -68.684252 },
      { latitude: -18.337746, longitude: -81.337558 },
    ],
  },
  PF: {
    name: "French Polynesia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -7.950128, longitude: -154.536977 },
      { latitude: -7.950128, longitude: -134.942983 },
      { latitude: -27.641209, longitude: -134.942983 },
      { latitude: -27.641209, longitude: -154.536977 },
    ],
  },
  PG: {
    name: "Papua New Guinea",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -1.346368, longitude: 140.84921 },
      { latitude: -1.346368, longitude: 155.96754 },
      { latitude: -11.636326, longitude: 155.96754 },
      { latitude: -11.636326, longitude: 140.84921 },
    ],
  },
  PH: {
    name: "Philippines",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 21.122382, longitude: 116.954926 },
      { latitude: 21.122382, longitude: 126.617686 },
      { latitude: 4.655707, longitude: 126.617686 },
      { latitude: 4.655707, longitude: 116.954926 },
    ],
  },
  PK: {
    name: "Pakistan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 37.054484, longitude: 60.844379 },
      { latitude: 37.054484, longitude: 77.048971 },
      { latitude: 23.694525, longitude: 77.048971 },
      { latitude: 23.694525, longitude: 60.844379 },
    ],
  },
  PL: {
    name: "Poland",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 54.838324, longitude: 14.123922 },
      { latitude: 54.838324, longitude: 24.143157 },
      { latitude: 48.994013, longitude: 24.143157 },
      { latitude: 48.994013, longitude: 14.123922 },
    ],
  },
  PM: {
    name: "Saint Pierre and Miquelon",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 47.141262, longitude: -56.396596 },
      { latitude: 47.141262, longitude: -56.144765 },
      { latitude: 46.752753, longitude: -56.144765 },
      { latitude: 46.752753, longitude: -56.396596 },
    ],
  },
  PN: {
    name: "Pitcairn Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -23.924412, longitude: -130.753082 },
      { latitude: -23.924412, longitude: -124.778065 },
      { latitude: -25.077081, longitude: -124.778065 },
      { latitude: -25.077081, longitude: -130.753082 },
    ],
  },
  PR: {
    name: "Puerto Rico",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.522773, longitude: -67.937815 },
      { latitude: 18.522773, longitude: -65.244618 },
      { latitude: 17.922919, longitude: -65.244618 },
      { latitude: 17.922919, longitude: -67.937815 },
    ],
  },
  PS: {
    name: "Palestine",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 32.54264, longitude: 34.200268 },
      { latitude: 32.54264, longitude: 35.572537 },
      { latitude: 31.211449, longitude: 35.572537 },
      { latitude: 31.211449, longitude: 34.200268 },
    ],
  },
  PT: {
    name: "Portugal",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 42.15363, longitude: -31.284901 },
      { latitude: 42.15363, longitude: -6.205946 },
      { latitude: 30.029242, longitude: -6.205946 },
      { latitude: 30.029242, longitude: -31.284901 },
    ],
  },
  PW: {
    name: "Palau",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 8.096618, longitude: 131.131114 },
      { latitude: 8.096618, longitude: 134.727344 },
      { latitude: 2.949042, longitude: 134.727344 },
      { latitude: 2.949042, longitude: 131.131114 },
    ],
  },
  PY: {
    name: "Paraguay",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -19.286729, longitude: -62.650357 },
      { latitude: -19.286729, longitude: -54.245288 },
      { latitude: -27.586842, longitude: -54.245288 },
      { latitude: -27.586842, longitude: -62.650357 },
    ],
  },
  QA: {
    name: "Qatar",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 26.160102, longitude: 50.750987 },
      { latitude: 26.160102, longitude: 51.616548 },
      { latitude: 24.559872, longitude: 51.616548 },
      { latitude: 24.559872, longitude: 50.750987 },
    ],
  },
  RO: {
    name: "Romania",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 48.274832, longitude: 20.242826 },
      { latitude: 48.274832, longitude: 29.699556 },
      { latitude: 43.65005, longitude: 29.699556 },
      { latitude: 43.65005, longitude: 20.242826 },
    ],
  },
  RS: {
    name: "Republic of Serbia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 46.173875, longitude: 18.844977 },
      { latitude: 46.173875, longitude: 22.984571 },
      { latitude: 42.234945, longitude: 22.984571 },
      { latitude: 42.234945, longitude: 18.844977 },
    ],
  },

  RW: {
    name: "Rwanda",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -1.058694, longitude: 28.857236 },
      { latitude: -1.058694, longitude: 30.88781 },
      { latitude: -2.826855, longitude: 30.88781 },
      { latitude: -2.826855, longitude: 28.857236 },
    ],
  },

  SB: {
    name: "Solomon Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -6.599867, longitude: 155.507985 },
      { latitude: -6.599867, longitude: 168.825858 },
      { latitude: -12.290623, longitude: 168.825858 },
      { latitude: -12.290623, longitude: 155.507985 },
    ],
  },
  SC: {
    name: "Seychelles",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -3.791111, longitude: 46.207367 },
      { latitude: -3.791111, longitude: 56.287446 },
      { latitude: -9.755548, longitude: 56.287446 },
      { latitude: -9.755548, longitude: 46.207367 },
    ],
  },

  SE: {
    name: "Sweden",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 69.036356, longitude: 11.108164 },
      { latitude: 69.036356, longitude: 24.163414 },
      { latitude: 55.342678, longitude: 24.163414 },
      { latitude: 55.342678, longitude: 11.108164 },
    ],
  },
  SG: {
    name: "Singapore",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 1.448635, longitude: 103.64039 },
      { latitude: 1.448635, longitude: 104.003429 },
      { latitude: 1.264309, longitude: 104.003429 },
      { latitude: 1.264309, longitude: 103.64039 },
    ],
  },
  SH: {
    name: "Saint Helena",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -7.877862, longitude: -14.417714 },
      { latitude: -7.877862, longitude: -5.65038 },
      { latitude: -40.397882, longitude: -5.65038 },
      { latitude: -40.397882, longitude: -14.417714 },
    ],
  },
  SI: {
    name: "Slovenia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 46.863962, longitude: 13.36526 },
      { latitude: 46.863962, longitude: 16.515302 },
      { latitude: 45.423637, longitude: 16.515302 },
      { latitude: 45.423637, longitude: 13.36526 },
    ],
  },
  SK: {
    name: "Slovakia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 49.60178, longitude: 16.844479 },
      { latitude: 49.60178, longitude: 22.539637 },
      { latitude: 47.750006, longitude: 22.539637 },
      { latitude: 47.750006, longitude: 16.844479 },
    ],
  },
  SL: {
    name: "Sierra Leone",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 9.996006, longitude: -13.301097 },
      { latitude: 9.996006, longitude: -10.282236 },
      { latitude: 6.91942, longitude: -10.282236 },
      { latitude: 6.91942, longitude: -13.301097 },
    ],
  },
  SM: {
    name: "San Marino",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 43.982567, longitude: 12.385628 },
      { latitude: 43.982567, longitude: 12.492393 },
      { latitude: 43.892056, longitude: 12.492393 },
      { latitude: 43.892056, longitude: 12.385628 },
    ],
  },
  SN: {
    name: "Senegal",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 16.691385, longitude: -17.536042 },
      { latitude: 16.691385, longitude: -11.377776 },
      { latitude: 12.305607, longitude: -11.377776 },
      { latitude: 12.305607, longitude: -17.536042 },
    ],
  },
  SO: {
    name: "Somalia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 11.989119, longitude: 40.965385 },
      { latitude: 11.989119, longitude: 51.417038 },
      { latitude: -1.696303, longitude: 51.417038 },
      { latitude: -1.696303, longitude: 40.965385 },
    ],
  },
  SR: {
    name: "Suriname",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 6.011574, longitude: -58.067692 },
      { latitude: 6.011574, longitude: -53.986357 },
      { latitude: 1.833507, longitude: -53.986357 },
      { latitude: 1.833507, longitude: -58.067692 },
    ],
  },
  SS: {
    name: "South Sudan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 12.216155, longitude: 24.121556 },
      { latitude: 12.216155, longitude: 35.920836 },
      { latitude: 3.490202, longitude: 35.920836 },
      { latitude: 3.490202, longitude: 24.121556 },
    ],
  },
  ST: {
    name: "São Tomé and Principe",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 1.699774, longitude: 6.46168 },
      { latitude: 1.699774, longitude: 7.462739 },
      { latitude: 0.024115, longitude: 7.462739 },
      { latitude: 0.024115, longitude: 6.46168 },
    ],
  },
  SV: {
    name: "El Salvador",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 14.445373, longitude: -90.114779 },
      { latitude: 14.445373, longitude: -87.693194 },
      { latitude: 13.158637, longitude: -87.693194 },
      { latitude: 13.158637, longitude: -90.114779 },
    ],
  },
  SX: {
    name: "Sint Maarten",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.06212, longitude: -63.118886 },
      { latitude: 18.06212, longitude: -63.017568 },
      { latitude: 18.01911, longitude: -63.017568 },
      { latitude: 18.01911, longitude: -63.118886 },
    ],
  },
  SY: {
    name: "Syria",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 37.324906, longitude: 35.723399 },
      { latitude: 37.324906, longitude: 42.377186 },
      { latitude: 32.313042, longitude: 42.377186 },
      { latitude: 32.313042, longitude: 35.723399 },
    ],
  },
  SZ: {
    name: "eSwatini",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -25.735999, longitude: 30.782905 },
      { latitude: -25.735999, longitude: 32.117399 },
      { latitude: -27.316264, longitude: 32.117399 },
      { latitude: -27.316264, longitude: 30.782905 },
    ],
  },
  TC: {
    name: "Turks and Caicos Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 21.959215, longitude: -72.481313 },
      { latitude: 21.959215, longitude: -71.128896 },
      { latitude: 21.290107, longitude: -71.128896 },
      { latitude: 21.290107, longitude: -72.481313 },
    ],
  },

  TF: {
    name: "French Southern and Antarctic Lands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -11.550632, longitude: 39.728282 },
      { latitude: -11.550632, longitude: 77.585216 },
      { latitude: -49.721612, longitude: 77.585216 },
      { latitude: -49.721612, longitude: 39.728282 },
    ],
  },
  TG: {
    name: "Togo",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 11.13498, longitude: -0.16611 },
      { latitude: 11.13498, longitude: 1.782352 },
      { latitude: 6.100491, longitude: 1.782352 },
      { latitude: 6.100491, longitude: -0.16611 },
    ],
  },
  TH: {
    name: "Thailand",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 20.445006, longitude: 97.351401 },
      { latitude: 20.445006, longitude: 105.650999 },
      { latitude: 5.62989, longitude: 105.650999 },
      { latitude: 5.62989, longitude: 97.351401 },
    ],
  },
  TJ: {
    name: "Tajikistan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 41.039977, longitude: 67.34269 },
      { latitude: 41.039977, longitude: 75.164126 },
      { latitude: 36.678641, longitude: 75.164126 },
      { latitude: 36.678641, longitude: 67.34269 },
    ],
  },
  TL: {
    name: "East Timor",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -8.135024, longitude: 124.030039 },
      { latitude: -8.135024, longitude: 127.313243 },
      { latitude: -9.501228, longitude: 127.313243 },
      { latitude: -9.501228, longitude: 124.030039 },
    ],
  },
  TM: {
    name: "Turkmenistan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 42.791188, longitude: 52.43767 },
      { latitude: 42.791188, longitude: 66.645782 },
      { latitude: 35.140647, longitude: 66.645782 },
      { latitude: 35.140647, longitude: 52.43767 },
    ],
  },
  TN: {
    name: "Tunisia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 37.345201, longitude: 7.479831 },
      { latitude: 37.345201, longitude: 11.564132 },
      { latitude: 30.228905, longitude: 11.564132 },
      { latitude: 30.228905, longitude: 7.479831 },
    ],
  },
  TO: {
    name: "Tonga",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -15.559503, longitude: -176.219309 },
      { latitude: -15.559503, longitude: -173.914255 },
      { latitude: -22.3388, longitude: -173.914255 },
      { latitude: -22.3388, longitude: -176.219309 },
    ],
  },
  TR: {
    name: "Turkey",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 42.098782, longitude: 25.663258 },
      { latitude: 42.098782, longitude: 44.806994 },
      { latitude: 35.819779, longitude: 44.806994 },
      { latitude: 35.819779, longitude: 25.663258 },
    ],
  },
  TT: {
    name: "Trinidad and Tobago",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 11.35106, longitude: -61.9287 },
      { latitude: 11.35106, longitude: -60.522083 },
      { latitude: 10.04206, longitude: -60.522083 },
      { latitude: 10.04206, longitude: -61.9287 },
    ],
  },
  TV: {
    name: "Tuvalu",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -5.677504, longitude: 176.125255 },
      { latitude: -5.677504, longitude: 179.906749 },
      { latitude: -9.420668, longitude: 179.906749 },
      { latitude: -9.420668, longitude: 176.125255 },
    ],
  },
  TW: {
    name: "Taiwan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 25.287421, longitude: 118.279551 },
      { latitude: 25.287421, longitude: 122.005382 },
      { latitude: 21.904608, longitude: 122.005382 },
      { latitude: 21.904608, longitude: 118.279551 },
    ],
  },
  TZ: {
    name: "United Republic of Tanzania",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -0.98583, longitude: 29.321032 },
      { latitude: -0.98583, longitude: 40.449393 },
      { latitude: -11.731272, longitude: 40.449393 },
      { latitude: -11.731272, longitude: 29.321032 },
    ],
  },
  UA: {
    name: "Ukraine",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 52.368949, longitude: 22.132839 },
      { latitude: 52.368949, longitude: 40.159543 },
      { latitude: 45.213568, longitude: 40.159543 },
      { latitude: 45.213568, longitude: 22.132839 },
    ],
  },
  UG: {
    name: "Uganda",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 4.219692, longitude: 29.54846 },
      { latitude: 4.219692, longitude: 35.006473 },
      { latitude: -1.475206, longitude: 35.006473 },
      { latitude: -1.475206, longitude: 29.54846 },
    ],
  },
  UM: {
    name: "United States Minor Outlying Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 28.215318, longitude: 166.619395 },
      { latitude: 28.215318, longitude: -75.002634 },
      { latitude: -0.388767, longitude: -75.002634 },
      { latitude: -0.388767, longitude: 166.619395 },
    ],
  },

  UY: {
    name: "Uruguay",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -30.09687, longitude: -58.439362 },
      { latitude: -30.09687, longitude: -53.110836 },
      { latitude: -34.973403, longitude: -53.110836 },
      { latitude: -34.973403, longitude: -58.439362 },
    ],
  },
  UZ: {
    name: "Uzbekistan",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 45.558719, longitude: 55.975839 },
      { latitude: 45.558719, longitude: 73.148641 },
      { latitude: 37.185147, longitude: 73.148641 },
      { latitude: 37.185147, longitude: 55.975839 },
    ],
  },
  VA: {
    name: "Vatican",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 41.903915, longitude: 12.452713 },
      { latitude: 41.903915, longitude: 12.454036 },
      { latitude: 41.902752, longitude: 12.454036 },
      { latitude: 41.902752, longitude: 12.452713 },
    ],
  },
  VC: {
    name: "Saint Vincent and the Grenadines",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 13.380764, longitude: -61.459829 },
      { latitude: 13.380764, longitude: -61.12393 },
      { latitude: 12.58515, longitude: -61.12393 },
      { latitude: 12.58515, longitude: -61.459829 },
    ],
  },
  VE: {
    name: "Venezuela",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 15.702948, longitude: -73.391149 },
      { latitude: 15.702948, longitude: -59.815595 },
      { latitude: 0.649315, longitude: -59.815595 },
      { latitude: 0.649315, longitude: -73.391149 },
    ],
  },
  VG: {
    name: "British Virgin Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.746243, longitude: -64.773998 },
      { latitude: 18.746243, longitude: -64.27074 },
      { latitude: 18.334662, longitude: -64.27074 },
      { latitude: 18.334662, longitude: -64.773998 },
    ],
  },
  VI: {
    name: "United States Virgin Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.386599, longitude: -65.041493 },
      { latitude: 18.386599, longitude: -64.559396 },
      { latitude: 17.682766, longitude: -64.559396 },
      { latitude: 17.682766, longitude: -65.041493 },
    ],
  },
  VN: {
    name: "Vietnam",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 23.366275, longitude: 102.118654 },
      { latitude: 23.366275, longitude: 109.472423 },
      { latitude: 8.565579, longitude: 109.472423 },
      { latitude: 8.565579, longitude: 102.118654 },
    ],
  },
  VU: {
    name: "Vanuatu",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -13.064874, longitude: 166.520518 },
      { latitude: -13.064874, longitude: 169.898936 },
      { latitude: -20.253106, longitude: 169.898936 },
      { latitude: -20.253106, longitude: 166.520518 },
    ],
  },
  WF: {
    name: "Wallis and Futuna",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -13.208917, longitude: -178.18574 },
      { latitude: -13.208917, longitude: -176.125599 },
      { latitude: -14.319431, longitude: -176.125599 },
      { latitude: -14.319431, longitude: -178.18574 },
    ],
  },
  WS: {
    name: "Samoa",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -13.462823, longitude: -172.782582 },
      { latitude: -13.462823, longitude: -171.437692 },
      { latitude: -14.05283, longitude: -171.437692 },
      { latitude: -14.05283, longitude: -172.782582 },
    ],
  },
  XK: {
    name: "Kosovo",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 43.263071, longitude: 20.024751 },
      { latitude: 43.263071, longitude: 21.772759 },
      { latitude: 41.84401, longitude: 21.772759 },
      { latitude: 41.84401, longitude: 20.024751 },
    ],
  },
  YE: {
    name: "Yemen",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 18.995638, longitude: 42.545746 },
      { latitude: 18.995638, longitude: 54.540295 },
      { latitude: 12.111444, longitude: 54.540295 },
      { latitude: 12.111444, longitude: 42.545746 },
    ],
  },

  ZM: {
    name: "Zambia",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -8.194124, longitude: 21.979877 },
      { latitude: -8.194124, longitude: 33.674204 },
      { latitude: -18.069232, longitude: 33.674204 },
      { latitude: -18.069232, longitude: 21.979877 },
    ],
  },
  ZW: {
    name: "Zimbabwe",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -15.614808, longitude: 25.219369 },
      { latitude: -15.614808, longitude: 33.042768 },
      { latitude: -22.39734, longitude: 33.042768 },
      { latitude: -22.39734, longitude: 25.219369 },
    ],
  },
  ...provinceGrids,
});

// Source units without ISO/EH codes: separate from the country selector.
export const additionalSourceAreas: Readonly<Record<string, Country>> = deepFreeze({
  NE_BJN: {
    name: "Bajo Nuevo Bank (Petrel Is.)",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 15.79621, longitude: -79.989288 },
      { latitude: 15.79621, longitude: -79.986399 },
      { latitude: 15.794176, longitude: -79.986399 },
      { latitude: 15.794176, longitude: -79.989288 },
    ],
  },
  NE_BRT: {
    name: "Bir Tawil",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 21.995454, longitude: 33.181135 },
      { latitude: 21.995454, longitude: 34.08418 },
      { latitude: 21.710957, longitude: 34.08418 },
      { latitude: 21.710957, longitude: 33.181135 },
    ],
  },
  NE_CNM: {
    name: "Cyprus No Mans Area",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 35.199403, longitude: 32.584808 },
      { latitude: 35.199403, longitude: 34.021962 },
      { latitude: 34.977763, longitude: 34.021962 },
      { latitude: 34.977763, longitude: 32.584808 },
    ],
  },
  NE_CYN: {
    name: "Northern Cyprus",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 35.691962, longitude: 32.601899 },
      { latitude: 35.691962, longitude: 34.592541 },
      { latitude: 35.002722, longitude: 34.592541 },
      { latitude: 35.002722, longitude: 32.601899 },
    ],
  },
  NE_ESB: {
    name: "Dhekelia Sovereign Base Area",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 35.118994, longitude: 33.674098 },
      { latitude: 35.118994, longitude: 33.921474 },
      { latitude: 34.937893, longitude: 33.921474 },
      { latitude: 34.937893, longitude: 33.674098 },
    ],
  },
  NE_KAS: {
    name: "Siachen Glacier",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 35.647799, longitude: 76.777351 },
      { latitude: 35.647799, longitude: 77.800346 },
      { latitude: 35.110442, longitude: 77.800346 },
      { latitude: 35.110442, longitude: 76.777351 },
    ],
  },
  NE_PGA: {
    name: "Spratly Islands",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 11.117987, longitude: 114.027679 },
      { latitude: 11.117987, longitude: 115.848806 },
      { latitude: 9.679511, longitude: 115.848806 },
      { latitude: 9.679511, longitude: 114.027679 },
    ],
  },
  NE_SCR: {
    name: "Scarborough Reef",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 15.154369, longitude: 117.751855 },
      { latitude: 15.154369, longitude: 117.755693 },
      { latitude: 15.150082, longitude: 117.755693 },
      { latitude: 15.150082, longitude: 117.751855 },
    ],
  },
  NE_SER: {
    name: "Serranilla Bank",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 15.867296, longitude: -78.640411 },
      { latitude: 15.867296, longitude: -78.63687 },
      { latitude: 15.862087, longitude: -78.63687 },
      { latitude: 15.862087, longitude: -78.640411 },
    ],
  },
  NE_SOL: {
    name: "Somaliland",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 11.498928, longitude: 42.647246 },
      { latitude: 11.498928, longitude: 48.939113 },
      { latitude: 7.996516, longitude: 48.939113 },
      { latitude: 7.996516, longitude: 42.647246 },
    ],
  },
  NE_SPI: {
    name: "Southern Patagonian Ice Field",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: -49.272754, longitude: -73.588036 },
      { latitude: -49.272754, longitude: -73.057423 },
      { latitude: -49.759959, longitude: -73.057423 },
      { latitude: -49.759959, longitude: -73.588036 },
    ],
  },
  NE_USG: {
    name: "US Naval Base Guantanamo Bay",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 19.971584, longitude: -75.23286 },
      { latitude: 19.971584, longitude: -75.094949 },
      { latitude: 19.891142, longitude: -75.094949 },
      { latitude: 19.891142, longitude: -75.23286 },
    ],
  },
  NE_WSB: {
    name: "Akrotiri Sovereign Base Area",
    version: "ne-admin0-239eec57ac17-v1",
    corners: [
      { latitude: 34.700948, longitude: 32.760102 },
      { latitude: 34.700948, longitude: 33.030284 },
      { latitude: 34.568549, longitude: 33.030284 },
      { latitude: 34.568549, longitude: 32.760102 },
    ],
  },
});
