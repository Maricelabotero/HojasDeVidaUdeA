const mysql= require('mysql');
const connection = mysql.createConnection({
    host: 'bxvn5pqpnge7hdtzpfcy-mysql.services.clever-cloud.com',
    user: 'u4wxmjjofaabtxly',
    password:'GyX6QeMJfkFayV5ru6sB',
    database: 'bxvn5pqpnge7hdtzpfcy'
});

connection.connect((error)=>{
if(error){
    console.error('Error: '+ error);
    return
}
console.log('Base de datos conectada');
});

module.exports = connection;