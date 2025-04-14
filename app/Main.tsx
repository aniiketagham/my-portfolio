import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import AuthorLayout from '@/layouts/AuthorLayout'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { allAuthors, Authors } from 'contentlayer/generated'
import CertificateCard from '@/components/certificate'
import certificationsData from '@/data/certificationData'
import TypingEffect from '@/components/typingeffect'
import SocialIcon from '@/components/social-icons'
import ContactForm from './api/newsletter/email'

// const MAX_DISPLAY = 5
const author = allAuthors.find((p) => p.slug === 'default') as Authors
const mainContent = coreContent(author)

export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center xl:my-12 xl:flex-row">
        <div className="pt-6 text-center">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-7xl md:leading-14">
            Hi, I’m Aniket Agham
          </h1>
          <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
            {
              'A passionate Data Scientist and Analytics Professional with a deep love for uncovering insights and solving complex problems through data. With 1+ year of experience in leveraging data to drive impactful business decisions, I specialize in Analytics, Machine Learning, NLP, and BI tools.'
            }
          </h2>
          <TypingEffect />
          <div className="my-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-lg font-medium text-white hover:bg-primary-600 dark:hover:bg-primary-400"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </div>
          <div className="mb-3 flex justify-center space-x-4">
            <span className="border-grey rounded-full border p-4   dark:border-white">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={7} />
            </span>
            <span className="border-grey rounded-full border p-4  dark:border-white">
              <SocialIcon kind="github" href={siteMetadata.github} size={7} />
            </span>
            <span className="border-grey rounded-full border p-4 dark:border-white">
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={7} />
            </span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>

      {/* Education Section */}
      <div id="education" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Education
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here's a look at my academic background.
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            {/* Education Item 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Indian Institute of Technology, Madras (2024 - 2025)
              </h3>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Diploma - Data Science
              </p>
              <p className="text-md mt-2 text-gray-600 dark:text-gray-400">
                Coursework: Mathematics, Python, R, Statistics, Machine Learning, Deep Learning,
                NLP, Business Analytics
              </p>
            </div>
            {/* Education Item 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                St. Vincent Pallotti College of Engineering and Technology (2019 - 2023)
              </h3>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Bachelor of Engineering - Computer Engineering
              </p>
              <p className="text-md mt-2 text-gray-600 dark:text-gray-400">
                Coursework: Java, Python, Data Structures and Algorithms, DBMS, Neural Networks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Experience
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here's an overview of my professional experience.
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            {/* Experience Item */}
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Bussiness Analyst Apprentice - (2024 - 2024)
              </h3>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Bizgrow Technology (OPC pvt. ltd)
              </p>
              <ul className="text-md mt-2 list-inside list-disc pl-4 text-gray-600 dark:text-gray-400">
                <li>
                  Analyzed major products, that drive revenue growth and prepared MIS reports for
                  senior management's informed decision-making.
                </li>
                <li>
                  Provided regular status updates to senior leadership through concise and clear
                  presentations, ensuring project completion within a 10% faster timeline than
                  planned.
                </li>
                <li>
                  Collaborated with cross-functional stakeholders to gather and document business
                  requirements, ensuring transparent communication.
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Data Analyst Traniee - (2023 - 2023)
              </h3>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">AliGn InfoTech</p>
              <ul className="text-md mt-2 list-inside list-disc pl-4 text-gray-600 dark:text-gray-400">
                <li>
                  Utilized SQL and Python for data extraction, cleaning, and exploratory data
                  analysis (EDA) on large datasets.
                </li>
                <li>
                  Conducted statistical analysis to uncover trends, patterns, and insights,
                  enhancing data-driven decision-making.
                </li>
                <li>
                  Created and maintained dashboards and data reports using 15+ Power BI, translating
                  complex data into clear, actionable insights for senior leadership.
                </li>
                <li>
                  Performed advanced Excel functions (VLOOKUP, Pivot Tables, Micros) for in-depth
                  analysis, report generation, and automation of data processes, saving 7+ hours
                  weekly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Skills
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here's an overview of my tools, technologies, and soft skills.
          </p>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Tools Column */}
            <div>
              <h2 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Tools
              </h2>
              <ul className="mt-4 list-inside list-disc pl-4 text-lg text-gray-600 dark:text-gray-400">
                <li>Python, R</li>
                <li>SQL</li>
                <li>Power BI, Tableau</li>
                <li>Excel</li>
                <li>Git/Github</li>
                <li>AWS,Azure,GCP </li>
              </ul>
            </div>

            {/* Technologies Column */}
            <div>
              <h2 className="text-xl  font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Techniques
              </h2>
              <ul className="mt-4 list-inside list-disc pl-4 text-lg text-gray-600 dark:text-gray-400">
                <li>Analytics</li>
                <li>Machine Learning</li>
                <li>Visualization</li>
                <li>Forecasting & Time Series</li>
                <li>NLP</li>
                <li>Statistics</li>
              </ul>
            </div>

            {/* Soft Skills Column */}
            <div>
              <h2 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Soft Skills
              </h2>
              <ul className="mt-4 list-inside list-disc pl-4 text-lg text-gray-600 dark:text-gray-400">
                <li>Communication</li>
                <li>Team Work</li>
                <li>Problem Solving</li>
                <li>Adaptibility</li>
                <li>Decision Making</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}

      <div id="projects" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Things I have built</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div id="certifications" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Certifications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here are some of my certifications and accomplishments.
          </p>
        </div>
        <div className="container py-12">
          {/* Flexbox for 4 certifications per row */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {certificationsData.map((cert) => (
              <CertificateCard
                key={cert.title}
                title={cert.title}
                description={cert.description}
                imgSrc={cert.imgSrc}
                href={cert.href}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Me Section */}
      <div id="contact" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact Me
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Feel free to reach out to me via email.
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  )
}
