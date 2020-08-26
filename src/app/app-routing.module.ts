import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { from } from 'rxjs';

const routes: Routes = [
    {
        path: '', component: AlbumsComponent
    },
    {
        path: 'photos/:albumId', component: PhotosComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
