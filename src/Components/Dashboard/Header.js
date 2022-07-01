

const Header = ({setValue, setSearchData}) => {
  

  return (
    <div className=" max-w-7xl mx-auto">
      <div class="navbar text-white  rounded-xl   bg-secondary my-5">
        <div class="navbar-start w-[50%]">
          <button class="btn btn-ghost normal-case text-xl">Billings</button>
        </div>
        <div class="navbar-center w-[40%]  hidden lg:flex">
          <input
            onChange={(e) => setSearchData(e.target.value)}
            type="text"
            placeholder="Type here"
            class="input text-secondary text-xl input-bordered input-secondary w-full max-w-4xl"
          />
          <select
            onChange={(e) => setValue(e.target.value)}
            class="select  bg-primary  select-secondary max-w-xs"
          >
            <option value="name" selected>
              Name
            </option>
            <option value="email">Email</option>
            <option value="phone">Phone Number</option>
          </select>
        </div>
        <div class="navbar-end">
          <label for="item-modal" class="btn modal-button">
            Add New Bill
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
