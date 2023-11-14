// Using Prompt to Welcome Message
function displayTestPrompt(){
  alert("Welcome to the Test");
}
displayTestPrompt();

// Ask User to ready for the test but can't get out of it.
function displayReadyPrompt(){
  var person = "Are you ready for the test?";
 if (confirm(person) === true) {
       alert("Awesome, Let get start it!");
  } else {
    alert("Too bad, you are stuck in here with me til you finish the test!");
  }
 }

displayReadyPrompt();

// Ask a question with multiple choices of answer.
var questions = [{
  // Question #1
  q: "What is capital of Mississippi?\n \-Biloxi\n \-Jackson\n \-Oxford\n \-Madison",
  a: {biloxi: false,
     jackson: true,
     oxford: false,
     madison: false}
},
 {
   // Question #2
  q: "Which highway is close to the Gulf Coast beach?\n \ -53\n \ -603\n \ -90\n \ -43",
  a: {53: false,
      603: false,
      90: true,
      43: false} 
 },
  {
    // Question #3
   q: "Is Java a type of OS?\n \ True or False",
   a: {true: false,
       false: true}
  },
   {
     // Question #4
     q: "What’s the shortcut for the “copy” function on most computers?\n ctrl + _? \n \ - r\n \ - p\n \ - v\n \ - c",
     a: {r: false,
         c: true,
         p: false,
         v: false}
   },
    {
      // Question #5
     q: "What were the first hockey pucks made out of?\n \ Dung\n \ Clay\n \ Rubber \n \Wood",
     a: {dung: true,
        clay: false,
        rubber: false,
        wood: false}
    }             
];

// Get count of questions available
var i = questions.length;
// Set score count
var score = 0;

// Check to see how many questions left before proceeding to next iteration of loop
while(i > 0){
  var randomNumber = Math.floor(Math.random()*questions.length);
  //console.log("Random number: " + randomNumber);

  // Get user's answer
  do{
  var answer=prompt(questions[randomNumber].q);
  } while(answer === null)
  var item = questions[randomNumber].a[answer.toLowerCase()];
  if(item === true){
    item = "Correct Answer";
    score = score + 20;
  } else if(item === false){
    item = "Wrong Answer";
    score = score - 0;
  } else {
    item = "No wonder, you can't answer the question.";
  }
  if(score < 0){
    score = 0;
  }
  alert(item);
  
  
  //Printing out questions, user's answer, and scores
  console.log(questions[randomNumber].q);
  console.log("User's input: " + answer);
  console.log("Score is: " + score);
  
  //Remove a selected, single item
  questions.splice(randomNumber, 1);
  
  //View array after removal
  //console.log(questions);
  
  // Refresh count of questions available
  i = questions.length;
}

