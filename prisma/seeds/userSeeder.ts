import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import type { User } from "../../src/types/index";

const bcrypt = require("bcrypt");

const Prisma = new PrismaClient();

 
async function userSeeder() {
    const password: string = await bcrypt.hash("password", 10);
    for (let i = 0; i < 10; i++){

        const firstName : string = faker.person.firstName();
        const lastName : string = faker.person.lastName();

        const name = `${firstName} ${lastName}`;
        const username = `${firstName}${lastName[0]}`.toLowerCase();
        const bio = faker.person.bio();
        const UserInfo : User = {
            username,
            name,
            bio,
            password
        }

        await Prisma.user
            .upsert({
                where: { username },
                update: {},
                create: UserInfo
            })
    }
    console.log("User seeding complete");
}

userSeeder();