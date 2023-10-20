import { Highlighter, EventManager } from './highlighter';
import { Level } from './levels';
export type NullHTMLElement = HTMLElement | null;
import {
    BASE_10,
    DEFAULT_LEVEL,
    ANIMATION_INTERVAL,
    CONGRATULATIONS_TEXT,
    TRY_AGAIN_TEXT,
    GREAT_TEXT,
    DEFAULT_EXPECTED_ELEMENTS,
    RESULT_CLEAR_INTERVAL,
    LEVEL_TRANSITION_INTERVAL,
} from '../constants';

export class Game {
    public levels: Level[];
    public currentLevel: number;
    public levelTitle: NullHTMLElement;
    public levelDescription: NullHTMLElement;
    public levelInfoHelp: NullHTMLElement;
    public elementsBox: NullHTMLElement;
    public selectorInput: HTMLInputElement | null;
    public submitButton: NullHTMLElement;
    public helpButton: NullHTMLElement;
    public resultDiv: NullHTMLElement;
    public levelListItems: HTMLCollectionOf<Element>;
    public resetButton: NullHTMLElement;
    public tagElement: NullHTMLElement;
    private highlighter: Highlighter<HTMLElement>;
    private eventManager: EventManager;

    constructor(levels: Level[]) {
        this.levels = levels;
        this.currentLevel = parseInt(localStorage.getItem('currentLevel') || DEFAULT_LEVEL.toString(), BASE_10);
        this.levelTitle = document.getElementById('level-title');
        this.levelDescription = document.getElementById('level-description');
        this.levelInfoHelp = document.getElementById('level-info-help');
        this.elementsBox = document.getElementById('elements-box') as HTMLElement;
        this.selectorInput = document.getElementById('selector-input') as HTMLInputElement;
        this.submitButton = document.getElementById('submit-button');
        this.helpButton = document.getElementById('help-button');
        this.resultDiv = document.getElementById('result');
        this.levelListItems = document.getElementsByClassName('level-list-item');
        this.resetButton = document.getElementById('reset-button');
        this.tagElement = document.getElementById('tag') as HTMLElement;
        this.highlighter = new Highlighter<HTMLElement>(this.elementsBox, this.tagElement);
        this.eventManager = new EventManager(this.elementsBox, this.tagElement);
    }

    start(): void {
        this.restoreSavedClasses();
        this.initializeInputListeners();
        this.attachEventListeners();
        const inputElement = document.getElementById('selector-input');
        inputElement?.addEventListener('input', () => this.checkInputContainers());
    }

    setup(): void {
        this.displayLevel();
        window.addEventListener('beforeunload', () => this.saveCurrentClasses());
    }

    private saveCurrentClasses(): void {
        const classes = Array.from(this.levelListItems).map((item) => item.classList.value);
        localStorage.setItem('levelListItemsClasses', JSON.stringify(classes));
    }

    private restoreSavedClasses(): void {
        const savedClasses = localStorage.getItem('levelListItemsClasses');
        if (savedClasses) {
            const classes = JSON.parse(savedClasses);
            Array.from(this.levelListItems).forEach((item, index) => {
                item.setAttribute('class', classes[index]);
            });
        }
    }

    public displayLevel(): void {
        const level = this.levels[this.currentLevel];
        this.updateLevelUI(level);
        this.updateExpectedElements(level);
        this.resetInputContainers();
        this.resetSelectorInput();
        this.clearOutputDiv();
        this.clearResultDivAfterInterval();
        this.updateCodeContainer(level);
        this.updateCurrentLevelHighlight();
        this.eventManager.highlightEvents();
        this.saveCurrentLevel();
    }

    private updateLevelUI({ title, description, helpInfo, content }: Level): void {
        this.updateLevelTitle(title);
        this.updateLevelDescription(description);
        this.updateLevelHelpInfo(helpInfo);
        this.updateElementsBox(content);
    }

    private updateLevelTitle(title: string): void {
        if (this.levelTitle) {
            this.levelTitle.textContent = title;
        }
    }

    private updateLevelDescription(description: string): void {
        if (this.levelDescription) {
            this.levelDescription.textContent = description;
        }
    }

    private updateLevelHelpInfo(helpInfo: string): void {
        if (this.levelInfoHelp) {
            this.levelInfoHelp.innerHTML = helpInfo;
        }
    }

    private updateElementsBox(content: string): void {
        if (this.elementsBox) {
            this.elementsBox.innerHTML = content;
        }
    }

    private updateExpectedElements(level: Level): void {
        const expectedElements = this.elementsBox?.querySelectorAll(level.selector).length || DEFAULT_EXPECTED_ELEMENTS;
        level.expectedElements = expectedElements;
    }

    private resetInputContainers(): void {
        const inputContainers = Array.from(document.getElementsByClassName('input-container')) as HTMLElement[];
        inputContainers.forEach((inputContainer) => {
            if (!inputContainer.classList.contains('input-empty')) {
                inputContainer.classList.add('input-empty');
            }
        });
    }

    private resetSelectorInput(): void {
        if (this.selectorInput) {
            this.selectorInput.value = '';
        }
    }

    private clearOutputDiv(): void {
        const outputDiv = document.getElementById('output') as HTMLInputElement;
        if (outputDiv) {
            outputDiv.innerHTML = '';
        }
    }

    private clearResultDivAfterInterval(): void {
        setTimeout(() => {
            if (this.resultDiv !== null) {
                this.resultDiv.textContent = '';
            }
        }, RESULT_CLEAR_INTERVAL);
    }

    private updateCodeContainer(level: Level): void {
        const codeContainer = document.getElementById('code');
        if (codeContainer) {
            const codeElement = codeContainer.querySelector('code');
            if (codeElement) {
                codeElement.innerHTML = level.contentText;
            }
        }
    }

    private updateCurrentLevelHighlight(): void {
        Array.from(this.levelListItems).forEach((item, index) => {
            if (index === this.currentLevel) {
                item.classList.add('current');
            } else {
                item.classList.remove('current');
            }
        });
    }

    private attachEventListeners(): void {
        Array.from(this.levelListItems).forEach((item) => {
            const levelIndex = item.getAttribute('data-level-index');
            if (levelIndex) {
                const selectedIndex = parseInt(levelIndex, BASE_10);
                item.addEventListener('click', () => this.selectLevel(selectedIndex));
            }
        });

        this.selectorInput?.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.checkAnswer();
            }
        });

        this.submitButton?.addEventListener('click', () => this.checkAnswer());

        this.helpButton?.addEventListener('click', () => {
            this.showHelp();
            const inputContainers = Array.from(document.getElementsByClassName('input-container')) as HTMLElement[];
            inputContainers.forEach((inputContainer) => {
                if (inputContainer.classList.contains('input-empty')) {
                    inputContainer.classList.remove('input-empty');
                }
            });
        });

        this.resetButton?.addEventListener('click', () => this.resetProgress());

        const inputElement = document.getElementById('selector-input');

        inputElement?.addEventListener('input', () => this.checkInputContainers());
    }

    public selectLevel(selectedIndex: number): void {
        this.currentLevel = selectedIndex;
        this.displayLevel();
        this.saveCurrentLevel();
    }

    private saveCurrentLevel(): void {
        localStorage.setItem('currentLevel', this.currentLevel.toString());
    }

    public checkAnswer(): void {
        const level = this.levels[this.currentLevel];
        const selector = this.selectorInput?.value.trim();
        const expectedSelector = level.selector.trim();

        if (!selector) {
            this.handleIncorrectResult();
            return;
        }

        const elements = Array.from(this.elementsBox?.querySelectorAll(selector) ?? []).filter(
            (element: Element) => (element as HTMLElement).tagName.toLowerCase() !== 'img'
        );
        const expectedElements = Array.from(this.elementsBox?.querySelectorAll(expectedSelector) ?? []).filter(
            (element: Element) => (element as HTMLElement).tagName.toLowerCase() !== 'img'
        );
        const outputDiv = document.getElementById('output') as HTMLInputElement;

        if (elements.length === 0) {
            this.handleIncorrectResult();
        } else if (elements.length === expectedElements.length) {
            this.handleCorrectResult(outputDiv);
        } else {
            this.handleIncorrectResult();
        }
    }

    private handleIncorrectResult(): void {
        this.showIncorrectResult();

        if (this.elementsBox) {
            this.elementsBox.classList.add('wrong-animation');
            this.elementsBox.addEventListener('animationend', () => {
                this.elementsBox?.classList.remove('wrong-animation');
            });
        }
        if (this.selectorInput) {
            this.selectorInput.focus();
        }
    }

    private handleCorrectResult(outputDiv: HTMLInputElement): void {
        this.saveCurrentLevel();
        this.showCorrectResult();

        if (this.elementsBox) {
            this.elementsBox.classList.add('correct-animation');
            this.elementsBox.addEventListener('animationend', () => {
                this.elementsBox?.classList.remove('correct-animation');
            });
        }

        if (this.selectorInput) {
            this.selectorInput.value = '';
        }

        if (outputDiv) {
            outputDiv.innerHTML = '';
        }

        if (this.currentLevel === this.levels.length - 1) {
            this.markLevelCompleted();
        } else {
            setTimeout(() => {
                this.currentLevel++;
                this.displayLevel();
            }, LEVEL_TRANSITION_INTERVAL);
        }
    }

    private showCorrectResult(): void {
        if (this.resultDiv) {
            this.resultDiv.classList.remove('wrong');
            this.resultDiv.classList.add('correct');
            this.resultDiv.textContent = GREAT_TEXT;
        }
    }

    private showIncorrectResult(): void {
        if (this.resultDiv) {
            this.resultDiv.textContent = TRY_AGAIN_TEXT;
            this.resultDiv.classList.remove('correct', 'wrong');
            this.resultDiv.classList.add('wrong');
        }
    }

    private showHelpInProgress = false;

    public showHelp(): void {
        if (this.showHelpInProgress) {
            return;
        }
        this.showHelpInProgress = true;
        const inputContainer = this.selectorInput?.parentNode as HTMLElement;
        if (inputContainer.classList.contains('input-empty')) {
            inputContainer.classList.remove('input-empty');
        }
        this.highlighter.removeHighlights();
        const level = this.levels[this.currentLevel];
        const helpText = level.selector;
        if (this.selectorInput) {
            this.selectorInput.value = '';
            this.animateText(helpText, this.selectorInput, () => {
                this.colorizeSelectors(this.selectorInput);
            });
        }
        const outputDiv = document.getElementById('output') as HTMLInputElement;
        if (outputDiv) {
            outputDiv.innerHTML = '';
            this.animateText(level.selector, outputDiv, () => {
                this.colorizeSelectors(outputDiv);
            });
        }

        this.markLevelHelped();
        if (this.selectorInput) {
            this.selectorInput.focus();
        }
        setTimeout(() => {
            this.showHelpInProgress = false;
        }, ANIMATION_INTERVAL * helpText.length);
    }

    public animateText(text: string, element: HTMLInputElement | HTMLDivElement, callback?: () => void): void {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                if (element instanceof HTMLInputElement) {
                    element.value += text.charAt(index);
                } else if (element instanceof HTMLDivElement) {
                    element.innerHTML += text.charAt(index);
                }
                index++;
            } else {
                clearInterval(interval);
                if (callback) {
                    callback();
                }
            }
        }, ANIMATION_INTERVAL);
    }

    public resetProgress(): void {
        this.currentLevel = 0;
        localStorage.removeItem('currentLevel');
        Array.from(this.levelListItems).forEach((item, index) => {
            if (index === 0) {
                item.classList.remove('help');
                item.classList.remove('completed');
            } else {
                item.classList.remove('completed');
                item.classList.remove('help');
            }
        });

        if (this.submitButton instanceof HTMLInputElement) {
            this.submitButton.disabled = false;
        }

        this.displayLevel();
    }

    public markLevelHelped(): void {
        const currentLevelItem = this.levelListItems[this.currentLevel] as HTMLElement;
        if (!currentLevelItem.classList.contains('help')) {
            currentLevelItem.classList.add('help');
            const levelIndex = currentLevelItem.dataset.levelIndex;
            if (levelIndex) {
                const selectedIndex = parseInt(levelIndex, BASE_10);
                if (selectedIndex === this.currentLevel) {
                    this.selectLevel(selectedIndex);
                }
            }
        }
    }

    private markLevelCompleted(): void {
        const currentLevelItem = this.levelListItems[this.currentLevel] as HTMLElement;
        if (!currentLevelItem.classList.contains('completed')) {
            currentLevelItem.classList.add('completed');
            const levelIndex = currentLevelItem.dataset.levelIndex;
            if (levelIndex) {
                const selectedIndex = parseInt(levelIndex, BASE_10);
                if (selectedIndex === this.currentLevel) {
                    this.selectLevel(selectedIndex);
                }
            }
        }
        if (this.checkAllLevelsCompleted()) {
            if (this.resultDiv) {
                this.resultDiv.textContent = CONGRATULATIONS_TEXT;
            }
        }
    }

    private checkInputContainers(): void {
        const inputContainers = Array.from(document.getElementsByClassName('input-container'));

        inputContainers.forEach((inputContainer) => {
            const inputElement = inputContainer.querySelector('input');
            if (inputElement && inputElement.value.trim() !== '') {
                inputContainer.classList.remove('input-empty');
            }
        });
    }

    public checkAllLevelsCompleted(): boolean {
        for (const levelItem of this.levelListItems) {
            if (!levelItem.classList.contains('completed')) {
                return false;
            }
        }
        return true;
    }

    private colorizeSelectors(element: HTMLInputElement | HTMLDivElement | null): void {
        const getValue = (el: HTMLInputElement | HTMLDivElement) => {
            return el instanceof HTMLInputElement ? el.value : el.innerText;
        };

        const getOutputElement = (el: HTMLInputElement | HTMLDivElement) => {
            return el instanceof HTMLInputElement
                ? (document.getElementById('output') as HTMLInputElement)
                : (document.getElementById('output') as HTMLDivElement);
        };

        if (element instanceof HTMLInputElement || element instanceof HTMLDivElement) {
            const value = getValue(element);
            const selectors = value.split(' ');

            const coloredSelectors = selectors.map((selector: string) => {
                const trimmedSelector = selector.trim();

                if (/^::\w+$/.test(trimmedSelector)) {
                    return `<span class="pseudo-class-selector">${trimmedSelector}</span>`;
                } else if (trimmedSelector.includes(':')) {
                    const parts = trimmedSelector.split(':');
                    const tag = parts[0];
                    const pseudoClass = parts.slice(1).join(':');
                    return `<span class="tag-selector">${tag}</span><span class="pseudo-class-selector">:${pseudoClass}</span>`;
                } else if (/^\.[\w-]+$/.test(trimmedSelector)) {
                    return `<span class="class-selector">${trimmedSelector}</span>`;
                } else if (/^#(?!-)[\w-]+$/.test(trimmedSelector)) {
                    return `<span class="id-selector">${trimmedSelector}</span>`;
                } else if (/^\[.+?\]$/.test(trimmedSelector)) {
                    return `<span class="attribute-selector">${trimmedSelector}</span>`;
                } else if (/^\w+$/.test(trimmedSelector)) {
                    return `<span class="tag-selector">${trimmedSelector}</span>`;
                } else {
                    return trimmedSelector;
                }
            });

            const coloredValue = coloredSelectors.join(' ');

            const outputElement = getOutputElement(element);
            if (outputElement) {
                outputElement.innerHTML = coloredValue;
            }
        }
    }

    private initializeInputListeners(): void {
        if (this.selectorInput) {
            this.selectorInput.addEventListener('input', () => {
                if (this.selectorInput) {
                    this.colorizeSelectors(this.selectorInput);
                }
            });
        }
    }
}
