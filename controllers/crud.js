const connection = require('../Database/bd');

exports.save = (req, res)=>{
const Nombre= req.body.Nombre;
const Primer_apellido= req.body.Primer_apellido;
const Segundo_apellido = req.body.Segundo_apellido;
const Edad = req.body.Edad;
const Documento = req.body.Documento;
const Direccion= req.body.Direccion;
const Celular= req.body.Celular;
const Correo = req.body.Correo;
const Formacion= req.body.Formacion;
const Experiencia= req.body.Experiencia;
connection.query('INSERT INTO ASPIRANTE SET ?', {Nombre:Nombre, Primer_apellido:Primer_apellido,  
                                                 Segundo_apellido:Segundo_apellido, Edad:Edad, Documento:Documento,
                                                 Direccion:Direccion, Celular:Celular, Correo:Correo,
                                                 Formacion:Formacion, Experiencia:Experiencia} , (error, results)=>{
                                                    if(error){
                                                        console.log(error);
                                                    }else{
                                                        res.redirect('/');
                                                    }
                                                 });
}

exports.update = (req, res)=>{
    const ID =req.body.ID;
    const Nombre= req.body.Nombre;
    const Primer_apellido= req.body.Primer_apellido;
    const Segundo_apellido = req.body.Segundo_apellido;
    const Edad = req.body.Edad;
    const Documento = req.body.Documento;
    const Direccion= req.body.Direccion;
    const Celular= req.body.Celular;
    const Correo = req.body.Correo;
    const Formacion= req.body.Formacion;
    const Experiencia= req.body.Experiencia;
    connection.query('UPDATE ASPIRANTE SET ? WHERE ID= ?', [{Nombre:Nombre, Primer_apellido:Primer_apellido,  
                                                     Segundo_apellido:Segundo_apellido, Edad:Edad, Documento:Documento,
                                                     Direccion:Direccion, Celular:Celular, Correo:Correo,
                                                     Formacion:Formacion, Experiencia:Experiencia},ID] , (error, results)=>{
                                                        if(error){
                                                            console.log(error);
                                                        }else{
                                                            res.redirect('/');
                                                        }
                                                     });
    }