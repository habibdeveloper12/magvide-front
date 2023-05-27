import ContactForm from "@/components/ContactUs/ContactForm";
import ContactUsBanner from "@/components/ContactUs/ServicesBanner";
import Layout from "@/components/layout/Layout";

const contactus = () => {
  return (
    <Layout>
      <ContactUsBanner />
      <ContactForm />
    </Layout>
  );
};

export default contactus;
