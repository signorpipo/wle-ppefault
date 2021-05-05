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
    }
};