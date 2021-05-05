WL.registerComponent('grabbable', {
}, {
    init: function () {
        this.myIsGrabbed = false;

        this._myOldParent = this.object.parent;

        this._myUngrabCallbacks = new Map();
    },
    start: function () {
        this.myPhysx = this.object.getComponent('physx');
    },
    registerUngrabEventListener(id, callback) {
        this._myUngrabCallbacks.set(id, callback);
    },
    unregisterUngrabEventListener(id) {
        this._myUngrabCallbacks.delete(id);
    },
    grab: function (grabber) {
        if (this.myIsGrabbed) {
            this._ungrab();
        }

        this.myPhysx.kinematic = true;

        this._myOldParent = this.object.parent;
        PP.ObjectUtils.reparentKeepTransform(this.object, grabber);

        this.myIsGrabbed = true;
    },
    throw: function (linearVelocity, angularVelocity) {
        if (this.myIsGrabbed) {
            PP.ObjectUtils.reparentKeepTransform(this.object, this._myOldParent);
            this.myIsGrabbed = false;
            this.myPhysx.kinematic = false;

            this.myPhysx.linearVelocity = linearVelocity;
            this.myPhysx.angularVelocity = angularVelocity;
        }
    },
    _ungrab() {
        this._myUngrabCallbacks.forEach(function (value) { value(); });

        this.myIsGrabbed = false;
        PP.ObjectUtils.reparentKeepTransform(this.object, this._myOldParent);
    }
});