
var beginning = [
    "Johnny ",
    "Matt ",
    "Frank ",
    "Joey ",
    "Brad "
];

var middle = [
    "likes ",
    "loves ",
    "hates ",
    "enjoys ",
    "adores "
];

var end = [
    "traveling.",
    "sports.",
    "food.",
    "smoking.",
    "drinking."
];



var quoteSucces = [
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts."
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation."
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it."
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have."
  },
  {
    quote: "If you are not willing to risk the usual, you will have to settle for the ordinary."
  },
  {
    quote: "Opportunities don't happen. You create them."
  },
  {
    quote: "Don't be afraid to give up the good to go for the great."
  },
  {
    quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better."
  },
  {
    quote: "Never give in except to convictions of honor and good sense."
  },
  {
    quote: "Stop chasing the money and start chasing the passion."
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm."
  },
  {
    quote: "The ones who are crazy enough to think they can change the world, are the ones that do."
  },
  {
    quote: "All progress takes place outside the comfort zone."
  },
  {
    quote: "Don't let the fear of losing be greater than the excitement of winning."
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today."
  }
];

var quoteDreams = [
  {
    quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure."
  },
  {
    quote: "A dream you dream alone is only a dream. A dream you dream together is reality."
  },
  {
    quote: "All our dreams can come true, if we have the courage to pursue them."
  },
  {
    quote: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly."
  },
  {
    quote: "Dream no small dreams for they have no power to move the hearts of men."
  },
  {
    quote: "A dream doesn't become reality through magic; it takes sweat, determination and hard work."
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams."
  },
  {
    quote: "Yes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world."
  },
  {
    quote: "Dreams are illustrations... from the book your soul is writing about you."
  },
  {
    quote: "Dreams are excursions into the limbo of things, a semi-deliverance from the human prison. "
  },
  {
    quote: "Keep your heart open to dreams. For as long as there's a dream, there is hope, and as long as there is hope, there is joy in living."
  },
  {
    quote: "Man, alone, has the power to transform his thoughts into physical reality; man, alone, can dream and make his dreams come true."
  },
  {
    quote: "When you stop having dreams and ideals -- well, you might as well stop altogether. "
  },
  {
    quote: "Dreams are today's answers to tomorrow's questions."
  },
  {
    quote: "Dreaming permits each and every one of us to be quietly and safely insane every night of our lives."
  }
];


function genQuote() {
 
  document.getElementById("text5").innerHTML = "";
  document.getElementById("text4").innerHTML = "";
  document.getElementById("text3").innerHTML = "";
  document.getElementById("text2").innerHTML = "";
  document.getElementById("text1").innerHTML = "";

  quote = "";
  var beginningLength = beginning.length;
  quote = beginning[Math.floor(Math.random() * beginningLength)];
  console.log(quote);


  var middleLength = middle.length;
  quote += middle[Math.floor(Math.random() * middleLength)];
  console.log(quote);

  var endLength = end.length;
  quote += end[Math.floor(Math.random() * endLength)];
  document.getElementById("text").innerHTML = "<p>" +  quote  + "</p>";
  console.log(quote);

}


function createQuote() {
  document.getElementById("text").innerHTML = "";
  document.getElementById("text5").innerHTML = "";
  document.getElementById("text4").innerHTML = "";
  document.getElementById("text3").innerHTML = "";
  document.getElementById("text2").innerHTML = "";
  document.getElementById("text1").innerHTML = "";

  var numberOfQuotes = document.getElementById('quoteNumber').value;
  switch(numberOfQuotes){
      case '5':
          document.getElementById("text5").innerHTML = createQuote1();
      case '4':
          document.getElementById("text4").innerHTML = createQuote1(); 
      case '3':
          document.getElementById("text3").innerHTML = createQuote1();
      case '2':
          document.getElementById("text2").innerHTML = createQuote1(); 
      case '1':
          document.getElementById("text1").innerHTML = createQuote1();
          break;
      default:
          console.log("Unknown quote number");
  }
}




function createQuote1() {
  var x = document.getElementById('quoteAccess');
  var y = x.options[x.selectedIndex].value;

  if (y === 'one') {
    return createQuote3();
  } else  {
    return createQuote2();
  }
}



function createQuote2() {
  quote = "";
  var quoteLength = quoteDreams.length;
  quote = quoteDreams[Math.floor(Math.random()*quoteLength)];
  return quote['quote'];
}

function createQuote3() {
  quote = "";
  var quoteLength = quoteSucces.length;
  quote = quoteSucces[Math.floor(Math.random()*quoteLength)];
  return quote['quote'];
}


