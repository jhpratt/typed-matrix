class Matrix {
  #cols;
  #type;

  constructor(type, x, y) {
    this.#type = type;
    this.buffer = new ArrayBuffer(x * y * type.BYTES_PER_ELEMENT);
    this.#cols = x;
    this.length = x * y;

    check_length(this);
  }

  get(n) {
    return new this.#type(
      this.buffer,
      this.#cols * n * this.#type.BYTES_PER_ELEMENT,
      this.#cols,
    );
  }
}

function get(target, property) {
  if (typeof property === 'number') {
    return target.get(property);
  }
  return Reflect.get(target, property);
}

function check_length({ length }) {
  if (typeof length !== 'number' || length < 0) {
    throw new RangeError('invalid or out-of-range index');
  }
}

function call_check({ constructor }, type) {
  if (constructor !== type) {
    throw new TypeError('calling a typed matrix constructor without new is forbidden');
  }
}

export function Int8Matrix(x, y) {
  call_check(this, Int8Matrix);
  return new Proxy(new Matrix(Int8Array, x, y), { get });
}

export function Uint8Matrix(x, y) {
  call_check(this, Uint8Matrix);
  return new Proxy(new Matrix(Uint8Array, x, y), { get });
}

export function Uint8ClampedMatrix(x, y) {
  call_check(this, Uint8ClampedMatrix);
  return new Proxy(new Matrix(Uint8ClampedArray, x, y), { get });
}

export function Int16Matrix(x, y) {
  call_check(this, Int16Matrix);
  return new Proxy(new Matrix(Int16Array, x, y), { get });
}

export function Uint16Matrix(x, y) {
  call_check(this, Uint16Matrix);
  return new Proxy(new Matrix(Uint16Array, x, y), { get });
}

export function Int32Matrix(x, y) {
  call_check(this, Int32Matrix);
  return new Proxy(new Matrix(Int32Array, x, y), { get });
}

export function Uint32Matrix(x, y) {
  call_check(this, Uint32Matrix);
  return new Proxy(new Matrix(Uint32Array, x, y), { get });
}

export function Float32Matrix(x, y) {
  call_check(this, Float32Matrix);
  return new Proxy(new Matrix(Float32Array, x, y), { get });
}

export function Float64Matrix(x, y) {
  call_check(this, Float64Matrix);
  return new Proxy(new Matrix(Float64Array, x, y), { get });
}
