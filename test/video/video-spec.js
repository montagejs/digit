var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("video-test", function(testPage) {

    describe("test/video/video-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Video", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.video).toBeDefined();
                });
                var video;
                beforeEach(function() {
                    if (!video) {
                        video = testPage.test.video;
                        //keep default values
                        //defaultChecked = video.checked;
                    }
                    //restore default values
                    //video.checked = defaultChecked;
                });
            });
        });
    });
});
