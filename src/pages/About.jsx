import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router";

const reviews = [
  {
    name: "John Doe",
    location: "New York, USA",
    comment:
      "Smooth transaction and excellent customer service. Highly recommend this platform!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Lee",
    location: "Toronto, Canada",
    comment: "Found my dream SUV here. Loved the bidding process!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ahmed Khan",
    location: "Dubai, UAE",
    comment:
      "Easy to list, manage, and track vehicles. The analytics are very helpful.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Linda Martinez",
    location: "Madrid, Spain",
    comment:
      "I sold my car in just 2 days! The platform is efficient and reliable.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Carlos Rivera",
    location: "Mexico City, Mexico",
    comment: "Super smooth bidding and trustworthy buyers. Love the UI too!",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    name: "Fatima Zahra",
    location: "Casablanca, Morocco",
    comment:
      "Great tools to manage listings and track bids. Highly professional team!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Yuki Tanaka",
    location: "Osaka, Japan",
    comment: "Very smooth experience. The dashboard features are top-notch.",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    name: "Liam O'Connor",
    location: "Dublin, Ireland",
    comment: "Got a great deal on my used car. Would use again!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          About AutoNova Marketplace
        </h1>
        <p className="text-gray-600 text-lg">
          AutoNova is your trusted platform for buying and selling vehicles with
          ease. We bring transparency, efficiency, and convenience to the car
          trading experience.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {[
          {
            title: "Verified Sellers",
            desc: "Only genuine, verified sellers can list vehicles.",
          },
          {
            title: "Secure Bidding",
            desc: "Bid with confidence using our secure auction system.",
          },
          {
            title: "24/7 Support",
            desc: "Our support team is always here to help you succeed.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gray-100 border border-gray-300 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Customer Reviews */}
      <section>
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          What Our Customers Say
        </h2>
        <Swiper
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col justify-between h-[300px]">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 mx-auto rounded-full object-cover"
                />
                <p className="text-gray-600 italic flex-1 mt-4">
                  “{review.comment}”
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-lg">{review.name}</h4>
                  <span className="text-sm text-gray-500">
                    {review.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="collapse collapse-arrow border border-base-300 bg-base-100 shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How do I list my vehicle?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                Simply sign in, go to the "Submit Listing" section, and fill out
                your vehicle's details.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-base-300 bg-base-100 shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Is there a fee for selling?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                Listing is free, but a small commission applies on successful
                bids.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-base-300 bg-base-100 shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Can I edit my listing after submission?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                Yes, go to your dashboard and select the vehicle you want to
                edit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-[#050b20] text-white py-16 px-6 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Ready to Buy or Sell a Car?</h2>
        <p className="mb-8 text-lg">
          Join AutoNova today and experience a smarter, safer, and smoother car
          marketplace.
        </p>
        <NavLink
          to="/submitListing"
          className="btn bg-white text-[#050b20] font-semibold hover:bg-gray-300 px-8 py-3 rounded-xl shadow">
          Submit Your Listing
        </NavLink>
      </section>
    </div>
  );
};

export default About;
