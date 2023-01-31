import { NewsResponse, SourceResponse } from '../../types/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesContainer: HTMLDivElement = document.querySelector('.sources') as HTMLDivElement;
        sourcesContainer.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data: NewsResponse) => {
                this.view.drawNews(data);
            })
        );
        this.controller.getSources((data: SourceResponse) => {
            this.view.drawSources(data);
        });
    }
}

export default App;
