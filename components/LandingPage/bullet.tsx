import React from 'react'

export const Bullet = ({ name }: any) => {
  return (
    <div className="pl-2 lg:pl-10 flex items-baseline space-x-[12px]">
      <div className="w-[11px] h-[11px] rounded-full bg-[#363636] min-w-[11px] min-h-[11px]"></div>
      <p className="text-[#363636]">{name}</p>
    </div>
  );
};

export const YellowBullet = ({ name }: any) => {
  return (
    <div className="pl-2 lg:pl-10 flex items-baseline space-x-[12px]">
      <div className="w-[11px] h-[11px] rounded-full bg-bulletColor min-w-[11px] min-h-[11px]"></div>
      <p className="text-bulletColor text-base md:text-lg sta-regular font-[500]">{name}</p>
    </div>
  );
};
