'use client';
import Image from 'next/image';
import Layout from '../components/Layout';
import coin from '../../../public/images/coin.png';
import { telegramClient } from '../provider/telegram-provider';

const Earn = () => {
  const handleClick = (taskName: string) => {
    alert(`You clicked on ${taskName}`);
  };

  const { user, webApp } = telegramClient();
  console.log(user);
  return (
    <Layout>
      <div className="p-4 text-white bg-gradient-to-b from-gray-800 to-gray-900 mt-10 mb-28 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-center">
          hello {user?.first_name}
        </h1>
        <h1 className="text-xl font-bold mb-6 text-center">Earn more coins</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">MEG'BATTLE Youtube</h2>
            <div className="space-y-2">
              <div
                className="bg-gray-700 rounded-lg p-4 shadow-lg cursor-pointer"
                onClick={() =>
                  handleClick('Vitalik Buterin’s very unpopular move')
                }
              >
                <span>Vitalik Buterin’s very unpopular move</span>
                <div className="flex items-center text-yellow-400 mt-2">
                  <Image
                    src={coin}
                    width={24}
                    height={24}
                    alt="Coin"
                    className="mr-2"
                  />
                  <span>+100,000</span>
                </div>
              </div>
              <div
                className="bg-gray-700 rounded-lg p-4 shadow-lg cursor-pointer"
                onClick={() =>
                  handleClick(
                    "Ripple's historic legal battle with SEC explained"
                  )
                }
              >
                <span>Ripple's historic legal battle with SEC explained</span>
                <div className="flex items-center text-yellow-400 mt-2">
                  <Image
                    src={coin}
                    width={24}
                    height={24}
                    alt="Coin"
                    className="mr-2"
                  />
                  <span>+100,000</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Daily tasks</h2>
            <div
              className="bg-gray-700 rounded-lg p-4 shadow-lg cursor-pointer"
              onClick={() => handleClick('Daily reward')}
            >
              <span>Daily reward</span>
              <div className="flex items-center text-yellow-400 mt-2">
                <Image
                  src={coin}
                  width={24}
                  height={24}
                  alt="Coin"
                  className="mr-2"
                />
                <span>+6,649,000</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Tasks list</h2>
            <div className="space-y-2">
              <div
                className="bg-gray-700 rounded-lg p-4 shadow-lg cursor-pointer"
                onClick={() => handleClick('Join our TG channel')}
              >
                <span>Join our TG channel</span>
                <div className="flex items-center text-yellow-400 mt-2">
                  <Image
                    src={coin}
                    width={24}
                    height={24}
                    alt="Coin"
                    className="mr-2"
                  />
                  <span>+5,000</span>
                </div>
              </div>
              <div
                className="bg-gray-700 rounded-lg p-4 shadow-lg cursor-pointer"
                onClick={() => handleClick('Follow our X account')}
              >
                <span>Follow our X account</span>
                <div className="flex items-center text-yellow-400 mt-2">
                  <Image
                    src={coin}
                    width={24}
                    height={24}
                    alt="Coin"
                    className="mr-2"
                  />
                  <span>+5,000</span>
                </div>
              </div>
              <div
                className="bg-gray-700 rounded-lg p-4 shadow-lg cursor-pointer"
                onClick={() => handleClick('Choose your exchange')}
              >
                <span>Choose your exchange</span>
                <div className="flex items-center text-yellow-400 mt-2">
                  <Image
                    src={coin}
                    width={24}
                    height={24}
                    alt="Coin"
                    className="mr-2"
                  />
                  <span>+5,000</span>
                </div>
              </div>
              <div
                className="bg-gray-700 rounded-lg p-4 shadow-lg cursor-pointer"
                onClick={() => handleClick('Invite 3 friends')}
              >
                <span>Invite 3 friends</span>
                <div className="flex items-center text-yellow-400 mt-2">
                  <Image
                    src={coin}
                    width={24}
                    height={24}
                    alt="Coin"
                    className="mr-2"
                  />
                  <span>+25,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Earn;
