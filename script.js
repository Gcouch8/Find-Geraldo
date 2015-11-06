var images=['House', 'Tree', 'Mountain', 'Desert', 'Ocean', 'Fish'];
var userAnswer=prompt('Where is the human hiding?');
var answer='the fish';

findTheHuman();

function findTheHuman(){
  if((userAnswer===answer)||(userAnswer==='the Fish')||(userAnswer==='Fish')||(userAnswer==='fish')){
    alert('You found him! Incredible');
    document.getElementById('imageSix').style.borderStyle='solid';
    document.getElementById('success').innerHTML='You are a hero of the people';
  }
  else{
    alert('Nope he is not there.');
    var userAnswerTwo = prompt('Guess Again');

    if ((userAnswerTwo===answer)||(userAnswerTwo==='the Fish')||(userAnswerTwo==='Fish')||(userAnswerTwo==='fish')){
      alert('Nice job, you found him!');
      document.getElementById('imageSix').style.borderStyle='solid';
      document.getElementById('success').innerHTML='You are a hero of the people';
    }
    else{
      alert('Nope, only one more try! Before he vanishes for good!');
      var userAnswerThree = prompt('Guess Again');
      if ((userAnswerThree===answer)||(userAnswerThree==='the Fish')||(userAnswerThree==='Fish')||(userAnswerThree==='fish')){
        alert('Phew, you found him before he escaped.');
        document.getElementById('imageSix').style.borderStyle='solid';
        document.getElementById('success').innerHTML='You are a hero of the people';
      }
      else{
        alert('Geraldo has escaped to continue his nefarious ways.');
        document.getElementById('fail').innerHTML='How could you let a dangerous criminal escape?';
      }
    }
   }
 };

