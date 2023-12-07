import NextLink, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type Props = LinkProps & PropsWithChildren;

export const Link: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <NextLink
      {...props}
      className="text-teal-500 hover:text-teal-600 underline hover:no-underline transition duration-300 ease-in-out text-sm"
    >
      {children}
    </NextLink>
  );
};
