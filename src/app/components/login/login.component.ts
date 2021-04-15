import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { User } from 'src/app/shared/services/user';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	userData: any; // Save logged in user data

	constructor(
		public afu: AngularFireAuth,
		public afs: AngularFirestore,   // Inject Firestore service
		public router: Router,
		public ngZone: NgZone // NgZone service to remove outside scope warning
	) {
		/* Saving user data in localstorage when logged in and setting up null when logged out */
		// this.afAuth.authState.subscribe(user => {
		//   if (user) {
		//     this.userData = user;
		//     localStorage.setItem('user', JSON.stringify(this.userData));
		//     JSON.parse(localStorage.getItem('user'));
		//   } else {
		//     localStorage.setItem('user', null);
		//     JSON.parse(localStorage.getItem('user'));
		//   }
		// })
	}

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

	login(email: string, password: string) {
		this.afu.signInWithEmailAndPassword(email, password).then(async () => {
			var user = await this.afu.currentUser
			await this.getUserFS(user?.uid!)

			// var name, email, photoUrl, uid, emailVerified;

			// if (user != null) {
			//   name = user.displayName;
			//   email = user.email;
			//   photoUrl = user.photoURL;
			//   emailVerified = user.emailVerified;
			//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
			//   // this value to authenticate with your backend server, if
			//   // you have one. Use User.getToken() instead.
			// }
			this.ngZone.run(() => {
			});

		})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	}

	logOut() {
		
		localStorage.removeItem('user');
		this.afu.signOut().then(() => {
			console.log('đã logOut');
		})
	}
	
	async getUser() {
		// var user = await this.afu.currentUser
		// console.log(user);

		console.log(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : {});

	}

	/* Setting up user data when sign in with username/password, 
	sign up with username/password and sign in with social auth  
	provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
	SetUserData(user: any) {
		console.log(user.uid);
		console.log(user.email);

		const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
		const userData: User = {
			uid: user.uid,
			email: user.email,
		}
		userRef.set(userData, {
			merge: true
		}).then((result) => {
			console.log(result)

		})
			.catch((error: { message: string; }) => {

				console.log(error);

			});
	}
	getUserFS(uid: string) {
		this.afs.collection('users').doc(uid).get().toPromise().then((doc: any) => {
			if (doc.exists) {
				const user = doc.data().user
				localStorage.setItem('user', JSON.stringify(user));
			}
		}).catch((error: { message: string; }) => {
			console.log(error);
		});
	}

}
