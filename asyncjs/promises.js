const posts = [
    { title: 'post one', body: 'this is the first post' },

    { title: 'post two', body: 'this is the second post' },

    { title: 'post three', body: 'this is the third post' }
];


function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;
            if (!error) {
                resolve('succesfull');
            }
            else {
                reject('Error:Somethihng went wrong ');
            }
        }, 1000);

    });

}
// createPost({ title: 'post four', body: 'this is the tfourth post' })
//     .then(getPost)
//     .catch(err => console.log(err));


//async await
async function init ()
{
    await createPost({ title: 'post four', body: 'this is the tfourth post' });
    getPost();
}
init();

// //promise.all

// const prom1= Promise.resolve('hello world');
// const prom2= new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'goobye')    
// );
// const prom3= fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
// Promise.all([prom1,prom2,prom3]).then(values=>console.log(values));