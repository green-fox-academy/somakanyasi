'use strict';

import { BlogPost, firstBook, secondBook, thirdBook } from './blog-post';

export class Blog {
  public listOfBlogPosts: BlogPost [];

  constructor () {
    this.listOfBlogPosts = [];
  }

  add(blogpost: BlogPost) {
    this.listOfBlogPosts.push(blogpost);
  }

  delete(index: number) {
    this.listOfBlogPosts.splice(index, 1);
  }

  update(index: number, blogpost: BlogPost) {
    this.listOfBlogPosts[index] = blogpost;
  }
}

let myBlog: Blog = new Blog ();

myBlog.add(firstBook);
myBlog.add(secondBook);
myBlog.add(thirdBook);

myBlog.delete(2);
console.log(myBlog.listOfBlogPosts);

myBlog.update(2, thirdBook)
console.log(myBlog.listOfBlogPosts);
