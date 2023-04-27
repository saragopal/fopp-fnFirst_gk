if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens11_2_1"] = {"code": "def hello() -> None:\nprint(\"Hello\")\nprint(\"Glad to meet you\")\n\nprint(type(hello))\nprint(type(\"hello\"))\n\nhello()\nprint(\"Hey, that just printed two lines with one line of code!\")\nhello() # do it again, just because we can...\n\n", "trace": [{"event": "uncaught_exception", "line": 2, "offset": 5, "exception_msg": "IndentationError: expected an indented block (<string>, line 2)"}]}