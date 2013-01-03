//describe("test", function() {
//    it("should be true", function() {
//        expect(true).toBeTruthy();
//    });
//});

var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("button-test", function(testPage) {

    describe("test/components/button/button-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Button", function() {

            describe("setting innerHTML", function() {
                it("can be created", function() {
                    expect(testPage.test.button).toBeDefined();
                });
            });
        });
    });
});
