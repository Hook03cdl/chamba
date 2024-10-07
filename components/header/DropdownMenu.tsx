"use client";
import { fetchDataUser } from "@/lib/data/user";
import { UserProps } from "@/lib/interfaces/interface";
import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard,
  User,
  LogOut,
  LogIn,
  ClipboardPen,
} from "lucide-react";
import { LogoutUser } from "@/lib/actions/auth";

/* eslint-disable @next/next/no-img-element */
export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserProps | undefined>(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = async () => {
    if (!user) return;
    await LogoutUser();
    setUser(undefined);
  };

  const options = user
    ? [
        {
          label: "Perfil",
          href: "/perfil",
          class:
            "block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row gap-2 items-center",
          icon: <User size={16} />,
        },
        ...(user.role === "1"
          ? [
              {
                label: "Panel de control",
                href: "/dashboard",
                icon: <LayoutDashboard size={16} />,
                class:
                  "block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row gap-2 items-center",
              },
            ]
          : []),
        {
          label: "Salir",
          href: "#",
          class:
            "block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row gap-2 items-center",
          icon: <LogOut size={16} />,
          onClick: handleLogout,
        },
      ]
    : [
        {
          label: "Iniciar sesión",
          href: "/login",
          class:
            "block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row gap-2 items-center",
          icon: <LogIn size={16} />,
        },
        {
          label: "Registrarse",
          href: "/signup",
          class:
            "block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 flex flex-row gap-2 items-center",
          icon: <ClipboardPen size={16} />,
        },
      ];

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchDataUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div ref={dropdownRef}>
      <span onClick={toggleDropdown}>
        {user?.src ? (
          <img
            src={user.src}
            alt={user?.name}
            className="size-12 rounded-full"
          />
        ) : (
          <img
            src={
              user?.name
                ? `https://ui-avatars.com/api/?rounded=true&name=${encodeURIComponent(
                    user?.name
                  )}`
                : "/images/notFound.png"
            }
            alt={user?.name}
            className="size-10"
          />
        )}
      </span>
      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <a
                key={option.label}
                href={option.href}
                className={option.class}
                onClick={option.onClick}
              >
                <span className="text-shark ml-2">{option.icon}</span>
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
