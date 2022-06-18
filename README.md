# Overview

Default project for the [Wonderland Engine](https://wonderlandengine.com/). 

The project includes the APIs from the [PP bundle](https://github.com/SignorPipo/wle_pp). 

It is supposed to be like a template to use when starting a new Wonderland Engine project.  

In the scene you will find only a few objects that should make it easier and faster to get started with the development, without adding too many things you may have to delete. 

There are a few versions of this default project:
- `wle_ppefault`
  * a standard project (not `NPM`)
- `wle_ppefault_npm`
  * an `NPM` version of the same project
- `wle_ppefault_npm_unbundled`
  * an `NPM` version of the same project
  * the PP APIs are not included as a bundle but as a list of files
  * can be useful if u plan to edit the PP APIs to adjust them to your need

# Scene Structure
The scene is composed by a Scene object that contains a Player and 2 Lights.

The Scene object has 5 components on it:
- `pp-gamepad-manager`
  * creates and updates the gamepads
  * creates a global `PP.myLeftGamepad` and a global `PP.myRightGamepad`
  * also creates a global `PP.myGamepads` that contains both controllers and use `PP.Handedness` as index
- `pp-debug-manager`
  * takes care of initializing the debug data used by the debug features
  * creates and updates a global debug manager that can be accessed through the variable `PP.myDebugManager`
- `pp-get-player-objects`
  * get all the objects related to the player and put them in a global variable `PP.myPlayerObjects`
- `pp-mute-all`
  * when active, mutes the game
- `pp-clear-console-on-session`
  * when u press VR and enter the session, the console is cleared

The Player object includes:
- Pivot
  * can be used to offset the head and the hands, for example to have a specific height
  * the pivot includes the `pp-player-height` component disabled, you can enable it to set a specific height from the floor
  * if `local-floor` is enabled, the `pp-player-height` component will automatically stop, so that the height will be the real one of the user
- Non VR Camera
  * used to render the view when you have not entered the VR session yet
- Eyes
  * used to render the VR view
- Hands
  * follow the controllers positions
  * represented by 2 Oculus Quest controllers that are animated, that means buttons react when pressed in real life
  * includes `pp-console-vr` and 'pp-easy-tune`, 2 tools that can be useful while debugging and tuning
- Head
  * follows the head of the player
  * includes a `pp-spatial-audio-listener` component

# License
You are free to use this in your projects, just remember to credit me somewhere!

# Credits
Oculus Quest Controllers by [Jezza3D](https://sketchfab.com/Jezza3D) on Sketchfab, with small adjustments made by me.
