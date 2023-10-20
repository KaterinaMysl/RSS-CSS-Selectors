import * as imgImports from './imgImport';

export interface Level {
    title: string;
    description: string;
    selector: string;
    content: string;
    contentText: string;
    helpInfo: string;
    expectedElements?: number;
}

export const levels: Level[] = [
    {
        title: 'Level 1 (Class Selector)',
        description: 'Choose all things. I need it today.',
        selector: '.element',
        content: `
        <div class="box lev1">
        <div id="elements-container">
            <div class="element" data-code-line="1" data-tag="&lt;div class=&quot;element&quot;&gt; Reflector &lt;/div&gt;">
            <img src="${imgImports.level1[0].src}" alt="${imgImports.level1[0].alt}">
            </div>
            <div class="element" data-code-line="2" data-tag="&lt;div class=&quot;element&quot;&gt; Battery &lt;/div&gt;">
            <img src="${imgImports.level1[1].src}" alt="${imgImports.level1[1].alt}">
            </div>
            <div class="element" data-code-line="3" data-tag="&lt;div class=&quot;element&quot;&gt; Camera &lt;/div&gt;">
            <img src="${imgImports.level1[2].src}" alt="${imgImports.level1[2].alt}">
            </div>
            <div class="element" data-code-line="4" data-tag="&lt;div class=&quot;element&quot;&gt; Computer &lt;/div&gt;">
            <img src="${imgImports.level1[3].src}" alt="${imgImports.level1[3].alt}">
            </div>
            <div class="element" data-code-line="5" data-tag="&lt;div class=&quot;element&quot;&gt; Lens &lt;/div&gt;">
            <img src="${imgImports.level1[4].src}" alt="${imgImports.level1[4].alt}">
            </div>
            <div class="element" data-code-line="6" data-tag="&lt;div class=&quot;element&quot;&gt; Memory card &lt;/div&gt;">
            <img src="${imgImports.level1[5].src}" alt="${imgImports.level1[5].alt}">
            </div>
            <div class="element" data-code-line="7" data-tag="&lt;div class=&quot;element&quot;&gt; Music &lt;/div&gt;">
            <img src="${imgImports.level1[6].src}" alt="${imgImports.level1[6].alt}">
            </div>
            <div class="element" data-code-line="8" data-tag="&lt;div class=&quot;element&quot;&gt; Printer &lt;/div&gt;">
            <img src="${imgImports.level1[7].src}" alt="${imgImports.level1[7].alt}">
            </div>
            <div class="element" data-code-line="9" data-tag="&lt;div class=&quot;element&quot;&gt; Tripod &lt;/div&gt;">
            <img src="${imgImports.level1[8].src}" alt="${imgImports.level1[8].alt}">
            </div>
            <div class="element" data-code-line="10" data-tag="&lt;div class=&quot;element&quot;&gt; Softbox &lt;/div&gt;">
            <img src="${imgImports.level1[9].src}" alt="${imgImports.level1[9].alt}">
            </div>
            </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div id="elements-container">' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="element" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Reflector ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="2">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Battery ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="3">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="4">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Computer ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="5">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Lens ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="6">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Memory card ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="7">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Music ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="8">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Printer ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="9">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Tripod ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="element" data-code-line="10">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Softbox ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Class Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select elements by their class' +
            '</div>' +
            '<div class="info-example">' +
            '.classname' +
            '</div>' +
            '<div class="info-description">' +
            'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/ru/docs/Web/CSS/Class_selectors">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 2 (ID Selector)',
        description: "We need to call model Emily, let's find her contacts.",
        selector: '#client',
        content: `
        <div class="box lev2">
            <div id="elements-container">
                <div class="name" data-code-line="1" data-tag="&lt;div class=&quot;name&quot;&gt; Olivia &lt;/div&gt;">
                  <div class="title-client">Olivia-weddings</div>
                  <div class="data-client">05.07.23</div>
                  <div class="number-client">+375 33 5679710</div>                  
                </div>
                <div class="name" data-code-line="2" data-tag="&lt;div class=&quot;name&quot;&gt; James &lt;/div&gt;">
                <div class="title-client">James-family</div>
                <div class="data-client">13.07.23</div>
                <div class="number-client">+375 33 0985638</div>
                </div>
                <div class="name" id="client" data-code-line="3" data-tag="&lt;div class=&quot;name&quot; id=&quot;client&quot;&gt; Emily &lt;/div&gt;">
                <div class="title-client">Emily-portrait</div>
                <div class="data-client">17.08.23</div>
                <div class="number-client">+375 33 0930638</div>
                </div>
                <div class="name" data-code-line="4" data-tag="&lt;div class=&quot;name&quot;&gt; Jacob &lt;/div&gt;">
                <div class="title-client">Jacob-content</div>
                <div class="data-client">20.09.23</div>
                <div class="number-client">+375 33 6674323</div>
                </div>
                <div class="name" data-code-line="5" data-tag="&lt;div class=&quot;name&quot;&gt; Harry &lt;/div&gt;">
                <div class="title-client">Harry-love story</div>
                <div class="data-client">25.07.23</div>
                <div class="number-client">+375 33 0988822</div>
                </div>
                <div class="name" data-code-line="6" data-tag="&lt;div class=&quot;name&quot;&gt; Sophie &lt;/div&gt;">
                <div class="title-client">Sophie-fashion</div>
                <div class="data-client">08.11.23</div>
                <div class="number-client">+375 33 0006766</div>
                </div>
            </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"name"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Olivia ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="2">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"name"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'James ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"name"' +
            '</span>' +
            ' id=' +
            '<span class="name-info" >' +
            '"client"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Emily ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"name"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Jacob ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"name"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Harry ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"name"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Sophie ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'ID Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select elements with an ID' +
            '</div>' +
            '<div class="info-example">' +
            '#id' +
            '</div>' +
            '<div class="info-description">' +
            'Selects the element with a specific id. You can also combine the ID selector with the type selector.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/ru/docs/Web/CSS/ID_selectors">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 3 (Descendant Selector)',
        description:
            "Let's find clothes to shoot. We will offer model the variant with a blue skirt. It is attached on yellow paper.",
        selector: '#list .element',
        content: `
        <div class="box lev3">
        <div id="elements-container">
            <div class="element" data-code-line="1" data-tag="&lt;div class=&quot;element&quot;&gt; Variant 1 &lt;/div&gt;">
            <img src="${imgImports.level3[0].src}" alt="${imgImports.level3[0].alt}">
            </div>
            <div class="element" data-code-line="2" data-tag="&lt;div class=&quot;element&quot;&gt; Variant 2 &lt;/div&gt;">
            <img src="${imgImports.level3[1].src}" alt="${imgImports.level3[1].alt}">
            </div>
            <div id="list" data-code-line="3" data-tag="&lt;div id=&quot;list&quot;&gt;&lt;/div&gt;">
            <div class="element" data-code-line="4" data-tag="&lt;div class=&quot;element&quot;&gt; Variant 3 &lt;/div&gt;">
            <img src="${imgImports.level3[2].src}" alt="${imgImports.level3[2].alt}">
            </div>
            </div>
            <div class="element" data-code-line="5" data-tag="&lt;div class=&quot;element&quot;&gt; Variant 4 &lt;/div&gt;">
            <img src="${imgImports.level3[3].src}" alt="${imgImports.level3[3].alt}">
            </div>

            <div class="element" data-code-line="6" data-tag="&lt;div class=&quot;element&quot;&gt; Variant 5 &lt;/div&gt;">
            <img src="${imgImports.level3[4].src}" alt="${imgImports.level3[4].alt}">
            </div>
            </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Variant 1 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="2">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Variant 2 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div id="list" class="" data-code-line="3">' +
            '  &lt;div id=' +
            '<span class="name-info" >' +
            '"list"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="4">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Variant 3 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Variant 4 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"element"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Variant 5 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Descendant Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select an element inside another element' +
            '</div>' +
            '<div class="info-example">' +
            'A  B' +
            '</div>' +
            '<div class="info-description">' +
            'Selects all B inside of A. B is called a descendant because it is inside of another element.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 4 (The Descendant & ID Selectors)',
        description: "Let's choose a black background for shooting.",
        selector: '#basic .black',
        content: `
        <div class="box lev4">
        <div id="elements-container">
        <div id="basic" data-code-line="1" data-tag="&lt;div id=&quot;basic&quot;&gt;&lt;/div&gt;">
            <div class="white " data-code-line="2" data-tag="&lt;div class=&quot;white&quot;&gt; White &lt;/div&gt;">
            <img src="${imgImports.level4[0].src}" alt="${imgImports.level4[0].alt}">
            </div>
            <div class="grey " data-code-line="3" data-tag="&lt;div class=&quot;grey&quot;&gt; Grey &lt;/div&gt;">
            <img src="${imgImports.level4[1].src}" alt="${imgImports.level4[1].alt}">
            </div>
            <div class="black " data-code-line="4" data-tag="&lt;div class=&quot;black&quot;&gt; Black &lt;/div&gt;">
            <img src="${imgImports.level4[2].src}" alt="${imgImports.level4[2].alt}">
            </div>
            </div>
            <div class="green " data-code-line="5" data-tag="&lt;div class=&quot;green&quot;&gt; Green &lt;/div&gt;">
            <img src="${imgImports.level4[3].src}" alt="${imgImports.level4[3].alt}">
            </div>
            <div class="orange " data-code-line="6" data-tag="&lt;div class=&quot;orange&quot;&gt; Orange &lt;/div&gt;">
            <img src="${imgImports.level4[4].src}" alt="${imgImports.level4[4].alt}">
            </div>
            <div class="red " data-code-line="7" data-tag="&lt;div class=&quot;red&quot;&gt; Red &lt;/div&gt;">
            <img src="${imgImports.level4[5].src}" alt="${imgImports.level4[5].alt}">
            </div>
            <div class="pink " data-code-line="8" data-tag="&lt;div class=&quot;pink&quot;&gt; Pink &lt;/div&gt;">
            <img src="${imgImports.level4[6].src}" alt="${imgImports.level4[6].alt}">
            </div>
            <div class="beige " data-code-line="9" data-tag="&lt;div class=&quot;beige&quot;&gt; Beige &lt;/div&gt;">
            <img src="${imgImports.level4[7].src}" alt="${imgImports.level4[7].alt}">
            </div>
            <div class="blue " data-code-line="10" data-tag="&lt;div class=&quot;blue&quot;&gt; Blue &lt;/div&gt;">
            <img src="${imgImports.level4[8].src}" alt="${imgImports.level4[8].alt}">
            </div>
            </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div >' +
            '<div id="basic" class="" data-code-line="1">' +
            '  &lt;div id=' +
            '<span class="name-info" >' +
            '"basic"' +
            '</span>' +
            '&gt;' +
            '<div class="" data-code-line="2">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"white"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'White ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"grey"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Grey ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"black"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Black ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"green"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Green ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"orange"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Orange ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"red"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Red ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="8">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"pink"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pink ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="9">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"beige"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Beige ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="10">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"blue"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Blue ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'The Descendant & ID Selectors' +
            '</div>' +
            '<div class="info-name-more">' +
            'Combine the Descendant & ID Selectors' +
            '</div>' +
            '<div class="info-example">' +
            '#id  A' +
            '</div>' +
            '<div class="info-description">' +
            'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 5 (Descendant Selector tags)',
        description: "I need to get ready to shoot. Let's select all found references.",
        selector: 'ul li',
        content: `
        <div class="box lev5">
        <div id="elements-container">
        <ul id="poses" data-code-line="1" data-tag="&lt;ul id=&quot;poses&quot;&gt;&lt;/ul&gt;">
            <li class="pose" data-code-line="2" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 1 &lt;/li&gt;">
            <img src="${imgImports.level5[0].src}" alt="${imgImports.level5[0].alt}">
            </li>
            <li class="pose" data-code-line="3" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 2 &lt;/li&gt;">
            <img src="${imgImports.level5[1].src}" alt="${imgImports.level5[1].alt}">
            </li>
            <li class="pose" data-code-line="4" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 3 &lt;/li&gt;">
            <img src="${imgImports.level5[2].src}" alt="${imgImports.level5[2].alt}">
            </li>
            <li class="pose" data-code-line="5" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 4 &lt;/li&gt;">
            <img src="${imgImports.level5[3].src}" alt="${imgImports.level5[3].alt}">
            </li>
            <li class="pose" data-code-line="6" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 5 &lt;/li&gt;">
            <img src="${imgImports.level5[4].src}" alt="${imgImports.level5[4].alt}">
            </li>
            <li class="pose" data-code-line="7" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 6 &lt;/li&gt;">
            <img src="${imgImports.level5[5].src}" alt="${imgImports.level5[5].alt}">
            </li>
            <li class="pose" data-code-line="8" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 7 &lt;/li&gt;">
            <img src="${imgImports.level5[6].src}" alt="${imgImports.level5[6].alt}">
            </li>
            <li class="pose" data-code-line="9" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 8 &lt;/li&gt;">
            <img src="${imgImports.level5[7].src}" alt="${imgImports.level5[7].alt}">
            </li>
            <li class="pose" data-code-line="10" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 9 &lt;/li&gt;">
            <img src="${imgImports.level5[8].src}" alt="${imgImports.level5[8].alt}">
            </li>
            <li class="pose" data-code-line="11" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 10 &lt;/li&gt;">
            <img src="${imgImports.level5[9].src}" alt="${imgImports.level5[9].alt}">
            </li>
            <li class="pose" data-code-line="12" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 11 &lt;/li&gt;">
            <img src="${imgImports.level5[10].src}" alt="${imgImports.level5[10].alt}">
            </li>
            <li class="pose" data-code-line="13" data-tag="&lt;li class=&quot;pose&quot;&gt; Pose 12 &lt;/li&gt;">
            <img src="${imgImports.level5[11].src}" alt="${imgImports.level5[11].alt}">
            </li>
        </ul>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div >' +
            '<ul id="poses" class="" data-code-line="1">' +
            '  &lt;ul id=' +
            '<span class="name-info" >' +
            '"poses"' +
            '</span>' +
            '&gt;' +
            '<li class="" data-code-line="2">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 1 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="3">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 2 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="4">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 3 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="5">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 4 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="6">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 5 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="7">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 6 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="8">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 7 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="9">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 8 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="10">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 9 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="11">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 10 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="12">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 11 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="13">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"pose"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pose 12 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '  &lt;/ul&gt;' +
            '</ul>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Descendant Selector tags' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select an element inside another element' +
            '</div>' +
            '<div class="info-example">' +
            'A B' +
            '</div>' +
            '<div class="info-description">' +
            'Selects all B inside of A. B is called a descendant because it is inside of another element. Use tags.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 6 (Class Selectors)',
        description: "Let's take with us only the necessary things for today.",
        selector: 'ul .need',
        content: `
        <div class="box lev6">
        <div id="elements-container">
        <ul id="accessories" data-code-line="1" data-tag="&lt;ul id=&quot;accessories&quot;&gt;&lt;/ul&gt;">
            <li class="accessory" data-code-line="2" data-tag="&lt;li class=&quot;charger&quot;&gt; charger &lt;/li&gt;">
            <img src="${imgImports.level6[0].src}" alt="${imgImports.level6[0].alt}">
            </li>
            <li class="accessory need" data-code-line="3" data-tag="&lt;li class=&quot;disk need&quot;&gt; disk &lt;/li&gt;">
            <img src="${imgImports.level6[1].src}" alt="${imgImports.level6[1].alt}">
            </li>
            <li class="accessory" data-code-line="4" data-tag="&lt;li class=&quot;diskette&quot;&gt; diskette &lt;/li&gt;">
            <img src="${imgImports.level6[2].src}" alt="${imgImports.level6[2].alt}">
            </li>
            <li class="accessory" data-code-line="5" data-tag="&lt;li class=&quot;drive&quot;&gt; drive &lt;/li&gt;">
            <img src="${imgImports.level6[3].src}" alt="${imgImports.level6[3].alt}">
            </li>
            <li class="accessory" data-code-line="6" data-tag="&lt;li class=&quot;film&quot;&gt; film &lt;/li&gt;">
            <img src="${imgImports.level6[4].src}" alt="${imgImports.level6[4].alt}">
            </li>
            <li class="accessory need" data-code-line="7" data-tag="&lt;li class=&quot;flash need&quot;&gt; flash &lt;/li&gt;">
            <img src="${imgImports.level6[5].src}" alt="${imgImports.level6[5].alt}">
            </li>
            <li class="accessory" data-code-line="8" data-tag="&lt;li class=&quot;headphones&quot;&gt; headphones &lt;/li&gt;">
            <img src="${imgImports.level6[6].src}" alt="${imgImports.level6[6].alt}">
            </li>
            <li class="accessory" data-code-line="9" data-tag="&lt;li class=&quot;mouse&quot;&gt; mouse &lt;/li&gt;">
            <img src="${imgImports.level6[7].src}" alt="${imgImports.level6[7].alt}">
            </li>
            <li class="accessory" data-code-line="10" data-tag="&lt;li class=&quot;notepad&quot;&gt; notepad &lt;/li&gt;">
            <img src="${imgImports.level6[8].src}" alt="${imgImports.level6[8].alt}">
            </li>
            <li class="accessory" data-code-line="11" data-tag="&lt;li class=&quot;player&quot;&gt; player &lt;/li&gt;">
            <img src="${imgImports.level6[9].src}" alt="${imgImports.level6[9].alt}">
            </li>
            <li class="accessory need" data-code-line="12" data-tag="&lt;li class=&quot;strap need&quot;&gt; strap &lt;/li&gt;">
            <img src="${imgImports.level6[10].src}" alt="${imgImports.level6[10].alt}">
            </li>
            <li class="accessory need" data-code-line="13" data-tag="&lt;li class=&quot;card need&quot;&gt; card &lt;/li&gt;">
            <img src="${imgImports.level6[11].src}" alt="${imgImports.level6[11].alt}">
            </li>
        </ul>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div >' +
            '<ul id="accessories" class="" data-code-line="1">' +
            '  &lt;ul id=' +
            '<span class="name-info" >' +
            '"accessories"' +
            '</span>' +
            '&gt;' +
            '<li class="" data-code-line="2">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"charger"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'charger ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="need" data-code-line="3">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"disk need"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'disk ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="4">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"diskette"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'diskette ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="5">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"drive"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'drive ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="6">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"film"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'film ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="need" data-code-line="7">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"flash need"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="8">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"headphones"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'headphones ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="9">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"mouse"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'mouse ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="10">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"notepad"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'notepad ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="11">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"player"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'player ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="need" data-code-line="12">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"strap need"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'strap ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="need" data-code-line="13">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"card need"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'card ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '  &lt;/ul&gt;' +
            '</ul>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Class Selectors' +
            '</div>' +
            '<div class="info-name-more">' +
            'Combine the Class Selector' +
            '</div>' +
            '<div class="info-example">' +
            'A .className' +
            '</div>' +
            '<div class="info-description">' +
            'You can combine the class selector with other selectors, like the type selector.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 7 (Empty Selector)',
        description: "Let's find out if there are empty boxes. I glue notes on boxes of thing.",
        selector: '.box:empty',
        content: `
        <div class="box lev7">
            <div id="elements-container">

                <div class='row'>
                    <div id="shelf-one">
                        <div class="camera" data-code-line="1" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
                            <img src="${imgImports.level7[4].src}" alt="${imgImports.level7[4].alt}">
                        </div>
                        <div class="camera" data-code-line="2" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
                            <img src="${imgImports.level7[5].src}" alt="${imgImports.level7[5].alt}">
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div id="shelf-two">
                            <div class="music" data-code-line="3" data-tag="&lt;div class=&quot;music&quot;&gt; music &lt;/div&gt;">
                                    <img src="${imgImports.level7[6].src}" alt="${imgImports.level7[6].alt}">
                            </div>
                            <div class="box" data-code-line="4" data-tag="&lt;div class=&quot;box&quot;&gt; box &lt;/div&gt;"></div>
                    </div>
                    <div id="shelf-three">
                        <div class="bag" data-code-line="5" data-tag="&lt;div class=&quot;bag&quot;&gt; bag &lt;/div&gt;">
                            <img src="${imgImports.level7[0].src}" alt="${imgImports.level7[0].alt}">
                        </div>
                        <div class="package" data-code-line="6" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;">
                            <img src="${imgImports.level7[10].src}" alt="${imgImports.level7[10].alt}">
                        </div>
                         <div class="package" data-code-line="7" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;">
                            <img src="${imgImports.level7[11].src}" alt="${imgImports.level7[11].alt}">
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div id="shelf-four">
                        <div class="box" data-code-line="8" data-tag="&lt;div class=&quot;box&quot;&gt; box &lt;/div&gt;">
                            <img src="${imgImports.level7[3].src}" alt="${imgImports.level7[3].alt}">
                            <div class="thing" data-code-line="9" data-tag="&lt;div class=&quot;box&quot;&gt; decors &lt;/div&gt;">
                                <img src="${imgImports.level7[17].src}" alt="${imgImports.level7[17].alt}">
                            </div>
                        </div>
                        <div class="box" data-code-line="10" data-tag="&lt;div class=&quot;box&quot;&gt; box &lt;/div&gt;"></div>
                    </div>
                    <div id="shelf-five">
                        <div class="package" data-code-line="11" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;">
                            <img src="${imgImports.level7[7].src}" alt="${imgImports.level7[7].alt}">
                            <div class="thing" data-code-line="12" data-tag="&lt;div class=&quot;box&quot;&gt; accessories &lt;/div&gt;">
                            <img src="${imgImports.level7[18].src}" alt="${imgImports.level7[18].alt}">
                        </div>
                        </div>
                        <div class="package" data-code-line="13" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;">
                            <img src="${imgImports.level7[8].src}" alt="${imgImports.level7[8].alt}">
                        </div>
                        <div class="package" data-code-line="14" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;">
                            <img src="${imgImports.level7[9].src}" alt="${imgImports.level7[9].alt}">
                        </div>
                        <div class="package" data-code-line="15" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;">
                            <img src="${imgImports.level7[12].src}" alt="${imgImports.level7[12].alt}">
                        </div>
                        <div class="package" data-code-line="16" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;"></div>
                    </div>
                </div>
                <div class='row'>
                    <div id="shelf-six">
                        <div class="package" data-code-line="17" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;">
                            <img src="${imgImports.level7[14].src}" alt="${imgImports.level7[14].alt}">
                        </div>
                        <div class="package" data-code-line="18" data-tag="&lt;div class=&quot;package&quot;&gt; package &lt;/div&gt;">
                            <img src="${imgImports.level7[15].src}" alt="${imgImports.level7[15].alt}">
                        </div>
                    </div>
                    <div id="shelf-seven">
                        <div class="shoes" data-code-line="19" data-tag="&lt;div class=&quot;shoes&quot;&gt; shoes &lt;/div&gt;">
                            <img src="${imgImports.level7[16].src}" alt="${imgImports.level7[16].alt}">
                        </div>
                    </div>
                </div>
      
            </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div >' +
            '<div class="" data-code-line="1">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="2">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"music"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'music ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"box"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'box ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"bag"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'bag ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="8">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"box"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'box ' +
            '</span>' +
            '<div class="" data-code-line="9">' +
            '      &lt;div class=' +
            '<span class="name-info" >' +
            '"thing"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'decors ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '    &lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="10">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"box"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'box ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="11">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '<div class="" data-code-line="12">' +
            '      &lt;div class=' +
            '<span class="name-info" >' +
            '"thing"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'accessories ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '    &lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="13">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="14">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="15">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="16">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="17">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="18">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"package"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'package ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="19">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"shoes"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'shoes ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Empty Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            "Select elements that don't have children" +
            '</div>' +
            '<div class="info-example">' +
            ':empty' +
            '</div>' +
            '<div class="info-description">' +
            "Selects elements that don't have any other elements inside of them." +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:empty">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 8 (Comma Combinator)',
        description: 'We need 1, 4, 5 softboxes.',
        selector: '.pi-3, .hi-8, .kp-4',
        content: `
        <div class="box lev8">
        <div id="elements-container">
        <ul id="basic" data-code-line="1" data-tag="&lt;ul id=&quot;basic&quot;&gt;&lt;/ul&gt;">
            <li class="softbox ul-4" data-code-line="2" data-tag="&lt;li class=&quot;softbox ul-4&quot;&gt; ul-4 &lt;/li&gt;">
            <img src="${imgImports.level8[0].src}" alt="${imgImports.level8[0].alt}">
            </li>
            <li class="softbox pi-3" data-code-line="3" data-tag="&lt;li class=&quot;softbox pi-3&quot;&gt; pi-3 &lt;/li&gt;">
            <img src="${imgImports.level8[1].src}" alt="${imgImports.level8[1].alt}">
            </li>
        </ul>
        <div class="softbox f-1" data-code-line="4" data-tag="&lt;li class=&quot;softbox f-1&quot;&gt; f-1 &lt;/li&gt;">
        <img src="${imgImports.level8[2].src}" alt="${imgImports.level8[2].alt}">
        </div>
        <div class="softbox hi-8" data-code-line="5" data-tag="&lt;li class=&quot;softbox hi-8&quot;&gt; hi-8 &lt;/li&gt;">
        <img src="${imgImports.level8[3].src}" alt="${imgImports.level8[3].alt}">
        </div>
        <div class="softbox kp-4" data-code-line="6" data-tag="&lt;li class=&quot;softbox kp-4&quot;&gt; kp-4 &lt;/li&gt;">
        <img src="${imgImports.level8[4].src}" alt="${imgImports.level8[4].alt}">
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div >' +
            '<ul id="basic" class="" data-code-line="1">' +
            '  &lt;ul id=' +
            '<span class="name-info" >' +
            '"basic"' +
            '</span>' +
            '&gt;' +
            '<li class="" data-code-line="2">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"softbox ul-4"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'ul-4 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="need" data-code-line="3">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"softbox pi-3"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'pi-3 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '  &lt;/ul&gt;' +
            '</ul>' +
            '<div class="need" data-code-line="4">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"softbox f-1"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'f-1 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="need" data-code-line="5">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"softbox hi-8"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'hi-8 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="need" data-code-line="6">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"softbox kp-4"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'kp-4 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Comma Combinator' +
            '</div>' +
            '<div class="info-name-more">' +
            'Combine, selectors, with commas!' +
            '</div>' +
            '<div class="info-example">' +
            'A, B' +
            '</div>' +
            '<div class="info-description">' +
            'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 9 (The Universal Selector)',
        description: 'Help me find the sd.',
        selector: '*',
        content: `
        <div class="box lev9">
        <div id="elements-container">
        <ul id="basic" data-code-line="1" data-tag="&lt;ul id=&quot;basic&quot;&gt;&lt;/ul&gt;">
            <li class="sd sd1" data-code-line="2" data-tag="&lt;li class=&quot;sd&quot;&gt; sd 1 &lt;/li&gt;">
            <img src="${imgImports.level9[0].src}" alt="${imgImports.level9[0].alt}">
            </li>
            <li class="sd sd2" data-code-line="3" data-tag="&lt;li class=&quot;sd&quot;&gt; sd 2 &lt;/li&gt;">
            <img src="${imgImports.level9[1].src}" alt="${imgImports.level9[1].alt}">
            </li>
        </ul>
        <div class="sd sd3" data-code-line="4" data-tag="&lt;li class=&quot;sd&quot;&gt; sd 3 &lt;/li&gt;">
        <img src="${imgImports.level9[2].src}" alt="${imgImports.level9[2].alt}">
        </div>
        <div class="sd sd4" data-code-line="5" data-tag="&lt;li class=&quot;sd&quot;&gt; sd 4 &lt;/li&gt;">
        <img src="${imgImports.level9[3].src}" alt="${imgImports.level9[3].alt}">
        </div>
        <div class="sd sd5" data-code-line="6" data-tag="&lt;li class=&quot;sd&quot;&gt; sd 5 &lt;/li&gt;">
        <img src="${imgImports.level9[4].src}" alt="${imgImports.level9[4].alt}">
        </div>
        <div class="sd sd6" data-code-line="7" data-tag="&lt;li class=&quot;sd&quot;&gt; sd 6 &lt;/li&gt;">
        <img src="${imgImports.level9[5].src}" alt="${imgImports.level9[5].alt}">
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div >' +
            '<ul id="basic" class="" data-code-line="1">' +
            '  &lt;ul id=' +
            '<span class="name-info" >' +
            '"basic"' +
            '</span>' +
            '&gt;' +
            '<li class="" data-code-line="2">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"sd sd1"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'sd 1 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="need" data-code-line="3">' +
            '    &lt;li class=' +
            '<span class="name-info" >' +
            '"sd sd2"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'sd 2 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '  &lt;/ul&gt;' +
            '</ul>' +
            '<div class="need" data-code-line="4">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"sd sd3"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'sd 3 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="need" data-code-line="5">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"sd sd4"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'sd 4 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="need" data-code-line="6">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"sd sd5"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'sd 5 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="need" data-code-line="7">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"sd sd6"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'sd 6 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'The Universal Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'You can select everything!' +
            '</div>' +
            '<div class="info-example">' +
            '*' +
            '</div>' +
            '<div class="info-description">' +
            'You can select all elements with the universal selector!' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 10 (The Universal Selector and else)',
        description:
            "You need to choose studios. Let's offer the models all the halls offered by the studio Photostudio-Milu and Photostudio-Pupo.",
        selector: 'ul *',
        content: `
        <div class="box lev10">
        <div id="elements-container">
        <ul id="photostudioMilu" data-code-line="1" data-tag="&lt;ul id=&quot;photostudioMilu&quot;&gt;&lt;/ul&gt;">
            <li class="" data-code-line="2" data-tag="&lt;li&gt; studio 1 &lt;/li&gt;">
            <img src="${imgImports.level10[0].src}" alt="${imgImports.level10[0].alt}">
            </li>
            <li class="" data-code-line="3" data-tag="&lt;li&gt; studio 2 &lt;/li&gt;">
            <img src="${imgImports.level10[1].src}" alt="${imgImports.level10[1].alt}">
            </li>
        </ul>
        <div class="" data-code-line="4" data-tag="&lt;div&gt; studio 3 &lt;/div&gt;">
            <img src="${imgImports.level10[2].src}" alt="${imgImports.level10[2].alt}">
        </div>
        <div class="" data-code-line="5" data-tag="&lt;div&gt; studio 4 &lt;/div&gt;">
            <img src="${imgImports.level10[3].src}" alt="${imgImports.level10[3].alt}">
        </div>
        <ul id="photostudioPupo" data-code-line="6" data-tag="&lt;ul id=&quot;photostudioPupo&quot;&gt;&lt;/ul&gt;">
            <li class="" data-code-line="7" data-tag="&lt;li&gt; studio 5 &lt;/li&gt;">
                <img src="${imgImports.level10[4].src}" alt="${imgImports.level10[4].alt}">
            </li>
            <li class="" data-code-line="8" data-tag="&lt;li&gt; studio 6 &lt;/li&gt;">
                <img src="${imgImports.level10[5].src}" alt="${imgImports.level10[5].alt}">
            </li>
            <li class="" data-code-line="9" data-tag="&lt;li;&gt; studio 7 &lt;/li&gt;">
                <img src="${imgImports.level10[6].src}" alt="${imgImports.level10[6].alt}">
            </li>
        </ul>
        <div class="" data-code-line="10" data-tag="&lt;div&gt; studio 8 &lt;/div&gt;">
            <img src="${imgImports.level10[7].src}" alt="${imgImports.level10[7].alt}">
        </div>
        <div class="" data-code-line="11" data-tag="&lt;div&gt; studio 9 &lt;/div&gt;">
            <img src="${imgImports.level10[8].src}" alt="${imgImports.level10[8].alt}">
        </div>
        <div class="" data-code-line="12" data-tag="&lt;div&gt; studio 10 &lt;/div&gt;">
            <img src="${imgImports.level10[9].src}" alt="${imgImports.level10[9].alt}">
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div >' +
            '<ul id="photostudioMilu" class="" data-code-line="1">' +
            '  &lt;ul id=' +
            '<span class="name-info" >' +
            '"photostudioMilu"' +
            '</span>' +
            '&gt;' +
            '<li class="" data-code-line="2">' +
            '    &lt;li' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 1 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="need" data-code-line="3">' +
            '    &lt;li' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 2 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '  &lt;/ul&gt;' +
            '</ul>' +
            '<div class="need" data-code-line="4">' +
            '  &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 3 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '  &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 4 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<ul id="photostudioPupo" class="" data-code-line="6">' +
            '  &lt;ul id=' +
            '<span class="name-info" >' +
            '"photostudioPupo"' +
            '</span>' +
            '&gt;' +
            '<li class="need" data-code-line="7">' +
            '    &lt;li' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 5 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="need" data-code-line="8">' +
            '    &lt;li' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 6 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '<li class="" data-code-line="9">' +
            '    &lt;li' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 7 ' +
            '</span>' +
            '&lt;/li&gt;' +
            '</li>' +
            '  &lt;/ul&gt;' +
            '</ul>' +
            '<div class="" data-code-line="10">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 8 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="need" data-code-line="11">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 9 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="12">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'studio 10 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'The Universal Selector and else' +
            '</div>' +
            '<div class="info-name-more">' +
            'Combine the Universal Selector' +
            '</div>' +
            '<div class="info-example">' +
            'A  *' +
            '</div>' +
            '<div class="info-description">' +
            'This selects all elements inside of A.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 11 (Adjacent Sibling Selector)',
        description: 'Select the batteries for the camera. The batteries are lying after the flash.',
        selector: '.usb + .battery',
        content: `
        <div class="box lev11">
        <div id="elements-container">
            <div class="battery" data-code-line="1" data-tag="&lt;div class=&quot;battery&quot;&gt; battery &lt;/div&gt;">
            <img src="${imgImports.level11[0].src}" alt="${imgImports.level11[0].alt}">
            </div>
            <div class="battery" data-code-line="2" data-tag="&lt;div class=&quot;battery&quot;&gt; battery &lt;/div&gt;">
            <img src="${imgImports.level11[1].src}" alt="${imgImports.level11[1].alt}">
            </div>
            <div class="battery" data-code-line="3" data-tag="&lt;div class=&quot;battery&quot;&gt; battery &lt;/div&gt;">
            <img src="${imgImports.level11[2].src}" alt="${imgImports.level11[2].alt}">
            </div>
            <div class="usb" data-code-line="4" data-tag="&lt;div class=&quot;usb&quot;&gt; usb &lt;/div&gt;">
            <img src="${imgImports.level11[8].src}" alt="${imgImports.level11[8].alt}">
            </div>
            <div class="battery" data-code-line="5" data-tag="&lt;div class=&quot;battery&quot;&gt; battery &lt;/div&gt;">
            <img src="${imgImports.level11[3].src}" alt="${imgImports.level11[3].alt}">
            </div>
            <div class="usb" data-code-line="6" data-tag="&lt;div class=&quot;usb&quot;&gt; usb &lt;/div&gt;">
            <img src="${imgImports.level11[7].src}" alt="${imgImports.level11[7].alt}">
            </div>
            <div class="battery" data-code-line="7" data-tag="&lt;div class=&quot;battery&quot;&gt; battery &lt;/div&gt;">
            <img src="${imgImports.level11[4].src}" alt="${imgImports.level11[4].alt}">
            </div>
            <div class="battery" data-code-line="8" data-tag="&lt;div class=&quot;battery&quot;&gt; battery &lt;/div&gt;">
            <img src="${imgImports.level11[5].src}" alt="${imgImports.level11[5].alt}">
            </div>
            <div class="battery" data-code-line="9" data-tag="&lt;div class=&quot;battery&quot;&gt; battery &lt;/div&gt;">
            <img src="${imgImports.level11[6].src}" alt="${imgImports.level11[6].alt}">
            </div>
            </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="battery" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"battery"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'battery ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="2">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"battery"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'battery ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"battery"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'battery ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"usb"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'usb ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"battery"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'battery ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"usb"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'usb ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"battery"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'battery ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="8">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"battery"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'battery ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="9">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"battery"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'battery ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Adjacent Sibling Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select an element that directly follows another element' +
            '</div>' +
            '<div class="info-example">' +
            'A + B' +
            '</div>' +
            '<div class="info-description">' +
            "This selects all B elements that directly follow A. Elements that follow one another are called siblings. They're on the same level, or depth. In the HTML markup for this level, elements that have the same indentation are siblings." +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 12 (General Sibling Selector)',
        description: "Let's build a computer for work. We need everything after the tablet.",
        selector: '.tablet ~ .technique',
        content: `
        <div class="box lev12">
        <div id="elements-container">
            <div class="technique phone" data-code-line="1" data-tag="&lt;div class=&quot;technique phone&quot;&gt; phone &lt;/div&gt;">
            <img src="${imgImports.level12[0].src}" alt="${imgImports.level12[0].alt}">
            </div>
            <div class="technique tablet" data-code-line="2" data-tag="&lt;div class=&quot;technique tablet&quot;&gt; tablet &lt;/div&gt;">
            <img src="${imgImports.level12[1].src}" alt="${imgImports.level12[1].alt}">
            </div>
            <div class="technique mouse" data-code-line="3" data-tag="&lt;div class=&quot;technique mouse&quot;&gt; mouse &lt;/div&gt;">
            <img src="${imgImports.level12[5].src}" alt="${imgImports.level12[5].alt}">
            </div>
            <div class="technique keyboard" data-code-line="4" data-tag="&lt;div class=&quot;technique keyboard&quot;&gt; keyboard &lt;/div&gt;">
            <img src="${imgImports.level12[3].src}" alt="${imgImports.level12[3].alt}">
            </div>
            <div class="technique monitor" data-code-line="5" data-tag="&lt;div class=&quot;technique monitor&quot;&gt; monitor &lt;/div&gt;">
            <img src="${imgImports.level12[4].src}" alt="${imgImports.level12[4].alt}">
            </div>
            <div class="technique block" data-code-line="6" data-tag="&lt;div class=&quot;technique block&quot;&gt; block &lt;/div&gt;">
            <img src="${imgImports.level12[2].src}" alt="${imgImports.level12[2].alt}">
            </div>
            </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="technique phone" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"technique phone"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'phone ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="2">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"technique tablet"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'tablet ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"technique mouse"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'mouse ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"technique keyboard"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'keyboard ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"technique monitor"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'monitor ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"technique block"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'block ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'General Sibling Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select elements that follows another element' +
            '</div>' +
            '<div class="info-example">' +
            'A ~ B' +
            '</div>' +
            '<div class="info-description">' +
            'You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 13 (Child Selector)',
        description: "Let's choose a camera. I signed what I need, find it.",
        selector: '.technique > .need',
        content: `
        <div class="box lev13">
        <div id="elements-container">
        <div class="new technique" data-code-line="1" data-tag="&lt;div class=&quot;new technique&quot;&gt;&lt;/div&gt;">
            <div class="camera" data-code-line="2" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[0].src}" alt="${imgImports.level13[0].alt}">
            </div>
            <div class="camera" data-code-line="3" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[1].src}" alt="${imgImports.level13[1].alt}">
            </div>
            <div class="camera" data-code-line="4" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[5].src}" alt="${imgImports.level13[5].alt}">
            </div>
            <div class="camera" data-code-line="5" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[8].src}" alt="${imgImports.level13[8].alt}">
            </div>
            <div class="camera" data-code-line="6" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[9].src}" alt="${imgImports.level13[9].alt}">
            </div>
            <div class="camera" data-code-line="7" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[10].src}" alt="${imgImports.level13[10].alt}">
            </div>
            <div class="camera need" data-code-line="8" data-tag="&lt;div class=&quot;camera need&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[5].src}" alt="${imgImports.level13[5].alt}">
            </div>
            <div class="camera" data-code-line="9" data-tag="&lt;div class=&quot;keyboard&quot;&gt; keyboard &lt;/div&gt;">
            <img src="${imgImports.level13[3].src}" alt="${imgImports.level13[3].alt}">
            </div>
        </div>
        <div class="old technique" data-code-line="10" data-tag="&lt;div class=&quot;old technique&quot;&gt;&lt;/div&gt;">
            <div class="camera" data-code-line="11" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[4].src}" alt="${imgImports.level13[4].alt}">
            </div>
            <div class="camera need" data-code-line="12" data-tag="&lt;div class=&quot;camera need&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[2].src}" alt="${imgImports.level13[2].alt}">
            </div>
            <div class="camera" data-code-line="13" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[11].src}" alt="${imgImports.level13[11].alt}">
            </div>
            <div class="camera" data-code-line="14" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[6].src}" alt="${imgImports.level13[6].alt}">
            </div>
            <div class="camera" data-code-line="15" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[7].src}" alt="${imgImports.level13[7].alt}">
            </div>
        </div>
        <div class="video technique" data-code-line="16" data-tag="&lt;div class=&quot;video technique&quot;&gt;&lt;/div&gt;">
            <div class="camera need" data-code-line="17" data-tag="&lt;div class=&quot;camera need&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[13].src}" alt="${imgImports.level13[13].alt}">
            </div>
            <div class="camera" data-code-line="18" data-tag="&lt;div class=&quot;camera&quot;&gt; camera &lt;/div&gt;">
            <img src="${imgImports.level13[12].src}" alt="${imgImports.level13[12].alt}">
            </div>
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="new technique" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"new technique"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="2">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="8">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera need"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="9">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="10">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"old technique"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="11">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="12">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera need"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="13">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="14">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="15">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="16">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"video technique"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="17">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera need"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="18">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"camera"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'camera ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Child Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select direct children of an element' +
            '</div>' +
            '<div class="info-example">' +
            'A > B' +
            '</div>' +
            '<div class="info-description">' +
            'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. Elements that are nested deeper than that are called descendant elements.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 14 (First Child Pseudo-selector)',
        description: "Let's choose the first lens.",
        selector: '.lenses div:first-child',
        content: `
        <div class="box lev14">
        <div id="elements-container">
        <div class="lenses" data-code-line="1" data-tag="&lt;div class=&quot;lenses&quot;&gt;&lt;/div&gt;">
            <div class="" data-code-line="2" data-tag="&lt;div&gt; lens &lt;/div&gt;">
            <img src="${imgImports.level14[0].src}" alt="${imgImports.level14[0].alt}">
            </div>
            <div class="" data-code-line="3" data-tag="&lt;div;&gt; lens &lt;/div&gt;">
            <img src="${imgImports.level14[1].src}" alt="${imgImports.level14[1].alt}">
            </div>
            <div class="" data-code-line="4" data-tag="&lt;div&gt; lens &lt;/div&gt;">
            <img src="${imgImports.level14[2].src}" alt="${imgImports.level14[2].alt}">
            </div>
            <div class="" data-code-line="5" data-tag="&lt;div&gt; lens &lt;/div&gt;">
            <img src="${imgImports.level14[3].src}" alt="${imgImports.level14[3].alt}">
            </div>
            <div class="" data-code-line="6" data-tag="&lt;div&gt; lens &lt;/div&gt;">
            <img src="${imgImports.level14[4].src}" alt="${imgImports.level14[4].alt}">
            </div>
            <div class="" data-code-line="7" data-tag="&lt;div&gt; lens &lt;/div&gt;">
            <img src="${imgImports.level14[5].src}" alt="${imgImports.level14[5].alt}">
            </div>
            <div class="" data-code-line="8" data-tag="&lt;div&gt; lens &lt;/div&gt;">
            <img src="${imgImports.level14[6].src}" alt="${imgImports.level14[6].alt}">
            </div>
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="lenses" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"lenses"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="2">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'lens ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'lens ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'lens ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'lens ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'lens ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'lens ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="8">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'lens ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'First Child Pseudo-selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select a first child element inside of another element' +
            '</div>' +
            '<div class="info-example">' +
            ':first-child' +
            '</div>' +
            '<div class="info-description">' +
            'You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 15 (Last Child Pseudo-selector)',
        description: "A lot of things need to be taken, let's take a taxi to the shooting.",
        selector: '.transport div:last-child',
        content: `
        <div class="box lev15">
        <div id="elements-container">
        <div class="transport" data-code-line="1" data-tag="&lt;div class=&quot;transport&quot;&gt;&lt;/div&gt;">
            <div class="" data-code-line="2" data-tag="&lt;div&gt; bike &lt;/div&gt;">
            <img src="${imgImports.level15[0].src}" alt="${imgImports.level15[0].alt}">
            </div>
            <div class="" data-code-line="3" data-tag="&lt;div&gt; bus &lt;/div&gt;">
            <img src="${imgImports.level15[1].src}" alt="${imgImports.level15[1].alt}">
            </div>
            <div class="" data-code-line="4" data-tag="&lt;div&gt; car &lt;/div&gt;">
            <img src="${imgImports.level15[2].src}" alt="${imgImports.level15[2].alt}">
            </div>
            <div class="" data-code-line="5" data-tag="&lt;div&gt; helicopter &lt;/div&gt;">
            <img src="${imgImports.level15[3].src}" alt="${imgImports.level15[3].alt}">
            </div>
            <div class="" data-code-line="6" data-tag="&lt;div&gt; motorbike &lt;/div&gt;">
            <img src="${imgImports.level15[4].src}" alt="${imgImports.level15[4].alt}">
            </div>
            <div class="" data-code-line="7" data-tag="&lt;div&gt; skateboard &lt;/div&gt;">
            <img src="${imgImports.level15[5].src}" alt="${imgImports.level15[5].alt}">
            </div>
            <div class="" data-code-line="8" data-tag="&lt;div&gt; taxi &lt;/div&gt;">
            <img src="${imgImports.level15[6].src}" alt="${imgImports.level15[6].alt}">
            </div>
            <div class="" data-code-line="9" data-tag="&lt;div&gt; tram &lt;/div&gt;">
            <img src="${imgImports.level15[7].src}" alt="${imgImports.level15[7].alt}">
            </div>
            <div class="" data-code-line="10" data-tag="&lt;div&gt; trolleybus &lt;/div&gt;">
            <img src="${imgImports.level15[8].src}" alt="${imgImports.level15[8].alt}">
            </div>
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="transport" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"transport"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="2">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'bike ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'bus ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'car ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'helicopter ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'motorbike ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'skateboard ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="8">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'tram ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="9">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'trolleybus ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="10">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'taxi ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Last Child Pseudo-selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select the last element inside of another element' +
            '</div>' +
            '<div class="info-example">' +
            ':last-child' +
            '</div>' +
            '<div class="info-description">' +
            'You can use this selector to select an element that is the last child element inside of another element.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 16 (Only Child Pseudo-selector)',
        description: "Let's turn on the music. But you need to choose where there are fewer elements to play.",
        selector: '.info div:only-child',
        content: `
        <div class="box lev16">
        <div id="elements-container">
        <div class="music">
            <div class="sistem" data-code-line="1" data-tag="&lt;div&gt; music &lt;/div&gt;">
                <div class="info" data-code-line="2" data-tag="&lt;div&gt;&lt;/div&gt;"> 
                    <div class="" data-code-line="3" data-tag="&lt;div&gt; need two wires &lt;/div&gt;"> need two wires </div>
                    <div class="" data-code-line="4" data-tag="&lt;div&gt; need two batteries &lt;/div&gt;"> need two batteries </div>
                </div>
            </div>
            <div class="sistem" data-code-line="5" data-tag="&lt;div&gt; music &lt;/div&gt;">
                <div class="info" data-code-line="6" data-tag="&lt;div&gt;&lt;/div&gt;"> 
                    <div class="" data-code-line="7" data-tag="&lt;div&gt; need flash &lt;/div&gt;"> need flash </div>
                </div>
            </div>
            <div class="sistem" data-code-line="8" data-tag="&lt;div&gt; music &lt;/div&gt;">
                <div class="info" data-code-line="9" data-tag="&lt;div&gt;&lt;/div&gt;"> 
                    <div class="" data-code-line="10" data-tag="&lt;div&gt; need old disks &lt;/div&gt;"> need old disks </div>
                    <div class="" data-code-line="11" data-tag="&lt;div&gt; need an adapter &lt;/div&gt;"> need an adapter </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="music">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"music"' +
            '</span>' +
            '&gt; ' +
            '<div class="sistem" data-code-line="1">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"sistem"' +
            '</span>' +
            '&gt; ' +
            '<div class="info" data-code-line="2">' +
            '      &lt;div class=' +
            '<span class="name-info" >' +
            '"info"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="3">' +
            '        &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'need two wires ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '        &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'need two batteries ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '      &lt;/div&gt;' +
            '</div>' +
            '    &lt;/div&gt;' +
            '</div>' +
            '<div class="sistem" data-code-line="5">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"sistem"' +
            '</span>' +
            '&gt; ' +
            '<div class="info" data-code-line="6">' +
            '      &lt;div class=' +
            '<span class="name-info" >' +
            '"info"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="7">' +
            '        &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'need flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '      &lt;/div&gt;' +
            '</div>' +
            '    &lt;/div&gt;' +
            '</div>' +
            '<div class="sistem" data-code-line="8">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"sistem"' +
            '</span>' +
            '&gt; ' +
            '<div class="info" data-code-line="9">' +
            '      &lt;div class=' +
            '<span class="name-info" >' +
            '"info"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="10">' +
            '        &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'need old disks ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="11">' +
            '        &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'need an adapter ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '      &lt;/div&gt;' +
            '</div>' +
            '    &lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Only Child Pseudo-selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select an element that are the only element inside of another one.' +
            '</div>' +
            '<div class="info-example">' +
            ':only-child' +
            '</div>' +
            '<div class="info-description">' +
            'You can select any element that is the only element inside of another one.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 17 (Nth Child Pseudo-selector)',
        description: "Let's start processing the photo. Let's choose a Lightroom.",
        selector: '.programms div:nth-child(6)',
        content: `
        <div class="box lev17">
        <div id="elements-container">
        <div class="programms" data-code-line="1" data-tag="&lt;div class=&quot;transport&quot;&gt;&lt;/div&gt;">
            <div class="" data-code-line="2" data-tag="&lt;div&gt; Capture One &lt;/div&gt;">
            <img src="${imgImports.level17[0].src}" alt="${imgImports.level17[0].alt}">
            </div>
            <div class="" data-code-line="3" data-tag="&lt;div&gt; GIMP &lt;/div&gt;">
            <img src="${imgImports.level17[1].src}" alt="${imgImports.level17[1].alt}">
            </div>
            <div class="" data-code-line="4" data-tag="&lt;div&gt; Movavi &lt;/div&gt;">
            <img src="${imgImports.level17[2].src}" alt="${imgImports.level17[2].alt}">
            </div>
            <div class="" data-code-line="5" data-tag="&lt;div&gt; ON1 &lt;/div&gt;">
            <img src="${imgImports.level17[3].src}" alt="${imgImports.level17[3].alt}">
            </div>
            <div class="" data-code-line="6" data-tag="&lt;div&gt; Affinity &lt;/div&gt;">
            <img src="${imgImports.level17[4].src}" alt="${imgImports.level17[4].alt}">
            </div>
            <div class="" data-code-line="7" data-tag="&lt;div&gt; Lightroom &lt;/div&gt;">
            <img src="${imgImports.level17[5].src}" alt="${imgImports.level17[5].alt}">
            </div>
            <div class="" data-code-line="8" data-tag="&lt;div&gt; PhotoDirector &lt;/div&gt;">
            <img src="${imgImports.level17[6].src}" alt="${imgImports.level17[6].alt}">
            </div>
            <div class="" data-code-line="9" data-tag="&lt;div&gt; Photoshop &lt;/div&gt;">
            <img src="${imgImports.level17[7].src}" alt="${imgImports.level17[7].alt}">
            </div>
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="programms" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"programms"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="2">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'Capture One ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'GIMP ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'Movavi ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'ON1 ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'Affinity ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'Lightroom ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="8">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'PhotoDirector ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="9">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'Photoshop ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Nth Child Pseudo-selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select an element by its order in another element' +
            '</div>' +
            '<div class="info-example">' +
            ':nth-child(A)' +
            '</div>' +
            '<div class="info-description">' +
            'Selects the nth (Ex: 1st, 3rd, 12th etc.) child element in another element' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 18 (First of Type Selector)',
        description: "Let's choose a yellow flash drive for our client.",
        selector: '.flash-cards div:first-of-type',
        content: `
        <div class="box lev18">
        <div id="elements-container">
        <div class="flash-cards" data-code-line="1" data-tag="&lt;div class=&quot;flash&quot;&gt;&lt;/div&gt;">
            <div class="" data-code-line="2" data-tag="&lt;div&gt; flash &lt;/div&gt;">
            <img src="${imgImports.level18[0].src}" alt="${imgImports.level18[0].alt}">
            </div>
            <div class="" data-code-line="3" data-tag="&lt;div&gt; flash &lt;/div&gt;">
            <img src="${imgImports.level18[1].src}" alt="${imgImports.level18[1].alt}">
            </div>
            <div class="" data-code-line="4" data-tag="&lt;div&gt; flash &lt;/div&gt;">
            <img src="${imgImports.level18[2].src}" alt="${imgImports.level18[2].alt}">
            </div>
            <div class="" data-code-line="5" data-tag="&lt;div&gt; flash &lt;/div&gt;">
            <img src="${imgImports.level18[3].src}" alt="${imgImports.level18[3].alt}">
            </div>
            <div class="" data-code-line="6" data-tag="&lt;div&gt; flash &lt;/div&gt;">
            <img src="${imgImports.level18[4].src}" alt="${imgImports.level18[4].alt}">
            </div>
            <div class="" data-code-line="7" data-tag="&lt;div&gt; flash &lt;/div&gt;">
            <img src="${imgImports.level18[5].src}" alt="${imgImports.level18[5].alt}">
            </div>
            <div class="" data-code-line="8" data-tag="&lt;div&gt; flash &lt;/div&gt;">
            <img src="${imgImports.level18[6].src}" alt="${imgImports.level18[6].alt}">
            </div>
            <div class="" data-code-line="9" data-tag="&lt;div&gt; flash &lt;/div&gt;">
            <img src="${imgImports.level18[7].src}" alt="${imgImports.level18[7].alt}">
            </div>
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="flash-cards" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"flash-cards"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="2">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="8">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="9">' +
            '    &lt;div' +
            '&gt; ' +
            '<span class="text" >' +
            'flash ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'First of Type Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select the first element of a specific type' +
            '</div>' +
            '<div class="info-example">' +
            ':first-of-type' +
            '</div>' +
            '<div class="info-description">' +
            'Selects the first element of that type within another element.' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 19 (Negation Pseudo-class)',
        description: "You need to prepare the printer for printing. Let's remove the tripod so as not to interfere.",
        selector: '.printer-components div:not(.tripod)',
        content: `
        <div class="box lev19">
        <div id="elements-container">
        <div class="printer-components" data-code-line="1" data-tag="&lt;div class=&quot;printer-components&quot;&gt;&lt;/div&gt;">
            <div class="cable" data-code-line="2" data-tag="&lt;div class=&quot;cable&quot;&gt; cable &lt;/div&gt;">
            <img src="${imgImports.level19[0].src}" alt="${imgImports.level19[0].alt}">
            </div>
            <div class="colors" data-code-line="3" data-tag="&lt;div class=&quot;colors&quot;&gt; colors &lt;/div&gt;">
            <img src="${imgImports.level19[1].src}" alt="${imgImports.level19[1].alt}">
            </div>
            <div class="paper" data-code-line="4" data-tag="&lt;div class=&quot;paper&quot;&gt; paper &lt;/div&gt;">
            <img src="${imgImports.level19[2].src}" alt="${imgImports.level19[2].alt}">
            </div>
            <div class="printer" data-code-line="5" data-tag="&lt;div class=&quot;printer&quot;&gt; printer &lt;/div&gt;">
            <img src="${imgImports.level19[3].src}" alt="${imgImports.level19[3].alt}">
            </div>
            <div class="tripod" data-code-line="6" data-tag="&lt;div class=&quot;tripod&quot;&gt; tripod &lt;/div&gt;">
            <img src="${imgImports.level19[4].src}" alt="${imgImports.level19[4].alt}">
            </div>
            <div class="computer" data-code-line="7" data-tag="&lt;div class=&quot;computer&quot;&gt; computer &lt;/div&gt;">
            <img src="${imgImports.level19[5].src}" alt="${imgImports.level19[5].alt}">
            </div>
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="printer-components" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"printer-components"' +
            '</span>' +
            '&gt; ' +
            '<div class="" data-code-line="2">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"cable"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'cable ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"colors"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'colors ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"paper"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'paper ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"printer"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'printer ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"tripod"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'tripod ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '    &lt;div class=' +
            '<span class="name-info" >' +
            '"computer"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'computer ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Negation Pseudo-class' +
            '</div>' +
            '<div class="info-name-more">' +
            "Select all elements that don't match the negation selector" +
            '</div>' +
            '<div class="info-example">' +
            ':not(X)' +
            '</div>' +
            '<div class="info-description">' +
            'You can use this to select all elements that do not match selector "X".' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not">' +
            'Read more...' +
            '</a>',
    },
    {
        title: 'Level 20 (Attribute Selector)',
        description: 'I need to give the photos to Emily.',
        selector: ".photos div[for='Emily']",
        content: `
        <div class="box lev20">
        <div id="elements-container">
        <div class="photos" data-code-line="1" data-tag="&lt;div class=&quot;photos&quot;&gt;&lt;/div&gt;">
            <div class="" for='Emily' data-code-line="2" data-tag="&lt;div for=&quot;Emily&quot;&gt; Emily &lt;/div&gt;">
            <img src="${imgImports.level20[0].src}" alt="${imgImports.level20[0].alt}">
            </div>
            <div class="" for='Nik' data-code-line="3" data-tag="&lt;div for=&quot;Nik&quot;&gt; Nik &lt;/div&gt;">
            <img src="${imgImports.level20[1].src}" alt="${imgImports.level20[1].alt}">
            </div>
            <div class="" for='Anna' data-code-line="4" data-tag="&lt;div for=&quot;Anna&quot;&gt; Anna &lt;/div&gt;">
            <img src="${imgImports.level20[2].src}" alt="${imgImports.level20[2].alt}">
            </div>
            <div class="" for='Pavel' data-code-line="5" data-tag="&lt;div for=&quot;Pavel&quot;&gt; Pavel &lt;/div&gt;">
            <img src="${imgImports.level20[3].src}" alt="${imgImports.level20[3].alt}">
            </div>
            <div class="" for='Clara' data-code-line="6" data-tag="&lt;div for=&quot;Clara&quot;&gt; Clara &lt;/div&gt;">
            <img src="${imgImports.level20[4].src}" alt="${imgImports.level20[4].alt}">
            </div>
            <div class="" for='Jack' data-code-line="7" data-tag="&lt;div for=&quot;Jack&quot;&gt; Jack &lt;/div&gt;">
            <img src="${imgImports.level20[5].src}" alt="${imgImports.level20[5].alt}">
            </div>
        </div>
        </div>
        </div>
      `,
        contentText:
            '<div class="box">' +
            '<div >' +
            '&lt;div id=' +
            '<span class="name-info" >' +
            '"elements-container"' +
            '</span>' +
            '&gt;' +
            '<div class="photos" data-code-line="1">' +
            '  &lt;div class=' +
            '<span class="name-info" >' +
            '"photos"' +
            '</span>' +
            '&gt; ' +
            '<div for="Emily" data-code-line="2">' +
            '    &lt;div for=' +
            '<span class="name-info" >' +
            '"Emily"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Emily ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="3">' +
            '    &lt;div for=' +
            '<span class="name-info" >' +
            '"Nik"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Nik ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="4">' +
            '    &lt;div for=' +
            '<span class="name-info" >' +
            '"Anna"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Anna ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="5">' +
            '    &lt;div for=' +
            '<span class="name-info" >' +
            '"Pavel"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Pavel ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="6">' +
            '    &lt;div for=' +
            '<span class="name-info" >' +
            '"Clara"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Clara ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '<div class="" data-code-line="7">' +
            '    &lt;div for=' +
            '<span class="name-info" >' +
            '"Jack"' +
            '</span>' +
            '&gt; ' +
            '<span class="text" >' +
            'Jack ' +
            '</span>' +
            '&lt;/div&gt;' +
            '</div>' +
            '  &lt;/div&gt;' +
            '</div>' +
            '</div>' +
            '&lt;/div&gt;' +
            '</div>',
        helpInfo:
            '<div class="info-name">' +
            'Attribute Selector' +
            '</div>' +
            '<div class="info-name-more">' +
            'Select all elements that have a specific attribute' +
            '</div>' +
            '<div class="info-example">' +
            '[attribute]' +
            '</div>' +
            '<div class="info-description">' +
            'Attributes appear inside the opening tag of an element, like this: span attribute = "value". An attribute does not always have a value, it can be blank!' +
            '</div>' +
            '<a class="info-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">' +
            'Read more...' +
            '</a>',
    },
];

export const levelSelectors: { [title: string]: string } = {};

levels.forEach((level) => {
    const { title, selector } = level;
    levelSelectors[title] = selector;
});

console.log(levelSelectors);
