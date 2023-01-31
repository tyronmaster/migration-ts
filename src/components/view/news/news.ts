import { Article } from '../../../types/types';
import './news.css';

class News {
    public draw(data: Array<Article>) {
        const news = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: Article, idx: number) => {
            const newsClone: HTMLTemplateElement = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) {
                const newsItem: HTMLDivElement = newsClone.querySelector('.news__item') as HTMLDivElement;
                newsItem.classList.add('alt');
            }

            const newsMetaPhoto: HTMLDivElement = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsMetaAuthor: HTMLLIElement = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
            newsMetaAuthor.textContent = item.author || item.source.name;

            const newsMetaDate: HTMLLIElement = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitle: HTMLHeadingElement = newsClone.querySelector(
                '.news__description-title'
            ) as HTMLHeadingElement;
            newsDescriptionTitle.textContent = item.title;

            const newsDescriptionSource: HTMLHeadingElement = newsClone.querySelector(
                '.news__description-source'
            ) as HTMLHeadingElement;
            newsDescriptionSource.textContent = item.source.name;

            const newsDescriptionContent: HTMLParagraphElement = newsClone.querySelector(
                '.news__description-content'
            ) as HTMLParagraphElement;
            newsDescriptionContent.textContent = item.description;

            const newsReadMore: HTMLLinkElement = newsClone.querySelector('.news__read-more a') as HTMLLinkElement;
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer: HTMLDivElement = document.querySelector('.news') as HTMLDivElement;
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
