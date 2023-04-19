if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens11_13_2"] = {"code": "def double(n):\nreturn 2 * n\n\ny = 5\ny = double(y)\nprint(y)\n\n", "trace": [{"event": "uncaught_exception", "line": 2, "offset": 6, "exception_msg": "IndentationError: expected an indented block (<string>, line 2)"}]}