import { app, BrowserWindow, BrowserWindowConstructorOptions } from "electron";
import { autoUpdater } from "electron-updater";
// import path from "path";

let mainWindow: Electron.BrowserWindow;

console.log(`dirname: "${__dirname}"`)
function onReady() {
    const opts: BrowserWindowConstructorOptions = {
        width: 800,
        height: 600,
        // autoHideMenuBar: true,
        // webPreferences: {
        // nodeIntegration: true,
        // preload: path.join(__dirname, "server.js"),
        // },
    };
    mainWindow = new BrowserWindow(opts);

    const fileName = `file://${__dirname}/index.html`;
    mainWindow.loadURL(fileName);
    mainWindow.on("close", () => app.quit());
    autoUpdater.checkForUpdatesAndNotify()
}

app.on("ready", () => onReady());
app.on("window-all-closed", () => app.quit());
console.log(`Electron Version ${app.getVersion()}`);
