import React from 'react'
import { useSelector } from 'react-redux'

function AboutSection() {
    const { userInfo } = useSelector((state) => state.userSignin)

    return (
        <div className="mt-10 py-10 border-t border-[#94a3b85c] text-center">
            <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                        and records all of his own music, giving it a warm, intimate
                        feel with a solid groove structure. An artist of considerable
                        range.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
