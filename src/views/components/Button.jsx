function Button({ text, bgColor, textColor ,onClick }) {
  return (
    <button className="flexfont-roboto font-[600] text-[36px] 
    leading-[25px] items-center justify-center capatalize 
    rounded-[36.83px]  w-auto px-[57px] py-[24px]"
    style={{
        backgroundColor: bgColor,
        color: textColor
    }}
    onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;