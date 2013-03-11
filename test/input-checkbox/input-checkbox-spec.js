var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-checkbox-test", function(testPage) {

    describe("test/input-checkbox/input-checkbox-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputCheckbox", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.inputCheckbox).toBeDefined();
                });
                var inputCheckbox, defaultChecked, defaultRequired;
                beforeEach(function() {
                    if (!inputCheckbox) {
                        inputCheckbox = testPage.test.inputCheckbox;
                        //keep default values
                        defaultChecked = inputCheckbox.checked;
                        defaultRequired = inputCheckbox.required;
                    }
                    //restore default values
                    inputCheckbox.checked = defaultChecked;
                    inputCheckbox.required = defaultRequired;
                });
                describe("property", function() {
                    describe("checked", function() {
                        it("should have correct default", function() {
                            expect(defaultChecked).toEqual(false);
                        });
                        it("can be set", function() {
                            inputCheckbox.checked = true;
                            expect(inputCheckbox.checked).toEqual(true);
                        });
                    });
                });
                describe("property", function() {
                    describe("required", function() {
                        it("should have correct default", function() {
                            expect(defaultRequired).toEqual(false);
                        });
                        it("can be set", function() {
                            inputCheckbox.required = true;
                            expect(inputCheckbox.required).toEqual(true);
                        });
                    });
                });
                describe("interaction", function () {
                    describe("press", function () {
                        it("should check checkbox if not already checked", function () {
                            inputCheckbox.checked = false;
                            inputCheckbox.handlePress();
                            expect(inputCheckbox.checked).toEqual(true);
                        });
                        it("should uncheck checkbox if already checked", function () {
                            inputCheckbox.checked = true;
                            inputCheckbox.handlePress();
                            expect(inputCheckbox.checked).toEqual(false);
                        });
                    });
                });
            });
            describe("initialization attributes", function () {
                var inputCheckbox, defaultChecked, defaultRequired;
                beforeEach(function() {
                    if (!inputCheckbox) {
                        inputCheckbox = testPage.test.inputCheckboxAttributeChecked;
                        //keep default values
                        defaultChecked = inputCheckbox.checked;
                        defaultRequired = inputCheckbox.required;
                    }
                    //restore default values
                    inputCheckbox.checked = defaultChecked;
                    inputCheckbox.required = defaultRequired;
                });
                it("should have expected property values", function () {
                    expect(inputCheckbox.checked).toEqual(true);
                    expect(inputCheckbox.required).toEqual(true);
                });
            });
        });
    });
});
