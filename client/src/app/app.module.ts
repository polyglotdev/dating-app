import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ListsComponent } from './lists/lists.component'
import { MemberDetailComponent } from './members/member-detail/member-detail.component'
import { MemberListComponent } from './members/member-list/member-list.component'
import { MessagesComponent } from './messages/messages.component'
import { SharedModule } from './modules/shared.module'
import { NavComponent } from './nav/nav.component'
import { RegisterComponent } from './register/register.component'
import { TestErrorsComponent } from './errors/test-errors/test-errors.component'
import { HttpConfigInterceptor } from './interceptors/httpconfig.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ListsComponent,
    MessagesComponent,
    MemberListComponent,
    MemberDetailComponent,
    TestErrorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
