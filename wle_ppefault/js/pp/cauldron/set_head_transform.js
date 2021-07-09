WL.registerComponent('set-head-transform', {
    _myLeftEye: { type: WL.Type.Object },
    _myRightEye: { type: WL.Type.Object }
}, {
    init: function () {
    },
    start: function () {
    },
    update: function (dt) {
        let leftEyePosition = [];
        this._myLeftEye.getTranslationWorld(leftEyePosition);
        let rightEyePosition = [];
        this._myRightEye.getTranslationWorld(rightEyePosition);

        let currentHeadPosition = [];
        glMatrix.vec3.add(currentHeadPosition, leftEyePosition, rightEyePosition);
        glMatrix.vec3.scale(currentHeadPosition, currentHeadPosition, 0.5);

        this.object.setTranslationWorld(currentHeadPosition);
        this.object.resetRotation();
        this.object.rotateObject(this._myLeftEye.transformWorld);
    },
});