import Layout from '../components/Layout';

const Friends = () => {
  return (
    <Layout>
      <div className="flex-grow flex flex-col items-center justify-center text-white font-medium ">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Invite friends!</h1>
          <div className="w-full max-w-md px-4 py-6 bg-gray-800 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="bg-gray-700 text-left p-4 rounded-lg gap-2 flex justify-between items-center w-full">
                <p>Invite a friend</p>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
                  +5,000
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-gray-700 text-left p-4 rounded-lg gap-2 flex justify-between items-center w-full">
                <p>Invite a friend with Telegram Premium</p>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
                  +10,000
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="mb-4">List of your friends</p>
              <p className="mb-4">You haven't invited anyone yet</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Invite a friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Friends;
