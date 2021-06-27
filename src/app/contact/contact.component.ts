import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../shared/services/user.service";


@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contact: any = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  contactUs(contactForm: NgForm, data) {
    if (contactForm.invalid) {
      return;
    }

    this.userService.contactUs(this.contact).subscribe((response) => {
      console.log(response);
    });
  }
}
