// import React from "react";
// //question 3_a
// const Pht=() =>{
//   return( <div>
//             <label>Prix Hors taxe :</label>
//             <input type="number" placeholder="Votre pht ..."></input>
//           </div>
//   )
// }

// function Affiche(){
//   return <pht/>;
// }


// //question 3_b
// const TVA=() =>{
//   return(
//     <div>
//       <label>Taux TVA :</label>
//       <input type="text" placeholder="Votre tva ..."></input>
//     </div>
//   )
// }

// //question 3_c
// const Buttons=() =>{
//   return(
//     <div>
//       <button>Calculer</button>
//       <button>Initialiser</button>
//     </div>
//   )
// }

// //question 3_d
// const Res=() =>{
//   return(
//     <div>
//       <label>Resultat:</label>
//       <input type="text" placeholder="Resultat"></input>
//     </div>
//   )
// }

// //question 3_e
// const CalculTTC=() =>{
//   return(
//     <div className="all">
//       <fieldset >
//         <legend className="legend">Calculer de PTTC</legend><br></br>
//         <Pht/><br></br>
//         <TVA/><br></br>
//         <Buttons/><br></br>
//         <Res/><br></br>
//       </fieldset>
//     </div>
//   )
// }


// function App(){
//   return(
//     <>
//       <CalculTTC>
//         <Pht/>
//         <TVA/>
//         <Buttons/>
//         <Res/>
//       </CalculTTC>
      

//     </>
//   )
// }

// export default App;





import React, { Component } from "react";

// Question 3_a 
class Pht extends Component {
  render() {
    return (
      <div>
        <label>Prix Hors taxe :</label>
        <input type="number" placeholder="Votre pht ..."></input>
      </div>
    );
  }
}

// Question 3_b 
class TVA extends Component {
  render() {
    return (
      <div>
        <label>Taux TVA :</label>
        <input type="text" placeholder="Votre tva ..."></input>
      </div>
    );
  }
}

// Question 3_c 
class Buttons extends Component {
  render() {
    return (
      <div>
        <button>Calculer</button>
        <button>Initialiser</button>
      </div>
    );
  }
}

// Question 3_d 
class Res extends Component {
  render() {
    return (
      <div>
        <label>Resultat :</label>
        <input type="text" placeholder="Résultat"></input>
      </div>
    );
  }
}

// Question 3_e 
class CalculTTC extends Component {
  render() {
    return (
      <div className="all">
        <fieldset>
          <legend className="legend">Calculer de PTTC</legend><br></br>
          <Pht /><br></br>
          <TVA /><br></br>
          <Buttons /><br></br>
          <Res /><br></br>
        </fieldset>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <>
        <CalculTTC />
      </>
    );
  }
}

export default App;
