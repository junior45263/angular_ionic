import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(user: { email: string; password: string }) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
  }
}
