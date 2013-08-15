var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("toggle-switch-test", function(testPage) {

    describe("test/toggle-switch/toggle-switch-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("ToggleSwitch", function() {
            it("can be created", function() {
                expect(testPage.test.toggleSwitch).toBeDefined();
            });
        });
    });
});

