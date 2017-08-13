import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchService} from './search/search.service';
import {HttpModule} from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		HttpModule,
		NgbModule.forRoot(),
		AppRoutingModule
	],
	providers: [SearchService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
