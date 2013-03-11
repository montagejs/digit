var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-text-test", function(testPage) {

    describe("test/input-text/input-text-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputText", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.inputText).toBeDefined();
                });
                var inputText, defaultValue, defaultRequired;
                beforeEach(function() {
                    if (!inputText) {
                        inputText = testPage.test.inputText;
                        //keep default values
                        defaultValue = inputText.value;
                        defaultRequired = inputText.required;
                    }
                    //restore default values
                    inputText.value = defaultValue;
                    inputText.required = defaultRequired;
                });
                describe("property", function() {
                    describe("value", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultValue).toEqual("");
                        });
                        it("can be set", function() {
                            inputText.value = "a string";
                            expect(inputText.value).toEqual("a string");
                        });
                    });
                    describe("required", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultRequired).toEqual(false);
                        });
                        it("TODO can be set", function() {
                            inputText.required = true;
                            expect(inputText.required).toEqual(true);
                        });
                    });
                });
            });
            describe("initialization attributes", function () {
                var inputText, defaultValue, defaultRequired;
                beforeEach(function() {
                    if (!inputText) {
                        inputText = testPage.test.inputTextWithAttributes;
                        //keep default values
                        defaultValue = inputText.value;
                        defaultRequired = inputText.required;
                    }
                    //restore default values
                    inputText.value = defaultValue;
                    inputText.required = defaultRequired;
                });
                it("TODO should have expected value property value", function () {
                    expect(inputText.value).toEqual("a string");
                });
                it("TODO should have expected required property value", function () {
                    expect(inputText.required).toEqual(true);
                });
            });
        });
    });
});
