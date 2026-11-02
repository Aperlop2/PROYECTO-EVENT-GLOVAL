import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  userForm: FormGroup;
  displayedColumns: string[] = ['email', 'fullName', 'actions'];

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      _id: [''],
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

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((response: any[]) => {
      this.users = response;
    });
  }

  editUser(user: any): void {
    this.userForm.setValue(user);
  }

  updateUser(): void {
    const id = this.userForm.get('_id')?.value;
    this.userService.updateUser(id, this.userForm.value).subscribe(response => {
      this.loadUsers(); // Recargar la lista de usuarios
    });
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(response => {
      this.loadUsers(); // Recargar la lista de usuarios
    });
  }
}
