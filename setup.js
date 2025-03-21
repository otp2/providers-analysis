const fs = require('fs');
const path = require('path');

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Move index.html to public directory if it's not already there
if (fs.existsSync('public/index.html')) {
  console.log('index.html already exists in public directory');
} else {
  if (fs.existsSync('index.html')) {
    fs.renameSync('index.html', 'public/index.html');
    console.log('Moved index.html to public directory');
  } else {
    // Create index.html in public directory
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Provider Forms Analysis Visualization</title>
    <meta name="description" content="Visualization tool for comparing provider forms" />
    <style>
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f8f9fa;
      }
    </style>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
    
    fs.writeFileSync('public/index.html', indexHtml);
    console.log('Created index.html in public directory');
  }
}

console.log('Setup complete'); 