interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "default";
}
const variants = {
  primary: { backgroundColor: "blue", color: "white" },
  default: { backgroundColor: "gray", color: "black" },
};
export const Button = ({
  variant = "default",
  style = {},
  ...props
}: Props) => (
  <button
    data-entity="button"
    {...props}
    style={{ ...variants[variant], ...style }}
  />
);
