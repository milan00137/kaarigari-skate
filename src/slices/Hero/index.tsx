import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";


import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";
import { ButtonLink } from "@/app/components/ButtonLink";
import { WideLogo } from "./WideLogo";
import { TallLogo } from "./TallLogo";
import { InteractiveSkateboard } from "./InteractiveSkateboard";
import { asImageSrc } from "@prismicio/client";

const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp"
const DEFAULT_WHEEL_TEXTURE = "/skateboard/CkWheel.png"
const DEFAULL_TRUCK_COLOR = "#6F6E6A"
const DEFAULL_BOLT_COLOR = "#6F6E6A"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  const deskTextureURL = asImageSrc(slice.primary.skateboard_deck_texture) || DEFAULT_DECK_TEXTURE
  const wheelTextureURL = asImageSrc(slice.primary.skateboard_wheel_texture) || DEFAULT_WHEEL_TEXTURE
  const truckColor = slice.primary.skateboard_truck_color || DEFAULL_TRUCK_COLOR
  const boltColor = slice.primary.skateboard_bolt_color || DEFAULL_BOLT_COLOR

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 flex items-center pt-18">
        <WideLogo className="w-full text-brand-purple hidden lg:block opacity-20 mix-blend-multiply" />
        <TallLogo className="w-full text-brand-purple lg:hidden opacity-20 mix-blend-multiply"/>
        </div>
      <div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading size="lg" className="relative max-w-2xl place-self-start">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink field={slice.primary.button} icon="skateboard" size="lg" className="z-20 mt-2 block">
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>

      <InteractiveSkateboard 
        deskTextureURL={deskTextureURL}
        wheelTextureURL={wheelTextureURL}
        truckColor={truckColor}
        boltColor={boltColor}
      />

    </Bounded>
  );
};

export default Hero;