// components/TypingEffect.js
'use client'
import { useState, useEffect } from 'react'

const TypingEffect = () => {
  const roles = ['Data Scientist', 'Data Analyst', 'Business Analyst']
  const [currentRole, setCurrentRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(50) // Faster typing speed

  useEffect(() => {
    const currentFullRole = roles[roleIndex]
    let timeout

    if (isDeleting) {
      // Deleting characters
      timeout = setTimeout(() => {
        setCurrentRole((prev) => prev.slice(0, -1))
        setSpeed(50) // Faster deleting speed
      }, speed)
    } else {
      // Typing characters
      timeout = setTimeout(() => {
        setCurrentRole((prev) => currentFullRole.slice(0, prev.length + 1))
        setSpeed(100) // Restore typing speed
      }, speed)
    }

    // When typing or deleting completes
    if (!isDeleting && currentRole === currentFullRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 700)
    } else if (isDeleting && currentRole === '') {
      // Move to the next role
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length) // Loop through roles
    }

    return () => clearTimeout(timeout)
  }, [currentRole, isDeleting, roles, roleIndex, speed])

  return (
    <div className="mt-10 text-center text-2xl">
      Open To Work As a{' '}
      <span className="font-bold text-primary-500">{currentRole.toUpperCase()}</span>
      <span className="-mb-1 inline-block h-7 w-0.5 bg-white"></span>
    </div>
  )
}

export default TypingEffect
