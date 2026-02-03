import Avatar from "./components/Avatar/Avatar";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const data = {
    src: "avatar.jpg",
    name: "Abduselam Seid",
    job: "Senior Frontend Developer",
    location: "Addis Ababa, Ethiopia",
    contact: {
      github: "github.com/afisphbl",
      email: "abuabdurehman0308@gmail.com",
    },
    description:
      "Passionate about building accessible and performant web interfaces. I specialize in React, UI/UX design, and design systems. When I'm not coding, you can find me hiking or brewing the perfect cup of coffee.",
  };

  return (
    <div className="card">
      <Avatar src={data.src} alt={data.name}/>
      <Description name={data.name} job={data.job} location={data.location} contact={data.contact}/>
      <Footer description={data.description}/>
    </div>
  );
}

export default App;
