const electron = require('electron');

const { app } = electron;
const { BrowserWindow } = electron;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow(
    { 
        width: 900, 
        height: 680,
        webPreferences: 
        {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    mainWindow.on('closed', () => 
    {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

const app_data_path = 
(
    process.env.APPDATA || 
    (
        process.platform == 'darwin' ? 
        process.env.HOME + '/Library/Preferences' : 
        process.env.HOME + "/.local/share"
    )
);

const database_path = app_data_path + '/cover-calculator/Sqlite/';
const database_file = database_path + 'database.db';

const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');

const database = new sqlite3.Database(database_file, (err) => {
    if (err) console.error('Database opening error: ', err);
});

ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg;
    database.all(sql, (err, rows) => {
        event.reply('asynchronous-reply', (err && err.message) || rows);
    });
});