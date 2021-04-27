
PP.EasyTuneNumberWidget = class EasyTuneNumberWidget {

    constructor(gamepad, blockModifyButtonType) {
        this._myGamepad = gamepad;
        this._myBlockModifyButtonType = blockModifyButtonType;

        this._mySetup = new PP.EasyTuneNumberWidgetSetup();
        this._myUI = new PP.EasyTuneNumberWidgetUI();

        this._myVariable = null;

        this._myIsVisible = true;

        this._myScrollVariableRequestCallbacks = new Map();

        this._myAppendToVariableName = "";

        this._myScrollVariableAmount = 0;
        this._myScrollVariableTimer = 0;

        this._myModifyVariableButtonIntensity = 0;
    }

    setEasyTuneVariable(variable, appendToVariableName) {
        this._myVariable = variable;

        if ((typeof appendToVariableName) !== 'undefined') {
            this._myAppendToVariableName = appendToVariableName;
        }

        this._refreshUI();
    }

    _refreshUI() {
        if (this._myVariable) {
            this._myUI.myVariableLabelTextComponent.text = this._myVariable.myName.concat(this._myAppendToVariableName);
            this._myUI.myValueTextComponent.text = this._myVariable.myValue.toFixed(this._myVariable.myDecimalPlaces);
            this._myUI.myStepLabelTextComponent.text = this._mySetup.myStepLabelStartString.concat(this._myVariable.myStepPerSecond);
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
            this._updateValue(dt);
            this._updateScrollVariable(dt);
        }
    }

    _updateValue(dt) {
        let stickVariableIntensity = 0;

        if (this._myGamepad && !this._myGamepad.getButtonInfo(this._myBlockModifyButtonType).myIsPressed) {
            let y = this._myGamepad.getAxesInfo().myAxes[1];

            if (Math.abs(y) > this._mySetup.myModifyThumbstickMinThreshold) {
                let normalizedModifyAmount = (Math.abs(y) - this._mySetup.myModifyThumbstickMinThreshold) / (1 - this._mySetup.myModifyThumbstickMinThreshold);
                stickVariableIntensity = Math.sign(y) * normalizedModifyAmount;
            }
        }

        let intensity = this._myModifyVariableButtonIntensity + stickVariableIntensity;

        if (intensity != 0) {
            let amountToAdd = intensity * this._myVariable.myStepPerSecond * dt;

            this._myVariable.myRealValue += amountToAdd;

            let decimalPlacesMultiplier = Math.pow(10, this._myVariable.myDecimalPlaces);
            this._myVariable.myValue = Math.round(this._myVariable.myRealValue * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
            this._myUI.myValueTextComponent.text = this._myVariable.myValue.toFixed(this._myVariable.myDecimalPlaces);
        } else {
            this._myVariable.myRealValue = this._myVariable.myValue;
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
        let setup = this._mySetup;

        ui.myNextButtonCursorTargetComponent.addHoverFunction(this._setScrollVariableAmount.bind(this, ui.myNextButtonBackgroundComponent.material, 1));
        ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableAmount.bind(this, ui.myNextButtonBackgroundComponent.material, 0));
        ui.myPreviousButtonCursorTargetComponent.addHoverFunction(this._setScrollVariableAmount.bind(this, ui.myPreviousButtonBackgroundComponent.material, -1));
        ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableAmount.bind(this, ui.myPreviousButtonBackgroundComponent.material, 0));

        ui.myIncreaseButtonCursorTargetComponent.addHoverFunction(this._setModifyVariableButtonIntensity.bind(this, ui.myIncreaseButtonBackgroundComponent.material, 1));
        ui.myIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._setModifyVariableButtonIntensity.bind(this, ui.myIncreaseButtonBackgroundComponent.material, 0));
        ui.myDecreaseButtonCursorTargetComponent.addHoverFunction(this._setModifyVariableButtonIntensity.bind(this, ui.myDecreaseButtonBackgroundComponent.material, -1));
        ui.myDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._setModifyVariableButtonIntensity.bind(this, ui.myDecreaseButtonBackgroundComponent.material, 0));

        ui.myResetValueCursorTargetComponent.addClickFunction(this._resetValue.bind(this));

        ui.myResetStepCursorTargetComponent.addClickFunction(this._resetStep.bind(this));

        for (let i = 0; i < ui.myStepButtonsComponents.length; ++i) {
            let cursorTarget = ui.myStepButtonsComponents[i].myCursorTarget;
            let backgroundMaterial = ui.myStepButtonsComponents[i].myBackground.material;

            cursorTarget.addClickFunction(this._multiplyStep.bind(this, setup.myStepButtonsSetupList[i].myStepMultiplier));
            cursorTarget.addHoverFunction(this._genericHover.bind(this, backgroundMaterial));
            cursorTarget.addUnHoverFunction(this._genericUnHover.bind(this, backgroundMaterial));
        }
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

    _setModifyVariableButtonIntensity(material, value) {
        if (this._isActive() || value == 0) {
            if (value != 0) {
                this._genericHover(material);
            } else {
                this._genericUnHover(material);
            }

            this._myModifyVariableButtonIntensity = value;
        }
    }

    _scrollVariableRequest(amount) {
        if (this._isActive()) {
            for (let value of this._myScrollVariableRequestCallbacks.values()) {
                value(amount);
            }
        }
    }

    _resetValue() {
        if (this._isActive()) {
            this._myVariable.myValue = this._myVariable.myInitialValue;
            this._myUI.myValueTextComponent.text = this._myVariable.myValue.toFixed(this._myVariable.myDecimalPlaces);
        }
    }

    _resetStep() {
        if (this._isActive()) {
            this._changeStep(this._myVariable.myInitialStepPerSecond);
        }
    }

    _multiplyStep(stepMultiplier) {
        if (this._isActive()) {
            this._changeStep(this._myVariable.myStepPerSecond * stepMultiplier);
        }
    }

    _changeStep(step) {
        this._myVariable.myStepPerSecond = step;
        this._myUI.myStepLabelTextComponent.text = this._mySetup.myStepLabelStartString.concat(this._myVariable.myStepPerSecond);
    }

    _genericHover(material) {
        material.color = this._mySetup.myButtonHoverColor;
    }

    _genericUnHover(material) {
        material.color = this._mySetup.myBackgroundColor;
    }
};