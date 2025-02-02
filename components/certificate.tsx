import Image from 'next/image'

const CertificateCard = ({ title, description, imgSrc, href }) => (
  <div className=" w-full max-w-[25rem] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={imgSrc} alt={title} width={544} height={306} className="aspect-[4/3] w-full object-cover" />
    </a>
    <div className="p-4">
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
)

export default CertificateCard
