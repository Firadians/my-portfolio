// src/app/portfolio.tsx
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      <p className="mb-4">Welcome to my portfolio! Here are some of my projects:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <Image src="/project1.png" alt="Project 1" width={300} height={200} />
          <h2 className="font-semibold">Project 1</h2>
          <p>A brief description of Project 1.</p>
        </div>
        <div className="border p-4 rounded">
          <Image src="/project2.png" alt="Project 2" width={300} height={200} />
          <h2 className="font-semibold">Project 2</h2>
          <p>A brief description of Project 2.</p>
        </div>
        <div className="border p-4 rounded">
          <Image src="/project3.png" alt="Project 3" width={300} height={200} />
          <h2 className="font-semibold">Project 3</h2>
          <p>A brief description of Project 3.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Portfolio;