import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';
import { prisma } from '@/utils/connectToDb';

export const POST = async (req: Request) => {
  const { meowId, text } = await req.json();
  const session = await getServerSession(options);

  try {
    if (session) {
      const newReply = await prisma.reply.create({
        data: {
          userId: session.user.id as string,
          meowId,
          text,
        },
      });

      return new Response(JSON.stringify(newReply), { status: 201 });
    }
  } catch (err) {
    return new Response('Failed to create a new reply', { status: 500 });
  }
};
