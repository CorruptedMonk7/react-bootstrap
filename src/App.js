import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';

function App() {
  const items = [
    { name:"shohid", description: 'shohid minar picture', img: "https://thefinancialexpress.com.bd/public/uploads/1582387861.jpg" },
    { name: 'shohid', description: 'shohid minar picture', img: "https://thefinancialexpress.com.bd/public/uploads/1582387861.jpg" },
    { name: 'shohid', description: 'shohid minar picture', img: "https://thefinancialexpress.com.bd/public/uploads/1582387861.jpg" },
    { name: 'shohid', description: 'shohid minar picture', img: "https://thefinancialexpress.com.bd/public/uploads/1582387861.jpg" },
    { name: 'shohid', description: 'shohid minar picture', img: "https://thefinancialexpress.com.bd/public/uploads/1582387861.jpg" },
    { name: 'shohid', description: 'shohid minar picture', img: "https://thefinancialexpress.com.bd/public/uploads/1582387861.jpg" },
  ]
  return (
    <div className="App">
      <div class="row row-cols-1 row-cols-md-4 g-4">
       {
         items.map(item => <Card
         item={item}
         ></Card> )
       }
      </div>
    </div>
  );
}

      export default App;
