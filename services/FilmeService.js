import { Filme } from "../models/filme.js";



export const getAllFilmes = ()=>{
    return  Filme.find()
}

export const createFilme =async (filme)=>{
    return await Filme.create(filme)
}

export const getFilmeByiD = async (id)=>{
    return await Filme.findById(id)
}

export const updateFilme = async (id, filme)=>{
    return Filme.findByIdAndUpdate(id, filme)
}

export const deleteFIlme = async (id)=>{
    return Filme.findByIdAndDelete(id)
}