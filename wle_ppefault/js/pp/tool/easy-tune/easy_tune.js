WL.registerComponent('easy-tune', {
    _myHandedness: { type: WL.Type.Enum, values: ['none', 'left', 'right'], default: 'none' },
    _myShowOnStart: { type: WL.Type.Bool, default: false },
    _myShowVisibilityButton: { type: WL.Type.Bool, default: false },
    _myPlaneMaterial: { type: WL.Type.Material, default: null },
    _myTextMaterial: { type: WL.Type.Material, default: null }
}, {
    init: function () {
        this._myWidget = new PP.EasyTuneWidget();

        //Examples
        //Number: PP.EasyTuneVariables.addVariable(new PP.EasyTuneNumber("Speed", 10.32, 0.01, 3));
        //Integer: PP.EasyTuneVariables.addVariable(new PP.EasyTuneInteger("Lives", 3, 1));
    },
    start: function () {
        let additionalSetup = {};
        additionalSetup.myHandednessIndex = this._myHandedness;
        additionalSetup.myHandedness = PP.InputUtils.getHandednessByIndex(this._myHandedness);
        additionalSetup.myShowOnStart = this._myShowOnStart;
        additionalSetup.myShowVisibilityButton = this._myShowVisibilityButton;
        additionalSetup.myPlaneMaterial = this._myPlaneMaterial;
        additionalSetup.myTextMaterial = this._myTextMaterial;

        //Change FIRST with a variable name you would like to be selected at start
        this._myWidget.start(this.object, additionalSetup, PP.EasyTuneVariables, "FIRST");
    },
    update: function (dt) {
        this._myWidget.update(dt);
    }
});