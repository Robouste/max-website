import { IJsonItem } from "./../interfaces/json-item.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ApplicationService {
	constructor(private http: HttpClient) {}

	getItems(): Observable<IJsonItem[]> {
		return this.http.get<IJsonItem[]>("./assets/items.json");
	}
}
