PP.EasyTuneBoolWidgetSetup = class EasyTuneBoolWidgetSetup {

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
            this.myIncreaseButtonText = "T";

            this.myDecreaseButtonPosition = [0, 0, 0];
            this.myDecreaseButtonPosition[0] = -this.myDisplayBackgroundScale[0] + this.myDisplayButtonBackgroundScale[0] + distanceFromBorder;
            this.myDecreaseButtonText = "F";

            this.myDisplayButtonCursorTargetPosition = [0, 0, 0];
            this.myDisplayButtonCursorTargetPosition[2] = this.myColliderZPosition - panelZ;
            this.myDisplayButtonCollisionExtents = this.myDisplayButtonBackgroundScale.slice(0);
            this.myDisplayButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;
        }

        //Pointer
        this.myPointerCollisionExtents = this.myDisplayBackgroundScale.slice(0);
        this.myPointerCollisionExtents[2] = this.myCursorTargetCollisionThickness;

        this.myPointerCursorTargetPosition = this.myDisplayPanelPosition.slice(0);
        this.myPointerCursorTargetPosition[2] = this.myColliderZPosition - 0.0001; // a little behind the button target to avoid hiding it
    }

    _initializeRuntimeSetup() {
        this.myButtonHoverColor = [150 / 255, 150 / 255, 150 / 255, 1];

        this.myThumbstickToggleThreshold = 0.6;

        this.myScrollVariableDelay = 0.75;
    }
};