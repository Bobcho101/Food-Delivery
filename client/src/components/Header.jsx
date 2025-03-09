import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
      { name: 'Home', href: '/' },
      { name: 'Order Food', href: '/order-food' },
      { name: 'About Us', href: '/about-us' },
      { name: 'Contacts', href: '/contacts' },
    ]
   return (
       <>
        <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            {/* <Link to={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=004d2c"
                className="h-8 w-auto"
              />
            </Link> */}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <span className="text-white text-xl">☰</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link to={item.href} key={item.name} className="text-sm/6 font-semibold text-white">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-90 z-50">
            <div className="p-6">
              {navigation.map((item) => (
                <Link to={item.href}
                  key={item.name}
                  className="block text-white text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-[#E63946] px-4 py-2 rounded text-white"
              >
                Close Menu
              </button>
            </div>
          </div>
        )}
      </header>
       </>
   );
}
