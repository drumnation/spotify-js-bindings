# Spotify-js-bindings

[![NPM version](https://img.shields.io/npm/v/generator-nod.svg?style=flat-square)](https://npmjs.org/package/generator-nod)
[![Build Status](https://img.shields.io/travis/diegohaz/nod/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/nod) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/nod/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/nod/branch/master)

ES6+ JavaScript bindings for Spotify.

***

![spotify-logo](spotify-logo.png)

***

## Install

```sh
$ npm install --save js-spotify-bindings
```

***

## API

#### Table of Contents

***

### [Browser](#Browser)

***

1. [Get All Categories](#Get-All-Categories)
2. [Get Single Category](#Get-Single-Category)
3. [Get Category Playlists](#Get-Category-Playlists)
4. [Get Reccomendations Based on Seeds](#Get-Reccomendations-Based-on-Seeds)
5. [Get Reccomendation Genres](#Get-Reccomendation-Genres)
6. [Get Available Genre Seeds](#Get-Available-Genre-Seeds)
7. [Get All New Releases](#Get-All-New-Releases)
8. [Get All Featured Playlists](#Get-All-Featured-Playlists)

---

## Instructions

When creating your query data, the main `arguments` are `required` elements, `params` are `optional` properties.

---

### **Browser**

---
#### Get All Categories

Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

```js
const params = {
  country: "MX",
  locale: "es_MX",
  limit: 10,
  offset: 100
};
const allCategories = await getAllCategories(params);
```

##### Response

`JSON Object` with a `categories field` and an `array` of `category objects` (wrapped in a `paging object`).

> [Web API Docs](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-categories)

---

#### Get Single Category

Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

```js
const categoryId = "dinner";
const params = {
  country: "SE",
  locale: "sv_SE"
};
const aSingleBrowseCategory = await browse.getASingleBrowseCategory(
  categoryId,
  params
);
```

##### Response

A `category object` in `JSON` format.

> [Web API Docs](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-a-category)

---

#### Get Category Playlists

Get a list of Spotify playlists tagged with a particular category.

```js
const categoryId = "metal";

const categoryPlaylists = await browse.getCategoryPlaylists(categoryId, params);
```

##### Response

An `array` of simplified `playlist objects` (wrapped in a `paging object`) in `JSON` format.

> [Web API Docs](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-a-categories-playlists)

---

#### Get Reccomendations Based on Seeds

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

```js
const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
const seedGenres = "classical,country";
const seedTracks = "0c6xIDDpzE81m2q797ordA";
const params = {
  limit: 10,
  market: "ES",
  minAcousticness: 0,
  maxAcousticness: 1,
  targetAcousticness: 0.00000242,
  minDanceability: 0,
  maxDanceability: 1,
  targetDanceability: 0.245,
  minDurationMs: 0,
  maxDurationMs: 516107,
  targetDurationMs: 216107,
  minEnergy: 0,
  maxEnergy: 1,
  targetEnergy: 0.981,
  minInstrumentalness: 0,
  maxInstrumentalness: 1,
  targetInstrumentalness: 0.936,
  minKey: 1,
  maxKey: 9,
  targetKey: 7,
  minLiveness: 0,
  maxLiveness: 1,
  targetLiveness: 0.222,
  minLoudness: -60,
  maxLoudness: 60,
  targetLoudness: -7.555,
  minMode: 0,
  maxMode: 1,
  targetMode: 1,
  minPopularity: 1,
  maxPopularity: 100,
  targetPopularity: 51,
  minSpeechiness: 0,
  maxSpeechiness: 1,
  targetSpeechiness: 0.17,
  minTempo: 100,
  maxTempo: 160,
  targetTempo: 114.378,
  minTimeSignature: 3,
  maxTimeSignature: 13,
  targetTimeSignature: 3,
  minValence: 0,
  maxValence: 1,
  targetValence: 0.309
};
const reccomendations = await browse.getReccomendations(
  seedArtists,
  seedGenres,
  seedTracks,
  params
);
```

##### Response

A `recommendations` response `object` in `JSON` format.

> [Web API Docs](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-recommendations)

---

#### Get Reccomendation Genres

Retrieve a list of available genres seed parameter values for recommendations.

```js
const params = {
  country: "US",
  limit: 10,
  offset: 5
};
const reccomendationGenres = await browse.getReccomendationGenres(params);
```

##### Response

A `recommendations` response `object` in `JSON` format.

> [Web API Docs](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-recommendation-genres)

---

#### Get Available Genre Seeds

```js
const availableGenreSeeds = await browse.getAvailableGenreSeeds();
```

> [Web API Docs](https://developer.spotify.com/console/get-available-genre-seeds/)

---

#### Get All New Releases

Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).

```js
const allNewReleases = await getAllNewReleases();
```

##### Response

A `message` and an `albums object`. The `albums object` contains an `array` of simplified `album objects` (wrapped in a `paging object`) in `JSON` format.

> [Web API Docs](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-new-releases)

---

#### Get All Featured Playlists

Get a list of Spotify featured playlists (shown, for example, on a Spotify player’s ‘Browse’ tab).

```js
const allFeaturedPlaylists = await getAllFeaturedPlaylists();
```

##### Response

The `playlists object` contains an `array` of simplified `playlist objects` (wrapped in a `paging object`) in `JSON` format.

>[Web API Docs](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-featured-playlists)

---

## License

MIT © David Mieloch

---