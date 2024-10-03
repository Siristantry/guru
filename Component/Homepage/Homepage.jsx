export function Homepage() {
  return (
    <section className="bg-[#FFF5EA] w-full h-fit">
      <div className="flex justify-between px-[5vw]">
        <div className="flex items-center justify-center flex-col">
          <span className="text-[80px]">
            Hey,<span className="text-[#7F4639]">Guru.ai</span> here!<br></br>
          </span>
          <span className="text-[40px]">
            Use the power of weapon’s grade AI to
            <br></br>
            create the perfect jingle for your<br></br> brand!
          </span>
        </div>
        <div>
          <img src="/image 1.svg" alt="" />
        </div>
      </div>
      <div className="text-[60px] text-[#7F4639] flex justify-center mt-[20px]">
        Why Choose Us?
      </div>
      <div className="flex justify-between px-[5vw] mt-[20px]">
        <div className="w-[27vw] h-[47vh] bg-white rounded-lg shadow-md   ">
          <div className="flex flex-col gap-y-[20px] items-center mt-[50px]">
            <img src="/target.svg" alt="" className="h-[19vh]" />
            <div className="text-[24px] text-[#7F4639] font-medium">
              Target group
            </div>
            <div>
              Get custom jingles that appeal to your brand’s<br></br> specific
              target group
            </div>
          </div>
        </div>
        <div className="w-[27vw] h-[47vh] bg-white rounded-lg shadow-md ">
          <div className="flex flex-col gap-y-[20px] items-center mt-[40px]">
            <img src="/personalized.svg" alt="" className="h-[19vh]" />
            <div className="text-[24px] text-[#7F4639] font-medium">
              Personalization
            </div>
            <div>
              Chose from a variety of “one-of-one” tunes<br></br> generated
              specifically for what your brand<br></br> stands for
            </div>
          </div>
        </div>
        <div className="w-[27vw] h-[47vh] bg-white rounded-lg shadow-md ">
          {" "}
          <div className="flex flex-col gap-y-[20px] items-center mt-[50px]">
            <img src="/emotion.svg" alt="" className="h-[19vh]" />
            <div className="text-[24px] text-[#7F4639] font-medium">
              Emotions
            </div>
            <div>
              Jingles and music created for your brand<br></br> emotion, image
              and feel
            </div>
          </div>
        </div>
      </div>
      <div className="text-[60px] text-[#7F4639] flex justify-center mt-[20px]">
        What music by guru.ai sounds like
      </div>
      <div className="flex justify-center mt-[20px]">
        <div className="w-[90%] h-[74vh] bg-white border-black border-[3px] rounded-2xl  ">
          <div className="flex flex-col gap-y-[8vh]">
            <div className="flex justify-between px-[2vw] items-center mt-[20px]">
              <div className="h-[14vh] w-[36vw] bg-[#9C6644] rounded-lg">
                <div className="flex items-center justify-center gap-[10px] px-[20px] mt-[20px]">
                  <div>
                    <img src="/chat.svg" alt="" />
                  </div>
                  <div className="text-[20px] text-white">
                    Lively, Uplifting, Energetic, Refreshing, Modern, Warm,
                    Cultural
                  </div>
                </div>
              </div>
              <div>
                <img src="/music.svg" alt="" />
              </div>
            </div>
            <div className="flex justify-between px-[2vw] items-center">
              <div className="h-[14vh] w-[36vw] bg-[#7F5539] rounded-lg">
                {" "}
                <div className="flex items-center justify-center gap-[10px] px-[20px] mt-[20px]">
                  <div>
                    <img src="/chat.svg" alt="" />
                  </div>
                  <div className="text-[20px] text-white">
                    Rich, Inviting, Warm, Community-focused
                  </div>
                </div>
              </div>
              <div>
                <img src="/music.svg" alt="" />
              </div>
            </div>
            <div className="flex justify-between px-[2vw] items-center">
              <div className="h-[14vh] w-[36vw] bg-[#B08968] rounded-lg">
                {" "}
                <div className="flex items-center justify-center gap-[10px] px-[20px] mt-[20px]">
                  <div>
                    <img src="/chat.svg" alt="" />
                  </div>
                  <div className="text-[20px] text-white">
                    Dynamic, Fun, Playful, Engaging, Tech-savvy, Progressive,
                    Cheerful, Joyful, Catchy
                  </div>
                </div>
              </div>
              <div>
                <img src="/music.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
