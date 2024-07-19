import React from 'react'

const page = () => {
    return (
        <div className='lg:mx-28 mx-5 md:mx-14 py-24 lg:py-7 md:py-12 xl:py-5'>
            <h2 className='font-bold text-lg py-2'>About Get Me a Coffee</h2>
            <div className='text-xs sm:text-sm'>Get Me a Coffee is a crowdfunding platform designed for creators to fund their projects with the support of their fans.It's a space where your fans can directly contribute to your creative endeavors by buying you a coffee. Unlock the potential of your fanbase and bring your projects to life.</div>
            <h2 className='font-bold text-lg pt-3'>How it Works</h2>
            <div className='flex gap-5 md:flex-row flex-col px-2'>
                <div className='flex gap-1 items-center'>
                    <img src="idea.png" className='size-9 mr-1' alt="" />
                    <div>
                        <h2 className='font-semibold text-sm'>Fans Want to Collaborate</h2>
                        <div className='text-xs'>Your fans are enthusiatic about collaborating with you on your projects.</div>
                    </div>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src="dollar.png" className='size-9 mr-1' alt="" />
                    <div>
                        <h2 className='font-semibold text-sm'>Support Through Coffee</h2>
                        <div className='text-xs w-[80%]'>Recieve support from your fans in the form of coffee purchases, directly contributing to your project funding .</div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-lg pt-3'>Benefit for Creators</h2>
                <ul className='list-disc ml-5 text-xs sm:text-sm'>
                    <li>Direct financial support from your fanbase</li>
                    <li>Engage with your fans on a more personal level</li>
                    <li>Access to a platform tailored for creative projects</li>
                </ul>
            </div>
            <div>
                <h2 className='font-bold text-lg pt-3'>Benefit for Fans</h2>
                <ul className='list-disc ml-5 text-xs sm:text-sm'>
                    <li>Direct contribute to the success of your favorite creators</li>
                    <li>Exclusive rewards and perks for supporting creators</li>
                    <li>Be part of the creative process and connect with creatos</li>
                </ul>
            </div>
            <div>
                <h2 className='font-bold text-lg pt-3'>Benefit of Collaboration</h2>
                <ul className='list-disc ml-5 text-xs sm:text-sm'>
                    <li>Unlock new opportunities through collaboration with fellow creators</li>
                    <li>Expand your network and reach a wider audience</li>
                    <li>Combine skills and resources to create innovative projects</li>
                </ul>
            </div>
            <div>
                <h2 className='font-bold text-lg pt-3'>Community Engagement</h2>
                <ul className='list-disc ml-5 text-xs sm:text-sm'>
                    <li>Interact with a supportive community of like-minded individuals</li>
                    <li>Receive valuable feedback and encouragement from peers</li>
                    <li>Paricipate in discussions and events centered around your interests</li>
                </ul>
            </div>
            <div>
                <h2 className='font-bold text-lg pt-3'>Access to Resources</h2>
                <ul className='list-disc ml-5 text-xs sm:text-sm'>
                    <li>Gain access to resources such as tutorials,templates,and tools</li>
                    <li>Receive guidance and mentorship form experienced creatos</li>
                    <li>Stay updated on industry trends and best practices</li>
                </ul>
            </div>
            <div>
                <h2 className='font-bold text-lg pt-3'>Recognition and Exposure</h2>
                <ul className='list-disc ml-5 text-xs sm:text-sm'>
                    <li>Showcase your work to a global audience an gain recognition</li>
                    <li>Feature in promotional materials and campaigns</li>
                    <li>Build your portfolio and increase your credibility as a creator</li>
                </ul>
            </div>


        </div>
    )
}

export default page

export const metadata = {
    title: "About -GetMeACoffee",
    description: "this is a donation app",
  };
