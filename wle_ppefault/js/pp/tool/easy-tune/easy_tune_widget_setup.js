PP.EasyTuneWidgetSetup = class EasyTuneWidgetSetup {

    constructor() {
        this._initializeRuntimeSetup();
    }

    _initializeRuntimeSetup() {
        this.myGamepadHandedness = PP.HandednessIndex.RIGHT;

        this.myScrollVariableDelay = 0.5;
        this.myScrollVariableMinThreshold = 0.6;
        this.myScrollVariableButtonType = PP.ButtonType.SQUEEZE;
    }
};