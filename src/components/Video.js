// import React from "react";
// import {connect} from 'react-redux';

// function Video(activeLesson, activeModule) {
//   return (
//     <div>
//       <div>
//         <h2>Módulo: {activeModule.title}</h2>
//       </div>
//       <div>
//         <h2>Aula: {activeLesson.title}</h2>
//       </div>
//     </div>
//   )
// }

// export default connect(state => ({
//   activeModule: state.activeModule,
//   activeLesson: state.activeLesson
// }))(Video);

import React from "react";
import { connect } from "react-redux";

const Video = ({activeLesson, activeModule}) => {
  return (
    <div>
      <strong>Módulo: {activeModule.title}</strong>
      <span>Aula: {activeLesson.title}</span>
    </div>
  )
}

export default connect(state => ({
  activeModule: state.videoReducer.activeModule,
  activeLesson: state.videoReducer.activeLesson
}))(Video)