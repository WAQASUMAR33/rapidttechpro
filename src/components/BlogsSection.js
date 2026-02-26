import Image from 'next/image';

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      category: 'eCommerce',
      date: '27 Sep, 2024',
      title: 'Maker4U',
      description: 'Maker4U is a platform that provides a diverse range of templates for various purposes.',
      imageUrl: '/carousel/uiux.jpeg', // Replace with actual image URL
    },
    {
      id: 2,
      category: 'App Development',
      date: '26 Sep, 2024',
      title: 'Store2u.ca',
      description: 'At Store2u.ca, our mission is to provide customers with the best online shopping experience possible.',
      imageUrl: '/carousel/softwaredeveloper.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      category: 'Web Development',
      date: '25 Sep, 2024',
      title: 'RedParts',
      description: 'RedParts is an international company with 30 years of history selling spare parts for cars, trucks, and motorcycles.',
      imageUrl: '/carousel/launcher.png', // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          Latest <span className="text-bluish">Insights.</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white border h-[450px] border-gray-200 rounded-lg shadow-md overflow-hidden">
            <Image src={blog.imageUrl} alt={blog.title} width={600} height={400} className="w-full h-60 object-cover" />
            <div className="p-4">
              <p className="text-lg text-gray-500 mb-1">
                {blog.category} • {blog.date}
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-lg">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition duration-200">
          View all Blogs
        </button>
      </div>
    </div>
  );
}
