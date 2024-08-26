import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className='App'>

    <Student FirstName="Shubham" LastName="Deshmukh" Email="shubh@gmail.com" Contact="9262564543"/>
    <Student FirstName="Rahul" LastName="Dube" Email="rahool@gmail.com" Contact="9085564543"/>
    <Student FirstName="Vikas" LastName="Sudame" Email="vicky@gmail.com" Contact="9561564543"/>
    <Student FirstName="Manoj" LastName="Ingle" Email="manoj@gmail.com" Contact="9462264540"/>
    </div>
  );
}

export default App;
