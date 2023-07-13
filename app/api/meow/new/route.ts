import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';
import { prisma } from '@/utils/connectToDb';

export const POST = async (req: Request) => {
  const { context } = await req.json();
  const session = await getServerSession(options);

  try {
    if (session) {
      const newMeow = await prisma.meow.create({
        data: {
          authorId: session.user.id as string,
          text: context,
        },
      });

      return new Response(JSON.stringify(newMeow), { status: 201 });
    }
  } catch (err) {
    return new Response('Failed to create a new meow', { status: 500 });
  }
};
