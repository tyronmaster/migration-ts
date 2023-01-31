import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2b9a1ba472c2447899ce7dcac308d2c0', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
