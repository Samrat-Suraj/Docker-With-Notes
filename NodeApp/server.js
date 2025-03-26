import express from "express"
const app = express()

app.get("/" , (req , res)=>{
    res.json([
        {
            id : 2,
            name : "Suraj Maurya",
            age : 20,
        },
        {
            id : 2,
            name : "Rahul kuma",
            age : 33,
        },
        {
            id : 3,
            name : "Rohit Maurya",
            age : 30,
        },
        {
            id : 4,
            name : "Rajesh Maurya",
            age : 311,
        },
        {
            id : 5,
            name : "Ram Maurya",
            age : 42,
        },
    ])
})

const PORT = 5000
app.listen(PORT , () =>{
    console.log("Server is running on port" , PORT)
})