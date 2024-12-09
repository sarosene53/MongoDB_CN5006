const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/week8';
mongoose.connect(MONGO_URI).then(() => {
    console.log(`Connected to ${MONGO_URI}`);
}).catch(err => {
    console.log("Error occurred during connection: " + err);
});

const db = mongoose.connection;

db.on('error', function(err) {
    console.log("Error occurred during connection: " + err);
});

const PersonScheme = new mongoose.Schema({
    name: {type: String, required: true},
    age: Number,
    Gender: String,
    Salary: Number
});

const person_doc = mongoose.model('modelname', PersonScheme, 'personCollection');
// const doc1 = new person_doc({ name: 'Saroj', age: 18, Gender:"Male", Salary:23456 });

/* doc1
    .save()
    .then((doc1) => {
        console.log("New Article Has been Added Into Your DataBase", doc1);
    })
    .catch((err) =>{
        console.error(err);
    });
*/

/* const manypersons=[
    {  name:  'Simon',age:42,Gender:"Male",Salary:3456 },
    {  name:  'Neesha',age:23,Gender:"Female",Salary:1000  },
    {  name:  'Mary',age:27,Gender:"Female",Salary:5402    },
    {  name:  'Mike',age:40,Gender:"Male",Salary:4519   }
    ];

person_doc.insertMany(manypersons).then(() => {
    console.log("Data inserted");
    })
    .catch((error) => {
        console.log("Error inserting data: ", error)
    });
*/

/*Finding People in database
person_doc.find({})
    .sort({Salary: 1})
    .select('name Salary Gender age')
    .limit(5)
    .exec()
    .then(docs => {
        console.log("Showing 5 Documents")
        docs.forEach(function(Doc) {
            console.log(Doc.age, Doc.name, Doc.Gender, Doc.Salary);
        })
    })
    .catch(err => {
        console.error(err)
    })
*/

/*Finding People in database by filtering
var givenage = 30
person_doc.find({Gender:"Female", age:{$gte:givenage}})
    .sort({Salary: 1})
    .select('name Salary age')
    .limit(10)
    .exec()
    .then(docs => {
        console.log("Showing Female having age greater than 30")
        docs.forEach(function(Doc) {
            console.log(Doc.age, Doc.name);
        })
    })
    .catch(err => {
        console.error(err)
    })
*/

/*  Counting all the documents
person_doc.countDocuments().exec()
    .then(count=>{
        console.log("Total  documents  Count  :",  count)
    })
    .catch(err  =>  {
        console.error(err)
    })
*/

/*Delete the documents for a given criteria
person_doc.deleteMany(
    {  age:  {  $gte:  25  }  }
    )
    .exec()
    .then(docs => {
        console.log('deleted  documents  are:',docs);
    }).catch(function(error){
        console.log(error);
    });
*/

//update all document of which the gender is female and set their salary to 5555
person_doc.updateMany({  Gender:  "Female"  }, { $set: { Salary: 5555 } })
    .then(docs => {
        console.log("update")
        console.log(docs);
    })
    .catch(function(error){
        console.log(error);
    });