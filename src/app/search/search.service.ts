import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SearchItem} from './search-item';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

	apiRoot: string = 'https://itunes.apple.com/search';

	constructor(private http: Http) {
	}

	search(term: string): Observable<SearchItem[]> {
		const apiURL: string = `${this.apiRoot}?term=${term}&media=music&limit=20`;
		return this.http.get(apiURL)
			.map(res => {
				return res.json().results.map(item => {
					return new SearchItem(
						item.trackName,
						item.artistName,
						item.trackViewUrl,
						item.artworkUrl30,
						item.artistId
					);
				});
			});
	}

}
