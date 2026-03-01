interface CustomButtonProps {
  text: string;
  className?: string;  // Allow passing custom classes
}

const CustomButton2: React.FC<CustomButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`w-full py-2 px-4 rounded-md font-semibold text-white cursor-pointer ${className}`} 
         style={{
        background: "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
        color: "white",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton2;
