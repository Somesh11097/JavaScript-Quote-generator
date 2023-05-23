//varibales


let btn = document.querySelector("#new-quote");

let quote = document.querySelector(".quote");

let person = document.querySelector(".person");

const quotes = [{
    quote: "I'm not here to be perfect, I'm here to be real.",
    person: "Lady Gaga "
}, {
    quote: "I'm not interested in money. I just want to be wonderful",
    person: "Marilyn Monroe "
}, {
    quote: "The only thing that feels better than winning is winning when nobody thought you could.",
    person: "Hank Aaron "
}, {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill "
}, {
    quote: "If you can dream it, you can do it.",
    person: "Walt Disney"
},
];


btn.addEventListener("click", function(){

    // math.random doesnt gives the qhole number thats why we are using floor method
    let random = Math.floor(Math.random() * quotes.length); 

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;


})