import AnimatedTitle from "../component/AnimatedTitle.jsx";
import Button from "../component/Button.jsx";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" className="h-full w-full object-cover" />
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="my-20 min-h-screen w-screen px-6 md:px-10">
      <div className="relative overflow-hidden rounded-2xl bg-black py-24 text-blue-50">

        {/* Left Images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/arcane-3.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/arcane-6.jpg"
            clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40"
          />

          <ImageClipBox
            src="/img/arcane-4.jpg"
            clipClass="contact-clip-path-1 mt-25 translate-y-60 lg:translate-y-40"
          />
        </div>

        {/* Right Image */}
        <div className="absolute -top-32 right-6 w-52 sm:w-60 md:top-1/2 md:-translate-y-1/2 lg:top-16 lg:w-80 lg:translate-y-0">
          <ImageClipBox
            src="/img/arcane-7.jpg"
            clipClass="sword-man-clip-path md:scale-110"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
          <p className="mb-6 font-general text-[10px] uppercase tracking-[0.4em] text-gray-400">
            Let's Talk
          </p>

          <AnimatedTitle
            // title="LET&#39;S B<b>U</b>ILD<br/>SOMETHING<br/>LEGENDARY."
            title="LET&#39;S H<b>a</b>ve <b>A</b>n <b>A</b>wesome Convers<b>a</b>tion."
            className="special-font w-full font-zentry text-5xl font-black leading-[0.88] md:text-7xl"
          />



          {/* Contact Form */}
          <form className="mt-10 w-full space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
            />

            <div className="flex justify-center pt-2">
              <Button
                title="send message"
                containerClass="cursor-pointer"
              />
            </div>
          </form>
        </div>

        {/* Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>
    </section>
  );
};

export default Contact;