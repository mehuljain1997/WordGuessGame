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
    localStorage.setItem('email',this.loginForm.value.email)
    localStorage.setItem('name',this.loginForm.value.name)
    this.authService.login(this.loginForm.value).subscribe((result)=> {
      this.router.navigate(['wordguess'])
    },(err: Error)=> {
      console.log('errr',err)
    })
  }


}
