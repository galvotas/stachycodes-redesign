"use client";

import { useRouter } from "next/navigation";

interface LanguageSelectorProps {
  lang: string[];
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ lang }) => {
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;

    if (lang[0] === newLang) return;

    router.push(`/${newLang}`);
  };

  return (
    <div className="relative inline-block">
      <select
        value={lang[0]}
        onChange={handleLanguageChange}
        className="appearance-none bg-transparent p-4 rounded border border-green focus:outline-none"
      >
        <option value="en">🇬🇧</option>
        <option value="lt">🇱🇹</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
