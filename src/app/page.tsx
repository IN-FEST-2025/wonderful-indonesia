import Jawa from "@/components/jawa";
import Papua from "@/components/papua";
import Sulawesi from "@/components/Sulawesi";
import Sumatra from "@/components/sumatra";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Peta Interaktif Sulawesi</h1>
      <Sulawesi />
      <Jawa />
      <Sumatra />
      <Papua />
    </main>
  );
}
