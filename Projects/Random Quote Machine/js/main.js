const projectName = "random-quote-machine";
localStorage.setItem("example_project", "Random Quote Machine");
let quotesData;

const inIFrame = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

const colors = [
  "#b01c9f",
  "#e051d0",
  "#730967",
  "#63295d",
  "#8e18a8",
  "#6c0882",
  "#ac11cf",
  "#592a75",
  "#b66de3",
  "#660b9e",
  "#a63ce8",
  "#185ea3",
  "#6b1f48",
  "#662347",
  "#185ea3",
  "#750566",
  "#631f42",
  "#8e6ac4",
  
];
let currentQuote = "",
  currentAuthor = "";
const openURL = (url) => {
  window.open(
    url,
    "Share",
    "width=550, height=400, toolbar=0, scrollbars=1, location=0, statusbar=0, menubar=0, resizable=0"
  );
};

const getQuotes = () => {
  return $.ajax({
    headers: {
      Accept: "application/json",
    },
    url:
      "https://raw.githubusercontent.com/uaaeu/front-end-libraries/master/Projects/Random%20Quote%20Machine/js/quotes.json",
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === "string") {
        quotesData = JSON.parse(jsonQuotes);
        console.log("quotesData");
        console.log(quotesData);
      }
    },
  });
};

const getRandomQuote = () => {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
};

const getQuote = () => {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  if (inIFrame()) {
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
  }

  $(".quote-text").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text(randomQuote.quote);
  });

  $(".quote-author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#author").html(randomQuote.author);
  });

  const color = Math.floor(Math.random() * colors.length);
  $("html body").animate(
    {
      backgroundColor: colors[color],
      color: colors[color],
    },
    1000
  );
  $(".button").animate(
    {
      backgroundColor: colors[color],
    },
    1000
  );
};

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $("#new-quote").on("click", getQuote);

  $("tweet-quote").on("click", function () {
    if (!inIFrame()) {
      openURL(
        "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
      );
    }
  });
});

