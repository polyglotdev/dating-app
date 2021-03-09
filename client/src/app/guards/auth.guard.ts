import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'
import { Observable } from 'rxjs'
import { AccountService } from '../services/account.service'
import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true
        this.toastr.error('You are not logged in.')
      })
    )
  }
}
