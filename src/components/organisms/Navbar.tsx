import { Link } from '@tanstack/react-location';

import LogoType from '../molecules/LogoType';
import ThemeSwitch from '../molecules/ThemeSwitch';

function getActiveProps() {
  return {
    style: {
      fontWeight: 'bold'
    }
  };
}

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-900">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" activeOptions={{ exact: true }}>
            <LogoType />
          </Link>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="items-center md:flex">
          <div className="flex flex-col md:flex-row md:mx-6">
            <span className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
              <Link
                to="dictionary"
                getActiveProps={getActiveProps}
                activeOptions={{ exact: true }}
              >
                Dictionary
              </Link>
            </span>
            <span className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
              Contact
            </span>
            <span className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
              About
            </span>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
