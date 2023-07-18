import { prisma } from '@/utils/connectToDb';
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';

export const POST = async (req: Request) => {
  const session = await getServerSession(options);
  const { meowId } = await req.json();

  try {
    const like = await prisma.like.findFirst({
      where: {
        userId: session?.user.id,
        meowId,
      },
    });

    if (like) {
      return new Response(JSON.stringify({ exists: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ exists: false }), { status: 200 });
    }
  } catch (e) {
    return new Response('Failed to check if like exists', { status: 500 });
  }
};

export const revalidate = 0;
