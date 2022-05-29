const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');




function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    minWidth:900,
    minHeight:600,
    show:false,
    icon:path.join(__dirname,"icon.png"),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.setMenu(null)
  
  win.once("ready-to-show", () => {
    win.maximize();
    win.show();
  });
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      :`file://${path.join(__dirname, "../build/index.html")}`
      
  );

}

app.whenReady().then(async () => {
  if (!isDev){const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, '../../extraResources/db.json'));
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})}
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    // ...
  }
  
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});