var originalURL = "https://www.example.com/search?q=JavaScript Tutorial";
var encodedURL = encodeURIComponent(originalURL);
console.log("Encoded URL:", encodedURL);

var decodedURL = decodeURIComponent(encodedURL);
console.log("Decoded URL:", decodedURL);
