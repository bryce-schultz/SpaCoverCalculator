const { app ,BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
let mainWindow;

app.on('ready', () => 
{
    const preferences = 
    {
        width: 1024,
        height: 680,
        webPreferences:
        {
            nodeIntegration: true,
        }
    };
    mainWindow = new BrowserWindow(preferences);

    const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl';

    mainWindow.loadURL(urlLocation);
})