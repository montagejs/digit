var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("textarea-test", function(testPage) {

    describe("test/textarea/textarea-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Textarea", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.textarea).toBeDefined();
                });
                var textarea, defaultValue;
                beforeEach(function() {
                    if (!textarea) {
                        textarea = testPage.test.textarea;
                        //keep default values
                        defaultValue = textarea.value;
                    }
                    //restore default values
                    textarea.value = defaultValue;
                });
                describe("property", function() {
                    describe("value", function() {
                        it("should have correct default", function() {
                            expect(defaultValue).toEqual("");
                        });
                        it("can be set", function() {
                            textarea.value = "a string";
                            expect(textarea.value).toEqual("a string");
                        });
                    });
                });
            });
        });
    });
});
