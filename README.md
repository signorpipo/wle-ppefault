# Overview

Default project for the [Wonderland Engine](https://wonderlandengine.com/).  

It is supposed to be like a template to use when starting a new Wonderland Engine project.  
In the scene you will find only a few objects that should make it easier and faster to get started with the development, without adding too many things you may have to delete.  
The project includes the APIs from the [PP bundle](https://github.com/SignorPipo/wle_pp).

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

The Scene object has 4 components on it:
- `pp-gamepad-manager`
  * create and update the gamepads
  * create a global `PP.myLeftGamepad` and a global `PP.myRightGamepad`
  * also create a global `PP.myGamepads` that contains both controllers and use `PP.Handedness` as index
- `pp-debug-data`
  * takes care of initializing the debug data used by the debug features
- `pp-mute-all`
  * when active, mutes the game
- `pp-clear-console-on-session`
  * when u press VR and enter the session, the console is cleared

The Player object includes:
- Pivot
  * Can be used to offset the head and the hands, for example to have a specific height
  * The pivot includes the `pp-player-height` component disabled, you can enable it to set a specific height from the floor
  * If `local-floor` is enabled, the `pp-player-height` component will automatically stop, so that the height will be the real one of the user
- Non VR Camera
  * Used to render when you have not entered in the VR view yet
- Eyes
  * Used to render the VR view
- Hands
  * Follow the controllers position
  * Represented by 2 Oculus Quest controllers that are animated, that means buttons react when pressed in real life
  * Includes `pp-console-vr` and 'pp-easy-tune`, 2 tools that can be useful while debugging and tuning
- Head
  * Represent the head of the player
  * Its transform is computed as the average between the eyes
  * Not really needed but can be useful to avoid having to compute it yourself
  * Includes a `pp-audio-listener` component, disabled to avoid extra computation if u don't want to use audio

# License
You are free to use this in your projects, just remember to credit me somewhere!

# Credits
Oculus Quest Controllers by [Jezza3D](https://sketchfab.com/Jezza3D) on Sketchfab, with small adjustments made by me.
