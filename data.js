/* ===================== DATA: vocab decks, grammar, games ===================== */

const DECKS = [
  {
    id: "intro",
    title: "Greetings & Intro",
    icon: "👋",
    cards: [
      { de: "Hallo / Guten Tag", en: "Hello / Good day" },
      { de: "Ich heiße ...", en: "My name is ..." },
      { de: "Wie heißt du?", en: "What's your name?" },
      { de: "Wie geht es dir? / Wie geht's?", en: "How are you?" },
      { de: "Mir geht es gut.", en: "I'm doing well." },
      { de: "Mir geht es sehr gut.", en: "I'm doing very well." },
      { de: "Mir geht es so lala.", en: "I'm so-so." },
      { de: "Wie alt bist du?", en: "How old are you?" },
      { de: "Ich bin ... Jahre alt.", en: "I am ... years old." },
      { de: "Woher kommst du?", en: "Where are you from?" },
      { de: "Ich komme aus ...", en: "I come from ..." },
      { de: "Wo wohnst du?", en: "Where do you live?" },
      { de: "Ich wohne in ...", en: "I live in ..." },
      { de: "Wie lange lebst du dort?", en: "How long have you lived there?" },
      { de: "Ich lebe seit 2 Jahren in ...", en: "I've lived in ... for 2 years." },
      { de: "Welche Sprachen sprichst du?", en: "What languages do you speak?" },
      { de: "Ich spreche ...", en: "I speak ..." },
      { de: "Entschuldigung. Wie bitte?", en: "Excuse me. Pardon?" },
      { de: "Warum möchtest du Deutsch lernen?", en: "Why do you want to learn German?" },
      { de: "Ich möchte Deutsch für den Einbürgerungstest lernen.", en: "I want to learn German for the citizenship test." },
    ],
  },
  {
    id: "time-words",
    title: "Time Words (Tag/Woche/Jahr)",
    icon: "📅",
    cards: [
      { de: "der Tag / die Tage", en: "the day / the days" },
      { de: "die Woche / die Wochen", en: "the week / the weeks" },
      { de: "der Monat / die Monate", en: "the month / the months" },
      { de: "das Jahr / die Jahre", en: "the year / the years" },
      { de: "das Land / die Länder", en: "the country / the countries" },
      { de: "die Sprache / die Sprachen", en: "the language / the languages" },
      { de: "die Seite / die Seiten", en: "the page / the pages" },
      { de: "der Morgen", en: "the morning" },
      { de: "der Vormittag", en: "the late morning" },
      { de: "der Mittag", en: "noon" },
      { de: "der Nachmittag", en: "the afternoon" },
      { de: "der Abend", en: "the evening" },
      { de: "die Nacht", en: "the night" },
      { de: "das Wochenende", en: "the weekend" },
      { de: "unter der Woche", en: "during the week / weekdays" },
      { de: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag", en: "Mon, Tue, Wed, Thu, Fri" },
      { de: "Samstag, Sonntag", en: "Saturday, Sunday" },
      { de: "Gestern war Dienstag.", en: "Yesterday was Tuesday." },
      { de: "Heute ist Mittwoch.", en: "Today is Wednesday." },
      { de: "Morgen ist Donnerstag.", en: "Tomorrow is Thursday." },
      { de: "der Urlaub / die Ferien", en: "vacation / the holidays" },
    ],
  },
  {
    id: "family",
    title: "Family (Familie)",
    icon: "👨‍👩‍👧",
    cards: [
      { de: "die Mutter", en: "the mother" },
      { de: "der Vater", en: "the father" },
      { de: "die Großmutter / die Oma", en: "grandmother / grandma" },
      { de: "der Großvater / der Opa", en: "grandfather / grandpa" },
      { de: "der Onkel", en: "the uncle" },
      { de: "die Tante", en: "the aunt" },
      { de: "die Tochter", en: "the daughter" },
      { de: "der Sohn / die Söhne", en: "the son / the sons" },
      { de: "das Mädchen", en: "the girl" },
      { de: "der Junge", en: "the boy" },
      { de: "der Bruder / die Brüder", en: "brother / brothers" },
      { de: "die Schwester / die Schwestern", en: "sister / sisters" },
      { de: "die Eltern", en: "the parents" },
      { de: "die Enkelkinder", en: "the grandchildren" },
      { de: "der Enkelsohn", en: "the grandson" },
      { de: "die Enkeltochter", en: "the granddaughter" },
      { de: "die Person / die Personen", en: "person / people" },
      { de: "der Mann", en: "the man" },
      { de: "die Frau", en: "the woman" },
      { de: "das Kind / die Kinder", en: "the child / the children" },
      { de: "Hast du Mitbewohner?", en: "Do you have roommates?" },
      { de: "Ich lebe alleine.", en: "I live alone." },
      { de: "Ich lebe mit meiner Familie.", en: "I live with my family." },
      { de: "Sie leben zusammen.", en: "They live together." },
    ],
  },
  {
    id: "numbers",
    title: "Numbers (Zahlen)",
    icon: "🔢",
    cards: [
      { de: "0 null", en: "zero" }, { de: "1 eins", en: "one" }, { de: "2 zwei", en: "two" },
      { de: "3 drei", en: "three" }, { de: "4 vier", en: "four" }, { de: "5 fünf", en: "five" },
      { de: "6 sechs", en: "six" }, { de: "7 sieben", en: "seven" }, { de: "8 acht", en: "eight" },
      { de: "9 neun", en: "nine" }, { de: "10 zehn", en: "ten" }, { de: "11 elf", en: "eleven" },
      { de: "12 zwölf", en: "twelve" }, { de: "13 dreizehn", en: "thirteen" }, { de: "14 vierzehn", en: "fourteen" },
      { de: "15 fünfzehn", en: "fifteen" }, { de: "16 sechzehn", en: "sixteen" }, { de: "17 siebzehn", en: "seventeen" },
      { de: "18 achtzehn", en: "eighteen" }, { de: "19 neunzehn", en: "nineteen" }, { de: "20 zwanzig", en: "twenty" },
      { de: "21 einundzwanzig", en: "twenty-one" }, { de: "32 zweiunddreißig", en: "thirty-two" },
      { de: "43 dreiundvierzig", en: "forty-three" }, { de: "54 vierundfünfzig", en: "fifty-four" },
      { de: "65 fünfundsechzig", en: "sixty-five" }, { de: "76 sechsundsiebzig", en: "seventy-six" },
      { de: "87 siebenundachtzig", en: "eighty-seven" }, { de: "99 neunundneunzig", en: "ninety-nine" },
      { de: "100 einhundert", en: "one hundred" }, { de: "1000 eintausend", en: "one thousand" },
      { de: "In welchem Jahr bist du geboren?", en: "What year were you born?" },
      { de: "Ich bin im Jahr ... geboren.", en: "I was born in the year ..." },
      { de: "Wie ist deine Telefonnummer?", en: "What's your phone number?" },
      { de: "Wie ist deine E-Mail-Adresse?", en: "What's your email address?" },
    ],
  },
  {
    id: "marital",
    title: "Marital Status & Work",
    icon: "💍",
    cards: [
      { de: "ledig", en: "single (unmarried)" },
      { de: "verheiratet", en: "married" },
      { de: "geschieden", en: "divorced" },
      { de: "getrennt", en: "separated" },
      { de: "verwitwet", en: "widowed" },
      { de: "verlobt", en: "engaged" },
      { de: "am Daten", en: "dating" },
      { de: "Bist du verheiratet?", en: "Are you married?" },
      { de: "Ich habe keine Kinder.", en: "I have no children." },
      { de: "Was machst du beruflich?", en: "What do you do for a living?" },
      { de: "Ich bin arbeitslos.", en: "I am unemployed." },
      { de: "Ich bin Studentin / Student.", en: "I am a student (f/m)." },
      { de: "Ich bin Hausfrau.", en: "I am a housewife." },
      { de: "Ich habe einen Job als ...", en: "I have a job as ..." },
      { de: "der Beruf", en: "the profession" },
      { de: "die Arbeit", en: "the work/job" },
      { de: "die Universität", en: "the university" },
    ],
  },
  {
    id: "house",
    title: "House & Furniture",
    icon: "🏠",
    cards: [
      { de: "die Wohnung / das Haus", en: "the apartment / the house" },
      { de: "das Badezimmer", en: "the bathroom" },
      { de: "das Schlafzimmer", en: "the bedroom" },
      { de: "das Kinderzimmer", en: "the children's room" },
      { de: "der Keller", en: "the basement" },
      { de: "das Wohnzimmer", en: "the living room" },
      { de: "die Küche", en: "the kitchen" },
      { de: "der Balkon", en: "the balcony" },
      { de: "das Arbeitszimmer", en: "the study/office room" },
      { de: "der Garten", en: "the garden" },
      { de: "der Stellplatz", en: "the parking space" },
      { de: "die Treppe", en: "the stairs" },
      { de: "der Flur", en: "the hallway" },
      { de: "das Esszimmer", en: "the dining room" },
      { de: "der Dachboden", en: "the attic" },
      { de: "der Kühlschrank", en: "the refrigerator" },
      { de: "das Waschbecken", en: "the sink" },
      { de: "die Dusche", en: "the shower" },
      { de: "der Herd", en: "the stove" },
      { de: "der Fernseher", en: "the TV" },
      { de: "die Kommode", en: "the dresser" },
      { de: "das Fenster", en: "the window" },
      { de: "die Waschmaschine", en: "the washing machine" },
      { de: "der Spiegel", en: "the mirror" },
      { de: "der Tisch", en: "the table" },
      { de: "das Sofa", en: "the sofa" },
      { de: "das Bett", en: "the bed" },
    ],
  },
  {
    id: "materials-adj",
    title: "Materials & Adjectives",
    icon: "🎨",
    cards: [
      { de: "Die Vase ist aus Glas.", en: "The vase is made of glass." },
      { de: "Der Pullover ist aus Wolle.", en: "The sweater is made of wool." },
      { de: "Der Schreibtisch ist aus Holz.", en: "The desk is made of wood." },
      { de: "Die Autotür ist aus Metall.", en: "The car door is made of metal." },
      { de: "schön / hässlich", en: "beautiful / ugly" },
      { de: "teuer / günstig, billig", en: "expensive / cheap" },
      { de: "groß / klein", en: "big / small" },
      { de: "sauber / schmutzig", en: "clean / dirty" },
      { de: "kurz / lang", en: "short / long" },
      { de: "jung / alt", en: "young / old" },
      { de: "kalt / warm", en: "cold / warm" },
      { de: "glücklich, fröhlich / traurig", en: "happy / sad" },
      { de: "lustig / langweilig", en: "funny / boring" },
      { de: "gemütlich / bequem", en: "cozy / comfortable" },
      { de: "dick / dünn", en: "thick / thin" },
      { de: "preiswert", en: "good value / affordable" },
      { de: "Welche Farbe hat das Bett?", en: "What color is the bed?" },
      { de: "Wie viel kostet die Vase?", en: "How much does the vase cost?" },
      { de: "Was ist deine Lieblingsfarbe?", en: "What's your favorite color?" },
      { de: "blau, grün, dunkelblau, hellblau", en: "blue, green, dark blue, light blue" },
    ],
  },
  {
    id: "verbs",
    title: "Common Verbs",
    icon: "🏃",
    cards: [
      { de: "sehen", en: "to see" }, { de: "leben", en: "to live" }, { de: "wohnen", en: "to reside" },
      { de: "arbeiten", en: "to work" }, { de: "haben", en: "to have" }, { de: "schreiben", en: "to write" },
      { de: "lesen", en: "to read" }, { de: "hören", en: "to hear" }, { de: "sprechen", en: "to speak" },
      { de: "zählen", en: "to count" }, { de: "trinken", en: "to drink" }, { de: "kommen", en: "to come" },
      { de: "spielen", en: "to play" }, { de: "finden", en: "to find" }, { de: "zeichnen", en: "to draw" },
      { de: "kaufen", en: "to buy" }, { de: "treffen", en: "to meet" }, { de: "besuchen", en: "to visit" },
      { de: "suchen", en: "to search" }, { de: "brauchen", en: "to need" }, { de: "schneiden", en: "to cut" },
      { de: "lösen", en: "to solve" }, { de: "tauschen", en: "to swap" }, { de: "kochen", en: "to cook" },
    ],
  },
  {
    id: "hobbies",
    title: "Hobbies & Frequency",
    icon: "🎲",
    cards: [
      { de: "Was sind deine Hobbys?", en: "What are your hobbies?" },
      { de: "Was machst du in deiner Freizeit?", en: "What do you do in your free time?" },
      { de: "immer", en: "always" },
      { de: "oft", en: "often" },
      { de: "manchmal", en: "sometimes" },
      { de: "nie", en: "never" },
      { de: "Ich trinke immer einen Kaffee.", en: "I always drink a coffee." },
      { de: "Ich treffe manchmal meine Freunde.", en: "I sometimes meet my friends." },
      { de: "Ich schlafe nie vor 19 Uhr.", en: "I never sleep before 7 pm." },
      { de: "tanzen, singen, malen, nähen", en: "to dance, sing, paint, sew" },
      { de: "angeln, reiten, schwimmen", en: "to fish, ride (horse), swim" },
      { de: "backen, fotografieren", en: "to bake, photograph" },
      { de: "Schach spielen", en: "to play chess" },
      { de: "Fernsehen sehen", en: "to watch TV" },
    ],
  },
  {
    id: "food",
    title: "Food (Essen)",
    icon: "🍕",
    cards: [
      { de: "Ich mag Pizza.", en: "I like pizza." },
      { de: "Ich mag Pasta.", en: "I like pasta." },
      { de: "Ich mag Suppe.", en: "I like soup." },
      { de: "das Fleisch / das Steak", en: "the meat / the steak" },
      { de: "das Schnitzel", en: "the schnitzel" },
      { de: "die Lasagne", en: "the lasagna" },
      { de: "die Tomate / die Tomaten", en: "the tomato / tomatoes" },
      { de: "die Karotte / die Karotten", en: "the carrot / carrots" },
      { de: "der Käse", en: "the cheese" },
      { de: "die Süßigkeiten", en: "the sweets/candy" },
      { de: "die Zwiebel", en: "the onion" },
      { de: "das Ei", en: "the egg" },
      { de: "Ich mag keine Tomaten.", en: "I don't like tomatoes." },
    ],
  },
];

/* ===================== GRAMMAR TOPICS ===================== */

const GRAMMAR = [
  {
    id: "articles",
    title: "Der, Die, Das — Gender & Articles",
    body: `
      <p>Every German noun has a <strong>grammatical gender</strong>: masculine, feminine, or neuter.
      The definite article ("the") changes depending on gender:</p>
      <table class="gtable">
        <tr><th>Gender</th><th>Article</th><th>Example</th></tr>
        <tr><td>masculine (männlich)</td><td class="m">der</td><td>der Mann, der Tisch</td></tr>
        <tr><td>feminine (weiblich)</td><td class="f">die</td><td>die Frau, die Tasche</td></tr>
        <tr><td>neuter (sächlich)</td><td class="n">das</td><td>das Kind, das Buch</td></tr>
      </table>
      <p><strong>Plural rule:</strong> no matter the gender, the article in the plural is always
      <span class="f">die</span> — die Männer, die Frauen, die Kinder.</p>
      <p><strong>Helpful patterns</strong> (not 100% reliable, but useful guesses):</p>
      <ul>
        <li><span class="m">der</span>: days (der Montag), months (der Januar), seasons (der Sommer)</li>
        <li><span class="f">die</span>: words ending in <em>-ung</em> (die Zeitung), <em>-heit/-keit</em> (die Freiheit)</li>
        <li><span class="n">das</span>: words ending in <em>-chen</em> (das Mädchen), <em>-lein</em> (das Fräulein)</li>
      </ul>
      <p>There's no shortcut for most nouns — gender is memorized along with the word. That's why
      flashcards always show the article!</p>
    `,
  },
  {
    id: "sein-haben",
    title: "Verb 'sein' (to be) & 'haben' (to have)",
    body: `
      <p>These are the two most important irregular verbs in German — you'll use them constantly.</p>
      <table class="gtable">
        <tr><th>Pronoun</th><th>sein (to be)</th><th>haben (to have)</th></tr>
        <tr><td>ich</td><td>bin</td><td>habe</td></tr>
        <tr><td>du</td><td>bist</td><td>hast</td></tr>
        <tr><td>er/sie/es</td><td>ist</td><td>hat</td></tr>
        <tr><td>wir</td><td>sind</td><td>haben</td></tr>
        <tr><td>ihr</td><td>seid</td><td>habt</td></tr>
        <tr><td>sie/Sie</td><td>sind</td><td>haben</td></tr>
      </table>
      <p>Example: <em>Ich bin 31 Jahre alt.</em> (I am 31 years old.) — Note: German uses
      "to be ... years old", just like English.</p>
    `,
  },
  {
    id: "regular-verbs",
    title: "Regular Verb Conjugation (heißen, wohnen, ...)",
    body: `
      <p>Most German verbs are "regular" — you take the stem (infinitive minus <em>-en</em>) and add
      a standard set of endings.</p>
      <table class="gtable">
        <tr><th>Pronoun</th><th>Ending</th><th>heißen</th></tr>
        <tr><td>ich</td><td>-e</td><td>heiße</td></tr>
        <tr><td>du</td><td>-st</td><td>heißt</td></tr>
        <tr><td>er/sie/es</td><td>-t</td><td>heißt</td></tr>
        <tr><td>wir</td><td>-en</td><td>heißen</td></tr>
        <tr><td>ihr</td><td>-t</td><td>heißt</td></tr>
        <tr><td>sie/Sie</td><td>-en</td><td>heißen</td></tr>
      </table>
      <p>Same pattern applies to <em>wohnen, arbeiten, kommen, spielen, lernen,</em> etc.
      Note: <em>du</em> = informal "you" (one person), <em>ihr</em> = informal "you all",
      <em>Sie</em> (capitalized) = formal "you" (singular or plural).</p>
    `,
  },
  {
    id: "negation",
    title: "Articles: ein / eine vs. kein / keine",
    body: `
      <p>To say "a/an" you use the <strong>indefinite article</strong>. To negate a noun
      ("not a..." / "no...") you use the <strong>negation article</strong>, which follows the
      exact same pattern as "ein" but starts with "k-".</p>
      <table class="gtable">
        <tr><th>Definite</th><th>Indefinite (a/an)</th><th>Negation (no/not a)</th></tr>
        <tr><td class="m">der</td><td>ein</td><td>kein</td></tr>
        <tr><td class="n">das</td><td>ein</td><td>kein</td></tr>
        <tr><td class="f">die</td><td>eine</td><td>keine</td></tr>
      </table>
      <p>Examples: <em>Ich habe einen Keller.</em> (I have a basement.) /
      <em>Ich habe kein Sportzimmer.</em> (I don't have a sports room.)</p>
      <p>Note: in the Akkusativ case (direct object), masculine "ein"/"kein" changes to
      "einen"/"keinen" — see the Cases topic.</p>
    `,
  },
  {
    id: "cases",
    title: "Cases: Nominativ vs. Akkusativ",
    body: `
      <p>German nouns change form (via their article) depending on their grammatical role
      in the sentence — this is called <strong>case</strong>. A1 focuses on two:</p>
      <ul>
        <li><strong>Nominativ</strong> — "Wer oder was?" (Who or what?) → the subject of the sentence</li>
        <li><strong>Akkusativ</strong> — "Wen oder was?" (Whom or what?) → the direct object</li>
      </ul>
      <table class="gtable">
        <tr><th></th><th class="m">der → masc.</th><th class="f">die → fem.</th><th class="n">das → neut.</th></tr>
        <tr><td>Nominativ (definite)</td><td>der Koffer</td><td>die Maus</td><td>das Geld</td></tr>
        <tr><td>Akkusativ (definite)</td><td>den Koffer</td><td>die Maus</td><td>das Geld</td></tr>
        <tr><td>Nominativ (indefinite)</td><td>ein Koffer</td><td>eine Maus</td><td>ein Geld</td></tr>
        <tr><td>Akkusativ (indefinite)</td><td>einen Koffer</td><td>eine Maus</td><td>ein Geld</td></tr>
        <tr><td>Akkusativ (negation)</td><td>keinen Koffer</td><td>keine Maus</td><td>kein Geld</td></tr>
      </table>
      <p>Only <strong>masculine</strong> changes from Nominativ to Akkusativ (der→den, ein→einen,
      kein→keinen). Feminine and neuter stay the same. Verbs like <em>haben, sehen, suchen,
      brauchen</em> take a direct object, so they trigger the Akkusativ: <em>Ich suche eine Maus.</em></p>
      <p>For reference, the other two German cases (used more from A2 onward) are
      <strong>Dativ</strong> ("Wem?" → indirect object) and <strong>Genitiv</strong> ("Wessen?" →
      possession).</p>
    `,
  },
  {
    id: "plural",
    title: "Plural Forms",
    body: `
      <p>German plurals don't follow one simple rule (unlike English "+s"), but common patterns include:</p>
      <table class="gtable">
        <tr><th>Singular</th><th>Plural</th><th>Pattern</th></tr>
        <tr><td>das Passwort</td><td>die Passwörter</td><td>+ "ö" + er</td></tr>
        <tr><td>die E-Mail</td><td>die E-Mails</td><td>+ s (often loanwords)</td></tr>
        <tr><td>der Sohn</td><td>die Söhne</td><td>+ umlaut + e</td></tr>
        <tr><td>das Buch</td><td>die Bücher</td><td>+ umlaut + er</td></tr>
        <tr><td>der Termin</td><td>die Termine</td><td>+ e</td></tr>
        <tr><td>die Nachricht</td><td>die Nachrichten</td><td>+ en</td></tr>
        <tr><td>der Drucker</td><td>die Drucker</td><td>no change</td></tr>
      </table>
      <p>Whatever the pattern, remember: the article for ANY plural noun is always
      <span class="f">die</span>. Compound words (Komposita) take the gender of the
      <strong>last</strong> word: das Auto + der Schlüssel → <strong>der</strong> Autoschlüssel.</p>
    `,
  },
  {
    id: "modal",
    title: "Modal Verbs: können, müssen, wollen, dürfen",
    body: `
      <p>Modal verbs express ability, necessity, desire, or permission, and are followed by
      another verb in its infinitive form, pushed to the end of the sentence.</p>
      <table class="gtable">
        <tr><th>Modal</th><th>Meaning</th><th>Example</th></tr>
        <tr><td>können</td><td>can / to be able to</td><td>Ich kann tanzen. (I can dance.)</td></tr>
        <tr><td>müssen</td><td>must / have to</td><td>Ich muss tanzen. (I have to dance.)</td></tr>
        <tr><td>wollen</td><td>want to</td><td>Ich will tanzen. (I want to dance.)</td></tr>
        <tr><td>dürfen</td><td>may / to be allowed to</td><td>Ich darf tanzen. (I'm allowed to dance.)</td></tr>
      </table>
      <p>To express skill level, combine with adverbs:</p>
      <ul>
        <li><em>Ich kann sehr gut / gut ...</em> — I can ... very well / well</li>
        <li><em>Ich kann ein bisschen ...</em> — I can ... a little</li>
        <li><em>Ich kann nicht so gut / nicht gut ...</em> — I'm not so good / not good at ...</li>
      </ul>
    `,
  },
  {
    id: "word-order",
    title: "Word Order: TeKaMoLo",
    body: `
      <p><strong>TeKaMoLo</strong> is a memory aid for ordering adverbial information in a
      German sentence, when more than one type appears together:</p>
      <table class="gtable">
        <tr><th>Te</th><td>Temporal</td><td>when? <em>(heute, am Montag)</em></td></tr>
        <tr><th>Ka</th><td>Kausal</td><td>why? <em>(wegen..., weil...)</em></td></tr>
        <tr><th>Mo</th><td>Modal</td><td>how? <em>(mit dem Auto, schnell)</em></td></tr>
        <tr><th>Lo</th><td>Lokal</td><td>where? <em>(in Berlin, zu Hause)</em></td></tr>
      </table>
      <p>Example: <em>Ich fahre <u>heute</u> <u>mit dem Auto</u> <u>nach Berlin</u>.</em>
      (Temporal → Modal → Local). Remember: in German, the verb always stays in the 2nd
      position of a main clause, regardless of what comes first.</p>
    `,
  },
  {
    id: "clock",
    title: "Telling Time (Die Uhrzeit)",
    body: `
      <p>German has both a casual ("conversational") and formal way to tell time.
      Casual time uses the 12-hour clock with halves and quarters; formal/written time
      (24-hour clock) is used in schedules and announcements.</p>
      <table class="gtable">
        <tr><th>Time</th><th>Casual</th></tr>
        <tr><td>15:00</td><td>Es ist drei Uhr.</td></tr>
        <tr><td>15:05</td><td>Es ist fünf nach drei.</td></tr>
        <tr><td>15:10</td><td>Es ist zehn nach drei.</td></tr>
        <tr><td>15:15</td><td>Es ist viertel nach drei.</td></tr>
        <tr><td>15:25</td><td>Es ist fünf vor halb vier.</td></tr>
        <tr><td>15:30</td><td>Es ist halb vier.</td></tr>
        <tr><td>15:35</td><td>Es ist fünf nach halb vier.</td></tr>
        <tr><td>15:45</td><td>Es ist viertel vor vier.</td></tr>
        <tr><td>15:50</td><td>Es ist zehn vor vier.</td></tr>
        <tr><td>15:55</td><td>Es ist fünf vor vier.</td></tr>
        <tr><td>16:00</td><td>Es ist vier Uhr.</td></tr>
      </table>
      <p>Key trick: from the half-hour mark onward, Germans count <strong>toward</strong> the
      next hour ("halb vier" = half toward four = 15:30, NOT 4:30!). This trips up a lot of
      learners — practice it in the Clock Game.</p>
      <p>Question forms: <em>Wie viel Uhr ist es? / Wie spät ist es?</em> (What time is it?)</p>
    `,
  },
  {
    id: "questions",
    title: "Question Words (W-Fragen)",
    body: `
      <table class="gtable">
        <tr><th>German</th><th>English</th></tr>
        <tr><td>Wer?</td><td>Who?</td></tr>
        <tr><td>Was?</td><td>What?</td></tr>
        <tr><td>Wo?</td><td>Where?</td></tr>
        <tr><td>Woher?</td><td>Where from?</td></tr>
        <tr><td>Wohin?</td><td>Where to?</td></tr>
        <tr><td>Wann?</td><td>When?</td></tr>
        <tr><td>Warum?</td><td>Why?</td></tr>
        <tr><td>Wie?</td><td>How?</td></tr>
        <tr><td>Wie viel(e)?</td><td>How much/many?</td></tr>
        <tr><td>Welche(r/s)?</td><td>Which?</td></tr>
        <tr><td>Wessen?</td><td>Whose?</td></tr>
      </table>
      <p>In a German question, the verb comes right after the question word
      (2nd position rule still applies): <em>Wo wohnst du?</em> not "Wo du wohnst?"</p>
    `,
  },
];

/* ===================== GAMES DATA ===================== */

// Der/Die/Das sorting game pool
const GENDER_GAME_WORDS = [
  { word: "Tisch", g: "der" }, { word: "Mann", g: "der" }, { word: "Vater", g: "der" },
  { word: "Bruder", g: "der" }, { word: "Onkel", g: "der" }, { word: "Sohn", g: "der" },
  { word: "Keller", g: "der" }, { word: "Garten", g: "der" }, { word: "Spiegel", g: "der" },
  { word: "Kühlschrank", g: "der" }, { word: "Herd", g: "der" }, { word: "Fernseher", g: "der" },
  { word: "Frau", g: "die" }, { word: "Mutter", g: "die" }, { word: "Schwester", g: "die" },
  { word: "Tochter", g: "die" }, { word: "Küche", g: "die" }, { word: "Dusche", g: "die" },
  { word: "Waschmaschine", g: "die" }, { word: "Tasche", g: "die" }, { word: "Vase", g: "die" },
  { word: "Woche", g: "die" }, { word: "Sprache", g: "die" }, { word: "Universität", g: "die" },
  { word: "Kind", g: "das" }, { word: "Mädchen", g: "das" }, { word: "Buch", g: "das" },
  { word: "Jahr", g: "das" }, { word: "Bett", g: "das" }, { word: "Sofa", g: "das" },
  { word: "Fenster", g: "das" }, { word: "Wohnzimmer", g: "das" }, { word: "Schlafzimmer", g: "das" },
  { word: "Geld", g: "das" }, { word: "Land", g: "das" }, { word: "Haus", g: "das" },
];

// Clock game: digital time -> correct German phrase (with distractors generated in app.js)
const CLOCK_GAME = [
  { time: "15:00", phrase: "Es ist drei Uhr." },
  { time: "15:05", phrase: "Es ist fünf nach drei." },
  { time: "15:10", phrase: "Es ist zehn nach drei." },
  { time: "15:15", phrase: "Es ist viertel nach drei." },
  { time: "15:20", phrase: "Es ist zehn vor halb vier." },
  { time: "15:25", phrase: "Es ist fünf vor halb vier." },
  { time: "15:30", phrase: "Es ist halb vier." },
  { time: "15:35", phrase: "Es ist fünf nach halb vier." },
  { time: "15:40", phrase: "Es ist zehn nach halb vier." },
  { time: "15:45", phrase: "Es ist viertel vor vier." },
  { time: "15:50", phrase: "Es ist zehn vor vier." },
  { time: "15:55", phrase: "Es ist fünf vor vier." },
  { time: "16:00", phrase: "Es ist vier Uhr." },
];

// Conjugation puzzle pool: regular verbs only (stem + endings)
const CONJUGATION_VERBS = [
  "heißen", "wohnen", "kommen", "arbeiten", "spielen", "lernen", "leben", "hören", "machen",
];
const CONJ_ENDINGS = { ich: "e", du: "st", "er/sie/es": "t", wir: "en", ihr: "t", "sie/Sie": "en" };

// Plural matching game
const PLURAL_GAME = [
  { s: "das Passwort", p: "die Passwörter" },
  { s: "die E-Mail", p: "die E-Mails" },
  { s: "der Sohn", p: "die Söhne" },
  { s: "das Buch", p: "die Bücher" },
  { s: "der Drucker", p: "die Drucker" },
  { s: "der Termin", p: "die Termine" },
  { s: "die Nachricht", p: "die Nachrichten" },
  { s: "die Tasche", p: "die Taschen" },
  { s: "die Maus", p: "die Mäuse" },
  { s: "der Koffer", p: "die Koffer" },
];
