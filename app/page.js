import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-white h-[60vh] md:h-[68vh] text-center py-40">
        <div className="justify-center mx-4 flex gap-2 md:gap-10 items-center font-bold text-3xl sm:text-5xl">
          <div>
            Get Me A Coffee
          </div>
          <div>
            <img src="coffee.gif" alt="" width={90} />
          </div>
        </div>
        <div className="py-3 mx-4">
          A crowdfunding platform for creators to fund their projects.
        </div>
        <div className="mx-4">
          A place where your fans can buy you a coffee.Unlease the power of the fans and get your funded project.
        </div>
        <div className="flex justify-center w-full mt-2">
          <Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-5 md:py-2.5 py-2 text-center me-2 mb-2">Starts Here</button></Link>
          <Link href={"/about"}><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-5 md:py-2.5 py-2 text-center me-2 mb-2">Read More</button></Link>
        </div>
      </div>
      <div className="bg-indigo-900 h-0.5"></div>
      <div className="font-bold text-xl text-white px-3 py-16 text-center">
        Your Fans can buy you a Coffee
      </div>
      <div className="flex justify-around flex-col text-white sm:flex-row mx-3">
        <div className="text-center mb-6">
          <div className="flex justify-center mx-12">
            <img className="rounded-full size-40 object-cover" src="student.jpg" width={253} alt="" /></div>
          <div className="font-semibold text-base pt-2">Fans want to help</div>
          <div className="text-gray-400">Your fans are available to support you</div>
        </div>
        <div className="text-center mb-6">
          <div className="flex justify-center mx-14">
            <img className="rounded-full size-40 object-cover" src="coin.jpg"  alt="" /></div>
          <div className="font-semibold text-base pt-2">Fans want to contribute</div>
          <div className="text-gray-400">Your fans are willing to contribute financialy</div>
        </div>
        <div className="text-center mb-6">
          <div className="flex justify-center mx-16">
            <img className="rounded-full bg-white" src="fans.webp" width={167} alt="" /></div>
          <div className="font-semibold text-base pt-2">Fans want to collaborate</div>
          <div className="text-gray-400">Your fans are ready to collaborate with you</div>
        </div>
      </div>
      <div className="bg-indigo-900 h-0.5 mt-10"></div>
      <div className="h-5 mt-5"></div>
      <div className="text-white text-center font-semibold">Learn more about us</div>
      <div className="text-center px-[6vh] sm:px-[10vh] md:px-[20vh]  text-white pt-4 pb-6">It is the best place for creators to build community with their biggest fans, share exclusive work, and turn their passions into lasting creative businesses. Starting a Patreon is free for creators and their fans. If they want to start earning an income, they can choose to launch their own digital shop or run a paid membership. Here, creators get a direct line to their communities. That means they never have to worry about ads or algorithms getting in between them and the people who matter most.</div>
    </div>
  );
}
