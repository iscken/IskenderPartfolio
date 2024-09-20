import About from "./homeSections/About";
import Contacts from "./homeSections/Contacts";
import Welcome from "./homeSections/Welcome";
import Work from "./homeSections/Work";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Work />
      <Contacts />
    </div>
  );
};

export default HomePage;
