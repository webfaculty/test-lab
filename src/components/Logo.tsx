import { Link } from "react-router-dom";
import logoPng from "@/assets/logo.png";
import logoFooter from "@/assets/logo-footer.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
  size?: "default" | "small";
}

const Logo = ({ className = "", variant = "default", size = "default" }: LogoProps) => {
  const sizeClasses = size === "small" 
    ? "h-[56px] sm:h-[62px] md:h-[67px]" 
    : "h-[50px] sm:h-[55px] md:h-[60px]";

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={variant === "light" ? logoFooter : logoPng}
        alt="IN10SIP Logo"
        className={`${sizeClasses} w-auto`}
      />
    </Link>
  );
};

export default Logo;
