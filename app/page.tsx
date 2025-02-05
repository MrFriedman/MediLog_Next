import Menu from '@/components/navigation/Menu'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Menu />
      <div className="hidden bg-white p-8 rounded-lg shadow-lg mb-8" id="passports-section">
        <button className="text-3xl font-bold mb-6">
          Medical Passports
        </button>
      </div>        
    </div>
  );
}
