import Image from 'next/image';
import Container from '../layout/Container';
import Heading from '../layout/Heading';
import Para from '../layout/Para';

const AboutMsgSec = () => {
  return (
    <div className="py-24">
      <Container>
        <div className="flex">
          <div className="w-2/4 mt-10">
            <div className="w-[100%] h-[480px] relative block">
              <Image
                fill
                src="/assets/msg_banner_image.png"
                alt="msg_banner_image"
              />
            </div>
          </div>
          <div className="w-2/4">
            <Heading
              className=" text-primary pb-3 leading-[64px] text-5xl font-bold font-pop"
              title="LET’S TALK"
            />

            <Para
              className="text-lg text-para font-inter pb-4"
              title="In our daily life, people usually look for different IT services 
              for that. But from now on, no more worries,"
            />
            <form>
              <div className="flex gap-x-8">
                <div className="w-2/4">
                  <label for="name" className="text-primary font-bold text-lg">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border text-lg border-para w-full p-4 rounded-lg mt-2 mb-4 focus:outline-primary"
                    placeholder="Write your name"
                  />
                </div>
                <div className="w-2/4">
                  <label for="email" className="text-primary font-bold text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border border-para text-lg w-full p-4 rounded-lg mt-2 mb-4 focus:outline-primary"
                    placeholder="Write your email"
                  />
                </div>
              </div>
              <div>
                <label for="message" className="text-primary font-bold text-lg">
                  Message
                </label>
                <textarea
                  type="email"
                  className="border border-para text-lg w-full h-[200px] px-4 py-2 mt-2 mb-4 rounded-lg focus:outline-primary"
                  placeholder="Write us what you want to know"
                />
              </div>
              <button type='submit' className="border-2 bg-primary transition duration-300 ease-in-out border-solid text-lg font-medium font-pop rounded-lg border-primary text-white px-10 py-2 hover:font-medium hover:bg-white hover:text-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMsgSec;
