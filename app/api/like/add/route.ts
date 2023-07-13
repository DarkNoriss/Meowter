import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';
import { prisma } from '@/utils/connectToDb';

export const POST = async (req: Request) => {
  const { meowId } = await req.json();
  const session = await getServerSession(options);

  try {
    if (session) {
      const newLike = await prisma.like.create({
        data: {
          userId: session.user.id as string,
          meowId: meowId as string,
        },
      });

      return new Response(JSON.stringify(newLike), { status: 201 });
    }
  } catch (err) {
    return new Response('Failed to create a new meow', { status: 500 });
  }
};
