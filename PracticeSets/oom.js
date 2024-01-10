let DATA = "secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new value";
    }
}

let student1 = new User("swayam", "abc@gamil.com");
let student2 = new User("aman", "aman@gamil.com");

let teacher1 = new User("Dean", "dean@college.com");
let admin1 = new Admin("admin", "admin@college.com");