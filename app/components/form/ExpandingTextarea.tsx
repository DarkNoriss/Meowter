import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type ExpandingTextProps = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  placeholder: string;
};
export const ExpandingTextarea: React.FC<ExpandingTextProps> = ({ text, setText, placeholder }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;

      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [textareaRef, text]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      rows={1}
      className='border-white-smoll w-full resize-none overflow-hidden !border-x-0 !border-t-0 bg-transparent py-3 text-xl focus:outline-none'
    />
  );
};
