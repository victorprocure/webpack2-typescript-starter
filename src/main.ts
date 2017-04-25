import "../assets/styles/main.css";

export class Application {
    private displayText: string;

    constructor(displayText: string) {
        this.displayText = displayText;
    }

    display(element: HTMLElement) {
        const displayElement = document.createElement("div");
        displayElement.innerHTML = `<h1>${this.displayText}</h1>`;
        element.appendChild(displayElement);
    }
}

(function bootstrap(): void {
    const app: Application = new Application("Webpack2 + Typescript Working!");
    app.display(document.body);
}());