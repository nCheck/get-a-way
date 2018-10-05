import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent implements OnInit {

  error: any;
  user: Observable<firebase.User>;
  doctors:any[];
  myParams: object = {};
  constructor(public db: AngularFireDatabase,public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    db.list('/users').valueChanges().subscribe((val => {this.doctors = val;}))

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()
  ).then(
    (success) => {
      var uid = firebase.auth().currentUser.uid
      var flag = false;
      //console.log(uid);
      for(let doctor of this.doctors) {
        if(doctor == uid) {
          flag = true;
          this.router.navigate(['/home']);
          console.log('already reg');
          break;
        }
      }
      if (flag == false)  {
        console.log("New User");
        this.db.list('/users').push(uid);
        this.router.navigate(['/home']);
      }

    }).catch(
      (err) => {
        this.error = err;
      })

      //console.log(firebase.auth().currentUser);
  }

  ngOnInit() {
  }

}
