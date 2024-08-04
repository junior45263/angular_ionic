import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  editForm!: FormGroup;
  isAlertOpen = false;
  alertButtons = [
    {
      text: 'OK',
      role: 'cancel',
    },
  ];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertController: AlertController // Inject AlertController
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.editForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.editForm.valid) {
      try {
        const res = await this.authService.login(this.editForm.value);
        this.showAlert(
          'Login Successful',
          'You have been logged in successfully.'
        );
      } catch (err) {
        this.showAlert('Login Failed', 'There was an error logging in.');
      }
    }
  }

  async showAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: this.alertButtons,
    });
    await alert.present();
  }
}
