import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import type { Comment } from "../../src/types/index";

const Prisma = new PrismaClient();


async function CommentSeeder() {
    const data : Comment[] = [];
    for (let i = 0; i < 40; i++) {
        const content: string = faker.lorem.paragraph();
        const userId: number = faker.number.int({ min: 1, max: 10 });
        const postId: number = faker.number.int({ min: 1, max: 20 });
        data.push({ content, userId, postId });
    }

    console.log("Comment seeding started...");

    await Prisma.comment.createMany({ data });

    console.log("Comment seeding done.");
}

CommentSeeder();