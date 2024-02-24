'use client'
import { motion } from 'framer-motion'

import { SparklesCore } from '@/components/ui/particles'

export const revalidate = 1

export default function Profile() {
    return (
        <motion.div
            // animate={{
            //     y: -100,
            //     opacity: 0
            // }}
            // transition={{ delay: 2, duration: 1 }}
            className="h-[100vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
        >
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                instanet
            </h1>
            <div className="w-[50rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1}
                    particleDensity={500}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </motion.div>
    )
}
