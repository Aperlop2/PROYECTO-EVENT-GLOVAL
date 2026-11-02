import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { EventosDestacadosComponent } from './eventos-destacados/eventos-destacados.component';
import { UserService } from '../../../services/user.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    UbicacionComponent,
    EventosDestacadosComponent,
    UserListComponent
  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  activeSection: string = '';
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.fb.group({
      email: [''],
      password: [''],
      fullName: [''],
      municipality: [''],
      street: [''],
      neighborhood: [''],
      interiorNumber: [''],
      exteriorNumber: [''],
      postalCode: [''],
      location: this.fb.group({
        lat: [0],
        lng: [0]
      })
    });
  }

  setActiveSection(section: string) {
    this.activeSection = section;
    if (section === 'logout') {
      this.router.navigate(['/login']);
    }
  }

  saveUser() {
    this.userService.createUser(this.userForm.value).subscribe(response => {
      console.log('User created:', response);
      alert('User created successfully');
    }, error => {
      console.error('Error creating user:', error);
      alert('Error creating user');
    });
  }

  getUser(id: string) {
    this.userService.getUser(id).subscribe(response => {
      this.userForm.setValue(response);
    });
  }

  updateUser() {
    const id = this.userForm.get('_id')?.value;
    this.userService.updateUser(id, this.userForm.value).subscribe(response => {
      console.log('User updated:', response);
      alert('User updated successfully');
    }, error => {
      console.error('Error updating user:', error);
      alert('Error updating user');
    });
  }

  deleteUser() {
    const id = this.userForm.get('_id')?.value;
    this.userService.deleteUser(id).subscribe(response => {
      console.log('User deleted:', response);
      alert('User deleted successfully');
    }, error => {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    });
  }
}
