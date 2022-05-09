import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';

import { FormsModule }   from '@angular/forms';
import { DialogueComponent } from './components/dialogue/dialogue.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ToolbarComponent,
    CardComponent,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
