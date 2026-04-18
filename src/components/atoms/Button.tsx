interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
}

export const Button = ({ children, variant = 'primary', isLoading, className, ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-2 rounded-lg font-medium transition-all disabled:opacity-50 w-full";
  
  const variants = {
    primary: "bg-red-900 text-white hover:bg-red-900",
    outline: "border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      disabled={isLoading} 
      {...props}
    >
      {isLoading ? "Tunggu..." : children}
    </button>
  );
};