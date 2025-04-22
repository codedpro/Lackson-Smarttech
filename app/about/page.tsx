import Image from "next/image"

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Lackson Smarttech</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for IT solutions in Mzuzu, Malawi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Lackson Smarttech was founded with a mission to provide high-quality IT services and solutions to
              individuals and businesses in Mzuzu and surrounding areas. We understand the importance of reliable
              technology in today's digital world.
            </p>
            <p className="text-gray-600 mb-4">
              Our team consists of experienced IT professionals who are passionate about technology and committed to
              delivering exceptional service. We stay up-to-date with the latest advancements in the IT industry to
              ensure that our clients receive the best solutions for their needs.
            </p>
            <p className="text-gray-600">
              Located near Mzuzu University, we serve a diverse clientele including students, faculty, local businesses,
              and residents. Our convenient location makes us easily accessible to everyone in need of IT support.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-ihFjdBMi47NzpezctejdleYSWqyPx8.jpeg"
              alt="Computer Repair Services"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
          <p className="text-gray-600 text-center text-lg">
            To provide innovative, reliable, and affordable IT solutions that empower our clients to thrive in the
            digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
            <p className="text-gray-600">
              Our team has extensive knowledge and experience in various aspects of IT, from hardware repair to software
              development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Service</h3>
            <p className="text-gray-600">
              We are committed to delivering high-quality service and ensuring customer satisfaction with every project.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Affordability</h3>
            <p className="text-gray-600">
              We offer competitive pricing without compromising on the quality of our services and solutions.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Us Today</h2>
          <p className="text-gray-600 mb-2">We are located near Mzuzu University in Mzuzu, Malawi.</p>
          <p className="text-gray-600">Our team is ready to assist you with all your IT needs.</p>
        </div>
      </div>
    </div>
  )
}
