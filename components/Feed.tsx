import { MeowWithAuthor } from '@/types/custom-types';
import { MeowCard } from './MeowCard/MeowCard';

export const Feed = ({ meows }: { meows: MeowWithAuthor[] }) => {
  return (
    <>
      {meows?.map((meow) => (
        <MeowCard key={meow.id} meow={meow} />
      ))}
    </>
  );
};
