import Gate from './Gate';
import MediaCard from './MediaCard';
import Room from './Room';
//import React,{useState} from 'react';

function App() {
  // const state = useState(true);
  // console.log(state);

  

  return (
    <div>

      <Room/>
    <Gate isOpen={true}/>
    <MediaCard title="Your Turn" body="Render the MediaCard with the ReactDOM.render call, and pass in the necessary props. Can you pass a JSX element as a prop value? (hint: wrap it in single braces). Try bolding some parts of the body text without changing the implementation of MediaCard." imageUrl="https://daveceddia.com/images/complete-react-tutorial-2020.png" />

    </div>
  );
}

export default App;
