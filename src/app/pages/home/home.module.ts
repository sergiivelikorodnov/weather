import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomePage } from './home.page'

import { HomePageRoutingModule } from './home-routing.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TranslateModule, ReactiveFormsModule, HomePageRoutingModule],
  declarations: [HomePage]
})
export class HomePageModule {}
