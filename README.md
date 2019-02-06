# js-spotify-bindings

[![NPM version](https://img.shields.io/npm/v/generator-nod.svg?style=flat-square)](https://npmjs.org/package/generator-nod)
[![Build Status](https://img.shields.io/travis/diegohaz/nod/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/nod) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/nod/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/nod/branch/master)

JavaScript bindings for Spotify.

## Install

```sh
$ npm install --save js-spotify-bindings
```

## API

#### Table of Contents

- [BROWSER](#Browser)
  1.  [Get All Categories](#Get-All-Categories)
  2.  [Get Single Category](#Get-Single-Category)
  3.  [Get Category Playlists](#Get-Category-Playlists)
  4.  [Get Reccomendations Based on Seeds](#Get-Reccomendations-Based-on-Seeds)
  5.  [Get Reccomendation Genres](#Get-Reccomendation-Genres)
  6.  [Get Available Genre Seeds](#Get-Available-Genre-Seeds)
  7.  [Get All New Releases](#Get-All-New-Releases)
  8.  [Get All Featured Playlists](#Get-All-Featured-Playlists)

### **Browser**

Main `arguments` are `required` elements. \*`params` are `optional` properties.

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

#### Get Category Playlists

Get a list of Spotify playlists tagged with a particular category.

```js
const categoryId = "metal";

const categoryPlaylists = await browse.getCategoryPlaylists(categoryId, params);
```

#### Get Reccomendations Based on Seeds

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

```js
const limit = 10;
const seedArtists = "4NHQUGzhtTLFvgF5SZesLK";
const seedGenres = "classical,country";
const seedTracks = "0c6xIDDpzE81m2q797ordA";
const params = {
  market: "ES",
  min_acousticness: 0,
  max_acousticness: 1,
  target_acousticness: 0.00000242,
  min_danceability: 0,
  max_danceability: 1,
  target_danceability: 0.245,
  min_duration_ms: 0,
  max_duration_ms: 516107,
  target_duration_ms: 216107,
  min_energy: 0,
  max_energy: 1,
  target_energy: 0.981,
  min_instrumentalness: 0,
  max_instrumentalness: 1,
  target_instrumentalness: 0.936,
  min_key: 1,
  max_key: 9,
  target_key: 7,
  min_liveness: 0,
  max_liveness: 1,
  target_liveness: 0.222,
  min_loudness: -60,
  max_loudness: 60,
  target_loudness: -7.555,
  min_mode: 0,
  max_mode: 1,
  target_mode: 1,
  min_popularity: 1,
  max_popularity: 100,
  target_popularity: 51,
  min_speechiness: 0,
  max_speechiness: 1,
  target_speechiness: 0.17,
  min_tempo: 100,
  max_tempo: 160,
  target_tempo: 114.378,
  min_time_signature: 3,
  max_time_signature: 13,
  target_time_signature: 3,
  min_valence: 0,
  max_valence: 1,
  target_valence: 0.309
};
const reccomendations = await browse.getReccomendations(
  limit,
  seedArtists,
  seedGenres,
  seedTracks,
  params
);
```

##### Response

contains a `recommendations` response `object` in `JSON` format.

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

#### Get Available Genre Seeds

```js
const availableGenreSeeds = await browse.getAvailableGenreSeeds();
```

#### Get All New Releases

Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).

```js
const allNewReleases = await getAllNewReleases();
```

#### Get All Featured Playlists

Get a list of Spotify featured playlists (shown, for example, on a Spotify player’s ‘Browse’ tab).

```js
const allFeaturedPlaylists = await getAllFeaturedPlaylists();
```

##### Response

The `playlists object` contains an `array` of simplified `playlist objects` (wrapped in a `paging object`) in `JSON` format.

## License

MIT © David Mieloch
