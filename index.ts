import mapKeysWithValueKey from "@unction/mapkeyswithvaluekey";
import {MapperFunctionType} from "./types";
import {KeyedEnumerableType} from "./types";

export default function mapKeys<A, B> (mapper: MapperFunctionType<A, B>) {
  return function mapKeysUnction (enumerable: KeyedEnumerableType<B, A>): KeyedEnumerableType<B> {
    return mapKeysWithValueKey(() => (key: A) => mapper(key))(enumerable);
  };
}
