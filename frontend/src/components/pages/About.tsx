import {
  InstaPosts,
  Newsletter,
  PageBanner,
  banner2,
  user,
} from "../utils/helper";

const About = () => {
  return (
    <>
      <PageBanner
        title="ABOUT ZOYA"
        imgSrc={banner2}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut consectetur nulla ullam!"
      />

      <section>
        <div className="container flex items-center justify-between gap-4">
          <div className="flex w-[70%] flex-col">
            <span className="primary-span">LIFESTYLE BLOGGER</span>
            <h1 className="pb-4 pt-4 text-5xl">Hi, I am Carolyn!</h1>
            <p className="font-serif text-xl">
              Ex azum san pericula usu an, in pri dolorum denique. Cu movet
              debitis cum. Vix paulo evertitur cu, conceptam constituam te his,
              meis euismod sed ad. Partem suscipit cu cum. Vix no prodesset
              complectitur conclud aturque, dicam perfecto eu per, ne vis
              eleifend expetenda. Idque petentium laboramus mea id, mei at.
            </p>

            <p className="p-12 font-serif text-3xl italic text-primary-600">
              Venenatis faucibus. Nullam quis ante. Curabitur ullamcorper
              ultricies vitae nisi etiam sit amet. Orci eget eros sapien ut
              libero?
            </p>

            <p className="font-serif text-xl">
              Ex mea oratio evertitur, mediocrem principes no has. Quodsi
              copiosae vel eu. Te rebum diceret gloriatur sea, dolorum fabellas
              vulputate has ex, mea similique posidonium persequeris at. Et
              dicat referrentur usu. Te cum saperet inimicus. Vix paulo
              evertitur cu, conceptam constituam te his, meis euismod sed ad.
              Partem suscipit cu cum. Vix no prodesset complectitur conclud
              aturque, dicam perfecto eu per, ne vis eleifend expetenda. Idque
              petentium laboramus mea id, mei at minim labores tollit enim
              singulis instructior his dicant fabulas.
            </p>

            <hr className="mt-12" />
          </div>

          <img src={user} alt="user" className="w-[28%]" />
        </div>
      </section>

      <Newsletter />
      <InstaPosts />
    </>
  );
};

export default About;
