const Footer = () => {
  return (
    <>
      <footer className="text-white grid grid-cols-1 md:grid-cols-6 place-content-center mt-20 py-10 border-y   border-gray-600">
        <span className="text-[32px] font-semibold">
          Event{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo">
            360
          </span>
        </span>
        <div className="space-y-3 text-slate-500">
          <h1 className="text-xl font-bol text-white">Product</h1>
          <h4>Pricing</h4>
          <h4>Overview</h4>
          <h4>Browse</h4>
          <h4>Accessibility</h4>
        </div>
        <div className="space-y-3 text-slate-500">
          <h1 className="text-xl font-bold text-white">Solutions</h1>
          <h4>Brainstorming</h4>
          <h4>Ideation</h4>
          <h4>Wireframing</h4>
          <h4>Research</h4>
        </div>
        <div className="space-y-3 text-slate-500">
          <h1 className="text-xl font-bold text-white">Resources</h1>
          <h4>Help Center</h4>
          <h4>Blog</h4>
          <h4>Tutorials</h4>
          <h4>FAQs</h4>
        </div>
        <div className="space-y-3 text-slate-500">
          <h1 className="text-xl font-bold text-white">Support</h1>
          <h4>Contact Us</h4>
          <h4>Developers</h4>
          <h4>Documentation</h4>
          <h4>Interrogations</h4>
        </div>
        <div className="space-y-3 text-slate-500">
          <h1 className="text-xl font-bold text-white">Company</h1>
          <h4>About</h4>
          <h4>Press</h4>
          <h4>Events</h4>
          <h4>Request Demo</h4>
        </div>
      </footer>
      <footer className="md:flex justify-between py-10">
        <p>@2023 All right reserved.</p>
        <div className="md:flex gap-8">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <p>English</p>
          <p>Euro</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
