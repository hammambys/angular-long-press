import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { AppComponent } from './app.component';
import { LongPressDirective } from './long-press.directive';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatIconModule,
  ],
  declarations: [AppComponent, LongPressDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
