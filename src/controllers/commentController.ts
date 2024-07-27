import { prisma } from "../../prismaClient";
import type { Request, Response } from 'express';

export const deleteCommentById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        // delete a comment
        await prisma.comment.delete({
            where: { id: Number(id) },
        });

        res.status(204);

    } catch (err) {
        res.status(500).json({ error: err });
    }
};