import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/main/components/main/main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import {NgFor} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    NgFor,
    FormsModule,
    RouterModule,

    CarouselModule,
    // Material
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MainComponent],
})

export class SharedModule {
  
}
