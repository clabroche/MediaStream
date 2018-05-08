import { Routes } from '@angular/router'
import { MusicComponent } from "../app/music/music.component";

export const profile = 'app/profilePage/profilePage.module#ProfilePageModule'
/**
 * Describe all routes of the home component (imported routing module)
 */
export const HomeRoutes: Routes = [
    { 
        path: "music", 
        loadChildren: "app/music/music.module#MusicModule" 
    }
]