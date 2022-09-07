import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
//import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
//import Features from "../components/Features";
//import BlogRoll from "../components/BlogRoll";
//import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
	image,
	title,
	heading,
	subheading,
	mainpitch,
	description,
	intro,
}) => {
	//const heroImage = getImage(image) || image;

	return (
		<div className="md:mt-[-106px]">
			<div className="hero w-full relative">
				<div className="grid grid-cols-12 gap-4 items-center relative">
					<div className="col-span-full md:col-span-6 px-4 pt-8 md:pt-28 pb-8 2xl:col-span-3 2xl:col-start-4 2xl:px-4 2xl:py-8">
						<h1 className="text-black text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight">
							Break the Weak Data Status Quo
						</h1>
						<p className="text-black pb-4 text-sm md:text-base">
							Data is your brand's biggest asset, but only if it's relevant.{" "}
						</p>
						<p className="text-black pb-4 text-sm md:text-base">
							Social Outlier's real-time data platform enables you to customize
							how you get fresh data that connects you with the right people
							without the runaround you're used to.
						</p>
						<Link
							className="inline-block py-2 px-8 mt-4 border border-none rounded-full bg-red text-white hover:bg-red-900 transition-all"
							to="#Contact"
						>
							Start Now
						</Link>
					</div>
					<div className="hidden h-full px-4 pt-28 pb-8 md:block md:col-span-6 bg-[#9934dc] md:px-0 xl:py-0">
						<img
							src="/img/home-hero.png"
							alt=""
							className="w-full h-auto object-cover object-center"
							width="744"
							height="857"
						/>
					</div>
				</div>
			</div>
			<div className="bg-black">
				<div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 justify-center py-16 lg:py-28 text-white text-center">
					<div className="max-w-[260px] mx-auto">
						<h2 className="text-4xl leading-tight mb-4">50 Million</h2>
						<p className="text-base">
							Online revenue we've generated for our clients
						</p>
					</div>
					<div className="max-w-[260px] mx-auto">
						<h2 className="text-4xl leading-tight mb-4">1 Million</h2>
						<p className="text-base">
							Customers we've helped aquire for our cients
						</p>
					</div>
					<div className="max-w-[260px] mx-auto">
						<h2 className="text-4xl leading-tight mb-4">1 Billion+</h2>
						<p className="text-base">
							Potential customer waiting to engage with your brand
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-16 py-16">
				<div className="wrapper grid grid-cols-1 md:grid-cols-2 items-center gap-16 rounded-3xl px-12 py-16 md:py-2">
					<img
						src="/img/stop-buying-your-data-back.png"
						alt=""
						className="w-full h-auto"
						width="458"
						height="420"
					/>
					<div>
						<h3 className="text-4xl md:text-5xl !leading-tight text-gray-800 mb-8">
							Stop Buying Your Own Data Back
						</h3>
						<ul className="flex flex-col gap-6">
							<li className="text-base leading-tight text-gray-800 grid items-start gap-4 grid-cols-[20px_1fr]">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_36_304)">
										<path
											d="M2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5V2.5C20 1.83696 19.7366 1.20107 19.2678 0.732233C18.7989 0.263392 18.163 0 17.5 0L2.5 0ZM6.6925 5.8075L10 9.11625L13.3075 5.8075C13.3656 5.74939 13.4346 5.70329 13.5105 5.67185C13.5864 5.6404 13.6678 5.62421 13.75 5.62421C13.8322 5.62421 13.9136 5.6404 13.9895 5.67185C14.0654 5.70329 14.1344 5.74939 14.1925 5.8075C14.2506 5.86561 14.2967 5.9346 14.3282 6.01052C14.3596 6.08644 14.3758 6.16782 14.3758 6.25C14.3758 6.33218 14.3596 6.41356 14.3282 6.48948C14.2967 6.5654 14.2506 6.63439 14.1925 6.6925L10.8837 10L14.1925 13.3075C14.2506 13.3656 14.2967 13.4346 14.3282 13.5105C14.3596 13.5864 14.3758 13.6678 14.3758 13.75C14.3758 13.8322 14.3596 13.9136 14.3282 13.9895C14.2967 14.0654 14.2506 14.1344 14.1925 14.1925C14.1344 14.2506 14.0654 14.2967 13.9895 14.3282C13.9136 14.3596 13.8322 14.3758 13.75 14.3758C13.6678 14.3758 13.5864 14.3596 13.5105 14.3282C13.4346 14.2967 13.3656 14.2506 13.3075 14.1925L10 10.8837L6.6925 14.1925C6.63439 14.2506 6.5654 14.2967 6.48948 14.3282C6.41356 14.3596 6.33218 14.3758 6.25 14.3758C6.16782 14.3758 6.08644 14.3596 6.01052 14.3282C5.9346 14.2967 5.86561 14.2506 5.8075 14.1925C5.74939 14.1344 5.70329 14.0654 5.67185 13.9895C5.6404 13.9136 5.62421 13.8322 5.62421 13.75C5.62421 13.6678 5.6404 13.5864 5.67185 13.5105C5.70329 13.4346 5.74939 13.3656 5.8075 13.3075L9.11625 10L5.8075 6.6925C5.69014 6.57514 5.62421 6.41597 5.62421 6.25C5.62421 6.08403 5.69014 5.92486 5.8075 5.8075C5.92486 5.69014 6.08403 5.62421 6.25 5.62421C6.41597 5.62421 6.57514 5.69014 6.6925 5.8075Z"
											fill="#17242F"
										/>
									</g>
									<defs>
										<clipPath id="clip0_36_304">
											<rect width="20" height="20" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<span>Quit the cookies and spreadsheets.</span>
							</li>
							<li className="text-base leading-tight text-gray-800 grid items-start gap-4 grid-cols-[20px_1fr]">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5"
								>
									<path
										d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM15.0375 6.2125C14.9482 6.12352 14.8419 6.05347 14.7249 6.00652C14.6079 5.95957 14.4827 5.9367 14.3567 5.93926C14.2306 5.94183 14.1064 5.96979 13.9914 6.02146C13.8765 6.07313 13.7731 6.14746 13.6875 6.24L9.34625 11.7712L6.73 9.15375C6.55228 8.98815 6.31722 8.898 6.07435 8.90228C5.83147 8.90657 5.59974 9.00496 5.42797 9.17672C5.25621 9.34849 5.15782 9.58022 5.15353 9.8231C5.14925 10.066 5.2394 10.301 5.405 10.4788L8.7125 13.7875C8.8016 13.8764 8.90771 13.9465 9.02448 13.9936C9.14125 14.0406 9.26631 14.0637 9.39218 14.0613C9.51806 14.059 9.64217 14.0313 9.75712 13.98C9.87207 13.9286 9.9755 13.8547 10.0612 13.7625L15.0513 7.525C15.2214 7.34812 15.3153 7.11159 15.313 6.8662C15.3107 6.6208 15.2122 6.3861 15.0387 6.2125H15.0375Z"
										fill="#17242F"
									/>
								</svg>
								<span>
									We give you a data map built from your own 1st party data.
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="wrapper grid grid-cols-1 md:grid-cols-2 items-center gap-16 bg-gray-100 rounded-3xl px-12 py-16 md:py-2">
					<img
						src="/img/grow-your-brand-with-relevant-insights.png"
						alt=""
						className="w-full h-auto md:order-2"
						width="458"
						height="419"
					/>
					<div className="md:order-1">
						<h3 className="text-4xl md:text-5xl !leading-tight text-gray-800 mb-8">
							Grow Your Brand With Relevant Insights
						</h3>
						<ul className="flex flex-col gap-6">
							<li className="text-base leading-tight text-gray-800 grid items-start gap-4 grid-cols-[20px_1fr]">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5"
								>
									<g clipPath="url(#clip0_36_304)">
										<path
											d="M2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5V2.5C20 1.83696 19.7366 1.20107 19.2678 0.732233C18.7989 0.263392 18.163 0 17.5 0L2.5 0ZM6.6925 5.8075L10 9.11625L13.3075 5.8075C13.3656 5.74939 13.4346 5.70329 13.5105 5.67185C13.5864 5.6404 13.6678 5.62421 13.75 5.62421C13.8322 5.62421 13.9136 5.6404 13.9895 5.67185C14.0654 5.70329 14.1344 5.74939 14.1925 5.8075C14.2506 5.86561 14.2967 5.9346 14.3282 6.01052C14.3596 6.08644 14.3758 6.16782 14.3758 6.25C14.3758 6.33218 14.3596 6.41356 14.3282 6.48948C14.2967 6.5654 14.2506 6.63439 14.1925 6.6925L10.8837 10L14.1925 13.3075C14.2506 13.3656 14.2967 13.4346 14.3282 13.5105C14.3596 13.5864 14.3758 13.6678 14.3758 13.75C14.3758 13.8322 14.3596 13.9136 14.3282 13.9895C14.2967 14.0654 14.2506 14.1344 14.1925 14.1925C14.1344 14.2506 14.0654 14.2967 13.9895 14.3282C13.9136 14.3596 13.8322 14.3758 13.75 14.3758C13.6678 14.3758 13.5864 14.3596 13.5105 14.3282C13.4346 14.2967 13.3656 14.2506 13.3075 14.1925L10 10.8837L6.6925 14.1925C6.63439 14.2506 6.5654 14.2967 6.48948 14.3282C6.41356 14.3596 6.33218 14.3758 6.25 14.3758C6.16782 14.3758 6.08644 14.3596 6.01052 14.3282C5.9346 14.2967 5.86561 14.2506 5.8075 14.1925C5.74939 14.1344 5.70329 14.0654 5.67185 13.9895C5.6404 13.9136 5.62421 13.8322 5.62421 13.75C5.62421 13.6678 5.6404 13.5864 5.67185 13.5105C5.70329 13.4346 5.74939 13.3656 5.8075 13.3075L9.11625 10L5.8075 6.6925C5.69014 6.57514 5.62421 6.41597 5.62421 6.25C5.62421 6.08403 5.69014 5.92486 5.8075 5.8075C5.92486 5.69014 6.08403 5.62421 6.25 5.62421C6.41597 5.62421 6.57514 5.69014 6.6925 5.8075Z"
											fill="#17242F"
										/>
									</g>
									<defs>
										<clipPath id="clip0_36_304">
											<rect width="20" height="20" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<span>
									Most platforms pull from months-old, irrelevant data.
								</span>
							</li>
							<li className="text-base leading-tight text-gray-800 grid items-start gap-4 grid-cols-[20px_1fr]">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5"
								>
									<path
										d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM15.0375 6.2125C14.9482 6.12352 14.8419 6.05347 14.7249 6.00652C14.6079 5.95957 14.4827 5.9367 14.3567 5.93926C14.2306 5.94183 14.1064 5.96979 13.9914 6.02146C13.8765 6.07313 13.7731 6.14746 13.6875 6.24L9.34625 11.7712L6.73 9.15375C6.55228 8.98815 6.31722 8.898 6.07435 8.90228C5.83147 8.90657 5.59974 9.00496 5.42797 9.17672C5.25621 9.34849 5.15782 9.58022 5.15353 9.8231C5.14925 10.066 5.2394 10.301 5.405 10.4788L8.7125 13.7875C8.8016 13.8764 8.90771 13.9465 9.02448 13.9936C9.14125 14.0406 9.26631 14.0637 9.39218 14.0613C9.51806 14.059 9.64217 14.0313 9.75712 13.98C9.87207 13.9286 9.9755 13.8547 10.0612 13.7625L15.0513 7.525C15.2214 7.34812 15.3153 7.11159 15.313 6.8662C15.3107 6.6208 15.2122 6.3861 15.0387 6.2125H15.0375Z"
										fill="#17242F"
									/>
								</svg>
								<span>
									We give you audience insights driven by your audience's
									current content consumption behavior. And we filter out old
									and irrelevant data so you have access to people who are ready
									to buy now.
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="wrapper grid grid-cols-1 md:grid-cols-2 items-center gap-16 rounded-3xl px-12 py-16 md:py-2">
					<img
						src="/img/stay-aligned-with-your-audience-as-they-change.png"
						alt=""
						className="w-full h-auto"
						width="458"
						height="419"
					/>
					<div>
						<h3 className="text-4xl md:text-5xl !leading-tight text-gray-800 mb-8">
							Stay Aligned With Your Audience As They Change
						</h3>
						<ul className="flex flex-col gap-6">
							<li className="text-base leading-tight text-gray-800 grid items-start gap-4 grid-cols-[20px_1fr]">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_36_304)">
										<path
											d="M2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5V2.5C20 1.83696 19.7366 1.20107 19.2678 0.732233C18.7989 0.263392 18.163 0 17.5 0L2.5 0ZM6.6925 5.8075L10 9.11625L13.3075 5.8075C13.3656 5.74939 13.4346 5.70329 13.5105 5.67185C13.5864 5.6404 13.6678 5.62421 13.75 5.62421C13.8322 5.62421 13.9136 5.6404 13.9895 5.67185C14.0654 5.70329 14.1344 5.74939 14.1925 5.8075C14.2506 5.86561 14.2967 5.9346 14.3282 6.01052C14.3596 6.08644 14.3758 6.16782 14.3758 6.25C14.3758 6.33218 14.3596 6.41356 14.3282 6.48948C14.2967 6.5654 14.2506 6.63439 14.1925 6.6925L10.8837 10L14.1925 13.3075C14.2506 13.3656 14.2967 13.4346 14.3282 13.5105C14.3596 13.5864 14.3758 13.6678 14.3758 13.75C14.3758 13.8322 14.3596 13.9136 14.3282 13.9895C14.2967 14.0654 14.2506 14.1344 14.1925 14.1925C14.1344 14.2506 14.0654 14.2967 13.9895 14.3282C13.9136 14.3596 13.8322 14.3758 13.75 14.3758C13.6678 14.3758 13.5864 14.3596 13.5105 14.3282C13.4346 14.2967 13.3656 14.2506 13.3075 14.1925L10 10.8837L6.6925 14.1925C6.63439 14.2506 6.5654 14.2967 6.48948 14.3282C6.41356 14.3596 6.33218 14.3758 6.25 14.3758C6.16782 14.3758 6.08644 14.3596 6.01052 14.3282C5.9346 14.2967 5.86561 14.2506 5.8075 14.1925C5.74939 14.1344 5.70329 14.0654 5.67185 13.9895C5.6404 13.9136 5.62421 13.8322 5.62421 13.75C5.62421 13.6678 5.6404 13.5864 5.67185 13.5105C5.70329 13.4346 5.74939 13.3656 5.8075 13.3075L9.11625 10L5.8075 6.6925C5.69014 6.57514 5.62421 6.41597 5.62421 6.25C5.62421 6.08403 5.69014 5.92486 5.8075 5.8075C5.92486 5.69014 6.08403 5.62421 6.25 5.62421C6.41597 5.62421 6.57514 5.69014 6.6925 5.8075Z"
											fill="#17242F"
										/>
									</g>
									<defs>
										<clipPath id="clip0_36_304">
											<rect width="20" height="20" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<span>
									Current consumer behavior models are flawed and don’t suit the
									fact that consumer behavior is more erratic than ever.
								</span>
							</li>
							<li className="text-base leading-tight text-gray-800 grid items-start gap-4 grid-cols-[20px_1fr]">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM15.0375 6.2125C14.9482 6.12352 14.8419 6.05347 14.7249 6.00652C14.6079 5.95957 14.4827 5.9367 14.3567 5.93926C14.2306 5.94183 14.1064 5.96979 13.9914 6.02146C13.8765 6.07313 13.7731 6.14746 13.6875 6.24L9.34625 11.7712L6.73 9.15375C6.55228 8.98815 6.31722 8.898 6.07435 8.90228C5.83147 8.90657 5.59974 9.00496 5.42797 9.17672C5.25621 9.34849 5.15782 9.58022 5.15353 9.8231C5.14925 10.066 5.2394 10.301 5.405 10.4788L8.7125 13.7875C8.8016 13.8764 8.90771 13.9465 9.02448 13.9936C9.14125 14.0406 9.26631 14.0637 9.39218 14.0613C9.51806 14.059 9.64217 14.0313 9.75712 13.98C9.87207 13.9286 9.9755 13.8547 10.0612 13.7625L15.0513 7.525C15.2214 7.34812 15.3153 7.11159 15.313 6.8662C15.3107 6.6208 15.2122 6.3861 15.0387 6.2125H15.0375Z"
										fill="#17242F"
									/>
								</svg>
								<span>
									Our data platform enables you to target and segment based on
									real-time data that changes as quickly as your audience does.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-black py-24">
				<div className="wrapper grid md:grid-cols-2 gap-8 text-white">
					<h3 className="text-6xl leading-tight">
						Real-Time Data Leads to Real Connections
					</h3>
					<p className="text-lg leading-tight">
						Our fully integrated Data As A Service platform self-feeds and gives
						you real-time behavioral and consumption data you can use for real
						insights that connect you with the right people.
					</p>
				</div>
				<div className="wrapper grid lg:grid-cols-3 gap-8 pt-20">
					<div className="text-white text-center">
						<h5 className="text-2xl">Visualize</h5>
						<div className="mt-2 bg-white rounded-2xl px-4 py-6">
							<img
								src="/img/visualize.png"
								alt=""
								className="max-w-full h-auto mx-auto"
								width="267"
								height="286"
							/>
						</div>
					</div>
					<div className="text-white text-center">
						<h5 className="text-2xl">Personalize</h5>
						<div className="mt-2 bg-white rounded-2xl px-4 py-6">
							<img
								src="/img/personalize.png"
								alt=""
								className="max-w-full h-auto mx-auto"
								width="264"
								height="282"
							/>
						</div>
					</div>
					<div className="text-white text-center">
						<h5 className="text-2xl">Monetize</h5>
						<div className="mt-2 bg-white rounded-2xl px-4 py-6">
							<img
								src="/img/monetize.png"
								alt=""
								className="max-w-full h-auto mx-auto"
								width="264"
								height="282"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="wrapper py-12 md:py-4 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
				<div className="md:col-span-2">
					<h4 className="text-4xl leading-tight text-gray-800 mb-4">
						Over 5 Billion Unique Records
					</h4>
					<p className="text-2xl leading-tight text-black">
						Lets you create can’t-miss strategies that will connect your brand
						with any audience for maximum impact and value.
					</p>
				</div>
				<img
					src="/img/audience-reach.png"
					alt=""
					className="max-w-full h-auto mx-auto"
					width="438"
					height="398"
				/>
			</div>

			<div className="services bg-gray-100 py-12 lg:py-24">
				<div className="wrapper text-center flex flex-col gap-4">
					<h2 className="text-3xl md:text-6xl text-black mb-8">Services</h2>
					<p className="text-base leading-tight text-black">
						{" "}
						We help brands & agencies realize better return on investment than
						ever before.
					</p>
					<p className="text-base leading-tight text-black">
						Let our mutlifaceted expert team focus on all aspects of your
						digital strategy so you can focus on running your business.{" "}
					</p>
					<div className="grid grid-cols-2 lg:grid-cols-5 gap-4 pt-8">
						<div className="text-center">
							<img
								src="/img/services-paid.png"
								alt="Paid Media Strategy"
								className="max-w-full h-auto mx-auto"
								width="130"
								height="130"
							/>
							<strong className="text-xl text-black">
								Paid Media Strategy
							</strong>
						</div>
						<div className="text-center">
							<img
								src="/img/services-audience.png"
								alt="Data &amp; Audiences"
								className="max-w-full h-auto mx-auto"
								width="130"
								height="130"
							/>
							<strong className="text-xl text-black">Data & Audiences</strong>
						</div>
						<div className="text-center">
							<img
								src="/img/services-analyze.png"
								alt="Analytics"
								className="max-w-full h-auto mx-auto"
								width="130"
								height="130"
							/>
							<strong className="text-xl text-black">Analytics</strong>
						</div>
						<div className="text-center">
							<img
								src="/img/services-social.png"
								alt="Social Media"
								className="max-w-full h-auto mx-auto"
								width="130"
								height="130"
							/>
							<strong className="text-xl text-black">Social Media</strong>
						</div>
						<div className="text-center">
							<img
								src="/img/services-content.png"
								alt="Content Creation"
								className="max-w-full h-auto mx-auto"
								width="130"
								height="130"
							/>
							<strong className="text-xl text-black">Content Creation</strong>
						</div>
					</div>
				</div>
			</div>

			<div className="logos">
				<div className="wrapper grid grid-cols-2 lg:grid-cols-4 gap-4 py-16 lg:py-24 items-center">
					<img
						src="/img/logo-theragun.png"
						alt="Theragun"
						className="mx-auto"
						width="196"
						height="109"
					/>
					<img
						src="/img/logo-apolis.png"
						alt="Apolis"
						className="mx-auto"
						width="130"
						height="25"
					/>

					<img
						src="/img/logo-lake-and-skye.png"
						alt="Lake and Skye"
						className="mx-auto"
						width="257"
						height="97"
					/>
					<img
						src="/img/logo-la-times.png"
						alt="Los Angeles Times"
						className="mx-auto"
						width="256"
						height="35"
					/>
				</div>
			</div>
		</div>
	);
};

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						gatsbyImageData(quality: 100, layout: FULL_WIDTH)
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`;
