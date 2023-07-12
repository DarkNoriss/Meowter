import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const userMeows = await prisma.user.findUnique({
      where: { userlink: params.id },
      include: {
        meows: {
          include: {
            author: true,
          },
          orderBy: {
            created_at: 'desc',
          },
        },
      },
    });

    return new Response(JSON.stringify(userMeows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch user', { status: 500 });
  }
};

// try {
//   await connectToDB();

//   const user = await User.find({ userlink: params.id }).populate({
//     path: 'meows',
//     options: { sort: { date: -1 } },
//   });

//   return new Response(JSON.stringify(user[0]), { status: 200 });
// } catch (e) {
//   return new Response('Failed to fetch user', { status: 500 });
// }
