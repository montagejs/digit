var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("confirm-test", function(testPage) {

    describe("test/confirm/confirm-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Confirm", function() {
            it("can be created", function() {
                expect(testPage.test.templateObjects.confirm).toBeDefined();
            });

            it("can be shown", function() {
                var confirm = testPage.test.templateObjects.confirm;

                confirm.show();

                testPage.waitForComponentDraw(confirm._overlay);
                runs(function() {
                    expect(testPage.iframe.contentDocument.body.contains(confirm._overlay.element)).toBeTruthy();
                });
            });

            it("uses the configured ok label", function() {
                var confirm = testPage.test.templateObjects.confirm;

                confirm.okLabel = "Okay";

                expect(confirm._okButton.label).toBe("Okay");
            });

            it("uses the configured cancel label", function() {
                var confirm = testPage.test.templateObjects.confirm;

                confirm.cancelLabel = "Nay";

                expect(confirm._cancelButton.label).toBe("Nay");
            });
        });
    });
});
