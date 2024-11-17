import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Symptioms from './Symptioms';
const Home = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center text-white bg-blue-700'>
                <div className='py-5 px-2 md:pl-16  text-normal'>

                    <p className='text-3xl md:text-5xl font-semibold text-normal '>
                        <TypeAnimation
                            sequence={[
                                'Early Parkinson’s Disease Detection',
                                2000,
                                'Revolutionizing Healthcare with AI',
                                2000,
                                'Accurate Machine Learning Predictions',
                                2000,
                                'Transforming Lives with Early Detection',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '40px', display: 'inline-block' }}
                            repeat={Infinity}
                        />


                    </p><br />
                    <p className=' text-[19px] text-justify md:w-[600px]'>
                        Our cutting-edge machine learning solution analyzes subtle patterns in patient data, enabling early and accurate detection of Parkinson's disease. By identifying symptoms sooner, we aim to support timely interventions and improve quality of life for patients and caregivers.
                    </p>


                </div>
                <div className='py-10'>
                    <img src="https://freesvgillustration.com/wp-content/uploads/2022/05/Parkinson-1.png" className=' border-0 w-full ' />
                </div>
            </div>


            <div className='py-10 lg:pt-20 text-2xl font-semibold text-center'>
                <p className='underline'>Parkinson's Disease</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='border-r-2 border-slate-500'>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Definition</div>
                        <div className="collapse-content">
                            <p className='text-justify lg:w-[400px]'>
                                Parkinson's disease (PD) is a progressive neurodegenerative disorder that affects the central
                                nervous system (CNS), primarily targeting the substantia nigra, a region in the midbrain
                                responsible for movement and coordination. It is characterized by a loss of dopamine-producing neurons, leading to a constellation of motor symptoms, including tremor, rigidity,
                                bradykinesia (slowness of movement), and postural instability.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Epidemiology</div>
                        <div className="collapse-content">
                            <p className='text-justify lg:w-[400px]'>
                                PD affects approximately 7-10 million people worldwide, with an incidence rate of around 10
                                per 100,000 people per year. The prevalence of PD increases with age, with the average age
                                of onset being around 60 years old. While it is more common in older adults, PD can also
                                affect younger individuals.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Pathophysiology</div>
                        <div className="collapse-content">
                            <p className='text-justify lg:w-[400px]'>
                                The underlying cause of PD is the loss of dopamine-producing neurons in the substantia
                                nigra. Dopamine is a neurotransmitter that plays a crucial role in regulating movement and
                                coordination. As dopamine levels decrease, motor symptoms begin to emerge.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Diagnosis</div>
                        <div className="collapse-content">
                            <p className='text-justify lg:w-[400px]'>
                                Parkinson's disease diagnosis is primarily clinical, based on patient history and physical
                                examination. Neurologists assess motor symptoms such as tremors, rigidity, and bradykinesia.
                                Imaging techniques like MRI or dopamine transporter (DaT) scans may be used to rule out other
                                conditions or confirm a suspected diagnosis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Symptioms></Symptioms>
        </div>
    );
};

export default Home;