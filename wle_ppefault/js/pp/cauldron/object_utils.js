PP.ObjectUtils = {
    reparentKeepTransform: function (object, newParent) {
        let newParentTransformWorld = [];
        glMatrix.quat2.identity(newParentTransformWorld);
        let newParentScalingWorld = [1, 1, 1];

        if (newParent) {
            newParentTransformWorld = newParent.transformWorld;
            newParentScalingWorld = newParent.scalingWorld;
        }

        let localTransform = PP.MathUtils.getLocalTransform(object.transformWorld, newParentTransformWorld);
        object.transformLocal.set(localTransform);

        let newScale = new Float32Array(3);
        glMatrix.vec3.divide(newScale, object.scalingLocal, newParentScalingWorld);
        object.resetScaling();
        object.scale(newScale);

        object.parent = newParent;

        object.setDirty();
    },
    setHierarchyActive(object, active) {
        object.active = active;
        for (let child of object.children) {
            PP.ObjectUtils.setHierarchyActive(child, active);
        }
    }
};