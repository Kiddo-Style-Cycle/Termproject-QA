import React from 'react';

const Button = ({ 
  children,
  size = "large", // large, medium, small
  variant = "primary", // primary, outline, secondary, green, green-dark, orange, orange-dark, orange-light
  onClick,
  disabled = false,
  className = ""
}) => {
  // Size configurations based on Figma style guide
  const sizeStyles = {
    hero: "w-[240px] h-[60px] text-xl font-medium px-6 py-3",
    large: "w-[200px] h-[48px] text-xl font-medium px-6 py-3",
    medium: "w-[140px] h-[48px] text-xl font-medium px-5 py-2",
    small: "w-[100px] h-[32px] text-lg font-medium px-4 py-2"
  };

  // Color variants based on the style guide
  const variantStyles = {

    primary: "bg-[#b30047] hover:bg-[#9a003d] text-white",
    outline: "border-2 border-[#b30047] text-[#b30047] hover:bg-[#b30047] hover:text-white",
    secondary: "bg-[#6b1835] hover:bg-[#5a1429] text-white", // Darker pink variant
    green: "bg-[#4CAF50] hover:bg-[#22c55e] text-white",
    "green-dark": "bg-[#16a34a] hover:bg-[#15803d] text-white",
    orange: "bg-[#B36F00] hover:bg-[#d97706] text-white",
    "orange-dark": "bg-[#92400e] hover:bg-[#78350f] text-white",
    "orange-light": "bg-[#FFE5B4] hover:bg-[#FFD783] text-[#B36F00]"
  };

  // Disabled styles
  const disabledStyles = "opacity-50 cursor-not-allowed";

  // Base styles
  const baseStyles = "rounded-full transition-colors duration-200 winky-font flex items-center justify-center";

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : variantStyles[variant]}
    ${className}
  `.trim();

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
    </button>
  );
};

export default Button; 