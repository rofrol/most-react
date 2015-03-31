import { Stream } from 'most';
import MulticastSource from 'most/lib/source/MulticastSource';

import SubscriberSource from './subscriber-source';

const EventHandler = {

    create() {

        const source = new SubscriberSource();

        const eventStream = function (event) {

            source.pushStream(event);
        };

        Object.keys(Stream.prototype)
            .map(key => eventStream[key] = Stream.prototype[key]);

        Stream.call(eventStream, new MulticastSource(source));

        return eventStream;
    }
};

export default EventHandler;
