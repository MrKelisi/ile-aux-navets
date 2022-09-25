import { Routes, RouterModule } from '@angular/router';
import { AuthGuardHandler } from '@core/helpers';
import { EverybodyComponent } from '@features/everybody/everybody.component';
import { FriendsComponent } from '@features/friends/friends.component';
import { GatesComponent } from '@features/gates/gates.component';
import { HomeComponent } from '@features/home/home.component';
import { LoginComponent } from '@features/login/login.component';
import { ProfileComponent } from '@features/profile/profile.component';
import { RegisterComponent } from '@features/register/register.component';
import { TurnipComponent } from '@features/turnip/turnip.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:username', component: ProfileComponent, canActivate: [AuthGuardHandler] },
  { path: 'turnip', component: TurnipComponent, canActivate: [AuthGuardHandler] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuardHandler] },
  { path: 'everybody', component: EverybodyComponent, canActivate: [AuthGuardHandler] },
  { path: 'gates', component: GatesComponent, canActivate: [AuthGuardHandler] },

  { path: '**', redirectTo: '' }
];

export const AppRoutesModule = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
