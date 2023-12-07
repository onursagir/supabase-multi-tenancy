"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
  goBack?: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
  title,
  goBack,
  children,
}) => {
  const router = useRouter();

  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-80">
        <div className="flex items-center mb-6">
          {goBack && (
            <button
              onClick={router.back}
              className="p-2 -ml-2 mr-4 rounded transition duration-300 ease-in-out hover:bg-teal-50 hover:shadow-md"
              aria-label="Back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <h2 className="text-center text-gray-700 text-xl font-medium flex-grow">
            {title}
          </h2>
          {goBack && <div style={{ width: "48px" }} />}
        </div>
        {children}
      </div>
    </div>
  );
};
