const memes = [
    "https://i.redd.it/a0v87gwzoge61.jpg",
    "https://i.redd.it/q29egav34ee61.jpg",
    "https://i.redd.it/iij16swxjie61.jpg",
    "https://i.redd.it/vek7dm2hrge61.jpg",
    "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
    "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
    "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
    "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
    "https://images.interestingengineering.com/1200x675/filters:format(webp)/img/iea/yrwQvLJbON/programmer-memes.jpg",
    "https://programmerhumor.io/wp-content/uploads/2022/08/programmerhumor-io-frontend-memes-programming-memes-dbb85e750b54722-758x664.jpg",
    "https://i.redd.it/cv97hv0ih5991.jpg",
    "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf4fa7b530b77f3bbe0_6GnQQXGutBkLu762PaVF-Tyy8GptTL8C3B0g-P7s0umrlPwMLAZ0JFRk7KE4BVXXSDp6gAnnMF93ArAuk2TUtLHrXDgOeT-e1wCbtDwKl6vrypEm1pY74tDuC3Oa7WxUlwh3_hU1.png",
    "https://www.siliconrepublic.com/wp-content/uploads/2015/05/Coding.png",
    "https://static.demilked.com/wp-content/uploads/2021/08/612497594e7a4-1392459191353286656-png__700.jpg",
    "https://miro.medium.com/v2/resize:fit:1280/0*nviRxtObtQsUTyeu",
    "https://programmerhumor.io/wp-content/uploads/2021/12/programmerhumor-io-frontend-memes-programming-memes-03a0a8475e62a82-758x501.png",
    "https://programmerhumor.io/wp-content/uploads/2022/02/programmerhumor-io-stackoverflow-memes-frontend-memes-8d768bcc21d9c0e-758x777.jpg",
    "https://miro.medium.com/v2/resize:fit:1400/0*U9lU6ypzkXJf8Bi_.png",
    "https://i.pinimg.com/originals/e5/bc/de/e5bcde661d1f94d5e46c1ef56da00fbe.png",
    "https://www.devtopics.com/wp-content/uploads/2008/05/comic.jpg",
];

const jokes = [
    "This statement",
    "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "All programmers are playwrights, and all computers are lousy actors.",
    "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
    "The generation of random numbers is too important to be left to chance.",
    "Debugging: Removing the needles from the haystack.",
    "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
    "There are two ways to write error-free programs; only the third one works.",
    "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
    "Why did the edge server go bankrupt?\
    Because it ran out of cache.",
    "How many developers does it take to screw in a lightbulb?\
    None. It’s a hardware problem.",
    "Why did the private classes break up?\
    Because they never saw each other.",
    "Why did the Java developer teach his young kids about single quotes?\
    Because they build character.",
    "Why do programmers confuse Christmas with Halloween?\
    Because OCT 31 is the same as DEC 25.",
    "Why do most Java programmers wear glasses?\
    Because they don’t see sharp.",
    "What’s the first step in understanding recursion?\
    To understand recursion, you must first understand recursion.",
    "Why did the Java developer quit his job?\
    Because he didn’t get arrays.",
    "I just saw my life flash before my eyes and all I could see was a close tag…",
    "; The ultimate hide and seek champion",
    "What did the Java Code say to the C code? You've got no class",
    "Why do programmers prefer dark mode? Because light attracts bugs"
];

const quotes = [
    {
    quote:
        "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    },
    {
    quote:
        "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
    },
    {
    quote:
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
    },
    {
    quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    },
    {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
    },
    {
    quote:
        "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
    },
    {
    quote:
        "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
    },
    {
    quote:
        "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
    },
    { 
    quote:
        "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
    },
    {
    quote:
        "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
    },
    {
    quote:
        "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
    },
    {
    quote:
        "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
    },
];

const riddles = [
    {
    question:
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
    },
    {
    question:
        "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
    },
    {
    question:
        "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
    },
    {
    question:
        "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
    },
    {
    question:
        "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
    },
    {
    question:
        "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire word signifies a great woman. What is the word?",
    answer: "Heroine",
    },
    {
    question:
        "What month of the year has 28 days?",    
    answer: "all of em",
    },
    {
    question:
        "What has to be broken before you can use it?",
    answer: "An egg",
    },
    {
    question:
        "What is full of holes but still holds water?",
    answer: "a sponge",
    },
    {
    question:
        "You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?",
    answer: "The match",
    },
    {
    question:
        "I have branches, but no fruit, trunk or leaves. What am I?",
    answer: "A bank",
    },
];