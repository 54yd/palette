//import { createSeedClient } from "@snaplet/seed";
import prisma from "../../common/lib/prisma"; // Adjusted path as needed

async function main() {
  try {
    // Create a seed client
    //const seed = await createSeedClient();
    // Truncate all tables in the database
    //await seed.$resetDatabase();
    // Seed the database with 10 users
    //await seed.user((x) => x(10));
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
