
PP.EasyTuneNoneWidget = class EasyTuneNoneWidget {

    constructor() {
        this._mySetup = new PP.EasyTuneNoneWidgetSetup();
        this._myUI = new PP.EasyTuneNoneWidgetUI();

        this._myVariable = null;

        this._myIsVisible = true;

        this._myScrollVariableRequestCallbacks = new Map();

        this._myAppendToVariableName = "";

        this._myScrollVariableAmount = 0;
        this._myScrollVariableTimer = 0;
    }

    setEasyTuneVariable(variable, appendToVariableName) {
        this._myVariable = variable;

        if ((typeof appendToVariableName) !== 'undefined') {
            this._myAppendToVariableName = appendToVariableName;
        } else {
            this._myAppendToVariableName = "";
        }

        this._refreshUI();
    }

    _refreshUI() {
        if (this._myVariable) {
            this._myUI.myVariableLabelTextComponent.text = this._myVariable.myName.concat(this._myAppendToVariableName);
        }
    }

    setVisible(visible) {
        if (visible) {
            this._refreshUI();
        }
        this._myUI.setVisible(visible);

        if (!this._myIsVisible && visible) {
            this._myScrollVariableTimer = 0;
        }

        this._myIsVisible = visible;
    }

    registerScrollVariableRequestEventListener(id, callback) {
        this._myScrollVariableRequestCallbacks.set(id, callback);
    }

    unregisterScrollVariableRequestEventListener(id) {
        this._myScrollVariableRequestCallbacks.delete(id);
    }

    start(parentObject, additionalSetup) {
        this._myUI.build(parentObject, this._mySetup, additionalSetup);

        this._addListeners();
    }

    update(dt) {
        if (this._isActive()) {
            this._updateScrollVariable(dt);
        }
    }

    _updateScrollVariable(dt) {
        this._myScrollVariableTimer = Math.min(this._myScrollVariableTimer + dt, this._mySetup.myScrollVariableDelay);

        if (this._myScrollVariableAmount != 0) {
            if (this._myScrollVariableTimer >= this._mySetup.myScrollVariableDelay) {
                this._myScrollVariableTimer = 0;
                this._scrollVariableRequest(this._myScrollVariableAmount);
            }
        }
    }

    _isActive() {
        return this._myIsVisible && this._myVariable;
    }

    _addListeners() {
        let ui = this._myUI;

        ui.myNextButtonCursorTargetComponent.addHoverFunction(this._setScrollVariableAmount.bind(this, ui.myNextButtonBackgroundComponent.material, 1));
        ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableAmount.bind(this, ui.myNextButtonBackgroundComponent.material, 0));
        ui.myPreviousButtonCursorTargetComponent.addHoverFunction(this._setScrollVariableAmount.bind(this, ui.myPreviousButtonBackgroundComponent.material, -1));
        ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableAmount.bind(this, ui.myPreviousButtonBackgroundComponent.material, 0));
    }

    _setScrollVariableAmount(material, value) {
        if (this._isActive() || value == 0) {
            if (value != 0) {
                this._genericHover(material);
            } else {
                this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
                this._genericUnHover(material);
            }

            this._myScrollVariableAmount = value;
        }
    }

    _scrollVariableRequest(amount) {
        if (this._isActive()) {
            for (let value of this._myScrollVariableRequestCallbacks.values()) {
                value(amount);
            }
        }
    }

    _genericHover(material) {
        material.color = this._mySetup.myButtonHoverColor;
    }

    _genericUnHover(material) {
        material.color = this._mySetup.myBackgroundColor;
    }
};