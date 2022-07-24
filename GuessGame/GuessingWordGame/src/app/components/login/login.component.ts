import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  login= true
  code='';

  constructor(private formBuilder: FormBuilder,private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['wordguess'])
    }
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.login =  false
    this.createCaptcha()
  }

  createCaptcha() {
    document.getElementById('captchablock').style.display = 'block';
    document.getElementById('loginblock').style.display = 'none';
    //clear the contents of captcha h4 first 
    document.getElementById('captcha').innerHTML = "";
    const charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    const lengthOtp = 6;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
      let index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    let canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    let ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    this.code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
  }

  validateCaptcha() {
    window.event.preventDefault();
    if ((document.getElementById("cpatchaTextBox") as HTMLInputElement).value == this.code) {
      localStorage.setItem('email',this.loginForm.value.email)
      localStorage.setItem('name',this.loginForm.value.name)
      this.authService.login(this.loginForm.value).subscribe((result)=> {
        this.router.navigate(['wordguess'])
      },(err: Error)=> {
        console.log('errr',err)
      })
    } else {
      alert("Invalid Captcha. try Again");
      this.createCaptcha();
    }
  }


}
