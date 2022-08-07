let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    formValidation()
   
})

let formValidation = () =>{
    if(input.value===""){
        msg.innerHTML = "Post can not be blank"
    }
    else{
        msg.innerHTML = ""
        acceptData()
    }

}

let data = {}

let acceptData = () =>{
    data["text"] = input.value
    console.log("data accepted");
    createPost()
}

let createPost = () =>{
    posts.innerHTML += `<div>${data.text}</div>`
}

//38.59