/* eslint-disable flowtype/require-return-type */
import {test} from "tap";
import {replace} from "ramda";

import mapKeys from "./index";

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
  );

  end();
});

test("Map", ({same, end}) => {
  same(
    mapKeys(
      replace(/new/)("")
    )(
      new Map(
        [
          ["newLabel", "1"],
          ["newValue", "2"],
        ]
      )
    ),
    new Map(
      [
        ["Label", "1"],
        ["Value", "2"],
      ]
    )
  );

  end();
});
