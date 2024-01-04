import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100 p-8">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">John Doe's Portfolio</h1>
          <p className="mt-3 text-xl">Frontend Developer | UI/UX Enthusiast</p>
        </section>

        {/* About Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4">
            I'm a Frontend Developer with a passion for building beautiful and functional web applications. I specialize in React and Next.js and am constantly learning new technologies.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Project Cards */}
            <div className="rounded border p-4 shadow">
              <h3 className="text-xl font-bold">Project 1</h3>
              <p>Description of project 1...</p>
              <Link href="/projects/project1"><a className="text-blue-600 hover:underline">Read more</a></Link>
            </div>
            <div className="rounded border p-4 shadow">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p>Description of project 2...</p>
              <Link href="/projects/project2"><a className="text-blue-600 hover:underline">Read more</a></Link>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-semibold">Contact Me</h2>
          <p className="mt-4">Feel free to reach out for collaborations or just a friendly hello 👋</p>
          <p className="mt-2">Email: john@example.com</p>
        </section>
      </main>
    </div>
  );
}
