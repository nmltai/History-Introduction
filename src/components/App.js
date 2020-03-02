import React from 'react';
import './App.css';
// import {People} from '../data/one_person'
// import {PersonPositions} from '../data/one_person'
import {People} from '../data/mult_ppl'
import {PersonPositions} from '../data/mult_ppl'


function App() {

let groups = [];

for (let id in People) {
  groups.push()
  console.log(People[id]["name"]);
}

for (let index = 0; index < Object.keys(People).length; index++) {
  groups.push(
    <div>
      <header className="App-header">
        <img src={PersonPositions[Object.keys(PersonPositions)[index]].picture[0].url} />
        <p>
          {PersonPositions[Object.keys(PersonPositions)[index]].positionTitle}
        </p>
        <p>
          {People[Object.keys(People)[index]].name}
        </p>
      </header>
    </div>
  )
}

  return (
    <div className="App">        
      {groups}
    </div>
  );
}

export default App;

// export class App extends React.Component<{}, { semKey: string; type: string }> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       //TODO: Need to make code so that this selects the most recent semester rather than hard coded
//       semKey: "rec5XKEgTIG4JPqKB",
//       type: typeof AFX.Semesters,
//     };
//   }

//   public render() {
//     let groups: any = [];
//     // Go through all semesters (in chronological order) and display respective board members and teams
//     // for (let semKey in AFX.Semesters) {
//     let currSem: Semester = AFX.Semesters[this.state.semKey];
//     let currBoardKey: any = currSem.boardGroupId; // todo: yucky array and any
//     if (currBoardKey) {
//       groups.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
//     }
//     if (currSem.teamGroupIds) {
//       groups.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
//       // TODO: TeamsComponent, renaming things, string[] mess
//     }
//     // }
//     return (
//       <Router>
//         <div>
//           <Sidebar onClick={this.myCallback} />
//           <Button className="togglebutton" onClick={this.openNav}>
//             <FontAwesomeIcon icon={faAlignLeft} />
//           </Button>
//           <Searchbar onClick={this.myCallback} />
//           <hr />
//           <Switch>
//             <Route
//               exact
//               path="/"
//               render={() => (
//                 <div className="main">
//                   <p id="big-link">
//                     {/* <a href="#trainingteams">
//                       {" "}
//                       Training Teams &nbsp; &nbsp; &nbsp;
//                     </a> */}
//                     {/* <a href="#projectteams"> Project Teams </a> */}
//                   </p>
//                   {groups}
//                 </div>
//               )}
//             />
//             <Route path="/persons" component={IndividualComponent} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

