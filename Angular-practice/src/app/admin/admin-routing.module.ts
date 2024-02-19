import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CanActiveGuard } from './can-active.guard';
import { UserComponent } from './user/user.component';
import { DummyComponent } from './admin/dummy/dummy.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    title: 'Admin',
    canLoad: [CanActiveGuard],
    children: [
      { path: 'User', component: UserComponent },
      {
        path: 'dummy',
        component: DummyComponent,
      },
      { path: '' , redirectTo:'User', pathMatch:'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
