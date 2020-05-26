import { Component, OnInit } from '@angular/core';
import {DataLoaderService} from '../../services/data-loader.service';
import {UserModel} from '../../models/user-model';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-administrators-view-panel',
  templateUrl: './administrators-view-panel.component.html',
  styleUrls: ['./administrators-view-panel.component.css']
})
export class AdministratorsViewPanelComponent implements OnInit {

  public users: UserModel[];
  public selectedUser: UserModel;
  public date: NgbDate;
  public firstName: string;
  public lastName: string;
  public isVisible = false;
  public isVisibleToast = false;

  constructor(private dataLoader: DataLoaderService) {
    const today = new Date();
    this.date = new NgbDate(today.getFullYear(), today.getMonth(), today.getDate());
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dataLoader.getUsers().subscribe(
      (data: UserModel[]) => {
        this.users = data;
        this.selectedUser = this.users[0];
      });
  }

  removeUser(email: string) {
    this.users = this.users.filter((user) => user.email !== email);
    this.isVisibleToast = true;
  }

  onClickSearch() {
    this.isVisible = true;
    this.firstName = this.selectedUser.firstName;
    this.lastName = this.selectedUser.lastName;
  }

}
