import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MenuComponent, FooterComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
