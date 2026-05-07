import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_75hjmsm",
        "template_gn09jv7",
        form.current,
        "tk-Pk4hMcmVqR_600"
      )

      .then(
        () => {
          alert("Message sent successfully!");
        },

        () => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-28 px-6"
    >

      {/* TITLE */}
      <h2 className="text-5xl font-bold text-center mb-16">
        Contact
      </h2>

      {/* CONTAINER */}
      <div
        className="
          glass
          max-w-6xl
          mx-auto
          rounded-3xl
          border
          border-white/10
          p-12
          grid
          md:grid-cols-2
          gap-14
        "
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          <h3 className="text-3xl font-semibold">
            Let’s Build Something Great
          </h3>

          <p className="mt-6 text-gray-400 leading-8">
            Open to backend engineering opportunities,
            collaborations, internships, and impactful
            software projects.
          </p>

          <div className="mt-10">

            <p className="text-lg text-gray-300">
              er.ayushseth@gmail.com
            </p>

          </div>

        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}

          className="space-y-6"
        >

          {/* NAME */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required

            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-6
              py-4
              outline-none
              focus:border-purple-400
            "
          />

          {/* EMAIL */}
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required

            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-6
              py-4
              outline-none
              focus:border-purple-400
            "
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required

            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-6
              py-4
              outline-none
              focus:border-purple-400
            "
          />

          {/* BUTTON */}
          <button
            type="submit"

            className="
              bg-purple-600
              hover:bg-purple-500
              transition-all
              duration-300
              px-8
              py-4
              rounded-2xl
              font-medium
              w-full
            "
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}