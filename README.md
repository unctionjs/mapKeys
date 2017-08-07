# @unction/mapKeys


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (KeyType -> KeyType) -> IterableType -> IterableType

Like ramda's map, but instead of the value it maps over keys.

``` javascript
const attributes = {
  name: "Kurtis Rainbolt-Greene",
  createdAt: new Date()
}

mapKeys(kebab)(attributes)
```

Would return:

``` javascript
{
  name: "Kurtis Rainbolt-Greene",
  "created-at": new Date()
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/mapKeys.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/mapKeys.svg?maxAge=2592000&style=flat-square
