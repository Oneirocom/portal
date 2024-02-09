import Image from "next/legacy/image"
import { FunctionComponent } from 'react'

/**
 * The SideDrawerMP component represents a section in a side drawer that
 * displays MP (Magick Points) information.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
export const MP: FunctionComponent = () => {
  return (
    <div className="w-full h-[66px] flex flex-col px-5 box-border items-start justify-start gap-[5px]">
      <div className="self-stretch flex flex-row py-[5px] pr-2.5 items-center justify-start gap-[5px]">
        <Image
          className="relative w-[15px] h-[15px] overflow-hidden flex-shrink-0 object-cover"
          alt="Magic Points Icon"
          src="/images/icons/mp.svg"
          width={15}
          height={15}
        />
        <div className="text-sm font-montAlt">MP</div>
      </div>

      <div className="self-stretch relative h-[7.21px] ">
        <div className="-top-1 -left-1 absolute rounded-[20px] w-full h-5" />

        <div className="-top-0 -left-0 absolute rounded-[20px] bg-gradient-to-r from-[#99fff9] ring-1 ring-[#101112]/50 to-[#1bc5eb] w-full h-5" />
      </div>
    </div>
  )
}
