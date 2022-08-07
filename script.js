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
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
        <i class="fa-solid fa-user-pen" onClick="editPost(this)"></i>
        <i class="fa-solid fa-eraser" onClick="deletePost(this)"></i>
    </span>
</div>`

    input.value = ""
}

let deletePost = (e) =>{
    e.parentElement.parentElement.remove()
}

let editPost = (e) =>{
   input.value = e.parentElement.previousElementSibling.innerHTML 
   e.parentElement.parentElement.remove()
}

