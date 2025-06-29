// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {

  // กำหนดสไตล์พื้นฐานของปุ่ม
  const baseStyle = 'font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-200';

  // กำหนดสไตล์ตาม variant (primary, secondary, etc.)
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-white focus:ring-2',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-blue-600 focus:ring-2',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]}`} // นำสไตล์มารวมกัน
    >
      {children}
    </button>
  );
};

export default Button;