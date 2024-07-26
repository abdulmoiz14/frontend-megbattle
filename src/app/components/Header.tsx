import { useState, useEffect } from 'react';
import Image from 'next/image';
import coin from '../../../public/images/coin.png';

const Header = ({ points }: { points: number }) => {
  const [currentPoints, setCurrentPoints] = useState(points);
  const [barWidth, setBarWidth] = useState(0);
  const barIncrement = 1;

  useEffect(() => {
    const newBarWidth = (currentPoints % 100) * barIncrement;
    setBarWidth(newBarWidth);
    setCurrentPoints(points);
  }, [points, currentPoints, barIncrement]);

  return (
    <div className="fixed top-0 left-0 w-full px-4 z-10 flex flex-col items-center text-white">
      <div className="mt-12 mb-3 text-5xl font-bold flex items-center">
        <Image src={coin} width={44} height={44} alt="Coin" />
        <span className="ml-2">{currentPoints.toLocaleString()}</span>
      </div>
      <div className="w-full bg-[#333] rounded-full mt-2">
        <div
          className="bg-gradient-to-r from-[#0d9de8] to-[#ff00ec] h-2 rounded-full transition-all duration-500"
          style={{ width: `${Math.min(barWidth, 100)}%` }}
        ></div>
      </div>
      <div className="flex w-full mt-4">Level 1/10</div>
    </div>
  );
};

export default Header;
