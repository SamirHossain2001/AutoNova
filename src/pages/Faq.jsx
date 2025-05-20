import React, { useEffect, useState } from "react";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/faq.json");
      const data = await response.json();
      setFaqData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 mt-5 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Frequently Asked Questions
      </h1>

      {faqData.map((section, secIndex) => (
        <div key={secIndex}>
          <h2 className="text-2xl font-semibold mb-4 ">{section.category}</h2>

          <div className="space-y-2">
            {section.items.map((item, index) => (
              <div className="collapse collapse-arrow bg-base-200" key={index}>
                <input type="checkbox" />
                <div className="collapse-title font-medium text-lg">
                  {item.question}
                </div>
                <div className="collapse-content text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
