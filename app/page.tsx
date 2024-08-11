import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-2">
      <h2 className="text-5xl">Next JS APP</h2>
      <Link href={`/bank`}>Bank App</Link>
      <Link href={`/linkedin`}>Linked IN App</Link>
    </main>
  );
}
