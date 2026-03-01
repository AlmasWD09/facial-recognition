import SpinnerCa from "../Spinner_ca";

interface CustomButtonProps {
  text: string;
  disabledValue: boolean;
  isSubmit?: boolean;
   icon?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  isSubmit,
  disabledValue,
  icon = false,
}) => {
  return (
    <button
      style={{
        background: "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        fontSize:"20px",
        color: "white",
        cursor: "pointer",
      }}
      className="w-full"
      disabled={disabledValue}
    >
      {isSubmit && icon ? <SpinnerCa /> : text}
    </button>
  );
};

export default CustomButton;
