'use client';

import Image from 'next/image';
import Link from 'next/link';

import tap from '../../../public/images/tap.png';
import friendsIcon from '../../../public/images/friends.png';
import earnIcon from '../../../public/images/earn.png';
import wallet from '../../../public/images/wallet.png';

interface LayoutProps {
  children: React.ReactNode;
  energy?: number;
}

const Layout = ({ children, energy }: LayoutProps) => {
  return (
    <div className="bg-gradient-main min-h-screen flex flex-col items-center text-white font-medium">
      <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="radial-gradient-overlay"></div>
      </div>
      <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">
        {children}
        <div className="fixed bottom-0 left-0 w-full px-4 pb-4 z-10">
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-md bg-[#333] py-4 rounded-2xl flex justify-around">
              <Link href="/" className="flex flex-col items-center gap-1">
                <Image src={tap} width={24} height={24} alt="Tap" />
                <span>Tap</span>
              </Link>
              <div className="h-[48px] w-[2px] bg-[#444]"></div>
              <Link
                href="/friends"
                className="flex flex-col items-center gap-1"
              >
                <Image src={friendsIcon} width={24} height={24} alt="Friends" />
                <span>Friends</span>
              </Link>
              <div className="h-[48px] w-[2px] bg-[#444]"></div>
              <Link href="/earn" className="flex flex-col items-center gap-1">
                <Image src={earnIcon} width={24} height={24} alt="Earn" />
                <span>Earn</span>
              </Link>
              <div className="h-[48px] w-[2px] bg-[#444]"></div>
              <div className="flex flex-col items-center gap-1">
                <Image src={wallet} width={24} height={24} alt="Wallet" />
                <span>Wallet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
