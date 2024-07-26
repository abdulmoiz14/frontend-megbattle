'use client';
import Image from 'next/image';
import Layout from './components/Layout';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Monkey from '../../public/images/Monkey1.png';
import highVoltage from '../../public/images/high-voltage.png';
import { telegramClient } from './provider/telegram-provider';
import { registerUserApi } from './apis/user';
import { useUserStore } from './store/useUserStore';

export default function Home() {
  const { user, webApp } = telegramClient();
  const pathname = usePathname();
  const [points, setPoints] = useState(109391);
  const [mobile, setMobile] = useState<any>();
  const [energy, setEnergy] = useState(4000);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const setUser = useUserStore((state) => state.setUser);
  const userData = useUserStore((state) => state.user);
  const pointsToAdd = 10;
  const energyToReduce = 10;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (energy - energyToReduce < 0) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints(points + pointsToAdd);
    setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
    setClicks([...clicks, { id: Date.now(), x, y }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  useEffect(() => {
    const registerUser = async () => {
      if (user) {
        try {
          const response = await registerUserApi(
            user.id.toString(),
            user.first_name,
            user.last_name || '',
            user.language_code
          );
          setMobile(response);
          console.log('User registered successfully:', response);
          setUser(user);
          setLoading(false);
        } catch (error: any) {
          setMobile(error);
          console.error('Error registering user:', error);
          if (error.response) {
            console.error('Error response data:', error.response.data);
          }
          setError('User not found or registration failed');
          setLoading(false);
        }
      } else {
        setError('User data not available');
        setLoading(false);
      }
    };

    const interval = setInterval(() => {
      if (user) {
        clearInterval(interval);
        registerUser();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [user, setUser]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + 1, 4000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Layout energy={energy}>
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl font-bold">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout energy={energy}>
        <div className="flex-grow flex items-center justify-center">
          {/* <p className="text-xl font-bold text-red-500">{error}</p> */}
          <pre>{JSON.stringify(mobile)}</pre>
        </div>
      </Layout>
    );
  }

  return (
    <Layout energy={energy}>
      {pathname === '/' && <Header points={points} />}
      {pathname === '/' && (
        <div className="flex-grow mt-28 flex flex-col items-center justify-center">
          <p className="w-full text-center text-xl font-bold">
            {userData?.first_name}
          </p>
          <div className="relative mt-4" onClick={handleClick}>
            <Image
              src={Monkey}
              width={256}
              height={256}
              alt="Monkey"
              className="drop-shadow-2xl"
            />
            {clicks.map((click) => (
              <div
                key={click.id}
                className="absolute text-5xl font-bold opacity-0 float"
                style={{
                  top: `${click.y - 42}px`,
                  left: `${click.x - 28}px`,
                }}
                onAnimationEnd={() => handleAnimationEnd(click.id)}
              >
                +10
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex pl-4 mb-28 w-full justify-start items-center">
        <Image src={highVoltage} width={44} height={44} alt="High Voltage" />
        <div className="ml-2 text-left">
          <span className="text-white text-2xl font-bold block">{energy}</span>
          <span className="text-white text-large opacity-75">/ 4000</span>
        </div>
      </div>
    </Layout>
  );
}
