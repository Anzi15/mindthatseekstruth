'use client';

import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const payerName = searchParams.get('payerName');

  return (
    <div>
      <p>{payerName ? payerName : 'No payer name provided'}</p>
    </div>
  );
};

export default Page;
