//Variable Map
PP.EasyTuneVariableMap = class EasyTuneVariableMap extends Map {
    constructor() {
        super();
    }

    addVariable(variable) {
        super.set(variable.myName, variable);
    }

    set() {
        console.error("Use addVariable instead of set");
    }
};

PP.EasyTuneVariables = new PP.EasyTuneVariableMap();

//Variable Types
PP.EasyTuneVariableType = {
    NONE: 0,
    NUMBER: 1,
    BOOL: 2
};

PP.EasyTuneVariable = class EasyTuneVariable {
    constructor(name, type, value) {
        this.myName = name;
        this.myType = type;

        this.myValue = value;

        this.myInitialValue = this.myValue;
    }
};

PP.EasyTuneNumber = class EasyTuneNumber extends PP.EasyTuneVariable {
    constructor(name, value, stepPerSecond, decimalPlaces) {
        super(name, PP.EasyTuneVariableType.NUMBER, value);

        this.myDecimalPlaces = decimalPlaces;
        this.myStepPerSecond = stepPerSecond;

        this.myRealValue = value;
        this.myInitialStepPerSecond = this.myStepPerSecond;
    }
};

PP.EasyTuneInteger = class EasyTuneInteger extends PP.EasyTuneNumber {
    constructor(name, value, stepPerSecond) {
        super(name, value, stepPerSecond, 0);
    }
};

PP.EasyTuneBool = class EasyTuneBool extends PP.EasyTuneVariable {
    constructor(name, value) {
        super(name, PP.EasyTuneVariableType.BOOL, value);
    }
};