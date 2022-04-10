WL.registerComponent("pp-player-height", {
    _myEyesHeight: { type: WL.Type.Float, default: 1.65 }
}, {
    start: function () {
        this.object.setTranslationLocal([0, this._myEyesHeight, 0]);

        if (WL.xrSession) {
            this._onXRSessionStart(WL.xrSession);
        }
        WL.onXRSessionStart.push(this._onXRSessionStart.bind(this));
        WL.onXRSessionEnd.push(this._onXRSessionEnd.bind(this));
    },
    _onXRSessionStart: function () {
        if (!["local", "viewer"].includes(WebXR.refSpace)) {
            this.object.resetTranslation();
        }
    },
    _onXRSessionEnd: function () {
        if (!["local", "viewer"].includes(WebXR.refSpace)) {
            this.object.setTranslationLocal([0, this._myEyesHeight, 0]);
        }
    }
});