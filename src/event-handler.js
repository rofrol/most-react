import most from 'most';

let EventHandler = {

    create() {

        let emitEvent, stream;

        emitEvent = () => undefined;

        stream = most.create(add => emitEvent = add);
        stream.drain();

        return {

            handler: event => emitEvent(event),
            stream
        };
    }
};

export default EventHandler;
