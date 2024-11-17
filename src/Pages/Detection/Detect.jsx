import React from 'react';

const Detect = () => {
    return (
        <div>
            <div className='hero min-h-screen pt-20 '>
                <div className='hero-content flex-col lg:flex-row-reverse border-2 border-slate-500 rounded-lg'>
                    <form className="card-body px-10 "  >
                        <h1 className="text-3xl font-semibold text-center mb-5">Detect</h1>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 '>
                            <div className="form-control">
                                <input type="text" name="Name" placeholder="Name" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="Age" placeholder="Age" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="Email" placeholder="Email" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="MDVPFo(Hz)" placeholder="MDVP:Fo(Hz)" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>

                            <div className="form-control">
                                <input type="text" name="MDVPFhi(Hz)" placeholder="MDVP:Fhi(Hz)" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="MDVPFlo(Hz)" placeholder="MDVP:Flo(Hz)" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="MDVPJitter(%)" placeholder="MDVP:Jitter(%)" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            
                            <div className="form-control">
                                <input type="text" name="MDVPJitter(Abs)" placeholder="MDVP:Jitter(Abs)" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="MDVPRAP" placeholder="MDVP:RAP" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="MDVPPPQ" placeholder="MDVP:PPQ" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="JitterDDP" placeholder="Jitter:DDP" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            
                            <div className="form-control">
                                <input type="text" name="MDVPShimmer" placeholder="MDVP:Shimmer" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="MDVPShimmer(dB)" placeholder="MDVP:Shimmer(dB)" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="ShimmerAPQ3" placeholder="Shimmer:APQ3" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="ShimmerAPQ5" placeholder="Shimmer:APQ5" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            
                            <div className="form-control">
                                <input type="text" name="MDVPAPQ" placeholder="MDVP:APQ" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="ShimmerDDA" placeholder="Shimmer:DDA" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="NHR" placeholder="NHR" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="HNR" placeholder="HNR" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            
                            <div className="form-control">
                                <input type="text" name="RPDE" placeholder="RPDE" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="DFA" placeholder="DFA" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="spread1" placeholder="spread1" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="spread2" placeholder="spread2" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            
                            <div className="form-control">
                                <input type="text" name="D2" placeholder="D2" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="PPE" placeholder="PPE" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                        </div>
                        <div className="form-control mt-5 md:mt-10">
                            <button className="btn hover:bg-blue-800  bg-blue-600 font-bold text-white ">Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Detect;