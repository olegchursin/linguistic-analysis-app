import LogoMark from '../atoms/LogoMark';

const LogoType: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8">
        <LogoMark />
      </div>
      <div>
        <span className="text-lg font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
          Linguistic Analysis
        </span>
      </div>
    </div>
  );
};

export default LogoType;
