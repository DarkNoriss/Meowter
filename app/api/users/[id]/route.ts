import { UserWithMeows } from '@/types/custom-types';
import { prisma } from '@/utils/connectToDb';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const userMeows: UserWithMeows = await prisma.user.findUnique({
      where: { userlink: params.id },
      include: {
        meows: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    return new Response(JSON.stringify(userMeows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch user', { status: 500 });
  }
};
