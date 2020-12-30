import { Component, OnInit } from "@angular/core";
import { IJsonItem } from "./../../interfaces/json-item.interface";
import { ApplicationService } from "./../../services/application.service";

@Component({
	selector: "app-sidenav",
	templateUrl: "./sidenav.component.html",
	styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
	public navMenuItems: NavMenuItem[];

	constructor(private service: ApplicationService) {}

	ngOnInit(): void {
		this.service.getItems().subscribe((allItems: IJsonItem[]) => {
			this.navMenuItems = [
				{
					name: "Years",
					icon: "date_range",
					children: allItems
						.map((item: IJsonItem) => {
							return {
								name: item.year,
								link: "/" + item.year,
							};
						})
						.reverse(),
				},
			];
		});
	}
}

interface NavMenuItem {
	name: string;
	icon?: string;
	link?: string;
	children?: NavMenuItem[];
	selected?: boolean;
}
