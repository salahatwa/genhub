import { Component, Injector, OnInit, PLATFORM_ID } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { isPlatformBrowser } from "@angular/common";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-verification",
  templateUrl: "./verification.component.html",
  styleUrls: ["./verification.component.scss"],
})
export class VerificationComponent implements OnInit {
  platformId: any;
  constructor(
    injector: Injector,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.platformId = injector.get(PLATFORM_ID);
  }
  responseText: any = "";
  token: any = "";

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.token = this.route.snapshot.params.token;
      this.userService
        .verifySubscriber(this.route.snapshot.params.token)
        .subscribe(
          (response) => {
            this.responseText = "Verification success!";
          },
          (error) => {
            this.responseText = error.error.error;
          }
        );
    }
  }
}
