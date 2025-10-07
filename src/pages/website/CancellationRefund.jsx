import React from "react";
import { Link } from "react-router-dom";

const CancellationRefund = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[6rem] bg-[#f8f8f8]">
      {/* Main Content */}
      <main className="flex-grow wrapper mx-auto px-4 py-8 text-[#111111]">
        <h1 className="text-3xl font-bold mb-6 text-[#098DBA]">
          Cancellation & Refund Policy
        </h1>

        <p className="mb-4 text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-6">
          <p>
            At Mecfinity AI, we strive to deliver high-quality IT solutions and services tailored to your needs. However, we understand that circumstances may arise where cancellations or refunds are required.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#098DBA]">
              Cancellation
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Project cancellations must be requested in writing via email at{" "}
                <a
                  href="mailto:info@mecfinityai.com"
                  className="text-[#098DBA] hover:text-[#039EC9] underline"
                >
                  info@mecfinityai.com
                </a>
                .
              </li>
              <li>
                Cancellations requested before the commencement of the project are eligible for a full refund.
              </li>
              <li>
                Once the project has started, cancellation will be considered on a case-by-case basis, and any applicable charges for work already completed will be deducted.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#098DBA]">
              Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Refunds are processed only if the cancellation request is approved.
              </li>
              <li>
                No refunds will be issued for services already delivered or milestones already completed.
              </li>
              <li>
                Refunds, if applicable, will be initiated within 7–10 business days to the original payment method.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#098DBA]">
              Non-Refundable Items
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Domain name registration, server hosting, third-party licenses, or tools purchased on your behalf.
              </li>
              <li>
                Customized solutions that have been partially or fully delivered.
              </li>
            </ul>
          </section>

          <section className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-[#098DBA]">
              Need Assistance?
            </h3>
            <p className="mb-2">
              For further assistance, please contact us:
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+917483139873"
                  className="text-[#098DBA] hover:text-[#039EC9]"
                >
                  +91 7483139873
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@mecfinityai.com"
                  className="text-[#098DBA] hover:text-[#039EC9]"
                >
                  info@mecfinityai.com
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
                to="/shipping-delivery"
                className="text-[#098DBA] hover:text-[#039EC9]"
              >
                Shipping & Delivery
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

export default CancellationRefund;

