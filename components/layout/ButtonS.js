const ButtonS = ({ title }) => {
  return (
    <button className="border-2 border-solid text-lg font-medium font-pop rounded-lg border-primary transition duration-300 ease-in-out text-primary px-6 py-2 hover:font-medium hover:bg-primary hover:text-white">
      {title}
    </button>
  );
};

export default ButtonS;
