import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrandsSection = () => {
  return (
    <section>
        <div className='max-w-[1320px] w-full px-4 mx-auto'>
            <div className="flex flex-wrap mx-[-16px]">
                <div className="px-4 w-full">
                    <div className='border-b border-t border-[#E9ECF8] flex flex-wrap items-center justify-center p-8 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:px-[70px]'>
                    <Link href="https://uideck.com" target="_blank" rel="nofollow noreferrer" className="flex items-center justify-center lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 transition">
<Image width={160} height={42} src="/uideck.svg" alt="uideck" />
</Link>
<Link href="https://tailgrids.com" target="_blank" rel="nofollow noreferrer" className="flex items-center justify-center lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 transition">
<Image width={160} height={42} src="/tailgrids.svg" alt="tailgrids" />
</Link>
<Link href="https://lineicons.com" target="_blank" rel="nofollow noreferrer" className="flex items-center justify-center lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 transition">
<Image width={160} height={42} src="/lineicons.svg" alt="lineicons" />
</Link>
<Link href="https://ayroui.com" target="_blank" rel="nofollow noreferrer" className="flex items-center justify-center lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 transition">
<Image width={160} height={42} src="/ayroui.svg" alt="ayroui" />
</Link>
<Link href="https://plainadmin.com" target="_blank" rel="nofollow noreferrer" className="flex items-center justify-center lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] grayscale hover:grayscale-0 transition">
<Image width={160} height={42} src="/plainadmin.svg" alt="plainadmin" />
</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BrandsSection