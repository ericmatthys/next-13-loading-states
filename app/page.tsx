import delay from "./delay"

export default async function HomePage() {
  await delay(3000);

  return (
    <main className='home'>
      Home
    </main>
  );
}
