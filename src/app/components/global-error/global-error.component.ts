import { Component, OnInit } from '@angular/core'
import { ErrorService } from 'src/app/services/errorService/error.service'

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {
  constructor(public errorService: ErrorService) {}
  public alertButtons = ['OK']
  ngOnInit() {}
}
