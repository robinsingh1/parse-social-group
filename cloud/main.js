
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define('find_neighborhood', function(request, response) {
  // With the GMaps Lat, Lng find which neighborhood this user belongs to
});
