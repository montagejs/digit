/*global describe, it, expect, beforeEach, afterEach */
var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("number-field-test", function(testPage) {

    describe("test/number-field/number-field-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("NumberField", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.numberField).toBeDefined();
                });
                var numberField, defaultValue, defaultStep, defaultMin, defaultMax;
                beforeEach(function() {
                    if (!numberField) {
                        numberField = testPage.test.numberField;
                        //keep default values
                        defaultValue = numberField.value;
                        defaultStep = numberField.step;
                        defaultMin = numberField.min;
                        defaultMax = numberField.max;
                    }
                    //restore default values
                    numberField.min = defaultMin;
                    numberField.max = defaultMax;
                    numberField.step = defaultStep;
                    numberField.value = defaultValue;
                });
                describe("property", function() {
                    describe("value", function() {
                        it("should have correct default", function() {
                            expect(defaultValue).toEqual(0);
                        });
                        it("can be set", function() {
                            numberField.value = 5;
                            expect(numberField.value).toEqual(5);
                        });
                        it("can be negative", function() {
                            numberField.value = -2;
                            expect(numberField.value).toEqual(-2);
                        });
                        it("can be set with a string", function() {
                            numberField.value = "5";
                            expect(numberField.value).toEqual(5);
                        });
                        it("can't be set with letters", function() {
                            var previousValue = numberField.value;
                            numberField.value = "hello";
                            expect(numberField.value).not.toEqual("hello");
                            expect(numberField.value).toEqual(previousValue);
                        });
                        describe("behavior", function() {
                            it("value shouldn't be affected by step", function() {
                                numberField.step = 2;
                                numberField.value = 5.5;
                                expect(numberField.value).toEqual(5.5);
                            });
                            it("value should take min into account", function() {
                                numberField.min = 10;
                                numberField.value = 0;
                                expect(numberField.value).toEqual(10);
                            });
                            it("value should take max into account", function() {
                                numberField.max = 20;
                                numberField.value = 25;
                                expect(numberField.value).toEqual(20);
                            });
                       });
                    });
                    describe("step", function() {
                        it("should have correct default", function() {
                            expect(defaultStep).toEqual(1);
                        });
                        it("can be set", function() {
                            numberField.step = 2;
                            expect(numberField.step).toEqual(2);
                        });
                        it("cannot be negative", function() {
                            // Inspiration from:
                            //  http://dev.w3.org/html5/spec/common-input-element-attributes.html#attr-input-step
                            var previousValue = numberField.step;
                            numberField.step = -2;
                            expect(numberField.step).toEqual(previousValue);
                        });
                        it("can be set with a string", function() {
                            numberField.step = "2";
                            expect(numberField.step).toEqual(2);
                        });
                        it("can't be set with letters", function() {
                            var previousValue = numberField.step;
                            numberField.step = "hello";
                            expect(numberField.step).not.toEqual("hello");
                            expect(numberField.step).toEqual(previousValue);
                        });
                    });
                    describe("min", function() {
                        it("should have correct default", function() {
                            expect(defaultMin).toEqual("any");
                        });
                        it("can be set", function() {
                            numberField.min = 2;
                            expect(numberField.min).toEqual(2);
                        });
                        it("can be negative", function() {
                            numberField.min = -2;
                            expect(numberField.min).toEqual(-2);
                        });
                        it("can be set with a string", function() {
                            numberField.min = "2";
                            expect(numberField.min).toEqual(2);
                        });
                        it("can't be set with letters", function() {
                            var previousValue = numberField.min;
                            numberField.min = "hello";
                            expect(numberField.min).not.toEqual("hello");
                            expect(numberField.min).toEqual(previousValue);
                        });
                        describe("behavior", function() {
                            it("value should be unchanged if value already a greater than min", function() {
                                numberField.value = 6;
                                numberField.min = 2;
                                expect(numberField.value).toEqual(6);
                            });
                            it("value should be changed if value isn't greater than min", function() {
                                numberField.value = 1;
                                numberField.min = 2;
                                expect(numberField.value).toEqual(2);
                            });
                        });
                    });
                    describe("max", function() {
                        it("should have correct default", function() {
                            expect(defaultMax).toEqual("any");
                        });
                        it("can be set", function() {
                            numberField.max = 2;
                            expect(numberField.max).toEqual(2);
                        });
                        it("can be negative", function() {
                            numberField.max = -2;
                            expect(numberField.max).toEqual(-2);
                        });
                        it("can be set with a string", function() {
                            numberField.max = "2";
                            expect(numberField.max).toEqual(2);
                        });
                        it("can't be set with letters", function() {
                            var previousValue = numberField.max;
                            numberField.max = "hello";
                            expect(numberField.max).not.toEqual("hello");
                            expect(numberField.max).toEqual(previousValue);
                        });
                        describe("behavior", function() {
                            it("value should be unchanged if value is already less than max", function() {
                                numberField.value = 2;
                                numberField.max = 6;
                                expect(numberField.value).toEqual(2);
                            });
                            it("value should be changed if value isn't less than max", function() {
                                numberField.value = 10;
                                numberField.max = 9;
                                expect(numberField.value).toEqual(9);
                            });
                        });
                    });
                });
                describe("interaction", function () {
                    describe("plus", function () {
                        //http://www.w3.org/html/wg/drafts/html/master/forms.html#dom-input-stepup
                        it("should increment by a unit of step", function () {
                            numberField.min = "any";
                            numberField.value = 6;
                            numberField.step = 2;
                            numberField.handlePlusAction();
                            expect(numberField.value).toEqual(8);
                        });
                        it("should use min as the step base", function () {
                            numberField.min = 1;
                            numberField.value = 6;
                            numberField.step = 2;
                            numberField.handlePlusAction();
                            expect(numberField.value).toEqual(7);
                        });
                        it("should snap to greater integral multiple", function () {
                            numberField.value = 5.5;
                            numberField.step = 2;
                            numberField.handlePlusAction();
                            expect(numberField.value).toEqual(6);
                        });
                        it("should not go above max", function () {
                            numberField.min = 1;
                            numberField.max = 11;
                            numberField.value = 10.5;
                            numberField.step = 3;
                            numberField.handlePlusAction();
                            expect(numberField.value).toEqual(11);
                        });
                    });
                    describe("minus", function () {
                        //http://www.w3.org/html/wg/drafts/html/master/forms.html#dom-input-stepup
                        it("should decrement by a unit of step", function () {
                            numberField.min = "any";
                            numberField.value = 6;
                            numberField.step = 2;
                            numberField.handleMinusAction();
                            expect(numberField.value).toEqual(4);
                        });
                        it("should use min as the step base", function () {
                            numberField.min = 1;
                            numberField.value = 6;
                            numberField.step = 2;
                            numberField.handleMinusAction();
                            expect(numberField.value).toEqual(5);
                        });
                        it("should snap to lesser integral multiple", function () {
                            numberField.value = 5.5;
                            numberField.step = 2;
                            numberField.handleMinusAction();
                            expect(numberField.value).toEqual(4);
                        });
                        it("should not go below min", function () {
                            numberField.min = 1;
                            numberField.max = 10;
                            numberField.value = 2.5;
                            numberField.step = 3;
                            numberField.handleMinusAction();
                            expect(numberField.value).toEqual(1);
                        });
                    });
                });
            });
            describe("initialization attributes", function () {
                var numberField, defaultValue, defaultStep, defaultMin, defaultMax;
                beforeEach(function() {
                    if (!numberField) {
                        numberField = testPage.test.numberFieldWithAttributes;
                        //keep default values
                        defaultValue = numberField.value;
                        defaultStep = numberField.step;
                        defaultMin = numberField.min;
                        defaultMax = numberField.max;
                    }
                    //restore default values
                    numberField.min = defaultMin;
                    numberField.max = defaultMax;
                    numberField.step = defaultStep;
                    numberField.value = defaultValue;
                });
                it("should have expected min property value", function () {
                    expect(numberField.min).toEqual(-4);
                });
                it("should have expected max property value", function () {
                    expect(numberField.max).toEqual(15);
                });
                it("should have expected step property value", function () {
                    expect(numberField.step).toEqual(3);
                });

            });
        });
    });
});
