//First declare the array Motivationnal and Funy with theirs quotes like objects
const motivationalQuotes = [
    {
        name: "Jack Ma",
        quote: "If you don't give up, you still have a chance. Giving up is the greatest failure.",
        Image: "Jack Ma"
    },
    {
        name: "Winston Churchill",
        quote: "I have nothing to offer but blood, toll, tears and sweat.",
        Image: "Winston Churchill"
    },
    {
        name: "Albert Einstein",
        quote: "Education is what remains after one has learned iin school",
        Image: "Albert Einstein"
    },
    {
        name: "Shawn Corey Carter, Jay-Z",
        quote: "My first show, I forget the lyrics. You have to have such a strong believe in yourself that you can quiet out all the outside noise.",
        Image: "Shawn Corey Carter, Jay-Z"
    },
    {
        name: "Michael Jordan",
        quote: "I can accept failure, everyone fails at something. But i can't accept not trying again.",
        Image: "Michael Jordan"
    },
    {
        name: "Nelson Mandela",
        quote: "A winner is a dreamer who never gives up.",
        Image: "Nelson Mandela"
    },
    {
        name: "Oprah Winfrey",
        quote: "Be thankful for what you have; you'll end up having more.",
        Image: "Oprah Winfrey"
    },{
        name: "Beyoncé",
        quote: "Be healthy and take care of yourself, but be happy with the beautiful things that make you, You.",
        Image: "Beyoncé"
    },{
        name: "Stephen Hawking",
        quote: "However difficult life may seem, there is always something you can do, and succeed at. It matters that you don't just give up.",
        Image: "Stephen Hawking"
    },{
        name: "Bill Gates",
        quote: "Don't compare yourself with anyone in this world. If you dos so, you are insulting yourself.",
        Image: "Bill Gates"
    },{
        name: "Denzel Washington",
        quote: "Do what you have to do, to do what you want to do.",
        Image: "Denzel Washington"
    },
    {
        name: "Elon Munsk",
        quote: "You need to be sort of very rigourous in your self-analysis.",
        Image: "Elon Munsk"
    },
    {
        name: "Dalai Lama",
        quote: "The goal is not to be better than the other man, but your previous self.",
        Image: "Dalai Lama"
    },
    {
        name: "Marshall Mathers, Eminem",
        quote: "The first time I grabbed a mic, I got booed. I just remember it being so traumatic.",
        Image: "Marshall Mathers, Eminem"
    },
    {
        name: "Mark Zuckerberg",
        quote: "Purpose is that feeling that you are a part of something bigger than yourself.",
        Image: "Mark Zuckerberg"
    },
];


const funnyQuotes = [
    {
        name: "Despicable Me",
        quote: "Singing in the shower is all fun and games until you get shampoo in your mouth, then it just becomes a soap opera.",
        Image: ""
    },
    {
        name: "Fruits",
        quote: "The broccoli says 'I look like a small tree', the mushroom says 'I look like an umbrella', the walnut says 'I look like a brain', and the banana says 'Can we please change the subject ?",
        Image: "Fruits"
    },
    {
        name: "Laziness",
        quote: "If I won the award for laziness, I would send somebody to pick it up for me.",
        Image: "Laziness"
    },
    {
        name: "Nice",
        quote: "The biggest lie I tell myself is 'I don't need to write that down, I'll remember it.",
        Image: "Nice"
    },
    {
        name: "SMILE",
        quote: "LIFE IS SHORT, SMILE WHILE YOU STILL HAVE TEETH.",
        Image: "SMILE"
    },
    {
        name: "Phones",
        quote: "I finally realized that people are prisonners of their phones... that's why it's called a 'cell' phone.",
        Image: "Phones"
    },
    {
        name: "SMILE2",
        quote: "Do not take life too seriously. You will never get out of it alive.",
        Image: "SMILE2"
    },
    {
        name: "Brain",
        quote: "Maybe if we tell people the brain is an app, they will start using it.",
        Image: "Brain"
    },
    {
        name: "Taste",
        quote: "It's okay if you don't like me. Not everyone has good taste.",
        Image: "Taste"
    },
    {
        name: "UGLY",
        quote: "If Someone calls you 'UGLY' have a good comeback and say 'EXCUSE ME, I AM NOT A MIRROR'.",
        Image: "UGLY"
    },
    {
        name: "People",
        quote: "People say nothing is impossible, but i do nothing every day.",
        Image: "People"
    },
    {
        name: "Nothing",
        quote: "I just finally discovered what's wrong with my brain: on the left side there is nothing right and on the right side, there is nothing left.",
        Image: "Nothing"
    },
    {
        name: "Potato",
        quote: "I may look like a potato now, but one day I'll turn into fries and you'll want me then.",
        Image: "Potato"
    },
    {
        name: "My mind",
        quote: "My mind is like my web browser. 19 tabs are open, 3 are frozen and I have no idea where the music is coming from. ",
        Image: "My mind"
    },
];

//Here we merge arrays motivationnal and funny (quotes)
const quotes = motivationalQuotes.concat(funnyQuotes);


//Select the Element in the document matching the specified selector (button, quote, image) 
const quoteBtn = document.querySelector("#quoteBtn");
const quoteTxt = document.querySelector("#quote");

//Generate quotes by clicking on the button generate
quoteBtn.addEventListener("click", generateQuote);

//Here The function to generate motivatinal or funny quotes randomly 
function generateQuote() {
    //Initialise an empty array to contain the generated quote 
    let genQuotes = [];
    //Select the quote type and the number of the quote enter by the user
    let motivational = document.getElementById("motivational");
    let funny = document.getElementById("funny");
    let count = document.querySelector("#count").value;
    //Generate motivational quotes if the user select motivational
    if(motivational.checked==true)
    {
        //select the number of quote selected by the user 
        for (let index = 0; index < count; index++) {
            // Generate a random number, multiply by the number of the elements in the array and convert it to a whole number
            let number = Math.floor(Math.random() * motivationalQuotes.length); 
            //Add the selected quote which correspond to the generated index (number = quote in the array)  
            genQuotes.push(motivationalQuotes[number])
        }
    }
    //Generate funny quotes if the user select funny
    else if(funny.checked==true)
    {
        //select the number of quote selected by the user 
        for (let index = 0; index < count; index++) {
            // Generate a random number, multiply by the number of the elements in the array and convert it to a whole number
            let number = Math.floor(Math.random() * funnyQuotes.length); 
            //Add the selected quote which correspond to the generated index (number = quote in the array)    
            genQuotes.push(funnyQuotes[number])
        }
    }
    
// We call the function displayQuote to display the quotes     
    displayQuote(genQuotes)
}
 
//We declare the function displayQuote to display the generated quote
function displayQuote(genQuotes) {
    console.log(genQuotes);
    //Empty quote text div
    quoteTxt.innerHTML = "";
    //Initialise a string to contain the generated quote
    let quoteString = ""; 
    //Converts the generated quotes to HTML
    genQuotes.forEach(quote => {
        quoteString += quote.quote + "<br /><br />" ;
        
    });
    //Insert the new HTML quotes in the quote text div
    quoteTxt.innerHTML = quoteString;
}