

const Trainer = () => {
    return (
        <div>
            <div className="mt-12">
            <h1 className="text-2xl font-semibold font-serif text-center">Trainer&Classes </h1>
            <div className="flex w-40 mx-auto mt-4">
                <h1 className="border  w-14"></h1>
                <h1 className="border  w-14"></h1>
            </div>
            <div className="flex mt-16">
            <div className="flex-1">
            <div className="space-y-10 bg-base-200">
  <div className=" flex flex-col lg:flex-row">
    <img src="https://i.ibb.co/R34BzJ5/fit-for-court-domination-your-ultimate-basketball-trainer-header-v2-960x540.jpg" className="w-96  h-56 rounded-lg shadow-2xl" />
    <div className=" bg-slate-800">
      <h1 className="text-xl  font-bold font-serif ml-4">John</h1>
      <h4 className="text-red-400 ml-4">BasketBall</h4>
      <p className="py-6 ml-4">Hey everyone, I would  like to introduce you to John, an incredibly talented basketball trainer with a passion for developing players of all levels. .</p>

    </div>
  </div>
  <div className=" flex flex-col lg:flex-row">
    <img src="https://i.ibb.co/JtByS2Y/bodybuilding-specialist-mobile-hero-image-2x.jpg" className="w-96 h-56 rounded-lg shadow-2xl" />
    <div className=" bg-slate-800">
      <h1 className="text-xl  font-bold font-serif ml-4">Rock</h1>
      <h4 className="text-red-400 ml-4">Body Builder</h4>
      <p className="py-6 ml-4">Hey everyone, I would  like to introduce you to John, an incredibly talented bodybuilder trainer with a passion for developing players of all levels. .</p>

    </div>
  </div>
</div>
 
            </div>
            <div className="flex-1 ml-10">
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Trainer;