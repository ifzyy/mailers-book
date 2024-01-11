import React from 'react'

const Testimonials = () => {
  return (
    <div className="bg-white pt-6 px-20 max-md:px-5">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
        <span className="flex flex-col mt-11 items-start max-md:max-w-full max-md:mt-10">
          <span className="items-center border border-[color:var(--Foundation-Green-green-100,#CBEBD4)] shadow-sm bg-stone-50 flex gap-1 px-2 rounded-[30000px] border-solid">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68a3459a04709160cc149474636218a618b61a47cdc61f5d4e8c4790a2f23458?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a3459a04709160cc149474636218a618b61a47cdc61f5d4e8c4790a2f23458?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a3459a04709160cc149474636218a618b61a47cdc61f5d4e8c4790a2f23458?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a3459a04709160cc149474636218a618b61a47cdc61f5d4e8c4790a2f23458?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a3459a04709160cc149474636218a618b61a47cdc61f5d4e8c4790a2f23458?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a3459a04709160cc149474636218a618b61a47cdc61f5d4e8c4790a2f23458?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a3459a04709160cc149474636218a618b61a47cdc61f5d4e8c4790a2f23458?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68a3459a04709160cc149474636218a618b61a47cdc61f5d4e8c4790a2f23458?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
              className="aspect-square object-contain object-center w-[18px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="justify-center text-gray-600 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
              Testimonials{" "}
            </div>
          </span>
          <div className="text-neutral-800 text-4xl font-semibold leading-[49px] tracking-tighter self-stretch mt-5 max-md:max-w-full">
            Explore the <span className="text-neutral-800">Buzz</span> and{" "}
            <span className="text-neutral-800">Rave Reviews</span>
          </div>
          <div className="text-gray-500 text-xl leading-8 self-stretch mt-4 max-md:max-w-full">
            Hear the resounding praise for our collection of design books and
            Join the conversation today!
          </div>
          <span className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch bg-green-400 mt-5 px-4 py-3 rounded-lg">
            Explore Our List{" "}
          </span>
        </span>
      </div>
      <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
        <div className="justify-center flex grow flex-col py-12 items-start max-md:max-w-full max-md:mt-10">
          <div className="justify-center flex flex-col mb-5 px-16 py-5 items-end max-md:max-w-full max-md:px-5">
            <span className="flex w-[563px] max-w-full flex-col items-stretch mr-11 max-md:mr-2.5">
              <div className="text-neutral-800 text-xl font-medium leading-8 max-md:max-w-full">
                “This website transformed my design journey. The selection is
                inspiring, offering exceptional content that has fueled my
                creativity. Highly recommended for design enthusiasts!”
              </div>
              <div className="text-gray-500 text-xl leading-8 mt-3.5 max-md:max-w-full">
                John Hopkins{" "}
              </div>
              <div className="text-neutral-800 text-xl font-medium leading-8 mt-16 max-md:max-w-full max-md:mt-10">
                “As a thrilled customer, I've found top design authors and
                seamless service on this website. It's my go-to for design
                inspiration, and I'm committed for life!”
              </div>{" "}
              <div className="text-gray-500 text-xl leading-8 mt-3.5 max-md:max-w-full">
                John Hopkins{" "}
              </div>{" "}
              <div className="text-neutral-800 text-xl font-medium leading-8 mt-20 max-md:max-w-full max-md:mt-10">
                {" "}
                &quot;The diverse range of design books on this website has
                been a constant source of endless inspiration. I'm never
                disappointed and grateful for the creative fuel it
                provides!&quot;
              </div>
              <div className="text-gray-500 text-xl leading-8 mt-3.5 max-md:max-w-full">
                John Hopkins{" "}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Testimonials
