'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Heart } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function FamilySection() {
    const { t } = useLanguage()
    const [selectedFamily, setSelectedFamily] = useState<'bride' | 'groom' | null>(null)

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    const familyDetails = {
        bride: {
            title: "Bride's Family",
            subtitle: "With love and blessings for our special day",
            members: [
                {
                    name: "Pradeep Bhatia",
                    relation: "Father",
                    image: "/images/ganesha.jpg" // Placeholder or specific image if available
                },
                {
                    name: "Lekha Bhatia",
                    relation: "Mother",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Chirag Bhatia",
                    relation: "Brother",
                    image: "/images/ganesha.jpg"
                }
                ,
                {
                    name: "Sandeep Bhatia",
                    relation: "Chacha",
                    image: "/images/ganesha.jpg" // Placeholder or specific image if available
                },
                {
                    name: "Keerti Bhatia",
                    relation: "Chachi",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Deepansh Bhatia",
                    relation: "Brother",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Kanu Bhatia",
                    relation: "Brother",
                    image: "/images/ganesha.jpg"
                }

            ]
        },
        groom: {
            title: "Groom's Family",
            subtitle: "With love and blessings for our special day",
            members: [
                {
                    name: "Pradeep Kumar Bhatia",
                    relation: "Father",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Rashmi Bhatia",
                    relation: "Mother",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Bhoomika Bhatia",
                    relation: "Sister",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Dev Bhatia",
                    relation: "Brother",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Dayanand Bhatia,Urmila Bhatia",
                    relation: "Nana , Nani",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Vasudev Bhatia,Mohini Bhatia",
                    relation: "Dada , Dadi",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Ravi Bhatia",
                    relation: "Chacha",
                    image: "/images/ganesha.jpg"
                }
                ,
                {
                    name: "Ankush Bhatia, Yojana Bhatia",
                    relation: "Mama , Mami",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Rajesh Bhatia,Pooja Bhatia",
                    relation: "Mama , Mami",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Chakshu Bhatia,Manan Bhatia",
                    relation: "Siblings",
                    image: "/images/ganesha.jpg"
                },
                {
                    name: "Venya Bhatia,Yug Bhatia",
                    relation: "Siblings",
                    image: "/images/ganesha.jpg"
                }
            ]
        }
    }

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background Decor */}
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-white/30 -z-10"></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200/20 rounded-full blur-[80px] -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Crown className="w-8 h-8 text-amber-500" />
                        <h2 className="text-4xl md:text-5xl font-decorative text-amber-800 drop-shadow-sm">
                            Our Royal Families
                        </h2>
                        <Crown className="w-8 h-8 text-amber-500" />
                    </div>

                    <p className="text-gray-600 font-serif text-lg max-w-2xl mx-auto">
                        Meet the distinguished families who raised us with love, values, and blessings
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mt-6"></div>
                    <div className="flex justify-center mt-2">
                        <SparkleIcon className="text-amber-300 w-5 h-5 animate-pulse" />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Bride's Family */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="glass-royal rounded-[2rem] p-8 flex flex-col items-center text-center relative group hover:border-gold-400 transition-all duration-500"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-maroon-300 to-gold-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div className="mb-6 relative">
                            <div className="w-40 h-40 rounded-full border-4 border-amber-100 p-1 relative z-10 bg-white shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder for Family Photo */}
                                <div className="w-full h-full bg-amber-50 flex items-center justify-center text-amber-300">
                                    <Image src="/images/ganesha.jpg" alt="Bride Family" width={160} height={160} className="object-cover opacity-80" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white p-2 rounded-full shadow-lg z-20">
                                <Heart className="w-5 h-5 fill-current" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-serif text-amber-700 mb-2 flex items-center gap-2">
                            <Crown className="w-5 h-5 text-amber-500" /> Bride's Family
                        </h3>
                        <ul className="text-gray-600 space-y-2 mb-8 font-medium">
                            <li className="text-lg">
                                Daughter of <span className="text-amber-600 font-semibold">Pradeep Bhatia & Lekha Bhatia</span>
                            </li>
                            <li className="text-sm text-gray-400 italic">Parents of the Bride</li>
                        </ul>

                        <button
                            onClick={() => setSelectedFamily('bride')}
                            className="px-8 py-3 bg-gradient-to-r from-rose-100 to-rose-200 text-maroon-900 rounded-full font-serif font-medium hover:from-rose-200 hover:to-rose-300 transition-all shadow-md flex items-center gap-2 group-hover:shadow-lg"
                        >
                            <Crown className="w-4 h-4" /> Discover Our Family <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.div>

                    {/* Groom's Family */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="glass-royal rounded-[2rem] p-8 flex flex-col items-center text-center relative group hover:border-gold-400 transition-all duration-500"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-maroon-300 to-gold-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div className="mb-6 relative">
                            <div className="w-40 h-40 rounded-full border-4 border-amber-100 p-1 relative z-10 bg-white shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder for Family Photo */}
                                <div className="w-full h-full bg-amber-50 flex items-center justify-center text-amber-300">
                                    <Image src="/images/ganesha.jpg" alt="Groom Family" width={160} height={160} className="object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white p-2 rounded-full shadow-lg z-20">
                                <Heart className="w-5 h-5 fill-current" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-serif text-amber-700 mb-2 flex items-center gap-2">
                            <Crown className="w-5 h-5 text-amber-500" /> Groom's Family
                        </h3>
                        <ul className="text-gray-600 space-y-2 mb-8 font-medium">
                            <li className="text-lg">
                                Son of <span className="text-amber-600 font-semibold">Pradeep Kumar Bhatia & Rashmi Bhatia</span>
                            </li>
                            <li className="text-sm text-gray-400 italic">Parents of the Groom</li>
                        </ul>

                        <button
                            onClick={() => setSelectedFamily('groom')}
                            className="px-8 py-3 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 rounded-full font-serif font-medium hover:from-amber-200 hover:to-amber-300 transition-all shadow-md flex items-center gap-2 group-hover:shadow-lg"
                        >
                            <Crown className="w-4 h-4" /> Discover Our Family <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Family Modal */}
            {selectedFamily && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedFamily(null)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-rose-200"
                    >
                        <button
                            onClick={() => setSelectedFamily(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Heart className="w-5 h-5 text-rose-400 fill-current" />
                                <h3 className="text-3xl font-decorative text-rose-700">{familyDetails[selectedFamily].title}</h3>
                                <Heart className="w-5 h-5 text-rose-400 fill-current" />
                            </div>
                            <p className="text-gray-500 font-serif italic">{familyDetails[selectedFamily].subtitle}</p>
                        </div>

                        <div className="space-y-6">
                            {familyDetails[selectedFamily].members.map((member, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-rose-200 flex-shrink-0">
                                        <Image src={member.image} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-xl font-serif text-rose-900 font-medium">{member.name}</h4>
                                        <p className="text-gray-600 text-sm uppercase tracking-wide mt-1">{member.relation}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-maroon-300 to-transparent mx-auto"></div>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    )
}

function SparkleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
    )
}
