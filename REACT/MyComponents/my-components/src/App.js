import logo from './logo.svg';
import './App.css';
import './myComponents/greet'
import './myComponents/goodBye'

class App extends Component {
  render() {
    return (
      <div className="App">
        <greet></greet>
        <goodbye></goodbye>
      </div>
    );
  }
}

