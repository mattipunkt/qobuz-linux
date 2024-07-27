const { app, BrowserWindow } = require('electron')
var path = require('path');

const qobuz_url = "https://play.qobuz.com/"

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1200,
      height: 800,
      icon: path.join(__dirname, "../icons/clearicon.png")
    })
    win.removeMenu()
    win.loadURL(qobuz_url)
    }



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})