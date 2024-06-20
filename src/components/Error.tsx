import { FaPaperPlane } from 'react-icons/fa6';

const Error: React.FC = () => {
  return (
    <section>
      <div>
        <div>
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <h1 className="text-center text-[12rem] text-[#ee9403d8]">404</h1>

              <div className=" flex items-center justify-center flex-col gap-3">
                <h1 className="text-xl">
                  Looks like you're <span className="font-semibold">LOST!</span>
                </h1>
                <p>
                  The page you are looking for is not
                  <span className="font-semibold"> yet</span> available!
                </p>
                <a href="/">
                  <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#39AD31] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-[#2f8f28] active:scale-105dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
                    Go Back
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
