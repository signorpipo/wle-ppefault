WL.registerComponent('set-hierarchy-active', {
    _myHierarchyActive: { type: WL.Type.Bool, default: true },
}, {
    init: function () {
    },
    start: function () {
        PP.ObjectUtils.setHierarchyActive(this.object, this._myHierarchyActive);
    },
    update: function (dt) {
    },
});