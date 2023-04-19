if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens11_3_2"] = {"code": "def hello3(s: str, n: int):\ngreeting = f\"Hello {s} \"\nprint(greeting*n)\n\nhello3(\"Wei\", 4)\nhello3(\"\", 1)\nhello3(\"Kitty\", 11)\n\n", "trace": [{"event": "uncaught_exception", "line": 2, "offset": 8, "exception_msg": "IndentationError: expected an indented block (<string>, line 2)"}]}