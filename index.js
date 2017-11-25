import mapKeysWithValueKey from "@unction/mapkeyswithvaluekey"

export default function mapKeys (unction: MapperFunctionType): UnaryFunctionType {
  return function mapKeysUnction (functor: KeyedFunctorType): KeyedFunctorType {
    return mapKeysWithValueKey((): UnaryFunctionType => (key: KeyType): ValueType => unction(key))(functor)
  }
}
