const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h5 className="text-lg font-semibold">About Cods.site</h5>
            <p className="text-sm mt-2">We help beginners and students create static websites effortlessly with 20MB of free hosting and an intuitive code editor.</p>
          </div>
  
          {/* Links */}
          <div>
            <h5 className="text-lg font-semibold">Helpful Links</h5>
            <ul className="mt-2 space-y-1">
              <li><a href="/create" className="text-blue-400 hover:underline">Create an Account</a></li>
              <li><a href="/login" className="text-blue-400 hover:underline">Login</a></li>
              <li><a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="text-blue-400 hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h5 className="text-lg font-semibold">Contact Us</h5>
            <p className="text-sm mt-2">
              Email: <a href="mailto:support@cods.site" className="text-blue-400 hover:underline">support@cods.site</a>
            </p>
            <p className="text-sm">
              Email: <a href="mailto:ramanlohar@cods.site" className="text-blue-400 hover:underline">ramanlohar@cods.site</a>
            </p>
          </div>
        </div>
  
        <hr className="border-gray-600 my-6" />
  
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Cods.site. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  