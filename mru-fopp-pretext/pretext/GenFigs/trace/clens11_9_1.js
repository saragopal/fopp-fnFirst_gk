if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens11_9_1"] = {"code": "def square(x):\ny = x * x\nreturn y\n\ndef sum_of_squares(x,y,z):\na = square(x)\nb = square(y)\nc = square(z)\n\nreturn a+b+c\n\na = -5\nb = 2\nc = 10\nresult = sum_of_squares(a,b,c)\nprint(result)\n\n", "trace": [{"event": "uncaught_exception", "line": 2, "offset": 1, "exception_msg": "IndentationError: expected an indented block (<string>, line 2)"}]}