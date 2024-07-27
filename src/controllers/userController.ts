import { prisma } from "../../prismaClient";
import type { Request, Response } from 'express';


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
        res.status(500).json({ error: err });
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
        res.status(500).json({ error: err });
    }
}