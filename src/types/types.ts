export interface Response {
    status: Status;
    code?: number;
    message?: string;
}

enum Status {
    ok = 'ok',
    error = 'error',
}

export interface NewsApiInterface {
    endpoint: string;
    options?: Options;
}
export interface Options {
    apiKey?: string;
    q?: string;
    searchIn?: searchTarget;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: Date;
    to?: Date;
    language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
    pageSize?: number;
    page?: number;
}

enum searchTarget {
    title,
    description,
    content,
}
export interface NewsResponse {
    status: Status;
    totalResults: number;
    articles?: Array<Article>;
}
export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface SourceResponse {
    status: Response;
    sources: Array<Source>;
}
export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type CallbackNews = (data: NewsResponse) => void;
export type CallbackSource = (data: SourceResponse) => void;
export type Callback = () => void;
