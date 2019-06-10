import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitserviceService } from './services/gitservice.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoryComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
