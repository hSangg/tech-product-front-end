"use client"

import { useEffect, useState } from "react"
import BestSaleCategory from "./BestSaleCategory"
import BestSaleProduct from "./BestSaleProduct"
import ImageSlide from "./ImageSlide"
import ProductListAbs from "./ProductListAbs"
import RealTimeMessage from "./RealTimeMessage"
import AdvertisementShipping from "./advertisement/AdvertisementShipping"
import { UserAuth } from "@/context/AuthContext"
import Advertisement from "./Advertisement"

const MainContent = () => {
	const [imageSlideHeight, setImageSlideHeight] =
		useState("auto")

	const { user } = UserAuth()

	console.log(user)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				const imageSlideElement =
					document.querySelector(".image-slide")
				if (imageSlideElement) {
					const height = imageSlideElement.offsetHeight
					setImageSlideHeight(height)
				}
			} else {
				setImageSlideHeight("auto")
			}
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener(
				"resize",
				handleResize
			)
		}
	})

	return (
		<div>
			{/* <Advertisement /> */}
			<div className='m-2 '>
				<div className='md:flex gap-5'>
					<div className='md:flex-1'>
						<div>
							<RealTimeMessage />
						</div>
						<ImageSlide />
					</div>
					<BestSaleProduct height={imageSlideHeight} />
				</div>
				<BestSaleCategory />
				<AdvertisementShipping />\
				<Advertisement />
				<ProductListAbs />
			</div>
		</div>
	)
}

export default MainContent
