// import cup from '../assets/cup.svg'

export default function Home() {
  return (
    <>
      <div className="text-white">
        <div className="text-white flex flex-col justify-center items-center pt-16 pb-16 gap-4">
          <h1 className="text-3xl flex justify-center items-center">Fund Raizer
            <img className="invertImg" src="/cup.gif" alt="" width={44} />
          </h1>
          <p>A croudfunding website. Your Fans will fund you here!!</p>
          <div>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </div>
        </div>

        <div className="bg-white h-1 opacity-10"></div>
        
        <div className="py-24">
          <div className="flex flex-col justify-center items-center">
            <h2>Your Fans can buy you a chai!</h2>
            <div className="flex justify-between gap-14">
              <div className="flex flex-col justify-center items-center">
                <img src="/cup.gif" alt="" />
                <h3>Fund Yourself</h3>
                <p>Your fans are available for you to help you</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="/cup.gif" alt="" />
                <h3>Fund Yourself</h3>
                <p>Your fans are available for you to help you</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="/cup.gif" alt="" />
                <h3>Fund Yourself</h3>
                <p>Your fans are available for you to help you</p>
              </div>
            </div>

          </div>
        </div>
        
        <div className="bg-white h-1 opacity-10"></div>

        <div className="py-24">
          <div className="flex flex-col justify-center items-center">
            <h2>Learn More About Us</h2>
            <div className="flex justify-between gap-14">
              <div className="flex flex-col justify-center items-center">
                <img src="/cup.gif" alt="" />
                <h3>Fund Yourself</h3>
                <p>Your fans are available for you to help you</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="/cup.gif" alt="" />
                <h3>Fund Yourself</h3>
                <p>Your fans are available for you to help you</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="/cup.gif" alt="" />
                <h3>Fund Yourself</h3>
                <p>Your fans are available for you to help you</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
