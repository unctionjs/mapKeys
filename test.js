/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import {replace} from "ramda"

import mapKeys from "./index"

test("Object", ({same, end}) => {
  same(
    mapKeys(
      replace(/new/)("")
    )({
      newLabel: "1",
      newValue: "2",
    }),
    {
      Label: "1",
      Value: "2",
    }
  )

  end()
})

// NOTE: tsame doesn't know how to deal with maps
// test("Map", ({same, end}) => {
//   same(
//     mapKeys(
//       replace(/new/)("")
//     )(
//       new Map(
//         [
//           ["newLabel", "1"],
//           ["newValue", "2"],
//         ]
//       )
//     ),
//     new Map(
//       [
//         ["label", "1"],
//         ["label", "2"],
//       ]
//     )
//   )
//
//   end()
// })
