const pushStream = (sink, event) => {

    let timestamp = Date.now;

    try {

        sink.event(timestamp, event);
    }
    catch (error) {

        sink.error(timestamp, error);
    }
};

export default pushStream;
