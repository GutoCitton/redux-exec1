// import React from "react";

// import {connect} from 'react-redux'

// function Sidebar({modules, dispatch}) {


//   function handleLesson(module, lesson) {
//     return {
//       type: 'SET_LESSON',
//       module,
//       lesson
//     }
//   }

//   return (
//     <aside>
//       {modules.map(module => (
//         <div key={module.id}>
//           <strong>{module.title}</strong>
//           <ul>
//             {module.lessons.map(lesson => (
//               <li key={lesson.id}>
//                 {lesson.title}
//                 <button onClick={() => dispatch(handleLesson(module, lesson))}>Selecionar</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </aside>
//   )
// }

// export default connect(state => ({modules: state.modules}))(Sidebar);


import {connect} from 'react-redux';

import * as VideosActions from '../store/actions/video'
import { bindActionCreators } from 'redux';

const Sidebar = ({modules, handleLesson}) => {

  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <h2>{module.title}</h2>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>{lesson.title}
                <button onClick={() => handleLesson(module, lesson)}>Selecionar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </aside>

  )
}

const mapStateToProps = state => ({
  modules:state.videoReducer.modules
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(VideosActions, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);