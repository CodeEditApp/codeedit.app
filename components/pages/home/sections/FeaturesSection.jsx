import { Sliders } from 'react-feather';
import Tile from '@/components/common/Tile';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';

const FeaturesSection = () => {
  return (
    <Section contained gutterBottom>
      <Stack style={{ textAlign: 'center', marginBottom: 48 }}>
        <Typography variant="headline-reduced">Features</Typography>
        <Typography variant="intro" gutterTop>
          This is a description of the features section.
        </Typography>
      </Stack>
      <Grid columns={3} gap>
        <GridItem as={Tile} width={3} color="purple" gradient>
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow">Feature Title 1</Typography>
            <Typography variant="body">
              This is a description for this feature.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem as={Tile} width={2}>
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow">Feature Title 2</Typography>
            <Typography variant="body">
              This is a description for this feature.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem as={Tile} height={2}>
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow">Feature Title 4</Typography>
            <Typography variant="body">
              This is a description for this feature.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem as={Tile} start="1/3" end="1/3">
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow">Feature Title 2</Typography>
            <Typography variant="body">
              This is a description for this feature.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem as={Tile} start="2/3" end="2/3">
          <Stack gap={2}>
            <Sliders />
            <Typography variant="eyebrow">Feature Title 3</Typography>
            <Typography variant="body">
              This is a description for this feature.
            </Typography>
          </Stack>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default FeaturesSection;
