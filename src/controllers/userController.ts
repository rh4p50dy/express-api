import { prisma } from "../../prismaClient";
import type { Request, Response } from 'express';
const bcrypt = require('bcrypt');


// get all post
export const index = async (req: Request, res: Response): Promise<void> => {
    try{
        const data = await prisma.user.findMany({
            include: {
                posts: true,
                comments: true,
            },
            orderBy: {
                id: "asc",
            },
            take: 10,
        });
        res.json(data);
    }catch(err){
        res.status(500).json({ msg: err });
    }
}


// get a post by ID
export const getUserById = async ( req: Request, res : Response): Promise<void> => {
    try{
        const { id } = req.params;
        const data = await prisma.user.findFirst({
            where:{ id: Number(id) },
            include:{
                posts: true,
                comments: true,
            }
        })
        res.json(data);
    }
    catch(err){
        res.status(500).json({ msg: err });
    }
}

export const addUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const { username, name, bio, password } = req.body;
        if(!name || !username || !password){
            res.status(400).json({ msg: "name, username and password are required" });
            return;
        }
        const hash = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username,
                name,
                bio,
                password: hash,
            }
        });
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({ msg: err });
    }
}