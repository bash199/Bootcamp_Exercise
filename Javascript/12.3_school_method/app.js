const school = {
   teachers: [
   {
   id: 1,
   name: "Pinchas",
   subjects: ["chemistry", "biology", "physics"],
   students: [],
   capacityLeft: 3,
   },
   {
   id: 2,
   name: "Williams",
   subjects: ["history", "ethics"],
   students: [],
   capacityLeft: 2,
   },
   ],
   students: [
   {
   id: 10,
   name: "Jennifer",
   age: 20,
   },
   {
   id: 11,
   name: "Howard",
   age: 23,
   },
   {
   id: 12,
   name: "Old-Timmy",
   age: 86,
   },
   {
   id:13,
   name: "Houston",
   age: 21,
   },
   ],
   findPerson(type,id){
      if(type=='teachers'){
         school.teachers.find(element=>{
            if(element.id==id){
               console.log(element); 
            } 
         });
      }
      else{
         school.students.find(element=>{
            if(element.id==id){
               console.log(element); 
            }
         })
      }
      
   },
   assignStudent(id,subject){
      school.teachers.filter(element=>{
         if(element.subjects.includes(subject)&&element.capacityLeft>0){
            school.students.filter(el=>{ 
               element.students.push(el)
            });
            console.log(element);
         }
         
         else if(element.capacityLeft==0){
            console.log('Sorry, no available teachers left');
         }
         
      }); 
   },

   assignTeachersSubject(id,subject){
      school.teachers.filter(element=>{

         if((element.id==id) && (element.subjects!=subject)){

            element.subjects.push(subject)
         }
         console.log(element);
      });
   }
}

//? Take the school object and create the following methods to that object:
//? 1. A method called “findPerson” takes two arguments, a type (either a student or teacher), and an id. It will return a particular object of that person.

// console.log(school.findPerson('teachers',2));

//? 2. A method called “assignStudent” that takes two arguments, a student’s id and a subject. Assign all of the students to the first available teacher who teaches that subject and who is not in full capacity. If all of the teachers are in the full capacity log to the console “Sorry, no available teachers left”.
console.log(school.assignStudent(13,"chemistry"));

//? 3. A method called “assignTeachersSubject” that takes two arguments, the teacher’s id, and a new subject. Assign the new subject to that particular teacher if that subject doesn’t exist in their array of subjects.
// console.log(school.assignTeachersSubject(2,"chemistry"));

//? 4. Create a new method for anything you want.
