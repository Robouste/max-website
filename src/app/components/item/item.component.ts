import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Item } from "./item.interface";

@Component({
	selector: "app-item",
	templateUrl: "./item.component.html",
	styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
	@Input()
	public item: Item;

	public disableClick: boolean = false;

	public get avatarUrl(): string {
		return this.getUrl(this.item.avatar);
	}

	public get assetUrl(): string {
		return this.getUrl(this.item.asset);
	}

	constructor(private matDialog: MatDialog) {}

	open(): void {
		if (this.disableClick) {
			return;
		}
		const diagRef = this.matDialog.open(ItemComponent, {
			panelClass: "item-dialog",
		});
		diagRef.componentInstance.item = this.item;
		diagRef.componentInstance.disableClick = true;
	}

	private getUrl(url: string): string {
		return `url('${url}')`;
	}
}
