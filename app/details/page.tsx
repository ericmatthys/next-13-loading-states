import delay from "../delay"

export default async function DetailsPage() {
  await delay(3000);
  
  return (
    <main className='details'>
      Details
    </main>
  );
}
