function Card({
  username = "NaN",
  post = "NaN",
  face = "https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg",
  myArr = "",
}) {
  return (
    <>
      <div class="mb-8.5 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 flex-row">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={face}
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">{username}</p>
            <p class="text-slate-500 font-medium">{post}</p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
          <span className="flex-col text-amber-300 block">{myArr}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
