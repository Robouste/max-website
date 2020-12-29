import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IJsonItem } from "./../../interfaces/json-item.interface";
import { ApplicationService } from "./../../services/application.service";

@Component({
	selector: "app-item-list",
	templateUrl: "item-list.component.html",
	styleUrls: ["./item-list.component.scss"],
})
export class ItemListComponent implements OnInit {
	public currentPictures: string[];
	public year: string;

	private _allItems: IJsonItem[] = [];

	constructor(private route: ActivatedRoute, private service: ApplicationService) {}

	ngOnInit(): void {
		this.service.getItems().subscribe((items: IJsonItem[]) => {
			this._allItems = items;

			this.route.params.subscribe((params) => {
				this.year = params["id"] ?? "2019";
				this.currentPictures = this._allItems
					.find((jsonItem: IJsonItem) => jsonItem.year === this.year)
					.pictures.reverse();
			});
		});
	}
}
