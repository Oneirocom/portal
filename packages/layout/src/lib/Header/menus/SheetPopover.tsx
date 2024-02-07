import React, { ReactNode } from 'react'
import {
  Button,
  Sheet,
  SheetTrigger,
  SheetContent,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@magickml/portal-ui'

type SheetPopoverProps = {
  children: ReactNode
  triggerIcon: JSX.Element
  sheetOpen: boolean
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
  popoverOpen: boolean
  setPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SheetPopover = ({
  children,
  triggerIcon,
  sheetOpen,
  setSheetOpen,
  popoverOpen,
  setPopoverOpen,
}: SheetPopoverProps) => {
  return (
    <>
      {/* Desktop */}
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button className="hidden lg:flex" size="icon" variant="ghost">
            {triggerIcon}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="mr-2 rounded-t-md flex px-0 flex-col gap-y-5 text-black dark:text-[#e9edf1] pb-2 bg-white dark:bg-[#262b2e]">
          {children}
        </PopoverContent>
      </Popover>

      {/* Mobile */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button className="flex lg:hidden" size="icon" variant="ghost">
            {triggerIcon}
          </Button>
        </SheetTrigger>
        <SheetContent
          className="flex px-0 flex-col !duration-300 rounded-t-md pt-10 pb-2 gap-y-5 text-black dark:text-[#e9edf1] bg-white dark:bg-[#262b2e]"
          side="bottom"
        >
          {children}
        </SheetContent>
      </Sheet>
    </>
  )
}

export default SheetPopover
