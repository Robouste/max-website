import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IJsonItem } from "./../interfaces/json-item.interface";

@Injectable({ providedIn: "root" })
export class ApplicationService {
	private _allItems: IJsonItem[];

	constructor(private http: HttpClient) {}

	getItems(): Observable<IJsonItem[]> {
		if (this._allItems) {
			return of(this._allItems);
		}
		return this.http.get<IJsonItem[]>("./assets/items.json");
	}
}
