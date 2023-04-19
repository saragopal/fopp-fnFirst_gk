if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens11_4_2"] = {"code": "def square(x: int) -> None:\ny = x * x\nprint(y) # Bad! This is confusing! Should use return instead!\n\ntoSquare = 10\nsquareResult = square(toSquare)\nprint(f\"The result of {toSquare} squared is {squareResult}.\")\n\n", "trace": [{"event": "uncaught_exception", "line": 2, "offset": 1, "exception_msg": "IndentationError: expected an indented block (<string>, line 2)"}]}