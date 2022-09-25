import styled from 'styled-components';

const HardwareLockupWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  margin-top: 100px;
  @supports ((-webkit-mask-image:url("")) or (mask-image:url(""))) {
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-image: url(/m1_laptop_hw_shape_mask_large.png);
  }

  @media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 1.5dppx) {
    @supports ((-webkit-mask-image:url("")) or (mask-image:url(""))) {
        mask-image: url(/m1_laptop_hw_shape_mask_large_2x.png);
    }
  }
`

const HardwareImage = styled.picture`
  display: block;
  width: var(--p-width);
  height: var(--p-height);
  --p-width: 1204px;
  --p-height: 736px;
`

const HardwareLockupFigure = styled.figure`
  position: absolute;
  top: 17px;
`

const HardwareLockupMedia = styled.div`
  display: block;
  width: var(--p-width);
  height: var(--p-height);
  --p-width: 984px;
  --p-height: 636px;

  @supports ((-webkit-mask-image:url("")) or (mask-image:url(""))) {
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-image: url(/m1_laptop_hw_mask_large.png);
  }

  @media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 1.5dppx) {
    @supports ((-webkit-mask-image:url("")) or (mask-image:url(""))) {
        mask-image: url(/m1_laptop_hw_mask_large_2x.png);
    }
  }
`

const FallbackImage = styled.picture`
  display: block;
  width: var(--p-width);
  height: var(--p-height);
  --p-width: 984px;
  --p-height: 636px;
`

const HardwareLockup = (props) => {
  return (
    <HardwareLockupWrap {...props}>
      <HardwareImage>
        <source srcSet="/m1_laptop_hw_dark_small.jpg, /m1_laptop_hw_dark_small_2x.jpg 2x" media="(max-width:734px)" />
        <source srcSet="/m1_laptop_hw_dark_medium.jpg, /m1_laptop_hw_dark_medium_2x.jpg 2x" media="(max-width:1068px)" />
        <source srcSet="/m1_laptop_hw_dark_large.jpg, /m1_laptop_hw_dark_large_2x.jpg 2x" media="(min-width:0px)" />
        <img src="/m1_laptop_hw_dark_large.jpg" alt="hardware image" />
      </HardwareImage>
      <noscript>
        <HardwareImage>
          <source srcSet="/m1_laptop_hw_dark_small.jpg, /m1_laptop_hw_dark_small_2x.jpg 2x" media="(max-width:734px)" />
          <source srcSet="/m1_laptop_hw_dark_medium.jpg, /m1_laptop_hw_dark_medium_2x.jpg 2x" media="(max-width:1068px)" />
          <source srcSet="/m1_laptop_hw_dark_large.jpg, /m1_laptop_hw_dark_large_2x.jpg 2x" media="(min-width:0px)" />
          <img src="/m1_laptop_hw_dark_large.jpg" alt="hardware image" />
        </HardwareImage>
      </noscript>
      <HardwareLockupFigure>
        <HardwareLockupMedia>
          <FallbackImage>
            <source srcSet="/screen_processing_small.jpg, /screen_processing_small_2x.jpg 2x" media="(max-width:734px)" />
            <source srcSet="/screen_processing_medium.jpg, /screen_processing_medium_2x.jpg 2x" media="(max-width:1068px)" />
            <source srcSet="/screen_processing_large.jpg, /screen_processing_large_2x.jpg 2x" media="(min-width:0px)" />
            <img src="/screen_processing_large.jpg" alt="image" />
          </FallbackImage>
          <noscript>
            <FallbackImage>
              <source srcSet="/screen_processing_small.jpg, /screen_processing_small_2x.jpg 2x" media="(max-width:734px)" />
              <source srcSet="/screen_processing_medium.jpg, /screen_processing_medium_2x.jpg 2x" media="(max-width:1068px)" />
              <source srcSet="/screen_processing_large.jpg, /screen_processing_large_2x.jpg 2x" media="(min-width:0px)" />
              <img src="/screen_processing_large.jpg" alt="image" />
            </FallbackImage>
          </noscript>
        </HardwareLockupMedia>
      </HardwareLockupFigure>
    </HardwareLockupWrap>
  )
}

export default HardwareLockup;

