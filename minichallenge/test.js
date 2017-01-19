
// UNCOMMENT THE PART THAT YOU WOULD LIKE TO USE

//QUESTION 1
// function multiplier(number){
//     this.n=1;
//     this.number=number;
//     this.multiply=function(){
//         this.n=this.number*this.n;
//         return this.n;
//     }
//     this.getCurrentValues=function(){
//         return this.n
//     }
//     console.log(this.getCurrentValues)
// }

// QUESTION 2
// function Photo(namephoto, locationphoto){
//     this.namephoto= namephoto;
//     this.locationphoto=locationphoto;
// }


// function Album(photo){
//     // this.photo=photo;
//     this.listphoto=[];

//     this.adding=function(photo){
//         this.listphoto.push(photo);
//     }
//     this.listing=function(){
//         for(i=0;i<this.listphoto.length;i++){
//                console.log(this.listphoto[i].namephoto)}
//     }
//     this.getphoto=functiont(position){
//         console.log(this.listphoto[postion-1])

//     }
// }

//var photo1 = new Photo("photo1", "USA")
//var photo2 = new Photo("photo2", "UK")
//var myalbum= new Album(photo1)
//myalbum.adding(photo1)
//myalbum.adding(photo2)
//myalbum.listing()

// QUESTION 3

function Person(name,age){
  this.name = name;
  this.age = age;

}

function Teacher(name,age,classroom){
  Person.apply(this, arguments); // Call parent constructor with person prototype context.
  this.classroom=classroom;   
}

function Student(name,age,debt){
  Person.apply(this, arguments); // Call parent constructor with person prototype context.
  this.debt= debt;
}

function School(){
    this.teachers=[];
    this.students=[];
}

Teacher.prototype = new Person();
Student.prototype = new Person();
var student = new Student("Chuong",20,15000);
var teacher = new Teacher("Alex",38,"12A");
School.teachers.push(teacher)
console.log(teacher)
console.log(student)