"use client"
import Link from "next/link"
import React from "react"

const Form: React.FC = () => {
    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState("")
    const [show, setShow] = React.useState<boolean>(false)

    return (
        <form className="space-y-6">
            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#6b7280]"
                >
                    Email Address
                </label>
                <input
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    className="h-14 w-full rounded-2xl border border-[#d9e1ee] bg-transparent px-4 text-sm outline-none transition focus:border-[#4a8df6] focus:ring-2 focus:ring-[#4a8df6]/20"
                />
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-[#6b7280]"
                >
                    Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        placeholder="1234"
                        className="h-14 w-full rounded-2xl border border-[#d9e1ee] bg-transparent px-4 pr-12 text-sm outline-none transition focus:border-[#4a8df6] focus:ring-2 focus:ring-[#4a8df6]/20"
                    />
                    <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a94a6]"
                        onClick={() => setShow(prev => !prev)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.8}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-3 text-[#6b7280]">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-[#4a8df6] focus:ring-[#4a8df6]"
                    />
                    Remember me
                </label>

                <Link
                    href="/forgot-password"
                    className="text-[#8a94a6] transition hover:text-[#4a8df6]"
                >
                    Forgot Password?
                </Link>
            </div>

            <div className="pt-2 text-center">
                <button
                    type="submit"
                    className="inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-2xl bg-[#4a8df6] px-8 text-base font-medium text-white shadow-[0_10px_20px_rgba(74,141,246,0.25)] transition hover:bg-[#3f80e6]"
                >
                    Sign In
                    <span aria-hidden>→</span>
                </button>
            </div>

            <p className="pt-2 text-center text-sm text-[#4a8df6]">
                <Link href="/register" className="hover:underline">
                    Don&apos;t have an account?
                </Link>
            </p>
        </form>
    )
}

export default Form