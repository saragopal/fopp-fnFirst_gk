if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens11_3_1"] = {"code": "def hello2(s: str):\nprint(\"Hello \" + s)\nprint(\"Glad to meet you\")\n\nhello2(\"Iman\")\nhello2(\"Jackie\")\n\n", "trace": [{"event": "uncaught_exception", "line": 2, "offset": 5, "exception_msg": "IndentationError: expected an indented block (<string>, line 2)"}]}