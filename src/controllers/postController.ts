import { prisma } from "../../prismaClient";
import type { Request, Response } from 'express';


// get all post
export const index = async (req: Request, res: Response): Promise<void> => {
    try{
        const data = await prisma.post.findMany({
            include: {
                user: true,
                comments: true,
            },
            orderBy: {
                id: "desc",
            },
            take: 20,
        });
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err });
    }
}


// get a post by ID
export const getPostById = async ( req: Request, res : Response): Promise<void> => {
    try{
        const { id } = req.params;
        const data = await prisma.post.findFirst({
            where:{ id: Number(id) },
            include:{
                user: true,
                comments: true,
            }
        })
        res.json(data);
    }
    catch(err){
        res.status(500).json({ error: err });
    }
}