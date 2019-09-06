
import {replace} from "ramda";

import mapKeys from "./index.ts";

test("Object", () => {
  expect(mapKeys(
    replace(/new/)("")
  )({
    newLabel: "1",
    newValue: "2",
  })).toEqual({
    Label: "1",
    Value: "2",
  });
});

test("Map", () => {
  expect(mapKeys(
    replace(/new/)("")
  )(
    new Map(
      [
        ["newLabel", "1"],
        ["newValue", "2"],
      ]
    )
  )).toEqual(new Map(
    [
      ["Label", "1"],
      ["Value", "2"],
    ]
  ));
});
