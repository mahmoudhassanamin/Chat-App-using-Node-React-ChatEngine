// import { MultiChatSocket,MultiChatWindow , useMultiChatLogic } from "react-chat-engine-advanced"
import {PrettyChatWindow} from "react-chat-engine-pretty"
function index(props) {
  const projID = "99f99b76-e154-4eab-b3c2-7b6f5d46ffb2";
  return (
   
    <div className="background" style={{height:"100vh"}}>
      <PrettyChatWindow
        projectId= "99f99b76-e154-4eab-b3c2-7b6f5d46ffb2"
        username={props.user.username}
        secret={props.user.secret}
        style={{height:"200vh"}}
      />
    </div>
  )
}
// function index(props) {
//   const chatProps = useMultiChatLogic(
//     "99f99b76-e154-4eab-b3c2-7b6f5d46ffb2",
//     props.user.username,
//     props.user.secret 
//     )
//   return (
//     <div className="background" style={{height:"100vh"}}>
//       <MultiChatSocket {...chatProps}/>
//       <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
//     </div>
//   )
// }

export default index
