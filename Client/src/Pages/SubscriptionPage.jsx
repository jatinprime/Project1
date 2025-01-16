import React, { useState } from "react";

const SubscriptionPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-800 to-purple-500 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Unlock Pro Features Today!</h1>
        <p className="text-lg mb-8">
          Go beyond limits with ad-free streaming, exclusive content, and more.
        </p>
        <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
          Subscribe Now
        </button>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Go Pro?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {[
            { title: "Ad-Free Experience", icon: "🎉" },
            { title: "Exclusive Content", icon: "🔥" },
            { title: "HD & 4K Streaming", icon: "📺" },
            { title: "Offline Access", icon: "📥" },
            { title: "Priority Support", icon: "💬" },
            { title: "Cancel Anytime", icon: "⏳" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      {/* <div className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`px-4 py-2 ${
              isYearly ? "bg-pink-500" : "bg-gray-700"
            } text-white font-semibold rounded-md`}
          >
            {isYearly ? "Yearly Plan" : "Monthly Plan"}
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-bold mb-4">Pro Monthly</h3>
            <p className="text-lg">$9.99/month</p>
            <button className="mt-4 px-6 py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600">
              Subscribe
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-bold mb-4">Pro Yearly</h3>
            <p className="text-lg">$99.99/year (Save 20%)</p>
            <button className="mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}



<div className="flex flex-wrap justify-center gap-8 w-full my-16">
  {/* Monthly Subscription */}
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[420px] min-h-[200px] flex flex-col">
    <h2 className="text-2xl font-semibold mb-2 text-center">Monthly Plan</h2>
    <p className="text-gray-400 text-center mb-4">Enjoy unlimited access for one month.</p>
    <p className="text-3xl font-bold text-center mb-4">$9.99 / month</p>
    <button
      className="w-full py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg 
      hover:bg-gradient-to-l hover:from-teal-600 hover:to-blue-600 transition-all mt-auto"
    >
      Subscribe Now
    </button>
  </div>

  {/* Yearly Subscription */}
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[420px] min-h-[200px] flex flex-col">
    <h2 className="text-2xl font-semibold mb-2 text-center">Yearly Plan</h2>
    <p className="text-gray-400 text-center mb-4">Get 2 months free with a yearly subscription.</p>
    <p className="text-3xl font-bold text-center mb-4">$99.99 / year</p>
    <button
      className="w-full py-2 bg-gradient-to-r from-green-500 to-lime-500 text-white font-semibold rounded-lg 
      hover:bg-gradient-to-l hover:from-lime-600 hover:to-green-600 transition-all mt-auto"
    >
      Subscribe Now
    </button>
  </div>
</div>



      {/* Comparison Table */}
      <div className="py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">
          Free vs. Pro Comparison
        </h2>
        <table className="w-3/4 mx-auto table-auto text-left text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2">Feature</th>
              <th className="px-4 py-2 border-b-2">Free</th>
              <th className="px-4 py-2 border-b-2">Pro</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Ad-Free Experience", "❌", "✅"],
              ["Exclusive Content", "❌", "✅"],
              ["HD & 4K Streaming", "❌", "✅"],
              ["Offline Access", "❌", "✅"],
              ["Priority Support", "❌", "✅"],
            ].map(([feature, free, pro], index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{feature}</td>
                <td className="px-4 py-2 border-b">{free}</td>
                <td className="px-4 py-2 border-b">{pro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Pro Subscription. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SubscriptionPage;



// import React from "react";

// const SubscriptionPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
//       {/* Top Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-white mb-4">Pro Subscription</h1>
//         <button
//           className="py-3 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-lg 
//           border-2 border-pink-500 hover:bg-gradient-to-l hover:from-purple-700 hover:to-pink-700
//           focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//         >
//           Subscribe Now
//         </button>
//       </div>

    
//       {/* Additional Features */}
//       <div className="mt-10 text-center">
//         <h2 className="text-3xl font-bold mb-4">Why Go Pro?</h2>
//         <ul className="list-disc list-inside space-y-2 text-gray-300">
//           <li>Ad-free streaming experience</li>
//           <li>Exclusive content and early access</li>
//           <li>Support for high-definition (HD) streaming</li>
//           <li>Download and watch offline</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPage;
