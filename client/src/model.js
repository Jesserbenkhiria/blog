class Model {
    constructor() {
        //a state of the model 
        this.blogs = []
    }
     

    // a function to add blogs to the state
    //this function should filter to not add empty blogs
    addBlogs(blogs) {
     console.log(blogs)
      this.blogs = []
      for(var blog of blogs){
        console.log(blog)
        if(blog.body && blog.title && blog.author ){
            this.blogs.push(blog)
        }
      }
    }
}

export default Model