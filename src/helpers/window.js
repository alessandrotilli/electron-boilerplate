// This helper remembers the size and position of your windows (and restores
// them in that place after app relaunch).
// Can be used for more than one window, just construct many
// instances of it and give each different name.

import { app, BrowserWindow, screen } from "electron";

export default (name, options) => {
  let win;

  win = new BrowserWindow(Object.assign({}, options));

  return win;
};
