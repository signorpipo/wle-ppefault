PP.MathUtils = {
    clamp: function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    },
    toRadians: function (angle) {
        return glMatrix.glMatrix.toRadian(angle);
    },
    toDegrees: function (angle) {
        return angle * (180 / Math.PI);
    },
    roundDecimal(number, decimalPlaces) {
        let factor = Math.pow(10, decimalPlaces);
        number = Math.round(number * factor) / factor;

        return number;
    },
    eulerToQuaternion: function (eulerRotation) {
        let quat = glMatrix.quat.create();
        glMatrix.quat.fromEuler(quat, PP.MathUtils.toDegrees(eulerRotation[0]), PP.MathUtils.toDegrees(eulerRotation[1]), PP.MathUtils.toDegrees(eulerRotation[2]));

        return quat;
    },
    quaternionToEuler: function (quaternionRotation) {
        let euler = glMatrix.vec3.create();

        let mat3 = glMatrix.mat3.create();
        glMatrix.mat3.fromQuat(mat3, quaternionRotation);

        //Rotation order is ZYX
        euler[1] = Math.asin(-PP.MathUtils.clamp(mat3[2], -1, 1));

        if (Math.abs(mat3[2]) < 0.9999999) {

            euler[0] = Math.atan2(mat3[5], mat3[8]);
            euler[2] = Math.atan2(mat3[1], mat3[0]);

        } else {

            euler[0] = 0;
            euler[2] = Math.atan2(-mat3[3], mat3[4]);
        }

        return euler;
    },
    getComponentAlongAxis(vector, axis) {
        let angle = glMatrix.vec3.angle(vector, axis);
        let length = Math.cos(angle) * glMatrix.vec3.length(vector);

        let component = axis.slice(0);
        glMatrix.vec3.normalize(component, component);
        glMatrix.vec3.scale(component, component, length);

        return component;
    },
    removeComponentAlongAxis(vector, axis) {
        let componentAlong = PP.MathUtils.getComponentAlongAxis(vector, axis);
        let component = vector.slice(0);
        glMatrix.vec3.sub(component, vector, componentAlong);

        return component;
    },
    getAxes(transform) {
        let rotationMatrix = [];
        glMatrix.mat3.fromQuat(rotationMatrix, transform);

        let axes = [];
        axes[0] = rotationMatrix.slice(0, 3);
        axes[1] = rotationMatrix.slice(3, 6);
        axes[2] = rotationMatrix.slice(6, 9);

        glMatrix.vec3.normalize(axes[0], axes[0]);
        glMatrix.vec3.normalize(axes[1], axes[1]);
        glMatrix.vec3.normalize(axes[2], axes[2]);

        return axes;
    },
    isConcordant(first, second) {
        return glMatrix.vec3.angle(first, second) <= Math.PI / 2;
    },
    getLocalTransform(transform, parentTransform) {
        let localTransform = [];

        glMatrix.quat2.conjugate(localTransform, parentTransform);
        glMatrix.quat2.mul(localTransform, localTransform, transform);

        return localTransform;
    },
    getWorldTransform(localTransform, parentTransform) {
        let worldTransform = [];

        glMatrix.quat2.mul(worldTransform, parentTransform, localTransform);

        return worldTransform;
    },
    rotateVectorAroundAxis(vector, axis, angle, origin) {
        if (!origin) {
            origin = [0, 0, 0];
        }

        glMatrix.vec3.sub(vector, vector, origin);

        let rotatedVector = [];

        let quaternionRotation = glMatrix.quat.create();
        glMatrix.quat.setAxisAngle(quaternionRotation, axis, angle);
        glMatrix.vec3.transformQuat(rotatedVector, vector, quaternionRotation);

        glMatrix.vec3.add(rotatedVector, rotatedVector, origin);

        return rotatedVector;
    },
    mapToInterval(value, originIntervalLeft, originIntervalRight, newIntervalLeft, newIntervalRight) {
        let newValue = newIntervalLeft + ((newIntervalRight - newIntervalLeft / (originIntervalRight - originIntervalLeft))) * (value - originIntervalLeft);

        return newValue;
    }
};