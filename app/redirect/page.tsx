import { redirect } from 'next/navigation';

export default async function RedirectPage() {
  redirect('/details');

  return (
    <main className='redirect'>
      Redirect
    </main>
  );
}
