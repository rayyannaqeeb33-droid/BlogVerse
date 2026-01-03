function postBlog(){
  db.collection("posts").add({
    title: title.value,
    content: content.value,
    time: Date.now()
  }).then(()=>{
    alert("Blog Published!");
    title.value="";
    content.value="";
  })
}

function loadPosts(){
  db.collection("posts").orderBy("time","desc").onSnapshot(s=>{
    posts.innerHTML="";
    s.forEach(doc=>{
      let d=doc.data();
      posts.innerHTML += `
      <div class="post">
        <h2>${d.title}</h2>
        <p>${d.content}</p>
      </div>`;
    })
  })
}

if(document.getElementById("posts")) loadPosts();

function logout(){
  firebase.auth().signOut().then(()=>window.location="login.html");
}
