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
                var textarea, defaultValue, defaultRequired, defaultMaxLength;
                beforeEach(function() {
                    if (!textarea) {
                        textarea = testPage.test.textarea;
                        //keep default values
                        defaultValue = textarea.value;
                        defaultRequired = textarea.required;
                        defaultMaxLength = textarea.maxLength;
                    }
                    //restore default values
                    textarea.value = defaultValue;
                    textarea.required = defaultRequired;
                    textarea.maxLength = defaultMaxLength;
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
                    describe("required", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultRequired).toEqual(false);
                        });
                        it("TODO can be set", function() {
                            textarea.required = true;
                            expect(textarea.required).toEqual(true);
                        });
                    });
                    describe("maxLength", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultMaxLength).toEqual(-1);
                        });
                        it("TODO can be set", function() {
                            textarea.maxLength = 400;
                            expect(textarea.maxLength).toEqual(400);
                        });
                    });
                });
            });
            describe("initialization attributes", function () {
                var textarea, defaultValue, defaultRequired, defaultMaxLength;
                beforeEach(function() {
                    if (!textarea) {
                        textarea = testPage.test.textareaWithAttributes;
                        //keep default values
                        defaultValue = textarea.value;
                        defaultRequired = textarea.required;
                        defaultMaxLength = textarea.maxLength;
                    }
                    //restore default values
                    textarea.value = defaultValue;
                    textarea.required = defaultRequired;
                    textarea.maxLength = defaultMaxLength;
                });
                it("TODO should have expected value property value", function () {
                    expect(textarea.value).toEqual("a string");
                });
                it("TODO should have expected required property value", function () {
                    expect(textarea.required).toEqual(true);
                });
                it("TODO should have expected maxLength property value", function () {
                    expect(textarea.maxLength).toEqual(150);
                });
            });
        });
    });
});
