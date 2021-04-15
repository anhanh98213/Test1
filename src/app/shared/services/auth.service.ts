import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public fireStore: AngularFirestore,
    public router: Router,
  ) { }

  // Sign in with email/password
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        return this.fireStore.collection('users').doc(result.user?.uid).get().toPromise().then((doc: any) => {
          if (doc.exists) return doc.data().user
          else return null
        }).catch((error: { message: string; }) => {
          return null
        });

      }).catch((error: { message: string; }) => {
        return null;
      })
  }

  getUser(uid: any) {
    return this.fireStore.collection('users').doc(uid).get().toPromise().then((doc) => {
      if (doc.exists) {
        return doc.data()
      }
      else return null
    }).catch((error: { message: string; }) => {
      return null
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  signOut() {
    return this.afAuth.signOut().then(() => {
      // localStorage.removeItem('user');
      localStorage.clear()
      this.router.navigate(['sign-in']);
    })
  }

}
