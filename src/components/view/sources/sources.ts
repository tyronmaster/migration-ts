import { Source } from '../../../types/types';
import './sources.css';

class Sources {
    public draw(data: Array<Source>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: Source) => {
            const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            const sourceItemName: HTMLSpanElement = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
            sourceItemName.textContent = item.name;
            const sourceItem: HTMLDivElement = sourceClone.querySelector('.source__item') as HTMLDivElement;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources: HTMLDivElement = document.querySelector('.sources') as HTMLDivElement;
        sources.append(fragment);
    }
}

export default Sources;
