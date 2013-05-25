var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("text-field-test", function(testPage) {

    describe("test/text-field/text-field-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("TextField", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.textField).toBeDefined();
                });
                var textField, defaultValue, defaultRequired, defaultMaxLength;
                beforeEach(function() {
                    if (!textField) {
                        textField = testPage.test.textField;
                        //keep default values
                        defaultValue = textField.value;
                        defaultRequired = textField.required;
                        defaultMaxLength = textField.maxLength;
                    }
                    //restore default values
                    textField.value = defaultValue;
                    textField.required = defaultRequired;
                    textField.maxLength = defaultMaxLength;
                });
                describe("property", function() {
                    describe("value", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultValue).toEqual("");
                        });
                        it("can be set", function() {
                            textField.value = "a string";
                            expect(textField.value).toEqual("a string");
                        });
                    });
                    describe("required", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultRequired).toEqual(false);
                        });
                        it("TODO can be set", function() {
                            textField.required = true;
                            expect(textField.required).toEqual(true);
                        });
                    });
                    describe("maxLength", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultMaxLength).toEqual(-1);
                        });
                        it("TODO can be set", function() {
                            textField.maxLength = 12;
                            expect(textField.maxLength).toEqual(12);
                        });
                    });
                });
            });
            describe("initialization attributes", function () {
                var textField, defaultValue, defaultRequired, defaultMaxLength;
                beforeEach(function() {
                    if (!textField) {
                        textField = testPage.test.textFieldWithAttributes;
                        //keep default values
                        defaultValue = textField.value;
                        defaultRequired = textField.required;
                        defaultMaxLength = textField.maxLength;
                    }
                    //restore default values
                    textField.value = defaultValue;
                    textField.required = defaultRequired;
                    textField.maxLength = defaultMaxLength;
                });
                it("TODO should have expected value property value", function () {
                    expect(textField.value).toEqual("a string");
                });
                it("TODO should have expected required property value", function () {
                    expect(textField.required).toEqual(true);
                });
                it("TODO should have expected maxLength property value", function () {
                    expect(textField.maxLength).toEqual(7);
                });
            });
        });
    });
});
