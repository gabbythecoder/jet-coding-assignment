import Image from "next/image";
import jetLogo from "@/../public/jet-logo-white.png";

import SearchBar from "./SearchBar";

export default function Header({ onSearch }) {
  return (
    <header className="bg-(--secondary-background) w-full py-6 px-4 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-6">
      <div className="flex justify-center lg:justify-start w-full lg:w-auto">
        <Image
          src={jetLogo}
          alt="JET Logo in white"
          placeholder="blur"
          className="w-100 h-auto"
        />
      </div>

      <div className="mt-4 w-full max-w-xs lg:mt-0 lg:flex lg:justify-center">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
}
