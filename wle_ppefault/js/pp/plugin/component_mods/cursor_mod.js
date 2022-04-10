_WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.init = function () {
    /* VR session cache, in case in VR */
    this.session = null;
    this.collisionMask = (1 << this.collisionGroup);
    this.maxDistance = 100;

    this.doubleClickTimer = 0;
    this.tripleClickTimer = 0;
    this.multipleClickObject = null;
    this.multipleClickDelay = 0.3;
};

_WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.update = function (dt) {
    if (this.doubleClickTimer > 0) {
        this.doubleClickTimer -= dt;
    }

    if (this.tripleClickTimer > 0) {
        this.tripleClickTimer -= dt;
    }

    this.doUpdate(false);
};

_WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.hoverBehaviour = function (rayHit, doClick) {
    if (rayHit.hitCount > 0) {
        if (!this.hoveringObject || !this.hoveringObject.equals(rayHit.objects[0])) {
            /* Unhover previous, if exists */
            if (this.hoveringObject) {
                let cursorTarget = this.hoveringObject.getComponent("cursor-target");

                /* Cursor up */
                if (this.isDown && this.isDown == this.lastIsDown) {
                    if (cursorTarget) cursorTarget.onUp(this.hoveringObject, this);
                    this.globalTarget.onUp(this.hoveringObject, this);
                    this.lastIsDown = false;
                }

                if (cursorTarget) cursorTarget.onUnhover(this.hoveringObject, this);
                this.globalTarget.onUnhover(this.hoveringObject, this);
            }

            /* Hover new object */
            this.hoveringObject = rayHit.objects[0];
            if (this.styleCursor) WL.canvas.style.cursor = "pointer";

            let cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if (cursorTarget) {
                this.hoveringObjectTarget = cursorTarget;
                cursorTarget.onHover(this.hoveringObject, this);
            }
            this.globalTarget.onHover(this.hoveringObject, this);
        }

        if (this.hoveringObjectTarget) {
            this.hoveringObjectTarget.onMove(this.hoveringObject, this);
        }

        let cursorTarget = this.hoveringObject.getComponent("cursor-target");

        /* Cursor down */
        if (this.isDown !== this.lastIsDown) {
            if (this.isDown) {
                if (cursorTarget) cursorTarget.onDown(this.hoveringObject, this);
                this.globalTarget.onDown(this.hoveringObject, this);
            }
        }

        /* Click */
        if (doClick) {
            if (this.tripleClickTimer > 0 && this.multipleClickObject && this.multipleClickObject.equals(this.hoveringObject)) {
                if (cursorTarget) cursorTarget.onTripleClick(this.hoveringObject, this);
                this.globalTarget.onTripleClick(this.hoveringObject, this);

                this.tripleClickTimer = 0;
            } else if (this.doubleClickTimer > 0 && this.multipleClickObject && this.multipleClickObject.equals(this.hoveringObject)) {
                if (cursorTarget) cursorTarget.onDoubleClick(this.hoveringObject, this);
                this.globalTarget.onDoubleClick(this.hoveringObject, this);

                this.tripleClickTimer = this.multipleClickDelay;
                this.doubleClickTimer = 0;
            } else {
                if (cursorTarget) cursorTarget.onClick(this.hoveringObject, this);
                this.globalTarget.onClick(this.hoveringObject, this);

                this.tripleClickTimer = 0;
                this.doubleClickTimer = this.multipleClickDelay;
                this.multipleClickObject = this.hoveringObject;
            }
        }

        /* Cursor up */
        if (this.isDown !== this.lastIsDown) {
            if (!this.isDown) {
                if (cursorTarget) cursorTarget.onUp(this.hoveringObject, this);
                this.globalTarget.onUp(this.hoveringObject, this);
            }
        }
    } else if (this.hoveringObject && rayHit.hitCount == 0) {
        let cursorTarget = this.hoveringObject.getComponent("cursor-target");

        /* Cursor up */
        if (this.isDown && this.isDown == this.lastIsDown) {
            if (cursorTarget) cursorTarget.onUp(this.hoveringObject, this);
            this.globalTarget.onUp(this.hoveringObject, this);
            this.lastIsDown = false;
        }

        if (cursorTarget) cursorTarget.onUnhover(this.hoveringObject, this);
        this.globalTarget.onUnhover(this.hoveringObject, this);

        this.hoveringObject = null;
        this.hoveringObjectTarget = null;
        if (this.styleCursor) WL.canvas.style.cursor = "default";
    }

    if (this.hoveringObject) {
        this.lastIsDown = this.isDown;
    }
};