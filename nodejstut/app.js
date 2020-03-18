


// function sayhello(name)
// {
//     console.log("hello " + name);

// }
// sayhello('ameya');



// logger=require('./logger.js');
// logger.login('from object')


// log=require('./logger.js');

// log('from function');



// //path module
// const path=require('path');

// var pathobj=path.parse(__filename);
// console.log(pathobj);


// // os module
// const osm=require('os');
// totalMemory=osm.totalmem();
// freeMemory=osm.freemem();
// console.log(`Total memory:${totalMemory }`);
// console.log(`Free memory:${freeMemory }`);

//working wit files inn node(file system module)
//sync
// const fs =require('fs');
// // const files=fs.readdirSync('./');
// // console.log(files);
// //async
// fs.readdir('./',function(err,files)
// {
//     if(err)console.log('ERROR:',err);
//     else console.log('Result:',files);
// });

// EVENT EMIITER MODULE
const EventEmmiter = require('events');
emmiter=new EventEmmiter();

//register listener
 emmiter.on('message', function (){
console.log("listener called");
 });

 //raise an  event
emmiter.emit('message');