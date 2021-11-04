const express = require("express");
const faker = require("faker")
const app = express()
const port = 8000

class User {
    constructor(){
        this._id = faker.datatype.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor(){
        this._id = faker.datatype.number()
        this.name = faker.company.companyName()
        this.address = [{
            street: faker.address.streetName(), 
            city: faker.address.city(), 
            state: faker.address.state(), 
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }]
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User);
})

app.get("/api/company/new", (req, res) => {
    res.json(new Company);
})

app.get("/api/user/company", (req, res) => {
    const user = new User;
    const company = new Company;
    const user_in_company = {user, company}
    res.json(user_in_company);
})

app.listen(port, ()=>console.log(`Listening on port: ${port}`) );