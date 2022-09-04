const { app, BrowserWindow } = require('electron');


let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1500,
        height: 900,
        minWidth: 1000,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile(`dist/index.html`);

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=> {
    if(process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate', ()=> {
    if(mainWindow === null){
        createWindow()
    }
})
