export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 text-white text-center p-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">🎉 Thank You!</h1>
        <p className="text-lg">Your message has been sent successfully.</p>
        <p className="mt-2">I&apos;ll get back to you as soon as possible.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-white text-purple-600 rounded-lg shadow hover:bg-gray-100 transition">
          Back to Home
        </a>
      </div>
    </div>
  );
}
