const Navbar = () => {
  return (
    <div className="sticky top-0 z-[100] body bg-white flex flex-row items-center justify-between text-black px-8 py-4 text-xl font-mono">
      <div className="flex items-center">Icon</div>
      <div className="flex gap-12">
        <div className="items-center flex flex-row justify-between gap-8">
            <div>Donor</div>
            <div>Requester</div>
            <div>Volunteer</div>
        </div>
        <div className="flex items-center gap-4">
          <button className="border rounded-md px-2 py-1 bg-gray-200 text-nowrap"> Sign In</button>
          <button className="border rounded-md px-2 py-1 bg-black text-white"> Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
