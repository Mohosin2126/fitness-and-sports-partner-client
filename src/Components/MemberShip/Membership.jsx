
const Membership = () => {
    return (
        <div className="mt-16 mb-10"> 
        <h1 className="text-center font-serif font-extrabold text-2xl ">Membership Pricing</h1>
        <div className="flex w-40 mx-auto mt-4">
                <h1 className="border  w-14"></h1>
                <h1 className="border w-16 border-red-500"></h1>
                <h1 className="border  w-14"></h1>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-5 ">
            <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-red-600 to-red-300 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
      standard
    </p>
    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span className="mt-2 text-4xl">$</span>29
      <span className="self-end text-4xl">/mo</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          5 team members
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          200+ components
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          40+ built-in pages
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div className="p-0 mt-12">
    <button
      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
    Sign Up
    </button>
  </div>
</div>
            <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-red-600 to-red-300 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
      Normal
    </p>
    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span className="mt-2 text-4xl">$</span>20
      <span className="self-end text-4xl">/mo</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          15 team members
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          100+ components
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          20+ built-in pages
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          5 month free updates
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div className="p-0 mt-12">
    <button
      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      Sign Up
    </button>
  </div>
</div>
            <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-red-600 to-red-300 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
   Student
    </p>
    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span className="mt-2 text-4xl">$</span>15
      <span className="self-end text-4xl">/mo</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          10 team members
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          170+ components
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          35+ built-in pages
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div className="p-0 mt-12">
    <button
      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
    Sign Up
    </button>
  </div>
</div>
            </div>
        </div>
    );
};

export default Membership;