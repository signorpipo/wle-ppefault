/**
 * Warning: this type extension is actually added at runtime only if you call `initMat3Extension`
 *          the `initPP` function, which is automatically called by the `pp-gateway` component, does this for you
 */

import { Matrix3, Quaternion, Vector3 } from "../../../../cauldron/type_definitions/array_type_definitions.js";

export interface Matrix3Extension<MatrixType extends Matrix3> {
    mat3_set<T extends MatrixType>(this: T,
        m00: number, m01: number, m02: number,
        m10: number, m11: number, m12: number,
        m20: number, m21: number, m22: number): this;
    mat3_set<T extends MatrixType>(this: T, uniformValue: number): this;

    mat3_copy<T extends MatrixType>(this: T, vector: Readonly<Matrix3>): this;
    mat3_clone<T extends MatrixType>(this: Readonly<T>): T;


    mat3_toDegrees<T extends MatrixType>(this: Readonly<T>): Vector3;
    mat3_toDegrees<T extends MatrixType, S extends Vector3>(this: Readonly<T>, out: S): S;

    mat3_toRadians<T extends MatrixType>(this: Readonly<T>): Vector3;
    mat3_toRadians<T extends MatrixType, S extends Vector3>(this: Readonly<T>, out: S): S;

    mat3_toQuat<T extends MatrixType>(this: Readonly<T>): Quaternion;
    mat3_toQuat<T extends MatrixType, S extends Quaternion>(this: Readonly<T>, out: S): S;


    mat3_fromAxes<T extends MatrixType>(this: T, leftAxis: Readonly<Vector3>, upAxis: Readonly<Vector3>, forwardAxis: Readonly<Vector3>): this;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export interface Array<T> extends Matrix3Extension<Array<number>> { }
}

declare global {
    export interface Uint8ClampedArray extends Matrix3Extension<Uint8ClampedArray> { }
}

declare global {
    export interface Uint8Array extends Matrix3Extension<Uint8Array> { }
}

declare global {
    export interface Uint16Array extends Matrix3Extension<Uint16Array> { }
}

declare global {
    export interface Uint32Array extends Matrix3Extension<Uint32Array> { }
}

declare global {
    export interface Int8Array extends Matrix3Extension<Int8Array> { }
}

declare global {
    export interface Int16Array extends Matrix3Extension<Int16Array> { }
}

declare global {
    export interface Int32Array extends Matrix3Extension<Int32Array> { }
}

declare global {
    export interface Float32Array extends Matrix3Extension<Float32Array> { }
}

declare global {
    export interface Float64Array extends Matrix3Extension<Float64Array> { }
}

declare module "../../../../cauldron/type_definitions/array_type_definitions.js" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export interface ArrayLike<T> extends Matrix3Extension<ArrayLike<number>> { }

    export interface Vector extends Matrix3Extension<Vector> { }

    export interface Vector2 extends Matrix3Extension<Vector2> { }

    export interface Vector3 extends Matrix3Extension<Vector3> { }

    export interface Vector4 extends Matrix3Extension<Vector4> { }

    export interface Quaternion extends Matrix3Extension<Quaternion> { }

    export interface Quaternion2 extends Matrix3Extension<Quaternion2> { }

    export interface Matrix2 extends Matrix3Extension<Matrix2> { }

    export interface Matrix3 extends Matrix3Extension<Matrix3> { }

    export interface Matrix4 extends Matrix3Extension<Matrix4> { }
}