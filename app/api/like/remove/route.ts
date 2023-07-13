import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';
import { prisma } from '@/utils/connectToDb';

export const POST = async (req: Request) => {
  const { meowId } = await req.json();
  const session = await getServerSession(options);

  try {
    if (session) {
      const like = await prisma.like.findFirst({
        where: {
          userId: session.user.id as string,
          meowId: meowId as string,
        },
      });

      if (like) {
        await prisma.like.delete({
          where: {
            id: like.id,
          },
        });
        return new Response('Successfully deleted the like.', { status: 201 });
      }
    }
  } catch (err) {
    return new Response('Failed to delete the like.', { status: 500 });
  }
};
