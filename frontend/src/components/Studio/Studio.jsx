import { FaReact, FaLock } from 'react-icons/fa';

export default function Studio() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 border border-[#e3e4e8]">
        <h2 className="text-xl font-bold text-center text-[#252837]">Choose login provider</h2>
        <hr className="my-4" />

        <div className="flex items-center cursor-pointer space-x-3 mb-4 border border-[#e3e4e8] hover:bg-gray-50 p-2 bg-[#f6f6f8]">
          <FaReact className="text-blue-500 text-2xl" />
          <span className="text-base font-medium text-[#4e556d]">Google</span>
        </div>

        <div className="flex items-center cursor-pointer hover:bg-gray-50 space-x-3 mb-4 border border-[#e3e4e8] p-2 bg-[#f6f6f8]">
          <FaLock className="text-gray-600 text-xl" />
          <span className="text-base font-medium text-[#4e556d]">Git up</span>
        </div>

        <p className="text-lg text-[#4e556d] text-center mt-6">Email / Password</p>
      </div>
    </div>
      <h1>SANITY</h1>
      <div className='flex gap-3'>
        <h3>Community</h3>
        <h3>Docs</h3>
        <h3>Privacy</h3>
        <h3>sanity.io</h3>
      </div>
      </>
  );
}
