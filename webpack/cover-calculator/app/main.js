const { app, BrowserWindow } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) 
{
  app.quit();
}

const createWindow = () => 
{
  // Create the browser window.
  const mainWindow = new BrowserWindow(
    {
    width: 1000,
    height: 800,
    webPreferences: 
    {
      nodeIntegration: true,
      contextIsolation: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => 
{
  if (process.platform !== 'darwin') 
  {
    app.quit();
  }
});

app.on('activate', () => 
{
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) 
  {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
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

const tables = 
{
    customers: 
    {
        create: 
            'CREATE TABLE IF NOT EXISTS customers (                         \
            id          INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,  \
            first_name  TEXT NOT NULL,                                      \
            last_name   TEXT,                                               \
            email       TEXT,                                               \
            address     TEXT,                                               \
            city        TEXT,                                               \
            state       TEXT,                                               \
            zipcode     TEXT                                                \
        );'
    },
    covers: 
    {
        create:
        'CREATE TABLE IF NOT EXISTS covers (                                                \
            id              INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,              \
            customer_id     INTEGER NOT NULL REFERENCES customers (id) ON DELETE CASCADE,   \
            purchase_date   TEXT,                                                           \
            type            INTEGER NOT NULL DEFAULT standard,                              \
            model           TEXT    DEFAULT none,                                           \
            length          INTEGER,                                                        \
            width           INTEGER,                                                        \
            corner_radius   INTEGER,                                                        \
            radius          INTEGER,                                                        \
            size_difference INTEGER,                                                        \
            color           TEXT    DEFAULT mineral,                                        \
            airs            INTEGER DEFAULT (0),                                            \
            in_ground       INTEGER DEFAULT (0)                                             \
        );'
    }
}

const { ipcMain, dialog } = require('electron');
const Database = require('better-sqlite3');

const database = new Database(database_file);

ipcMain.on('db-query', (event, {query, params}) => 
{
    const rows = database.prepare(query).all(...params);
    event.reply('db-reply', rows);
});

const insert_test_user = 
'INSERT OR REPLACE INTO customers (\
    zipcode,\
    state,\
    city,\
    address,\
    email,\
    last_name,\
    first_name,\
    id\
)\
VALUES (\
    97502,\
    \'OR\',\
    \'Central Point\',\
    \'557 Blue Heron Dr.\',\
    \'bryceschultz@live.com\',\
    \'Schultz\',\
    \'Bryce\',\
    0 \
);';

// Create the tables if they don't exist.
database.exec(tables.customers.create);
database.exec(tables.covers.create);

database.exec(insert_test_user);