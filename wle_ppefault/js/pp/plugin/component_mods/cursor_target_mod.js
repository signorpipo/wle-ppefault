_WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.init = function () {
    this.hoverFunctions = [];
    this.unHoverFunctions = [];
    this.clickFunctions = [];
    this.doubleClickFunctions = [];
    this.tripleClickFunctions = [];
    this.moveFunctions = [];
    this.downFunctions = [];
    this.upFunctions = [];

    this.isSurface = false; // just a way to specify if this target is just used as a surface between buttons
};

_WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.onDoubleClick = function (object, cursor) {
    for (let f of this.doubleClickFunctions) f(object, cursor);
};

_WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.addDoubleClickFunction = function (f) {
    this._validateCallback(f);
    this.doubleClickFunctions.push(f);
};

_WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.removeDoubleClickFunction = function (f) {
    this._validateCallback(f);
    this._removeItemOnce(this.doubleClickFunctions, f);
};

_WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.onTripleClick = function (object, cursor) {
    for (let f of this.tripleClickFunctions) f(object, cursor);
};

_WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.addTripleClickFunction = function (f) {
    this._validateCallback(f);
    this.tripleClickFunctions.push(f);
};

_WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.removeTripleClickFunction = function (f) {
    this._validateCallback(f);
    this._removeItemOnce(this.tripleClickFunctions, f);
};