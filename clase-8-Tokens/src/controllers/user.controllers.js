import User from "../models/user.schema.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../libs/generateToken.js";

export const getUsers = async (req, res) => {
  res.json({ mensaje: "Hola" });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      res.status(400).json({ mensaje: "Faltan datos obligatorios" });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: passwordHash });
    const newUser = await user.save();

    const token = await generateToken(newUser._id);
    res.set("authorization", token);

    if (!newUser)
      res.status(400).json({ mensaje: "Error al registrar usuario" });

    res.status(201).json({ mensaje: "Usuario registrado", user });
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      res.status(400).json({ mensaje: "Faltan datos obligatorios" });

    const userFound = await User.findOne({ email });
    if (!userFound)
      res.status(404).json({ mensaje: "Email o contraseña incorrectos" });

    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if (!passwordMatch)
      res.status(404).json({ mensaje: "Email o contraseña incorrectos" });

    const token = await generateToken(userFound._id);
    const tokenBearer = `Bearer ${token}`;
    res.set("authorization", tokenBearer);
    res.status(200).json({
      tokenBearer,
      mensaje: "Sesión iniciada",
    });
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "");
    res.status(200).json({ mensaje: "Sesión cerrada" });
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
};
