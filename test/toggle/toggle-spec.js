var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("toggle-test", function(testPage) {

    describe("test/toggle/toggle-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Toggle", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.toggle).toBeDefined();
                });
                var toggle, defaultChecked;
                beforeEach(function() {
                    if (!toggle) {
                        toggle = testPage.test.toggle;
                        //keep default values
                        defaultChecked = toggle.checked;
                    }
                    //restore default values
                    toggle.checked = defaultChecked;
                });
                describe("property", function() {
                    describe("checked", function() {
                        it("TODO should have correct default", function() {
                            expect(defaultChecked).toEqual(false);
                        });
                        it("can be set", function() {
                            toggle.checked = true;
                            expect(toggle.checked).toEqual(true);
                        });
                    });
                });
                describe("interaction", function () {
                    describe("press", function () {
                        it("TODO should check toggle if not already checked", function () {
                            toggle.checked = false;
                            toggle.handlePress();
                            expect(toggle.checked).toEqual(true);
                        });
                        it("TODO should uncheck toggle if already checked", function () {
                            toggle.checked = true;
                            toggle.handlePress();
                            expect(toggle.checked).toEqual(false);
                        });
                    });
                });
            });
        });
    });
});
