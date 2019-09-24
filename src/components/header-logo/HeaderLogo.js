import { Box } from 'reakit';
import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Box className="ml-auto mr-auto absolute p-2">
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <img
            src="/static/images/pie-chart.png"
            className="w-12 block max-w-full"
            alt="Pie Chart"
          />
        </a>
      </Link>
    </Box>
  );
}
