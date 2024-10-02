function requestValidator(httpRequest) {
  const metods = ["GET", "POST", "DELETE", "CONNECT"];
//   const uriPattern = /[\w\.]+/gm;
const newUriPattern = /^[a-zA-Z.0-9]+$/;
  const hhtps = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
//   const messagePattern = /[^<>\\&'"]/gm;
const newMessagePattern = /[<>&'"\\]/g;

  if (
    !httpRequest.hasOwnProperty("method") ||
    !metods.includes(httpRequest.method)
  ) {
    throw new Error("Invalid request header: Invalid Method");
  } else if (
    !httpRequest.hasOwnProperty("uri") ||
    !newUriPattern.test(httpRequest.uri) ||
    httpRequest.uri === ''
  ) {
    throw new Error("Invalid request header: Invalid URI");
  } else if (
    !httpRequest.hasOwnProperty("version") ||
    !hhtps.includes(httpRequest.version)
  ) {
    throw new Error("Invalid request header: Invalid Version");
  } else if (
    !httpRequest.hasOwnProperty("message") ||
    newMessagePattern.test(httpRequest.message)
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return httpRequest;
}
console.log(
  requestValidator({ method: "POST", uri: "home.bash", message: "rm -rf /*" })
);
