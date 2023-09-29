import { createFilme, deleteFIlme, getAllFilmes, getFilmeByiD, updateFilme } from "../services/FilmeService.js";


export const home= (req,res)=>{
    res.send("Ok")
}

export const getFilmes = async (req,res)=>{
    try{
        const filmes = await getAllFilmes()
        res.status(200).json({data:filmes, status:"sucess"})
    }catch(error){
        res.status(500).json({"error": error})
    }
}

export const createFilmes = async (req,res)=>{
    try{
        const filme = await createFilme(req.body)
        res.status(201).json({data:filme , status:"sucess"})
    }catch(error){
        res.status(500).json({"error":error})
    }
}

export const getFilmesByiD= async (req,res)=>{
    const {id}= req.params
    try{
        const filme = await getFilmeByiD(id)
        if(!filme){
            res.status(404).json({message:"filme nao encontrado"})
            return
        }
        res.status(200).json({data:filme , status:"sucess"})
    }catch(error){
        res.status(500).json({"error":error})
    } 
}

export const updateFilmes = async (req,res)=>{
    const filmeAtualizado = req.body
    try{
       const filme = await updateFilme(req.params.id, req.body)
       res.status(200).json({data:filmeAtualizado, status:"sucess"})
    }catch(error){
        res.status(500).json({"error":error})
    } 
}

export const deleteFilmes = async (req,res)=>{
    try{
        const filme = await deleteFIlme(req.params.id)
        if(!filme){
            res.status(404).json({message:"Filme nao encontrado"})
            return 
        }
        res.status(200).json({data:filme, status:"sucesso"})
     }catch(error){
         res.status(500).json({"error":error})
     } 
}