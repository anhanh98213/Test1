import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private fireStore: AngularFirestore) { }

  ngOnInit(): void {
  }

  
  addMajor(name: string, description: string) {
    console.log(name);
    console.log(description);
    this.fireStore.collection("major").add({
      name: name,
      description: description
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });


  }


}
