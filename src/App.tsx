import { Main } from "./layout/sections/main/Main";
import { Map } from "./layout/sections/map/Map";
import { Projects } from "./layout/sections/project/Projects";
import { Services } from "./layout/sections/services/Services";
import { Learning } from "./layout/sections/learning/Learning";
import { Contact } from "./layout/sections/contact/Contact";
import { Footer } from "./layout/footer/Footer";
import { Messagers } from "./layout/sections/messagers/Messagers";

function App() {
  return (
    <div className="App">
      <Main />
      <Projects />
      <Map />
      <Services />
      <Learning />
      <Contact />
      <Messagers />
      <Footer />
    </div>
  );
}

export default App;
