const con =require("./config");
const express=require('express');
const cors=require('cors');
const app = express();
app.use(express.json());
app.use(cors());

/* define api end point to get todo from the table */

app.get('/todo',async(req,resp)=>{
    con.query("SELECT * FROM tododata",(err,results)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(results);
        }
    })
})

/* define api end point to post todo from the front end and store in the database */


app.post('/todo',async(req,resp)=>{
    const data=req.body;
    con.query("INSERT INTO tododata SET ?",data,(err,result,fields)=>{
        if(err){
            throw err;
        }else{
            resp.send(result);
        }
    })
})

/* define api end point to delete a todo from the table with respect to its spcified id */


app.delete('/:id',async(req,resp)=>{
    con.query("DELETE FROM tododata WHERE id="+req.params.id,(err,result,fields)=>{
        if(err){
            throw err;
        }else{
            resp.send(result);
        }
    })
})


app.listen(5000,()=>{
    console.warn("server started");
})