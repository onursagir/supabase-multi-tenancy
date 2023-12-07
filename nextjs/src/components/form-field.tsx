interface Props extends React.PropsWithChildren {
  label: string;
}

export const FormField: React.FunctionComponent<Props> = ({
  children,
  label,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">
        {label}
      </label>
      {children}
    </div>
  );
};
