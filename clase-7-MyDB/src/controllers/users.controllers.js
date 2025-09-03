import User from "../models/user.model.js";
export const getUsers = async (req, res) => {
  const users = await User.find();
  const showUsers = users.map((user) => {
    return {
      nombre: user.nombre,
      apellido: user.apellido,
      correo: user.correo,
      id: user.id,
    };
  });

  res.status(200).json({
    results: showUsers,
  });
};


export const createUser = async (req, res) => {
  try {
    const { nombre, apellido, correo, password } = req.body;
    const user = new User({ nombre, apellido, correo, password });
    const result = await user.save();
    contador++;
    if (!result) throw new Error("Error al crear el usuario");

    res.status(201).json({ mensaje: "Usuario creado", usuario: user });
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al crear el usuario", error: error.message });
  }
};

export const deleteUser = async(req,res)=>{
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);

    if(!result) throw new Error("Error al eliminar el usuario");
    res.status(200).json({ mensaje: "Usuario eliminado", id });
    
  } catch (error) {
    res.status(404).json({ mensaje: "Usuario no encontrado", error: error.message });
  }
}










//Plantilla para crear un usuario
// {
//   nombre:{
//     type:String,
//     required:true,
//     minlength:2
//   },
//   apellido:{
//     type:String,
//     required:true,
//     minlength:2
//   },
//   correo:{
//     type:String,
//     required:true,
//     minlength:2,
//     unique:true
//   },
//   password:{
//     type:String,
//     required:true,
//     minlength:8
//   },
// }

{
  /* <input type="text" name="nombre" value="" required minlength="2" unique="true"/> */
}
