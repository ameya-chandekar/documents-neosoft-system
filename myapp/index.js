const Joi = require('joi');
const express = require('express');

const app = express();
app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send("hello trying express js first time");
// });
// app.get('/api/courses',(req,res)=>{
//     res.send(["js","noide","react"]);
// });
const courses =
    [
        { id: 1, name: 'nodejs' },
        { id: 2, name: 'reactjs' },
        { id: 3, name: 'vuejs' }
    ];




app.get('/', (req, res) => {
    res.send("hello trying express js first time");
});
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course does not exist with such id")
    res.send(course);
});
app.post('/api/courses', (req, res) => {
    // const schema={
    //     name: Joi.string().min(3).required()
    // };
    // const result =Joi.validate(req.body,schema);
    // console.log(result);

    //     if(result.error)
    //     {
    //         res.status(400).send(result.error.details[0].message);

    //     }
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id',(req, res)=> {
    //look up for course 
    //return 404 if it doesnt exist
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("The course does not exist with such id")
  //vallidate 
    //return 400 if invalid

    //const result= validateCourse(req.body);
     const{ error } = validateCourse(req.body);//object destructuring using this line instead og above line 
    // {error} is equivalent to result.error
  if(error) {
        res.status(400).send(error.details[0].message);

    }
   //update course 
    course.name=req.body.name;
    //return updated course
    res.send(course);
});

app.delete('/api/courses/:id',(req,res)=> 
{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("The course does not exist with such id");

    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));