interface TextProps {
    name: string;
  className?: string;
  spanText?: string;
}
export const Title = ({ name, spanText, className } : TextProps) => {
  return (
    <div className={`relative flex ${className} `}>
      <p className="text-[26px] lg:text-[50px] sat-bold font-bold text-secondary text-center mt-5 md:mt-0 ">
      {name} 
      <span className="text-secondary">
        {spanText}
      </span>
      </p>
    </div>
  );
}