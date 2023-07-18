import { UserWithMeows } from '@/types/custom-types';
import { prisma } from '@/utils/connectToDb';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const userWithMeows: UserWithMeows = await prisma.user.findUnique({
      where: { userlink: params.id },
      include: { meows: true },
    });

    return new Response(JSON.stringify(userWithMeows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch user', { status: 500 });
  }
};
