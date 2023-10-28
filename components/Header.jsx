"use client"
import caterogyDataExample from "../data"
import { motion } from "framer-motion"
import Image from "next/image"
import {
	CiShoppingCart,
	CiUser,
} from "react-icons/ci"
import CategoryPhone from "./CategoryPhone"
import SearchBar from "./SearchBar"
import { useRouter } from "next/navigation"
import { UserAuth } from "@/context/AuthContext"
const Header = () => {
	const { user } = UserAuth()
	const router = useRouter()

	return (
		<div className='fixed top-0 z-30 inset-x-0 h-[50px] bg-white/20 backdrop-blur-md'>
			<div className='mx-3 mt-3'>
				<div className='flex w-full items-center gap-[10px] justify-evenly '>
					<div className='lg:hidden p-2'>
						<CategoryPhone />
					</div>
					<div
						onClick={() => router.push("/")}
						className='shinks-0'
					>
						<Image
							alt=''
							src={"/images/1x/Asset1.png"}
							width={81.081081}
							height={20}
						/>
					</div>

					<ul className='hidden md:flex overflow-x-scroll flex-nowrap noneScrollBar my-2'>
						{caterogyDataExample.map(
							(category, index) => (
								<motion.li
									whileHover={{ color: "red" }}
									key={index}
									className='text-[1.3rem] md:text-[1.5rem] font-[400] capitalize mx-2 cursor-pointer whitespace-nowrap	'
								>
									{category.category_name}
								</motion.li>
							)
						)}
					</ul>

					<motion.div className='grow-[1] '>
						<SearchBar />
					</motion.div>
					<motion.div
						whileHover={{ color: "red", scale: 1.05 }}
						onClick={() => {
							router.push("/products")
						}}
						className=' p-2 '
					>
						<CiShoppingCart size={25} />
					</motion.div>

					<motion.div
						onClick={() => {
							const route = user ? "account" : "login"
							router.push(route)
						}}
						whileHover={{ color: "#dc2626" }}
						className='md:block cursor-pointer'
					>
						<CiUser size={25} />
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Header
