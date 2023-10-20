import { levels, Level, levelSelectors } from '../components/script/levels';
import { Highlighter, EventManager } from '../components/script/highlighter';
import { Game } from '../components/script/game';

describe('Levels', () => {
    it('should have valid selectors', () => {
        Object.entries(levelSelectors).forEach(([title, selector]) => {
            const level = levels.find((l: Level) => l.title === title);
            expect(level).toBeDefined();
            expect(level?.selector).toEqual(selector);
        });
    });

    it('should have valid content', () => {
        levels.forEach((level: Level) => {
            expect(level.content).toBeDefined();
            expect(level.content.length).toBeGreaterThan(0);
        });
    });

    it('should have valid contentText', () => {
        levels.forEach((level: Level) => {
            expect(level.contentText).toBeDefined();
            expect(level.contentText.length).toBeGreaterThan(0);
        });
    });
    it('should have a valid description', () => {
        levels.forEach((level: Level) => {
            expect(level.description).toBeDefined();
            expect(level.description.length).toBeGreaterThan(0);
        });
    });
    it('should have a valid helpInfo', () => {
        levels.forEach((level: Level) => {
            expect(level.helpInfo).toBeDefined();
            expect(level.helpInfo.length).toBeGreaterThan(0);
        });
    });
    it('should have valid expectedElements', () => {
        levels.forEach((level: Level) => {
            if (level.expectedElements !== undefined) {
                expect(level.expectedElements).toBeGreaterThanOrEqual(0);
            }
        });
    });
    it('should have valid image sources', () => {
        levels.forEach((level: Level) => {
            const regex = /<img src="([^"]+)" alt="([^"]+)"\/>/g;
            const matches = level.content.matchAll(regex);
            for (const match of matches) {
                const src = match[1];
                const alt = match[2];
                expect(src).toBeDefined();
                expect(src.length).toBeGreaterThan(0);
                expect(alt).toBeDefined();
                expect(alt.length).toBeGreaterThan(0);
            }
        });
    });
    it('should have unique titles', () => {
        const titles = levels.map((level: Level) => level.title);
        const uniqueTitles = new Set(titles);
        expect(uniqueTitles.size).toEqual(titles.length);
    });
    it('should have valid data attributes for each element', () => {
        levels.forEach((level: Level) => {
            const regex = /<div class="element" data-code-line="(\d+)" data-tag="([^"]+)">/g;
            const matches = level.content.matchAll(regex);
            for (const match of matches) {
                const dataCodeLine = match[1];
                const dataTag = match[2];
                expect(dataCodeLine).toBeDefined();
                expect(dataCodeLine.length).toBeGreaterThan(0);
                expect(dataTag).toBeDefined();
                expect(dataTag.length).toBeGreaterThan(0);
            }
        });
    });
});

describe('Highlighter', () => {
    let elementsBox: HTMLDivElement;
    let tagElement: HTMLDivElement;
    let element1: HTMLDivElement;
    let element2: HTMLDivElement;
    let highlighter: Highlighter<HTMLElement>;

    beforeEach(() => {
        elementsBox = document.createElement('div');
        tagElement = document.createElement('div');
        document.body.appendChild(elementsBox);

        element1 = document.createElement('div');
        element1.setAttribute('data-code-line', '1');
        elementsBox.appendChild(element1);

        element2 = document.createElement('div');
        element2.setAttribute('data-code-line', '2');
        elementsBox.appendChild(element2);

        highlighter = new Highlighter(elementsBox, tagElement);
    });

    afterEach(() => {
        document.body.removeChild(elementsBox);
    });

    it('should create a Highlighter instance with provided elements box and tag element', () => {
        expect(highlighter).toBeInstanceOf(Highlighter);
        expect(highlighter['elementsBox']).toEqual(elementsBox);
        expect(highlighter['tagElement']).toEqual(tagElement);
    });

    it('should create a Highlighter instance with default elements box and tag element if not provided', () => {
        const defaultElementsBox = document.createElement('div');
        const defaultTagElement = document.createElement('div');
        const defaultHighlighter = new Highlighter(defaultElementsBox, defaultTagElement);
        expect(defaultHighlighter).toBeInstanceOf(Highlighter);
        expect(defaultHighlighter['elementsBox']).toBeInstanceOf(HTMLElement);
        expect(defaultHighlighter['tagElement']).toBeInstanceOf(HTMLElement);
    });

    describe('highlightElements', () => {
        it('should highlight elements with matching data-code-line attribute', () => {
            highlighter.highlightElements('1');
            expect(element1.classList.contains('highlight')).toBe(true);
            expect(element2.classList.contains('highlight')).toBe(false);
        });
    });

    describe('removeHighlights', () => {
        it('should remove highlights from elements', () => {
            element1.classList.add('highlight');
            element2.classList.add('highlight');
            highlighter.removeHighlights();
            expect(element1.classList.contains('highlight')).toBe(false);
            expect(element2.classList.contains('highlight')).toBe(false);
            expect(tagElement.style.display).toBe('none');
        });
    });
});

describe('EventManager', () => {
    let elementsBox: HTMLElement;
    let tagElement: HTMLElement;
    let codeLines: NodeListOf<Element>;

    beforeEach(() => {
        elementsBox = document.createElement('div');
        tagElement = document.createElement('div');
        codeLines = document.querySelectorAll('.box [data-code-line]');
        new EventManager(elementsBox, tagElement);
        document.body.appendChild(elementsBox);
    });

    afterEach(() => {
        document.body.removeChild(elementsBox);
    });

    describe('highlightEvents', () => {
        it('should highlight elements when mouseover event is triggered', () => {
            codeLines.forEach((codeLine) => {
                const event = new Event('mouseover');
                codeLine.dispatchEvent(event);
                expect(codeLine.classList.contains('highlight')).toBe(true);
            });
        });

        it('should remove highlights when mouseout event is triggered', () => {
            codeLines.forEach((codeLine) => {
                codeLine.classList.add('highlight');
                const event = new Event('mouseout');
                codeLine.dispatchEvent(event);
                expect(codeLine.classList.contains('highlight')).toBe(false);
            });
        });
    });
});
describe('Game', () => {
    let game: Game;
    const levels: Level[] = [
        {
            title: 'Level 1',
            description: 'Description 1',
            helpInfo: 'Help 1',
            selector: '.my-selector-1',
            content: '<div>Content 1</div>',
            contentText: 'contentText 1',
        },
        {
            title: 'Level 2',
            description: 'Description 2',
            helpInfo: 'Help 2',
            selector: '.my-selector-2',
            content: '<div>Content 2</div>',
            contentText: 'contentText 2',
        },
    ];

    beforeEach(() => {
        game = new Game(levels);
    });

    afterEach(() => {
        localStorage.clear();
    });
    test('displayLevel sets the correct level information', () => {
        game.levelTitle = document.createElement('h2');
        game.levelDescription = document.createElement('p');
        game.levelInfoHelp = document.createElement('p');
        game.elementsBox = document.createElement('div');
        game.displayLevel();

        expect(game.levelTitle?.textContent).toBe('Level 1');
        expect(game.levelDescription?.textContent).toBe('Description 1');
        expect(game.levelInfoHelp?.innerHTML).toBe('Help 1');
        expect(game.elementsBox?.innerHTML).toBe('<div>Content 1</div>');
    });
    test('selectLevel sets the current level and displays the selected level', () => {
        const levelListItem1 = document.createElement('div');
        const levelListItem2 = document.createElement('div');

        levelListItem1.setAttribute('data-level-index', '0');
        levelListItem2.setAttribute('data-level-index', '1');

        game.levelListItems = [] as unknown as HTMLCollectionOf<Element>;
        game.levelListItems[0] = levelListItem1;
        game.levelListItems[1] = levelListItem2;

        game.selectLevel(1);

        expect(levelListItem1.classList.contains('current')).toBe(false);
        expect(levelListItem2.classList.contains('current')).toBe(true);
    });
    test('checkAnswer shows correct result for a valid selector', () => {
        const selectorInput = document.createElement('input');
        const resultDiv = document.createElement('div');
        const elementsBox = document.createElement('div');
        game.levels[0].expectedElements = 1;
        game.selectorInput = selectorInput;
        game.resultDiv = resultDiv;
        game.elementsBox = elementsBox;
        selectorInput.value = '.my-selector-1';
        game.checkAnswer();
        expect(resultDiv.textContent).toBe('Try again.');
        expect(elementsBox.classList.contains('correct-animation')).toBeFalsy();
    });
    test('checkAnswer shows correct result for an invalid selector', () => {
        const selectorInput = document.createElement('input');
        const resultDiv = document.createElement('div');
        const elementsBox = document.createElement('div');
        game.levels[0].expectedElements = 1;
        game.selectorInput = selectorInput;
        game.resultDiv = resultDiv;
        game.elementsBox = elementsBox;
        selectorInput.value = '.invalid-selector';
        game.checkAnswer();
        expect(resultDiv.textContent).toBe('Try again.');
        expect(elementsBox.classList.contains('correct-animation')).toBeFalsy();
    });
    test('checkAnswer shows correct result for an empty selector', () => {
        const selectorInput = document.createElement('input');
        const resultDiv = document.createElement('div');
        const elementsBox = document.createElement('div');
        game.levels[0].expectedElements = 1;
        game.selectorInput = selectorInput;
        game.resultDiv = resultDiv;
        game.elementsBox = elementsBox;
        selectorInput.value = '';
        game.checkAnswer();
        expect(resultDiv.textContent).toBe('Try again.');
        expect(elementsBox.classList.contains('correct-animation')).toBeFalsy();
    });

    test('checkAllLevelsCompleted returns true when all levels are marked as completed', () => {
        const levelListItem1 = document.createElement('div');
        levelListItem1.classList.add('completed');
        const levelListItem2 = document.createElement('div');
        levelListItem2.classList.add('completed');
        game.levelListItems = [levelListItem1, levelListItem2] as unknown as HTMLCollectionOf<Element>;
        expect(game.checkAllLevelsCompleted()).toBe(true);
    });
    test('markLevelHelped adds the help class to the current level item and selects the current level', () => {
        document.body.innerHTML = `
          <div class="level-list-item" data-level-index="0"></div>
          <div class="level-list-item" data-level-index="1"></div>
        `;
        game.currentLevel = 0;
        game.markLevelHelped();
        const levelListItem1 = document.querySelector('.level-list-item[data-level-index="0"]');
        const levelListItem2 = document.querySelector('.level-list-item[data-level-index="1"]');
        expect(levelListItem1?.classList.contains('help')).toBe(true);
        expect(levelListItem2?.classList.contains('help')).toBe(false);
        expect(levelListItem1?.classList.contains('current')).toBe(true);
        expect(levelListItem2?.classList.contains('current')).toBe(false);
    });
});
