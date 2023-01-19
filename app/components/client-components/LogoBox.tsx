'use client'

import { FaNodeJs, FaReact, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const logos = {
  node: FaNodeJs,
  react: FaReact,
  js: SiJavascript,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub
}

type LogoBoxProps = {
  name: 'node' | 'react' | 'js' | 'whatsapp' | 'instagram' | 'linkedin' | 'github',
  className?: string,
  size?: number,
  color?: string
}

export function LogoBox({ name, className, size = 75, color }: LogoBoxProps) {
  const Icon = logos[name]

  return (
    <div className={`flex items-center justify-center rounded-full ${className}`}>
      <Icon size={size} color={color} />
    </div>
  )
}