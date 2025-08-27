import React, { useState, useEffect } from "react";

const ComingSoon = (): React.JSX.Element => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 2025년 8월 28일 목요일까지의 모집 기간
  const targetDate = new Date("2025-08-28T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotificationSignup = () => {
    alert("오픈 알림 신청이 완료되었습니다!");
  };

  const handleInquiry = () => {
    alert("문의하기 기능이 준비 중입니다.");
  };

  const handleViewAllCourses = () => {
    alert("모집 과정 전체보기 기능이 준비 중입니다.");
  };

  return (
    <div className="relative z-30 min-h-screen flex items-center justify-center px-4 md:px-6">
      <div
        className="text-center w-full max-w-none flex flex-col items-center justify-center mx-auto"
        style={{ maxWidth: "var(--container-3xl)" }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          {/* Countdown Timer */}
          <div className="mb-6 flex flex-col items-center justify-center w-full">
            <div className="mb-6 flex justify-center">
              <div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div className="flex items-center gap-1.5 text-white/90">
                  <span className="text-md font-normal">
                    {timeLeft.days.toString().padStart(2, "0")}D
                  </span>
                  <span className="text-white/60">:</span>
                  <span className="text-md font-normal">
                    {timeLeft.hours.toString().padStart(2, "0")}H
                  </span>
                  <span className="text-white/60">:</span>
                  <span className="text-md font-normal">
                    {timeLeft.minutes.toString().padStart(2, "0")}M
                  </span>
                  <span className="text-white/60">:</span>
                  <span className="text-md font-normal">
                    {timeLeft.seconds.toString().padStart(2, "0")}S
                  </span>
                </div>
              </div>
            </div>

            {/* COMING SOON Title */}
            <div className="h-12 md:h-21 px-2 w-full flex items-center justify-center">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                }}
              >
                <style>
                  {`
                    .text-pressure-title {
                      font-family: Inter, sans-serif;
                      text-transform: uppercase;
                      font-size: clamp(2.5rem, 12vw, 6rem);
                      line-height: 1;
                      transform: scale(1, 1);
                      transform-origin: center top;
                      margin: 0px;
                      text-align: center;
                      user-select: none;
                      white-space: normal;
                      font-weight: 400;
                      width: 100%;
                      letter-spacing: 0.02em;
                      word-break: break-word;
                    }
                    
                    .text-pressure-title span {
                      display: inline-block;
                      color: rgb(255, 255, 255);
                      transition: font-weight 0.1s, font-stretch 0.1s;
                      opacity: 1;
                      font-weight: 200;
                      font-stretch: 100%;
                      font-style: normal;
                    }
                    
                    .text-pressure-title span:hover {
                      font-weight: 400;
                      font-stretch: 110%;
                    }
                  `}
                </style>
                <h1 className="text-pressure-title flex">
                  <span data-char="C">C</span>
                  <span data-char="O">O</span>
                  <span data-char="M">M</span>
                  <span data-char="I">I</span>
                  <span data-char="N">N</span>
                  <span data-char="G">G</span>
                  <span data-char=" "> </span>
                  <span data-char=" "> </span>
                  <span data-char=" "> </span>
                  <span data-char=" "> </span>
                  <span data-char=" "> </span>
                  <span data-char=" "> </span>
                  <span data-char="S">S</span>
                  <span data-char="O">O</span>
                  <span data-char="O">O</span>
                  <span data-char="N">N</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Description and Buttons */}
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 text-center leading-relaxed mb-4 md:mb-4 px-4">
              kt cloud가 만든 <br className="md:hidden" />
              실전형 테크업 교육이 곧 찾아옵니다.
            </p>

            <div className="text-lg md:text-xl leading-relaxed mb-10 px-4 flex justify-center">
              <div
                className="shiny-text text-lg md:text-xl"
                style={{ animationDuration: "3s" }}
              >
                모집 일정 ㅣ 25.8.28 (목) - 25.9.11 (목)
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row items-center justify-center gap-3 md:gap-6 w-full max-w-lg mx-auto">
              <button
                onClick={handleNotificationSignup}
                className="inline-flex items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-3 px-3 md:px-8 py-3 md:py-4 text-sm md:text-lg bg-white hover:bg-white/90 text-black rounded-full font-semibold transition-all duration-300 border-0 h-12 md:h-14 cursor-pointer flex-1 whitespace-nowrap"
              >
                오픈 알림 신청하기
              </button>
              <button
                onClick={handleViewAllCourses}
                className="flex items-center !justify-center text-center px-3 md:px-8 py-3 md:py-4 text-sm md:text-lg text-white/60 rounded-full font-semibold transition-all duration-300 h-12 md:h-14 cursor-pointer flex-1 hover:text-white/80 whitespace-nowrap"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                모집 과정 전체보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
