const SignUp = () => {
  const options = [
    { name: "Players", icon: "fas fa-futbol", link: "/signuppage" },
    { name: "Experts", icon: "fas fa-chalkboard-teacher", link: "/signuppage" },
    { name: "Teams", icon: "fas fa-users", link: "/signuppage" },
    { name: "Sponsors", icon: "fas fa-dollar-sign", link: "/signuppage" },
    { name: "Fans/Followers", icon: "fas fa-trophy", link: "/signuppage" },
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold font-Raleway text-black mb-6">Sign Up to Sports App</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md group transform transition-all duration-300 hover:scale-95 hover:shadow-xl"
          >
            <div className="text-4xl">
              <i className={`${option.icon} text-black`}></i> {/* Added text-black for black icons */}
            </div>
            <h3 className="mt-2 font-semibold text-black font-Opensans">{option.name}</h3>
            
            <a
              href={option.link}
              className="mt-3 px-4 py-2 bg-[#FE221E] text-white rounded-lg text-sm font-Raleway hover:bg-red-500"
            >
              Sign Up as a {option.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignUp;
