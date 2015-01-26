import most from 'most';

let ReactDOMMostify = {

    mostifyEventHandler (name) {

        let emitEvent, stream;

        emitEvent = () => undefined;
        this[name] = event => emitEvent(event);

        stream = most.create(add => emitEvent = add);
        stream.drain();

        return stream;
    }
};

export default ReactDOMMostify;
