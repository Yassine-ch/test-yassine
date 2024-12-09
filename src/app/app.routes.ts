import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostListComponent } from './post-list/post-list.component';

export const routes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'login', component: AuthentificationComponent },
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        HttpClientModule,
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}