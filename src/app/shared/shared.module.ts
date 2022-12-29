import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostModalComponent } from './components/create-post/create-post-modal/create-post-modal.component';
import {MatDialogModule} from '@angular/material/dialog';

const COMPONENTS: any[] = [
  CreatePostComponent,
  PostComponent
];

const NB_MODULES: any[] = [
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule
];


@NgModule({
  declarations: [...COMPONENTS, CreatePostModalComponent],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [...COMPONENTS, ...NB_MODULES]
})
export class SharedModule { }
