import { Routes, RouterModule } from '@angular/router';

import { EverybodyComponent } from './everybody/everybody.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { TurnipComponent } from './turnip/turnip.component';
import { FriendsComponent } from './friends/friends.component';
import { GatesComponent } from './gates/gates.component';
import { AuthGuardService } from './_services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:username', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'turnip', component: TurnipComponent, canActivate: [AuthGuardService] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuardService] },
  { path: 'everybody', component: EverybodyComponent, canActivate: [AuthGuardService] },
  { path: 'gates', component: GatesComponent, canActivate: [AuthGuardService] },

  { path: '**', redirectTo: '' }
];

export const AppRoutesModule = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
