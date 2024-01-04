const mysql = require('mysql');

// Create a connection to the MySQL server
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'tododatabase',
});

// Define the SQL command to create a table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tododata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255)
  )
`;

con.connect((err)=>{
    if(err){
        /* if error console the error */
        console.warn("connection failed");
    }else{
        console.warn("connected");
        /* else console connected and create a table in database dynamiclly */
        con.query(createTableQuery,(err,results)=>{
            if (err) {
                console.error('Error creating table:', err.message);
              } else {
                console.log('Table created successfully.',results);
              }
            
        });
    }
})

module.exports= con;