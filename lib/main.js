const {Cc,Ci} = require("chrome");
var { ToggleButton } = require('sdk/ui/button/toggle');
var tabs = require("sdk/tabs");
var pref = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefBranch);
var preferences = require("sdk/simple-prefs").prefs;

var button = ToggleButton({
  id: "pixels_on_off",
  label: "Toggle Zoom Menu Elements",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  //Toggles on and off the setting
  var current = pref.getCharPref("layout.css.devPixelsPerPx");
  var target = preferences.targetScaling/100.0;
  if (current != target){
	pref.setCharPref("layout.css.devPixelsPerPx", target);
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
