import mapKeysWithValueKey from "@unction/mapkeyswithvaluekey";
export default function mapKeys(unction) {
  return function mapKeysUnction(functor) {
    return mapKeysWithValueKey(() => key => unction(key))(functor);
  };
}
