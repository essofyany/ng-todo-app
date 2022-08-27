import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleTodoComponent } from './pages/single-todo/single-todo.component';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonCardComponent } from './components/skeleton-card/skeleton-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleTodoComponent,
    EditTodoComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AsideComponent,
    TodoCardComponent,
    SkeletonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
