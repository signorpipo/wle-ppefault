/**
 * /!\ This file is auto-generated.
 *
 * This is the entry point of your standalone application.
 *
 * There are multiple tags used by the editor to inject code automatically:
 *     - `wle:auto-imports:start` and `wle:auto-imports:end`: The list of import statements
 *     - `wle:auto-register:start` and `wle:auto-register:end`: The list of component to register
 */

import { WonderlandEngine } from '@wonderlandengine/api';

/* wle:auto-imports:start */
import {ConsoleVRToolComponent} from './pp/index.js';
import {EasyTuneToolComponent} from './pp/index.js';
import {GamepadMeshAnimatorComponent} from './pp/index.js';
import {PPGatewayComponent} from './pp/index.js';
import {ResetLocalTransformComponent} from './pp/index.js';
import {SetHandLocalTransformComponent} from './pp/index.js';
import {SetHeadLocalTransformComponent} from './pp/index.js';
import {SpatialAudioListenerComponent} from './pp/index.js';
import {SwitchHandObjectComponent} from './pp/index.js';
import {ToolCursorComponent} from './pp/index.js';
import {TrackedHandDrawAllJointsComponent} from './pp/index.js';
/* wle:auto-imports:end */

export default function (engine: Readonly<WonderlandEngine>): void {
/* wle:auto-register:start */
engine.registerComponent(ConsoleVRToolComponent);
engine.registerComponent(EasyTuneToolComponent);
engine.registerComponent(GamepadMeshAnimatorComponent);
engine.registerComponent(PPGatewayComponent);
engine.registerComponent(ResetLocalTransformComponent);
engine.registerComponent(SetHandLocalTransformComponent);
engine.registerComponent(SetHeadLocalTransformComponent);
engine.registerComponent(SpatialAudioListenerComponent);
engine.registerComponent(SwitchHandObjectComponent);
engine.registerComponent(ToolCursorComponent);
engine.registerComponent(TrackedHandDrawAllJointsComponent);
/* wle:auto-register:end */
}