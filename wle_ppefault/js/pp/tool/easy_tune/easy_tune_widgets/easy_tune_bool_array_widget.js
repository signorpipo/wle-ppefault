
PP.EasyTuneBoolArrayWidget = class EasyTuneBoolArrayWidget {

    constructor(arraySize, gamepad) {
        this._myGamepad = gamepad;

        this._mySetup = new PP.EasyTuneBoolArrayWidgetSetup(arraySize);
        this._myUI = new PP.EasyTuneBoolArrayWidgetUI();

        this._myVariable = null;

        this._myIsVisible = true;

        this._myScrollVariableRequestCallbacks = new Map();     // Signature: callback(scrollAmount)

        this._myAppendToVariableName = "";

        this._myValueEditIndex = 0;
        this._myValueButtonEditIntensity = 0;
        this._myValueButtonEditIntensityTimer = 0;
        this._myValueEditActive = false;
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

            for (let i = 0; i < this._mySetup.myArraySize; i++) {
                this._myUI.myValueTextComponents[i].text = (this._myVariable.myValue[i]) ? "true" : "false";
            }
        }
    }

    setVisible(visible) {
        if (visible) {
            this._refreshUI();
        }
        this._myUI.setVisible(visible);

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
        this._myUI.setAdditionalButtonsActive(additionalSetup.myEnableAdditionalButtons);

        this._addListeners();
    }

    update(dt) {
        if (this._isActive()) {
            this._updateValue(dt);
        }
    }

    _updateValue(dt) {
        let stickVariableIntensity = 0;

        if (this._myGamepad) {
            stickVariableIntensity = this._myGamepad.getAxesInfo().myAxes[1];
        }

        let valueIntensity = 0;
        if (this._myValueEditActive) {
            valueIntensity = stickVariableIntensity;
        } else if (this._myValueButtonEditIntensity != 0) {
            if (this._myValueButtonEditIntensityTimer <= 0) {
                valueIntensity = this._myValueButtonEditIntensity;
            } else {
                this._myValueButtonEditIntensityTimer -= dt;
            }
        }

        if (Math.abs(valueIntensity) > this._mySetup.myThumbstickToggleThreshold) {
            this._myVariable.myValue[this._myValueEditIndex] = valueIntensity > 0;
            this._refreshUI();
        }
    }

    _isActive() {
        return this._myIsVisible && this._myVariable;
    }

    _addListeners() {
        let ui = this._myUI;

        ui.myVariableLabelCursorTargetComponent.addClickFunction(this._resetAllValues.bind(this));
        ui.myVariableLabelCursorTargetComponent.addHoverFunction(this._genericTextHover.bind(this, ui.myVariableLabelText));
        ui.myVariableLabelCursorTargetComponent.addUnHoverFunction(this._genericTextUnHover.bind(this, ui.myVariableLabelText, this._mySetup.myVariableLabelTextScale));

        ui.myNextButtonCursorTargetComponent.addClickFunction(this._scrollVariableRequest.bind(this, 1));
        ui.myNextButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myNextButtonBackgroundComponent.material));
        ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myNextButtonBackgroundComponent.material));

        ui.myPreviousButtonCursorTargetComponent.addClickFunction(this._scrollVariableRequest.bind(this, -1));
        ui.myPreviousButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
        ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));

        for (let i = 0; i < this._mySetup.myArraySize; i++) {
            for (let i = 0; i < this._mySetup.myArraySize; i++) {
                ui.myValueIncreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, i, 1));
                ui.myValueIncreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, i, 0));
                ui.myValueDecreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, i, -1));
                ui.myValueDecreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, i, 0));

                ui.myValueIncreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myValueIncreaseButtonBackgroundComponents[i].material));
                ui.myValueIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myValueIncreaseButtonBackgroundComponents[i].material));
                ui.myValueDecreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myValueDecreaseButtonBackgroundComponents[i].material));
                ui.myValueDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myValueDecreaseButtonBackgroundComponents[i].material));

                ui.myValueCursorTargetComponents[i].addClickFunction(this._resetValue.bind(this, i));
                ui.myValueCursorTargetComponents[i].addHoverFunction(this._setValueEditActive.bind(this, i, ui.myValueTexts[i], true));
                ui.myValueCursorTargetComponents[i].addUnHoverFunction(this._setValueEditActive.bind(this, i, ui.myValueTexts[i], false));
            }
        }
    }

    _setValueEditIntensity(index, value) {
        if (this._isActive() || value == 0) {
            if (value != 0) {
                this._myValueButtonEditIntensityTimer = this._mySetup.myButtonEditDelay;
                this._myValueEditIndex = index;
            }

            this._myValueButtonEditIntensity = value;
        }
    }

    _setValueEditActive(index, text, active) {
        if (this._isActive() || !active) {
            if (active) {
                this._myValueEditIndex = index;
                text.scale(this._mySetup.myTextHoverScaleMultiplier);
            } else {
                text.scalingWorld = this._mySetup.myValueTextScale;
            }

            this._myValueEditActive = active;
        }
    }

    _scrollVariableRequest(amount) {
        if (this._isActive()) {
            for (let callback of this._myScrollVariableRequestCallbacks.values()) {
                callback(amount);
            }
        }
    }

    _resetValue(index) {
        if (this._isActive()) {
            this._myVariable.myValue[index] = this._myVariable.myInitialValue[index];
            this._myUI.myValueTextComponents[index].text = (this._myVariable.myValue[index]) ? "true" : "false";
        }
    }

    _resetAllValues() {
        for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this._resetValue(i);
        }
    }

    _genericHover(material) {
        material.color = this._mySetup.myButtonHoverColor;
    }

    _genericUnHover(material) {
        material.color = this._mySetup.myBackgroundColor;
    }

    _genericTextHover(text) {
        text.scale(this._mySetup.myTextHoverScaleMultiplier);
    }

    _genericTextUnHover(text, originalScale) {
        text.scalingWorld = originalScale;
    }
};