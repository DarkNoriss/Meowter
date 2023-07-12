export const CardContext = ({ context }: { context: string }) => {
  const words = context.split(' ');

  const hasLongWord = words.some((word) => word.length > 20);

  return (
    <div>
      <span className={` ${hasLongWord ? 'break-all' : 'break-words'}`}>{context}</span>
    </div>
  );
};
