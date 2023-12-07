import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type Props =
  | React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  | (LinkProps & PropsWithChildren);

export const Button: React.FunctionComponent<Props> = (props) => {
  const Component = "href" in props ? Link : "button";

  return (
    <Component
      className="block bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-normal py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline w-full text-center"
      {...(props as any)}
    />
  );
};
