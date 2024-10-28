// prisma/seed.ts
import "dotenv/config";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
console.log(prisma);
console.log("prisma client established");

async function findUnique(userdata) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: userdata.data.email,
    },
  });

  return existingUser;
}

async function main() {
  // Seed users
  const usersData = [
    {
      data: {
        email: "user1@example.com",
        password: "password123",
        name: "User One",
      },
    },
    {
      data: {
        email: "user2@example.com",
        password: "password456",
        name: "User Two",
      },
    },
  ];

  for (const userData of usersData) {
    const unique = await findUnique(userData);
    if (unique) {
      console.log("User with this email already exists");
    } else {
      const user = await prisma.user.create(userData);
    }
  }
}

// Seed categories
const category1 = await prisma.category.create({
  data: {
    name: "Electronics",
  },
});

const category2 = await prisma.category.create({
  data: {
    name: "Books",
  },
});

// Seed products
const product1 = await prisma.product.create({
  data: {
    name: "Laptop",
    description: "A high-performance laptop.",
    price: 1000,
    stock: 50,
    categoryId: category1.id,
  },
});

const product2 = await prisma.product.create({
  data: {
    name: "Book",
    description: "An interesting book.",
    price: 20,
    stock: 200,
    categoryId: category2.id,
  },
});

// Seed orders
const order1 = await prisma.order.create({
  data: {
    userId: "aaaaaa12345",
    total: 1020,
    status: "Completed",
    items: {
      create: [
        {
          productId: product1.id,
          quantity: 1,
        },
        {
          productId: product2.id,
          quantity: 1,
        },
      ],
    },
  },
});

const order2 = await prisma.order.create({
  data: {
    userId: "aaaaaa12345",
    total: 1000,
    status: "Pending",
    items: {
      create: [
        {
          productId: product1.id,
          quantity: 1,
        },
      ],
    },
  },
});

// Seed reviews
const review1 = await prisma.review.create({
  data: {
    rating: 5,
    comment: "Great product!",
    productId: product1.id,
  },
});

const review2 = await prisma.review.create({
  data: {
    rating: 4,
    comment: "Very useful.",
    productId: product2.id,
  },
});

console.log("Database has been seeded. 🌱");
console.log(process.env.DATABASE_URL);

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
