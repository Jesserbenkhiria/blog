
import Blog from '../scripts/blog.js'

class View {

    constructor() {
        //use of jquery to get the elements
        this.$button = $('#button')
        this.$logo=$('#logo')
        this.$dialog=$('#dialog')
    
    }

    //************************************  DO NOT MODIFY THIS CODE  ************************************

    //handle popup events 
    handleShowForm() {
        this.$button.on('click', this.Popup.bind(this))
    }

    Popup() {
        this.$dialog.dialog({
            height: 450,
            minWidth: 800,
            resizable: false,
            close: () => {
               this.$button.removeClass('nav-selected')
               this.$button.addClass('nav-unselected')
                $('#blog-title').val('')
                $('#blog-body').val('')
            },
            open: () => {
               this.$button.removeClass('nav-unselected')
               this.$button.addClass('nav-selected')
            }
        });
    }

    //************************************ START FROM HERE  ************************************

    // dynamic rendering of the data
    renderBlogs(blogs) {
        $("#blogs").empty()
        for(let blog of blogs){
        console.log(Blog.render(blog))
        $("#blogs").append(Blog.render(blog))
        }
    }

    // handle logo click event
    handleLogo(callback){
        this.$logo.on("click",function(){
            location.reload(true)
        })


    }
    
    //handle the form submit event 
    handleSubmit(callback) {
        console.log(callback)
        $(".submit").on("click",function(e){
            e.preventDefault()
            callback({title:$('#blog-title').val(),body:$('#blog-body').val()})
            this.Popup.close()
        })
       
    }


    



}

export default View