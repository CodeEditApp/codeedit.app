import Image from 'next/image';
import Tile from '@/components/common/Tile';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';

const SocialSection = () => {
  return (
    <Section contained gutterY>
      <Grid columns={2} gap>
        <GridItem as={Tile} start="1/1" end="1/1">
          <Stack gap={2} align="start">
            <Image
              src="/twitter.svg"
              width={32}
              height={32}
              alt="Twitter logo"
            />
            <Typography variant="eyebrow">Keep up to date</Typography>
            <Typography variant="body">
              Stay in the know! Follow us @CodeEditApp on Twitter to get the
              latest updates.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem as={Tile} start="2/1" end="2/1">
          <Stack gap={2} align="start">
            <Image
              src="/discord.svg"
              width={32}
              height={32}
              alt="Discord logo"
            />
            <Typography variant="eyebrow">Join the conversation</Typography>
            <Typography variant="body">
              Some of the best ideas come from our community. Join us on
              Discord to influence future ideas for CodeEdit.
            </Typography>
          </Stack>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default SocialSection;
