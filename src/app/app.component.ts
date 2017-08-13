import {Component, OnInit, VERSION} from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {SearchItem} from './search/search-item';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import {SearchService} from './search/search.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private _loading: boolean = false;
	get loading(): boolean {
		return this._loading;
	}

	set loading(value: boolean) {
		this._loading = value;
	}

	private _title: string;
	get title(): string {
		return this._title;
	}

	private _results: Observable<SearchItem[]>;
	get results(): Observable<SearchItem[]> {
		return this._results;
	}

	set results(value: Observable<SearchItem[]>) {
		this._results = value;
	}

	private _searchField: FormControl;
	get searchField(): FormControl {
		return this._searchField;
	}
	set searchField(value: FormControl){
		this._searchField = value;
	}

	constructor(private itunes: SearchService) {
	}

	ngOnInit() {
		this._title = `${VERSION.full}`;
		this.searchField = new FormControl();
		this._results = this.searchField.valueChanges
			.debounceTime(400)
			.distinctUntilChanged()
			.do(_ => this._loading = true)
			.switchMap(term => this.itunes.search(term))
			.do(_ => this._loading = false);
	}

	doSearch(term: string) {
		this.itunes.search(term);
	}
}
