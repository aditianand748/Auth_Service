const AppError = require('./error-handler');
const { StatusCodes } = require('http-status-code');

class ValidationError extends AppError {
    constructor(error) {
        let errorName = error.name;
        let explanation = [];
        //Object.keys(error.errors)
        error.errors.forEach((err) => {
            explanation.push(error.msg);

        });


        super(
            errorName,
            'not able to validate the data sent in the request',
            explanation,
            StatusCodes.BAD_REQUEST
        )
    }
}

module.exports = ValidationError;
