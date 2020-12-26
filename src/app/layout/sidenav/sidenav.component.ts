import { Component } from "@angular/core";

@Component({
	selector: "app-sidenav",
	templateUrl: "./sidenav.component.html",
	styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {
	public navMenuItems: NavMenuItem[];
	public children: NavMenuItem[] = [
		{
			name: "Tentacles",
			link: "...",
		},
		{
			name: "Loli",
			link: "...",
		},
		{
			name: "Furry",
			link: "...",
		},
	];

	constructor() {
		this.navMenuItems = [
			{
				name: "Drawings",
				icon: "gesture",
				link: "...",
				children: this.children,
			},
			{
				name: "3D Arts",
				icon: "grain",
				link: "...",
				children: this.children,
			},
			{
				name: "Paintings",
				icon: "brush",
				link: "...",
				children: this.children,
			},
			{
				name: "Animations",
				icon: "movie_creation",
				link: "...",
				children: this.children,
			},
		];
	}
}

interface NavMenuItem {
	name: string;
	icon?: string;
	link: string;
	children?: NavMenuItem[];
	selected?: boolean;
}
