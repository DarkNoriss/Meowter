import User from '@/models/user';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const user = await User.find({ userlink: params });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
