import API from '../scripts/api.js'
class Controller {

    constructor(model, view) {
        this.model = model
        this.view = view
        this.author=window.location.search.substr(10), 
        this.view.handleShowForm()
        this.fetch()
        this.view.handleSubmit(this.createBlog.bind(this))
    }


    //a function to  get the  data from the api
    fetch() {
        var that = this
        API.readAll(API.server,function(data){
            console.log(this)
            that.model.addBlogs(data)
            that.view.renderBlogs(that.model.blogs)
        },function(){
            console.log("problem")
        })
    }

    // a function to send a blog to the api
    createBlog(blog) {
        API.create(API.server,{...blog,author:this.author},()=>{this.fetch()},function(){console.log("fail")}) 
        
    }



}
export default Controller