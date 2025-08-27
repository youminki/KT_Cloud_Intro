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
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

                    .flex {
                      display: flex;
                      justify-content: space-between;
                    }

                    .stroke span {
                      position: relative;
                      color: #FFFFFF;
                    }
                    .stroke span::after {
                      content: attr(data-char);
                      position: absolute;
                      left: 0;
                      top: 0;
                      color: transparent;
                      z-index: -1;
                      -webkit-text-stroke-width: 3px;
                      -webkit-text-stroke-color: #FF0000;
                    }

                    .text-pressure-title {
                      color: #FFFFFF;
                    }
                    
                    .text-pressure-title span:hover {
                      font-weight: 400 !important;
                      font-stretch: 110% !important;
                      transform: scale(1.05);
                      transition: all 0.3s ease;
                    }
                  `}
                </style>
                <h1
                  className="text-pressure-title flex"
                  style={{
                    fontFamily: "Inter",
                    textTransform: "uppercase",
                    fontSize: "var(--text-8xl)",
                    lineHeight: 1,
                    transform: "scale(1, 1)",
                    transformOrigin: "center top",
                    margin: "0px",
                    textAlign: "center",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                    fontWeight: 700,
                    width: "100%",
                    letterSpacing: "0.05em",
                    wordBreak: "normal",
                  }}
                >
                  <span
                    data-char="C"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    C
                  </span>
                  <span
                    data-char="O"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    O
                  </span>
                  <span
                    data-char="M"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    M
                  </span>
                  <span
                    data-char="I"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    I
                  </span>
                  <span
                    data-char="N"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    N
                  </span>
                  <span
                    data-char="G"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    G
                  </span>
                  <span
                    data-char=" "
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                  </span>
                  <span
                    data-char=" "
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                  </span>
                  <span
                    data-char=" "
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                  </span>
                  <span
                    data-char=" "
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                  </span>
                  <span
                    data-char=" "
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                  </span>
                  <span
                    data-char=" "
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                  </span>
                  <span
                    data-char="S"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    S
                  </span>
                  <span
                    data-char="O"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    O
                  </span>
                  <span
                    data-char="O"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    O
                  </span>
                  <span
                    data-char="N"
                    style={{
                      display: "inline-block",
                      color: "rgb(255, 255, 255)",
                      transition: "font-weight 0.1s, font-stretch 0.1s",
                      opacity: 1,
                      fontWeight: 100,
                      fontStretch: "75%",
                      fontStyle: "normal",
                    }}
                  >
                    N
                  </span>
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
