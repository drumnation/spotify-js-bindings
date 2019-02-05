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

-   [BROWSER](#Browser)
    1.  [Get All Categories](#Get-All-Categories)
    2.  [Get Single Category](#Get-Single-Category)
    3.  [Get Category Playlists](#Get-Category-Playlists)
    4.  [Get Reccomendations Based on Seeds](#Get-Reccomendations-Based-on-Seeds)
    5.  [Get Reccomendation Genres](#Get-Reccomendation-Genres)
    6.  [Get Available Genre Seeds](#Get-Available-Genre-Seeds)
    7.  [Get All New Releases](#Get-All-New-Releases)
    8.  [Get All Featured Playlists](#Get-All-Featured-Playlists)

### **Browser**

Params are optional properties. The main arguments are required elements.

#### Get All Categories

```js
getAllCategories();
```

#### Get Single Category

```js
const categoryId = 'roots';
getASingleBrowseCategory(categoryId, params);
```

#### Get Category Playlists

```js
const categoryId = 'metal';
getCategoryPlaylists(categoryId, params);
```

#### Get Reccomendations Based on Seeds

```js
getReccomendations();
```

#### Get Reccomendation Genres

```js
getReccomendationGenres();
```

#### Get Available Genre Seeds

```js
getAvailableGenreSeeds();
```

#### Get All New Releases

```js
getAllNewReleases();
```

#### Get All Featured Playlists

```js
getAllFeaturedPlaylists();
```

## License

MIT © David Mieloch
