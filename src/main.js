const { app, BrowserWindow, Menu, Tray } = require('electron')
var path = require('path');

let appIcon = null
let win = null

const qobuz_url = "https://play.qobuz.com/"

const createWindow = () => {
    win = new BrowserWindow({
      width: 1200,
      height: 800,
      icon: path.join(__dirname, "../resources/icons/clearicon.png")
    })
    win.removeMenu()
    win.loadURL(qobuz_url)

    win.on('close', (e) => {
            e.preventDefault()
            win.hide()
        }
    )
}


const gotTheLock = app.requestSingleInstanceLock({});
if (!gotTheLock) {
  app.quit();
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on("second-instance", () => {
  win.show();
});

app.whenReady().then(() => {

    createWindow()
    
    appIcon = new Tray(path.join(__dirname, "../resources/icons/clearicon.png"))
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Quit', click() {
        win.destroy()
      } },
      { label: 'Hide', click() {
        win.hide()
      }},
      { label: 'Show', click() {
        win.show()
      }}
    ])

  
    // Call this again for Linux because we modified the context menu
    appIcon.setContextMenu(contextMenu)


    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})