import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const ContactInfo = () => {
  return (
    <>
      <div className='bg-medium-color'>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 mx-auto max-w-7xl py-20 bg-medium-color">
          {/* Address Card */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 bg-light-color rounded-3xl shadow-lg p-6 w-full md:w-1/3 flex-1 hover:shadow-[0_4px_20px_rgba(161,125,41,0.3)] transition-all duration-300">
            <div className="bg-dark-color text-white rounded-full p-4 flex items-center justify-center">
              <MdLocationOn size={28} />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-1">Address</h3>
              <p>455 West Orchard Street Kings</p>
              <p>Mountain, NC 280867</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 bg-light-color  rounded-3xl shadow-md p-6 w-full md:w-1/3 flex-1 hover:shadow-[0_4px_20px_rgba(161,125,41,0.3)] transition-all duration-300">
            <div className="bg-dark-color text-white rounded-full p-4 flex items-center justify-center">
              <MdPhone size={28} />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-1">Phone</h3>
              <p>+088 (246) 642-27-10</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 bg-light-color rounded-3xl shadow-md p-6 w-full md:w-1/3 flex-1 hover:shadow-[0_4px_20px_rgba(161,125,41,0.3)] transition-all duration-300">
            <div className="bg-dark-color text-white rounded-full p-4 flex items-center justify-center">
              <MdEmail size={28} />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-1">Email</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContactInfo;
