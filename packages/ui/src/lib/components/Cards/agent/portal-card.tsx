import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@magickml/client-ui'
import { getImage, ImageType } from 'shared/utils'
import { PortalCardProps } from './types'

export const PortalCard: React.FC<PortalCardProps> = ({
  id,
  name,
  image,
  description,
  onClick,
  menu,
  footer,
  badge,
}) => {
  return (
    <Card
      onClick={onClick}
      key={id}
      className="w-44 h-60 lg:w-56 lg:h-80 flex flex-col border-ds-neutral hover:border-ds-primary hover:scale-[102.5%] transition-all duration-150 ease-in-out hover:overflow-visible cursor-pointer relative"
    >
      {badge && badge}
      <div className="relative w-full h-[53%] rounded-t-xl overflow-hidden m-0 p-0">
        {menu}
        <img
          src={getImage({
            id,
            image,
            type: ImageType.IMAGE,
          })}
          alt={name ?? 'Placeholder'}
          className="object-cover bg-ds-card-alt object-center absolute w-full h-full aspect-square"
        />
      </div>
      <CardHeader className="p-0 pt-2.5 h-[35%] text-center text-pretty grow">
        <CardTitle className="font-montserrat text-sm lg:text-base font-medium inline-flex items-center justify-center">
          {name}
        </CardTitle>
        {description && (
          <CardDescription className="mx-2 line-clamp-2 text-xs lg:text-base text-center dark:!text-ds-white !text-ds-black">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardFooter className="h-[12%]">{footer}</CardFooter>
    </Card>
  )
}


// TODO: add this bad boy as a fallback for the card image
{/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 222 222"><defs><style>.a{fill:#fff;stroke:#000;stroke-miterlimit:10;opacity:0.01;}.b{fill:url(#a);}.c{fill:url(#b);}.d{fill:url(#c);}</style><linearGradient id="a" x1="114.91" y1="695.63" x2="102.16" y2="690.42" gradientTransform="translate(0 -568)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#99fff9"/><stop offset="1" stop-color="#1bc5eb"/></linearGradient><linearGradient id="b" x1="134.53" y1="684.68" x2="56.4" y2="661.25" xlink:href="#a"/><linearGradient id="c" x1="115.84" y1="685.3" x2="100.18" y2="681.17" xlink:href="#a"/></defs><rect class="a" width="222" height="222"/><path class="b" d="M115.4,128.6h-8.7v-3.3a2.52,2.52,0,0,1,.9-2,2.77,2.77,0,0,1,1.6-.5h3.9a2.06,2.06,0,0,1,1.7.7,2.61,2.61,0,0,1,.7,1.7l-.1,3.4Z"/><path class="c" d="M133.7,128.6h-6L111,99.2,94.2,128.6h-6a2.48,2.48,0,0,1-2.1-3.7L108.9,85a2.44,2.44,0,0,1,4.2,0l22.7,39.9A2.48,2.48,0,0,1,133.7,128.6Z"/><path class="d" d="M110.9,121a5,5,0,1,0-4.9-5A4.93,4.93,0,0,0,110.9,121Z"/></svg> */}