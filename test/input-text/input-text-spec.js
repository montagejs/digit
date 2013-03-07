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
                var inputText, defaultValue;
                beforeEach(function() {
                    if (!inputText) {
                        inputText = testPage.test.inputText;
                        //keep default values
                        defaultValue = inputText.value;
                    }
                    //restore default values
                    inputText.value = defaultValue;
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
                        describe("behavior", function() {
                        });
                    });
                });
            });
        });
    });
});
