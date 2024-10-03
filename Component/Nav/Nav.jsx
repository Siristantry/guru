export function Nav() {
  return (
    <section className="w-full h-[10vh] bg-white">
      <div className="flex justify-between px-[6.5vw]">
        <div>
          <img src="/guruLogo.svg" alt="" className="h-[71px]" />
        </div>
        <div className="flex gap-[30px] items-center ">
          <div>About us</div>
          <div>A look at our work</div>
          <div>Try it out!</div>
          <div>Contact us</div>
        </div>
      </div>
    </section>
  );
}
