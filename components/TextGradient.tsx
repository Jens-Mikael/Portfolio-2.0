const TextGradient = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => (
  <span className={` bg-gradient-to-r bg-clip-text text-transparent  ${color}`}>
    {children}
  </span>
);

export default TextGradient;
