import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const session = await getServerSession(options);
  // try {
  //   await connectToDB();
  //   const meows = await Meow.find({}).populate('creator').sort({ date: -1 });
  //   return new Response(JSON.stringify(meows), { status: 200 });
  // } catch (e) {
  //   return new Response('Failed to fetch all meows', { status: 500 });
  // }
};
