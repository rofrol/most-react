var test = require('tape'),
    Stream = require('most').Stream,
    EventHandler = require('../lib/event-handler');

var propsDiff = function (a, b) {

    return Object.keys(b)
        .filter(function (key) {

            a[key] !== b[key];
        }).length;
};

test('EventHandler', function (t) {

    t.plan(2);

    t.ok(!propsDiff(EventHandler.create(), Stream.prototype), 'it should create Most Stream');

    var value = {};
    var eventHandler = EventHandler.create();

    eventHandler
        .forEach(function (val) {

            t.equals(val, value, 'calling handler as a function should push data to the stream');
        });

    process.nextTick(function() {

        eventHandler(value);
    });
});
