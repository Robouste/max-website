import { Component } from "@angular/core";

@Component({
	selector: "app-sidenav",
	templateUrl: "./sidenav.component.html",
	styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {
	public navMenuItems: NavMenuItem[];

	constructor() {
		this.navMenuItems = [
			{
				name: "Year",
				icon: "date_range",
				link: "...",
				children: [
					{
						name: "2019",
						link: "/2019",
					},
					{
						name: "2018",
						link: "/2018",
					},
					{
						name: "2017",
						link: "/2017",
					},
					{
						name: "2016",
						link: "/2016",
					},
					{
						name: "2015",
						link: "/2015",
					},
					{
						name: "2014",
						link: "/2014",
					},
					{
						name: "2013",
						link: "/2013",
					},
					{
						name: "2012",
						link: "/2012",
					},
					{
						name: "2011",
						link: "/2011",
					},
					{
						name: "2010",
						link: "/2010",
					},
					{
						name: "2009",
						link: "/2009",
					},
				],
			}
		];

		this.navMenuItems[0].children = this.navMenuItems[0].children.reverse();
	}
}

interface NavMenuItem {
	name: string;
	icon?: string;
	link: string;
	children?: NavMenuItem[];
	selected?: boolean;
}
