# Overview

Default template project for the [Wonderland Engine](https://wonderlandengine.com/).

The project includes the [PP library](https://github.com/SignorPipo/wle-pp).

If u prefer to start with a more elaborated template project that uses the PP library, you can use one of the [PPlayground templates](https://github.com/SignorPipo/wle-pplaygrounds) instead.

A collection of assets that can be useful while working with the Wonderland Engine (like gamepads 3D models) can be found [here](https://github.com/SignorPipo/wle-assets).

# Downloads

You can download this template through the following links:
  - [`wle-ppefault`](https://github.com/SignorPipo/wle-ppefault/releases/latest/download/wle_ppefault.zip)
  - [`wle-ppefault-unbundled`](https://github.com/SignorPipo/wle-ppefault/releases/latest/download/wle_ppefault_unbundled.zip)

# Template Versions

There are two versions of this template:
- [`wle-ppefault`](https://github.com/SignorPipo/wle-ppefault/tree/main/wle_ppefault/wle_ppefault)
  - the PP library is included as an `npm` package
- [`wle-ppefault-npm-unbundled`](https://github.com/SignorPipo/wle-ppefault/tree/main/wle_ppefault/wle_ppefault_unbundled)
  - the PP library is not included as an `npm` package, but as files in the project
  - can be useful if u plan to edit the PP library to adjust them to your need

# Scene Structure

In the scene you will find only a few objects that should make it easier and faster to get started with the development, without adding too many things you may have to delete.

The scene is composed by a `Scene` object that contains a `Player` and two `Lights`.

The `Scene` object has the following components on it:
- `pp-gateway`
  - entry point of the PP library
  - let you specify some settings like if the debugs are enabled or not
  - setup some stuff like the `InputManager` and the `SceneObjects`

The `Player` object includes:
- `Reference Space`
  - used to offset the head and the hands, for example to have a specific height
- `Camera Non XR`
  - used to render the view when you have not entered an XR session yet
- `Eyes`
  - used to render the XR view
- `Hands`
  - follow the gamepads/tracked hands positions
  - the gamepads are displayed as two low poly Meta Quest gamepads that are animated, that means buttons react when pressed in real life
  - the tracked hands are displayed through cubes positioned on the tracked hand joints
  - includes `pp-console-vr-tool` and `pp-easy-tune-tool`, two tools that can be useful while debugging and tuning
- `Head`
  - follows the head of the player
  - includes a `pp-spatial-audio-listener` component

# License

Copyright (c) 2021-2024 [Elia "Pipo" Ducceschi](https://signor-pipo.itch.io/).

Released under the [ISC License](https://github.com/SignorPipo/wle-ppefault/blob/main/LICENSE.md).

# Credits

- [Meta Quest 1 Gamepads Low Poly](https://github.com/SignorPipo/wle-ppefault/blob/main/wle_ppefault/wle_ppefault/assets/models/pp/meta_quest_1_gamepads_credits_Jezza3D.fbx) by [Jezza3D](https://sketchfab.com/Jezza3D)
- Made using [PP](https://github.com/SignorPipo/wle-pp)
