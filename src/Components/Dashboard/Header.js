

const Header = ({setValue, setSearchData}) => {
  

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="navbar text-white  rounded-xl   bg-secondary my-5">
        <div className="navbar-start w-[50%]">
          <button className="btn btn-ghost normal-case text-xl">Billings</button>
        </div>
        <div className="navbar-center w-[40%]  hidden lg:flex">
          <input
            onChange={(e) => setSearchData(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input text-secondary text-xl input-bordered input-secondary w-full max-w-4xl"
          />
          <select
            onChange={(e) => setValue(e.target.value)}
            className="select  bg-primary  select-secondary max-w-xs"
          >
            <option  defaultValue="name" selected>
              Name
            </option>
            <option defaultValue="email">Email</option>
            <option defaultValue="phone">Phone Number</option>
          </select>
        </div>
        <div className="navbar-end">
          <label htmlFor="item-modal" className="btn modal-button">
            Add New Bill
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
