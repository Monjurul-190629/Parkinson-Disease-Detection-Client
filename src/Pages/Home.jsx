import React from 'react';
import { TypeAnimation } from 'react-type-animation';
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
                <p>Parkinson's Disease</p>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;