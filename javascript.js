const text = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');
const nextBtn = document.querySelector('.next-btn');
const newQuoteBtn = document.querySelector('.new-quote-btn');

async function getQuote() {
    try {
        const response = await fetch('https://jsonbin.io');

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log('Ошибка при запуске');
    }
};

function generateNewQuote() {
    text.classList.remove('fadeIn');
    author.classList.remove('fadeIn');

    void text.offsetWidth;
    void author.offsetWidth;

    const quotes = [
        { text: "Всё, что мы делаем, - это просто умение", author: "Автор: Борис Муравьев"},
        { text: "Мы не можем быть без цели", author: "Автор: Джон Уэйн"},
        { text: "Самый лучший способ предсказать будущее — это создать его", author: "Автор: Питер Друкер"},
        { text: "Великие умы обсуждают идеи. Средние умы обсуждают события. Мелкие умы обсуждают людей.", author: "Автор: Элеонора Рузвельт"},
        { text: "Разговоры ничего не стоят. Покажи мне код", author: "Автор: Линус Торвальдс"},
        { text: "Я не потерпел неудачу. Я просто нашел 10 000 способов, которые не работают", author: "Автор: Томас Эдисон"},
        { text: "Любовь — это когда хочешь переживать с кем-то все четыре времени года", author: "Автор: Рэй Брэдбери"},
        { text: "Опыт — это просто слово, которым люди называют свои ошибки", author: "Автор: Оскар Уайльд"},
        { text: "Свобода ничего не стоит, если она не включает в себя свободу ошибаться", author: "Автор: Махатма Ганди"},
        { text: "Весь мир — театр, и люди в нем — актеры", author: "Автор: Уильям Шекспир"},
        { text: "Я не ищу, я нахожу", author: "Автор: Пабло Пикассо"},
        { text: "Слишком многие люди тратят деньги, которые они не заработали, на вещи, которые им не нужны, чтобы произвести впечатление на людей, которые им не нравятся", author: "Автор: Уилл Роджерс"}
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    text.textContent = quote.text;
    author.textContent = quote.author;

    text.classList.add('fadeIn');
    author.classList.add('fadeIn');
}

nextBtn.addEventListener('click', getQuote);
newQuoteBtn.addEventListener('click', generateNewQuote);