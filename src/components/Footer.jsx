import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import NavLinks from './navbar/NavLinks';

function Footer() {
  return (
    <footer className="bg-secondary py-4 text-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        {/* Navigation Links */}
        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
          <NavLinks
            listClasses="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6"
            oneClasses="text-sm"
          />
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h2 className="mb-4 text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gray-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gray-600"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gray-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gray-600"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
            <p className="text-sm">Phone: +123 456 7890</p>
            <p className="text-sm">Support: +987 654 3210</p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
