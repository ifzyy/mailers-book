import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-white pl-20 max-md:pl-5">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
        <span className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
          <span className="items-center border border-[color:var(--Foundation-Green-green-100,#CBEBD4)] shadow-sm bg-stone-50 flex gap-1 px-2 rounded-[30000px] border-solid self-start">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f23d78e14c3d9a2a3ac0876ff95ffb5364881d042a2917aa0e707a6699120374?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23d78e14c3d9a2a3ac0876ff95ffb5364881d042a2917aa0e707a6699120374?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23d78e14c3d9a2a3ac0876ff95ffb5364881d042a2917aa0e707a6699120374?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23d78e14c3d9a2a3ac0876ff95ffb5364881d042a2917aa0e707a6699120374?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23d78e14c3d9a2a3ac0876ff95ffb5364881d042a2917aa0e707a6699120374?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23d78e14c3d9a2a3ac0876ff95ffb5364881d042a2917aa0e707a6699120374?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23d78e14c3d9a2a3ac0876ff95ffb5364881d042a2917aa0e707a6699120374?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23d78e14c3d9a2a3ac0876ff95ffb5364881d042a2917aa0e707a6699120374?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
              className="aspect-square object-contain object-center w-[18px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="justify-center text-gray-600 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
              Our Newsletter{" "}
            </div>
          </span>
          <div className="text-neutral-800 text-4xl font-semibold leading-[48.6px] tracking-tighter self-stretch mt-4 max-md:max-w-full">
            Let’s keep in touch{" "}
          </div>
          <div className="text-gray-500 text-base leading-6 self-stretch mt-2 max-md:max-w-full">
            Sign up for our weekly email marketing newsletter and Updates
          </div>
          <span className="justify-between items-center border border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] bg-white self-stretch flex gap-5 mt-4 pl-4 pr-2 py-2 rounded-xl border-solid max-md:max-w-full max-md:flex-wrap">
            <div className="text-gray-400 text-base leading-6 my-auto">
              Enter your Email
            </div>
            <span className="text-neutral-100 text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch bg-green-400 self-stretch px-11 py-2.5 rounded-lg max-md:px-5">
              Suscribe{" "}
            </span>
          </span>
        </span>
      </div>
      <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex-col overflow-hidden relative flex min-h-[387px] grow justify-center px-16 py-12 items-end max-md:max-w-full max-md:mt-10 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2fcd31291d01cfed99431f5adce7f68fe9c10824a47a9f25dcc84b11ab7751f?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative flex items-stretch gap-0.5 mt-28 mb-16 max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:my-10">
            <span className="items-stretch flex gap-0.5 max-md:max-w-full max-md:flex-wrap">
              <div className="items-center border-[color:var(--Gray-25,#FCFCFD)] shadow-sm flex flex-col justify-center w-20 h-20 px-5 rounded-3xl border-[3.349px] border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a81d05e3245a87bd4911d28d9209f4c20707b1367815247f8d6cd5368941ef4d?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
                  className="aspect-square object-contain object-center w-full justify-center items-center shadow-sm overflow-hidden"
                />
              </div>
              <div className="flex basis-[0%] flex-col items-stretch mt-2.5 self-start">
                <div className="border border-[color:var(--Foundation-Green-green-500,#58BF73)] bg-green-50 flex shrink-0 h-2.5 flex-col border-solid" />
                <div className="border border-[color:var(--Foundation-Green-green-500,#58BF73)] bg-green-50 flex shrink-0 h-2.5 flex-col mt-12 border-solid max-md:mt-10" />
              </div>
              <div className="text-neutral-800 text-5xl font-semibold leading-[66.15px] tracking-tighter grow whitespace-nowrap mt-2 self-start max-md:text-4xl">
                Mailer’s books.
              </div>
            </span>
            <span className="text-white text-base font-medium leading-6 whitespace-nowrap items-stretch shadow-sm bg-amber-500 justify-center mt-8 px-5 py-2 rounded-sm border-2 border-solid border-amber-600 self-end">
              The best{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Newsletter
