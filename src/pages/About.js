import scan from "../images/QR code_Monochromatic.svg";
const About = () => {
  return (
    <section className="flex flex-col bg-teal px-6 py-8 items-center space-y-12 md:px-16 md:pt-20 md:pb-20 lg:px-24 xl:px-48">
      <div className="flex flex-col w-full items-center justify-between space-y-7 md:flex-row  ">
        {/* text */}
        <div className="flex flex-col space-y-3 md:w-1/2">
          <h1 className="text-2xl font-bold text-secondary lg:text-3xl xl:text-4xl">
            What is getQr
          </h1>
          <p className="text-sm font-semibold text-gray-100 lg:max-w-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure fugit
            esse tempore, porro quibusdam labore tenetur est? Et repudiandae
            eveniet commodi animi. Exercitationem culpa non vero illo nisi
            reiciendis enim!
          </p>

          <p className="text-sm font-semibold text-gray-100 lg:max-w-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            nihil, ipsum corrupti exercitationem vero libero beatae, atque optio
            officia explicabo, similique nostrum!
          </p>
        </div>
        <img src={scan} alt="person scanning a qr code" className="md:w-1/2" />
      </div>
    </section>
  );
};

export default About;
