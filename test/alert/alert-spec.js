var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("alert-test", function(testPage) {

    describe("test/alert/alert-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Alert", function() {
            it("can be created", function() {
                expect(testPage.test.templateObjects.alert).toBeDefined();
            });

            it("can be shown", function() {
                var alert = testPage.test.templateObjects.alert;

                alert.show();

                testPage.waitForComponentDraw(alert._overlay);
                runs(function() {
                    expect(testPage.iframe.contentDocument.body.contains(alert._overlay.element)).toBeTruthy();
                });
            });
        });
    });
});
