var electron = require('electron');

var app = electron.app;// 运行在看不到的进程中

var BrowserWindow = electron.BrowserWindow;

var win;

app.on('ready', function () {
	win = new BrowserWindow({
		width:800,
		height:600
	})
	win.loadUrl(__dirname + 'index.html');
	win.webContents.openDevTools();		
})

