class Matrix {
  #array;

  constructor(type, x, y) {
    const array = new type(x * y + 2);

    // assign rows, cols to last 2 indexes
    array[x * y] = x;
    array[x * y + 1] = y;

    this.#array = array;
  }

  get(n) {
    const type = this.#array.constructor;
    const { cols } = this;
    return new type(this.buffer, cols * n * type.BYTES_PER_ELEMENT, cols);
  }

  get buffer() {
    return this.#array.buffer;
  }

  get length() {
    return this.buffer.length;
  }

  get cols() {
    const array = this.#array;
    return array[array.length - 2];
  }

  get rows() {
    const array = this.#array;
    return array[array.length - 1];
  }

  toString() {
    const array = this.#array;
    const { constructor: { name }} = array;
    const [cols, rows] = array.slice(-2);

    let str = `${name.replace('Array', 'Matrix')} [`;
    for (let i = 0; i < rows; ++i) {
      str += `\n  [${array[i * rows]}`;
      for (let j = 1; j < cols; ++j) {
        str += `, ${array[i * rows + j]}`;
      }
      str += '],';
    }
    return `${str}\n]`;
  }
}

function get(target, property) {
  if (!Number.isNaN(+property)) {
    return target.get(property);
  }
  return Reflect.get(target, property);
}

function apply() {
  throw new TypeError('calling a typed matrix constructor without new is forbidden');
}

export function Int8Matrix(x, y) {
  return new Proxy(new Matrix(Int8Array, x, y), { get, apply });
}

export function Uint8Matrix(x, y) {
  return new Proxy(new Matrix(Uint8Array, x, y), { get, apply });
}

export function Uint8ClampedMatrix(x, y) {
  return new Proxy(new Matrix(Uint8ClampedArray, x, y), { get, apply });
}

export function Int16Matrix(x, y) {
  return new Proxy(new Matrix(Int16Array, x, y), { get, apply });
}

export function Uint16Matrix(x, y) {
  return new Proxy(new Matrix(Uint16Array, x, y), { get, apply });
}

export function Int32Matrix(x, y) {
  return new Proxy(new Matrix(Int32Array, x, y), { get, apply });
}

export function Uint32Matrix(x, y) {
  return new Proxy(new Matrix(Uint32Array, x, y), { get, apply });
}

export function Float32Matrix(x, y) {
  return new Proxy(new Matrix(Float32Array, x, y), { get, apply });
}

export function Float64Matrix(x, y) {
  return new Proxy(new Matrix(Float64Array, x, y), { get, apply });
}
