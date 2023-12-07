type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: React.FunctionComponent<Props> = (props) => {
  return (
    <input
      className="shadow-md appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition duration-300 ease-in-out"
      {...props}
    />
  );
};
