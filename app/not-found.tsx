import Container from '@/components/container'
import Button from '@/components/button'

import Image from 'next/image'

export default function NotFound() {
	return (
		<Container className='w-[304px]'>
			<p className='text-3xl pt-1 font-bold flex items-center justify-center'>ERROR 404</p>
			<p className='text-lg pb-1 flex items-center justify-center'>This page does not exist!</p>

			<Container borders='tb'>
				<Image className='absolute' src={'/raccoon.png'} alt='raccoon' width={300} height={300} />
				<Image className='absolute' src={'/raccoon.gif'} alt='raccoon' width={300} height={300} />
				<div className='h-[300px]'></div>
			</Container>

			<Button link='/' borders=''>
				<b className='text-3xl p-2'>RETURN HOME</b>
			</Button>
		</Container>
	)
}
