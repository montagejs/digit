var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("checkbox-test", function(testPage) {

    describe("test/checkbox/checkbox-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Checkbox", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.checkbox).toBeDefined();
                });
                var checkbox, defaultChecked, defaultRequired;
                beforeEach(function() {
                    if (!checkbox) {
                        checkbox = testPage.test.checkbox;
                        //keep default values
                        defaultChecked = checkbox.checked;
                        defaultRequired = checkbox.required;
                    }
                    //restore default values
                    checkbox.checked = defaultChecked;
                    checkbox.required = defaultRequired;
                });
                describe("property", function() {
                    describe("checked", function() {
                        it("should have correct default", function() {
                            expect(defaultChecked).toEqual(false);
                        });
                        it("can be set", function() {
                            checkbox.checked = true;
                            expect(checkbox.checked).toEqual(true);
                        });
                    });
                });
                describe("interaction", function () {
                    describe("press", function () {
                        it("should check checkbox if not already checked", function () {
                            checkbox.checked = false;
                            checkbox.handlePress();
                            expect(checkbox.checked).toEqual(true);
                        });
                        it("should uncheck checkbox if already checked", function () {
                            checkbox.checked = true;
                            checkbox.handlePress();
                            expect(checkbox.checked).toEqual(false);
                        });
                    });
                });
            });
        });
    });
});
