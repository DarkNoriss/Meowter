import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';
import { prisma } from '@/utils/connectToDb';

export const POST = async (req: Request) => {
  try {
    const { meowId } = await req.json();
    if (!meowId) {
      return new Response('Invalid input: meowId is required.', { status: 400 });
    }

    const session = await getServerSession(options);
    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }

    const like = await prisma.like.findFirst({
      where: {
        userId: session.user.id as string,
        meowId: meowId as string,
      },
    });

    if (like) {
      await prisma.like.delete({
        where: { id: like.id },
      });

      return new Response('Successfully deleted the like.', { status: 201 });
    } else {
      return new Response('Like not found.', { status: 404 });
    }
  } catch (err) {
    console.error('Error deleting like:', err);

    return new Response(`Failed to delete the like. Error: ${err}`, { status: 500 });
  }
};
