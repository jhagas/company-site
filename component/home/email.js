import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineMail } from "react-icons/ai";
import { postAPI } from "../../lib/api";

export default function Email() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const submitEmail = (event) => {
    setTimeout(() => {
      setSuccess(false)
    }, 3000);
    event.preventDefault();
    postAPI("/emails", { data: { email } });
    setEmail("");
    setSuccess(true);
  };

  return (
    <div className="bg-gray1 text-white sm:px-24 px-12 py-16 flex flex-col items-center gap-5">
      {success ? (
        <AiOutlineCheckCircle size="48px" className="text-[#32CD32]" />
      ) : (
        <AiOutlineMail size="48px" className="text-orange1 animate-bounce" />
      )}
      <div>
        <p className="font-work text-2xl max-w-lg text-center font-semibold">
          Subscribe to our newsletter about our latest innovation and events!
        </p>
        <p className="font-work text-sm text-center text-gray2">
          * we won&apos;t spam your Email
        </p>
      </div>
      <form onSubmit={submitEmail} className="flex flex-col items-center gap-4">
        <input
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={(event) => setEmail(event.target.value)}
          className="p-2 border-2 border-gray bg-black bg-opacity-50 rounded-md outline-none focus:border-orange1 focus:bg-opacity-0 shadow-md transition-colors"
        />
        <button
          className="z-10 transition hover:bg-gray3 font-work font-semibold sm:text-lg text-sm text-blue bg-white border-2 border-blue w-fit shadow-md py-2 px-4 rounded-md"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
