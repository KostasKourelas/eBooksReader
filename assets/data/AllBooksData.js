const AllBooksData = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    image: require("../images/things-fall-apart.png"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    pages: 209,
    title: "Things Fall Aspart",
    year: 1958,
    category: "Novels"
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    image: require("../images/fairy-tales.jpg"),
    language: "Danish",
    synopsis: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
    category: "Novels"
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    image: require("../images/the-divine-comedy.jpg"),
    language: "Italian",
    synopsis: "https://en.wikipedia.org/wiki/Divine_Comedy",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
    category: "Novels"
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    image: require("../images/the-epic-of-gilgamesh.jpg"),
    language: "Akkadian",
    synopsis: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700,
    category: "Novels"
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",
    image: require("../images/the-book-of-job.jpg"),
    language: "Hebrew",
    synopsis: "https://en.wikipedia.org/wiki/Book_of_Job",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
    category: "Novels"
  },
  {
    author: "Unknown",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    image: require("../images/one-thousand-and-one-nights.jpg"),
    language: "Arabic",
    synopsis: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
    category: "Novels"
  },
  {
    author: "Unknown",
    country: "Iceland",
    image: require("../images/njals-saga.jpg"),
    language: "Old Norse",
    synopsis: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
    pages: 384,
    title: "Njál's Saga",
    year: 1350,
    category: "Novels"
  },
  {
    author: "Jane Austen",
    country: "United Kingdom",
    image: require("../images/pride-and-prejudice.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
    category: "Novels"
  },
  {
    author: "Honoré de Balzac",
    country: "France",
    image: require("../images/le-pere-goriot.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
    pages: 443,
    title: "Le Père Goriot",
    year: 1835,
    category: "Novels"
  },
  {
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    image: require("../images/molloy-malone-dies-the-unnamable.jpg"),
    language: "French, English",
    synopsis: "https://en.wikipedia.org/wiki/Molloy_(novel)",
    pages: 256,
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952,
    category: "Novels"
  },
  {
    author: "Giovanni Boccaccio",
    country: "Italy",
    image: require("../images/the-decameron.jpg"),
    language: "Italian",
    synopsis: "https://en.wikipedia.org/wiki/The_Decameron",
    pages: 1024,
    title: "The Decameron",
    year: 1351,
    category: "Novels"
  },
  {
    author: "Jorge Luis Borges",
    country: "Argentina",
    image: require("../images/ficciones.jpg"),
    language: "Spanish",
    synopsis: "https://en.wikipedia.org/wiki/Ficciones",
    pages: 224,
    title: "Ficciones",
    year: 1965
  },
  {
    author: "Emily Brontë",
    country: "United Kingdom",
    image: require("../images/wuthering-heights.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Wuthering_Heights",
    pages: 342,
    title: "Wuthering Heights",
    year: 1847
  },
  {
    author: "Albert Camus",
    country: "Algeria, French Empire",
    image: require("../images/l-etranger.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/The_Stranger_(novel)",
    pages: 185,
    title: "The Stranger",
    year: 1942
  },
  {
    author: "Paul Celan",
    country: "Romania, France",
    image: require("../images/poems-paul-celan.jpg"),
    language: "German",
    synopsis: "",
    pages: 320,
    title: "Poems",
    year: 1952
  },
  {
    author: "Louis-Ferdinand Céline",
    country: "France",
    image: require("../images/voyage-au-bout-de-la-nuit.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night",
    pages: 505,
    title: "Journey to the End of the Night",
    year: 1932
  },
  {
    author: "Miguel de Cervantes",
    country: "Spain",
    image: require("../images/don-quijote-de-la-mancha.jpg"),
    language: "Spanish",
    synopsis: "https://en.wikipedia.org/wiki/Don_Quixote",
    pages: 1056,
    title: "Don Quijote De La Mancha",
    year: 1610
  },
  {
    author: "Geoffrey Chaucer",
    country: "England",
    image: require("../images/the-canterbury-tales.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
    pages: 544,
    title: "The Canterbury Tales",
    year: 1450
  },
  {
    author: "Anton Chekhov",
    country: "Russia",
    image: require("../images/stories-of-anton-chekhov.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
    pages: 194,
    title: "Stories",
    year: 1886
  },
  {
    author: "Joseph Conrad",
    country: "United Kingdom",
    image: require("../images/nostromo.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Nostromo",
    pages: 320,
    title: "Nostromo",
    year: 1904
  },
  {
    author: "Charles Dickens",
    country: "United Kingdom",
    image: require("../images/great-expectations.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Great_Expectations",
    pages: 194,
    title: "Great Expectations",
    year: 1861
  },
  {
    author: "Denis Diderot",
    country: "France",
    image: require("../images/jacques-the-fatalist.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/Jacques_the_Fatalist",
    pages: 596,
    title: "Jacques the Fatalist",
    year: 1796
  },
  {
    author: "Alfred Döblin",
    country: "Germany",
    image: require("../images/berlin-alexanderplatz.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz",
    pages: 600,
    title: "Berlin Alexanderplatz",
    year: 1929
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    image: require("../images/crime-and-punishment.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/Crime_and_Punishment",
    pages: 551,
    title: "Crime and Punishment",
    year: 1866
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    image: require("../images/the-idiot.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/The_Idiot",
    pages: 656,
    title: "The Idiot",
    year: 1869
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    image: require("../images/the-possessed.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)",
    pages: 768,
    title: "The Possessed",
    year: 1872
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    image: require("../images/the-brothers-karamazov.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
    pages: 824,
    title: "The Brothers Karamazov",
    year: 1880
  },
  {
    author: "George Eliot",
    country: "United Kingdom",
    image: require("../images/middlemarch.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Middlemarch",
    pages: 800,
    title: "Middlemarch",
    year: 1871
  },
  {
    author: "Ralph Ellison",
    country: "United States",
    image: require("../images/invisible-man.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Invisible_Man",
    pages: 581,
    title: "Invisible Man",
    year: 1952
  },
  {
    author: "Euripides",
    country: "Greece",
    image: require("../images/medea.jpg"),
    language: "Greek",
    synopsis: "https://en.wikipedia.org/wiki/Medea_(play)",
    pages: 104,
    title: "Medea",
    year: -431
  },
  {
    author: "William Faulkner",
    country: "United States",
    image: require("../images/absalom-absalom.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Absalom,_Absalom!",
    pages: 313,
    title: "Absalom, Absalom!",
    year: 1936
  },
  {
    author: "William Faulkner",
    country: "United States",
    image: require("../images/the-sound-and-the-fury.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury",
    pages: 326,
    title: "The Sound and the Fury",
    year: 1929
  },
  {
    author: "Gustave Flaubert",
    country: "France",
    image: require("../images/madame-bovary.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/Madame_Bovary",
    pages: 528,
    title: "Madame Bovary",
    year: 1857
  },
  {
    author: "Gustave Flaubert",
    country: "France",
    image: require("../images/l-education-sentimentale.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/Sentimental_Education",
    pages: 606,
    title: "Sentimental Education",
    year: 1869
  },
  {
    author: "Federico García Lorca",
    country: "Spain",
    image: require("../images/gypsy-ballads.jpg"),
    language: "Spanish",
    synopsis: "https://en.wikipedia.org/wiki/Gypsy_Ballads",
    pages: 218,
    title: "Gypsy Ballads",
    year: 1928
  },
  {
    author: "Gabriel García Márquez",
    country: "Colombia",
    image: require("../images/one-hundred-years-of-solitude.jpg"),
    language: "Spanish",
    synopsis: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
    pages: 417,
    title: "One Hundred Years of Solitude",
    year: 1967
  },
  {
    author: "Gabriel García Márquez",
    country: "Colombia",
    image: require("../images/love-in-the-time-of-cholera.jpg"),
    language: "Spanish",
    synopsis: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera",
    pages: 368,
    title: "Love in the Time of Cholera",
    year: 1985
  },
  {
    author: "Johann Wolfgang von Goethe",
    country: "Saxe-Weimar",
    image: require("../images/faust.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
    pages: 158,
    title: "Faust",
    year: 1832
  },
  {
    author: "Nikolai Gogol",
    country: "Russia",
    image: require("../images/dead-souls.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/Dead_Souls",
    pages: 432,
    title: "Dead Souls",
    year: 1842
  },
  {
    author: "Günter Grass",
    country: "Germany",
    image: require("../images/the-tin-drum.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/The_Tin_Drum",
    pages: 600,
    title: "The Tin Drum",
    year: 1959
  },
  {
    author: "João Guimarães Rosa",
    country: "Brazil",
    image: require("../images/the-devil-to-pay-in-the-backlands.jpg"),
    language: "Portuguese",
    synopsis: "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands",
    pages: 494,
    title: "The Devil to Pay in the Backlands",
    year: 1956
  },
  {
    author: "Knut Hamsun",
    country: "Norway",
    image: require("../images/hunger.jpg"),
    language: "Norwegian",
    synopsis: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)",
    pages: 176,
    title: "Hunger",
    year: 1890
  },
  {
    author: "Ernest Hemingway",
    country: "United States",
    image: require("../images/the-old-man-and-the-sea.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
    pages: 128,
    title: "The Old Man and the Sea",
    year: 1952
  },
  {
    author: "Homer",
    country: "Greece",
    image: require("../images/the-iliad-of-homer.jpg"),
    language: "Greek",
    synopsis: "https://en.wikipedia.org/wiki/Iliad",
    pages: 608,
    title: "Iliad",
    year: -735
  },
  {
    author: "Homer",
    country: "Greece",
    image: require("../images/the-odyssey-of-homer.jpg"),
    language: "Greek",
    synopsis: "https://en.wikipedia.org/wiki/Odyssey",
    pages: 374,
    title: "Odyssey",
    year: -800
  },
  {
    author: "Henrik Ibsen",
    country: "Norway",
    image: require("../images/a-Dolls-house.jpg"),
    language: "Norwegian",
    synopsis: "https://en.wikipedia.org/wiki/A_Doll%27s_House",
    pages: 68,
    title: "A Doll's House",
    year: 1879
  },
  {
    author: "James Joyce",
    country: "Irish Free State",
    image: require("../images/ulysses.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Ulysses_(novel)",
    pages: 228,
    title: "Ulysses",
    year: 1922
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    image: require("../images/stories-of-franz-kafka.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories",
    pages: 488,
    title: "Stories",
    year: 1924
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    image: require("../images/the-trial.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/The_Trial",
    pages: 160,
    title: "The Trial",
    year: 1925
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    image: require("../images/the-castle.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/The_Castle_(novel)",
    pages: 352,
    title: "The Castle",
    year: 1926
  },
  {
    author: "Kālidāsa",
    country: "India",
    image: require("../images/the-recognition-of-shakuntala.jpg"),
    language: "Sanskrit",
    synopsis: "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam",
    pages: 147,
    title: "The recognition of Shakuntala",
    year: 150
  },
  {
    author: "Yasunari Kawabata",
    country: "Japan",
    image: require("../images/the-sound-of-the-mountain.jpg"),
    language: "Japanese",
    synopsis: "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain",
    pages: 288,
    title: "The Sound of the Mountain",
    year: 1954
  },
  {
    author: "Nikos Kazantzakis",
    country: "Greece",
    image: require("../images/zorba-the-greek.jpg"),
    language: "Greek",
    synopsis: "https://en.wikipedia.org/wiki/Zorba_the_Greek",
    pages: 368,
    title: "Zorba the Greek",
    year: 1946
  },
  {
    author: "D. H. Lawrence",
    country: "United Kingdom",
    image: require("../images/sons-and-lovers.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Sons_and_Lovers",
    pages: 432,
    title: "Sons and Lovers",
    year: 1913
  },
  {
    author: "Halldór Laxness",
    country: "Iceland",
    image: require("../images/independent-people.jpg"),
    language: "Icelandic",
    synopsis: "https://en.wikipedia.org/wiki/Independent_People",
    pages: 470,
    title: "Independent People",
    year: 1934
  },
  {
    author: "Giacomo Leopardi",
    country: "Italy",
    image: require("../images/poems-giacomo-leopardi.jpg"),
    language: "Italian",
    synopsis: "",
    pages: 184,
    title: "Poems",
    year: 1818
  },
  {
    author: "Doris Lessing",
    country: "United Kingdom",
    image: require("../images/the-golden-notebook.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/The_Golden_Notebook",
    pages: 688,
    title: "The Golden Notebook",
    year: 1962
  },
  {
    author: "Astrid Lindgren",
    country: "Sweden",
    image: require("../images/pippi-longstocking.jpg"),
    language: "Swedish",
    synopsis: "https://en.wikipedia.org/wiki/Pippi_Longstocking",
    pages: 160,
    title: "Pippi Longstocking",
    year: 1945
  },
  {
    author: "Lu Xun",
    country: "China",
    image: require("../images/diary-of-a-madman.jpg"),
    language: "Chinese",
    synopsis: "https://en.wikipedia.org/wiki/A_Madman%27s_Diary",
    pages: 389,
    title: "Diary of a Madman",
    year: 1918
  },
  {
    author: "Naguib Mahfouz",
    country: "Egypt",
    image: require("../images/children-of-gebelawi.jpg"),
    language: "Arabic",
    synopsis: "https://en.wikipedia.org/wiki/Children_of_Gebelawi",
    pages: 355,
    title: "Children of Gebelawi",
    year: 1959
  },
  {
    author: "Thomas Mann",
    country: "Germany",
    image: require("../images/buddenbrooks.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/Buddenbrooks",
    pages: 736,
    title: "Buddenbrooks",
    year: 1901
  },
  {
    author: "Thomas Mann",
    country: "Germany",
    image: require("../images/the-magic-mountain.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/The_Magic_Mountain",
    pages: 720,
    title: "The Magic Mountain",
    year: 1924
  },
  {
    author: "Herman Melville",
    country: "United States",
    image: require("../images/moby-dick.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Moby-Dick",
    pages: 378,
    title: "Moby Dick",
    year: 1851
  },
  {
    author: "Michel de Montaigne",
    country: "France",
    image: require("../images/essais.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/Essays_(Montaigne)",
    pages: 404,
    title: "Essays",
    year: 1595
  },
  {
    author: "Elsa Morante",
    country: "Italy",
    image: require("../images/history.jpg"),
    language: "Italian",
    synopsis: "https://en.wikipedia.org/wiki/History_(novel)",
    pages: 600,
    title: "History",
    year: 1974
  },
  {
    author: "Toni Morrison",
    country: "United States",
    image: require("../images/beloved.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Beloved_(novel)",
    pages: 321,
    title: "Beloved",
    year: 1987
  },
  {
    author: "Murasaki Shikibu",
    country: "Japan",
    image: require("../images/the-tale-of-genji.jpg"),
    language: "Japanese",
    synopsis: "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
    pages: 1360,
    title: "The Tale of Genji",
    year: 1006
  },
  {
    author: "Robert Musil",
    country: "Austria",
    image: require("../images/the-man-without-qualities.jpg"),
    language: "German",
    synopsis: "https://en.wikipedia.org/wiki/The_Man_Without_Qualities",
    pages: 365,
    title: "The Man Without Qualities",
    year: 1931
  },
  {
    author: "Vladimir Nabokov",
    country: "Russia/United States",
    image: require("../images/lolita.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Lolita",
    pages: 317,
    title: "Lolita",
    year: 1955
  },
  {
    author: "George Orwell",
    country: "United Kingdom",
    image: require("../images/nineteen-eighty-four.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
    pages: 272,
    title: "Nineteen Eighty-Four",
    year: 1949
  },
  {
    author: "Ovid",
    country: "Roman Empire",
    image: require("../images/the-metamorphoses-of-ovid.jpg"),
    language: "Classical Latin",
    synopsis: "https://en.wikipedia.org/wiki/Metamorphoses",
    pages: 576,
    title: "Metamorphoses",
    year: 100
  },
  {
    author: "Fernando Pessoa",
    country: "Portugal",
    image: require("../images/the-book-of-disquiet.jpg"),
    language: "Portuguese",
    synopsis: "https://en.wikipedia.org/wiki/The_Book_of_Disquiet",
    pages: 272,
    title: "The Book of Disquiet",
    year: 1928
  },
  {
    author: "Edgar Allan Poe",
    country: "United States",
    image: require("../images/tales-and-poems-of-edgar-allan-poe.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales",
    pages: 842,
    title: "Tales",
    year: 1950
  },
  {
    author: "Marcel Proust",
    country: "France",
    image: require("../images/a-la-recherche-du-temps-perdu.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time",
    pages: 2408,
    title: "In Search of Lost Time",
    year: 1920
  },
  {
    author: "François Rabelais",
    country: "France",
    image: require("../images/gargantua-and-pantagruel.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel",
    pages: 623,
    title: "Gargantua and Pantagruel",
    year: 1533
  },
  {
    author: "Juan Rulfo",
    country: "Mexico",
    image: require("../images/pedro-paramo.jpg"),
    language: "Spanish",
    synopsis: "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo",
    pages: 124,
    title: "Pedro Páramo",
    year: 1955
  },
  {
    author: "Rumi",
    country: "Sultanate of Rum",
    image: require("../images/the-masnavi.jpg"),
    language: "Persian",
    synopsis: "https://en.wikipedia.org/wiki/Masnavi",
    pages: 438,
    title: "The Masnavi",
    year: 1236
  },
  {
    author: "Salman Rushdie",
    country: "United Kingdom, India",
    image: require("../images/midnights-children.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Midnight%27s_Children",
    pages: 536,
    title: "Midnight's Children",
    year: 1981
  },
  {
    author: "Saadi",
    country: "Persia, Persian Empire",
    image: require("../images/bostan.jpg"),
    language: "Persian",
    synopsis: "https://en.wikipedia.org/wiki/Bustan_(book)",
    pages: 298,
    title: "Bostan",
    year: 1257
  },
  {
    author: "Tayeb Salih",
    country: "Sudan",
    image: require("../images/season-of-migration-to-the-north.jpg"),
    language: "Arabic",
    synopsis: "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North",
    pages: 139,
    title: "Season of Migration to the North",
    year: 1966
  },
  {
    author: "José Saramago",
    country: "Portugal",
    image: require("../images/blindness.jpg"),
    language: "Portuguese",
    synopsis: "https://en.wikipedia.org/wiki/Blindness_(novel)",
    pages: 352,
    title: "Blindness",
    year: 1995
  },
  {
    author: "William Shakespeare",
    country: "England",
    image: require("../images/hamlet.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Hamlet",
    pages: 432,
    title: "Hamlet",
    year: 1603
  },
  {
    author: "William Shakespeare",
    country: "England",
    image: require("../images/king-lear.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/King_Lear",
    pages: 384,
    title: "King Lear",
    year: 1608
  },
  {
    author: "William Shakespeare",
    country: "England",
    image: require("../images/othello.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Othello",
    pages: 314,
    title: "Othello",
    year: 1609
  },
  {
    author: "Sophocles",
    country: "Greece",
    image: require("../images/oedipus-the-king.jpg"),
    language: "Greek",
    synopsis: "https://en.wikipedia.org/wiki/Oedipus_the_King",
    pages: 88,
    title: "Oedipus the King",
    year: -430
  },
  {
    author: "Stendhal",
    country: "France",
    image: require("../images/le-rouge-et-le-noir.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/The_Red_and_the_Black",
    pages: 576,
    title: "The Red and the Black",
    year: 1830
  },
  {
    author: "Laurence Sterne",
    country: "England",
    image: require("../images/the-life-and-opinions-of-tristram-shandy.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman",
    pages: 640,
    title: "The Life And Opinions of Tristram Shandy",
    year: 1760
  },
  {
    author: "Italo Svevo",
    country: "Italy",
    image: require("../images/confessions-of-zeno.jpg"),
    language: "Italian",
    synopsis: "https://en.wikipedia.org/wiki/Zeno%27s_Conscience",
    pages: 412,
    title: "Confessions of Zeno",
    year: 1923
  },
  {
    author: "Jonathan Swift",
    country: "Ireland",
    image: require("../images/gullivers-travels.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
    pages: 178,
    title: "Gulliver's Travels",
    year: 1726
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    image: require("../images/war-and-peace.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/War_and_Peace",
    pages: 1296,
    title: "War and Peace",
    year: 1867
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    image: require("../images/anna-karenina.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/Anna_Karenina",
    pages: 864,
    title: "Anna Karenina",
    year: 1877
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    image: require("../images/the-death-of-ivan-ilyich.jpg"),
    language: "Russian",
    synopsis: "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich",
    pages: 92,
    title: "The Death of Ivan Ilyich",
    year: 1886
  },
  {
    author: "Mark Twain",
    country: "United States",
    image: require("../images/the-adventures-of-huckleberry-finn.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn",
    pages: 224,
    title: "The Adventures of Huckleberry Finn",
    year: 1884
  },
  {
    author: "Valmiki",
    country: "India",
    image: require("../images/ramayana.jpg"),
    language: "Sanskrit",
    synopsis: "https://en.wikipedia.org/wiki/Ramayana",
    pages: 152,
    title: "Ramayana",
    year: -450
  },
  {
    author: "Virgil",
    country: "Roman Empire",
    image: require("../images/the-aeneid.jpg"),
    language: "Classical Latin",
    synopsis: "https://en.wikipedia.org/wiki/Aeneid",
    pages: 442,
    title: "The Aeneid",
    year: -23
  },
  {
    author: "Vyasa",
    country: "India",
    image: require("../images/the-mahab-harata.jpg"),
    language: "Sanskrit",
    synopsis: "https://en.wikipedia.org/wiki/Mahabharata",
    pages: 276,
    title: "Mahabharata",
    year: -700
  },
  {
    author: "Walt Whitman",
    country: "United States",
    image: require("../images/leaves-of-grass.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Leaves_of_Grass",
    pages: 152,
    title: "Leaves of Grass",
    year: 1855
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    image: require("../images/mrs-dalloway.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/Mrs_Dalloway",
    pages: 216,
    title: "Mrs Dalloway",
    year: 1925
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    image: require("../images/to-the-lighthouse.jpg"),
    language: "English",
    synopsis: "https://en.wikipedia.org/wiki/To_the_Lighthouse",
    pages: 209,
    title: "To the Lighthouse",
    year: 1927
  },
  {
    author: "Marguerite Yourcenar",
    country: "France/Belgium",
    image: require("../images/memoirs-of-hadrian.jpg"),
    language: "French",
    synopsis: "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian",
    pages: 408,
    title: "Memoirs of Hadrian",
    year: 1951
  }
]

export default AllBooksData;