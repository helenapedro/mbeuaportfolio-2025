import * as icon from 'lucide-react';

export function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <a 
              href='https://www.credly.com/badges/4fcb6c78-93fa-491f-b454-41b4f51cdef5'
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transform transition-transform hover:scale-110"
            >
              <icon.ExternalLink size={24} />
            </a>
            <h4 className="font-medium font-semibold">IBM Data Science Professional Certificate</h4>
          </div>
          
          <div>
            <p className="text-gray-500 text-sm">Feb, 2022</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <a 
              href='https://www.credly.com/badges/4fcb6c78-93fa-491f-b454-41b4f51cdef5'
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transform transition-transform hover:scale-110"
            >
              <icon.ExternalLink size={24} />
            </a>
            <h4 className="font-medium font-semibold">IBM Data Science Professional Certificate</h4>
          </div>
          
          <div>
            <p className="text-gray-500 text-sm">Feb, 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}