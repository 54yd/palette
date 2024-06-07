const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  selectDestination: () => ipcRenderer.invoke('select-destination')
});
