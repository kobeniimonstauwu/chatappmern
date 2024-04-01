
const Conversation = () => {
  return (<>
    
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      {/* This is where the avatar and status are located */}
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="User Avatar" />
        </div>
      </div>
      {/* Image and On/Off Status */}

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200"> John Doe </p>
          <span className="text-xl"> 👾 </span>
        </div>
      </div>
    </div>
    {/* Name and Activity Status */}

    <div className="divider my-0 py-0 h-1" /> 
    {/* Divider for each conversation */}
    </>


  )
}

export default Conversation

//STARTER CODE
// const Conversation = () => {
//   return (<>
    
//     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//       {/* This is where the avatar and status are located */}
//       <div className="avatar online">
//         <div className="w-12 rounded-full">
//           <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="User Avatar" />
//         </div>
//       </div>
//       {/* Image and On/Off Status */}

//       <div className="flex flex-col flex-1">
//         <div className="flex gap-3 justify-between">
//           <p className="font-bold text-gray-200"> John Doe </p>
//           <span className="text-xl"> 👾 </span>
//         </div>
//       </div>
//     </div>
//     {/* Name and Activity Status */}

//     <div className="divider my-0 py-0 h-1" /> 
//     {/* Divider for each conversation */}
//     </>


//   )
// }

// export default Conversation