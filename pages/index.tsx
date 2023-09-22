import { UserCircleIcon } from '@heroicons/react/24/outline'

const Home = () => {
  return (
    <div>
      <div className="relative z-1">
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 left-0 flex max-w-full">
              <div className="pointer-events-auto relative w-screen max-w-[340px]">
                <div className="flex h-full flex-col bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-2">
                    <button className="h-30 w-32" onClick={() =>  window.location.href='/perfil'}>
                      <div className="flex place-content-center">
                        <UserCircleIcon className="h-20 w-20" aria-hidden="true" />
                      </div>
                      <div className="text-base text-center font-bold leading-6 text-gray-500">
                        Perfil
                      </div>
                    </button>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
