import Image from 'next/image';
import Container from './Container';
import Link from 'next/link';
import ListItem from './ListItem';
import List from './List';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = ({navbg}) => {
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
        <div className="md:flex py-1 items-center">
          <div className="md:w-2/6">
           <div className='w-[82px] h-[80px] relative'>
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
                    className="font-bold hover:font-bold my-2 md:my-0"
                    itemname="Home"
                  />
                </Link>
                <Link href="/services">
                  <ListItem
                    className="hover:font-bold my-2 md:my-0"
                    itemname="Services"
                  />
                </Link>
                <Link href="/aboutus">
                  <ListItem
                    className="hover:font-bold my-2 md:my-0"
                    itemname="About Us"
                  />
                </Link>
                <Link href="/contactus">
                  <ListItem
                    className="hover:font-bold my-2 md:my-0"
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
