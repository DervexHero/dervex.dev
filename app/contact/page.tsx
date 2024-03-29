'use client'

import { LiaCopy, LiaCheckSolid, LiaPenSolid, LiaExternalLinkAltSolid } from 'react-icons/lia'
import { SiDiscord, SiX, SiRobloxstudio } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'
import { useState } from 'react'

import { ButtonCSS } from '@/components/button'
import Container from '@/components/container'
import Tooltip from '@/components/tooltip'
import Button from '@/components/button'

interface Contact {
	name: string
	desc: string
	link: string
	icon: JSX.Element
}

const contacts: Array<Contact> = [
	{
		name: 'Discord',
		desc: 'The best way to get in touch with me',
		link: 'https://discord.com/invite/maybesomeday',
		icon: <SiDiscord />,
	},
	{
		name: 'X',
		desc: 'Another great way to contact with me',
		link: 'https://x.com/DervexDev',
		icon: <SiX />,
	},
	{
		name: 'Email',
		desc: 'Only for important questions or offers',
		link: 'mailto:contact@dervex.dev',
		icon: <HiMail />,
	},
	{
		name: 'DevForum',
		desc: 'The best alternative for DevForum users',
		link: 'https://devforum.roblox.com/u/dervex/summary',
		icon: <SiRobloxstudio />,
	},
]

function copyToClipboard(text: string) {
	if ('clipboard' in navigator) {
		navigator.clipboard.writeText(text)
	} else {
		document.execCommand('copy', true, text)
	}
}

export default function Contact() {
	const [copied, setCopied] = useState(false)

	function button(name: string, link?: string) {
		switch (name) {
			case 'Discord':
				return (
					<Button
						className='min-w-[78px] h-full text-4xl'
						borders='l'
						callback={() => {
							copyToClipboard('dervexhero')

							setCopied(true)

							setTimeout(() => {
								setCopied(false)
							}, 1000)
						}}
					>
						<div className='absolute duration-200 transition-opacity' style={{ opacity: !copied ? 100 : 0 }}>
							<LiaCopy />
						</div>

						<div className='duration-200 transition-opacity' style={{ opacity: copied ? 100 : 0 }}>
							<LiaCheckSolid />
						</div>

						<Tooltip>
							<p style={{ display: !copied ? 'block' : 'none' }}>Copy username</p>
							<p style={{ display: copied ? 'block' : 'none' }}>Copied!</p>
						</Tooltip>
					</Button>
				)
			case 'Email':
				return (
					<a
						className={ButtonCSS + 'min-w-[78px] h-full text-4xl border-l-2'}
						href={link}
						onClick={() => {
							copyToClipboard(link!.replace('mailto:', ''))
						}}
					>
						<LiaPenSolid />

						<Tooltip>Write email</Tooltip>
					</a>
				)
			default:
				return (
					<Button className='min-w-[78px] h-full text-4xl' borders='l' link={link}>
						<LiaExternalLinkAltSolid />

						<Tooltip>Open {name}</Tooltip>
					</Button>
				)
		}
	}

	return (
		<div className='w-full xl:w-3/4 flex flex-wrap justify-center'>
			{contacts.map((contact, index) => {
				return (
					<Container key={index} className='w-[350px] h-[160px] md:w-[400px] m-[20px]'>
						<Container className='h-1/2 flex flex-row' borders='b'>
							<Container
								className={
									contact.name != 'Email'
										? 'min-w-[76px] h-full text-[2.75rem] flex items-center justify-center'
										: 'min-w-[76px] h-full text-[3.4rem] flex items-center justify-center'
								}
								borders='r'
							>
								{contact.icon}
							</Container>

							<div className='w-full h-full text-3xl sm:text-4xl flex items-center justify-center'>
								<b>{contact.name}</b>
							</div>
						</Container>

						<div className='h-1/2 flex flex-row'>
							<div className='w-full h-full px-4 flex items-center justify-center'>{contact.desc}</div>

							{button(contact.name, contact.link)}
						</div>
					</Container>
				)
			})}
		</div>
	)
}
