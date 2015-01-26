import Disposable from 'most/lib/disposable/Disposable';

import noop from './noop';
import pushStream from './push-stream';

class SubscriberSource {

    constructor (subscribe) {

        this._subscribe = subscribe;
        this.pushStream = noop;
    }

    run (sink, scheduler) {

        this.pushStream = pushStream.bind(null, sink);

        return new Disposable(noop);
    }
}

export default SubscriberSource;
