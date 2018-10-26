import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './aboutus/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'aboutus',component:AboutComponent},
            {path: 'gallery',component:GalleryComponent},
            {path: 'room',component:RoomsComponent},
            {path: 'contactus',component:ContactusComponent},
            
        ])    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
