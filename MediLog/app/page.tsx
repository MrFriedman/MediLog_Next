import Menu from '@/components/navigation/Menu'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        MediLog
      </h1>
      <Menu />
      <div className="hidden bg-white p-8 rounded-lg shadow-lg mb-8" id="passports-section">
        <h2 className="text-3xl font-bold mb-6">
          Medical Passports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              John Doe
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 30
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: O+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: None
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Jane Smith
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 25
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: A-
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: Penicillin
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Ibuprofen
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Alice Johnson
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 40
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: B+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: Latex
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Metformin
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Michael Brown
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 50
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: AB-
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Lisinopril
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Emily Davis
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 35
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: O-
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: Peanuts
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Albuterol
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              David Wilson
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 45
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: A+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: Shellfish
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Atorvastatin
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Sophia Martinez
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 28
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: B-
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Levothyroxine
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              James Anderson
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 60
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: AB+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Warfarin
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Olivia Thomas
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 22
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: O+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: None
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Liam Johnson
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 34
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: B+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: Pollen
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Cetirizine
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Emma White
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 29
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: A-
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: Dust
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Fluticasone
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Noah Harris
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 42
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: O-
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Metoprolol
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Ava Clark
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 37
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: AB-
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Insulin
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              William Lewis
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 55
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: B+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Aspirin
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              Isabella Walker
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 31
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: A+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: None
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
            <h2 className="text-xl font-bold mt-4">
              James Hall
            </h2>
            <p className="mt-2 text-gray-600">
              Age: 48
            </p>
            <p className="mt-2 text-gray-600">
              Blood Type: O+
            </p>
            <p className="mt-2 text-gray-600">
              Allergies: None
            </p>
            <p className="mt-2 text-gray-600">
              Medications: Lisinopril
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
