import React from "react";
import { Link } from "react-router-dom";

const ShippingDelivery = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[6rem] bg-[#f8f8f8]">
      {/* Main Content */}
      <main className="flex-grow wrapper mx-auto px-4 py-8 text-[#111111]">
        <h1 className="text-3xl font-bold mb-6 text-[#098DBA]">
          Shipping & Delivery Policy
        </h1>

        <p className="mb-4 text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-6">
          <p className="bg-blue-50 border-l-4 border-[#098DBA] p-4 rounded">
            <strong>Important Notice:</strong> Since Mecfinity AI provides digital services and solutions, there are no physical products shipped. All deliverables are provided digitally.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#098DBA]">
              Delivery Timeline
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Project timelines and delivery schedules will be outlined in the Service Agreement/Proposal shared before the start of the project.
              </li>
              <li>
                Delivery of websites, apps, or digital assets will be made electronically via email, secure links, or through client dashboards.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#098DBA]">
              Delayed Deliveries
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Delays caused by client dependencies (e.g., content, approvals, feedback) may extend the delivery timeline.
              </li>
              <li>
                Any delays from our side will be communicated transparently, along with a revised timeline.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#098DBA]">
              Access & Handover
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Upon completion, credentials (like website logins, app builds, or code repositories) will be handed over securely.
              </li>
              <li>
                Ongoing support, maintenance, or hosting (if included) will continue as per the agreed service plan.
              </li>
            </ul>
          </section>

          <section className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-[#098DBA]">
              Questions About Delivery?
            </h3>
            <p className="mb-2">
              For queries related to project delivery, please reach us:
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@mecfinityai.com"
                  className="text-[#098DBA] hover:text-[#039EC9]"
                >
                  info@mecfinityai.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+917483139873"
                  className="text-[#098DBA] hover:text-[#039EC9]"
                >
                  +91 7483139873
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#cccccc] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} MECFINITY AI SOLUTIONS LLP. All
              rights reserved.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end text-sm">
              <Link to="/terms-and-conditions" className="text-[#098DBA] hover:text-[#039EC9]">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link to="/Privacy-Policy" className="text-[#098DBA] hover:text-[#039EC9]">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                to="/cancellation-refund"
                className="text-[#098DBA] hover:text-[#039EC9]"
              >
                Cancellation & Refund
              </Link>
              <span>|</span>
              <Link
                to="/contact-us"
                className="text-[#098DBA] hover:text-[#039EC9]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShippingDelivery;

