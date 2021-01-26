import assert from "assert";
import { suma, creaArrayDe3 } from "../src/js/operacions.mjs";

describe("Tests per la funció suma()", function () {
  it("test: suma() suma 2 numeros correctament", () => {
    assert.strictEqual(suma(2, 2), 4);
    assert.strictEqual(suma(20, 2), 22);
    assert.strictEqual(suma(2.5, -2.5), 0);
  });

  it("test: la suma entre un nombre i no nombre retorna NaN", () => {
    assert.strictEqual(isNaN(suma(100, "patata")), true);
  });
});

describe("Tests per la funció creaArrayDe3()", function () {
  it("creaArray retorna sempre un array", () => {
    assert.strictEqual(typeof creaArrayDe3(1, 2, 3), "object");
  });
  it("creaArray torna sempre un array de 3 elements", () => {
    assert.strictEqual(creaArrayDe3(1, 2, 3).length, 3);
  });
});
