import { Component, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	@Input()
	public drawer: MatDrawer;

	public searchTerm: string;

	constructor() {}

	focus(input: HTMLElement): void {
		input.style.width = "240px";
	}

	blur(input: HTMLElement): void {
		input.style.width = "180px";
	}
}
