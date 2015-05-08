const {Cc,Ci} = require("chrome");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pref = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefBranch);
pref.setCharPref("layout.css.devPixelsPerPx", "2");

var button = buttons.ActionButton({
  id: "pixels_on_off",
  label: "Toggle",
  icon: {
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  //Toggles on and off the setting
  var current = pref.getCharPref("layout.css.devPixelsPerPx");

  if (current != 2){
	pref.setCharPref("layout.css.devPixelsPerPx", "2");
  } else {
	pref.clearUserPref("layout.css.devPixelsPerPx");
  }
}

exports.onUnload = function(reason) {
    //called when add-on is 
    //    uninstalled
    //    disabled
    //    shutdown
    //    upgraded
    //    downgraded
	pref.clearUserPref("layout.css.devPixelsPerPx");
};
