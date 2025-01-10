import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-blue-600" size={24} />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          
          <div>
            <h4 className="font-medium">University of Belas, AO</h4>
            <p className="text-gray-600">Petroleum Engineering, GPA: 15/20</p>
            <p className="text-gray-500 text-sm">October 2021</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-blue-600" size={24} />
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>
          
          <div>
            <h4 className="font-medium">IBM Data Science Professional Certificate</h4>
            <p className="text-gray-500 text-sm">2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}