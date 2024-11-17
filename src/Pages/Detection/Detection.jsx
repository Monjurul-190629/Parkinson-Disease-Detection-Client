import React from 'react';
import Detect from './Detect';

const Detection = () => {






    return (
        <div className='mb-20'>
            <div className='py-10 text-3xl font-bold text-slate-700 text-center'>
                To Detect you have to provide these data :
            </div>
            <div className='px-5 md:px-20 flex flex-col justify-center items-center md:flex-row '>
                <div className='md:border-r-2 px-5 py-1 border-blue-800'>
                    
                    <h3 className='py-5'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:Fo(Hz): </span>
                        <span className='text-[16px] font-semibold'>
                            Mean fundamental frequency in Hertz, representing the average rate of
                            vocal fold vibration
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:Fhi(Hz): </span>
                        <span className='text-[16px] font-semibold'>
                            Maximum fundamental frequency in Hertz, indicating the highest rate of
                            vocal fold vibration.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:Flo(Hz): </span>
                        <span className='text-[16px] font-semibold'>
                            Minimum fundamental frequency in Hertz, representing the lowest rate of
                            vocal fold vibration.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:Jitter(%): </span>
                        <span className='text-[16px] font-semibold'>
                            Percentage of jitter, a measure of frequency variation in vocal fold
                            vibration.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:Jitter(Abs): </span>
                        <span className='text-[16px] font-semibold'>
                            Absolute jitter, providing a quantitative measure of frequency variation
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:RAP: </span>
                        <span className='text-[16px] font-semibold'>
                            Relative amplitude perturbation, another measure of jitter
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:PPQ: </span>
                        <span className='text-[16px] font-semibold'>
                            Five-point period perturbation quotient, a measure of cycle-to-cycle variation
                            in pitch.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>Jitter:DDP: </span>
                        <span className='text-[16px] font-semibold'>
                            Jitter derived from differences in consecutive cycles, often referred to as Jitter
                            DDP.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:Shimmer: </span>
                        <span className='text-[16px] font-semibold'>
                            Measure of amplitude variation in vocal fold vibration.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:Shimmer(dB): </span>
                        <span className='text-[16px] font-semibold'>
                            Shimmer measured in decibels, providing a logarithmic scale of
                            amplitude variation.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>Shimmer:APQ3: </span>
                        <span className='text-[16px] font-semibold'>
                            Amplitude perturbation quotient calculated over the first three quartiles of
                            the shimmer.
                        </span>
                    </h3>
                </div>
                <div className='px-5 py-5'>
                   
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>Shimmer:APQ5: </span>
                        <span className='text-[16px] font-semibold'>
                            Amplitude perturbation quotient calculated over the first five quartiles of
                            the shimmer.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>MDVP:APQ: </span>
                        <span className='text-[16px] font-semibold'>
                            Amplitude perturbation quotient, a measure of amplitude variation.
                        </span>
                    </h3><h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>Shimmer:DDA: </span>
                        <span className='text-[16px] font-semibold'>
                            Shimmer derived from the differences in amplitude between consecutive
                            cycles
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>NHR: </span>
                        <span className='text-[16px] font-semibold'>
                            Noise-to-harmonics ratio, quantifying the ratio of non-harmonic to harmonic
                            components in the voice signal.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>HNR: </span>
                        <span className='text-[16px] font-semibold'>
                            Harmonics-to-noise ratio, measuring the ratio of harmonic to non-harmonic
                            components in the voice signal.
                        </span>
                    </h3><h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>RPDE: </span>
                        <span className='text-[16px] font-semibold'>
                            Recurrence period density entropy, a measure of the predictability and complexity of
                            a time series.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>DFA: </span>
                        <span className='text-[16px] font-semibold'>
                            A feature related to the nonlinear dynamic characteristics of the voice signa
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>spread1: </span>
                        <span className='text-[16px] font-semibold'>
                            Shimmer measured in decibels, providing a logarithmic scale of
                            amplitude variation.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>spread2: </span>
                        <span className='text-[16px] font-semibold'>
                            Another feature associated with the nonlinear dynamic characteristics of the voice
                            signal.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>D2: </span>
                        <span className='text-[16px] font-semibold'>
                            Correlation dimension, providing information about the geometric structure of a dynamic
                            system.
                        </span>
                    </h3>
                    <h3 className='py-1'>
                        <span className='text-[17px] font-semibold mr-5'>PPE:  </span>
                        <span className='text-[16px] font-semibold'>
                            Pitch period entropy, a measure of the unpredictability of pitch periods in a speech
                            signal.
                        </span>
                    </h3>
                </div>
            </div>


            <div>
                <Detect></Detect>
            </div>

        </div>
    );
};

export default Detection;