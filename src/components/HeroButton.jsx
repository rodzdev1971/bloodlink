// import './herobutton.scss';

export default function HeroButton(){

    function clickHandler(){
        console.log('click')
      }

    return(
        <div className="mb-3">
          <p className="text-center my-4 min-[600px]:text-5xl text-4xl">Saving Lives, One Drop at a Time</p>
          <div className="flex justify-center">
            <div className="min-[600px]:py-2 min-[600px]:px-4 min-[600px]:mr-3 min-[600px]:text-[30px] text-[18px] mr-2 px-2 py-2 rounded-lg font-semibold text-stone-100 bg-blue-800 hover:bg-blue-600 hover:cursor-pointer" onClick={clickHandler}>Find Blood Now</div>
            <div className="min-[600px]:py-2 min-[600px]:px-4 min-[600px]:mr-3 min-[600px]:text-[30px] text-[18px] ml-2 px-2 py-2 rounded-lg font-semibold text-stone-100 bg-blue-800  hover:bg-blue-600 hover:cursor-pointer" onClick={clickHandler}>Register as Donor</div>
          </div>
        </div>
    )
}