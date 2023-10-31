// Q1:-
//for loop:-
var arr=[
    {
        "name":"kabil",
        "gender":"Male"
    },
    { 
        "name":"Priya",
        "gender":"female"
    },
    { 
        "name":"kalai",
        "gender":"Male"
    }
]
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].name,arr[i].gender);
    }

//for in loop:-

var arr=[
        {
            "name":"kabil",
            "gender":"Male"
        },
        { 
            "name":"Priya",
            "gender":"female"
        },
        { 
            "name":"kalai",
            "gender":"Male"
        }
    ]
        for(var i in arr)
        {   
            i,arr[i];
            console.log(arr[i]);

        }
    



// Q2:-

var person={
    "name":"Kalaiyarasan",
    "age":"26",
    "gender":"Male",
    "graduate":"BE MECH",
    "maritalstatus":"Single",
    "country":"India",
    "email":"kalaikabil6464@gmail.com",
    "phone":"9876543210"

}
console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.graduate);
console.log(person.maritalstatus);
console.log(person.country);
console.log(person.email);
console.log(person.phone);