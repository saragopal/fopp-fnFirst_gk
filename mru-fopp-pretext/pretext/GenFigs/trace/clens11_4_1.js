if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens11_4_1"] = {"code": "def square(x: int) -> int:\ny = x * x\nreturn y\n\ntoSquare = 10\nsquareResult = square(toSquare)\n\n", "trace": [{"event": "uncaught_exception", "line": 2, "offset": 1, "exception_msg": "IndentationError: expected an indented block (<string>, line 2)"}]}