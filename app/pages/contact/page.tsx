"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsDiscord } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { FaMedium } from "react-icons/fa";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleMessage = () => {
    if (message.name !== "") {
      const emailLink = document.createElement("a");
      emailLink.href = `mailto:tanjimulsabbir.dev@gmail.com?subject=${message.subject}!&body=Hi, Tanjimul Sabbir,%0D%0A I'm ${message?.name}. ${message?.message}`;

      emailLink.target = "_blank"; // Opens the email link in a new tab/window

      // Append the link to the document body (you can hide it if needed)
      document.body.appendChild(emailLink);

      // Programmatically trigger a click event
      emailLink.click();
      toast.dismiss("Please, send your message from email!");
      // Remove the link from the document body (optional)
      document.body.removeChild(emailLink);
    } else {
      toast.error("No message found!");
    }
  };

  return (
    <div id="contact" className="w-full py-14 mx-auto">
      <div>
        <div className="mb-10 mid-lg:mb-20 lg:text-center">
          <h1 className="heading font-bold text-[#ccd6f6] mb-5">
            Get In Touch
          </h1>
          <p className="text-custom-BgColor rubik text-xs sm:text-base">
            I’m currently looking for any new opportunities. Need a front-end
            developer? Have any question or proposal? Or just want to say hello,
            I’ll try my best to get back to you!
          </p>
        </div>
        <div className="text-primary pt-10">
          <div className="sm:grid grid-cols-2 sm:space-x-14">
            <div className="mb-7 flex flex-col">
              <label htmlFor="fullName" className="text-xs">
                Your name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullName"
                placeholder="Enter Name"
                onChange={(event) =>
                  setMessage((pre) => ({ ...pre, name: event.target.value }))
                }
                className="ContactPlaceHolder border-custom-TextColor placeholder:rubik mt-3"
              />
            </div>
            <div className="mb-7 flex flex-col">
              <label htmlFor="email" className="text-xs">
                Subject
              </label>
              <input
                onChange={(event) =>
                  setMessage((pre) => ({ ...pre, subject: event.target.value }))
                }
                type="text"
                name="subject"
                id="subject"
                placeholder="Give a subject (e.g. Job Opportunity, Question, Hello)"
                className="ContactPlaceHolder border-custom-TextColor placeholder:rubik mt-3"
              />
            </div>
          </div>
          <div className="mt-10 mb-7 flex flex-col">
            <label htmlFor="message" className="text-xs">
              Your Message
            </label>
            <textarea
              onChange={(event) =>
                setMessage((pre) => ({ ...pre, message: event.target.value }))
              }
              id="message"
              name="message"
              placeholder=""
              className="ContactPlaceHolder border-custom-TextColor resize-none placeholder:rubik"
            ></textarea>
          </div>
          <div data-aos="fade-down" data-aos-duration="700">
            <div className="mt-10">
              <button
                onClick={handleMessage}
                type="submit"
                className="border border-hover p-4 text-hover rounded text-sm transition-colors duration-700 hover:bg-hover hover:text-black cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 rubik text-custom-TitleColor">
        <h2>Feeling social? Find me on these online spaces too!</h2>
        <div className="flex items-center space-x-3 mt-3">
          <a
            className="list-none"
            href="https://github.com/TanjimulSabbir"
            target="_blank"
          >
            <FiGithub />{" "}
          </a>
          <a
            className="list-none"
            href="https://www.linkedin.com/in/TanjimulSabbir"
            target="_blank"
          >
            <FiLinkedin />{" "}
          </a>
          <a
            className="list-none"
            href="https://www.facebook.com/tanjimulsabbir.devel"
            target="_blank"
          >
            <FiFacebook />{" "}
          </a>
          <a
            className="list-none text-primary"
            href="https://medium.com/@TanjimulSabbir"
            target="_blank"
          >
            <FaMedium />{" "}
          </a>
          <a
            className="list-none text-xl"
            href="https://twitter.com/@TanjimulSabbir"
            target="_blank"
          >
            <CiTwitter />{" "}
          </a>
          <a
            className="list-none"
            href="https://discord.gg/bJmU6BtX"
            target="_blank"
          >
            <BsDiscord />{" "}
          </a>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Contact;
