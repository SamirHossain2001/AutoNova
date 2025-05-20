import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row py-8 gap-8 container px-20 mx-auto">
      {/* Left Side - Form */}
      <div className="md:w-1/2 bg-white p-8 rounded-lg flex flex-col">
        <h2 className="text-4xl font-bold mb-5">Get In Touch</h2>
        <p className="mb-8 text-gray-600">
          Have questions or feedback? Send us a message and we’ll get back to
          you shortly.
        </p>

        <form className="flex flex-col gap-6">
          {/* First & Last Name */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-1/2 bg-white rounded-lg focus:outline-none focus:border-blue-700"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-1/2 bg-white rounded-lg focus:outline-none focus:border-blue-700"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-1/2 bg-white rounded-lg focus:outline-none focus:border-blue-700"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="input input-bordered w-1/2 bg-white rounded-lg focus:outline-none focus:border-blue-700"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Your message"
            className="textarea textarea-bordered resize-none bg-white rounded-lg w-full focus:outline-none focus:border-blue-700"
            rows={5}
            required
          />

          {/* Send Message Button */}
          <button
            type="submit"
            className="btn btn-primary bg-blue-700 px-8 py-5 rounded-2xl w-fit">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side - Contact Details */}
      <div className="md:w-1/2 bg-white p-8 rounded-lg">
        <div className="p-12 border border-gray-300 rounded-4xl">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <p className="mb-6 text-gray-600">
              We are here to assist you. Reach out via any of the following:
            </p>

            <div className="flex items-center gap-3 mb-4 text-gray-700">
              <AiOutlineHome size={24} />
              <span>1234 Aftabnagar, Bangladesh</span>
            </div>

            <div className="flex items-center gap-3 mb-4 text-gray-700">
              <AiOutlineMail size={24} />
              <span>contact@example.com</span>
            </div>

            <div className="flex items-center gap-3 mb-8 text-gray-700">
              <AiOutlinePhone size={24} />
              <span>+1 234 567 890</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-800 transition">
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400 transition">
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 transition">
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
