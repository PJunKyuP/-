import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 md:pt-40 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-xl w-full text-center mb-16 animate-fade-in-up">
        <h2 className="text-3xl font-serif-kr mb-4">Inquiries</h2>
        <p className="text-neutral-500 font-light text-sm">
          For commissions, print inquiries, or collaborations. <br/>
          Please allow 2-3 business days for a response.
        </p>
        <a href="mailto:fordtbird1966@icloud.com" className="block mt-4 text-blue-900 hover:text-black transition-colors">
            fordtbird1966@icloud.com
        </a>
      </div>

      <form className="max-w-xl w-full space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }} onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
                <input 
                    type="text" 
                    placeholder=" "
                    className="peer w-full border-b border-neutral-200 py-2 outline-none focus:border-blue-900 transition-colors bg-transparent text-black z-10 relative"
                />
                <label className="absolute left-0 top-2 text-xs uppercase tracking-widest text-neutral-400 transition-all duration-300 peer-focus:-top-4 peer-focus:text-blue-900 peer-placeholder-shown:top-2 peer-focus:text-[10px] pointer-events-none">
                    Name
                </label>
            </div>
            <div className="group relative">
                <input 
                    type="email" 
                    placeholder=" "
                    className="peer w-full border-b border-neutral-200 py-2 outline-none focus:border-blue-900 transition-colors bg-transparent text-black z-10 relative"
                />
                <label className="absolute left-0 top-2 text-xs uppercase tracking-widest text-neutral-400 transition-all duration-300 peer-focus:-top-4 peer-focus:text-blue-900 peer-placeholder-shown:top-2 peer-focus:text-[10px] pointer-events-none">
                    Email
                </label>
            </div>
        </div>

        <div className="group relative">
            <textarea 
                rows={4}
                placeholder=" "
                className="peer w-full border-b border-neutral-200 py-2 outline-none focus:border-blue-900 transition-colors bg-transparent text-black z-10 relative resize-none"
            ></textarea>
            <label className="absolute left-0 top-2 text-xs uppercase tracking-widest text-neutral-400 transition-all duration-300 peer-focus:-top-4 peer-focus:text-blue-900 peer-placeholder-shown:top-2 peer-focus:text-[10px] pointer-events-none">
                Message
            </label>
        </div>

        <div className="flex justify-center pt-8">
            <button className="px-12 py-3 bg-neutral-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-blue-900 transition-colors duration-300">
                Send Message
            </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;