# @unction/mapKeys

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<A, B> => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => KeyedArray<B> | Set<B> | RecordType<B, unknown> | string

Map over a keyed functor's keys and return a new keyed functor having mapped the keys

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
