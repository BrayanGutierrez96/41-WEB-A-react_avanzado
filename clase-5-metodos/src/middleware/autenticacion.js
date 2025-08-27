export default function autenticacion(req,res,next){

    const { userName, password } = req.query;
    if (!userName || !password)
      return res.send(`<h1>Debes ingresar los datos corectos</h1>`);
    if (userName !== "john" && password !== "1234")
      return res.send(`<h1>Usario o contraseña incorrectos</h1>`);
  
    next();
}