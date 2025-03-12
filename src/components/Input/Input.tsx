interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: "primary" | "default";
}

const variants = {
  primary: { border: "1px solid blue" },
  default: { border: "1px solid gray" },
};

export const Input = ({ variant = "default", style = {}, ...props }: Props) => (
  <input
    data-entity="input"
    {...props}
    style={{ ...variants[variant], ...style }}
  />
);
