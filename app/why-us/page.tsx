export default function WhyUsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="mt-2 text-gray-600">
          We provide comprehensive support to make your education abroad journey smooth and successful.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-2xl">📋</div>
            <div>
              <h3 className="font-semibold text-lg">Clear Timelines & Checklists</h3>
              <p className="mt-2 text-sm text-gray-600">
                We provide step-by-step timelines and detailed checklists for every destination, ensuring you never miss an important deadline.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-2xl">👥</div>
            <div>
              <h3 className="font-semibold text-lg">One-on-One Guidance</h3>
              <p className="mt-2 text-sm text-gray-600">
                Get personalized guidance for document preparation, university selection, and application review from our experienced counselors.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-2xl">🛡️</div>
            <div>
              <h3 className="font-semibold text-lg">Dedicated Support</h3>
              <p className="mt-2 text-sm text-gray-600">
                We support you through every stage - from visa applications to pre-departure preparations and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-2xl">🏆</div>
            <div>
              <h3 className="font-semibold text-lg">Proven Track Record</h3>
              <p className="mt-2 text-sm text-gray-600">
                With 500+ success stories and 2,000+ student consultations, we have the expertise to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border bg-blue-50 p-8">
        <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            We are committed to providing world-class educational consultation services that empower students to achieve their international education dreams.
          </p>
          <p>
            Our team of experienced professionals works tirelessly to ensure that every student receives personalized attention and comprehensive support throughout their journey.
          </p>
          <p>
            Whether you're just beginning to explore your options or preparing for your final submission, we're here to guide you every step of the way.
          </p>
        </div>
      </section>
    </div>
  );
}
