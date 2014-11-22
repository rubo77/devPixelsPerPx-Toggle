const {Cc,Ci} = require("chrome");
var pref = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefBranch);
pref.setCharPref("layout.css.devPixelsPerPx", "2");

exports.onUnload = function(reason) {
    //called when add-on is 
    //    uninstalled
    //    disabled
    //    shutdown
    //    upgraded
    //    downgraded
	pref.clearUserPref("layout.css.devPixelsPerPx");
};