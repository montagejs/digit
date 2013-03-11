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
                var inputRadio1, inputRadio2, defaultChecked1, defaultChecked2, defaultRequired;
                beforeEach(function() {
                    if (!inputRadio1) {
                        inputRadio1 = testPage.test.inputRadio1;
                        //keep default values
                        defaultChecked1 = inputRadio1.checked;
                        defaultRequired = inputRadio1.required;
                    }
                    if (!inputRadio2) {
                        inputRadio2 = testPage.test.inputRadio2;
                        //keep default values
                        defaultChecked2 = inputRadio2.checked;
                    }
                    //restore default values
                    inputRadio1.checked = defaultChecked1;
                    inputRadio2.checked = defaultChecked2;
                    inputRadio1.required = defaultRequired;
                });
                describe("property", function() {
                    describe("checked", function() {
                        it("should have correct default", function() {
                            expect(defaultChecked1).toEqual(false);
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
                describe("property", function() {
                    describe("required", function() {
                        it("should have correct default", function() {
                            expect(defaultRequired).toEqual(false);
                        });
                        it("can be set", function() {
                            inputRadio1.required = true;
                            expect(inputRadio1.required).toEqual(true);
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
                var inputRadio, defaultChecked, defaultRequired;
                beforeEach(function() {
                    if (!inputRadio) {
                        inputRadio = testPage.test.inputRadioChecked;
                        //keep default values
                        defaultChecked = inputRadio.checked;
                        defaultRequired = inputRadio.required;
                    }
                    //restore default values
                    inputRadio.checked = defaultChecked;
                    inputRadio.required = defaultChecked;
                });
                it("should have expected checked property values", function () {
                    expect(inputRadio.checked).toEqual(true);
                });
                it("should have expected required property values", function () {
                    expect(inputRadio.required).toEqual(true);
                });
            });
        });
    });
});
