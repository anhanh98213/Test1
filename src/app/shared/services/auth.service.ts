import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	userData: any

	constructor(
		public afu: AngularFireAuth,
		public afs: AngularFirestore,   // Inject Firestore service
		public router: Router,
		public ngZone: NgZone, // NgZone service to remove outside scope warning
	) { }

	login(email: string, password: string) {
		this.afu.signInWithEmailAndPassword(email, password).then(async () => {
			var user = await this.afu.currentUser
			await this.getUserFS(user?.uid!)
			this.getRole();
		}).catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
		});
	}

	logOut() {
		localStorage.removeItem('user');
		this.afu.signOut().then(() => {
			console.log('logOut');
		})
	}

	getUserFS(uid: string) {
		this.afs.collection('users').doc(uid).get().toPromise().then((doc: any) => {
			if (doc.exists) {
				const user = doc.data().user
				localStorage.setItem('user', JSON.stringify(user));
				this.userData = user
			}
		}).catch((error: { message: string; }) => {
			console.log(error);
		});
	}

	getRole() {
		if (this.userData.role == 'admin') {
			this.router.navigate(['dashboardAdmin']);
		} else if (this.userData.role == 'manager') {
			this.router.navigate(['dashboardManager']);
		}
		else if (this.userData.role == 'lecturer') {
			this.router.navigate(['dashboardLecturer']);
		}
		else if (this.userData.role == 'student') {
			this.router.navigate(['dashboardStudent']);
		}
	}

}
