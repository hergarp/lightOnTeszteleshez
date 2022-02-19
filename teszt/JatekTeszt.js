const {test} = QUnit;


QUnit.module("ellenorzes()", (hook) => {
    hook.before(() => {
        this.lojatek = new LOJatek(0);
    });

    test("ellenorzes létezik-e?", (assert) => {
        assert.ok(this.lojatek.ellenorzes, "Az ellenorzes létezik!");
    });

    test("ellenorzes függvény-e?", (assert) => {
        assert.ok(typeof this.lojatek.ellenorzes === 'function', "létezik az ellenorzes függvény!");
    });
    test("minden elem fel van- e kapcsolva", (assert) => {
        this.lojatek = new LOJatek(9);
        assert.equal(this.lojatek.ellenorzes(), 9);
    });
    test("minden elem le van- e kapcsolva", (assert) => {
        this.lojatek = new LOJatek(0);
        assert.equal(this.lojatek.ellenorzes(), 0);
    });
    test("5 elem  van- e fel kapcsolva", (assert) => {
        this.lojatek = new LOJatek(5);
        assert.equal(this.lojatek.ellenorzes(), 5);
    });


});

QUnit.module("szomszedokValtoztatasa()", (h) => {
    h.beforeEach(() => {
        this.lojatek = new LOJatek(0);
    });

    test("szomszedokValtoztatasa létezik-e?", (assert) => {
        assert.ok(this.lojatek.szomszedokValtoztatasa, "A szomszedokValtoztatasa létezik!");
    });

    test("szomszedokValtoztatasa függvény-e?", (assert) => {
        assert.ok(typeof this.lojatek.szomszedokValtoztatasa === 'function', "létezik a szomszedokValtoztatasa függvény!");
    });
    test("Középső lámpa  van- e fel kapcsolva", (assert) => {
        this.lojatek.szomszedokValtoztatasa(4);
        assert.equal(this.lojatek.ellenorzes(4), 4);
    });
    test("Bal felső lámpa  van- e fel kapcsolva", (assert) => {
        this.lojatek.szomszedokValtoztatasa(0);
        assert.equal(this.lojatek.ellenorzes(0), 0);
    });

});
