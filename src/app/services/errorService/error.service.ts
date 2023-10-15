import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$ = new Subject<string>()

  //Global handler error
  handler(message: string) {
    this.error$.next(message)
  }

  //Close Error message
  clear() {
    this.error$.next('')
  }
}
