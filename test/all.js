console.log('montage-testing', 'Start');
module.exports = require("montage-testing").run(require, [
    "spec/big-list/big-list-spec",
    "spec/button/button-spec",
    "spec/checkbox/checkbox-spec",
    "spec/list/list-spec",
    "spec/number-field/number-field-spec",
    "spec/radio-button/radio-button-spec",
    "spec/select/select-spec",
    "spec/slider/slider-spec",
    "spec/text-field/text-field-spec",
    "spec/text-area/text-area-spec",
    "spec/toggle-switch/toggle-switch-spec"
]).then(function () {
    console.log('montage-testing', 'End');
}, function (err) {
    console.log('montage-testing', 'Fail', err, err.stack);
    throw err;
});