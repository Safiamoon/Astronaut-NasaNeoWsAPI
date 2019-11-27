// import React, { Component } from "react";
// import NasaItem from "./NasaItem";
// import { getNasaData } from "../services/OwpService";

// class Nasa extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             data:null,
//             error:"",
//         };
//     }

//     async componentDidMount(){
//         const astronaut = this.props.match.params.astronaut;

//         try{
//             const data = await getNasaData(astronaut);
//             const list = data.list;

//             const groupedList= _.groupBy(list, el =>el.dt_txt.substring(0,10));
//             console.log(groupedList);

//             this.setState({
//                 data: groupedList,
//                 error:"",
//             });
//         }catch {
//             this.setState({
//                 error : "Error"
//             });
//         }
//     }

//     render = () => {
//         const astronaut = this.props.match.params.astronaut;
//         const error = this.state.error ? "Une error est survenue " : "";

//         return (
//           <div className="row border-bottom mt-1 mb-4">
//             <div className="col">
//               <h1>{astronaut} : Space in </h1>
//             </div>
//           </div>
//           {error}
//           {this.state.data &&
//             Object.keys(this.state.data).map((astroInfo, i) => (
//               <div key={i}>
//                 <h2 className="mt-4 border-bottom">{astroInfo}</h2>
//                 <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
//                   {_.get(this.state.data, astroInfo).map(el => (
//                     <AstronautItem
//                     neo_reference_id={el.dt}
//                       key={el.dt}
//                       name={el.weather[0].id}
//                       estimated_diameter={el.main.temp}
//                       close_approach_data={el.weather[0].description}
//                       clouds={el.clouds.all}
//                     />
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//         );
//     };
// }

