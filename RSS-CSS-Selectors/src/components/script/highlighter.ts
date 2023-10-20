export type NullHTMLElement = HTMLElement | null;
import { TAG_HORIZONTAL_OFFSET, TAG_VERTICAL_OFFSET } from '../constants';

export class Highlighter<T extends HTMLElement> {
    private elementsBox: T;
    private tagElement: HTMLElement;

    constructor(elementsBox: T, tagElement: HTMLElement) {
        this.elementsBox = elementsBox;
        this.tagElement = tagElement;
    }

    public highlightElements(codeLine: string): void {
        const elements = document.querySelectorAll(`[data-code-line="${codeLine}"]`);

        elements.forEach((element) => {
            let parent = element.parentNode as NullHTMLElement;
            element.classList.add('highlight');

            while (parent) {
                if (parent === this.elementsBox) {
                    const rect: DOMRect = element.getBoundingClientRect();
                    const elementTop: number = rect.top + window.scrollY;
                    const elementLeft: number = rect.left + window.scrollX;

                    const tag: string | undefined = (element as HTMLElement).dataset.tag;

                    if (tag) {
                        this.tagElement.innerText = tag;
                    } else {
                        this.tagElement.innerText = '';
                    }
                    this.tagElement.style.display = 'block';
                    this.tagElement.style.top = `${elementTop + TAG_VERTICAL_OFFSET}px`;
                    this.tagElement.style.left = `${
                        elementLeft + (element as HTMLElement).offsetWidth + TAG_HORIZONTAL_OFFSET
                    }px`;
                    return true;
                }
                parent = parent.parentNode as NullHTMLElement;
            }
            return false;
        });
    }

    public removeHighlights(): void {
        const highlightedElements = document.querySelectorAll('[data-code-line].highlight');
        highlightedElements.forEach((element) => {
            element.classList.remove('highlight');
            this.tagElement.style.display = 'none';
        });
    }
}

export class EventManager {
    private highlighter: Highlighter<HTMLElement>;

    constructor(private elementsBox: NullHTMLElement, private tagElement: NullHTMLElement) {
        this.highlighter = new Highlighter<HTMLElement>(
            this.elementsBox ?? document.createElement('div'),
            this.tagElement ?? document.createElement('div')
        );
    }

    public highlightEvents(): void {
        const codeLines = document.querySelectorAll('.box [data-code-line]');

        codeLines.forEach((codeLine) => {
            codeLine.addEventListener('mouseover', (event) => {
                event.stopPropagation();
                const lineValue = codeLine.getAttribute('data-code-line');
                if (lineValue) {
                    this.highlighter.highlightElements(lineValue);
                }
            });

            codeLine.addEventListener('mouseout', () => this.highlighter.removeHighlights());
        });
    }
}
