import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
  const BaseClass = ` flex flex-wrap p-2 rounded-full bg-gray-200`;
  const FormClass = ` flex items-center gap-2 `;
  const InputClass = ` outline-none`;
  const IconClass = `w-6 h-auto text-gray-600`;

  return (
    <div className={BaseClass}>
      {" "}
      <form action="" className={FormClass}>
        <IoIosSearch className={IconClass} />
        <input
          className={InputClass}
          type="text"
          placeholder="Searching on facebook"
        ></input>
      </form>{" "}
    </div>
  );
};

export default SearchButton;
