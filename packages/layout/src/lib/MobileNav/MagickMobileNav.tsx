import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

type Links = {
  name: string;
  href: string;
  Icon: React.ReactNode;
};

function MagickMobileNav() {
  const links: Links[] = [
    {
      name: "Home",
      href: "/",
      Icon: <HomeIcon />,
    },
    {
      name: "Agents",
      href: "/agents",
      Icon: <AgentIcon />,
    },
  ];
  // track active tab using url pathname and set active tab state
  const [activeTab, setActiveTab] = useState("");
  const { asPath } = useRouter();
  useEffect(() => {
    // check for / , /explore, /agents,
    if (asPath === "/") {
      setActiveTab("/");
    } else if (asPath === "/explore") {
      setActiveTab("/explore");
    } else if (asPath === "/agents") {
      setActiveTab("/agents");
    }
  }, [asPath]);

  return (
    <div className="lg:hidden fixed bottom-0 z-50 w-full h-16 bg-ds-header">
      <div className="inline-flex items-center justify-evenly border-t border-ds-secondary-m dark:border-ds-secondary-p h-full w-full ">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "inline-flex flex-col items-center justify-center font-medium px-5 py-2 basis-1/2 border-ds-secondary-m dark:border-ds-secondary-p",
              activeTab === link.href
                ? "text-ds-primary"
                : "text-ds-black dark:text-ds-white",
              link.href !== links[links.length - 1].href ? "border-r" : ""
            )}
          >
            {link.Icon}
            <span className="text-[8px] font-medium font-montserrat uppercase">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MagickMobileNav;

const HomeIcon = () => {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="home">
        <path
          id="Vector"
          d="M15.5 7.7375L21.75 13.3625V23.125H19.25V15.625H11.75V23.125H9.25V13.3625L15.5 7.7375ZM15.5 4.375L3 15.625H6.75V25.625H14.25V18.125H16.75V25.625H24.25V15.625H28L15.5 4.375Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

const AgentIcon = () => {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="smart_toy">
        <path
          id="Vector"
          d="M25.5 11.875V9.375C25.5 8 24.375 6.875 23 6.875H19.25C19.25 4.8 17.575 3.125 15.5 3.125C13.425 3.125 11.75 4.8 11.75 6.875H8C6.625 6.875 5.5 8 5.5 9.375V11.875C3.425 11.875 1.75 13.55 1.75 15.625C1.75 17.7 3.425 19.375 5.5 19.375V24.375C5.5 25.75 6.625 26.875 8 26.875H23C24.375 26.875 25.5 25.75 25.5 24.375V19.375C27.575 19.375 29.25 17.7 29.25 15.625C29.25 13.55 27.575 11.875 25.5 11.875ZM23 24.375H8V9.375H23V24.375ZM11.75 16.875C10.7125 16.875 9.875 16.0375 9.875 15C9.875 13.9625 10.7125 13.125 11.75 13.125C12.7875 13.125 13.625 13.9625 13.625 15C13.625 16.0375 12.7875 16.875 11.75 16.875ZM21.125 15C21.125 16.0375 20.2875 16.875 19.25 16.875C18.2125 16.875 17.375 16.0375 17.375 15C17.375 13.9625 18.2125 13.125 19.25 13.125C20.2875 13.125 21.125 13.9625 21.125 15ZM10.5 19.375H20.5V21.875H10.5V19.375Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
