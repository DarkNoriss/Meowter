import { UserWithMeows } from '@/types/custom-types';
import { prisma } from '@/utils/connectToDb';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const userMeows: UserWithMeows = await prisma.user.findUnique({
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
