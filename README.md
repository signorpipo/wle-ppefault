# Overview

Template project for the [Wonderland Engine](https://wonderlandengine.com/).

The project includes the APIs from the [PP bundle](https://github.com/SignorPipo/wle_pp).

In the scene of this project you will find only a few objects that should make it easier and faster to get started with the development, without adding too many things you may have to delete. 

There are a few versions of this project:
- [`wle_ppefault`](https://github.com/SignorPipo/wle_ppefault/tree/main/wle_ppefault/wle_ppefault)
  * a standard project (not `npm`)
  * the PP APIs are included as a bundle file
- [`wle_ppefault_npm`](https://github.com/SignorPipo/wle_ppefault/tree/main/wle_ppefault/wle_ppefault_npm)
  * an `npm` version of the same project
  * the PP APIs are included as an `npm` package
  * u need to run `npm install` in the project folder in order to install the dependencies
- [`wle_ppefault_npm_unbundled`](https://github.com/SignorPipo/wle_ppefault/tree/main/wle_ppefault/wle_ppefault_npm_unbundled)
  * an `npm` version of the same project
  * the PP APIs are not included as an `npm` package, but as files in the project
  * can be useful if u plan to edit the PP APIs to adjust them to your need
  * u need to run `npm install` in the project folder in order to install the dependencies

# Scene Structure
The scene is composed by a Scene object that contains a Player and 2 Lights.

The Scene object has 6 components on it:
- `pp-get-player-objects`
  * get all the objects related to the player and put them in a global variable `PP.myPlayerObjects`
- `pp-get-default-resources`
  * get some engine resources (meshes, materials) and put them in a global variable `PP.myDefaultResources` to make them easily accessible in the code
- `pp-input-manager`
  * creates and updates the input devices like the gamepads, the mouse and the keyboard
  * creates some global variables like `PP.myMouse` or `PP.myGamepads` to easily access these devices
- `pp-debug-manager`
  * takes care of initializing the debug data used by the debug features
  * creates and updates a global debug manager that can be accessed through the variable `PP.myDebugManager`
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
