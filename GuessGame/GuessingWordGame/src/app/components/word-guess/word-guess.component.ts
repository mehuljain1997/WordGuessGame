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
    let raNum = Math.floor(Math.random() * 50);
    return randomWords[raNum];
  }

  winCountFunc() {
    let num = 0;
    let lettUsed = '';
    let count = this.word.length;

    while (count > 0) {
      if (lettUsed.includes(this.word[count - 1])) {
      } else {
        num += 1;
        lettUsed += this.word[count - 1];
      }

      count -= 1;
    }

    if((this.word.split(this.word[2]).length - 1)> 1){
      num++
    }
    if((this.word.split(this.word[0]).length - 1) > 1){
      num++
    }
    return num-2;
  }

  wordStart() {
    let wordLength = this.word.length;
    let wordL_ = '';
    let count = wordLength;

    while (count > 0) {
      if(count === wordLength){
        this.wordGuess.push(this.word[0]);
      }
      else if(count === wordLength-2) {
        this.wordGuess.push(this.word[2]);
      }
      else {
        this.wordGuess.push(' _ ');
      }
      count -= 1;
    }
  }

  start() {
    this.word = this.wordw();
    this.winCount = this.winCountFunc();
    console.log('this.winCount',this.winCount)

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
    console.log('this.wordGuess start',this.wordGuess)
    document.getElementById('rightGuess').innerHTML =
      'word progress: ' + this.wordGuess;
    document.getElementById('wrongGuess').innerHTML =
      'Wrong guesses: ' + this.wrongGuess;
    document.getElementById('guessesLeft').innerHTML =
      'Guesses remaining: ' + this.guessBomb;
  }

  enterGuess() {
    let lett = (document.getElementById('guess') as HTMLInputElement).value;
    (document.getElementById('guess') as HTMLInputElement).value = '';
    if(!this.enteredKeys.includes(lett)){
      this.enteredKeys.push(lett);
      if (lett.length === 1) {
        let rightOnot = this.isRightOnot(lett);
        console.log('rightOnot',rightOnot)
        if (rightOnot == true) {
          this.NewCW(lett);
          // if(lett != this.wordGuess[2] || (this.word.split(this.word[2]).length - 1)> 1){
          //   this.NewCW(lett);
          // }
          // if(lett != this.wordGuess[0] || (this.word.split(this.word[0]).length - 1) > 1){
          //   this.NewCW(lett);
          // }
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
      console.log('this.wordguess enter',this.wordGuess)
      console.log('this.wincount enter',this.winCount)
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
    console.log('first count',(this.word.split(this.word[0]).length - 1))
    console.log('third count',(this.word.split(this.word[2]).length - 1))
    if(this.wordGuess[0] == a && (this.word.split(this.word[0]).length - 1) > 1){
      return true
    }
    else if(this.wordGuess[2] == a && (this.word.split(this.word[2]).length - 1)> 1){
      return true
    }
    else if(this.wordGuess[0] == a){
      return false
    }
    else if(this.wordGuess[2] == a){
      return false
    }
    const n = this.word.includes(a);
    return n;
  }

  NewCW(letter) {
    let count = 0;
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
    if(this.totalScore && this.choice){
      this.auth.updateScore({score:this.totalScore }).subscribe((result)=> {
        console.log('Successfully update data',result)
       },(err: Error)=> {
         console.log('Error found in update score',err)
       })
    }
    this.auth.logout()
  }
}
