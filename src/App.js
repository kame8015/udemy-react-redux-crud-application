import React from 'react';

// クラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am Clicked!")}}></input>
//       </React.Fragment>
//     )
//   }
// }

// 関数コンポーネント
function App() {
  return (
    <React.Fragment>
      {/* <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked!")}}></input> */}
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
