export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isEquilateral() {
    return this.a === this.b && this.a === this.c && this.b === this.c;
  }

  get isIsosceles() {
    return this.a === this.b || this.a === this.c ||
      this.b === this.c;
  }

  get isScalene() {
    return this.a !== this.b && this.a !== this.c &&
      this.b !== this.c;
  }
}
