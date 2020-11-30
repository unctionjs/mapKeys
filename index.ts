import mapKeysWithValueKey from "@unction/mapkeyswithvaluekey";
import {MapperFunctionType} from "./types";

export default function mapKeys<A, B> (mapper: MapperFunctionType<A, B>) {
  return function mapKeysUnction (enumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): KeyedArray<B> | Set<B> | Record<string | number | symbol, unknown> | Map<B, unknown> | string {
    return mapKeysWithValueKey(() => (key: A) => mapper(key))(enumerable);
  };
}
