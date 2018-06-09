const {app, BrowserWindow} = require('electron');

// path and url to bring in index.html file
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow() {
    // Create Browser Window
    win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // To load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:', // for file system, rather than http://
        slashes: true
    }));

    // To open chrome dev tools
    win.webContents.openDevTools();

    // When window is closed, set win to null
    win.on('closed', ()=>{
        win = null;
    });

}

// Run createWindow function when the app is ready
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', ()=>{

    // Quit if the platform is not mac (darwin means mac)
    // When all windows are closed in the application
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
