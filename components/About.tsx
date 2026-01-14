import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 md:pt-40 px-6 md:px-12 pb-20 flex flex-col md:flex-row gap-12 items-start">
      <div className="w-full md:w-1/3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="aspect-[3/4] w-full bg-neutral-100 overflow-hidden relative group">
           <img 
            src="https://picsum.photos/id/338/600/800" 
            alt="David Kim" 
            className="object-cover w-full h-full grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 ring-1 ring-inset ring-black/5"></div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 space-y-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="border-b border-neutral-100 pb-8">
            <h2 className="text-4xl font-serif-kr text-black mb-3">김다윗 <span className="text-2xl text-neutral-400 font-light ml-2 font-sans">David Kim</span></h2>
            <p className="text-sm text-neutral-400 font-mono tracking-widest">1996. 11. 24</p>
            
            <div className="mt-8 w-full flex justify-center">
                <p className="font-serif-kr text-neutral-600 text-center italic leading-relaxed text-[15px]">
                    "To rediscover the world<br/>
                    한 사람은 한 세계라고 믿는다. 더 많은 세계를 발견하기 위해 카메라를 든다."
                </p>
            </div>
        </div>
        
        <div className="space-y-8 text-neutral-800 leading-loose font-light text-sm md:text-[15px]">
          <p className="font-serif-kr break-keep">
            한국의 여성 포토 저널리스트 겸 기획자. 영상 기획자로 일을 시작해 현재 산업 및 노사관계 월간 전문지《참여와혁신》소속 사진 기자 겸 프리랜서 포토그래퍼로 활동하고 있다. 빛은 늘 깨진 틈으로 들어오고, 가장 어두운 곳에서 밝게 빛난다고 믿는 사람.
          </p>
          <p className="text-neutral-500 break-keep leading-loose">
            韓国出身の女性フォトジャーナリスト／企画者で、産業・労働関係を扱う韓国のメディア《참여와 혁신》で写真記者として働き、フリーでも活動している。光はひび割れた隙間から差し込み、最も暗い場所でこそ強く輝くと信じる人。
          </p>
        </div>

        <div className="pt-8">
            <ul className="space-y-4 text-sm font-light text-neutral-800">
                <li className="flex items-center gap-5 group">
                    <span className="w-5 flex justify-center text-neutral-400 group-hover:text-blue-900 transition-colors duration-300">
                        {/* Map Pin Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </span>
                    <span>Seoul, Korea</span>
                </li>
                <li className="flex items-center gap-5 group">
                    <span className="w-5 flex justify-center text-neutral-400 group-hover:text-blue-900 transition-colors duration-300">
                        {/* Phone Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </span>
                    <span>+82 10-2710-8706</span>
                </li>
                <li className="flex items-center gap-5 group">
                    <span className="w-5 flex justify-center text-neutral-400 group-hover:text-blue-900 transition-colors duration-300">
                        {/* Envelope Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </span>
                    <a href="mailto:fordtbird1966@icloud.com" className="hover:text-blue-900 transition-colors">fordtbird1966@icloud.com</a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;