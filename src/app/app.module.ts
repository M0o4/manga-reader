import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarWidgetModule } from './widgets/top-bar-widget/top-bar-widget.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, TopBarWidgetModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
