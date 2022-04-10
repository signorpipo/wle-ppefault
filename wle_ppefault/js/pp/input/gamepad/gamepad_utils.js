PP.GamepadUtils = {
    _myPressTogetherMaxDelay: 0.15,
    _myTouchTogetherMaxDelay: 0.15,

    // gamepadButtonTypesList is a sequence of a gamepad and a list of buttonTypes like this ([gamepad1, squeeze, top, select], [gamepad2, bottom, squeeze, select], ...)
    // if the first paramter is a number it's used as multiplePressCount
    areButtonsPressStart: function (...gamepadButtonTypesList) {
        let multiplePressCount = null;
        let argumentsToForward = gamepadButtonTypesList;
        if (!isNaN(gamepadButtonTypesList[0])) {
            multiplePressCount = gamepadButtonTypesList[0];
            argumentsToForward = gamepadButtonTypesList.slice(1);
        }
        return PP.GamepadUtils.areButtonsMultiplePressStart(multiplePressCount, ...argumentsToForward);
    },

    areButtonsMultiplePressStart: function (multiplePressCount, ...gamepadButtonTypesList) {
        let areButtonPressedRecently = true;
        let isOnePressStart = false;
        for (let gamepadButtonTypes of gamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
                let buttonType = gamepadButtonTypes[i];
                let button = gamepad.getButtonInfo(buttonType);

                if (!(button.myIsPressed && (multiplePressCount == null || button.myMultiplePressStartCount == multiplePressCount) && button.myTimePressed < PP.GamepadUtils._myPressTogetherMaxDelay)) {
                    areButtonPressedRecently = false;
                    break;
                }

                if (button.isPressStart(multiplePressCount)) {
                    isOnePressStart = true;
                }
            }

            if (!areButtonPressedRecently) {
                break;
            }
        }

        return areButtonPressedRecently && isOnePressStart;
    },

    areButtonsPressEnd: function (...gamepadButtonTypesList) {
        let multiplePressCount = null;
        let argumentsToForward = gamepadButtonTypesList;
        if (!isNaN(gamepadButtonTypesList[0])) {
            multiplePressCount = gamepadButtonTypesList[0];
            argumentsToForward = gamepadButtonTypesList.slice(1);
        }
        return PP.GamepadUtils.areButtonsMultiplePressEnd(multiplePressCount, ...argumentsToForward);
    },

    areButtonsMultiplePressEnd: function (multiplePressCount, ...gamepadButtonTypesList) {
        let areButtonNotPressedRecently = true;
        let isOnePressEnd = false;
        for (let gamepadButtonTypes of gamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
                let buttonType = gamepadButtonTypes[i];
                let button = gamepad.getButtonInfo(buttonType);

                if (!(!button.myIsPressed && (multiplePressCount == null || button.myMultiplePressEndCount == multiplePressCount) && button.myTimeNotPressed < PP.GamepadUtils._myPressTogetherMaxDelay)) {
                    areButtonNotPressedRecently = false;
                    break;
                }

                if (button.isPressEnd(multiplePressCount)) {
                    isOnePressEnd = true;
                }
            }

            if (!areButtonNotPressedRecently) {
                break;
            }
        }

        return areButtonNotPressedRecently && isOnePressEnd;
    },

    areButtonsTouchStart: function (...gamepadButtonTypesList) {
        let multipleTouchCount = null;
        let argumentsToForward = gamepadButtonTypesList;
        if (!isNaN(gamepadButtonTypesList[0])) {
            multipleTouchCount = gamepadButtonTypesList[0];
            argumentsToForward = gamepadButtonTypesList.slice(1);
        }
        return PP.GamepadUtils.areButtonsMultipleTouchStart(multipleTouchCount, ...argumentsToForward);
    },

    areButtonsMultipleTouchStart: function (multipleTouchCount, ...gamepadButtonTypesList) {
        let areButtonTouchedRecently = true;
        let isOneTouchStart = false;
        for (let gamepadButtonTypes of gamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
                let buttonType = gamepadButtonTypes[i];
                let button = gamepad.getButtonInfo(buttonType);

                if (!(button.myIsTouched && (multipleTouchCount == null || button.myMultipleTouchStartCount == multipleTouchCount) && button.myTimeTouched < PP.GamepadUtils._myTouchTogetherMaxDelay)) {
                    areButtonTouchedRecently = false;
                    break;
                }

                if (button.isTouchStart(multipleTouchCount)) {
                    isOneTouchStart = true;
                }
            }

            if (!areButtonTouchedRecently) {
                break;
            }
        }

        return areButtonTouchedRecently && isOneTouchStart;
    },

    areButtonsTouchEnd: function (...gamepadButtonTypesList) {
        let multipleTouchCount = null;
        let argumentsToForward = gamepadButtonTypesList;
        if (!isNaN(gamepadButtonTypesList[0])) {
            multipleTouchCount = gamepadButtonTypesList[0];
            argumentsToForward = gamepadButtonTypesList.slice(1);
        }
        return PP.GamepadUtils.areButtonsMultipleTouchEnd(multipleTouchCount, ...argumentsToForward);
    },

    areButtonsMultipleTouchEnd: function (multipleTouchCount, ...gamepadButtonTypesList) {
        let areButtonNotTouchedRecently = true;
        let isOneTouchEnd = false;
        for (let gamepadButtonTypes of gamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
                let buttonType = gamepadButtonTypes[i];
                let button = gamepad.getButtonInfo(buttonType);

                if (!(!button.myIsTouched && (multipleTouchCount == null || button.myMultipleTouchEndCount == multipleTouchCount) && button.myTimeNotTouched < PP.GamepadUtils._myTouchTogetherMaxDelay)) {
                    areButtonNotTouchedRecently = false;
                    break;
                }

                if (button.isTouchEnd(multipleTouchCount)) {
                    isOneTouchEnd = true;
                }
            }

            if (!areButtonNotTouchedRecently) {
                break;
            }
        }

        return areButtonNotTouchedRecently && isOneTouchEnd;
    },
};