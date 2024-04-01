import Conversation from "./Conversation"
// This is where each Conversation Component is contained
const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {/* Overflow auto makes it automatic to scroll down if there are a lot of conversations */}
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>

    </div>
  )
}

export default Conversations

//STARTER CODE
// import Conversation from "./Conversation"
// // This is where each Conversation Component is contained
// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       {/* Overflow auto makes it automatic to scroll down if there are a lot of conversations */}
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>

//     </div>
//   )
// }

// export default Conversations