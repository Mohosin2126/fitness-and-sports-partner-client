

const Trainer = () => {
  return (
      <div>
          <div className="mt-12">
          <h1 className="text-2xl font-semibold font-serif text-center">Trainer&Classes </h1>
          <div className="flex w-40 mx-auto mt-4">
              <h1 className="border  w-14"></h1>
              <h1 className="border w-16 border-red-500"></h1>
              <h1 className="border  w-14"></h1>
          </div>
          <div className="md:flex md:mt-16">
          <div data-aos="fade-right"
   data-aos-offset="300"
   data-aos-easing="ease-in-sine" className="md:flex-1 flex gap-28 mt-5">
          <div className="space-y-10 bg-base-200">
<div className=" flex flex-col md:h-56 lg:flex-row">
  <img src="https://i.ibb.co/R34BzJ5/fit-for-court-domination-your-ultimate-basketball-trainer-header-v2-960x540.jpg" className="w-96  h-56 rounded-lg shadow-2xl" />
  <div className=" bg-slate-800">
    <h1 className="text-xl  font-bold font-serif ml-4">John</h1>
    <h4 className="text-red-400 ml-4">BasketBall</h4>
    <p className="py-6 ml-4">Hey everyone, I would  like to introduce you to John, an incredibly talented basketball trainer with a passion for developing players of all levels.</p>

  </div>
</div>
<div className="mt-28 flex flex-col h-56 lg:flex-row">
  <img src="https://i.ibb.co/JtByS2Y/bodybuilding-specialist-mobile-hero-image-2x.jpg" className="w-96 md:h-56 rounded-lg shadow-2xl" />
  <div className=" bg-slate-800">
    <h1 className="text-xl  font-bold font-serif ml-4">Rock</h1>
    <h4 className="text-red-400 ml-4">Body Builder</h4>
    <p className="py-6 ml-4">Hey everyone, I would  like to introduce you to John, an incredibly talented bodybuilder trainer with a passion for developing players of all levels. .</p>

  </div>
</div>
</div>

          </div>
          <div  data-aos="fade-left"
   data-aos-offset="300"
   data-aos-easing="ease-in-sine" className="mt-52 md:mt-5 md:flex-1 md:ml-10">
          <div className="collapse collapse-arrow bg-base-200">
<input type="radio" name="my-accordion-2" checked="checked" /> 
<div className="collapse-title text-xl font-medium">
Membership and Pricing
</div>
<div className="collapse-content"> 
  <p className="font-serif text-base">We offer various membership options, including monthly and annual plans, with different tiers based on the amenities and services you prefer. Our pricing is transparent, and there are no hidden costs. We also have special promotions and discounts for long-term memberships</p>
</div>
</div>
<div className="collapse collapse-arrow bg-base-200">
<input type="radio" name="my-accordion-2" /> 
<div className="collapse-title text-xl font-medium">
Facilities and Equipment
</div>
<div className="collapse-content"> 
  <p className="font-serif text-base">Our gym is equipped with a wide range of modern fitness equipment, including cardio machines, free weights, and strength training equipment. We ensure our equipment is regularly maintained and updated to provide you with the best workout experience</p>
</div>
</div>
<div className="collapse collapse-arrow bg-base-200">
<input type="radio" name="my-accordion-2" /> 
<div className="collapse-title text-xl font-medium">
Classes and Training Programs
</div>
<div className="collapse-content"> 
  <p className="font-serif text-base">We offer a diverse selection of fitness classes, including yoga, spin, and HIIT, all included in your membership. We also provide personal training services with certified trainers who can create personalized workout plans tailored to your specific fitness goals</p>
</div>
</div>
          </div>
          </div>
          </div>
      </div>
  );
};

export default Trainer;