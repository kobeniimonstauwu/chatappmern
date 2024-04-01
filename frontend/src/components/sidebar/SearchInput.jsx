import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className = "flex items-center gap-2">
       {/*Flex separates the search bar and the button */}
      <input type="text" placeholder = 'Search..' className='input input-bordered rounded-full'/>
      <button type = 'submit' className="btn btn-circle bg-sky-500 text-white">
        <FaSearch className="w-6 h-6 outline-none"/>
      </button>
    </form>
  )
}

export default SearchInput


//Starter Code
// import { FaSearch } from "react-icons/fa";
// const SearchInput = () => {
//   return (
//     <form className = "flex items-center gap-2">
//        {/*Flex separates the search bar and the button */}
//       <input type="text" placeholder = 'Search..' className='input input-bordered rounded-full'/>
//       <button type = 'submit' className="btn btn-circle bg-sky-500 text-white">
//         <FaSearch className="w-6 h-6 outline-none"/>
//       </button>
//     </form>
//   )
// }

// export default SearchInput