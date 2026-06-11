export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Welcome to Atharv Travel. By using our website and
          services, you agree to comply with the following
          terms and conditions.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Booking & Reservations
          </h2>
          <p>
            All bookings are subject to availability and
            confirmation. Atharv Travel reserves the right
            to modify or cancel bookings due to unforeseen
            circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Pricing
          </h2>
          <p>
            Package prices may vary depending on travel
            dates, accommodation type, transportation,
            availability, and other factors. Final pricing
            will be provided during the booking process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Customer Responsibility
          </h2>
          <p>
            Customers are responsible for providing accurate
            personal information and required travel
            documents. Any losses resulting from incorrect
            information are the responsibility of the
            customer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Cancellations & Refunds
          </h2>
          <p>
            Cancellation and refund policies may vary based
            on the selected package, hotel, or transport
            provider. Applicable charges may apply.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p>
            Atharv Travel shall not be held responsible for
            delays, cancellations, weather conditions,
            natural disasters, government restrictions, or
            other events beyond our control.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Changes to Terms
          </h2>
          <p>
            Atharv Travel reserves the right to update these
            terms at any time without prior notice.
          </p>
        </section>

        <p className="pt-4 text-sm text-gray-500">
          Last Updated: June 2026
        </p>
      </div>
    </div>
  );
}