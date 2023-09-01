
var API = {

  server:'https://react-blogging-app.onrender.com/api/blogs',

  create: function (url,blog, successCB, errorCB = null) {
    $.ajax({
      url : url,
      type : "POST",
      contentType: 'application/json',
      data:JSON.stringify(blog),
      success : successCB,
      error : errorCB
     })
  },

  readAll: function(url,successCB, errorCB = null) {
    $.ajax({
      url : url,
      type : "GET",
      success : successCB,
      error : errorCB
     })
  } 

}

export default API

