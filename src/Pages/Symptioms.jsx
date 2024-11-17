import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Symptioms = () => {

    // Refs for the sections
    const cardinalRef = useRef(null);
    const nonMotorRef = useRef(null);

    // Monitor when these sections enter the viewport
    const isCardinalInView = useInView(cardinalRef, { once: true });
    const isNonMotorInView = useInView(nonMotorRef, { once: true });


    return (
        <div>
            {/* Cardinal Motor Symptoms Section */}
            <motion.div
                ref={cardinalRef}
                className="py-10 lg:pt-20 text-2xl font-semibold text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={isCardinalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            >
                <p className="underline">Cardinal Motor Symptoms</p>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <motion.div
                    className="px-2 lg:px-10 text-[17px] lg:w-[650px] text-justify"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isCardinalInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <span className="text-xl font-semibold pr-4">Tremor:</span> A resting tremor, often noticeable in the hands or fingers, that occurs when the muscles are relaxed. <br />
                    <span className="text-xl font-semibold pr-4">Rigidity:</span> An increased muscle tone, leading to stiffness and resistance to movement.<br />
                    <span className="text-xl font-semibold pr-4">Bradykinesia:</span> Slowness of movement, making it difficult to perform everyday tasks.<br />
                    <span className="text-xl font-semibold pr-4">Postural instability:</span> Difficulty with balance and coordination, increasing the risk of falls.
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isCardinalInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="https://image.freepik.com/free-vector/parkinson-disease-symptoms-infographic_1308-50548.jpg"
                        className="lg:w-[400px] lg:h-[340px] rounded-xl"
                    />
                </motion.div>
            </div>

            {/* Non-Motor Symptoms Section */}
            <motion.div
                ref={nonMotorRef}
                className="py-10 lg:pt-20 text-2xl font-semibold text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={isNonMotorInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <p className="underline">Non-Motor Symptoms</p>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <motion.div
                    className="px-2 lg:px-10 text-[17px] lg:w-[650px] text-justify"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isNonMotorInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span className="text-xl font-semibold pr-4">Cognitive decline:</span> Difficulty with memory, attention, and executive function.<br />
                    <span className="text-xl font-semibold pr-4">Autonomic dysfunction:</span> Issues with blood pressure regulation, bladder control, and gastrointestinal function.<br />
                    <span className="text-xl font-semibold pr-4">Sleep disturbances:</span> Difficulty falling asleep, staying asleep, and experiencing excessive daytime sleepiness.<br />
                    <span className="text-xl font-semibold pr-4">Mood disorders:</span> Depression and anxiety are common in PD patients.
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isNonMotorInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img
                        src="https://thumbs.dreamstime.com/b/parkinsons-sjukdom-40318300.jpg"
                        className="lg:w-[400px] lg:h-[340px] rounded-xl"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Symptioms;