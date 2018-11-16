interface Matrix<T> {
  { [key: number]: T };
  readonly buffer: ArrayBuffer;
  readonly length: number;
}

export class Int8Matrix implements Matrix<Int8Array> {
  constructor(cols: number, rows: number);
};
export class Uint8Matrix implements Matrix<Uint8Array> {
  constructor(cols: number, rows: number);
};
export class Uint8ClampedMatrix implements Matrix<Uint8ClampedArray> {
  constructor(cols: number, rows: number);
};
export class Int16Matrix implements Matrix<Int16Array> {
  constructor(cols: number, rows: number);
};
export class Uint16Matrix implements Matrix<Uint16Array> {
  constructor(cols: number, rows: number);
};
export class Int32Matrix implements Matrix<Int32Array> {
  constructor(cols: number, rows: number);
};
export class Uint32Matrix implements Matrix<Uint32Array> {
  constructor(cols: number, rows: number);
};
export class Float32Matrix implements Matrix<Float32Array> {
  constructor(cols: number, rows: number);
};
export class Float64Matrix implements Matrix<Float64Array> {
  constructor(cols: number, rows: number);
};
