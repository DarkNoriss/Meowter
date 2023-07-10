import User from '@/models/user';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    await connectToDB();

    const user = await User.find({ userlink: params.id });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch user', { status: 500 });
  }
};
