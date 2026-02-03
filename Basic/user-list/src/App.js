import Header from "./component/Header/Header";
import Card from "./component/Card/Card";
import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      name: "Abduselam Seid",
      job: "Frontend developer",
      src: "Itachi.jpg",
      style: {
        border: "1px solid red",
        color: "red",
        boxShadow:"4px 4px 6px rgb(189, 0, 0)"
      },
    },
    {
      id: 2,
      name:'Ibrahim Seid',
      job:'Backend developer',
      src:'Eren.jpg',
      style:{
        border:'1px solid green',
        color:'green',
        boxShadow:"4px 4px 6px rgb(0, 167, 28)"
      }
    },
    {
      id: 3,
      name:'Abdulkerim Ahmed',
      job:'Network engineer',
      src:'Ace.jpg',
      style:{
        border:'1px solid blue',
        color:'blue',
        boxShadow:"4px 4px 6px rgb(0, 0, 171)"
      }
    },
  ];
  return (
    <div className="container">
      <Header />
      <div className="card-container">
        {data.length > 0 && data.map((item) => (
          <Card key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
