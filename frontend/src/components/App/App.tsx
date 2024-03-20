import * as React from "react"

export const App = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hiddenpy-6 sm:py-12 font-sans">
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 text-base leading-7 text-gray-600">
                        <p className="font-bold text-xl">FiveM Typescript React Boilerplate</p>
                        <ul className="space-y-4">
                            <li className="flex">
                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>
                                <h1 className="ml-4">
                                    Lightning Fast HMR - Hot Module Replacement (HMR) that stays fast regardless of app size.
                                </h1>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>
                                <p className="ml-4">
                                    Rich Features Out-of-the-box support for TypeScript, JSX, CSS and more.
                                </p>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>
                                <p className="ml-4">
                                    Optimized Build Pre-configured Rollup build with multi-page and library mode support.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}