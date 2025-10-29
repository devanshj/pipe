import pipe from "."
import assert from "assert"

assert(
  pipe(
    "Hello",
    x => x + " World",
    x => x + "!"
  ),
  "Hello World!"
)

let _t0: "C" = pipe(
  "A" as const,
  (a: "A") => "B" as const,
  (b: "B") => "C" as const
)

pipe(
  "A" as const,
  // @ts-expect-error
  (a: "A") => "B" as const,
  (b: "X") => "C" as const
)