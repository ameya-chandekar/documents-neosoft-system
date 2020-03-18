const posts=[
{ title:'post one', body:'this is the first post'},

{ title:'post two', body:'this is the second post'},

{ title:'post three', body:'this is the third post'}
];


function getPost() {
    setTimeout(() => {
       let output='';
       posts.forEach((post,index)=>{
           output += `<li>${post.title}</li>`;
       } );
       document.body.innerHTML=output;
    }, 1000);
}


function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1000);
}


createPost({ title:'post four', body:'this is the tfourth post'},getPost);
