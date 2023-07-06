import { useEffect, useState } from 'react';

type MeowType = {
  context: string;
  date: Date;
  ta: {
    remeows: number;
    comments: number;
    likes: number;
  };
  _id: string;
};
export const MeowList = () => {
  const [meows, setMeows] = useState<MeowType[]>([]);

  useEffect(() => {
    fetchMeows();
  }, []);

  const fetchMeows = async () => {
    const response = await fetch('api/meow');
    const data = await response.json();

    setMeows(data);
  };

  console.log(meows[0]);
  return <div>MeowList</div>;
};
