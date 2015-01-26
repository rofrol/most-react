import { Stream } from 'most';
import MulticastSource from 'most/lib/source/MulticastSource';

import SubscriberSource from './subscriber-source';

let EventHandler = {

    create() {

        let source = new SubscriberSource();

        let eventStream = function (event) {

            source.pushStream(event);
        };

        Object.assign(eventStream, Stream.prototype);
        Stream.call(eventStream, new MulticastSource(source));

        return eventStream;
    }
};

export default EventHandler;
