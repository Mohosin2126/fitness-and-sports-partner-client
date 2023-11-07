const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/tPfT5Lz/1065702.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">WELCOME TO FITNESS <br /><span className="font-serif text-red-400">&</span> <br />SPORTS PARTNER</h1>
            <p className="mb-5">Your go-to platform for finding the perfect workout buddy and sports enthusiast to achieve your fitness goals together!</p>
            <button className="btn btn-outline btn-secondary">Find Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  