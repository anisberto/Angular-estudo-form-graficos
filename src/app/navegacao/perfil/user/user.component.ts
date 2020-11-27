import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { UserService } from '../user-service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[]
  user: User
  userSelecte: any

  constructor() { }
  public userService: UserService
  ngOnInit(): void {
    this.userService.getUsers().subscribe((use: User[]) => { this.users = use })
    this.userService.getUserById(1).subscribe((userid: User) => { this.user = userid })
  }
}
