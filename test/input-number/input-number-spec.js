var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-number-test", function(testPage) {

    describe("test/input-number/input-number-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputNumber", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.inputNumber).toBeDefined();
                });
                var inputNumber, defaultValue, defaultStep, defaultMin, defaultMax;
                beforeEach(function() {
                    if (!inputNumber) {
                        inputNumber = testPage.test.inputNumber;
                        //keep default values
                        defaultValue = inputNumber.value;
                        defaultStep = inputNumber.step;
                        defaultMin = inputNumber.min;
                        defaultMax = inputNumber.max;
                    }
                    //restore default values
                    inputNumber.min = defaultMin;
                    inputNumber.max = defaultMax;
                    inputNumber.step = defaultStep;
                    inputNumber.value = defaultValue;
                });
                describe("property", function() {
                    describe("value", function() {
                        it("should have correct default", function() {
                            expect(defaultValue).toEqual(0);
                        });
                        it("can be set", function() {
                            inputNumber.value = 5;
                            expect(inputNumber.value).toEqual(5);
                        });
                        it("can be negative", function() {
                            inputNumber.value = -2;
                            expect(inputNumber.value).toEqual(-2);
                        });
                        it("can be set with a string", function() {
                            inputNumber.value = "5";
                            expect(inputNumber.value).toEqual(5);
                        });
                        it("can't be set with letters", function() {
                            var previousValue = inputNumber.value;
                            inputNumber.value = "hello";
                            expect(inputNumber.value).not.toEqual("hello");
                            expect(inputNumber.value).toEqual(previousValue);
                        });
                        describe("behavior", function() {
                            it("value shouldn't be affected by step", function() {
                                inputNumber.step = 2;
                                inputNumber.value = 5.5;
                                expect(inputNumber.value).toEqual(5.5);
                            });
                            it("value should take min into account", function() {
                                inputNumber.min = 10;
                                inputNumber.value = 0;
                                expect(inputNumber.value).toEqual(10);
                            });
                            it("value should take max into account", function() {
                                inputNumber.max = 20;
                                inputNumber.value = 25;
                                expect(inputNumber.value).toEqual(20);
                            });
                       });
                    });
                    describe("step", function() {
                        it("should have correct default", function() {
                            expect(defaultStep).toEqual(1);
                        });
                        it("can be set", function() {
                            inputNumber.step = 2;
                            expect(inputNumber.step).toEqual(2);
                        });
                        it("TODO cannot be negative", function() {
                            // Inspiration from:
                            //  http://dev.w3.org/html5/spec/common-input-element-attributes.html#attr-input-step
                            var previousValue = inputNumber.step;
                            inputNumber.step = -2;
                            expect(inputNumber.step).toEqual(previousValue);
                        });
                        it("can be set with a string", function() {
                            inputNumber.step = "2";
                            expect(inputNumber.step).toEqual(2);
                        });
                        it("can't be set with letters", function() {
                            var previousValue = inputNumber.step;
                            inputNumber.step = "hello";
                            expect(inputNumber.step).not.toEqual("hello");
                            expect(inputNumber.step).toEqual(previousValue);
                        });
                   });
                    describe("min", function() {
                        it("should have correct default", function() {
                            expect(defaultMin).toBeNull();
                        });
                        it("can be set", function() {
                            inputNumber.min = 2;
                            expect(inputNumber.min).toEqual(2);
                        });
                        it("can be negative", function() {
                            inputNumber.min = -2;
                            expect(inputNumber.min).toEqual(-2);
                        });
                        it("can be set with a string", function() {
                            inputNumber.min = "2";
                            expect(inputNumber.min).toEqual(2);
                        });
                        it("can't be set with letters", function() {
                            var previousValue = inputNumber.min;
                            inputNumber.min = "hello";
                            expect(inputNumber.min).not.toEqual("hello");
                            expect(inputNumber.min).toEqual(previousValue);
                        });
                        describe("behavior", function() {
                            it("value should be unchanged if value already a greater than min", function() {
                                inputNumber.value = 6;
                                inputNumber.min = 2;
                                expect(inputNumber.value).toEqual(6);
                            });
                            it("value should be changed if value isn't greater than min", function() {
                                inputNumber.value = 1;
                                inputNumber.min = 2;
                                expect(inputNumber.value).toEqual(2);
                            });
                        });
                    });
                    describe("max", function() {
                        it("should have correct default", function() {
                            expect(defaultMax).toBeNull();
                        });
                        it("can be set", function() {
                            inputNumber.max = 2;
                            expect(inputNumber.max).toEqual(2);
                        });
                        it("can be negative", function() {
                            inputNumber.max = -2;
                            expect(inputNumber.max).toEqual(-2);
                        });
                        it("can be set with a string", function() {
                            inputNumber.max = "2";
                            expect(inputNumber.max).toEqual(2);
                        });
                        it("can't be set with letters", function() {
                            var previousValue = inputNumber.max;
                            inputNumber.max = "hello";
                            expect(inputNumber.max).not.toEqual("hello");
                            expect(inputNumber.max).toEqual(previousValue);
                        });
                        describe("behavior", function() {
                            it("value should be unchanged if value already a less than max", function() {
                                inputNumber.value = 6;
                                inputNumber.max = 2;
                                expect(inputNumber.value).toEqual(2);
                            });
                            it("TODO value should be changed if value isn't less than max", function() {
                                inputNumber.value = 10;
                                inputNumber.max = 9;
                                expect(inputNumber.value).toEqual(9);
                            });
                        });
                    });
                });
                describe("interaction", function () {
                    describe("plus", function () {
                        //http://www.w3.org/html/wg/drafts/html/master/forms.html#dom-input-stepup
                        it("should increment by a unit of step", function () {
                            inputNumber.min = null;
                            inputNumber.value = 6;
                            inputNumber.step = 2;
                            inputNumber.handlePlusAction();
                            expect(inputNumber.value).toEqual(8);
                        });
                        it("TODO should use min as the step base", function () {
                            inputNumber.min = 1;
                            inputNumber.value = 6;
                            inputNumber.step = 2;
                            inputNumber.handlePlusAction();
                            expect(inputNumber.value).toEqual(7);
                        });
                        it("should snap to greater integral multiple", function () {
                            inputNumber.value = 5.5;
                            inputNumber.step = 2;
                            inputNumber.handlePlusAction();
                            expect(inputNumber.value).toEqual(6);
                        });
                        it("should not go above max", function () {
                            inputNumber.min = 1;
                            inputNumber.max = 11;
                            inputNumber.value = 9.5;
                            inputNumber.step = 3;
                            inputNumber.handlePlusAction();
                            expect(inputNumber.value).toEqual(11);
                        });
                    });
                    describe("minus", function () {
                        //http://www.w3.org/html/wg/drafts/html/master/forms.html#dom-input-stepup
                        it("should decrement by a unit of step", function () {
                            inputNumber.min = null;
                            inputNumber.value = 6;
                            inputNumber.step = 2;
                            inputNumber.handleMinusAction();
                            expect(inputNumber.value).toEqual(4);
                        });
                        it("TODO should use min as the step base", function () {
                            inputNumber.min = 1;
                            inputNumber.value = 6;
                            inputNumber.step = 2;
                            inputNumber.handleMinusAction();
                            expect(inputNumber.value).toEqual(5);
                        });
                        it("should snap to lesser integral multiple", function () {
                            inputNumber.value = 5.5;
                            inputNumber.step = 2;
                            inputNumber.handleMinusAction();
                            expect(inputNumber.value).toEqual(4);
                        });
                        it("should not go below min", function () {
                            inputNumber.min = 1;
                            inputNumber.max = 10;
                            inputNumber.value = 2.5;
                            inputNumber.step = 3;
                            inputNumber.handleMinusAction();
                            expect(inputNumber.value).toEqual(1);
                        });
                    });
                });
            });
            describe("initialization attributes", function () {
                var inputNumber, defaultValue, defaultStep, defaultMin, defaultMax;
                beforeEach(function() {
                    if (!inputNumber) {
                        inputNumber = testPage.test.inputNumberWithAttributes;
                        //keep default values
                        defaultValue = inputNumber.value;
                        defaultStep = inputNumber.step;
                        defaultMin = inputNumber.min;
                        defaultMax = inputNumber.max;
                    }
                    //restore default values
                    inputNumber.min = defaultMin;
                    inputNumber.max = defaultMax;
                    inputNumber.step = defaultStep;
                    inputNumber.value = defaultValue;
                });
                it("should have expected property values", function () {
                    expect(inputNumber.min).toEqual(-4);
                    expect(inputNumber.max).toEqual(15);
                    expect(inputNumber.step).toEqual(3);
                });

            });
        });
    });
});
