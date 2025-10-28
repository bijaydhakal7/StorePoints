export default function Footer() {
  return (
    <footer className="w-full   bg-transparent backdrop-blur-sm rounded-2xl p-6 shadow-2xl mt-6 bottom-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-bold text-lg">StorePoint</div>
          <div className="text-sm  mt-1">
            Your one-stop store for demo products and category browsing.
          </div>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <div className="text-sm">Phone: (555) 123-4567</div>
          <div className="text-sm ">Email: hello@storepoint.demo</div>
        </div>

        <div>
          <div className="font-semibold">Location</div>
          <div className="text-sm ">123 Demo St, Suite 100 — Anytown, USA</div>
        </div>

        <div>
          <div className="font-semibold">Follow</div>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="twitter" className="">🎙️</a>
            <a href="#" aria-label="facebook" className="">📘</a>
            <a href="#" aria-label="instagram" className="">📸</a>
          </div>
        </div>
      </div>
    </footer>
  );
}