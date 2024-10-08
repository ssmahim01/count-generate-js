const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill",
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      person: "Steve Jobs",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      person: "Albert Einstein",
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      person: "John D. Rockefeller",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt",
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      person: "Lao Tzu",
    },
    {
      quote:
        "Success is walking from failure to failure with no loss of enthusiasm.",
      person: "Winston Churchill",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela",
    },

    {
        quote: "Love is happiness, love never dies",
        person: "Mahim Zayn"
    }
  ];

document.querySelector('#btn').addEventListener('click', function(){
    let quote = document.querySelector('#quote');
    const name = document.getElementById('person');
    
    const quoteMath = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[quoteMath].quote;
    name.innerText = quotes[quoteMath].person;
});