class ErrorHandlers {
    static catchErrors(fn) {
        return function(req, res, next) {
            return fn(req, res, next).catch(next);
        };
    };

    //for handling 404
    static notFound(req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    };

    //for development errors
    static developmentErrors(err, req, res, next) {
        err.stack = err.stack || '';
        const errorDetails = {
            message: err.message,
            status: err.status,
            stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
        };
        res.status(err.status || 500);
        res.format({
            //based on the `Accept` http header
            'text/html': () => {
                res.render('error', errorDetails);
            }, //form submit, reload the page
            'application/json': () => res.json(errorDetails) //ajax call send json back
        });
    };

    //for production errors
    static productionErrors(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    };
}

export default ErrorHandlers;