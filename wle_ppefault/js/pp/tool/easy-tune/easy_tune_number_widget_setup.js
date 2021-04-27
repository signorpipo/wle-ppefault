PP.EasyTuneNumberWidgetSetup = class EasyTuneNumberWidgetSetup {

    constructor() {
        this._initializeBuildSetup();
        this._initializeRuntimeSetup();
    }

    _initializeBuildSetup() {
        //General
        this.myBackgroundColor = [46 / 255, 46 / 255, 46 / 255, 1];

        this.myCursorTargetCollisionCollider = 2; // box
        this.myCursorTargetCollisionGroup = 7;
        this.myCursorTargetCollisionThickness = 0.001;

        this.myDefaultTextColor = [255 / 255, 255 / 255, 255 / 255, 1];

        this.myColliderZPosition = 0.027;

        this.myTextAlignment = 2; // center
        this.myTextJustification = 2; // middle
        this.myTextOutlineRange = [0.45, 0.45];
        this.myTextColor = this.myDefaultTextColor;
        this.myTextOutlineColor = this.myDefaultTextColor;

        //Pivot
        this.myPivotObjectPositions = [];
        this.myPivotObjectPositions[PP.HandednessIndex.NONE] = [0, 0, 0];
        this.myPivotObjectPositions[PP.HandednessIndex.LEFT] = [-0.04, 0, 0.00003713]; //little "random" z offset to avoid glitching with other widgets
        this.myPivotObjectPositions[PP.HandednessIndex.RIGHT] = [-0.08, 0, 0.00003713];

        //Display
        {
            this.myDisplayPanelPosition = [0, 0.1025, 0];
            this.myDisplayBackgroundScale = [0.200, 0.0575, 1];
            this.myDisplayBackgroundColor = [70 / 255, 70 / 255, 70 / 255, 1];

            let panelZ = 0.01;

            this.myVariableLabelPanelPosition = [0, 0.025, panelZ];
            this.myVariableLabelTextScale = [0.19, 0.19, 0.19];

            this.myValuePanelPosition = [0, -0.025, panelZ];
            this.myValueTextScale = [0.4, 0.4, 0.4];

            this.myResetValueCursorTargetPosition = [0, 0, 0];
            this.myResetValueCursorTargetPosition[2] = this.myColliderZPosition - panelZ;
            this.myResetValueCollisionExtents = [0.065, 0.015, 1];
            this.myResetValueCollisionExtents[2] = this.myCursorTargetCollisionThickness;

            this.myDisplayButtonBackgroundScale = [0.015, 0.015, 1];
            this.myDisplayButtonTextScale = [0.18, 0.18, 0.18];
            this.myDisplayButtonTextPosition = [0, 0, 0.007];

            let distanceFromBorder = 0.01;

            this.myNextButtonPosition = [0, 0, 0];
            this.myNextButtonPosition[0] = this.myDisplayBackgroundScale[0] - this.myDisplayButtonBackgroundScale[0] - distanceFromBorder;
            this.myNextButtonText = ">";

            this.myPreviousButtonPosition = [0, 0, 0];
            this.myPreviousButtonPosition[0] = -this.myDisplayBackgroundScale[0] + this.myDisplayButtonBackgroundScale[0] + distanceFromBorder;
            this.myPreviousButtonText = "<";

            this.myIncreaseButtonPosition = [0, 0, 0];
            this.myIncreaseButtonPosition[0] = this.myDisplayBackgroundScale[0] - this.myDisplayButtonBackgroundScale[0] - distanceFromBorder;
            this.myIncreaseButtonText = "+";

            this.myDecreaseButtonPosition = [0, 0, 0];
            this.myDecreaseButtonPosition[0] = -this.myDisplayBackgroundScale[0] + this.myDisplayButtonBackgroundScale[0] + distanceFromBorder;
            this.myDecreaseButtonText = "-";

            this.myDisplayButtonCursorTargetPosition = [0, 0, 0];
            this.myDisplayButtonCursorTargetPosition[2] = this.myColliderZPosition - panelZ;
            this.myDisplayButtonCollisionExtents = this.myDisplayButtonBackgroundScale.slice(0);
            this.myDisplayButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;
        }

        //Step
        this.myStepPanelPosition = [0, -0.035, 0.01];

        this.myStepBackgroundScale = [0.19, 0.065, 1];
        this.myStepBackgroundColor = [70 / 255, 70 / 255, 70 / 255, 1];

        this.myStepLabelPanelPosition = [0, 0.036, 0.01];
        this.myStepLabelTextScale = [0.19, 0.19, 0.19];
        this.myStepLabelStartString = "Step: ";

        this.myResetStepCursorTargetPosition = [0, 0, 0];
        this.myResetStepCursorTargetPosition[2] = this.myColliderZPosition - this.myStepLabelPanelPosition[2] - this.myStepPanelPosition[2];
        this.myResetStepCollisionExtents = [0.04, 0.015, 1];
        this.myResetStepCollisionExtents[2] = this.myCursorTargetCollisionThickness;

        this.myStepButtonsPanelPosition = [0, -0.025, 0.01];

        this.myStepButtonBackgroundScale = [0.04, 0.02, 1];

        this.myStepButtonStartString = "x";

        this.myStepButtonTextScale = [0.18, 0.18, 0.18];
        this.myStepButtonTextPosition = [0, 0, 0.007];

        this.myStepButtonCursorTargetPosition = [0, 0, 0];
        this.myStepButtonCursorTargetPosition[2] = this.myColliderZPosition - this.myStepPanelPosition[2] - this.myStepButtonsPanelPosition[2];
        this.myStepButtonCollisionExtents = this.myStepButtonBackgroundScale.slice(0);
        this.myStepButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;

        this.myStepButtonsSetupList = [];
        {
            let numberOfButtons = 4;
            let buttonsHorizontalSpace = this.myStepBackgroundScale[0] * 2;
            //3 at start, 2 between buttons, 3 at end
            let numberOfSpacesBetweenButtons = 3 + 6 + 3;

            let spaceWidth = Math.max((buttonsHorizontalSpace - numberOfButtons * this.myStepButtonBackgroundScale[0] * 2) / numberOfSpacesBetweenButtons, 0);
            let halfButtonWidth = this.myStepButtonBackgroundScale[0];
            let currentPosition = - buttonsHorizontalSpace / 2 + spaceWidth * 3 + halfButtonWidth;

            for (let i = 0; i < numberOfButtons; ++i) {
                this.myStepButtonsSetupList[i] = {};
                this.myStepButtonsSetupList[i].myPosition = [currentPosition, 0, 0];
                currentPosition += halfButtonWidth + spaceWidth * 2 + halfButtonWidth;
            }

            this.myStepButtonsSetupList[0].myStepMultiplier = 0.01;
            this.myStepButtonsSetupList[1].myStepMultiplier = 0.1;
            this.myStepButtonsSetupList[2].myStepMultiplier = 10;
            this.myStepButtonsSetupList[3].myStepMultiplier = 100;
        }

        //Pointer
        {
            let spaceBetweenPanels = Math.abs((this.myDisplayPanelPosition[1] - this.myDisplayBackgroundScale[1]) - (this.myStepPanelPosition[1] + this.myStepBackgroundScale[1]));
            let pointerCollisionHalfHeight = this.myDisplayBackgroundScale[1] + this.myStepBackgroundScale[1] + spaceBetweenPanels / 2;
            this.myPointerCollisionExtents = [this.myDisplayBackgroundScale[0], pointerCollisionHalfHeight, this.myCursorTargetCollisionThickness];
        }

        this.myPointerCursorTargetPosition = [0, 0, 0];
        this.myPointerCursorTargetPosition[1] = (this.myDisplayPanelPosition[1] + this.myDisplayBackgroundScale[1]) - this.myPointerCollisionExtents[1];
        this.myPointerCursorTargetPosition[2] = this.myColliderZPosition - 0.0001; // a little behind the button target to avoid hiding it
    }

    _initializeRuntimeSetup() {
        this.myButtonHoverColor = [150 / 255, 150 / 255, 150 / 255, 1];

        this.myModifyThumbstickMinThreshold = 0.2;

        this.myScrollVariableDelay = 0.75;
    }
};