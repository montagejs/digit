var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("select-test", function(testPage) {

    describe("test/select/select-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Select", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.select).toBeDefined();
                });
                var select, defaultValue, defaultRequired;
                beforeEach(function() {
                    if (!select) {
                        select = testPage.test.select;
                        //keep default values
                        defaultValue = select.value;
                        defaultRequired = select.required;
                    }
                    //restore default values
                    select.value = defaultValue;
                    select.required = defaultRequired;
                });
                describe("property", function() {
                    describe("value", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultValue).toEqual(null);
                        });
                        it("TODO can not be set with no option", function() {
                            select.value = "banana";
                            expect(select.value).toEqual(defaultValue);
                        });
                    });
                    describe("required", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultRequired).toEqual(false);
                        });
                        it("TODO can be set", function() {
                            select.required = true;
                            expect(select.required).toEqual(true);
                        });
                    });
                });
            });
            describe("with options", function () {
                it("can be created", function() {
                    expect(testPage.test.selectWithOptions).toBeDefined();
                });
                var select, defaultValue, defaultRequired;
                beforeEach(function() {
                    if (!select) {
                        select = testPage.test.selectWithOptions;
                        //keep default values
                        defaultValue = select.value;
                        defaultRequired = select.required;
                    }
                    //restore default values
                    select.value = defaultValue;
                    select.required = defaultRequired;
                });
                describe("property", function() {
                    describe("value", function() {
                        it("TODO should default to first option", function() {
                            expect(defaultValue).toEqual("apple");
                        });
                        it("TODO can be set", function() {
                            select.value = "banana";
                            expect(select.value).toEqual("banana");
                        });
                        it("TODO can not be set to nonexistent option", function() {
                            select.value = "banana";
                            select.value = "pear";
                            expect(select.value).toEqual("banana");
                        });
                    });
                });
            });
        });
    });
});
