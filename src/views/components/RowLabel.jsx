export default function RowLabel({ text, subtitle , position }) {
  return (
    <div className={`flex flex-col justify-center bg-[#036FE2] px-5 gap-1 border-b border-r border-[#D9D9D9]
      ${position === 'first' ? 'rounded-tl-xl' : ''}
      ${position === 'last' ? 'rounded-bl-xl' : ''}`}
    >
      <span className="font-Roboto  font-[600]  text-3xl leading-[32px] text-white items-center">
        {text}
      </span>
      {subtitle && (
        <span className="font-Roboto font-[400] text-base leading-[32px] text-white items-center opacity-80">
          {subtitle}
        </span>
      )}
    </div>
  );
}