import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	userData: any; // Save logged in user data

	constructor(
		public authService : AuthService,
	) {}

	ngOnInit(): void {
	}

	emailFormControl = new FormControl('', [
		Validators.required,
		Validators.minLength(4),
	]);

	passwordFormControl = new FormControl('', [
		Validators.required,
		Validators.minLength(6),
	]);


	getErrorMessage() {
		if (this.emailFormControl.hasError('required')) {
			return 'You must enter a value';
		}
		return this.passwordFormControl.hasError('email') ? 'Not a valid email' : '';
	}

	async login(email: string, password: string) {
		await this.authService.login(email, password)
	}

}
