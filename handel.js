let NotEnoughCoffeeError = require('./error')

const HandleError = () => {
    try {
        throw new NotEnoughCoffeeError('');
    }
    catch (Err) {
        console.error('There Was An NotEnoughCoffeeError Error', Err);
    }
};

module.exports = HandleError;