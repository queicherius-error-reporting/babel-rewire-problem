# babel-rewire-problem

> As simple as possible error reproduction for [this issue](https://github.com/speedskater/babel-plugin-rewire/issues/165).

1. Clone the repository
2. Run `npm install`
3. Run `npm test`
4. Open `coverage/lcov-report/index.js.html` and observe the following error:

```
Cannot read property 'start' of undefined
TypeError: Cannot read property 'start' of undefined
    at /Users/david/Playground/babel-rewire-problem/node_modules/nyc/node_modules/istanbul-reports/lib/html/annotator.js:137:32
    at Array.forEach (native)
    at annotateBranches (/Users/david/Playground/babel-rewire-problem/node_modules/nyc/node_modules/istanbul-reports/lib/html/annotator.js:112:30)
    at Object.annotateSourceCode (/Users/david/Playground/babel-rewire-problem/node_modules/nyc/node_modules/istanbul-reports/lib/html/annotator.js:191:9)
    at HtmlReport.onDetail (/Users/david/Playground/babel-rewire-problem/node_modules/nyc/node_modules/istanbul-reports/lib/html/index.js:217:39)
    at LcovReport.(anonymous function) [as onDetail] (/Users/david/Playground/babel-rewire-problem/node_modules/nyc/node_modules/istanbul-reports/lib/lcov/index.js:24:24)
    at Visitor.(anonymous function) [as onDetail] (/Users/david/Playground/babel-rewire-problem/node_modules/nyc/node_modules/istanbul-lib-report/lib/tree.js:34:30)
    at ReportNode.Node.visit (/Users/david/Playground/babel-rewire-problem/node_modules/nyc/node_modules/istanbul-lib-report/lib/tree.js:123:17)
    at /Users/david/Playground/babel-rewire-problem/node_modules/nyc/node_modules/istanbul-lib-report/lib/tree.js:116:23
    at Array.forEach (native)
```