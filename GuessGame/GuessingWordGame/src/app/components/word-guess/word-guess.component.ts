import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-word-guess',
  templateUrl: './word-guess.component.html',
  styleUrls: ['./word-guess.component.css'],
})
export class WordGuessComponent implements OnInit {
  choice = 0;
  word = '';
  wordGuess = [];
  wrongGuess = [];
  guessBomb = 0;
  winCount = 1;
  guess = '';
  totalScore = 0;
  enteredKeys = []
  name=''

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
  }

  chooseDif1() {
    this.choice = 1;
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('chooseDifficulty').style.display = 'none';
  }

  chooseDif2() {
    this.choice = 2;
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('chooseDifficulty').style.display = 'none';
  }

  chooseDif3() {
    this.choice = 3;
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('chooseDifficulty').style.display = 'none';
  }

  wordw() {
    let randomWords = [];
    if (this.choice === 1) {
      randomWords = [
        'toe',
        'flow',
        'pig',
        'bat',
        'fact',
        'risk',
        'land',
        'grin',
        'true',
        'want',
        'suck',
        'veil',
        'coal',
        'love',
        'fit',
        'hug',
        'tan',
        'tub',
        'dear',
        'race',
        'open',
        'lock',
        'male',
        'loaf',
        'dull',
        'food',
        'bell',
        'beg',
        'idea',
        'nine',
        'owe',
        'sun',
        'snow',
        'cake',
        'sour',
        'van',
        'load',
        'roll',
        'fast',
        'moor',
        'pat',
        'pass',
        'dust',
        'ear',
        'copy',
        'test',
        'work',
        'free',
        'turn',
        'rest',
        'plan',
        'note',
        'wall',
        'coil',
        'jump',
        'bore',
        'oval',
        'eggs',
        'x-ray',
        'east'
      ];
    }
    if (this.choice === 2) {
      randomWords = [
        'humor',
        'verse',
        'lumpy',
        'weigh',
        'brake',
        'misty',
        'dress',
        'judge',
        'madly',
        'serve',
        'curve',
        'field',
        'rifle',
        'match',
        'smile',
        'frogs',
        'hurry',
        'quick',
        'tempt',
        'decay',
        'exist',
        'books',
        'tacky',
        'fuzzy',
        'stick',
        'press',
        'upset',
        'sulky',
        'spell',
        'taste',
        'great',
        'thumb',
        'green',
        'badge',
        'crime',
        'phone',
        'fence',
        'funny',
        'elbow',
        'smart',
        'crowd',
        'above',
        'actor',
        'depth',
        'delay',
        'doubt',
        'drama',
        'draft',
        'dream',
        'drill',
        'drink',
        'drive',
        'eager',
        'earth',
        'elite',
        'empty',
        'enjoy',
        'known',
        'label',
        'later',
      ];
    }
    if (this.choice === 3) {
      //randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "holiday", "glorious", "weigh", "brake", "pretty", "grin", "capricious", "bite-sized", "misty", "ignore", "certain", "sloppy", "dress", "true", "zonked", "observation", "action", "various", "want", "direful", "suck", "dress", "scarecrow", "judge", "madly", "quizzical", "consist", "fierce", "love", "arrest", "serve", "fit", "hug", "tan", "curve", "eatable", "tub", "race", "innocent", "open", "preach", "steady", "acoustics", "lock", "field", "arrange", "rifle", "learned", "toe", "flow", "competition", "ill-fated", "oatmeal", "match", "male", "measure", "loaf", "smile", "wrestle", "dull", "food", "locket", "bell", "beg", "strengthen", "responsible", "enchanting", "loutish", "switch", "idea", "nine", "squeamish", "pig", "bat", "dear", "trains", "owe", "frogs", "assorted", "lonely", "hurry", "natural", "sun", "snow", "obnoxious", "broken", "friend", "bright", "cake", "sour", "permit", "economic", "lovely", "quick", "van", "tempt", "apparel", "decay", "business", "adjustment", "blushing", "makeshift", "slippery", "load", "winter", "exist", "tongue", "country", "roll", "fast", "moor", "possess", "pat", "pass", "books", "impartial", "hospitable", "dust", "naughty", "extra-large", "tacky", "produce", "committee", "fuzzy", "judicious", "nebulous", "stick", "ear", "copy", "friendly", "press", "distinct", "vegetable", "upset", "venomous", "statement", "sulky", "spell", "x-ray", "square", "taste", "great", "thumb", "adjoining", "chilly", "test", "ancient", "green", "badge", "work", "repeat", "free", "elderly", "doctor", "difficult", "grubby", "approval", "turn", "vivacious", "thundering", "cherries", "rest", "plan", "crime", "sticks", "wealthy", "phone", "suspend", "gullible", "fence", "note", "wall", "interest", "coil", "jump", "enchanted", "funny", "racial", "greasy", "polish", "elbow", "smart", "bore", "crowd", "glistening", "oval", "eggs", "nauseating", "detailed", "veil", "coal"]
      randomWords = [
        'miniature',
        'amusing',
        'switch',
        'creepy',
        'holiday',
        'glorious',
        'pretty',
        'capricious',
        'bite-sized',
        'ignore',
        'certain',
        'sloppy',
        'zonked',
        'observation',
        'action',
        'various',
        'direful',
        'scarecrow',
        'quizzical',
        'consist',
        'fierce',
        'arrest',
        'eatable',
        'innocent',
        'acoustics',
        'arrange',
        'learned',
        'competition',
        'ill-fated',
        'strengthen',
        'responsible',
        'enchanting',
        'squeamish',
        'trains',
        'assorted',
        'lonely',
        'natural',
        'obnoxious',
        'broken',
        'friend',
        'economic',
        'lovely',
        'apparel',
        'business',
        'adjustment',
        'blushing',
        'makeshift',
        'slippery',
        'winter',
        'tongue',
        'country',
        'possess',
        'impartial',
        'hospitable',
        'naughty',
        'extra-large',
        'produce',
        'committee',
        'judicious',
        'nebulous',
        'friendly',
        'distinct',
        'vegetable',
        'venomous',
        'statement',
        'square',
        'adjoining',
        'chilly',
        'ancient',
        'repeat',
        'elderly',
        'doctor',
        'difficult',
        'approval',
        'vivacious',
        'thundering',
        'cherries',
        'sticks',
        'wealthy',
        'suspend',
        'gullible',
        'interest',
        'enchanted',
        'racial',
        'greasy',
        'polish',
        'glistening',
        'nauseating',
        'detailed',
      ];
    }
    var raNum = Math.floor(Math.random() * 50);
    return randomWords[raNum];
  }

  winCountFunc() {
    var num = 0;
    var lettUsed = '';
    var count = this.word.length;

    while (count > 0) {
      if (lettUsed.includes(this.word[count - 1])) {
      } else {
        num += 1;
        lettUsed += this.word[count - 1];
      }

      count -= 1;
    }

    return num;
  }

  wordStart() {
    var wordLength = this.word.length;
    var wordL_ = '';
    var count = wordLength;

    while (count > 0) {
      this.wordGuess.push(' _ ');
      count -= 1;
    }
  }

  start() {
    this.word = this.wordw();
    this.winCount = this.winCountFunc();

    if (this.choice == 1) {
      this.guessBomb = this.word.length + 1;
    } else if (this.choice == 2) {
      this.guessBomb = this.word.length + 1;
    } else if (this.choice == 3) {
      if (this.word.length % 2 == 0) {
        this.guessBomb = this.word.length / 2;
      } else {
        this.guessBomb = (this.word.length - 1) / 2;
      }
    }

    console.log(this.word);
    document.getElementById('mainGame').style.display = 'block';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('question').innerHTML = 'Enter your first guess';
    this.wordStart();
    document.getElementById('RRguess').style.display = 'block';
    document.getElementById('rightGuess').innerHTML =
      'word progress: ' + this.wordGuess;
    document.getElementById('wrongGuess').innerHTML =
      'Wrong guesses: ' + this.wrongGuess;
    document.getElementById('guessesLeft').innerHTML =
      'Guesses remaining: ' + this.guessBomb;

    //var x = document.getElementById("guess").maxLength;
    //document.getElementById("demo").innerHTML = x;
  }

  enterGuess() {
    var lett = (document.getElementById('guess') as HTMLInputElement).value;
    (document.getElementById('guess') as HTMLInputElement).value = '';
    if(!this.enteredKeys.includes(lett)){
      this.enteredKeys.push(lett);
      if (lett.length === 1) {
        var rightOnot = this.isRightOnot(lett);
        if (rightOnot == true) {
          this.NewCW(lett);
        } else {
          if (!this.wrongGuess.includes(lett)) {
            this.wrongGuess.push(lett);
          }
          this.guessBomb -= 1;
        }
      } else if (lett.length < 1) {
      } else {
        this.guessBomb -= 1;
      }
      if (this.guessBomb <= 0) {
        this.gameLose();
      }
      if (this.winCount <= 0) {
        this.gameWin();
      }
      document.getElementById('rightGuess').innerHTML =
        'word progress: ' + this.wordGuess;
      document.getElementById('wrongGuess').innerHTML =
        'Wrong guesses: ' + this.wrongGuess;
      document.getElementById('guessesLeft').innerHTML =
        'Guesses remaining: ' + this.guessBomb;
    }  
  }

  isRightOnot(a) {
    var n = this.word.includes(a);
    return n;
  }

  NewCW(letter) {
    var count = 0;
    this.winCount -= 1;

    while (count <= this.word.length - 1) {
      if (letter === this.word[count]) {
        if (this.wordGuess[count] === letter) {
        } else {
        }

        this.wordGuess[count] = letter;
        count += 1;
      } else {
        count += 1;
      }
    }
  }

  gameLose() {
    this.auth.updateScore({score:this.totalScore }).subscribe((result)=> {
     console.log('Successfully update data',result)
    },(err: Error)=> {
      console.log('Error found in update score',err)
    })

    document.getElementById('mainGame').style.display = 'none';
    document.getElementById('RRguess').style.display = 'none';
    document.getElementById('youLose').style.display = 'block';
    document.getElementById('correctWordWas').innerHTML =
      'The correct word was :- ' + this.word;
    document.getElementById('score').innerHTML = 'Your Score :- ' + this.totalScore;  


  }

  gameWin() {
    this.totalScore += 10;
    // document.getElementById('mainGame').style.display='none';
    // document.getElementById('RRguess').style.display='none';
    document.getElementById('youWin').style.display = 'block';
  }

  restart() {
    this.totalScore = 0
    document.getElementById('mainGame').style.display = 'none';
    document.getElementById('RRguess').style.display = 'none';
    document.getElementById('youLose').style.display = 'none';
    document.getElementById('youWin').style.display = 'none';
    document.getElementById('chooseDifficulty').style.display = 'block';

    this.word = '';
    this.wordGuess = [];
    this.wrongGuess = [];
    this.guessBomb = 0;
    this.winCount = 1;
    this.guess = '';
    this.choice = 0;
    this.totalScore = 0;
    this.enteredKeys = []
  }

  continue() {
    document.getElementById('mainGame').style.display = 'none';
    document.getElementById('RRguess').style.display = 'none';
    document.getElementById('youLose').style.display = 'none';
    document.getElementById('youWin').style.display = 'none';
    // document.getElementById('chooseDifficulty').style.display='block';
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('highestScore').innerHTML =
    'Your Score :- ' + this.totalScore;


    this.word = '';
    this.wordGuess = [];
    this.wrongGuess = [];
    this.guessBomb = 0;
    this.winCount = 1;
    this.guess = '';
    this.enteredKeys = []
  }

  logout(){
    this.auth.logout()
  }
}
