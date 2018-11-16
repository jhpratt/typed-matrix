class Matrix<T> {
  { [key: number]: T };
  constructor(cols: number, rows: number);
  buffer: ArrayBuffer;
  length: number;
}

export class Int8Matrix extends Matrix<Int8Array> {};
export class Uint8Matrix extends Matrix<Uint8Array> {};
export class Uint8ClampedMatrix extends Matrix<Uint8ClampedArray> {};
export class Int16Matrix extends Matrix<Int16Array> {};
export class Uint16Matrix extends Matrix<Uint16Array> {};
export class Int32Matrix extends Matrix<Int32Array> {};
export class Uint32Matrix extends Matrix<Uint32Array> {};
export class Float32Matrix extends Matrix<Float32Array> {};
export class Float64Matrix extends Matrix<Float64Array> {};
