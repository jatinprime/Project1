import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">
          At <strong>Your Website Name</strong>, your privacy is of utmost importance to us. This privacy policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-8 text-gray-700 mb-4">
          <li>Personal details such as name, email address, and contact number.</li>
          <li>Technical data like IP address, browser type, and device information.</li>
          <li>Usage data including pages visited, time spent on the website, and clicks.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          The information we collect is used to:
        </p>
        <ul className="list-disc pl-8 text-gray-700 mb-4">
          <li>Provide, operate, and maintain our website.</li>
          <li>Improve, personalize, and expand our services.</li>
          <li>Communicate with you regarding updates or promotional offers.</li>
          <li>Ensure the security of our platform.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          3. Sharing of Information
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell or share your personal information with third parties, except:
        </p>
        <ul className="list-disc pl-8 text-gray-700 mb-4">
          <li>To comply with legal obligations or protect our rights.</li>
          <li>To service providers who assist in website operation (e.g., hosting).</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          4. Cookies
        </h2>
        <p className="text-gray-700 mb-4">
          We use cookies to enhance your browsing experience. You can control or disable cookies through your browser settings.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          5. Your Rights
        </h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, update, or delete your personal data. To exercise these rights, please contact us at <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">your-email@example.com</a>.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions or concerns about this policy, feel free to contact us at <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">your-email@example.com</a>.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
