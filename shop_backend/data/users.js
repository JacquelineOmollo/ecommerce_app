import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin",
        email: "admin@test.com",
        password: bcrypt.hashSync('test', 8),
        isAdmin: true
    },
    {
        name: "Jackie",
        email: "Jackie@test.com",
        password:bcrypt.hashSync('test', 8),
      
    },
    {
        name: "Eden",
        email: "Eden@test.com",
        password: bcrypt.hashSync('test', 8),
       
    },
]

