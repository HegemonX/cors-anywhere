const cors_proxy = require("cors-anywhere");

var host = process.env.HOST || "0.0.0.0";
var port = process.env.PORT || 8080;

cors_proxy
  .createServer({
    originWhitelist: [],
    requireHeaders: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"]
  })
  .listen(port, host, () => {
    console.log(`Running CORS Proxy on ${host}:${port}`);
  });
