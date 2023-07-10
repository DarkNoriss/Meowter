import Meow from '@/models/meow';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    await connectToDB();

    const meows = await Meow.find({ creator: params.id })
      .populate('creator')
      .sort({ date: -1 });

    return new Response(JSON.stringify(meows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch all user meows', { status: 500 });
  }
};
