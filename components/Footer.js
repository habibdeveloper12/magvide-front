import { FaFacebookF } from 'react-icons/fa';
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import Container from './Container';
import Heading from './Heading';
import List from './List';
import ListItem from './ListItem';

const Footer = () => {
  return (
    <div className="bg-[#151515] py-24">
      <Container>
        <div className="flex justify-between">
          <div className="w-1/5">
            <div>
              <Heading
                className="text-3xl font-bold  font-inter   text-yellow"
                title="Logo"
              />
              <List className="font-inter font-light mt-5 text-white">
                <ListItem className="py-2" itemname="New Collection" />
                <ListItem className="py-2" itemname="About Us" />
                <ListItem className="py-2" itemname="Blog" />
              </List>
              <div className=" flex mt-4 gap-x-2 text-yellow text-2xl">
                <FaFacebookF className="hover:text-white" />
                <AiOutlineTwitter className="hover:text-white" />
                <AiFillInstagram className="hover:text-white" />
                <AiFillLinkedin className="hover:text-white" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-1/5">
            <div>
              <Heading
                className="text-3xl font-bold font-inter  text-yellow"
                title="Program"
              />
              <List className="font-inter font-light mt-5 text-white">
                <ListItem className="py-2" itemname="Our Programs" />
                <ListItem className="py-2" itemname="Our Plan" />
                <ListItem className="py-2" itemname="Become a membe" />
              </List>
            </div>
            <div></div>
          </div>
          <div className="w-1/5">
            <div>
              <Heading
                className="text-3xl font-bold font-inter text-yellow"
                title="Terms"
              />
              <List className="font-inter font-light mt-5 text-white">
                <ListItem className="py-2" itemname="Our Programs" />
                <ListItem className="py-2" itemname="Our Plan" />
                <ListItem className="py-2" itemname="Become a membe" />
              </List>
            </div>
            <div></div>
          </div>
          <div className="w-1/5">
            <div>
              <Heading
                className="text-3xl font-bold font-inter text-yellow"
                title="Support"
              />
              <List className="font-inter font-light mt-5 text-white">
                <ListItem className="py-2" itemname="FAQs" />
                <ListItem className="py-2" itemname="Contact Us" />
              </List>
            </div>
            <div></div>
          </div>
          <div className="w-1/10">
            <div>
              <Heading
                className="text-3xl font-bold font-inter text-yellow"
                title="About Us"
              />
              <List className="font-inter font-light mt-5 text-white">
                <ListItem className="py-2" itemname="Our Programs" />
                <ListItem className="py-2" itemname="Our Plan" />
                <ListItem className="py-2" itemname="Become a membe" />
              </List>
            </div>
            <div></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
