'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111] text-black dark:text-white px-6 py-16 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">👨‍💻 Who am I?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I’m <strong>Muhammad Firdaus Ardiansyah</strong>, a passionate and experienced Mobile Developer with a
          background in full-stack development, system design, and UI/UX. With hands-on experience building apps using
          Flutter, Kotlin, Laravel, and Express.js, I specialize in turning complex ideas into beautiful and functional
          mobile solutions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">🎓 Education & Certificates</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>Brawijaya University</strong> – Bachelor of Computer Science (GPA 3.80) | 2020–2024</li>
          <li><strong>Bangkit Academy 2023</strong> – Android Development Path (Capstone, SOLID, Jetpack Compose)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">💼 Experience</h2>
        <div className="space-y-4">
          <Experience
            company="Primuse Group – Mobile Developer"
            period="Dec 2024 – Present"
            details={[
              "Built & deployed cross-platform mobile apps with Flutter.",
              "Integrated Stripe payments & collaborated on API integration.",
            ]}
          />
          <Experience
            company="Uterx Healthcare – Freelance Flutter Dev"
            period="Nov – Dec 2024"
            details={[
              "Resolved bugs & improved performance on Flutter codebase.",
              "Used GitHub to manage tasks and track issues.",
            ]}
          />
          <Experience
            company="PT Petrokimia Gresik – Full Stack Mobile Dev"
            period="Aug – Dec 2023"
            details={[
              "Built RFID gate access app with maps, news, and secure login.",
              "Designed internal HR app for live attendance and salary reports.",
            ]}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">🛠 Skills & Tools</h2>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-100">
          {[
            'Flutter', 'Kotlin', 'Dart', 'Firebase', 'Laravel', 'Express.js', 'Figma', 'Git',
            'Postman', 'Adobe Tools', 'Android Studio', 'VS Code',
          ].map((skill) => (
            <li key={skill} className="bg-blue-600 rounded-full px-3 py-1">{skill}</li>
          ))}
        </ul>
      </section>

      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">🚀 Want to see my work?</h2>
        <a
          href="/portfolio"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition"
        >
          View Portfolio
        </a>
      </section>
    </div>
  );
}

function Experience({
  company,
  period,
  details,
}: {
  company: string;
  period: string;
  details: string[];
}) {
  return (
    <div>
      <h3 className="font-semibold text-lg">{company}</h3>
      <p className="text-sm text-gray-500 mb-1">{period}</p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-2">
        {details.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
