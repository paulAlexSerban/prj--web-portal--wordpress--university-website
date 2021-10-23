# University Website

## Build Scripts Config
1. go to you desired shell emulator configuration file (./zshrc or ./bashrc) and add the next line according to your project structure
  `. ~/Desktop/MY_projects/University-Website/scripts/.university-website.bash`
2. restart your terminal emulator in order to get the scripts loaded
3. go to `./env` and configure the ROOT_DIR variable

## Requirements
* NodeJS v12

## Troubleshooting

### npm install blocks to something like this- `npm install Error: rollbackFailedOptional`
```
npm config rm proxy
npm config rm https-proxy
npm config set registry https://registry.npmjs.org/
```