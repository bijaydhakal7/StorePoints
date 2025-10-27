export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 mt-10 p-6 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-bold text-lg">StorePoint</div>
          <div className="text-sm text-slate-600 mt-1">
            Your one-stop store for demo products and category browsing.
          </div>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <div className="text-sm text-slate-600">Phone: (555) 123-4567</div>
          <div className="text-sm text-slate-600">Email: hello@storepoint.demo</div>
        </div>

        <div>
          <div className="font-semibold">Location</div>
          <div className="text-sm text-slate-600">123 Demo St, Suite 100 — Anytown, USA</div>
        </div>

        <div>
          <div className="font-semibold">Follow</div>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="twitter" className="text-slate-700">🎙️</a>
            <a href="#" aria-label="facebook" className="text-slate-700">📘</a>
            <a href="#" aria-label="instagram" className="text-slate-700">📸</a>
          </div>
        </div>
      </div>
    </footer>
  );
}