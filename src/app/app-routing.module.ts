import { ItemListComponent } from "./components/item-list/item-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/2019",
		pathMatch: "full",
	},
	{
		path: ":id",
		component: ItemListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
