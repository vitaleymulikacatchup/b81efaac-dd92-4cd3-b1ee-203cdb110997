import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help']
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business']
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for K-12', 'Shop for College']
    },
    {
      title: 'For Healthcare',
      links: ['Apple and Healthcare']
    },
    {
      title: 'For Government',
      links: ['Apple and Government', 'Shop for Veterans and Military', 'Shop for State and Local Employees', 'Shop for Federal Employees']
    },
    {
      title: 'Apple Values',
      links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain Innovation']
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
    }
  ];

  return (
    <footer className="bg-apple-light-gray pt-12 pb-6">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Disclaimer text */}
        <div className="text-xs text-apple-text-gray mb-8 leading-relaxed">
          <p className="mb-4">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse, cancel, or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
          <p className="mb-4">
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p className="mb-4">
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
          </p>
          <p className="mb-4">
            If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
          </p>
          <p className="mb-4">
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218
          </p>
          <p className="mb-4">
            A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
          </p>
          <p>
            Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </p>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-black text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-xs text-apple-text-gray hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-xs text-apple-text-gray mb-6">
          <p className="mb-2">
            More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE (1-800-692-7753).
          </p>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-apple-text-gray">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">Sales and Refunds</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">Site Map</a>
            <span className="ml-8">United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;