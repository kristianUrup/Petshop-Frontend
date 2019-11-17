import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {AuthenticationService} from "../shared/services/authentication/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthenticationService,
              private router: Router){ }

  canActivate() {
    if(this.authService.getToken()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
