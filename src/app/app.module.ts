import { ItemListComponent } from "./components/item-list/item-list.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemComponent } from "./components/item/item.component";
import { HeaderComponent } from "./layout/header/header.component";
import { SidenavComponent } from "./layout/sidenav/sidenav.component";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [AppComponent, HeaderComponent, SidenavComponent, ItemComponent, ItemListComponent],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
