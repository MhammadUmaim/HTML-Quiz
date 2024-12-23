var questionsArray = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool and Markup Language",
      ],
      Correctopt: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML tag is used to create a paragraph?",
      options: ["<h1>", "<div>", "<span>", "<p>"],
      Correctopt: "<p>",
    },
    {
      question: "What is the correct HTML tag for inserting a line break?",
      options: ["<break>", "<br>", "Jupiter", "<hr>"],
      Correctopt: "<br>",
    },
    {
      question:
        "Which attribute specifies a unique identifier for an HTML element?",
      options: ["class", "style", "id", "href"],
      Correctopt: "id",
    },
    {
      question: "What is the correct syntax for creating a hyperlink?",
      options: [
        "<a href= 'url' >Link</a>",
        "<link src= 'url' >Link</link>",
        "<hyperlink>Link</hyperlink>",
        "<url>Link</url>",
      ],
      Correctopt: "<a href= 'url' >Link</a>",
    },
    {
      question: "Which tag is used to define a table in HTML?",
      options: ["<tbl>", "<table>", "<td>", "<tr>"],
      Correctopt: "<table>",
    },
    {
      question: "How do you create an unordered list in HTML?",
      options: ["<ol>", "<list>", "<u>", "<ul>"],
      Correctopt: "<ul>",
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: [
        "<body style= 'background-color:blue;'>",
        "<body bg='blue'>",
        "<background>blue</background>",
        "<body style='color:blue;'>",
      ],
      Correctopt: "<body style= 'background-color:blue;'>",
    },
    {
      question: "How do you specify a title for a web page?",
      options: ["<meta>", "<head>", "<title>", "<name>"],
      Correctopt: "<title>",
    },
    {
      question: "Which tag is used for emphasized text?",
      options: ["<strong>", "<em>", "<i>", "<b>"],
      Correctopt: "<em>",
    },
    {
      question: "Which tag is used to create a form in HTML?",
      options: ["<form>", "<input>", "<textarea>", "<fieldset>"],
      Correctopt: "<form>",
    },
    {
      question: "What is the correct input type for submitting a form?",
      options: [
        "<input type='text'>",
        "<input type='button'>",
        "<input type='reset'>",
        "<input type='submit'>",
      ],
      Correctopt: "<input type='submit'>",
    },
    {
      question: "Which attribute is used to group form elements?",
      options: ["id", "action", "name", "method"],
      Correctopt: "name",
    },
    {
      question: "What is the correct HTML for making a checkbox?",
      options: [
        "<checkbox>",
        "<input type='check'>",
        "<input type='box'>",
        "<input type='checkbox'>",
      ],
      Correctopt: "<input type='checkbox'>",
    },
    {
      question: "How do you create a dropdown list in HTML?",
      options: ["<dropdown>", "<select>", "<list>", "<ul>"],
      Correctopt: "<select>",
    },
    {
      question: "Which HTML tag is used to define an image?",
      options: ["<picture>", "<image>", "<src>", "<img>"],
      Correctopt: "<img>",
    },
    {
      question: "What is the correct HTML for adding a video?",
      options: ["<movie>", "<media>", "<video controls>", "<vid>"],
      Correctopt: "<video controls>",
    },
    {
      question: "Which attribute is required in the <img> tag?",
      options: ["alt", "src", "width", "height"],
      Correctopt: "src",
    },
    {
      question: "How do you define an audio file in HTML?",
      options: ["<audio>", "<music>", "<sound>", "<voice>"],
      Correctopt: "<audio>",
    },
    {
      question: "What does the <a> tag define?",
      options: [
        "An anchor point",
        "A hyperlink",
        "A text decoration",
        "A paragraph",
      ],
      Correctopt: "A hyperlink",
    },
    {
      question: "Which HTML5 tag is used to define navigation links?",
      options: ["<nav>", "<menu>", "<navigate>", "<ul>"],
      Correctopt: "<nav>",
    },
    {
      question: "What is the <article> tag used for?",
      options: [
        "To define a navigation section",
        "To define the main header",
        "To define self-contained content",
        "To define a paragraph",
      ],
      Correctopt: " To define self-contained content",
    },
    {
      question: "Which tag is used to define a footer for a document?",
      options: ["<bottom>", "<footer>", "<end>", "<tail>"],
      Correctopt: "<footer>",
    },
    {
      question: "What is the purpose of the <aside> tag?",
      options: [
        "To define the main header",
        "To emphasize text",
        "To define content aside from the main content",
        "To create a sidebar",
      ],
      Correctopt: "To define content aside from the main content",
    },
    {
      question: "Which tag defines a section in a document?",
      options: ["<div>", "<container>", "<part>", "<section>"],
      Correctopt: "<section>",
    },
    {
      question: "Which tag is used for a container for introductory content?",
      options: ["<head>", "<intro>>", "<header>", "<div>"],
      Correctopt: "<header>",
    },
    {
      question: "What is the purpose of the <mark> tag?",
      options: [
        "To underline text",
        "To highlight text",
        "To italicize text",
        "To bold text",
      ],
      Correctopt: "To highlight text",
    },
    {
      question: "What does the <time> tag define?",
      options: ["A timer", "A countdown", "A specific time/date", "A clock"],
      Correctopt: " A specific time/date",
    },
    {
      question: "Which tag is used to define a block of navigation links?",
      options: ["<section>", "<nav>", "<footer>", "<aside>"],
      Correctopt: "<nav>",
    },
    {
      question: "What is the correct HTML for defining a progress bar?",
      options: ["<process>", "<progress>", "<meter>", "<bar>"],
      Correctopt: "<progress>",
    },
  ];
  
  var MainDiv = document.getElementById("main");
  
  // Create a form
  var form = document.createElement("form");
  form.setAttribute("id", "quizForm");
  
  for (var i = 0; i < questionsArray.length; i++) {
    // Create a container div for each question
    var userDiv = document.createElement("div");
    userDiv.setAttribute("class", "user-div");
  
    // Add the question as a heading
    var questionHeading = document.createElement("h3");
    questionHeading.innerText = `Q${i + 1}: ${questionsArray[i].question}`;
    userDiv.appendChild(questionHeading);
  
    // Add the options as radio buttons
    for (var j = 0; j < questionsArray[i].options.length; j++) {
      var optionLabel = document.createElement("label");
      var optionInput = document.createElement("input");
  
      // Configure the radio input
      optionInput.setAttribute("type", "radio");
      optionInput.setAttribute("name", `question${i}`); // Group name for radio buttons
      optionInput.setAttribute("value", questionsArray[i].options[j]);
  
      // Add radio input and label
      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(
        document.createTextNode(questionsArray[i].options[j])
      );
  
      // Append to the question container
      userDiv.appendChild(optionLabel);
      userDiv.appendChild(document.createElement("br")); // Line break for neat layout
    }
  
    // Append the userDiv to the form
    form.appendChild(userDiv);
  }
  
  // Add a submit button
  var submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Submit";
  form.appendChild(submitButton);
  
  // Append the form to the main div
  MainDiv.appendChild(form);
  
  function stopWatch() {
    document.getElementById("start").style.display = "none";
    document.getElementById("stopWatch").style.display = "block";
    mins.innerText = minsCounter;
    secs.innerText = secsCounter;
    secsCounter--;
  
    if (secsCounter === 0) {
      secs.innerText = "0" + secsCounter;
      secsCounter = 59;
      minsCounter--;
      mins.innerText = minsCounter;
    }
    if (secsCounter < 10) {
      secs.innerText = "0" + secsCounter;
    }
  }
  
  var secs = document.getElementById("secs");
  var secsCounter = 59;
  
  var mins = document.getElementById("mins");
  var minsCounter = 14;
  