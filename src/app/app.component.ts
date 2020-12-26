import { Component } from "@angular/core";
import { Item } from "./components/item/item.interface";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	public items: Item[] = [
		{
			title: "Hollow Knight",
			subTitle: "Queen's Garden",
			avatar: "./assets/avatar.png",
			asset: "./assets/pictures/hollow-knight-queens-garden.jpg",
			tags: ["Photoshop", "Hollow Knight", "Fanart"],
		},
		{
			title: "Random",
			subTitle: "Cool Robot",
			avatar: "./assets/avatar.png",
			asset: "./assets/pictures/04.jpg",
			tags: ["Photoshop", "Hollow Knight", "Fanart"],
		},
		{
			title: "Plagiat",
			subTitle: "Star Wars",
			avatar: "./assets/avatar.png",
			asset: "./assets/pictures/10_Tanks.jpg",
			tags: ["Photoshop", "Hollow Knight", "Fanart"],
		},
		{
			title: "Random",
			subTitle: "Wild World",
			avatar: "./assets/avatar.png",
			asset: "./assets/pictures/10.jpg",
			tags: ["Photoshop", "Hollow Knight", "Fanart"],
		},
		{
			title: "Hollow Knight",
			subTitle: "Queen's Garden",
			avatar: "./assets/avatar.png",
			asset: "./assets/pictures/hollow-knight-queens-garden.jpg",
			tags: ["Photoshop", "Hollow Knight", "Fanart"],
		},
		{
			title: "Hollow Knight",
			subTitle: "Queen's Garden",
			avatar: "./assets/avatar.png",
			asset: "./assets/pictures/hollow-knight-queens-garden.jpg",
			tags: ["Photoshop", "Hollow Knight", "Fanart"],
		},
		{
			title: "Vertical test",
			subTitle: "IT WILL WORK",
			avatar: "./assets/avatar.png",
			asset: "./assets/pictures/06.jpg",
			tags: ["Photoshop", "Hollow Knight", "Fanart"],
		},
	];
}
