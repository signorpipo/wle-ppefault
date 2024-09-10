/**
 * /!\ This file is auto-generated.
 *
 * This is the entry point of your standalone application.
 *
 * There are multiple tags used by the editor to inject code automatically:
 *     - `wle:auto-imports:start` and `wle:auto-imports:end`: The list of import statements
 *     - `wle:auto-register:start` and `wle:auto-register:end`: The list of component to register
 *     - `wle:auto-constants:start` and `wle:auto-constants:end`: The project's constants,
 *        such as the project's name, whether it should use the physx runtime, etc...
 *     - `wle:auto-benchmark:start` and `wle:auto-benchmark:end`: Append the benchmarking code
 */

/* wle:auto-imports:start */
import {ConsoleVRToolComponent} from 'wle-pp';
import {EasyTuneToolComponent} from 'wle-pp';
import {GamepadMeshAnimatorComponent} from 'wle-pp';
import {PPGatewayComponent} from 'wle-pp';
import {ResetLocalTransformComponent} from 'wle-pp';
import {SetHandLocalTransformComponent} from 'wle-pp';
import {SetHeadLocalTransformComponent} from 'wle-pp';
import {SpatialAudioListenerComponent} from 'wle-pp';
import {SwitchHandObjectComponent} from 'wle-pp';
import {ToolCursorComponent} from 'wle-pp';
import {TrackedHandDrawAllJointsComponent} from 'wle-pp';
/* wle:auto-imports:end */

import { loadRuntime, LogLevel } from '@wonderlandengine/api';
import 'wle-pp/add_type_extensions_to_typescript.js';

/* wle:auto-constants:start */
const Constants = {
    ProjectName: 'wle-ppefault',
    RuntimeBaseName: 'WonderlandRuntime',
    WebXRRequiredFeatures: ['local',],
    WebXROptionalFeatures: ['local','hand-tracking','hit-test',],
};
const RuntimeOptions = {
    physx: true,
    loader: false,
    xrFramebufferScaleFactor: 1,
    xrOfferSession: {
        mode: 'auto',
        features: Constants.WebXRRequiredFeatures,
        optionalFeatures: Constants.WebXROptionalFeatures,
    },
    canvas: 'canvas',
};
/* wle:auto-constants:end */

const disableEngineLogs = false;
if (disableEngineLogs) {
    RuntimeOptions.logs = [LogLevel.Error];
}

const engine = await loadRuntime(Constants.RuntimeBaseName, RuntimeOptions);
engine.onLoadingScreenEnd.once(() => {
    const el = document.getElementById('version');
    if (el) setTimeout(() => el.remove(), 2000);
});

/* WebXR setup. */

function requestSession(mode) {
    engine
        .requestXRSession(mode, Constants.WebXRRequiredFeatures, Constants.WebXROptionalFeatures)
        .catch((e) => console.error(e));
}

function setupButtonsXR() {
    /* Setup AR / VR buttons */
    const arButton = document.getElementById('ar-button');
    if (arButton) {
        arButton.dataset.supported = engine.arSupported;
        arButton.addEventListener('click', () => requestSession('immersive-ar'));
    }
    const vrButton = document.getElementById('vr-button');
    if (vrButton) {
        vrButton.dataset.supported = engine.vrSupported;
        vrButton.addEventListener('click', () => requestSession('immersive-vr'));
    }
}

if (document.readyState === 'loading') {
    window.addEventListener('load', setupButtonsXR);
} else {
    setupButtonsXR();
}

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

const sceneLoadDelaySeconds = 0;
if (sceneLoadDelaySeconds > 0) {
    await new Promise((resolve) => setTimeout(resolve, sceneLoadDelaySeconds * 1000));
}

try {
    await engine.loadMainScene(`${Constants.ProjectName}.bin`);
} catch (error) {
    console.error(error);
    window.alert(`Failed to load ${Constants.ProjectName}.bin: ` + error);
}

/* wle:auto-benchmark:start */
/* wle:auto-benchmark:end */