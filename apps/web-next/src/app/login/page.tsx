import Image from "next/image"
import Link from "next/link"
import React from "react"
import ManiSvg from "@/public/Illustration.svg"
import Form from "./Form"
export const Page: React.FC = () => {
    return (
        <main className="min-h-screen bg-[#f5f7fb] p-4 md:p-6">
            <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl overflow-hidden rounded-[28px] border border-[#2f80ed] bg-white shadow-sm md:min-h-[calc(100vh-3rem)]">
                {/* Left side */}
                <div className="relative hidden w-1/2 flex-col  bg-[#4a8df6] px-10 py-12 text-white lg:flex">
                    <div className="mb-10">
                        <div className="mb-12 flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90">
                                <div className="relative h-6 w-6">
                                    <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-[#4a8df6]" />
                                    <span className="absolute left-1 top-1 h-2.5 w-2.5 rounded-full border-[3px] border-[#4a8df6] bg-white" />
                                    <span className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full border-[3px] border-[#4a8df6] bg-white" />
                                </div>
                            </div>

                            <span className="text-[22px] font-semibold tracking-tight">
                                Woorkroom
                            </span>
                        </div>

                        <h1 className="max-w-md text-5xl font-semibold leading-tight">
                            Your place to work
                            <br />
                            Plan. Create. Control.
                        </h1>
                    </div>

                    <div className="relative mt-10 flex items-center justify-center">
                        <Image
                            src={ManiSvg.src}
                            alt="Login illustration"
                            width={500}
                            height={420}
                            className="h-auto max-w-full object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right side */}
                <div className="flex w-full items-center justify-center bg-[#f8f8f8] px-6 py-10 sm:px-10 lg:w-1/2">
                    <div className="w-full max-w-md">
                        <h2 className="mb-10 text-center text-3xl font-semibold text-[#172033]">
                            Sign In to Woorkroom
                        </h2>
                        <Form/>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page