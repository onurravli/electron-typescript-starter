import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
  });
  win.loadFile("../public/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
