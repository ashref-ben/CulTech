import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/Services/Blog/blog.service'
import { ReactionsService } from 'src/app/Services/Blog/reactions.service'

import { Blog } from 'src/app/models/Blog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Reaction } from 'src/app/models/Reactions';

export interface Tags {
  name: string;
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  list_blogs: Blog[] = [];  selectedBlog: Blog = {};

  list_reaction: Reaction[] = [];
  selectedFile: File | null = null;

  showDropdown = false;
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  constructor(private blogService: BlogService, private reactionservice: ReactionsService, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.selectedBlog.iduser = 2;// user id 
    this.loadAllBlogs();    
  }

  //****************************** */BLOG
  loadAllBlogs(): void {
    this.blogService.getBlogs().subscribe(
      (data: Blog[]) => {
        this.list_blogs=data;
      console.log(data);   
    });      
  }


  submitBlog(): void {
    const formData: FormData = new FormData();

    if (this.selectedBlog) {
      if (this.selectedBlog.title) {
        formData.append('title', this.selectedBlog.title);
      }
      if (this.selectedBlog.country) {
        formData.append('country', this.selectedBlog.country);
      }
      if (this.selectedBlog.description) {
        formData.append('description', this.selectedBlog.description);
      }
    }
    formData.append('iduser', '2');
    formData.append('address', 'nchalah google maps');

    if (this.selectedFile) {
      formData.append('pictures', this.selectedFile, this.selectedFile.name);
    }

    this.selectedFruits.forEach(fruit => {
      if (fruit) {
        formData.append('hashtags', fruit);
      }
    });

    this.blogService.addBlog(formData).subscribe(
      response => {
        console.log('Blog created successfully', response);
        this.loadAllBlogs();
        this.selectedBlog = {} as Blog;
        this.selectedFile = null;
      },
      error => {
        console.log('Error occurred:', error);
      }
    );
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  delete(id: any) {
    this.blogService.deleteBlog(id).subscribe((response) => {
      this.loadAllBlogs();
    });
  }


  //******************************* */hashtags
  selectedFruits: string[] = ['Vacation', 'travel'];
  newFruit: string = '';

  addFruit() {
    if (this.newFruit && !this.selectedFruits.includes(this.newFruit)) {
      this.selectedFruits.push(this.newFruit);
      this.newFruit = '';
    }
  }

  removeFruit(fruit: string) {
    const index = this.selectedFruits.indexOf(fruit);
    if (index > -1) {
      this.selectedFruits.splice(index, 1);
    }
  }
  //******************************* */reactions
  


}

