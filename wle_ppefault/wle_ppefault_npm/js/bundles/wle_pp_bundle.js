(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/gl-matrix/esm/common.js
  var common_exports = {};
  __export(common_exports, {
    ARRAY_TYPE: () => ARRAY_TYPE,
    EPSILON: () => EPSILON,
    RANDOM: () => RANDOM,
    equals: () => equals,
    setMatrixArrayType: () => setMatrixArrayType,
    toRadian: () => toRadian
  });
  function setMatrixArrayType(type2) {
    ARRAY_TYPE = type2;
  }
  function toRadian(a) {
    return a * degree;
  }
  function equals(a, b) {
    return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
  }
  var EPSILON, ARRAY_TYPE, RANDOM, degree;
  var init_common = __esm({
    "node_modules/gl-matrix/esm/common.js"() {
      EPSILON = 1e-6;
      ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
      RANDOM = Math.random;
      degree = Math.PI / 180;
      if (!Math.hypot)
        Math.hypot = function() {
          var y = 0, i = arguments.length;
          while (i--) {
            y += arguments[i] * arguments[i];
          }
          return Math.sqrt(y);
        };
    }
  });

  // node_modules/gl-matrix/esm/mat3.js
  var mat3_exports = {};
  __export(mat3_exports, {
    add: () => add,
    adjoint: () => adjoint,
    clone: () => clone,
    copy: () => copy,
    create: () => create,
    determinant: () => determinant,
    equals: () => equals2,
    exactEquals: () => exactEquals,
    frob: () => frob,
    fromMat2d: () => fromMat2d,
    fromMat4: () => fromMat4,
    fromQuat: () => fromQuat,
    fromRotation: () => fromRotation,
    fromScaling: () => fromScaling,
    fromTranslation: () => fromTranslation,
    fromValues: () => fromValues,
    identity: () => identity,
    invert: () => invert,
    mul: () => mul,
    multiply: () => multiply,
    multiplyScalar: () => multiplyScalar,
    multiplyScalarAndAdd: () => multiplyScalarAndAdd,
    normalFromMat4: () => normalFromMat4,
    projection: () => projection,
    rotate: () => rotate,
    scale: () => scale,
    set: () => set,
    str: () => str,
    sub: () => sub,
    subtract: () => subtract,
    translate: () => translate,
    transpose: () => transpose
  });
  function create() {
    var out = new ARRAY_TYPE(9);
    if (ARRAY_TYPE != Float32Array) {
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
    }
    out[0] = 1;
    out[4] = 1;
    out[8] = 1;
    return out;
  }
  function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
  }
  function clone(a) {
    var out = new ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
  }
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
  }
  function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new ARRAY_TYPE(9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
  }
  function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
  }
  function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
  }
  function transpose(out, a) {
    if (out === a) {
      var a01 = a[1], a02 = a[2], a12 = a[5];
      out[1] = a[3];
      out[2] = a[6];
      out[3] = a01;
      out[5] = a[7];
      out[6] = a02;
      out[7] = a12;
    } else {
      out[0] = a[0];
      out[1] = a[3];
      out[2] = a[6];
      out[3] = a[1];
      out[4] = a[4];
      out[5] = a[7];
      out[6] = a[2];
      out[7] = a[5];
      out[8] = a[8];
    }
    return out;
  }
  function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
  }
  function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    out[0] = a11 * a22 - a12 * a21;
    out[1] = a02 * a21 - a01 * a22;
    out[2] = a01 * a12 - a02 * a11;
    out[3] = a12 * a20 - a10 * a22;
    out[4] = a00 * a22 - a02 * a20;
    out[5] = a02 * a10 - a00 * a12;
    out[6] = a10 * a21 - a11 * a20;
    out[7] = a01 * a20 - a00 * a21;
    out[8] = a00 * a11 - a01 * a10;
    return out;
  }
  function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
  }
  function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
  }
  function translate(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
  }
  function rotate(out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;
    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
  }
  function scale(out, a, v) {
    var x = v[0], y = v[1];
    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];
    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
  }
  function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
  }
  function fromRotation(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = -s;
    out[4] = c;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
  }
  function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
  }
  function fromMat2d(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;
    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;
    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
  }
  function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;
    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;
    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;
    return out;
  }
  function normalFromMat4(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return out;
  }
  function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
  }
  function str(a) {
    return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
  }
  function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
  }
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
  }
  function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
  }
  function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
  }
  function multiplyScalarAndAdd(out, a, b, scale7) {
    out[0] = a[0] + b[0] * scale7;
    out[1] = a[1] + b[1] * scale7;
    out[2] = a[2] + b[2] * scale7;
    out[3] = a[3] + b[3] * scale7;
    out[4] = a[4] + b[4] * scale7;
    out[5] = a[5] + b[5] * scale7;
    out[6] = a[6] + b[6] * scale7;
    out[7] = a[7] + b[7] * scale7;
    out[8] = a[8] + b[8] * scale7;
    return out;
  }
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
  }
  function equals2(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8));
  }
  var mul, sub;
  var init_mat3 = __esm({
    "node_modules/gl-matrix/esm/mat3.js"() {
      init_common();
      mul = multiply;
      sub = subtract;
    }
  });

  // node_modules/gl-matrix/esm/mat4.js
  var mat4_exports = {};
  __export(mat4_exports, {
    add: () => add2,
    adjoint: () => adjoint2,
    clone: () => clone2,
    copy: () => copy2,
    create: () => create2,
    determinant: () => determinant2,
    equals: () => equals3,
    exactEquals: () => exactEquals2,
    frob: () => frob2,
    fromQuat: () => fromQuat3,
    fromQuat2: () => fromQuat2,
    fromRotation: () => fromRotation2,
    fromRotationTranslation: () => fromRotationTranslation,
    fromRotationTranslationScale: () => fromRotationTranslationScale,
    fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
    fromScaling: () => fromScaling2,
    fromTranslation: () => fromTranslation2,
    fromValues: () => fromValues2,
    fromXRotation: () => fromXRotation,
    fromYRotation: () => fromYRotation,
    fromZRotation: () => fromZRotation,
    frustum: () => frustum,
    getRotation: () => getRotation,
    getScaling: () => getScaling,
    getTranslation: () => getTranslation,
    identity: () => identity2,
    invert: () => invert2,
    lookAt: () => lookAt,
    mul: () => mul2,
    multiply: () => multiply2,
    multiplyScalar: () => multiplyScalar2,
    multiplyScalarAndAdd: () => multiplyScalarAndAdd2,
    ortho: () => ortho,
    orthoNO: () => orthoNO,
    orthoZO: () => orthoZO,
    perspective: () => perspective,
    perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
    perspectiveNO: () => perspectiveNO,
    perspectiveZO: () => perspectiveZO,
    rotate: () => rotate2,
    rotateX: () => rotateX,
    rotateY: () => rotateY,
    rotateZ: () => rotateZ,
    scale: () => scale2,
    set: () => set2,
    str: () => str2,
    sub: () => sub2,
    subtract: () => subtract2,
    targetTo: () => targetTo,
    translate: () => translate2,
    transpose: () => transpose2
  });
  function create2() {
    var out = new ARRAY_TYPE(16);
    if (ARRAY_TYPE != Float32Array) {
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
  }
  function clone2(a) {
    var out = new ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function copy2(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function fromValues2(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function set2(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function identity2(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function transpose2(out, a) {
    if (out === a) {
      var a01 = a[1], a02 = a[2], a03 = a[3];
      var a12 = a[6], a13 = a[7];
      var a23 = a[11];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a01;
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a02;
      out[9] = a12;
      out[11] = a[14];
      out[12] = a03;
      out[13] = a13;
      out[14] = a23;
    } else {
      out[0] = a[0];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a[1];
      out[5] = a[5];
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a[2];
      out[9] = a[6];
      out[10] = a[10];
      out[11] = a[14];
      out[12] = a[3];
      out[13] = a[7];
      out[14] = a[11];
      out[15] = a[15];
    }
    return out;
  }
  function invert2(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  }
  function adjoint2(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
  }
  function determinant2(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }
  function multiply2(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  function translate2(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
  }
  function scale2(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function rotate2(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len5 = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len5 < EPSILON) {
      return null;
    }
    len5 = 1 / len5;
    x *= len5;
    y *= len5;
    z *= len5;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    return out;
  }
  function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
  }
  function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
  }
  function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) {
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
  }
  function fromTranslation2(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromScaling2(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromRotation2(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len5 = Math.hypot(x, y, z);
    var s, c, t;
    if (len5 < EPSILON) {
      return null;
    }
    len5 = 1 / len5;
    x *= len5;
    y *= len5;
    z *= len5;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromRotationTranslation(out, q, v) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromQuat2(out, a) {
    var translation = new ARRAY_TYPE(3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw;
    if (magnitude > 0) {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a, translation);
    return out;
  }
  function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
  }
  function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
  }
  function getRotation(out, mat) {
    var scaling = new ARRAY_TYPE(3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }
    return out;
  }
  function fromRotationTranslationScale(out, q, v, s) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
  }
  function fromQuat3(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
  }
  function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = (far + near) * nf;
      out[14] = 2 * far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -2 * near;
    }
    return out;
  }
  function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = far * nf;
      out[14] = far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -near;
    }
    return out;
  }
  function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
    var xScale = 2 / (leftTan + rightTan);
    var yScale = 2 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = yScale;
    out[6] = 0;
    out[7] = 0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near / (near - far);
    out[15] = 0;
    return out;
  }
  function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
  }
  function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
  }
  function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len5;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
      return identity2(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len5 = 1 / Math.hypot(z0, z1, z2);
    z0 *= len5;
    z1 *= len5;
    z2 *= len5;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len5 = Math.hypot(x0, x1, x2);
    if (!len5) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len5 = 1 / len5;
      x0 *= len5;
      x1 *= len5;
      x2 *= len5;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len5 = Math.hypot(y0, y1, y2);
    if (!len5) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len5 = 1 / len5;
      y0 *= len5;
      y1 *= len5;
      y2 *= len5;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
  }
  function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len5 = z0 * z0 + z1 * z1 + z2 * z2;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
      z0 *= len5;
      z1 *= len5;
      z2 *= len5;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len5 = x0 * x0 + x1 * x1 + x2 * x2;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
      x0 *= len5;
      x1 *= len5;
      x2 *= len5;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
  }
  function str2(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
  }
  function frob2(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
  }
  function add2(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
  }
  function subtract2(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
  }
  function multiplyScalar2(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
  }
  function multiplyScalarAndAdd2(out, a, b, scale7) {
    out[0] = a[0] + b[0] * scale7;
    out[1] = a[1] + b[1] * scale7;
    out[2] = a[2] + b[2] * scale7;
    out[3] = a[3] + b[3] * scale7;
    out[4] = a[4] + b[4] * scale7;
    out[5] = a[5] + b[5] * scale7;
    out[6] = a[6] + b[6] * scale7;
    out[7] = a[7] + b[7] * scale7;
    out[8] = a[8] + b[8] * scale7;
    out[9] = a[9] + b[9] * scale7;
    out[10] = a[10] + b[10] * scale7;
    out[11] = a[11] + b[11] * scale7;
    out[12] = a[12] + b[12] * scale7;
    out[13] = a[13] + b[13] * scale7;
    out[14] = a[14] + b[14] * scale7;
    out[15] = a[15] + b[15] * scale7;
    return out;
  }
  function exactEquals2(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
  }
  function equals3(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
  }
  var perspective, ortho, mul2, sub2;
  var init_mat4 = __esm({
    "node_modules/gl-matrix/esm/mat4.js"() {
      init_common();
      perspective = perspectiveNO;
      ortho = orthoNO;
      mul2 = multiply2;
      sub2 = subtract2;
    }
  });

  // node_modules/gl-matrix/esm/vec3.js
  var vec3_exports = {};
  __export(vec3_exports, {
    add: () => add3,
    angle: () => angle,
    bezier: () => bezier,
    ceil: () => ceil,
    clone: () => clone3,
    copy: () => copy3,
    create: () => create3,
    cross: () => cross,
    dist: () => dist,
    distance: () => distance,
    div: () => div,
    divide: () => divide,
    dot: () => dot,
    equals: () => equals4,
    exactEquals: () => exactEquals3,
    floor: () => floor,
    forEach: () => forEach,
    fromValues: () => fromValues3,
    hermite: () => hermite,
    inverse: () => inverse,
    len: () => len,
    length: () => length,
    lerp: () => lerp,
    max: () => max,
    min: () => min,
    mul: () => mul3,
    multiply: () => multiply3,
    negate: () => negate,
    normalize: () => normalize,
    random: () => random,
    rotateX: () => rotateX2,
    rotateY: () => rotateY2,
    rotateZ: () => rotateZ2,
    round: () => round,
    scale: () => scale3,
    scaleAndAdd: () => scaleAndAdd,
    set: () => set3,
    sqrDist: () => sqrDist,
    sqrLen: () => sqrLen,
    squaredDistance: () => squaredDistance,
    squaredLength: () => squaredLength,
    str: () => str3,
    sub: () => sub3,
    subtract: () => subtract3,
    transformMat3: () => transformMat3,
    transformMat4: () => transformMat4,
    transformQuat: () => transformQuat,
    zero: () => zero
  });
  function create3() {
    var out = new ARRAY_TYPE(3);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
    return out;
  }
  function clone3(a) {
    var out = new ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
  }
  function fromValues3(x, y, z) {
    var out = new ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function copy3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  function set3(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function add3(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }
  function subtract3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }
  function multiply3(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
  }
  function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
  }
  function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
  }
  function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
  }
  function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
  }
  function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
  }
  function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
  }
  function scale3(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
  }
  function scaleAndAdd(out, a, b, scale7) {
    out[0] = a[0] + b[0] * scale7;
    out[1] = a[1] + b[1] * scale7;
    out[2] = a[2] + b[2] * scale7;
    return out;
  }
  function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
  }
  function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
  }
  function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
  }
  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }
  function inverse(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    out[2] = 1 / a[2];
    return out;
  }
  function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len5 = x * x + y * y + z * z;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
    }
    out[0] = a[0] * len5;
    out[1] = a[1] * len5;
    out[2] = a[2] * len5;
    return out;
  }
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }
  function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
  }
  function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  function random(out, scale7) {
    scale7 = scale7 || 1;
    var r = RANDOM() * 2 * Math.PI;
    var z = RANDOM() * 2 - 1;
    var zScale = Math.sqrt(1 - z * z) * scale7;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale7;
    return out;
  }
  function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
  }
  function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }
  function transformQuat(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2];
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
  }
  function rotateX2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function rotateY2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function rotateZ2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2];
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function angle(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }
  function zero(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
  }
  function str3(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
  }
  function exactEquals3(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }
  function equals4(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
  }
  var sub3, mul3, div, dist, sqrDist, len, sqrLen, forEach;
  var init_vec3 = __esm({
    "node_modules/gl-matrix/esm/vec3.js"() {
      init_common();
      sub3 = subtract3;
      mul3 = multiply3;
      div = divide;
      dist = distance;
      sqrDist = squaredDistance;
      len = length;
      sqrLen = squaredLength;
      forEach = function() {
        var vec = create3();
        return function(a, stride, offset, count, fn, arg) {
          var i, l;
          if (!stride) {
            stride = 3;
          }
          if (!offset) {
            offset = 0;
          }
          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }
          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
          }
          return a;
        };
      }();
    }
  });

  // node_modules/gl-matrix/esm/vec4.js
  var vec4_exports = {};
  __export(vec4_exports, {
    add: () => add4,
    ceil: () => ceil2,
    clone: () => clone4,
    copy: () => copy4,
    create: () => create4,
    cross: () => cross2,
    dist: () => dist2,
    distance: () => distance2,
    div: () => div2,
    divide: () => divide2,
    dot: () => dot2,
    equals: () => equals5,
    exactEquals: () => exactEquals4,
    floor: () => floor2,
    forEach: () => forEach2,
    fromValues: () => fromValues4,
    inverse: () => inverse2,
    len: () => len2,
    length: () => length2,
    lerp: () => lerp2,
    max: () => max2,
    min: () => min2,
    mul: () => mul4,
    multiply: () => multiply4,
    negate: () => negate2,
    normalize: () => normalize2,
    random: () => random2,
    round: () => round2,
    scale: () => scale4,
    scaleAndAdd: () => scaleAndAdd2,
    set: () => set4,
    sqrDist: () => sqrDist2,
    sqrLen: () => sqrLen2,
    squaredDistance: () => squaredDistance2,
    squaredLength: () => squaredLength2,
    str: () => str4,
    sub: () => sub4,
    subtract: () => subtract4,
    transformMat4: () => transformMat42,
    transformQuat: () => transformQuat2,
    zero: () => zero2
  });
  function create4() {
    var out = new ARRAY_TYPE(4);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
    }
    return out;
  }
  function clone4(a) {
    var out = new ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  function fromValues4(x, y, z, w) {
    var out = new ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  function copy4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  function set4(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  function add4(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
  }
  function subtract4(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
  }
  function multiply4(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
  }
  function divide2(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
  }
  function ceil2(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
  }
  function floor2(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
  }
  function min2(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
  }
  function max2(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
  }
  function round2(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
  }
  function scale4(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
  }
  function scaleAndAdd2(out, a, b, scale7) {
    out[0] = a[0] + b[0] * scale7;
    out[1] = a[1] + b[1] * scale7;
    out[2] = a[2] + b[2] * scale7;
    out[3] = a[3] + b[3] * scale7;
    return out;
  }
  function distance2(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return Math.hypot(x, y, z, w);
  }
  function squaredDistance2(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
  }
  function length2(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return Math.hypot(x, y, z, w);
  }
  function squaredLength2(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return x * x + y * y + z * z + w * w;
  }
  function negate2(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
  }
  function inverse2(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    out[2] = 1 / a[2];
    out[3] = 1 / a[3];
    return out;
  }
  function normalize2(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    var len5 = x * x + y * y + z * z + w * w;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
    }
    out[0] = x * len5;
    out[1] = y * len5;
    out[2] = z * len5;
    out[3] = w * len5;
    return out;
  }
  function dot2(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  function cross2(out, u, v, w) {
    var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
    var G = u[0];
    var H = u[1];
    var I = u[2];
    var J = u[3];
    out[0] = H * F - I * E + J * D;
    out[1] = -(G * F) + I * C - J * B;
    out[2] = G * E - H * C + J * A;
    out[3] = -(G * D) + H * B - I * A;
    return out;
  }
  function lerp2(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
  }
  function random2(out, scale7) {
    scale7 = scale7 || 1;
    var v1, v2, v3, v4;
    var s1, s2;
    do {
      v1 = RANDOM() * 2 - 1;
      v2 = RANDOM() * 2 - 1;
      s1 = v1 * v1 + v2 * v2;
    } while (s1 >= 1);
    do {
      v3 = RANDOM() * 2 - 1;
      v4 = RANDOM() * 2 - 1;
      s2 = v3 * v3 + v4 * v4;
    } while (s2 >= 1);
    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale7 * v1;
    out[1] = scale7 * v2;
    out[2] = scale7 * v3 * d;
    out[3] = scale7 * v4 * d;
    return out;
  }
  function transformMat42(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
  }
  function transformQuat2(out, a, q) {
    var x = a[0], y = a[1], z = a[2];
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
  }
  function zero2(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
  }
  function str4(a) {
    return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
  }
  function exactEquals4(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  }
  function equals5(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
  }
  var sub4, mul4, div2, dist2, sqrDist2, len2, sqrLen2, forEach2;
  var init_vec4 = __esm({
    "node_modules/gl-matrix/esm/vec4.js"() {
      init_common();
      sub4 = subtract4;
      mul4 = multiply4;
      div2 = divide2;
      dist2 = distance2;
      sqrDist2 = squaredDistance2;
      len2 = length2;
      sqrLen2 = squaredLength2;
      forEach2 = function() {
        var vec = create4();
        return function(a, stride, offset, count, fn, arg) {
          var i, l;
          if (!stride) {
            stride = 4;
          }
          if (!offset) {
            offset = 0;
          }
          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }
          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
          }
          return a;
        };
      }();
    }
  });

  // node_modules/gl-matrix/esm/quat.js
  var quat_exports = {};
  __export(quat_exports, {
    add: () => add5,
    calculateW: () => calculateW,
    clone: () => clone5,
    conjugate: () => conjugate,
    copy: () => copy5,
    create: () => create5,
    dot: () => dot3,
    equals: () => equals6,
    exactEquals: () => exactEquals5,
    exp: () => exp,
    fromEuler: () => fromEuler,
    fromMat3: () => fromMat3,
    fromValues: () => fromValues5,
    getAngle: () => getAngle,
    getAxisAngle: () => getAxisAngle,
    identity: () => identity3,
    invert: () => invert3,
    len: () => len3,
    length: () => length3,
    lerp: () => lerp3,
    ln: () => ln,
    mul: () => mul5,
    multiply: () => multiply5,
    normalize: () => normalize3,
    pow: () => pow,
    random: () => random3,
    rotateX: () => rotateX3,
    rotateY: () => rotateY3,
    rotateZ: () => rotateZ3,
    rotationTo: () => rotationTo,
    scale: () => scale5,
    set: () => set5,
    setAxes: () => setAxes,
    setAxisAngle: () => setAxisAngle,
    slerp: () => slerp,
    sqlerp: () => sqlerp,
    sqrLen: () => sqrLen3,
    squaredLength: () => squaredLength3,
    str: () => str5
  });
  function create5() {
    var out = new ARRAY_TYPE(4);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
    out[3] = 1;
    return out;
  }
  function identity3(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
  }
  function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
  }
  function getAxisAngle(out_axis, q) {
    var rad = Math.acos(q[3]) * 2;
    var s = Math.sin(rad / 2);
    if (s > EPSILON) {
      out_axis[0] = q[0] / s;
      out_axis[1] = q[1] / s;
      out_axis[2] = q[2] / s;
    } else {
      out_axis[0] = 1;
      out_axis[1] = 0;
      out_axis[2] = 0;
    }
    return rad;
  }
  function getAngle(a, b) {
    var dotproduct = dot3(a, b);
    return Math.acos(2 * dotproduct * dotproduct - 1);
  }
  function multiply5(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }
  function rotateX3(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
  }
  function rotateY3(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
  }
  function rotateZ3(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
  }
  function calculateW(out, a) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
    return out;
  }
  function exp(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var et = Math.exp(w);
    var s = r > 0 ? et * Math.sin(r) / r : 0;
    out[0] = x * s;
    out[1] = y * s;
    out[2] = z * s;
    out[3] = et * Math.cos(r);
    return out;
  }
  function ln(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var t = r > 0 ? Math.atan2(r, w) / r : 0;
    out[0] = x * t;
    out[1] = y * t;
    out[2] = z * t;
    out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
    return out;
  }
  function pow(out, a, b) {
    ln(out, a);
    scale5(out, out, b);
    exp(out, out);
    return out;
  }
  function slerp(out, a, b, t) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    var omega, cosom, sinom, scale0, scale1;
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if (cosom < 0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    if (1 - cosom > EPSILON) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      scale0 = 1 - t;
      scale1 = t;
    }
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  }
  function random3(out) {
    var u1 = RANDOM();
    var u2 = RANDOM();
    var u3 = RANDOM();
    var sqrt1MinusU1 = Math.sqrt(1 - u1);
    var sqrtU1 = Math.sqrt(u1);
    out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
    out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
    out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
    out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
    return out;
  }
  function invert3(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var dot5 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    var invDot = dot5 ? 1 / dot5 : 0;
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
  }
  function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
  }
  function fromMat3(out, m) {
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;
    if (fTrace > 0) {
      fRoot = Math.sqrt(fTrace + 1);
      out[3] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[0] = (m[5] - m[7]) * fRoot;
      out[1] = (m[6] - m[2]) * fRoot;
      out[2] = (m[1] - m[3]) * fRoot;
    } else {
      var i = 0;
      if (m[4] > m[0])
        i = 1;
      if (m[8] > m[i * 3 + i])
        i = 2;
      var j = (i + 1) % 3;
      var k = (i + 2) % 3;
      fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
      out[i] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
      out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
      out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
  }
  function fromEuler(out, x, y, z) {
    var halfToRad = 0.5 * Math.PI / 180;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;
    var sx = Math.sin(x);
    var cx = Math.cos(x);
    var sy = Math.sin(y);
    var cy = Math.cos(y);
    var sz = Math.sin(z);
    var cz = Math.cos(z);
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
    return out;
  }
  function str5(a) {
    return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
  }
  var clone5, fromValues5, copy5, set5, add5, mul5, scale5, dot3, lerp3, length3, len3, squaredLength3, sqrLen3, normalize3, exactEquals5, equals6, rotationTo, sqlerp, setAxes;
  var init_quat = __esm({
    "node_modules/gl-matrix/esm/quat.js"() {
      init_common();
      init_mat3();
      init_vec3();
      init_vec4();
      clone5 = clone4;
      fromValues5 = fromValues4;
      copy5 = copy4;
      set5 = set4;
      add5 = add4;
      mul5 = multiply5;
      scale5 = scale4;
      dot3 = dot2;
      lerp3 = lerp2;
      length3 = length2;
      len3 = length3;
      squaredLength3 = squaredLength2;
      sqrLen3 = squaredLength3;
      normalize3 = normalize2;
      exactEquals5 = exactEquals4;
      equals6 = equals5;
      rotationTo = function() {
        var tmpvec3 = create3();
        var xUnitVec3 = fromValues3(1, 0, 0);
        var yUnitVec3 = fromValues3(0, 1, 0);
        return function(out, a, b) {
          var dot5 = dot(a, b);
          if (dot5 < -0.999999) {
            cross(tmpvec3, xUnitVec3, a);
            if (len(tmpvec3) < 1e-6)
              cross(tmpvec3, yUnitVec3, a);
            normalize(tmpvec3, tmpvec3);
            setAxisAngle(out, tmpvec3, Math.PI);
            return out;
          } else if (dot5 > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
          } else {
            cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot5;
            return normalize3(out, out);
          }
        };
      }();
      sqlerp = function() {
        var temp1 = create5();
        var temp2 = create5();
        return function(out, a, b, c, d, t) {
          slerp(temp1, a, d, t);
          slerp(temp2, b, c, t);
          slerp(out, temp1, temp2, 2 * t * (1 - t));
          return out;
        };
      }();
      setAxes = function() {
        var matr = create();
        return function(out, view, right, up) {
          matr[0] = right[0];
          matr[3] = right[1];
          matr[6] = right[2];
          matr[1] = up[0];
          matr[4] = up[1];
          matr[7] = up[2];
          matr[2] = -view[0];
          matr[5] = -view[1];
          matr[8] = -view[2];
          return normalize3(out, fromMat3(out, matr));
        };
      }();
    }
  });

  // node_modules/gl-matrix/esm/quat2.js
  var quat2_exports = {};
  __export(quat2_exports, {
    add: () => add6,
    clone: () => clone6,
    conjugate: () => conjugate2,
    copy: () => copy6,
    create: () => create6,
    dot: () => dot4,
    equals: () => equals7,
    exactEquals: () => exactEquals6,
    fromMat4: () => fromMat42,
    fromRotation: () => fromRotation3,
    fromRotationTranslation: () => fromRotationTranslation2,
    fromRotationTranslationValues: () => fromRotationTranslationValues,
    fromTranslation: () => fromTranslation3,
    fromValues: () => fromValues6,
    getDual: () => getDual,
    getReal: () => getReal,
    getTranslation: () => getTranslation2,
    identity: () => identity4,
    invert: () => invert4,
    len: () => len4,
    length: () => length4,
    lerp: () => lerp4,
    mul: () => mul6,
    multiply: () => multiply6,
    normalize: () => normalize4,
    rotateAroundAxis: () => rotateAroundAxis,
    rotateByQuatAppend: () => rotateByQuatAppend,
    rotateByQuatPrepend: () => rotateByQuatPrepend,
    rotateX: () => rotateX4,
    rotateY: () => rotateY4,
    rotateZ: () => rotateZ4,
    scale: () => scale6,
    set: () => set6,
    setDual: () => setDual,
    setReal: () => setReal,
    sqrLen: () => sqrLen4,
    squaredLength: () => squaredLength4,
    str: () => str6,
    translate: () => translate3
  });
  function create6() {
    var dq = new ARRAY_TYPE(8);
    if (ARRAY_TYPE != Float32Array) {
      dq[0] = 0;
      dq[1] = 0;
      dq[2] = 0;
      dq[4] = 0;
      dq[5] = 0;
      dq[6] = 0;
      dq[7] = 0;
    }
    dq[3] = 1;
    return dq;
  }
  function clone6(a) {
    var dq = new ARRAY_TYPE(8);
    dq[0] = a[0];
    dq[1] = a[1];
    dq[2] = a[2];
    dq[3] = a[3];
    dq[4] = a[4];
    dq[5] = a[5];
    dq[6] = a[6];
    dq[7] = a[7];
    return dq;
  }
  function fromValues6(x1, y1, z1, w1, x2, y2, z2, w2) {
    var dq = new ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    dq[4] = x2;
    dq[5] = y2;
    dq[6] = z2;
    dq[7] = w2;
    return dq;
  }
  function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
    var dq = new ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
    dq[4] = ax * w1 + ay * z1 - az * y1;
    dq[5] = ay * w1 + az * x1 - ax * z1;
    dq[6] = az * w1 + ax * y1 - ay * x1;
    dq[7] = -ax * x1 - ay * y1 - az * z1;
    return dq;
  }
  function fromRotationTranslation2(out, q, t) {
    var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
    out[0] = bx;
    out[1] = by;
    out[2] = bz;
    out[3] = bw;
    out[4] = ax * bw + ay * bz - az * by;
    out[5] = ay * bw + az * bx - ax * bz;
    out[6] = az * bw + ax * by - ay * bx;
    out[7] = -ax * bx - ay * by - az * bz;
    return out;
  }
  function fromTranslation3(out, t) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = t[0] * 0.5;
    out[5] = t[1] * 0.5;
    out[6] = t[2] * 0.5;
    out[7] = 0;
    return out;
  }
  function fromRotation3(out, q) {
    out[0] = q[0];
    out[1] = q[1];
    out[2] = q[2];
    out[3] = q[3];
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
  }
  function fromMat42(out, a) {
    var outer = create5();
    getRotation(outer, a);
    var t = new ARRAY_TYPE(3);
    getTranslation(t, a);
    fromRotationTranslation2(out, outer, t);
    return out;
  }
  function copy6(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    return out;
  }
  function identity4(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
  }
  function set6(out, x1, y1, z1, w1, x2, y2, z2, w2) {
    out[0] = x1;
    out[1] = y1;
    out[2] = z1;
    out[3] = w1;
    out[4] = x2;
    out[5] = y2;
    out[6] = z2;
    out[7] = w2;
    return out;
  }
  function getDual(out, a) {
    out[0] = a[4];
    out[1] = a[5];
    out[2] = a[6];
    out[3] = a[7];
    return out;
  }
  function setDual(out, q) {
    out[4] = q[0];
    out[5] = q[1];
    out[6] = q[2];
    out[7] = q[3];
    return out;
  }
  function getTranslation2(out, a) {
    var ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
    out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    return out;
  }
  function translate3(out, a, v) {
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
    out[0] = ax1;
    out[1] = ay1;
    out[2] = az1;
    out[3] = aw1;
    out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
    out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
    out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
    out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
    return out;
  }
  function rotateX4(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    rotateX3(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }
  function rotateY4(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    rotateY3(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }
  function rotateZ4(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    rotateZ3(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }
  function rotateByQuatAppend(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
    out[0] = ax * qw + aw * qx + ay * qz - az * qy;
    out[1] = ay * qw + aw * qy + az * qx - ax * qz;
    out[2] = az * qw + aw * qz + ax * qy - ay * qx;
    out[3] = aw * qw - ax * qx - ay * qy - az * qz;
    ax = a[4];
    ay = a[5];
    az = a[6];
    aw = a[7];
    out[4] = ax * qw + aw * qx + ay * qz - az * qy;
    out[5] = ay * qw + aw * qy + az * qx - ax * qz;
    out[6] = az * qw + aw * qz + ax * qy - ay * qx;
    out[7] = aw * qw - ax * qx - ay * qy - az * qz;
    return out;
  }
  function rotateByQuatPrepend(out, q, a) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
    out[0] = qx * bw + qw * bx + qy * bz - qz * by;
    out[1] = qy * bw + qw * by + qz * bx - qx * bz;
    out[2] = qz * bw + qw * bz + qx * by - qy * bx;
    out[3] = qw * bw - qx * bx - qy * by - qz * bz;
    bx = a[4];
    by = a[5];
    bz = a[6];
    bw = a[7];
    out[4] = qx * bw + qw * bx + qy * bz - qz * by;
    out[5] = qy * bw + qw * by + qz * bx - qx * bz;
    out[6] = qz * bw + qw * bz + qx * by - qy * bx;
    out[7] = qw * bw - qx * bx - qy * by - qz * bz;
    return out;
  }
  function rotateAroundAxis(out, a, axis, rad) {
    if (Math.abs(rad) < EPSILON) {
      return copy6(out, a);
    }
    var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
    rad = rad * 0.5;
    var s = Math.sin(rad);
    var bx = s * axis[0] / axisLength;
    var by = s * axis[1] / axisLength;
    var bz = s * axis[2] / axisLength;
    var bw = Math.cos(rad);
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
    out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    var ax = a[4], ay = a[5], az = a[6], aw = a[7];
    out[4] = ax * bw + aw * bx + ay * bz - az * by;
    out[5] = ay * bw + aw * by + az * bx - ax * bz;
    out[6] = az * bw + aw * bz + ax * by - ay * bx;
    out[7] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }
  function add6(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    return out;
  }
  function multiply6(out, a, b) {
    var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
    out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
    out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
    out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
    out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
    out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
    out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
    out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
    out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
    return out;
  }
  function scale6(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    return out;
  }
  function lerp4(out, a, b, t) {
    var mt = 1 - t;
    if (dot4(a, b) < 0)
      t = -t;
    out[0] = a[0] * mt + b[0] * t;
    out[1] = a[1] * mt + b[1] * t;
    out[2] = a[2] * mt + b[2] * t;
    out[3] = a[3] * mt + b[3] * t;
    out[4] = a[4] * mt + b[4] * t;
    out[5] = a[5] * mt + b[5] * t;
    out[6] = a[6] * mt + b[6] * t;
    out[7] = a[7] * mt + b[7] * t;
    return out;
  }
  function invert4(out, a) {
    var sqlen = squaredLength4(a);
    out[0] = -a[0] / sqlen;
    out[1] = -a[1] / sqlen;
    out[2] = -a[2] / sqlen;
    out[3] = a[3] / sqlen;
    out[4] = -a[4] / sqlen;
    out[5] = -a[5] / sqlen;
    out[6] = -a[6] / sqlen;
    out[7] = a[7] / sqlen;
    return out;
  }
  function conjugate2(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    out[4] = -a[4];
    out[5] = -a[5];
    out[6] = -a[6];
    out[7] = a[7];
    return out;
  }
  function normalize4(out, a) {
    var magnitude = squaredLength4(a);
    if (magnitude > 0) {
      magnitude = Math.sqrt(magnitude);
      var a0 = a[0] / magnitude;
      var a1 = a[1] / magnitude;
      var a2 = a[2] / magnitude;
      var a3 = a[3] / magnitude;
      var b0 = a[4];
      var b1 = a[5];
      var b2 = a[6];
      var b3 = a[7];
      var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
      out[0] = a0;
      out[1] = a1;
      out[2] = a2;
      out[3] = a3;
      out[4] = (b0 - a0 * a_dot_b) / magnitude;
      out[5] = (b1 - a1 * a_dot_b) / magnitude;
      out[6] = (b2 - a2 * a_dot_b) / magnitude;
      out[7] = (b3 - a3 * a_dot_b) / magnitude;
    }
    return out;
  }
  function str6(a) {
    return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
  }
  function exactEquals6(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
  }
  function equals7(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7));
  }
  var getReal, setReal, mul6, dot4, length4, len4, squaredLength4, sqrLen4;
  var init_quat2 = __esm({
    "node_modules/gl-matrix/esm/quat2.js"() {
      init_common();
      init_quat();
      init_mat4();
      getReal = copy5;
      setReal = copy5;
      mul6 = multiply6;
      dot4 = dot3;
      length4 = length3;
      len4 = length4;
      squaredLength4 = squaredLength3;
      sqrLen4 = squaredLength4;
    }
  });

  // node_modules/gl-matrix/esm/index.js
  var init_esm = __esm({
    "node_modules/gl-matrix/esm/index.js"() {
      init_common();
      init_mat3();
      init_mat4();
      init_quat();
      init_quat2();
      init_vec3();
      init_vec4();
    }
  });

  // node_modules/@wonderlandengine/components/cursor.js
  var cursor_exports = {};
  var init_cursor = __esm({
    "node_modules/@wonderlandengine/components/cursor.js"() {
      init_esm();
      WL.registerComponent("cursor", {
        collisionGroup: { type: WL.Type.Int, default: 1 },
        cursorRayObject: { type: WL.Type.Object },
        cursorRayScalingAxis: { type: WL.Type.Enum, values: ["x", "y", "z", "none"], default: "z" },
        cursorObject: { type: WL.Type.Object },
        handedness: { type: WL.Type.Enum, values: ["input component", "left", "right", "none"], default: "input component" },
        rayCastMode: { type: WL.Type.Enum, values: ["collision", "physx"], default: "collision" },
        styleCursor: { type: WL.Type.Bool, default: true }
      }, {
        init: function() {
          this.session = null;
          this.collisionMask = 1 << this.collisionGroup;
          this.maxDistance = 100;
          const sceneLoaded = this.onDestroy.bind(this);
          WL.onSceneLoaded.push(sceneLoaded);
          this.onDestroyCallbacks = [() => {
            const index = WL.onSceneLoaded.indexOf(sceneLoaded);
            if (index >= 0)
              WL.onSceneLoaded.splice(index, 1);
          }];
        },
        start: function() {
          if (this.handedness == 0) {
            const inputComp = this.object.getComponent("input");
            if (!inputComp) {
              console.warn("cursor component on object", this.object.name, 'was configured with handedness "input component", but object has no input component.');
            } else {
              this.handedness = inputComp.handedness;
              this.input = inputComp;
            }
          } else {
            this.handedness = ["left", "right"][this.handedness - 1];
          }
          this.globalTarget = this.object.addComponent("cursor-target");
          this.origin = new Float32Array(3);
          this.cursorObjScale = new Float32Array(3);
          this.direction = [0, 0, 0];
          this.tempQuat = new Float32Array(4);
          this.viewComponent = this.object.getComponent("view");
          if (this.viewComponent != null) {
            const onClick = this.onClick.bind(this);
            WL.canvas.addEventListener("click", onClick);
            const onPointerMove = this.onPointerMove.bind(this);
            WL.canvas.addEventListener("pointermove", onPointerMove);
            const onPointerDown = this.onPointerDown.bind(this);
            WL.canvas.addEventListener("pointerdown", onPointerDown);
            const onPointerUp = this.onPointerUp.bind(this);
            WL.canvas.addEventListener("pointerup", onPointerUp);
            this.projectionMatrix = new Float32Array(16);
            mat4_exports.invert(this.projectionMatrix, this.viewComponent.projectionMatrix);
            const onViewportResize = this.onViewportResize.bind(this);
            window.addEventListener("resize", onViewportResize);
            this.onDestroyCallbacks.push(() => {
              WL.canvas.removeEventListener("click", onClick);
              WL.canvas.removeEventListener("pointermove", onPointerMove);
              WL.canvas.removeEventListener("pointerdown", onPointerDown);
              WL.canvas.removeEventListener("pointerup", onPointerUp);
              window.removeEventListener("resize", onViewportResize);
            });
          }
          this.isHovering = false;
          this.visible = true;
          this.isDown = false;
          this.lastIsDown = false;
          this.cursorPos = new Float32Array(3);
          this.hoveringObject = null;
          const onXRSessionStart = this.setupVREvents.bind(this);
          WL.onXRSessionStart.push(onXRSessionStart);
          this.onDestroyCallbacks.push(() => {
            const index = WL.onXRSessionStart.indexOf(onXRSessionStart);
            if (index >= 0)
              WL.onXRSessionStart.splice(index, 1);
          });
          if (this.cursorRayObject) {
            this.cursorRayScale = new Float32Array(3);
            this.cursorRayScale.set(this.cursorRayObject.scalingLocal);
            this.object.getTranslationWorld(this.origin);
            this.object.getForward(this.direction);
            this._setCursorRayTransform([
              this.origin[0] + this.direction[0],
              this.origin[1] + this.direction[1],
              this.origin[2] + this.direction[2]
            ]);
          }
        },
        onViewportResize: function() {
          if (!this.viewComponent)
            return;
          mat4_exports.invert(this.projectionMatrix, this.viewComponent.projectionMatrix);
        },
        _setCursorRayTransform: function(hitPosition) {
          if (!this.cursorRayObject)
            return;
          const dist3 = vec3_exports.dist(this.origin, hitPosition);
          this.cursorRayObject.setTranslationLocal([0, 0, -dist3 / 2]);
          if (this.cursorRayScalingAxis != 4) {
            this.cursorRayObject.resetScaling();
            this.cursorRayScale[this.cursorRayScalingAxis] = dist3 / 2;
            this.cursorRayObject.scale(this.cursorRayScale);
          }
        },
        _setCursorVisibility: function(visible) {
          if (this.visible == visible)
            return;
          this.visible = visible;
          if (!this.cursorObject)
            return;
          if (visible) {
            this.cursorObject.resetScaling();
            this.cursorObject.scale(this.cursorObjScale);
          } else {
            this.cursorObjScale.set(this.cursorObject.scalingLocal);
            this.cursorObject.scale([0, 0, 0]);
          }
        },
        update: function() {
          this.doUpdate(false);
        },
        doUpdate: function(doClick) {
          if (this.session) {
            if (this.arTouchDown && this.input && WL.xrSession.inputSources[0].handedness === "none" && WL.xrSession.inputSources[0].gamepad) {
              const p = WL.xrSession.inputSources[0].gamepad.axes;
              this.direction = [p[0], -p[1], -1];
              this.updateDirection();
            } else {
              this.object.getTranslationWorld(this.origin);
              this.object.getForward(this.direction);
            }
            const rayHit = this.rayHit = this.rayCastMode == 0 ? WL.scene.rayCast(this.origin, this.direction, this.collisionMask) : WL.physics.rayCast(this.origin, this.direction, this.collisionMask, this.maxDistance);
            if (rayHit.hitCount > 0) {
              this.cursorPos.set(rayHit.locations[0]);
            } else {
              this.cursorPos.fill(0);
            }
            this.hoverBehaviour(rayHit, doClick);
          }
          if (this.cursorObject) {
            if (this.hoveringObject && (this.cursorPos[0] != 0 || this.cursorPos[1] != 0 || this.cursorPos[2] != 0)) {
              this._setCursorVisibility(true);
              this.cursorObject.setTranslationWorld(this.cursorPos);
              this._setCursorRayTransform(this.cursorPos);
            } else {
              this._setCursorVisibility(false);
            }
          }
        },
        hoverBehaviour: function(rayHit, doClick) {
          if (rayHit.hitCount > 0) {
            if (!this.hoveringObject || !this.hoveringObject.equals(rayHit.objects[0])) {
              if (this.hoveringObject) {
                const cursorTarget3 = this.hoveringObject.getComponent("cursor-target");
                if (cursorTarget3)
                  cursorTarget3.onUnhover(this.hoveringObject, this);
                this.globalTarget.onUnhover(this.hoveringObject, this);
              }
              this.hoveringObject = rayHit.objects[0];
              if (this.styleCursor)
                WL.canvas.style.cursor = "pointer";
              let cursorTarget2 = this.hoveringObject.getComponent("cursor-target");
              if (cursorTarget2) {
                this.hoveringObjectTarget = cursorTarget2;
                cursorTarget2.onHover(this.hoveringObject, this);
              }
              this.globalTarget.onHover(this.hoveringObject, this);
            }
            if (this.hoveringObjectTarget) {
              this.hoveringObjectTarget.onMove(this.hoveringObject, this);
            }
            const cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if (this.isDown !== this.lastIsDown) {
              if (this.isDown) {
                if (cursorTarget)
                  cursorTarget.onDown(this.hoveringObject, this);
                this.globalTarget.onDown(this.hoveringObject, this);
              } else {
                if (cursorTarget)
                  cursorTarget.onUp(this.hoveringObject, this);
                this.globalTarget.onUp(this.hoveringObject, this);
              }
            }
            if (doClick) {
              if (cursorTarget)
                cursorTarget.onClick(this.hoveringObject, this);
              this.globalTarget.onClick(this.hoveringObject, this);
            }
          } else if (this.hoveringObject && rayHit.hitCount == 0) {
            const cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if (cursorTarget)
              cursorTarget.onUnhover(this.hoveringObject, this);
            this.globalTarget.onUnhover(this.hoveringObject, this);
            this.hoveringObject = null;
            this.hoveringObjectTarget = null;
            if (this.styleCursor)
              WL.canvas.style.cursor = "default";
          }
          this.lastIsDown = this.isDown;
        },
        setupVREvents: function(s) {
          this.session = s;
          const onSessionEnd = function(e) {
            this.session = null;
          }.bind(this);
          s.addEventListener("end", onSessionEnd);
          const onSelect = this.onSelect.bind(this);
          s.addEventListener("select", onSelect);
          const onSelectStart = this.onSelectStart.bind(this);
          s.addEventListener("selectstart", onSelectStart);
          const onSelectEnd = this.onSelectEnd.bind(this);
          s.addEventListener("selectend", onSelectEnd);
          this.onDestroyCallbacks.push(() => {
            if (!this.session)
              return;
            s.removeEventListener("end", onSessionEnd);
            s.removeEventListener("select", onSelect);
            s.removeEventListener("selectstart", onSelectStart);
            s.removeEventListener("selectend", onSelectEnd);
          });
          this.onViewportResize();
        },
        onSelect: function(e) {
          if (e.inputSource.handedness != this.handedness)
            return;
          this.doUpdate(true);
        },
        onSelectStart: function(e) {
          this.arTouchDown = true;
          if (e.inputSource.handedness == this.handedness)
            this.isDown = true;
        },
        onSelectEnd: function(e) {
          this.arTouchDown = false;
          if (e.inputSource.handedness == this.handedness)
            this.isDown = false;
        },
        onPointerMove: function(e) {
          if (!e.isPrimary)
            return;
          const bounds = e.target.getBoundingClientRect();
          const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
          this.hoverBehaviour(rayHit, false);
        },
        onClick: function(e) {
          const bounds = e.target.getBoundingClientRect();
          const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
          this.hoverBehaviour(rayHit, true);
        },
        onPointerDown: function(e) {
          if (!e.isPrimary || e.button !== 0)
            return;
          const bounds = e.target.getBoundingClientRect();
          const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
          this.isDown = true;
          this.hoverBehaviour(rayHit, false);
        },
        onPointerUp: function(e) {
          if (!e.isPrimary || e.button !== 0)
            return;
          const bounds = e.target.getBoundingClientRect();
          const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
          this.isDown = false;
          this.hoverBehaviour(rayHit, false);
        },
        updateMousePos: function(clientX, clientY, w, h) {
          const left = clientX / w;
          const top = clientY / h;
          this.direction = [left * 2 - 1, -top * 2 + 1, -1];
          return this.updateDirection();
        },
        updateDirection: function() {
          this.object.getTranslationWorld(this.origin);
          vec3_exports.transformMat4(this.direction, this.direction, this.projectionMatrix);
          vec3_exports.normalize(this.direction, this.direction);
          vec3_exports.transformQuat(this.direction, this.direction, this.object.transformWorld);
          const rayHit = this.rayHit = this.rayCastMode == 0 ? WL.scene.rayCast(this.origin, this.direction, this.collisionMask) : WL.physics.rayCast(this.origin, this.direction, this.collisionMask, this.maxDistance);
          if (rayHit.hitCount > 0) {
            this.cursorPos.set(rayHit.locations[0]);
          } else {
            this.cursorPos.fill(0);
          }
          return rayHit;
        },
        onDeactivate: function() {
          this._setCursorVisibility(false);
          if (this.hoveringObject) {
            const target = this.hoveringObject.getComponent("cursor-target");
            if (target)
              target.onUnhover(this.hoveringObject, this);
            this.globalTarget.onUnhover(this.hoveringObject, this);
          }
          if (this.cursorRayObject)
            this.cursorRayObject.scale([0, 0, 0]);
        },
        onActivate: function() {
          this._setCursorVisibility(true);
        },
        onDestroy: function() {
          for (const f of this.onDestroyCallbacks)
            f();
        }
      });
    }
  });

  // node_modules/@wonderlandengine/components/cursor-target.js
  var require_cursor_target = __commonJS({
    "node_modules/@wonderlandengine/components/cursor-target.js"() {
      WL.registerComponent("cursor-target", {}, {
        init: function() {
          this.hoverFunctions = [];
          this.unHoverFunctions = [];
          this.clickFunctions = [];
          this.moveFunctions = [];
          this.downFunctions = [];
          this.upFunctions = [];
        },
        onHover: function(object, cursor) {
          for (let f of this.hoverFunctions)
            f(object, cursor);
        },
        onUnhover: function(object, cursor) {
          for (let f of this.unHoverFunctions)
            f(object, cursor);
        },
        onClick: function(object, cursor) {
          for (let f of this.clickFunctions)
            f(object, cursor);
        },
        onMove: function(object, cursor) {
          for (let f of this.moveFunctions)
            f(object, cursor);
        },
        onDown: function(object, cursor) {
          for (let f of this.downFunctions)
            f(object, cursor);
        },
        onUp: function(object, cursor) {
          for (let f of this.upFunctions)
            f(object, cursor);
        },
        addHoverFunction: function(f) {
          this._validateCallback(f);
          this.hoverFunctions.push(f);
        },
        removeHoverFunction: function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.hoverFunctions, f);
        },
        addUnHoverFunction: function(f) {
          this._validateCallback(f);
          this.unHoverFunctions.push(f);
        },
        removeUnHoverFunction: function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.unHoverFunctions, f);
        },
        addClickFunction: function(f) {
          this._validateCallback(f);
          this.clickFunctions.push(f);
        },
        removeClickFunction: function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.clickFunctions, f);
        },
        addMoveFunction: function(f) {
          this._validateCallback(f);
          this.moveFunctions.push(f);
        },
        removeMoveFunction: function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.moveFunctions, f);
        },
        addDownFunction: function(f) {
          this._validateCallback(f);
          this.downFunctions.push(f);
        },
        removeDownFunction: function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.downFunctions, f);
        },
        addUpFunction: function(f) {
          this._validateCallback(f);
          this.upFunctions.push(f);
        },
        removeUpFunction: function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.upFunctions, f);
        },
        _removeItemOnce: function(arr, value) {
          var index = arr.indexOf(value);
          if (index > -1)
            arr.splice(index, 1);
          return arr;
        },
        _validateCallback: function(f) {
          if (typeof f !== "function") {
            throw new TypeError(this.object.name + ".cursor-target: Argument needs to be a function");
          }
        }
      });
    }
  });

  // js/pp/pp.js
  var require_pp = __commonJS({
    "js/pp/pp.js"() {
      PP = {};
    }
  });

  // node_modules/howler/dist/howler.js
  var require_howler = __commonJS({
    "node_modules/howler/dist/howler.js"(exports) {
      (function() {
        "use strict";
        var HowlerGlobal2 = function() {
          this.init();
        };
        HowlerGlobal2.prototype = {
          init: function() {
            var self = this || Howler5;
            self._counter = 1e3;
            self._html5AudioPool = [];
            self.html5PoolSize = 10;
            self._codecs = {};
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = "canplaythrough";
            self._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null;
            self.autoUnlock = true;
            self._setup();
            return self;
          },
          volume: function(vol) {
            var self = this || Howler5;
            vol = parseFloat(vol);
            if (!self.ctx) {
              setupAudioContext();
            }
            if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
              self._volume = vol;
              if (self._muted) {
                return self;
              }
              if (self.usingWebAudio) {
                self.masterGain.gain.setValueAtTime(vol, Howler5.ctx.currentTime);
              }
              for (var i = 0; i < self._howls.length; i++) {
                if (!self._howls[i]._webAudio) {
                  var ids = self._howls[i]._getSoundIds();
                  for (var j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]);
                    if (sound && sound._node) {
                      sound._node.volume = sound._volume * vol;
                    }
                  }
                }
              }
              return self;
            }
            return self._volume;
          },
          mute: function(muted) {
            var self = this || Howler5;
            if (!self.ctx) {
              setupAudioContext();
            }
            self._muted = muted;
            if (self.usingWebAudio) {
              self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler5.ctx.currentTime);
            }
            for (var i = 0; i < self._howls.length; i++) {
              if (!self._howls[i]._webAudio) {
                var ids = self._howls[i]._getSoundIds();
                for (var j = 0; j < ids.length; j++) {
                  var sound = self._howls[i]._soundById(ids[j]);
                  if (sound && sound._node) {
                    sound._node.muted = muted ? true : sound._muted;
                  }
                }
              }
            }
            return self;
          },
          stop: function() {
            var self = this || Howler5;
            for (var i = 0; i < self._howls.length; i++) {
              self._howls[i].stop();
            }
            return self;
          },
          unload: function() {
            var self = this || Howler5;
            for (var i = self._howls.length - 1; i >= 0; i--) {
              self._howls[i].unload();
            }
            if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== "undefined") {
              self.ctx.close();
              self.ctx = null;
              setupAudioContext();
            }
            return self;
          },
          codecs: function(ext) {
            return (this || Howler5)._codecs[ext.replace(/^x-/, "")];
          },
          _setup: function() {
            var self = this || Howler5;
            self.state = self.ctx ? self.ctx.state || "suspended" : "suspended";
            self._autoSuspend();
            if (!self.usingWebAudio) {
              if (typeof Audio !== "undefined") {
                try {
                  var test = new Audio();
                  if (typeof test.oncanplaythrough === "undefined") {
                    self._canPlayEvent = "canplay";
                  }
                } catch (e) {
                  self.noAudio = true;
                }
              } else {
                self.noAudio = true;
              }
            }
            try {
              var test = new Audio();
              if (test.muted) {
                self.noAudio = true;
              }
            } catch (e) {
            }
            if (!self.noAudio) {
              self._setupCodecs();
            }
            return self;
          },
          _setupCodecs: function() {
            var self = this || Howler5;
            var audioTest = null;
            try {
              audioTest = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (err) {
              return self;
            }
            if (!audioTest || typeof audioTest.canPlayType !== "function") {
              return self;
            }
            var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "");
            var ua = self._navigator ? self._navigator.userAgent : "";
            var checkOpera = ua.match(/OPR\/([0-6].)/g);
            var isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33;
            var checkSafari = ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1;
            var safariVersion = ua.match(/Version\/(.*?) /);
            var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
            self._codecs = {
              mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType("audio/mp3;").replace(/^no$/, ""))),
              mpeg: !!mpegTest,
              opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
              ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
              oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
              wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType("audio/wav")).replace(/^no$/, ""),
              aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
              m4b: !!(audioTest.canPlayType("audio/x-m4b;") || audioTest.canPlayType("audio/m4b;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
              mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
              weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
              webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
              dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
              flac: !!(audioTest.canPlayType("audio/x-flac;") || audioTest.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return self;
          },
          _unlockAudio: function() {
            var self = this || Howler5;
            if (self._audioUnlocked || !self.ctx) {
              return;
            }
            self._audioUnlocked = false;
            self.autoUnlock = false;
            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
              self._mobileUnloaded = true;
              self.unload();
            }
            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
            var unlock = function(e) {
              while (self._html5AudioPool.length < self.html5PoolSize) {
                try {
                  var audioNode = new Audio();
                  audioNode._unlocked = true;
                  self._releaseHtml5Audio(audioNode);
                } catch (e2) {
                  self.noAudio = true;
                  break;
                }
              }
              for (var i = 0; i < self._howls.length; i++) {
                if (!self._howls[i]._webAudio) {
                  var ids = self._howls[i]._getSoundIds();
                  for (var j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]);
                    if (sound && sound._node && !sound._node._unlocked) {
                      sound._node._unlocked = true;
                      sound._node.load();
                    }
                  }
                }
              }
              self._autoResume();
              var source = self.ctx.createBufferSource();
              source.buffer = self._scratchBuffer;
              source.connect(self.ctx.destination);
              if (typeof source.start === "undefined") {
                source.noteOn(0);
              } else {
                source.start(0);
              }
              if (typeof self.ctx.resume === "function") {
                self.ctx.resume();
              }
              source.onended = function() {
                source.disconnect(0);
                self._audioUnlocked = true;
                document.removeEventListener("touchstart", unlock, true);
                document.removeEventListener("touchend", unlock, true);
                document.removeEventListener("click", unlock, true);
                document.removeEventListener("keydown", unlock, true);
                for (var i2 = 0; i2 < self._howls.length; i2++) {
                  self._howls[i2]._emit("unlock");
                }
              };
            };
            document.addEventListener("touchstart", unlock, true);
            document.addEventListener("touchend", unlock, true);
            document.addEventListener("click", unlock, true);
            document.addEventListener("keydown", unlock, true);
            return self;
          },
          _obtainHtml5Audio: function() {
            var self = this || Howler5;
            if (self._html5AudioPool.length) {
              return self._html5AudioPool.pop();
            }
            var testPlay = new Audio().play();
            if (testPlay && typeof Promise !== "undefined" && (testPlay instanceof Promise || typeof testPlay.then === "function")) {
              testPlay.catch(function() {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
              });
            }
            return new Audio();
          },
          _releaseHtml5Audio: function(audio) {
            var self = this || Howler5;
            if (audio._unlocked) {
              self._html5AudioPool.push(audio);
            }
            return self;
          },
          _autoSuspend: function() {
            var self = this;
            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === "undefined" || !Howler5.usingWebAudio) {
              return;
            }
            for (var i = 0; i < self._howls.length; i++) {
              if (self._howls[i]._webAudio) {
                for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                  if (!self._howls[i]._sounds[j]._paused) {
                    return self;
                  }
                }
              }
            }
            if (self._suspendTimer) {
              clearTimeout(self._suspendTimer);
            }
            self._suspendTimer = setTimeout(function() {
              if (!self.autoSuspend) {
                return;
              }
              self._suspendTimer = null;
              self.state = "suspending";
              var handleSuspension = function() {
                self.state = "suspended";
                if (self._resumeAfterSuspend) {
                  delete self._resumeAfterSuspend;
                  self._autoResume();
                }
              };
              self.ctx.suspend().then(handleSuspension, handleSuspension);
            }, 3e4);
            return self;
          },
          _autoResume: function() {
            var self = this;
            if (!self.ctx || typeof self.ctx.resume === "undefined" || !Howler5.usingWebAudio) {
              return;
            }
            if (self.state === "running" && self.ctx.state !== "interrupted" && self._suspendTimer) {
              clearTimeout(self._suspendTimer);
              self._suspendTimer = null;
            } else if (self.state === "suspended" || self.state === "running" && self.ctx.state === "interrupted") {
              self.ctx.resume().then(function() {
                self.state = "running";
                for (var i = 0; i < self._howls.length; i++) {
                  self._howls[i]._emit("resume");
                }
              });
              if (self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
              }
            } else if (self.state === "suspending") {
              self._resumeAfterSuspend = true;
            }
            return self;
          }
        };
        var Howler5 = new HowlerGlobal2();
        var Howl2 = function(o) {
          var self = this;
          if (!o.src || o.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
          }
          self.init(o);
        };
        Howl2.prototype = {
          init: function(o) {
            var self = this;
            if (!Howler5.ctx) {
              setupAudioContext();
            }
            self._autoplay = o.autoplay || false;
            self._format = typeof o.format !== "string" ? o.format : [o.format];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = typeof o.preload === "boolean" || o.preload === "metadata" ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {};
            self._src = typeof o.src !== "string" ? o.src : [o.src];
            self._volume = o.volume !== void 0 ? o.volume : 1;
            self._xhr = {
              method: o.xhr && o.xhr.method ? o.xhr.method : "GET",
              headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
              withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
            };
            self._duration = 0;
            self._state = "unloaded";
            self._sounds = [];
            self._endTimers = {};
            self._queue = [];
            self._playLock = false;
            self._onend = o.onend ? [{ fn: o.onend }] : [];
            self._onfade = o.onfade ? [{ fn: o.onfade }] : [];
            self._onload = o.onload ? [{ fn: o.onload }] : [];
            self._onloaderror = o.onloaderror ? [{ fn: o.onloaderror }] : [];
            self._onplayerror = o.onplayerror ? [{ fn: o.onplayerror }] : [];
            self._onpause = o.onpause ? [{ fn: o.onpause }] : [];
            self._onplay = o.onplay ? [{ fn: o.onplay }] : [];
            self._onstop = o.onstop ? [{ fn: o.onstop }] : [];
            self._onmute = o.onmute ? [{ fn: o.onmute }] : [];
            self._onvolume = o.onvolume ? [{ fn: o.onvolume }] : [];
            self._onrate = o.onrate ? [{ fn: o.onrate }] : [];
            self._onseek = o.onseek ? [{ fn: o.onseek }] : [];
            self._onunlock = o.onunlock ? [{ fn: o.onunlock }] : [];
            self._onresume = [];
            self._webAudio = Howler5.usingWebAudio && !self._html5;
            if (typeof Howler5.ctx !== "undefined" && Howler5.ctx && Howler5.autoUnlock) {
              Howler5._unlockAudio();
            }
            Howler5._howls.push(self);
            if (self._autoplay) {
              self._queue.push({
                event: "play",
                action: function() {
                  self.play();
                }
              });
            }
            if (self._preload && self._preload !== "none") {
              self.load();
            }
            return self;
          },
          load: function() {
            var self = this;
            var url = null;
            if (Howler5.noAudio) {
              self._emit("loaderror", null, "No audio support.");
              return;
            }
            if (typeof self._src === "string") {
              self._src = [self._src];
            }
            for (var i = 0; i < self._src.length; i++) {
              var ext, str7;
              if (self._format && self._format[i]) {
                ext = self._format[i];
              } else {
                str7 = self._src[i];
                if (typeof str7 !== "string") {
                  self._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                ext = /^data:audio\/([^;,]+);/i.exec(str7);
                if (!ext) {
                  ext = /\.([^.]+)$/.exec(str7.split("?", 1)[0]);
                }
                if (ext) {
                  ext = ext[1].toLowerCase();
                }
              }
              if (!ext) {
                console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
              }
              if (ext && Howler5.codecs(ext)) {
                url = self._src[i];
                break;
              }
            }
            if (!url) {
              self._emit("loaderror", null, "No codec support for selected audio sources.");
              return;
            }
            self._src = url;
            self._state = "loading";
            if (window.location.protocol === "https:" && url.slice(0, 5) === "http:") {
              self._html5 = true;
              self._webAudio = false;
            }
            new Sound2(self);
            if (self._webAudio) {
              loadBuffer(self);
            }
            return self;
          },
          play: function(sprite, internal) {
            var self = this;
            var id = null;
            if (typeof sprite === "number") {
              id = sprite;
              sprite = null;
            } else if (typeof sprite === "string" && self._state === "loaded" && !self._sprite[sprite]) {
              return null;
            } else if (typeof sprite === "undefined") {
              sprite = "__default";
              if (!self._playLock) {
                var num = 0;
                for (var i = 0; i < self._sounds.length; i++) {
                  if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                    num++;
                    id = self._sounds[i]._id;
                  }
                }
                if (num === 1) {
                  sprite = null;
                } else {
                  id = null;
                }
              }
            }
            var sound = id ? self._soundById(id) : self._inactiveSound();
            if (!sound) {
              return null;
            }
            if (id && !sprite) {
              sprite = sound._sprite || "__default";
            }
            if (self._state !== "loaded") {
              sound._sprite = sprite;
              sound._ended = false;
              var soundId = sound._id;
              self._queue.push({
                event: "play",
                action: function() {
                  self.play(soundId);
                }
              });
              return soundId;
            }
            if (id && !sound._paused) {
              if (!internal) {
                self._loadQueue("play");
              }
              return sound._id;
            }
            if (self._webAudio) {
              Howler5._autoResume();
            }
            var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1e3);
            var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3 - seek);
            var timeout = duration * 1e3 / Math.abs(sound._rate);
            var start = self._sprite[sprite][0] / 1e3;
            var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3;
            sound._sprite = sprite;
            sound._ended = false;
            var setParams = function() {
              sound._paused = false;
              sound._seek = seek;
              sound._start = start;
              sound._stop = stop;
              sound._loop = !!(sound._loop || self._sprite[sprite][2]);
            };
            if (seek >= stop) {
              self._ended(sound);
              return;
            }
            var node = sound._node;
            if (self._webAudio) {
              var playWebAudio = function() {
                self._playLock = false;
                setParams();
                self._refreshBuffer(sound);
                var vol = sound._muted || self._muted ? 0 : sound._volume;
                node.gain.setValueAtTime(vol, Howler5.ctx.currentTime);
                sound._playStart = Howler5.ctx.currentTime;
                if (typeof node.bufferSource.start === "undefined") {
                  sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                } else {
                  sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                }
                if (timeout !== Infinity) {
                  self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                }
                if (!internal) {
                  setTimeout(function() {
                    self._emit("play", sound._id);
                    self._loadQueue();
                  }, 0);
                }
              };
              if (Howler5.state === "running" && Howler5.ctx.state !== "interrupted") {
                playWebAudio();
              } else {
                self._playLock = true;
                self.once("resume", playWebAudio);
                self._clearTimer(sound._id);
              }
            } else {
              var playHtml5 = function() {
                node.currentTime = seek;
                node.muted = sound._muted || self._muted || Howler5._muted || node.muted;
                node.volume = sound._volume * Howler5.volume();
                node.playbackRate = sound._rate;
                try {
                  var play = node.play();
                  if (play && typeof Promise !== "undefined" && (play instanceof Promise || typeof play.then === "function")) {
                    self._playLock = true;
                    setParams();
                    play.then(function() {
                      self._playLock = false;
                      node._unlocked = true;
                      if (!internal) {
                        self._emit("play", sound._id);
                      } else {
                        self._loadQueue();
                      }
                    }).catch(function() {
                      self._playLock = false;
                      self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                      sound._ended = true;
                      sound._paused = true;
                    });
                  } else if (!internal) {
                    self._playLock = false;
                    setParams();
                    self._emit("play", sound._id);
                  }
                  node.playbackRate = sound._rate;
                  if (node.paused) {
                    self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    return;
                  }
                  if (sprite !== "__default" || sound._loop) {
                    self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                  } else {
                    self._endTimers[sound._id] = function() {
                      self._ended(sound);
                      node.removeEventListener("ended", self._endTimers[sound._id], false);
                    };
                    node.addEventListener("ended", self._endTimers[sound._id], false);
                  }
                } catch (err) {
                  self._emit("playerror", sound._id, err);
                }
              };
              if (node.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                node.src = self._src;
                node.load();
              }
              var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler5._navigator.isCocoonJS;
              if (node.readyState >= 3 || loadedNoReadyState) {
                playHtml5();
              } else {
                self._playLock = true;
                self._state = "loading";
                var listener = function() {
                  self._state = "loaded";
                  playHtml5();
                  node.removeEventListener(Howler5._canPlayEvent, listener, false);
                };
                node.addEventListener(Howler5._canPlayEvent, listener, false);
                self._clearTimer(sound._id);
              }
            }
            return sound._id;
          },
          pause: function(id) {
            var self = this;
            if (self._state !== "loaded" || self._playLock) {
              self._queue.push({
                event: "pause",
                action: function() {
                  self.pause(id);
                }
              });
              return self;
            }
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              self._clearTimer(ids[i]);
              var sound = self._soundById(ids[i]);
              if (sound && !sound._paused) {
                sound._seek = self.seek(ids[i]);
                sound._rateSeek = 0;
                sound._paused = true;
                self._stopFade(ids[i]);
                if (sound._node) {
                  if (self._webAudio) {
                    if (!sound._node.bufferSource) {
                      continue;
                    }
                    if (typeof sound._node.bufferSource.stop === "undefined") {
                      sound._node.bufferSource.noteOff(0);
                    } else {
                      sound._node.bufferSource.stop(0);
                    }
                    self._cleanBuffer(sound._node);
                  } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                    sound._node.pause();
                  }
                }
              }
              if (!arguments[1]) {
                self._emit("pause", sound ? sound._id : null);
              }
            }
            return self;
          },
          stop: function(id, internal) {
            var self = this;
            if (self._state !== "loaded" || self._playLock) {
              self._queue.push({
                event: "stop",
                action: function() {
                  self.stop(id);
                }
              });
              return self;
            }
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              self._clearTimer(ids[i]);
              var sound = self._soundById(ids[i]);
              if (sound) {
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._paused = true;
                sound._ended = true;
                self._stopFade(ids[i]);
                if (sound._node) {
                  if (self._webAudio) {
                    if (sound._node.bufferSource) {
                      if (typeof sound._node.bufferSource.stop === "undefined") {
                        sound._node.bufferSource.noteOff(0);
                      } else {
                        sound._node.bufferSource.stop(0);
                      }
                      self._cleanBuffer(sound._node);
                    }
                  } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                    sound._node.currentTime = sound._start || 0;
                    sound._node.pause();
                    if (sound._node.duration === Infinity) {
                      self._clearSound(sound._node);
                    }
                  }
                }
                if (!internal) {
                  self._emit("stop", sound._id);
                }
              }
            }
            return self;
          },
          mute: function(muted, id) {
            var self = this;
            if (self._state !== "loaded" || self._playLock) {
              self._queue.push({
                event: "mute",
                action: function() {
                  self.mute(muted, id);
                }
              });
              return self;
            }
            if (typeof id === "undefined") {
              if (typeof muted === "boolean") {
                self._muted = muted;
              } else {
                return self._muted;
              }
            }
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              var sound = self._soundById(ids[i]);
              if (sound) {
                sound._muted = muted;
                if (sound._interval) {
                  self._stopFade(sound._id);
                }
                if (self._webAudio && sound._node) {
                  sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler5.ctx.currentTime);
                } else if (sound._node) {
                  sound._node.muted = Howler5._muted ? true : muted;
                }
                self._emit("mute", sound._id);
              }
            }
            return self;
          },
          volume: function() {
            var self = this;
            var args = arguments;
            var vol, id;
            if (args.length === 0) {
              return self._volume;
            } else if (args.length === 1 || args.length === 2 && typeof args[1] === "undefined") {
              var ids = self._getSoundIds();
              var index = ids.indexOf(args[0]);
              if (index >= 0) {
                id = parseInt(args[0], 10);
              } else {
                vol = parseFloat(args[0]);
              }
            } else if (args.length >= 2) {
              vol = parseFloat(args[0]);
              id = parseInt(args[1], 10);
            }
            var sound;
            if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
              if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                  event: "volume",
                  action: function() {
                    self.volume.apply(self, args);
                  }
                });
                return self;
              }
              if (typeof id === "undefined") {
                self._volume = vol;
              }
              id = self._getSoundIds(id);
              for (var i = 0; i < id.length; i++) {
                sound = self._soundById(id[i]);
                if (sound) {
                  sound._volume = vol;
                  if (!args[2]) {
                    self._stopFade(id[i]);
                  }
                  if (self._webAudio && sound._node && !sound._muted) {
                    sound._node.gain.setValueAtTime(vol, Howler5.ctx.currentTime);
                  } else if (sound._node && !sound._muted) {
                    sound._node.volume = vol * Howler5.volume();
                  }
                  self._emit("volume", sound._id);
                }
              }
            } else {
              sound = id ? self._soundById(id) : self._sounds[0];
              return sound ? sound._volume : 0;
            }
            return self;
          },
          fade: function(from, to, len5, id) {
            var self = this;
            if (self._state !== "loaded" || self._playLock) {
              self._queue.push({
                event: "fade",
                action: function() {
                  self.fade(from, to, len5, id);
                }
              });
              return self;
            }
            from = Math.min(Math.max(0, parseFloat(from)), 1);
            to = Math.min(Math.max(0, parseFloat(to)), 1);
            len5 = parseFloat(len5);
            self.volume(from, id);
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              var sound = self._soundById(ids[i]);
              if (sound) {
                if (!id) {
                  self._stopFade(ids[i]);
                }
                if (self._webAudio && !sound._muted) {
                  var currentTime = Howler5.ctx.currentTime;
                  var end = currentTime + len5 / 1e3;
                  sound._volume = from;
                  sound._node.gain.setValueAtTime(from, currentTime);
                  sound._node.gain.linearRampToValueAtTime(to, end);
                }
                self._startFadeInterval(sound, from, to, len5, ids[i], typeof id === "undefined");
              }
            }
            return self;
          },
          _startFadeInterval: function(sound, from, to, len5, id, isGroup) {
            var self = this;
            var vol = from;
            var diff = to - from;
            var steps = Math.abs(diff / 0.01);
            var stepLen = Math.max(4, steps > 0 ? len5 / steps : len5);
            var lastTick = Date.now();
            sound._fadeTo = to;
            sound._interval = setInterval(function() {
              var tick = (Date.now() - lastTick) / len5;
              lastTick = Date.now();
              vol += diff * tick;
              vol = Math.round(vol * 100) / 100;
              if (diff < 0) {
                vol = Math.max(to, vol);
              } else {
                vol = Math.min(to, vol);
              }
              if (self._webAudio) {
                sound._volume = vol;
              } else {
                self.volume(vol, sound._id, true);
              }
              if (isGroup) {
                self._volume = vol;
              }
              if (to < from && vol <= to || to > from && vol >= to) {
                clearInterval(sound._interval);
                sound._interval = null;
                sound._fadeTo = null;
                self.volume(to, sound._id);
                self._emit("fade", sound._id);
              }
            }, stepLen);
          },
          _stopFade: function(id) {
            var self = this;
            var sound = self._soundById(id);
            if (sound && sound._interval) {
              if (self._webAudio) {
                sound._node.gain.cancelScheduledValues(Howler5.ctx.currentTime);
              }
              clearInterval(sound._interval);
              sound._interval = null;
              self.volume(sound._fadeTo, id);
              sound._fadeTo = null;
              self._emit("fade", id);
            }
            return self;
          },
          loop: function() {
            var self = this;
            var args = arguments;
            var loop, id, sound;
            if (args.length === 0) {
              return self._loop;
            } else if (args.length === 1) {
              if (typeof args[0] === "boolean") {
                loop = args[0];
                self._loop = loop;
              } else {
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._loop : false;
              }
            } else if (args.length === 2) {
              loop = args[0];
              id = parseInt(args[1], 10);
            }
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
              sound = self._soundById(ids[i]);
              if (sound) {
                sound._loop = loop;
                if (self._webAudio && sound._node && sound._node.bufferSource) {
                  sound._node.bufferSource.loop = loop;
                  if (loop) {
                    sound._node.bufferSource.loopStart = sound._start || 0;
                    sound._node.bufferSource.loopEnd = sound._stop;
                    if (self.playing(ids[i])) {
                      self.pause(ids[i], true);
                      self.play(ids[i], true);
                    }
                  }
                }
              }
            }
            return self;
          },
          rate: function() {
            var self = this;
            var args = arguments;
            var rate, id;
            if (args.length === 0) {
              id = self._sounds[0]._id;
            } else if (args.length === 1) {
              var ids = self._getSoundIds();
              var index = ids.indexOf(args[0]);
              if (index >= 0) {
                id = parseInt(args[0], 10);
              } else {
                rate = parseFloat(args[0]);
              }
            } else if (args.length === 2) {
              rate = parseFloat(args[0]);
              id = parseInt(args[1], 10);
            }
            var sound;
            if (typeof rate === "number") {
              if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                  event: "rate",
                  action: function() {
                    self.rate.apply(self, args);
                  }
                });
                return self;
              }
              if (typeof id === "undefined") {
                self._rate = rate;
              }
              id = self._getSoundIds(id);
              for (var i = 0; i < id.length; i++) {
                sound = self._soundById(id[i]);
                if (sound) {
                  if (self.playing(id[i])) {
                    sound._rateSeek = self.seek(id[i]);
                    sound._playStart = self._webAudio ? Howler5.ctx.currentTime : sound._playStart;
                  }
                  sound._rate = rate;
                  if (self._webAudio && sound._node && sound._node.bufferSource) {
                    sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler5.ctx.currentTime);
                  } else if (sound._node) {
                    sound._node.playbackRate = rate;
                  }
                  var seek = self.seek(id[i]);
                  var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1e3 - seek;
                  var timeout = duration * 1e3 / Math.abs(sound._rate);
                  if (self._endTimers[id[i]] || !sound._paused) {
                    self._clearTimer(id[i]);
                    self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                  }
                  self._emit("rate", sound._id);
                }
              }
            } else {
              sound = self._soundById(id);
              return sound ? sound._rate : self._rate;
            }
            return self;
          },
          seek: function() {
            var self = this;
            var args = arguments;
            var seek, id;
            if (args.length === 0) {
              if (self._sounds.length) {
                id = self._sounds[0]._id;
              }
            } else if (args.length === 1) {
              var ids = self._getSoundIds();
              var index = ids.indexOf(args[0]);
              if (index >= 0) {
                id = parseInt(args[0], 10);
              } else if (self._sounds.length) {
                id = self._sounds[0]._id;
                seek = parseFloat(args[0]);
              }
            } else if (args.length === 2) {
              seek = parseFloat(args[0]);
              id = parseInt(args[1], 10);
            }
            if (typeof id === "undefined") {
              return 0;
            }
            if (typeof seek === "number" && (self._state !== "loaded" || self._playLock)) {
              self._queue.push({
                event: "seek",
                action: function() {
                  self.seek.apply(self, args);
                }
              });
              return self;
            }
            var sound = self._soundById(id);
            if (sound) {
              if (typeof seek === "number" && seek >= 0) {
                var playing = self.playing(id);
                if (playing) {
                  self.pause(id, true);
                }
                sound._seek = seek;
                sound._ended = false;
                self._clearTimer(id);
                if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
                  sound._node.currentTime = seek;
                }
                var seekAndEmit = function() {
                  if (playing) {
                    self.play(id, true);
                  }
                  self._emit("seek", id);
                };
                if (playing && !self._webAudio) {
                  var emitSeek = function() {
                    if (!self._playLock) {
                      seekAndEmit();
                    } else {
                      setTimeout(emitSeek, 0);
                    }
                  };
                  setTimeout(emitSeek, 0);
                } else {
                  seekAndEmit();
                }
              } else {
                if (self._webAudio) {
                  var realTime = self.playing(id) ? Howler5.ctx.currentTime - sound._playStart : 0;
                  var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                  return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                } else {
                  return sound._node.currentTime;
                }
              }
            }
            return self;
          },
          playing: function(id) {
            var self = this;
            if (typeof id === "number") {
              var sound = self._soundById(id);
              return sound ? !sound._paused : false;
            }
            for (var i = 0; i < self._sounds.length; i++) {
              if (!self._sounds[i]._paused) {
                return true;
              }
            }
            return false;
          },
          duration: function(id) {
            var self = this;
            var duration = self._duration;
            var sound = self._soundById(id);
            if (sound) {
              duration = self._sprite[sound._sprite][1] / 1e3;
            }
            return duration;
          },
          state: function() {
            return this._state;
          },
          unload: function() {
            var self = this;
            var sounds = self._sounds;
            for (var i = 0; i < sounds.length; i++) {
              if (!sounds[i]._paused) {
                self.stop(sounds[i]._id);
              }
              if (!self._webAudio) {
                self._clearSound(sounds[i]._node);
                sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, false);
                sounds[i]._node.removeEventListener(Howler5._canPlayEvent, sounds[i]._loadFn, false);
                sounds[i]._node.removeEventListener("ended", sounds[i]._endFn, false);
                Howler5._releaseHtml5Audio(sounds[i]._node);
              }
              delete sounds[i]._node;
              self._clearTimer(sounds[i]._id);
            }
            var index = Howler5._howls.indexOf(self);
            if (index >= 0) {
              Howler5._howls.splice(index, 1);
            }
            var remCache = true;
            for (i = 0; i < Howler5._howls.length; i++) {
              if (Howler5._howls[i]._src === self._src || self._src.indexOf(Howler5._howls[i]._src) >= 0) {
                remCache = false;
                break;
              }
            }
            if (cache && remCache) {
              delete cache[self._src];
            }
            Howler5.noAudio = false;
            self._state = "unloaded";
            self._sounds = [];
            self = null;
            return null;
          },
          on: function(event, fn, id, once) {
            var self = this;
            var events = self["_on" + event];
            if (typeof fn === "function") {
              events.push(once ? { id, fn, once } : { id, fn });
            }
            return self;
          },
          off: function(event, fn, id) {
            var self = this;
            var events = self["_on" + event];
            var i = 0;
            if (typeof fn === "number") {
              id = fn;
              fn = null;
            }
            if (fn || id) {
              for (i = 0; i < events.length; i++) {
                var isId = id === events[i].id;
                if (fn === events[i].fn && isId || !fn && isId) {
                  events.splice(i, 1);
                  break;
                }
              }
            } else if (event) {
              self["_on" + event] = [];
            } else {
              var keys = Object.keys(self);
              for (i = 0; i < keys.length; i++) {
                if (keys[i].indexOf("_on") === 0 && Array.isArray(self[keys[i]])) {
                  self[keys[i]] = [];
                }
              }
            }
            return self;
          },
          once: function(event, fn, id) {
            var self = this;
            self.on(event, fn, id, 1);
            return self;
          },
          _emit: function(event, id, msg) {
            var self = this;
            var events = self["_on" + event];
            for (var i = events.length - 1; i >= 0; i--) {
              if (!events[i].id || events[i].id === id || event === "load") {
                setTimeout(function(fn) {
                  fn.call(this, id, msg);
                }.bind(self, events[i].fn), 0);
                if (events[i].once) {
                  self.off(event, events[i].fn, events[i].id);
                }
              }
            }
            self._loadQueue(event);
            return self;
          },
          _loadQueue: function(event) {
            var self = this;
            if (self._queue.length > 0) {
              var task = self._queue[0];
              if (task.event === event) {
                self._queue.shift();
                self._loadQueue();
              }
              if (!event) {
                task.action();
              }
            }
            return self;
          },
          _ended: function(sound) {
            var self = this;
            var sprite = sound._sprite;
            if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
              setTimeout(self._ended.bind(self, sound), 100);
              return self;
            }
            var loop = !!(sound._loop || self._sprite[sprite][2]);
            self._emit("end", sound._id);
            if (!self._webAudio && loop) {
              self.stop(sound._id, true).play(sound._id);
            }
            if (self._webAudio && loop) {
              self._emit("play", sound._id);
              sound._seek = sound._start || 0;
              sound._rateSeek = 0;
              sound._playStart = Howler5.ctx.currentTime;
              var timeout = (sound._stop - sound._start) * 1e3 / Math.abs(sound._rate);
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }
            if (self._webAudio && !loop) {
              sound._paused = true;
              sound._ended = true;
              sound._seek = sound._start || 0;
              sound._rateSeek = 0;
              self._clearTimer(sound._id);
              self._cleanBuffer(sound._node);
              Howler5._autoSuspend();
            }
            if (!self._webAudio && !loop) {
              self.stop(sound._id, true);
            }
            return self;
          },
          _clearTimer: function(id) {
            var self = this;
            if (self._endTimers[id]) {
              if (typeof self._endTimers[id] !== "function") {
                clearTimeout(self._endTimers[id]);
              } else {
                var sound = self._soundById(id);
                if (sound && sound._node) {
                  sound._node.removeEventListener("ended", self._endTimers[id], false);
                }
              }
              delete self._endTimers[id];
            }
            return self;
          },
          _soundById: function(id) {
            var self = this;
            for (var i = 0; i < self._sounds.length; i++) {
              if (id === self._sounds[i]._id) {
                return self._sounds[i];
              }
            }
            return null;
          },
          _inactiveSound: function() {
            var self = this;
            self._drain();
            for (var i = 0; i < self._sounds.length; i++) {
              if (self._sounds[i]._ended) {
                return self._sounds[i].reset();
              }
            }
            return new Sound2(self);
          },
          _drain: function() {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0;
            if (self._sounds.length < limit) {
              return;
            }
            for (i = 0; i < self._sounds.length; i++) {
              if (self._sounds[i]._ended) {
                cnt++;
              }
            }
            for (i = self._sounds.length - 1; i >= 0; i--) {
              if (cnt <= limit) {
                return;
              }
              if (self._sounds[i]._ended) {
                if (self._webAudio && self._sounds[i]._node) {
                  self._sounds[i]._node.disconnect(0);
                }
                self._sounds.splice(i, 1);
                cnt--;
              }
            }
          },
          _getSoundIds: function(id) {
            var self = this;
            if (typeof id === "undefined") {
              var ids = [];
              for (var i = 0; i < self._sounds.length; i++) {
                ids.push(self._sounds[i]._id);
              }
              return ids;
            } else {
              return [id];
            }
          },
          _refreshBuffer: function(sound) {
            var self = this;
            sound._node.bufferSource = Howler5.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src];
            if (sound._panner) {
              sound._node.bufferSource.connect(sound._panner);
            } else {
              sound._node.bufferSource.connect(sound._node);
            }
            sound._node.bufferSource.loop = sound._loop;
            if (sound._loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop || 0;
            }
            sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler5.ctx.currentTime);
            return self;
          },
          _cleanBuffer: function(node) {
            var self = this;
            var isIOS = Howler5._navigator && Howler5._navigator.vendor.indexOf("Apple") >= 0;
            if (Howler5._scratchBuffer && node.bufferSource) {
              node.bufferSource.onended = null;
              node.bufferSource.disconnect(0);
              if (isIOS) {
                try {
                  node.bufferSource.buffer = Howler5._scratchBuffer;
                } catch (e) {
                }
              }
            }
            node.bufferSource = null;
            return self;
          },
          _clearSound: function(node) {
            var checkIE = /MSIE |Trident\//.test(Howler5._navigator && Howler5._navigator.userAgent);
            if (!checkIE) {
              node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
            }
          }
        };
        var Sound2 = function(howl) {
          this._parent = howl;
          this.init();
        };
        Sound2.prototype = {
          init: function() {
            var self = this;
            var parent = self._parent;
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = "__default";
            self._id = ++Howler5._counter;
            parent._sounds.push(self);
            self.create();
            return self;
          },
          create: function() {
            var self = this;
            var parent = self._parent;
            var volume = Howler5._muted || self._muted || self._parent._muted ? 0 : self._volume;
            if (parent._webAudio) {
              self._node = typeof Howler5.ctx.createGain === "undefined" ? Howler5.ctx.createGainNode() : Howler5.ctx.createGain();
              self._node.gain.setValueAtTime(volume, Howler5.ctx.currentTime);
              self._node.paused = true;
              self._node.connect(Howler5.masterGain);
            } else if (!Howler5.noAudio) {
              self._node = Howler5._obtainHtml5Audio();
              self._errorFn = self._errorListener.bind(self);
              self._node.addEventListener("error", self._errorFn, false);
              self._loadFn = self._loadListener.bind(self);
              self._node.addEventListener(Howler5._canPlayEvent, self._loadFn, false);
              self._endFn = self._endListener.bind(self);
              self._node.addEventListener("ended", self._endFn, false);
              self._node.src = parent._src;
              self._node.preload = parent._preload === true ? "auto" : parent._preload;
              self._node.volume = volume * Howler5.volume();
              self._node.load();
            }
            return self;
          },
          reset: function() {
            var self = this;
            var parent = self._parent;
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = "__default";
            self._id = ++Howler5._counter;
            return self;
          },
          _errorListener: function() {
            var self = this;
            self._parent._emit("loaderror", self._id, self._node.error ? self._node.error.code : 0);
            self._node.removeEventListener("error", self._errorFn, false);
          },
          _loadListener: function() {
            var self = this;
            var parent = self._parent;
            parent._duration = Math.ceil(self._node.duration * 10) / 10;
            if (Object.keys(parent._sprite).length === 0) {
              parent._sprite = { __default: [0, parent._duration * 1e3] };
            }
            if (parent._state !== "loaded") {
              parent._state = "loaded";
              parent._emit("load");
              parent._loadQueue();
            }
            self._node.removeEventListener(Howler5._canPlayEvent, self._loadFn, false);
          },
          _endListener: function() {
            var self = this;
            var parent = self._parent;
            if (parent._duration === Infinity) {
              parent._duration = Math.ceil(self._node.duration * 10) / 10;
              if (parent._sprite.__default[1] === Infinity) {
                parent._sprite.__default[1] = parent._duration * 1e3;
              }
              parent._ended(self);
            }
            self._node.removeEventListener("ended", self._endFn, false);
          }
        };
        var cache = {};
        var loadBuffer = function(self) {
          var url = self._src;
          if (cache[url]) {
            self._duration = cache[url].duration;
            loadSound(self);
            return;
          }
          if (/^data:[^;]+;base64,/.test(url)) {
            var data = atob(url.split(",")[1]);
            var dataView = new Uint8Array(data.length);
            for (var i = 0; i < data.length; ++i) {
              dataView[i] = data.charCodeAt(i);
            }
            decodeAudioData(dataView.buffer, self);
          } else {
            var xhr = new XMLHttpRequest();
            xhr.open(self._xhr.method, url, true);
            xhr.withCredentials = self._xhr.withCredentials;
            xhr.responseType = "arraybuffer";
            if (self._xhr.headers) {
              Object.keys(self._xhr.headers).forEach(function(key) {
                xhr.setRequestHeader(key, self._xhr.headers[key]);
              });
            }
            xhr.onload = function() {
              var code = (xhr.status + "")[0];
              if (code !== "0" && code !== "2" && code !== "3") {
                self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".");
                return;
              }
              decodeAudioData(xhr.response, self);
            };
            xhr.onerror = function() {
              if (self._webAudio) {
                self._html5 = true;
                self._webAudio = false;
                self._sounds = [];
                delete cache[url];
                self.load();
              }
            };
            safeXhrSend(xhr);
          }
        };
        var safeXhrSend = function(xhr) {
          try {
            xhr.send();
          } catch (e) {
            xhr.onerror();
          }
        };
        var decodeAudioData = function(arraybuffer, self) {
          var error = function() {
            self._emit("loaderror", null, "Decoding audio data failed.");
          };
          var success = function(buffer) {
            if (buffer && self._sounds.length > 0) {
              cache[self._src] = buffer;
              loadSound(self, buffer);
            } else {
              error();
            }
          };
          if (typeof Promise !== "undefined" && Howler5.ctx.decodeAudioData.length === 1) {
            Howler5.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
          } else {
            Howler5.ctx.decodeAudioData(arraybuffer, success, error);
          }
        };
        var loadSound = function(self, buffer) {
          if (buffer && !self._duration) {
            self._duration = buffer.duration;
          }
          if (Object.keys(self._sprite).length === 0) {
            self._sprite = { __default: [0, self._duration * 1e3] };
          }
          if (self._state !== "loaded") {
            self._state = "loaded";
            self._emit("load");
            self._loadQueue();
          }
        };
        var setupAudioContext = function() {
          if (!Howler5.usingWebAudio) {
            return;
          }
          try {
            if (typeof AudioContext !== "undefined") {
              Howler5.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== "undefined") {
              Howler5.ctx = new webkitAudioContext();
            } else {
              Howler5.usingWebAudio = false;
            }
          } catch (e) {
            Howler5.usingWebAudio = false;
          }
          if (!Howler5.ctx) {
            Howler5.usingWebAudio = false;
          }
          var iOS = /iP(hone|od|ad)/.test(Howler5._navigator && Howler5._navigator.platform);
          var appVersion = Howler5._navigator && Howler5._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          var version = appVersion ? parseInt(appVersion[1], 10) : null;
          if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler5._navigator && Howler5._navigator.userAgent.toLowerCase());
            if (Howler5._navigator && !safari) {
              Howler5.usingWebAudio = false;
            }
          }
          if (Howler5.usingWebAudio) {
            Howler5.masterGain = typeof Howler5.ctx.createGain === "undefined" ? Howler5.ctx.createGainNode() : Howler5.ctx.createGain();
            Howler5.masterGain.gain.setValueAtTime(Howler5._muted ? 0 : Howler5._volume, Howler5.ctx.currentTime);
            Howler5.masterGain.connect(Howler5.ctx.destination);
          }
          Howler5._setup();
        };
        if (typeof define === "function" && define.amd) {
          define([], function() {
            return {
              Howler: Howler5,
              Howl: Howl2
            };
          });
        }
        if (typeof exports !== "undefined") {
          exports.Howler = Howler5;
          exports.Howl = Howl2;
        }
        if (typeof global !== "undefined") {
          global.HowlerGlobal = HowlerGlobal2;
          global.Howler = Howler5;
          global.Howl = Howl2;
          global.Sound = Sound2;
        } else if (typeof window !== "undefined") {
          window.HowlerGlobal = HowlerGlobal2;
          window.Howler = Howler5;
          window.Howl = Howl2;
          window.Sound = Sound2;
        }
      })();
      (function() {
        "use strict";
        HowlerGlobal.prototype._pos = [0, 0, 0];
        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
        HowlerGlobal.prototype.stereo = function(pan) {
          var self = this;
          if (!self.ctx || !self.ctx.listener) {
            return self;
          }
          for (var i = self._howls.length - 1; i >= 0; i--) {
            self._howls[i].stereo(pan);
          }
          return self;
        };
        HowlerGlobal.prototype.pos = function(x, y, z) {
          var self = this;
          if (!self.ctx || !self.ctx.listener) {
            return self;
          }
          y = typeof y !== "number" ? self._pos[1] : y;
          z = typeof z !== "number" ? self._pos[2] : z;
          if (typeof x === "number") {
            self._pos = [x, y, z];
            if (typeof self.ctx.listener.positionX !== "undefined") {
              self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
              self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
              self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
            } else {
              self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
            }
          } else {
            return self._pos;
          }
          return self;
        };
        HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
          var self = this;
          if (!self.ctx || !self.ctx.listener) {
            return self;
          }
          var or = self._orientation;
          y = typeof y !== "number" ? or[1] : y;
          z = typeof z !== "number" ? or[2] : z;
          xUp = typeof xUp !== "number" ? or[3] : xUp;
          yUp = typeof yUp !== "number" ? or[4] : yUp;
          zUp = typeof zUp !== "number" ? or[5] : zUp;
          if (typeof x === "number") {
            self._orientation = [x, y, z, xUp, yUp, zUp];
            if (typeof self.ctx.listener.forwardX !== "undefined") {
              self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
            } else {
              self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
            }
          } else {
            return or;
          }
          return self;
        };
        Howl.prototype.init = function(_super) {
          return function(o) {
            var self = this;
            self._orientation = o.orientation || [1, 0, 0];
            self._stereo = o.stereo || null;
            self._pos = o.pos || null;
            self._pannerAttr = {
              coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : 360,
              coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : 360,
              coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : 0,
              distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : "inverse",
              maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : 1e4,
              panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : "HRTF",
              refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : 1,
              rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : 1
            };
            self._onstereo = o.onstereo ? [{ fn: o.onstereo }] : [];
            self._onpos = o.onpos ? [{ fn: o.onpos }] : [];
            self._onorientation = o.onorientation ? [{ fn: o.onorientation }] : [];
            return _super.call(this, o);
          };
        }(Howl.prototype.init);
        Howl.prototype.stereo = function(pan, id) {
          var self = this;
          if (!self._webAudio) {
            return self;
          }
          if (self._state !== "loaded") {
            self._queue.push({
              event: "stereo",
              action: function() {
                self.stereo(pan, id);
              }
            });
            return self;
          }
          var pannerType = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
          if (typeof id === "undefined") {
            if (typeof pan === "number") {
              self._stereo = pan;
              self._pos = [pan, 0, 0];
            } else {
              return self._stereo;
            }
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);
            if (sound) {
              if (typeof pan === "number") {
                sound._stereo = pan;
                sound._pos = [pan, 0, 0];
                if (sound._node) {
                  sound._pannerAttr.panningModel = "equalpower";
                  if (!sound._panner || !sound._panner.pan) {
                    setupPanner(sound, pannerType);
                  }
                  if (pannerType === "spatial") {
                    if (typeof sound._panner.positionX !== "undefined") {
                      sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                      sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                      sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                    } else {
                      sound._panner.setPosition(pan, 0, 0);
                    }
                  } else {
                    sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                  }
                }
                self._emit("stereo", sound._id);
              } else {
                return sound._stereo;
              }
            }
          }
          return self;
        };
        Howl.prototype.pos = function(x, y, z, id) {
          var self = this;
          if (!self._webAudio) {
            return self;
          }
          if (self._state !== "loaded") {
            self._queue.push({
              event: "pos",
              action: function() {
                self.pos(x, y, z, id);
              }
            });
            return self;
          }
          y = typeof y !== "number" ? 0 : y;
          z = typeof z !== "number" ? -0.5 : z;
          if (typeof id === "undefined") {
            if (typeof x === "number") {
              self._pos = [x, y, z];
            } else {
              return self._pos;
            }
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);
            if (sound) {
              if (typeof x === "number") {
                sound._pos = [x, y, z];
                if (sound._node) {
                  if (!sound._panner || sound._panner.pan) {
                    setupPanner(sound, "spatial");
                  }
                  if (typeof sound._panner.positionX !== "undefined") {
                    sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                    sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                    sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                  } else {
                    sound._panner.setPosition(x, y, z);
                  }
                }
                self._emit("pos", sound._id);
              } else {
                return sound._pos;
              }
            }
          }
          return self;
        };
        Howl.prototype.orientation = function(x, y, z, id) {
          var self = this;
          if (!self._webAudio) {
            return self;
          }
          if (self._state !== "loaded") {
            self._queue.push({
              event: "orientation",
              action: function() {
                self.orientation(x, y, z, id);
              }
            });
            return self;
          }
          y = typeof y !== "number" ? self._orientation[1] : y;
          z = typeof z !== "number" ? self._orientation[2] : z;
          if (typeof id === "undefined") {
            if (typeof x === "number") {
              self._orientation = [x, y, z];
            } else {
              return self._orientation;
            }
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);
            if (sound) {
              if (typeof x === "number") {
                sound._orientation = [x, y, z];
                if (sound._node) {
                  if (!sound._panner) {
                    if (!sound._pos) {
                      sound._pos = self._pos || [0, 0, -0.5];
                    }
                    setupPanner(sound, "spatial");
                  }
                  if (typeof sound._panner.orientationX !== "undefined") {
                    sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                    sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                    sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                  } else {
                    sound._panner.setOrientation(x, y, z);
                  }
                }
                self._emit("orientation", sound._id);
              } else {
                return sound._orientation;
              }
            }
          }
          return self;
        };
        Howl.prototype.pannerAttr = function() {
          var self = this;
          var args = arguments;
          var o, id, sound;
          if (!self._webAudio) {
            return self;
          }
          if (args.length === 0) {
            return self._pannerAttr;
          } else if (args.length === 1) {
            if (typeof args[0] === "object") {
              o = args[0];
              if (typeof id === "undefined") {
                if (!o.pannerAttr) {
                  o.pannerAttr = {
                    coneInnerAngle: o.coneInnerAngle,
                    coneOuterAngle: o.coneOuterAngle,
                    coneOuterGain: o.coneOuterGain,
                    distanceModel: o.distanceModel,
                    maxDistance: o.maxDistance,
                    refDistance: o.refDistance,
                    rolloffFactor: o.rolloffFactor,
                    panningModel: o.panningModel
                  };
                }
                self._pannerAttr = {
                  coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== "undefined" ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                  coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== "undefined" ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                  coneOuterGain: typeof o.pannerAttr.coneOuterGain !== "undefined" ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                  distanceModel: typeof o.pannerAttr.distanceModel !== "undefined" ? o.pannerAttr.distanceModel : self._distanceModel,
                  maxDistance: typeof o.pannerAttr.maxDistance !== "undefined" ? o.pannerAttr.maxDistance : self._maxDistance,
                  refDistance: typeof o.pannerAttr.refDistance !== "undefined" ? o.pannerAttr.refDistance : self._refDistance,
                  rolloffFactor: typeof o.pannerAttr.rolloffFactor !== "undefined" ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                  panningModel: typeof o.pannerAttr.panningModel !== "undefined" ? o.pannerAttr.panningModel : self._panningModel
                };
              }
            } else {
              sound = self._soundById(parseInt(args[0], 10));
              return sound ? sound._pannerAttr : self._pannerAttr;
            }
          } else if (args.length === 2) {
            o = args[0];
            id = parseInt(args[1], 10);
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            sound = self._soundById(ids[i]);
            if (sound) {
              var pa = sound._pannerAttr;
              pa = {
                coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : pa.coneInnerAngle,
                coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : pa.coneOuterAngle,
                coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : pa.coneOuterGain,
                distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : pa.distanceModel,
                maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : pa.maxDistance,
                refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : pa.refDistance,
                rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : pa.rolloffFactor,
                panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : pa.panningModel
              };
              var panner = sound._panner;
              if (panner) {
                panner.coneInnerAngle = pa.coneInnerAngle;
                panner.coneOuterAngle = pa.coneOuterAngle;
                panner.coneOuterGain = pa.coneOuterGain;
                panner.distanceModel = pa.distanceModel;
                panner.maxDistance = pa.maxDistance;
                panner.refDistance = pa.refDistance;
                panner.rolloffFactor = pa.rolloffFactor;
                panner.panningModel = pa.panningModel;
              } else {
                if (!sound._pos) {
                  sound._pos = self._pos || [0, 0, -0.5];
                }
                setupPanner(sound, "spatial");
              }
            }
          }
          return self;
        };
        Sound.prototype.init = function(_super) {
          return function() {
            var self = this;
            var parent = self._parent;
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            _super.call(this);
            if (self._stereo) {
              parent.stereo(self._stereo);
            } else if (self._pos) {
              parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            }
          };
        }(Sound.prototype.init);
        Sound.prototype.reset = function(_super) {
          return function() {
            var self = this;
            var parent = self._parent;
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            if (self._stereo) {
              parent.stereo(self._stereo);
            } else if (self._pos) {
              parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            } else if (self._panner) {
              self._panner.disconnect(0);
              self._panner = void 0;
              parent._refreshBuffer(self);
            }
            return _super.call(this);
          };
        }(Sound.prototype.reset);
        var setupPanner = function(sound, type2) {
          type2 = type2 || "spatial";
          if (type2 === "spatial") {
            sound._panner = Howler.ctx.createPanner();
            sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
            sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
            sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
            sound._panner.distanceModel = sound._pannerAttr.distanceModel;
            sound._panner.maxDistance = sound._pannerAttr.maxDistance;
            sound._panner.refDistance = sound._pannerAttr.refDistance;
            sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
            sound._panner.panningModel = sound._pannerAttr.panningModel;
            if (typeof sound._panner.positionX !== "undefined") {
              sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
            }
            if (typeof sound._panner.orientationX !== "undefined") {
              sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
            }
          } else {
            sound._panner = Howler.ctx.createStereoPanner();
            sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
          }
          sound._panner.connect(sound._node);
          if (!sound._paused) {
            sound._parent.pause(sound._id, true).play(sound._id, true);
          }
        };
      })();
    }
  });

  // js/pp/audio/audio_listener.js
  var audio_listener_exports = {};
  var import_howler;
  var init_audio_listener = __esm({
    "js/pp/audio/audio_listener.js"() {
      import_howler = __toESM(require_howler());
      WL.registerComponent("pp-audio-listener", {
        _mySpatial: { type: WL.Type.Bool, default: true }
      }, {
        init: function() {
          this._myOrigin = new Float32Array(3);
          this._myForward = new Float32Array(3);
          this._myUp = new Float32Array(3);
        },
        update: function() {
          if (!this._mySpatial)
            return;
          this.object.pp_getPosition(this._myOrigin);
          this.object.pp_getForward(this._myForward);
          this.object.pp_getUp(this._myUp);
          import_howler.Howler.pos(this._myOrigin[0], this._myOrigin[1], this._myOrigin[2]);
          import_howler.Howler.orientation(this._myForward[0], this._myForward[1], this._myForward[2], this._myUp[0], this._myUp[1], this._myUp[2]);
        }
      });
    }
  });

  // js/pp/audio/audio_manager_component.js
  var require_audio_manager_component = __commonJS({
    "js/pp/audio/audio_manager_component.js"() {
      WL.registerComponent("pp-audio-manager", {}, {
        init: function() {
          PP.myAudioManager = new PP.AudioManagerClass();
        },
        start: function() {
        },
        update: function(dt) {
        }
      });
      PP.myAudioManager = null;
    }
  });

  // js/pp/audio/audio_manager.js
  var audio_manager_exports = {};
  var import_howler2;
  var init_audio_manager = __esm({
    "js/pp/audio/audio_manager.js"() {
      import_howler2 = __toESM(require_howler());
      PP.AudioManager = class AudioManager {
        constructor() {
          this._myAudioSetupMap = /* @__PURE__ */ new Map();
        }
        createAudioPlayer(audioSetupID) {
          let audioSetup = this.getAudioSetup(audioSetupID);
          if (audioSetup != null) {
            return new PP.AudioPlayer(this.getAudioSetup(audioSetupID));
          }
          return null;
        }
        getAudioSetup(id) {
          return this._myAudioSetupMap.get(id);
        }
        addAudioSetup(id, audioSetup, preload = true) {
          this._myAudioSetupMap.set(id, audioSetup);
          if (preload) {
            this.createAudioPlayer(id);
          }
        }
        removeAudioSetup(id) {
          this._myAudioSetupMap.delete(id);
        }
        setVolume(volume) {
          import_howler2.Howler.volume(volume);
        }
        setMute(mute) {
          import_howler2.Howler.mute(mute);
        }
        stop() {
          import_howler2.Howler.stop();
        }
      };
    }
  });

  // js/pp/audio/audio_player.js
  var require_audio_player = __commonJS({
    "js/pp/audio/audio_player.js"() {
      PP.AudioEvent = {
        END: "end",
        STOP: "stop",
        LOAD: "load",
        LOAD_ERROR: "loaderror",
        PLAY: "play",
        PLAY_ERROR: "playerror",
        PAUSE: "pause",
        MUTE: "mute",
        VOLUME: "volume",
        RATE: "rate",
        SEEK: "seek",
        FADE: "fade",
        UNLOCK: "unlock"
      };
      PP.AudioPlayer = class AudioPlayer {
        constructor(audioSetupOrAudioFilePath) {
          if (typeof audioSetupOrAudioFilePath === "string") {
            this._myAudioSetup = new PP.AudioSetup(audioSetupOrAudioFile);
          } else {
            this._myAudioSetup = audioSetupOrAudioFilePath.clone();
          }
          this._myAudio = new Howl({
            src: [this._myAudioSetup.myAudioFilePath],
            loop: this._myAudioSetup.myLoop,
            volume: this._myAudioSetup.myVolume,
            autoplay: this._myAudioSetup.myAutoplay,
            rate: this._myAudioSetup.myRate,
            pool: this._myAudioSetup.myPool,
            preload: true
          });
          this._myAudio._pannerAttr.refDistance = this._myAudioSetup.myReferenceDistance;
          this._myLastAudioID = null;
          this._myCallbackMap = /* @__PURE__ */ new Map();
          for (let eventKey in PP.AudioEvent) {
            this._myCallbackMap.set(PP.AudioEvent[eventKey], /* @__PURE__ */ new Map());
          }
          this._addListeners();
        }
        play() {
          let audioID = this._myAudio.play();
          if (audioID != null) {
            this._myLastAudioID = audioID;
            this.updatePosition(this._myAudioSetup.myPosition, true);
            this.updatePitch(this._myAudioSetup.myPitch, true);
            this.updateVolume(this._myAudioSetup.myVolume, true);
          }
        }
        stop() {
          this._myAudio.stop();
        }
        pause() {
          this._myAudio.pause();
        }
        resume() {
          this._myAudio.play();
        }
        isPlaying(checkOnlyLast = false) {
          let isPlaying = false;
          if (checkOnlyLast) {
            isPlaying = this._myAudio.playing(this._myLastAudioID);
          } else {
            isPlaying = this._myAudio.playing();
          }
          return isPlaying;
        }
        isLoaded() {
          return this._myAudio.state() == "loaded";
        }
        fade(fromVolume, toVolume, duration, updateOnlyLast = false) {
          this.setVolume(toVolume);
          if (updateOnlyLast) {
            this._myAudio.fade(fromVolume, toVolume, duration * 1e3, this._myLastAudioID);
          } else {
            this._myAudio.fade(fromVolume, toVolume, duration * 1e3);
          }
        }
        updatePosition(position, updateOnlyLast = false) {
          this.setPosition(position);
          if (this._myAudioSetup.mySpatial && position) {
            if (updateOnlyLast) {
              this._myAudio.pos(position[0], position[1], position[2], this._myLastAudioID);
            } else {
              this._myAudio.pos(position[0], position[1], position[2]);
            }
          }
        }
        updatePitch(pitch, updateOnlyLast = false) {
          this.updateRate(pitch, updateOnlyLast);
        }
        updateRate(rate, updateOnlyLast = false) {
          this.setRate(rate);
          if (rate != null) {
            if (updateOnlyLast) {
              this._myAudio.rate(rate, this._myLastAudioID);
            } else {
              this._myAudio.rate(rate);
            }
          }
        }
        updateVolume(volume, updateOnlyLast = false) {
          this.setVolume(volume);
          if (volume != null) {
            if (updateOnlyLast) {
              this._myAudio.volume(volume, this._myLastAudioID);
            } else {
              this._myAudio.volume(volume);
            }
          }
        }
        setSpatial(spatial) {
          this._myAudioSetup.mySpatial = spatial;
        }
        setPosition(position) {
          this._myAudioSetup.myPosition = position;
        }
        setPitch(pitch) {
          this._myAudioSetup.myPitch = pitch;
        }
        setRate(rate) {
          this._myAudioSetup.myRate = rate;
        }
        setVolume(volume) {
          this._myAudioSetup.myVolume = volume;
        }
        getDuration() {
          return this._myAudio.duration();
        }
        getVolume() {
          return this._myAudioSetup.myVolume;
        }
        getPitch() {
          return this._myAudioSetup.myPitch;
        }
        getRate() {
          return this._myAudioSetup.myRate;
        }
        registerAudioEventListener(audioEvent, listenerID, callback) {
          this._myCallbackMap.get(audioEvent).set(listenerID, callback);
        }
        unregisterAudioEventListener(audioEvent, listenerID) {
          this._myCallbackMap.get(audioEvent).delete(listenerID);
        }
        _addListeners() {
          for (let eventKey in PP.AudioEvent) {
            let event = PP.AudioEvent[eventKey];
            this._myAudio.on(event, function(audioID) {
              let callbacks = this._myCallbackMap.get(event);
              for (let callback of callbacks.values()) {
                callback(audioID);
              }
            }.bind(this));
          }
        }
      };
    }
  });

  // js/pp/audio/audio_setup.js
  var require_audio_setup = __commonJS({
    "js/pp/audio/audio_setup.js"() {
      PP.AudioSetup = class AudioSetup {
        constructor(audioFilePath = null) {
          this.myAudioFilePath = audioFilePath ? audioFilePath.slice(0) : null;
          this.myLoop = false;
          this.myAutoplay = false;
          this.myVolume = 1;
          this._myRate = 1;
          this.myPool = 5;
          this.myPosition = null;
          this.mySpatial = true;
          this.myReferenceDistance = 1;
        }
        clone() {
          let audioSetup = new PP.AudioSetup();
          audioSetup.myAudioFilePath = this.myAudioFilePath.slice(0);
          audioSetup.myLoop = this.myLoop;
          audioSetup.myAutoplay = this.myAutoplay;
          audioSetup.myVolume = this.myVolume;
          audioSetup.myPitch = this.myPitch;
          audioSetup.myRate = this.myRate;
          audioSetup.myPool = this.myPool;
          audioSetup.myPosition = this.myPosition;
          audioSetup.mySpatial = this.mySpatial;
          audioSetup.myReferenceDistance = this.myReferenceDistance;
          return audioSetup;
        }
        get myPitch() {
          return this._myRate;
        }
        get myRate() {
          return this._myRate;
        }
        set myPitch(pitch) {
          this._myRate = pitch;
        }
        set myRate(rate) {
          this._myRate = rate;
        }
      };
    }
  });

  // js/pp/audio/mute_all.js
  var mute_all_exports = {};
  var import_howler3;
  var init_mute_all = __esm({
    "js/pp/audio/mute_all.js"() {
      import_howler3 = __toESM(require_howler());
      WL.registerComponent("pp-mute-all", {}, {
        init: function() {
        },
        start: function() {
          import_howler3.Howler.mute(true);
        },
        update: function(dt) {
        }
      });
    }
  });

  // js/pp/cauldron/cauldron/number_over_value.js
  var require_number_over_value = __commonJS({
    "js/pp/cauldron/cauldron/number_over_value.js"() {
      Number.prototype.get = function() {
        return this.valueOf();
      };
      Object.defineProperty(Number.prototype, "get", { enumerable: false });
      PP.NumberOverValue = class NumberOverValue {
        constructor(startNumber, endNumber = null, startInterpolationValue = 0, endInterpolationValue = 0, easingFunction = PP.EasingFunction.linear, roundingFunction = null) {
          if (endNumber == null) {
            endNumber = startNumber;
          }
          this._myStartNumber = startNumber;
          this._myEndNumber = endNumber;
          this._myStartInterpolationValue = startInterpolationValue;
          this._myEndInterpolationValue = endInterpolationValue;
          this._myEasingFunction = easingFunction;
          this._myRoundingFunction = roundingFunction;
        }
        get(interpolationValue) {
          let lerpInterpolationValue = this._myEasingFunction(Math.pp_mapToRange(interpolationValue, this._myStartInterpolationValue, this._myEndInterpolationValue, 0, 1));
          let lerpNumber = Math.pp_lerp(this._myStartNumber, this._myEndNumber, lerpInterpolationValue);
          if (this._myRoundingFunction) {
            lerpNumber = this._myRoundingFunction(lerpNumber, this._myStartNumber, this._myEndNumber);
          }
          return lerpNumber;
        }
        getAverage(interpolationValue) {
          return this.get(interpolationValue);
        }
        getRange(interpolationValue) {
          let number = this.get(interpolationValue);
          return [number, number];
        }
        getMax(interpolationValue) {
          return this.get(interpolationValue);
        }
        getMin(interpolationValue) {
          return this.get(interpolationValue);
        }
        isInside(number, interpolationValue) {
          let currentNumber = this.get(interpolationValue);
          return currentNumber == number;
        }
        isInsideAngleRange(number, interpolationValue) {
          return this.isInsideAngleRangeDegrees(number, interpolationValue);
        }
        isInsideAngleRangeDegrees(number, interpolationValue) {
          let currentNumber = this.get(interpolationValue);
          let clampedNumber = Math.pp_angleClampDegrees(number);
          let clampedCurrentNumber = Math.pp_angleClampDegrees(currentNumber);
          return clampedNumber == clampedCurrentNumber;
        }
        isInsideAngleRangeRadians(number, interpolationValue) {
          let currentNumber = this.get(interpolationValue);
          let clampedNumber = Math.pp_angleClampRadians(number);
          let clampedCurrentNumber = Math.pp_angleClampRadians(currentNumber);
          return clampedNumber == clampedCurrentNumber;
        }
      };
      PP.IntOverValue = class IntOverValue extends PP.NumberOverValue {
        constructor(startNumber, endNumber, startInterpolationValue, endInterpolationValue, easingFunction = PP.EasingFunction.linear, roundingFunction = null) {
          if (roundingFunction == null) {
            roundingFunction = function(numberToRound, startNumber2, endNumber2) {
              let roundedNumber = null;
              let useFloor = startNumber2 <= endNumber2;
              if (useFloor) {
                roundedNumber = Math.floor(numberToRound);
              } else {
                roundedNumber = Math.ceil(numberToRound);
              }
              return roundedNumber;
            };
          }
          super(startNumber, endNumber, startInterpolationValue, endInterpolationValue, easingFunction, roundingFunction);
        }
      };
      PP.NumberRangeOverValue = class NumberRangeOverValue {
        constructor(startRange, endRange = null, startInterpolationValue = 0, endInterpolationValue = 0, easingFunction = PP.EasingFunction.linear, roundingFunction = null) {
          if (endRange == null) {
            endRange = startRange;
          }
          this._myStartNumberOverValue = new PP.NumberOverValue(startRange[0], endRange[0], startInterpolationValue, endInterpolationValue, easingFunction, roundingFunction);
          this._myEndNumberOverValue = new PP.NumberOverValue(startRange[1], endRange[1], startInterpolationValue, endInterpolationValue, easingFunction, roundingFunction);
          this._myRoundingFunction = roundingFunction;
        }
        get(interpolationValue) {
          let startNumber = this._myStartNumberOverValue.get(interpolationValue);
          let endNumber = this._myEndNumberOverValue.get(interpolationValue);
          let randomValue = null;
          if (this._myRoundingFunction) {
            randomValue = Math.pp_randomInt(startNumber, endNumber);
          } else {
            randomValue = Math.pp_random(startNumber, endNumber);
          }
          return randomValue;
        }
        getAverage(interpolationValue) {
          let startNumber = this._myStartNumberOverValue.get(interpolationValue);
          let endNumber = this._myEndNumberOverValue.get(interpolationValue);
          let average = (startNumber + endNumber) / 2;
          if (this._myRoundingFunction) {
            average = this._myRoundingFunction(average, startNumber, endNumber);
          }
          return average;
        }
        getRange(interpolationValue) {
          let startNumber = this._myStartNumberOverValue.get(interpolationValue);
          let endNumber = this._myEndNumberOverValue.get(interpolationValue);
          return [startNumber, endNumber];
        }
        getMax(interpolationValue) {
          let startNumber = this._myStartNumberOverValue.get(interpolationValue);
          let endNumber = this._myEndNumberOverValue.get(interpolationValue);
          return Math.max(startNumber, endNumber);
        }
        getMin(interpolationValue) {
          let startNumber = this._myStartNumberOverValue.get(interpolationValue);
          let endNumber = this._myEndNumberOverValue.get(interpolationValue);
          return Math.min(startNumber, endNumber);
        }
        isInside(number, interpolationValue) {
          let startNumber = this._myStartNumberOverValue.get(interpolationValue);
          let endNumber = this._myEndNumberOverValue.get(interpolationValue);
          let min3 = Math.min(startNumber, endNumber);
          let max3 = Math.max(startNumber, endNumber);
          return number >= min3 && number <= max3;
        }
        isInsideAngleRange(number, interpolationValue) {
          return this.isInsideAngleRangeDegrees(number, interpolationValue);
        }
        isInsideAngleRangeDegrees(number, interpolationValue) {
          let startNumber = this._myStartNumberOverValue.get(interpolationValue);
          let endNumber = this._myEndNumberOverValue.get(interpolationValue);
          return Math.pp_isInsideAngleRangeDegrees(number, startNumber, endNumber);
        }
        isInsideAngleRangeRadians(number, interpolationValue) {
          let startNumber = this._myStartNumberOverValue.get(interpolationValue);
          let endNumber = this._myEndNumberOverValue.get(interpolationValue);
          return Math.pp_isInsideAngleRangeRadians(number, startNumber, endNumber);
        }
      };
      PP.IntRangeOverValue = class IntRangeOverValue extends PP.NumberRangeOverValue {
        constructor(startRange, endRange, startInterpolationValue, endInterpolationValue, easingFunction = PP.EasingFunction.linear, roundingFunction = null) {
          if (roundingFunction == null) {
            roundingFunction = function(numberToRound, startNumber, endNumber) {
              let roundedNumber = null;
              let useFloor = startNumber <= endNumber;
              if (useFloor) {
                roundedNumber = Math.floor(numberToRound);
              } else {
                roundedNumber = Math.ceil(numberToRound);
              }
              return roundedNumber;
            };
          }
          super(startRange, endRange, startInterpolationValue, endInterpolationValue, easingFunction, roundingFunction);
        }
      };
    }
  });

  // js/pp/cauldron/cauldron/object_pool_manager.js
  var require_object_pool_manager = __commonJS({
    "js/pp/cauldron/cauldron/object_pool_manager.js"() {
      PP.ObjectPoolManager = class ObjectPoolManager {
        constructor() {
          this._myPoolMap = /* @__PURE__ */ new Map();
        }
        addPool(poolID, poolObject, objectPoolParams = new PP.ObjectPoolParams()) {
          if (!this._myPoolMap.has(poolID)) {
            let pool = new PP.ObjectPool(poolObject, objectPoolParams);
            this._myPoolMap.set(poolID, pool);
          } else {
            console.error("Pool already created with this ID");
          }
        }
        increasePool(poolID, amount) {
          let pool = this._myPoolMap.get(poolID);
          if (pool) {
            pool.increase(amount);
          }
        }
        increasePoolPercentage(poolID, percentage) {
          let pool = this._myPoolMap.get(poolID);
          if (pool) {
            pool.increasePercentage(percentage);
          }
        }
        getPool(poolID) {
          return this._myPoolMap.get(poolID);
        }
        getObject(poolID) {
          return this._myPoolMap.get(poolID).get();
        }
        releaseObject(poolID, object) {
          this._myPoolMap.get(poolID).release(object);
        }
      };
      PP.ObjectPoolParams = class ObjectPoolParams {
        constructor() {
          this.myInitialPoolSize = 0;
          this.myAmountToAddWhenEmpty = 1;
          this.myPercentageToAddWhenEmpty = 0.5;
          this.myCloneParams = void 0;
          this.myCloneFunctionName = void 0;
          this.mySetActiveFunctionName = void 0;
          this.myEqualsFunctionName = void 0;
          this.myEnableDebugLog = true;
        }
      };
      PP.ObjectPool = class ObjectPool {
        constructor(poolObject, objectPoolParams) {
          this._myObjectPoolParams = objectPoolParams;
          this._myPrototype = this._clone(poolObject);
          this._myAvailableObjects = [];
          this._myBusyObjects = [];
          this._addToPool(objectPoolParams.myInitialPoolSize, false);
        }
        get() {
          let object = this._myAvailableObjects.shift();
          if (object == null) {
            let amountToAdd = Math.ceil(this._myBusyObjects.length * this._myObjectPoolParams.myPercentageToAddWhenEmpty);
            amountToAdd += this._myObjectPoolParams.myAmountToAddWhenEmpty;
            this._addToPool(amountToAdd, this._myObjectPoolParams.myEnableDebugLog);
            object = this._myAvailableObjects.shift();
          }
          if (object != null) {
            this._myBusyObjects.push(object);
          }
          return object;
        }
        release(object) {
          let released = this._myBusyObjects.pp_remove(this._equals.bind(this, object));
          if (released) {
            this._setActive(released, false);
            this._myAvailableObjects.push(released);
          }
        }
        increase(amount) {
          this._addToPool(amount, false);
        }
        increasePercentage(percentage) {
          let amount = Math.ceil((this._myBusyObjects.length + this._myAvailableObjects.length) * percentage);
          this._addToPool(amount, false);
        }
        _addToPool(size, log) {
          if (size <= 0) {
            return;
          }
          for (let i = 0; i < size; i++) {
            this._myAvailableObjects.push(this._clone(this._myPrototype));
          }
          if (log) {
            console.warn("Added new elements to the pool:", size);
          }
        }
        _clone(object) {
          let clone7 = null;
          if (this._myObjectPoolParams.myCloneFunctionName != null) {
            clone7 = object[this._myObjectPoolParams.myCloneFunctionName](this._myObjectPoolParams.myCloneParams);
          } else if (object.pp_clone != null) {
            clone7 = object.pp_clone(this._myObjectPoolParams.myCloneParams);
          } else if (object.clone != null) {
            clone7 = object.clone(this._myObjectPoolParams.myCloneParams);
          }
          if (clone7 == null) {
            console.error("Object not cloneable, pool will return null");
          } else {
            this._setActive(clone7, false);
          }
          return clone7;
        }
        _setActive(object, active) {
          if (this._myObjectPoolParams.mySetActiveFunctionName != null) {
            object[this._myObjectPoolParams.mySetActiveFunctionName](active);
          } else if (object.pp_setActive != null) {
            object.pp_setActive(active);
          } else if (object.setActive != null) {
            object.setActive(active);
          }
        }
        _equals(first, second) {
          let equals8 = false;
          if (this._myObjectPoolParams.myEqualsFunctionName != null) {
            equals8 = first[this._myObjectPoolParams.myEqualsFunctionName](second);
          } else if (first.pp_equals != null) {
            equals8 = first.pp_equals(second);
          } else if (first.equals != null) {
            equals8 = first.equals(second);
          }
          return equals8;
        }
      };
    }
  });

  // js/pp/cauldron/cauldron/physx_collision_collector.js
  var require_physx_collision_collector = __commonJS({
    "js/pp/cauldron/cauldron/physx_collision_collector.js"() {
      PP.PhysXCollisionCollector = class PhysXCollisionCollector {
        constructor(physXComponent, isTrigger = false) {
          this._myPhysX = physXComponent;
          this._myIsTrigger = isTrigger;
          this._myCollisions = [];
          this._myCollisionsStart = [];
          this._myCollisionsEnd = [];
          this._myUpdateActive = false;
          this._myCollisionsStartToProcess = [];
          this._myCollisionsEndToProcess = [];
          this._myCollisionCallbackID = null;
          this._myIsActive = false;
          this.setActive(true);
          this._myDebugActive = false;
          this._myTriggerDesyncFixDelay = new PP.Timer(0.1);
          this._myCollisionCallbacks = /* @__PURE__ */ new Map();
          this._myCollisionStartCallbacks = /* @__PURE__ */ new Map();
          this._myCollisionEndCallbacks = /* @__PURE__ */ new Map();
        }
        getPhysX() {
          return this._myPhysX;
        }
        getCollisions() {
          return this._myCollisions.pp_clone();
        }
        getCollisionsStart() {
          return this._myCollisionsStart.pp_clone();
        }
        getCollisionsEnd() {
          return this._myCollisionsEnd.pp_clone();
        }
        setActive(active) {
          if (this._myIsActive != active) {
            this._myIsActive = active;
            this._myCollisions = [];
            this._myCollisionsStart = [];
            this._myCollisionsEnd = [];
            this._myUpdateActive = false;
            this._myCollisionsStartToProcess = [];
            this._myCollisionsEndToProcess = [];
            if (this._myIsActive) {
              this._myCollisionCallbackID = this._myPhysX.onCollision(this._onCollision.bind(this));
            } else if (this._myCollisionCallbackID != null) {
              this._myPhysX.removeCollisionCallback(this._myCollisionCallbackID);
              this._myCollisionCallbackID = null;
            }
          }
        }
        setUpdateActive(active) {
          this._myUpdateActive = active;
        }
        update(dt) {
          if (!this._myIsActive) {
            return;
          }
          this._myUpdateActive = true;
          this._myCollisionsStart = this._myCollisionsStartToProcess;
          this._myCollisionsStartToProcess = [];
          this._myCollisionsEnd = this._myCollisionsEndToProcess;
          this._myCollisionsEndToProcess = [];
          if (this._myIsTrigger) {
            this._triggerDesyncFix(dt);
          }
        }
        destroy() {
          if (this._myCollisionCallbackID != null) {
            this._myPhysX.removeCollisionCallback(this._myCollisionCallbackID);
            this._myCollisionCallbackID = null;
          }
        }
        setDebugActive(active) {
          this._myDebugActive = active;
        }
        registerCollisionEventListener(callbackID, callback) {
          this._myCollisionCallbacks.set(callbackID, callback);
        }
        unregisterCollisionEventListener(callbackID) {
          this._myCollisionCallbacks.delete(callbackID);
        }
        registerCollisionStartEventListener(callbackID, callback) {
          this._myCollisionStartCallbacks.set(callbackID, callback);
        }
        unregisterCollisionStartEventListener(callbackID) {
          this._myCollisionStartCallbacks.delete(callbackID);
        }
        registerCollisionEndEventListener(callbackID, callback) {
          this._myCollisionEndCallbacks.set(callbackID, callback);
        }
        unregisterCollisionEndEventListener(callbackID) {
          this._myCollisionEndCallbacks.delete(callbackID);
        }
        _onCollision(type2, physXComponent) {
          if (type2 == WL.CollisionEventType.Touch || type2 == WL.CollisionEventType.TriggerTouch) {
            this._onCollisionStart(physXComponent);
          } else if (type2 == WL.CollisionEventType.TouchLost || type2 == WL.CollisionEventType.TriggerTouchLost) {
            this._onCollisionEnd(physXComponent);
          }
          if (this._myCollisionCallbacks.size > 0) {
            this._myCollisionCallbacks.forEach(function(callback) {
              callback(this._myPhysX, physXComponent, type2);
            });
          }
        }
        _onCollisionStart(physXComponent) {
          if (this._myDebugActive) {
            let objectFound = false;
            for (let object of this._myCollisions) {
              if (object.pp_equals(physXComponent.object)) {
                objectFound = true;
                break;
              }
            }
            if (objectFound) {
              console.error("Collision Start on object already collected");
            }
          }
          this._myCollisions.push(physXComponent.object);
          if (this._myUpdateActive) {
            this._myCollisionsStartToProcess.push(physXComponent.object);
            this._myCollisionsEndToProcess.pp_removeAll(function(element) {
              return element.pp_equals(physXComponent.object);
            });
          }
          if (this._myDebugActive) {
            console.log("Collision Start -", this._myCollisions.length);
          }
          if (this._myCollisionStartCallbacks.size > 0) {
            this._myCollisionStartCallbacks.forEach(function(callback) {
              callback(this._myPhysX, physXComponent, type);
            });
          }
        }
        _onCollisionEnd(physXComponent) {
          if (this._myDebugActive) {
            let objectFound = false;
            for (let object of this._myCollisions) {
              if (object.pp_equals(physXComponent.object)) {
                objectFound = true;
                break;
              }
            }
            if (!objectFound) {
              console.error("Collision End on object not collected");
            }
          }
          this._myCollisions.pp_removeAll(function(element) {
            return element.pp_equals(physXComponent.object);
          });
          if (this._myUpdateActive) {
            this._myCollisionsEndToProcess.push(physXComponent.object);
            this._myCollisionsStartToProcess.pp_removeAll(function(element) {
              return element.pp_equals(physXComponent.object);
            });
          }
          if (this._myDebugActive) {
            console.log("Collision End -", this._myCollisions.length);
          }
          if (this._myCollisionEndCallbacks.size > 0) {
            this._myCollisionEndCallbacks.forEach(function(callback) {
              callback(this._myPhysX, physXComponent, type);
            });
          }
        }
        _triggerDesyncFix(dt) {
          this._myTriggerDesyncFixDelay.update(dt);
          if (this._myTriggerDesyncFixDelay.isDone()) {
            this._myTriggerDesyncFixDelay.start();
            let collisionsToEnd = this._myCollisions.pp_findAll(function(element) {
              let physX = element.pp_getComponent("physx");
              return physX == null || !physX.active;
            });
            if (collisionsToEnd.length > 0) {
              for (let collision of collisionsToEnd) {
                let physX = collision.pp_getComponent("physx");
                if (physX) {
                  this._onCollisionEnd(physX);
                } else {
                  console.error("NO PHYSX, HOW?");
                }
              }
            }
          }
        }
      };
    }
  });

  // js/pp/cauldron/cauldron/save_manager.js
  var require_save_manager = __commonJS({
    "js/pp/cauldron/cauldron/save_manager.js"() {
      PP.SaveManager = class SaveManager {
        constructor() {
          this._mySaveCache = /* @__PURE__ */ new Map();
          this._myCommitSavesDelayTimer = new PP.Timer(0, false);
          this._myDelaySavesCommit = true;
          this._myIDsToCommit = [];
          this._myCacheDefaultValueOnFail = true;
          if (WL.xrSession) {
            this._onXRSessionStart(WL.xrSession);
          }
          WL.onXRSessionStart.push(this._onXRSessionStart.bind(this));
          WL.onXRSessionEnd.push(this._onXRSessionEnd.bind(this));
          this._myClearCallbacks = /* @__PURE__ */ new Map();
          this._myDeleteCallbacks = /* @__PURE__ */ new Map();
          this._myDeleteIDCallbacks = /* @__PURE__ */ new Map();
          this._mySaveCallbacks = /* @__PURE__ */ new Map();
          this._mySaveValueChangedCallbacks = /* @__PURE__ */ new Map();
          this._mySaveIDCallbacks = /* @__PURE__ */ new Map();
          this._mySaveValueChangedIDCallbacks = /* @__PURE__ */ new Map();
          this._myCommitSaveCallbacks = /* @__PURE__ */ new Map();
          this._myCommitSaveIDCallbacks = /* @__PURE__ */ new Map();
          this._myCommitSavesCallbacks = /* @__PURE__ */ new Map();
          this._myLoadCallbacks = /* @__PURE__ */ new Map();
          this._myLoadIDCallbacks = /* @__PURE__ */ new Map();
        }
        setCommitSavesDelay(delay) {
          this._myCommitSavesDelayTimer.start(delay);
        }
        setDelaySavesCommit(delayed) {
          this._myDelaySavesCommit = delayed;
        }
        setCacheDefaultValueOnFail(cache) {
          this._myCacheDefaultValueOnFail = cache;
        }
        update(dt) {
          if (this._myCommitSavesDelayTimer.isRunning()) {
            this._myCommitSavesDelayTimer.update(dt);
            if (this._myCommitSavesDelayTimer.isDone()) {
              this.commitSaves();
            }
          }
        }
        save(id, value, overrideDelaySavesCommit = null) {
          let sameValue = false;
          if (this._mySaveCache.has(id)) {
            sameValue = this._mySaveCache.get(id) === value;
          }
          if (!sameValue) {
            this._mySaveCache.set(id, value);
            if (this._myDelaySavesCommit && overrideDelaySavesCommit == null || overrideDelaySavesCommit != null && overrideDelaySavesCommit) {
              this._myIDsToCommit.pp_pushUnique(id);
              if (!this._myCommitSavesDelayTimer.isRunning()) {
                this._myCommitSavesDelayTimer.start();
              }
            } else {
              let failed = this._commitSave(id, false);
              if (this._myCommitSavesCallbacks.size > 0) {
                let isCommitSaveDelayed = false;
                this._myCommitSavesCallbacks.forEach(function(callback) {
                  callback(isCommitSaveDelayed, failed);
                });
              }
            }
          }
          if (this._mySaveCallbacks.size > 0) {
            this._mySaveCallbacks.forEach(function(callback) {
              callback(id, value);
            });
          }
          if (this._mySaveIDCallbacks.size > 0) {
            let callbackMap = this._mySaveIDCallbacks.get(id);
            if (callbackMap != null) {
              callbackMap.forEach(function(callback) {
                callback(id, value);
              });
            }
          }
          if (!sameValue) {
            if (this._mySaveValueChangedCallbacks.size > 0) {
              this._mySaveValueChangedCallbacks.forEach(function(callback) {
                callback(id, value);
              });
            }
            if (this._mySaveValueChangedIDCallbacks.size > 0) {
              let callbackMap = this._mySaveValueChangedIDCallbacks.get(id);
              if (callbackMap != null) {
                callbackMap.forEach(function(callback) {
                  callback(id, value);
                });
              }
            }
          }
        }
        commitSaves() {
          if (this._myIDsToCommit.length > 0) {
            let failed = false;
            for (let id of this._myIDsToCommit) {
              if (this._mySaveCache.has(id)) {
                let result2 = this._commitSave(id, true);
                failed = failed || result2;
              }
            }
            this._myIDsToCommit = [];
            if (this._myCommitSavesCallbacks.size > 0) {
              let isCommitSavesDelayed = true;
              this._myCommitSavesCallbacks.forEach(function(callback) {
                callback(isCommitSavesDelayed, failed);
              });
            }
          }
        }
        has(id) {
          return this._mySaveCache.has(id) || PP.SaveUtils.has(id);
        }
        delete(id) {
          this._mySaveCache.delete(id);
          PP.SaveUtils.delete(id);
          if (this._myDeleteCallbacks.size > 0) {
            this._myDeleteCallbacks.forEach(function(callback) {
              callback(id);
            });
          }
          if (this._myDeleteIDCallbacks.size > 0) {
            let callbackMap = this._myDeleteIDCallbacks.get(id);
            if (callbackMap != null) {
              callbackMap.forEach(function(callback) {
                callback(id);
              });
            }
          }
        }
        clear() {
          this._mySaveCache.clear();
          PP.SaveUtils.clear();
          if (this._myClearCallbacks.size > 0) {
            this._myClearCallbacks.forEach(function(callback) {
              callback();
            });
          }
        }
        load(id, defaultValue = null) {
          return this._load(id, defaultValue, "load");
        }
        loadString(id, defaultValue = null) {
          return this._load(id, defaultValue, "loadString");
        }
        loadNumber(id, defaultValue = null) {
          return this._load(id, defaultValue, "loadNumber");
        }
        loadBool(id, defaultValue = null) {
          return this._load(id, defaultValue, "loadBool");
        }
        getCommitSavesDelay() {
          return this._myCommitSavesDelayTimer.getDuration();
        }
        isDelaySavesCommit() {
          return this._myDelaySavesCommit;
        }
        isCacheDefaultValueOnFail() {
          return this._myCacheDefaultValueOnFail;
        }
        _commitSave(id, isCommitSaveDelayed) {
          let value = this._mySaveCache.get(id);
          let failed = false;
          try {
            PP.SaveUtils.save(id, value);
          } catch (error) {
            failed = true;
          }
          if (this._myCommitSaveCallbacks.size > 0) {
            this._myCommitSaveCallbacks.forEach(function(callback) {
              callback(id, value, isCommitSaveDelayed, failed);
            });
          }
          if (this._myCommitSaveIDCallbacks.size > 0) {
            let callbackMap = this._myCommitSaveIDCallbacks.get(id);
            if (callbackMap != null) {
              callbackMap.forEach(function(callback) {
                callback(id, value, isCommitSaveDelayed, failed);
              });
            }
          }
          return failed;
        }
        _load(id, defaultValue, functionName) {
          let value = null;
          let failed = false;
          let loadFromCache = false;
          if (this._mySaveCache.has(id)) {
            value = this._mySaveCache.get(id);
            if (value == null && defaultValue != null) {
              value = defaultValue;
              if (this._myCacheDefaultValueOnFail) {
                this._mySaveCache.set(id, value);
              }
            }
            loadFromCache = true;
          } else {
            let saveResult = null;
            try {
              saveResult = PP.SaveUtils[functionName](id, null);
            } catch (error) {
              saveResult = null;
              failed = true;
            }
            if (saveResult == null) {
              value = defaultValue;
            } else {
              value = saveResult;
            }
            if (saveResult != null || this._myCacheDefaultValueOnFail) {
              this._mySaveCache.set(id, value);
            } else {
              this._mySaveCache.set(id, null);
            }
          }
          if (this._myLoadCallbacks.size > 0) {
            this._myLoadCallbacks.forEach(function(callback) {
              callback(id, value, loadFromCache, failed);
            });
          }
          if (this._myLoadIDCallbacks.size > 0) {
            let callbackMap = this._myLoadIDCallbacks.get(id);
            if (callbackMap != null) {
              callbackMap.forEach(function(callback) {
                callback(id, value, loadFromCache, failed);
              });
            }
          }
          return value;
        }
        _onXRSessionStart(session) {
          session.addEventListener("visibilitychange", function(event) {
            if (event.session.visibilityState != "visible") {
              this._onXRSessionInterrupt();
            }
          }.bind(this));
        }
        _onXRSessionEnd() {
          this._onXRSessionInterrupt();
        }
        _onXRSessionInterrupt() {
          this.commitSaves();
        }
        registerClearEventListener(callbackID, callback) {
          this._myClearCallbacks.set(callbackID, callback);
        }
        unregisterClearEventListener(callbackID) {
          this._myClearCallbacks.delete(callbackID);
        }
        registerDeleteEventListener(callbackID, callback) {
          this._myDeleteCallbacks.set(callbackID, callback);
        }
        unregisterDeleteEventListener(callbackID) {
          this._myDeleteCallbacks.delete(callbackID);
        }
        registerDeleteIDEventListener(valueID, callbackID, callback) {
          let valueIDMap = this._myDeleteIDCallbacks.get(valueID);
          if (valueIDMap == null) {
            this._myDeleteIDCallbacks.set(valueID, /* @__PURE__ */ new Map());
            valueIDMap = this._myDeleteIDCallbacks.get(valueID);
          }
          valueIDMap.set(callbackID, callback);
        }
        unregisterDeleteIDEventListener(valueID, callbackID) {
          let valueIDMap = this._myDeleteIDCallbacks.get(valueID);
          if (valueIDMap != null) {
            valueIDMap.delete(callbackID);
            if (valueIDMap.size <= 0) {
              this._myDeleteIDCallbacks.delete(valueID);
            }
          }
        }
        registerSaveEventListener(callbackID, callback) {
          this._mySaveCallbacks.set(callbackID, callback);
        }
        unregisterSaveEventListener(callbackID) {
          this._mySaveCallbacks.delete(callbackID);
        }
        registerSaveIDEventListener(valueID, callbackID, callback) {
          let valueIDMap = this._mySaveIDCallbacks.get(valueID);
          if (valueIDMap == null) {
            this._mySaveIDCallbacks.set(valueID, /* @__PURE__ */ new Map());
            valueIDMap = this._mySaveIDCallbacks.get(valueID);
          }
          valueIDMap.set(callbackID, callback);
        }
        unregisterSaveIDEventListener(valueID, callbackID) {
          let valueIDMap = this._mySaveIDCallbacks.get(valueID);
          if (valueIDMap != null) {
            valueIDMap.delete(callbackID);
            if (valueIDMap.size <= 0) {
              this._mySaveIDCallbacks.delete(valueID);
            }
          }
        }
        registerSaveValueChangedEventListener(callbackID, callback) {
          this._mySaveValueChangedCallbacks.set(callbackID, callback);
        }
        unregisterSaveValueChangedEventListener(callbackID) {
          this._mySaveValueChangedCallbacks.delete(callbackID);
        }
        registerSaveValueChangedIDEventListener(valueID, callbackID, callback) {
          let valueIDMap = this._mySaveValueChangedIDCallbacks.get(valueID);
          if (valueIDMap == null) {
            this._mySaveValueChangedIDCallbacks.set(valueID, /* @__PURE__ */ new Map());
            valueIDMap = this._mySaveValueChangedIDCallbacks.get(valueID);
          }
          valueIDMap.set(callbackID, callback);
        }
        unregisterSaveValueChangedIDEventListener(valueID, callbackID) {
          let valueIDMap = this._mySaveValueChangedIDCallbacks.get(valueID);
          if (valueIDMap != null) {
            valueIDMap.delete(callbackID);
            if (valueIDMap.size <= 0) {
              this._mySaveValueChangedIDCallbacks.delete(valueID);
            }
          }
        }
        registerCommitSavesEventListener(callbackID, callback) {
          this._myCommitSavesCallbacks.set(callbackID, callback);
        }
        unregisterCommitSavesEventListener(callbackID) {
          this._myCommitSavesCallbacks.delete(callbackID);
        }
        registerCommitSaveEventListener(callbackID, callback) {
          this._myCommitSaveCallbacks.set(callbackID, callback);
        }
        unregisterCommitSaveEventListener(callbackID) {
          this._myCommitSaveCallbacks.delete(callbackID);
        }
        registerCommitSaveIDEventListener(valueID, callbackID, callback) {
          let valueIDMap = this._myCommitSaveIDCallbacks.get(valueID);
          if (valueIDMap == null) {
            this._myCommitSaveIDCallbacks.set(valueID, /* @__PURE__ */ new Map());
            valueIDMap = this._myCommitSaveIDCallbacks.get(valueID);
          }
          valueIDMap.set(callbackID, callback);
        }
        unregisterCommitSaveIDEventListener(valueID, callbackID) {
          let valueIDMap = this._myCommitSaveIDCallbacks.get(valueID);
          if (valueIDMap != null) {
            valueIDMap.delete(callbackID);
            if (valueIDMap.size <= 0) {
              this._myCommitSaveIDCallbacks.delete(valueID);
            }
          }
        }
        registerLoadEventListener(callbackID, callback) {
          this._myLoadCallbacks.set(callbackID, callback);
        }
        unregisterLoadEventListener(callbackID) {
          this._myLoadCallbacks.delete(callbackID);
        }
        registerLoadIDEventListener(valueID, callbackID, callback) {
          let valueIDMap = this._myLoadIDCallbacks.get(valueID);
          if (valueIDMap == null) {
            this._myLoadIDCallbacks.set(valueID, /* @__PURE__ */ new Map());
            valueIDMap = this._myLoadIDCallbacks.get(valueID);
          }
          valueIDMap.set(callbackID, callback);
        }
        unregisterLoadIDEventListener(valueID, callbackID) {
          let valueIDMap = this._myLoadIDCallbacks.get(valueID);
          if (valueIDMap != null) {
            valueIDMap.delete(callbackID);
            if (valueIDMap.size <= 0) {
              this._myLoadIDCallbacks.delete(valueID);
            }
          }
        }
      };
    }
  });

  // js/pp/cauldron/cauldron/timer.js
  var require_timer = __commonJS({
    "js/pp/cauldron/cauldron/timer.js"() {
      PP.Timer = class Timer {
        constructor(duration, autoStart = true) {
          this._myDuration = duration;
          this._myOnEndCallbacks = /* @__PURE__ */ new Map();
          this._myIsDone = false;
          this._myStarted = false;
          if (autoStart) {
            this.start();
          } else {
            this.reset();
          }
        }
        start(duration = null) {
          this.reset(duration);
          this._myStarted = true;
        }
        reset(duration = null) {
          if (duration != null) {
            this._myDuration = Math.max(0, duration);
          }
          this._myTimer = this._myDuration;
          this._myIsDone = false;
          this._myStarted = false;
        }
        update(dt) {
          if (this.isRunning()) {
            this._myTimer = Math.max(0, this._myTimer - dt);
            if (this._myTimer == 0) {
              this._done();
            }
          }
        }
        isDone() {
          return this._myIsDone;
        }
        isStarted() {
          return this._myStarted;
        }
        isRunning() {
          return this.isStarted() && !this.isDone();
        }
        getDuration() {
          return this._myDuration;
        }
        setDuration(duration) {
          this._myDuration = Math.max(0, duration);
        }
        getTimer() {
          return this._myTimer;
        }
        getPercentage() {
          let percentage = 1;
          if (this._myTimer > 0) {
            percentage = (this._myDuration - this._myTimer) / this._myDuration;
          }
          return Math.pp_clamp(percentage, 0, 1);
        }
        onEnd(callback, id = null) {
          this._myOnEndCallbacks.set(id, callback);
        }
        unregisterOnEnd(id = null) {
          this._myOnEndCallbacks.delete(id);
        }
        _done() {
          this._myTimer = 0;
          this._myIsDone = true;
          if (this._myOnEndCallbacks.size > 0) {
            for (let callback of this._myOnEndCallbacks.values()) {
              callback();
            }
          }
        }
      };
    }
  });

  // js/pp/cauldron/components/clear_console_on_session.js
  var require_clear_console_on_session = __commonJS({
    "js/pp/cauldron/components/clear_console_on_session.js"() {
      WL.registerComponent("pp-clear-console-on-session", {}, {
        init: function() {
        },
        start: function() {
          this._myFirstTime = true;
          WL.onXRSessionStart.push(function() {
            if (this._myFirstTime) {
              this._myFirstTime = false;
              console.clear();
            }
          }.bind(this));
        },
        update: function(dt) {
        }
      });
    }
  });

  // js/pp/cauldron/components/player_height.js
  var require_player_height = __commonJS({
    "js/pp/cauldron/components/player_height.js"() {
      WL.registerComponent("pp-player-height", {
        _myEyesHeight: { type: WL.Type.Float, default: 1.65 }
      }, {
        start: function() {
          let localPosition = this.object.pp_getPositionLocal();
          this.object.setPositionLocal([localPosition[0], this._myEyesHeight, localPosition[2]]);
          if (WL.xrSession) {
            this._onXRSessionStart(WL.xrSession);
          }
          WL.onXRSessionStart.push(this._onXRSessionStart.bind(this));
          WL.onXRSessionEnd.push(this._onXRSessionEnd.bind(this));
        },
        _onXRSessionStart: function() {
          if (this.active) {
            let localPosition = this.object.pp_getPositionLocal();
            if (PP.XRUtils.isReferenceSpaceLocalFloor()) {
              this.object.setPositionLocal([localPosition[0], 0, localPosition[2]]);
            } else {
              this.object.setPositionLocal([localPosition[0], this._myEyesHeight, localPosition[2]]);
            }
          }
        },
        _onXRSessionEnd: function() {
          if (this.active) {
            let localPosition = this.object.pp_getPositionLocal();
            this.object.setPositionLocal([localPosition[0], this._myEyesHeight, localPosition[2]]);
          }
        }
      });
    }
  });

  // js/pp/cauldron/components/set_hand_transform.js
  var require_set_hand_transform = __commonJS({
    "js/pp/cauldron/components/set_hand_transform.js"() {
      WL.registerComponent("pp-set-hand-transform", {
        _myHandedness: { type: WL.Type.Enum, values: ["left", "right"], default: "left" },
        _myFixForward: { type: WL.Type.Bool, default: true }
      }, {
        init: function() {
          this._myHandPose = new PP.HandPose(PP.InputUtils.getHandednessByIndex(this._myHandedness), this._myFixForward);
        },
        start: function() {
          this._myHandPose.start();
        },
        update: function(dt) {
          this._myHandPose.update(dt);
          this.object.pp_setTransformLocalQuat(this._myHandPose.getTransformQuat());
        }
      });
    }
  });

  // js/pp/cauldron/components/set_head_transform.js
  var require_set_head_transform = __commonJS({
    "js/pp/cauldron/components/set_head_transform.js"() {
      WL.registerComponent("pp-set-head-transform", {
        _myFixForward: { type: WL.Type.Bool, default: true }
      }, {
        init: function() {
          this._myHeadPose = new PP.HeadPose(this._myFixForward);
        },
        start: function() {
          this._myHeadPose.start();
        },
        update: function(dt) {
          this._myHeadPose.update(dt);
          this.object.pp_setTransformLocalQuat(this._myHeadPose.getTransformQuat());
        }
      });
    }
  });

  // js/pp/cauldron/components/set_hierarchy_active.js
  var require_set_hierarchy_active = __commonJS({
    "js/pp/cauldron/components/set_hierarchy_active.js"() {
      WL.registerComponent("pp-set-hierarchy-active", {
        _myHierarchyActive: { type: WL.Type.Bool, default: true },
        _mySetActiveOn: { type: WL.Type.Enum, values: ["init", "start", "first_update"], default: "init" }
      }, {
        init: function() {
          if (this.active && this._mySetActiveOn == 0) {
            this.object.pp_setActiveHierarchy(this._myHierarchyActive);
          }
        },
        start: function() {
          if (this._mySetActiveOn == 1) {
            this.object.pp_setActiveHierarchy(this._myHierarchyActive);
          }
          this._myFirst = true;
        },
        update: function(dt) {
          if (this._mySetActiveOn == 2 && this._myFirst) {
            this._myFirst = false;
            this.object.pp_setActiveHierarchy(this._myHierarchyActive);
          }
        }
      });
    }
  });

  // js/pp/cauldron/fsm/fsm.js
  var require_fsm = __commonJS({
    "js/pp/cauldron/fsm/fsm.js"() {
      PP.StateData = class StateData {
        constructor(stateID, stateObject) {
          this.myID = stateID;
          this.myObject = stateObject;
        }
      };
      PP.TransitionData = class TransitionData {
        constructor(transitionID, fromStateData, toStateData, transitionObject, skipStateFunction) {
          this.myID = transitionID;
          this.myFromState = fromStateData;
          this.myToState = toStateData;
          this.myObject = transitionObject;
          this.mySkipStateFunction = skipStateFunction;
        }
      };
      PP.PendingPerform = class PendingPerform {
        constructor(transitionID, ...args) {
          this.myID = transitionID;
          this.myArgs = args;
        }
      };
      PP.PerformType = {
        IMMEDIATE: 0,
        DELAYED: 1
      };
      PP.PerformDelayedType = {
        QUEUE: 0,
        KEEP_FIRST: 1,
        KEEP_LAST: 2
      };
      PP.SkipStateFunction = {
        NONE: 0,
        END: 1,
        START: 2,
        BOTH: 3
      };
      PP.FSM = class FSM {
        constructor(performType = PP.PerformType.IMMEDIATE, performDelayedType = PP.PerformDelayedType.QUEUE) {
          this._myCurrentStateData = null;
          this._myStateMap = /* @__PURE__ */ new Map();
          this._myTransitionMap = /* @__PURE__ */ new Map();
          this._myDebugLogActive = false;
          this._myDebugShowDelayedInfo = false;
          this._myDebugLogName = "FSM";
          this._myPerformType = performType;
          this._myPerformDelayedType = performDelayedType;
          this._myPendingPerforms = [];
          this._myInitCallbacks = /* @__PURE__ */ new Map();
          this._myInitIDCallbacks = /* @__PURE__ */ new Map();
          this._myTransitionCallbacks = /* @__PURE__ */ new Map();
          this._myTransitionIDCallbacks = [];
        }
        addState(stateID, state = null) {
          let stateObject = null;
          if (!state || typeof state == "function") {
            stateObject = {};
            if (typeof state == "function") {
              stateObject.update = state;
            } else {
              stateObject.update = null;
            }
            stateObject.clone = function() {
              let cloneObject = {};
              cloneObject.update = this.update;
              cloneObject.clone = this.clone;
              return cloneObject;
            };
          } else {
            stateObject = state;
          }
          let stateData = new PP.StateData(stateID, stateObject);
          this._myStateMap.set(stateID, stateData);
          this._myTransitionMap.set(stateID, /* @__PURE__ */ new Map());
        }
        addTransition(fromStateID, toStateID, transitionID, transition = null, skipStateFunction = PP.SkipStateFunction.NONE) {
          let transitionObject = null;
          if (!transition || typeof transition == "function") {
            transitionObject = {};
            if (typeof transition == "function") {
              transitionObject.perform = transition;
            } else {
              transitionObject.perform = null;
            }
            transitionObject.clone = function() {
              let cloneObject = {};
              cloneObject.perform = this.perform;
              cloneObject.clone = this.clone;
              return cloneObject;
            };
          } else {
            transitionObject = transition;
          }
          if (this.hasState(fromStateID) && this.hasState(toStateID)) {
            let fromMap = this._getTransitionMapFromState(fromStateID);
            let transitionData = new PP.TransitionData(transitionID, this.getState(fromStateID), this.getState(toStateID), transitionObject, skipStateFunction);
            fromMap.set(transitionID, transitionData);
          } else {
            if (!this.hasState(fromStateID) && !this.hasState(toStateID)) {
              console.error("Can't add transition:", transitionID, "- from state not found:", fromStateID, "- to state not found:", toStateID);
            } else if (!this.hasState(fromStateID)) {
              console.error("Can't add transition:", transitionID, "- from state not found:", fromStateID);
            } else if (!this.hasState(toStateID)) {
              console.error("Can't add transition:", transitionID, "- to state not found:", toStateID);
            }
          }
        }
        init(initStateID, initTransition = null, ...args) {
          let initTransitionObject = initTransition;
          if (initTransition && typeof initTransition == "function") {
            initTransitionObject = {};
            initTransitionObject.performInit = initTransition;
          }
          if (this.hasState(initStateID)) {
            let initStateData = this._myStateMap.get(initStateID);
            if (this._myDebugLogActive) {
              console.log(this._myDebugLogName, "- Init:", initStateID);
            }
            if (initTransitionObject && initTransitionObject.performInit) {
              initTransitionObject.performInit(this, initStateData, ...args);
            } else if (initStateData.myObject && initStateData.myObject.init) {
              initStateData.myObject.init(this, initStateData, ...args);
            }
            this._myCurrentStateData = initStateData;
            if (this._myInitCallbacks.size > 0) {
              this._myInitCallbacks.forEach(function(callback) {
                callback(this, initStateData, initTransitionObject, ...args);
              }.bind(this));
            }
            if (this._myInitIDCallbacks.size > 0) {
              let callbackMap = this._myInitIDCallbacks.get(initStateID);
              if (callbackMap != null) {
                callbackMap.forEach(function(callback) {
                  callback(this, initStateData, initTransitionObject, ...args);
                }.bind(this));
              }
            }
          } else if (this._myDebugLogActive) {
            console.warn(this._myDebugLogName, "- Init state not found:", initStateID);
          }
        }
        update(dt, ...args) {
          if (this._myPendingPerforms.length > 0) {
            for (let i = 0; i < this._myPendingPerforms.length; i++) {
              this._perform(this._myPendingPerforms[i].myID, PP.PerformType.DELAYED, ...this._myPendingPerforms[i].myArgs);
            }
            this._myPendingPerforms = [];
          }
          if (this._myCurrentStateData && this._myCurrentStateData.myObject && this._myCurrentStateData.myObject.update) {
            this._myCurrentStateData.myObject.update(dt, this, ...args);
          }
        }
        perform(transitionID, ...args) {
          if (this._myPerformType == PP.PerformType.DELAYED) {
            this.performDelayed(transitionID, ...args);
          } else {
            this.performImmediate(transitionID, ...args);
          }
        }
        performDelayed(transitionID, ...args) {
          let performDelayed = false;
          switch (this._myPerformDelayedType) {
            case PP.PerformDelayedType.QUEUE:
              this._myPendingPerforms.push(new PP.PendingPerform(transitionID, ...args));
              performDelayed = true;
              break;
            case PP.PerformDelayedType.KEEP_FIRST:
              if (!this.hasPendingPerforms()) {
                this._myPendingPerforms.push(new PP.PendingPerform(transitionID, ...args));
                performDelayed = true;
              }
              break;
            case PP.PerformDelayedType.KEEP_LAST:
              this.resetPendingPerforms();
              this._myPendingPerforms.push(new PP.PendingPerform(transitionID, ...args));
              performDelayed = true;
              break;
          }
          return performDelayed;
        }
        performImmediate(transitionID, ...args) {
          return this._perform(transitionID, PP.PerformType.IMMEDIATE, ...args);
        }
        canPerform(transitionID) {
          return this.hasTransitionFromState(this._myCurrentStateData.myID, transitionID);
        }
        canGoTo(stateID, transitionID = null) {
          return this.hasTransitionFromStateToState(this._myCurrentStateData.myID, stateID, transitionID);
        }
        isInState(stateID) {
          return this._myCurrentStateData != null && this._myCurrentStateData.myID == stateID;
        }
        hasBeenInit() {
          return this._myCurrentStateData != null;
        }
        reset() {
          this.resetState();
          this.resetPendingPerforms();
        }
        resetState() {
          this._myCurrentStateData = null;
        }
        resetPendingPerforms() {
          this._myPendingPerforms = [];
        }
        getCurrentState() {
          return this._myCurrentStateData;
        }
        getCurrentTransitions() {
          return this.getTransitionsFromState(this._myCurrentStateData.myID);
        }
        getCurrentTransitionsToState(stateID) {
          return this.getTransitionsFromStateToState(this._myCurrentStateData.myID, stateID);
        }
        getState(stateID) {
          return this._myStateMap.get(stateID);
        }
        getStates() {
          return this._myStateMap.values();
        }
        getTransitions() {
          let transitions = [];
          for (let transitionsPerStateMap of this._myTransitionMap.values()) {
            for (let transitionData of transitionsPerStateMap.values()) {
              transitions.push(transitionData);
            }
          }
          return transitions;
        }
        getTransitionsFromState(fromStateID) {
          let transitionMap = this._getTransitionMapFromState(fromStateID);
          return Array.from(transitionMap.values());
        }
        getTransitionsFromStateToState(fromStateID, toStateID) {
          let transitionMap = this._getTransitionMapFromState(fromStateID);
          let transitionsToState = [];
          for (let transitionData of transitionMap.values()) {
            if (transitionData.myToState.myID == toStateID) {
              transitionsToState.push(transitionData);
            }
          }
          return transitionsToState;
        }
        removeState(stateID) {
          if (this.hasState(stateID)) {
            this._myStateMap.delete(stateID);
            this._myTransitionMap.delete(stateID);
            for (let transitionMap of this._myTransitionMap.values()) {
              let toDelete = [];
              for (let [transitionID, transitionData] of transitionMap.entries()) {
                if (transitionData.myToState.myID == stateID) {
                  toDelete.push(transitionID);
                }
              }
              for (let transitionID of toDelete) {
                transitionMap.delete(transitionID);
              }
            }
            return true;
          }
          return false;
        }
        removeTransitionFromState(fromStateID, transitionID) {
          let fromTransitions = this._getTransitionMapFromState(fromStateID);
          if (fromTransitions) {
            return fromTransitions.delete(transitionID);
          }
          return false;
        }
        hasState(stateID) {
          return this._myStateMap.has(stateID);
        }
        hasTransitionFromState(fromStateID, transitionID) {
          let transitions = this.getTransitionsFromState(fromStateID);
          let transitionIndex = transitions.findIndex(function(transition) {
            return transition.myID == transitionID;
          });
          return transitionIndex >= 0;
        }
        hasTransitionFromStateToState(fromStateID, toStateID, transitionID = null) {
          let transitions = this.getTransitionsFromStateToState(fromStateID, toStateID);
          let hasTransition = false;
          if (transitionID) {
            let transitionIndex = transitions.findIndex(function(transition) {
              return transition.myID == transitionID;
            });
            hasTransition = transitionIndex >= 0;
          } else {
            hasTransition = transitions.length > 0;
          }
          return hasTransition;
        }
        setPerformType(performType) {
          this._myPerformType = performType;
        }
        getPerformType() {
          return this._myPerformType;
        }
        setPerformDelayedType(performDelayedType) {
          this._myPerformDelayedType = performDelayedType;
        }
        getPerformDelayedType() {
          return this._myPerformDelayedType;
        }
        hasPendingPerforms() {
          return this._myPendingPerforms.length > 0;
        }
        getPendingPerforms() {
          return this._myPendingPerforms.slice(0);
        }
        clone(deepClone = false) {
          if (!this.isCloneable(deepClone)) {
            return null;
          }
          let cloneFSM = new PP.FSM();
          cloneFSM._myDebugLogActive = this._myDebugLogActive;
          cloneFSM._myDebugShowDelayedInfo = this._myDebugShowDelayedInfo;
          cloneFSM._myDebugLogName = this._myDebugLogName.slice(0);
          cloneFSM._myPerformType = this._myPerformType;
          cloneFSM._myPerformDelayedType = this._myPerformDelayedType;
          cloneFSM._myPendingPerforms = this._myPendingPerforms.slice(0);
          for (let entry of this._myStateMap.entries()) {
            let stateData = null;
            if (deepClone) {
              stateData = new PP.StateData(entry[1].myID, entry[1].myObject.clone());
            } else {
              stateData = new PP.StateData(entry[1].myID, entry[1].myObject);
            }
            cloneFSM._myStateMap.set(stateData.myID, stateData);
          }
          for (let entry of this._myTransitionMap.entries()) {
            let fromStateMap = /* @__PURE__ */ new Map();
            cloneFSM._myTransitionMap.set(entry[0], fromStateMap);
            for (let tEntry of entry[1].entries()) {
              let transitionData = null;
              let fromState = cloneFSM.getState(tEntry[1].myFromState.myID);
              let toState = cloneFSM.getState(tEntry[1].myToState.myID);
              if (deepClone) {
                transitionData = new PP.TransitionData(tEntry[1].myID, fromState, toState, tEntry[1].myObject.clone(), tEntry[1].mySkipStateFunction);
              } else {
                transitionData = new PP.TransitionData(tEntry[1].myID, fromState, toState, tEntry[1].myObject, tEntry[1].mySkipStateFunction);
              }
              fromStateMap.set(transitionData.myID, transitionData);
            }
          }
          if (this._myCurrentStateData) {
            cloneFSM._myCurrentStateData = cloneFSM.getState(this._myCurrentStateData.myID);
          }
          return cloneFSM;
        }
        isCloneable(deepClone = false) {
          if (!deepClone) {
            return true;
          }
          let isDeepCloneable = true;
          for (let entry of this._myStateMap.entries()) {
            isDeepCloneable = isDeepCloneable && entry[1].myObject.clone != null;
          }
          for (let entry of this._myTransitionMap.entries()) {
            for (let tEntry of entry[1].entries()) {
              isDeepCloneable = isDeepCloneable && tEntry[1].myObject.clone != null;
            }
          }
          return isDeepCloneable;
        }
        setDebugLogActive(active, debugLogName = null, showDelayedInfo = false) {
          this._myDebugLogActive = active;
          this._myDebugShowDelayedInfo = showDelayedInfo;
          if (debugLogName) {
            this._myDebugLogName = "FSM: ".concat(debugLogName);
          }
        }
        registerInitEventListener(callbackID, callback) {
          this._myInitCallbacks.set(callbackID, callback);
        }
        unregisterInitEventListener(callbackID) {
          this._myInitCallbacks.delete(callbackID);
        }
        registerInitIDEventListener(iniStateID, callbackID, callback) {
          let iniStateIDMap = this._myInitIDCallbacks.get(iniStateID);
          if (iniStateIDMap == null) {
            this._myInitIDCallbacks.set(iniStateID, /* @__PURE__ */ new Map());
            iniStateIDMap = this._myInitIDCallbacks.get(iniStateID);
          }
          iniStateIDMap.set(callbackID, callback);
        }
        unregisterInitIDEventListener(iniStateID, callbackID) {
          let iniStateIDMap = this._myInitIDCallbacks.get(iniStateID);
          if (iniStateIDMap != null) {
            iniStateIDMap.delete(callbackID);
            if (iniStateIDMap.size <= 0) {
              this._myInitIDCallbacks.delete(iniStateID);
            }
          }
        }
        registerTransitionEventListener(callbackID, callback) {
          this._myTransitionCallbacks.set(callbackID, callback);
        }
        unregisterTransitionEventListener(callbackID) {
          this._myTransitionCallbacks.delete(callbackID);
        }
        registerTransitionIDEventListener(fromStateID, toStateID, transitionID, callbackID, callback) {
          let transitionIDMap = null;
          for (let value of this._myTransitionIDCallbacks) {
            if (value[0] == fromStateID && value[1] == toStateID && value[2] == transitionID) {
              transitionIDMap = value[3];
              break;
            }
          }
          if (transitionIDMap == null) {
            let transitionMapValue = [];
            transitionMapValue[0] = fromStateID;
            transitionMapValue[1] = toStateID;
            transitionMapValue[2] = transitionID;
            transitionMapValue[3] = /* @__PURE__ */ new Map();
            transitionIDMap = transitionMapValue[3];
            this._myTransitionIDCallbacks.push(transitionMapValue);
          }
          transitionIDMap.set(callbackID, callback);
        }
        unregisterTransitionIDEventListener(fromStateID, toStateID, transitionID, callbackID) {
          let transitionIDMap = null;
          for (let value of this._myTransitionIDCallbacks) {
            if (value[0] == fromStateID && value[1] == toStateID && value[2] == transitionID) {
              transitionIDMap = value[3];
              break;
            }
          }
          if (transitionIDMap != null) {
            transitionIDMap.delete(callbackID);
            if (transitionIDMap.size <= 0) {
              this._myTransitionIDCallbacks.pp_remove((element) => element[0] == fromStateID && element[1] == toStateID && element[2] == transitionID);
            }
          }
        }
        _perform(transitionID, performType, ...args) {
          if (this._myCurrentStateData) {
            if (this.canPerform(transitionID)) {
              let transitions = this._myTransitionMap.get(this._myCurrentStateData.myID);
              let transitionToPerform = transitions.get(transitionID);
              let fromState = this._myCurrentStateData;
              let toState = this._myStateMap.get(transitionToPerform.myToState.myID);
              if (this._myDebugLogActive) {
                let consoleArguments = [this._myDebugLogName, "- From:", fromState.myID, "- To:", toState.myID, "- With:", transitionID];
                if (this._myDebugShowDelayedInfo) {
                  consoleArguments.push(performType == PP.PerformType.DELAYED ? "- Delayed" : "- Immediate");
                }
                console.log(...consoleArguments);
              }
              if (transitionToPerform.mySkipStateFunction != PP.SkipStateFunction.END && transitionToPerform.mySkipStateFunction != PP.SkipStateFunction.BOTH && fromState.myObject && fromState.myObject.end) {
                fromState.myObject.end(this, transitionToPerform, ...args);
              }
              if (transitionToPerform.myObject && transitionToPerform.myObject.perform) {
                transitionToPerform.myObject.perform(this, transitionToPerform, ...args);
              }
              if (transitionToPerform.mySkipStateFunction != PP.SkipStateFunction.START && transitionToPerform.mySkipStateFunction != PP.SkipStateFunction.BOTH && toState.myObject && toState.myObject.start) {
                toState.myObject.start(this, transitionToPerform, ...args);
              }
              this._myCurrentStateData = transitionToPerform.myToState;
              if (this._myTransitionCallbacks.size > 0) {
                this._myTransitionCallbacks.forEach(function(callback) {
                  callback(this, fromState, toState, transitionToPerform, performType, ...args);
                }.bind(this));
              }
              if (this._myTransitionIDCallbacks.length > 0) {
                let transitionIDMaps = [];
                for (let value of this._myTransitionIDCallbacks) {
                  if ((value[0] == null || value[0] == fromState.myID) && (value[1] == null || value[1] == toState.myID) && (value[2] == null || value[2] == transitionToPerform.myID)) {
                    transitionIDMaps.push(value[3]);
                  }
                }
                for (let callbackMap of this.transitionIDMaps) {
                  callbackMap.forEach(function(callback) {
                    callback(this, fromState, toState, transitionToPerform, performType, ...args);
                  }.bind(this));
                }
              }
              return true;
            } else if (this._myDebugLogActive) {
              let consoleArguments = [this._myDebugLogName, "- No Transition:", transitionID, "- From:", this._myCurrentStateData.myID];
              if (this._myDebugShowDelayedInfo) {
                consoleArguments.push(performType == PP.PerformType.DELAYED ? "- Delayed" : "- Immediate");
              }
              console.warn(...consoleArguments);
            }
          } else if (this._myDebugLogActive) {
            let consoleArguments = [this._myDebugLogName, "- FSM not initialized yet"];
            if (this._myDebugShowDelayedInfo) {
              consoleArguments.push(performType == PP.PerformType.DELAYED ? "- Delayed" : "- Immediate");
            }
            console.warn(...consoleArguments);
          }
          return false;
        }
        _getTransitionMapFromState(fromStateID) {
          return this._myTransitionMap.get(fromStateID);
        }
      };
    }
  });

  // js/pp/cauldron/fsm/state.js
  var require_state = __commonJS({
    "js/pp/cauldron/fsm/state.js"() {
      PP.State = class State {
        update(dt, fsm, ...args) {
        }
        init(fsm, state, ...args) {
        }
        start(fsm, transition, ...args) {
        }
        end(fsm, transition, ...args) {
        }
      };
    }
  });

  // js/pp/cauldron/fsm/transition.js
  var require_transition = __commonJS({
    "js/pp/cauldron/fsm/transition.js"() {
      PP.Transition = class Transition {
        performInit(fsm, initState, ...args) {
        }
        perform(fsm, transition, ...args) {
        }
      };
    }
  });

  // js/pp/cauldron/fsm/states/timer_state.js
  var require_timer_state = __commonJS({
    "js/pp/cauldron/fsm/states/timer_state.js"() {
      PP.TimerState = class TimerState extends PP.State {
        constructor(duration = 0, transitionToPerformOnEnd = null, ...transitionArgs) {
          super();
          this._myTransitionToPerformOnEnd = transitionToPerformOnEnd;
          this._myTransitionArgs = transitionArgs;
          this._myTimer = new PP.Timer(duration, false);
        }
        setDuration(duration) {
          this._myTimer.setDuration(duration);
        }
        setTransitionToPerformOnEnd(transitionToPerformOnEnd, ...transitionArgs) {
          this._myTransitionToPerformOnEnd = transitionToPerformOnEnd;
          this._myTransitionArgs = transitionArgs;
        }
        onEnd(callback, id = null) {
          this._myTimer.onEnd(callback, id);
        }
        unregisterOnEnd(id = null) {
          this._myTimer.unregisterOnEnd(id);
        }
        update(dt, fsm) {
          this._myTimer.update(dt);
          if (this._myTimer.isDone()) {
            if (this._myTransitionToPerformOnEnd != null) {
              fsm.perform(this._myTransitionToPerformOnEnd, ...this._myTransitionArgs);
            }
          }
        }
        start(fsm, transition, duration = null, transitionToPerformOnEnd = null, ...transitionArgs) {
          this._myTimer.start(duration);
          if (transitionToPerformOnEnd != null) {
            this._myTransitionToPerformOnEnd = transitionToPerformOnEnd;
            this._myTransitionArgs = transitionArgs;
          }
        }
      };
    }
  });

  // js/pp/cauldron/utils/ca_utils.js
  var require_ca_utils = __commonJS({
    "js/pp/cauldron/utils/ca_utils.js"() {
      PP.CAUtils = {
        _myDummyServer: null,
        _myUseDummyServerOnSDKMissing: false,
        _myUseDummyServerOnError: false,
        setUseDummyServerOnSDKMissing: function(useDummyServer) {
          PP.CAUtils._myUseDummyServerOnSDKMissing = useDummyServer;
        },
        setUseDummyServerOnError: function(useDummyServer) {
          PP.CAUtils._myUseDummyServerOnError = useDummyServer;
        },
        setDummyServer: function(dummyServer) {
          PP.CAUtils._myDummyServer = dummyServer;
        },
        isUseDummyServerOnSDKMissing: function() {
          return PP.CAUtils._myUseDummyServerOnSDKMissing;
        },
        isUseDummyServerOnError: function() {
          return PP.CAUtils._myUseDummyServerOnError;
        },
        getDummyServer: function() {
          return PP.CAUtils._myDummyServer;
        },
        isSDKAvailable: function() {
          return "casdk" in window;
        },
        getLeaderboard: function(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError, overrideUseDummyServer = null) {
          if (PP.CAUtils.isSDKAvailable()) {
            if (!isAroundPlayer) {
              casdk.getLeaderboard(leaderboardID, isAscending, isAroundPlayer, scoresAmount).then(function(result2) {
                if (result2.leaderboard) {
                  if (callbackOnDone) {
                    callbackOnDone(result2.leaderboard);
                  }
                } else {
                  if (PP.CAUtils._myUseDummyServerOnError && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
                    PP.CAUtils.getLeaderboardDummy(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError);
                  } else if (callbackOnError) {
                    let error = {};
                    error.reason = "Get leaderboard failed";
                    error.type = PP.CAUtils.ErrorType.GET_LEADERBOARD_FAILED;
                    callbackOnError(error, result2);
                  }
                }
              });
            } else {
              PP.CAUtils.getUser(function(user) {
                let userName = user.displayName;
                casdk.getLeaderboard(leaderboardID, isAscending, isAroundPlayer, scoresAmount).then(function(result2) {
                  if (result2.leaderboard) {
                    let userValid = false;
                    for (let value of result2.leaderboard) {
                      if (value.displayName == userName && value.score != 0) {
                        userValid = true;
                        break;
                      }
                    }
                    if (userValid) {
                      if (callbackOnDone) {
                        callbackOnDone(result2.leaderboard);
                      }
                    } else {
                      if (PP.CAUtils._myUseDummyServerOnError && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
                        PP.CAUtils.getLeaderboardDummy(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError);
                      } else if (callbackOnError) {
                        let error = {};
                        error.reason = "Searching for around player but the user has not submitted a score yet";
                        error.type = PP.CAUtils.ErrorType.USER_HAS_NO_SCORE;
                        callbackOnError(error, result2);
                      }
                    }
                  } else {
                    if (PP.CAUtils._myUseDummyServerOnError && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
                      PP.CAUtils.getLeaderboardDummy(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError);
                    } else if (callbackOnError) {
                      let error = {};
                      error.reason = "Get leaderboard failed";
                      error.type = PP.CAUtils.ErrorType.GET_LEADERBOARD_FAILED;
                      callbackOnError(error, result2);
                    }
                  }
                });
              }, function() {
                if (PP.CAUtils._myUseDummyServerOnError && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
                  PP.CAUtils.getLeaderboardDummy(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError);
                } else if (callbackOnError) {
                  let error = {};
                  error.reason = "Searching for around player but the user can't be retrieved";
                  error.type = PP.CAUtils.ErrorType.GET_USER_FAILED;
                  callbackOnError(error, result);
                }
              }, false);
            }
          } else {
            if (PP.CAUtils._myUseDummyServerOnSDKMissing && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
              PP.CAUtils.getLeaderboardDummy(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError);
            } else if (callbackOnError) {
              let error = {};
              error.reason = "Construct Arcade SDK missing";
              error.type = PP.CAUtils.ErrorType.CA_SDK_MISSING;
              callbackOnError(error, null);
            }
          }
        },
        getLeaderboardDummy(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError) {
          if (PP.CAUtils._myDummyServer) {
            PP.CAUtils._myDummyServer.getLeaderboard(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError);
          } else {
            if (callbackOnError) {
              let error = {};
              error.reason = "Dummy server not initialized";
              error.type = PP.CAUtils.ErrorType.DUMMY_NOT_INITIALIZED;
              callbackOnError(error);
            }
          }
        },
        submitScore: function(leaderboardID, scoreToSubmit, callbackOnDone, callbackOnError, overrideUseDummyServer = null) {
          if (PP.CAUtils.isSDKAvailable()) {
            casdk.submitScore(leaderboardID, scoreToSubmit).then(function(result2) {
              if (result2.error) {
                if (PP.CAUtils._myUseDummyServerOnError && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
                  PP.CAUtils.submitScoreDummy(leaderboardID, scoreToSubmit, callbackOnDone, callbackOnError);
                } else if (callbackOnError) {
                  let error = {};
                  error.reason = "Submit score failed";
                  error.type = PP.CAUtils.ErrorType.SUBMIT_SCORE_FAILED;
                  callbackOnError(error, result2);
                }
              } else {
                callbackOnDone();
              }
            });
          } else {
            if (PP.CAUtils._myUseDummyServerOnSDKMissing && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
              PP.CAUtils.submitScoreDummy(leaderboardID, scoreToSubmit, callbackOnDone, callbackOnError);
            } else if (callbackOnError) {
              let error = {};
              error.reason = "Construct Arcade SDK missing";
              error.type = PP.CAUtils.ErrorType.CA_SDK_MISSING;
              callbackOnError(error, null);
            }
          }
        },
        submitScoreDummy(leaderboardID, scoreToSubmit, callbackOnDone, callbackOnError) {
          if (PP.CAUtils._myDummyServer) {
            PP.CAUtils._myDummyServer.submitScore(leaderboardID, scoreToSubmit, callbackOnDone, callbackOnError);
          } else {
            if (callbackOnError) {
              let error = {};
              error.reason = "Dummy server not initialized";
              error.type = PP.CAUtils.ErrorType.DUMMY_NOT_INITIALIZED;
              callbackOnError(error);
            }
          }
        },
        getUser: function(callbackOnDone, callbackOnError, overrideUseDummyServer = null) {
          if (PP.CAUtils.isSDKAvailable()) {
            casdk.getUser().then(function(result2) {
              if (result2.user) {
                if (callbackOnDone) {
                  callbackOnDone(result2.user);
                }
              } else {
                if (PP.CAUtils._myUseDummyServerOnError && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
                  PP.CAUtils.getUserDummy(callbackOnDone, callbackOnError);
                } else if (callbackOnError) {
                  let error = {};
                  error.reason = "Get user failed";
                  error.type = PP.CAUtils.ErrorType.GET_USER_FAILED;
                  callbackOnError(error, result2);
                }
              }
            });
          } else {
            if (PP.CAUtils._myUseDummyServerOnSDKMissing && overrideUseDummyServer == null || overrideUseDummyServer != null && overrideUseDummyServer) {
              PP.CAUtils.getUserDummy(callbackOnDone, callbackOnError);
            } else if (callbackOnError) {
              let error = {};
              error.reason = "Construct Arcade SDK missing";
              error.type = PP.CAUtils.ErrorType.CA_SDK_MISSING;
              callbackOnError(error, null);
            }
          }
        },
        getUserDummy(callbackOnDone, callbackOnError) {
          if (PP.CAUtils._myDummyServer) {
            PP.CAUtils._myDummyServer.getUser(callbackOnDone, callbackOnError);
          } else {
            if (callbackOnError) {
              let error = {};
              error.reason = "Dummy server not initialized";
              error.type = PP.CAUtils.ErrorType.DUMMY_NOT_INITIALIZED;
              callbackOnError(error);
            }
          }
        },
        ErrorType: {
          DUMMY_NOT_INITIALIZED: 0,
          CA_SDK_MISSING: 1,
          SUBMIT_SCORE_FAILED: 2,
          GET_LEADERBOARD_FAILED: 3,
          GET_USER_FAILED: 4,
          USER_HAS_NO_SCORE: 5
        }
      };
      PP.CADummyServer = class CADummyServer {
        constructor() {
        }
        getLeaderboard(leaderboardID, isAscending, isAroundPlayer, scoresAmount, callbackOnDone, callbackOnError) {
          let leaderboard = null;
          if (isAroundPlayer) {
            leaderboard = [
              { rank: 7, displayName: "Player 1", score: 1e6 },
              { rank: 8, displayName: "Player 2", score: 1e6 },
              { rank: 9, displayName: "Player 3", score: 9e5 },
              { rank: 10, displayName: "Player 4", score: 8e5 },
              { rank: 11111, displayName: "Player 5", score: 7e7 },
              { rank: 22222, displayName: "VeryLongName_06", score: 6e5 },
              { rank: 33333, displayName: "Player 7", score: 5e5 },
              { rank: 44444, displayName: "Player 8", score: 4e5 },
              { rank: 55555, displayName: "Player 9", score: 3e5 },
              { rank: 66666, displayName: "Player 10", score: 2e5 }
            ];
          } else {
            leaderboard = [
              { rank: 0, displayName: "Player 1", score: 1e6 },
              { rank: 1, displayName: "Player 2", score: 1e6 },
              { rank: 2, displayName: "Player 3", score: 9e5 },
              { rank: 3, displayName: "Player 4", score: 8e5 },
              { rank: 4, displayName: "Player 5", score: 7e5 },
              { rank: 5, displayName: "Player 6", score: 6e5 },
              { rank: 6, displayName: "Player 7", score: 5e5 },
              { rank: 7, displayName: "Player 8", score: 4e5 },
              { rank: 8, displayName: "Player 9", score: 3e5 },
              { rank: 9, displayName: "Player 10", score: 2e5 }
            ];
          }
          while (leaderboard.length > scoresAmount) {
            leaderboard.pop();
          }
          if (callbackOnDone) {
            callbackOnDone(leaderboard);
          }
        }
        submitScore(leaderboardID, scoreToSubmit, callbackOnDone, callbackOnError) {
          if (callbackOnDone) {
            callbackOnDone();
          }
        }
        getUser(callbackOnDone, callbackOnError) {
          let user = {};
          user.displayName = "Jonathan";
          if (callbackOnDone) {
            callbackOnDone(user);
          }
        }
      };
    }
  });

  // js/pp/cauldron/utils/color_utils.js
  var require_color_utils = __commonJS({
    "js/pp/cauldron/utils/color_utils.js"() {
      PP.ColorUtils = {
        rgbToHsv: function(rgb) {
          let hsv = rgb.pp_clone();
          let r = rgb[0];
          let g = rgb[1];
          let b = rgb[2];
          var max3 = Math.max(r, g, b), min3 = Math.min(r, g, b), d = max3 - min3, h, s = max3 === 0 ? 0 : d / max3, v = max3;
          switch (max3) {
            case min3:
              h = 0;
              break;
            case r:
              h = g - b + d * (g < b ? 6 : 0);
              h /= 6 * d;
              break;
            case g:
              h = b - r + d * 2;
              h /= 6 * d;
              break;
            case b:
              h = r - g + d * 4;
              h /= 6 * d;
              break;
          }
          hsv[0] = h;
          hsv[1] = s;
          hsv[2] = v;
          return hsv;
        },
        hsvToRgb: function(hsv) {
          let rgb = hsv.pp_clone();
          let h = hsv[0];
          let s = hsv[1];
          let v = hsv[2];
          let r, g, b, i, f, p, q, t;
          i = Math.floor(h * 6);
          f = h * 6 - i;
          p = v * (1 - s);
          q = v * (1 - f * s);
          t = v * (1 - (1 - f) * s);
          switch (i % 6) {
            case 0:
              r = v, g = t, b = p;
              break;
            case 1:
              r = q, g = v, b = p;
              break;
            case 2:
              r = p, g = v, b = t;
              break;
            case 3:
              r = p, g = q, b = v;
              break;
            case 4:
              r = t, g = p, b = v;
              break;
            case 5:
              r = v, g = p, b = q;
              break;
          }
          rgb[0] = r;
          rgb[1] = g;
          rgb[2] = b;
          return rgb;
        },
        rgbCodeToHuman(rgb) {
          return PP.ColorUtils.color1To255(rgb);
        },
        rgbHumanToCode(rgb) {
          return PP.ColorUtils.color255To1(rgb);
        },
        hsvCodeToHuman(hsv) {
          return PP.ColorUtils.color1To255(hsv);
        },
        hsvHumanToCode(hsv) {
          return PP.ColorUtils.color255To1(hsv);
        },
        color255To1(color) {
          let result2 = color.pp_clone();
          for (let i = 0; i < result2.length; i++) {
            result2[i] /= 255;
            result2[i] = Math.pp_clamp(result2[i], 0, 1);
          }
          return result2;
        },
        color1To255(color) {
          let result2 = color.pp_clone();
          for (let i = 0; i < result2.length; i++) {
            result2[i] = Math.round(result2[i] * 255);
            result2[i] = Math.pp_clamp(result2[i], 0, 255);
          }
          return result2;
        }
      };
    }
  });

  // js/pp/cauldron/utils/mesh_utils.js
  var require_mesh_utils = __commonJS({
    "js/pp/cauldron/utils/mesh_utils.js"() {
      PP.MeshUtils = {
        createPlaneMesh: function() {
          let vertexCount = 4;
          let vertexDataSize = WL.Mesh.VERTEX_FLOAT_SIZE;
          let vertexData = new Float32Array(vertexCount * vertexDataSize);
          let indexData = new Uint32Array(vertexCount + 2);
          for (let i = 0; i < 4; ++i) {
            vertexData[i * vertexDataSize + WL.Mesh.POS.X] = -1 + (i & 1) * 2;
            vertexData[i * vertexDataSize + WL.Mesh.POS.Y] = -1 + ((i & 2) >> 1) * 2;
            vertexData[i * vertexDataSize + WL.Mesh.POS.Z] = 0;
            vertexData[i * vertexDataSize + WL.Mesh.TEXCOORD.U] = i & 1;
            vertexData[i * vertexDataSize + WL.Mesh.TEXCOORD.V] = (i & 2) >> 1;
            vertexData[i * vertexDataSize + WL.Mesh.NORMAL.X] = 0;
            vertexData[i * vertexDataSize + WL.Mesh.NORMAL.Y] = 0;
            vertexData[i * vertexDataSize + WL.Mesh.NORMAL.Z] = 1;
          }
          indexData[0] = 0;
          indexData[1] = 1;
          indexData[2] = 2;
          indexData[3] = 2;
          indexData[4] = 1;
          indexData[5] = 3;
          let mesh = new WL.Mesh({
            indexData,
            indexType: WL.MeshIndexType.UnsignedInt,
            vertexData
          });
          return mesh;
        },
        setAlpha: function(object, alpha) {
          let meshComponents = object.pp_getComponentsHierarchy("mesh");
          for (let meshComponent of meshComponents) {
            if (meshComponent.material.color != null) {
              let color = meshComponent.material.color;
              color[3] = alpha;
              meshComponent.material.color = color;
            }
            if (meshComponent.material.diffuseColor != null) {
              let color = meshComponent.material.diffuseColor;
              color[3] = alpha;
              meshComponent.material.diffuseColor = color;
            }
            if (meshComponent.material.ambientColor != null) {
              let color = meshComponent.material.ambientColor;
              color[3] = alpha;
              meshComponent.material.ambientColor = color;
            }
          }
        },
        setMaterial: function(object, material, cloneMaterial = false) {
          let meshComponents = object.pp_getComponentsHierarchy("mesh");
          for (let meshComponent of meshComponents) {
            if (cloneMaterial) {
              meshComponent.material = material.clone();
            } else {
              meshComponent.material = material;
            }
          }
        },
        setClonedMaterials: function(object) {
          let meshComponents = object.pp_getComponentsHierarchy("mesh");
          for (let meshComponent of meshComponents) {
            meshComponent.material = meshComponent.material.clone();
          }
        },
        setSpecularColor: function(object, color) {
          let meshComponents = object.pp_getComponentsHierarchy("mesh");
          for (let meshComponent of meshComponents) {
            if (meshComponent.material.specularColor != null) {
              meshComponent.material.specularColor = color;
            }
          }
        },
        setFogColor: function(object, color) {
          let meshComponents = object.pp_getComponentsHierarchy("mesh");
          for (let meshComponent of meshComponents) {
            if (meshComponent.material.fogColor != null) {
              meshComponent.material.fogColor = color;
            }
          }
        }
      };
    }
  });

  // js/pp/cauldron/utils/save_utils.js
  var require_save_utils = __commonJS({
    "js/pp/cauldron/utils/save_utils.js"() {
      PP.SaveUtils = {
        save: function(id, value) {
          if (value != null) {
            localStorage.setItem(id, value);
          }
        },
        has: function(id) {
          return PP.SaveUtils.loadString(id, null) != null;
        },
        delete: function(id) {
          return localStorage.removeItem(id);
        },
        clear: function() {
          return localStorage.clear();
        },
        load: function(id, defaultValue = null) {
          return PP.SaveUtils.loadString(id, defaultValue);
        },
        loadString: function(id, defaultValue = null) {
          let item = localStorage.getItem(id);
          if (item == null) {
            item = defaultValue;
          }
          return item;
        },
        loadNumber: function(id, defaultValue = null) {
          let item = PP.SaveUtils.loadString(id);
          if (item != null) {
            return Number(item);
          }
          return defaultValue;
        },
        loadBool: function(id, defaultValue = null) {
          let item = PP.SaveUtils.loadString(id);
          if (item == "true") {
            return true;
          } else if (item == "false") {
            return false;
          }
          return defaultValue;
        }
      };
    }
  });

  // js/pp/cauldron/utils/text_utils.js
  var require_text_utils = __commonJS({
    "js/pp/cauldron/utils/text_utils.js"() {
      PP.TextUtils = {
        setClonedMaterials: function(object) {
          let textComponents = object.pp_getComponentsHierarchy("text");
          for (let textComponent of textComponents) {
            textComponent.material = textComponent.material.clone();
          }
        }
      };
    }
  });

  // js/pp/cauldron/utils/xr_utils.js
  var require_xr_utils = __commonJS({
    "js/pp/cauldron/utils/xr_utils.js"() {
      PP.XRUtils = {
        isDeviceEmulated: function() {
          let isEmulated = "CustomWebXRPolyfill" in window;
          return isEmulated;
        },
        isXRSessionActive: function() {
          return WL.xrSession != null;
        },
        isReferenceSpaceLocalFloor: function() {
          return !["local", "viewer"].includes(WebXR.refSpace);
        }
      };
    }
  });

  // js/pp/debug/components/debug_axes_component.js
  var require_debug_axes_component = __commonJS({
    "js/pp/debug/components/debug_axes_component.js"() {
      WL.registerComponent("pp-debug-axes", {}, {
        init: function() {
        },
        start: function() {
          this._myDebugAxes = new PP.DebugAxes();
        },
        update: function(dt) {
          this._myDebugAxes.setTransform(this.object.transformWorld);
        }
      });
    }
  });

  // js/pp/debug/debug_axes.js
  var require_debug_axes = __commonJS({
    "js/pp/debug/debug_axes.js"() {
      PP.DebugAxes = class DebugAxes {
        constructor(autoRefresh = true) {
          this._myDebugRight = new PP.DebugLine();
          this._myDebugRight.setColor([1, 0, 0, 1]);
          this._myDebugUp = new PP.DebugLine();
          this._myDebugUp.setColor([0, 1, 0, 1]);
          this._myDebugForward = new PP.DebugLine();
          this._myDebugForward.setColor([0, 0, 1, 1]);
          this._myTransform = PP.mat4_create();
          this._myAxesLength = 0.1;
          this._myPositionOffset = [0, 0, 0];
          this._myVisible = true;
          this._myDirty = false;
          this._myAutoRefresh = autoRefresh;
          this._myDebugRight.setVisible(this._myVisible);
          this._myDebugUp.setVisible(this._myVisible);
          this._myDebugForward.setVisible(this._myVisible);
          this._myDebugRight.setAutoRefresh(false);
          this._myDebugUp.setAutoRefresh(false);
          this._myDebugForward.setAutoRefresh(false);
        }
        setVisible(visible) {
          this._myVisible = visible;
          this._myDebugRight.setVisible(visible);
          this._myDebugUp.setVisible(visible);
          this._myDebugForward.setVisible(visible);
        }
        setAutoRefresh(autoRefresh) {
          this._myAutoRefresh = autoRefresh;
          this._myDebugRight.setAutoRefresh(autoRefresh);
          this._myDebugUp.setAutoRefresh(autoRefresh);
          this._myDebugForward.setAutoRefresh(autoRefresh);
        }
        setTransform(transform) {
          if (transform.length == 8) {
            transform.quat2_toMatrix(this._myTransform);
          } else {
            this._myTransform.mat4_copy(transform);
          }
          this._markDirty();
        }
        setAxesLength(length5) {
          this._myAxesLength = length5;
          this._markDirty();
        }
        setPositionOffset(offset) {
          this._myPositionOffset.vec3_copy(offset);
          this._markDirty();
        }
        update(dt) {
          if (this._myDirty) {
            this._refreshAxes(dt);
            this._myDebugForward.update(dt);
            this._myDebugUp.update(dt);
            this._myDebugRight.update(dt);
            this._myDirty = false;
          }
        }
        _refreshAxes(dt) {
          let axes = this._myTransform.mat4_getAxes();
          let position = this._myTransform.mat4_getPosition();
          position.vec3_add(this._myPositionOffset, position);
          this._myDebugRight.setStartDirectionLength(position, axes[0], this._myAxesLength);
          this._myDebugUp.setStartDirectionLength(position, axes[1], this._myAxesLength);
          this._myDebugForward.setStartDirectionLength(position, axes[2], this._myAxesLength);
        }
        _markDirty() {
          this._myDirty = true;
          if (this._myAutoRefresh) {
            this._refreshAxes(0);
            this._myDebugForward._refreshLine(0);
            this._myDebugUp._refreshLine(0);
            this._myDebugRight._refreshLine(0);
          }
        }
      };
    }
  });

  // js/pp/debug/debug_data.js
  var require_debug_data = __commonJS({
    "js/pp/debug/debug_data.js"() {
      WL.registerComponent("pp-debug-data", {
        _myCubeMesh: { type: WL.Type.Mesh },
        _myFlatMaterial: { type: WL.Type.Material }
      }, {
        init: function() {
          PP.myDebugData.myRootObject = WL.scene.addObject(null);
          PP.myDebugData.myCubeMesh = this._myCubeMesh;
          PP.myDebugData.myFlatMaterial = this._myFlatMaterial;
        }
      });
      PP.myDebugData = {
        myRootObject: null,
        myCubeMesh: null,
        myFlatMaterial: null
      };
    }
  });

  // js/pp/debug/debug_line.js
  var require_debug_line = __commonJS({
    "js/pp/debug/debug_line.js"() {
      PP.DebugLine = class DebugLine {
        constructor(autoRefresh = true) {
          this._myLineRootObject = null;
          this._myLineObject = null;
          this._myStartPosition = [0, 0, 0];
          this._myDirection = [0, 0, 1];
          this._myLength = 0;
          this._myThickness = 5e-3;
          this._myColor = [0.7, 0.7, 0.7, 1];
          this._myVisible = true;
          this._myDirty = false;
          this._myAutoRefresh = autoRefresh;
          this._buildLine();
        }
        setVisible(visible) {
          if (this._myVisible != visible) {
            this._myVisible = visible;
            this._myLineRootObject.pp_setActiveHierarchy(visible);
          }
        }
        setAutoRefresh(autoRefresh) {
          this._myAutoRefresh = autoRefresh;
        }
        setStartEnd(start, end) {
          let direction = [];
          end.vec3_sub(start, direction);
          let length5 = direction.vec3_length();
          direction.vec3_normalize(direction);
          this.setStartDirectionLength(start, direction, length5);
        }
        setStartDirectionLength(start, direction, length5) {
          this._myStartPosition.vec3_copy(start);
          this._myDirection.vec3_copy(direction);
          this._myLength = length5;
          this._markDirty();
        }
        setColor(color) {
          this._myColor.vec4_copy(color);
          this._markDirty();
        }
        setThickness(thickness) {
          this._myThickness = thickness;
          this._markDirty();
        }
        update(dt) {
          if (this._myDirty) {
            this._refreshLine(dt);
            this._myDirty = false;
          }
        }
        _refreshLine(dt) {
          this._myLineRootObject.setTranslationWorld(this._myStartPosition);
          this._myLineObject.resetTranslationRotation();
          this._myLineObject.resetScaling();
          this._myLineObject.scale([this._myThickness / 2, this._myThickness / 2, this._myLength / 2]);
          let forward = this._myLineObject.pp_getForward();
          let angle2 = forward.vec3_angleRadians(this._myDirection);
          if (angle2 > 1e-4) {
            let rotationAxis = [];
            forward.vec3_cross(forward, this._myDirection, rotationAxis);
            rotationAxis.vec3_normalize(rotationAxis);
            let rotationQuat = [];
            rotationQuat.quat_fromAxis(rotationAxis, angle2);
            rotationQuat.quat_mul(this._myLineObject.transformWorld, rotationQuat);
            rotationQuat.quat_normalize(rotationQuat);
            this._myLineObject.rotateObject(rotationQuat);
          }
          forward = this._myLineObject.pp_getForward();
          let position = this._myLineObject.pp_getPosition();
          forward.vec3_scale(this._myLength / 2, forward);
          forward.vec3_add(position, position);
          this._myLineObject.setTranslationWorld(position);
          this._myLineMesh.material.color = this._myColor;
        }
        _buildLine() {
          this._myLineRootObject = WL.scene.addObject(PP.myDebugData.myRootObject);
          this._myLineObject = WL.scene.addObject(this._myLineRootObject);
          this._myLineObject.scale([0.01, 0.01, 0.01]);
          this._myLineMesh = this._myLineObject.addComponent("mesh");
          this._myLineMesh.mesh = PP.myDebugData.myCubeMesh;
          this._myLineMesh.material = PP.myDebugData.myFlatMaterial.clone();
        }
        _markDirty() {
          this._myDirty = true;
          if (this._myAutoRefresh) {
            this._refreshLine(0);
          }
        }
      };
    }
  });

  // js/pp/gameplay/grab_throw/grabbable.js
  var require_grabbable = __commonJS({
    "js/pp/gameplay/grab_throw/grabbable.js"() {
      WL.registerComponent("pp-grabbable", {
        _myThrowLinearVelocityMultiplier: { type: WL.Type.Float, default: 1 },
        _myThrowAngularVelocityMultiplier: { type: WL.Type.Float, default: 1 },
        _myKinematicValueOnRelease: { type: WL.Type.Enum, values: ["true", "false", "keep"], default: "false" }
      }, {
        init: function() {
          this._myIsGrabbed = false;
          this._myGrabber = null;
          this._myGrabCallbacks = /* @__PURE__ */ new Map();
          this._myThrowCallbacks = /* @__PURE__ */ new Map();
          this._myReleaseCallbacks = /* @__PURE__ */ new Map();
        },
        start: function() {
          this._myOldParent = this.object.parent;
          this._myPhysX = this.object.pp_getComponent("physx");
          this._myOldKinematicValue = null;
        },
        onDeactivate: function() {
          this.release();
        },
        grab: function(grabber) {
          if (!this.isGrabbed()) {
            this._myOldKinematicValue = this._myPhysX.kinematic;
          }
          this.release();
          this._myPhysX.kinematic = true;
          this._myOldParent = this.object.parent;
          this.object.pp_setParent(grabber);
          this._myIsGrabbed = true;
          this._myGrabCallbacks.forEach(function(callback) {
            callback(grabber, this);
          }.bind(this));
        },
        throw: function(linearVelocity, angularVelocity) {
          if (this._myIsGrabbed) {
            let grabber = this._myGrabber;
            this._release();
            this._myPhysX.linearVelocity = linearVelocity.vec3_scale(this._myThrowLinearVelocityMultiplier);
            this._myPhysX.angularVelocity = angularVelocity.vec3_scale(this._myThrowAngularVelocityMultiplier);
            this._myThrowCallbacks.forEach(function(callback) {
              callback(grabber, this);
            }.bind(this));
            this._myReleaseCallbacks.forEach(function(callback) {
              callback(grabber, this, true);
            }.bind(this));
          }
        },
        release() {
          if (this._myIsGrabbed) {
            let grabber = this._myGrabber;
            this._release();
            this._myReleaseCallbacks.forEach(function(callback) {
              callback(grabber, this, false);
            }.bind(this));
          }
        },
        getLinearVelocity() {
          let linearVelocity = PP.vec3_create();
          this._myPhysX.linearVelocity.vec3_clone(linearVelocity);
          return linearVelocity;
        },
        getAngularVelocity() {
          return this.getAngularVelocityDegrees();
        },
        getAngularVelocityDegrees() {
          let angularVelocityDegrees = PP.vec3_create();
          this._myPhysX.angularVelocity.vec3_toDegrees(angularVelocityDegrees);
          return angularVelocityDegrees;
        },
        getAngularVelocityRadians() {
          let angularVelocityRadians = PP.vec3_create();
          this._myPhysX.angularVelocity.vec3_clone(angularVelocityRadians);
          return angularVelocityRadians;
        },
        isGrabbed() {
          return this._myIsGrabbed;
        },
        getGrabber() {
          return this._myGrabber;
        },
        registerGrabEventListener(id, callback) {
          this._myGrabCallbacks.set(id, callback);
        },
        unregisterGrabEventListener(id) {
          this._myGrabCallbacks.delete(id);
        },
        registerThrowEventListener(id, callback) {
          this._myThrowCallbacks.set(id, callback);
        },
        unregisterThrowEventListener(id) {
          this._myThrowCallbacks.delete(id);
        },
        registerReleaseEventListener(id, callback) {
          this._myReleaseCallbacks.set(id, callback);
        },
        unregisterReleaseEventListener(id) {
          this._myReleaseCallbacks.delete(id);
        },
        _release() {
          this.object.pp_setParent(this._myOldParent);
          this._myIsGrabbed = false;
          this._myGrabber = null;
          if (this._myKinematicValueOnRelease == 0) {
            this._myPhysX.kinematic = true;
          } else if (this._myKinematicValueOnRelease == 1) {
            this._myPhysX.kinematic = false;
          } else if (this._myOldKinematicValue != null) {
            this._myPhysX.kinematic = this._myOldKinematicValue;
          }
          if (this._myPhysX.kinematic) {
            this._myPhysX.linearVelocity = [0, 0, 0];
            this._myPhysX.angularVelocity = [0, 0, 0];
          }
        }
      });
    }
  });

  // js/pp/gameplay/grab_throw/grabber_hand.js
  var require_grabber_hand = __commonJS({
    "js/pp/gameplay/grab_throw/grabber_hand.js"() {
      WL.registerComponent("pp-grabber-hand", {
        _myHandedness: { type: WL.Type.Enum, values: ["left", "right"], default: "left" },
        _myGrabButton: { type: WL.Type.Enum, values: ["select", "squeeze", "both", "both_exclusive"], default: "squeeze" },
        _mySnapOnPivot: { type: WL.Type.Bool, default: false },
        _myMaxNumberOfObjects: { type: WL.Type.Int, default: 1 },
        _myThrowVelocitySource: { type: WL.Type.Enum, values: ["hand", "grabbable"], default: "hand" },
        _myThrowLinearVelocityMultiplier: { type: WL.Type.Float, default: 1 },
        _myThrowMaxLinearSpeed: { type: WL.Type.Float, default: 15 },
        _myThrowAngularVelocityMultiplier: { type: WL.Type.Float, default: 0.5 },
        _myThrowMaxAngularSpeed: { type: WL.Type.Float, default: 1080 },
        _myThrowLinearVelocityBoost: { type: WL.Type.Float, default: 1.75 },
        _myThrowLinearVelocityBoostMinSpeedThreshold: { type: WL.Type.Float, default: 0.6 },
        _myThrowLinearVelocityBoostMaxSpeedThreshold: { type: WL.Type.Float, default: 2.5 }
      }, {
        init: function() {
          this._myHandPose = new PP.HandPose(PP.InputUtils.getHandednessByIndex(this._myHandedness));
          this._myGrabbables = [];
          this._myGamepad = null;
          this._myActiveGrabButton = null;
          this._myLinearVelocityHistorySize = 5;
          this._myLinearVelocityHistorySpeedAverageSamplesFromStart = 1;
          this._myLinearVelocityHistoryDirectionAverageSamplesFromStart = 3;
          this._myLinearVelocityHistoryDirectionAverageSkipFromStart = 0;
          this._myHandLinearVelocityHistory = new Array(this._myLinearVelocityHistorySize);
          this._myHandLinearVelocityHistory.fill([0, 0, 0]);
          this._myAngularVelocityHistorySize = 1;
          this._myHandAngularVelocityHistory = new Array(this._myAngularVelocityHistorySize);
          this._myHandAngularVelocityHistory.fill([0, 0, 0]);
          this._myThrowMaxAngularSpeedRadians = Math.pp_toRadians(this._myThrowMaxAngularSpeed);
          this._myGrabCallbacks = /* @__PURE__ */ new Map();
          this._myThrowCallbacks = /* @__PURE__ */ new Map();
          this._myDebugActive = false;
        },
        start: function() {
          if (this._myHandedness == PP.HandednessIndex.LEFT) {
            this._myGamepad = PP.myLeftGamepad;
          } else {
            this._myGamepad = PP.myRightGamepad;
          }
          this._myPhysX = this.object.pp_getComponent("physx");
          this._myCollisionsCollector = new PP.PhysXCollisionCollector(this._myPhysX, true);
          this._myHandPose.start();
          if (this._myDebugActive) {
            this._myDebugLines = [];
            for (let i = 0; i < this._myLinearVelocityHistorySize; i++) {
              let line = new PP.DebugLine();
              line.setVisible(false);
              this._myDebugLines.push(line);
            }
          }
        },
        update: function(dt) {
          this._myCollisionsCollector.update(dt);
          this._myHandPose.update(dt);
          if (this._myGrabbables.length > 0) {
            this._updateLinearVelocityHistory();
            this._updateAngularVelocityHistory();
          }
        },
        grab: function(grabButton = null) {
          this._grab(grabButton);
        },
        throw: function(throwButton = null) {
          this._throw(throwButton);
        },
        registerGrabEventListener(id, callback) {
          this._myGrabCallbacks.set(id, callback);
        },
        unregisterGrabEventListener(id) {
          this._myGrabCallbacks.delete(id);
        },
        registerThrowEventListener(id, callback) {
          this._myThrowCallbacks.set(id, callback);
        },
        unregisterThrowEventListener(id) {
          this._myThrowCallbacks.delete(id);
        },
        onActivate() {
          if (this._myGrabButton == 0) {
            this._myGamepad.registerButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.PRESS_START, this, this._grab.bind(this, PP.ButtonType.SELECT));
            this._myGamepad.registerButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.PRESS_END, this, this._throw.bind(this, PP.ButtonType.SELECT));
          } else if (this._myGrabButton == 1) {
            this._myGamepad.registerButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.PRESS_START, this, this._grab.bind(this, PP.ButtonType.SQUEEZE));
            this._myGamepad.registerButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.PRESS_END, this, this._throw.bind(this, PP.ButtonType.SQUEEZE));
          } else {
            this._myGamepad.registerButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.PRESS_START, this, this._grab.bind(this, PP.ButtonType.SQUEEZE));
            this._myGamepad.registerButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.PRESS_END, this, this._throw.bind(this, PP.ButtonType.SQUEEZE));
            this._myGamepad.registerButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.PRESS_START, this, this._grab.bind(this, PP.ButtonType.SELECT));
            this._myGamepad.registerButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.PRESS_END, this, this._throw.bind(this, PP.ButtonType.SELECT));
          }
        },
        onDeactivate() {
          if (this._myGrabButton == 0) {
            this._myGamepad.unregisterButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.PRESS_START, this);
            this._myGamepad.unregisterButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.PRESS_END, this);
          } else if (this._myGrabButton == 1) {
            this._myGamepad.unregisterButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.PRESS_START, this);
            this._myGamepad.unregisterButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.PRESS_END, this);
          } else {
            this._myGamepad.unregisterButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.PRESS_START, this);
            this._myGamepad.unregisterButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.PRESS_END, this);
            this._myGamepad.unregisterButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.PRESS_START, this);
            this._myGamepad.unregisterButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.PRESS_END, this);
          }
        },
        _grab: function(grabButton) {
          if (this._myGrabbables.length >= this._myMaxNumberOfObjects) {
            return;
          }
          if (this._myGrabButton == 2 || this._myActiveGrabButton == null || this._myActiveGrabButton == grabButton || grabButton == null) {
            let grabbablesToGrab = [];
            let collisions = this._myCollisionsCollector.getCollisions();
            for (let i = 0; i < collisions.length; i++) {
              let grabbable = collisions[i].getComponent("pp-grabbable");
              if (grabbable && grabbable.active) {
                grabbablesToGrab.push(grabbable);
              }
            }
            for (let grabbableToGrab of grabbablesToGrab) {
              if (!this._isAlreadyGrabbed(grabbableToGrab)) {
                let grabbableData = new PP.GrabberHandGrabbableData(grabbableToGrab, this._myThrowVelocitySource == 1, this._myLinearVelocityHistorySize, this._myAngularVelocityHistorySize);
                this._myGrabbables.push(grabbableData);
                grabbableToGrab.grab(this.object);
                grabbableToGrab.registerReleaseEventListener(this, this._onRelease.bind(this));
                if (this._mySnapOnPivot) {
                  grabbableToGrab.object.resetTranslation();
                }
                this._myGrabCallbacks.forEach(function(callback) {
                  callback(this, grabbableToGrab);
                }.bind(this));
              }
              if (this._myGrabbables.length >= this._myMaxNumberOfObjects) {
                break;
              }
            }
            if (this._myGrabbables.length > 0) {
              if (this._myActiveGrabButton == null) {
                this._myActiveGrabButton = grabButton;
              }
            }
          }
        },
        _throw: function(throwButton) {
          if (this._myGrabButton == 2 || this._myActiveGrabButton == null || this._myActiveGrabButton == throwButton || throwButton == null) {
            if (this._myGrabbables.length > 0) {
              let linearVelocity = null;
              let angularVelocity = null;
              if (this._myThrowVelocitySource == 0) {
                linearVelocity = this._computeReleaseLinearVelocity(this._myHandLinearVelocityHistory);
                angularVelocity = this._computeReleaseAngularVelocity(this._myHandAngularVelocityHistory);
              }
              for (let grabbableData of this._myGrabbables) {
                let grabbable = grabbableData.getGrabbable();
                grabbable.unregisterReleaseEventListener(this);
                if (this._myThrowVelocitySource == 1) {
                  linearVelocity = this._computeReleaseLinearVelocity(grabbableData.getLinearVelocityHistory());
                  angularVelocity = this._computeReleaseAngularVelocity(grabbableData.getAngularVelocityHistory());
                }
                grabbable.throw(linearVelocity, angularVelocity);
                this._myThrowCallbacks.forEach(function(callback) {
                  callback(this, grabbable);
                }.bind(this));
              }
              this._myGrabbables = [];
            }
            this._myActiveGrabButton = null;
          }
        },
        _onRelease(grabber, grabbable) {
          grabbable.unregisterReleaseEventListener(this);
          this._myGrabbables.pp_remove((element) => element.getGrabbable() == grabbable);
          if (this._myGrabbables.length <= 0) {
            this._myActiveGrabButton = null;
          }
        },
        _updateLinearVelocityHistory() {
          this._myHandLinearVelocityHistory.unshift(this._myHandPose.getLinearVelocity());
          this._myHandLinearVelocityHistory.pop();
          for (let grabbable of this._myGrabbables) {
            grabbable.updateLinearVelocityHistory();
          }
        },
        _updateAngularVelocityHistory() {
          this._myHandAngularVelocityHistory.unshift(this._myHandPose.getAngularVelocityRadians());
          this._myHandAngularVelocityHistory.pop();
          for (let grabbable of this._myGrabbables) {
            grabbable.updateAngularVelocityHistory();
          }
        },
        _computeReleaseLinearVelocity(linearVelocityHistory) {
          let speed = linearVelocityHistory[0].vec3_length();
          for (let i = 1; i < this._myLinearVelocityHistorySpeedAverageSamplesFromStart; i++) {
            speed += linearVelocityHistory[i].vec3_length();
          }
          speed /= this._myLinearVelocityHistorySpeedAverageSamplesFromStart;
          let speedEaseMultiplier = Math.pp_mapToRange(speed, this._myThrowLinearVelocityBoostMinSpeedThreshold, this._myThrowLinearVelocityBoostMaxSpeedThreshold, 0, 1);
          speedEaseMultiplier = PP.EasingFunction.easeIn(speedEaseMultiplier);
          let extraSpeed = speed * (speedEaseMultiplier * this._myThrowLinearVelocityBoost);
          speed += extraSpeed;
          speed *= this._myThrowLinearVelocityMultiplier;
          speed = Math.pp_clamp(speed, 0, this._myThrowMaxLinearSpeed);
          if (this._myDebugActive) {
            this._debugDirectionLines(linearVelocityHistory);
          }
          let directionCurrentWeight = this._myLinearVelocityHistoryDirectionAverageSamplesFromStart;
          let lastDirectionIndex = this._myLinearVelocityHistoryDirectionAverageSkipFromStart + this._myLinearVelocityHistoryDirectionAverageSamplesFromStart;
          let direction = [0, 0, 0];
          for (let i = this._myLinearVelocityHistoryDirectionAverageSkipFromStart; i < lastDirectionIndex; i++) {
            let currentDirection = linearVelocityHistory[i];
            currentDirection.vec3_scale(directionCurrentWeight, currentDirection);
            direction.vec3_add(currentDirection, direction);
            directionCurrentWeight--;
          }
          direction.vec3_normalize(direction);
          direction.vec3_scale(speed, direction);
          return direction;
        },
        _computeReleaseAngularVelocity(angularVelocityHistory) {
          let angularVelocity = angularVelocityHistory[0];
          let speed = angularVelocity.vec3_length();
          speed = Math.pp_clamp(speed * this._myThrowAngularVelocityMultiplier, 0, this._myThrowMaxAngularSpeedRadians);
          let direction = angularVelocity;
          direction.vec3_normalize(direction);
          direction.vec3_scale(speed, direction);
          return direction;
        },
        _debugDirectionLines(linearVelocityHistory) {
          for (let j = this._myLinearVelocityHistoryDirectionAverageSkipFromStart + this._myLinearVelocityHistoryDirectionAverageSamplesFromStart; j > this._myLinearVelocityHistoryDirectionAverageSkipFromStart; j--) {
            let directionCurrentWeight = j - this._myLinearVelocityHistoryDirectionAverageSkipFromStart;
            let lastDirectionIndex = j - this._myLinearVelocityHistoryDirectionAverageSkipFromStart;
            let direction = [0, 0, 0];
            for (let i = this._myLinearVelocityHistoryDirectionAverageSkipFromStart; i < lastDirectionIndex; i++) {
              let currentDirection = linearVelocityHistory[i].pp_clone();
              currentDirection.vec3_scale(directionCurrentWeight, currentDirection);
              direction.vec3_add(currentDirection, direction);
              directionCurrentWeight--;
            }
            direction.vec3_normalize(direction);
            this._myDebugLines[j - 1].setStartDirectionLength(this.object.pp_getPosition(), direction, 0.2);
            let color = 1 / j;
            this._myDebugLines[j - 1].setColor([color, color, color, 1]);
            this._myDebugLines[j - 1].setVisible(true);
          }
        },
        _isAlreadyGrabbed(grabbable) {
          let found = this._myGrabbables.pp_find((element) => element.getGrabbable() == grabbable);
          return found != null;
        }
      });
      PP.GrabberHandGrabbableData = class GrabberHandGrabbableData {
        constructor(grabbable, useGrabbableAsVelocitySource, linearVelocityHistorySize, angularVelocityHistorySize) {
          this._myGrabbable = grabbable;
          this._myUseGrabbableAsVelocitySource = useGrabbableAsVelocitySource;
          if (this._myUseGrabbableAsVelocitySource) {
            this._myLinearVelocityHistory = new Array(linearVelocityHistorySize);
            this._myLinearVelocityHistory.fill([0, 0, 0]);
            this._myAngularVelocityHistory = new Array(angularVelocityHistorySize);
            this._myAngularVelocityHistory.fill([0, 0, 0]);
          }
        }
        getGrabbable() {
          return this._myGrabbable;
        }
        getLinearVelocityHistory() {
          return this._myLinearVelocityHistory;
        }
        getAngularVelocityHistory() {
          return this._myAngularVelocityHistory;
        }
        updateLinearVelocityHistory() {
          if (this._myUseGrabbableAsVelocitySource) {
            this._myLinearVelocityHistory.unshift(this._myGrabbable.getLinearVelocity());
            this._myLinearVelocityHistory.pop();
          }
        }
        updateAngularVelocityHistory() {
          if (this._myUseGrabbableAsVelocitySource) {
            this._myAngularVelocityHistory.unshift(this._myGrabbable.getAngularVelocityRadians());
            this._myAngularVelocityHistory.pop();
          }
        }
      };
    }
  });

  // js/pp/input/cauldron/finger_cursor.js
  var require_finger_cursor = __commonJS({
    "js/pp/input/cauldron/finger_cursor.js"() {
      WL.registerComponent("pp-finger-cursor", {
        _myHandedness: { type: WL.Type.Enum, values: ["left", "right"], default: "left" },
        _myEnableMultipleClicks: { type: WL.Type.Bool, default: true },
        _myCollisionGroup: { type: WL.Type.Int, default: 1 },
        _myCursorMesh: { type: WL.Type.Mesh, default: null },
        _myCursorMaterial: { type: WL.Type.Material, default: null },
        _myCursorSize: { type: WL.Type.Float, default: 0.0125 }
      }, {
        init: function() {
          this._myLastTarget = null;
          this._myReferenceSpace = null;
          this._myHandInputSource = null;
          this._myHandednessString = ["left", "right"][this._myHandedness];
          this._myDoubleClickTimer = 0;
          this._myTripleClickTimer = 0;
          this._myMultipleClickObject = null;
          this._myMultipleClickDelay = 0.3;
        },
        start: function() {
          this._myCursorObject = WL.scene.addObject(this.object.parent);
          this._myCursorObject.scale([this._myCursorSize, this._myCursorSize, this._myCursorSize]);
          if (this._myCursorMesh) {
            this._myCursorMeshComponent = this._myCursorObject.addComponent("mesh");
            this._myCursorMeshComponent.mesh = this._myCursorMesh;
            this._myCursorMeshComponent.material = this._myCursorMaterial.clone();
          }
          this._myCollisionComponent = this._myCursorObject.addComponent("collision");
          this._myCollisionComponent.collider = 0;
          this._myCollisionComponent.group = 1 << this._myCollisionGroup;
          this._myCollisionComponent.extents = [this._myCursorSize, this._myCursorSize, this._myCursorSize];
          if (WL.xrSession) {
            this._onXRSessionStart(WL.xrSession);
          }
          WL.onXRSessionStart.push(this._onXRSessionStart.bind(this));
          WL.onXRSessionEnd.push(this._onXRSessionEnd.bind(this));
        },
        update: function(dt) {
          if (this._myDoubleClickTimer > 0) {
            this._myDoubleClickTimer -= dt;
          }
          if (this._myTripleClickTimer > 0) {
            this._myTripleClickTimer -= dt;
          }
          this._updateHand();
          if (this._myHandInputSource) {
            let overlaps = this._myCollisionComponent.queryOverlaps();
            let overlapTarget = null;
            for (let i = 0; i < overlaps.length; ++i) {
              let object = overlaps[i].object;
              let target = object.getComponent("cursor-target");
              if (target && (overlapTarget == null || !target.isSurface)) {
                overlapTarget = target;
                if (!target.isSurface) {
                  break;
                }
              }
            }
            if (!overlapTarget) {
              this._targetTouchEnd();
            } else if (!overlapTarget.equals(this._myLastTarget)) {
              this._targetTouchEnd();
              this._myLastTarget = overlapTarget;
              this._targetTouchStart();
            }
          } else {
            this._targetTouchEnd();
          }
        },
        _targetTouchStart: function() {
          this._myLastTarget.onHover(this._myLastTarget.object, this);
          this._myLastTarget.onDown(this._myLastTarget.object, this);
        },
        _targetTouchEnd: function() {
          if (this._myLastTarget) {
            if (this._myEnableMultipleClicks && this._myTripleClickTimer > 0 && this._myMultipleClickObject && this._myMultipleClickObject.equals(this._myLastTarget.object)) {
              this._myLastTarget.onTripleClick(this._myLastTarget.object, this);
              this._myTripleClickTimer = 0;
            } else if (this._myEnableMultipleClicks && this._myDoubleClickTimer > 0 && this._myMultipleClickObject && this._myMultipleClickObject.equals(this._myLastTarget.object)) {
              this._myLastTarget.onDoubleClick(this._myLastTarget.object, this);
              this._myTripleClickTimer = this._myMultipleClickDelay;
              this._myDoubleClickTimer = 0;
            } else {
              this._myLastTarget.onClick(this._myLastTarget.object, this);
              this._myTripleClickTimer = 0;
              this._myDoubleClickTimer = this._myMultipleClickDelay;
              this._myMultipleClickObject = this._myLastTarget.object;
            }
            this._myLastTarget.onUp(this._myLastTarget.object, this);
            this._myLastTarget.onUnhover(this._myLastTarget.object, this);
            this._myLastTarget = null;
          }
        },
        setActive: function(active) {
          this._myCursorObject.pp_setActiveHierarchy(active);
          this.active = active;
        },
        _updateHand() {
          this._myHandInputSource = PP.InputUtils.getInputSource(this._myHandednessString, PP.InputSourceType.HAND);
          if (this._myHandInputSource) {
            let tip = Module["webxr_frame"].getJointPose(this._myHandInputSource.hand.get("index-finger-tip"), this._myReferenceSpace);
            if (tip) {
              this._myCursorObject.resetTransform();
              this._myCursorObject.transformLocal.set([
                tip.transform.orientation.x,
                tip.transform.orientation.y,
                tip.transform.orientation.z,
                tip.transform.orientation.w
              ]);
              this._myCursorObject.translate([
                tip.transform.position.x,
                tip.transform.position.y,
                tip.transform.position.z
              ]);
              this._myCursorObject.scale([this._myCursorSize, this._myCursorSize, this._myCursorSize]);
            }
          }
        },
        _onXRSessionStart: function(session) {
          session.requestReferenceSpace(WebXR.refSpace).then(function(referenceSpace) {
            this._myReferenceSpace = referenceSpace;
          }.bind(this));
        },
        _onXRSessionEnd: function(session) {
          this._myReferenceSpace = null;
        }
      });
    }
  });

  // js/pp/input/cauldron/hand_pose.js
  var require_hand_pose = __commonJS({
    "js/pp/input/cauldron/hand_pose.js"() {
      PP.HandPose = class HandPose {
        constructor(handedness, fixForward = true, forceEmulatedVelocities = false) {
          this._myInputSource = null;
          this._myHandedness = handedness;
          this._myFixForward = fixForward;
          this._myForceEmulatedVelocities = forceEmulatedVelocities;
          this._myReferenceSpace = null;
          this._myPosition = [0, 0, 0];
          this._myRotation = [0, 0, 0, 1];
          this._myPrevPosition = [0, 0, 0];
          this._myPrevRotation = [0, 0, 0, 1];
          this._myLinearVelocity = [0, 0, 0];
          this._myAngularVelocity = [0, 0, 0];
          this._myIsValid = false;
          this._myIsLinearVelocityEmulated = true;
          this._myIsAngularVelocityEmulated = true;
        }
        getReferenceSpace() {
          return this._myReferenceSpace;
        }
        getInputSource() {
          return this._myInputSource;
        }
        getPosition() {
          return this._myPosition.slice(0);
        }
        getRotation() {
          return this.getRotationDegrees();
        }
        getRotationDegrees() {
          return this.getRotationQuat().quat_toDegrees();
        }
        getRotationRadians() {
          return this.getRotationQuat().quat_toRadians();
        }
        getRotationQuat() {
          let out = this._myRotation.slice(0);
          if (this._myFixForward && false) {
            out.quat_rotateAxisRadians(Math.PI, [0, 1, 0], out);
          }
          return out;
        }
        getTransform() {
          return this.getTransformMatrix();
        }
        getTransformMatrix() {
          return PP.mat4_fromPositionRotationQuat(this._myPosition, this.getRotationQuat());
        }
        getTransformQuat() {
          return PP.quat2_fromPositionRotationQuat(this._myPosition, this.getRotationQuat());
        }
        getLinearVelocity() {
          return this._myLinearVelocity.slice(0);
        }
        getAngularVelocity() {
          return this.getAngularVelocityDegrees();
        }
        getAngularVelocityDegrees() {
          return this._myAngularVelocity.vec3_toDegrees();
        }
        getAngularVelocityRadians() {
          return this._myAngularVelocity.slice(0);
        }
        isValid() {
          return this._myIsValid;
        }
        isLinearVelocityEmulated() {
          return this._myIsLinearVelocityEmulated;
        }
        isAngularVelocityEmulated() {
          return this._myIsAngularVelocityEmulated;
        }
        setFixForward(fixForward) {
          this._myFixForward = fixForward;
        }
        setForceEmulatedVelocities(forceEmulatedVelocities) {
          this._myForceEmulatedVelocities = forceEmulatedVelocities;
        }
        start() {
          if (WL.xrSession) {
            this._onXRSessionStart(true, WL.xrSession);
          }
          WL.onXRSessionStart.push(this._onXRSessionStart.bind(this, false));
          WL.onXRSessionEnd.push(this._onXRSessionEnd.bind(this));
        }
        update(dt) {
          this._myPrevPosition.vec3_copy(this._myPosition);
          this._myPrevRotation.quat_copy(this._myRotation);
          let xrFrame = Module["webxr_frame"];
          if (xrFrame && this._myInputSource) {
            let xrPose = null;
            try {
              xrPose = xrFrame.getPose(this._myInputSource.gripSpace, this._myReferenceSpace);
            } catch (error) {
            }
            if (xrPose) {
              this._myPosition[0] = xrPose.transform.position.x;
              this._myPosition[1] = xrPose.transform.position.y;
              this._myPosition[2] = xrPose.transform.position.z;
              this._myRotation[0] = xrPose.transform.orientation.x;
              this._myRotation[1] = xrPose.transform.orientation.y;
              this._myRotation[2] = xrPose.transform.orientation.z;
              this._myRotation[3] = xrPose.transform.orientation.w;
              if (xrPose.linearVelocity && !this._myForceEmulatedVelocities) {
                this._myLinearVelocity[0] = xrPose.linearVelocity.x;
                this._myLinearVelocity[1] = xrPose.linearVelocity.y;
                this._myLinearVelocity[2] = xrPose.linearVelocity.z;
                this._myIsLinearVelocityEmulated = false;
              } else {
                this._computeEmulatedLinearVelocity(dt);
                this._myIsLinearVelocityEmulated = true;
              }
              if (xrPose.angularVelocity && !this._myForceEmulatedVelocities) {
                this._myAngularVelocity[0] = xrPose.angularVelocity.x;
                this._myAngularVelocity[1] = xrPose.angularVelocity.y;
                this._myAngularVelocity[2] = xrPose.angularVelocity.z;
                this._myIsAngularVelocityEmulated = false;
              } else {
                this._computeEmulatedAngularVelocity(dt);
                this._myIsAngularVelocityEmulated = true;
              }
              this._myIsValid = true;
            } else {
              this._myLinearVelocity[0] = 0;
              this._myLinearVelocity[1] = 0;
              this._myLinearVelocity[2] = 0;
              this._myAngularVelocity[0] = 0;
              this._myAngularVelocity[1] = 0;
              this._myAngularVelocity[2] = 0;
              this._myIsValid = false;
              this._myIsLinearVelocityEmulated = true;
              this._myIsAngularVelocityEmulated = true;
            }
          } else {
            this._myLinearVelocity[0] = 0;
            this._myLinearVelocity[1] = 0;
            this._myLinearVelocity[2] = 0;
            this._myAngularVelocity[0] = 0;
            this._myAngularVelocity[1] = 0;
            this._myAngularVelocity[2] = 0;
            this._myIsValid = false;
            this._myIsLinearVelocityEmulated = true;
            this._myIsAngularVelocityEmulated = true;
          }
        }
        _computeEmulatedLinearVelocity(dt) {
          if (dt > 0) {
            this._myPosition.vec3_sub(this._myPrevPosition, this._myLinearVelocity);
            this._myLinearVelocity.vec3_scale(1 / dt, this._myLinearVelocity);
          } else {
            this._myLinearVelocity[0] = 0;
            this._myLinearVelocity[1] = 0;
            this._myLinearVelocity[2] = 0;
          }
        }
        _computeEmulatedAngularVelocity(dt) {
          if (dt > 0) {
            let rotationRadians = this._myRotation.quat_toRadians();
            let prevRotationRadians = this._myPrevRotation.quat_toRadians();
            rotationRadians.vec3_sub(prevRotationRadians, this._myAngularVelocity);
            this._myAngularVelocity.vec3_scale(1 / dt, this._myAngularVelocity);
          } else {
            this._myAngularVelocity[0] = 0;
            this._myAngularVelocity[1] = 0;
            this._myAngularVelocity[2] = 0;
          }
        }
        _onXRSessionStart(manualStart, session) {
          session.requestReferenceSpace(WebXR.refSpace).then(function(referenceSpace) {
            this._myReferenceSpace = referenceSpace;
          }.bind(this));
          session.addEventListener("inputsourceschange", function(event) {
            if (event.removed) {
              for (let item of event.removed) {
                if (item == this._myInputSource) {
                  this._myInputSource = null;
                }
              }
            }
            if (event.added) {
              for (let item of event.added) {
                if (item.handedness == this._myHandedness) {
                  this._myInputSource = item;
                }
              }
            }
          }.bind(this));
          if (manualStart && this._myInputSource == null && session.inputSources) {
            for (let item of session.inputSources) {
              if (item.handedness == this._myHandedness) {
                this._myInputSource = item;
              }
            }
          }
        }
        _onXRSessionEnd(session) {
          this._myReferenceSpace = null;
          this._myInputSource = null;
        }
      };
    }
  });

  // js/pp/input/cauldron/head_pose.js
  var require_head_pose = __commonJS({
    "js/pp/input/cauldron/head_pose.js"() {
      PP.HeadPose = class HeadPose {
        constructor(fixForward = true, forceEmulatedVelocities = false) {
          this._myFixForward = fixForward;
          this._myForceEmulatedVelocities = forceEmulatedVelocities;
          this._myReferenceSpace = null;
          this._myPosition = [0, 0, 0];
          this._myRotation = [0, 0, 0, 1];
          this._myPrevPosition = [0, 0, 0];
          this._myPrevRotation = [0, 0, 0, 1];
          this._myLinearVelocity = [0, 0, 0];
          this._myAngularVelocity = [0, 0, 0];
          this._myIsValid = false;
          this._myIsLinearVelocityEmulated = true;
          this._myIsAngularVelocityEmulated = true;
        }
        getReferenceSpace() {
          return this._myReferenceSpace;
        }
        getPosition() {
          return this._myPosition.slice(0);
        }
        getRotation() {
          return this.getRotationDegrees();
        }
        getRotationDegrees() {
          return this.getRotationQuat().quat_toDegrees();
        }
        getRotationRadians() {
          return this.getRotationQuat().quat_toRadians();
        }
        getRotationQuat() {
          let out = this._myRotation.slice(0);
          if (this._myFixForward) {
            out.quat_rotateAxisRadians(Math.PI, [0, 1, 0], out);
          }
          return out;
        }
        getTransform() {
          return this.getTransformMatrix();
        }
        getTransformMatrix() {
          return PP.mat4_fromPositionRotationQuat(this._myPosition, this.getRotationQuat());
        }
        getTransformQuat() {
          return PP.quat2_fromPositionRotationQuat(this._myPosition, this.getRotationQuat());
        }
        getLinearVelocity() {
          return this._myLinearVelocity.slice(0);
        }
        getAngularVelocity() {
          return this.getAngularVelocityDegrees();
        }
        getAngularVelocityDegrees() {
          return this._myAngularVelocity.vec3_toDegrees();
        }
        getAngularVelocityRadians() {
          return this._myAngularVelocity.slice(0);
        }
        isValid() {
          return this._myIsValid;
        }
        isLinearVelocityEmulated() {
          return this._myIsLinearVelocityEmulated;
        }
        isAngularVelocityEmulated() {
          return this._myIsAngularVelocityEmulated;
        }
        setFixForward(fixForward) {
          this._myFixForward = fixForward;
        }
        setForceEmulatedVelocities(forceEmulatedVelocities) {
          this._myForceEmulatedVelocities = forceEmulatedVelocities;
        }
        start() {
          if (WL.xrSession) {
            this._onXRSessionStart(WL.xrSession);
          }
          WL.onXRSessionStart.push(this._onXRSessionStart.bind(this));
          WL.onXRSessionEnd.push(this._onXRSessionEnd.bind(this));
        }
        update(dt) {
          this._myPrevPosition.vec3_copy(this._myPosition);
          this._myPrevRotation.quat_copy(this._myRotation);
          let xrFrame = Module["webxr_frame"];
          if (xrFrame) {
            let xrPose = null;
            try {
              xrPose = xrFrame.getViewerPose(this._myReferenceSpace);
            } catch (error) {
            }
            if (xrPose) {
              this._myPosition[0] = xrPose.transform.position.x;
              this._myPosition[1] = xrPose.transform.position.y;
              this._myPosition[2] = xrPose.transform.position.z;
              this._myRotation[0] = xrPose.transform.orientation.x;
              this._myRotation[1] = xrPose.transform.orientation.y;
              this._myRotation[2] = xrPose.transform.orientation.z;
              this._myRotation[3] = xrPose.transform.orientation.w;
              if (xrPose.linearVelocity && !this._myForceEmulatedVelocities) {
                this._myLinearVelocity[0] = xrPose.linearVelocity.x;
                this._myLinearVelocity[1] = xrPose.linearVelocity.y;
                this._myLinearVelocity[2] = xrPose.linearVelocity.z;
                this._myIsLinearVelocityEmulated = false;
              } else {
                this._computeEmulatedLinearVelocity(dt);
                this._myIsLinearVelocityEmulated = true;
              }
              if (xrPose.angularVelocity && !this._myForceEmulatedVelocities) {
                this._myAngularVelocity[0] = xrPose.angularVelocity.x;
                this._myAngularVelocity[1] = xrPose.angularVelocity.y;
                this._myAngularVelocity[2] = xrPose.angularVelocity.z;
                this._myIsAngularVelocityEmulated = false;
              } else {
                this._computeEmulatedAngularVelocity(dt);
                this._myIsAngularVelocityEmulated = true;
              }
              this._myIsValid = true;
            } else {
              this._myLinearVelocity[0] = 0;
              this._myLinearVelocity[1] = 0;
              this._myLinearVelocity[2] = 0;
              this._myAngularVelocity[0] = 0;
              this._myAngularVelocity[1] = 0;
              this._myAngularVelocity[2] = 0;
              this._myIsValid = false;
              this._myIsLinearVelocityEmulated = true;
              this._myIsAngularVelocityEmulated = true;
            }
          } else {
            this._myLinearVelocity[0] = 0;
            this._myLinearVelocity[1] = 0;
            this._myLinearVelocity[2] = 0;
            this._myAngularVelocity[0] = 0;
            this._myAngularVelocity[1] = 0;
            this._myAngularVelocity[2] = 0;
            this._myIsValid = false;
            this._myIsLinearVelocityEmulated = true;
            this._myIsAngularVelocityEmulated = true;
          }
        }
        _computeEmulatedLinearVelocity(dt) {
          if (dt > 0) {
            this._myPosition.vec3_sub(this._myPrevPosition, this._myLinearVelocity);
            this._myLinearVelocity.vec3_scale(1 / dt, this._myLinearVelocity);
          } else {
            this._myLinearVelocity[0] = 0;
            this._myLinearVelocity[1] = 0;
            this._myLinearVelocity[2] = 0;
          }
        }
        _computeEmulatedAngularVelocity(dt) {
          if (dt > 0) {
            let rotationRadians = this._myRotation.quat_toRadians();
            let prevRotationRadians = this._myPrevRotation.quat_toRadians();
            rotationRadians.vec3_sub(prevRotationRadians, this._myAngularVelocity);
            this._myAngularVelocity.vec3_scale(1 / dt, this._myAngularVelocity);
          } else {
            this._myAngularVelocity[0] = 0;
            this._myAngularVelocity[1] = 0;
            this._myAngularVelocity[2] = 0;
          }
        }
        _onXRSessionStart(session) {
          session.requestReferenceSpace(WebXR.refSpace).then(function(referenceSpace) {
            this._myReferenceSpace = referenceSpace;
          }.bind(this));
        }
        _onXRSessionEnd(session) {
          this._myReferenceSpace = null;
        }
      };
    }
  });

  // js/pp/input/cauldron/input_types.js
  var require_input_types = __commonJS({
    "js/pp/input/cauldron/input_types.js"() {
      PP.Handedness = {
        LEFT: "left",
        RIGHT: "right"
      };
      PP.HandednessIndex = {
        LEFT: 0,
        RIGHT: 1
      };
      PP.InputSourceType = {
        GAMEPAD: 0,
        HAND: 1
      };
    }
  });

  // js/pp/input/cauldron/input_utils.js
  var require_input_utils = __commonJS({
    "js/pp/input/cauldron/input_utils.js"() {
      PP.InputUtils = {
        getHandednessByIndex: function(index) {
          let handedness = null;
          switch (index) {
            case PP.HandednessIndex.LEFT:
              handedness = PP.Handedness.LEFT;
              break;
            case PP.HandednessIndex.RIGHT:
              handedness = PP.Handedness.RIGHT;
              break;
          }
          return handedness;
        },
        getInputSource: function(handedness, inputSourceType) {
          let inputSource = null;
          if (WL.xrSession && WL.xrSession.inputSources) {
            for (let i = 0; i < WL.xrSession.inputSources.length; i++) {
              let input = WL.xrSession.inputSources[i];
              let isCorrectType = !inputSourceType || inputSourceType == PP.InputSourceType.GAMEPAD && !input.hand || inputSourceType == PP.InputSourceType.HAND && input.hand;
              if (isCorrectType && input.handedness == handedness) {
                inputSource = input;
                break;
              }
            }
          }
          return inputSource;
        },
        getInputSourceType: function(handedness) {
          let inputSourceType = null;
          let inputSource = PP.InputUtils.getInputSource(handedness);
          if (inputSource) {
            if (inputSource.hand) {
              inputSourceType = PP.InputSourceType.HAND;
            } else {
              inputSourceType = PP.InputSourceType.GAMEPAD;
            }
          }
          return inputSourceType;
        }
      };
    }
  });

  // js/pp/input/gamepad/gamepad_animator.js
  var require_gamepad_animator = __commonJS({
    "js/pp/input/gamepad/gamepad_animator.js"() {
      WL.registerComponent("pp-gamepad-animator", {
        _myHandedness: { type: WL.Type.Enum, values: ["left", "right"], default: "left" },
        _mySelect: { type: WL.Type.Object, default: null },
        _mySqueeze: { type: WL.Type.Object, default: null },
        _myThumbstick: { type: WL.Type.Object, default: null },
        _myBottomButton: { type: WL.Type.Object, default: null },
        _myTopButton: { type: WL.Type.Object, default: null }
      }, {
        init: function() {
          this._myGamepad = null;
          this._myNormalDiffuseButtonColor = null;
          this._myNormalAmbientButtonColor = null;
          this._myIsTouchedDiffuseButtonColor = null;
          this._myIsTouchedAmbientButtonColor = null;
          this._myThumbstickInitialLocalForward = this._getLocalAxis(this._myThumbstick, [0, 0, 1]);
          this._myThumbstickForward = [0, 0, 1];
          this._mySelectForward = [0, 0, 1];
          this._myIsMeshEnabled = false;
        },
        start: function() {
          if (this._myHandedness == 0) {
            this._myGamepad = PP.myLeftGamepad;
          } else {
            this._myGamepad = PP.myRightGamepad;
          }
          this._mySelectMaterial = this._mySelect.getComponent("mesh").material.clone();
          this._mySelect.getComponent("mesh").material = this._mySelectMaterial;
          this._mySelectPosition = new Float32Array(3);
          this._mySelect.getTranslationLocal(this._mySelectPosition);
          if (this._myNormalDiffuseButtonColor) {
            this._mySelectMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._mySelectMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
          this._mySqueezeMaterial = this._mySqueeze.getComponent("mesh").material.clone();
          this._mySqueeze.getComponent("mesh").material = this._mySqueezeMaterial;
          this._mySqueezePosition = new Float32Array(3);
          this._mySqueeze.getTranslationLocal(this._mySqueezePosition);
          if (this._myNormalDiffuseButtonColor) {
            this._mySqueezeMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._mySqueezeMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
          this._myThumbstickMaterial = this._myThumbstick.getComponent("mesh").material.clone();
          this._myThumbstick.getComponent("mesh").material = this._myThumbstickMaterial;
          this._myThumbstickPosition = new Float32Array(3);
          this._myThumbstick.getTranslationLocal(this._myThumbstickPosition);
          if (this._myNormalDiffuseButtonColor) {
            this._myThumbstickMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._myThumbstickMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
          this._myBottomButtonMaterial = this._myBottomButton.getComponent("mesh").material.clone();
          this._myBottomButton.getComponent("mesh").material = this._myBottomButtonMaterial;
          this._myBottomButtonPosition = new Float32Array(3);
          this._myBottomButton.getTranslationLocal(this._myBottomButtonPosition);
          if (this._myNormalDiffuseButtonColor) {
            this._myBottomButtonMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._myBottomButtonMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
          this._myTopButtonMaterial = this._myTopButton.getComponent("mesh").material.clone();
          this._myTopButton.getComponent("mesh").material = this._myTopButtonMaterial;
          this._myTopButtonPosition = new Float32Array(3);
          this._myTopButton.getTranslationLocal(this._myTopButtonPosition);
          if (this._myNormalDiffuseButtonColor) {
            this._myTopButtonMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._myTopButtonMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
          this._myGamepad.registerButtonEventListener(PP.ButtonType.THUMBSTICK, PP.ButtonEvent.PRESS_START, this, this._thumbstickPressedStart.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.THUMBSTICK, PP.ButtonEvent.PRESS_END, this, this._thumbstickPressedEnd.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.BOTTOM_BUTTON, PP.ButtonEvent.PRESS_START, this, this._bottomButtonPressedStart.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.BOTTOM_BUTTON, PP.ButtonEvent.PRESS_END, this, this._bottomButtonPressedEnd.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.TOP_BUTTON, PP.ButtonEvent.PRESS_START, this, this._topButtonPressedStart.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.TOP_BUTTON, PP.ButtonEvent.PRESS_END, this, this._topButtonPressedEnd.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.TOUCH_START, this, this._selectTouchedStart.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.TOUCH_END, this, this._selectTouchedEnd.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.TOUCH_START, this, this._squeezeTouchedStart.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.TOUCH_END, this, this._squeezeTouchedEnd.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.THUMBSTICK, PP.ButtonEvent.TOUCH_START, this, this._thumbstickTouchedStart.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.THUMBSTICK, PP.ButtonEvent.TOUCH_END, this, this._thumbstickTouchedEnd.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.BOTTOM_BUTTON, PP.ButtonEvent.TOUCH_START, this, this._bottomButtonTouchedStart.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.BOTTOM_BUTTON, PP.ButtonEvent.TOUCH_END, this, this._bottomButtonTouchedEnd.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.TOP_BUTTON, PP.ButtonEvent.TOUCH_START, this, this._topButtonTouchedStart.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.TOP_BUTTON, PP.ButtonEvent.TOUCH_END, this, this._topButtonTouchedEnd.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.SQUEEZE, PP.ButtonEvent.VALUE_CHANGED, this, this._squeezeValueChanged.bind(this));
          this._myGamepad.registerButtonEventListener(PP.ButtonType.SELECT, PP.ButtonEvent.VALUE_CHANGED, this, this._selectValueChanged.bind(this));
          this._myGamepad.registerAxesEventListener(PP.AxesEvent.AXES_CHANGED, this, this._axesValueChanged.bind(this));
          this.object.scale([0, 0, 0]);
        },
        update: function(dt) {
          this._enableMeshInSession();
        },
        _thumbstickPressedStart: function(buttonInfo, gamepad) {
          let tempVector = PP.vec3_create();
          this._myThumbstickInitialLocalForward.vec3_scale(15e-4, tempVector);
          this._myThumbstick.translate(tempVector);
        },
        _thumbstickPressedEnd: function(buttonInfo, gamepad) {
          let tempVector = PP.vec3_create();
          this._myThumbstickInitialLocalForward.vec3_scale(-15e-4, tempVector);
          this._myThumbstick.translate(tempVector);
        },
        _bottomButtonPressedStart: function(buttonInfo, gamepad) {
          this._translateLocalAxis(this._myBottomButton, [0, 0, 1], 2e-3);
        },
        _bottomButtonPressedEnd: function(buttonInfo, gamepad) {
          this._translateLocalAxis(this._myBottomButton, [0, 0, 1], -2e-3);
        },
        _topButtonPressedStart: function(buttonInfo, gamepad) {
          this._translateLocalAxis(this._myTopButton, [0, 0, 1], 2e-3);
        },
        _topButtonPressedEnd: function(buttonInfo, gamepad) {
          this._translateLocalAxis(this._myTopButton, [0, 0, 1], -2e-3);
        },
        _selectTouchedStart: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._mySelectMaterial.diffuseColor = this._myIsTouchedDiffuseButtonColor;
            this._mySelectMaterial.ambientColor = this._myIsTouchedAmbientButtonColor;
          }
        },
        _selectTouchedEnd: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._mySelectMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._mySelectMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
        },
        _squeezeTouchedStart: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._mySqueezeMaterial.diffuseColor = this._myIsTouchedDiffuseButtonColor;
            this._mySqueezeMaterial.ambientColor = this._myIsTouchedAmbientButtonColor;
          }
        },
        _squeezeTouchedEnd: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._mySqueezeMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._mySqueezeMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
        },
        _thumbstickTouchedStart: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._myThumbstickMaterial.diffuseColor = this._myIsTouchedDiffuseButtonColor;
            this._myThumbstickMaterial.ambientColor = this._myIsTouchedAmbientButtonColor;
          }
        },
        _thumbstickTouchedEnd: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._myThumbstickMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._myThumbstickMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
        },
        _bottomButtonTouchedStart: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._myBottomButtonMaterial.diffuseColor = this._myIsTouchedDiffuseButtonColor;
            this._myBottomButtonMaterial.ambientColor = this._myIsTouchedAmbientButtonColor;
          }
        },
        _bottomButtonTouchedEnd: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._myBottomButtonMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._myBottomButtonMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
        },
        _topButtonTouchedStart: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._myTopButtonMaterial.diffuseColor = this._myIsTouchedDiffuseButtonColor;
            this._myTopButtonMaterial.ambientColor = this._myIsTouchedAmbientButtonColor;
          }
        },
        _topButtonTouchedEnd: function(buttonInfo, gamepad) {
          if (this._myNormalDiffuseButtonColor) {
            this._myTopButtonMaterial.diffuseColor = this._myNormalDiffuseButtonColor;
            this._myTopButtonMaterial.ambientColor = this._myNormalAmbientButtonColor;
          }
        },
        _selectValueChanged: function(buttonInfo, gamepad) {
          this._copyAlignRotation(this._mySelect, this._mySelectForward, [0, 0, 1]);
          let angleToRotate = Math.pp_toRadians(15 * buttonInfo.myValue);
          let tiltDirection = [0, 0, 1];
          tiltDirection.vec3_rotateAxis(angleToRotate, [1, 0, 0], tiltDirection);
          tiltDirection.vec3_normalize(tiltDirection);
          this._copyAlignRotation(this._mySelect, [0, 0, 1], tiltDirection);
          this._mySelectForward = tiltDirection;
        },
        _squeezeValueChanged: function(buttonInfo, gamepad) {
          this._mySqueeze.setTranslationLocal(this._mySqueezePosition);
          let translation = 15e-4;
          if (this._myHandedness == 1) {
            translation *= -1;
          }
          this._translateLocalAxis(this._mySqueeze, [1, 0, 0], translation * buttonInfo.myValue);
        },
        _axesValueChanged: function(axesInfo, gamepad) {
          this._copyAlignRotation(this._myThumbstick, this._myThumbstickForward, [0, 0, 1]);
          let tiltDirection = new Float32Array(3);
          let forward = [0, 0, 1];
          forward.vec3_add([axesInfo.myAxes[0], -axesInfo.myAxes[1], 0], tiltDirection);
          tiltDirection.vec3_normalize(tiltDirection);
          this._copyAlignRotation(this._myThumbstick, [0, 0, 1], tiltDirection);
          this._myThumbstickForward = tiltDirection;
        },
        _copyAlignRotation: function(object, startAxis, endAxis) {
          let rotationAxis = new Float32Array(3);
          startAxis.vec3_cross(endAxis, rotationAxis);
          rotationAxis.vec3_normalize(rotationAxis);
          let angleToRotate = startAxis.vec3_angleRadians(endAxis);
          if (angleToRotate > 1e-4) {
            object.rotateAxisAngleRadObject(rotationAxis, angleToRotate);
          }
        },
        _translateLocalAxis(object, axis, amount) {
          let tempVector = this._getLocalAxis(object, axis);
          tempVector.vec3_scale(amount, tempVector);
          object.translate(tempVector);
        },
        _getLocalAxis(object, axis) {
          let tempVector = PP.vec3_create();
          axis.vec3_transformQuat(object.transformLocal, tempVector);
          tempVector.vec3_normalize(tempVector);
          return tempVector;
        },
        _enableMeshInSession: function() {
          if (!this._myIsMeshEnabled) {
            if (WL.xrSession) {
              this.object.resetScaling();
              this._myIsMeshEnabled = true;
            }
          } else {
            if (!WL.xrSession) {
              this.object.scale([0, 0, 0]);
              this._myIsMeshEnabled = false;
            }
          }
        }
      });
    }
  });

  // js/pp/input/gamepad/gamepad_manager_component.js
  var require_gamepad_manager_component = __commonJS({
    "js/pp/input/gamepad/gamepad_manager_component.js"() {
      WL.registerComponent("pp-gamepad-manager", {
        _myFixForward: { type: WL.Type.Bool, default: true }
      }, {
        init: function() {
          this._myGamepadManager = new PP.GamepadManager(this._myFixForward);
          PP.myLeftGamepad = this._myGamepadManager.getLeftGamepad();
          PP.myRightGamepad = this._myGamepadManager.getRightGamepad();
          PP.myGamepads = this._myGamepadManager.getGamepads();
        },
        start: function() {
          this._myGamepadManager.start();
        },
        update: function(dt) {
          this._myGamepadManager.update(dt);
        }
      });
      PP.myLeftGamepad = null;
      PP.myRightGamepad = null;
      PP.myGamepads = null;
    }
  });

  // js/pp/input/gamepad/gamepad_manager.js
  var require_gamepad_manager = __commonJS({
    "js/pp/input/gamepad/gamepad_manager.js"() {
      PP.GamepadManager = class GamepadManager {
        constructor(fixForward = true, forceEmulatedVelocities = false) {
          this._myLeftGamepad = new PP.Gamepad(PP.Handedness.LEFT, fixForward, forceEmulatedVelocities);
          this._myRightGamepad = new PP.Gamepad(PP.Handedness.RIGHT, fixForward, forceEmulatedVelocities);
        }
        start() {
          this._myLeftGamepad.start();
          this._myRightGamepad.start();
        }
        update(dt) {
          this._myLeftGamepad.update(dt);
          this._myRightGamepad.update(dt);
        }
        getLeftGamepad() {
          return this._myLeftGamepad;
        }
        getRightGamepad() {
          return this._myRightGamepad;
        }
        getGamepad(handedness) {
          let gamepad = null;
          switch (handedness) {
            case PP.Handedness.LEFT:
              gamepad = this._myLeftGamepad;
              break;
            case PP.Handedness.RIGHT:
              gamepad = this._myRightGamepad;
              break;
            default:
              gamepad = null;
          }
          return gamepad;
        }
        getGamepads() {
          let gamepads = [];
          gamepads[PP.Handedness.LEFT] = this._myLeftGamepad;
          gamepads[PP.Handedness.RIGHT] = this._myRightGamepad;
          return gamepads;
        }
      };
    }
  });

  // js/pp/input/gamepad/gamepad_utils.js
  var require_gamepad_utils = __commonJS({
    "js/pp/input/gamepad/gamepad_utils.js"() {
      PP.GamepadUtils = {
        _mySimultaneousPressMaxDelay: 0.15,
        _mySimultaneousTouchMaxDelay: 0.15,
        setSimultaneousPressMaxDelay: function(simultaneousPressMaxDelay) {
          PP.GamepadUtils._mySimultaneousPressMaxDelay = simultaneousPressMaxDelay;
        },
        setSimultaneousTouchMaxDelay: function(simultaneousTouchMaxDelay) {
          PP.GamepadUtils._mySimultaneousTouchMaxDelay = simultaneousTouchMaxDelay;
        },
        getSimultaneousPressMaxDelay: function() {
          return PP.GamepadUtils._mySimultaneousPressMaxDelay;
        },
        getSimultaneousTouchMaxDelay: function() {
          return PP.GamepadUtils._mySimultaneousTouchMaxDelay;
        },
        isAnyButtonPressStart: function(...gamepadButtonTypesList) {
          let multiplePressCount = null;
          let realGamepadButtonTypesList = gamepadButtonTypesList;
          if (!isNaN(gamepadButtonTypesList[0])) {
            multiplePressCount = gamepadButtonTypesList[0];
            realGamepadButtonTypesList = gamepadButtonTypesList.slice(1);
          }
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            if (gamepadButtonTypes.length == 1) {
              for (let key in PP.ButtonType) {
                gamepadButtonTypes.push(PP.ButtonType[key]);
              }
            }
          }
          let isOnePressStart = false;
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
              let buttonType = gamepadButtonTypes[i];
              let button = gamepad.getButtonInfo(buttonType);
              if (button.isPressStart(multiplePressCount)) {
                isOnePressStart = true;
                break;
              }
            }
            if (isOnePressStart) {
              break;
            }
          }
          return isOnePressStart;
        },
        areButtonsPressStart: function(...gamepadButtonTypesList) {
          let multiplePressCount = null;
          let realGamepadButtonTypesList = gamepadButtonTypesList;
          if (!isNaN(gamepadButtonTypesList[0])) {
            multiplePressCount = gamepadButtonTypesList[0];
            realGamepadButtonTypesList = gamepadButtonTypesList.slice(1);
          }
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            if (gamepadButtonTypes.length == 1) {
              for (let key in PP.ButtonType) {
                gamepadButtonTypes.push(PP.ButtonType[key]);
              }
            }
          }
          let areButtonPressedRecently = true;
          let isOnePressStart = false;
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
              let buttonType = gamepadButtonTypes[i];
              let button = gamepad.getButtonInfo(buttonType);
              if (!(button.myIsPressed && (multiplePressCount == null || button.myMultiplePressStartCount == multiplePressCount) && button.myTimePressed < PP.GamepadUtils._mySimultaneousPressMaxDelay)) {
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
        isAnyButtonPressEnd: function(...gamepadButtonTypesList) {
          let multiplePressCount = null;
          let realGamepadButtonTypesList = gamepadButtonTypesList;
          if (!isNaN(gamepadButtonTypesList[0])) {
            multiplePressCount = gamepadButtonTypesList[0];
            realGamepadButtonTypesList = gamepadButtonTypesList.slice(1);
          }
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            if (gamepadButtonTypes.length == 1) {
              for (let key in PP.ButtonType) {
                gamepadButtonTypes.push(PP.ButtonType[key]);
              }
            }
          }
          let isOnePressEnd = false;
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
              let buttonType = gamepadButtonTypes[i];
              let button = gamepad.getButtonInfo(buttonType);
              if (button.isPressEnd(multiplePressCount)) {
                isOnePressEnd = true;
                break;
              }
            }
            if (isOnePressEnd) {
              break;
            }
          }
          return isOnePressEnd;
        },
        areButtonsPressEnd: function(...gamepadButtonTypesList) {
          let multiplePressCount = null;
          let realGamepadButtonTypesList = gamepadButtonTypesList;
          if (!isNaN(gamepadButtonTypesList[0])) {
            multiplePressCount = gamepadButtonTypesList[0];
            realGamepadButtonTypesList = gamepadButtonTypesList.slice(1);
          }
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            if (gamepadButtonTypes.length == 1) {
              for (let key in PP.ButtonType) {
                gamepadButtonTypes.push(PP.ButtonType[key]);
              }
            }
          }
          let areButtonNotPressedRecently = true;
          let isOnePressEnd = false;
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
              let buttonType = gamepadButtonTypes[i];
              let button = gamepad.getButtonInfo(buttonType);
              if (!(!button.myIsPressed && (multiplePressCount == null || button.myMultiplePressEndCount == multiplePressCount) && button.myTimeNotPressed < PP.GamepadUtils._mySimultaneousPressMaxDelay)) {
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
        isAnyButtonTouchStart: function(...gamepadButtonTypesList) {
          let multiplePressCount = null;
          let realGamepadButtonTypesList = gamepadButtonTypesList;
          if (!isNaN(gamepadButtonTypesList[0])) {
            multiplePressCount = gamepadButtonTypesList[0];
            realGamepadButtonTypesList = gamepadButtonTypesList.slice(1);
          }
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            if (gamepadButtonTypes.length == 1) {
              for (let key in PP.ButtonType) {
                gamepadButtonTypes.push(PP.ButtonType[key]);
              }
            }
          }
          let isOneTouchStart = false;
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
              let buttonType = gamepadButtonTypes[i];
              let button = gamepad.getButtonInfo(buttonType);
              if (button.isTouchStart(multiplePressCount)) {
                isOneTouchStart = true;
                break;
              }
            }
            if (isOneTouchStart) {
              break;
            }
          }
          return isOneTouchStart;
        },
        areButtonsTouchStart: function(...gamepadButtonTypesList) {
          let multipleTouchCount = null;
          let realGamepadButtonTypesList = gamepadButtonTypesList;
          if (!isNaN(gamepadButtonTypesList[0])) {
            multipleTouchCount = gamepadButtonTypesList[0];
            realGamepadButtonTypesList = gamepadButtonTypesList.slice(1);
          }
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            if (gamepadButtonTypes.length == 1) {
              for (let key in PP.ButtonType) {
                gamepadButtonTypes.push(PP.ButtonType[key]);
              }
            }
          }
          let areButtonTouchedRecently = true;
          let isOneTouchStart = false;
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
              let buttonType = gamepadButtonTypes[i];
              let button = gamepad.getButtonInfo(buttonType);
              if (!(button.myIsTouched && (multipleTouchCount == null || button.myMultipleTouchStartCount == multipleTouchCount) && button.myTimeTouched < PP.GamepadUtils._mySimultaneousTouchMaxDelay)) {
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
        isAnyButtonTouchEnd: function(...gamepadButtonTypesList) {
          let multiplePressCount = null;
          let realGamepadButtonTypesList = gamepadButtonTypesList;
          if (!isNaN(gamepadButtonTypesList[0])) {
            multiplePressCount = gamepadButtonTypesList[0];
            realGamepadButtonTypesList = gamepadButtonTypesList.slice(1);
          }
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            if (gamepadButtonTypes.length == 1) {
              for (let key in PP.ButtonType) {
                gamepadButtonTypes.push(PP.ButtonType[key]);
              }
            }
          }
          let isOneTouchEnd = false;
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
              let buttonType = gamepadButtonTypes[i];
              let button = gamepad.getButtonInfo(buttonType);
              if (button.isTouchEnd(multiplePressCount)) {
                isOneTouchEnd = true;
                break;
              }
            }
            if (isOneTouchEnd) {
              break;
            }
          }
          return isOneTouchEnd;
        },
        areButtonsTouchEnd: function(...gamepadButtonTypesList) {
          let multipleTouchCount = null;
          let realGamepadButtonTypesList = gamepadButtonTypesList;
          if (!isNaN(gamepadButtonTypesList[0])) {
            multipleTouchCount = gamepadButtonTypesList[0];
            realGamepadButtonTypesList = gamepadButtonTypesList.slice(1);
          }
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            if (gamepadButtonTypes.length == 1) {
              for (let key in PP.ButtonType) {
                gamepadButtonTypes.push(PP.ButtonType[key]);
              }
            }
          }
          let areButtonNotTouchedRecently = true;
          let isOneTouchEnd = false;
          for (let gamepadButtonTypes of realGamepadButtonTypesList) {
            let gamepad = gamepadButtonTypes[0];
            for (let i = 1; i < gamepadButtonTypes.length; i++) {
              let buttonType = gamepadButtonTypes[i];
              let button = gamepad.getButtonInfo(buttonType);
              if (!(!button.myIsTouched && (multipleTouchCount == null || button.myMultipleTouchEndCount == multipleTouchCount) && button.myTimeNotTouched < PP.GamepadUtils._mySimultaneousTouchMaxDelay)) {
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
        }
      };
    }
  });

  // js/pp/input/gamepad/gamepad.js
  var require_gamepad = __commonJS({
    "js/pp/input/gamepad/gamepad.js"() {
      PP.ButtonType = {
        SELECT: 0,
        SQUEEZE: 1,
        THUMBSTICK: 3,
        BOTTOM_BUTTON: 4,
        TOP_BUTTON: 5
      };
      PP.ButtonEvent = {
        PRESS_START: 0,
        PRESS_END: 1,
        PRESSED: 2,
        NOT_PRESSED: 3,
        TOUCH_START: 4,
        TOUCH_END: 5,
        TOUCHED: 6,
        NOT_TOUCHED: 7,
        VALUE_CHANGED: 8,
        ALWAYS: 9
      };
      PP.AxesEvent = {
        X_CHANGED: 0,
        Y_CHANGED: 1,
        AXES_CHANGED: 2,
        ALWAYS: 3
      };
      PP.ButtonInfo = class ButtonInfo {
        constructor(type2, handedness) {
          this.myType = type2;
          this.myHandedness = handedness;
          this.myIsPressed = false;
          this.myPrevIsPressed = false;
          this.myIsTouched = false;
          this.myPrevIsTouched = false;
          this.myValue = 0;
          this.myPrevValue = 0;
          this.myTimePressed = 0;
          this.myPrevTimePressed = 0;
          this.myTimeNotPressed = 0;
          this.myPrevTimeNotPressed = 0;
          this.myTimeTouched = 0;
          this.myPrevTimeTouched = 0;
          this.myTimeNotTouched = 0;
          this.myPrevTimeNotTouched = 0;
          this.myMultiplePressStartCount = 0;
          this.myPrevMultiplePressStartCount = 0;
          this.myMultiplePressEndCount = 0;
          this.myPrevMultiplePressEndCount = 0;
          this.myMultipleTouchStartCount = 0;
          this.myPrevMultipleTouchStartCount = 0;
          this.myMultipleTouchEndCount = 0;
          this.myPrevMultipleTouchEndCount = 0;
        }
        getType() {
          return this.myType;
        }
        getHandedness() {
          return this.myHandedness;
        }
        getValue() {
          return this.myValue;
        }
        isPressed() {
          return this.myIsPressed;
        }
        isTouched() {
          return this.myIsTouched;
        }
        isPressStart(multiplePressCount = null) {
          return this.myIsPressed && !this.myPrevIsPressed && (multiplePressCount == null || this.myMultiplePressStartCount == multiplePressCount);
        }
        isPressEnd(multiplePressCount = null) {
          return !this.myIsPressed && this.myPrevIsPressed && (multiplePressCount == null || this.myMultiplePressEndCount == multiplePressCount);
        }
        isTouchStart(multipleTouchCount = null) {
          return this.myIsTouched && !this.myPrevIsTouched && (multipleTouchCount == null || this.myMultipleTouchStartCount == multipleTouchCount);
        }
        isTouchEnd(multipleTouchCount = null) {
          return !this.myIsTouched && this.myPrevIsTouched && (multipleTouchCount == null || this.myMultipleTouchEndCount == multipleTouchCount);
        }
        clone() {
          let value = new ButtonInfo(this.myType, this.myHandedness);
          value.myIsPressed = this.myIsPressed;
          value.myPrevIsPressed = this.myPrevIsPressed;
          value.myIsTouched = this.myIsTouched;
          value.myPrevIsTouched = this.myPrevIsTouched;
          value.myValue = this.myValue;
          value.myPrevValue = this.myPrevValue;
          value.myTimePressed = this.myTimePressed;
          value.myPrevTimePressed = this.myPrevTimePressed;
          value.myTimeNotPressed = this.myTimeNotPressed;
          value.myPrevTimeNotPressed = this.myPrevTimeNotPressed;
          value.myTimeTouched = this.myTimeTouched;
          value.myPrevTimeTouched = this.myPrevTimeTouched;
          value.myTimeNotTouched = this.myTimeNotTouched;
          value.myPrevTimeNotTouched = this.myPrevTimeNotTouched;
          value.myMultiplePressStartCount = this.myMultiplePressStartCount;
          value.myPrevMultiplePressStartCount = this.myPrevMultiplePressStartCount;
          value.myMultiplePressEndCount = this.myMultiplePressEndCount;
          value.myPrevMultiplePressEndCount = this.myPrevMultiplePressEndCount;
          value.myMultipleTouchStartCount = this.myMultipleTouchStartCount;
          value.myPrevMultipleTouchStartCount = this.myPrevMultipleTouchStartCount;
          value.myMultipleTouchEndCount = this.myMultipleTouchEndCount;
          value.myPrevMultipleTouchEndCount = this.myPrevMultipleTouchEndCount;
          return value;
        }
      };
      PP.AxesInfo = class AxesInfo {
        constructor(handedness) {
          this.myHandedness = handedness;
          this.myAxes = new Float32Array(2);
          this.myAxes.fill(0);
          this.myPrevAxes = new Float32Array(2);
          this.myPrevAxes.fill(0);
        }
        getAxes() {
          return this.myAxes;
        }
        getHandedness() {
          return this.myHandedness;
        }
        clone() {
          let value = new AxesInfo(this.myHandedness);
          value.myAxes = this.myAxes;
          value.myPrevAxes = this.myPrevAxes;
          return value;
        }
      };
      PP.PulseInfo = class PulseInfo {
        constructor() {
          this.myIntensity = 0;
          this.myDuration = 0;
          this.myIsDevicePulsing = false;
        }
        clone() {
          let value = new PulseInfo();
          value.myIntensity = this.myIntensity;
          value.myDuration = this.myDuration;
          value.myIsDevicePulsing = this.myIsDevicePulsing;
          return value;
        }
      };
      PP.Gamepad = class Gamepad {
        constructor(handedness, fixForward = true, forceEmulatedVelocities = false) {
          this._myHandedness = handedness;
          this._myButtonInfos = [];
          for (let key in PP.ButtonType) {
            this._myButtonInfos[PP.ButtonType[key]] = new PP.ButtonInfo(PP.ButtonType[key], this._myHandedness);
          }
          this._myAxesInfo = new PP.AxesInfo(this._myHandedness);
          this._mySelectStart = false;
          this._mySelectEnd = false;
          this._mySqueezeStart = false;
          this._mySqueezeEnd = false;
          this._myIsXRSessionActive = false;
          this._myInputSource = null;
          this._myGamepad = null;
          this._myButtonCallbacks = [];
          for (let typeKey in PP.ButtonType) {
            this._myButtonCallbacks[PP.ButtonType[typeKey]] = [];
            for (let eventKey in PP.ButtonEvent) {
              this._myButtonCallbacks[PP.ButtonType[typeKey]][PP.ButtonEvent[eventKey]] = /* @__PURE__ */ new Map();
            }
          }
          this._myAxesCallbacks = [];
          for (let eventKey in PP.AxesEvent) {
            this._myAxesCallbacks[PP.AxesEvent[eventKey]] = /* @__PURE__ */ new Map();
          }
          this._myPulseInfo = new PP.PulseInfo();
          this._myHandPose = new PP.HandPose(this._myHandedness, fixForward, forceEmulatedVelocities);
          this._myMultiplePressMaxDelay = 0.3;
          this._myMultipleTouchMaxDelay = 0.3;
        }
        getHandedness() {
          return this._myHandedness;
        }
        getHandPose() {
          return this._myHandPose;
        }
        getButtonInfo(buttonType) {
          return this._myButtonInfos[buttonType];
        }
        registerButtonEventListener(buttonType, buttonEvent, id, callback) {
          this._myButtonCallbacks[buttonType][buttonEvent].set(id, callback);
        }
        unregisterButtonEventListener(buttonType, buttonEvent, id) {
          this._myButtonCallbacks[buttonType][buttonEvent].delete(id);
        }
        getAxesInfo() {
          return this._myAxesInfo;
        }
        registerAxesEventListener(axesEvent, id, callback) {
          this._myAxesCallbacks[axesEvent].set(id, callback);
        }
        unregisterAxesEventListener(axesEvent, id) {
          this._myAxesCallbacks[axesEvent].delete(id);
        }
        isGamepadActive() {
          return this._myIsXRSessionActive && this._myGamepad != null && (this._myGamepad.connected == null || this._myGamepad.connected);
        }
        pulse(intensity, duration = 0) {
          this._myPulseInfo.myIntensity = Math.min(Math.max(intensity, 0), 1);
          this._myPulseInfo.myDuration = Math.max(duration, 0);
        }
        stopPulse() {
          this._myPulseInfo.myIntensity = 0;
          this._myPulseInfo.myDuration = 0;
        }
        isPulsing() {
          return this._myPulseInfo.myIntensity > 0 || this._myPulseInfo.myDuration > 0;
        }
        getPulseInfo() {
          return this._myPulseInfo;
        }
        getMultiplePressMaxDelay() {
          return this._myMultiplePressMaxDelay;
        }
        setMultiplePressMaxDelay(maxDelay) {
          this._myMultiplePressMaxDelay = maxDelay;
        }
        getMultipleTouchMaxDelay() {
          return this._myMultipleTouchMaxDelay;
        }
        setMultipleTouchMaxDelay(maxDelay) {
          this._myMultipleTouchMaxDelay = maxDelay;
        }
        start() {
          this._myHandPose.start();
          if (WL.xrSession) {
            this._onXRSessionStart(WL.xrSession);
          }
          WL.onXRSessionStart.push(this._onXRSessionStart.bind(this));
          WL.onXRSessionEnd.push(this._onXRSessionEnd.bind(this));
        }
        update(dt) {
          this._updateHandPose(dt);
          this._preUpdateButtonInfos();
          this._updateButtonInfos();
          this._postUpdateButtonInfos(dt);
          this._preUpdateAxesInfos();
          this._updateAxesInfos();
          this._postUpdateAxesInfos();
          this._updatePulse(dt);
        }
        _updateHandPose(dt) {
          this._myHandPose.update(dt);
          this._myInputSource = this._myHandPose.getInputSource();
          if (this._myInputSource != null) {
            this._myGamepad = this._myInputSource.gamepad;
          } else {
            this._myGamepad = null;
          }
        }
        _preUpdateButtonInfos() {
          this._myButtonInfos.forEach(function(item) {
            item.myPrevIsPressed = item.myIsPressed;
            item.myPrevIsTouched = item.myIsTouched;
            item.myPrevValue = item.myValue;
          });
        }
        _updateButtonInfos() {
          this._updateSelectAndSqueezePressed();
          this._updateSingleButtonInfo(PP.ButtonType.SELECT, false);
          this._updateSingleButtonInfo(PP.ButtonType.SQUEEZE, false);
          this._updateSingleButtonInfo(PP.ButtonType.THUMBSTICK, true);
          this._updateSingleButtonInfo(PP.ButtonType.BOTTOM_BUTTON, true);
          this._updateSingleButtonInfo(PP.ButtonType.TOP_BUTTON, true);
        }
        _updateSelectAndSqueezePressed() {
          let buttonSelect = this._myButtonInfos[PP.ButtonType.SELECT];
          if (this._mySelectStart) {
            buttonSelect.myIsPressed = true;
          }
          if (this._mySelectEnd) {
            buttonSelect.myIsPressed = false;
          }
          let buttonSqueeze = this._myButtonInfos[PP.ButtonType.SQUEEZE];
          if (this._mySqueezeStart) {
            buttonSqueeze.myIsPressed = true;
          }
          if (this._mySqueezeEnd) {
            buttonSqueeze.myIsPressed = false;
          }
          if (!this.isGamepadActive()) {
            buttonSelect.myIsPressed = false;
            buttonSqueeze.myIsPressed = false;
          }
        }
        _updateSingleButtonInfo(buttonType, updatePressed) {
          let button = this._myButtonInfos[buttonType];
          let internalButton = this._getInternalButton(buttonType);
          if (updatePressed) {
            button.myIsPressed = internalButton.pressed;
          }
          button.myIsTouched = internalButton.touched;
          button.myValue = internalButton.value;
        }
        _postUpdateButtonInfos(dt) {
          this._myButtonInfos.forEach(function(item) {
            if (item.myIsPressed) {
              item.myTimePressed += dt;
              if (!item.myPrevIsPressed) {
                item.myMultiplePressStartCount += 1;
                item.myPrevTimeNotPressed = item.myTimeNotPressed;
                item.myTimeNotPressed = 0;
              }
              if (item.myPrevTimeNotPressed + item.myTimePressed > this._myMultiplePressMaxDelay && item.myMultiplePressEndCount > 0) {
                item.myPrevMultiplePressEndCount = item.myMultiplePressEndCount;
                item.myMultiplePressEndCount = 0;
              }
              if (item.myTimePressed > this._myMultiplePressMaxDelay && item.myMultiplePressStartCount > 0) {
                item.myPrevMultiplePressStartCount = item.myMultiplePressStartCount;
                item.myMultiplePressStartCount = 0;
              }
            } else {
              item.myTimeNotPressed += dt;
              if (item.myPrevIsPressed) {
                item.myMultiplePressEndCount += 1;
                item.myPrevTimePressed = item.myTimePressed;
                item.myTimePressed = 0;
              }
              if (item.myPrevTimePressed + item.myTimeNotPressed > this._myMultiplePressMaxDelay && item.myMultiplePressStartCount > 0) {
                item.myPrevMultiplePressStartCount = item.myMultiplePressStartCount;
                item.myMultiplePressStartCount = 0;
              }
              if (item.myTimeNotPressed > this._myMultiplePressMaxDelay && item.myMultiplePressEndCount > 0) {
                item.myPrevMultiplePressEndCount = item.myMultiplePressEndCount;
                item.myMultiplePressEndCount = 0;
              }
            }
            if (item.myIsTouched) {
              item.myTimeTouched += dt;
              if (!item.myPrevIsTouched) {
                item.myMultipleTouchStartCount += 1;
                item.myPrevTimeNotTouched = item.myTimeNotTouched;
                item.myTimeNotTouched = 0;
              }
              if (item.myPrevTimeNotTouched + item.myTimeTouched > this._myMultipleTouchMaxDelay && item.myMultipleTouchEndCount > 0) {
                item.myPrevMultipleTouchEndCount = item.myMultipleTouchEndCount;
                item.myMultipleTouchEndCount = 0;
              }
              if (item.myTimeTouched > this._myMultipleTouchMaxDelay && item.myMultipleTouchStartCount > 0) {
                item.myPrevMultipleTouchStartCount = item.myMultipleTouchStartCount;
                item.myMultipleTouchStartCount = 0;
              }
            } else {
              item.myTimeNotTouched += dt;
              if (item.myPrevIsTouched) {
                item.myMultipleTouchEndCount += 1;
                item.myPrevTimeTouched = item.myTimeTouched;
                item.myTimeTouched = 0;
              }
              if (item.myPrevTimeTouched + item.myTimeNotTouched > this._myMultipleTouchMaxDelay && item.myMultipleTouchStartCount > 0) {
                item.myPrevMultipleTouchStartCount = item.myMultipleTouchStartCount;
                item.myMultipleTouchStartCount = 0;
              }
              if (item.myTimeNotTouched > this._myMultipleTouchMaxDelay && item.myMultipleTouchEndCount > 0) {
                item.myPrevMultipleTouchEndCount = item.myMultipleTouchEndCount;
                item.myMultipleTouchEndCount = 0;
              }
            }
          }.bind(this));
          for (let typeKey in PP.ButtonType) {
            let buttonInfo = this._myButtonInfos[PP.ButtonType[typeKey]];
            let buttonCallbacks = this._myButtonCallbacks[PP.ButtonType[typeKey]];
            if (buttonInfo.myIsPressed && !buttonInfo.myPrevIsPressed) {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.PRESS_START];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            }
            if (!buttonInfo.myIsPressed && buttonInfo.myPrevIsPressed) {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.PRESS_END];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            }
            if (buttonInfo.myIsPressed) {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.PRESSED];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            } else {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.NOT_PRESSED];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            }
            if (buttonInfo.myIsTouched && !buttonInfo.myPrevIsTouched) {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.TOUCH_START];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            }
            if (!buttonInfo.myIsTouched && buttonInfo.myPrevIsTouched) {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.TOUCH_END];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            }
            if (buttonInfo.myIsTouched) {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.TOUCHED];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            } else {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.NOT_TOUCHED];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            }
            if (buttonInfo.myValue != buttonInfo.myPrevValue) {
              let callbacksMap2 = buttonCallbacks[PP.ButtonEvent.VALUE_CHANGED];
              this._triggerCallbacks(callbacksMap2, buttonInfo);
            }
            let callbacksMap = buttonCallbacks[PP.ButtonEvent.ALWAYS];
            this._triggerCallbacks(callbacksMap, buttonInfo);
          }
          this._mySelectStart = false;
          this._mySelectEnd = false;
          this._mySqueezeStart = false;
          this._mySqueezeEnd = false;
        }
        _preUpdateAxesInfos() {
          this._myAxesInfo.myPrevAxes = this._myAxesInfo.myAxes;
        }
        _updateAxesInfos() {
          this._myAxesInfo.myAxes = this._getInternalAxes();
        }
        _postUpdateAxesInfos() {
          if (this._myAxesInfo.myAxes[0] != this._myAxesInfo.myPrevAxes[0]) {
            let callbacksMap2 = this._myAxesCallbacks[PP.AxesEvent.X_CHANGED];
            this._triggerCallbacks(callbacksMap2, this._myAxesInfo);
          }
          if (this._myAxesInfo.myAxes[1] != this._myAxesInfo.myPrevAxes[1]) {
            let callbacksMap2 = this._myAxesCallbacks[PP.AxesEvent.Y_CHANGED];
            this._triggerCallbacks(callbacksMap2, this._myAxesInfo);
          }
          if (this._myAxesInfo.myAxes[0] != this._myAxesInfo.myPrevAxes[0] || this._myAxesInfo.myAxes[1] != this._myAxesInfo.myPrevAxes[1]) {
            let callbacksMap2 = this._myAxesCallbacks[PP.AxesEvent.AXES_CHANGED];
            this._triggerCallbacks(callbacksMap2, this._myAxesInfo);
          }
          let callbacksMap = this._myAxesCallbacks[PP.AxesEvent.ALWAYS];
          this._triggerCallbacks(callbacksMap, this._myAxesInfo);
        }
        _getInternalButton(buttonType) {
          let buttonData = { pressed: false, touched: false, value: 0 };
          if (this.isGamepadActive()) {
            if (buttonType < this._myGamepad.buttons.length) {
              let gamepadButton = this._myGamepad.buttons[buttonType];
              buttonData.pressed = gamepadButton.pressed;
              buttonData.touched = gamepadButton.touched;
              buttonData.value = gamepadButton.value;
            } else if (buttonType == PP.ButtonType.BOTTOM_BUTTON && this._myGamepad.buttons.length >= 3) {
              let touchButton = this._myGamepad.buttons[2];
              buttonData.pressed = touchButton.pressed;
              buttonData.touched = touchButton.touched;
              buttonData.value = touchButton.value;
            }
          }
          return buttonData;
        }
        _getInternalAxes() {
          let axes = [0, 0];
          if (this.isGamepadActive()) {
            let internalAxes = this._myGamepad.axes;
            if (internalAxes.length == 4) {
              if (Math.abs(internalAxes[0]) > Math.abs(internalAxes[2])) {
                axes[0] = internalAxes[0];
              } else {
                axes[0] = internalAxes[2];
              }
              if (Math.abs(internalAxes[1]) > Math.abs(internalAxes[3])) {
                axes[1] = internalAxes[1];
              } else {
                axes[1] = internalAxes[3];
              }
            } else if (internalAxes.length == 2) {
              axes[0] = internalAxes[0];
              axes[1] = internalAxes[1];
            }
            axes[1] = -axes[1];
          }
          return axes;
        }
        _updatePulse(dt) {
          let hapticActuator = this._getHapticActuator();
          if (hapticActuator) {
            if (this._myPulseInfo.myIntensity > 0) {
              hapticActuator.pulse(this._myPulseInfo.myIntensity, 1e3);
              this._myPulseInfo.myIsDevicePulsing = true;
            } else if (this._myPulseInfo.myIsDevicePulsing) {
              hapticActuator.reset();
              this._myPulseInfo.myIsDevicePulsing = false;
            }
          }
          this._myPulseInfo.myDuration -= dt;
          if (this._myPulseInfo.myDuration <= 0) {
            this._myPulseInfo.myIntensity = 0;
            this._myPulseInfo.myDuration = 0;
          }
        }
        _getHapticActuator() {
          let hapticActuator = null;
          if (this.isGamepadActive()) {
            if (this._myGamepad.hapticActuators && this._myGamepad.hapticActuators.length > 0) {
              hapticActuator = this._myGamepad.hapticActuators[0];
            } else {
              hapticActuator = this._myGamepad.vibrationActuator;
            }
          }
          return hapticActuator;
        }
        _onXRSessionStart(session) {
          session.addEventListener("selectstart", this._selectStart.bind(this));
          session.addEventListener("selectend", this._selectEnd.bind(this));
          session.addEventListener("squeezestart", this._squeezeStart.bind(this));
          session.addEventListener("squeezeend", this._squeezeEnd.bind(this));
          this._myIsXRSessionActive = true;
        }
        _onXRSessionEnd(session) {
          this._myIsXRSessionActive = false;
        }
        _selectStart(event) {
          if (this._myInputSource != null && this._myInputSource == event.inputSource) {
            this._mySelectStart = true;
          }
        }
        _selectEnd(event) {
          if (this._myInputSource != null && this._myInputSource == event.inputSource) {
            this._mySelectEnd = true;
          }
        }
        _squeezeStart(event) {
          if (this._myInputSource != null && this._myInputSource == event.inputSource) {
            this._mySqueezeStart = true;
          }
        }
        _squeezeEnd(event) {
          if (this._myInputSource != null && this._myInputSource == event.inputSource) {
            this._mySqueezeEnd = true;
          }
        }
        _triggerCallbacks(callbacksMap, info) {
          for (let callback of callbacksMap.values()) {
            callback(info, this);
          }
        }
      };
    }
  });

  // js/pp/plugin/component_mods/clone_mod.js
  var require_clone_mod = __commonJS({
    "js/pp/plugin/component_mods/clone_mod.js"() {
      if (WL && WL.Object) {
        WL.MeshComponent.prototype.pp_clone = function(clone7, deepCloneParams, extraData) {
          if (deepCloneParams.shouldDeepCloneComponentVariable("mesh", "material")) {
            clone7.material = this.material.clone();
          } else {
            clone7.material = this.material;
          }
          clone7.mesh = this.mesh;
          clone7.skin = this.skin;
        };
        WL.CollisionComponent.prototype.pp_clone = function(clone7, deepCloneParams, extraData) {
          clone7.collider = this.collider;
          clone7.extents = this.extents.slice(0);
          clone7.group = this.group;
        };
        WL.TextComponent.prototype.pp_clone = function(clone7, deepCloneParams, extraData) {
          if (deepCloneParams.shouldDeepCloneComponent("text")) {
            clone7.text = this.text.slice(0);
          } else {
            clone7.text = this.text;
          }
          if (deepCloneParams.shouldDeepCloneComponentVariable("text", "material")) {
            clone7.material = this.material.clone();
          } else {
            clone7.material = this.material;
          }
          clone7.alignment = this.alignment;
          clone7.justification = this.justification;
        };
        WL.PhysXComponent.prototype.pp_clone = function(clone7, deepCloneParams, extraData) {
          clone7.angularDamping = this.angularDamping;
          clone7.angularVelocity = this.angularVelocity.slice(0);
          clone7.dynamicFriction = this.dynamicFriction;
          clone7.extents = this.extents.slice(0);
          clone7.kinematic = this.kinematic;
          clone7.linearDamping = this.linearDamping;
          clone7.linearVelocity = this.linearVelocity.slice(0);
          clone7.mass = this.mass;
          clone7.restitution = this.restitution;
          clone7.shape = this.shape;
          clone7.static = this.static;
          clone7.staticFriction = this.staticFriction;
        };
        Object.defineProperty(WL.MeshComponent.prototype, "pp_clone", { enumerable: false });
        Object.defineProperty(WL.CollisionComponent.prototype, "pp_clone", { enumerable: false });
        Object.defineProperty(WL.TextComponent.prototype, "pp_clone", { enumerable: false });
        Object.defineProperty(WL.PhysXComponent.prototype, "pp_clone", { enumerable: false });
      }
    }
  });

  // js/pp/plugin/component_mods/cursor_mod.js
  var require_cursor_mod = __commonJS({
    "js/pp/plugin/component_mods/cursor_mod.js"() {
      if (_WL && _WL._componentTypes) {
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.init = function() {
          this.session = null;
          this.collisionMask = 1 << this.collisionGroup;
          this.maxDistance = 100;
          this.doubleClickTimer = 0;
          this.tripleClickTimer = 0;
          this.multipleClickObject = null;
          this.multipleClickDelay = 0.3;
          this.visible = false;
          const sceneLoaded = this.onDestroy.bind(this);
          WL.onSceneLoaded.push(sceneLoaded);
          this.onDestroyCallbacks = [() => {
            const index = WL.onSceneLoaded.indexOf(sceneLoaded);
            if (index >= 0)
              WL.onSceneLoaded.splice(index, 1);
          }];
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.update = function(dt) {
          if (this.doubleClickTimer > 0) {
            this.doubleClickTimer -= dt;
          }
          if (this.tripleClickTimer > 0) {
            this.tripleClickTimer -= dt;
          }
          this.doUpdate(false);
          this.isUpWithNoDown = false;
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.onSelect = function(e) {
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.onSelectStart = function(e) {
          if (this.active) {
            this.arTouchDown = true;
            if (e.inputSource.handedness == this.handedness) {
              this.isDown = true;
            }
          }
          this.isRealDown = true;
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.onSelectEnd = function(e) {
          if (this.active) {
            this.arTouchDown = false;
            if (e.inputSource.handedness == this.handedness) {
              if (!this.isDown) {
                this.isUpWithNoDown = true;
              }
              this.isDown = false;
            }
          }
          this.isRealDown = false;
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.hoverBehaviour = function(rayHit, doClick) {
          if (rayHit.hitCount > 0) {
            if (!this.hoveringObject || !this.hoveringObject.equals(rayHit.objects[0])) {
              if (this.hoveringObject) {
                let cursorTarget3 = this.hoveringObject.getComponent("cursor-target");
                if (cursorTarget3)
                  cursorTarget3.onUnhover(this.hoveringObject, this);
                this.globalTarget.onUnhover(this.hoveringObject, this);
              }
              this.isDown = false;
              this.lastIsDown = false;
              this.hoveringObject = rayHit.objects[0];
              if (this.styleCursor)
                WL.canvas.style.cursor = "pointer";
              let cursorTarget2 = this.hoveringObject.getComponent("cursor-target");
              if (cursorTarget2) {
                this.hoveringObjectTarget = cursorTarget2;
                cursorTarget2.onHover(this.hoveringObject, this);
              }
              this.globalTarget.onHover(this.hoveringObject, this);
              if (this.isRealDown) {
                if (cursorTarget2)
                  cursorTarget2.onDownOnHover(this.hoveringObject, this);
                this.globalTarget.onDownOnHover(this.hoveringObject, this);
              }
            }
            if (this.hoveringObjectTarget) {
              this.hoveringObjectTarget.onMove(this.hoveringObject, this);
            }
            let cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if (this.isDown !== this.lastIsDown && this.isDown) {
              if (cursorTarget)
                cursorTarget.onDown(this.hoveringObject, this);
              this.globalTarget.onDown(this.hoveringObject, this);
            }
            if (this.isDown !== this.lastIsDown && !this.isDown) {
              if (this.tripleClickTimer > 0 && this.multipleClickObject && this.multipleClickObject.equals(this.hoveringObject)) {
                if (cursorTarget)
                  cursorTarget.onTripleClick(this.hoveringObject, this);
                this.globalTarget.onTripleClick(this.hoveringObject, this);
                this.tripleClickTimer = 0;
              } else if (this.doubleClickTimer > 0 && this.multipleClickObject && this.multipleClickObject.equals(this.hoveringObject)) {
                if (cursorTarget)
                  cursorTarget.onDoubleClick(this.hoveringObject, this);
                this.globalTarget.onDoubleClick(this.hoveringObject, this);
                this.tripleClickTimer = this.multipleClickDelay;
                this.doubleClickTimer = 0;
              } else {
                if (cursorTarget)
                  cursorTarget.onClick(this.hoveringObject, this);
                this.globalTarget.onClick(this.hoveringObject, this);
                this.tripleClickTimer = 0;
                this.doubleClickTimer = this.multipleClickDelay;
                this.multipleClickObject = this.hoveringObject;
              }
            }
            if (this.isDown !== this.lastIsDown && !this.isDown) {
              if (cursorTarget)
                cursorTarget.onUp(this.hoveringObject, this);
              this.globalTarget.onUp(this.hoveringObject, this);
            } else if (this.isUpWithNoDown) {
              if (cursorTarget)
                cursorTarget.onUpWithNoDown(this.hoveringObject, this);
              this.globalTarget.onUpWithNoDown(this.hoveringObject, this);
            }
          } else if (this.hoveringObject && rayHit.hitCount == 0) {
            let cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if (cursorTarget)
              cursorTarget.onUnhover(this.hoveringObject, this);
            this.globalTarget.onUnhover(this.hoveringObject, this);
            this.hoveringObject = null;
            this.hoveringObjectTarget = null;
            if (this.styleCursor)
              WL.canvas.style.cursor = "default";
          }
          if (this.hoveringObject) {
            this.lastIsDown = this.isDown;
          } else {
            this.isDown = false;
            this.lastIsDown = false;
          }
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.onDeactivate = function() {
          if (this.hoveringObject) {
            const cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if (cursorTarget)
              cursorTarget.onUnhover(this.hoveringObject, this);
            this.globalTarget.onUnhover(this.hoveringObject, this);
          }
          this.hoveringObject = null;
          this.hoveringObjectTarget = null;
          if (this.styleCursor)
            WL.canvas.style.cursor = "default";
          this.isDown = false;
          this.lastIsDown = false;
          this.isUpWithNoDown = false;
          this._setCursorVisibility(false);
          if (this.cursorRayObject) {
            this.cursorRayObject.pp_setActive(false);
          }
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.onActivate = function() {
          this.showRay = true;
          this.isDown = false;
          this.lastIsDown = false;
          this.isUpWithNoDown = false;
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto._setCursorVisibility = function(visible) {
          if (this.visible == visible)
            return;
          this.visible = visible;
          if (!this.cursorObject)
            return;
          if (visible) {
            this.cursorObject.pp_setActive(true);
          } else {
            this.cursorObject.pp_setActive(false);
          }
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.start = function() {
          if (this.handedness == 0) {
            const inputComp = this.object.getComponent("input");
            if (!inputComp) {
              console.warn("cursor component on object", this.object.name, 'was configured with handedness "input component", but object has no input component.');
            } else {
              this.handedness = inputComp.handedness;
              this.input = inputComp;
            }
          } else {
            this.handedness = ["left", "right"][this.handedness - 1];
          }
          this.globalTarget = this.object.addComponent("cursor-target");
          this.origin = new Float32Array(3);
          this.cursorObjScale = new Float32Array(3);
          this.direction = [0, 0, 0];
          this.tempQuat = new Float32Array(4);
          this.viewComponent = this.object.getComponent("view");
          if (this.viewComponent != null) {
            const onClick = this.onClick.bind(this);
            WL.canvas.addEventListener("click", onClick);
            const onPointerMove = this.onPointerMove.bind(this);
            WL.canvas.addEventListener("pointermove", onPointerMove);
            const onPointerDown = this.onPointerDown.bind(this);
            WL.canvas.addEventListener("pointerdown", onPointerDown);
            const onPointerUp = this.onPointerUp.bind(this);
            WL.canvas.addEventListener("pointerup", onPointerUp);
            this.projectionMatrix = new Float32Array(16);
            mat4.invert(this.projectionMatrix, this.viewComponent.projectionMatrix);
            const onViewportResize = this.onViewportResize.bind(this);
            window.addEventListener("resize", onViewportResize);
            this.onDestroyCallbacks.push(() => {
              WL.canvas.removeEventListener("click", onClick);
              WL.canvas.removeEventListener("pointermove", onPointerMove);
              WL.canvas.removeEventListener("pointerdown", onPointerDown);
              WL.canvas.removeEventListener("pointerup", onPointerUp);
              window.removeEventListener("resize", onViewportResize);
            });
          }
          this.isHovering = false;
          this.visible = true;
          this.isDown = false;
          this.lastIsDown = false;
          this.isUpWithNoDown = false;
          this.isRealDown = false;
          this.cursorPos = new Float32Array(3);
          this.hoveringObject = null;
          const onXRSessionStart = this.setupVREvents.bind(this);
          WL.onXRSessionStart.push(onXRSessionStart);
          this.onDestroyCallbacks.push(() => {
            const index = WL.onXRSessionStart.indexOf(onXRSessionStart);
            if (index >= 0)
              WL.onXRSessionStart.splice(index, 1);
          });
          this.showRay = true;
          if (this.cursorRayObject) {
            this.cursorRayObject.pp_setActive(true);
            this.showRay = false;
            this.cursorRayScale = new Float32Array(3);
            this.cursorRayScale.set(this.cursorRayObject.scalingLocal);
            this.object.getTranslationWorld(this.origin);
            this.object.getForward(this.direction);
            this._setCursorRayTransform([
              this.origin[0] + this.direction[0],
              this.origin[1] + this.direction[1],
              this.origin[2] + this.direction[2]
            ]);
          }
          this._setCursorVisibility(false);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.doUpdate = function(doClick) {
          if (this.session) {
            if (this.arTouchDown && this.input && WL.xrSession.inputSources[0].handedness === "none" && WL.xrSession.inputSources[0].gamepad) {
              const p = WL.xrSession.inputSources[0].gamepad.axes;
              this.direction = [p[0], -p[1], -1];
              this.updateDirection();
            } else {
              this.object.getTranslationWorld(this.origin);
              this.object.getForward(this.direction);
            }
            const rayHit = this.rayHit = this.rayCastMode == 0 ? WL.scene.rayCast(this.origin, this.direction, this.collisionMask) : WL.physics.rayCast(this.origin, this.direction, this.collisionMask, this.maxDistance);
            if (rayHit.hitCount > 0) {
              this.cursorPos.set(rayHit.locations[0]);
            } else {
              this.cursorPos.fill(0);
            }
            this.hoverBehaviour(rayHit, doClick);
          }
          if (this.cursorObject) {
            if (this.hoveringObject && (this.cursorPos[0] != 0 || this.cursorPos[1] != 0 || this.cursorPos[2] != 0)) {
              this._setCursorVisibility(true);
              this.cursorObject.setTranslationWorld(this.cursorPos);
              this._setCursorRayTransform(this.cursorPos);
            } else {
              if (this.visible && this.cursorRayObject) {
                this.object.getTranslationWorld(this.origin);
                this.object.getForward(this.direction);
                this._setCursorRayTransform([
                  this.origin[0] + this.direction[0],
                  this.origin[1] + this.direction[1],
                  this.origin[2] + this.direction[2]
                ]);
              }
              this._setCursorVisibility(false);
            }
            if (this.cursorRayObject) {
              if (this.showRay) {
                this.cursorRayObject.pp_setActive(true);
                this.showRay = false;
              }
            }
          }
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.onClick = function(e) {
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.onPointerDown = function(e) {
          if (this.active) {
            if (!e.isPrimary || e.button !== 0)
              return;
            const bounds = e.target.getBoundingClientRect();
            const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
            this.isDown = true;
            this.isRealDown = true;
            this.hoverBehaviour(rayHit, false);
          } else {
            this.isRealDown = true;
          }
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor"]].proto.onPointerUp = function(e) {
          if (this.active) {
            if (!e.isPrimary || e.button !== 0)
              return;
            const bounds = e.target.getBoundingClientRect();
            const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
            if (!this.isDown) {
              this.isUpWithNoDown = true;
            }
            this.isDown = false;
            this.isRealDown = false;
            this.hoverBehaviour(rayHit, false);
          } else {
            this.isRealDown = false;
          }
        };
      }
    }
  });

  // js/pp/plugin/component_mods/cursor_target_mod.js
  var require_cursor_target_mod = __commonJS({
    "js/pp/plugin/component_mods/cursor_target_mod.js"() {
      if (_WL && _WL._componentTypes) {
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.init = function() {
          this.hoverFunctions = [];
          this.unHoverFunctions = [];
          this.clickFunctions = [];
          this.doubleClickFunctions = [];
          this.tripleClickFunctions = [];
          this.moveFunctions = [];
          this.downFunctions = [];
          this.upFunctions = [];
          this.downOnHoverFunctions = [];
          this.upWithNoDownFunctions = [];
          this.isSurface = false;
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.onDoubleClick = function(object, cursor) {
          for (let f of this.doubleClickFunctions)
            f(object, cursor);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.addDoubleClickFunction = function(f) {
          this._validateCallback(f);
          this.doubleClickFunctions.push(f);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.removeDoubleClickFunction = function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.doubleClickFunctions, f);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.onTripleClick = function(object, cursor) {
          for (let f of this.tripleClickFunctions)
            f(object, cursor);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.addTripleClickFunction = function(f) {
          this._validateCallback(f);
          this.tripleClickFunctions.push(f);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.removeTripleClickFunction = function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.tripleClickFunctions, f);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.onDownOnHover = function(object, cursor) {
          for (let f of this.downOnHoverFunctions)
            f(object, cursor);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.addDownOnHoverFunction = function(f) {
          this._validateCallback(f);
          this.downOnHoverFunctions.push(f);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.removeDownOnHoverFunction = function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.downOnHoverFunctions, f);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.onUpWithNoDown = function(object, cursor) {
          for (let f of this.upWithNoDownFunctions)
            f(object, cursor);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.addUpWithNoDownFunction = function(f) {
          this._validateCallback(f);
          this.upWithNoDownFunctions.push(f);
        };
        _WL._componentTypes[_WL._componentTypeIndices["cursor-target"]].proto.removeUpWithNoDownFunction = function(f) {
          this._validateCallback(f);
          this._removeItemOnce(this.upWithNoDownFunctions, f);
        };
      }
    }
  });

  // js/pp/plugin/extensions/object_extension.js
  var object_extension_exports = {};
  var init_object_extension = __esm({
    "js/pp/plugin/extensions/object_extension.js"() {
      init_esm();
      if (WL && WL.Object) {
        WL.Object.prototype.pp_getPosition = function(position) {
          return this.pp_getPositionWorld(position);
        };
        WL.Object.prototype.pp_getPositionWorld = function(position = vec3_exports.create()) {
          this.getTranslationWorld(position);
          return position;
        };
        WL.Object.prototype.pp_getPositionLocal = function(position = vec3_exports.create()) {
          this.getTranslationLocal(position);
          return position;
        };
        WL.Object.prototype.pp_getRotation = function(rotation) {
          return this.pp_getRotationWorld(rotation);
        };
        WL.Object.prototype.pp_getRotationDegrees = function(rotation) {
          return this.pp_getRotationWorldDegrees(rotation);
        };
        WL.Object.prototype.pp_getRotationRadians = function(rotation) {
          return this.pp_getRotationWorldRadians(rotation);
        };
        WL.Object.prototype.pp_getRotationMatrix = function(rotation) {
          return this.pp_getRotationWorldMatrix(rotation);
        };
        WL.Object.prototype.pp_getRotationQuat = function(rotation) {
          return this.pp_getRotationWorldQuat(rotation);
        };
        WL.Object.prototype.pp_getRotationWorld = function(rotation) {
          return this.pp_getRotationWorldDegrees(rotation);
        };
        WL.Object.prototype.pp_getRotationWorldDegrees = function(rotation) {
          rotation = this.pp_getRotationWorldRadians(rotation);
          rotation.forEach(function(value, index, array) {
            array[index] = this._pp_toDegrees(value);
          }.bind(this));
          return rotation;
        };
        WL.Object.prototype.pp_getRotationWorldRadians = function() {
          let quat2 = quat_exports.create();
          return function(rotation = vec3_exports.create()) {
            this.pp_getRotationWorldQuat(quat2);
            this._pp_quaternionToRadians(quat2, rotation);
            return rotation;
          };
        }();
        WL.Object.prototype.pp_getRotationWorldMatrix = function() {
          let quat2 = quat_exports.create();
          return function(rotation = mat3_exports.create()) {
            this.pp_getRotationWorldQuat(quat2);
            mat3_exports.fromQuat(rotation, quat2);
            return rotation;
          };
        }();
        WL.Object.prototype.pp_getRotationWorldQuat = function(rotation = quat_exports.create()) {
          quat_exports.copy(rotation, this.rotationWorld);
          return rotation;
        };
        WL.Object.prototype.pp_getRotationLocal = function(rotation) {
          return this.pp_getRotationLocalDegrees(rotation);
        };
        WL.Object.prototype.pp_getRotationLocalDegrees = function(rotation) {
          rotation = this.pp_getRotationLocalRadians(rotation);
          rotation.forEach(function(value, index, array) {
            array[index] = this._pp_toDegrees(value);
          }.bind(this));
          return rotation;
        };
        WL.Object.prototype.pp_getRotationLocalRadians = function() {
          let quat2 = quat_exports.create();
          return function(rotation = vec3_exports.create()) {
            this.pp_getRotationLocalQuat(quat2);
            this._pp_quaternionToRadians(quat2, rotation);
            return rotation;
          };
        }();
        WL.Object.prototype.pp_getRotationLocalMatrix = function() {
          let quat2 = quat_exports.create();
          return function(rotation = mat3_exports.create()) {
            this.pp_getRotationLocalQuat(quat2);
            mat3_exports.fromQuat(rotation, quat2);
            return rotation;
          };
        }();
        WL.Object.prototype.pp_getRotationLocalQuat = function(rotation = quat_exports.create()) {
          quat_exports.copy(rotation, this.rotationLocal);
          return rotation;
        };
        WL.Object.prototype.pp_getScale = function(scale7) {
          return this.pp_getScaleWorld(scale7);
        };
        WL.Object.prototype.pp_getScaleWorld = function(scale7 = vec3_exports.create()) {
          vec3_exports.copy(scale7, this.scalingWorld);
          return scale7;
        };
        WL.Object.prototype.pp_getScaleLocal = function(scale7 = vec3_exports.create()) {
          vec3_exports.copy(scale7, this.scalingLocal);
          return scale7;
        };
        WL.Object.prototype.pp_getTransform = function(transform) {
          return this.pp_getTransformWorld(transform);
        };
        WL.Object.prototype.pp_getTransformMatrix = function(transform) {
          return this.pp_getTransformWorldMatrix(transform);
        };
        WL.Object.prototype.pp_getTransformQuat = function(transform) {
          return this.pp_getTransformWorldQuat(transform);
        };
        WL.Object.prototype.pp_getTransformWorld = function(transform) {
          return this.pp_getTransformWorldMatrix(transform);
        };
        WL.Object.prototype.pp_getTransformWorldMatrix = function() {
          let transformQuat3 = quat2_exports.create();
          let scale7 = vec3_exports.create();
          return function(transform = mat4_exports.create()) {
            this.pp_getTransformWorldQuat(transformQuat3);
            this.pp_getScaleWorld(scale7);
            mat4_exports.fromQuat2(transform, transformQuat3);
            mat4_exports.scale(transform, transform, scale7);
            return transform;
          };
        }();
        WL.Object.prototype.pp_getTransformWorldQuat = function(transform = quat2_exports.create()) {
          quat2_exports.copy(transform, this.transformWorld);
          return transform;
        };
        WL.Object.prototype.pp_getTransformLocal = function(transform) {
          return this.pp_getTransformLocalMatrix(transform);
        };
        WL.Object.prototype.pp_getTransformLocalMatrix = function() {
          let transformQuat3 = quat2_exports.create();
          let scale7 = vec3_exports.create();
          return function(transform = mat4_exports.create()) {
            this.pp_getTransformLocalQuat(transformQuat3);
            this.pp_getScaleLocal(scale7);
            mat4_exports.fromQuat2(transform, transformQuat3);
            mat4_exports.scale(transform, transform, scale7);
            return transform;
          };
        }();
        WL.Object.prototype.pp_getTransformLocalQuat = function(transform = quat2_exports.create()) {
          quat2_exports.copy(transform, this.transformLocal);
          return transform;
        };
        WL.Object.prototype.pp_getForward = function(forward) {
          return this.pp_getForwardWorld(forward);
        };
        WL.Object.prototype.pp_getForwardWorld = function() {
          let rotation = mat3_exports.create();
          return function(forward = vec3_exports.create()) {
            this.pp_getRotationWorldMatrix(rotation);
            forward[0] = rotation[6];
            forward[1] = rotation[7];
            forward[2] = rotation[8];
            return forward;
          };
        }();
        WL.Object.prototype.pp_getForwardLocal = function() {
          let rotation = mat3_exports.create();
          return function(forward = vec3_exports.create()) {
            this.pp_getRotationLocalMatrix(rotation);
            forward[0] = rotation[6];
            forward[1] = rotation[7];
            forward[2] = rotation[8];
            return forward;
          };
        }();
        WL.Object.prototype.pp_getBackward = function(backward) {
          return this.pp_getBackwardWorld(backward);
        };
        WL.Object.prototype.pp_getBackwardWorld = function() {
          let rotation = mat3_exports.create();
          return function(backward = vec3_exports.create()) {
            this.pp_getRotationWorldMatrix(rotation);
            backward[0] = -rotation[6];
            backward[1] = -rotation[7];
            backward[2] = -rotation[8];
            return backward;
          };
        }();
        WL.Object.prototype.pp_getBackwardLocal = function() {
          let rotation = mat3_exports.create();
          return function(backward = vec3_exports.create()) {
            this.pp_getRotationLocalMatrix(rotation);
            backward[0] = -rotation[6];
            backward[1] = -rotation[7];
            backward[2] = -rotation[8];
            return backward;
          };
        }();
        WL.Object.prototype.pp_getUp = function(up) {
          return this.pp_getUpWorld(up);
        };
        WL.Object.prototype.pp_getUpWorld = function() {
          let rotation = mat3_exports.create();
          return function(up = vec3_exports.create()) {
            this.pp_getRotationWorldMatrix(rotation);
            up[0] = rotation[3];
            up[1] = rotation[4];
            up[2] = rotation[5];
            return up;
          };
        }();
        WL.Object.prototype.pp_getUpLocal = function() {
          let rotation = mat3_exports.create();
          return function(up = vec3_exports.create()) {
            this.pp_getRotationLocalMatrix(rotation);
            up[0] = rotation[3];
            up[1] = rotation[4];
            up[2] = rotation[5];
            return up;
          };
        }();
        WL.Object.prototype.pp_getDown = function(down) {
          return this.pp_getDownWorld(down);
        };
        WL.Object.prototype.pp_getDownWorld = function() {
          let rotation = mat3_exports.create();
          return function(down = vec3_exports.create()) {
            this.pp_getRotationWorldMatrix(rotation);
            down[0] = -rotation[3];
            down[1] = -rotation[4];
            down[2] = -rotation[5];
            return down;
          };
        }();
        WL.Object.prototype.pp_getDownLocal = function() {
          let rotation = mat3_exports.create();
          return function(down = vec3_exports.create()) {
            this.pp_getRotationLocalMatrix(rotation);
            down[0] = -rotation[3];
            down[1] = -rotation[4];
            down[2] = -rotation[5];
            return down;
          };
        }();
        WL.Object.prototype.pp_getLeft = function(left) {
          return this.pp_getLeftWorld(left);
        };
        WL.Object.prototype.pp_getLeftWorld = function() {
          let rotation = mat3_exports.create();
          return function(left = vec3_exports.create()) {
            this.pp_getRotationWorldMatrix(rotation);
            left[0] = rotation[0];
            left[1] = rotation[1];
            left[2] = rotation[2];
            return left;
          };
        }();
        WL.Object.prototype.pp_getLeftLocal = function() {
          let rotation = mat3_exports.create();
          return function(left = vec3_exports.create()) {
            this.pp_getRotationLocalMatrix(rotation);
            left[0] = rotation[0];
            left[1] = rotation[1];
            left[2] = rotation[2];
            return left;
          };
        }();
        WL.Object.prototype.pp_getRight = function(right) {
          return this.pp_getRightWorld(right);
        };
        WL.Object.prototype.pp_getRightWorld = function() {
          let rotation = mat3_exports.create();
          return function(right = vec3_exports.create()) {
            this.pp_getRotationWorldMatrix(rotation);
            right[0] = -rotation[0];
            right[1] = -rotation[1];
            right[2] = -rotation[2];
            return right;
          };
        }();
        WL.Object.prototype.pp_getRightLocal = function() {
          let rotation = mat3_exports.create();
          return function(right = vec3_exports.create()) {
            this.pp_getRotationLocalMatrix(rotation);
            right[0] = -rotation[0];
            right[1] = -rotation[1];
            right[2] = -rotation[2];
            return right;
          };
        }();
        WL.Object.prototype.pp_setPosition = function(position) {
          this.pp_setPositionWorld(position);
        };
        WL.Object.prototype.pp_setPositionWorld = function(position) {
          this.setTranslationWorld(position);
        };
        WL.Object.prototype.pp_setPositionLocal = function(position) {
          this.setTranslationLocal(position);
        };
        WL.Object.prototype.pp_setRotation = function(rotation) {
          this.pp_setRotationWorld(rotation);
        };
        WL.Object.prototype.pp_setRotationDegrees = function(rotation) {
          this.pp_setRotationWorldDegrees(rotation);
        };
        WL.Object.prototype.pp_setRotationRadians = function(rotation) {
          this.pp_setRotationWorldRadians(rotation);
        };
        WL.Object.prototype.pp_setRotationMatrix = function(rotation) {
          this.pp_setRotationWorldMatrix(rotation);
        };
        WL.Object.prototype.pp_setRotationQuat = function(rotation) {
          this.pp_setRotationWorldQuat(rotation);
        };
        WL.Object.prototype.pp_setRotationWorld = function(rotation) {
          this.pp_setRotationWorldDegrees(rotation);
        };
        WL.Object.prototype.pp_setRotationWorldDegrees = function() {
          let quat2 = quat_exports.create();
          return function(rotation) {
            this._pp_degreesToQuaternion(rotation, quat2);
            this.pp_setRotationWorldQuat(quat2);
          };
        }();
        WL.Object.prototype.pp_setRotationWorldRadians = function() {
          let degreesRotation = vec3_exports.create();
          return function(rotation) {
            rotation.forEach(function(value, index, array) {
              degreesRotation[index] = this._pp_toDegrees(value);
            }.bind(this));
            this.pp_setRotationWorldDegrees(degreesRotation);
          };
        }();
        WL.Object.prototype.pp_setRotationWorldMatrix = function() {
          let quat2 = quat_exports.create();
          return function(rotation) {
            quat_exports.fromMat3(quat2, rotation);
            this.pp_setRotationWorldQuat(quat2);
          };
        }();
        WL.Object.prototype.pp_setRotationWorldQuat = function(rotation) {
          this.rotationWorld = rotation;
        };
        WL.Object.prototype.pp_setRotationLocal = function(rotation) {
          this.pp_setRotationLocalDegrees(rotation);
        };
        WL.Object.prototype.pp_setRotationLocalDegrees = function() {
          let quat2 = quat_exports.create();
          return function(rotation) {
            this._pp_degreesToQuaternion(rotation, quat2);
            this.pp_setRotationLocalQuat(quat2);
          };
        }();
        WL.Object.prototype.pp_setRotationLocalRadians = function() {
          let degreesRotation = vec3_exports.create();
          return function(rotation) {
            rotation.forEach(function(value, index, array) {
              degreesRotation[index] = this._pp_toDegrees(value);
            }.bind(this));
            this.pp_setRotationLocalDegrees(degreesRotation);
          };
        }();
        WL.Object.prototype.pp_setRotationLocalMatrix = function() {
          let quat2 = quat_exports.create();
          return function(rotation) {
            quat_exports.fromMat3(quat2, rotation);
            this.pp_setRotationLocalQuat(quat2);
          };
        }();
        WL.Object.prototype.pp_setRotationLocalQuat = function(rotation) {
          this.rotationLocal = rotation;
        };
        WL.Object.prototype.pp_setScale = function(scale7) {
          this.pp_setScaleWorld(scale7);
        };
        WL.Object.prototype.pp_setScaleWorld = function() {
          let vector = vec3_exports.create();
          return function(scale7) {
            if (isNaN(scale7)) {
              this.scalingWorld = scale7;
            } else {
              vec3_exports.set(vector, scale7, scale7, scale7);
              this.scalingWorld = vector;
            }
          };
        }();
        WL.Object.prototype.pp_setScaleLocal = function() {
          let vector = vec3_exports.create();
          return function(scale7) {
            if (isNaN(scale7)) {
              this.scalingLocal = scale7;
            } else {
              vec3_exports.set(vector, scale7, scale7, scale7);
              this.scalingLocal = vector;
            }
          };
        }();
        WL.Object.prototype.pp_setTransform = function(transform) {
          this.pp_setTransformWorld(transform);
        };
        WL.Object.prototype.pp_setTransformMatrix = function(transform) {
          this.pp_setTransformWorldMatrix(transform);
        };
        WL.Object.prototype.pp_setTransformQuat = function(transform) {
          this.pp_setTransformWorldQuat(transform);
        };
        WL.Object.prototype.pp_setTransformWorld = function(transform) {
          return this.pp_setTransformWorldMatrix(transform);
        };
        WL.Object.prototype.pp_setTransformWorldMatrix = function() {
          let position = vec3_exports.create();
          let rotation = quat_exports.create();
          let scale7 = vec3_exports.create();
          let transformMatrixNoScale = mat4_exports.create();
          let inverseScale = vec3_exports.create();
          let one = vec3_exports.create();
          vec3_exports.set(one, 1, 1, 1);
          return function(transform) {
            mat4_exports.getTranslation(position, transform);
            mat4_exports.getScaling(scale7, transform);
            vec3_exports.divide(inverseScale, one, scale7);
            mat4_exports.scale(transformMatrixNoScale, transform, inverseScale);
            mat4_exports.getRotation(rotation, transformMatrixNoScale);
            quat_exports.normalize(rotation, rotation);
            this.pp_setScaleWorld(scale7);
            this.pp_setRotationWorldQuat(rotation);
            this.pp_setPositionWorld(position);
          };
        }();
        WL.Object.prototype.pp_setTransformWorldQuat = function(transform) {
          this.transformWorld = transform;
        };
        WL.Object.prototype.pp_setTransformLocal = function(transform) {
          return this.pp_setTransformLocalMatrix(transform);
        };
        WL.Object.prototype.pp_setTransformLocalMatrix = function() {
          let position = vec3_exports.create();
          let rotation = quat_exports.create();
          let scale7 = vec3_exports.create();
          let transformMatrixNoScale = mat4_exports.create();
          let inverseScale = vec3_exports.create();
          let one = vec3_exports.create();
          vec3_exports.set(one, 1, 1, 1);
          return function(transform) {
            mat4_exports.getTranslation(position, transform);
            mat4_exports.getScaling(scale7, transform);
            vec3_exports.divide(inverseScale, one, scale7);
            mat4_exports.scale(transformMatrixNoScale, transform, inverseScale);
            mat4_exports.getRotation(rotation, transformMatrixNoScale);
            quat_exports.normalize(rotation, rotation);
            this.pp_setScaleLocal(scale7);
            this.pp_setRotationLocalQuat(rotation);
            this.pp_setPositionLocal(position);
          };
        }();
        WL.Object.prototype.pp_setTransformLocalQuat = function(transform) {
          this.transformLocal = transform;
        };
        WL.Object.prototype.pp_resetPosition = function() {
          this.pp_resetPositionWorld();
        };
        WL.Object.prototype.pp_resetPositionWorld = function() {
          let zero3 = vec3_exports.create();
          return function() {
            this.pp_setPositionWorld(zero3);
          };
        }();
        WL.Object.prototype.pp_resetPositionLocal = function() {
          let zero3 = vec3_exports.create();
          return function() {
            this.pp_setPositionLocal(zero3);
          };
        }();
        WL.Object.prototype.pp_resetRotation = function() {
          this.pp_resetRotationWorld();
        };
        WL.Object.prototype.pp_resetRotationWorld = function() {
          let identity5 = quat_exports.create();
          return function() {
            this.pp_setRotationWorldQuat(identity5);
          };
        }();
        WL.Object.prototype.pp_resetRotationLocal = function() {
          let identity5 = quat_exports.create();
          return function() {
            this.pp_setRotationLocalQuat(identity5);
          };
        }();
        WL.Object.prototype.pp_resetScale = function() {
          this.pp_resetScaleWorld();
        };
        WL.Object.prototype.pp_resetScaleWorld = function() {
          let one = vec3_exports.create();
          vec3_exports.set(one, 1, 1, 1);
          return function() {
            this.pp_setScaleWorld(one);
          };
        }();
        WL.Object.prototype.pp_resetScaleLocal = function() {
          let one = vec3_exports.create();
          vec3_exports.set(one, 1, 1, 1);
          return function() {
            this.pp_setScaleLocal(one);
          };
        }();
        WL.Object.prototype.pp_resetTransform = function() {
          this.pp_resetTransformWorld();
        };
        WL.Object.prototype.pp_resetTransformWorld = function() {
          this.pp_resetScaleWorld();
          this.pp_resetRotationWorld();
          this.pp_resetPositionWorld();
        };
        WL.Object.prototype.pp_resetTransformLocal = function() {
          this.pp_resetScaleLocal();
          this.pp_resetRotationLocal();
          this.pp_resetPositionLocal();
        };
        WL.Object.prototype.pp_translate = function(translation) {
          this.pp_translateWorld(translation);
        };
        WL.Object.prototype.pp_translateWorld = function(translation) {
          this.translateWorld(translation);
        };
        WL.Object.prototype.pp_translateLocal = function(translation) {
          this.translate(translation);
        };
        WL.Object.prototype.pp_translateObject = function(translation) {
          this.translateObject(translation);
        };
        WL.Object.prototype.pp_translateAxis = function(direction, amount) {
          this.pp_translateAxisWorld(direction, amount);
        };
        WL.Object.prototype.pp_translateAxisWorld = function() {
          let translation = vec3_exports.create();
          return function(direction, amount) {
            vec3_exports.scale(translation, direction, amount);
            this.pp_translateWorld(translation);
          };
        }();
        WL.Object.prototype.pp_translateAxisLocal = function() {
          let translation = vec3_exports.create();
          return function(direction, amount) {
            vec3_exports.scale(translation, direction, amount);
            this.pp_translateLocal(translation);
          };
        }();
        WL.Object.prototype.pp_translateAxisObject = function() {
          let translation = vec3_exports.create();
          return function(direction, amount) {
            vec3_exports.scale(translation, direction, amount);
            this.pp_translateObject(translation);
          };
        }();
        WL.Object.prototype.pp_rotate = function(rotation) {
          this.pp_rotateWorld(rotation);
        };
        WL.Object.prototype.pp_rotateDegrees = function(rotation) {
          this.pp_rotateWorldDegrees(rotation);
        };
        WL.Object.prototype.pp_rotateRadians = function(rotation) {
          this.pp_rotateWorldRadians(rotation);
        };
        WL.Object.prototype.pp_rotateMatrix = function(rotation) {
          this.pp_rotateWorldMatrix(rotation);
        };
        WL.Object.prototype.pp_rotateQuat = function(rotation) {
          this.pp_rotateWorldQuat(rotation);
        };
        WL.Object.prototype.pp_rotateWorld = function(rotation) {
          this.pp_rotateWorldDegrees(rotation);
        };
        WL.Object.prototype.pp_rotateWorldDegrees = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation) {
            this._pp_degreesToQuaternion(rotation, rotationQuat);
            this.pp_rotateWorldQuat(rotationQuat);
          };
        }();
        WL.Object.prototype.pp_rotateWorldRadians = function() {
          let degreesRotation = vec3_exports.create();
          return function(rotation) {
            rotation.forEach(function(value, index, array) {
              degreesRotation[index] = this._pp_toDegrees(value);
            }.bind(this));
            this.pp_rotateWorldDegrees(degreesRotation);
          };
        }();
        WL.Object.prototype.pp_rotateWorldMatrix = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation) {
            quat_exports.fromMat3(rotationQuat, rotation);
            quat_exports.normalize(rotationQuat, rotationQuat);
            this.pp_rotateWorldQuat(rotationQuat);
          };
        }();
        WL.Object.prototype.pp_rotateWorldQuat = function() {
          let currentRotationQuat = quat_exports.create();
          return function(rotation) {
            this.pp_getRotationWorldQuat(currentRotationQuat);
            quat_exports.mul(currentRotationQuat, rotation, currentRotationQuat);
            quat_exports.normalize(currentRotationQuat, currentRotationQuat);
            this.pp_setRotationWorldQuat(currentRotationQuat);
          };
        }();
        WL.Object.prototype.pp_rotateLocal = function(rotation) {
          this.pp_rotateLocalDegrees(rotation);
        };
        WL.Object.prototype.pp_rotateLocalDegrees = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation) {
            this._pp_degreesToQuaternion(rotation, rotationQuat);
            this.pp_rotateLocalQuat(rotationQuat);
          };
        }();
        WL.Object.prototype.pp_rotateLocalRadians = function() {
          let degreesRotation = vec3_exports.create();
          return function(rotation) {
            rotation.forEach(function(value, index, array) {
              degreesRotation[index] = this._pp_toDegrees(value);
            }.bind(this));
            this.pp_rotateLocalDegrees(degreesRotation);
          };
        }();
        WL.Object.prototype.pp_rotateLocalMatrix = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation) {
            quat_exports.fromMat3(rotationQuat, rotation);
            quat_exports.normalize(rotationQuat, rotationQuat);
            this.pp_rotateLocalQuat(rotationQuat);
          };
        }();
        WL.Object.prototype.pp_rotateLocalQuat = function() {
          let currentRotationQuat = quat_exports.create();
          return function(rotation) {
            this.pp_getRotationLocalQuat(currentRotationQuat);
            quat_exports.mul(currentRotationQuat, rotation, currentRotationQuat);
            quat_exports.normalize(currentRotationQuat, currentRotationQuat);
            this.pp_setRotationLocalQuat(currentRotationQuat);
          };
        }();
        WL.Object.prototype.pp_rotateObject = function(rotation) {
          this.pp_rotateObjectDegrees(rotation);
        };
        WL.Object.prototype.pp_rotateObjectDegrees = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation) {
            this._pp_degreesToQuaternion(rotation, rotationQuat);
            this.pp_rotateObjectQuat(rotationQuat);
          };
        }();
        WL.Object.prototype.pp_rotateObjectRadians = function() {
          let degreesRotation = vec3_exports.create();
          return function(rotation) {
            rotation.forEach(function(value, index, array) {
              degreesRotation[index] = this._pp_toDegrees(value);
            }.bind(this));
            this.pp_rotateObjectDegrees(degreesRotation);
          };
        }();
        WL.Object.prototype.pp_rotateObjectMatrix = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation) {
            quat_exports.fromMat3(rotationQuat, rotation);
            quat_exports.normalize(rotationQuat, rotationQuat);
            this.pp_rotateObjectQuat(rotationQuat);
          };
        }();
        WL.Object.prototype.pp_rotateObjectQuat = function(rotation) {
          this.rotateObject(rotation);
        };
        WL.Object.prototype.pp_rotateAxis = function(angle2, axis) {
          this.pp_rotateAxisWorld(angle2, axis);
        };
        WL.Object.prototype.pp_rotateAxisDegrees = function(angle2, axis) {
          this.pp_rotateAxisWorldDegrees(angle2, axis);
        };
        WL.Object.prototype.pp_rotateAxisRadians = function(angle2, axis) {
          this.pp_rotateAxisWorldRadians(angle2, axis);
        };
        WL.Object.prototype.pp_rotateAxisWorld = function(angle2, axis) {
          this.pp_rotateAxisWorldDegrees(angle2, axis);
        };
        WL.Object.prototype.pp_rotateAxisWorldDegrees = function(angle2, axis) {
          this.pp_rotateAxisWorldRadians(common_exports.toRadian(angle2), axis);
        };
        WL.Object.prototype.pp_rotateAxisWorldRadians = function() {
          let rotation = quat_exports.create();
          return function(angle2, axis) {
            quat_exports.setAxisAngle(rotation, axis, angle2);
            this.pp_rotateWorldQuat(rotation);
          };
        }();
        WL.Object.prototype.pp_rotateAxisLocal = function(angle2, axis) {
          this.pp_rotateAxisLocalDegrees(angle2, axis);
        };
        WL.Object.prototype.pp_rotateAxisLocalDegrees = function(angle2, axis) {
          this.pp_rotateAxisLocalRadians(common_exports.toRadian(angle2), axis);
        };
        WL.Object.prototype.pp_rotateAxisLocalRadians = function() {
          let rotation = quat_exports.create();
          return function(angle2, axis) {
            quat_exports.setAxisAngle(rotation, axis, angle2);
            this.pp_rotateLocalQuat(rotation);
          };
        }();
        WL.Object.prototype.pp_rotateAxisObject = function(angle2, axis) {
          this.pp_rotateAxisObjectDegrees(angle2, axis);
        };
        WL.Object.prototype.pp_rotateAxisObjectDegrees = function(angle2, axis) {
          this.pp_rotateAxisObjectRadians(common_exports.toRadian(angle2), axis);
        };
        WL.Object.prototype.pp_rotateAxisObjectRadians = function() {
          let rotation = quat_exports.create();
          return function(angle2, axis) {
            quat_exports.setAxisAngle(rotation, axis, angle2);
            this.pp_rotateObjectQuat(rotation);
          };
        }();
        WL.Object.prototype.pp_rotateAround = function(rotation, origin) {
          this.pp_rotateAroundWorld(rotation, origin);
        };
        WL.Object.prototype.pp_rotateAroundDegrees = function(rotation, origin) {
          this.pp_rotateAroundWorldDegrees(rotation, origin);
        };
        WL.Object.prototype.pp_rotateAroundRadians = function(rotation, origin) {
          this.pp_rotateAroundWorldRadians(rotation, origin);
        };
        WL.Object.prototype.pp_rotateAroundMatrix = function(rotation, origin) {
          this.pp_rotateAroundWorldMatrix(rotation, origin);
        };
        WL.Object.prototype.pp_rotateAroundQuat = function(rotation, origin) {
          this.pp_rotateAroundWorldQuat(rotation, origin);
        };
        WL.Object.prototype.pp_rotateAroundWorld = function(rotation, origin) {
          this.pp_rotateAroundWorldDegrees(rotation, origin);
        };
        WL.Object.prototype.pp_rotateAroundWorldDegrees = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation, origin) {
            this._pp_degreesToQuaternion(rotation, rotationQuat);
            this.pp_rotateAroundWorldQuat(rotationQuat, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundWorldRadians = function() {
          let degreesRotation = vec3_exports.create();
          return function(rotation, origin) {
            rotation.forEach(function(value, index, array) {
              degreesRotation[index] = this._pp_toDegrees(value);
            }.bind(this));
            this.pp_rotateAroundWorldDegrees(degreesRotation, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundWorldMatrix = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation, origin) {
            quat_exports.fromMat3(rotationQuat, rotation);
            quat_exports.normalize(rotationQuat, rotationQuat);
            this.pp_rotateAroundWorldQuat(rotationQuat, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundWorldQuat = function() {
          let axis = vec3_exports.create();
          return function(rotation, origin) {
            let angle2 = quat_exports.getAxisAngle(axis, rotation);
            this.pp_rotateAroundAxisWorldRadians(angle2, axis, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundLocal = function(rotation, origin) {
          this.pp_rotateAroundLocalDegrees(rotation, origin);
        };
        WL.Object.prototype.pp_rotateAroundLocalDegrees = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation, origin) {
            this._pp_degreesToQuaternion(rotation, rotationQuat);
            this.pp_rotateAroundLocalQuat(rotationQuat, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundLocalRadians = function() {
          let degreesRotation = vec3_exports.create();
          return function(rotation, origin) {
            rotation.forEach(function(value, index, array) {
              degreesRotation[index] = this._pp_toDegrees(value);
            }.bind(this));
            this.pp_rotateAroundLocalDegrees(degreesRotation, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundLocalMatrix = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation, origin) {
            quat_exports.fromMat3(rotationQuat, rotation);
            quat_exports.normalize(rotationQuat, rotationQuat);
            this.pp_rotateAroundLocalQuat(rotationQuat, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundLocalQuat = function() {
          let axis = vec3_exports.create();
          return function(rotation, origin) {
            let angle2 = quat_exports.getAxisAngle(axis, rotation);
            this.pp_rotateAroundAxisLocalRadians(angle2, axis, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundObject = function(rotation, origin) {
          this.pp_rotateAroundObjectDegrees(rotation, origin);
        };
        WL.Object.prototype.pp_rotateAroundObjectDegrees = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation, origin) {
            this._pp_degreesToQuaternion(rotation, rotationQuat);
            this.pp_rotateAroundObjectQuat(rotationQuat, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundObjectRadians = function() {
          let degreesRotation = vec3_exports.create();
          return function(rotation, origin) {
            rotation.forEach(function(value, index, array) {
              degreesRotation[index] = this._pp_toDegrees(value);
            }.bind(this));
            this.pp_rotateAroundObjectDegrees(degreesRotation, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundObjectMatrix = function() {
          let rotationQuat = quat_exports.create();
          return function(rotation, origin) {
            quat_exports.fromMat3(rotationQuat, rotation);
            quat_exports.normalize(rotationQuat, rotationQuat);
            this.pp_rotateAroundObjectQuat(rotationQuat, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundObjectQuat = function() {
          let axis = vec3_exports.create();
          return function(rotation, origin) {
            let angle2 = quat_exports.getAxisAngle(axis, rotation);
            this.pp_rotateAroundAxisObjectRadians(angle2, axis, origin);
          };
        }();
        WL.Object.prototype.pp_rotateAroundAxis = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisWorld(angle2, axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisDegrees = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisWorldDegrees(angle2, axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisRadians = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisWorldRadians(angle2, axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisWorld = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisWorldDegrees(angle2, axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisWorldDegrees = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisWorldRadians(common_exports.toRadian(angle2), axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisWorldRadians = function() {
          let transformToRotate = quat2_exports.create();
          let transformToRotateConjugate = quat2_exports.create();
          let transformQuat3 = quat2_exports.create();
          let defaultQuat = quat_exports.create();
          return function(angle2, axis, origin) {
            quat2_exports.fromRotationTranslation(transformToRotate, defaultQuat, origin);
            this.pp_getTransformWorldQuat(transformQuat3);
            quat2_exports.conjugate(transformToRotateConjugate, transformToRotate);
            quat2_exports.mul(transformQuat3, transformToRotateConjugate, transformQuat3);
            quat2_exports.rotateAroundAxis(transformToRotate, transformToRotate, axis, angle2);
            quat2_exports.mul(transformQuat3, transformToRotate, transformQuat3);
            this.pp_setTransformWorldQuat(transformQuat3);
          };
        }();
        WL.Object.prototype.pp_rotateAroundAxisLocal = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisLocalDegrees(angle2, axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisLocalDegrees = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisLocalRadians(common_exports.toRadian(angle2), axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisLocalRadians = function() {
          let convertedPosition = vec3_exports.create();
          let convertedAxis = vec3_exports.create();
          return function(angle2, axis, origin) {
            this.pp_convertPositionLocalToWorld(origin, convertedPosition);
            this.pp_convertDirectionLocalToWorld(axis, convertedAxis);
            this.pp_rotateAroundAxisWorldRadians(angle2, convertedAxis, convertedPosition);
          };
        }();
        WL.Object.prototype.pp_rotateAroundAxisObject = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisObjectDegrees(angle2, axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisObjectDegrees = function(angle2, axis, origin) {
          this.pp_rotateAroundAxisObjectRadians(common_exports.toRadian(angle2), axis, origin);
        };
        WL.Object.prototype.pp_rotateAroundAxisObjectRadians = function() {
          let convertedPosition = vec3_exports.create();
          let convertedAxis = vec3_exports.create();
          return function(angle2, axis, origin) {
            this.pp_convertPositionObjectToWorld(origin, convertedPosition);
            this.pp_convertDirectionObjectToWorld(axis, convertedAxis);
            this.pp_rotateAroundAxisWorldRadians(angle2, convertedAxis, convertedPosition);
          };
        }();
        WL.Object.prototype.pp_scaleObject = function() {
          let vector = vec3_exports.create();
          return function(scale7) {
            if (isNaN(scale7)) {
              this.scale(scale7);
            } else {
              vec3_exports.set(vector, scale7, scale7, scale7);
              this.scale(vector);
            }
          };
        }();
        WL.Object.prototype.pp_lookAt = function(position, up) {
          this.pp_lookAtWorld(position, up);
        };
        WL.Object.prototype.pp_lookAtWorld = function() {
          let direction = vec3_exports.create();
          return function(position, up) {
            this.pp_getPositionWorld(direction);
            vec3_exports.sub(direction, position, direction);
            this.pp_lookToWorld(direction, up);
          };
        }();
        WL.Object.prototype.pp_lookAtLocal = function() {
          let direction = vec3_exports.create();
          return function(position, up) {
            this.pp_getPositionLocal(direction);
            vec3_exports.sub(direction, position, direction);
            this.pp_lookToLocal(direction, up);
          };
        }();
        WL.Object.prototype.pp_lookTo = function(direction, up) {
          this.pp_lookToWorld(direction, up);
        };
        WL.Object.prototype.pp_lookToWorld = function() {
          let internalUp = vec3_exports.create();
          let currentPosition = vec3_exports.create();
          let targetPosition = vec3_exports.create();
          let targetToMatrix = mat4_exports.create();
          let rotation = quat_exports.create();
          return function(direction, up = this.pp_getUpWorld(internalUp)) {
            vec3_exports.copy(internalUp, up);
            let angle2 = vec3_exports.angle(direction, internalUp);
            if (angle2 < this._pp_epsilon || angle2 > Math.PI - this._pp_epsilon) {
              this.pp_getUpWorld(internalUp);
              angle2 = vec3_exports.angle(direction, internalUp);
              if (angle2 < this._pp_epsilon || angle2 > Math.PI - this._pp_epsilon) {
                this.pp_getForwardWorld(internalUp);
                if (angle2 < this._pp_epsilon) {
                  vec3_exports.negate(internalUp, internalUp);
                }
              }
            }
            this.pp_getPositionWorld(currentPosition);
            vec3_exports.add(targetPosition, currentPosition, direction);
            mat4_exports.targetTo(targetToMatrix, targetPosition, currentPosition, internalUp);
            mat4_exports.getRotation(rotation, targetToMatrix);
            quat_exports.normalize(rotation, rotation);
            this.pp_setRotationWorldQuat(rotation);
          };
        }();
        WL.Object.prototype.pp_lookToLocal = function() {
          let internalUp = vec3_exports.create();
          let currentPosition = vec3_exports.create();
          let targetPosition = vec3_exports.create();
          let targetToMatrix = mat4_exports.create();
          let rotation = quat_exports.create();
          return function(direction, up = this.pp_getUpLocal(internalUp)) {
            vec3_exports.copy(internalUp, up);
            let angle2 = vec3_exports.angle(direction, internalUp);
            if (angle2 < this._pp_epsilon || angle2 > Math.PI - this._pp_epsilon) {
              this.pp_getUpLocal(internalUp);
              angle2 = vec3_exports.angle(direction, internalUp);
              if (angle2 < this._pp_epsilon || angle2 > Math.PI - this._pp_epsilon) {
                this.pp_getForwardLocal(internalUp);
                if (angle2 < this._pp_epsilon) {
                  vec3_exports.negate(internalUp, internalUp);
                }
              }
            }
            this.pp_getPositionLocal(currentPosition);
            vec3_exports.add(targetPosition, currentPosition, direction);
            mat4_exports.targetTo(targetToMatrix, targetPosition, currentPosition, internalUp);
            mat4_exports.getRotation(rotation, targetToMatrix);
            quat_exports.normalize(rotation, rotation);
            this.pp_setRotationLocalQuat(rotation);
          };
        }();
        WL.Object.prototype.pp_setParent = function() {
          let position = vec3_exports.create();
          let rotation = quat_exports.create();
          let scale7 = vec3_exports.create();
          return function(newParent, keepTransform = true) {
            if (!keepTransform) {
              this.parent = newParent;
            } else {
              this.pp_getPositionWorld(position);
              this.pp_getRotationWorldQuat(rotation);
              this.pp_getScaleWorld(scale7);
              this.parent = newParent;
              this.pp_setScaleWorld(scale7);
              this.pp_setRotationWorldQuat(rotation);
              this.pp_setPositionWorld(position);
            }
          };
        }();
        WL.Object.prototype.pp_getParent = function() {
          return this.parent;
        };
        WL.Object.prototype.pp_convertPositionObjectToWorld = function() {
          let matrix = mat4_exports.create();
          return function(position, resultPosition = vec3_exports.create()) {
            this.pp_getTransformWorldMatrix(matrix);
            vec3_exports.transformMat4(resultPosition, position, matrix);
            return resultPosition;
          };
        }();
        WL.Object.prototype.pp_convertDirectionObjectToWorld = function() {
          let rotation = quat_exports.create();
          return function(direction, resultDirection = vec3_exports.create()) {
            this.pp_getRotationWorldQuat(rotation);
            vec3_exports.transformQuat(resultDirection, direction, rotation);
            return resultDirection;
          };
        }();
        WL.Object.prototype.pp_convertPositionWorldToObject = function() {
          let matrix = mat4_exports.create();
          return function(position, resultPosition = vec3_exports.create()) {
            this.pp_getTransformWorldMatrix(matrix);
            mat4_exports.invert(matrix, matrix);
            vec3_exports.transformMat4(resultPosition, position, matrix);
            return resultPosition;
          };
        }();
        WL.Object.prototype.pp_convertDirectionWorldToObject = function() {
          let rotation = quat_exports.create();
          return function(direction, resultDirection = vec3_exports.create()) {
            this.pp_getRotationWorldQuat(rotation);
            quat_exports.conjugate(rotation, rotation);
            vec3_exports.transformQuat(resultDirection, direction, rotation);
            return resultDirection;
          };
        }();
        WL.Object.prototype.pp_convertPositionLocalToWorld = function(position, resultPosition = vec3_exports.create()) {
          if (this.pp_getParent()) {
            this.pp_getParent().pp_convertPositionObjectToWorld(position, resultPosition);
          } else {
            vec3_exports.copy(resultPosition, position);
          }
          return resultPosition;
        };
        WL.Object.prototype.pp_convertDirectionLocalToWorld = function(direction, resultDirection = vec3_exports.create()) {
          if (this.pp_getParent()) {
            this.pp_getParent().pp_convertDirectionObjectToWorld(direction, resultDirection);
          } else {
            vec3_exports.copy(resultDirection, direction);
          }
          return resultDirection;
        };
        WL.Object.prototype.pp_convertPositionWorldToLocal = function(position, resultPosition = vec3_exports.create()) {
          if (this.pp_getParent()) {
            this.pp_getParent().pp_convertPositionWorldToObject(position, resultPosition);
          } else {
            vec3_exports.copy(resultPosition, position);
          }
          return resultPosition;
        };
        WL.Object.prototype.pp_convertDirectionWorldToLocal = function(direction, resultDirection = vec3_exports.create()) {
          if (this.pp_getParent()) {
            this.pp_getParent().pp_convertDirectionWorldToObject(direction, resultDirection);
          } else {
            vec3_exports.copy(resultDirection, direction);
          }
          return resultDirection;
        };
        WL.Object.prototype.pp_convertPositionObjectToLocal = function(position, resultPosition = vec3_exports.create()) {
          this.pp_convertPositionObjectToWorld(position, resultPosition);
          this.pp_convertPositionWorldToLocal(resultPosition, resultPosition);
          return resultPosition;
        };
        WL.Object.prototype.pp_convertDirectionObjectToLocal = function(direction, resultDirection = vec3_exports.create()) {
          this.pp_convertDirectionObjectToWorld(direction, resultDirection);
          this.pp_convertDirectionWorldToLocal(resultDirection, resultDirection);
          return resultDirection;
        };
        WL.Object.prototype.pp_convertPositionLocalToObject = function(position, resultPosition = vec3_exports.create()) {
          this.pp_convertPositionLocalToWorld(position, resultPosition);
          this.pp_convertPositionWorldToObject(resultPosition, resultPosition);
          return resultPosition;
        };
        WL.Object.prototype.pp_convertDirectionLocalToObject = function(direction, resultDirection = vec3_exports.create()) {
          this.pp_convertDirectionLocalToWorld(direction, resultDirection);
          this.pp_convertDirectionWorldToObject(resultDirection, resultDirection);
          return resultDirection;
        };
        WL.Object.prototype.pp_convertTransformObjectToWorld = function(transform, resultTransform) {
          return this.pp_convertTransformObjectToWorldMatrix(transform, resultTransform);
        };
        WL.Object.prototype.pp_convertTransformObjectToWorldMatrix = function() {
          let convertTransform = mat4_exports.create();
          let position = vec3_exports.create();
          let scale7 = vec3_exports.create();
          let inverseScale = vec3_exports.create();
          let one = vec3_exports.create();
          vec3_exports.set(one, 1, 1, 1);
          return function(transform, resultTransform = mat4_exports.create()) {
            this.pp_getTransformWorldMatrix(convertTransform);
            if (this.pp_hasUniformScaleWorld()) {
              mat4_exports.mul(resultTransform, convertTransform, transform);
            } else {
              vec3_exports.set(position, transform[12], transform[13], transform[14]);
              this.pp_convertPositionObjectToWorld(position, position);
              mat4_exports.getScaling(scale7, convertTransform);
              vec3_exports.divide(inverseScale, one, scale7);
              mat4_exports.scale(convertTransform, convertTransform, inverseScale);
              mat4_exports.mul(resultTransform, convertTransform, transform);
              mat4_exports.scale(resultTransform, resultTransform, scale7);
              resultTransform[12] = position[0];
              resultTransform[13] = position[1];
              resultTransform[14] = position[2];
              resultTransform[15] = 1;
            }
            return resultTransform;
          };
        }();
        WL.Object.prototype.pp_convertTransformObjectToWorldQuat = function() {
          let position = vec3_exports.create();
          let rotation = quat_exports.create();
          return function(transform, resultTransform = quat2_exports.create()) {
            this.pp_getRotationWorldQuat(rotation);
            quat_exports.mul(rotation, rotation, transform);
            quat2_exports.getTranslation(position, transform);
            this.pp_convertPositionObjectToWorld(position, position);
            quat2_exports.fromRotationTranslation(resultTransform, rotation, position);
            return resultTransform;
          };
        }();
        WL.Object.prototype.pp_convertTransformWorldToObject = function(transform, resultTransform) {
          return this.pp_convertTransformWorldToObjectMatrix(transform, resultTransform);
        };
        WL.Object.prototype.pp_convertTransformWorldToObjectMatrix = function() {
          let convertTransform = mat4_exports.create();
          let position = vec3_exports.create();
          let scale7 = vec3_exports.create();
          let inverseScale = vec3_exports.create();
          let one = vec3_exports.create();
          vec3_exports.set(one, 1, 1, 1);
          return function(transform, resultTransform = mat4_exports.create()) {
            this.pp_getTransformWorldMatrix(convertTransform);
            if (this.pp_hasUniformScaleWorld()) {
              mat4_exports.invert(convertTransform, convertTransform);
              mat4_exports.mul(resultTransform, convertTransform, transform);
            } else {
              vec3_exports.set(position, transform[12], transform[13], transform[14]);
              this.pp_convertPositionWorldToObject(position, position);
              mat4_exports.getScaling(scale7, convertTransform);
              vec3_exports.divide(inverseScale, one, scale7);
              mat4_exports.scale(convertTransform, convertTransform, inverseScale);
              mat4_exports.invert(convertTransform, convertTransform);
              mat4_exports.mul(resultTransform, convertTransform, transform);
              mat4_exports.scale(resultTransform, resultTransform, inverseScale);
              resultTransform[12] = position[0];
              resultTransform[13] = position[1];
              resultTransform[14] = position[2];
              resultTransform[15] = 1;
            }
            return resultTransform;
          };
        }();
        WL.Object.prototype.pp_convertTransformWorldToObjectQuat = function() {
          let position = vec3_exports.create();
          let rotation = quat_exports.create();
          return function(transform, resultTransform = quat2_exports.create()) {
            this.pp_getRotationWorldQuat(rotation);
            quat_exports.conjugate(rotation, rotation);
            quat_exports.mul(rotation, rotation, transform);
            quat2_exports.getTranslation(position, transform);
            this.pp_convertPositionWorldToObject(position, position);
            quat2_exports.fromRotationTranslation(resultTransform, rotation, position);
            return resultTransform;
          };
        }();
        WL.Object.prototype.pp_convertTransformLocalToWorld = function(transform, resultTransform) {
          return this.pp_convertTransformLocalToWorldMatrix(transform, resultTransform);
        };
        WL.Object.prototype.pp_convertTransformLocalToWorldMatrix = function(transform, resultTransform = mat4_exports.create()) {
          if (this.pp_getParent()) {
            this.pp_getParent().pp_convertTransformObjectToWorldMatrix(transform, resultTransform);
          } else {
            mat4_exports.copy(resultTransform, transform);
          }
          return resultTransform;
        };
        WL.Object.prototype.pp_convertTransformLocalToWorldQuat = function(transform, resultTransform = quat2_exports.create()) {
          if (this.pp_getParent()) {
            this.pp_getParent().pp_convertTransformObjectToWorldQuat(transform, resultTransform);
          } else {
            quat2_exports.copy(resultTransform, transform);
          }
          return resultTransform;
        };
        WL.Object.prototype.pp_convertTransformWorldToLocal = function(transform, resultTransform) {
          return this.pp_convertTransformWorldToLocalMatrix(transform, resultTransform);
        };
        WL.Object.prototype.pp_convertTransformWorldToLocalMatrix = function(transform, resultTransform = mat4_exports.create()) {
          if (this.pp_getParent()) {
            this.pp_getParent().pp_convertTransformWorldToObjectMatrix(transform, resultTransform);
          } else {
            mat4_exports.copy(resultTransform, transform);
          }
          return resultTransform;
        };
        WL.Object.prototype.pp_convertTransformWorldToLocalQuat = function(transform, resultTransform = quat2_exports.create()) {
          if (this.pp_getParent()) {
            this.pp_getParent().pp_convertTransformWorldToObjectQuat(transform, resultTransform);
          } else {
            quat2_exports.copy(resultTransform, transform);
          }
          return resultTransform;
        };
        WL.Object.prototype.pp_convertTransformObjectToLocal = function(transform, resultTransform) {
          return this.pp_convertTransformObjectToLocalMatrix(transform, resultTransform);
        };
        WL.Object.prototype.pp_convertTransformObjectToLocalMatrix = function(transform, resultTransform = mat4_exports.create()) {
          this.pp_convertTransformObjectToWorldMatrix(transform, resultTransform);
          this.pp_convertTransformWorldToLocalMatrix(resultTransform, resultTransform);
          return resultTransform;
        };
        WL.Object.prototype.pp_convertTransformObjectToLocalQuat = function(transform, resultTransform = quat2_exports.create()) {
          this.pp_convertTransformObjectToWorldQuat(transform, resultTransform);
          this.pp_convertTransformWorldToLocalQuat(resultTransform, resultTransform);
          return resultTransform;
        };
        WL.Object.prototype.pp_convertTransformLocalToObject = function(transform, resultTransform) {
          return this.pp_convertTransformLocalToObjectMatrix(transform, resultTransform);
        };
        WL.Object.prototype.pp_convertTransformLocalToObjectMatrix = function(transform, resultTransform = mat4_exports.create()) {
          this.pp_convertTransformLocalToWorldMatrix(transform, resultTransform);
          this.pp_convertTransformWorldToObjectMatrix(resultTransform, resultTransform);
          return resultTransform;
        };
        WL.Object.prototype.pp_convertTransformLocalToObjectQuat = function(transform, resultTransform = quat2_exports.create()) {
          this.pp_convertTransformLocalToWorldQuat(transform, resultTransform);
          this.pp_convertTransformWorldToObjectQuat(resultTransform, resultTransform);
          return resultTransform;
        };
        WL.Object.prototype.pp_addComponent = function(type2, paramsOrActive, active = null) {
          let params = null;
          if (typeof paramsOrActive == "boolean") {
            params = {};
            params["active"] = paramsOrActive;
          } else {
            params = paramsOrActive;
            if (active != null) {
              if (params == null) {
                params = {};
              }
              params["active"] = active;
            }
          }
          return this.addComponent(type2, params);
        };
        WL.Object.prototype.pp_getComponent = function(type2, index) {
          return this.getComponent(type2, index);
        };
        WL.Object.prototype.pp_getComponents = function(type2) {
          return this.getComponents(type2);
        };
        WL.Object.prototype.pp_getComponentHierarchy = function(type2, index) {
          let component = this.getComponent(type2, index);
          if (!component) {
            component = this.pp_getComponentDescendants(type2, index);
          }
          return component;
        };
        WL.Object.prototype.pp_getComponentDescendants = function(type2, index) {
          let component = null;
          let descendants = this.children;
          while (!component && descendants.length > 0) {
            let descendant = descendants.shift();
            component = descendant.getComponent(type2, index);
            if (!component) {
              for (let object of descendant.children) {
                descendants.push(object);
              }
            }
          }
          return component;
        };
        WL.Object.prototype.pp_getComponentChildren = function(type2, index) {
          let component = null;
          let children = this.children;
          for (let child of children) {
            component = child.getComponent(type2, index);
            if (component) {
              break;
            }
          }
          return component;
        };
        WL.Object.prototype.pp_getComponentsHierarchy = function(type2) {
          let components = this.getComponents(type2);
          let descendantsComponents = this.pp_getComponentsDescendants(type2);
          for (let component of descendantsComponents) {
            components.push(component);
          }
          return components;
        };
        WL.Object.prototype.pp_getComponentsDescendants = function(type2) {
          let components = [];
          let descendants = this.children;
          while (descendants.length > 0) {
            let descendant = descendants.shift();
            let descendantComponents = descendant.getComponents(type2);
            for (let component of descendantComponents) {
              components.push(component);
            }
            for (let object of descendant.children) {
              descendants.push(object);
            }
          }
          return components;
        };
        WL.Object.prototype.pp_getComponentsChildren = function(type2) {
          let components = [];
          let children = this.children;
          for (let child of children) {
            let childComponents = child.getComponents(type2);
            for (let component of childComponents) {
              components.push(component);
            }
          }
          return components;
        };
        WL.Object.prototype.pp_setActive = function(active, applyToHierarchy = true) {
          if (applyToHierarchy) {
            this.pp_setActiveHierarchy(active);
          } else {
            this.active = active;
          }
        };
        WL.Object.prototype.pp_setActiveHierarchy = function(active) {
          this.active = active;
          this.pp_setActiveDescendants(active);
        };
        WL.Object.prototype.pp_setActiveDescendants = function(active) {
          let descendants = this.children;
          while (descendants.length > 0) {
            let descendant = descendants.shift();
            descendant.active = active;
            for (let object of descendant.children) {
              descendants.push(object);
            }
          }
        };
        WL.Object.prototype.pp_setActiveChildren = function(active) {
          let children = this.children;
          for (let child of children) {
            child.active = active;
          }
        };
        WL.Object.prototype.pp_hasUniformScale = function() {
          return this.pp_hasUniformScaleWorld();
        };
        WL.Object.prototype.pp_hasUniformScaleWorld = function() {
          let scale7 = vec3_exports.create();
          return function() {
            this.pp_getScaleWorld(scale7);
            return Math.abs(scale7[0] - scale7[1]) < this._pp_epsilon && Math.abs(scale7[1] - scale7[2]) < this._pp_epsilon && Math.abs(scale7[0] - scale7[2]) < this._pp_epsilon;
          };
        }();
        WL.Object.prototype.pp_hasUniformScaleLocal = function() {
          let scale7 = vec3_exports.create();
          return function() {
            this.pp_getScaleLocal(scale7);
            return Math.abs(scale7[0] - scale7[1]) < this._pp_epsilon && Math.abs(scale7[1] - scale7[2]) < this._pp_epsilon && Math.abs(scale7[0] - scale7[2]) < this._pp_epsilon;
          };
        }();
        PP.CloneParams = class CloneParams {
          constructor() {
            this.myIgnoreNonCloneable = false;
            this.myIgnoreComponents = false;
            this.myIgnoreChildren = false;
            this.myComponentsToIgnore = [];
            this.myComponentsToInclude = [];
            this.myIgnoreComponentCallback = null;
            this.myChildrenToIgnore = [];
            this.myChildrenToInclude = [];
            this.myIgnoreChildCallback = null;
            this.myDeepCloneParams = new PP.DeepCloneParams();
            this.myExtraData = /* @__PURE__ */ new Map();
          }
        };
        PP.DeepCloneParams = class DeepCloneParams {
          constructor() {
            this._myDeepCloneObject = false;
            this._myOverrideDeepCloneComponentMap = /* @__PURE__ */ new Map();
            this._myOverrideDeepCloneComponentVariableMap = /* @__PURE__ */ new Map();
          }
          deepCloneObject(deepClone) {
            this._myDeepCloneObject = deepClone;
          }
          deepCloneComponent(componentName, deepClone) {
            this._myOverrideDeepCloneComponentMap.set(componentName, deepClone);
          }
          deepCloneComponentVariable(componentName, variableName, deepClone) {
            let componentMap = null;
            if (!this._myOverrideDeepCloneComponentVariableMap.has(componentName)) {
              this._myOverrideDeepCloneComponentVariableMap.set(componentName, /* @__PURE__ */ new Map());
            }
            componentMap = this._myOverrideDeepCloneComponentVariableMap.get(componentName);
            componentMap.set(variableName, deepClone);
          }
          shouldDeepCloneComponent(componentName) {
            let overrideValue = this._myOverrideDeepCloneComponentMap.get(componentName);
            if (overrideValue != null) {
              return overrideValue;
            }
            return this._myDeepCloneObject;
          }
          shouldDeepCloneComponentVariable(componentName, variableName) {
            let componentMap = this._myOverrideDeepCloneComponentVariableMap.get(componentName);
            if (componentMap != null) {
              let overrideValue = componentMap.get(variableName);
              if (overrideValue != null) {
                return overrideValue;
              }
            }
            return this.shouldDeepCloneComponent(componentName);
          }
        };
        WL.Object.prototype.pp_clone = function() {
          let scale7 = vec3_exports.create();
          let transformQuat3 = quat2_exports.create();
          return function(params = new PP.CloneParams()) {
            let clonedObject = null;
            if (this.pp_isCloneable(params)) {
              let objectsToCloneData = [];
              objectsToCloneData.push([this.parent, this]);
              let objectsToCloneComponentsData = [];
              while (objectsToCloneData.length > 0) {
                let cloneData = objectsToCloneData.shift();
                let parent = cloneData[0];
                let objectToClone = cloneData[1];
                let currentClonedObject = WL.scene.addObject(parent);
                currentClonedObject.name = objectToClone.name;
                currentClonedObject.pp_setScaleLocal(objectToClone.pp_getScaleLocal(scale7));
                currentClonedObject.pp_setTransformLocalQuat(objectToClone.pp_getTransformLocalQuat(transformQuat3));
                if (!params.myIgnoreComponents) {
                  objectsToCloneComponentsData.push([objectToClone, currentClonedObject]);
                }
                if (!params.myIgnoreChildren) {
                  for (let child of objectToClone.children) {
                    let cloneChild = false;
                    if (params.myChildrenToInclude.length > 0) {
                      cloneChild = params.myChildrenToInclude.find((childToInclude) => childToInclude.pp_equals(child)) != null;
                    } else {
                      cloneChild = params.myChildrenToIgnore.find((childToIgnore) => childToIgnore.pp_equals(child)) == null;
                    }
                    if (cloneChild && params.myIgnoreChildCallback != null) {
                      cloneChild = !params.myIgnoreChildCallback(child);
                    }
                    if (cloneChild) {
                      objectsToCloneData.push([currentClonedObject, child]);
                    }
                  }
                }
                if (clonedObject == null) {
                  clonedObject = currentClonedObject;
                }
              }
              let componentsToCloneData = [];
              while (objectsToCloneComponentsData.length > 0) {
                let cloneData = objectsToCloneComponentsData.shift();
                let objectToClone = cloneData[0];
                let currentClonedObject = cloneData[1];
                let components = objectToClone.pp_getComponents();
                for (let component of components) {
                  if (component.pp_clone != null) {
                    let cloneComponent = false;
                    if (params.myComponentsToInclude.length > 0) {
                      cloneComponent = params.myComponentsToInclude.indexOf(component.type) != -1;
                    } else {
                      cloneComponent = params.myComponentsToIgnore.indexOf(component.type) == -1;
                    }
                    if (cloneComponent && params.myIgnoreComponentCallback != null) {
                      cloneComponent = !params.myIgnoreComponentCallback(component);
                    }
                    if (cloneComponent) {
                      let clonedComponent = currentClonedObject.pp_addComponent(component.type);
                      clonedComponent.active = component.active;
                      componentsToCloneData.push([component, clonedComponent]);
                    }
                  }
                }
              }
              while (componentsToCloneData.length > 0) {
                let cloneData = componentsToCloneData.shift();
                let componentToClone = cloneData[0];
                let currentClonedComponent = cloneData[1];
                componentToClone.pp_clone(currentClonedComponent, params.myDeepCloneParams, params.myExtraData);
              }
            }
            return clonedObject;
          };
        }();
        WL.Object.prototype.pp_isCloneable = function(params = new PP.CloneParams()) {
          if (params.myIgnoreNonCloneable || params.myIgnoreComponents) {
            return true;
          }
          let isCloneable = true;
          let objects = [];
          objects.push(this);
          while (isCloneable && objects.length > 0) {
            let object = objects.shift();
            let components = this.pp_getComponents();
            for (let component of components) {
              let cloneComponent = false;
              if (params.myComponentsToInclude.length > 0) {
                cloneComponent = params.myComponentsToInclude.indexOf(component.type) != -1;
              } else {
                cloneComponent = params.myComponentsToIgnore.indexOf(component.type) == -1;
              }
              if (cloneComponent && params.myIgnoreComponentCallback != null) {
                cloneComponent = !params.myIgnoreComponentCallback(component);
              }
              if (cloneComponent && component.pp_clone == null) {
                isCloneable = false;
                break;
              }
            }
            if (isCloneable && !params.myIgnoreChildren) {
              for (let child of object.children) {
                let cloneChild = false;
                if (params.myChildrenToInclude.length > 0) {
                  cloneChild = params.myChildrenToInclude.find((childToInclude) => childToInclude.pp_equals(child)) != null;
                } else {
                  cloneChild = params.myChildrenToIgnore.find((childToInclude) => childToInclude.pp_equals(child)) == null;
                }
                if (cloneChild && params.myIgnoreChildCallback != null) {
                  cloneChild = !params.myIgnoreChildCallback(child);
                }
                if (cloneChild) {
                  objects.push(child);
                }
              }
            }
          }
          return isCloneable;
        };
        WL.Object.prototype.pp_getName = function() {
          return this.name;
        };
        WL.Object.prototype.pp_setName = function(name) {
          this.name = name;
        };
        WL.Object.prototype.pp_getID = function() {
          return this.objectId;
        };
        WL.Object.prototype.pp_getHierarchy = function() {
          let hierarchy = this.pp_getDescendants();
          hierarchy.unshift(this);
          return hierarchy;
        };
        WL.Object.prototype.pp_getDescendants = function() {
          let descendants = [];
          let descendantsQueue = this.children;
          while (descendantsQueue.length > 0) {
            let descendant = descendantsQueue.shift();
            descendants.push(descendant);
            for (let object of descendant.children) {
              descendantsQueue.push(object);
            }
          }
          return descendants;
        };
        WL.Object.prototype.pp_getChildren = function() {
          return this.children;
        };
        WL.Object.prototype.pp_markDirty = function() {
          return this.setDirty();
        };
        WL.Object.prototype.pp_equals = function(otherObject) {
          return this.equals(otherObject);
        };
        WL.Object.prototype.pp_destroy = function() {
          return this.destroy();
        };
        WL.Object.prototype.pp_getComponentAmountMap = function(amountMap = /* @__PURE__ */ new Map()) {
          let objectAmount = amountMap.get("object");
          if (objectAmount == null) {
            objectAmount = 0;
          }
          objectAmount += 1;
          amountMap.set("object", objectAmount);
          let components = this.pp_getComponents();
          for (let component of components) {
            let type2 = component.type;
            let typeAmount = amountMap.get(type2);
            if (typeAmount == null) {
              typeAmount = 0;
            }
            typeAmount += 1;
            amountMap.set(type2, typeAmount);
          }
          return amountMap;
        };
        WL.Object.prototype.pp_getComponentAmountMapHierarchy = function(amountMap = /* @__PURE__ */ new Map()) {
          let hierarchy = this.pp_getHierarchy();
          for (let object of hierarchy) {
            object.pp_getComponentAmountMap(amountMap);
          }
          return amountMap;
        };
        WL.Object.prototype.pp_getComponentAmountMapDescendants = function(amountMap = /* @__PURE__ */ new Map()) {
          let descendants = this.pp_getDescendants();
          for (let object of descendants) {
            object.pp_getComponentAmountMap(amountMap);
          }
          return amountMap;
        };
        WL.Object.prototype.pp_getComponentAmountMapChildren = function(amountMap = /* @__PURE__ */ new Map()) {
          let children = this.children;
          for (let object of children) {
            object.pp_getComponentAmountMap(amountMap);
          }
          return amountMap;
        };
        WL.Object.prototype._pp_epsilon = 1e-6;
        WL.Object.prototype._pp_quaternionToRadians = function() {
          let mat3 = mat3_exports.create();
          return function(quatRotation, radiansRotation = vec3_exports.create()) {
            mat3_exports.fromQuat(mat3, quatRotation);
            radiansRotation[1] = Math.asin(-this._pp_clamp(mat3[2], -1, 1));
            if (Math.abs(mat3[2]) < 0.9999999) {
              radiansRotation[0] = Math.atan2(mat3[5], mat3[8]);
              radiansRotation[2] = Math.atan2(mat3[1], mat3[0]);
            } else {
              radiansRotation[0] = 0;
              radiansRotation[2] = Math.atan2(-mat3[3], mat3[4]);
            }
            return radiansRotation;
          };
        }();
        WL.Object.prototype._pp_degreesToQuaternion = function(degreesRotation, quatRotation = quat_exports.create()) {
          quat_exports.fromEuler(quatRotation, degreesRotation[0], degreesRotation[1], degreesRotation[2]);
          return quatRotation;
        };
        WL.Object.prototype._pp_toDegrees = function(angle2) {
          return angle2 * (180 / Math.PI);
        };
        WL.Object.prototype._pp_clamp = function(value, min3, max3) {
          return Math.min(Math.max(value, min3), max3);
        };
        for (let key in WL.Object.prototype) {
          let prefixes = ["pp_", "_pp_"];
          let found = false;
          for (let prefix of prefixes) {
            if (key.startsWith(prefix)) {
              found = true;
              break;
            }
          }
          if (found) {
            Object.defineProperty(WL.Object.prototype, key, { enumerable: false });
          }
        }
      }
    }
  });

  // js/pp/plugin/extensions/array_extension.js
  var array_extension_exports = {};
  var init_array_extension = __esm({
    "js/pp/plugin/extensions/array_extension.js"() {
      init_esm();
      Array.prototype.pp_has = function(callback) {
        return this.pp_find(callback) != void 0;
      };
      Array.prototype.pp_hasEquals = function(elementToFind) {
        return this.pp_findEqual(elementToFind) != void 0;
      };
      Array.prototype.pp_find = function(callback) {
        let elementFound = void 0;
        let index = this.findIndex(callback);
        if (index >= 0) {
          elementFound = this[index];
        }
        return elementFound;
      };
      Array.prototype.pp_findAll = function(callback) {
        let elementsFound = this.filter(callback);
        return elementsFound;
      };
      Array.prototype.pp_findEqual = function(elementToFind) {
        return this.pp_find((element) => element === elementToFind);
      };
      Array.prototype.pp_findAllEqual = function(elementToFind) {
        return this.pp_findAll((element) => element === elementToFind);
      };
      Array.prototype.pp_removeIndex = function(index) {
        let elementRemoved = void 0;
        if (index >= 0 && index < this.length) {
          let arrayRemoved = this.splice(index, 1);
          if (arrayRemoved.length == 1) {
            elementRemoved = arrayRemoved[0];
          }
        }
        return elementRemoved;
      };
      Array.prototype.pp_remove = function(callback) {
        let elementRemoved = void 0;
        let index = this.findIndex(callback);
        if (index >= 0) {
          elementRemoved = this.pp_removeIndex(index);
        }
        return elementRemoved;
      };
      Array.prototype.pp_removeAll = function(callback) {
        let elementsRemoved = [];
        let currentElement = void 0;
        do {
          currentElement = this.pp_remove(callback);
          if (currentElement !== void 0) {
            elementsRemoved.push(currentElement);
          }
        } while (currentElement !== void 0);
        return elementsRemoved;
      };
      Array.prototype.pp_removeEqual = function(elementToRemove) {
        return this.pp_remove((element) => element === elementToRemove);
      };
      Array.prototype.pp_removeAllEqual = function(elementToRemove) {
        return this.pp_removeAll((element) => element === elementToRemove);
      };
      Array.prototype.pp_pushUnique = function(element, hasElementCallback = null) {
        let length5 = this.length;
        let hasElement = false;
        if (hasElementCallback != null) {
          hasElement = this.pp_has(hasElementCallback);
        } else {
          hasElement = this.pp_hasEquals(element);
        }
        if (!hasElement) {
          length5 = this.push(element);
        }
        return length5;
      };
      Array.prototype.pp_unshiftUnique = function(element, hasElementCallback = null) {
        let length5 = this.length;
        let hasElement = false;
        if (hasElementCallback != null) {
          hasElement = this.pp_has(hasElementCallback);
        } else {
          hasElement = this.pp_hasEquals(element);
        }
        if (!hasElement) {
          length5 = this.unshift(element);
        }
        return length5;
      };
      Array.prototype.pp_copy = function(array) {
        while (this.length > array.length) {
          this.pop();
        }
        for (let i = 0; i < array.length; i++) {
          this[i] = array[i];
        }
        return this;
      };
      Array.prototype.pp_clone = function() {
        return this.slice(0);
      };
      Array.prototype.pp_equals = function(array, elementEqualsCallback = null) {
        let equals8 = true;
        if (array != null && this.length == array.length) {
          for (let i = 0; i < this.length; i++) {
            if (elementEqualsCallback != null && !elementEqualsCallback(this[i], array[i]) || elementEqualsCallback == null && this[i] != array[i]) {
              equals8 = false;
              break;
            }
          }
        } else {
          equals8 = false;
        }
        return equals8;
      };
      Array.prototype.vec_toString = function(decimalPlaces = 4) {
        let message = this._vec_buildConsoleMessage(decimalPlaces);
        return message;
      };
      Array.prototype.vec_log = function(decimalPlaces = 4) {
        let message = this._vec_buildConsoleMessage(decimalPlaces);
        console.log(message);
      };
      Array.prototype.vec_error = function(decimalPlaces = 4) {
        let message = this._vec_buildConsoleMessage(decimalPlaces);
        console.error(message);
      };
      Array.prototype.vec_warn = function(decimalPlaces = 4) {
        let message = this._vec_buildConsoleMessage(decimalPlaces);
        console.warn(message);
      };
      Array.prototype.vec_scale = function(value, out = null) {
        out = this._vec_prepareOut(out);
        for (let i = 0; i < out.length; i++) {
          out[i] = out[i] * value;
        }
        return out;
      };
      Array.prototype.vec_round = function(out = null) {
        out = this._vec_prepareOut(out);
        for (let i = 0; i < out.length; i++) {
          out[i] = Math.round(out[i]);
        }
        return out;
      };
      Array.prototype.vec_floor = function(out = null) {
        out = this._vec_prepareOut(out);
        for (let i = 0; i < out.length; i++) {
          out[i] = Math.floor(out[i]);
        }
        return out;
      };
      Array.prototype.vec_ceil = function(out = null) {
        out = this._vec_prepareOut(out);
        for (let i = 0; i < out.length; i++) {
          out[i] = Math.ceil(out[i]);
        }
        return out;
      };
      Array.prototype.vec_clamp = function(start, end, out = null) {
        out = this._vec_prepareOut(out);
        let fixedStart = start != null ? start : Number.MIN_VALUE;
        let fixedEnd = end != null ? end : Number.MAX_VALUE;
        let min3 = Math.min(fixedStart, fixedEnd);
        let max3 = Math.max(fixedStart, fixedEnd);
        for (let i = 0; i < out.length; i++) {
          out[i] = Math.min(Math.max(out[i], min3), max3);
        }
        return out;
      };
      Array.prototype.vec_equals = function(vector) {
        let equals8 = this.length == vector.length;
        for (let i = 0; i < this.length && equals8; i++) {
          equals8 &= Math.abs(this[i] - vector[i]) < this._pp_epsilon;
        }
        return equals8;
      };
      Array.prototype.vec3_normalize = function(out = vec3_exports.create()) {
        vec3_exports.normalize(out, this);
        return out;
      };
      Array.prototype.vec3_copy = function(vector) {
        vec3_exports.copy(this, vector);
        return this;
      };
      Array.prototype.vec3_clone = function(out = vec3_exports.create()) {
        vec3_exports.copy(out, this);
        return out;
      };
      Array.prototype.vec3_set = function(x, y = null, z = null) {
        if (y == null) {
          vec3_exports.set(this, x, x, x);
        } else {
          vec3_exports.set(this, x, y, z);
        }
        return this;
      };
      Array.prototype.vec3_zero = function() {
        vec3_exports.zero(this);
        return this;
      };
      Array.prototype.vec3_angle = function(vector) {
        return this.vec3_angleDegrees(vector);
      };
      Array.prototype.vec3_angleDegrees = function(vector) {
        return this.vec3_angleRadians(vector) * (180 / Math.PI);
      };
      Array.prototype.vec3_angleRadians = function(vector) {
        return vec3_exports.angle(this, vector);
      };
      Array.prototype.vec3_length = function() {
        return vec3_exports.length(this);
      };
      Array.prototype.vec3_distance = function(vector) {
        return vec3_exports.dist(this, vector);
      };
      Array.prototype.vec3_add = function(vector, out = vec3_exports.create()) {
        vec3_exports.add(out, this, vector);
        return out;
      };
      Array.prototype.vec3_sub = function(vector, out = vec3_exports.create()) {
        vec3_exports.sub(out, this, vector);
        return out;
      };
      Array.prototype.vec3_mul = function(vector, out = vec3_exports.create()) {
        vec3_exports.mul(out, this, vector);
        return out;
      };
      Array.prototype.vec3_div = function(vector, out = vec3_exports.create()) {
        vec3_exports.div(out, this, vector);
        return out;
      };
      Array.prototype.vec3_scale = function(value, out = vec3_exports.create()) {
        vec3_exports.scale(out, this, value);
        return out;
      };
      Array.prototype.vec3_negate = function(out = vec3_exports.create()) {
        vec3_exports.negate(out, this);
        return out;
      };
      Array.prototype.vec3_cross = function(vector, out = vec3_exports.create()) {
        vec3_exports.cross(out, this, vector);
        return out;
      };
      Array.prototype.vec3_transformQuat = function(quat2, out = vec3_exports.create()) {
        vec3_exports.transformQuat(out, this, quat2);
        return out;
      };
      Array.prototype.vec3_angleSigned = function(vector, axis) {
        return this.vec3_angleSignedDegrees(vector, axis);
      };
      Array.prototype.vec3_angleSignedDegrees = function(vector, axis) {
        return this.vec3_angleSignedRadians(vector, axis) * (180 / Math.PI);
      };
      Array.prototype.vec3_angleSignedRadians = function() {
        let crossAxis = vec3_exports.create();
        return function(vector, axis) {
          this.vec3_cross(vector, crossAxis);
          let angle2 = this.vec3_angleRadians(vector);
          if (!crossAxis.vec3_isConcordant(axis)) {
            angle2 = -angle2;
          }
          return angle2;
        };
      }();
      Array.prototype.vec3_toRadians = function(out = vec3_exports.create()) {
        vec3_exports.set(out, common_exports.toRadian(this[0]), common_exports.toRadian(this[1]), common_exports.toRadian(this[2]));
        return out;
      };
      Array.prototype.vec3_toDegrees = function(out = vec3_exports.create()) {
        vec3_exports.set(out, this[0] * (180 / Math.PI), this[1] * (180 / Math.PI), this[2] * (180 / Math.PI));
        return out;
      };
      Array.prototype.vec3_toQuat = function(out) {
        return this.vec3_degreesToQuat(out);
      };
      Array.prototype.vec3_radiansToQuat = function(out = quat_exports.create()) {
        out.quat_fromRadians(this);
        return out;
      };
      Array.prototype.vec3_degreesToQuat = function(out = quat_exports.create()) {
        out.quat_fromDegrees(this);
        return out;
      };
      Array.prototype.vec3_isNormalized = function() {
        return Math.abs(vec3_exports.length(this) - 1) < this._pp_epsilon;
      };
      Array.prototype.vec3_componentAlongAxis = function(axis, out = vec3_exports.create()) {
        let angle2 = vec3_exports.angle(this, axis);
        let length5 = Math.cos(angle2) * vec3_exports.length(this);
        vec3_exports.copy(out, axis);
        vec3_exports.scale(out, out, length5);
        return out;
      };
      Array.prototype.vec3_removeComponentAlongAxis = function() {
        let componentAlong = vec3_exports.create();
        return function(axis, out = vec3_exports.create()) {
          this.vec3_componentAlongAxis(axis, componentAlong);
          vec3_exports.sub(out, this, componentAlong);
          return out;
        };
      }();
      Array.prototype.vec3_isConcordant = function(vector) {
        return vec3_exports.angle(this, vector) <= Math.PI / 2;
      };
      Array.prototype.vec3_rotate = function(rotation, out) {
        return this.vec3_rotateDegrees(rotation, out);
      };
      Array.prototype.vec3_rotateDegrees = function() {
        let zero3 = vec3_exports.create();
        return function(rotation, out) {
          return this.vec3_rotateAroundDegrees(rotation, zero3, out);
        };
      }();
      Array.prototype.vec3_rotateRadians = function() {
        let zero3 = vec3_exports.create();
        return function(rotation, out) {
          return this.vec3_rotateAroundRadians(rotation, zero3, out);
        };
      }();
      Array.prototype.vec3_rotateQuat = function() {
        let zero3 = vec3_exports.create();
        return function(rotation, out) {
          return this.vec3_rotateAroundQuat(rotation, zero3, out);
        };
      }();
      Array.prototype.vec3_rotateAxis = function(angle2, axis, out) {
        return this.vec3_rotateAxisDegrees(angle2, axis, out);
      };
      Array.prototype.vec3_rotateAxisDegrees = function() {
        let zero3 = vec3_exports.create();
        return function(angle2, axis, out) {
          return this.vec3_rotateAroundAxisDegrees(angle2, axis, zero3, out);
        };
      }();
      Array.prototype.vec3_rotateAxisRadians = function() {
        let zero3 = vec3_exports.create();
        return function(angle2, axis, out) {
          return this.vec3_rotateAroundAxisRadians(angle2, axis, zero3, out);
        };
      }();
      Array.prototype.vec3_rotateAround = function(rotation, origin, out) {
        return this.vec3_rotateAroundDegrees(rotation, origin, out);
      };
      Array.prototype.vec3_rotateAroundDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, origin, out = vec3_exports.create()) {
          rotation.vec3_degreesToQuat(quat2);
          return this.vec3_rotateAroundQuat(quat2, origin, out);
        };
      }();
      Array.prototype.vec3_rotateAroundRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, origin, out = vec3_exports.create()) {
          rotation.vec3_radiansToQuat(quat2);
          return this.vec3_rotateAroundQuat(quat2, origin, out);
        };
      }();
      Array.prototype.vec3_rotateAroundQuat = function(rotation, origin, out = vec3_exports.create()) {
        vec3_exports.sub(out, this, origin);
        vec3_exports.transformQuat(out, out, rotation);
        vec3_exports.add(out, out, origin);
        return out;
      };
      Array.prototype.vec3_rotateAroundAxis = function(angle2, axis, origin, out) {
        return this.vec3_rotateAroundAxisDegrees(angle2, axis, origin, out);
      };
      Array.prototype.vec3_rotateAroundAxisDegrees = function(angle2, axis, origin, out) {
        return this.vec3_rotateAroundAxisRadians(common_exports.toRadian(angle2), axis, origin, out);
      };
      Array.prototype.vec3_rotateAroundAxisRadians = function() {
        let quat2 = quat_exports.create();
        return function(angle2, axis, origin, out = vec3_exports.create()) {
          quat_exports.setAxisAngle(quat2, axis, angle2);
          return this.vec3_rotateAroundQuat(quat2, origin, out);
        };
      }();
      Array.prototype.vec3_convertPositionToWorld = function(parentTransform, out) {
        return this.vec3_convertPositionToWorldMatrix(parentTransform, out);
      };
      Array.prototype.vec3_convertPositionToLocal = function(parentTransform, out) {
        return this.vec3_convertPositionToLocalMatrix(parentTransform, out);
      };
      Array.prototype.vec3_convertPositionToWorldMatrix = function(parentTransform, out = vec3_exports.create()) {
        vec3_exports.transformMat4(out, this, parentTransform);
        return out;
      };
      Array.prototype.vec3_convertPositionToLocalMatrix = function() {
        let inverse3 = mat4_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          mat4_exports.invert(inverse3, parentTransform);
          vec3_exports.transformMat4(out, this, inverse3);
          return out;
        };
      }();
      Array.prototype.vec3_convertPositionToWorldQuat = function() {
        let parentTransformMatrix = mat4_exports.create();
        let position = vec3_exports.create();
        let rotation = quat_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.quat2_getPosition(position);
          parentTransform.quat2_getRotationQuat(rotation);
          parentTransformMatrix.mat4_setPositionRotationQuatScale(position, rotation, one);
          return this.vec3_convertPositionToWorldMatrix(parentTransformMatrix, out);
        };
      }();
      Array.prototype.vec3_convertPositionToLocalQuat = function() {
        let parentTransformMatrix = mat4_exports.create();
        let position = vec3_exports.create();
        let rotation = quat_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.quat2_getPosition(position);
          parentTransform.quat2_getRotationQuat(rotation);
          parentTransformMatrix.mat4_setPositionRotationQuatScale(position, rotation, one);
          return this.vec3_convertPositionToLocalMatrix(parentTransformMatrix, out);
        };
      }();
      Array.prototype.vec3_convertDirectionToWorld = function(parentTransform, out) {
        return this.vec3_convertDirectionToWorldMatrix(parentTransform, out);
      };
      Array.prototype.vec3_convertDirectionToLocal = function(parentTransform, out) {
        return this.vec3_convertDirectionToLocalMatrix(parentTransform, out);
      };
      Array.prototype.vec3_convertDirectionToWorldMatrix = function() {
        let rotation = quat_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.mat4_getRotationQuat(rotation);
          vec3_exports.transformQuat(out, this, rotation);
          return out;
        };
      }();
      Array.prototype.vec3_convertDirectionToLocalMatrix = function() {
        let rotation = quat_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.mat4_getRotationQuat(rotation);
          quat_exports.conjugate(rotation, rotation);
          vec3_exports.transformQuat(out, this, rotation);
          return out;
        };
      }();
      Array.prototype.vec3_convertDirectionToWorldQuat = function() {
        let rotation = quat_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.quat2_getRotationQuat(rotation);
          vec3_exports.transformQuat(out, this, rotation);
          return out;
        };
      }();
      Array.prototype.vec3_convertDirectionToLocalQuat = function() {
        let rotation = quat_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.quat2_getRotationQuat(rotation);
          quat_exports.conjugate(rotation, rotation);
          vec3_exports.transformQuat(out, this, rotation);
          return out;
        };
      }();
      Array.prototype.vec3_log = function(decimalPlaces = 4) {
        this.vec_log(decimalPlaces);
      };
      Array.prototype.vec3_error = function(decimalPlaces = 4) {
        this.vec_error(decimalPlaces);
      };
      Array.prototype.vec3_warn = function(decimalPlaces = 4) {
        this.vec_warn(decimalPlaces);
      };
      Array.prototype.vec3_addRotation = function(rotation, out) {
        return this.vec3_degreesAddRotation(rotation, out);
      };
      Array.prototype.vec3_addRotationDegrees = function(rotation, out) {
        return quat.vec3_degreesAddRotationDegrees(rotation, out);
      };
      Array.prototype.vec3_addRotationRadians = function(rotation, out) {
        return quat.vec3_degreesAddRotationRadians(rotation, out);
      };
      Array.prototype.vec3_addRotationQuat = function(rotation, out) {
        return quat.vec3_degreesAddRotationQuat(rotation, out);
      };
      Array.prototype.vec3_degreesAddRotation = function(rotation, out) {
        return this.vec3_degreesAddRotationDegrees(rotation, out);
      };
      Array.prototype.vec3_degreesAddRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_degreesToQuat(quat2);
          return quat2.quat_addRotationDegrees(rotation, quat2).quat_toDegrees(out);
        };
      }();
      Array.prototype.vec3_degreesAddRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_degreesToQuat(quat2);
          return quat2.quat_addRotationRadians(rotation, quat2).quat_toDegrees(out);
        };
      }();
      Array.prototype.vec3_degreesAddRotationQuat = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_degreesToQuat(quat2);
          return quat2.quat_addRotationQuat(rotation, quat2).quat_toDegrees(out);
        };
      }();
      Array.prototype.vec3_radiansAddRotation = function(rotation, out) {
        return this.vec3_radiansAddRotationDegrees(rotation, out);
      };
      Array.prototype.vec3_radiansAddRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_radiansToQuat(quat2);
          return quat2.quat_addRotationDegrees(rotation, quat2).quat_toRadians(out);
        };
      }();
      Array.prototype.vec3_radiansAddRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_radiansToQuat(quat2);
          return quat2.quat_addRotationRadians(rotation, quat2).quat_toRadians(out);
        };
      }();
      Array.prototype.vec3_radiansAddRotationQuat = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_radiansToQuat(quat2);
          return quat2.quat_addRotationQuat(rotation, quat2).quat_toRadians(out);
        };
      }();
      Array.prototype.vec3_toMatrix = function(out = mat3_exports.create()) {
        return this.vec3_degreesToMatrix(out);
      };
      Array.prototype.vec3_degreesToMatrix = function() {
        let quat2 = quat_exports.create();
        return function(out = mat3_exports.create()) {
          this.vec3_degreesToQuat(quat2);
          return quat2.quat_toMatrix(out);
        };
      }();
      Array.prototype.vec3_radiansToMatrix = function() {
        let quat2 = quat_exports.create();
        return function(out = mat3_exports.create()) {
          this.vec3_radiansToQuat(quat2);
          return quat2.quat_toMatrix(out);
        };
      }();
      Array.prototype.vec4_set = function(x, y = null, z = null, w = null) {
        if (y == null) {
          vec4_exports.set(this, x, x, x, x);
        } else {
          vec4_exports.set(this, x, y, z, w);
        }
        return this;
      };
      Array.prototype.vec4_copy = function(vector) {
        vec4_exports.copy(this, vector);
        return this;
      };
      Array.prototype.quat_normalize = function(out = quat_exports.create()) {
        quat_exports.normalize(out, this);
        return out;
      };
      Array.prototype.quat_copy = function(quat2) {
        quat_exports.copy(this, quat2);
        return this;
      };
      Array.prototype.quat_set = function(x, y = null, z = null, w = null) {
        if (y == null) {
          quat_exports.set(this, x, x, x, x);
        } else {
          quat_exports.set(this, x, y, z, w);
        }
        return this;
      };
      Array.prototype.quat_identity = function() {
        quat_exports.identity(this);
        return this;
      };
      Array.prototype.quat_length = function() {
        return quat_exports.length(this);
      };
      Array.prototype.quat_invert = function(out = quat_exports.create()) {
        quat_exports.invert(out, this);
        return out;
      };
      Array.prototype.quat_mul = function(rotation, out = quat_exports.create()) {
        quat_exports.mul(out, this, rotation);
        return out;
      };
      Array.prototype.quat_getAxis = function(out = vec3_exports.create()) {
        quat_exports.getAxisAngle(out, this);
        return out;
      };
      Array.prototype.quat_getAngle = function() {
        let vector = vec3_exports.create();
        return function() {
          let angle2 = quat_exports.getAxisAngle(vector, this);
          return angle2;
        };
      }();
      Array.prototype.quat_fromAxis = function(angle2, axis) {
        return this.quat_fromAxisDegrees(angle2, axis);
      };
      Array.prototype.quat_fromAxisDegrees = function(angle2, axis) {
        quat_exports.setAxisAngle(this, axis, common_exports.toRadian(angle2));
        return this;
      };
      Array.prototype.quat_fromAxisRadians = function(angle2, axis) {
        quat_exports.setAxisAngle(this, axis, angle2);
        return this;
      };
      Array.prototype.quat_fromRadians = function() {
        let vector = vec3_exports.create();
        return function(radiansRotation) {
          radiansRotation.vec3_toDegrees(vector);
          return this.quat_fromDegrees(vector);
        };
      }();
      Array.prototype.quat_fromDegrees = function(degreesRotation) {
        quat_exports.fromEuler(this, degreesRotation[0], degreesRotation[1], degreesRotation[2]);
        return this;
      };
      Array.prototype.quat_toRadians = function() {
        let mat3 = mat3_exports.create();
        return function(out = vec3_exports.create()) {
          mat3_exports.fromQuat(mat3, this);
          out[1] = Math.asin(-this._pp_clamp(mat3[2], -1, 1));
          if (Math.abs(mat3[2]) < 1 - this._pp_epsilon) {
            out[0] = Math.atan2(mat3[5], mat3[8]);
            out[2] = Math.atan2(mat3[1], mat3[0]);
          } else {
            out[0] = 0;
            out[2] = Math.atan2(-mat3[3], mat3[4]);
          }
          return out;
        };
      }();
      Array.prototype.quat_toDegrees = function(out = vec3_exports.create()) {
        this.quat_toRadians(out);
        out.vec3_toDegrees(out);
        return out;
      };
      Array.prototype.quat_isNormalized = function() {
        return Math.abs(quat_exports.length(this) - 1) < this._pp_epsilon;
      };
      Array.prototype.quat_addRotation = function(rotation, out) {
        return this.quat_addRotationDegrees(rotation, out);
      };
      Array.prototype.quat_addRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out) {
          rotation.vec3_degreesToQuat(quat2);
          return this.quat_addRotationQuat(quat2, out);
        };
      }();
      Array.prototype.quat_addRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out) {
          rotation.vec3_radiansToQuat(quat2);
          return this.quat_addRotationQuat(quat2, out);
        };
      }();
      Array.prototype.quat_addRotationQuat = function(rotation, out = quat_exports.create()) {
        rotation.quat_mul(this, out);
        return out;
      };
      Array.prototype.quat_subRotation = function(rotation, out) {
        return this.quat_subRotationDegrees(rotation, out);
      };
      Array.prototype.quat_subRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out) {
          rotation.vec3_degreesToQuat(quat2);
          return this.quat_subRotationQuat(quat2, out);
        };
      }();
      Array.prototype.quat_subRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out) {
          rotation.vec3_radiansToQuat(quat2);
          return this.quat_subRotationQuat(quat2, out);
        };
      }();
      Array.prototype.quat_subRotationQuat = function() {
        let inverse3 = quat_exports.create();
        return function(rotation, out = quat_exports.create()) {
          rotation.quat_invert(inverse3);
          this.quat_mul(inverse3, out);
          return out;
        };
      }();
      Array.prototype.quat_rotationTo = function(rotation, out) {
        return this.quat_rotationToDegrees(rotation, out);
      };
      Array.prototype.quat_rotationToDegrees = function(rotation, out) {
        return rotation.quat_subRotationDegrees(this, out);
      };
      Array.prototype.quat_rotationToRadians = function(rotation, out) {
        return rotation.quat_subRotationRadians(this, out);
      };
      Array.prototype.quat_rotationToQuat = function(rotation, out) {
        return rotation.quat_subRotationQuat(this, out);
      };
      Array.prototype.quat_toMatrix = function(out = mat3_exports.create()) {
        mat3_exports.fromQuat(out, this);
        return out;
      };
      Array.prototype.quat_rotate = function(rotation, out) {
        return this.quat_rotateDegrees(rotation, out);
      };
      Array.prototype.quat_rotateDegrees = function(rotation, out) {
        return this.quat_addRotationDegrees(rotation, out);
      };
      Array.prototype.quat_rotateRadians = function(rotation, out) {
        return this.quat_addRotationRadians(rotation, out);
      };
      Array.prototype.quat_rotateQuat = function(rotation, out) {
        return this.quat_addRotationQuat(rotation, out);
      };
      Array.prototype.quat_rotateAxis = function(angle2, axis, out) {
        return this.quat_rotateAxisDegrees(angle2, axis, out);
      };
      Array.prototype.quat_rotateAxisDegrees = function() {
        let rotationQuat = quat_exports.create();
        return function(angle2, axis, out) {
          rotationQuat.quat_fromAxisDegrees(angle2, axis);
          return this.quat_rotateQuat(rotationQuat, out);
        };
      }();
      Array.prototype.quat_rotateAxisRadians = function() {
        let rotationQuat = quat_exports.create();
        return function(angle2, axis, out) {
          rotationQuat.quat_fromAxisRadians(angle2, axis);
          return this.quat_rotateQuat(rotationQuat, out);
        };
      }();
      Array.prototype.quat2_normalize = function(out = quat2_exports.create()) {
        quat2_exports.normalize(out, this);
        return out;
      };
      Array.prototype.quat2_copy = function(quat2) {
        quat2_exports.copy(this, quat2);
        return this;
      };
      Array.prototype.quat2_identity = function() {
        quat2_exports.identity(this);
        return this;
      };
      Array.prototype.quat2_getPosition = function(out = vec3_exports.create()) {
        quat2_exports.getTranslation(out, this);
        return this;
      };
      Array.prototype.quat2_getRotation = function(out) {
        return this.quat2_getRotationDegrees(out);
      };
      Array.prototype.quat2_getRotationDegrees = function() {
        let rotationQuat = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.quat2_getRotationQuat(rotationQuat).quat_toDegrees(out);
          return out;
        };
      }();
      Array.prototype.quat2_getRotationRadians = function() {
        let rotationQuat = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.quat2_getRotationQuat(rotationQuat).quat_toRadians(out);
          return out;
        };
      }();
      Array.prototype.quat2_getRotationQuat = function(out = quat_exports.create()) {
        quat_exports.copy(out, this);
        return this;
      };
      Array.prototype.quat2_setPositionRotation = function(position, rotation) {
        return this.quat2_setPositionRotationDegrees(position, rotation);
      };
      Array.prototype.quat2_setPositionRotationDegrees = function() {
        let rotationQuat = quat_exports.create();
        return function(position, rotation) {
          rotation.vec3_degreesToQuat(rotationQuat);
          quat2_exports.fromRotationTranslation(this, rotationQuat, position);
          return this;
        };
      }();
      Array.prototype.quat2_setPositionRotationRadians = function() {
        let rotationQuat = quat_exports.create();
        return function(position, rotation) {
          rotation.vec3_radiansToQuat(rotationQuat);
          quat2_exports.fromRotationTranslation(this, rotationQuat, position);
          return this;
        };
      }();
      Array.prototype.quat2_setPositionRotationQuat = function(position, rotation) {
        quat2_exports.fromRotationTranslation(this, rotation, position);
        return this;
      };
      Array.prototype.quat2_getAxes = function() {
        let rotationMatrix = mat3_exports.create();
        return function(out = [vec3_exports.create(), vec3_exports.create(), vec3_exports.create()]) {
          mat3_exports.fromQuat(rotationMatrix, this);
          vec3_exports.set(out[0], rotationMatrix[0], rotationMatrix[1], rotationMatrix[2]);
          vec3_exports.set(out[1], rotationMatrix[3], rotationMatrix[4], rotationMatrix[5]);
          vec3_exports.set(out[2], rotationMatrix[6], rotationMatrix[7], rotationMatrix[8]);
          vec3_exports.normalize(out[0], out[0]);
          vec3_exports.normalize(out[1], out[1]);
          vec3_exports.normalize(out[2], out[2]);
          return out;
        };
      }();
      Array.prototype.quat2_toLocal = function() {
        let invertQuat = quat2_exports.create();
        return function(parentTransform, out = quat2_exports.create()) {
          quat2_exports.conjugate(invertQuat, parentTransform);
          quat2_exports.mul(out, invertQuat, this);
          return out;
        };
      }();
      Array.prototype.quat2_toWorld = function(parentTransform, out = quat2_exports.create()) {
        quat2_exports.mul(out, parentTransform, this);
        return out;
      };
      Array.prototype.quat2_toMatrix = function(out = mat4_exports.create()) {
        mat4_exports.fromQuat2(out, this);
        return out;
      };
      Array.prototype.quat2_fromMatrix = function(transformMatrix) {
        transformMatrix.mat4_toQuat(this);
        return this;
      };
      Array.prototype.mat3_toDegrees = function() {
        let quat2 = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.mat3_toQuat(quat2);
          quat2.quat_toDegrees(out);
          return out;
        };
      }();
      Array.prototype.mat3_toRadians = function() {
        let quat2 = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.mat3_toQuat(quat2);
          quat2.quat_toRadians(out);
          return out;
        };
      }();
      Array.prototype.mat3_toQuat = function(out = quat_exports.create()) {
        quat_exports.fromMat3(out, this);
        return out;
      };
      Array.prototype.mat4_copy = function(mat42) {
        mat4_exports.copy(this, mat42);
        return this;
      };
      Array.prototype.mat4_identity = function() {
        mat4_exports.identity(this);
        return this;
      };
      Array.prototype.mat4_invert = function(out = mat4_exports.create()) {
        mat4_exports.invert(out, this);
        return out;
      };
      Array.prototype.mat4_clone = function(out = mat4_exports.create()) {
        mat4_exports.copy(out, this);
        return out;
      };
      Array.prototype.mat4_getPosition = function(out = vec3_exports.create()) {
        mat4_exports.getTranslation(out, this);
        return out;
      };
      Array.prototype.mat4_getRotation = function(out = vec3_exports.create()) {
        return this.mat4_getRotationDegrees(out);
      };
      Array.prototype.mat4_getRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.mat4_getRotationQuat(quat2);
          quat2.quat_toDegrees(out);
          return out;
        };
      }();
      Array.prototype.mat4_getRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.mat4_getRotationQuat(quat2);
          quat2.quat_toRadians(out);
          return out;
        };
      }();
      Array.prototype.mat4_getRotationQuat = function() {
        let scale7 = vec3_exports.create();
        let transformMatrixNoScale = mat4_exports.create();
        let inverseScale = vec3_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(out = quat_exports.create()) {
          mat4_exports.getScaling(scale7, this);
          vec3_exports.divide(inverseScale, one, scale7);
          mat4_exports.scale(transformMatrixNoScale, this, inverseScale);
          mat4_exports.getRotation(out, transformMatrixNoScale);
          quat_exports.normalize(out, out);
          return out;
        };
      }();
      Array.prototype.mat4_getScale = function(out = vec3_exports.create()) {
        mat4_exports.getScaling(out, this);
        return out;
      };
      Array.prototype.mat4_setPosition = function(position) {
        this[12] = position[0];
        this[13] = position[1];
        this[14] = position[2];
        return this;
      };
      Array.prototype.mat4_setRotation = function(rotation) {
        this.mat4_setRotationDegrees(rotation);
        return this;
      };
      Array.prototype.mat4_setRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation) {
          this.mat4_setRotationQuat(rotation.vec3_degreesToQuat(quat2));
          return this;
        };
      }();
      Array.prototype.mat4_setRotationRadians = function() {
        let vector = vec3_exports.create();
        return function(rotation) {
          this.mat4_setRotationDegrees(rotation.vec3_toDegrees(vector));
          return this;
        };
      }();
      Array.prototype.mat4_setRotationQuat = function() {
        let position = vec3_exports.create();
        let scale7 = vec3_exports.create();
        return function(rotation) {
          this.mat4_getPosition(position);
          this.mat4_getScale(scale7);
          this.mat4_setPositionRotationQuatScale(position, rotation, scale7);
          return this;
        };
      }();
      Array.prototype.mat4_setScale = function() {
        let tempScale = vec3_exports.create();
        return function(scale7) {
          mat4_exports.getScaling(tempScale, this);
          vec3_exports.divide(tempScale, scale7, tempScale);
          mat4_exports.scale(this, this, tempScale);
          return this;
        };
      }();
      Array.prototype.mat4_setPositionRotationScale = function(position, rotation, scale7) {
        this.mat4_setPositionRotationDegreesScale(position, rotation, scale7);
        return this;
      };
      Array.prototype.mat4_setPositionRotationDegreesScale = function() {
        let quat2 = quat_exports.create();
        return function(position, rotation, scale7) {
          this.mat4_setPositionRotationQuatScale(position, rotation.vec3_degreesToQuat(quat2), scale7);
          return this;
        };
      }();
      Array.prototype.mat4_setPositionRotationRadiansScale = function() {
        let vector = vec3_exports.create();
        return function(position, rotation, scale7) {
          this.mat4_setPositionRotationDegreesScale(position, rotation.vec3_toDegrees(vector), scale7);
          return this;
        };
      }();
      Array.prototype.mat4_setPositionRotationQuatScale = function(position, rotation, scale7) {
        mat4_exports.fromRotationTranslationScale(this, rotation, position, scale7);
        return this;
      };
      Array.prototype.mat4_setPositionRotation = function(position, rotation) {
        this.mat4_setPositionRotationDegrees(position, rotation);
        return this;
      };
      Array.prototype.mat4_setPositionRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(position, rotation) {
          this.mat4_setPositionRotationQuat(position, rotation.vec3_degreesToQuat(quat2));
          return this;
        };
      }();
      Array.prototype.mat4_setPositionRotationRadians = function() {
        let vector = vec3_exports.create();
        return function(position, rotation) {
          this.mat4_setPositionRotationDegrees(position, rotation.vec3_toDegrees(vector));
          return this;
        };
      }();
      Array.prototype.mat4_setPositionRotationQuat = function(position, rotation) {
        mat4_exports.fromRotationTranslation(this, rotation, position);
        return this;
      };
      Array.prototype.mat4_getAxes = function(out = [vec3_exports.create(), vec3_exports.create(), vec3_exports.create()]) {
        vec3_exports.set(out[0], this[0], this[1], this[2]);
        vec3_exports.set(out[1], this[4], this[5], this[6]);
        vec3_exports.set(out[2], this[8], this[9], this[10]);
        vec3_exports.normalize(out[0], out[0]);
        vec3_exports.normalize(out[1], out[1]);
        vec3_exports.normalize(out[2], out[2]);
        return out;
      };
      Array.prototype.mat4_toWorld = function() {
        let convertTransform = mat4_exports.create();
        let position = vec3_exports.create();
        let scale7 = vec3_exports.create();
        let inverseScale = vec3_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(parentTransform, out = mat4_exports.create()) {
          if (parentTransform.mat4_hasUniformScale()) {
            mat4_exports.mul(out, parentTransform, this);
          } else {
            vec3_exports.set(position, this[12], this[13], this[14]);
            position.vec3_convertPositionToWorldMatrix(parentTransform, position);
            mat4_exports.getScaling(scale7, parentTransform);
            vec3_exports.divide(inverseScale, one, scale7);
            mat4_exports.scale(convertTransform, parentTransform, inverseScale);
            mat4_exports.mul(out, convertTransform, this);
            mat4_exports.scale(out, out, scale7);
            out[12] = position[0];
            out[13] = position[1];
            out[14] = position[2];
            out[15] = 1;
          }
          return out;
        };
      }();
      Array.prototype.mat4_toLocal = function() {
        let convertTransform = mat4_exports.create();
        let position = vec3_exports.create();
        let scale7 = vec3_exports.create();
        let inverseScale = vec3_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(parentTransform, out = mat4_exports.create()) {
          if (parentTransform.mat4_hasUniformScale()) {
            mat4_exports.invert(convertTransform, parentTransform);
            mat4_exports.mul(out, convertTransform, this);
          } else {
            vec3_exports.set(position, this[12], this[13], this[14]);
            position.vec3_convertPositionToLocalMatrix(parentTransform, position);
            mat4_exports.getScaling(scale7, parentTransform);
            vec3_exports.divide(inverseScale, one, scale7);
            mat4_exports.scale(convertTransform, parentTransform, inverseScale);
            mat4_exports.invert(convertTransform, convertTransform);
            mat4_exports.mul(out, convertTransform, this);
            mat4_exports.scale(out, out, inverseScale);
            out[12] = position[0];
            out[13] = position[1];
            out[14] = position[2];
            out[15] = 1;
          }
          return out;
        };
      }();
      Array.prototype.mat4_hasUniformScale = function() {
        let scale7 = vec3_exports.create();
        return function() {
          mat4_exports.getScaling(scale7, this);
          return Math.abs(scale7[0] - scale7[1]) < this._pp_epsilon && Math.abs(scale7[1] - scale7[2]) < this._pp_epsilon && Math.abs(scale7[0] - scale7[2]) < this._pp_epsilon;
        };
      }();
      Array.prototype.mat4_toQuat = function() {
        let position = vec3_exports.create();
        let rotation = quat_exports.create();
        return function(out = quat2_exports.create()) {
          mat4_exports.getTranslation(position, this);
          this.mat4_getRotationQuat(rotation);
          quat2_exports.fromRotationTranslation(out, rotation, position);
          return out;
        };
      }();
      Array.prototype.mat4_fromQuat = function(transformQuat3) {
        transformQuat3.quat2_toMatrix(this);
        return this;
      };
      PP.vec3_create = function(x = null, y = null, z = null) {
        let out = vec3_exports.create();
        if (x != null) {
          out.vec3_set(x, y, z);
        }
        return out;
      };
      PP.vec4_create = function(x = null, y = null, z = null, w = null) {
        let out = vec4_exports.create();
        if (x != null) {
          out.vec4_set(x, y, z, w);
        }
        return out;
      };
      PP.quat_create = function(x = null, y = null, z = null, w = null) {
        let out = quat_exports.create();
        if (x != null) {
          out.quat_set(x, y, z, w);
        }
        return out;
      };
      PP.quat2_create = function() {
        let out = quat2_exports.create();
        return out;
      };
      PP.quat2_fromPositionRotation = function(position, rotation) {
        return quat2_fromPositionRotationDegrees(position, rotation);
      };
      PP.quat2_fromPositionRotationDegrees = function(position, rotation) {
        let out = mat4_exports.create();
        out.quat2_setPositionRotationDegrees(position, rotation);
        return out;
      };
      PP.quat2_fromPositionRotationRadians = function(position, rotation) {
        let out = mat4_exports.create();
        out.quat2_setPositionRotationRadians(position, rotation);
        return out;
      };
      PP.quat2_fromPositionRotationQuat = function(position, rotation) {
        let out = quat2_exports.create();
        out.quat2_setPositionRotationQuat(position, rotation);
        return out;
      };
      PP.mat4_create = function() {
        let out = mat4_exports.create();
        return out;
      };
      PP.mat4_fromPositionRotation = function(position, rotation) {
        return mat4_fromPositionRotationDegrees(position, rotation);
      };
      PP.mat4_fromPositionRotationDegrees = function(position, rotation) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationDegrees(position, rotation);
        return out;
      };
      PP.mat4_fromPositionRotationRadians = function(position, rotation) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationRadians(position, rotation);
        return out;
      };
      PP.mat4_fromPositionRotationQuat = function(position, rotation) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationQuat(position, rotation);
        return out;
      };
      PP.mat4_fromPositionRotationScale = function(position, rotation, scale7) {
        return mat4_fromPositionRotationDegreesScale(position, rotation, scale7);
      };
      PP.mat4_fromPositionRotationDegreesScale = function(position, rotation, scale7) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationDegreesScale(position, rotation, scale7);
        return out;
      };
      PP.mat4_fromPositionRotationRadiansScale = function(position, rotation, scale7) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationRadiansScale(position, rotation, scale7);
        return out;
      };
      PP.mat4_fromPositionRotationQuatScale = function(position, rotation, scale7) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationQuatScale(position, rotation, scale7);
        return out;
      };
      Array.prototype._pp_epsilon = 1e-6;
      Array.prototype._pp_clamp = function(value, min3, max3) {
        return Math.min(Math.max(value, min3), max3);
      };
      Array.prototype._vec_buildConsoleMessage = function(decimalPlaces) {
        let message = "[";
        for (let i = 0; i < this.length; i++) {
          if (i != 0) {
            message = message.concat(", ");
          }
          message = message.concat(this[i].toFixed(decimalPlaces));
        }
        message = message.concat("]");
        return message;
      };
      Array.prototype._vec_prepareOut = function(out) {
        if (out == null) {
          out = this.pp_clone();
        } else if (out != this) {
          out.pp_copy(this);
        }
        return out;
      };
      for (let key in Array.prototype) {
        let prefixes = ["pp_", "vec_", "vec3_", "vec4_", "quat_", "quat2_", "mat3_", "mat4_", "_pp_", "_vec_"];
        let found = false;
        for (let prefix of prefixes) {
          if (key.startsWith(prefix)) {
            found = true;
            break;
          }
        }
        if (found) {
          Object.defineProperty(Array.prototype, key, { enumerable: false });
        }
      }
    }
  });

  // js/pp/plugin/extensions/float32array_extension.js
  var float32array_extension_exports = {};
  var init_float32array_extension = __esm({
    "js/pp/plugin/extensions/float32array_extension.js"() {
      init_esm();
      Float32Array.prototype.pp_has = function(callback) {
        return this.pp_find(callback) != void 0;
      };
      Float32Array.prototype.pp_hasEquals = function(elementToFind) {
        return this.pp_findEqual(elementToFind) != void 0;
      };
      Float32Array.prototype.pp_find = function(callback) {
        let elementFound = void 0;
        let index = this.findIndex(callback);
        if (index >= 0) {
          elementFound = this[index];
        }
        return elementFound;
      };
      Float32Array.prototype.pp_findAll = function(callback) {
        let elementsFound = this.filter(callback);
        return elementsFound;
      };
      Float32Array.prototype.pp_findEqual = function(elementToFind) {
        return this.pp_find((element) => element === elementToFind);
      };
      Float32Array.prototype.pp_findAllEqual = function(elementToFind) {
        return this.pp_findAll((element) => element === elementToFind);
      };
      Float32Array.prototype.pp_removeIndex = function(index) {
        let elementRemoved = void 0;
        if (index >= 0 && index < this.length) {
          let arrayRemoved = this.splice(index, 1);
          if (arrayRemoved.length == 1) {
            elementRemoved = arrayRemoved[0];
          }
        }
        return elementRemoved;
      };
      Float32Array.prototype.pp_remove = function(callback) {
        let elementRemoved = void 0;
        let index = this.findIndex(callback);
        if (index >= 0) {
          elementRemoved = this.pp_removeIndex(index);
        }
        return elementRemoved;
      };
      Float32Array.prototype.pp_removeAll = function(callback) {
        let elementsRemoved = [];
        let currentElement = void 0;
        do {
          currentElement = this.pp_remove(callback);
          if (currentElement !== void 0) {
            elementsRemoved.push(currentElement);
          }
        } while (currentElement !== void 0);
        return elementsRemoved;
      };
      Float32Array.prototype.pp_removeEqual = function(elementToRemove) {
        return this.pp_remove((element) => element === elementToRemove);
      };
      Float32Array.prototype.pp_removeAllEqual = function(elementToRemove) {
        return this.pp_removeAll((element) => element === elementToRemove);
      };
      Float32Array.prototype.pp_pushUnique = function(element, hasElementCallback = null) {
        let length5 = this.length;
        let hasElement = false;
        if (hasElementCallback != null) {
          hasElement = this.pp_has(hasElementCallback);
        } else {
          hasElement = this.pp_hasEquals(element);
        }
        if (!hasElement) {
          length5 = this.push(element);
        }
        return length5;
      };
      Float32Array.prototype.pp_unshiftUnique = function(element, hasElementCallback = null) {
        let length5 = this.length;
        let hasElement = false;
        if (hasElementCallback != null) {
          hasElement = this.pp_has(hasElementCallback);
        } else {
          hasElement = this.pp_hasEquals(element);
        }
        if (!hasElement) {
          length5 = this.unshift(element);
        }
        return length5;
      };
      Float32Array.prototype.pp_copy = function(array) {
        while (this.length > Float32Array.length) {
          this.pop();
        }
        for (let i = 0; i < Float32Array.length; i++) {
          this[i] = array[i];
        }
        return this;
      };
      Float32Array.prototype.pp_clone = function() {
        return this.slice(0);
      };
      Float32Array.prototype.pp_equals = function(array, elementEqualsCallback = null) {
        let equals8 = true;
        if (array != null && this.length == Float32Array.length) {
          for (let i = 0; i < this.length; i++) {
            if (elementEqualsCallback != null && !elementEqualsCallback(this[i], array[i]) || elementEqualsCallback == null && this[i] != array[i]) {
              equals8 = false;
              break;
            }
          }
        } else {
          equals8 = false;
        }
        return equals8;
      };
      Float32Array.prototype.vec_toString = function(decimalPlaces = 4) {
        let message = this._vec_buildConsoleMessage(decimalPlaces);
        return message;
      };
      Float32Array.prototype.vec_log = function(decimalPlaces = 4) {
        let message = this._vec_buildConsoleMessage(decimalPlaces);
        console.log(message);
      };
      Float32Array.prototype.vec_error = function(decimalPlaces = 4) {
        let message = this._vec_buildConsoleMessage(decimalPlaces);
        console.error(message);
      };
      Float32Array.prototype.vec_warn = function(decimalPlaces = 4) {
        let message = this._vec_buildConsoleMessage(decimalPlaces);
        console.warn(message);
      };
      Float32Array.prototype.vec_scale = function(value, out = null) {
        out = this._vec_prepareOut(out);
        for (let i = 0; i < out.length; i++) {
          out[i] = out[i] * value;
        }
        return out;
      };
      Float32Array.prototype.vec_round = function(out = null) {
        out = this._vec_prepareOut(out);
        for (let i = 0; i < out.length; i++) {
          out[i] = Math.round(out[i]);
        }
        return out;
      };
      Float32Array.prototype.vec_floor = function(out = null) {
        out = this._vec_prepareOut(out);
        for (let i = 0; i < out.length; i++) {
          out[i] = Math.floor(out[i]);
        }
        return out;
      };
      Float32Array.prototype.vec_ceil = function(out = null) {
        out = this._vec_prepareOut(out);
        for (let i = 0; i < out.length; i++) {
          out[i] = Math.ceil(out[i]);
        }
        return out;
      };
      Float32Array.prototype.vec_clamp = function(start, end, out = null) {
        out = this._vec_prepareOut(out);
        let fixedStart = start != null ? start : Number.MIN_VALUE;
        let fixedEnd = end != null ? end : Number.MAX_VALUE;
        let min3 = Math.min(fixedStart, fixedEnd);
        let max3 = Math.max(fixedStart, fixedEnd);
        for (let i = 0; i < out.length; i++) {
          out[i] = Math.min(Math.max(out[i], min3), max3);
        }
        return out;
      };
      Float32Array.prototype.vec_equals = function(vector) {
        let equals8 = this.length == vector.length;
        for (let i = 0; i < this.length && equals8; i++) {
          equals8 &= Math.abs(this[i] - vector[i]) < this._pp_epsilon;
        }
        return equals8;
      };
      Float32Array.prototype.vec3_normalize = function(out = vec3_exports.create()) {
        vec3_exports.normalize(out, this);
        return out;
      };
      Float32Array.prototype.vec3_copy = function(vector) {
        vec3_exports.copy(this, vector);
        return this;
      };
      Float32Array.prototype.vec3_clone = function(out = vec3_exports.create()) {
        vec3_exports.copy(out, this);
        return out;
      };
      Float32Array.prototype.vec3_set = function(x, y = null, z = null) {
        if (y == null) {
          vec3_exports.set(this, x, x, x);
        } else {
          vec3_exports.set(this, x, y, z);
        }
        return this;
      };
      Float32Array.prototype.vec3_zero = function() {
        vec3_exports.zero(this);
        return this;
      };
      Float32Array.prototype.vec3_angle = function(vector) {
        return this.vec3_angleDegrees(vector);
      };
      Float32Array.prototype.vec3_angleDegrees = function(vector) {
        return this.vec3_angleRadians(vector) * (180 / Math.PI);
      };
      Float32Array.prototype.vec3_angleRadians = function(vector) {
        return vec3_exports.angle(this, vector);
      };
      Float32Array.prototype.vec3_length = function() {
        return vec3_exports.length(this);
      };
      Float32Array.prototype.vec3_distance = function(vector) {
        return vec3_exports.dist(this, vector);
      };
      Float32Array.prototype.vec3_add = function(vector, out = vec3_exports.create()) {
        vec3_exports.add(out, this, vector);
        return out;
      };
      Float32Array.prototype.vec3_sub = function(vector, out = vec3_exports.create()) {
        vec3_exports.sub(out, this, vector);
        return out;
      };
      Float32Array.prototype.vec3_mul = function(vector, out = vec3_exports.create()) {
        vec3_exports.mul(out, this, vector);
        return out;
      };
      Float32Array.prototype.vec3_div = function(vector, out = vec3_exports.create()) {
        vec3_exports.div(out, this, vector);
        return out;
      };
      Float32Array.prototype.vec3_scale = function(value, out = vec3_exports.create()) {
        vec3_exports.scale(out, this, value);
        return out;
      };
      Float32Array.prototype.vec3_negate = function(out = vec3_exports.create()) {
        vec3_exports.negate(out, this);
        return out;
      };
      Float32Array.prototype.vec3_cross = function(vector, out = vec3_exports.create()) {
        vec3_exports.cross(out, this, vector);
        return out;
      };
      Float32Array.prototype.vec3_transformQuat = function(quat2, out = vec3_exports.create()) {
        vec3_exports.transformQuat(out, this, quat2);
        return out;
      };
      Float32Array.prototype.vec3_angleSigned = function(vector, axis) {
        return this.vec3_angleSignedDegrees(vector, axis);
      };
      Float32Array.prototype.vec3_angleSignedDegrees = function(vector, axis) {
        return this.vec3_angleSignedRadians(vector, axis) * (180 / Math.PI);
      };
      Float32Array.prototype.vec3_angleSignedRadians = function() {
        let crossAxis = vec3_exports.create();
        return function(vector, axis) {
          this.vec3_cross(vector, crossAxis);
          let angle2 = this.vec3_angleRadians(vector);
          if (!crossAxis.vec3_isConcordant(axis)) {
            angle2 = -angle2;
          }
          return angle2;
        };
      }();
      Float32Array.prototype.vec3_toRadians = function(out = vec3_exports.create()) {
        vec3_exports.set(out, common_exports.toRadian(this[0]), common_exports.toRadian(this[1]), common_exports.toRadian(this[2]));
        return out;
      };
      Float32Array.prototype.vec3_toDegrees = function(out = vec3_exports.create()) {
        vec3_exports.set(out, this[0] * (180 / Math.PI), this[1] * (180 / Math.PI), this[2] * (180 / Math.PI));
        return out;
      };
      Float32Array.prototype.vec3_toQuat = function(out) {
        return this.vec3_degreesToQuat(out);
      };
      Float32Array.prototype.vec3_radiansToQuat = function(out = quat_exports.create()) {
        out.quat_fromRadians(this);
        return out;
      };
      Float32Array.prototype.vec3_degreesToQuat = function(out = quat_exports.create()) {
        out.quat_fromDegrees(this);
        return out;
      };
      Float32Array.prototype.vec3_isNormalized = function() {
        return Math.abs(vec3_exports.length(this) - 1) < this._pp_epsilon;
      };
      Float32Array.prototype.vec3_componentAlongAxis = function(axis, out = vec3_exports.create()) {
        let angle2 = vec3_exports.angle(this, axis);
        let length5 = Math.cos(angle2) * vec3_exports.length(this);
        vec3_exports.copy(out, axis);
        vec3_exports.scale(out, out, length5);
        return out;
      };
      Float32Array.prototype.vec3_removeComponentAlongAxis = function() {
        let componentAlong = vec3_exports.create();
        return function(axis, out = vec3_exports.create()) {
          this.vec3_componentAlongAxis(axis, componentAlong);
          vec3_exports.sub(out, this, componentAlong);
          return out;
        };
      }();
      Float32Array.prototype.vec3_isConcordant = function(vector) {
        return vec3_exports.angle(this, vector) <= Math.PI / 2;
      };
      Float32Array.prototype.vec3_rotate = function(rotation, out) {
        return this.vec3_rotateDegrees(rotation, out);
      };
      Float32Array.prototype.vec3_rotateDegrees = function() {
        let zero3 = vec3_exports.create();
        return function(rotation, out) {
          return this.vec3_rotateAroundDegrees(rotation, zero3, out);
        };
      }();
      Float32Array.prototype.vec3_rotateRadians = function() {
        let zero3 = vec3_exports.create();
        return function(rotation, out) {
          return this.vec3_rotateAroundRadians(rotation, zero3, out);
        };
      }();
      Float32Array.prototype.vec3_rotateQuat = function() {
        let zero3 = vec3_exports.create();
        return function(rotation, out) {
          return this.vec3_rotateAroundQuat(rotation, zero3, out);
        };
      }();
      Float32Array.prototype.vec3_rotateAxis = function(angle2, axis, out) {
        return this.vec3_rotateAxisDegrees(angle2, axis, out);
      };
      Float32Array.prototype.vec3_rotateAxisDegrees = function() {
        let zero3 = vec3_exports.create();
        return function(angle2, axis, out) {
          return this.vec3_rotateAroundAxisDegrees(angle2, axis, zero3, out);
        };
      }();
      Float32Array.prototype.vec3_rotateAxisRadians = function() {
        let zero3 = vec3_exports.create();
        return function(angle2, axis, out) {
          return this.vec3_rotateAroundAxisRadians(angle2, axis, zero3, out);
        };
      }();
      Float32Array.prototype.vec3_rotateAround = function(rotation, origin, out) {
        return this.vec3_rotateAroundDegrees(rotation, origin, out);
      };
      Float32Array.prototype.vec3_rotateAroundDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, origin, out = vec3_exports.create()) {
          rotation.vec3_degreesToQuat(quat2);
          return this.vec3_rotateAroundQuat(quat2, origin, out);
        };
      }();
      Float32Array.prototype.vec3_rotateAroundRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, origin, out = vec3_exports.create()) {
          rotation.vec3_radiansToQuat(quat2);
          return this.vec3_rotateAroundQuat(quat2, origin, out);
        };
      }();
      Float32Array.prototype.vec3_rotateAroundQuat = function(rotation, origin, out = vec3_exports.create()) {
        vec3_exports.sub(out, this, origin);
        vec3_exports.transformQuat(out, out, rotation);
        vec3_exports.add(out, out, origin);
        return out;
      };
      Float32Array.prototype.vec3_rotateAroundAxis = function(angle2, axis, origin, out) {
        return this.vec3_rotateAroundAxisDegrees(angle2, axis, origin, out);
      };
      Float32Array.prototype.vec3_rotateAroundAxisDegrees = function(angle2, axis, origin, out) {
        return this.vec3_rotateAroundAxisRadians(common_exports.toRadian(angle2), axis, origin, out);
      };
      Float32Array.prototype.vec3_rotateAroundAxisRadians = function() {
        let quat2 = quat_exports.create();
        return function(angle2, axis, origin, out = vec3_exports.create()) {
          quat_exports.setAxisAngle(quat2, axis, angle2);
          return this.vec3_rotateAroundQuat(quat2, origin, out);
        };
      }();
      Float32Array.prototype.vec3_convertPositionToWorld = function(parentTransform, out) {
        return this.vec3_convertPositionToWorldMatrix(parentTransform, out);
      };
      Float32Array.prototype.vec3_convertPositionToLocal = function(parentTransform, out) {
        return this.vec3_convertPositionToLocalMatrix(parentTransform, out);
      };
      Float32Array.prototype.vec3_convertPositionToWorldMatrix = function(parentTransform, out = vec3_exports.create()) {
        vec3_exports.transformMat4(out, this, parentTransform);
        return out;
      };
      Float32Array.prototype.vec3_convertPositionToLocalMatrix = function() {
        let inverse3 = mat4_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          mat4_exports.invert(inverse3, parentTransform);
          vec3_exports.transformMat4(out, this, inverse3);
          return out;
        };
      }();
      Float32Array.prototype.vec3_convertPositionToWorldQuat = function() {
        let parentTransformMatrix = mat4_exports.create();
        let position = vec3_exports.create();
        let rotation = quat_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.quat2_getPosition(position);
          parentTransform.quat2_getRotationQuat(rotation);
          parentTransformMatrix.mat4_setPositionRotationQuatScale(position, rotation, one);
          return this.vec3_convertPositionToWorldMatrix(parentTransformMatrix, out);
        };
      }();
      Float32Array.prototype.vec3_convertPositionToLocalQuat = function() {
        let parentTransformMatrix = mat4_exports.create();
        let position = vec3_exports.create();
        let rotation = quat_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.quat2_getPosition(position);
          parentTransform.quat2_getRotationQuat(rotation);
          parentTransformMatrix.mat4_setPositionRotationQuatScale(position, rotation, one);
          return this.vec3_convertPositionToLocalMatrix(parentTransformMatrix, out);
        };
      }();
      Float32Array.prototype.vec3_convertDirectionToWorld = function(parentTransform, out) {
        return this.vec3_convertDirectionToWorldMatrix(parentTransform, out);
      };
      Float32Array.prototype.vec3_convertDirectionToLocal = function(parentTransform, out) {
        return this.vec3_convertDirectionToLocalMatrix(parentTransform, out);
      };
      Float32Array.prototype.vec3_convertDirectionToWorldMatrix = function() {
        let rotation = quat_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.mat4_getRotationQuat(rotation);
          vec3_exports.transformQuat(out, this, rotation);
          return out;
        };
      }();
      Float32Array.prototype.vec3_convertDirectionToLocalMatrix = function() {
        let rotation = quat_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.mat4_getRotationQuat(rotation);
          quat_exports.conjugate(rotation, rotation);
          vec3_exports.transformQuat(out, this, rotation);
          return out;
        };
      }();
      Float32Array.prototype.vec3_convertDirectionToWorldQuat = function() {
        let rotation = quat_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.quat2_getRotationQuat(rotation);
          vec3_exports.transformQuat(out, this, rotation);
          return out;
        };
      }();
      Float32Array.prototype.vec3_convertDirectionToLocalQuat = function() {
        let rotation = quat_exports.create();
        return function(parentTransform, out = vec3_exports.create()) {
          parentTransform.quat2_getRotationQuat(rotation);
          quat_exports.conjugate(rotation, rotation);
          vec3_exports.transformQuat(out, this, rotation);
          return out;
        };
      }();
      Float32Array.prototype.vec3_log = function(decimalPlaces = 4) {
        this.vec_log(decimalPlaces);
      };
      Float32Array.prototype.vec3_error = function(decimalPlaces = 4) {
        this.vec_error(decimalPlaces);
      };
      Float32Array.prototype.vec3_warn = function(decimalPlaces = 4) {
        this.vec_warn(decimalPlaces);
      };
      Float32Array.prototype.vec3_addRotation = function(rotation, out) {
        return this.vec3_degreesAddRotation(rotation, out);
      };
      Float32Array.prototype.vec3_addRotationDegrees = function(rotation, out) {
        return quat.vec3_degreesAddRotationDegrees(rotation, out);
      };
      Float32Array.prototype.vec3_addRotationRadians = function(rotation, out) {
        return quat.vec3_degreesAddRotationRadians(rotation, out);
      };
      Float32Array.prototype.vec3_addRotationQuat = function(rotation, out) {
        return quat.vec3_degreesAddRotationQuat(rotation, out);
      };
      Float32Array.prototype.vec3_degreesAddRotation = function(rotation, out) {
        return this.vec3_degreesAddRotationDegrees(rotation, out);
      };
      Float32Array.prototype.vec3_degreesAddRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_degreesToQuat(quat2);
          return quat2.quat_addRotationDegrees(rotation, quat2).quat_toDegrees(out);
        };
      }();
      Float32Array.prototype.vec3_degreesAddRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_degreesToQuat(quat2);
          return quat2.quat_addRotationRadians(rotation, quat2).quat_toDegrees(out);
        };
      }();
      Float32Array.prototype.vec3_degreesAddRotationQuat = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_degreesToQuat(quat2);
          return quat2.quat_addRotationQuat(rotation, quat2).quat_toDegrees(out);
        };
      }();
      Float32Array.prototype.vec3_radiansAddRotation = function(rotation, out) {
        return this.vec3_radiansAddRotationDegrees(rotation, out);
      };
      Float32Array.prototype.vec3_radiansAddRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_radiansToQuat(quat2);
          return quat2.quat_addRotationDegrees(rotation, quat2).quat_toRadians(out);
        };
      }();
      Float32Array.prototype.vec3_radiansAddRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_radiansToQuat(quat2);
          return quat2.quat_addRotationRadians(rotation, quat2).quat_toRadians(out);
        };
      }();
      Float32Array.prototype.vec3_radiansAddRotationQuat = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out = vec3_exports.create()) {
          this.vec3_radiansToQuat(quat2);
          return quat2.quat_addRotationQuat(rotation, quat2).quat_toRadians(out);
        };
      }();
      Float32Array.prototype.vec3_toMatrix = function(out = mat3_exports.create()) {
        return this.vec3_degreesToMatrix(out);
      };
      Float32Array.prototype.vec3_degreesToMatrix = function() {
        let quat2 = quat_exports.create();
        return function(out = mat3_exports.create()) {
          this.vec3_degreesToQuat(quat2);
          return quat2.quat_toMatrix(out);
        };
      }();
      Float32Array.prototype.vec3_radiansToMatrix = function() {
        let quat2 = quat_exports.create();
        return function(out = mat3_exports.create()) {
          this.vec3_radiansToQuat(quat2);
          return quat2.quat_toMatrix(out);
        };
      }();
      Float32Array.prototype.vec4_set = function(x, y = null, z = null, w = null) {
        if (y == null) {
          vec4_exports.set(this, x, x, x, x);
        } else {
          vec4_exports.set(this, x, y, z, w);
        }
        return this;
      };
      Float32Array.prototype.vec4_copy = function(vector) {
        vec4_exports.copy(this, vector);
        return this;
      };
      Float32Array.prototype.quat_normalize = function(out = quat_exports.create()) {
        quat_exports.normalize(out, this);
        return out;
      };
      Float32Array.prototype.quat_copy = function(quat2) {
        quat_exports.copy(this, quat2);
        return this;
      };
      Float32Array.prototype.quat_set = function(x, y = null, z = null, w = null) {
        if (y == null) {
          quat_exports.set(this, x, x, x, x);
        } else {
          quat_exports.set(this, x, y, z, w);
        }
        return this;
      };
      Float32Array.prototype.quat_identity = function() {
        quat_exports.identity(this);
        return this;
      };
      Float32Array.prototype.quat_length = function() {
        return quat_exports.length(this);
      };
      Float32Array.prototype.quat_invert = function(out = quat_exports.create()) {
        quat_exports.invert(out, this);
        return out;
      };
      Float32Array.prototype.quat_mul = function(rotation, out = quat_exports.create()) {
        quat_exports.mul(out, this, rotation);
        return out;
      };
      Float32Array.prototype.quat_getAxis = function(out = vec3_exports.create()) {
        quat_exports.getAxisAngle(out, this);
        return out;
      };
      Float32Array.prototype.quat_getAngle = function() {
        let vector = vec3_exports.create();
        return function() {
          let angle2 = quat_exports.getAxisAngle(vector, this);
          return angle2;
        };
      }();
      Float32Array.prototype.quat_fromAxis = function(angle2, axis) {
        return this.quat_fromAxisDegrees(angle2, axis);
      };
      Float32Array.prototype.quat_fromAxisDegrees = function(angle2, axis) {
        quat_exports.setAxisAngle(this, axis, common_exports.toRadian(angle2));
        return this;
      };
      Float32Array.prototype.quat_fromAxisRadians = function(angle2, axis) {
        quat_exports.setAxisAngle(this, axis, angle2);
        return this;
      };
      Float32Array.prototype.quat_fromRadians = function() {
        let vector = vec3_exports.create();
        return function(radiansRotation) {
          radiansRotation.vec3_toDegrees(vector);
          return this.quat_fromDegrees(vector);
        };
      }();
      Float32Array.prototype.quat_fromDegrees = function(degreesRotation) {
        quat_exports.fromEuler(this, degreesRotation[0], degreesRotation[1], degreesRotation[2]);
        return this;
      };
      Float32Array.prototype.quat_toRadians = function() {
        let mat3 = mat3_exports.create();
        return function(out = vec3_exports.create()) {
          mat3_exports.fromQuat(mat3, this);
          out[1] = Math.asin(-this._pp_clamp(mat3[2], -1, 1));
          if (Math.abs(mat3[2]) < 1 - this._pp_epsilon) {
            out[0] = Math.atan2(mat3[5], mat3[8]);
            out[2] = Math.atan2(mat3[1], mat3[0]);
          } else {
            out[0] = 0;
            out[2] = Math.atan2(-mat3[3], mat3[4]);
          }
          return out;
        };
      }();
      Float32Array.prototype.quat_toDegrees = function(out = vec3_exports.create()) {
        this.quat_toRadians(out);
        out.vec3_toDegrees(out);
        return out;
      };
      Float32Array.prototype.quat_isNormalized = function() {
        return Math.abs(quat_exports.length(this) - 1) < this._pp_epsilon;
      };
      Float32Array.prototype.quat_addRotation = function(rotation, out) {
        return this.quat_addRotationDegrees(rotation, out);
      };
      Float32Array.prototype.quat_addRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out) {
          rotation.vec3_degreesToQuat(quat2);
          return this.quat_addRotationQuat(quat2, out);
        };
      }();
      Float32Array.prototype.quat_addRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out) {
          rotation.vec3_radiansToQuat(quat2);
          return this.quat_addRotationQuat(quat2, out);
        };
      }();
      Float32Array.prototype.quat_addRotationQuat = function(rotation, out = quat_exports.create()) {
        rotation.quat_mul(this, out);
        return out;
      };
      Float32Array.prototype.quat_subRotation = function(rotation, out) {
        return this.quat_subRotationDegrees(rotation, out);
      };
      Float32Array.prototype.quat_subRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out) {
          rotation.vec3_degreesToQuat(quat2);
          return this.quat_subRotationQuat(quat2, out);
        };
      }();
      Float32Array.prototype.quat_subRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(rotation, out) {
          rotation.vec3_radiansToQuat(quat2);
          return this.quat_subRotationQuat(quat2, out);
        };
      }();
      Float32Array.prototype.quat_subRotationQuat = function() {
        let inverse3 = quat_exports.create();
        return function(rotation, out = quat_exports.create()) {
          rotation.quat_invert(inverse3);
          this.quat_mul(inverse3, out);
          return out;
        };
      }();
      Float32Array.prototype.quat_rotationTo = function(rotation, out) {
        return this.quat_rotationToDegrees(rotation, out);
      };
      Float32Array.prototype.quat_rotationToDegrees = function(rotation, out) {
        return rotation.quat_subRotationDegrees(this, out);
      };
      Float32Array.prototype.quat_rotationToRadians = function(rotation, out) {
        return rotation.quat_subRotationRadians(this, out);
      };
      Float32Array.prototype.quat_rotationToQuat = function(rotation, out) {
        return rotation.quat_subRotationQuat(this, out);
      };
      Float32Array.prototype.quat_toMatrix = function(out = mat3_exports.create()) {
        mat3_exports.fromQuat(out, this);
        return out;
      };
      Float32Array.prototype.quat_rotate = function(rotation, out) {
        return this.quat_rotateDegrees(rotation, out);
      };
      Float32Array.prototype.quat_rotateDegrees = function(rotation, out) {
        return this.quat_addRotationDegrees(rotation, out);
      };
      Float32Array.prototype.quat_rotateRadians = function(rotation, out) {
        return this.quat_addRotationRadians(rotation, out);
      };
      Float32Array.prototype.quat_rotateQuat = function(rotation, out) {
        return this.quat_addRotationQuat(rotation, out);
      };
      Float32Array.prototype.quat_rotateAxis = function(angle2, axis, out) {
        return this.quat_rotateAxisDegrees(angle2, axis, out);
      };
      Float32Array.prototype.quat_rotateAxisDegrees = function() {
        let rotationQuat = quat_exports.create();
        return function(angle2, axis, out) {
          rotationQuat.quat_fromAxisDegrees(angle2, axis);
          return this.quat_rotateQuat(rotationQuat, out);
        };
      }();
      Float32Array.prototype.quat_rotateAxisRadians = function() {
        let rotationQuat = quat_exports.create();
        return function(angle2, axis, out) {
          rotationQuat.quat_fromAxisRadians(angle2, axis);
          return this.quat_rotateQuat(rotationQuat, out);
        };
      }();
      Float32Array.prototype.quat2_normalize = function(out = quat2_exports.create()) {
        quat2_exports.normalize(out, this);
        return out;
      };
      Float32Array.prototype.quat2_copy = function(quat2) {
        quat2_exports.copy(this, quat2);
        return this;
      };
      Float32Array.prototype.quat2_identity = function() {
        quat2_exports.identity(this);
        return this;
      };
      Float32Array.prototype.quat2_getPosition = function(out = vec3_exports.create()) {
        quat2_exports.getTranslation(out, this);
        return this;
      };
      Float32Array.prototype.quat2_getRotation = function(out) {
        return this.quat2_getRotationDegrees(out);
      };
      Float32Array.prototype.quat2_getRotationDegrees = function() {
        let rotationQuat = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.quat2_getRotationQuat(rotationQuat).quat_toDegrees(out);
          return out;
        };
      }();
      Float32Array.prototype.quat2_getRotationRadians = function() {
        let rotationQuat = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.quat2_getRotationQuat(rotationQuat).quat_toRadians(out);
          return out;
        };
      }();
      Float32Array.prototype.quat2_getRotationQuat = function(out = quat_exports.create()) {
        quat_exports.copy(out, this);
        return this;
      };
      Float32Array.prototype.quat2_setPositionRotation = function(position, rotation) {
        return this.quat2_setPositionRotationDegrees(position, rotation);
      };
      Float32Array.prototype.quat2_setPositionRotationDegrees = function() {
        let rotationQuat = quat_exports.create();
        return function(position, rotation) {
          rotation.vec3_degreesToQuat(rotationQuat);
          quat2_exports.fromRotationTranslation(this, rotationQuat, position);
          return this;
        };
      }();
      Float32Array.prototype.quat2_setPositionRotationRadians = function() {
        let rotationQuat = quat_exports.create();
        return function(position, rotation) {
          rotation.vec3_radiansToQuat(rotationQuat);
          quat2_exports.fromRotationTranslation(this, rotationQuat, position);
          return this;
        };
      }();
      Float32Array.prototype.quat2_setPositionRotationQuat = function(position, rotation) {
        quat2_exports.fromRotationTranslation(this, rotation, position);
        return this;
      };
      Float32Array.prototype.quat2_getAxes = function() {
        let rotationMatrix = mat3_exports.create();
        return function(out = [vec3_exports.create(), vec3_exports.create(), vec3_exports.create()]) {
          mat3_exports.fromQuat(rotationMatrix, this);
          vec3_exports.set(out[0], rotationMatrix[0], rotationMatrix[1], rotationMatrix[2]);
          vec3_exports.set(out[1], rotationMatrix[3], rotationMatrix[4], rotationMatrix[5]);
          vec3_exports.set(out[2], rotationMatrix[6], rotationMatrix[7], rotationMatrix[8]);
          vec3_exports.normalize(out[0], out[0]);
          vec3_exports.normalize(out[1], out[1]);
          vec3_exports.normalize(out[2], out[2]);
          return out;
        };
      }();
      Float32Array.prototype.quat2_toLocal = function() {
        let invertQuat = quat2_exports.create();
        return function(parentTransform, out = quat2_exports.create()) {
          quat2_exports.conjugate(invertQuat, parentTransform);
          quat2_exports.mul(out, invertQuat, this);
          return out;
        };
      }();
      Float32Array.prototype.quat2_toWorld = function(parentTransform, out = quat2_exports.create()) {
        quat2_exports.mul(out, parentTransform, this);
        return out;
      };
      Float32Array.prototype.quat2_toMatrix = function(out = mat4_exports.create()) {
        mat4_exports.fromQuat2(out, this);
        return out;
      };
      Float32Array.prototype.quat2_fromMatrix = function(transformMatrix) {
        transformMatrix.mat4_toQuat(this);
        return this;
      };
      Float32Array.prototype.mat3_toDegrees = function() {
        let quat2 = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.mat3_toQuat(quat2);
          quat2.quat_toDegrees(out);
          return out;
        };
      }();
      Float32Array.prototype.mat3_toRadians = function() {
        let quat2 = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.mat3_toQuat(quat2);
          quat2.quat_toRadians(out);
          return out;
        };
      }();
      Float32Array.prototype.mat3_toQuat = function(out = quat_exports.create()) {
        quat_exports.fromMat3(out, this);
        return out;
      };
      Float32Array.prototype.mat4_copy = function(mat42) {
        mat4_exports.copy(this, mat42);
        return this;
      };
      Float32Array.prototype.mat4_identity = function() {
        mat4_exports.identity(this);
        return this;
      };
      Float32Array.prototype.mat4_invert = function(out = mat4_exports.create()) {
        mat4_exports.invert(out, this);
        return out;
      };
      Float32Array.prototype.mat4_clone = function(out = mat4_exports.create()) {
        mat4_exports.copy(out, this);
        return out;
      };
      Float32Array.prototype.mat4_getPosition = function(out = vec3_exports.create()) {
        mat4_exports.getTranslation(out, this);
        return out;
      };
      Float32Array.prototype.mat4_getRotation = function(out = vec3_exports.create()) {
        return this.mat4_getRotationDegrees(out);
      };
      Float32Array.prototype.mat4_getRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.mat4_getRotationQuat(quat2);
          quat2.quat_toDegrees(out);
          return out;
        };
      }();
      Float32Array.prototype.mat4_getRotationRadians = function() {
        let quat2 = quat_exports.create();
        return function(out = vec3_exports.create()) {
          this.mat4_getRotationQuat(quat2);
          quat2.quat_toRadians(out);
          return out;
        };
      }();
      Float32Array.prototype.mat4_getRotationQuat = function() {
        let scale7 = vec3_exports.create();
        let transformMatrixNoScale = mat4_exports.create();
        let inverseScale = vec3_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(out = quat_exports.create()) {
          mat4_exports.getScaling(scale7, this);
          vec3_exports.divide(inverseScale, one, scale7);
          mat4_exports.scale(transformMatrixNoScale, this, inverseScale);
          mat4_exports.getRotation(out, transformMatrixNoScale);
          quat_exports.normalize(out, out);
          return out;
        };
      }();
      Float32Array.prototype.mat4_getScale = function(out = vec3_exports.create()) {
        mat4_exports.getScaling(out, this);
        return out;
      };
      Float32Array.prototype.mat4_setPosition = function(position) {
        this[12] = position[0];
        this[13] = position[1];
        this[14] = position[2];
        return this;
      };
      Float32Array.prototype.mat4_setRotation = function(rotation) {
        this.mat4_setRotationDegrees(rotation);
        return this;
      };
      Float32Array.prototype.mat4_setRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(rotation) {
          this.mat4_setRotationQuat(rotation.vec3_degreesToQuat(quat2));
          return this;
        };
      }();
      Float32Array.prototype.mat4_setRotationRadians = function() {
        let vector = vec3_exports.create();
        return function(rotation) {
          this.mat4_setRotationDegrees(rotation.vec3_toDegrees(vector));
          return this;
        };
      }();
      Float32Array.prototype.mat4_setRotationQuat = function() {
        let position = vec3_exports.create();
        let scale7 = vec3_exports.create();
        return function(rotation) {
          this.mat4_getPosition(position);
          this.mat4_getScale(scale7);
          this.mat4_setPositionRotationQuatScale(position, rotation, scale7);
          return this;
        };
      }();
      Float32Array.prototype.mat4_setScale = function() {
        let tempScale = vec3_exports.create();
        return function(scale7) {
          mat4_exports.getScaling(tempScale, this);
          vec3_exports.divide(tempScale, scale7, tempScale);
          mat4_exports.scale(this, this, tempScale);
          return this;
        };
      }();
      Float32Array.prototype.mat4_setPositionRotationScale = function(position, rotation, scale7) {
        this.mat4_setPositionRotationDegreesScale(position, rotation, scale7);
        return this;
      };
      Float32Array.prototype.mat4_setPositionRotationDegreesScale = function() {
        let quat2 = quat_exports.create();
        return function(position, rotation, scale7) {
          this.mat4_setPositionRotationQuatScale(position, rotation.vec3_degreesToQuat(quat2), scale7);
          return this;
        };
      }();
      Float32Array.prototype.mat4_setPositionRotationRadiansScale = function() {
        let vector = vec3_exports.create();
        return function(position, rotation, scale7) {
          this.mat4_setPositionRotationDegreesScale(position, rotation.vec3_toDegrees(vector), scale7);
          return this;
        };
      }();
      Float32Array.prototype.mat4_setPositionRotationQuatScale = function(position, rotation, scale7) {
        mat4_exports.fromRotationTranslationScale(this, rotation, position, scale7);
        return this;
      };
      Float32Array.prototype.mat4_setPositionRotation = function(position, rotation) {
        this.mat4_setPositionRotationDegrees(position, rotation);
        return this;
      };
      Float32Array.prototype.mat4_setPositionRotationDegrees = function() {
        let quat2 = quat_exports.create();
        return function(position, rotation) {
          this.mat4_setPositionRotationQuat(position, rotation.vec3_degreesToQuat(quat2));
          return this;
        };
      }();
      Float32Array.prototype.mat4_setPositionRotationRadians = function() {
        let vector = vec3_exports.create();
        return function(position, rotation) {
          this.mat4_setPositionRotationDegrees(position, rotation.vec3_toDegrees(vector));
          return this;
        };
      }();
      Float32Array.prototype.mat4_setPositionRotationQuat = function(position, rotation) {
        mat4_exports.fromRotationTranslation(this, rotation, position);
        return this;
      };
      Float32Array.prototype.mat4_getAxes = function(out = [vec3_exports.create(), vec3_exports.create(), vec3_exports.create()]) {
        vec3_exports.set(out[0], this[0], this[1], this[2]);
        vec3_exports.set(out[1], this[4], this[5], this[6]);
        vec3_exports.set(out[2], this[8], this[9], this[10]);
        vec3_exports.normalize(out[0], out[0]);
        vec3_exports.normalize(out[1], out[1]);
        vec3_exports.normalize(out[2], out[2]);
        return out;
      };
      Float32Array.prototype.mat4_toWorld = function() {
        let convertTransform = mat4_exports.create();
        let position = vec3_exports.create();
        let scale7 = vec3_exports.create();
        let inverseScale = vec3_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(parentTransform, out = mat4_exports.create()) {
          if (parentTransform.mat4_hasUniformScale()) {
            mat4_exports.mul(out, parentTransform, this);
          } else {
            vec3_exports.set(position, this[12], this[13], this[14]);
            position.vec3_convertPositionToWorldMatrix(parentTransform, position);
            mat4_exports.getScaling(scale7, parentTransform);
            vec3_exports.divide(inverseScale, one, scale7);
            mat4_exports.scale(convertTransform, parentTransform, inverseScale);
            mat4_exports.mul(out, convertTransform, this);
            mat4_exports.scale(out, out, scale7);
            out[12] = position[0];
            out[13] = position[1];
            out[14] = position[2];
            out[15] = 1;
          }
          return out;
        };
      }();
      Float32Array.prototype.mat4_toLocal = function() {
        let convertTransform = mat4_exports.create();
        let position = vec3_exports.create();
        let scale7 = vec3_exports.create();
        let inverseScale = vec3_exports.create();
        let one = vec3_exports.create();
        vec3_exports.set(one, 1, 1, 1);
        return function(parentTransform, out = mat4_exports.create()) {
          if (parentTransform.mat4_hasUniformScale()) {
            mat4_exports.invert(convertTransform, parentTransform);
            mat4_exports.mul(out, convertTransform, this);
          } else {
            vec3_exports.set(position, this[12], this[13], this[14]);
            position.vec3_convertPositionToLocalMatrix(parentTransform, position);
            mat4_exports.getScaling(scale7, parentTransform);
            vec3_exports.divide(inverseScale, one, scale7);
            mat4_exports.scale(convertTransform, parentTransform, inverseScale);
            mat4_exports.invert(convertTransform, convertTransform);
            mat4_exports.mul(out, convertTransform, this);
            mat4_exports.scale(out, out, inverseScale);
            out[12] = position[0];
            out[13] = position[1];
            out[14] = position[2];
            out[15] = 1;
          }
          return out;
        };
      }();
      Float32Array.prototype.mat4_hasUniformScale = function() {
        let scale7 = vec3_exports.create();
        return function() {
          mat4_exports.getScaling(scale7, this);
          return Math.abs(scale7[0] - scale7[1]) < this._pp_epsilon && Math.abs(scale7[1] - scale7[2]) < this._pp_epsilon && Math.abs(scale7[0] - scale7[2]) < this._pp_epsilon;
        };
      }();
      Float32Array.prototype.mat4_toQuat = function() {
        let position = vec3_exports.create();
        let rotation = quat_exports.create();
        return function(out = quat2_exports.create()) {
          mat4_exports.getTranslation(position, this);
          this.mat4_getRotationQuat(rotation);
          quat2_exports.fromRotationTranslation(out, rotation, position);
          return out;
        };
      }();
      Float32Array.prototype.mat4_fromQuat = function(transformQuat3) {
        transformQuat3.quat2_toMatrix(this);
        return this;
      };
      PP.vec3_create = function(x = null, y = null, z = null) {
        let out = vec3_exports.create();
        if (x != null) {
          out.vec3_set(x, y, z);
        }
        return out;
      };
      PP.vec4_create = function(x = null, y = null, z = null, w = null) {
        let out = vec4_exports.create();
        if (x != null) {
          out.vec4_set(x, y, z, w);
        }
        return out;
      };
      PP.quat_create = function(x = null, y = null, z = null, w = null) {
        let out = quat_exports.create();
        if (x != null) {
          out.quat_set(x, y, z, w);
        }
        return out;
      };
      PP.quat2_create = function() {
        let out = quat2_exports.create();
        return out;
      };
      PP.quat2_fromPositionRotation = function(position, rotation) {
        return quat2_fromPositionRotationDegrees(position, rotation);
      };
      PP.quat2_fromPositionRotationDegrees = function(position, rotation) {
        let out = mat4_exports.create();
        out.quat2_setPositionRotationDegrees(position, rotation);
        return out;
      };
      PP.quat2_fromPositionRotationRadians = function(position, rotation) {
        let out = mat4_exports.create();
        out.quat2_setPositionRotationRadians(position, rotation);
        return out;
      };
      PP.quat2_fromPositionRotationQuat = function(position, rotation) {
        let out = quat2_exports.create();
        out.quat2_setPositionRotationQuat(position, rotation);
        return out;
      };
      PP.mat4_create = function() {
        let out = mat4_exports.create();
        return out;
      };
      PP.mat4_fromPositionRotation = function(position, rotation) {
        return mat4_fromPositionRotationDegrees(position, rotation);
      };
      PP.mat4_fromPositionRotationDegrees = function(position, rotation) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationDegrees(position, rotation);
        return out;
      };
      PP.mat4_fromPositionRotationRadians = function(position, rotation) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationRadians(position, rotation);
        return out;
      };
      PP.mat4_fromPositionRotationQuat = function(position, rotation) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationQuat(position, rotation);
        return out;
      };
      PP.mat4_fromPositionRotationScale = function(position, rotation, scale7) {
        return mat4_fromPositionRotationDegreesScale(position, rotation, scale7);
      };
      PP.mat4_fromPositionRotationDegreesScale = function(position, rotation, scale7) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationDegreesScale(position, rotation, scale7);
        return out;
      };
      PP.mat4_fromPositionRotationRadiansScale = function(position, rotation, scale7) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationRadiansScale(position, rotation, scale7);
        return out;
      };
      PP.mat4_fromPositionRotationQuatScale = function(position, rotation, scale7) {
        let out = mat4_exports.create();
        out.mat4_setPositionRotationQuatScale(position, rotation, scale7);
        return out;
      };
      Float32Array.prototype._pp_epsilon = 1e-6;
      Float32Array.prototype._pp_clamp = function(value, min3, max3) {
        return Math.min(Math.max(value, min3), max3);
      };
      Float32Array.prototype._vec_buildConsoleMessage = function(decimalPlaces) {
        let message = "[";
        for (let i = 0; i < this.length; i++) {
          if (i != 0) {
            message = message.concat(", ");
          }
          message = message.concat(this[i].toFixed(decimalPlaces));
        }
        message = message.concat("]");
        return message;
      };
      Float32Array.prototype._vec_prepareOut = function(out) {
        if (out == null) {
          out = this.pp_clone();
        } else if (out != this) {
          out.pp_copy(this);
        }
        return out;
      };
      for (let key in Float32Array.prototype) {
        let prefixes = ["pp_", "vec_", "vec3_", "vec4_", "quat_", "quat2_", "mat3_", "mat4_", "_pp_", "_vec_"];
        let found = false;
        for (let prefix of prefixes) {
          if (key.startsWith(prefix)) {
            found = true;
            break;
          }
        }
        if (found) {
          Object.defineProperty(Float32Array.prototype, key, { enumerable: false });
        }
      }
    }
  });

  // js/pp/plugin/extensions/math_extension.js
  var require_math_extension = __commonJS({
    "js/pp/plugin/extensions/math_extension.js"() {
      Math.pp_clamp = function(value, start, end) {
        let fixedStart = start != null ? start : Number.MIN_VALUE;
        let fixedEnd = end != null ? end : Number.MAX_VALUE;
        let min3 = Math.min(fixedStart, fixedEnd);
        let max3 = Math.max(fixedStart, fixedEnd);
        return Math.min(Math.max(value, min3), max3);
      };
      Math.pp_sign = function(value, zeroSign = 1) {
        let sign = Math.sign(value);
        if (sign == 0) {
          sign = Math.sign(zeroSign);
        }
        return sign;
      };
      Math.pp_toDegrees = function(angle2) {
        return angle2 * (180 / Math.PI);
      };
      Math.pp_toRadians = function(angle2) {
        return angle2 * (Math.PI / 180);
      };
      Math.pp_roundDecimal = function(number, decimalPlaces) {
        let factor = Math.pow(10, decimalPlaces);
        number = Math.round(number * factor) / factor;
        return number;
      };
      Math.pp_mapToRange = function(value, originRangeStart, originRangeEnd, newRangeStart, newRangeEnd) {
        if (originRangeStart == originRangeEnd) {
          return newRangeStart;
        }
        let clampedValue = Math.pp_clamp(value, originRangeStart, originRangeEnd);
        if (clampedValue == originRangeStart) {
          return newRangeStart;
        } else if (clampedValue == originRangeEnd) {
          return newRangeEnd;
        }
        let newValue = newRangeStart + (newRangeEnd - newRangeStart) / (originRangeEnd - originRangeStart) * (clampedValue - originRangeStart);
        let clampedNewValue = Math.pp_clamp(newValue, newRangeStart, newRangeEnd);
        return clampedNewValue;
      };
      Math.pp_random = function(start = 0, end = 1) {
        return Math.random() * (end - start) + start;
      };
      Math.pp_randomInt = function(start, end) {
        let min3 = Math.min(start, end);
        let max3 = Math.max(start, end);
        return Math.floor(Math.random() * (max3 - min3 + 1) + min3);
      };
      Math.pp_randomSign = function() {
        return Math.random() < 0.5 ? 1 : -1;
      };
      Math.pp_randomPick = function(...args) {
        let random4 = null;
        if (args.length > 0) {
          if (args.length == 1 && args[0].length != null) {
            if (args[0].length > 0) {
              let randomIndex = Math.pp_randomInt(0, args[0].length - 1);
              random4 = args[0][randomIndex];
            }
          } else {
            let randomIndex = Math.pp_randomInt(0, args.length - 1);
            random4 = args[randomIndex];
          }
        }
        return random4;
      };
      Math.pp_lerp = function(from, to, interpolationValue) {
        if (interpolationValue == 0) {
          return from;
        } else if (interpolationValue == 1) {
          return to;
        }
        return interpolationValue * (to - from) + from;
      };
      PP.EasingFunction = {
        linear: (t) => t,
        easeIn: (t) => t * t * t,
        easeOut: (t) => (t - 1) * (t - 1) * (t - 1) + 1,
        easeInOut: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      };
      Math.pp_interpolate = function(from, to, interpolationValue, easingFunction = PP.EasingFunction.linear) {
        let lerpValue = easingFunction(interpolationValue);
        return Math.pp_lerp(from, to, lerpValue);
      };
      Math.pp_angleDistance = function(from, to) {
        return Math.pp_angleDistanceDegrees(from, to);
      };
      Math.pp_angleDistanceDegrees = function(from, to) {
        return Math.abs(Math.pp_angleDistanceSignedDegrees(from, to));
      };
      Math.pp_angleDistanceRadians = function(from, to) {
        return Math.abs(Math.pp_angleDistanceSignedRadians(from, to));
      };
      Math.pp_angleDistanceSigned = function(from, to) {
        return Math.pp_angleDistanceSignedDegrees(from, to);
      };
      Math.pp_angleDistanceSignedDegrees = function(from, to) {
        let clampedFrom = Math.pp_angleClampDegrees(from, true);
        let clampedTo = Math.pp_angleClampDegrees(to, true);
        let distance3 = clampedTo - clampedFrom;
        if (clampedTo - clampedFrom > 180) {
          distance3 = clampedTo - clampedFrom - 360;
        } else if (clampedTo - clampedFrom < -180) {
          distance3 = clampedTo - clampedFrom + 360;
        }
        return distance3;
      };
      Math.pp_angleDistanceSignedRadians = function(from, to) {
        return Math.pp_toRadians(Math.pp_angleDistanceSignedDegrees(Math.pp_toDegrees(from), Math.pp_toDegrees(to)));
      };
      Math.pp_angleClamp = function(angle2, usePositiveRange = false) {
        return Math.pp_angleClampDegrees(angle2, usePositiveRange);
      };
      Math.pp_angleClampDegrees = function(angle2, usePositiveRange = false) {
        let clampedAngle = angle2 % 360;
        if (clampedAngle < 0) {
          clampedAngle += 360;
        }
        if (!usePositiveRange) {
          if (clampedAngle > 180) {
            clampedAngle -= 360;
          }
        }
        return clampedAngle;
      };
      Math.pp_angleClampRadians = function(angle2, usePositiveRange = false) {
        return Math.pp_toRadians(Math.pp_angleClampDegrees(Math.pp_toDegrees(angle2), usePositiveRange));
      };
      Math.pp_isInsideAngleRange = function(angle2, start, end, useShortestAngle = false) {
        return Math.pp_isInsideAngleRangeDegrees(angle2, start, end, useShortestAngle);
      };
      Math.pp_isInsideAngleRangeDegrees = function(angle2, start, end, useShortestAngle = false) {
        let isInside = false;
        let anglePositive = Math.pp_angleClampDegrees(angle2, true);
        let startPositive = Math.pp_angleClampDegrees(start, true);
        let endPositive = Math.pp_angleClampDegrees(end, true);
        if (useShortestAngle) {
          if (Math.pp_angleDistanceSignedDegrees(startPositive, endPositive) < 0) {
            let temp = startPositive;
            startPositive = endPositive;
            endPositive = temp;
          }
        }
        if (startPositive < endPositive) {
          isInside = anglePositive >= startPositive && anglePositive <= endPositive;
        } else {
          isInside = anglePositive >= startPositive || anglePositive <= endPositive;
        }
        return isInside;
      };
      Math.pp_isInsideAngleRangeRadians = function(angle2, start, end, useShortestAngle = false) {
        return Math.pp_isInsideAngleRangeDegrees(Math.pp_toDegrees(angle2), Math.pp_toDegrees(start), Math.pp_toDegrees(end), useShortestAngle);
      };
      for (let key in Math) {
        let prefixes = ["pp_", "_pp_"];
        let found = false;
        for (let prefix of prefixes) {
          if (key.startsWith(prefix)) {
            found = true;
            break;
          }
        }
        if (found) {
          Object.defineProperty(Math, key, { enumerable: false });
        }
      }
    }
  });

  // js/pp/tool/cauldron/cauldron/tool_types.js
  var require_tool_types = __commonJS({
    "js/pp/tool/cauldron/cauldron/tool_types.js"() {
      PP.ToolHandedness = {
        NONE: null,
        LEFT: "left",
        RIGHT: "right"
      };
      PP.ToolInputSourceType = {
        NONE: null,
        GAMEPAD: 0,
        HAND: 1
      };
    }
  });

  // js/pp/tool/cauldron/components/tool_cursor.js
  var require_tool_cursor = __commonJS({
    "js/pp/tool/cauldron/components/tool_cursor.js"() {
      WL.registerComponent("pp-tool-cursor", {
        _myHandedness: { type: WL.Type.Enum, values: ["left", "right"], default: "left" },
        _myPulseOnHover: { type: WL.Type.Bool, default: false },
        _myShowFingerCursor: { type: WL.Type.Bool, default: false },
        _myCursorMesh: { type: WL.Type.Mesh, default: null },
        _myCursorMaterial: { type: WL.Type.Material, default: null }
      }, {
        init: function() {
          this._myHandednessString = ["left", "right"][this._myHandedness];
          if (this._myHandedness == 0) {
            this._myCursorPosition = [-0.01, -0.024, -0.05];
          } else {
            this._myCursorPosition = [0.01, -0.024, -0.05];
          }
          this._myCursorRotation = [-0.382, 0, 0, 0.924];
          this._myCursorRotation.quat_normalize(this._myCursorRotation);
          this._myCursorMeshScale = [25e-4, 25e-4, 25e-4];
          this._myCursorColor = [255 / 255, 255 / 255, 255 / 255, 1];
          this._myCursorTargetCollisionGroup = 7;
        },
        start: function() {
          this._myFixForwardObject = WL.scene.addObject(this.object);
          this._myFixForwardObject.pp_rotateObject([0, 180, 0]);
          this._myCursorObject = WL.scene.addObject(this._myFixForwardObject);
          this._myCursorObject.setTranslationLocal(this._myCursorPosition);
          this._myCursorObject.rotateObject(this._myCursorRotation);
          this._myCursorMeshObject = WL.scene.addObject(this._myCursorObject);
          this._myCursorMeshObject.scale(this._myCursorMeshScale);
          this._myCursorMeshComponent = this._myCursorMeshObject.addComponent("mesh");
          this._myCursorMeshComponent.mesh = this._myCursorMesh;
          this._myCursorMeshComponent.material = this._myCursorMaterial.clone();
          this._myCursorMeshComponent.material.color = this._myCursorColor;
          this._myCursorComponent = this._myCursorObject.addComponent("cursor", { "collisionGroup": this._myCursorTargetCollisionGroup, "handedness": this._myHandedness + 1, "cursorObject": this._myCursorMeshObject });
          this._myCursorComponent.rayCastMode = 0;
          if (this._myPulseOnHover) {
            this._myCursorComponent.globalTarget.addHoverFunction(this._pulseOnHover.bind(this));
          }
          this._myFingerCursorComponent = this.object.addComponent("pp-finger-cursor", {
            "_myHandedness": this._myHandedness,
            "_myEnableMultipleClicks": true,
            "_myCollisionGroup": this._myCursorTargetCollisionGroup,
            "_myCursorMesh": this._myShowFingerCursor ? this._myCursorMesh : null,
            "_myCursorMaterial": this._myCursorMeshComponent.material
          });
          this._myFingerCursorComponent.setActive(false);
        },
        update: function(dt) {
          let isUsingHand = this._isUsingHand();
          this._myFingerCursorComponent.setActive(isUsingHand);
          this._myCursorComponent.active = !isUsingHand;
          if (!this._myCursorComponent.active) {
            this._myCursorComponent._setCursorVisibility(false);
          }
        },
        _isUsingHand: function() {
          let isUsingHand = false;
          if (WL.xrSession && WL.xrSession.inputSources) {
            for (let i = 0; i < WL.xrSession.inputSources.length; i++) {
              let input = WL.xrSession.inputSources[i];
              if (input.hand && input.handedness == this._myHandednessString) {
                isUsingHand = true;
                break;
              }
            }
          }
          return isUsingHand;
        },
        _pulseOnHover: function(object) {
          let targetComponent = object.getComponent("cursor-target");
          if (targetComponent && !targetComponent.isSurface) {
            if (this._myHandedness == 0) {
              if (PP.myLeftGamepad) {
                PP.myLeftGamepad.pulse(0.4, 0);
              }
            } else {
              if (PP.myRightGamepad) {
                PP.myRightGamepad.pulse(0.4, 0);
              }
            }
          }
        }
      });
    }
  });

  // js/pp/tool/console_vr/console_vr_widget_setup.js
  var require_console_vr_widget_setup = __commonJS({
    "js/pp/tool/console_vr/console_vr_widget_setup.js"() {
      PP.ConsoleVRWidgetSetup = class ConsoleVRWidgetSetup {
        constructor() {
          this._initializeBuildSetup();
          this._initializeRuntimeSetup();
        }
        _initializeBuildSetup() {
          this.myBackgroundColor = [46 / 255, 46 / 255, 46 / 255, 1];
          this.myCursorTargetCollisionCollider = 2;
          this.myCursorTargetCollisionGroup = 7;
          this.myCursorTargetCollisionThickness = 1e-3;
          this.myDefaultTextColor = [255 / 255, 255 / 255, 255 / 255, 1];
          this.myTextAlignment = 2;
          this.myTextJustification = 2;
          this.myTextOutlineRange = [0.45, 0.45];
          this.myTextColor = this.myDefaultTextColor;
          this.myTextOutlineColor = this.myDefaultTextColor;
          this.myMessageTypeColors = [];
          this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.LOG] = this.myDefaultTextColor;
          this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.ERROR] = [255 / 255, 40 / 255, 40 / 255, 1];
          this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.WARN] = [250 / 255, 220 / 255, 40 / 255, 1];
          this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.INFO] = [60 / 255, 200 / 255, 255 / 255, 1];
          this.myMessagesPanelPosition = [0, 0.075, 0];
          this.myMessagesBackgroundScale = [0.34, 0.15, 1];
          {
            let xPaddingPercentage = 0.03;
            let yPaddingPercentage = xPaddingPercentage * this.myMessagesBackgroundScale[0] / this.myMessagesBackgroundScale[1] * 0.8;
            let xPosition = -this.myMessagesBackgroundScale[0] + this.myMessagesBackgroundScale[0] * xPaddingPercentage;
            let yPosition = this.myMessagesBackgroundScale[1] - this.myMessagesBackgroundScale[1] * yPaddingPercentage;
            this.myMessagesTextsPanelPosition = [xPosition, yPosition, 7e-3];
          }
          this.myMessagesTextsPanelScale = [0.1, 0.1, 0.1];
          this.myMessagesTextStartString = ".\n";
          this.myMessagesTextAlignment = 1;
          this.myMessagesTextJustification = 3;
          this.myMessagesTextOutlineRange = [0.45, 0.45];
          this.myMessagesTextPositions = [];
          this.myMessagesTextPositions[PP.ConsoleVRWidget.MessageType.LOG] = [0, 0, 1e-5];
          this.myMessagesTextPositions[PP.ConsoleVRWidget.MessageType.ERROR] = [0, 0, 0];
          this.myMessagesTextPositions[PP.ConsoleVRWidget.MessageType.WARN] = [0, 0, 0];
          this.myMessagesTextPositions[PP.ConsoleVRWidget.MessageType.INFO] = [0, 0, 0];
          this.myMessagesTextColors = [];
          this.myMessagesTextColors[PP.ConsoleVRWidget.MessageType.LOG] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.LOG];
          this.myMessagesTextColors[PP.ConsoleVRWidget.MessageType.ERROR] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.ERROR];
          this.myMessagesTextColors[PP.ConsoleVRWidget.MessageType.WARN] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.WARN];
          this.myMessagesTextColors[PP.ConsoleVRWidget.MessageType.INFO] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.INFO];
          this.myMessagesTextOutlineColors = [];
          this.myMessagesTextOutlineColors[PP.ConsoleVRWidget.MessageType.LOG] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.LOG];
          this.myMessagesTextOutlineColors[PP.ConsoleVRWidget.MessageType.ERROR] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.ERROR];
          this.myMessagesTextOutlineColors[PP.ConsoleVRWidget.MessageType.WARN] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.WARN];
          this.myMessagesTextOutlineColors[PP.ConsoleVRWidget.MessageType.INFO] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.INFO];
          this.myButtonsPanelPosition = [0, -0.11, 0.015];
          this.myButtonBackgroundScale = [0.04, 0.02, 1];
          this.myButtonTextPosition = [0, 0, 65e-4];
          this.myButtonTextScale = [0.18, 0.18, 0.18];
          this.myButtonTextAlignment = this.myTextAlignment;
          this.myButtonTextJustification = this.myTextJustification;
          this.myButtonTextOutlineRange = this.myTextOutlineRange;
          this.myButtonTextColor = this.myTextColor;
          this.myButtonTextOutlineColor = this.myTextOutlineColor;
          this.myButtonCursorTargetPosition = [0, 0, 0];
          this.myButtonCursorTargetPosition[2] = this.myButtonTextPosition[2];
          this.myButtonsCollisionCollider = this.myCursorTargetCollisionCollider;
          this.myButtonsCollisionGroup = this.myCursorTargetCollisionGroup;
          this.myButtonsCollisionExtents = this.myButtonBackgroundScale.slice(0);
          this.myButtonsCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myClearButtonTextLabel = "clear";
          this.myUpButtonTextLabel = "up";
          this.myDownButtonTextLabel = "down";
          this.myFilterButtonsTextColors = [];
          this.myFilterButtonsTextColors[PP.ConsoleVRWidget.MessageType.LOG] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.LOG];
          this.myFilterButtonsTextColors[PP.ConsoleVRWidget.MessageType.ERROR] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.ERROR];
          this.myFilterButtonsTextColors[PP.ConsoleVRWidget.MessageType.WARN] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.WARN];
          this.myFilterButtonsTextColors[PP.ConsoleVRWidget.MessageType.INFO] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.INFO];
          this.myFilterButtonsTextOutlineColors = [];
          this.myFilterButtonsTextOutlineColors[PP.ConsoleVRWidget.MessageType.LOG] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.LOG];
          this.myFilterButtonsTextOutlineColors[PP.ConsoleVRWidget.MessageType.ERROR] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.ERROR];
          this.myFilterButtonsTextOutlineColors[PP.ConsoleVRWidget.MessageType.WARN] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.WARN];
          this.myFilterButtonsTextOutlineColors[PP.ConsoleVRWidget.MessageType.INFO] = this.myMessageTypeColors[PP.ConsoleVRWidget.MessageType.INFO];
          this.myFilterButtonsTextLabel = [];
          this.myFilterButtonsTextLabel[PP.ConsoleVRWidget.MessageType.LOG] = "log";
          this.myFilterButtonsTextLabel[PP.ConsoleVRWidget.MessageType.ERROR] = "error";
          this.myFilterButtonsTextLabel[PP.ConsoleVRWidget.MessageType.WARN] = "warn";
          this.myFilterButtonsTextLabel[PP.ConsoleVRWidget.MessageType.INFO] = "info";
          {
            let numberOfButtons = 7;
            let buttonsHorizontalSpace = Math.max(0.68, this.myButtonBackgroundScale[0] * numberOfButtons);
            let numberOfSpacesBetweenButtons = 2 + 3 + 4 + 4 + 1 + 2;
            let spaceWidth = Math.max((buttonsHorizontalSpace - numberOfButtons * this.myButtonBackgroundScale[0] * 2) / numberOfSpacesBetweenButtons, 0);
            let halfButtonWidth = this.myButtonBackgroundScale[0];
            let initialPosition = -buttonsHorizontalSpace / 2;
            this.myFilterButtonsPositions = [];
            this.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType.LOG] = [initialPosition + spaceWidth * 2 + halfButtonWidth, 0, 0];
            this.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType.ERROR] = [this.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType.LOG][0] + halfButtonWidth + spaceWidth + halfButtonWidth, 0, 0];
            this.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType.WARN] = [this.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType.ERROR][0] + halfButtonWidth + spaceWidth + halfButtonWidth, 0, 0];
            this.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType.INFO] = [this.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType.WARN][0] + halfButtonWidth + spaceWidth + halfButtonWidth, 0, 0];
            this.myClearButtonPosition = [this.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType.INFO][0] + halfButtonWidth + spaceWidth * 4 + halfButtonWidth, 0, 0];
            this.myUpButtonPosition = [this.myClearButtonPosition[0] + halfButtonWidth + spaceWidth * 4 + halfButtonWidth, 0, 0];
            this.myDownButtonPosition = [this.myUpButtonPosition[0] + halfButtonWidth + spaceWidth + halfButtonWidth, 0, 0];
          }
          this.myNotifyIconBackgroundScale = [0.01, 0.01, 1];
          this.myNotifyIconPanelPositions = [];
          this.myNotifyIconPanelPositions[PP.ToolHandedness.NONE] = [0, 0, 0];
          this.myNotifyIconPanelPositions[PP.ToolHandedness.NONE][0] = -this.myMessagesBackgroundScale[0] + this.myNotifyIconBackgroundScale[0] + 0.01;
          this.myNotifyIconPanelPositions[PP.ToolHandedness.NONE][1] = -this.myMessagesBackgroundScale[1] + this.myNotifyIconBackgroundScale[1] + 0.01;
          this.myNotifyIconPanelPositions[PP.ToolHandedness.NONE][2] = this.myMessagesTextsPanelPosition[2] - 1e-5;
          this.myNotifyIconPanelPositions[PP.ToolHandedness.LEFT] = this.myNotifyIconPanelPositions[PP.ToolHandedness.NONE];
          this.myNotifyIconPanelPositions[PP.ToolHandedness.RIGHT] = this.myNotifyIconPanelPositions[PP.ToolHandedness.NONE];
          this.myNotifyIconCursorTargetPosition = [0, 0, 0];
          this.myNotifyIconCursorTargetPosition[2] = this.myButtonsPanelPosition[2] + this.myButtonTextPosition[2] - this.myMessagesTextsPanelPosition[2];
          this.myNotifyIconCollisionExtents = this.myNotifyIconBackgroundScale.slice(0);
          this.myNotifyIconCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myNotifyIconColor = [210 / 255, 210 / 255, 210 / 255, 1];
          this.myPointerCollisionCollider = this.myCursorTargetCollisionCollider;
          this.myPointerCollisionGroup = this.myCursorTargetCollisionGroup;
          {
            let spaceBetweenMessagesAndButtons = Math.abs(this.myMessagesPanelPosition[1] - this.myMessagesBackgroundScale[1] - (this.myButtonsPanelPosition[1] + this.myButtonBackgroundScale[1]));
            let pointerCollisionHalfHeight = this.myMessagesBackgroundScale[1] + this.myButtonBackgroundScale[1] + spaceBetweenMessagesAndButtons / 2;
            this.myPointerCollisionExtents = [this.myMessagesBackgroundScale[0], pointerCollisionHalfHeight, this.myCursorTargetCollisionThickness];
          }
          this.myPointerCursorTargetPosition = [0, 0, 0];
          this.myPointerCursorTargetPosition[1] = this.myMessagesPanelPosition[1] + this.myMessagesBackgroundScale[1] - this.myPointerCollisionExtents[1];
          this.myPointerCursorTargetPosition[2] = this.myButtonsPanelPosition[2] + this.myButtonTextPosition[2] - 1e-4;
        }
        _initializeRuntimeSetup() {
          this.myTabString = "    ";
          this.myAssertStartString = "Assertion failed:";
          this.myMaxCharactersPerLine = 100;
          this.myMaxLineSplits = 10;
          this.myMaxLines = 22;
          this.myMaxMessages = 2e3;
          this.myMaxMessagesDeletePad = 2e3;
          this.myLinesBetweenMessages = 1;
          this.myButtonHoverColor = [150 / 255, 150 / 255, 150 / 255, 1];
          this.myButtonDisabledTextColor = this.myBackgroundColor;
          this.myButtonDisabledBackgroundColor = [110 / 255, 110 / 255, 110 / 255, 1];
          this.myFilterButtonDisabledTextColor = this.myButtonDisabledTextColor;
          this.myFilterButtonDisabledBackgroundColor = this.myButtonDisabledBackgroundColor;
          this.myScrollDelay = 0.1;
          this.myScrollAmount = 1;
          this.myScrollThumbstickHandedness = PP.ToolHandedness.RIGHT;
          this.myScrollThumbstickDelay = 0.1;
          this.myScrollThumbstickMinThreshold = 0.2;
          this.myScrollThumbstickAmount = 3;
          this.myPulseDelay = 5;
          this.myPulseIntensity = 0.3;
          this.myPulseDuration = 0.085;
          this.myClearBrowserConsoleWhenClearPressed = true;
          this.myGamepadScrollOnlyOnHover = true;
        }
      };
    }
  });

  // js/pp/tool/console_vr/console_vr_widget_ui.js
  var require_console_vr_widget_ui = __commonJS({
    "js/pp/tool/console_vr/console_vr_widget_ui.js"() {
      PP.ConsoleVRWidgetUI = class ConsoleVRWidgetUI {
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
          this.myPivotObject.pp_setActiveHierarchy(visible);
        }
        _createSkeleton() {
          this.myPivotObject = WL.scene.addObject(this._myParentObject);
          this._createMessagesSkeleton();
          this._createButtonsSkeleton();
          this._createPointerSkeleton();
        }
        _createMessagesSkeleton() {
          this.myMessagesPanel = WL.scene.addObject(this.myPivotObject);
          this.myMessagesBackground = WL.scene.addObject(this.myMessagesPanel);
          this.myMessagesTextsPanel = WL.scene.addObject(this.myMessagesPanel);
          this.myMessagesTexts = [];
          for (let key in PP.ConsoleVRWidget.MessageType) {
            this.myMessagesTexts[PP.ConsoleVRWidget.MessageType[key]] = WL.scene.addObject(this.myMessagesTextsPanel);
          }
          this.myNotifyIconPanel = WL.scene.addObject(this.myMessagesPanel);
          this.myNotifyIconBackground = WL.scene.addObject(this.myNotifyIconPanel);
          this.myNotifyIconCursorTarget = WL.scene.addObject(this.myNotifyIconPanel);
        }
        _createButtonsSkeleton() {
          this.myButtonsPanel = WL.scene.addObject(this.myPivotObject);
          this.myFilterButtonsPanels = [];
          this.myFilterButtonsBackgrounds = [];
          this.myFilterButtonsTexts = [];
          this.myFilterButtonsCursorTargets = [];
          for (let key in PP.ConsoleVRWidget.MessageType) {
            this.myFilterButtonsPanels[PP.ConsoleVRWidget.MessageType[key]] = WL.scene.addObject(this.myButtonsPanel);
            this.myFilterButtonsBackgrounds[PP.ConsoleVRWidget.MessageType[key]] = WL.scene.addObject(this.myFilterButtonsPanels[PP.ConsoleVRWidget.MessageType[key]]);
            this.myFilterButtonsTexts[PP.ConsoleVRWidget.MessageType[key]] = WL.scene.addObject(this.myFilterButtonsPanels[PP.ConsoleVRWidget.MessageType[key]]);
            this.myFilterButtonsCursorTargets[PP.ConsoleVRWidget.MessageType[key]] = WL.scene.addObject(this.myFilterButtonsPanels[PP.ConsoleVRWidget.MessageType[key]]);
          }
          this.myClearButtonPanel = WL.scene.addObject(this.myButtonsPanel);
          this.myClearButtonBackground = WL.scene.addObject(this.myClearButtonPanel);
          this.myClearButtonText = WL.scene.addObject(this.myClearButtonPanel);
          this.myClearButtonCursorTarget = WL.scene.addObject(this.myClearButtonPanel);
          this.myUpButtonPanel = WL.scene.addObject(this.myButtonsPanel);
          this.myUpButtonBackground = WL.scene.addObject(this.myUpButtonPanel);
          this.myUpButtonText = WL.scene.addObject(this.myUpButtonPanel);
          this.myUpButtonCursorTarget = WL.scene.addObject(this.myUpButtonPanel);
          this.myDownButtonPanel = WL.scene.addObject(this.myButtonsPanel);
          this.myDownButtonBackground = WL.scene.addObject(this.myDownButtonPanel);
          this.myDownButtonText = WL.scene.addObject(this.myDownButtonPanel);
          this.myDownButtonCursorTarget = WL.scene.addObject(this.myDownButtonPanel);
        }
        _createPointerSkeleton() {
          this.myPointerCursorTarget = WL.scene.addObject(this.myPivotObject);
        }
        _setTransforms() {
          this.myPivotObject.setDirty();
          this._setMessagesTransforms();
          this._setButtonsTransforms();
          this._setPointerTransform();
        }
        _setMessagesTransforms() {
          this.myMessagesPanel.setTranslationLocal(this._mySetup.myMessagesPanelPosition);
          this.myMessagesBackground.scale(this._mySetup.myMessagesBackgroundScale);
          this.myMessagesTextsPanel.setTranslationLocal(this._mySetup.myMessagesTextsPanelPosition);
          this.myMessagesTextsPanel.scale(this._mySetup.myMessagesTextsPanelScale);
          for (let key in PP.ConsoleVRWidget.MessageType) {
            this.myMessagesTexts[PP.ConsoleVRWidget.MessageType[key]].setTranslationLocal(this._mySetup.myMessagesTextPositions[PP.ConsoleVRWidget.MessageType[key]]);
          }
          this.myNotifyIconPanel.setTranslationLocal(this._mySetup.myNotifyIconPanelPositions[this._myAdditionalSetup.myHandedness]);
          this.myNotifyIconBackground.scale(this._mySetup.myNotifyIconBackgroundScale);
          this.myNotifyIconCursorTarget.setTranslationLocal(this._mySetup.myNotifyIconCursorTargetPosition);
        }
        _setButtonsTransforms() {
          this.myButtonsPanel.setTranslationLocal(this._mySetup.myButtonsPanelPosition);
          for (let key in PP.ConsoleVRWidget.MessageType) {
            this.myFilterButtonsPanels[PP.ConsoleVRWidget.MessageType[key]].setTranslationLocal(this._mySetup.myFilterButtonsPositions[PP.ConsoleVRWidget.MessageType[key]]);
            this.myFilterButtonsBackgrounds[PP.ConsoleVRWidget.MessageType[key]].scale(this._mySetup.myButtonBackgroundScale);
            this.myFilterButtonsTexts[PP.ConsoleVRWidget.MessageType[key]].setTranslationLocal(this._mySetup.myButtonTextPosition);
            this.myFilterButtonsTexts[PP.ConsoleVRWidget.MessageType[key]].scale(this._mySetup.myButtonTextScale);
            this.myFilterButtonsCursorTargets[PP.ConsoleVRWidget.MessageType[key]].setTranslationLocal(this._mySetup.myButtonCursorTargetPosition);
          }
          {
            this.myClearButtonPanel.setTranslationLocal(this._mySetup.myClearButtonPosition);
            this.myClearButtonBackground.scale(this._mySetup.myButtonBackgroundScale);
            this.myClearButtonText.setTranslationLocal(this._mySetup.myButtonTextPosition);
            this.myClearButtonText.scale(this._mySetup.myButtonTextScale);
            this.myClearButtonCursorTarget.setTranslationLocal(this._mySetup.myButtonCursorTargetPosition);
          }
          {
            this.myUpButtonPanel.setTranslationLocal(this._mySetup.myUpButtonPosition);
            this.myUpButtonBackground.scale(this._mySetup.myButtonBackgroundScale);
            this.myUpButtonText.setTranslationLocal(this._mySetup.myButtonTextPosition);
            this.myUpButtonText.scale(this._mySetup.myButtonTextScale);
            this.myUpButtonCursorTarget.setTranslationLocal(this._mySetup.myButtonCursorTargetPosition);
          }
          {
            this.myDownButtonPanel.setTranslationLocal(this._mySetup.myDownButtonPosition);
            this.myDownButtonBackground.scale(this._mySetup.myButtonBackgroundScale);
            this.myDownButtonText.setTranslationLocal(this._mySetup.myButtonTextPosition);
            this.myDownButtonText.scale(this._mySetup.myButtonTextScale);
            this.myDownButtonCursorTarget.setTranslationLocal(this._mySetup.myButtonCursorTargetPosition);
          }
        }
        _setPointerTransform() {
          this.myPointerCursorTarget.setTranslationLocal(this._mySetup.myPointerCursorTargetPosition);
        }
        _addComponents() {
          this._addMessagesComponents();
          this._addButtonsComponents();
          this._addPointerComponents();
        }
        _addMessagesComponents() {
          let messagesBackgroundMeshComp = this.myMessagesBackground.addComponent("mesh");
          messagesBackgroundMeshComp.mesh = this._myPlaneMesh;
          messagesBackgroundMeshComp.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          messagesBackgroundMeshComp.material.color = this._mySetup.myBackgroundColor;
          this.myMessagesTextComponents = [];
          for (let key in PP.ConsoleVRWidget.MessageType) {
            let textComp = this.myMessagesTexts[PP.ConsoleVRWidget.MessageType[key]].addComponent("text");
            textComp.alignment = this._mySetup.myMessagesTextAlignment;
            textComp.justification = this._mySetup.myMessagesTextJustification;
            textComp.material = this._myAdditionalSetup.myTextMaterial.clone();
            textComp.material.color = this._mySetup.myMessagesTextColors[PP.ConsoleVRWidget.MessageType[key]];
            textComp.material.outlineColor = this._mySetup.myMessagesTextOutlineColors[PP.ConsoleVRWidget.MessageType[key]];
            textComp.material.outlineRange = this._mySetup.myMessagesTextOutlineRange;
            textComp.text = this._mySetup.myMessagesTextStartString;
            this.myMessagesTextComponents[PP.ConsoleVRWidget.MessageType[key]] = textComp;
          }
          this.myNotifyIconBackgroundComponent = this.myNotifyIconBackground.addComponent("mesh");
          this.myNotifyIconBackgroundComponent.mesh = this._myPlaneMesh;
          this.myNotifyIconBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myNotifyIconBackgroundComponent.material.color = this._mySetup.myNotifyIconColor;
          this.myNotifyIconCursorTargetComponent = this.myNotifyIconCursorTarget.addComponent("cursor-target");
          this.myNotifyIconCollisionComponent = this.myNotifyIconCursorTarget.addComponent("collision");
          this.myNotifyIconCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myNotifyIconCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myNotifyIconCollisionComponent.extents = this._mySetup.myNotifyIconCollisionExtents;
        }
        _addButtonsComponents() {
          this.myFilterButtonsBackgroundComponents = [];
          this.myFilterButtonsTextComponents = [];
          this.myFilterButtonsCursorTargetComponents = [];
          this.myFilterButtonsCollisionComponents = [];
          for (let key in PP.ConsoleVRWidget.MessageType) {
            let buttonBackgroundMeshComp = this.myFilterButtonsBackgrounds[PP.ConsoleVRWidget.MessageType[key]].addComponent("mesh");
            buttonBackgroundMeshComp.mesh = this._myPlaneMesh;
            buttonBackgroundMeshComp.material = this._myAdditionalSetup.myPlaneMaterial.clone();
            buttonBackgroundMeshComp.material.color = this._mySetup.myBackgroundColor;
            let buttonTextComp = this.myFilterButtonsTexts[PP.ConsoleVRWidget.MessageType[key]].addComponent("text");
            this._setupButtonTextComponent(buttonTextComp);
            buttonTextComp.material.color = this._mySetup.myFilterButtonsTextColors[PP.ConsoleVRWidget.MessageType[key]];
            buttonTextComp.material.outlineColor = this._mySetup.myFilterButtonsTextOutlineColors[PP.ConsoleVRWidget.MessageType[key]];
            buttonTextComp.text = this._mySetup.myFilterButtonsTextLabel[PP.ConsoleVRWidget.MessageType[key]];
            let buttonCursorTargetComp = this.myFilterButtonsCursorTargets[PP.ConsoleVRWidget.MessageType[key]].addComponent("cursor-target");
            let buttonCollisionComp = this.myFilterButtonsCursorTargets[PP.ConsoleVRWidget.MessageType[key]].addComponent("collision");
            buttonCollisionComp.collider = this._mySetup.myButtonsCollisionCollider;
            buttonCollisionComp.group = 1 << this._mySetup.myButtonsCollisionGroup;
            buttonCollisionComp.extents = this._mySetup.myButtonsCollisionExtents;
            this.myFilterButtonsBackgroundComponents[PP.ConsoleVRWidget.MessageType[key]] = buttonBackgroundMeshComp;
            this.myFilterButtonsTextComponents[PP.ConsoleVRWidget.MessageType[key]] = buttonTextComp;
            this.myFilterButtonsCursorTargetComponents[PP.ConsoleVRWidget.MessageType[key]] = buttonCursorTargetComp;
            this.myFilterButtonsCollisionComponents[PP.ConsoleVRWidget.MessageType[key]] = buttonCollisionComp;
          }
          {
            let buttonBackgroundMeshComp = this.myClearButtonBackground.addComponent("mesh");
            buttonBackgroundMeshComp.mesh = this._myPlaneMesh;
            buttonBackgroundMeshComp.material = this._myAdditionalSetup.myPlaneMaterial.clone();
            buttonBackgroundMeshComp.material.color = this._mySetup.myBackgroundColor;
            let buttonTextComp = this.myClearButtonText.addComponent("text");
            this._setupButtonTextComponent(buttonTextComp);
            buttonTextComp.text = this._mySetup.myClearButtonTextLabel;
            let buttonCursorTargetComp = this.myClearButtonCursorTarget.addComponent("cursor-target");
            let buttonCollisionComp = this.myClearButtonCursorTarget.addComponent("collision");
            buttonCollisionComp.collider = this._mySetup.myButtonsCollisionCollider;
            buttonCollisionComp.group = 1 << this._mySetup.myButtonsCollisionGroup;
            buttonCollisionComp.extents = this._mySetup.myButtonsCollisionExtents;
            this.myClearButtonBackgroundComponent = buttonBackgroundMeshComp;
            this.myClearButtonTextComponent = buttonTextComp;
            this.myClearButtonCursorTargetComponent = buttonCursorTargetComp;
            this.myClearButtonCollisionComponent = buttonCollisionComp;
          }
          {
            let buttonBackgroundMeshComp = this.myUpButtonBackground.addComponent("mesh");
            buttonBackgroundMeshComp.mesh = this._myPlaneMesh;
            buttonBackgroundMeshComp.material = this._myAdditionalSetup.myPlaneMaterial.clone();
            buttonBackgroundMeshComp.material.color = this._mySetup.myBackgroundColor;
            let buttonTextComp = this.myUpButtonText.addComponent("text");
            this._setupButtonTextComponent(buttonTextComp);
            buttonTextComp.text = this._mySetup.myUpButtonTextLabel;
            let buttonCursorTargetComp = this.myUpButtonCursorTarget.addComponent("cursor-target");
            let buttonCollisionComp = this.myUpButtonCursorTarget.addComponent("collision");
            buttonCollisionComp.collider = this._mySetup.myButtonsCollisionCollider;
            buttonCollisionComp.group = 1 << this._mySetup.myButtonsCollisionGroup;
            buttonCollisionComp.extents = this._mySetup.myButtonsCollisionExtents;
            this.myUpButtonBackgroundComponent = buttonBackgroundMeshComp;
            this.myUpButtonTextComponent = buttonTextComp;
            this.myUpButtonCursorTargetComponent = buttonCursorTargetComp;
            this.myUpButtonCollisionComponent = buttonCollisionComp;
          }
          {
            let buttonBackgroundMeshComp = this.myDownButtonBackground.addComponent("mesh");
            buttonBackgroundMeshComp.mesh = this._myPlaneMesh;
            buttonBackgroundMeshComp.material = this._myAdditionalSetup.myPlaneMaterial.clone();
            buttonBackgroundMeshComp.material.color = this._mySetup.myBackgroundColor;
            let buttonTextComp = this.myDownButtonText.addComponent("text");
            this._setupButtonTextComponent(buttonTextComp);
            buttonTextComp.text = this._mySetup.myDownButtonTextLabel;
            let buttonCursorTargetComp = this.myDownButtonCursorTarget.addComponent("cursor-target");
            let buttonCollisionComp = this.myDownButtonCursorTarget.addComponent("collision");
            buttonCollisionComp.collider = this._mySetup.myButtonsCollisionCollider;
            buttonCollisionComp.group = 1 << this._mySetup.myButtonsCollisionGroup;
            buttonCollisionComp.extents = this._mySetup.myButtonsCollisionExtents;
            this.myDownButtonBackgroundComponent = buttonBackgroundMeshComp;
            this.myDownButtonTextComponent = buttonTextComp;
            this.myDownButtonCursorTargetComponent = buttonCursorTargetComp;
            this.myDownButtonCollisionComponent = buttonCollisionComp;
          }
        }
        _addPointerComponents() {
          this.myPointerCursorTargetComponent = this.myPointerCursorTarget.addComponent("cursor-target");
          this.myPointerCursorTargetComponent.isSurface = true;
          let collisionComp = this.myPointerCursorTarget.addComponent("collision");
          collisionComp.collider = this._mySetup.myPointerCollisionCollider;
          collisionComp.group = 1 << this._mySetup.myPointerCollisionGroup;
          collisionComp.extents = this._mySetup.myPointerCollisionExtents;
          this.myPointerCollisionComponent = collisionComp;
        }
        _setupButtonTextComponent(textComponent) {
          textComponent.alignment = this._mySetup.myTextAlignment;
          textComponent.justification = this._mySetup.myTextJustification;
          textComponent.material = this._myAdditionalSetup.myTextMaterial.clone();
          textComponent.material.outlineRange = this._mySetup.myTextOutlineRange;
          textComponent.material.color = this._mySetup.myTextColor;
          textComponent.material.outlineColor = this._mySetup.myTextOutlineColor;
          textComponent.text = "";
        }
      };
    }
  });

  // js/pp/tool/console_vr/console_vr_widget.js
  var require_console_vr_widget = __commonJS({
    "js/pp/tool/console_vr/console_vr_widget.js"() {
      PP.ConsoleVRWidget = class ConsoleVRWidget {
        constructor() {
          this._myWidgetFrame = new PP.WidgetFrame("C", 0);
          this._myWidgetFrame.registerWidgetVisibleChangedEventListener(this, this._widgetVisibleChanged.bind(this));
          this._mySetup = new PP.ConsoleVRWidgetSetup();
          this._myAdditionalSetup = null;
          this._myUI = new PP.ConsoleVRWidgetUI();
          this._myMessages = [];
          this._myOldBrowserConsole = [];
          this._myOldConsoleVR = [];
          this._myTypeFilters = [];
          for (let key in PP.ConsoleVRWidget.MessageType) {
            this._myTypeFilters[PP.ConsoleVRWidget.MessageType[key]] = false;
          }
          this._myScrollUp = false;
          this._myScrollDown = false;
          this._myScrollOffset = 0;
          this._myScrollTimer = 0;
          this._myScrollThumbstickTimer = 0;
          this._myPulseTimer = 0;
          this._myGamepadScrollActive = true;
          if (this._mySetup.myGamepadScrollOnlyOnHover) {
            this._myGamepadScrollActive = false;
          }
        }
        start(parentObject, additionalSetup) {
          this._myLeftGamepad = PP.myLeftGamepad;
          this._myRightGamepad = PP.myRightGamepad;
          this._myAdditionalSetup = additionalSetup;
          this._myWidgetFrame.start(parentObject, additionalSetup);
          this._myUI.build(this._myWidgetFrame.getWidgetObject(), this._mySetup, additionalSetup);
          this._myUI.setVisible(this._myWidgetFrame.myIsWidgetVisible);
          this._setNotifyIconActive(false);
          this._addListeners();
          this._overrideConsolesFunctions();
        }
        _overrideConsolesFunctions() {
          this._myOldBrowserConsole[PP.ConsoleVRWidget.ConsoleFunction.LOG] = console.log;
          this._myOldBrowserConsole[PP.ConsoleVRWidget.ConsoleFunction.ERROR] = console.error;
          this._myOldBrowserConsole[PP.ConsoleVRWidget.ConsoleFunction.WARN] = console.warn;
          this._myOldBrowserConsole[PP.ConsoleVRWidget.ConsoleFunction.INFO] = console.info;
          this._myOldBrowserConsole[PP.ConsoleVRWidget.ConsoleFunction.DEBUG] = console.debug;
          this._myOldBrowserConsole[PP.ConsoleVRWidget.ConsoleFunction.ASSERT] = console.assert;
          this._myOldBrowserConsoleClear = console.clear;
          if (this._myAdditionalSetup.myOverrideBrowserConsole) {
            console.log = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.LOG, PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE);
            console.error = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.ERROR, PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE);
            console.warn = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.WARN, PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE);
            console.info = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.INFO, PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE);
            console.debug = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.DEBUG, PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE);
            console.assert = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.ASSERT, PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE);
            console.clear = this._clearConsole.bind(this, true, PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE);
            window.addEventListener("error", function(errorEvent) {
              this._consolePrint(PP.ConsoleVRWidget.ConsoleFunction.ERROR, PP.ConsoleVRWidget.Sender.WINDOW, "Uncaught", errorEvent.error.stack);
            }.bind(this));
            window.addEventListener("unhandledrejection", function(errorEvent) {
              this._consolePrint(PP.ConsoleVRWidget.ConsoleFunction.ERROR, PP.ConsoleVRWidget.Sender.WINDOW, "Uncaught (in promise)", errorEvent.reason);
            }.bind(this));
          }
          this._myOldConsoleVR[PP.ConsoleVRWidget.ConsoleFunction.LOG] = PP.ConsoleVR.log;
          this._myOldConsoleVR[PP.ConsoleVRWidget.ConsoleFunction.ERROR] = PP.ConsoleVR.error;
          this._myOldConsoleVR[PP.ConsoleVRWidget.ConsoleFunction.WARN] = PP.ConsoleVR.warn;
          this._myOldConsoleVR[PP.ConsoleVRWidget.ConsoleFunction.INFO] = PP.ConsoleVR.info;
          this._myOldConsoleVR[PP.ConsoleVRWidget.ConsoleFunction.DEBUG] = PP.ConsoleVR.debug;
          this._myOldConsoleVR[PP.ConsoleVRWidget.ConsoleFunction.ASSERT] = PP.ConsoleVR.assert;
          this._myOldConsoleVRClear = PP.ConsoleVR.clear;
          PP.ConsoleVR.log = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.LOG, PP.ConsoleVRWidget.Sender.CONSOLE_VR);
          PP.ConsoleVR.error = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.ERROR, PP.ConsoleVRWidget.Sender.CONSOLE_VR);
          PP.ConsoleVR.warn = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.WARN, PP.ConsoleVRWidget.Sender.CONSOLE_VR);
          PP.ConsoleVR.info = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.INFO, PP.ConsoleVRWidget.Sender.CONSOLE_VR);
          PP.ConsoleVR.debug = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.DEBUG, PP.ConsoleVRWidget.Sender.CONSOLE_VR);
          PP.ConsoleVR.assert = this._consolePrint.bind(this, PP.ConsoleVRWidget.ConsoleFunction.ASSERT, PP.ConsoleVRWidget.Sender.CONSOLE_VR);
          PP.ConsoleVR.clear = this._clearConsole.bind(this, true, PP.ConsoleVRWidget.Sender.CONSOLE_VR);
        }
        update(dt) {
          this._myWidgetFrame.update(dt);
          if (this._myWidgetFrame.myIsWidgetVisible) {
            this._updateScroll(dt);
          }
          this._updateGamepadsExtraActions(dt);
        }
        _updateText(messageType) {
          let consoleText = "";
          if (!this._myTypeFilters[messageType]) {
            let linesCount = 0;
            let i = this._myMessages.length - 1;
            let scrollLinesToSkip = Math.round(this._myScrollOffset);
            while (i >= 0 && linesCount < this._mySetup.myMaxLines) {
              let message = this._myMessages[i];
              if (this._myTypeFilters[message.myType]) {
                i -= 1;
                continue;
              }
              let messageLines = message.myLines.length;
              let linesToSkip = 0;
              if (scrollLinesToSkip > 0) {
                let additionalEmptyLines = 0;
                if (i != this._myMessages.length - 1) {
                  additionalEmptyLines = this._mySetup.myLinesBetweenMessages;
                }
                if (scrollLinesToSkip >= messageLines + additionalEmptyLines) {
                  scrollLinesToSkip -= messageLines + additionalEmptyLines;
                  linesToSkip = messageLines + additionalEmptyLines;
                } else {
                  linesToSkip = scrollLinesToSkip;
                  scrollLinesToSkip = 0;
                }
              }
              if (i != this._myMessages.length - 1) {
                let emptyLinesToSkip = this._mySetup.myLinesBetweenMessages - Math.max(this._mySetup.myLinesBetweenMessages - linesToSkip, 0);
                let emptyLinesToShow = this._mySetup.myLinesBetweenMessages - emptyLinesToSkip;
                if (linesCount + emptyLinesToShow > this._mySetup.myMaxLines) {
                  emptyLinesToShow = this._myMaxLines - linesCount;
                }
                for (let j = 0; j < emptyLinesToShow; j++) {
                  consoleText = "\n".concat(consoleText);
                }
                linesCount += emptyLinesToShow;
                linesToSkip -= emptyLinesToSkip;
              }
              let linesToShow = messageLines - linesToSkip;
              if (linesCount + linesToShow > this._mySetup.myMaxLines) {
                linesToShow = this._mySetup.myMaxLines - linesCount;
              }
              if (linesToShow > 0) {
                if (message.myType == messageType) {
                  let linesToPrint = message.myLines.slice(messageLines - linesToShow - linesToSkip, messageLines - linesToSkip);
                  let text = linesToPrint.join("\n");
                  consoleText = text.concat("\n").concat(consoleText);
                  linesCount += linesToShow;
                } else {
                  for (let j = 0; j < linesToShow; j++) {
                    consoleText = "\n".concat(consoleText);
                  }
                  linesCount += linesToShow;
                }
              }
              i -= 1;
            }
          }
          consoleText = this._mySetup.myMessagesTextStartString.concat(consoleText);
          this._myUI.myMessagesTextComponents[messageType].text = consoleText;
        }
        _consolePrint(consoleFunction, sender, ...args) {
          if (consoleFunction != PP.ConsoleVRWidget.ConsoleFunction.ASSERT || args.length > 0 && !args[0]) {
            let message = this._argsToMessage(consoleFunction, ...args);
            this._addMessage(message);
            if (this._myMessages.length >= this._mySetup.myMaxMessages + this._mySetup.myMaxMessagesDeletePad) {
              this._myMessages = this._myMessages.slice(this._myMessages.length - this._mySetup.myMaxMessages);
              this._clampScrollOffset();
            }
            this._updateAllTexts();
            this._pulseGamepad();
          }
          switch (sender) {
            case PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE:
              this._myOldBrowserConsole[consoleFunction].apply(console, args);
              break;
            case PP.ConsoleVRWidget.Sender.CONSOLE_VR:
              this._myOldConsoleVR[consoleFunction].apply(PP.ConsoleVR, args);
              break;
            default:
              break;
          }
        }
        _argsToMessage(consoleFunction, ...args) {
          if (consoleFunction == PP.ConsoleVRWidget.ConsoleFunction.ASSERT) {
            args = args.slice(1);
            args.splice(0, 0, this._mySetup.myAssertStartString);
          }
          let messageType = this._consoleFunctionToMessageType(consoleFunction);
          let formattedText = this._formatArgs(...args);
          let lines = this._splitLongLines(formattedText);
          if (messageType == PP.ConsoleVRWidget.MessageType.DEBUG) {
            messageType = PP.ConsoleVRWidget.MessageType.LOG;
          } else if (messageType == PP.ConsoleVRWidget.MessageType.EXCEPTION || messageType == PP.ConsoleVRWidget.MessageType.ASSERT) {
            messageType = PP.ConsoleVRWidget.MessageType.ERROR;
          }
          let message = new PP.ConsoleVRWidget.Message(messageType, lines);
          return message;
        }
        _consoleFunctionToMessageType(consoleFunction) {
          let messageType = PP.ConsoleVRWidget.MessageType.LOG;
          if (consoleFunction < PP.ConsoleVRWidget.ConsoleFunction.DEBUG) {
            messageType = consoleFunction;
          } else if (consoleFunction == PP.ConsoleVRWidget.ConsoleFunction.DEBUG) {
            messageType = PP.ConsoleVRWidget.MessageType.LOG;
          } else {
            messageType = PP.ConsoleVRWidget.MessageType.ERROR;
          }
          return messageType;
        }
        _formatArgs(...args) {
          let stringifiedArgs = [];
          for (let i = 0; i < args.length; i++) {
            stringifiedArgs.push(this._stringifyItem(args[i]));
          }
          let formattedString = stringifiedArgs.join(" ");
          return formattedString;
        }
        _stringifyItem(item) {
          if (typeof item === "object") {
            let stringifiedItem = null;
            let linesBetweenItems = this._isArray(item) ? 0 : 2;
            try {
              if (!this._isFloat32Array(item)) {
                stringifiedItem = JSON.stringify(item, null, linesBetweenItems);
              } else {
                let arrayCopy = [];
                for (let i = 0; i < item.length; i++) {
                  arrayCopy[i] = item[i];
                }
                stringifiedItem = JSON.stringify(arrayCopy, null, linesBetweenItems);
              }
            } catch (error) {
              let cache = /* @__PURE__ */ new WeakSet();
              stringifiedItem = JSON.stringify(item, function(key, value) {
                if (typeof value === "object" && value !== null) {
                  if (cache.has(value)) {
                    return "<stringify error: object already stringified>";
                  }
                  cache.add(value);
                }
                return value;
              }, linesBetweenItems);
            }
            if (this._isArray(item)) {
              stringifiedItem = stringifiedItem.split(",").join(", ");
            }
            return stringifiedItem;
          }
          return item;
        }
        _splitLongLines(messageText) {
          let linesToSplit = messageText.split("\n");
          let lines = [];
          for (let i = 0; i < linesToSplit.length; i++) {
            let lineToSplit = linesToSplit[i];
            if (lineToSplit.length > this._mySetup.myMaxCharactersPerLine) {
              let spacesAtStart = this._getSpacesAtStart(lineToSplit);
              let spaceToAdd = this._mySetup.myTabString.concat(spacesAtStart);
              let lineSplits = 0;
              while (lineToSplit.length > this._mySetup.myMaxCharactersPerLine && lineSplits < this._mySetup.myMaxLineSplits) {
                let firstSub = lineToSplit.substr(0, this._mySetup.myMaxCharactersPerLine - 1);
                let secondSub = lineToSplit.substr(this._mySetup.myMaxCharactersPerLine - 1);
                secondSub = spaceToAdd.concat(secondSub);
                lines.push(firstSub);
                lineToSplit = secondSub;
                lineSplits++;
              }
              lines.push(lineToSplit);
            } else {
              lines.push(lineToSplit);
            }
          }
          return lines;
        }
        _getSpacesAtStart(text) {
          let spaces = "";
          let i = 0;
          while (i < text.length && text[i] == " ") {
            spaces = spaces.concat(" ");
            i++;
          }
          return spaces;
        }
        _addMessage(message) {
          let hasSameInfoAsPrev = false;
          if (this._myMessages.length > 0) {
            let lastMessage = this._myMessages[this._myMessages.length - 1];
            if (lastMessage.hasSameInfo(message)) {
              lastMessage.increaseCount();
              hasSameInfoAsPrev = true;
            }
          }
          if (!hasSameInfoAsPrev) {
            this._myMessages.push(message);
          }
          this._adjustScrollOffsetAfterMessageAdded(message, hasSameInfoAsPrev);
          this._updateNotifyIcon(message);
        }
        _adjustScrollOffsetAfterMessageAdded(message, hasSameInfoAsPrev) {
          if (!hasSameInfoAsPrev && !this._myTypeFilters[message.myType] && this._myScrollOffset > 0) {
            this._myScrollOffset += message.myLines.length + this._mySetup.myLinesBetweenMessages;
          }
        }
        _updateAllTexts() {
          if (this._myWidgetFrame.myIsWidgetVisible) {
            for (let key in PP.ConsoleVRWidget.MessageType) {
              this._updateText(PP.ConsoleVRWidget.MessageType[key]);
            }
          }
        }
        _updateNotifyIcon(message) {
          if (!this._myTypeFilters[message.myType] && this._myScrollOffset > 0) {
            this._setNotifyIconActive(true);
          }
        }
        _updateScroll(dt) {
          if (this._myScrollUp) {
            this._myScrollTimer += dt;
            while (this._myScrollTimer > this._mySetup.myScrollDelay) {
              this._myScrollTimer -= this._mySetup.myScrollDelay;
              this._myScrollOffset += this._mySetup.myScrollAmount;
            }
          } else if (this._myScrollDown) {
            this._myScrollTimer += dt;
            while (this._myScrollTimer > this._mySetup.myScrollDelay) {
              this._myScrollTimer -= this._mySetup.myScrollDelay;
              this._myScrollOffset -= this._mySetup.myScrollAmount;
            }
          }
          this._clampScrollOffset();
          if (this._myScrollUp || this._myScrollDown) {
            this._updateAllTexts();
          }
          if (this._myScrollOffset == 0) {
            this._setNotifyIconActive(false);
          }
        }
        _clampScrollOffset() {
          let maxScroll = this._getMaxScrollOffset();
          this._myScrollOffset = Math.min(Math.max(this._myScrollOffset, 0), maxScroll);
        }
        _getMaxScrollOffset() {
          return Math.max(this._getLinesCount() - this._mySetup.myMaxLines, 0);
        }
        _getLinesCount() {
          let linesCount = 0;
          for (let message of this._myMessages) {
            if (!this._myTypeFilters[message.myType]) {
              linesCount += message.myLines.length + this._mySetup.myLinesBetweenMessages;
            }
          }
          linesCount -= this._mySetup.myLinesBetweenMessages;
          linesCount = Math.max(linesCount, 0);
          return linesCount;
        }
        _addListeners() {
          let ui = this._myUI;
          for (let key in PP.ConsoleVRWidget.MessageType) {
            let cursorTarget = ui.myFilterButtonsCursorTargetComponents[PP.ConsoleVRWidget.MessageType[key]];
            let backgroundMaterial = ui.myFilterButtonsBackgroundComponents[PP.ConsoleVRWidget.MessageType[key]].material;
            let textMaterial = ui.myFilterButtonsTextComponents[PP.ConsoleVRWidget.MessageType[key]].material;
            cursorTarget.addTripleClickFunction(this._resetFilters.bind(this, PP.ConsoleVRWidget.MessageType[key]));
            cursorTarget.addDoubleClickFunction(this._filterAllButOne.bind(this, PP.ConsoleVRWidget.MessageType[key], textMaterial));
            cursorTarget.addClickFunction(this._toggleFilter.bind(this, PP.ConsoleVRWidget.MessageType[key], textMaterial));
            cursorTarget.addHoverFunction(this._filterHover.bind(this, PP.ConsoleVRWidget.MessageType[key], backgroundMaterial));
            cursorTarget.addUnHoverFunction(this._filterUnHover.bind(this, PP.ConsoleVRWidget.MessageType[key], backgroundMaterial));
          }
          {
            let cursorTarget = ui.myClearButtonCursorTargetComponent;
            let backgroundMaterial = ui.myClearButtonBackgroundComponent.material;
            cursorTarget.addClickFunction(this._clearConsole.bind(this));
            cursorTarget.addHoverFunction(this._genericHover.bind(this, backgroundMaterial));
            cursorTarget.addUnHoverFunction(this._genericUnHover.bind(this, backgroundMaterial));
          }
          {
            let cursorTarget = ui.myUpButtonCursorTargetComponent;
            let backgroundMaterial = ui.myUpButtonBackgroundComponent.material;
            cursorTarget.addDoubleClickFunction(this._instantScrollUp.bind(this, true));
            cursorTarget.addDownFunction(this._setScrollUp.bind(this, true));
            cursorTarget.addUpFunction(this._setScrollUp.bind(this, false));
            cursorTarget.addUnHoverFunction(this._setScrollUp.bind(this, false));
            cursorTarget.addHoverFunction(this._genericHover.bind(this, backgroundMaterial));
            cursorTarget.addUnHoverFunction(this._genericUnHover.bind(this, backgroundMaterial));
          }
          {
            let cursorTarget = ui.myDownButtonCursorTargetComponent;
            let backgroundMaterial = ui.myDownButtonBackgroundComponent.material;
            cursorTarget.addDoubleClickFunction(this._instantScrollDown.bind(this));
            cursorTarget.addDownFunction(this._setScrollDown.bind(this, true));
            cursorTarget.addUpFunction(this._setScrollDown.bind(this, false));
            cursorTarget.addUnHoverFunction(this._setScrollDown.bind(this, false));
            cursorTarget.addHoverFunction(this._genericHover.bind(this, backgroundMaterial));
            cursorTarget.addUnHoverFunction(this._genericUnHover.bind(this, backgroundMaterial));
          }
          {
            let cursorTarget = ui.myNotifyIconCursorTargetComponent;
            let backgroundMaterial = ui.myNotifyIconBackgroundComponent.material;
            cursorTarget.addClickFunction(this._instantScrollDown.bind(this));
            cursorTarget.addHoverFunction(this._genericHover.bind(this, backgroundMaterial));
            cursorTarget.addUnHoverFunction(this._notifyIconUnHover.bind(this));
          }
          ui.myPointerCursorTargetComponent.addHoverFunction(this._setGamepadScrollActive.bind(this, true));
          ui.myPointerCursorTargetComponent.addUnHoverFunction(this._setGamepadScrollActive.bind(this, false));
        }
        _resetFilters(messageType) {
          if (this._myWidgetFrame.myIsWidgetVisible) {
            for (let key in PP.ConsoleVRWidget.MessageType) {
              let backgroundMaterial = this._myUI.myFilterButtonsBackgroundComponents[PP.ConsoleVRWidget.MessageType[key]].material;
              let filterTextMaterial = this._myUI.myFilterButtonsTextComponents[PP.ConsoleVRWidget.MessageType[key]].material;
              this._myTypeFilters[PP.ConsoleVRWidget.MessageType[key]] = false;
              filterTextMaterial.color = this._mySetup.myMessageTypeColors[PP.ConsoleVRWidget.MessageType[key]];
              if (PP.ConsoleVRWidget.MessageType[key] != messageType) {
                backgroundMaterial.color = this._mySetup.myBackgroundColor;
              }
            }
            this._clampScrollOffset();
            this._updateAllTexts();
          }
        }
        _filterAllButOne(messageType) {
          if (this._myWidgetFrame.myIsWidgetVisible) {
            for (let key in PP.ConsoleVRWidget.MessageType) {
              let backgroundMaterial = this._myUI.myFilterButtonsBackgroundComponents[PP.ConsoleVRWidget.MessageType[key]].material;
              let filterTextMaterial = this._myUI.myFilterButtonsTextComponents[PP.ConsoleVRWidget.MessageType[key]].material;
              if (PP.ConsoleVRWidget.MessageType[key] != messageType) {
                this._myTypeFilters[PP.ConsoleVRWidget.MessageType[key]] = true;
                backgroundMaterial.color = this._mySetup.myFilterButtonDisabledBackgroundColor;
                filterTextMaterial.color = this._mySetup.myFilterButtonDisabledTextColor;
              } else {
                this._myTypeFilters[PP.ConsoleVRWidget.MessageType[key]] = false;
                filterTextMaterial.color = this._mySetup.myMessageTypeColors[messageType];
              }
            }
            this._clampScrollOffset();
            this._updateAllTexts();
          }
        }
        _toggleFilter(messageType, textMaterial) {
          if (this._myWidgetFrame.myIsWidgetVisible) {
            this._myTypeFilters[messageType] = !this._myTypeFilters[messageType];
            if (this._myTypeFilters[messageType]) {
              textMaterial.color = this._mySetup.myFilterButtonDisabledTextColor;
            } else {
              textMaterial.color = this._mySetup.myMessageTypeColors[messageType];
            }
            this._clampScrollOffset();
            this._updateAllTexts();
          }
        }
        _clearConsole(codeDrivenClear = false, sender = null) {
          if (this._myWidgetFrame.myIsWidgetVisible || codeDrivenClear) {
            this._myMessages = [];
            this._clampScrollOffset();
            this._updateAllTexts();
            if (codeDrivenClear) {
              switch (sender) {
                case PP.ConsoleVRWidget.Sender.BROWSER_CONSOLE:
                  this._myOldBrowserConsoleClear.apply(console);
                  break;
                case PP.ConsoleVRWidget.Sender.CONSOLE_VR:
                  this._myOldConsoleVRClear.apply(PP.ConsoleVR);
                  break;
                default:
                  break;
              }
            } else if (this._mySetup.myClearBrowserConsoleWhenClearPressed) {
              PP.ConsoleVR._myRealClear();
            }
          }
        }
        _setScrollUp(value) {
          if (this._myWidgetFrame.myIsWidgetVisible || !value) {
            if (value) {
              this._myScrollTimer = 0;
            }
            this._myScrollUp = value;
          }
        }
        _setScrollDown(value) {
          if (this._myWidgetFrame.myIsWidgetVisible || !value) {
            if (value) {
              this._myScrollTimer = 0;
            }
            this._myScrollDown = value;
          }
        }
        _instantScrollUp() {
          if (this._myWidgetFrame.myIsWidgetVisible) {
            this._myScrollOffset = this._getMaxScrollOffset();
            this._updateAllTexts();
          }
        }
        _instantScrollDown() {
          if (this._myWidgetFrame.myIsWidgetVisible) {
            this._myScrollOffset = 0;
            this._setNotifyIconActive(false);
            this._updateAllTexts();
          }
        }
        _setNotifyIconActive(active) {
          this._myUI.myNotifyIconPanel.pp_setActiveHierarchy(active && this._myWidgetFrame.myIsWidgetVisible);
        }
        _notifyIconUnHover() {
          let material = this._myUI.myNotifyIconBackgroundComponent.material;
          material.color = this._mySetup.myNotifyIconColor;
        }
        _filterHover(messageType, material) {
          this._genericHover(material);
        }
        _filterUnHover(messageType, material) {
          if (this._myTypeFilters[messageType]) {
            material.color = this._mySetup.myFilterButtonDisabledBackgroundColor;
          } else {
            material.color = this._mySetup.myBackgroundColor;
          }
        }
        _genericHover(material) {
          material.color = this._mySetup.myButtonHoverColor;
        }
        _genericUnHover(material) {
          material.color = this._mySetup.myBackgroundColor;
        }
        _updateGamepadsExtraActions(dt) {
          if (this._myLeftGamepad && this._myRightGamepad) {
            if (this._myLeftGamepad.getButtonInfo(PP.ButtonType.THUMBSTICK).isPressStart() && this._myRightGamepad.getButtonInfo(PP.ButtonType.THUMBSTICK).myIsPressed || this._myRightGamepad.getButtonInfo(PP.ButtonType.THUMBSTICK).isPressStart() && this._myLeftGamepad.getButtonInfo(PP.ButtonType.THUMBSTICK).myIsPressed) {
              this._toggleVisibility();
            }
            this._myPulseTimer = Math.max(this._myPulseTimer - dt, 0);
            this._updateScrollWithThumbstick(dt);
          }
        }
        _toggleVisibility() {
          this._myWidgetFrame.toggleVisibility();
        }
        _widgetVisibleChanged(visible) {
          this._myUI.setVisible(visible);
          if (visible) {
            this._updateAllTexts();
          }
        }
        _updateScrollWithThumbstick(dt) {
          if (this._myWidgetFrame.myIsWidgetVisible && this._myGamepadScrollActive) {
            let axes = [0, 0];
            if (this._mySetup.myScrollThumbstickHandedness == PP.ToolHandedness.LEFT) {
              axes = this._myLeftGamepad.getAxesInfo().myAxes;
            } else if (this._mySetup.myScrollThumbstickHandedness == PP.ToolHandedness.RIGHT) {
              axes = this._myRightGamepad.getAxesInfo().myAxes;
            }
            if (Math.abs(axes[1]) > this._mySetup.myScrollThumbstickMinThreshold) {
              this._myScrollThumbstickTimer += dt;
              while (this._myScrollThumbstickTimer > this._mySetup.myScrollThumbstickDelay) {
                this._myScrollThumbstickTimer -= this._mySetup.myScrollThumbstickDelay;
                let normalizedScrollAmount = (Math.abs(axes[1]) - this._mySetup.myScrollThumbstickMinThreshold) / (1 - this._mySetup.myScrollThumbstickMinThreshold);
                this._myScrollOffset += Math.sign(axes[1]) * normalizedScrollAmount * this._mySetup.myScrollThumbstickAmount;
              }
              this._clampScrollOffset();
              this._updateAllTexts();
            } else {
              this._myScrollThumbstickTimer = 0;
            }
          }
        }
        _pulseGamepad() {
          if (this._myLeftGamepad && this._myRightGamepad) {
            let pulseType = this._myAdditionalSetup.myPulseOnNewMessage;
            let pulseEnabled = pulseType == PP.ConsoleVRWidget.PulseOnNewMessage.ALWAYS || !this._myWidgetFrame.myIsWidgetVisible && pulseType == PP.ConsoleVRWidget.PulseOnNewMessage.WHEN_HIDDEN;
            if (pulseEnabled && this._myPulseTimer == 0) {
              if (this._myAdditionalSetup.myHandedness == PP.ToolHandedness.RIGHT) {
                this._myRightGamepad.pulse(this._mySetup.myPulseIntensity, this._mySetup.myPulseDuration);
              } else {
                this._myLeftGamepad.pulse(this._mySetup.myPulseIntensity, this._mySetup.myPulseDuration);
              }
              this._myPulseTimer = this._mySetup.myPulseDelay;
            }
          }
        }
        _isArray(item) {
          return Array.isArray(item) || this._isFloat32Array(item);
        }
        _isFloat32Array(item) {
          return item && item.constructor && item.constructor.name == "Float32Array";
        }
        _setGamepadScrollActive(active) {
          this._myGamepadScrollActive = active;
          if (!this._mySetup.myGamepadScrollOnlyOnHover) {
            this._myGamepadScrollActive = true;
          }
        }
      };
      PP.ConsoleVRWidget.ConsoleFunction = {
        INFO: 0,
        WARN: 1,
        ERROR: 2,
        LOG: 3,
        DEBUG: 4,
        ASSERT: 5
      };
      PP.ConsoleVRWidget.Sender = {
        BROWSER_CONSOLE: 0,
        CONSOLE_VR: 1,
        WINDOW: 2
      };
      PP.ConsoleVRWidget.PulseOnNewMessage = {
        NEVER: 0,
        ALWAYS: 1,
        WHEN_HIDDEN: 2
      };
      PP.ConsoleVRWidget.MessageType = {
        INFO: 0,
        WARN: 1,
        ERROR: 2,
        LOG: 3
      };
      PP.ConsoleVRWidget.Message = class Message {
        constructor(messageType, messageLines) {
          this.myType = messageType;
          this.myLines = messageLines;
          this._myOriginalText = messageLines.join("\n");
          this._myMessagesCount = 1;
        }
        hasSameInfo(message) {
          return this._myOriginalText == message._myOriginalText && this.myType == message.myType;
        }
        increaseCount() {
          this._myMessagesCount += 1;
          let countString = "(x".concat(this._myMessagesCount).concat(") ");
          let text = this._myOriginalText.slice(0);
          text = countString.concat(text);
          this.myLines = text.split("\n");
        }
      };
      PP.ConsoleVR = {
        _myRealLog: console.log,
        _myRealError: console.error,
        _myRealWarn: console.warn,
        _myRealInfo: console.info,
        _myRealDebug: console.debug,
        _myRealAssert: console.assert,
        _myRealClear: console.clear,
        _myForwardToBrowserConsole: true,
        log: function(...args) {
          if (this._myForwardToBrowserConsole) {
            this._myRealLog.apply(console, args);
          }
        },
        error: function(...args) {
          if (this._myForwardToBrowserConsole) {
            this._myRealError.apply(console, args);
          }
        },
        warn: function(...args) {
          if (this._myForwardToBrowserConsole) {
            this._myRealWarn.apply(console, args);
          }
        },
        info: function(...args) {
          if (this._myForwardToBrowserConsole) {
            this._myRealInfo.apply(console, args);
          }
        },
        debug: function(...args) {
          if (this._myForwardToBrowserConsole) {
            this._myRealDebug.apply(console, args);
          }
        },
        assert: function(...args) {
          if (this._myForwardToBrowserConsole) {
            this._myRealAssert.apply(console, args);
          }
        },
        clear: function() {
          if (this._myForwardToBrowserConsole) {
            this._myRealClear.apply(console);
          }
        },
        setForwardToBrowserConsole: function(forwardToBrowserConsole) {
          this._myForwardToBrowserConsole = forwardToBrowserConsole;
        },
        isForwardToBrowserConsole: function() {
          return this._myForwardToBrowserConsole;
        }
      };
    }
  });

  // js/pp/tool/console_vr/console_vr.js
  var require_console_vr = __commonJS({
    "js/pp/tool/console_vr/console_vr.js"() {
      WL.registerComponent("pp-console-vr", {
        _myHandedness: { type: WL.Type.Enum, values: ["none", "left", "right"], default: "none" },
        _myOverrideBrowserConsole: { type: WL.Type.Bool, default: true },
        _myShowOnStart: { type: WL.Type.Bool, default: false },
        _myShowVisibilityButton: { type: WL.Type.Bool, default: false },
        _myPulseOnNewMessage: { type: WL.Type.Enum, values: ["never", "always", "when hidden"], default: "never" },
        _myPlaneMaterial: { type: WL.Type.Material, default: null },
        _myTextMaterial: { type: WL.Type.Material, default: null }
      }, {
        init: function() {
          this._myWidget = new PP.ConsoleVRWidget();
        },
        start: function() {
          let additionalSetup = {};
          additionalSetup.myHandedness = [null, "left", "right"][this._myHandedness];
          additionalSetup.myOverrideBrowserConsole = this._myOverrideBrowserConsole;
          additionalSetup.myShowOnStart = this._myShowOnStart;
          additionalSetup.myShowVisibilityButton = this._myShowVisibilityButton;
          additionalSetup.myPulseOnNewMessage = this._myPulseOnNewMessage;
          additionalSetup.myPlaneMaterial = this._myPlaneMaterial;
          additionalSetup.myTextMaterial = this._myTextMaterial;
          this._myWidget.start(this.object, additionalSetup);
        },
        update: function(dt) {
          this._myWidget.update(dt);
        }
      });
    }
  });

  // js/pp/tool/easy_tune/easy_object_tuners/easy_object_tuner.js
  var require_easy_object_tuner = __commonJS({
    "js/pp/tool/easy_tune/easy_object_tuners/easy_object_tuner.js"() {
      PP.EasyObjectTuner = class EasyObjectTuner {
        constructor(object, variableName, setAsDefault, useTuneTarget) {
          this._myObject = object;
          this._myUseTuneTarget = useTuneTarget;
          this._mySetAsDefault = setAsDefault;
          this._myEasyObject = this._myObject;
          if (this._myUseTuneTarget) {
            this._myEasyObject = PP.myEasyTuneTarget;
          }
          this._myPrevEasyObject = null;
          let variableNamePrefix = this._getVariableNamePrefix();
          if (variableName == "") {
            this._myEasyTuneVariableName = variableNamePrefix.concat(this._myObject.objectId);
          } else {
            this._myEasyTuneVariableName = variableNamePrefix.concat(variableName);
          }
        }
        start() {
          let easyTuneVariable = this._createEasyTuneVariable(this._myEasyTuneVariableName);
          PP.myEasyTuneVariables.add(easyTuneVariable);
          if (this._mySetAsDefault) {
            PP.setEasyTuneWidgetActiveVariable(this._myEasyTuneVariableName);
          }
        }
        update(dt) {
          if (PP.myEasyTuneVariables.isActive(this._myEasyTuneVariableName)) {
            if (this._myUseTuneTarget) {
              this._myEasyObject = PP.myEasyTuneTarget;
            }
            if (this._myPrevEasyObject != this._myEasyObject) {
              this._myPrevEasyObject = this._myEasyObject;
              if (this._myEasyObject) {
                let value = this._getObjectValue(this._myEasyObject);
                PP.myEasyTuneVariables.set(this._myEasyTuneVariableName, value, true);
              } else {
                let value = this._getDefaultValue();
                PP.myEasyTuneVariables.set(this._myEasyTuneVariableName, value, true);
              }
            }
            if (this._myEasyObject) {
              this._updateObjectValue(this._myEasyObject, PP.myEasyTuneVariables.get(this._myEasyTuneVariableName));
            }
          }
        }
        updateVariableValue(value) {
          PP.myEasyTuneVariables.set(this._myEasyTuneVariableName, value);
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_object_tuners/easy_light_attenuation.js
  var require_easy_light_attenuation = __commonJS({
    "js/pp/tool/easy_tune/easy_object_tuners/easy_light_attenuation.js"() {
      WL.registerComponent("pp-easy-light-attenuation", {
        _myVariableName: { type: WL.Type.String, default: "" },
        _mySetAsDefault: { type: WL.Type.Bool, default: false },
        _myUseTuneTarget: { type: WL.Type.Bool, default: false }
      }, {
        init: function() {
          this._myEasyObjectTuner = new PP.EasyLightAttenuation(this.object, this._myVariableName, this._mySetAsDefault, this._myUseTuneTarget);
        },
        start: function() {
          this._myEasyObjectTuner.start();
        },
        update: function(dt) {
          this._myEasyObjectTuner.update(dt);
        }
      });
      PP.EasyLightAttenuation = class EasyLightAttenuation extends PP.EasyObjectTuner {
        constructor(object, variableName, setAsDefault, useTuneTarget) {
          super(object, variableName, setAsDefault, useTuneTarget);
        }
        _getVariableNamePrefix() {
          let nameFirstPart = "Light Attenuation ";
          return nameFirstPart;
        }
        _createEasyTuneVariable(variableName) {
          return new PP.EasyTuneNumber(variableName, this._getDefaultValue(), 0.01, 3, 0, 1);
        }
        _getObjectValue(object) {
          let attenuation = this._getLightAttenuation(object);
          return attenuation;
        }
        _getDefaultValue() {
          return 0;
        }
        _updateObjectValue(object, value) {
          let attenuation = value;
          let light = object.pp_getComponent("light");
          if (light) {
            light.color[3] = attenuation;
          }
        }
        _getLightAttenuation(object) {
          let attenuation = this._getDefaultValue();
          let light = object.pp_getComponent("light");
          if (light) {
            attenuation = light.color[3];
          }
          return attenuation;
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_object_tuners/easy_light_color.js
  var require_easy_light_color = __commonJS({
    "js/pp/tool/easy_tune/easy_object_tuners/easy_light_color.js"() {
      WL.registerComponent("pp-easy-light-color", {
        _myVariableName: { type: WL.Type.String, default: "" },
        _mySetAsDefault: { type: WL.Type.Bool, default: false },
        _myUseTuneTarget: { type: WL.Type.Bool, default: false },
        _myColorModel: { type: WL.Type.Enum, values: ["rgb", "hsv"] }
      }, {
        init: function() {
          this._myEasyObjectTuner = new PP.EasyLightColor(this._myColorModel, this.object, this._myVariableName, this._mySetAsDefault, this._myUseTuneTarget);
        },
        start: function() {
          this._myEasyObjectTuner.start();
        },
        update: function(dt) {
          this._myEasyObjectTuner.update(dt);
        }
      });
      PP.EasyLightColor = class EasyLightColor extends PP.EasyObjectTuner {
        constructor(colorModel, object, variableName, setAsDefault, useTuneTarget) {
          super(object, variableName, setAsDefault, useTuneTarget);
          this._myColorModel = colorModel;
        }
        _getVariableNamePrefix() {
          let nameFirstPart = null;
          if (this._myColorModel == 0) {
            nameFirstPart = "Light RGB ";
          } else {
            nameFirstPart = "Light HSV ";
          }
          return nameFirstPart;
        }
        _createEasyTuneVariable(variableName) {
          return new PP.EasyTuneIntArray(variableName, this._getDefaultValue(), 100, 0, 255);
        }
        _getObjectValue(object) {
          let color = null;
          let lightColor = this._getLightColor(object);
          if (lightColor) {
            if (this._myColorModel == 0) {
              color = PP.ColorUtils.rgbCodeToHuman(lightColor);
            } else {
              color = PP.ColorUtils.hsvCodeToHuman(PP.ColorUtils.rgbToHsv(lightColor));
            }
          } else {
            color = this._getDefaultValue();
          }
          return color;
        }
        _getDefaultValue() {
          return PP.vec3_create();
        }
        _updateObjectValue(object, value) {
          let color = value;
          if (this._myColorModel == 0) {
            color = PP.ColorUtils.rgbHumanToCode(color);
          } else {
            color = PP.ColorUtils.hsvToRgb(PP.ColorUtils.hsvHumanToCode(color));
          }
          let light = object.pp_getComponent("light");
          if (light) {
            light.color[0] = color[0];
            light.color[1] = color[1];
            light.color[2] = color[2];
            light.color[3] = light.color[3];
          }
          if (PP.myRightGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).isPressStart() && PP.myLeftGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).myIsPressed || PP.myLeftGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).isPressStart() && PP.myRightGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).myIsPressed) {
            let hsvColor = PP.ColorUtils.color1To255(PP.ColorUtils.rgbToHsv(color));
            let rgbColor = PP.ColorUtils.color1To255(color);
            console.log("RGB:", rgbColor.vec_toString(0), "- HSV:", hsvColor.vec_toString(0));
          }
        }
        _getLightColor(object) {
          let color = null;
          let light = object.pp_getComponent("light");
          if (light) {
            color = light.color.slice(0, 3);
          }
          return color;
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_object_tuners/easy_mesh_color.js
  var require_easy_mesh_color = __commonJS({
    "js/pp/tool/easy_tune/easy_object_tuners/easy_mesh_color.js"() {
      WL.registerComponent("pp-easy-mesh-color", {
        _myVariableName: { type: WL.Type.String, default: "" },
        _myUseTuneTarget: { type: WL.Type.Bool, default: false },
        _mySetAsDefault: { type: WL.Type.Bool, default: false },
        _myColorModel: { type: WL.Type.Enum, values: ["rgb", "hsv"], default: "hsv" },
        _myColorType: { type: WL.Type.Enum, values: ["color", "diffuse color", "ambient color", "specular color", "emissive color", "fog color", "ambient factor"], default: "color" }
      }, {
        init: function() {
          this._myEasyObjectTuner = new PP.EasyMeshColor(this._myColorModel, this._myColorType, this.object, this._myVariableName, this._mySetAsDefault, this._myUseTuneTarget);
        },
        start: function() {
          this._myEasyObjectTuner.start();
        },
        update: function(dt) {
          this._myEasyObjectTuner.update(dt);
        }
      });
      PP.EasyMeshColor = class EasyMeshColor extends PP.EasyObjectTuner {
        constructor(colorModel, colorType, object, variableName, setAsDefault, useTuneTarget) {
          super(object, variableName, setAsDefault, useTuneTarget);
          this._myColorModel = colorModel;
          this._myColorType = colorType;
          this._myColorVariableNames = ["color", "diffuseColor", "ambientColor", "specularColor", "emissiveColor", "fogColor", "ambientFactor"];
        }
        _getVariableNamePrefix() {
          let nameFirstPart = null;
          if (this._myColorModel == 0) {
            nameFirstPart = "Mesh RGB ";
          } else {
            nameFirstPart = "Mesh HSV ";
          }
          return nameFirstPart;
        }
        _createEasyTuneVariable(variableName) {
          if (this._myColorType == 6) {
            return new PP.EasyTuneNumberArray(variableName, this._getDefaultValue(), 0.1, 3, 0, 1);
          }
          return new PP.EasyTuneIntArray(variableName, this._getDefaultValue(), 100, 0, 255);
        }
        _getObjectValue(object) {
          let color = null;
          let meshMaterial = this._getMeshMaterial(object);
          if (meshMaterial) {
            if (this._myColorType != 6) {
              color = meshMaterial[this._myColorVariableNames[this._myColorType]].pp_clone();
              if (this._myColorModel == 0) {
                color = PP.ColorUtils.rgbCodeToHuman(color);
              } else {
                color = PP.ColorUtils.hsvCodeToHuman(PP.ColorUtils.rgbToHsv(color));
              }
            } else {
              color = [meshMaterial[this._myColorVariableNames[this._myColorType]]];
            }
          } else {
            color = this._getDefaultValue();
          }
          return color;
        }
        _getDefaultValue() {
          if (this._myColorType == 6) {
            return [0];
          }
          return PP.vec4_create();
        }
        _updateObjectValue(object, value) {
          let color = value;
          if (this._myColorType != 6) {
            if (this._myColorModel == 0) {
              color = PP.ColorUtils.rgbHumanToCode(color);
            } else {
              color = PP.ColorUtils.hsvToRgb(PP.ColorUtils.hsvHumanToCode(color));
            }
          }
          let meshMaterial = this._getMeshMaterial(object);
          if (meshMaterial) {
            meshMaterial[this._myColorVariableNames[this._myColorType]] = color;
          }
          if (this._myColorType != 6) {
            if (PP.myRightGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).isPressStart() && PP.myLeftGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).myIsPressed || PP.myLeftGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).isPressStart() && PP.myRightGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).myIsPressed) {
              let hsvColor = PP.ColorUtils.color1To255(PP.ColorUtils.rgbToHsv(color));
              let rgbColor = PP.ColorUtils.color1To255(color);
              console.log("RGB:", rgbColor.vec_toString(0), "- HSV:", hsvColor.vec_toString(0));
            }
          }
        }
        _getMeshMaterial(object) {
          let material = null;
          let mesh = object.pp_getComponentHierarchy("mesh");
          if (mesh) {
            material = mesh.material;
          }
          return material;
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_object_tuners/easy_scale.js
  var require_easy_scale = __commonJS({
    "js/pp/tool/easy_tune/easy_object_tuners/easy_scale.js"() {
      WL.registerComponent("pp-easy-scale", {
        _myVariableName: { type: WL.Type.String, default: "" },
        _mySetAsDefault: { type: WL.Type.Bool, default: false },
        _myUseTuneTarget: { type: WL.Type.Bool, default: false },
        _myIsLocal: { type: WL.Type.Bool, default: false },
        _myScaleAsOne: { type: WL.Type.Bool, default: true }
      }, {
        init: function() {
          this._myEasyObjectTuner = new PP.EasyScale(this._myIsLocal, this._myScaleAsOne, this.object, this._myVariableName, this._mySetAsDefault, this._myUseTuneTarget);
        },
        start: function() {
          this._myEasyObjectTuner.start();
        },
        update: function(dt) {
          this._myEasyObjectTuner.update(dt);
        }
      });
      PP.EasyScale = class EasyScale extends PP.EasyObjectTuner {
        constructor(isLocal, scaleAsOne, object, variableName, setAsDefault, useTuneTarget) {
          super(object, variableName, setAsDefault, useTuneTarget);
          this._myIsLocal = isLocal;
          this._myScaleAsOne = scaleAsOne;
        }
        _getVariableNamePrefix() {
          return "Scale ";
        }
        _createEasyTuneVariable(variableName) {
          return new PP.EasyTuneNumberArray(variableName, this._getDefaultValue(), 1, 3, 1e-3, null, this._myScaleAsOne);
        }
        _getObjectValue(object) {
          return this._myIsLocal ? object.pp_getScaleLocal() : object.pp_getScaleWorld();
        }
        _getDefaultValue() {
          return PP.vec3_create(1, 1, 1);
        }
        _updateObjectValue(object, value) {
          if (this._myIsLocal) {
            object.pp_setScaleLocal(value);
          } else {
            object.pp_setScaleWorld(value);
          }
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_object_tuners/easy_set_tune_target_child_number.js
  var require_easy_set_tune_target_child_number = __commonJS({
    "js/pp/tool/easy_tune/easy_object_tuners/easy_set_tune_target_child_number.js"() {
      WL.registerComponent("pp-easy-set-tune-target-child-number", {
        _myVariableName: { type: WL.Type.String, default: "" },
        _mySetAsDefault: { type: WL.Type.Bool, default: false }
      }, {
        init: function() {
        },
        start: function() {
          this._myEasyTuneVariableName = "Target Child ";
          if (this._myVariableName == "") {
            this._myEasyTuneVariableName = this._myEasyTuneVariableName.concat(this.object.objectId);
          } else {
            this._myEasyTuneVariableName = this._myEasyTuneVariableName.concat(this._myVariableName);
          }
          let childrenCount = this.object.pp_getChildren().length;
          let min3 = 1;
          let max3 = childrenCount;
          if (childrenCount == 0) {
            min3 = 0;
            max3 = 0;
          }
          PP.myEasyTuneVariables.add(new PP.EasyTuneInt(this._myEasyTuneVariableName, 0, 10, min3, max3));
          if (this._mySetAsDefault) {
            PP.setEasyTuneWidgetActiveVariable(this._myEasyTuneVariableName);
          }
          this._myCurrentChildIndex = -1;
          this._myCurrentChildrenCount = childrenCount;
        },
        update: function() {
          if (PP.myEasyTuneVariables.isActive(this._myEasyTuneVariableName)) {
            let childrenCount = this.object.pp_getChildren().length;
            if (childrenCount != this._myCurrentChildrenCount) {
              this._myCurrentChildrenCount = childrenCount;
              let min3 = 1;
              let max3 = childrenCount;
              if (childrenCount == 0) {
                min3 = 0;
                max3 = 0;
              }
              let easyTuneVariable = PP.myEasyTuneVariables.getEasyTuneVariable(this._myEasyTuneVariableName);
              easyTuneVariable.setMin(min3);
              easyTuneVariable.setMax(max3);
            }
            let childIndex = PP.myEasyTuneVariables.get(this._myEasyTuneVariableName);
            if (childIndex != this._myCurrentChildIndex) {
              if (childIndex == 0 && this._myCurrentChildIndex != -1) {
                PP.myEasyTuneTarget = null;
              } else if (childIndex > 0) {
                PP.myEasyTuneTarget = this.object.pp_getChildren()[childIndex - 1];
              }
              this._myCurrentChildIndex = childIndex;
            }
          }
        }
      });
    }
  });

  // js/pp/tool/easy_tune/easy_object_tuners/easy_set_tune_target_grab.js
  var require_easy_set_tune_target_grab = __commonJS({
    "js/pp/tool/easy_tune/easy_object_tuners/easy_set_tune_target_grab.js"() {
      WL.registerComponent("pp-easy-set-tune-target-grab", {}, {
        init: function() {
        },
        start: function() {
          this._myGrabber = this.object.pp_getComponent("pp-grabber-hand");
        },
        update: function() {
        },
        _onRelease: function(grabber, grabbable) {
          PP.myEasyTuneTarget = grabbable.object;
        },
        _onGrab: function(grabber, grabbable) {
        },
        onActivate() {
          this._myGrabber.registerGrabEventListener(this, this._onGrab.bind(this));
          this._myGrabber.registerThrowEventListener(this, this._onRelease.bind(this));
        },
        onDeactivate() {
          this._myGrabber.unregisterGrabEventListener(this);
          this._myGrabber.unregisterThrowEventListener(this);
        }
      });
    }
  });

  // js/pp/tool/easy_tune/easy_object_tuners/easy_transform.js
  var require_easy_transform = __commonJS({
    "js/pp/tool/easy_tune/easy_object_tuners/easy_transform.js"() {
      WL.registerComponent("pp-easy-transform", {
        _myVariableName: { type: WL.Type.String, default: "" },
        _mySetAsDefault: { type: WL.Type.Bool, default: false },
        _myUseTuneTarget: { type: WL.Type.Bool, default: false },
        _myIsLocal: { type: WL.Type.Bool, default: false },
        _myScaleAsOne: { type: WL.Type.Bool, default: true }
      }, {
        init: function() {
          this._myEasyObjectTuner = new PP.EasyTransform(this._myIsLocal, this._myScaleAsOne, this.object, this._myVariableName, this._mySetAsDefault, this._myUseTuneTarget);
        },
        start: function() {
          this._myEasyObjectTuner.start();
        },
        update: function(dt) {
          this._myEasyObjectTuner.update(dt);
        }
      });
      PP.EasyTransform = class EasyTransform extends PP.EasyObjectTuner {
        constructor(isLocal, scaleAsOne, object, variableName, setAsDefault, useTuneTarget) {
          super(object, variableName, setAsDefault, useTuneTarget);
          this._myIsLocal = isLocal;
          this._myScaleAsOne = scaleAsOne;
        }
        _getVariableNamePrefix() {
          return "Transform ";
        }
        _createEasyTuneVariable(variableName) {
          return new PP.EasyTuneTransform(variableName, this._getDefaultValue(), this._myScaleAsOne);
        }
        _getObjectValue(object) {
          return this._myIsLocal ? object.pp_getTransformLocal() : object.pp_getTransformWorld();
        }
        _getDefaultValue() {
          return PP.mat4_create();
        }
        _updateObjectValue(object, value) {
          if (this._myIsLocal) {
            object.pp_setTransformLocal(value);
          } else {
            object.pp_setTransformWorld(value);
          }
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_bool_array_widget.js
  var require_easy_tune_bool_array_widget = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_bool_array_widget.js"() {
      PP.EasyTuneBoolArrayWidget = class EasyTuneBoolArrayWidget {
        constructor(arraySize, gamepad) {
          this._myGamepad = gamepad;
          this._mySetup = new PP.EasyTuneBoolArrayWidgetSetup(arraySize);
          this._myUI = new PP.EasyTuneBoolArrayWidgetUI();
          this._myVariable = null;
          this._myIsVisible = true;
          this._myScrollVariableRequestCallbacks = /* @__PURE__ */ new Map();
          this._myAppendToVariableName = "";
          this._myValueEditIndex = 0;
          this._myValueButtonEditIntensity = 0;
          this._myValueButtonEditIntensityTimer = 0;
          this._myValueEditActive = false;
          this._myScrollVariableActive = false;
          this._myScrollDirection = 0;
          this._myScrollVariableTimer = 0;
          this._myHasScrolled = false;
        }
        setEasyTuneVariable(variable, appendToVariableName) {
          this._myVariable = variable;
          if (typeof appendToVariableName !== "undefined") {
            this._myAppendToVariableName = appendToVariableName;
          } else {
            this._myAppendToVariableName = "";
          }
          this._refreshUI();
        }
        isScrollVariableActive() {
          return this._myScrollVariableActive;
        }
        getScrollVariableDirection() {
          return this._myScrollDirection;
        }
        setScrollVariableActive(active, scrollDirection) {
          this._myScrollVariableActive = active;
          this._myScrollDirection = scrollDirection;
          this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
          this._myHasScrolled = false;
        }
        _refreshUI() {
          if (this._myVariable) {
            this._myUI.myVariableLabelTextComponent.text = this._myVariable.myName.concat(this._myAppendToVariableName);
            for (let i = 0; i < this._mySetup.myArraySize; i++) {
              this._myUI.myValueTextComponents[i].text = this._myVariable.myValue[i] ? "true" : "false";
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
            this._updateScrollVariable(dt);
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
        _updateScrollVariable(dt) {
          if (this._myScrollVariableActive) {
            if (this._myScrollVariableTimer <= 0) {
              this._scrollVariableRequest(this._myScrollDirection);
              this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
              this._myHasScrolled = true;
            } else {
              this._myScrollVariableTimer -= dt;
            }
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
          ui.myNextButtonCursorTargetComponent.addDownFunction(this._setScrollVariableActive.bind(this, true, 1, false));
          ui.myNextButtonCursorTargetComponent.addDownOnHoverFunction(this._setScrollVariableActive.bind(this, true, 1, false));
          ui.myNextButtonCursorTargetComponent.addUpFunction(this._setScrollVariableActive.bind(this, false, 0, false));
          ui.myNextButtonCursorTargetComponent.addUpWithNoDownFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myNextButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myNextButtonBackgroundComponent.material));
          ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myNextButtonBackgroundComponent.material));
          ui.myPreviousButtonCursorTargetComponent.addDownFunction(this._setScrollVariableActive.bind(this, true, -1, false));
          ui.myPreviousButtonCursorTargetComponent.addDownOnHoverFunction(this._setScrollVariableActive.bind(this, true, -1, false));
          ui.myPreviousButtonCursorTargetComponent.addUpFunction(this._setScrollVariableActive.bind(this, false, 0, false));
          ui.myPreviousButtonCursorTargetComponent.addUpWithNoDownFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myPreviousButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
          ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            for (let i2 = 0; i2 < this._mySetup.myArraySize; i2++) {
              ui.myValueIncreaseButtonCursorTargetComponents[i2].addDownFunction(this._setValueEditIntensity.bind(this, i2, 1));
              ui.myValueIncreaseButtonCursorTargetComponents[i2].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, i2, 1));
              ui.myValueIncreaseButtonCursorTargetComponents[i2].addUpFunction(this._setValueEditIntensity.bind(this, i2, 0));
              ui.myValueIncreaseButtonCursorTargetComponents[i2].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, i2, 0));
              ui.myValueIncreaseButtonCursorTargetComponents[i2].addUnHoverFunction(this._setValueEditIntensity.bind(this, i2, 0));
              ui.myValueDecreaseButtonCursorTargetComponents[i2].addDownFunction(this._setValueEditIntensity.bind(this, i2, -1));
              ui.myValueDecreaseButtonCursorTargetComponents[i2].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, i2, -1));
              ui.myValueDecreaseButtonCursorTargetComponents[i2].addUpFunction(this._setValueEditIntensity.bind(this, i2, 0));
              ui.myValueDecreaseButtonCursorTargetComponents[i2].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, i2, 0));
              ui.myValueDecreaseButtonCursorTargetComponents[i2].addUnHoverFunction(this._setValueEditIntensity.bind(this, i2, 0));
              ui.myValueIncreaseButtonCursorTargetComponents[i2].addHoverFunction(this._genericHover.bind(this, ui.myValueIncreaseButtonBackgroundComponents[i2].material));
              ui.myValueIncreaseButtonCursorTargetComponents[i2].addUnHoverFunction(this._genericUnHover.bind(this, ui.myValueIncreaseButtonBackgroundComponents[i2].material));
              ui.myValueDecreaseButtonCursorTargetComponents[i2].addHoverFunction(this._genericHover.bind(this, ui.myValueDecreaseButtonBackgroundComponents[i2].material));
              ui.myValueDecreaseButtonCursorTargetComponents[i2].addUnHoverFunction(this._genericUnHover.bind(this, ui.myValueDecreaseButtonBackgroundComponents[i2].material));
              ui.myValueCursorTargetComponents[i2].addClickFunction(this._resetValue.bind(this, i2));
              ui.myValueCursorTargetComponents[i2].addHoverFunction(this._setValueEditActive.bind(this, i2, ui.myValueTexts[i2], true));
              ui.myValueCursorTargetComponents[i2].addUnHoverFunction(this._setValueEditActive.bind(this, i2, ui.myValueTexts[i2], false));
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
        _setScrollVariableActive(active, scrollDirection, skipForceScroll) {
          if (this._isActive() || !active) {
            let forceScroll = !active && !this._myHasScrolled && !skipForceScroll;
            let oldScrollDirection = this._myScrollDirection;
            this.setScrollVariableActive(active, scrollDirection);
            if (forceScroll) {
              this._scrollVariableRequest(oldScrollDirection);
            }
          }
        }
        _scrollVariableRequest(amount) {
          if (this._isActive() && amount != 0) {
            for (let callback of this._myScrollVariableRequestCallbacks.values()) {
              callback(amount);
            }
          }
        }
        _resetValue(index) {
          if (this._isActive()) {
            this._myVariable.myValue[index] = this._myVariable.myInitialValue[index];
            this._myUI.myValueTextComponents[index].text = this._myVariable.myValue[index] ? "true" : "false";
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
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_bool_array_widget_ui.js
  var require_easy_tune_bool_array_widget_ui = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_bool_array_widget_ui.js"() {
      PP.EasyTuneBoolArrayWidgetUI = class EasyTuneBoolArrayWidgetUI {
        build(parentObject, setup, additionalSetup) {
          this._myParentObject = parentObject;
          this._mySetup = setup;
          this._myAdditionalSetup = additionalSetup;
          this._myAdditionalButtonsActive = true;
          this._myPlaneMesh = PP.MeshUtils.createPlaneMesh();
          this._createSkeleton();
          this._setTransforms();
          this._addComponents();
        }
        setVisible(visible) {
          this.myPivotObject.pp_setActiveHierarchy(visible);
          if (visible) {
            this.setAdditionalButtonsActive(this._myAdditionalButtonsActive);
          }
        }
        setAdditionalButtonsActive(active) {
          this._myAdditionalButtonsActive = active;
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this.myValueIncreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
            this.myValueDecreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          }
        }
        _createSkeleton() {
          this.myPivotObject = WL.scene.addObject(this._myParentObject);
          this.myBackPanel = WL.scene.addObject(this.myPivotObject);
          this.myBackBackground = WL.scene.addObject(this.myBackPanel);
          this._createDisplaySkeleton();
          this._createPointerSkeleton();
        }
        _createDisplaySkeleton() {
          this.myDisplayPanel = WL.scene.addObject(this.myPivotObject);
          this.myVariableLabelPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myVariableLabelText = WL.scene.addObject(this.myVariableLabelPanel);
          this.myVariableLabelCursorTarget = WL.scene.addObject(this.myVariableLabelPanel);
          this.myNextButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
          this.myNextButtonBackground = WL.scene.addObject(this.myNextButtonPanel);
          this.myNextButtonText = WL.scene.addObject(this.myNextButtonPanel);
          this.myNextButtonCursorTarget = WL.scene.addObject(this.myNextButtonPanel);
          this.myPreviousButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
          this.myPreviousButtonBackground = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPreviousButtonText = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPreviousButtonCursorTarget = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myValuesPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myValuePanels = [];
          this.myValueTexts = [];
          this.myValueCursorTargets = [];
          this.myValueIncreaseButtonPanels = [];
          this.myValueIncreaseButtonBackgrounds = [];
          this.myValueIncreaseButtonTexts = [];
          this.myValueIncreaseButtonCursorTargets = [];
          this.myValueDecreaseButtonPanels = [];
          this.myValueDecreaseButtonBackgrounds = [];
          this.myValueDecreaseButtonTexts = [];
          this.myValueDecreaseButtonCursorTargets = [];
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this.myValuePanels[i] = WL.scene.addObject(this.myValuesPanel);
            this.myValueTexts[i] = WL.scene.addObject(this.myValuePanels[i]);
            this.myValueCursorTargets[i] = WL.scene.addObject(this.myValuePanels[i]);
            this.myValueIncreaseButtonPanels[i] = WL.scene.addObject(this.myValuePanels[i]);
            this.myValueIncreaseButtonBackgrounds[i] = WL.scene.addObject(this.myValueIncreaseButtonPanels[i]);
            this.myValueIncreaseButtonTexts[i] = WL.scene.addObject(this.myValueIncreaseButtonPanels[i]);
            this.myValueIncreaseButtonCursorTargets[i] = WL.scene.addObject(this.myValueIncreaseButtonPanels[i]);
            this.myValueDecreaseButtonPanels[i] = WL.scene.addObject(this.myValuePanels[i]);
            this.myValueDecreaseButtonBackgrounds[i] = WL.scene.addObject(this.myValueDecreaseButtonPanels[i]);
            this.myValueDecreaseButtonTexts[i] = WL.scene.addObject(this.myValueDecreaseButtonPanels[i]);
            this.myValueDecreaseButtonCursorTargets[i] = WL.scene.addObject(this.myValueDecreaseButtonPanels[i]);
          }
        }
        _createPointerSkeleton() {
          this.myPointerCursorTarget = WL.scene.addObject(this.myPivotObject);
        }
        _setTransforms() {
          this.myPivotObject.setTranslationLocal(this._mySetup.myPivotObjectPositions[this._myAdditionalSetup.myHandedness]);
          this.myBackPanel.setTranslationLocal(this._mySetup.myBackPanelPosition);
          this.myBackBackground.scale(this._mySetup.myBackBackgroundScale);
          this._setDisplayTransforms();
          this._setPointerTransform();
        }
        _setDisplayTransforms() {
          this.myDisplayPanel.setTranslationLocal(this._mySetup.myDisplayPanelPosition);
          this.myVariableLabelPanel.setTranslationLocal(this._mySetup.myVariableLabelPanelPosition);
          this.myVariableLabelText.scale(this._mySetup.myVariableLabelTextScale);
          this.myVariableLabelCursorTarget.setTranslationLocal(this._mySetup.myVariableLabelCursorTargetPosition);
          this.myNextButtonPanel.setTranslationLocal(this._mySetup.myRightSideButtonPosition);
          this.myNextButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myNextButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myNextButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myNextButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myPreviousButtonPanel.setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
          this.myPreviousButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myPreviousButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myPreviousButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myPreviousButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myValuesPanel.setTranslationLocal(this._mySetup.myValuesPanelPosition);
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this.myValuePanels[i].setTranslationLocal(this._mySetup.myValuePanelsPositions[i]);
            this.myValueTexts[i].scale(this._mySetup.myValueTextScale);
            this.myValueCursorTargets[i].setTranslationLocal(this._mySetup.myValueCursorTargetPosition);
            this.myValueIncreaseButtonPanels[i].setTranslationLocal(this._mySetup.myRightSideButtonPosition);
            this.myValueIncreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myValueIncreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myValueIncreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myValueIncreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
            this.myValueDecreaseButtonPanels[i].setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
            this.myValueDecreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myValueDecreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myValueDecreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myValueDecreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          }
        }
        _setPointerTransform() {
          this.myPointerCursorTarget.setTranslationLocal(this._mySetup.myPointerCursorTargetPosition);
        }
        _addComponents() {
          this.myBackBackgroundComponent = this.myBackBackground.addComponent("mesh");
          this.myBackBackgroundComponent.mesh = this._myPlaneMesh;
          this.myBackBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myBackBackgroundComponent.material.color = this._mySetup.myBackBackgroundColor;
          this._addDisplayComponents();
          this._addPointerComponents();
        }
        _addDisplayComponents() {
          this.myVariableLabelTextComponent = this.myVariableLabelText.addComponent("text");
          this._setupTextComponent(this.myVariableLabelTextComponent);
          this.myVariableLabelTextComponent.text = " ";
          this.myVariableLabelCursorTargetComponent = this.myVariableLabelCursorTarget.addComponent("cursor-target");
          this.myVariableLabelCollisionComponent = this.myVariableLabelCursorTarget.addComponent("collision");
          this.myVariableLabelCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myVariableLabelCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myVariableLabelCollisionComponent.extents = this._mySetup.myVariableLabelCollisionExtents;
          this.myNextButtonBackgroundComponent = this.myNextButtonBackground.addComponent("mesh");
          this.myNextButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myNextButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myNextButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myNextButtonTextComponent = this.myNextButtonText.addComponent("text");
          this._setupTextComponent(this.myNextButtonTextComponent);
          this.myNextButtonTextComponent.text = this._mySetup.myNextButtonText;
          this.myNextButtonCursorTargetComponent = this.myNextButtonCursorTarget.addComponent("cursor-target");
          this.myNextButtonCollisionComponent = this.myNextButtonCursorTarget.addComponent("collision");
          this.myNextButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myNextButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myNextButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myPreviousButtonBackgroundComponent = this.myPreviousButtonBackground.addComponent("mesh");
          this.myPreviousButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myPreviousButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myPreviousButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myPreviousButtonTextComponent = this.myPreviousButtonText.addComponent("text");
          this._setupTextComponent(this.myPreviousButtonTextComponent);
          this.myPreviousButtonTextComponent.text = this._mySetup.myPreviousButtonText;
          this.myPreviousButtonCursorTargetComponent = this.myPreviousButtonCursorTarget.addComponent("cursor-target");
          this.myPreviousButtonCollisionComponent = this.myPreviousButtonCursorTarget.addComponent("collision");
          this.myPreviousButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPreviousButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPreviousButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myValueTextComponents = [];
          this.myValueCursorTargetComponents = [];
          this.myValueCollisionComponents = [];
          this.myValueIncreaseButtonBackgroundComponents = [];
          this.myValueIncreaseButtonTextComponents = [];
          this.myValueIncreaseButtonCursorTargetComponents = [];
          this.myValueIncreaseButtonCollisionComponents = [];
          this.myValueDecreaseButtonBackgroundComponents = [];
          this.myValueDecreaseButtonTextComponents = [];
          this.myValueDecreaseButtonCursorTargetComponents = [];
          this.myValueDecreaseButtonCollisionComponents = [];
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this.myValueTextComponents[i] = this.myValueTexts[i].addComponent("text");
            this._setupTextComponent(this.myValueTextComponents[i]);
            this.myValueTextComponents[i].text = " ";
            this.myValueCursorTargetComponents[i] = this.myValueCursorTargets[i].addComponent("cursor-target");
            this.myValueCollisionComponents[i] = this.myValueCursorTargets[i].addComponent("collision");
            this.myValueCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myValueCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myValueCollisionComponents[i].extents = this._mySetup.myValueCollisionExtents;
            this.myValueIncreaseButtonBackgroundComponents[i] = this.myValueIncreaseButtonBackgrounds[i].addComponent("mesh");
            this.myValueIncreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myValueIncreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myValueIncreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myValueIncreaseButtonTextComponents[i] = this.myValueIncreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myValueIncreaseButtonTextComponents[i]);
            this.myValueIncreaseButtonTextComponents[i].text = this._mySetup.myIncreaseButtonText;
            this.myValueIncreaseButtonCursorTargetComponents[i] = this.myValueIncreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myValueIncreaseButtonCollisionComponents[i] = this.myValueIncreaseButtonCursorTargets[i].addComponent("collision");
            this.myValueIncreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myValueIncreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myValueIncreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
            this.myValueDecreaseButtonBackgroundComponents[i] = this.myValueDecreaseButtonBackgrounds[i].addComponent("mesh");
            this.myValueDecreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myValueDecreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myValueDecreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myValueDecreaseButtonTextComponents[i] = this.myValueDecreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myValueDecreaseButtonTextComponents[i]);
            this.myValueDecreaseButtonTextComponents[i].text = this._mySetup.myDecreaseButtonText;
            this.myValueDecreaseButtonCursorTargetComponents[i] = this.myValueDecreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myValueDecreaseButtonCollisionComponents[i] = this.myValueDecreaseButtonCursorTargets[i].addComponent("collision");
            this.myValueDecreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myValueDecreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myValueDecreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
          }
        }
        _addPointerComponents() {
          this.myPointerCollisionComponent = this.myPointerCursorTarget.addComponent("collision");
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
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_bool_array_widget_setup.js
  var require_easy_tune_bool_array_widget_setup = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_bool_array_widget_setup.js"() {
      PP.EasyTuneBoolArrayWidgetSetup = class EasyTuneBoolArrayWidgetSetup {
        constructor(arraySize) {
          this.myArraySize = arraySize;
          this._initializeBuildSetup();
          this._initializeRuntimeSetup();
        }
        _initializeBuildSetup() {
          this.myBackgroundColor = [46 / 255, 46 / 255, 46 / 255, 1];
          this.myCursorTargetCollisionCollider = 2;
          this.myCursorTargetCollisionGroup = 7;
          this.myCursorTargetCollisionThickness = 1e-3;
          this.myDefaultTextColor = [255 / 255, 255 / 255, 255 / 255, 1];
          this.myTextAlignment = 2;
          this.myTextJustification = 2;
          this.myTextOutlineRange = [0.45, 0.45];
          this.myTextColor = this.myDefaultTextColor;
          this.myTextOutlineColor = this.myDefaultTextColor;
          this.myPivotObjectPositions = [];
          this.myPivotObjectPositions[PP.ToolHandedness.NONE] = [0, 0, 0];
          this.myPivotObjectPositions[PP.ToolHandedness.LEFT] = [-0.04, 0.02, 3013e-8];
          this.myPivotObjectPositions[PP.ToolHandedness.RIGHT] = [-0.08, 0.02, 3013e-8];
          let panelZ = 0.01;
          let distanceFromBorder = 0.0125;
          let distanceFromValue = 0.055;
          let colliderZPosition = 0.017;
          let backgroundHalfWidth = 0.2;
          this.mySideButtonBackgroundScale = [0.015, 0.015, 1];
          this.mySideButtonTextScale = [0.18, 0.18, 0.18];
          this.mySideButtonTextPosition = [0, 0, 7e-3];
          this.mySideButtonCursorTargetPosition = [0, 0, 0];
          this.mySideButtonCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.mySideButtonCollisionExtents = this.mySideButtonBackgroundScale.slice(0);
          this.mySideButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myLeftSideButtonPosition = [0, 0, -1e-5];
          this.myLeftSideButtonPosition[0] = -backgroundHalfWidth + this.mySideButtonBackgroundScale[0] + distanceFromBorder;
          this.myRightSideButtonPosition = [0, 0, -1e-5];
          this.myRightSideButtonPosition[0] = backgroundHalfWidth - this.mySideButtonBackgroundScale[0] - distanceFromBorder;
          this.myIncreaseButtonText = "+";
          this.myDecreaseButtonText = "-";
          this.myDisplayPanelPosition = [0, 0.1, 0];
          this.myVariableLabelPanelPosition = [0, 0.025, panelZ];
          this.myVariableLabelTextScale = [0.19, 0.19, 0.19];
          this.myVariableLabelCursorTargetPosition = [0, 0, 0];
          this.myVariableLabelCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.myVariableLabelCollisionExtents = [0.065, 0.0175, 1];
          this.myVariableLabelCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myNextButtonText = ">";
          this.myPreviousButtonText = "<";
          this.myValuesPanelPosition = [0, this.myVariableLabelPanelPosition[1] - distanceFromValue, panelZ];
          this.myValueTextScale = [0.4, 0.4, 0.4];
          this.myValueCursorTargetPosition = [0, 0, 0];
          this.myValueCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.myValueCollisionExtents = [0.065, 0.02, 1];
          this.myValueCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myDistanceBetweenValues = this.mySideButtonBackgroundScale[1] * 2 + 0.015;
          this.myValuePanelsPositions = [];
          this.myValuePanelsPositions[0] = [0, 0, 0];
          for (let i = 1; i < this.myArraySize; i++) {
            this.myValuePanelsPositions[i] = this.myValuePanelsPositions[i - 1].slice(0);
            this.myValuePanelsPositions[i][1] -= this.myDistanceBetweenValues;
          }
          {
            let valuePanelLastPosition = this.myValuePanelsPositions[this.myArraySize - 1] ? this.myValuePanelsPositions[this.myArraySize - 1][1] : 0;
            let maxY = this.myDisplayPanelPosition[1] + this.myVariableLabelPanelPosition[1] + this.mySideButtonBackgroundScale[1] + distanceFromBorder * 1.25;
            let minY = this.myDisplayPanelPosition[1] + this.myValuesPanelPosition[1] + valuePanelLastPosition - distanceFromBorder * 1.25 - this.mySideButtonBackgroundScale[1];
            this.myBackPanelPosition = [0, (maxY + minY) / 2, 0];
            this.myBackBackgroundScale = [backgroundHalfWidth, (maxY - minY) / 2, 1];
            this.myBackBackgroundColor = [70 / 255, 70 / 255, 70 / 255, 1];
          }
          this.myPointerCollisionExtents = this.myBackBackgroundScale.slice(0);
          this.myPointerCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myPointerCursorTargetPosition = this.myBackPanelPosition.slice(0);
          this.myPointerCursorTargetPosition[2] = colliderZPosition - 1e-4;
        }
        _initializeRuntimeSetup() {
          this.myButtonHoverColor = [150 / 255, 150 / 255, 150 / 255, 1];
          this.myTextHoverScaleMultiplier = [1.25, 1.25, 1.25];
          this.myThumbstickToggleThreshold = 0.6;
          this.myButtonEditDelay = 0;
          this.myScrollVariableDelay = 0.5;
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_bool_widget.js
  var require_easy_tune_bool_widget = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_bool_widget.js"() {
      PP.EasyTuneBoolWidget = class EasyTuneBoolWidget {
        constructor(gamepad) {
          this._myGamepad = gamepad;
          this._myParentObject = null;
          this._myAdditionalSetup = null;
          this._myWidgets = /* @__PURE__ */ new Map();
          this._myVariable = null;
          this._myIsVisible = true;
          this._myAppendToVariableName = null;
          this._myScrollVariableRequestCallbacks = /* @__PURE__ */ new Map();
          this._myCurrentArraySize = 0;
        }
        setEasyTuneVariable(variable, appendToVariableName) {
          this._myVariable = variable;
          this._myCurrentArraySize = this._myVariable.myValue.length;
          this._myAppendToVariableName = appendToVariableName;
          if (!this._myWidgets.has(this._myCurrentArraySize)) {
            this._createWidget(this._myCurrentArraySize);
          }
          this._myWidgets.get(this._myCurrentArraySize).setEasyTuneVariable(variable, appendToVariableName);
          this.setVisible(this._myIsVisible);
        }
        setVisible(visible) {
          if (this._myVariable) {
            this._sizeChangedCheck();
            for (let widget of this._myWidgets.values()) {
              widget.setVisible(false);
            }
            this._myWidgets.get(this._myCurrentArraySize).setVisible(visible);
          }
          this._myIsVisible = visible;
        }
        isScrollVariableActive() {
          let widget = this._myWidgets.get(this._myCurrentArraySize);
          if (widget) {
            return widget.isScrollVariableActive();
          }
          return false;
        }
        getScrollVariableDirection() {
          let widget = this._myWidgets.get(this._myCurrentArraySize);
          if (widget) {
            return widget.getScrollVariableDirection();
          }
          return 0;
        }
        setScrollVariableActive(active, scrollDirection) {
          let widget = this._myWidgets.get(this._myCurrentArraySize);
          if (widget) {
            widget.setScrollVariableActive(active, scrollDirection);
          }
        }
        registerScrollVariableRequestEventListener(id, callback) {
          this._myScrollVariableRequestCallbacks.set(id, callback);
        }
        unregisterScrollVariableRequestEventListener(id) {
          this._myScrollVariableRequestCallbacks.delete(id);
        }
        start(parentObject, additionalSetup) {
          this._myParentObject = parentObject;
          this._myAdditionalSetup = additionalSetup;
          this._createWidget(1);
          if (this._myVariable) {
            this.setEasyTuneVariable(this._myVariable, this._myAppendToVariableName);
          }
        }
        update(dt) {
          if (this._isActive()) {
            this._sizeChangedCheck();
            this._myWidgets.get(this._myCurrentArraySize).update(dt);
          }
        }
        _isActive() {
          return this._myIsVisible && this._myVariable;
        }
        _scrollVariableRequest(amount) {
          for (let callback of this._myScrollVariableRequestCallbacks.values()) {
            callback(amount);
          }
        }
        _createWidget(arraySize) {
          this._myWidgets.set(arraySize, new PP.EasyTuneBoolArrayWidget(arraySize, this._myGamepad));
          this._myWidgets.get(arraySize).start(this._myParentObject, this._myAdditionalSetup);
          this._myWidgets.get(arraySize).setVisible(false);
          this._myWidgets.get(arraySize).registerScrollVariableRequestEventListener(this, this._scrollVariableRequest.bind(this));
        }
        _sizeChangedCheck() {
          if (this._myVariable.myValue.length != this._myCurrentArraySize) {
            this.setEasyTuneVariable(this._myVariable, this._myAppendToVariableName);
          }
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_none_widget.js
  var require_easy_tune_none_widget = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_none_widget.js"() {
      PP.EasyTuneNoneWidget = class EasyTuneNoneWidget {
        constructor() {
          this._mySetup = new PP.EasyTuneNoneWidgetSetup();
          this._myUI = new PP.EasyTuneNoneWidgetUI();
          this._myVariable = null;
          this._myIsVisible = true;
          this._myScrollVariableRequestCallbacks = /* @__PURE__ */ new Map();
          this._myAppendToVariableName = "";
          this._myScrollVariableActive = false;
          this._myScrollDirection = 0;
          this._myScrollVariableTimer = 0;
          this._myHasScrolled = false;
        }
        setEasyTuneVariable(variable, appendToVariableName) {
          this._myVariable = variable;
          if (typeof appendToVariableName !== "undefined") {
            this._myAppendToVariableName = appendToVariableName;
          } else {
            this._myAppendToVariableName = "";
          }
          this._refreshUI();
        }
        isScrollVariableActive() {
          return this._myScrollVariableActive;
        }
        getScrollVariableDirection() {
          return this._myScrollDirection;
        }
        setScrollVariableActive(active, scrollDirection) {
          this._myScrollVariableActive = active;
          this._myScrollDirection = scrollDirection;
          this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
          this._myHasScrolled = false;
        }
        _refreshUI() {
          if (this._myVariable) {
            if (this._myVariable.myName != null) {
              this._myUI.myVariableLabelTextComponent.text = this._myVariable.myName.concat(this._myAppendToVariableName);
            } else {
              let name = "Unknown";
              this._myUI.myVariableLabelTextComponent.text = name.concat(this._myAppendToVariableName);
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
          this._addListeners();
        }
        update(dt) {
          if (this._isActive()) {
            this._updateScrollVariable(dt);
          }
        }
        _updateScrollVariable(dt) {
          if (this._myScrollVariableActive) {
            if (this._myScrollVariableTimer <= 0) {
              this._scrollVariableRequest(this._myScrollDirection);
              this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
              this._myHasScrolled = true;
            } else {
              this._myScrollVariableTimer -= dt;
            }
          }
        }
        _isActive() {
          return this._myIsVisible && this._myVariable;
        }
        _addListeners() {
          let ui = this._myUI;
          ui.myNextButtonCursorTargetComponent.addDownFunction(this._setScrollVariableActive.bind(this, true, 1, false));
          ui.myNextButtonCursorTargetComponent.addDownOnHoverFunction(this._setScrollVariableActive.bind(this, true, 1, false));
          ui.myNextButtonCursorTargetComponent.addUpFunction(this._setScrollVariableActive.bind(this, false, 0, false));
          ui.myNextButtonCursorTargetComponent.addUpWithNoDownFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myNextButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myNextButtonBackgroundComponent.material));
          ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myNextButtonBackgroundComponent.material));
          ui.myPreviousButtonCursorTargetComponent.addDownFunction(this._setScrollVariableActive.bind(this, true, -1, false));
          ui.myPreviousButtonCursorTargetComponent.addDownOnHoverFunction(this._setScrollVariableActive.bind(this, true, -1, false));
          ui.myPreviousButtonCursorTargetComponent.addUpFunction(this._setScrollVariableActive.bind(this, false, 0, false));
          ui.myPreviousButtonCursorTargetComponent.addUpWithNoDownFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myPreviousButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
          ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
        }
        _setScrollVariableActive(active, scrollDirection, skipForceScroll) {
          if (this._isActive() || !active) {
            let forceScroll = !active && !this._myHasScrolled && !skipForceScroll;
            let oldScrollDirection = this._myScrollDirection;
            this.setScrollVariableActive(active, scrollDirection);
            if (forceScroll) {
              this._scrollVariableRequest(oldScrollDirection);
            }
          }
        }
        _scrollVariableRequest(amount) {
          if (this._isActive() && amount != 0) {
            for (let callback of this._myScrollVariableRequestCallbacks.values()) {
              callback(amount);
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
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_none_widget_ui.js
  var require_easy_tune_none_widget_ui = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_none_widget_ui.js"() {
      PP.EasyTuneNoneWidgetUI = class EasyTuneNoneWidgetUI {
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
          this.myPivotObject.pp_setActiveHierarchy(visible);
        }
        _createSkeleton() {
          this.myPivotObject = WL.scene.addObject(this._myParentObject);
          this.myBackPanel = WL.scene.addObject(this.myPivotObject);
          this.myBackBackground = WL.scene.addObject(this.myBackPanel);
          this._createDisplaySkeleton();
          this._createPointerSkeleton();
        }
        _createDisplaySkeleton() {
          this.myDisplayPanel = WL.scene.addObject(this.myPivotObject);
          this.myVariableLabelPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myVariableLabelText = WL.scene.addObject(this.myVariableLabelPanel);
          this.myTypeNotSupportedPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myTypeNotSupportedText = WL.scene.addObject(this.myTypeNotSupportedPanel);
          this.myTypeNotSupportedCursorTarget = WL.scene.addObject(this.myTypeNotSupportedPanel);
          this.myNextButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
          this.myNextButtonBackground = WL.scene.addObject(this.myNextButtonPanel);
          this.myNextButtonText = WL.scene.addObject(this.myNextButtonPanel);
          this.myNextButtonCursorTarget = WL.scene.addObject(this.myNextButtonPanel);
          this.myPreviousButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
          this.myPreviousButtonBackground = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPreviousButtonText = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPreviousButtonCursorTarget = WL.scene.addObject(this.myPreviousButtonPanel);
        }
        _createPointerSkeleton() {
          this.myPointerCursorTarget = WL.scene.addObject(this.myPivotObject);
        }
        _setTransforms() {
          this.myPivotObject.setTranslationLocal(this._mySetup.myPivotObjectPositions[this._myAdditionalSetup.myHandedness]);
          this.myBackPanel.setTranslationLocal(this._mySetup.myBackPanelPosition);
          this.myBackBackground.scale(this._mySetup.myBackBackgroundScale);
          this._setDisplayTransforms();
          this._setPointerTransform();
        }
        _setDisplayTransforms() {
          this.myDisplayPanel.setTranslationLocal(this._mySetup.myDisplayPanelPosition);
          this.myVariableLabelPanel.setTranslationLocal(this._mySetup.myVariableLabelPanelPosition);
          this.myVariableLabelText.scale(this._mySetup.myVariableLabelTextScale);
          this.myTypeNotSupportedPanel.setTranslationLocal(this._mySetup.myTypeNotSupportedPanelPosition);
          this.myTypeNotSupportedText.scale(this._mySetup.myTypeNotSupportedTextScale);
          this.myNextButtonPanel.setTranslationLocal(this._mySetup.myRightSideButtonPosition);
          this.myNextButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myNextButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myNextButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myNextButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myPreviousButtonPanel.setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
          this.myPreviousButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myPreviousButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myPreviousButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myPreviousButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
        }
        _setPointerTransform() {
          this.myPointerCursorTarget.setTranslationLocal(this._mySetup.myPointerCursorTargetPosition);
        }
        _addComponents() {
          this.myBackBackgroundComponent = this.myBackBackground.addComponent("mesh");
          this.myBackBackgroundComponent.mesh = this._myPlaneMesh;
          this.myBackBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myBackBackgroundComponent.material.color = this._mySetup.myBackBackgroundColor;
          this._addDisplayComponents();
          this._addPointerComponents();
        }
        _addDisplayComponents() {
          this.myVariableLabelTextComponent = this.myVariableLabelText.addComponent("text");
          this._setupTextComponent(this.myVariableLabelTextComponent);
          this.myVariableLabelTextComponent.text = " ";
          this.myTypeNotSupportedTextComponent = this.myTypeNotSupportedText.addComponent("text");
          this._setupTextComponent(this.myTypeNotSupportedTextComponent);
          this.myTypeNotSupportedTextComponent.text = this._mySetup.myTypeNotSupportedText;
          this.myNextButtonBackgroundComponent = this.myNextButtonBackground.addComponent("mesh");
          this.myNextButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myNextButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myNextButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myNextButtonTextComponent = this.myNextButtonText.addComponent("text");
          this._setupTextComponent(this.myNextButtonTextComponent);
          this.myNextButtonTextComponent.text = this._mySetup.myNextButtonText;
          this.myNextButtonCursorTargetComponent = this.myNextButtonCursorTarget.addComponent("cursor-target");
          this.myNextButtonCollisionComponent = this.myNextButtonCursorTarget.addComponent("collision");
          this.myNextButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myNextButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myNextButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myPreviousButtonBackgroundComponent = this.myPreviousButtonBackground.addComponent("mesh");
          this.myPreviousButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myPreviousButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myPreviousButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myPreviousButtonTextComponent = this.myPreviousButtonText.addComponent("text");
          this._setupTextComponent(this.myPreviousButtonTextComponent);
          this.myPreviousButtonTextComponent.text = this._mySetup.myPreviousButtonText;
          this.myPreviousButtonCursorTargetComponent = this.myPreviousButtonCursorTarget.addComponent("cursor-target");
          this.myPreviousButtonCollisionComponent = this.myPreviousButtonCursorTarget.addComponent("collision");
          this.myPreviousButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPreviousButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPreviousButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
        }
        _addPointerComponents() {
          this.myPointerCollisionComponent = this.myPointerCursorTarget.addComponent("collision");
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
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_none_widget_setup.js
  var require_easy_tune_none_widget_setup = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_none_widget_setup.js"() {
      PP.EasyTuneNoneWidgetSetup = class EasyTuneNoneWidgetSetup {
        constructor() {
          this._initializeBuildSetup();
          this._initializeRuntimeSetup();
        }
        _initializeBuildSetup() {
          this.myBackgroundColor = [46 / 255, 46 / 255, 46 / 255, 1];
          this.myCursorTargetCollisionCollider = 2;
          this.myCursorTargetCollisionGroup = 7;
          this.myCursorTargetCollisionThickness = 1e-3;
          this.myDefaultTextColor = [255 / 255, 255 / 255, 255 / 255, 1];
          this.myTextAlignment = 2;
          this.myTextJustification = 2;
          this.myTextOutlineRange = [0.45, 0.45];
          this.myTextColor = this.myDefaultTextColor;
          this.myTextOutlineColor = this.myDefaultTextColor;
          this.myPivotObjectPositions = [];
          this.myPivotObjectPositions[PP.ToolHandedness.NONE] = [0, 0, 0];
          this.myPivotObjectPositions[PP.ToolHandedness.LEFT] = [-0.04, 0.02, 4213e-8];
          this.myPivotObjectPositions[PP.ToolHandedness.RIGHT] = [-0.08, 0.02, 4213e-8];
          let panelZ = 0.01;
          let distanceFromBorder = 0.0125;
          let colliderZPosition = 0.017;
          let backgroundHalfWidth = 0.2;
          this.mySideButtonBackgroundScale = [0.015, 0.015, 1];
          this.mySideButtonTextScale = [0.18, 0.18, 0.18];
          this.mySideButtonTextPosition = [0, 0, 7e-3];
          this.mySideButtonCursorTargetPosition = [0, 0, 0];
          this.mySideButtonCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.mySideButtonCollisionExtents = this.mySideButtonBackgroundScale.slice(0);
          this.mySideButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myLeftSideButtonPosition = [0, 0, -1e-5];
          this.myLeftSideButtonPosition[0] = -backgroundHalfWidth + this.mySideButtonBackgroundScale[0] + distanceFromBorder;
          this.myRightSideButtonPosition = [0, 0, -1e-5];
          this.myRightSideButtonPosition[0] = backgroundHalfWidth - this.mySideButtonBackgroundScale[0] - distanceFromBorder;
          this.myDisplayPanelPosition = [0, 0.1, 0];
          this.myVariableLabelPanelPosition = [0, 0.025, panelZ];
          this.myVariableLabelTextScale = [0.19, 0.19, 0.19];
          this.myTypeNotSupportedPanelPosition = [0, -0.03, panelZ];
          this.myTypeNotSupportedTextScale = [0.275, 0.275, 0.275];
          this.myTypeNotSupportedText = "Type Not Supported";
          this.myValueCursorTargetPosition = [0, 0, 0];
          this.myValueCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.myValueCollisionExtents = [0.065, 0.02, 1];
          this.myValueCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myNextButtonText = ">";
          this.myPreviousButtonText = "<";
          {
            let maxY = this.myDisplayPanelPosition[1] + this.myVariableLabelPanelPosition[1] + this.mySideButtonBackgroundScale[1] + distanceFromBorder * 1.25;
            let minY = this.myDisplayPanelPosition[1] + this.myTypeNotSupportedPanelPosition[1] - distanceFromBorder * 1.25 - this.mySideButtonBackgroundScale[1];
            this.myBackPanelPosition = [0, (maxY + minY) / 2, 0];
            this.myBackBackgroundScale = [backgroundHalfWidth, (maxY - minY) / 2, 1];
            this.myBackBackgroundColor = [70 / 255, 70 / 255, 70 / 255, 1];
          }
          this.myPointerCollisionExtents = this.myBackBackgroundScale.slice(0);
          this.myPointerCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myPointerCursorTargetPosition = this.myBackPanelPosition.slice(0);
          this.myPointerCursorTargetPosition[2] = colliderZPosition - 1e-4;
        }
        _initializeRuntimeSetup() {
          this.myButtonHoverColor = [150 / 255, 150 / 255, 150 / 255, 1];
          this.myScrollVariableDelay = 0.5;
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_number_array_widget.js
  var require_easy_tune_number_array_widget = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_number_array_widget.js"() {
      PP.EasyTuneNumberArrayWidget = class EasyTuneNumberArrayWidget {
        constructor(arraySize, gamepad) {
          this._myGamepad = gamepad;
          this._mySetup = new PP.EasyTuneNumberArrayWidgetSetup(arraySize);
          this._myUI = new PP.EasyTuneNumberArrayWidgetUI();
          this._myVariable = null;
          this._myIsVisible = true;
          this._myScrollVariableRequestCallbacks = /* @__PURE__ */ new Map();
          this._myAppendToVariableName = "";
          this._myValueEditIndex = -1;
          this._myValueButtonEditIntensity = 0;
          this._myValueButtonEditIntensityTimer = 0;
          this._myStepButtonEditIntensity = 0;
          this._myStepButtonEditIntensityTimer = 0;
          this._myValueEditActive = false;
          this._myStepEditActive = false;
          this._myValueRealValue = null;
          this._myStepMultiplierValue = null;
          this._myStepFastEdit = false;
          this._myScrollVariableActive = false;
          this._myScrollDirection = 0;
          this._myScrollVariableTimer = 0;
          this._myHasScrolled = false;
        }
        setEasyTuneVariable(variable, appendToVariableName) {
          this._myVariable = variable;
          if (typeof appendToVariableName !== "undefined") {
            this._myAppendToVariableName = appendToVariableName;
          } else {
            this._myAppendToVariableName = "";
          }
          if (this._myValueEditIndex >= 0) {
            this._myValueRealValue = this._myVariable.myValue[this._myValueEditIndex];
          }
          this._refreshUI();
        }
        isScrollVariableActive() {
          return this._myScrollVariableActive;
        }
        getScrollVariableDirection() {
          return this._myScrollDirection;
        }
        setScrollVariableActive(active, scrollDirection) {
          this._myScrollVariableActive = active;
          this._myScrollDirection = scrollDirection;
          this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
          this._myHasScrolled = false;
        }
        _refreshUI() {
          if (this._myVariable) {
            this._myUI.myVariableLabelTextComponent.text = this._myVariable.myName.concat(this._myAppendToVariableName);
            for (let i = 0; i < this._mySetup.myArraySize; i++) {
              this._myUI.myValueTextComponents[i].text = this._myVariable.myValue[i].toFixed(this._myVariable.myDecimalPlaces);
            }
            this._myUI.myStepTextComponent.text = this._mySetup.myStepStartString.concat(this._myVariable.myStepPerSecond);
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
            this._updateScrollVariable(dt);
          }
        }
        _updateValue(dt) {
          let stickVariableIntensity = 0;
          if (this._myGamepad) {
            let y = this._myGamepad.getAxesInfo().myAxes[1];
            if (Math.abs(y) > this._mySetup.myEditThumbstickMinThreshold) {
              let normalizedEditAmount = (Math.abs(y) - this._mySetup.myEditThumbstickMinThreshold) / (1 - this._mySetup.myEditThumbstickMinThreshold);
              stickVariableIntensity = Math.sign(y) * normalizedEditAmount;
            }
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
          if (valueIntensity != 0) {
            let amountToAdd = valueIntensity * this._myVariable.myStepPerSecond * dt;
            this._myValueRealValue += amountToAdd;
            if (this._myVariable.myMin != null && this._myVariable.myMax != null) {
              this._myValueRealValue = Math.pp_clamp(this._myValueRealValue, this._myVariable.myMin, this._myVariable.myMax);
            } else if (this._myVariable.myMin != null) {
              this._myValueRealValue = Math.max(this._myValueRealValue, this._myVariable.myMin);
            } else if (this._myVariable.myMax != null) {
              this._myValueRealValue = Math.min(this._myValueRealValue, this._myVariable.myMax);
            }
            let decimalPlacesMultiplier = Math.pow(10, this._myVariable.myDecimalPlaces);
            if (this._myVariable.myEditAllValuesTogether) {
              let newValue = Math.round(this._myValueRealValue * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
              let difference = newValue - this._myVariable.myValue[this._myValueEditIndex];
              for (let i = 0; i < this._mySetup.myArraySize; i++) {
                this._myVariable.myValue[i] = Math.round((this._myVariable.myValue[i] + difference) * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
                if (this._myVariable.myMin != null && this._myVariable.myMax != null) {
                  this._myVariable.myValue[i] = Math.pp_clamp(this._myVariable.myValue[i], this._myVariable.myMin, this._myVariable.myMax);
                } else if (this._myVariable.myMin != null) {
                  this._myVariable.myValue[i] = Math.max(this._myVariable.myValue[i], this._myVariable.myMin);
                } else if (this._myVariable.myMax != null) {
                  this._myVariable.myValue[i] = Math.min(this._myVariable.myValue[i], this._myVariable.myMax);
                }
                this._myUI.myValueTextComponents[i].text = this._myVariable.myValue[i].toFixed(this._myVariable.myDecimalPlaces);
              }
            } else {
              this._myVariable.myValue[this._myValueEditIndex] = Math.round(this._myValueRealValue * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
              if (this._myVariable.myMin != null && this._myVariable.myMax != null) {
                this._myVariable.myValue[this._myValueEditIndex] = Math.pp_clamp(this._myVariable.myValue[this._myValueEditIndex], this._myVariable.myMin, this._myVariable.myMax);
              } else if (this._myVariable.myMin != null) {
                this._myVariable.myValue[this._myValueEditIndex] = Math.max(this._myVariable.myValue[this._myValueEditIndex], this._myVariable.myMin);
              } else if (this._myVariable.myMax != null) {
                this._myVariable.myValue[this._myValueEditIndex] = Math.min(this._myVariable.myValue[this._myValueEditIndex], this._myVariable.myMax);
              }
              this._myUI.myValueTextComponents[this._myValueEditIndex].text = this._myVariable.myValue[this._myValueEditIndex].toFixed(this._myVariable.myDecimalPlaces);
            }
          } else {
            this._myValueRealValue = this._myVariable.myValue[this._myValueEditIndex];
          }
          let stepIntensity = 0;
          if (this._myStepEditActive) {
            stepIntensity = stickVariableIntensity;
          } else if (this._myStepButtonEditIntensity != 0) {
            if (this._myStepButtonEditIntensityTimer <= 0) {
              stepIntensity = this._myStepButtonEditIntensity;
            } else {
              this._myStepButtonEditIntensityTimer -= dt;
            }
          }
          if (stepIntensity != 0) {
            let amountToAdd = 0;
            if (this._myStepFastEdit) {
              amountToAdd = Math.sign(stepIntensity) * 1;
              this._myStepFastEdit = false;
            } else {
              amountToAdd = stepIntensity * this._mySetup.myStepMultiplierStepPerSecond * dt;
            }
            this._myStepMultiplierValue += amountToAdd;
            if (Math.abs(this._myStepMultiplierValue) >= 1) {
              if (Math.sign(this._myStepMultiplierValue) > 0) {
                this._myStepMultiplierValue -= 1;
                this._changeStep(this._myVariable.myStepPerSecond * 10);
              } else {
                this._myStepMultiplierValue += 1;
                this._changeStep(this._myVariable.myStepPerSecond * 0.1);
              }
            }
          } else {
            this._myStepMultiplierValue = 0;
            this._myStepFastEdit = true;
          }
        }
        _updateScrollVariable(dt) {
          if (this._myScrollVariableActive) {
            if (this._myScrollVariableTimer <= 0) {
              this._scrollVariableRequest(this._myScrollDirection);
              this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
              this._myHasScrolled = true;
            } else {
              this._myScrollVariableTimer -= dt;
            }
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
          ui.myNextButtonCursorTargetComponent.addDownFunction(this._setScrollVariableActive.bind(this, true, 1, false));
          ui.myNextButtonCursorTargetComponent.addDownOnHoverFunction(this._setScrollVariableActive.bind(this, true, 1, false));
          ui.myNextButtonCursorTargetComponent.addUpFunction(this._setScrollVariableActive.bind(this, false, 0, false));
          ui.myNextButtonCursorTargetComponent.addUpWithNoDownFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myNextButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myNextButtonBackgroundComponent.material));
          ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myNextButtonBackgroundComponent.material));
          ui.myPreviousButtonCursorTargetComponent.addDownFunction(this._setScrollVariableActive.bind(this, true, -1, false));
          ui.myPreviousButtonCursorTargetComponent.addDownOnHoverFunction(this._setScrollVariableActive.bind(this, true, -1, false));
          ui.myPreviousButtonCursorTargetComponent.addUpFunction(this._setScrollVariableActive.bind(this, false, 0, false));
          ui.myPreviousButtonCursorTargetComponent.addUpWithNoDownFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myPreviousButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
          ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            ui.myValueIncreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, i, 1));
            ui.myValueIncreaseButtonCursorTargetComponents[i].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, i, 1));
            ui.myValueIncreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, i, 0));
            ui.myValueIncreaseButtonCursorTargetComponents[i].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, i, 0));
            ui.myValueIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._setValueEditIntensity.bind(this, i, 0));
            ui.myValueDecreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, i, -1));
            ui.myValueDecreaseButtonCursorTargetComponents[i].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, i, -1));
            ui.myValueDecreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, i, 0));
            ui.myValueDecreaseButtonCursorTargetComponents[i].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, i, 0));
            ui.myValueDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._setValueEditIntensity.bind(this, i, 0));
            ui.myValueIncreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myValueIncreaseButtonBackgroundComponents[i].material));
            ui.myValueIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myValueIncreaseButtonBackgroundComponents[i].material));
            ui.myValueDecreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myValueDecreaseButtonBackgroundComponents[i].material));
            ui.myValueDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myValueDecreaseButtonBackgroundComponents[i].material));
            ui.myValueCursorTargetComponents[i].addClickFunction(this._resetValue.bind(this, i));
            ui.myValueCursorTargetComponents[i].addHoverFunction(this._setValueEditActive.bind(this, i, ui.myValueTexts[i], true));
            ui.myValueCursorTargetComponents[i].addUnHoverFunction(this._setValueEditActive.bind(this, i, ui.myValueTexts[i], false));
          }
          ui.myStepCursorTargetComponent.addClickFunction(this._resetStep.bind(this));
          ui.myStepCursorTargetComponent.addHoverFunction(this._setStepEditActive.bind(this, ui.myStepText, true));
          ui.myStepCursorTargetComponent.addUnHoverFunction(this._setStepEditActive.bind(this, ui.myStepText, false));
          ui.myStepIncreaseButtonCursorTargetComponent.addDownFunction(this._setStepEditIntensity.bind(this, 1));
          ui.myStepIncreaseButtonCursorTargetComponent.addDownOnHoverFunction(this._setStepEditIntensity.bind(this, 1));
          ui.myStepIncreaseButtonCursorTargetComponent.addUpFunction(this._setStepEditIntensity.bind(this, 0));
          ui.myStepIncreaseButtonCursorTargetComponent.addUpWithNoDownFunction(this._setStepEditIntensity.bind(this, 0));
          ui.myStepIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._setStepEditIntensity.bind(this, 0));
          ui.myStepDecreaseButtonCursorTargetComponent.addDownFunction(this._setStepEditIntensity.bind(this, -1));
          ui.myStepDecreaseButtonCursorTargetComponent.addDownOnHoverFunction(this._setStepEditIntensity.bind(this, -1));
          ui.myStepDecreaseButtonCursorTargetComponent.addUpFunction(this._setStepEditIntensity.bind(this, 0));
          ui.myStepDecreaseButtonCursorTargetComponent.addUpWithNoDownFunction(this._setStepEditIntensity.bind(this, 0));
          ui.myStepDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._setStepEditIntensity.bind(this, 0));
          ui.myStepIncreaseButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myStepIncreaseButtonBackgroundComponent.material));
          ui.myStepIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myStepIncreaseButtonBackgroundComponent.material));
          ui.myStepDecreaseButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myStepDecreaseButtonBackgroundComponent.material));
          ui.myStepDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myStepDecreaseButtonBackgroundComponent.material));
        }
        _setValueEditIntensity(index, value) {
          if (this._isActive() || value == 0) {
            if (value != 0) {
              this._myValueButtonEditIntensityTimer = this._mySetup.myButtonEditDelay;
              this._myValueRealValue = this._myVariable.myValue[index];
              this._myValueEditIndex = index;
            }
            this._myValueButtonEditIntensity = value;
          }
        }
        _setStepEditIntensity(value) {
          if (this._isActive() || value == 0) {
            if (value != 0) {
              this._myStepButtonEditIntensityTimer = this._mySetup.myButtonEditDelay;
            }
            this._myStepButtonEditIntensity = value;
          }
        }
        _setValueEditActive(index, text, active) {
          if (this._isActive() || !active) {
            if (active) {
              this._myValueRealValue = this._myVariable.myValue[index];
              this._myValueEditIndex = index;
              text.scale(this._mySetup.myTextHoverScaleMultiplier);
            } else {
              text.scalingWorld = this._mySetup.myValueTextScale;
            }
            this._myValueEditActive = active;
          }
        }
        _setStepEditActive(text, active) {
          if (this._isActive() || !active) {
            if (active) {
              text.scale(this._mySetup.myTextHoverScaleMultiplier);
            } else {
              text.scalingWorld = this._mySetup.myStepTextScale;
            }
            this._myStepEditActive = active;
          }
        }
        _setScrollVariableActive(active, scrollDirection, skipForceScroll) {
          if (this._isActive() || !active) {
            let forceScroll = !active && !this._myHasScrolled && !skipForceScroll;
            let oldScrollDirection = this._myScrollDirection;
            this.setScrollVariableActive(active, scrollDirection);
            if (forceScroll) {
              this._scrollVariableRequest(oldScrollDirection);
            }
          }
        }
        _scrollVariableRequest(amount) {
          if (this._isActive() && amount != 0) {
            for (let callback of this._myScrollVariableRequestCallbacks.values()) {
              callback(amount);
            }
          }
        }
        _resetValue(index) {
          if (this._isActive()) {
            this._myVariable.myValue[index] = this._myVariable.myInitialValue[index];
            this._myUI.myValueTextComponents[index].text = this._myVariable.myValue[index].toFixed(this._myVariable.myDecimalPlaces);
          }
        }
        _resetAllValues() {
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this._resetValue(i);
          }
        }
        _resetStep() {
          if (this._isActive()) {
            this._changeStep(this._myVariable.myInitialStepPerSecond);
          }
        }
        _changeStep(step) {
          step = Math.pp_roundDecimal(step, 10);
          this._myVariable.myStepPerSecond = step;
          this._myUI.myStepTextComponent.text = this._mySetup.myStepStartString.concat(this._myVariable.myStepPerSecond);
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
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_number_array_widget_ui.js
  var require_easy_tune_number_array_widget_ui = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_number_array_widget_ui.js"() {
      PP.EasyTuneNumberArrayWidgetUI = class EasyTuneNumberArrayWidgetUI {
        build(parentObject, setup, additionalSetup) {
          this._myParentObject = parentObject;
          this._mySetup = setup;
          this._myAdditionalSetup = additionalSetup;
          this._myAdditionalButtonsActive = true;
          this._myPlaneMesh = PP.MeshUtils.createPlaneMesh();
          this._createSkeleton();
          this._setTransforms();
          this._addComponents();
        }
        setVisible(visible) {
          this.myPivotObject.pp_setActiveHierarchy(visible);
          if (visible) {
            this.setAdditionalButtonsActive(this._myAdditionalButtonsActive);
          }
        }
        setAdditionalButtonsActive(active) {
          this._myAdditionalButtonsActive = active;
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this.myValueIncreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
            this.myValueDecreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          }
          this.myStepIncreaseButtonPanel.pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          this.myStepDecreaseButtonPanel.pp_setActiveHierarchy(this._myAdditionalButtonsActive);
        }
        _createSkeleton() {
          this.myPivotObject = WL.scene.addObject(this._myParentObject);
          this.myBackPanel = WL.scene.addObject(this.myPivotObject);
          this.myBackBackground = WL.scene.addObject(this.myBackPanel);
          this._createDisplaySkeleton();
          this._createStepSkeleton();
          this._createPointerSkeleton();
        }
        _createDisplaySkeleton() {
          this.myDisplayPanel = WL.scene.addObject(this.myPivotObject);
          this.myVariableLabelPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myVariableLabelText = WL.scene.addObject(this.myVariableLabelPanel);
          this.myVariableLabelCursorTarget = WL.scene.addObject(this.myVariableLabelPanel);
          this.myNextButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
          this.myNextButtonBackground = WL.scene.addObject(this.myNextButtonPanel);
          this.myNextButtonText = WL.scene.addObject(this.myNextButtonPanel);
          this.myNextButtonCursorTarget = WL.scene.addObject(this.myNextButtonPanel);
          this.myPreviousButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
          this.myPreviousButtonBackground = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPreviousButtonText = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPreviousButtonCursorTarget = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myValuesPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myValuePanels = [];
          this.myValueTexts = [];
          this.myValueCursorTargets = [];
          this.myValueIncreaseButtonPanels = [];
          this.myValueIncreaseButtonBackgrounds = [];
          this.myValueIncreaseButtonTexts = [];
          this.myValueIncreaseButtonCursorTargets = [];
          this.myValueDecreaseButtonPanels = [];
          this.myValueDecreaseButtonBackgrounds = [];
          this.myValueDecreaseButtonTexts = [];
          this.myValueDecreaseButtonCursorTargets = [];
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this.myValuePanels[i] = WL.scene.addObject(this.myValuesPanel);
            this.myValueTexts[i] = WL.scene.addObject(this.myValuePanels[i]);
            this.myValueCursorTargets[i] = WL.scene.addObject(this.myValuePanels[i]);
            this.myValueIncreaseButtonPanels[i] = WL.scene.addObject(this.myValuePanels[i]);
            this.myValueIncreaseButtonBackgrounds[i] = WL.scene.addObject(this.myValueIncreaseButtonPanels[i]);
            this.myValueIncreaseButtonTexts[i] = WL.scene.addObject(this.myValueIncreaseButtonPanels[i]);
            this.myValueIncreaseButtonCursorTargets[i] = WL.scene.addObject(this.myValueIncreaseButtonPanels[i]);
            this.myValueDecreaseButtonPanels[i] = WL.scene.addObject(this.myValuePanels[i]);
            this.myValueDecreaseButtonBackgrounds[i] = WL.scene.addObject(this.myValueDecreaseButtonPanels[i]);
            this.myValueDecreaseButtonTexts[i] = WL.scene.addObject(this.myValueDecreaseButtonPanels[i]);
            this.myValueDecreaseButtonCursorTargets[i] = WL.scene.addObject(this.myValueDecreaseButtonPanels[i]);
          }
        }
        _createStepSkeleton() {
          this.myStepPanel = WL.scene.addObject(this.myPivotObject);
          this.myStepText = WL.scene.addObject(this.myStepPanel);
          this.myStepCursorTarget = WL.scene.addObject(this.myStepPanel);
          this.myStepIncreaseButtonPanel = WL.scene.addObject(this.myStepPanel);
          this.myStepIncreaseButtonBackground = WL.scene.addObject(this.myStepIncreaseButtonPanel);
          this.myStepIncreaseButtonText = WL.scene.addObject(this.myStepIncreaseButtonPanel);
          this.myStepIncreaseButtonCursorTarget = WL.scene.addObject(this.myStepIncreaseButtonPanel);
          this.myStepDecreaseButtonPanel = WL.scene.addObject(this.myStepPanel);
          this.myStepDecreaseButtonBackground = WL.scene.addObject(this.myStepDecreaseButtonPanel);
          this.myStepDecreaseButtonText = WL.scene.addObject(this.myStepDecreaseButtonPanel);
          this.myStepDecreaseButtonCursorTarget = WL.scene.addObject(this.myStepDecreaseButtonPanel);
        }
        _createPointerSkeleton() {
          this.myPointerCursorTarget = WL.scene.addObject(this.myPivotObject);
        }
        _setTransforms() {
          this.myPivotObject.setTranslationLocal(this._mySetup.myPivotObjectPositions[this._myAdditionalSetup.myHandedness]);
          this.myBackPanel.setTranslationLocal(this._mySetup.myBackPanelPosition);
          this.myBackBackground.scale(this._mySetup.myBackBackgroundScale);
          this._setDisplayTransforms();
          this._setStepTransforms();
          this._setPointerTransform();
        }
        _setDisplayTransforms() {
          this.myDisplayPanel.setTranslationLocal(this._mySetup.myDisplayPanelPosition);
          this.myVariableLabelPanel.setTranslationLocal(this._mySetup.myVariableLabelPanelPosition);
          this.myVariableLabelText.scale(this._mySetup.myVariableLabelTextScale);
          this.myVariableLabelCursorTarget.setTranslationLocal(this._mySetup.myVariableLabelCursorTargetPosition);
          this.myNextButtonPanel.setTranslationLocal(this._mySetup.myRightSideButtonPosition);
          this.myNextButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myNextButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myNextButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myNextButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myPreviousButtonPanel.setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
          this.myPreviousButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myPreviousButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myPreviousButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myPreviousButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myValuesPanel.setTranslationLocal(this._mySetup.myValuesPanelPosition);
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this.myValuePanels[i].setTranslationLocal(this._mySetup.myValuePanelsPositions[i]);
            this.myValueTexts[i].scale(this._mySetup.myValueTextScale);
            this.myValueCursorTargets[i].setTranslationLocal(this._mySetup.myValueCursorTargetPosition);
            this.myValueIncreaseButtonPanels[i].setTranslationLocal(this._mySetup.myRightSideButtonPosition);
            this.myValueIncreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myValueIncreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myValueIncreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myValueIncreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
            this.myValueDecreaseButtonPanels[i].setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
            this.myValueDecreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myValueDecreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myValueDecreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myValueDecreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          }
        }
        _setStepTransforms() {
          this.myStepPanel.setTranslationLocal(this._mySetup.myStepPanelPosition);
          this.myStepText.scale(this._mySetup.myStepTextScale);
          this.myStepCursorTarget.setTranslationLocal(this._mySetup.myStepCursorTargetPosition);
          this.myStepIncreaseButtonPanel.setTranslationLocal(this._mySetup.myRightSideButtonPosition);
          this.myStepIncreaseButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myStepIncreaseButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myStepIncreaseButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myStepIncreaseButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myStepDecreaseButtonPanel.setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
          this.myStepDecreaseButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myStepDecreaseButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myStepDecreaseButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myStepDecreaseButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
        }
        _setPointerTransform() {
          this.myPointerCursorTarget.setTranslationLocal(this._mySetup.myPointerCursorTargetPosition);
        }
        _addComponents() {
          this.myBackBackgroundComponent = this.myBackBackground.addComponent("mesh");
          this.myBackBackgroundComponent.mesh = this._myPlaneMesh;
          this.myBackBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myBackBackgroundComponent.material.color = this._mySetup.myBackBackgroundColor;
          this._addDisplayComponents();
          this._addStepComponents();
          this._addPointerComponents();
        }
        _addDisplayComponents() {
          this.myVariableLabelTextComponent = this.myVariableLabelText.addComponent("text");
          this._setupTextComponent(this.myVariableLabelTextComponent);
          this.myVariableLabelTextComponent.text = " ";
          this.myVariableLabelCursorTargetComponent = this.myVariableLabelCursorTarget.addComponent("cursor-target");
          this.myVariableLabelCollisionComponent = this.myVariableLabelCursorTarget.addComponent("collision");
          this.myVariableLabelCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myVariableLabelCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myVariableLabelCollisionComponent.extents = this._mySetup.myVariableLabelCollisionExtents;
          this.myNextButtonBackgroundComponent = this.myNextButtonBackground.addComponent("mesh");
          this.myNextButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myNextButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myNextButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myNextButtonTextComponent = this.myNextButtonText.addComponent("text");
          this._setupTextComponent(this.myNextButtonTextComponent);
          this.myNextButtonTextComponent.text = this._mySetup.myNextButtonText;
          this.myNextButtonCursorTargetComponent = this.myNextButtonCursorTarget.addComponent("cursor-target");
          this.myNextButtonCollisionComponent = this.myNextButtonCursorTarget.addComponent("collision");
          this.myNextButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myNextButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myNextButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myPreviousButtonBackgroundComponent = this.myPreviousButtonBackground.addComponent("mesh");
          this.myPreviousButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myPreviousButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myPreviousButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myPreviousButtonTextComponent = this.myPreviousButtonText.addComponent("text");
          this._setupTextComponent(this.myPreviousButtonTextComponent);
          this.myPreviousButtonTextComponent.text = this._mySetup.myPreviousButtonText;
          this.myPreviousButtonCursorTargetComponent = this.myPreviousButtonCursorTarget.addComponent("cursor-target");
          this.myPreviousButtonCollisionComponent = this.myPreviousButtonCursorTarget.addComponent("collision");
          this.myPreviousButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPreviousButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPreviousButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myValueTextComponents = [];
          this.myValueCursorTargetComponents = [];
          this.myValueCollisionComponents = [];
          this.myValueIncreaseButtonBackgroundComponents = [];
          this.myValueIncreaseButtonTextComponents = [];
          this.myValueIncreaseButtonCursorTargetComponents = [];
          this.myValueIncreaseButtonCollisionComponents = [];
          this.myValueDecreaseButtonBackgroundComponents = [];
          this.myValueDecreaseButtonTextComponents = [];
          this.myValueDecreaseButtonCursorTargetComponents = [];
          this.myValueDecreaseButtonCollisionComponents = [];
          for (let i = 0; i < this._mySetup.myArraySize; i++) {
            this.myValueTextComponents[i] = this.myValueTexts[i].addComponent("text");
            this._setupTextComponent(this.myValueTextComponents[i]);
            this.myValueTextComponents[i].text = " ";
            this.myValueCursorTargetComponents[i] = this.myValueCursorTargets[i].addComponent("cursor-target");
            this.myValueCollisionComponents[i] = this.myValueCursorTargets[i].addComponent("collision");
            this.myValueCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myValueCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myValueCollisionComponents[i].extents = this._mySetup.myValueCollisionExtents;
            this.myValueIncreaseButtonBackgroundComponents[i] = this.myValueIncreaseButtonBackgrounds[i].addComponent("mesh");
            this.myValueIncreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myValueIncreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myValueIncreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myValueIncreaseButtonTextComponents[i] = this.myValueIncreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myValueIncreaseButtonTextComponents[i]);
            this.myValueIncreaseButtonTextComponents[i].text = this._mySetup.myIncreaseButtonText;
            this.myValueIncreaseButtonCursorTargetComponents[i] = this.myValueIncreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myValueIncreaseButtonCollisionComponents[i] = this.myValueIncreaseButtonCursorTargets[i].addComponent("collision");
            this.myValueIncreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myValueIncreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myValueIncreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
            this.myValueDecreaseButtonBackgroundComponents[i] = this.myValueDecreaseButtonBackgrounds[i].addComponent("mesh");
            this.myValueDecreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myValueDecreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myValueDecreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myValueDecreaseButtonTextComponents[i] = this.myValueDecreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myValueDecreaseButtonTextComponents[i]);
            this.myValueDecreaseButtonTextComponents[i].text = this._mySetup.myDecreaseButtonText;
            this.myValueDecreaseButtonCursorTargetComponents[i] = this.myValueDecreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myValueDecreaseButtonCollisionComponents[i] = this.myValueDecreaseButtonCursorTargets[i].addComponent("collision");
            this.myValueDecreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myValueDecreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myValueDecreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
          }
        }
        _addStepComponents() {
          this.myStepTextComponent = this.myStepText.addComponent("text");
          this._setupTextComponent(this.myStepTextComponent);
          this.myStepTextComponent.text = " ";
          this.myStepCursorTargetComponent = this.myStepCursorTarget.addComponent("cursor-target");
          this.myStepCollisionComponent = this.myStepCursorTarget.addComponent("collision");
          this.myStepCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myStepCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myStepCollisionComponent.extents = this._mySetup.myStepCollisionExtents;
          this.myStepIncreaseButtonBackgroundComponent = this.myStepIncreaseButtonBackground.addComponent("mesh");
          this.myStepIncreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myStepIncreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myStepIncreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myStepIncreaseButtonTextComponent = this.myStepIncreaseButtonText.addComponent("text");
          this._setupTextComponent(this.myStepIncreaseButtonTextComponent);
          this.myStepIncreaseButtonTextComponent.text = this._mySetup.myIncreaseButtonText;
          this.myStepIncreaseButtonCursorTargetComponent = this.myStepIncreaseButtonCursorTarget.addComponent("cursor-target");
          this.myStepIncreaseButtonCollisionComponent = this.myStepIncreaseButtonCursorTarget.addComponent("collision");
          this.myStepIncreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myStepIncreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myStepIncreaseButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myStepDecreaseButtonBackgroundComponent = this.myStepDecreaseButtonBackground.addComponent("mesh");
          this.myStepDecreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myStepDecreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myStepDecreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myStepDecreaseButtonTextComponent = this.myStepDecreaseButtonText.addComponent("text");
          this._setupTextComponent(this.myStepDecreaseButtonTextComponent);
          this.myStepDecreaseButtonTextComponent.text = this._mySetup.myDecreaseButtonText;
          this.myStepDecreaseButtonCursorTargetComponent = this.myStepDecreaseButtonCursorTarget.addComponent("cursor-target");
          this.myStepDecreaseButtonCollisionComponent = this.myStepDecreaseButtonCursorTarget.addComponent("collision");
          this.myStepDecreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myStepDecreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myStepDecreaseButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
        }
        _addPointerComponents() {
          this.myPointerCollisionComponent = this.myPointerCursorTarget.addComponent("collision");
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
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_number_array_widget_setup.js
  var require_easy_tune_number_array_widget_setup = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_number_array_widget_setup.js"() {
      PP.EasyTuneNumberArrayWidgetSetup = class EasyTuneNumberArrayWidgetSetup {
        constructor(arraySize) {
          this.myArraySize = arraySize;
          this._initializeBuildSetup();
          this._initializeRuntimeSetup();
        }
        _initializeBuildSetup() {
          this.myBackgroundColor = [46 / 255, 46 / 255, 46 / 255, 1];
          this.myCursorTargetCollisionCollider = 2;
          this.myCursorTargetCollisionGroup = 7;
          this.myCursorTargetCollisionThickness = 1e-3;
          this.myDefaultTextColor = [255 / 255, 255 / 255, 255 / 255, 1];
          this.myTextAlignment = 2;
          this.myTextJustification = 2;
          this.myTextOutlineRange = [0.45, 0.45];
          this.myTextColor = this.myDefaultTextColor;
          this.myTextOutlineColor = this.myDefaultTextColor;
          this.myPivotObjectPositions = [];
          this.myPivotObjectPositions[PP.ToolHandedness.NONE] = [0, 0, 0];
          this.myPivotObjectPositions[PP.ToolHandedness.LEFT] = [-0.04, 0.02, 3713e-8];
          this.myPivotObjectPositions[PP.ToolHandedness.RIGHT] = [-0.08, 0.02, 3713e-8];
          let panelZ = 0.01;
          let distanceFromBorder = 0.0125;
          let distanceFromValue = 0.055;
          let colliderZPosition = 0.017;
          let backgroundHalfWidth = 0.2;
          this.mySideButtonBackgroundScale = [0.015, 0.015, 1];
          this.mySideButtonTextScale = [0.18, 0.18, 0.18];
          this.mySideButtonTextPosition = [0, 0, 7e-3];
          this.mySideButtonCursorTargetPosition = [0, 0, 0];
          this.mySideButtonCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.mySideButtonCollisionExtents = this.mySideButtonBackgroundScale.slice(0);
          this.mySideButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myLeftSideButtonPosition = [0, 0, -1e-5];
          this.myLeftSideButtonPosition[0] = -backgroundHalfWidth + this.mySideButtonBackgroundScale[0] + distanceFromBorder;
          this.myRightSideButtonPosition = [0, 0, -1e-5];
          this.myRightSideButtonPosition[0] = backgroundHalfWidth - this.mySideButtonBackgroundScale[0] - distanceFromBorder;
          this.myIncreaseButtonText = "+";
          this.myDecreaseButtonText = "-";
          this.myDisplayPanelPosition = [0, 0.1, 0];
          this.myVariableLabelPanelPosition = [0, 0.025, panelZ];
          this.myVariableLabelTextScale = [0.19, 0.19, 0.19];
          this.myVariableLabelCursorTargetPosition = [0, 0, 0];
          this.myVariableLabelCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.myVariableLabelCollisionExtents = [0.065, 0.0175, 1];
          this.myVariableLabelCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myNextButtonText = ">";
          this.myPreviousButtonText = "<";
          this.myValuesPanelPosition = [0, this.myVariableLabelPanelPosition[1] - distanceFromValue, panelZ];
          this.myValueTextScale = [0.4, 0.4, 0.4];
          this.myValueCursorTargetPosition = [0, 0, 0];
          this.myValueCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.myValueCollisionExtents = [0.065, 0.02, 1];
          this.myValueCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myDistanceBetweenValues = this.mySideButtonBackgroundScale[1] * 2 + 0.015;
          this.myValuePanelsPositions = [];
          this.myValuePanelsPositions[0] = [0, 0, 0];
          for (let i = 1; i < this.myArraySize; i++) {
            this.myValuePanelsPositions[i] = this.myValuePanelsPositions[i - 1].slice(0);
            this.myValuePanelsPositions[i][1] -= this.myDistanceBetweenValues;
          }
          let valuePanelLastPosition = this.myValuePanelsPositions[this.myArraySize - 1] ? this.myValuePanelsPositions[this.myArraySize - 1][1] : 0;
          this.myStepPanelPosition = [0, this.myDisplayPanelPosition[1] + this.myValuesPanelPosition[1] + valuePanelLastPosition - distanceFromValue, panelZ];
          this.myStepTextScale = [0.19, 0.19, 0.19];
          this.myStepStartString = "Step: ";
          this.myStepCursorTargetPosition = [0, 0, 0];
          this.myStepCursorTargetPosition[2] = colliderZPosition - this.myStepPanelPosition[2];
          this.myStepCollisionExtents = [0.065, 0.0175, 1];
          this.myStepCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          {
            let maxY = this.myDisplayPanelPosition[1] + this.myVariableLabelPanelPosition[1] + this.mySideButtonBackgroundScale[1] + distanceFromBorder * 1.25;
            let minY = this.myStepPanelPosition[1] - distanceFromBorder * 1.25 - this.mySideButtonBackgroundScale[1];
            this.myBackPanelPosition = [0, (maxY + minY) / 2, 0];
            this.myBackBackgroundScale = [backgroundHalfWidth, (maxY - minY) / 2, 1];
            this.myBackBackgroundColor = [70 / 255, 70 / 255, 70 / 255, 1];
          }
          this.myPointerCollisionExtents = this.myBackBackgroundScale.slice(0);
          this.myPointerCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myPointerCursorTargetPosition = this.myBackPanelPosition.slice(0);
          this.myPointerCursorTargetPosition[2] = colliderZPosition - 1e-4;
        }
        _initializeRuntimeSetup() {
          this.myButtonHoverColor = [150 / 255, 150 / 255, 150 / 255, 1];
          this.myTextHoverScaleMultiplier = [1.25, 1.25, 1.25];
          this.myEditThumbstickMinThreshold = 0.35;
          this.myStepMultiplierStepPerSecond = 2.25;
          this.myButtonEditDelay = 0;
          this.myScrollVariableDelay = 0.5;
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_number_widget.js
  var require_easy_tune_number_widget = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_number_widget.js"() {
      PP.EasyTuneNumberWidget = class EasyTuneNumberWidget {
        constructor(gamepad) {
          this._myGamepad = gamepad;
          this._myParentObject = null;
          this._myAdditionalSetup = null;
          this._myWidgets = /* @__PURE__ */ new Map();
          this._myVariable = null;
          this._myIsVisible = true;
          this._myAppendToVariableName = null;
          this._myScrollVariableRequestCallbacks = /* @__PURE__ */ new Map();
          this._myCurrentArraySize = 0;
        }
        setEasyTuneVariable(variable, appendToVariableName) {
          this._myVariable = variable;
          this._myCurrentArraySize = this._myVariable.myValue.length;
          this._myAppendToVariableName = appendToVariableName;
          if (!this._myWidgets.has(this._myCurrentArraySize)) {
            this._createWidget(this._myCurrentArraySize);
          }
          this._myWidgets.get(this._myCurrentArraySize).setEasyTuneVariable(variable, appendToVariableName);
          this.setVisible(this._myIsVisible);
        }
        setVisible(visible) {
          if (this._myVariable) {
            this._sizeChangedCheck();
            for (let widget of this._myWidgets.values()) {
              widget.setVisible(false);
            }
            this._myWidgets.get(this._myCurrentArraySize).setVisible(visible);
          }
          this._myIsVisible = visible;
        }
        isScrollVariableActive() {
          let widget = this._myWidgets.get(this._myCurrentArraySize);
          if (widget) {
            return widget.isScrollVariableActive();
          }
          return false;
        }
        getScrollVariableDirection() {
          let widget = this._myWidgets.get(this._myCurrentArraySize);
          if (widget) {
            return widget.getScrollVariableDirection();
          }
          return 0;
        }
        setScrollVariableActive(active, scrollDirection) {
          let widget = this._myWidgets.get(this._myCurrentArraySize);
          if (widget) {
            widget.setScrollVariableActive(active, scrollDirection);
          }
        }
        registerScrollVariableRequestEventListener(id, callback) {
          this._myScrollVariableRequestCallbacks.set(id, callback);
        }
        unregisterScrollVariableRequestEventListener(id) {
          this._myScrollVariableRequestCallbacks.delete(id);
        }
        start(parentObject, additionalSetup) {
          this._myParentObject = parentObject;
          this._myAdditionalSetup = additionalSetup;
          this._createWidget(1);
          if (this._myVariable) {
            this.setEasyTuneVariable(this._myVariable, this._myAppendToVariableName);
          }
        }
        update(dt) {
          if (this._isActive()) {
            this._sizeChangedCheck();
            this._myWidgets.get(this._myCurrentArraySize).update(dt);
          }
        }
        _isActive() {
          return this._myIsVisible && this._myVariable;
        }
        _scrollVariableRequest(amount) {
          for (let callback of this._myScrollVariableRequestCallbacks.values()) {
            callback(amount);
          }
        }
        _createWidget(arraySize) {
          this._myWidgets.set(arraySize, new PP.EasyTuneNumberArrayWidget(arraySize, this._myGamepad));
          this._myWidgets.get(arraySize).start(this._myParentObject, this._myAdditionalSetup);
          this._myWidgets.get(arraySize).setVisible(false);
          this._myWidgets.get(arraySize).registerScrollVariableRequestEventListener(this, this._scrollVariableRequest.bind(this));
        }
        _sizeChangedCheck() {
          if (this._myVariable.myValue.length != this._myCurrentArraySize) {
            this.setEasyTuneVariable(this._myVariable, this._myAppendToVariableName);
          }
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_transform_widget.js
  var require_easy_tune_transform_widget = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_transform_widget.js"() {
      PP.EasyTuneTransformWidget = class EasyTuneTransformWidget {
        constructor(gamepad) {
          this._myGamepad = gamepad;
          this._mySetup = new PP.EasyTuneTransformWidgetSetup();
          this._myUI = new PP.EasyTuneTransformWidgetUI();
          this._myVariable = null;
          this._myIsVisible = true;
          this._myScrollVariableRequestCallbacks = /* @__PURE__ */ new Map();
          this._myAppendToVariableName = "";
          this._myValueButtonEditIntensity = 0;
          this._myValueButtonEditIntensityTimer = 0;
          this._myStepButtonEditIntensity = 0;
          this._myStepButtonEditIntensityTimer = 0;
          this._myValueEditActive = false;
          this._myStepEditActive = false;
          this._myValueRealValue = null;
          this._myComponentStepValue = null;
          this._myStepMultiplierValue = null;
          this._myStepFastEdit = false;
          this._myValueEditIndex = -1;
          this._myComponentIndex = 0;
          this._myStepIndex = 0;
          this._myScrollVariableActive = false;
          this._myScrollDirection = 0;
          this._myScrollVariableTimer = 0;
          this._myHasScrolled = false;
        }
        setEasyTuneVariable(variable, appendToVariableName) {
          this._myVariable = variable;
          if (typeof appendToVariableName !== "undefined") {
            this._myAppendToVariableName = appendToVariableName;
          } else {
            this._myAppendToVariableName = "";
          }
          this._refreshUI();
        }
        isScrollVariableActive() {
          return this._myScrollVariableActive;
        }
        getScrollVariableDirection() {
          return this._myScrollDirection;
        }
        setScrollVariableActive(active, scrollDirection) {
          this._myScrollVariableActive = active;
          this._myScrollDirection = scrollDirection;
          this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
          this._myHasScrolled = false;
        }
        _refreshUI() {
          if (this._myVariable) {
            this._myUI.myVariableLabelTextComponent.text = this._myVariable.myName.concat(this._myAppendToVariableName);
            for (let i = 0; i < 3; i++) {
              this._myUI.myPositionTextComponents[i].text = this._myVariable.myPosition[i].toFixed(this._myVariable.myDecimalPlaces);
            }
            this._myUI.myPositionStepTextComponent.text = this._mySetup.myStepStartString.concat(this._myVariable.myPositionStepPerSecond);
            for (let i = 0; i < 3; i++) {
              this._myUI.myRotationTextComponents[i].text = this._myVariable.myRotation[i].toFixed(this._myVariable.myDecimalPlaces);
            }
            this._myUI.myRotationStepTextComponent.text = this._mySetup.myStepStartString.concat(this._myVariable.myRotationStepPerSecond);
            for (let i = 0; i < 3; i++) {
              this._myUI.myScaleTextComponents[i].text = this._myVariable.myScale[i].toFixed(this._myVariable.myDecimalPlaces);
            }
            this._myUI.myScaleStepTextComponent.text = this._mySetup.myStepStartString.concat(this._myVariable.myScaleStepPerSecond);
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
            this._updateScrollVariable(dt);
          }
        }
        _updateValue(dt) {
          let stickVariableIntensity = 0;
          if (this._myGamepad) {
            let y = this._myGamepad.getAxesInfo().myAxes[1];
            if (Math.abs(y) > this._mySetup.myEditThumbstickMinThreshold) {
              let normalizedEditAmount = (Math.abs(y) - this._mySetup.myEditThumbstickMinThreshold) / (1 - this._mySetup.myEditThumbstickMinThreshold);
              stickVariableIntensity = Math.sign(y) * normalizedEditAmount;
            }
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
          if (valueIntensity != 0) {
            let amountToAdd = valueIntensity * this._myComponentStepValue * dt;
            this._myValueRealValue += amountToAdd;
            let decimalPlacesMultiplier = Math.pow(10, this._myVariable.myDecimalPlaces);
            switch (this._myComponentIndex) {
              case 0:
                this._myVariable.myPosition[this._myValueEditIndex] = Math.round(this._myValueRealValue * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
                this._myUI.myPositionTextComponents[this._myValueEditIndex].text = this._myVariable.myPosition[this._myValueEditIndex].toFixed(this._myVariable.myDecimalPlaces);
                break;
              case 1:
                if (this._myValueRealValue > 180) {
                  while (this._myValueRealValue > 180) {
                    this._myValueRealValue -= 180;
                  }
                  this._myValueRealValue = -180 + this._myValueRealValue;
                }
                if (this._myValueRealValue < -180) {
                  while (this._myValueRealValue < -180) {
                    this._myValueRealValue += 180;
                  }
                  this._myValueRealValue = 180 - this._myValueRealValue;
                }
                this._myVariable.myRotation[this._myValueEditIndex] = Math.round(this._myValueRealValue * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
                this._myUI.myRotationTextComponents[this._myValueEditIndex].text = this._myVariable.myRotation[this._myValueEditIndex].toFixed(this._myVariable.myDecimalPlaces);
                break;
              case 2:
                if (this._myValueRealValue <= 0) {
                  this._myValueRealValue = 1 / decimalPlacesMultiplier;
                }
                if (this._myVariable.myScaleAsOne) {
                  let newValue = Math.round(this._myValueRealValue * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
                  let difference = newValue - this._myVariable.myScale[this._myValueEditIndex];
                  for (let i = 0; i < 3; i++) {
                    this._myVariable.myScale[i] = Math.round((this._myVariable.myScale[i] + difference) * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
                    this._myVariable.myScale[i] = Math.max(this._myVariable.myScale[i], 1 / decimalPlacesMultiplier);
                    this._myUI.myScaleTextComponents[i].text = this._myVariable.myScale[i].toFixed(this._myVariable.myDecimalPlaces);
                  }
                } else {
                  this._myVariable.myScale[this._myValueEditIndex] = Math.round(this._myValueRealValue * decimalPlacesMultiplier + Number.EPSILON) / decimalPlacesMultiplier;
                  this._myVariable.myScale[this._myValueEditIndex] = Math.max(this._myVariable.myScale[this._myValueEditIndex], 1 / decimalPlacesMultiplier);
                  this._myUI.myScaleTextComponents[this._myValueEditIndex].text = this._myVariable.myScale[this._myValueEditIndex].toFixed(this._myVariable.myDecimalPlaces);
                }
                break;
            }
          } else {
            switch (this._myComponentIndex) {
              case 0:
                this._myValueRealValue = this._myVariable.myPosition[this._myValueEditIndex];
                break;
              case 1:
                this._myValueRealValue = this._myVariable.myRotation[this._myValueEditIndex];
                break;
              case 2:
                this._myValueRealValue = this._myVariable.myScale[this._myValueEditIndex];
                break;
            }
          }
          let stepIntensity = 0;
          if (this._myStepEditActive) {
            stepIntensity = stickVariableIntensity;
          } else if (this._myStepButtonEditIntensity != 0) {
            if (this._myStepButtonEditIntensityTimer <= 0) {
              stepIntensity = this._myStepButtonEditIntensity;
            } else {
              this._myStepButtonEditIntensityTimer -= dt;
            }
          }
          if (stepIntensity != 0) {
            let amountToAdd = 0;
            if (this._myStepFastEdit) {
              amountToAdd = Math.sign(stepIntensity) * 1;
              this._myStepFastEdit = false;
            } else {
              amountToAdd = stepIntensity * this._mySetup.myStepMultiplierStepPerSecond * dt;
            }
            this._myStepMultiplierValue += amountToAdd;
            if (Math.abs(this._myStepMultiplierValue) >= 1) {
              let stepValue = 0;
              switch (this._myStepIndex) {
                case 0:
                  stepValue = this._myVariable.myPositionStepPerSecond;
                  break;
                case 1:
                  stepValue = this._myVariable.myRotationStepPerSecond;
                  break;
                case 2:
                  stepValue = this._myVariable.myScaleStepPerSecond;
                  break;
                default:
                  stepValue = 0;
              }
              if (Math.sign(this._myStepMultiplierValue) > 0) {
                this._myStepMultiplierValue -= 1;
                this._changeStep(this._myStepIndex, stepValue * 10);
              } else {
                this._myStepMultiplierValue += 1;
                this._changeStep(this._myStepIndex, stepValue * 0.1);
              }
            }
          } else {
            this._myStepMultiplierValue = 0;
            this._myStepFastEdit = true;
          }
        }
        _updateScrollVariable(dt) {
          if (this._myScrollVariableActive) {
            if (this._myScrollVariableTimer <= 0) {
              this._scrollVariableRequest(this._myScrollDirection);
              this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
              this._myHasScrolled = true;
            } else {
              this._myScrollVariableTimer -= dt;
            }
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
          ui.myNextButtonCursorTargetComponent.addDownFunction(this._setScrollVariableActive.bind(this, true, 1, false));
          ui.myNextButtonCursorTargetComponent.addDownOnHoverFunction(this._setScrollVariableActive.bind(this, true, 1, false));
          ui.myNextButtonCursorTargetComponent.addUpFunction(this._setScrollVariableActive.bind(this, false, 0, false));
          ui.myNextButtonCursorTargetComponent.addUpWithNoDownFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myNextButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myNextButtonBackgroundComponent.material));
          ui.myNextButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myNextButtonBackgroundComponent.material));
          ui.myPreviousButtonCursorTargetComponent.addDownFunction(this._setScrollVariableActive.bind(this, true, -1, false));
          ui.myPreviousButtonCursorTargetComponent.addDownOnHoverFunction(this._setScrollVariableActive.bind(this, true, -1, false));
          ui.myPreviousButtonCursorTargetComponent.addUpFunction(this._setScrollVariableActive.bind(this, false, 0, false));
          ui.myPreviousButtonCursorTargetComponent.addUpWithNoDownFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._setScrollVariableActive.bind(this, false, 0, true));
          ui.myPreviousButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
          ui.myPreviousButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myPreviousButtonBackgroundComponent.material));
          ui.myPositionLabelCursorTargetComponent.addClickFunction(this._resetComponentValues.bind(this, 0));
          ui.myPositionLabelCursorTargetComponent.addHoverFunction(this._genericTextHover.bind(this, ui.myPositionLabelText));
          ui.myPositionLabelCursorTargetComponent.addUnHoverFunction(this._genericTextUnHover.bind(this, ui.myPositionLabelText, this._mySetup.myComponentLabelTextScale));
          for (let i = 0; i < 3; i++) {
            ui.myPositionIncreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, 0, i, 1));
            ui.myPositionIncreaseButtonCursorTargetComponents[i].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, 0, i, 1));
            ui.myPositionIncreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, 0, i, 0));
            ui.myPositionIncreaseButtonCursorTargetComponents[i].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, 0, i, 0));
            ui.myPositionIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._setValueEditIntensity.bind(this, 0, i, 0));
            ui.myPositionDecreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, 0, i, -1));
            ui.myPositionDecreaseButtonCursorTargetComponents[i].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, 0, i, -1));
            ui.myPositionDecreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, 0, i, 0));
            ui.myPositionDecreaseButtonCursorTargetComponents[i].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, 0, i, 0));
            ui.myPositionDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._setValueEditIntensity.bind(this, 0, i, 0));
            ui.myPositionIncreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myPositionIncreaseButtonBackgroundComponents[i].material));
            ui.myPositionIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myPositionIncreaseButtonBackgroundComponents[i].material));
            ui.myPositionDecreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myPositionDecreaseButtonBackgroundComponents[i].material));
            ui.myPositionDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myPositionDecreaseButtonBackgroundComponents[i].material));
            ui.myPositionCursorTargetComponents[i].addClickFunction(this._resetValue.bind(this, 0, i));
            ui.myPositionCursorTargetComponents[i].addHoverFunction(this._setValueEditActive.bind(this, 0, i, ui.myPositionTexts[i], true));
            ui.myPositionCursorTargetComponents[i].addUnHoverFunction(this._setValueEditActive.bind(this, 0, i, ui.myPositionTexts[i], false));
          }
          ui.myRotationLabelCursorTargetComponent.addClickFunction(this._resetComponentValues.bind(this, 1));
          ui.myRotationLabelCursorTargetComponent.addHoverFunction(this._genericTextHover.bind(this, ui.myRotationLabelText));
          ui.myRotationLabelCursorTargetComponent.addUnHoverFunction(this._genericTextUnHover.bind(this, ui.myRotationLabelText, this._mySetup.myComponentLabelTextScale));
          for (let i = 0; i < 3; i++) {
            ui.myRotationIncreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, 1, i, 1));
            ui.myRotationIncreaseButtonCursorTargetComponents[i].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, 1, i, 1));
            ui.myRotationIncreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, 1, i, 0));
            ui.myRotationIncreaseButtonCursorTargetComponents[i].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, 1, i, 0));
            ui.myRotationIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._setValueEditIntensity.bind(this, 1, i, 0));
            ui.myRotationDecreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, 1, i, -1));
            ui.myRotationDecreaseButtonCursorTargetComponents[i].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, 1, i, -1));
            ui.myRotationDecreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, 1, i, 0));
            ui.myRotationDecreaseButtonCursorTargetComponents[i].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, 1, i, 0));
            ui.myRotationDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._setValueEditIntensity.bind(this, 1, i, 0));
            ui.myRotationIncreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myRotationIncreaseButtonBackgroundComponents[i].material));
            ui.myRotationIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myRotationIncreaseButtonBackgroundComponents[i].material));
            ui.myRotationDecreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myRotationDecreaseButtonBackgroundComponents[i].material));
            ui.myRotationDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myRotationDecreaseButtonBackgroundComponents[i].material));
            ui.myRotationCursorTargetComponents[i].addClickFunction(this._resetValue.bind(this, 1, i));
            ui.myRotationCursorTargetComponents[i].addHoverFunction(this._setValueEditActive.bind(this, 1, i, ui.myRotationTexts[i], true));
            ui.myRotationCursorTargetComponents[i].addUnHoverFunction(this._setValueEditActive.bind(this, 1, i, ui.myRotationTexts[i], false));
          }
          ui.myScaleLabelCursorTargetComponent.addClickFunction(this._resetComponentValues.bind(this, 2));
          ui.myScaleLabelCursorTargetComponent.addHoverFunction(this._genericTextHover.bind(this, ui.myScaleLabelText));
          ui.myScaleLabelCursorTargetComponent.addUnHoverFunction(this._genericTextUnHover.bind(this, ui.myScaleLabelText, this._mySetup.myComponentLabelTextScale));
          for (let i = 0; i < 3; i++) {
            ui.myScaleIncreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, 2, i, 1));
            ui.myScaleIncreaseButtonCursorTargetComponents[i].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, 2, i, 1));
            ui.myScaleIncreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, 2, i, 0));
            ui.myScaleIncreaseButtonCursorTargetComponents[i].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, 2, i, 0));
            ui.myScaleIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._setValueEditIntensity.bind(this, 2, i, 0));
            ui.myScaleDecreaseButtonCursorTargetComponents[i].addDownFunction(this._setValueEditIntensity.bind(this, 2, i, -1));
            ui.myScaleDecreaseButtonCursorTargetComponents[i].addDownOnHoverFunction(this._setValueEditIntensity.bind(this, 2, i, -1));
            ui.myScaleDecreaseButtonCursorTargetComponents[i].addUpFunction(this._setValueEditIntensity.bind(this, 2, i, 0));
            ui.myScaleDecreaseButtonCursorTargetComponents[i].addUpWithNoDownFunction(this._setValueEditIntensity.bind(this, 2, i, 0));
            ui.myScaleDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._setValueEditIntensity.bind(this, 2, i, 0));
            ui.myScaleIncreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myScaleIncreaseButtonBackgroundComponents[i].material));
            ui.myScaleIncreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myScaleIncreaseButtonBackgroundComponents[i].material));
            ui.myScaleDecreaseButtonCursorTargetComponents[i].addHoverFunction(this._genericHover.bind(this, ui.myScaleDecreaseButtonBackgroundComponents[i].material));
            ui.myScaleDecreaseButtonCursorTargetComponents[i].addUnHoverFunction(this._genericUnHover.bind(this, ui.myScaleDecreaseButtonBackgroundComponents[i].material));
            ui.myScaleCursorTargetComponents[i].addClickFunction(this._resetValue.bind(this, 2, i));
            ui.myScaleCursorTargetComponents[i].addHoverFunction(this._setValueEditActive.bind(this, 2, i, ui.myScaleTexts[i], true));
            ui.myScaleCursorTargetComponents[i].addUnHoverFunction(this._setValueEditActive.bind(this, 2, i, ui.myScaleTexts[i], false));
          }
          ui.myPositionStepCursorTargetComponent.addClickFunction(this._resetStep.bind(this, 0));
          ui.myPositionStepCursorTargetComponent.addHoverFunction(this._setStepEditActive.bind(this, 0, ui.myPositionStepText, true));
          ui.myPositionStepCursorTargetComponent.addUnHoverFunction(this._setStepEditActive.bind(this, 0, ui.myPositionStepText, false));
          ui.myPositionStepIncreaseButtonCursorTargetComponent.addDownFunction(this._setStepEditIntensity.bind(this, 0, 1));
          ui.myPositionStepIncreaseButtonCursorTargetComponent.addDownOnHoverFunction(this._setStepEditIntensity.bind(this, 0, 1));
          ui.myPositionStepIncreaseButtonCursorTargetComponent.addUpFunction(this._setStepEditIntensity.bind(this, 0, 0));
          ui.myPositionStepIncreaseButtonCursorTargetComponent.addUpWithNoDownFunction(this._setStepEditIntensity.bind(this, 0, 0));
          ui.myPositionStepIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._setStepEditIntensity.bind(this, 0, 0));
          ui.myPositionStepDecreaseButtonCursorTargetComponent.addDownFunction(this._setStepEditIntensity.bind(this, 0, -1));
          ui.myPositionStepDecreaseButtonCursorTargetComponent.addDownOnHoverFunction(this._setStepEditIntensity.bind(this, 0, -1));
          ui.myPositionStepDecreaseButtonCursorTargetComponent.addUpFunction(this._setStepEditIntensity.bind(this, 0, 0));
          ui.myPositionStepDecreaseButtonCursorTargetComponent.addUpWithNoDownFunction(this._setStepEditIntensity.bind(this, 0, 0));
          ui.myPositionStepDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._setStepEditIntensity.bind(this, 0, 0));
          ui.myPositionStepIncreaseButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myPositionStepIncreaseButtonBackgroundComponent.material));
          ui.myPositionStepIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myPositionStepIncreaseButtonBackgroundComponent.material));
          ui.myPositionStepDecreaseButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myPositionStepDecreaseButtonBackgroundComponent.material));
          ui.myPositionStepDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myPositionStepDecreaseButtonBackgroundComponent.material));
          ui.myRotationStepCursorTargetComponent.addClickFunction(this._resetStep.bind(this, 1));
          ui.myRotationStepCursorTargetComponent.addHoverFunction(this._setStepEditActive.bind(this, 1, ui.myRotationStepText, true));
          ui.myRotationStepCursorTargetComponent.addUnHoverFunction(this._setStepEditActive.bind(this, 1, ui.myRotationStepText, false));
          ui.myRotationStepIncreaseButtonCursorTargetComponent.addDownFunction(this._setStepEditIntensity.bind(this, 1, 1));
          ui.myRotationStepIncreaseButtonCursorTargetComponent.addDownOnHoverFunction(this._setStepEditIntensity.bind(this, 1, 1));
          ui.myRotationStepIncreaseButtonCursorTargetComponent.addUpFunction(this._setStepEditIntensity.bind(this, 1, 0));
          ui.myRotationStepIncreaseButtonCursorTargetComponent.addUpWithNoDownFunction(this._setStepEditIntensity.bind(this, 1, 0));
          ui.myRotationStepIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._setStepEditIntensity.bind(this, 1, 0));
          ui.myRotationStepDecreaseButtonCursorTargetComponent.addDownFunction(this._setStepEditIntensity.bind(this, 1, -1));
          ui.myRotationStepDecreaseButtonCursorTargetComponent.addDownOnHoverFunction(this._setStepEditIntensity.bind(this, 1, -1));
          ui.myRotationStepDecreaseButtonCursorTargetComponent.addUpFunction(this._setStepEditIntensity.bind(this, 1, 0));
          ui.myRotationStepDecreaseButtonCursorTargetComponent.addUpWithNoDownFunction(this._setStepEditIntensity.bind(this, 1, 0));
          ui.myRotationStepDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._setStepEditIntensity.bind(this, 1, 0));
          ui.myRotationStepIncreaseButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myRotationStepIncreaseButtonBackgroundComponent.material));
          ui.myRotationStepIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myRotationStepIncreaseButtonBackgroundComponent.material));
          ui.myRotationStepDecreaseButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myRotationStepDecreaseButtonBackgroundComponent.material));
          ui.myRotationStepDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myRotationStepDecreaseButtonBackgroundComponent.material));
          ui.myScaleStepCursorTargetComponent.addClickFunction(this._resetStep.bind(this, 2));
          ui.myScaleStepCursorTargetComponent.addHoverFunction(this._setStepEditActive.bind(this, 2, ui.myScaleStepText, true));
          ui.myScaleStepCursorTargetComponent.addUnHoverFunction(this._setStepEditActive.bind(this, 2, ui.myScaleStepText, false));
          ui.myScaleStepIncreaseButtonCursorTargetComponent.addDownFunction(this._setStepEditIntensity.bind(this, 2, 1));
          ui.myScaleStepIncreaseButtonCursorTargetComponent.addDownOnHoverFunction(this._setStepEditIntensity.bind(this, 2, 1));
          ui.myScaleStepIncreaseButtonCursorTargetComponent.addUpFunction(this._setStepEditIntensity.bind(this, 2, 0));
          ui.myScaleStepIncreaseButtonCursorTargetComponent.addUpWithNoDownFunction(this._setStepEditIntensity.bind(this, 2, 0));
          ui.myScaleStepIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._setStepEditIntensity.bind(this, 2, 0));
          ui.myScaleStepDecreaseButtonCursorTargetComponent.addDownFunction(this._setStepEditIntensity.bind(this, 2, -1));
          ui.myScaleStepDecreaseButtonCursorTargetComponent.addDownOnHoverFunction(this._setStepEditIntensity.bind(this, 2, -1));
          ui.myScaleStepDecreaseButtonCursorTargetComponent.addUpFunction(this._setStepEditIntensity.bind(this, 2, 0));
          ui.myScaleStepDecreaseButtonCursorTargetComponent.addUpWithNoDownFunction(this._setStepEditIntensity.bind(this, 2, 0));
          ui.myScaleStepDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._setStepEditIntensity.bind(this, 2, 0));
          ui.myScaleStepIncreaseButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myScaleStepIncreaseButtonBackgroundComponent.material));
          ui.myScaleStepIncreaseButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myScaleStepIncreaseButtonBackgroundComponent.material));
          ui.myScaleStepDecreaseButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myScaleStepDecreaseButtonBackgroundComponent.material));
          ui.myScaleStepDecreaseButtonCursorTargetComponent.addUnHoverFunction(this._genericUnHover.bind(this, ui.myScaleStepDecreaseButtonBackgroundComponent.material));
        }
        _setValueEditIntensity(componentIndex, index, value) {
          if (this._isActive() || value == 0) {
            if (value != 0) {
              switch (componentIndex) {
                case 0:
                  this._myValueRealValue = this._myVariable.myPosition[index];
                  this._myComponentStepValue = this._myVariable.myPositionStepPerSecond;
                  break;
                case 1:
                  this._myValueRealValue = this._myVariable.myRotation[index];
                  this._myComponentStepValue = this._myVariable.myRotationStepPerSecond;
                  break;
                case 2:
                  this._myValueRealValue = this._myVariable.myScale[index];
                  this._myComponentStepValue = this._myVariable.myScaleStepPerSecond;
                  break;
              }
              this._myValueButtonEditIntensityTimer = this._mySetup.myButtonEditDelay;
              this._myValueEditIndex = index;
              this._myComponentIndex = componentIndex;
            }
            this._myValueButtonEditIntensity = value;
          }
        }
        _setStepEditIntensity(index, value) {
          if (this._isActive() || value == 0) {
            if (value != 0) {
              this._myStepButtonEditIntensityTimer = this._mySetup.myButtonEditDelay;
            }
            this._myStepButtonEditIntensity = value;
            this._myStepIndex = index;
          }
        }
        _setValueEditActive(componentIndex, index, text, active) {
          if (this._isActive() || !active) {
            if (active) {
              switch (componentIndex) {
                case 0:
                  this._myValueRealValue = this._myVariable.myPosition[index];
                  this._myComponentStepValue = this._myVariable.myPositionStepPerSecond;
                  break;
                case 1:
                  this._myValueRealValue = this._myVariable.myRotation[index];
                  this._myComponentStepValue = this._myVariable.myRotationStepPerSecond;
                  break;
                case 2:
                  this._myValueRealValue = this._myVariable.myScale[index];
                  this._myComponentStepValue = this._myVariable.myScaleStepPerSecond;
                  break;
              }
              this._myValueEditIndex = index;
              this._myComponentIndex = componentIndex;
              text.scale(this._mySetup.myTextHoverScaleMultiplier);
            } else {
              text.scalingWorld = this._mySetup.myValueTextScale;
            }
            this._myValueEditActive = active;
          }
        }
        _setStepEditActive(index, text, active) {
          if (this._isActive() || !active) {
            if (active) {
              text.scale(this._mySetup.myTextHoverScaleMultiplier);
            } else {
              text.scalingWorld = this._mySetup.myStepTextScale;
            }
            this._myStepEditActive = active;
            this._myStepIndex = index;
          }
        }
        _setScrollVariableActive(active, scrollDirection, skipForceScroll) {
          if (this._isActive() || !active) {
            let forceScroll = !active && !this._myHasScrolled && !skipForceScroll;
            let oldScrollDirection = this._myScrollDirection;
            this.setScrollVariableActive(active, scrollDirection);
            if (forceScroll) {
              this._scrollVariableRequest(oldScrollDirection);
            }
          }
        }
        _scrollVariableRequest(amount) {
          if (this._isActive() && amount != 0) {
            for (let callback of this._myScrollVariableRequestCallbacks.values()) {
              callback(amount);
            }
          }
        }
        _resetValue(componentIndex, index) {
          if (this._isActive()) {
            switch (componentIndex) {
              case 0:
                this._myVariable.myPosition[index] = this._myVariable.myInitialPosition[index];
                this._myUI.myPositionTextComponents[index].text = this._myVariable.myPosition[index].toFixed(this._myVariable.myDecimalPlaces);
                break;
              case 1:
                this._myVariable.myRotation[index] = this._myVariable.myInitialRotation[index];
                this._myUI.myRotationTextComponents[index].text = this._myVariable.myRotation[index].toFixed(this._myVariable.myDecimalPlaces);
                break;
              case 2:
                this._myVariable.myScale[index] = this._myVariable.myInitialScale[index];
                this._myUI.myScaleTextComponents[index].text = this._myVariable.myScale[index].toFixed(this._myVariable.myDecimalPlaces);
                break;
              default:
                initialValue = 0;
            }
          }
        }
        _resetAllValues() {
          for (let i = 0; i < 3; i++) {
            this._resetComponentValues(i);
          }
        }
        _resetComponentValues(index) {
          for (let i = 0; i < 3; i++) {
            this._resetValue(index, i);
          }
        }
        _resetStep(index) {
          if (this._isActive()) {
            let initialValue2 = 0;
            switch (index) {
              case 0:
                initialValue2 = this._myVariable.myInitialPositionStepPerSecond;
                break;
              case 1:
                initialValue2 = this._myVariable.myInitialRotationStepPerSecond;
                break;
              case 2:
                initialValue2 = this._myVariable.myInitialScaleStepPerSecond;
                break;
              default:
                initialValue2 = 0;
            }
            this._changeStep(index, initialValue2);
          }
        }
        _changeStep(index, step) {
          step = Math.pp_roundDecimal(step, 10);
          switch (index) {
            case 0:
              this._myVariable.myPositionStepPerSecond = step;
              this._myUI.myPositionStepTextComponent.text = this._mySetup.myStepStartString.concat(this._myVariable.myPositionStepPerSecond);
              break;
            case 1:
              this._myVariable.myRotationStepPerSecond = step;
              this._myUI.myRotationStepTextComponent.text = this._mySetup.myStepStartString.concat(this._myVariable.myRotationStepPerSecond);
              break;
            case 2:
              this._myVariable.myScaleStepPerSecond = step;
              this._myUI.myScaleStepTextComponent.text = this._mySetup.myStepStartString.concat(this._myVariable.myScaleStepPerSecond);
              break;
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
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_transform_widget_ui.js
  var require_easy_tune_transform_widget_ui = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_transform_widget_ui.js"() {
      PP.EasyTuneTransformWidgetUI = class EasyTuneTransformWidgetUI {
        build(parentObject, setup, additionalSetup) {
          this._myParentObject = parentObject;
          this._mySetup = setup;
          this._myAdditionalSetup = additionalSetup;
          this._myAdditionalButtonsActive = true;
          this._myPlaneMesh = PP.MeshUtils.createPlaneMesh();
          this._createSkeleton();
          this._setTransforms();
          this._addComponents();
        }
        setVisible(visible) {
          this.myPivotObject.pp_setActiveHierarchy(visible);
          if (visible) {
            this.setAdditionalButtonsActive(this._myAdditionalButtonsActive);
          }
        }
        setAdditionalButtonsActive(active) {
          this._myAdditionalButtonsActive = active;
          for (let i = 0; i < 3; i++) {
            this.myPositionIncreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
            this.myPositionDecreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          }
          this.myPositionStepIncreaseButtonPanel.pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          this.myPositionStepDecreaseButtonPanel.pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          for (let i = 0; i < 3; i++) {
            this.myRotationIncreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
            this.myRotationDecreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          }
          this.myRotationStepIncreaseButtonPanel.pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          this.myRotationStepDecreaseButtonPanel.pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          for (let i = 0; i < 3; i++) {
            this.myScaleIncreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
            this.myScaleDecreaseButtonPanels[i].pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          }
          this.myScaleStepIncreaseButtonPanel.pp_setActiveHierarchy(this._myAdditionalButtonsActive);
          this.myScaleStepDecreaseButtonPanel.pp_setActiveHierarchy(this._myAdditionalButtonsActive);
        }
        _createSkeleton() {
          this.myPivotObject = WL.scene.addObject(this._myParentObject);
          this.myBackPanel = WL.scene.addObject(this.myPivotObject);
          this.myBackBackground = WL.scene.addObject(this.myBackPanel);
          this._createDisplaySkeleton();
          this._createStepSkeleton();
          this._createPointerSkeleton();
        }
        _createDisplaySkeleton() {
          this.myDisplayPanel = WL.scene.addObject(this.myPivotObject);
          this.myVariableLabelPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myVariableLabelText = WL.scene.addObject(this.myVariableLabelPanel);
          this.myVariableLabelCursorTarget = WL.scene.addObject(this.myVariableLabelPanel);
          this.myNextButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
          this.myNextButtonBackground = WL.scene.addObject(this.myNextButtonPanel);
          this.myNextButtonText = WL.scene.addObject(this.myNextButtonPanel);
          this.myNextButtonCursorTarget = WL.scene.addObject(this.myNextButtonPanel);
          this.myPreviousButtonPanel = WL.scene.addObject(this.myVariableLabelPanel);
          this.myPreviousButtonBackground = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPreviousButtonText = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPreviousButtonCursorTarget = WL.scene.addObject(this.myPreviousButtonPanel);
          this.myPositionPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myPositionLabelText = WL.scene.addObject(this.myPositionPanel);
          this.myPositionLabelCursorTarget = WL.scene.addObject(this.myPositionPanel);
          this.myPositionPanels = [];
          this.myPositionTexts = [];
          this.myPositionCursorTargets = [];
          this.myPositionIncreaseButtonPanels = [];
          this.myPositionIncreaseButtonBackgrounds = [];
          this.myPositionIncreaseButtonTexts = [];
          this.myPositionIncreaseButtonCursorTargets = [];
          this.myPositionDecreaseButtonPanels = [];
          this.myPositionDecreaseButtonBackgrounds = [];
          this.myPositionDecreaseButtonTexts = [];
          this.myPositionDecreaseButtonCursorTargets = [];
          for (let i = 0; i < 3; i++) {
            this.myPositionPanels[i] = WL.scene.addObject(this.myPositionPanel);
            this.myPositionTexts[i] = WL.scene.addObject(this.myPositionPanels[i]);
            this.myPositionCursorTargets[i] = WL.scene.addObject(this.myPositionPanels[i]);
            this.myPositionIncreaseButtonPanels[i] = WL.scene.addObject(this.myPositionPanels[i]);
            this.myPositionIncreaseButtonBackgrounds[i] = WL.scene.addObject(this.myPositionIncreaseButtonPanels[i]);
            this.myPositionIncreaseButtonTexts[i] = WL.scene.addObject(this.myPositionIncreaseButtonPanels[i]);
            this.myPositionIncreaseButtonCursorTargets[i] = WL.scene.addObject(this.myPositionIncreaseButtonPanels[i]);
            this.myPositionDecreaseButtonPanels[i] = WL.scene.addObject(this.myPositionPanels[i]);
            this.myPositionDecreaseButtonBackgrounds[i] = WL.scene.addObject(this.myPositionDecreaseButtonPanels[i]);
            this.myPositionDecreaseButtonTexts[i] = WL.scene.addObject(this.myPositionDecreaseButtonPanels[i]);
            this.myPositionDecreaseButtonCursorTargets[i] = WL.scene.addObject(this.myPositionDecreaseButtonPanels[i]);
          }
          this.myRotationPanel = WL.scene.addObject(this.myDisplayPanel);
          this.myRotationLabelText = WL.scene.addObject(this.myRotationPanel);
          this.myRotationLabelCursorTarget = WL.scene.addObject(this.myRotationPanel);
          this.myRotationPanels = [];
          this.myRotationTexts = [];
          this.myRotationCursorTargets = [];
          this.myRotationIncreaseButtonPanels = [];
          this.myRotationIncreaseButtonBackgrounds = [];
          this.myRotationIncreaseButtonTexts = [];
          this.myRotationIncreaseButtonCursorTargets = [];
          this.myRotationDecreaseButtonPanels = [];
          this.myRotationDecreaseButtonBackgrounds = [];
          this.myRotationDecreaseButtonTexts = [];
          this.myRotationDecreaseButtonCursorTargets = [];
          for (let i = 0; i < 3; i++) {
            this.myRotationPanels[i] = WL.scene.addObject(this.myRotationPanel);
            this.myRotationTexts[i] = WL.scene.addObject(this.myRotationPanels[i]);
            this.myRotationCursorTargets[i] = WL.scene.addObject(this.myRotationPanels[i]);
            this.myRotationIncreaseButtonPanels[i] = WL.scene.addObject(this.myRotationPanels[i]);
            this.myRotationIncreaseButtonBackgrounds[i] = WL.scene.addObject(this.myRotationIncreaseButtonPanels[i]);
            this.myRotationIncreaseButtonTexts[i] = WL.scene.addObject(this.myRotationIncreaseButtonPanels[i]);
            this.myRotationIncreaseButtonCursorTargets[i] = WL.scene.addObject(this.myRotationIncreaseButtonPanels[i]);
            this.myRotationDecreaseButtonPanels[i] = WL.scene.addObject(this.myRotationPanels[i]);
            this.myRotationDecreaseButtonBackgrounds[i] = WL.scene.addObject(this.myRotationDecreaseButtonPanels[i]);
            this.myRotationDecreaseButtonTexts[i] = WL.scene.addObject(this.myRotationDecreaseButtonPanels[i]);
            this.myRotationDecreaseButtonCursorTargets[i] = WL.scene.addObject(this.myRotationDecreaseButtonPanels[i]);
          }
          this.myScalePanel = WL.scene.addObject(this.myDisplayPanel);
          this.myScaleLabelText = WL.scene.addObject(this.myScalePanel);
          this.myScaleLabelCursorTarget = WL.scene.addObject(this.myScalePanel);
          this.myScalePanels = [];
          this.myScaleTexts = [];
          this.myScaleCursorTargets = [];
          this.myScaleIncreaseButtonPanels = [];
          this.myScaleIncreaseButtonBackgrounds = [];
          this.myScaleIncreaseButtonTexts = [];
          this.myScaleIncreaseButtonCursorTargets = [];
          this.myScaleDecreaseButtonPanels = [];
          this.myScaleDecreaseButtonBackgrounds = [];
          this.myScaleDecreaseButtonTexts = [];
          this.myScaleDecreaseButtonCursorTargets = [];
          for (let i = 0; i < 3; i++) {
            this.myScalePanels[i] = WL.scene.addObject(this.myScalePanel);
            this.myScaleTexts[i] = WL.scene.addObject(this.myScalePanels[i]);
            this.myScaleCursorTargets[i] = WL.scene.addObject(this.myScalePanels[i]);
            this.myScaleIncreaseButtonPanels[i] = WL.scene.addObject(this.myScalePanels[i]);
            this.myScaleIncreaseButtonBackgrounds[i] = WL.scene.addObject(this.myScaleIncreaseButtonPanels[i]);
            this.myScaleIncreaseButtonTexts[i] = WL.scene.addObject(this.myScaleIncreaseButtonPanels[i]);
            this.myScaleIncreaseButtonCursorTargets[i] = WL.scene.addObject(this.myScaleIncreaseButtonPanels[i]);
            this.myScaleDecreaseButtonPanels[i] = WL.scene.addObject(this.myScalePanels[i]);
            this.myScaleDecreaseButtonBackgrounds[i] = WL.scene.addObject(this.myScaleDecreaseButtonPanels[i]);
            this.myScaleDecreaseButtonTexts[i] = WL.scene.addObject(this.myScaleDecreaseButtonPanels[i]);
            this.myScaleDecreaseButtonCursorTargets[i] = WL.scene.addObject(this.myScaleDecreaseButtonPanels[i]);
          }
        }
        _createStepSkeleton() {
          this.myPositionStepPanel = WL.scene.addObject(this.myPositionPanel);
          this.myPositionStepText = WL.scene.addObject(this.myPositionStepPanel);
          this.myPositionStepCursorTarget = WL.scene.addObject(this.myPositionStepPanel);
          this.myPositionStepIncreaseButtonPanel = WL.scene.addObject(this.myPositionStepPanel);
          this.myPositionStepIncreaseButtonBackground = WL.scene.addObject(this.myPositionStepIncreaseButtonPanel);
          this.myPositionStepIncreaseButtonText = WL.scene.addObject(this.myPositionStepIncreaseButtonPanel);
          this.myPositionStepIncreaseButtonCursorTarget = WL.scene.addObject(this.myPositionStepIncreaseButtonPanel);
          this.myPositionStepDecreaseButtonPanel = WL.scene.addObject(this.myPositionStepPanel);
          this.myPositionStepDecreaseButtonBackground = WL.scene.addObject(this.myPositionStepDecreaseButtonPanel);
          this.myPositionStepDecreaseButtonText = WL.scene.addObject(this.myPositionStepDecreaseButtonPanel);
          this.myPositionStepDecreaseButtonCursorTarget = WL.scene.addObject(this.myPositionStepDecreaseButtonPanel);
          this.myRotationStepPanel = WL.scene.addObject(this.myRotationPanel);
          this.myRotationStepText = WL.scene.addObject(this.myRotationStepPanel);
          this.myRotationStepCursorTarget = WL.scene.addObject(this.myRotationStepPanel);
          this.myRotationStepIncreaseButtonPanel = WL.scene.addObject(this.myRotationStepPanel);
          this.myRotationStepIncreaseButtonBackground = WL.scene.addObject(this.myRotationStepIncreaseButtonPanel);
          this.myRotationStepIncreaseButtonText = WL.scene.addObject(this.myRotationStepIncreaseButtonPanel);
          this.myRotationStepIncreaseButtonCursorTarget = WL.scene.addObject(this.myRotationStepIncreaseButtonPanel);
          this.myRotationStepDecreaseButtonPanel = WL.scene.addObject(this.myRotationStepPanel);
          this.myRotationStepDecreaseButtonBackground = WL.scene.addObject(this.myRotationStepDecreaseButtonPanel);
          this.myRotationStepDecreaseButtonText = WL.scene.addObject(this.myRotationStepDecreaseButtonPanel);
          this.myRotationStepDecreaseButtonCursorTarget = WL.scene.addObject(this.myRotationStepDecreaseButtonPanel);
          this.myScaleStepPanel = WL.scene.addObject(this.myScalePanel);
          this.myScaleStepText = WL.scene.addObject(this.myScaleStepPanel);
          this.myScaleStepCursorTarget = WL.scene.addObject(this.myScaleStepPanel);
          this.myScaleStepIncreaseButtonPanel = WL.scene.addObject(this.myScaleStepPanel);
          this.myScaleStepIncreaseButtonBackground = WL.scene.addObject(this.myScaleStepIncreaseButtonPanel);
          this.myScaleStepIncreaseButtonText = WL.scene.addObject(this.myScaleStepIncreaseButtonPanel);
          this.myScaleStepIncreaseButtonCursorTarget = WL.scene.addObject(this.myScaleStepIncreaseButtonPanel);
          this.myScaleStepDecreaseButtonPanel = WL.scene.addObject(this.myScaleStepPanel);
          this.myScaleStepDecreaseButtonBackground = WL.scene.addObject(this.myScaleStepDecreaseButtonPanel);
          this.myScaleStepDecreaseButtonText = WL.scene.addObject(this.myScaleStepDecreaseButtonPanel);
          this.myScaleStepDecreaseButtonCursorTarget = WL.scene.addObject(this.myScaleStepDecreaseButtonPanel);
        }
        _createPointerSkeleton() {
          this.myPointerCursorTarget = WL.scene.addObject(this.myPivotObject);
        }
        _setTransforms() {
          this.myPivotObject.setTranslationLocal(this._mySetup.myPivotObjectPositions[this._myAdditionalSetup.myHandedness]);
          this.myBackPanel.setTranslationLocal(this._mySetup.myBackPanelPosition);
          this.myBackBackground.scale(this._mySetup.myBackBackgroundScale);
          this._setDisplayTransforms();
          this._setStepTransforms();
          this._setPointerTransform();
        }
        _setDisplayTransforms() {
          this.myDisplayPanel.setTranslationLocal(this._mySetup.myDisplayPanelPosition);
          this.myVariableLabelPanel.setTranslationLocal(this._mySetup.myVariableLabelPanelPosition);
          this.myVariableLabelText.scale(this._mySetup.myVariableLabelTextScale);
          this.myVariableLabelCursorTarget.setTranslationLocal(this._mySetup.myVariableLabelCursorTargetPosition);
          this.myNextButtonPanel.setTranslationLocal(this._mySetup.myNextButtonPosition);
          this.myNextButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myNextButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myNextButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myNextButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myPreviousButtonPanel.setTranslationLocal(this._mySetup.myPreviousButtonPosition);
          this.myPreviousButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myPreviousButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myPreviousButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myPreviousButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myPositionPanel.setTranslationLocal(this._mySetup.myPositionPanelPosition);
          this.myPositionLabelText.scale(this._mySetup.myComponentLabelTextScale);
          this.myPositionLabelCursorTarget.setTranslationLocal(this._mySetup.myComponentLabelCursorTargetPosition);
          for (let i = 0; i < 3; i++) {
            this.myPositionPanels[i].setTranslationLocal(this._mySetup.myValuePanelsPositions[i]);
            this.myPositionTexts[i].scale(this._mySetup.myValueTextScale);
            this.myPositionCursorTargets[i].setTranslationLocal(this._mySetup.myValueCursorTargetPosition);
            this.myPositionIncreaseButtonPanels[i].setTranslationLocal(this._mySetup.myRightSideButtonPosition);
            this.myPositionIncreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myPositionIncreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myPositionIncreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myPositionIncreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
            this.myPositionDecreaseButtonPanels[i].setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
            this.myPositionDecreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myPositionDecreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myPositionDecreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myPositionDecreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          }
          this.myRotationPanel.setTranslationLocal(this._mySetup.myRotationPanelPosition);
          this.myRotationLabelText.scale(this._mySetup.myComponentLabelTextScale);
          this.myRotationLabelCursorTarget.setTranslationLocal(this._mySetup.myComponentLabelCursorTargetPosition);
          for (let i = 0; i < 3; i++) {
            this.myRotationPanels[i].setTranslationLocal(this._mySetup.myValuePanelsPositions[i]);
            this.myRotationTexts[i].scale(this._mySetup.myValueTextScale);
            this.myRotationCursorTargets[i].setTranslationLocal(this._mySetup.myValueCursorTargetPosition);
            this.myRotationIncreaseButtonPanels[i].setTranslationLocal(this._mySetup.myRightSideButtonPosition);
            this.myRotationIncreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myRotationIncreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myRotationIncreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myRotationIncreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
            this.myRotationDecreaseButtonPanels[i].setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
            this.myRotationDecreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myRotationDecreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myRotationDecreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myRotationDecreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          }
          this.myScalePanel.setTranslationLocal(this._mySetup.myScalePanelPosition);
          this.myScaleLabelText.scale(this._mySetup.myComponentLabelTextScale);
          this.myScaleLabelCursorTarget.setTranslationLocal(this._mySetup.myComponentLabelCursorTargetPosition);
          for (let i = 0; i < 3; i++) {
            this.myScalePanels[i].setTranslationLocal(this._mySetup.myValuePanelsPositions[i]);
            this.myScaleTexts[i].scale(this._mySetup.myValueTextScale);
            this.myScaleCursorTargets[i].setTranslationLocal(this._mySetup.myValueCursorTargetPosition);
            this.myScaleIncreaseButtonPanels[i].setTranslationLocal(this._mySetup.myRightSideButtonPosition);
            this.myScaleIncreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myScaleIncreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myScaleIncreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myScaleIncreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
            this.myScaleDecreaseButtonPanels[i].setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
            this.myScaleDecreaseButtonBackgrounds[i].scale(this._mySetup.mySideButtonBackgroundScale);
            this.myScaleDecreaseButtonTexts[i].setTranslationLocal(this._mySetup.mySideButtonTextPosition);
            this.myScaleDecreaseButtonTexts[i].scale(this._mySetup.mySideButtonTextScale);
            this.myScaleDecreaseButtonCursorTargets[i].setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          }
        }
        _setStepTransforms() {
          this.myPositionStepPanel.setTranslationLocal(this._mySetup.myStepPanelPosition);
          this.myPositionStepText.scale(this._mySetup.myStepTextScale);
          this.myPositionStepCursorTarget.setTranslationLocal(this._mySetup.myStepCursorTargetPosition);
          this.myPositionStepIncreaseButtonPanel.setTranslationLocal(this._mySetup.myRightSideButtonPosition);
          this.myPositionStepIncreaseButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myPositionStepIncreaseButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myPositionStepIncreaseButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myPositionStepIncreaseButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myPositionStepDecreaseButtonPanel.setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
          this.myPositionStepDecreaseButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myPositionStepDecreaseButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myPositionStepDecreaseButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myPositionStepDecreaseButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myRotationStepPanel.setTranslationLocal(this._mySetup.myStepPanelPosition);
          this.myRotationStepText.scale(this._mySetup.myStepTextScale);
          this.myRotationStepCursorTarget.setTranslationLocal(this._mySetup.myStepCursorTargetPosition);
          this.myRotationStepIncreaseButtonPanel.setTranslationLocal(this._mySetup.myRightSideButtonPosition);
          this.myRotationStepIncreaseButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myRotationStepIncreaseButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myRotationStepIncreaseButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myRotationStepIncreaseButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myRotationStepDecreaseButtonPanel.setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
          this.myRotationStepDecreaseButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myRotationStepDecreaseButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myRotationStepDecreaseButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myRotationStepDecreaseButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myScaleStepPanel.setTranslationLocal(this._mySetup.myStepPanelPosition);
          this.myScaleStepText.scale(this._mySetup.myStepTextScale);
          this.myScaleStepCursorTarget.setTranslationLocal(this._mySetup.myStepCursorTargetPosition);
          this.myScaleStepIncreaseButtonPanel.setTranslationLocal(this._mySetup.myRightSideButtonPosition);
          this.myScaleStepIncreaseButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myScaleStepIncreaseButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myScaleStepIncreaseButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myScaleStepIncreaseButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
          this.myScaleStepDecreaseButtonPanel.setTranslationLocal(this._mySetup.myLeftSideButtonPosition);
          this.myScaleStepDecreaseButtonBackground.scale(this._mySetup.mySideButtonBackgroundScale);
          this.myScaleStepDecreaseButtonText.setTranslationLocal(this._mySetup.mySideButtonTextPosition);
          this.myScaleStepDecreaseButtonText.scale(this._mySetup.mySideButtonTextScale);
          this.myScaleStepDecreaseButtonCursorTarget.setTranslationLocal(this._mySetup.mySideButtonCursorTargetPosition);
        }
        _setPointerTransform() {
          this.myPointerCursorTarget.setTranslationLocal(this._mySetup.myPointerCursorTargetPosition);
        }
        _addComponents() {
          this.myBackBackgroundComponent = this.myBackBackground.addComponent("mesh");
          this.myBackBackgroundComponent.mesh = this._myPlaneMesh;
          this.myBackBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myBackBackgroundComponent.material.color = this._mySetup.myBackBackgroundColor;
          this._addDisplayComponents();
          this._addStepComponents();
          this._addPointerComponents();
        }
        _addDisplayComponents() {
          this.myVariableLabelTextComponent = this.myVariableLabelText.addComponent("text");
          this._setupTextComponent(this.myVariableLabelTextComponent);
          this.myVariableLabelTextComponent.text = " ";
          this.myVariableLabelCursorTargetComponent = this.myVariableLabelCursorTarget.addComponent("cursor-target");
          this.myVariableLabelCollisionComponent = this.myVariableLabelCursorTarget.addComponent("collision");
          this.myVariableLabelCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myVariableLabelCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myVariableLabelCollisionComponent.extents = this._mySetup.myVariableLabelCollisionExtents;
          this.myNextButtonBackgroundComponent = this.myNextButtonBackground.addComponent("mesh");
          this.myNextButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myNextButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myNextButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myNextButtonTextComponent = this.myNextButtonText.addComponent("text");
          this._setupTextComponent(this.myNextButtonTextComponent);
          this.myNextButtonTextComponent.text = this._mySetup.myNextButtonText;
          this.myNextButtonCursorTargetComponent = this.myNextButtonCursorTarget.addComponent("cursor-target");
          this.myNextButtonCollisionComponent = this.myNextButtonCursorTarget.addComponent("collision");
          this.myNextButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myNextButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myNextButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myPreviousButtonBackgroundComponent = this.myPreviousButtonBackground.addComponent("mesh");
          this.myPreviousButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myPreviousButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myPreviousButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myPreviousButtonTextComponent = this.myPreviousButtonText.addComponent("text");
          this._setupTextComponent(this.myPreviousButtonTextComponent);
          this.myPreviousButtonTextComponent.text = this._mySetup.myPreviousButtonText;
          this.myPreviousButtonCursorTargetComponent = this.myPreviousButtonCursorTarget.addComponent("cursor-target");
          this.myPreviousButtonCollisionComponent = this.myPreviousButtonCursorTarget.addComponent("collision");
          this.myPreviousButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPreviousButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPreviousButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myPositionLabelTextComponent = this.myPositionLabelText.addComponent("text");
          this._setupTextComponent(this.myPositionLabelTextComponent);
          this.myPositionLabelTextComponent.text = this._mySetup.myPositionText;
          this.myPositionLabelCursorTargetComponent = this.myPositionLabelCursorTarget.addComponent("cursor-target");
          this.myPositionLabelCollisionComponent = this.myPositionLabelCursorTarget.addComponent("collision");
          this.myPositionLabelCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPositionLabelCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPositionLabelCollisionComponent.extents = this._mySetup.myComponentLabelCollisionExtents;
          this.myPositionTextComponents = [];
          this.myPositionCursorTargetComponents = [];
          this.myPositionCollisionComponents = [];
          this.myPositionIncreaseButtonBackgroundComponents = [];
          this.myPositionIncreaseButtonTextComponents = [];
          this.myPositionIncreaseButtonCursorTargetComponents = [];
          this.myPositionIncreaseButtonCollisionComponents = [];
          this.myPositionDecreaseButtonBackgroundComponents = [];
          this.myPositionDecreaseButtonTextComponents = [];
          this.myPositionDecreaseButtonCursorTargetComponents = [];
          this.myPositionDecreaseButtonCollisionComponents = [];
          for (let i = 0; i < 3; i++) {
            this.myPositionTextComponents[i] = this.myPositionTexts[i].addComponent("text");
            this._setupTextComponent(this.myPositionTextComponents[i]);
            this.myPositionTextComponents[i].text = " ";
            this.myPositionCursorTargetComponents[i] = this.myPositionCursorTargets[i].addComponent("cursor-target");
            this.myPositionCollisionComponents[i] = this.myPositionCursorTargets[i].addComponent("collision");
            this.myPositionCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myPositionCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myPositionCollisionComponents[i].extents = this._mySetup.myValueCollisionExtents;
            this.myPositionIncreaseButtonBackgroundComponents[i] = this.myPositionIncreaseButtonBackgrounds[i].addComponent("mesh");
            this.myPositionIncreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myPositionIncreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myPositionIncreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myPositionIncreaseButtonTextComponents[i] = this.myPositionIncreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myPositionIncreaseButtonTextComponents[i]);
            this.myPositionIncreaseButtonTextComponents[i].text = this._mySetup.myIncreaseButtonText;
            this.myPositionIncreaseButtonCursorTargetComponents[i] = this.myPositionIncreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myPositionIncreaseButtonCollisionComponents[i] = this.myPositionIncreaseButtonCursorTargets[i].addComponent("collision");
            this.myPositionIncreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myPositionIncreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myPositionIncreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
            this.myPositionDecreaseButtonBackgroundComponents[i] = this.myPositionDecreaseButtonBackgrounds[i].addComponent("mesh");
            this.myPositionDecreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myPositionDecreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myPositionDecreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myPositionDecreaseButtonTextComponents[i] = this.myPositionDecreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myPositionDecreaseButtonTextComponents[i]);
            this.myPositionDecreaseButtonTextComponents[i].text = this._mySetup.myDecreaseButtonText;
            this.myPositionDecreaseButtonCursorTargetComponents[i] = this.myPositionDecreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myPositionDecreaseButtonCollisionComponents[i] = this.myPositionDecreaseButtonCursorTargets[i].addComponent("collision");
            this.myPositionDecreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myPositionDecreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myPositionDecreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
          }
          this.myRotationLabelTextComponent = this.myRotationLabelText.addComponent("text");
          this._setupTextComponent(this.myRotationLabelTextComponent);
          this.myRotationLabelTextComponent.text = this._mySetup.myRotationText;
          this.myRotationLabelCursorTargetComponent = this.myRotationLabelCursorTarget.addComponent("cursor-target");
          this.myRotationLabelCollisionComponent = this.myRotationLabelCursorTarget.addComponent("collision");
          this.myRotationLabelCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myRotationLabelCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myRotationLabelCollisionComponent.extents = this._mySetup.myComponentLabelCollisionExtents;
          this.myRotationTextComponents = [];
          this.myRotationCursorTargetComponents = [];
          this.myRotationCollisionComponents = [];
          this.myRotationIncreaseButtonBackgroundComponents = [];
          this.myRotationIncreaseButtonTextComponents = [];
          this.myRotationIncreaseButtonCursorTargetComponents = [];
          this.myRotationIncreaseButtonCollisionComponents = [];
          this.myRotationDecreaseButtonBackgroundComponents = [];
          this.myRotationDecreaseButtonTextComponents = [];
          this.myRotationDecreaseButtonCursorTargetComponents = [];
          this.myRotationDecreaseButtonCollisionComponents = [];
          for (let i = 0; i < 3; i++) {
            this.myRotationTextComponents[i] = this.myRotationTexts[i].addComponent("text");
            this._setupTextComponent(this.myRotationTextComponents[i]);
            this.myRotationTextComponents[i].text = " ";
            this.myRotationCursorTargetComponents[i] = this.myRotationCursorTargets[i].addComponent("cursor-target");
            this.myRotationCollisionComponents[i] = this.myRotationCursorTargets[i].addComponent("collision");
            this.myRotationCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myRotationCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myRotationCollisionComponents[i].extents = this._mySetup.myValueCollisionExtents;
            this.myRotationIncreaseButtonBackgroundComponents[i] = this.myRotationIncreaseButtonBackgrounds[i].addComponent("mesh");
            this.myRotationIncreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myRotationIncreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myRotationIncreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myRotationIncreaseButtonTextComponents[i] = this.myRotationIncreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myRotationIncreaseButtonTextComponents[i]);
            this.myRotationIncreaseButtonTextComponents[i].text = this._mySetup.myIncreaseButtonText;
            this.myRotationIncreaseButtonCursorTargetComponents[i] = this.myRotationIncreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myRotationIncreaseButtonCollisionComponents[i] = this.myRotationIncreaseButtonCursorTargets[i].addComponent("collision");
            this.myRotationIncreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myRotationIncreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myRotationIncreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
            this.myRotationDecreaseButtonBackgroundComponents[i] = this.myRotationDecreaseButtonBackgrounds[i].addComponent("mesh");
            this.myRotationDecreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myRotationDecreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myRotationDecreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myRotationDecreaseButtonTextComponents[i] = this.myRotationDecreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myRotationDecreaseButtonTextComponents[i]);
            this.myRotationDecreaseButtonTextComponents[i].text = this._mySetup.myDecreaseButtonText;
            this.myRotationDecreaseButtonCursorTargetComponents[i] = this.myRotationDecreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myRotationDecreaseButtonCollisionComponents[i] = this.myRotationDecreaseButtonCursorTargets[i].addComponent("collision");
            this.myRotationDecreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myRotationDecreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myRotationDecreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
          }
          this.myScaleLabelTextComponent = this.myScaleLabelText.addComponent("text");
          this._setupTextComponent(this.myScaleLabelTextComponent);
          this.myScaleLabelTextComponent.text = this._mySetup.myScaleText;
          this.myScaleLabelCursorTargetComponent = this.myScaleLabelCursorTarget.addComponent("cursor-target");
          this.myScaleLabelCollisionComponent = this.myScaleLabelCursorTarget.addComponent("collision");
          this.myScaleLabelCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myScaleLabelCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myScaleLabelCollisionComponent.extents = this._mySetup.myComponentLabelCollisionExtents;
          this.myScaleTextComponents = [];
          this.myScaleCursorTargetComponents = [];
          this.myScaleCollisionComponents = [];
          this.myScaleIncreaseButtonBackgroundComponents = [];
          this.myScaleIncreaseButtonTextComponents = [];
          this.myScaleIncreaseButtonCursorTargetComponents = [];
          this.myScaleIncreaseButtonCollisionComponents = [];
          this.myScaleDecreaseButtonBackgroundComponents = [];
          this.myScaleDecreaseButtonTextComponents = [];
          this.myScaleDecreaseButtonCursorTargetComponents = [];
          this.myScaleDecreaseButtonCollisionComponents = [];
          for (let i = 0; i < 3; i++) {
            this.myScaleTextComponents[i] = this.myScaleTexts[i].addComponent("text");
            this._setupTextComponent(this.myScaleTextComponents[i]);
            this.myScaleTextComponents[i].text = " ";
            this.myScaleCursorTargetComponents[i] = this.myScaleCursorTargets[i].addComponent("cursor-target");
            this.myScaleCollisionComponents[i] = this.myScaleCursorTargets[i].addComponent("collision");
            this.myScaleCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myScaleCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myScaleCollisionComponents[i].extents = this._mySetup.myValueCollisionExtents;
            this.myScaleIncreaseButtonBackgroundComponents[i] = this.myScaleIncreaseButtonBackgrounds[i].addComponent("mesh");
            this.myScaleIncreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myScaleIncreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myScaleIncreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myScaleIncreaseButtonTextComponents[i] = this.myScaleIncreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myScaleIncreaseButtonTextComponents[i]);
            this.myScaleIncreaseButtonTextComponents[i].text = this._mySetup.myIncreaseButtonText;
            this.myScaleIncreaseButtonCursorTargetComponents[i] = this.myScaleIncreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myScaleIncreaseButtonCollisionComponents[i] = this.myScaleIncreaseButtonCursorTargets[i].addComponent("collision");
            this.myScaleIncreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myScaleIncreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myScaleIncreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
            this.myScaleDecreaseButtonBackgroundComponents[i] = this.myScaleDecreaseButtonBackgrounds[i].addComponent("mesh");
            this.myScaleDecreaseButtonBackgroundComponents[i].mesh = this._myPlaneMesh;
            this.myScaleDecreaseButtonBackgroundComponents[i].material = this._myAdditionalSetup.myPlaneMaterial.clone();
            this.myScaleDecreaseButtonBackgroundComponents[i].material.color = this._mySetup.myBackgroundColor;
            this.myScaleDecreaseButtonTextComponents[i] = this.myScaleDecreaseButtonTexts[i].addComponent("text");
            this._setupTextComponent(this.myScaleDecreaseButtonTextComponents[i]);
            this.myScaleDecreaseButtonTextComponents[i].text = this._mySetup.myDecreaseButtonText;
            this.myScaleDecreaseButtonCursorTargetComponents[i] = this.myScaleDecreaseButtonCursorTargets[i].addComponent("cursor-target");
            this.myScaleDecreaseButtonCollisionComponents[i] = this.myScaleDecreaseButtonCursorTargets[i].addComponent("collision");
            this.myScaleDecreaseButtonCollisionComponents[i].collider = this._mySetup.myCursorTargetCollisionCollider;
            this.myScaleDecreaseButtonCollisionComponents[i].group = 1 << this._mySetup.myCursorTargetCollisionGroup;
            this.myScaleDecreaseButtonCollisionComponents[i].extents = this._mySetup.mySideButtonCollisionExtents;
          }
        }
        _addStepComponents() {
          this.myPositionStepTextComponent = this.myPositionStepText.addComponent("text");
          this._setupTextComponent(this.myPositionStepTextComponent);
          this.myPositionStepTextComponent.text = " ";
          this.myPositionStepCursorTargetComponent = this.myPositionStepCursorTarget.addComponent("cursor-target");
          this.myPositionStepCollisionComponent = this.myPositionStepCursorTarget.addComponent("collision");
          this.myPositionStepCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPositionStepCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPositionStepCollisionComponent.extents = this._mySetup.myStepCollisionExtents;
          this.myPositionStepIncreaseButtonBackgroundComponent = this.myPositionStepIncreaseButtonBackground.addComponent("mesh");
          this.myPositionStepIncreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myPositionStepIncreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myPositionStepIncreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myPositionStepIncreaseButtonTextComponent = this.myPositionStepIncreaseButtonText.addComponent("text");
          this._setupTextComponent(this.myPositionStepIncreaseButtonTextComponent);
          this.myPositionStepIncreaseButtonTextComponent.text = this._mySetup.myIncreaseButtonText;
          this.myPositionStepIncreaseButtonCursorTargetComponent = this.myPositionStepIncreaseButtonCursorTarget.addComponent("cursor-target");
          this.myPositionStepIncreaseButtonCollisionComponent = this.myPositionStepIncreaseButtonCursorTarget.addComponent("collision");
          this.myPositionStepIncreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPositionStepIncreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPositionStepIncreaseButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myPositionStepDecreaseButtonBackgroundComponent = this.myPositionStepDecreaseButtonBackground.addComponent("mesh");
          this.myPositionStepDecreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myPositionStepDecreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myPositionStepDecreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myPositionStepDecreaseButtonTextComponent = this.myPositionStepDecreaseButtonText.addComponent("text");
          this._setupTextComponent(this.myPositionStepDecreaseButtonTextComponent);
          this.myPositionStepDecreaseButtonTextComponent.text = this._mySetup.myDecreaseButtonText;
          this.myPositionStepDecreaseButtonCursorTargetComponent = this.myPositionStepDecreaseButtonCursorTarget.addComponent("cursor-target");
          this.myPositionStepDecreaseButtonCollisionComponent = this.myPositionStepDecreaseButtonCursorTarget.addComponent("collision");
          this.myPositionStepDecreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPositionStepDecreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPositionStepDecreaseButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myRotationStepTextComponent = this.myRotationStepText.addComponent("text");
          this._setupTextComponent(this.myRotationStepTextComponent);
          this.myRotationStepTextComponent.text = " ";
          this.myRotationStepCursorTargetComponent = this.myRotationStepCursorTarget.addComponent("cursor-target");
          this.myRotationStepCollisionComponent = this.myRotationStepCursorTarget.addComponent("collision");
          this.myRotationStepCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myRotationStepCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myRotationStepCollisionComponent.extents = this._mySetup.myStepCollisionExtents;
          this.myRotationStepIncreaseButtonBackgroundComponent = this.myRotationStepIncreaseButtonBackground.addComponent("mesh");
          this.myRotationStepIncreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myRotationStepIncreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myRotationStepIncreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myRotationStepIncreaseButtonTextComponent = this.myRotationStepIncreaseButtonText.addComponent("text");
          this._setupTextComponent(this.myRotationStepIncreaseButtonTextComponent);
          this.myRotationStepIncreaseButtonTextComponent.text = this._mySetup.myIncreaseButtonText;
          this.myRotationStepIncreaseButtonCursorTargetComponent = this.myRotationStepIncreaseButtonCursorTarget.addComponent("cursor-target");
          this.myRotationStepIncreaseButtonCollisionComponent = this.myRotationStepIncreaseButtonCursorTarget.addComponent("collision");
          this.myRotationStepIncreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myRotationStepIncreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myRotationStepIncreaseButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myRotationStepDecreaseButtonBackgroundComponent = this.myRotationStepDecreaseButtonBackground.addComponent("mesh");
          this.myRotationStepDecreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myRotationStepDecreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myRotationStepDecreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myRotationStepDecreaseButtonTextComponent = this.myRotationStepDecreaseButtonText.addComponent("text");
          this._setupTextComponent(this.myRotationStepDecreaseButtonTextComponent);
          this.myRotationStepDecreaseButtonTextComponent.text = this._mySetup.myDecreaseButtonText;
          this.myRotationStepDecreaseButtonCursorTargetComponent = this.myRotationStepDecreaseButtonCursorTarget.addComponent("cursor-target");
          this.myRotationStepDecreaseButtonCollisionComponent = this.myRotationStepDecreaseButtonCursorTarget.addComponent("collision");
          this.myRotationStepDecreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myRotationStepDecreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myRotationStepDecreaseButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myScaleStepTextComponent = this.myScaleStepText.addComponent("text");
          this._setupTextComponent(this.myScaleStepTextComponent);
          this.myScaleStepTextComponent.text = " ";
          this.myScaleStepCursorTargetComponent = this.myScaleStepCursorTarget.addComponent("cursor-target");
          this.myScaleStepCollisionComponent = this.myScaleStepCursorTarget.addComponent("collision");
          this.myScaleStepCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myScaleStepCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myScaleStepCollisionComponent.extents = this._mySetup.myStepCollisionExtents;
          this.myScaleStepIncreaseButtonBackgroundComponent = this.myScaleStepIncreaseButtonBackground.addComponent("mesh");
          this.myScaleStepIncreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myScaleStepIncreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myScaleStepIncreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myScaleStepIncreaseButtonTextComponent = this.myScaleStepIncreaseButtonText.addComponent("text");
          this._setupTextComponent(this.myScaleStepIncreaseButtonTextComponent);
          this.myScaleStepIncreaseButtonTextComponent.text = this._mySetup.myIncreaseButtonText;
          this.myScaleStepIncreaseButtonCursorTargetComponent = this.myScaleStepIncreaseButtonCursorTarget.addComponent("cursor-target");
          this.myScaleStepIncreaseButtonCollisionComponent = this.myScaleStepIncreaseButtonCursorTarget.addComponent("collision");
          this.myScaleStepIncreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myScaleStepIncreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myScaleStepIncreaseButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
          this.myScaleStepDecreaseButtonBackgroundComponent = this.myScaleStepDecreaseButtonBackground.addComponent("mesh");
          this.myScaleStepDecreaseButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myScaleStepDecreaseButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myScaleStepDecreaseButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myScaleStepDecreaseButtonTextComponent = this.myScaleStepDecreaseButtonText.addComponent("text");
          this._setupTextComponent(this.myScaleStepDecreaseButtonTextComponent);
          this.myScaleStepDecreaseButtonTextComponent.text = this._mySetup.myDecreaseButtonText;
          this.myScaleStepDecreaseButtonCursorTargetComponent = this.myScaleStepDecreaseButtonCursorTarget.addComponent("cursor-target");
          this.myScaleStepDecreaseButtonCollisionComponent = this.myScaleStepDecreaseButtonCursorTarget.addComponent("collision");
          this.myScaleStepDecreaseButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myScaleStepDecreaseButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myScaleStepDecreaseButtonCollisionComponent.extents = this._mySetup.mySideButtonCollisionExtents;
        }
        _addPointerComponents() {
          this.myPointerCollisionComponent = this.myPointerCursorTarget.addComponent("collision");
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
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_transform_widget_setup.js
  var require_easy_tune_transform_widget_setup = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_transform_widget_setup.js"() {
      PP.EasyTuneTransformWidgetSetup = class EasyTuneTransformWidgetSetup {
        constructor() {
          this._initializeBuildSetup();
          this._initializeRuntimeSetup();
        }
        _initializeBuildSetup() {
          this.myBackgroundColor = [46 / 255, 46 / 255, 46 / 255, 1];
          this.myCursorTargetCollisionCollider = 2;
          this.myCursorTargetCollisionGroup = 7;
          this.myCursorTargetCollisionThickness = 1e-3;
          this.myDefaultTextColor = [255 / 255, 255 / 255, 255 / 255, 1];
          this.myTextAlignment = 2;
          this.myTextJustification = 2;
          this.myTextOutlineRange = [0.45, 0.45];
          this.myTextColor = this.myDefaultTextColor;
          this.myTextOutlineColor = this.myDefaultTextColor;
          this.myPivotObjectPositions = [];
          this.myPivotObjectPositions[PP.ToolHandedness.NONE] = [0, 0, 0];
          this.myPivotObjectPositions[PP.ToolHandedness.LEFT] = [-0.04, 0.02, 3713e-8];
          this.myPivotObjectPositions[PP.ToolHandedness.RIGHT] = [-0.08, 0.02, 3713e-8];
          let panelZ = 0.01;
          let distanceFromBorder = 0.0125;
          let distanceFromValue = 0.055;
          let colliderZPosition = 0.017;
          let backgroundHalfWidth = 0.2;
          this.mySideButtonBackgroundScale = [0.015, 0.015, 1];
          this.mySideButtonTextScale = [0.18, 0.18, 0.18];
          this.mySideButtonTextPosition = [0, 0, 7e-3];
          this.mySideButtonCursorTargetPosition = [0, 0, 0];
          this.mySideButtonCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.mySideButtonCollisionExtents = this.mySideButtonBackgroundScale.slice(0);
          this.mySideButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myLeftSideButtonPosition = [-0.13, 0, 0];
          this.myRightSideButtonPosition = [-this.myLeftSideButtonPosition[0], 0, 0];
          this.myPreviousButtonPosition = [0, 0, -1e-5];
          this.myPreviousButtonPosition[0] = -backgroundHalfWidth + this.mySideButtonBackgroundScale[0] + distanceFromBorder;
          this.myNextButtonPosition = [0, 0, -1e-5];
          this.myNextButtonPosition[0] = backgroundHalfWidth - this.mySideButtonBackgroundScale[0] - distanceFromBorder;
          this.myIncreaseButtonText = "+";
          this.myDecreaseButtonText = "-";
          this.myDisplayPanelPosition = [0, 0.1, 0];
          this.myVariableLabelPanelPosition = [0, 0.025, panelZ];
          this.myVariableLabelTextScale = [0.19, 0.19, 0.19];
          this.myVariableLabelCursorTargetPosition = [0, 0, 0];
          this.myVariableLabelCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.myVariableLabelCollisionExtents = [0.065, 0.0175, 1];
          this.myVariableLabelCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myNextButtonText = ">";
          this.myPreviousButtonText = "<";
          let distanceBetweenComponents = Math.abs(this.myNextButtonPosition[0]) + Math.abs(this.myRightSideButtonPosition[0]);
          let distanceFromVariableLabel = 0.045;
          this.myPositionPanelPosition = [0, this.myVariableLabelPanelPosition[1] - distanceFromVariableLabel, panelZ];
          this.myRotationPanelPosition = [this.myPositionPanelPosition[0] + distanceBetweenComponents, this.myVariableLabelPanelPosition[1] - distanceFromVariableLabel, panelZ];
          this.myScalePanelPosition = [this.myPositionPanelPosition[0] - distanceBetweenComponents, this.myVariableLabelPanelPosition[1] - distanceFromVariableLabel, panelZ];
          this.myPositionText = "Position";
          this.myRotationText = "Rotation";
          this.myScaleText = "Scale";
          this.myComponentLabelTextScale = [0.19, 0.19, 0.19];
          this.myComponentLabelCursorTargetPosition = [0, 0, 0];
          this.myComponentLabelCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.myComponentLabelCollisionExtents = [0.065, 0.0175, 1];
          this.myComponentLabelCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myValueTextScale = [0.4, 0.4, 0.4];
          this.myValueCursorTargetPosition = [0, 0, 0];
          this.myValueCursorTargetPosition[2] = colliderZPosition - panelZ;
          this.myValueCollisionExtents = [0.065, 0.02, 1];
          this.myValueCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          let distanceBetweenValues = this.mySideButtonBackgroundScale[1] * 2 + 0.015;
          this.myValuePanelsPositions = [];
          this.myValuePanelsPositions[0] = [0, -distanceFromValue, 0];
          for (let i = 1; i < 3; i++) {
            this.myValuePanelsPositions[i] = this.myValuePanelsPositions[i - 1].slice(0);
            this.myValuePanelsPositions[i][1] -= distanceBetweenValues;
          }
          let valuePanelLastPosition = this.myValuePanelsPositions[2][1];
          this.myStepPanelPosition = [0, valuePanelLastPosition - distanceFromValue, 0];
          this.myStepTextScale = [0.19, 0.19, 0.19];
          this.myStepStartString = "Step: ";
          this.myStepCursorTargetPosition = [0, 0, 0];
          this.myStepCursorTargetPosition[2] = colliderZPosition - this.myStepPanelPosition[2];
          this.myStepCollisionExtents = [0.065, 0.0175, 1];
          this.myStepCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          {
            let maxY = this.myDisplayPanelPosition[1] + this.myVariableLabelPanelPosition[1] + this.mySideButtonBackgroundScale[1] + distanceFromBorder * 1.25;
            let minY = this.myDisplayPanelPosition[1] + this.myPositionPanelPosition[1] + this.myStepPanelPosition[1] - distanceFromBorder * 1.25 - this.mySideButtonBackgroundScale[1];
            let maxX = this.myDisplayPanelPosition[0] + this.myRotationPanelPosition[0] + this.myRightSideButtonPosition[0] + this.mySideButtonBackgroundScale[0] + distanceFromBorder;
            let minX = this.myDisplayPanelPosition[0] + this.myScalePanelPosition[0] + this.myLeftSideButtonPosition[0] - this.mySideButtonBackgroundScale[0] - distanceFromBorder;
            this.myBackPanelPosition = [(maxX + minX) / 2, (maxY + minY) / 2, 0];
            this.myBackBackgroundScale = [(maxX - minX) / 2, (maxY - minY) / 2, 1];
            this.myBackBackgroundColor = [70 / 255, 70 / 255, 70 / 255, 1];
          }
          this.myPointerCollisionExtents = this.myBackBackgroundScale.slice(0);
          this.myPointerCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myPointerCursorTargetPosition = this.myBackPanelPosition.slice(0);
          this.myPointerCursorTargetPosition[2] = colliderZPosition - 1e-4;
        }
        _initializeRuntimeSetup() {
          this.myButtonHoverColor = [150 / 255, 150 / 255, 150 / 255, 1];
          this.myTextHoverScaleMultiplier = [1.25, 1.25, 1.25];
          this.myEditThumbstickMinThreshold = 0.35;
          this.myStepMultiplierStepPerSecond = 2.25;
          this.myButtonEditDelay = 0;
          this.myScrollVariableDelay = 0.5;
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_widget.js
  var require_easy_tune_widget = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_widget.js"() {
      PP.EasyTuneWidget = class EasyTuneWidget {
        constructor() {
          this._myIsStarted = false;
          this._myStartVariable = null;
          this._myWidgetFrame = new PP.WidgetFrame("E", 1);
          this._myWidgetFrame.registerWidgetVisibleChangedEventListener(this, this._widgetVisibleChanged.bind(this));
          this._mySetup = new PP.EasyTuneWidgetSetup();
          this._myAdditionalSetup = null;
          this._myWidgets = [];
          this._myEasyTuneVariables = null;
          this._myEasyTuneLastSize = 0;
          this._myVariableNames = null;
          this._myCurrentWidget = null;
          this._myCurrentVariable = null;
          this._myScrollVariableTimer = 0;
          this._myGamepad = null;
          this._myRefreshVariablesTimer = 0;
          this._myDirty = false;
        }
        setActiveVariable(variableName) {
          if (!this._myIsStarted) {
            this._myStartVariable = variableName;
          } else if (this._myEasyTuneVariables.has(variableName)) {
            this._myCurrentVariable = this._myEasyTuneVariables.get(variableName);
            this._selectCurrentWidget();
          } else {
            console.log("Can't set easy tune active variable");
          }
        }
        refresh() {
          if (this._myWidgetFrame.myIsWidgetVisible) {
            this._myDirty = true;
          }
        }
        start(parentObject, additionalSetup, easyTuneVariables) {
          this._myRightGamepad = PP.myRightGamepad;
          this._myLeftGamepad = PP.myLeftGamepad;
          if (this._mySetup.myGamepadHandedness == PP.ToolHandedness.RIGHT) {
            this._myGamepad = this._myRightGamepad;
          } else if (this._mySetup.myGamepadHandedness == PP.ToolHandedness.LEFT) {
            this._myGamepad = this._myLeftGamepad;
          }
          this._myIsStarted = true;
          this._myAdditionalSetup = additionalSetup;
          this._myWidgetFrame.start(parentObject, additionalSetup);
          this._myEasyTuneVariables = easyTuneVariables;
          this._myEasyTuneLastSize = this._myEasyTuneVariables.size;
          this._myVariableNames = Array.from(this._myEasyTuneVariables.keys());
          if (this._myEasyTuneVariables.size > 0) {
            this._myCurrentVariable = this._myEasyTuneVariables.get(this._myVariableNames[0]);
          }
          if (this._myStartVariable) {
            if (this._myEasyTuneVariables.has(this._myStartVariable)) {
              this._myCurrentVariable = this._myEasyTuneVariables.get(this._myStartVariable);
            } else {
              console.log("Can't set easy tune active variable");
            }
          }
          this._initializeWidgets();
        }
        update(dt) {
          this._myWidgetFrame.update(dt);
          if (this._myEasyTuneVariables.size != this._myEasyTuneLastSize || this._myDirty) {
            this._refreshEasyTuneVariables();
          }
          if (this._myWidgetFrame.myIsWidgetVisible && this._myEasyTuneVariables.size > 0) {
            if (this._mySetup.myRefreshVariablesDelay != null) {
              this._myRefreshVariablesTimer += dt;
              if (this._myRefreshVariablesTimer > this._mySetup.myRefreshVariablesDelay) {
                this._myRefreshVariablesTimer = 0;
                this._refreshEasyTuneVariables();
              }
            }
            if (this._myCurrentWidget) {
              this._myCurrentWidget.update(dt);
            }
            if (this._myAdditionalSetup.myEnableGamepadScrollVariable) {
              this._updateGamepadScrollVariable(dt);
            }
          }
          this._updateGamepadWidgetVisibility();
          this._updateActiveVariable();
        }
        _initializeWidgets() {
          this._myWidgets[PP.EasyTuneVariableType.NONE] = new PP.EasyTuneNoneWidget();
          this._myWidgets[PP.EasyTuneVariableType.NUMBER] = new PP.EasyTuneNumberWidget(this._myGamepad);
          this._myWidgets[PP.EasyTuneVariableType.BOOL] = new PP.EasyTuneBoolWidget(this._myGamepad);
          this._myWidgets[PP.EasyTuneVariableType.TRANSFORM] = new PP.EasyTuneTransformWidget(this._myGamepad);
          for (let item of this._myWidgets) {
            item.start(this._myWidgetFrame.getWidgetObject(), this._myAdditionalSetup);
            item.setVisible(false);
            item.registerScrollVariableRequestEventListener(this, this._scrollVariable.bind(this));
          }
          this._selectCurrentWidget();
        }
        _selectCurrentWidget() {
          if (this._myEasyTuneVariables.size <= 0) {
            return;
          }
          let scrollVariableActive = false;
          let scrollVariableDirection = 0;
          if (this._myCurrentWidget) {
            scrollVariableActive = this._myCurrentWidget.isScrollVariableActive();
            scrollVariableDirection = this._myCurrentWidget.getScrollVariableDirection();
            this._myCurrentWidget.setVisible(false);
          }
          if (this._myCurrentVariable.myType in this._myWidgets) {
            this._myCurrentWidget = this._myWidgets[this._myCurrentVariable.myType];
          } else {
            this._myCurrentWidget = this._myWidgets[PP.EasyTuneVariableType.NONE];
          }
          this._myCurrentWidget.setEasyTuneVariable(this._myCurrentVariable, this._createIndexString());
          this._myCurrentWidget.setVisible(this._myWidgetFrame.myIsWidgetVisible);
          this._myCurrentWidget.setScrollVariableActive(scrollVariableActive, scrollVariableDirection);
        }
        _refreshEasyTuneVariables() {
          this._myVariableNames = Array.from(this._myEasyTuneVariables.keys());
          this._myEasyTuneLastSize = this._myEasyTuneVariables.size;
          if (this._myEasyTuneVariables.size > 0) {
            if (this._myCurrentVariable && this._myEasyTuneVariables.has(this._myCurrentVariable.myName)) {
              this._myCurrentVariable = this._myEasyTuneVariables.get(this._myCurrentVariable.myName);
            } else {
              this._myCurrentVariable = this._myEasyTuneVariables.get(this._myVariableNames[0]);
            }
            this._selectCurrentWidget();
          } else {
            this._myCurrentVariable = null;
            if (this._myCurrentWidget) {
              this._myCurrentWidget.setVisible(false);
              this._myCurrentWidget = null;
            }
          }
          this._myDirty = false;
        }
        _updateGamepadWidgetVisibility() {
          if (this._myGamepad) {
            if (this._myGamepad.getButtonInfo(PP.ButtonType.BOTTOM_BUTTON).isPressStart() && this._myGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).myIsPressed || this._myGamepad.getButtonInfo(PP.ButtonType.TOP_BUTTON).isPressStart() && this._myGamepad.getButtonInfo(PP.ButtonType.BOTTOM_BUTTON).myIsPressed) {
              this._toggleVisibility();
            }
          }
        }
        _toggleVisibility() {
          this._myWidgetFrame.toggleVisibility();
        }
        _widgetVisibleChanged(visible) {
          if (this._myCurrentWidget) {
            if (this._myEasyTuneVariables.size > 0) {
              this._myCurrentWidget.setVisible(visible);
            } else {
              this._myCurrentWidget.setVisible(false);
            }
          }
          if (visible) {
            this._refreshEasyTuneVariables();
          }
        }
        _updateGamepadScrollVariable(dt) {
          if (this._myGamepad && (!this._mySetup.myScrollVariableButtonType || this._myGamepad.getButtonInfo(this._mySetup.myScrollVariableButtonType).myIsPressed)) {
            let x = this._myGamepad.getAxesInfo().myAxes[0];
            let y = this._myGamepad.getAxesInfo().myAxes[1];
            if (Math.abs(x) > this._mySetup.myScrollVariableMinXThreshold && Math.abs(y) < this._mySetup.myScrollVariableMaxYThreshold) {
              this._myScrollVariableTimer += dt;
              while (this._myScrollVariableTimer > this._mySetup.myScrollVariableDelay) {
                this._myScrollVariableTimer -= this._mySetup.myScrollVariableDelay;
                this._scrollVariable(Math.sign(x));
              }
            } else {
              this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
            }
          } else {
            this._myScrollVariableTimer = this._mySetup.myScrollVariableDelay;
          }
        }
        _scrollVariable(amount) {
          if (this._myEasyTuneVariables.size <= 0) {
            return;
          }
          let variableIndex = this._getVariableIndex(this._myCurrentVariable);
          if (variableIndex >= 0) {
            let newIndex = ((variableIndex + amount) % this._myVariableNames.length + this._myVariableNames.length) % this._myVariableNames.length;
            if (this._myEasyTuneVariables.has(this._myVariableNames[newIndex])) {
              this._myCurrentVariable = this._myEasyTuneVariables.get(this._myVariableNames[newIndex]);
              this._selectCurrentWidget();
            } else {
              this._refreshEasyTuneVariables();
            }
          } else {
            this._refreshEasyTuneVariables();
          }
        }
        _createIndexString() {
          let indexString = " (";
          let index = (this._getVariableIndex(this._myCurrentVariable) + 1).toString();
          let length5 = this._myEasyTuneVariables.size.toString();
          while (index.length < length5.length) {
            index = "0".concat(index);
          }
          indexString = indexString.concat(index).concat(" - ").concat(length5).concat(")");
          return indexString;
        }
        _getVariableIndex(variable) {
          let variableIndex = this._myVariableNames.indexOf(variable.myName);
          return variableIndex;
        }
        _updateActiveVariable() {
          this._myEasyTuneVariables.forEach(function(value) {
            value.myIsActive = false;
          });
          if (this._myWidgetFrame.myIsWidgetVisible && this._myCurrentVariable) {
            this._myCurrentVariable.myIsActive = true;
          }
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_widget_setup.js
  var require_easy_tune_widget_setup = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_widgets/easy_tune_widget_setup.js"() {
      PP.EasyTuneWidgetSetup = class EasyTuneWidgetSetup {
        constructor() {
          this._initializeRuntimeSetup();
        }
        _initializeRuntimeSetup() {
          this.myGamepadHandedness = PP.ToolHandedness.RIGHT;
          this.myScrollVariableDelay = 0.5;
          this.myScrollVariableMinXThreshold = 0.6;
          this.myScrollVariableMaxYThreshold = 0.25;
          this.myScrollVariableButtonType = null;
          this.myRefreshVariablesDelay = null;
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune_variables.js
  var require_easy_tune_variables = __commonJS({
    "js/pp/tool/easy_tune/easy_tune_variables.js"() {
      PP.EasyTuneVariables = class EasyTuneVariables {
        constructor() {
          this._myMap = /* @__PURE__ */ new Map();
        }
        add(variable) {
          this._myMap.set(variable.myName, variable);
        }
        remove(variableName) {
          this._myMap.delete(variableName);
        }
        get(variableName) {
          let variable = this._myMap.get(variableName);
          if (variable) {
            return variable.getValue();
          }
          return null;
        }
        set(variableName, value, resetInitialValue = false) {
          let variable = this._myMap.get(variableName);
          if (variable) {
            variable.setValue(value, resetInitialValue);
          }
        }
        isActive(variableName) {
          let variable = this._myMap.get(variableName);
          if (variable) {
            return variable.myIsActive;
          }
          return false;
        }
        getEasyTuneVariable(variableName) {
          return this._myMap.get(variableName);
        }
        _getInternalMap() {
          return this._myMap;
        }
        registerValueChangedEventListener(variableName, callbackID, callback) {
          this._myMap.get(variableName).registerValueChangedEventListener(callbackID, callback);
        }
        unregisterValueChangedEventListener(variableName, callbackID, callback) {
          this._myMap.get(variableName).unregisterValueChangedEventListener(callbackID);
        }
      };
      PP.EasyTuneVariableType = {
        NONE: 0,
        NUMBER: 1,
        BOOL: 2,
        TRANSFORM: 3
      };
      PP.EasyTuneVariable = class EasyTuneVariable {
        constructor(name, type2) {
          this.myName = name.slice(0);
          this.myType = type2;
          this.myValue = null;
          this.myInitialValue = null;
          this.myIsActive = false;
          this._myValueChangedCallbacks = /* @__PURE__ */ new Map();
        }
        getValue() {
          return this.myValue;
        }
        setValue(value, resetInitialValue = false) {
          let oldValue = this.myValue;
          this.myValue = value;
          if (resetInitialValue) {
            PP.EasyTuneVariable.prototype.setInitialValue.call(this, value);
          }
          PP.refreshEasyTuneWidget();
          if (oldValue != value) {
            this._triggerValueChangedCallback();
          }
        }
        setInitialValue(value) {
          this.myInitialValue = value;
        }
        registerValueChangedEventListener(id, callback) {
          this._myValueChangedCallbacks.set(id, callback);
        }
        unregisterValueChangedEventListener(id) {
          this._myValueChangedCallbacks.delete(id);
        }
        _triggerValueChangedCallback() {
          if (this._myValueChangedCallbacks.size > 0) {
            this._myValueChangedCallbacks.forEach(function(callback) {
              callback(this.myName, this.getValue());
            }.bind(this));
          }
        }
      };
      PP.EasyTuneVariableArray = class EasyTuneVariableArray extends PP.EasyTuneVariable {
        constructor(name, type2, value) {
          super(name, type2);
          PP.EasyTuneVariableArray.prototype.setValue.call(this, value, true);
        }
        getValue() {
          return this.myValue.slice(0);
        }
        setValue(value, resetInitialValue = false) {
          let oldValue = this.myValue;
          this.myValue = value.slice(0);
          if (resetInitialValue) {
            PP.EasyTuneVariableArray.prototype.setInitialValue.call(this, value);
          }
          PP.refreshEasyTuneWidget();
          if (oldValue == null || !oldValue.pp_equals(value)) {
            this._triggerValueChangedCallback();
          }
        }
        setInitialValue(value) {
          this.myInitialValue = value.slice(0);
        }
      };
      PP.EasyTuneNumberArray = class EasyTuneNumberArray extends PP.EasyTuneVariableArray {
        constructor(name, value, stepPerSecond, decimalPlaces, min3 = null, max3 = null, editAllValuesTogether = false) {
          super(name, PP.EasyTuneVariableType.NUMBER, value);
          this.myDecimalPlaces = decimalPlaces;
          this.myStepPerSecond = stepPerSecond;
          this.myInitialStepPerSecond = this.myStepPerSecond;
          this.myMin = min3;
          this.myMax = max3;
          this.myEditAllValuesTogether = editAllValuesTogether;
          this._clampValue(true);
        }
        setMax(max3) {
          this.myMax = max3;
          this._clampValue(false);
        }
        setMin(min3) {
          this.myMin = min3;
          this._clampValue(false);
        }
        _clampValue(resetInitialValue) {
          let clampedValue = this.myValue.vec_clamp(this.myMin, this.myMax);
          if (!resetInitialValue) {
            let clampedInitialValue = this.myInitialValue.vec_clamp(this.myMin, this.myMax);
            let initialValueChanged = !clampedInitialValue.vec_equals(this.myInitialValue);
            if (initialValueChanged) {
              PP.EasyTuneVariableArray.prototype.setInitialValue.call(this, clampedInitialValue);
            }
          }
          PP.EasyTuneVariableArray.prototype.setValue.call(this, clampedValue, resetInitialValue);
        }
      };
      PP.EasyTuneNumber = class EasyTuneNumber extends PP.EasyTuneNumberArray {
        constructor(name, value, stepPerSecond, decimalPlaces, min3, max3) {
          super(name, [value], stepPerSecond, decimalPlaces, min3, max3);
        }
        getValue() {
          return this.myValue[0];
        }
        setValue(value, resetInitialValue = false) {
          super.setValue([value], resetInitialValue);
        }
        setInitialValue(value) {
          super.setValue([value]);
        }
      };
      PP.EasyTuneInt = class EasyTuneInt extends PP.EasyTuneNumber {
        constructor(name, value, stepPerSecond, min3, max3) {
          super(name, value, stepPerSecond, 0, min3, max3);
        }
      };
      PP.EasyTuneIntArray = class EasyTuneIntArray extends PP.EasyTuneNumberArray {
        constructor(name, value, stepPerSecond, min3, max3) {
          let tempValue = value.slice(0);
          for (let i = 0; i < value.length; i++) {
            tempValue[i] = Math.round(tempValue[i]);
          }
          super(name, tempValue, stepPerSecond, 0, Math.round(min3), Math.round(max3));
        }
      };
      PP.EasyTuneBoolArray = class EasyTuneBoolArray extends PP.EasyTuneVariableArray {
        constructor(name, value) {
          super(name, PP.EasyTuneVariableType.BOOL, value);
        }
      };
      PP.EasyTuneBool = class EasyTuneBool extends PP.EasyTuneBoolArray {
        constructor(name, value) {
          super(name, [value]);
        }
        getValue() {
          return this.myValue[0];
        }
        setValue(value, resetInitialValue = false) {
          super.setValue([value], resetInitialValue);
        }
        setInitialValue(value) {
          super.setValue([value]);
        }
      };
      PP.EasyTuneTransform = class EasyTuneTransform extends PP.EasyTuneVariable {
        constructor(name, value, scaleAsOne = true, positionStepPerSecond = 1, rotationStepPerSecond = 50, scaleStepPerSecond = 1) {
          super(name, PP.EasyTuneVariableType.TRANSFORM);
          this.myDecimalPlaces = 3;
          this.myPosition = value.mat4_getPosition();
          this.myRotation = value.mat4_getRotationDegrees();
          this.myScale = value.mat4_getScale();
          let decimalPlacesMultiplier = Math.pow(10, this.myDecimalPlaces);
          for (let i = 0; i < 3; i++) {
            this.myScale[i] = Math.max(this.myScale[i], 1 / decimalPlacesMultiplier);
          }
          this.myScaleAsOne = scaleAsOne;
          this.myPositionStepPerSecond = positionStepPerSecond;
          this.myRotationStepPerSecond = rotationStepPerSecond;
          this.myScaleStepPerSecond = scaleStepPerSecond;
          this.myInitialPosition = this.myPosition.vec3_clone();
          this.myInitialRotation = this.myRotation.vec3_clone();
          this.myInitialScale = this.myScale.vec3_clone();
          this.myInitialPositionStepPerSecond = this.myPositionStepPerSecond;
          this.myInitialRotationStepPerSecond = this.myRotationStepPerSecond;
          this.myInitialScaleStepPerSecond = this.myScaleStepPerSecond;
          this.myTransform = PP.mat4_create();
          this.myTransform.mat4_setPositionRotationDegreesScale(this.myPosition, this.myRotation, this.myScale);
          this.myTempTransform = PP.mat4_create();
        }
        getValue() {
          this.myTransform.mat4_setPositionRotationDegreesScale(this.myPosition, this.myRotation, this.myScale);
          return this.myTransform.slice(0);
        }
        setValue(value, resetInitialValue = false) {
          this.myTempTransform.mat4_setPositionRotationDegreesScale(this.myPosition, this.myRotation, this.myScale);
          value.mat4_getPosition(this.myPosition);
          value.mat4_getRotationDegrees(this.myRotation);
          value.mat4_getScale(this.myScale);
          this.myTransform.mat4_setPositionRotationDegreesScale(this.myPosition, this.myRotation, this.myScale);
          if (resetInitialValue) {
            PP.EasyTuneTransform.prototype.setInitialValue.call(this, value);
          }
          PP.refreshEasyTuneWidget();
          if (!this.myTempTransform.pp_equals(this.myTransform)) {
            this._triggerValueChangedCallback();
          }
        }
        setInitialValue(value) {
          this.myInitialPosition = value.mat4_getPosition();
          this.myInitialRotation = value.mat4_getRotationDegrees();
          this.myInitialScale = value.mat4_getScale();
        }
      };
    }
  });

  // js/pp/tool/easy_tune/easy_tune.js
  var require_easy_tune = __commonJS({
    "js/pp/tool/easy_tune/easy_tune.js"() {
      WL.registerComponent("pp-easy-tune", {
        _myHandedness: { type: WL.Type.Enum, values: ["none", "left", "right"], default: "none" },
        _myShowOnStart: { type: WL.Type.Bool, default: false },
        _myShowVisibilityButton: { type: WL.Type.Bool, default: false },
        _myEnableGamepadScrollVariable: { type: WL.Type.Bool, default: true },
        _myPlaneMaterial: { type: WL.Type.Material, default: null },
        _myTextMaterial: { type: WL.Type.Material, default: null }
      }, {
        init: function() {
          PP.myEasyTuneVariables = new PP.EasyTuneVariables();
          this._myWidget = new PP.EasyTuneWidget();
          PP.setEasyTuneWidgetActiveVariable = function(variableName) {
            this._myWidget.setActiveVariable(variableName);
          }.bind(this);
          PP.refreshEasyTuneWidget = function() {
            this._myWidget.refresh();
          }.bind(this);
        },
        start: function() {
          let additionalSetup = {};
          additionalSetup.myHandedness = [null, "left", "right"][this._myHandedness];
          additionalSetup.myShowOnStart = this._myShowOnStart;
          additionalSetup.myShowVisibilityButton = this._myShowVisibilityButton;
          additionalSetup.myEnableAdditionalButtons = true;
          additionalSetup.myEnableGamepadScrollVariable = this._myEnableGamepadScrollVariable;
          additionalSetup.myPlaneMaterial = this._myPlaneMaterial;
          additionalSetup.myTextMaterial = this._myTextMaterial;
          this._myWidget.start(this.object, additionalSetup, PP.myEasyTuneVariables._getInternalMap());
        },
        update: function(dt) {
          this._myWidget.update(dt);
        }
      });
      PP.myEasyTuneVariables = null;
      PP.myEasyTuneTarget = null;
      PP.setEasyTuneWidgetActiveVariable = function() {
        console.log("setEasyTuneWidgetActiveVariable function not initialized yet");
      };
      PP.refreshEasyTuneWidget = function() {
        console.log("refreshEasyTuneWidget function not initialized yet");
      };
    }
  });

  // js/pp/tool/widget_frame/widget_frame_setup.js
  var require_widget_frame_setup = __commonJS({
    "js/pp/tool/widget_frame/widget_frame_setup.js"() {
      PP.WidgetFrameSetup = class WidgetFrameSetup {
        constructor(widgetLetterID, buttonsColumnIndex) {
          this._initializeBuildSetup(widgetLetterID, buttonsColumnIndex);
          this._initializeRuntimeSetup();
        }
        _initializeBuildSetup(widgetLetterID, buttonsColumnIndex) {
          this.myBackgroundColor = [46 / 255, 46 / 255, 46 / 255, 1];
          this.myCursorTargetCollisionCollider = 2;
          this.myCursorTargetCollisionGroup = 7;
          this.myCursorTargetCollisionThickness = 1e-3;
          this.myDefaultTextColor = [255 / 255, 255 / 255, 255 / 255, 1];
          this.myTextAlignment = 2;
          this.myTextJustification = 2;
          this.myTextOutlineRange = [0.45, 0.45];
          this.myTextColor = this.myDefaultTextColor;
          this.myTextOutlineColor = this.myDefaultTextColor;
          this.myVisibilityButtonBackgroundScale = [0.015, 0.015, 1];
          this.myVisibilityButtonTextPosition = [0, 0, 7e-3];
          this.myVisibilityButtonTextScale = [0.18, 0.18, 0.18];
          let distanceBetweenToolsVisibilityButtons = 0.01;
          let buttonXOffset = this.myVisibilityButtonBackgroundScale[0] * (2 * buttonsColumnIndex) + distanceBetweenToolsVisibilityButtons * buttonsColumnIndex;
          this.myVisibilityButtonPosition = [];
          this.myVisibilityButtonPosition[PP.ToolHandedness.NONE] = {};
          this.myVisibilityButtonPosition[PP.ToolHandedness.NONE].myPosition = [-0.3 + buttonXOffset, -0.205, 0.035];
          this.myVisibilityButtonPosition[PP.ToolHandedness.LEFT] = {};
          this.myVisibilityButtonPosition[PP.ToolHandedness.LEFT].myPosition = [-0.2 + buttonXOffset, 0.025, 0.015];
          this.myVisibilityButtonPosition[PP.ToolHandedness.RIGHT] = {};
          this.myVisibilityButtonPosition[PP.ToolHandedness.RIGHT].myPosition = [0.2 - buttonXOffset, 0.025, 0.015];
          this.myVisibilityButtonText = widgetLetterID;
          this.myVisibilityButtonCursorTargetPosition = [0, 0, 0];
          this.myVisibilityButtonCursorTargetPosition[2] = this.myVisibilityButtonTextPosition[2];
          this.myVisibilityButtonCollisionExtents = this.myVisibilityButtonBackgroundScale.slice(0);
          this.myVisibilityButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;
          this.myFlagButtonBackgroundScale = [0.0125, 0.0125, 1];
          this.myFlagButtonTextPosition = [0, 0, 7e-3];
          this.myFlagButtonTextScale = [0.15, 0.15, 0.15];
          let distanceBetweenFlagButtons = 75e-4;
          let pinFlagIndex = 0;
          let pinButtonYOffset = this.myVisibilityButtonBackgroundScale[1] + this.myFlagButtonBackgroundScale[1] + distanceBetweenFlagButtons + this.myFlagButtonBackgroundScale[1] * (2 * pinFlagIndex) + distanceBetweenFlagButtons * pinFlagIndex;
          this.myPinButtonPosition = [];
          this.myPinButtonPosition[PP.ToolHandedness.NONE] = {};
          this.myPinButtonPosition[PP.ToolHandedness.NONE].myPosition = this.myVisibilityButtonPosition[PP.ToolHandedness.NONE].myPosition.slice(0);
          this.myPinButtonPosition[PP.ToolHandedness.NONE].myPosition[1] += pinButtonYOffset;
          this.myPinButtonPosition[PP.ToolHandedness.LEFT] = {};
          this.myPinButtonPosition[PP.ToolHandedness.LEFT].myPosition = this.myVisibilityButtonPosition[PP.ToolHandedness.LEFT].myPosition.slice(0);
          this.myPinButtonPosition[PP.ToolHandedness.LEFT].myPosition[1] += pinButtonYOffset;
          this.myPinButtonPosition[PP.ToolHandedness.RIGHT] = {};
          this.myPinButtonPosition[PP.ToolHandedness.RIGHT].myPosition = this.myVisibilityButtonPosition[PP.ToolHandedness.RIGHT].myPosition.slice(0);
          this.myPinButtonPosition[PP.ToolHandedness.RIGHT].myPosition[1] += pinButtonYOffset;
          this.myPinButtonText = "P";
          this.myPinButtonCursorTargetPosition = [0, 0, 0];
          this.myPinButtonCursorTargetPosition[2] = this.myFlagButtonTextPosition[2];
          this.myPinButtonCollisionExtents = this.myFlagButtonBackgroundScale.slice(0);
          this.myPinButtonCollisionExtents[2] = this.myCursorTargetCollisionThickness;
        }
        _initializeRuntimeSetup() {
          this._initializeObjectsTransforms();
          this.myButtonHoverColor = [150 / 255, 150 / 255, 150 / 255, 1];
          this.myButtonDisabledTextColor = this.myBackgroundColor;
          this.myButtonDisabledBackgroundColor = [110 / 255, 110 / 255, 110 / 255, 1];
        }
        _initializeObjectsTransforms() {
          this.myPivotObjectTransforms = this._createDefaultObjectTransforms();
          this.myPivotObjectTransforms[PP.ToolInputSourceType.GAMEPAD][PP.ToolHandedness.LEFT].myRotation = [-0.645, 0.425, 0.25, 0.584];
          this.myPivotObjectTransforms[PP.ToolInputSourceType.GAMEPAD][PP.ToolHandedness.LEFT].myRotation.quat_normalize(this.myPivotObjectTransforms[PP.ToolInputSourceType.GAMEPAD][PP.ToolHandedness.LEFT].myRotation);
          this.myPivotObjectTransforms[PP.ToolInputSourceType.GAMEPAD][PP.ToolHandedness.RIGHT].myRotation = [-0.645, -0.425, -0.25, 0.584];
          this.myPivotObjectTransforms[PP.ToolInputSourceType.GAMEPAD][PP.ToolHandedness.RIGHT].myRotation.quat_normalize(this.myPivotObjectTransforms[PP.ToolInputSourceType.GAMEPAD][PP.ToolHandedness.RIGHT].myRotation);
          this.myPivotObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.LEFT].myPosition = [-0.04, 0.045, -0.055];
          this.myPivotObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.LEFT].myRotation = [0, 0.536, -0.43, 0.727];
          this.myPivotObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.LEFT].myRotation.quat_normalize(this.myPivotObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.LEFT].myRotation);
          this.myPivotObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.RIGHT].myPosition = [0.04, 0.045, -0.055];
          this.myPivotObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.RIGHT].myRotation = [0, -0.536, 0.43, 0.727];
          this.myPivotObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.RIGHT].myRotation.quat_normalize(this.myPivotObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.RIGHT].myRotation);
          this.myWidgetObjectTransforms = this._createDefaultObjectTransforms();
          this.myWidgetObjectTransforms[PP.ToolInputSourceType.GAMEPAD][PP.ToolHandedness.LEFT].myPosition = [0.1, 0.23, -0.02];
          this.myWidgetObjectTransforms[PP.ToolInputSourceType.GAMEPAD][PP.ToolHandedness.RIGHT].myPosition = [0.07, 0.23, -0.02];
          this.myWidgetObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.LEFT].myPosition = [0.1, 0.23, -0.02];
          this.myWidgetObjectTransforms[PP.ToolInputSourceType.HAND][PP.ToolHandedness.RIGHT].myPosition = [0.07, 0.23, -0.02];
        }
        _createDefaultObjectTransforms() {
          let defaultObjectTransforms = [];
          for (let inputSourceTypeKey in PP.ToolInputSourceType) {
            let inputSourceType = PP.ToolInputSourceType[inputSourceTypeKey];
            defaultObjectTransforms[inputSourceType] = [];
            for (let handednessKey in PP.ToolHandedness) {
              let handedness = PP.ToolHandedness[handednessKey];
              defaultObjectTransforms[inputSourceType][handedness] = {};
              defaultObjectTransforms[inputSourceType][handedness].myPosition = [0, 0, 0];
              defaultObjectTransforms[inputSourceType][handedness].myRotation = [0, 0, 0, 1];
            }
          }
          return defaultObjectTransforms;
        }
      };
    }
  });

  // js/pp/tool/widget_frame/widget_frame_ui.js
  var require_widget_frame_ui = __commonJS({
    "js/pp/tool/widget_frame/widget_frame_ui.js"() {
      PP.WidgetFrameUI = class WidgetFrameUI {
        constructor() {
          this._myInputSourceType = null;
          this._myParentObject = null;
          this._myIsPinned = false;
        }
        build(parentObject, setup, additionalSetup) {
          this._myParentObject = parentObject;
          this._mySetup = setup;
          this._myAdditionalSetup = additionalSetup;
          this._myPlaneMesh = PP.MeshUtils.createPlaneMesh();
          this._createSkeleton();
          this._setTransforms();
          this._addComponents();
        }
        setWidgetVisible(visible) {
          this.myFlagsButtonPanel.pp_setActiveHierarchy(visible);
          if (visible) {
            this._updateObjectsTransforms(true);
          }
        }
        setVisibilityButtonVisible(visible) {
          this.myVisibilityButtonPanel.pp_setActiveHierarchy(visible);
        }
        setPinned(pinned) {
          if (pinned != this._myIsPinned) {
            this._myIsPinned = pinned;
            if (this._myIsPinned) {
              this.myPivotObject.pp_setParent(null);
            } else {
              this.myPivotObject.pp_setParent(this.myFixForwardObject);
              this._updateObjectsTransforms(true);
            }
          }
        }
        update(dt) {
          this._updateObjectsTransforms(false);
        }
        _updateObjectsTransforms(forceRefreshObjectsTransforms) {
          let inputSourceType = PP.InputUtils.getInputSourceType(this._myAdditionalSetup.myHandedness);
          if (inputSourceType != this._myInputSourceType || forceRefreshObjectsTransforms) {
            this._myInputSourceType = inputSourceType;
            if (!this._myIsPinned) {
              this.myPivotObject.setTranslationLocal(this._mySetup.myPivotObjectTransforms[this._myInputSourceType][this._myAdditionalSetup.myHandedness].myPosition);
              this.myPivotObject.resetRotation();
              this.myPivotObject.rotateObject(this._mySetup.myPivotObjectTransforms[this._myInputSourceType][this._myAdditionalSetup.myHandedness].myRotation);
              this.myWidgetObject.setTranslationLocal(this._mySetup.myWidgetObjectTransforms[this._myInputSourceType][this._myAdditionalSetup.myHandedness].myPosition);
              this.myWidgetObject.resetRotation();
              this.myWidgetObject.rotateObject(this._mySetup.myWidgetObjectTransforms[this._myInputSourceType][this._myAdditionalSetup.myHandedness].myRotation);
            }
          }
        }
        _createSkeleton() {
          this.myFixForwardObject = WL.scene.addObject(this._myParentObject);
          this.myFixForwardObject.pp_rotateObject([0, 180, 0]);
          this.myPivotObject = WL.scene.addObject(this.myFixForwardObject);
          this.myWidgetObject = WL.scene.addObject(this.myPivotObject);
          this.myVisibilityButtonPanel = WL.scene.addObject(this.myPivotObject);
          this.myVisibilityButtonBackground = WL.scene.addObject(this.myVisibilityButtonPanel);
          this.myVisibilityButtonText = WL.scene.addObject(this.myVisibilityButtonPanel);
          this.myVisibilityButtonCursorTarget = WL.scene.addObject(this.myVisibilityButtonPanel);
          this.myFlagsButtonPanel = WL.scene.addObject(this.myPivotObject);
          this.myPinButtonPanel = WL.scene.addObject(this.myFlagsButtonPanel);
          this.myPinButtonBackground = WL.scene.addObject(this.myPinButtonPanel);
          this.myPinButtonText = WL.scene.addObject(this.myPinButtonPanel);
          this.myPinButtonCursorTarget = WL.scene.addObject(this.myPinButtonPanel);
        }
        _setTransforms() {
          this.myPivotObject.setDirty();
          this.myVisibilityButtonPanel.setTranslationLocal(this._mySetup.myVisibilityButtonPosition[this._myAdditionalSetup.myHandedness].myPosition);
          this.myVisibilityButtonBackground.scale(this._mySetup.myVisibilityButtonBackgroundScale);
          this.myVisibilityButtonText.setTranslationLocal(this._mySetup.myVisibilityButtonTextPosition);
          this.myVisibilityButtonText.scale(this._mySetup.myVisibilityButtonTextScale);
          this.myVisibilityButtonCursorTarget.setTranslationLocal(this._mySetup.myVisibilityButtonCursorTargetPosition);
          this.myPinButtonPanel.setTranslationLocal(this._mySetup.myPinButtonPosition[this._myAdditionalSetup.myHandedness].myPosition);
          this.myPinButtonBackground.scale(this._mySetup.myFlagButtonBackgroundScale);
          this.myPinButtonText.setTranslationLocal(this._mySetup.myFlagButtonTextPosition);
          this.myPinButtonText.scale(this._mySetup.myFlagButtonTextScale);
          this.myPinButtonCursorTarget.setTranslationLocal(this._mySetup.myPinButtonCursorTargetPosition);
        }
        _addComponents() {
          this.myVisibilityButtonBackgroundComponent = this.myVisibilityButtonBackground.addComponent("mesh");
          this.myVisibilityButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myVisibilityButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myVisibilityButtonBackgroundComponent.material.color = this._mySetup.myBackgroundColor;
          this.myVisibilityButtonTextComponent = this.myVisibilityButtonText.addComponent("text");
          this._setupButtonTextComponent(this.myVisibilityButtonTextComponent);
          this.myVisibilityButtonTextComponent.text = this._mySetup.myVisibilityButtonText;
          this.myVisibilityButtonCursorTargetComponent = this.myVisibilityButtonCursorTarget.addComponent("cursor-target");
          this.myVisibilityButtonCollisionComponent = this.myVisibilityButtonCursorTarget.addComponent("collision");
          this.myVisibilityButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myVisibilityButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myVisibilityButtonCollisionComponent.extents = this._mySetup.myVisibilityButtonCollisionExtents;
          this.myPinButtonBackgroundComponent = this.myPinButtonBackground.addComponent("mesh");
          this.myPinButtonBackgroundComponent.mesh = this._myPlaneMesh;
          this.myPinButtonBackgroundComponent.material = this._myAdditionalSetup.myPlaneMaterial.clone();
          this.myPinButtonBackgroundComponent.material.color = this._mySetup.myButtonDisabledBackgroundColor;
          this.myPinButtonTextComponent = this.myPinButtonText.addComponent("text");
          this._setupButtonTextComponent(this.myPinButtonTextComponent);
          this.myPinButtonTextComponent.material.color = this._mySetup.myButtonDisabledTextColor;
          this.myPinButtonTextComponent.text = this._mySetup.myPinButtonText;
          this.myPinButtonCursorTargetComponent = this.myPinButtonCursorTarget.addComponent("cursor-target");
          this.myPinButtonCollisionComponent = this.myPinButtonCursorTarget.addComponent("collision");
          this.myPinButtonCollisionComponent.collider = this._mySetup.myCursorTargetCollisionCollider;
          this.myPinButtonCollisionComponent.group = 1 << this._mySetup.myCursorTargetCollisionGroup;
          this.myPinButtonCollisionComponent.extents = this._mySetup.myPinButtonCollisionExtents;
        }
        _setupButtonTextComponent(textComponent) {
          textComponent.alignment = this._mySetup.myTextAlignment;
          textComponent.justification = this._mySetup.myTextJustification;
          textComponent.material = this._myAdditionalSetup.myTextMaterial.clone();
          textComponent.material.outlineRange = this._mySetup.myTextOutlineRange;
          textComponent.material.color = this._mySetup.myTextColor;
          textComponent.material.outlineColor = this._mySetup.myTextOutlineColor;
          textComponent.text = "";
        }
      };
    }
  });

  // js/pp/tool/widget_frame/widget_frame.js
  var require_widget_frame = __commonJS({
    "js/pp/tool/widget_frame/widget_frame.js"() {
      PP.WidgetFrame = class WidgetFrame {
        constructor(widgetLetterID, buttonsColumnIndex) {
          this.myIsWidgetVisible = true;
          this.myIsPinned = false;
          this._mySetup = new PP.WidgetFrameSetup(widgetLetterID, buttonsColumnIndex);
          this._myAdditionalSetup = null;
          this._myUI = new PP.WidgetFrameUI();
          this._myWidgetVisibleChangedCallbacks = /* @__PURE__ */ new Map();
          this._myPinChangedCallbacks = /* @__PURE__ */ new Map();
        }
        getWidgetObject() {
          return this._myUI.myWidgetObject;
        }
        toggleVisibility() {
          this._toggleVisibility(false, true);
        }
        togglePin() {
          this._togglePin(false);
        }
        registerWidgetVisibleChangedEventListener(id, callback) {
          this._myWidgetVisibleChangedCallbacks.set(id, callback);
        }
        unregisterWidgetVisibleChangedEventListener(id) {
          this._myWidgetVisibleChangedCallbacks.delete(id);
        }
        registerPinChangedEventListener(id, callback) {
          this._myPinChangedCallbacks.set(id, callback);
        }
        unregisterPinChangedEventListener(id) {
          this._myPinChangedCallbacks.delete(id);
        }
        start(parentObject, additionalSetup) {
          this._myAdditionalSetup = additionalSetup;
          this._myUI.build(parentObject, this._mySetup, additionalSetup);
          this._myUI.setVisibilityButtonVisible(additionalSetup.myShowVisibilityButton);
          if (!additionalSetup.myShowOnStart) {
            this._toggleVisibility(false, false);
          }
          this._addListeners();
        }
        update(dt) {
          this._myUI.update(dt);
        }
        _addListeners() {
          let ui = this._myUI;
          ui.myPinButtonCursorTargetComponent.addClickFunction(this._togglePin.bind(this, true));
          ui.myPinButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myPinButtonBackgroundComponent.material));
          ui.myPinButtonCursorTargetComponent.addUnHoverFunction(this._pinUnHover.bind(this, ui.myPinButtonBackgroundComponent.material));
          if (this._myAdditionalSetup.myShowVisibilityButton) {
            ui.myVisibilityButtonCursorTargetComponent.addClickFunction(this._toggleVisibility.bind(this, true, true));
            ui.myVisibilityButtonCursorTargetComponent.addHoverFunction(this._genericHover.bind(this, ui.myVisibilityButtonBackgroundComponent.material));
            ui.myVisibilityButtonCursorTargetComponent.addUnHoverFunction(this._visibilityUnHover.bind(this, ui.myVisibilityButtonBackgroundComponent.material));
          }
        }
        _toggleVisibility(isButton, notify) {
          this.myIsWidgetVisible = !this.myIsWidgetVisible;
          this._myUI.setWidgetVisible(this.myIsWidgetVisible);
          let textMaterial = this._myUI.myVisibilityButtonTextComponent.material;
          let backgroundMaterial = this._myUI.myVisibilityButtonBackgroundComponent.material;
          if (this.myIsWidgetVisible) {
            textMaterial.color = this._mySetup.myDefaultTextColor;
            if (!isButton) {
              backgroundMaterial.color = this._mySetup.myBackgroundColor;
            }
          } else {
            textMaterial.color = this._mySetup.myButtonDisabledTextColor;
            if (!isButton) {
              backgroundMaterial.color = this._mySetup.myButtonDisabledBackgroundColor;
            }
          }
          if (notify) {
            for (let callback of this._myWidgetVisibleChangedCallbacks.values()) {
              callback(this.myIsWidgetVisible);
            }
          }
        }
        _togglePin(isButton) {
          if (this.myIsWidgetVisible) {
            this.myIsPinned = !this.myIsPinned;
            this._myUI.setPinned(this.myIsPinned);
            let textMaterial = this._myUI.myPinButtonTextComponent.material;
            let backgroundMaterial = this._myUI.myPinButtonBackgroundComponent.material;
            if (this.myIsPinned) {
              textMaterial.color = this._mySetup.myDefaultTextColor;
              if (!isButton) {
                backgroundMaterial.color = this._mySetup.myBackgroundColor;
              }
            } else {
              textMaterial.color = this._mySetup.myButtonDisabledTextColor;
              if (!isButton) {
                backgroundMaterial.color = this._mySetup.myButtonDisabledBackgroundColor;
              }
            }
            for (let callback of this._myPinChangedCallbacks.values()) {
              callback(this.myIsPinned);
            }
          }
        }
        _genericHover(material) {
          material.color = this._mySetup.myButtonHoverColor;
        }
        _visibilityUnHover(material) {
          if (this.myIsWidgetVisible) {
            material.color = this._mySetup.myBackgroundColor;
          } else {
            material.color = this._mySetup.myButtonDisabledBackgroundColor;
          }
        }
        _pinUnHover(material) {
          if (this.myIsPinned) {
            material.color = this._mySetup.myBackgroundColor;
          } else {
            material.color = this._mySetup.myButtonDisabledBackgroundColor;
          }
        }
      };
    }
  });

  // js/bundle.js
  init_cursor();
  require_cursor_target();
  require_pp();
  init_audio_listener();
  require_audio_manager_component();
  init_audio_manager();
  require_audio_player();
  require_audio_setup();
  init_mute_all();
  require_number_over_value();
  require_object_pool_manager();
  require_physx_collision_collector();
  require_save_manager();
  require_timer();
  require_clear_console_on_session();
  require_player_height();
  require_set_hand_transform();
  require_set_head_transform();
  require_set_hierarchy_active();
  require_fsm();
  require_state();
  require_transition();
  require_timer_state();
  require_ca_utils();
  require_color_utils();
  require_mesh_utils();
  require_save_utils();
  require_text_utils();
  require_xr_utils();
  require_debug_axes_component();
  require_debug_axes();
  require_debug_data();
  require_debug_line();
  require_grabbable();
  require_grabber_hand();
  require_finger_cursor();
  require_hand_pose();
  require_head_pose();
  require_input_types();
  require_input_utils();
  require_gamepad_animator();
  require_gamepad_manager_component();
  require_gamepad_manager();
  require_gamepad_utils();
  require_gamepad();
  require_clone_mod();
  require_cursor_mod();
  require_cursor_target_mod();
  init_object_extension();
  init_array_extension();
  init_float32array_extension();
  require_math_extension();
  require_tool_types();
  require_tool_cursor();
  require_console_vr_widget_setup();
  require_console_vr_widget_ui();
  require_console_vr_widget();
  require_console_vr();
  require_easy_object_tuner();
  require_easy_light_attenuation();
  require_easy_light_color();
  require_easy_mesh_color();
  require_easy_scale();
  require_easy_set_tune_target_child_number();
  require_easy_set_tune_target_grab();
  require_easy_transform();
  require_easy_tune_bool_array_widget();
  require_easy_tune_bool_array_widget_ui();
  require_easy_tune_bool_array_widget_setup();
  require_easy_tune_bool_widget();
  require_easy_tune_none_widget();
  require_easy_tune_none_widget_ui();
  require_easy_tune_none_widget_setup();
  require_easy_tune_number_array_widget();
  require_easy_tune_number_array_widget_ui();
  require_easy_tune_number_array_widget_setup();
  require_easy_tune_number_widget();
  require_easy_tune_transform_widget();
  require_easy_tune_transform_widget_ui();
  require_easy_tune_transform_widget_setup();
  require_easy_tune_widget();
  require_easy_tune_widget_setup();
  require_easy_tune_variables();
  require_easy_tune();
  require_widget_frame_setup();
  require_widget_frame_ui();
  require_widget_frame();
})();
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
//# sourceMappingURL=wle_pp_bundler-bundle.js.map
