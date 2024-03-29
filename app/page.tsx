import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';


const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Send Eth', action: 'post'},
      // {label: 'Get Eth Balance', action: 'post'},
      // {label: 'Link fid to address', action: 'post_redirect'}
  ],
  image: 'https://magenta-hollow-tiglon-795.mypinata.cloud/ipfs/QmZPrZ45GrnmjbGw6Xj27mzgpju7FCguKAbwBkUVxBTPVB',
  post_url: 'https://socket-pay.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Socket Pay',
  description: 'On-chain payments powered by Socket Bridge API',
  metadataBase: new URL('https://socket-pay.vercel.app'),
  openGraph: {
    title: 'Socket Pay',
    description: 'A frame facilitating payments between facaster IDs',
    images: [`https://magenta-hollow-tiglon-795.mypinata.cloud/ipfs/QmZPrZ45GrnmjbGw6Xj27mzgpju7FCguKAbwBkUVxBTPVB`],
  },
  other: {
    ...frameMetadata,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eMartiiin94',
    title: 'Title webtsite',
    description: 'this is the desciption',
    images: [`https://magenta-hollow-tiglon-795.mypinata.cloud/ipfs/QmZPrZ45GrnmjbGw6Xj27mzgpju7FCguKAbwBkUVxBTPVB`],
  }
};

export default async function Page() {
  return (
    <>
      <h1>Socket Pay</h1>
    </>
  );
}


// ref: https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs
// spec: https://docs.farcaster.xyz/reference/frames/spec