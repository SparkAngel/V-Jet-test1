
function parseURL(url) {
  let params = {};

        url.split('?')[1].split('&').forEach(function(i){
        params[i.split('=')[0]]=i.split('=')[1];
});

return params;
}

console.log(parseURL("http://localhost:63342/test/index.html?em=world&ew=book"));
