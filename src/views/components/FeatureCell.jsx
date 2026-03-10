export default function FeatureCell({ text, image ,text2 ,text3,text4,text5,text6}) {
  return (
    <div className="flex flex-col justify-center items-left  px-8 p-6 border-b border-r bg-[#EFEFEF] border-[#D9D9D9]">
      {image && (
        <div className="relative flex flex-row flex-wrap gap-2 justify-start items-center px-3 mb-2 ">
          <img src="/CloudIconClean.png" alt="Cloud" className="w-10 h-10 shrink-0 object-contain border border-[#D9D9D9]" />
          <img src="/AWSIconClean.png" alt="AWS" className="w-10 h-10 shrink-0 object-contain border border-[#D9D9D9]" />
          <img src="/AzureIconClean.png" alt="Azure" className="w-10 h-10 shrink-0 object-contain border border-[#D9D9D9]" />
          <img src="/DataBricksClean.png" alt="Databricks" className="w-10 h-10 shrink-0 object-contain border border-[#D9D9D9]" />
          <img src="/SnowFlakeClean.png" alt="Snowflake" className="w-10 h-10 shrink-0 object-contain border border-[#D9D9D9]" />
        </div>
      )}
      {text && (
         <div className="flex flex-col">
        <span className="font-Roboto font-[400] text-lg leading-[30px] text-[#162945] text-left">
          {text}
        </span>
        <span className="font-Roboto font-[400] text-lg leading-[30px] text-[#162945] text-left">
          {text2}
        </span>
        <span className="font-Roboto font-[400] text-lg leading-[30px] text-[#162945] text-left">
          {text3}
        </span>
        <span className="font-Roboto font-[400] text-lg leading-[30px] text-[#162945] text-left">
          {text4}
        </span>
        <span className="font-Roboto font-[400] text-lg leading-[30px] text-[#162945] text-left">
          {text5}
        </span>
        <span className="font-Roboto font-[400] text-lg leading-[30px] text-[#162945] text-left">
          {text6}
        </span>
        </div>
        
      )}
      
    </div>
  );
}