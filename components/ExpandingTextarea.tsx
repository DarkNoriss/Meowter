import { Dispatch, SetStateAction, useRef } from 'react';

type ExpandingTextProps = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};
export const ExpandingTextarea: React.FC<ExpandingTextProps> = ({ text, setText }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    adjustTextarea();
  };

  const adjustTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      className='border-white-smoll min-w-1 h-[52px] resize-none !border-x-0 !border-t-0 bg-transparent py-3 text-xl focus:outline-none'
      placeholder='What is happening?!'
      maxLength={300}
    />
  );
};
