export default function Header() {
  return (
    <>
      <div className="h-12  flex flex-row px-5 lg:px-20 py-7 justify-between items-center bg-fill">
        <img
          className="w-20 h-10"
          src="LoGo.svg"
          loading="lazy"
          alt="google logo"
        />
        <span className=" text-primary font-extrabold font-poppins-400">
          Sign Out
        </span>
      </div>
      <hr />
    </>
  );
}
