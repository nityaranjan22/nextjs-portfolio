import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Nitya Ranjan</title>
        {/* You can also add meta tags, link to favicons etc. here */}
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">Nitya Ranjan</h1>
          <p className="mt-3 text-xl">Electrical and Computer Engineering Graduate | Software Engineer Intern at ClearObject</p>
        </section>

        {/* Profile Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Profile</h2>
          <p className="mt-4">
            Software Enginneer.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <div className="mt-4">
            {/* Experience details here */}
            <h3 className="text-2xl font-semibold">Software Engineer Intern, ClearObject</h3>
            <p className="italic">2023/05 &ndash; Present | Fishers, United States</p>
            <ul className="list-disc ml-5">
              <li>Migrating essential assets and artifacts from Google Cloud Platform to Azure.</li>
              <li>Spearheaded the deployment of Dockerized applications across multiple NVIDIA devices...</li>
              {/* Add other points similarly */}
            </ul>
            {/* Include other experiences in the same format */}
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p className="mt-4">
            MS Electrical and Computer Engineering, Purdue School of Engineering and Technology
          </p>
          <p>BS Computer Engineering, Purdue School of Engineering and Technology</p>
          {/* Add more educational details if necessary */}
        </section>

        {/* Additional Sections for Projects, Publications, etc. */}
        {/* ... */}

        {/* Contact Section */}
        <section className="mt-12 mb-8">
          <h2 className="text-3xl font-semibold">Contact Me</h2>
          <p className="mt-4">Email: nityaranjan22@gmail.com</p>
          <Link href="https://linkedin.com/in/nityaranjan/"><a className="text-blue-400 hover:underline">LinkedIn</a></Link>
        </section>
      </main>
    </div>
  );
}
