export default function RowLabel({ text, subtitle , position }) {
  return (
    <div className={`flex flex-col justify-center bg-[#036FE2] px-5 gap-1 border-b border-r border-[#D9D9D9]
      ${position === 'first' ? 'rounded-tl-xl' : ''}
      ${position === 'last' ? 'rounded-bl-xl' : ''}`}
    >
      <span className="font-Roboto text-xl lg:text-2xl font-medium text-white items-center">
        {text}
      </span>
      {subtitle && (
        <span className="font-Roboto text-sm leading-relaxed text-white items-center opacity-80">
          {subtitle}
        </span>
      )}
    </div>
  );
}