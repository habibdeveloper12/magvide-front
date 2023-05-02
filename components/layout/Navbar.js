import Image from 'next/image';
import Container from './Container';
import Link from 'next/link';
import ListItem from './ListItem';
import List from './List';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import SubHeading from './SubHeading';

const Navbar = ({ navbg }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener('resize', scrollWidth);
  }, []);
  return (
    <nav className={navbg}>
      <Container>
        <div className="md:flex py-4 items-center">
          <div className="md:w-2/6">
            <div className="w-[82px] h-[80px] relative">
              <Image fill src="/assets/logo2.png" alt="logo" cover />
            </div>
          </div>
          <div className=" md:w-4/6">
            <FaBars
              className="block ml-auto md:hidden absolute top-2.5 right-2.5"
              onClick={() => setShow(!show)}
            />
            {show && (
              <List className="text-primary md:flex md:justify-end md:gap-x-8 font-pop text-lg mt-2.5 md:mt-0">
                <Link href="/">
                  <ListItem
                    className="font-bold border-b-2 border-transparent transition duration-300 ease-in-out hover:border-b-2 hover:border-primary hover:font-bold my-2 md:my-0"
                    itemname="Home"
                  />
                </Link>

                <div className="relative group/item">
                  <Link href="/services">
                    <ListItem
                      className=" font-bold my-2 md:my-0 inline"
                      itemname="Services"
                    />
                    <MdKeyboardArrowDown className="inline text-2xl" />
                  </Link>
                  <div className="group/edit w-max  duration-300 ease-in-out invisible bg-white shadow-cshadow2 absolute right-[-240%] top-[220%] z-10 group-hover/item:visible group-hover/item:top-[200%]">
                    <div className="flex px-7 py-10">
                      <div className="w-max pr-5 border-r border-primary">
                        <SubHeading
                          className="text-primary font-pop font-bold text-xl pb-3"
                          title="Digital Marketing"
                        />
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="SEARCH ENGINE OPTIMAIZATION (SEO)"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="LOCAL SEO"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="TECHNICAL SEO"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="E-COMMERCE SEO"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="SOCIAL MEDIA MARKETING"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="SOCIAL MEDIA MANAGEMENT"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="LINK BUILDING SERVICE(OFF PAGE SEO)"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="SEARCH ENGINE MARKETING(SEM)"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="PAY PER CLICK(PPC)"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="GOOGLE ANALYTICS SERVICES"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="CONTENT WRITING"
                          />
                        </Link>
                      </div>
                      <div className=" w-max pr-5 border-r border-primary pl-4">
                        <SubHeading
                          className="text-primary font-pop font-bold text-xl pb-3"
                          title="CREATIVE SERVICES"
                        />

                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="GRAPHICS DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="UI&UX DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="MOTION DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="2D & 3D DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="3D ANIMATION"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="3D MODELING"
                          />
                        </Link>
                      </div>
                      <div className="w-max pr-5 border-r border-primary pl-4">
                        <SubHeading
                          className="text-primary font-pop font-bold text-xl pb-3"
                          title="WEB DESIGN & DEVELOPMENT "
                        />
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="CUSTOM WEBSITE DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="E-COMMERCE WEBSITE DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="WORDPRESS WEBSITE DESIGN"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="CUSTOM WEBSITE DEVELOPMENT"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="E-COMMERCE WEBSITE DEVELOPMENT"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="WORDPRESS WEBSITE DEVELOPMENT"
                          />
                        </Link>
                      </div>
                      <div className="w-max pr-5 pl-4">
                        <SubHeading
                          className="text-primary font-pop font-bold text-xl pb-3"
                          title="Software & App Development"
                        />
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="CUSTOM APP DEVELOPMENT"
                          />
                        </Link>
                        <Link href="/">
                          <ListItem
                            className=" font-semibold text-[#1B1B1B] text-xs pb-2 md:my-0 "
                            itemname="CUSTOM SOFTWARE DEVELOPMENT"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/aboutus">
                  <ListItem
                    className="font-bold border-b-2 border-transparent transition duration-300 ease-in-out hover:border-b-2 hover:border-primary hover:font-bold my-2 md:my-0"
                    itemname="About Us"
                  />
                </Link>
                <Link href="/contactus">
                  <ListItem
                    className="font-bold border-b-2 border-transparent transition duration-300 ease-in-out hover:border-b-2 hover:border-primary hover:font-bold my-2 md:my-0"
                    itemname="Contact Us"
                  />
                </Link>
              </List>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
