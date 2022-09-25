import { Sliders } from 'react-feather';
import Tile from '@/components/common/Tile';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';

const IntroFeaturesSection = () => {
  return (
    <Section contained gutterBottom>
      <Grid columns={{ md: 2, lg: 4 }} gap>
        <GridItem as={Tile}>
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow-reduced">macOS Native</Typography>
            <Typography variant="body-reduced">
              Harness the full power of your Mac.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem as={Tile}>
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow-reduced">
              Lightweight Yet Powerful
            </Typography>
            <Typography variant="body-reduced">
              Designed to be lean with limitless potential.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem as={Tile}>
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow-reduced">
              Completely Open Source
            </Typography>
            <Typography variant="body-reduced">
              CodeEdit is developed by developers like you.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem as={Tile}>
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow-reduced">
              Extensible & customizable
            </Typography>
            <Typography variant="body-reduced">
              We aren&apos;t going to guess. Make CodeEdit your own, tailored to
              your needs.
            </Typography>
          </Stack>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default IntroFeaturesSection;
