PP.HandPose = class HandPose {

    constructor(handedness, forceEmulatedVelocities) {
        this._mySession = null;
        this._myInputSource = null;

        this._myHandedness = handedness;
        this._myForceEmulatedVelocities = forceEmulatedVelocities;

        this._myReferenceSpace = [0, 0, 0];

        this._myPosition = [0, 0, 0];
        this._myRotation = [0, 0, 0, 0];

        this._myPrevPosition = [0, 0, 0];
        this._myPrevRotation = [0, 0, 0, 0];

        this._myLinearVelocity = [0, 0, 0];
        this._myAngularVelocity = [0, 0, 0];
    }

    getReferenceSpace() {
        return this._myReferenceSpace;
    }

    getPosition() {
        return this._myPosition;
    }

    getRotation() {
        return this._myRotation;
    }

    getLinearVelocity() {
        return this._myLinearVelocity;

    }

    getAngularVelocity() {
        return this._myAngularVelocity;

    }

    start() {
        if (WL.xrSession) {
            this._setupVREvents(WL.xrSession);
        } else {
            WL.onXRSessionStart.push(this._setupVREvents.bind(this));
        }
    }

    update(dt) {
        glMatrix.vec3.copy(this._myPrevPosition, this._myPosition);
        glMatrix.quat.copy(this._myPrevRotation, this._myRotation);

        let xrFrame = Module['webxr_frame'];
        if (xrFrame && this._myInputSource) {
            let xrPose = xrFrame.getPose(this._myInputSource.gripSpace, this._myReferenceSpace);

            if (xrPose) {
                this._myPosition[0] = xrPose.transform.position.x;
                this._myPosition[1] = xrPose.transform.position.y;
                this._myPosition[2] = xrPose.transform.position.z;

                this._myRotation[0] = xrPose.transform.orientation.x;
                this._myRotation[1] = xrPose.transform.orientation.y;
                this._myRotation[2] = xrPose.transform.orientation.z;
                this._myRotation[3] = xrPose.transform.orientation.w;

                if (xrPose.linearVelocity && !this._myForceEmulatedVelocities) {
                    this._myLinearVelocity[0] = xrPose.linearVelocity.x;
                    this._myLinearVelocity[1] = xrPose.linearVelocity.y;
                    this._myLinearVelocity[2] = xrPose.linearVelocity.z;
                } else {
                    this._computeEmulatedLinearVelocity(dt);
                }

                if (xrPose.angularVelocity && !this._myForceEmulatedVelocities) {
                    this._myAngularVelocity[0] = xrPose.angularVelocity.x;
                    this._myAngularVelocity[1] = xrPose.angularVelocity.y;
                    this._myAngularVelocity[2] = xrPose.angularVelocity.z;
                } else {
                    this._computeEmulatedAngularVelocity(dt);
                }
            } else {
                //keep previous position and rotation but reset velocity because reasons

                this._myLinearVelocity[0] = 0;
                this._myLinearVelocity[1] = 0;
                this._myLinearVelocity[2] = 0;

                this._myAngularVelocity[0] = 0;
                this._myAngularVelocity[1] = 0;
                this._myAngularVelocity[2] = 0;
            }
        }
    }

    _computeEmulatedLinearVelocity(dt) {
        if (dt > 0) {
            glMatrix.vec3.subtract(this._myLinearVelocity, this._myPosition, this._myPrevPosition);
            glMatrix.vec3.scale(this._myLinearVelocity, this._myLinearVelocity, 1 / dt);
        } else {
            this._myLinearVelocity[0] = 0;
            this._myLinearVelocity[1] = 0;
            this._myLinearVelocity[2] = 0;
        }
    }

    _computeEmulatedAngularVelocity(dt) {
        if (dt > 0) {
            glMatrix.vec3.subtract(this._myAngularVelocity, PP.MathUtils.quaternionToEuler(this._myRotation), PP.MathUtils.quaternionToEuler(this._myPrevRotation));
            glMatrix.vec3.scale(this._myAngularVelocity, this._myAngularVelocity, 1 / dt);
        } else {
            this._myAngularVelocity[0] = 0;
            this._myAngularVelocity[1] = 0;
            this._myAngularVelocity[2] = 0;
        }
    }

    _setupVREvents(session) {
        this._mySession = session;

        session.requestReferenceSpace('local').then(function (referenceSpace) { this._myReferenceSpace = referenceSpace; }.bind(this));

        this._mySession.addEventListener('end', function (event) {
            this._mySession = null;
            this._myInputSource = null;
        }.bind(this));

        this._mySession.addEventListener('inputsourceschange', function (event) {
            if (event.removed) {
                for (let item of event.removed) {
                    if (item == this._myInputSource) {
                        this._myInputSource = null;
                    }
                }
            }

            if (event.added) {
                for (let item of event.added) {
                    if (item.handedness == this._myHandedness) {
                        this._myInputSource = item;
                    }
                }
            }
        }.bind(this));
    }
};