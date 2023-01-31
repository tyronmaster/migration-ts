import { CallbackSource, CallbackNews, NewsApiInterface, Options, Callback } from '../../types/types';

class Loader {
    baseLink: string;
    options: Options;

    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    private defaultCallBack: Callback = () => {
        console.error('No callback for GET response');
    };

    public getResp({ endpoint, options = {} }: NewsApiInterface, callback: CallbackNews | CallbackSource): void {
        if (!callback) callback = this.defaultCallBack;
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    public makeUrl(options: Options, endpoint: string): string {
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key as keyof Options]}&`;
        });

        return url.slice(0, -1);
    }

    public load(
        method: string,
        endpoint: string,
        callback: CallbackNews | CallbackSource,
        options: Options = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
