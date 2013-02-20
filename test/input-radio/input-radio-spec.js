var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-radio-test", function(testPage) {

    describe("test/input-radio/input-radio-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputRadio", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.inputRadio1).toBeDefined();
                });
                var inputRadio1, inputRadio2, defaultChecked;
                beforeEach(function() {
                    if (!inputRadio1) {
                        inputRadio1 = testPage.test.inputRadio1;
                        //keep default values
                        defaultChecked = inputRadio1.checked;
                    }
                    if (!inputRadio2) {
                        inputRadio2 = testPage.test.inputRadio2;
                        //keep default values
                        defaultChecked = inputRadio2.checked;
                    }
                    //restore default values
                    inputRadio1.checked = defaultChecked;
                    inputRadio2.checked = defaultChecked;
                });
                describe("property", function() {
                    describe("checked", function() {
                        it("should have correct default", function() {
                            expect(defaultChecked).toEqual(false);
                        });
                        it("can be set", function() {
                            inputRadio1.checked = true;
                            expect(inputRadio1.checked).toEqual(true);
                        });
                        it("should uncheck same-named radio buttons when checked", function () {
                            inputRadio1.checked = true;
                            inputRadio2.checked = true;
                            expect(inputRadio1.checked).toEqual(false);
                        });
                        it("should only uncheck same-named radio buttons when checked", function () {
                            inputRadio1.checked = true;
                            inputRadio2.checked = true;
                            expect(inputRadio2.checked).toEqual(true);
                        });
                    });
                });
                describe("interaction", function () {
                    describe("press", function () {
                        it("should check radio button if not already checked", function () {
                            inputRadio1.checked = false;
                            inputRadio1.handlePress();
                            expect(inputRadio1.checked).toEqual(true);
                        });
                        it("should not change checked state if already checked", function () {
                            inputRadio1.checked = true;
                            inputRadio1.handlePress();
                            expect(inputRadio1.checked).toEqual(true);
                        });
                    });
                });
            });
            describe("initialization attributes", function () {
                var inputRadio, defaultChecked;
                beforeEach(function() {
                    if (!inputRadio) {
                        inputRadio = testPage.test.inputRadioChecked;
                        //keep default values
                        defaultChecked = inputRadio.checked;
                    }
                    //restore default values
                    inputRadio.checked = defaultChecked;
                });
                it("should have expected property values", function () {
                    expect(inputRadio.checked).toEqual(true);
                });
            });
        });
    });
});
