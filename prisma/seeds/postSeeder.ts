import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import type { Post } from "../../src/types/index";

const Prisma = new PrismaClient();

async function PostSeeder() {

    const data: Post[] = [];

    for (let i = 0; i < 20; i++) {

        const content: string = faker.lorem.paragraph();
        const userId: number = faker.number.int({ min: 1, max: 10 });
        data.push({ content, userId });

    }
    console.log("Post seeding started...");

    await Prisma.post.createMany({ data });

    console.log("Post seeding done.");
}

PostSeeder();