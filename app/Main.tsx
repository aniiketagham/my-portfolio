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
            {`Welcome to my blog - ${siteMetadata.description}. I am the co-founder of Cylynx, a data
            scientist by profession and economist by training. In my free time, I like developing side projects and `}
            <Link href="/blog">blogging</Link>
            {' about them. Have a good read!'}
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
                <li>VS Code</li>
                <li>Git & GitHub</li>
                <li>JIRA</li>
                <li>Figma</li>
                <li>Postman</li>
              </ul>
            </div>

            {/* Technologies Column */}
            <div>
              <h2 className="text-xl  font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Technologies
              </h2>
              <ul className="mt-4 list-inside list-disc pl-4 text-lg text-gray-600 dark:text-gray-400">
                <li>JavaScript & TypeScript</li>
                <li>React.js & Next.js</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>SQL & NoSQL Databases</li>
              </ul>
            </div>

            {/* Soft Skills Column */}
            <div>
              <h2 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Soft Skills
              </h2>
              <ul className="mt-4 list-inside list-disc pl-4 text-lg text-gray-600 dark:text-gray-400">
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
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
