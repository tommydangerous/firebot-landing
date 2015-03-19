## Firebot Landing Page
Octicons-flame.svg.png
Layer_15-01-512.png
fire.svg

## Setup
```
$ brew install node    # Install Node and NPM
$ npm install -g bower # Install Bower
$ npm install          # Install Node packages
$ bower install        # Install Bower packages
```

## Development
```
$ npm start                   # Compile JS
$ npm run watch               # Compile SCSS
$ nodemon --debug ./server.js # Start Node server on port 8080
```

## Production
Before deploying, compress assets.
```
$ npm run gulp compress
```
