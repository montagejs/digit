module.exports = function(grunt) {
    var browsers = [{
        browserName: "firefox",
        version: "23",
        platform: "Windows 8"
    }, {
        browserName: "chrome",
        platform: "Windows 8"
    }, {
        browserName: "chrome",
        platform: "linux"
    }, {
        browserName: "internet explorer",
        platform: "WIN8",
        version: "10"
    }, {
        browserName: 'safari',
        platform: 'OS X 10.8',
        version: '6'
    }, {
        browserName: "iphone",
        platform: "OS X 10.8",
        version: '6'
    }, {
        browserName: "ipad",
        platform: "OS X 10.8",
        version: '6'
    }, {
        browserName: 'android',
        platform: 'Linux',
        version: '4.0',
    }, {
        browserName: 'android',
        platform: 'Linux',
        version: '4.0',
        "device-type": "tablet"
    }];

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        'saucelabs-jasmine': {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/run-tests.html"],
                    tunnelTimeout: 5,
                    concurrency: 3,
                    browsers: browsers,
                    testname: "Digit tests",
                    testReadyTimeout: 10000,
                    detailedError: true
                }
            }
        },
        watch: {}
    });

    // Loading dependencies
    for (var key in grunt.file.readJSON("package.json").devDependencies) {
        if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
    }

    grunt.registerTask("dev", ["connect", "watch"]);
    grunt.registerTask("test", ["connect", "saucelabs-jasmine"]);
};