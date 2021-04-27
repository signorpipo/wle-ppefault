
PP.EasyTuneNumberWidgetUI = class EasyTuneNumberWidgetUI {

    build(parentObject, setup, additionalSetup) {
        this._myParentObject = parentObject;
        this._mySetup = setup;
        this._myAdditionalSetup = additionalSetup;
        this._myPlaneMesh = PP.MeshUtils.createPlaneMesh();

        this._createSkeleton();
        this._setTransforms();
        this._addComponents();
    }

    setVisible(visible) {
        if (visible) {
            this.myPivotObject.resetTransform();
            this.myPivotObject.setTranslationLocal(this._mySetup.myPivotObjectPositions[this._myAdditionalSetup.myHandednessIndex]);
        } else {
            this.myPivotObject.scale([0, 0, 0]);
            this.myPivotObject.setTranslationLocal([0, -7777, 0]);
        }
    }

    //Skeleton
    _createSkeleton() {
        this.myPivotObject = WL.scene.addObject(this._myParentObject);

        this._createDisplaySkeleton();
        this._createStepSkeleton();
        this._createPointerSkeleton();
    }

    _createDisplaySkeleton() {
        this.myDisplayPanel = WL.scene.addObject(this.myPivotObject);
        this.myDisplayBackground = WL.scene.addObject(this.myDisplayPanel);

        this.myVariableLabelPanel = WL.scene.addObject(this.myDisplayPanel);
        this.myVariableLabelText = WL.scene.addObject(this.myVariableLabelPanel);

        this.myValuePanel = WL.scene.addObject(this.myDisplayPanel);
        this.myValueText = WL.scene.addObject(this.myValuePanel);
        this.myResetValueCursorTarget = WL.scene.addObject(this.myValuePanel);

        //Next/Previous
        this.myNextButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
        this.myNextButtonBackground = WL.scene.addObject(this.myNextButtonPanel);
        this.myNextButtonText = WL.scene.addObject(this.myNextButtonPanel);
        this.myNextButtonCursorTarget = WL.scene.addObject(this.myNextButtonPanel);

        this.myPreviousButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
        this.myPreviousButtonBackground = WL.scene.addObject(this.myPreviousButtonPanel);
        this.myPreviousButtonText = WL.scene.addObject(this.myPreviousButtonPanel);
        this.myPreviousButtonCursorTarget = WL.scene.addObject(this.myPreviousButtonPanel);

        //Increase/Decrease
        this.myIncreaseButtonPanel = WL.scene.addObject(this.myValuePanel);
        this.myIncreaseButtonBackground = WL.scene.addObject(this.myIncreaseButtonPanel);
        this.myIncreaseButtonText = WL.scene.addObject(this.myIncreaseButtonPanel);
        this.myIncreaseButtonCursorTarget = WL.scene.addObject(this.myIncreaseButtonPanel);

        this.myDecreaseButtonPanel = WL.scene.addObject(this.myValuePanel);
        this.myDecreaseButtonBackground = WL.scene.addObject(this.myDecreaseButtonPanel);
        this.myDecreaseButtonText = WL.scene.addObject(this.myDecreaseButtonPanel);
        this.myDecreaseButtonCursorTarget = WL.scene.addObject(this.myDecreaseButtonPanel);
    }

    _createStepSkeleton() {
        this.myStepPanel = WL.scene.addObject(this.myPivotObject);
        this.myStepBackground = WL.scene.addObject(this.myStepPanel);

        this.myStepLabelPanel = WL.scene.addObject(this.myStepPanel);
        this.myStepLabelText = WL.scene.addObject(this.myStepLabelPanel);
        this.myResetStepCursorTarget = WL.scene.addObject(this.myStepLabelPanel);

        this.myStepButtonsPanel = WL.scene.addObject(this.myStepPanel);

        this.myStepButtons = [];
        for (let i = 0; i < 4; ++i) {
            let stepButton = {};

            stepButton.myPanel = WL.scene.addObject(this.myStepButtonsPanel);
            stepButton.myBackground = WL.scene.addObject(stepButton.myPanel);
            stepButton.myText = WL.scene.addObject(stepButton.myPanel);
            stepButton.myCursorTarget = WL.scene.addObject(stepButton.myPanel);

            this.myStepButtons[i] = stepButton;
        }
    }

    _createPointerSkeleton() {
        this.myPointerCursorTarget = WL.scene.addObject(this.myPivotObject);
    }

    //Transforms
    _setTransforms() {
        this.myPivotObject.setTranslationLocal(this._mySetup.myPivotObjectPositions[this._myAdditionalSetup.myHandednessIndex]);

        this._setDisplayTransforms();
        this._setStepTransforms();
        this._setPointerTransform();
    }

    _setDisplayTransforms() {
        this.myDisplayPanel.setTranslationLocal(this._mySetup.myDisplayPanelPosition);
        this.myDisplayBackground.scale(this._mySetup.myDisplayBackgroundScale);

        this.myVariableLabelPanel.setTranslationLocal(this._mySetup.myVariableLabelPanelPosition);
        this.myVariableLabelText.scale(this._mySetup.myVariableLabelTextScale);

        this.myValuePanel.setTranslationLocal(this._mySetup.myValuePanelPosition);
        this.myValueText.scale(this._mySetup.myValueTextScale);
        this.myResetValueCursorTarget.setTranslationLocal(this._mySetup.myResetValueCursorTargetPosition);

        //Next/Previous
        this.myNextButtonPanel.setTranslationLocal(this._mySetup.myNextButtonPosition);
        this.myNextButtonBackground.scale(this._mySetup.myDisplayButtonBackgroundScale);
        this.myNextButtonText.setTranslationLocal(this._mySetup.myDisplayButtonTextPosition);
        this.myNextButtonText.scale(this._mySetup.myDisplayButtonTextScale);
        this.myNextButtonCursorTarget.setTranslationLocal(this._mySetup.myDisplayButtonCursorTargetPosition);

        this.myPreviousButtonPanel.setTranslationLocal(this._mySetup.myPreviousButtonPosition);
        this.myPreviousButtonBackground.scale(this._mySetup.myDisplayButtonBackgroundScale);
        this.myPreviousButtonText.setTranslationLocal(this._mySetup.myDisplayButtonTextPosition);
        this.myPreviousButtonText.scale(this._mySetup.myDisplayButtonTextScale);
        this.myPreviousButtonCursorTarget.setTranslationLocal(this._mySetup.myDisplayButtonCursorTargetPosition);

        //Increase/Decrease
        this.myIncreaseButtonPanel.setTranslationLocal(this._mySetup.myIncreaseButtonPosition);
        this.myIncreaseButtonBackground.scale(this._mySetup.myDisplayButtonBackgroundScale);
        this.myIncreaseButtonText.setTranslationLocal(this._mySetup.myDisplayButtonTextPosition);
        this.myIncreaseButtonText.scale(this._mySetup.myDisplayButtonTextScale);
        this.myIncreaseButtonCursorTarget.setTranslationLocal(this._mySetup.myDisplayButtonCursorTargetPosition);

        this.myDecreaseButtonPanel.setTranslationLocal(this._mySetup.myDecreaseButtonPosition);
        this.myDecreaseButtonBackground.scale(this._mySetup.myDisplayButtonBackgroundScale);
        this.myDecreaseButtonText.setTranslationLocal(this._mySetup.myDisplayButtonTextPosition);
        this.myDecreaseButtonText.scale(this._mySetup.myDisplayButtonTextScale);
        this.myDecreaseButtonCursorTarget.setTranslationLocal(this._mySetup.myDisplayButtonCursorTargetPosition);
    }

    _setStepTransforms() {
        this.myStepPanel.setTranslationLocal(this._mySetup.myStepPanelPosition);
        this.myStepBackground.scale(this._mySetup.myStepBackgroundScale);

        this.myStepLabelPanel.setTranslationLocal(this._mySetup.myStepLabelPanelPosition);
        this.myStepLabelText.scale(this._mySetup.myStepLabelTextScale);
        this.myResetStepCursorTarget.setTranslationLocal(this._mySetup.myResetStepCursorTargetPosition);

        this.myStepButtonsPanel.setTranslationLocal(this._mySetup.myStepButtonsPanelPosition);

        for (let i = 0; i < this.myStepButtons.length; ++i) {
            let stepButton = this.myStepButtons[i];

            stepButton.myPanel.setTranslationLocal(this._mySetup.myStepButtonsSetupList[i].myPosition);
            stepButton.myBackground.scale(this._mySetup.myStepButtonBackgroundScale);
            stepButton.myText.setTranslationLocal(this._mySetup.myStepButtonTextPosition);
            stepButton.myText.scale(this._mySetup.myStepButtonTextScale);
            stepButton.myCursorTarget.setTranslationLocal(this._mySetup.myStepButtonCursorTargetPosition);
        }
    }

    _setPointerTransform() {
        this.myPointerCursorTarget.setTranslationLocal(this._mySetup.myPointerCursorTargetPosition);
    }

    //Components
    _addComponents() {
        this._addDisplayComponents();
        this._addStepComponents();
        this._addPointerComponents();
    }

    _addDisplayComponents() {
        this.myDisplayBackgroundComponent = this.myDisplayBackground.addComponent('mesh');
        this.myDisplayBackgroundComponent.mesh = this._myPlaneMesh;
        this.myDisplayBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
        this.myDisplayBackgroundComponent.material.color = this._mySetup.myDisplayBackgroundColor;

        this.myVariableLabelTextComponent = this.myVariableLabelText.addComponent('text');
        this._setupTextComponent(this.myVariableLabelTextComponent);
        this.myVariableLabelTextComponent.text = " ";

        this.myValueTextComponent = this.myValueText.addComponent('text');
        this._setupTextComponent(this.myValueTextComponent);
        this.myValueTextComponent.text = " ";

        this.myResetValueCursorTargetComponent = this.myResetValueCursorTarget.addComponent('cursor-target');
        this.myResetValueCollisionComponent = this.myResetValueCursorTarget.addComponent('collision');
        this.myResetValueCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
        this.myResetValueCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
        this.myResetValueCollisionComponent.extents = this._mySetup.myResetValueCollisionExtents;

        //Next/Previous
        this.myNextButtonBackgroundComponent = this.myNextButtonBackground.addComponent('mesh');
        this.myNextButtonBackgroundComponent.mesh = this._myPlaneMesh;
        this.myNextButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
        this.myNextButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;

        this.myNextButtonTextComponent = this.myNextButtonText.addComponent('text');
        this._setupTextComponent(this.myNextButtonTextComponent);
        this.myNextButtonTextComponent.text = this._mySetup.myNextButtonText;

        this.myNextButtonCursorTargetComponent = this.myNextButtonCursorTarget.addComponent('cursor-target');
        this.myNextButtonCollisionComponent = this.myNextButtonCursorTarget.addComponent('collision');
        this.myNextButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
        this.myNextButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
        this.myNextButtonCollisionComponent.extents = this._mySetup.myDisplayButtonCollisionExtents;

        this.myPreviousButtonBackgroundComponent = this.myPreviousButtonBackground.addComponent('mesh');
        this.myPreviousButtonBackgroundComponent.mesh = this._myPlaneMesh;
        this.myPreviousButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
        this.myPreviousButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;

        this.myPreviousButtonTextComponent = this.myPreviousButtonText.addComponent('text');
        this._setupTextComponent(this.myPreviousButtonTextComponent);
        this.myPreviousButtonTextComponent.text = this._mySetup.myPreviousButtonText;

        this.myPreviousButtonCursorTargetComponent = this.myPreviousButtonCursorTarget.addComponent('cursor-target');
        this.myPreviousButtonCollisionComponent = this.myPreviousButtonCursorTarget.addComponent('collision');
        this.myPreviousButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
        this.myPreviousButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
        this.myPreviousButtonCollisionComponent.extents = this._mySetup.myDisplayButtonCollisionExtents;

        //Increase/Decrease
        this.myIncreaseButtonBackgroundComponent = this.myIncreaseButtonBackground.addComponent('mesh');
        this.myIncreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
        this.myIncreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
        this.myIncreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;

        this.myIncreaseButtonTextComponent = this.myIncreaseButtonText.addComponent('text');
        this._setupTextComponent(this.myIncreaseButtonTextComponent);
        this.myIncreaseButtonTextComponent.text = this._mySetup.myIncreaseButtonText;

        this.myIncreaseButtonCursorTargetComponent = this.myIncreaseButtonCursorTarget.addComponent('cursor-target');
        this.myIncreaseButtonCollisionComponent = this.myIncreaseButtonCursorTarget.addComponent('collision');
        this.myIncreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
        this.myIncreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
        this.myIncreaseButtonCollisionComponent.extents = this._mySetup.myDisplayButtonCollisionExtents;

        this.myDecreaseButtonBackgroundComponent = this.myDecreaseButtonBackground.addComponent('mesh');
        this.myDecreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
        this.myDecreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
        this.myDecreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;

        this.myDecreaseButtonTextComponent = this.myDecreaseButtonText.addComponent('text');
        this._setupTextComponent(this.myDecreaseButtonTextComponent);
        this.myDecreaseButtonTextComponent.text = this._mySetup.myDecreaseButtonText;

        this.myDecreaseButtonCursorTargetComponent = this.myDecreaseButtonCursorTarget.addComponent('cursor-target');
        this.myDecreaseButtonCollisionComponent = this.myDecreaseButtonCursorTarget.addComponent('collision');
        this.myDecreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
        this.myDecreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
        this.myDecreaseButtonCollisionComponent.extents = this._mySetup.myDisplayButtonCollisionExtents;
    }

    _addStepComponents() {
        this.myStepBackgroundComponent = this.myStepBackground.addComponent('mesh');
        this.myStepBackgroundComponent.mesh = this._myPlaneMesh;
        this.myStepBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
        this.myStepBackgroundComponent.material.color = this._mySetup.myStepBackgroundColor;

        this.myStepLabelTextComponent = this.myStepLabelText.addComponent('text');
        this._setupTextComponent(this.myStepLabelTextComponent);
        this.myStepLabelTextComponent.text = " ";

        this.myResetStepCursorTargetComponent = this.myResetStepCursorTarget.addComponent('cursor-target');
        this.myResetStepCollisionComponent = this.myResetStepCursorTarget.addComponent('collision');
        this.myResetStepCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
        this.myResetStepCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
        this.myResetStepCollisionComponent.extents = this._mySetup.myResetStepCollisionExtents;

        this.myStepButtonsComponents = [];

        for (let i = 0; i < this.myStepButtons.length; ++i) {
            let stepButton = this.myStepButtons[i];
            let stepButtonComponents = {};

            stepButtonComponents.myBackground = stepButton.myBackground.addComponent('mesh');
            stepButtonComponents.myBackground.mesh = this._myPlaneMesh;
            stepButtonComponents.myBackground.material = this._myAdditionalSetup.myPlaneMaterial.clone();
            stepButtonComponents.myBackground.material.color = this._mySetup.myBackgroundColor;

            stepButtonComponents.myText = stepButton.myText.addComponent('text');
            this._setupTextComponent(stepButtonComponents.myText);
            stepButtonComponents.myText.text = " ";
            stepButtonComponents.myText.text = this._mySetup.myStepButtonStartString.concat(this._mySetup.myStepButtonsSetupList[i].myStepMultiplier);

            stepButtonComponents.myCursorTarget = stepButton.myCursorTarget.addComponent('cursor-target');
            stepButtonComponents.myCollision = stepButton.myCursorTarget.addComponent('collision');
            stepButtonComponents.myCollision.collider = this._mySetup.myCursorTargetCollisionCollider;
            stepButtonComponents.myCollision.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            stepButtonComponents.myCollision.extents = this._mySetup.myStepButtonCollisionExtents;

            this.myStepButtonsComponents[i] = stepButtonComponents;
        }
    }

    _addPointerComponents() {
        this.myPointerCollisionComponent = this.myPointerCursorTarget.addComponent('collision');
        this.myPointerCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
        this.myPointerCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
        this.myPointerCollisionComponent.extents = this._mySetup.myPointerCollisionExtents;
    }

    _setupTextComponent(textComponent) {
        textComponent.alignment = this._mySetup.myTextAlignment;
        textComponent.justification = this._mySetup.myTextJustification;
        textComponent.material = this._myAdditionalSetup.myTextMaterial.clone();
        textComponent.material.outlineRange = this._mySetup.myTextOutlineRange;
        textComponent.material.color = this._mySetup.myTextColor;
        textComponent.material.outlineColor = this._mySetup.myTextOutlineColor;
        textComponent.text = "";
    }
};