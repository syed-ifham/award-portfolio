import {TiLocationArrow} from "react-icons/ti";
import Button from "./Button";

export default function HeroContent({
                                      textColor,
                                      buttonClass,
                                      buttonId,
                                      zIndex = "",
                                      fn

                                    }) {
  const myYear = new Date().getFullYear() - 2006;
  return (
    <div className={`absolute left-0 top-0 ${zIndex} size-full`}>
      <div className="mt-25 px-5 sm:px-10">
        <h1 className={`special-font hero-heading ${textColor}`}>
          <b>ifham</b>
          <br/>
          <b>hussain</b>
        </h1>

        <div className="flex items-center justify-start gap-30">
          <p className={`mb-5 max-w-64 font-robert-medium ${textColor}`}>
            Hi there, I'm {myYear} years young<br/>
            coding for fun<br/>
            — software engineering in run
          </p>

          <Button
            onClick={fn}
            id={buttonId}
            title="Click Center"
            leftIcon={<TiLocationArrow/>}
            containerClass={`${buttonClass} mb-10  flex-center gap-1`}
          />
        </div>
      </div>
    </div>
  );
}