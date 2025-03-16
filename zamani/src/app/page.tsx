export default function Page() {
  return (
    <>
      <section className="container mx-auto mt-10 px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* تصویر دکتر - در موبایل اول نمایش داده می‌شود */}
          <div className="order-1 md:order-2 flex justify-center ">
            <img
              src="/img/photo_2025-03-16_19-47-31.jpg"
              alt="دکتر گلشاه"
              className="w-full max-w-lg rounded-lg"
            />
          </div>

          {/* متن و اطلاعات - در موبایل دوم نمایش داده می‌شود */}
          <div className="order-2 md:order-1 text-center md:text-right ">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-5 text-center items-center">
              ازمایشگاه پارس طب
            </h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto md:max-w-7xl mb-6" />

            {/* توضیحات بیشتر */}
            <p className=" leading-relaxed px-4 sm:px-8 font-bold text-black">
              آزمایشگاه پارس طب از سال 1398 آغاز به کار کرده و با بهترین و کاملترین تجهیزات روز آزمایشگاهی و با بهره گیری از پرسنل مجرب و متعهد آزمایشگاهی، در حال خدمت رسانی به مردم می باشد.
            </p>

            {/* متن بیشتر اضافه شده */}
            <p className=" leading-relaxed px-4 sm:px-8 font-bold text-black">
              گروه آزمایشگاهی پارس طب، پس از ۵ سال تلاش بیوقفه و با لطف و عنایت پروردگار متعال، در راستای کمک به تشخیص صحیح و دقیق بیماریها، تحقق اهداف پزشکان محترم، حفظ و ارتقای سطح سلامت جامعه، و افزایش رضایتمندی بیماران و پزشکان، از تجهیزات مدرن بهرهگیری کرده است.            </p>

            {/* خط آبی زیر متن */}


            {/* دکمه واتساپ */}
            <div className="flex flex-wrap justify-end gap-4 mt-5">
              <a
                href="https://wa.me/+989122039774"
                target="_blank"
                rel="nofollow"
                className="inline-flex items-center w-64 h-14 p-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z" />
                </svg>
                دریافت مشاوره رایگان در واتساپ
              </a>
              <a
                href="https://wa.me/+989122039774"
                target="_blank"
                rel="nofollow"
                className="inline-flex items-center w-64 h-14 p-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z" />
                </svg>
                ارتباط باهوش مصنوعی
              </a>
            </div>
          </div>
        </div>
      </section>



      <section className="text-center justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 my-8 px-12">
          خدمات پارس طب
        </h2>
      </section>


      <section className="px-20 sm:px-32 md:px-16 lg:px-96">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 md:p-12 lg:p-16 ">
          {/* خدمات لمینت */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex bg-white  flex-col justify-start items-center border-3 border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3  border-blue-500 rounded-full bg-gradient-to-r bg-amber-50 ">
              <img
                src="/img/ایکن1.png"
                alt=" بیوشیمی"
                className="w-20 h-20 rounded-full"
              />
            </span>

            <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              بیوشیمی بالینی
            </h1>
            <p className="py-2  text-center text-sm text-black font-bold">
              لمینت دندان یک روش زیبایی است که با استفاده از پوشش‌های نازک سرامیکی یا کامپوزیتی به دندان‌ها فرم می‌دهد.
            </p>
          </div>

          {/* ایمپلنت دندانی */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-blue-500 rounded-full bg-gradient-to-r bg-amber-50">
              <img
                src="/img/ایکن3.png"
                alt="ایمپلنت دندانی"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              انگل شناسی
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              ایمپلنت دندانی یک جایگزین دائمی برای دندان‌های از دست رفته است.
            </p>
          </div>


          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-blue-500 rounded-full bg-gradient-to-r bg-amber-50">
              <img
                src="/img/ایکن4.png"
                alt="درمان ریشه"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              هماتولوژی
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              درمان ریشه برای دندان‌های آسیب دیده یا عفونی ضروری است.
            </p>
          </div>
        </div>
      </section>

      <section className="px-20 sm:px-28 md:px-16 lg:px-96">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 md:p-12 lg:pt-1">
          {/* خدمات میکروبیولوژی */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-blue-500 rounded-full bg-gradient-to-r bg-amber-50">
              <img
                src="/img/ایکن5.png"
                alt="میکروبیولوژی "
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              میکروبیولوژی
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              لمینت دندان یک راه حل مناسب برای کسانی است که به دنبال بهبود زیبایی و ظاهر دندان‌های خود هستند.
            </p>
          </div>

          {/*  انعقاد خون */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-blue-500 rounded-full bg-gradient-to-r bg-amber-50">
              <img
                src="/img/ایکن 6.png"
                alt=" انعقاد"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              انعقاد
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              ایمپلنت‌ها یک راهکار عالی برای بازیابی عملکرد دندان از دست رفته هستند.
            </p>
          </div>

          {/* هرمون شناسی  */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-blue-500 rounded-full bg-gradient-to-r bg-amber-50">
              <img
                src="/img/ایکن 8.png"
                alt="همرمون شناسی ه"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              هرمون شناسی
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              همرمون شناسی ه برای دندان‌های آسیب دیده یا عفونی ضروری است.
            </p>
          </div>
        </div>
      </section>



      {/*  دربراه ما */}
      <section>
        <section>
          <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
              <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                  <div className="lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <img
                      className="rounded-xl object-cover w-full sm:w-3/4 md:w-2/3 lg:min-w-[800px] xl:w-1/2 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[400px]"
                      src="/img/پارس طب2.jpg"
                      alt="about Us image"
                    />
                  </div>
                </div>

                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                  <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        درباه آزمايشگاه تخصصی تشخیص طبی پارس طب
                      </h2>
                      <p className="text-gray-500  text-base font-bold leading-relaxed lg:text-start text-center">
                        آزمایشگاه پارس طب، با بهره‌گیری از نیروی انسانی مجرب و متخصصین علوم آزمایشگاهی بالینی، از سال ۱۳۹۸ با رویکردی بیمارمحور و عدالت‌محور، خدمات خود را به مراجعین گرامی ارائه می‌دهد. این مجموعه با هدف تشخیص دقیق و به‌موقع بیماری‌ها، انجام آزمایشات عمومی و تخصصی در کوتاه‌ترین زمان ممکن، تکریم مراجعین و رعایت عدالت در برخورد با همه افراد، فعالیت می‌کند.

                        همچنین، آزمایشگاه پارس طب با تعهد به ارتقای کیفیت خدمات، حفاظت از محیط زیست از طریق فرآیندهای سبز و حمایت از بیماران نیازمند در همکاری با نهادهای خیریه، همواره در مسیر تعالی و ارائه خدمات برتر گام برمی‌دارد. بازخوردهای ارزشمند مراجعین گرامی، راهنمای ما در بهبود مستمر خدمات و افزایش رضایت‌مندی است.

                        ماموریت ما: تشخیص دقیق، کاهش زمان انتظار و ارائه خدمات شایسته به همه هموطنان، همراه با حفظ محیط زیست و حمایت از اقشار آسیب‌پذیر.

                        ---
                        این متن مختصر، سئو شده و به‌روزرسانی شده است که هم اهداف مجموعه را به وضوح بیان می‌کند و هم برای موتورهای جستجو بهینه‌سازی شده است.د.
                      </p>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-center sm:gap-15 gap-15 inline-flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          12+
                        </h3>
                        <h6 className="text-gray-500 text-base font-bold leading-relaxed">
                          خدمات پارس طب
                        </h6>
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          125+
                        </h4>
                        <h6 className="text-gray-500 text-base font-bold leading-relaxed">
                          افتخارات
                        </h6>
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          1000+
                        </h4>
                        <h6 className="text-gray-500 text-base font-bold leading-relaxed">
                          مشتری های موفق
                        </h6>
                      </div>
                    </div>
                  </div>
                  <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">

                  </button>
                </div>
              </div>
            </div>
            <section className="relative  overflow-hidden mt-10">
              {/* Blue Crescent Shape (Halo) */}
              <div className="absolute top-0 left-0 w-full transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 200"
                  preserveAspectRatio="none"
                  className="w-full h-32"
                >
                  <path
                    className="fill-current text-blue-500"
                    d="M0,0c0,0,250,200,500,200s500-200,500-200v200H0V0z"
                  />
                </svg>
              </div>
              {/* Content */}
              <div className="container mx-auto px-4 mt-20 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-4xl font-bold mb-4 text-black">خدمات دیگر ما درزمینه هوش مصنوعی</h1>
                  <div className="w-36 h-1 bg-blue-500 font-bold mb-4" />
                  <p className="text-gray-600 mb-6 font-bold">

                    ماموریت ما در آزمایشگاه پارس طب، ارائه خدمات شایسته به همه هموطنان، تشخیص دقیق و به‌موقع بیماری‌ها، کاهش زمان انتظار و حفظ رضایت‌مندی مراجعین است. بازخوردهای ارزشمند شما، راهنمای ما در بهبود مستمر خدمات و دستیابی به بالاترین استانداردهای جهانی است.
                  </p>

                  <p className="text-gray-600 mb-6 font-bold">
                    جهت دریافت وقت مشاوره رایگان و اطلاع از طرح درمان خدمات تخصصی پارس طب  تماس بگیرید
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="tel:+989120399715"
                      className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                      تماس با ما: 07132277256
                    </a>
                    <a
                      href="tel:+989120399715"
                      className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300"
                    >
                      ارتباط باهوش مصنوعی
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>



        <section className="text-center justify-center ">
          <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <div className="w-full">
              <div className="flex flex-col w-full mb-10 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <div className="card-content">
                          <span className="card-number text-blue-500">01</span>
                        </div>
                        <h3 className="my-2 ml-3 text-lg font-bold text-blue-800">
                          تفسیر ازمایش
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-700">
                        تفسیر آزمایش پیشرفته که از هوش مصنوعی بهره می‌برد. این سیستم با استفاده از الگوریتم‌های
                        هوشمند و داده‌های بزرگ، قادر است تفسیر دقیقی از نتایج آزمایش‌های پزشکی ارائه دهد.
                        هدف اصلی این فناوری، کاهش خطاهای انسانی و افزایش دقت در تحلیل نتایج است.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <div className="card-content">
                          <span className="card-number text-blue-500">02</span>
                        </div>
                        <h3 className="my-2 ml-3 text-lg font-bold text-blue-800">
                          ارائه برنامه غذایی
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-700">
                        این سیستم علاوه بر تفسیر نتایج آزمایش، یک قابلیت پیشرفته دیگر نیز دارد: ارائه برنامه غذایی شخصی‌سازی‌شده بر اساس نتایج آزمایش‌های پزشکی.
                        این ویژگی با تحلیل دقیق اطلاعات شما، مانند کمبودهای تغذیه‌ای، سطح ویتامین‌ها، مواد معدنی و وضعیت کلی سلامت، یک برنامه غذایی مناسب برای بهبود سلامت و عملکرد بدن پیشنهاد می‌دهد.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mb-5 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <div className="card-content">
                          <span className="card-number text-blue-500">03</span>
                        </div>
                        <h3 className="my-2 ml-3 text-lg font-bold text-blue-800">
                          ارائه برنامه بهداشتی
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-700">
                        شخصی‌سازی بر اساس آزمایش‌ها: برنامه‌های بهداشتی که مطابق با شرایط سلامتی و مشکلات احتمالی فرد، مانند حساسیت‌ها، ضعف سیستم ایمنی، یا مشکلات پوستی ارائه می‌شوند.
                        راهنمایی برای مراقبت روزانه: پیشنهاد روتین‌های روزانه شامل مراقبت‌های پوستی، بهداشت دهان و دندان، و نکات مرتبط با خواب و استراحت.
                        پیشگیری از بیماری‌ها: توصیه‌هایی برای تقویت سیستم ایمنی، کاهش استرس، و بهبود شرایط کلی بدن.
                        تمرکز بر بهداشت روانی: ارائه راهکارهایی برای کاهش اضطراب و استرس، همراه با تمرینات مدیتیشن و تمرکز.
                        پشتیبانی از سبک زندگی فعال: برنامه‌هایی برای افزایش فعالیت بدنی و ایجاد تعادل بین کار و زندگی.
                        این سیستم با رویکرد جامع به سلامتی، نه‌تنها بر درمان بلکه بر پیشگیری و ارتقای کیفیت زندگی تمرکز دارد، تا کاربران بتوانند در محیطی سالم‌تر و با انرژی بیشتر زندگی کنند.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-300 rounded-lg" />
                    <div className="relative h-full p-5 bg-white border-2 border-blue-300 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <div className="card-content">
                          <span className="card-number text-blue-500">04</span>
                        </div>
                        <h3 className="my-2 ml-3 text-lg font-bold text-blue-800">
                          شناسایی مقاومت دارویی
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-700">
                        تحلیل پیشرفته داده‌ها: بررسی نتایج آزمایش‌ها برای شناسایی عوامل میکروبی یا ویروسی مقاوم به دارو.
                        توصیه درمانی دقیق: ارائه پیشنهادهای درمانی متناسب با وضعیت بیمار و داروهای مؤثر.
                        پیشگیری از عوارض جانبی: کاهش خطرات ناشی از مصرف داروهای غیرمؤثر یا ایجاد مقاومت بیشتر.
                        کمک به درمان‌های هدفمند: تمرکز بر داروهایی که بیشترین تأثیر را در درمان بیماری دارند.
                        به‌روزرسانی مداوم اطلاعات: استفاده از پایگاه داده‌های جهانی برای شناسایی الگوهای جدید مقاومت دارویی.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg" />
                    <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <div className="card-content">
                          <span className="card-number text-blue-500">05</span>
                        </div>
                        <h3 className="my-2 ml-3 text-lg font-bold text-blue-800">
                          دسترسی سریع واسان
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-700">
                        این سیستم هوش مصنوعی با طراحی مدرن و دسترسی آسان، یک ابزار جامع برای ارائه اطلاعات پزشکی، تغذیه‌ای، بهداشتی و درمانی است.
                        این پلتفرم به کاربران اجازه می‌دهد تا در هر زمان و مکان، سوالات خود را درباره وضعیت سلامت، برنامه‌های غذایی،
                        مراقبت‌های بهداشتی و حتی تأثیر داروها بر بدنشان، به راحتی مطرح کنند و پاسخ‌های دقیق و شخصی‌سازی‌شده دریافت کنند.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>



      <section>
        <section className="relative  overflow-hidden mt-10">
          {/* Blue Crescent Shape (Halo) */}

          {/* Content */}
          <div className="container mx-auto px-4 mt-20 relative z-10">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold mb-4 text-black">بیمه های طرف قراردادما</h1>
              <div className="w-36 h-1 bg-blue-500 font-bold mb-4" />

            </div>
          </div>
        </section>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6 px-14 lg:px-96 items-center justify-center">
          <div>
            <img src="/img/1.png" alt="تصویر 1" className="w-28 h-28" />
          </div>
          <div>
            <img src="/img/2.png" alt="تصویر 2" className="w-28 h-28" />
          </div>
          <div>
            <img src="/img/3.png" alt="تصویر 3" className="w-28 h-28" />
          </div>
          <div>
            <img src="/img/4.png" alt="تصویر 4" className="w-28 h-28" />
          </div>
          <div>
            <img src="/img/5.png" alt="تصویر 5" className="w-28 h-28" />
          </div>
          <div>
            <img src="/img/6.png" alt="تصویر 6" className="w-28 h-28" />
          </div>
        </div>
        <section className="relative  overflow-hidden mt-10">
          {/* Blue Crescent Shape (Halo) */}
          <div className="absolute top-0 left-0 w-full transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              className="w-full h-32"
            >
              <path
                className="fill-current text-blue-500"
                d="M0,0c0,0,250,200,500,200s500-200,500-200v200H0V0z"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="container mx-auto px-4 mt-20 relative z-10">
            <div className="flex flex-col items-center text-center">
            </div>
          </div>
        </section>
      </section>


      {/*تماس باما*/}
      <section className="px-5 mt-10">
        <div className="container mx-auto py-8 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* کارت 1 - آدرس */}
            <div className="flex h-24 bg-white rounded-xl overflow-hidden shadow-lg items-center">
              <svg width={16} height={96} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 8 0 
       Q 4 4.8, 8 9.6 
       T 8 19.2 
       Q 4 24, 8 28.8 
       T 8 38.4 
       Q 4 43.2, 8 48 
       T 8 57.6 
       Q 4 62.4, 8 67.2 
       T 8 76.8 
       Q 4 81.6, 8 86.4 
       T 8 96 
       L 0 96 
       L 0 0 
       Z"
                  fill="#93C5FD"
                  stroke="#93C5FD"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>

              <div className="mx-2.5 overflow-hidden w-full">
                <p className="mt-1.5 text-xl font-bold text-blue-700 leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                  آدرس ما
                </p>
                <p className="overflow-hidden leading-5 break-all text-blue-400 max-h-10">
                  تهران، خیابان آزادی، پلاک ۱۲۳
                </p>
              </div>
              <button className="w-16 cursor-pointer focus:outline-none">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.5"
                    d="M19.7165 20.3624C21.143 19.5846 22 18.5873 22 17.5C22 16.3475 21.0372 15.2961 19.4537 14.5C17.6226 13.5794 14.9617 13 12 13C9.03833 13 6.37738 13.5794 4.54631 14.5C2.96285 15.2961 2 16.3475 2 17.5C2 18.6525 2.96285 19.7039 4.54631 20.5C6.37738 21.4206 9.03833 22 12 22C15.1066 22 17.8823 21.3625 19.7165 20.3624Z"
                    fill="#3B82F6"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                    fill="#3B82F6"
                  />
                </svg>
              </button>
            </div>

            {/* کارت 2 - شماره تماس */}
            <div className="flex h-24 bg-white rounded-xl overflow-hidden shadow-lg items-center">
              <svg width={16} height={96} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 8 0 
       Q 4 4.8, 8 9.6 
       T 8 19.2 
       Q 4 24, 8 28.8 
       T 8 38.4 
       Q 4 43.2, 8 48 
       T 8 57.6 
       Q 4 62.4, 8 67.2 
       T 8 76.8 
       Q 4 81.6, 8 86.4 
       T 8 96 
       L 0 96 
       L 0 0 
       Z"
                  fill="#93C5FD"
                  stroke="#93C5FD"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>

              <div className="mx-2.5 overflow-hidden w-full">
                <p className="mt-1.5 text-xl font-bold text-blue-700 leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                  شماره ما
                </p>
                <p className="overflow-hidden leading-5 break-all text-blue-400 max-h-10">
                  +98967676576
                  <br />
                  0715676645
                </p>
              </div>
              <button className="w-16 cursor-pointer focus:outline-none">
                <svg viewBox="0 0 1024 1024" fill="#3B82F6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.3 426.7c-94.1 0-170.7-76.6-170.7-170.7S119.2 85.3 213.3 85.3 384 161.9 384 256s-76.6 170.7-170.7 170.7z m0-256c-47.1 0-85.3 38.3-85.3 85.3s38.3 85.3 85.3 85.3 85.3-38.3 85.3-85.3-38.2-85.3-85.3-85.3zM768 981.3c-94.1 0-170.7-76.6-170.7-170.7S673.9 640 768 640s170.7 76.6 170.7 170.7S862.1 981.3 768 981.3z m0-256c-47.1 0-85.3 38.3-85.3 85.3 0 47.1 38.3 85.3 85.3 85.3s85.3-38.3 85.3-85.3-38.2-85.3-85.3-85.3z" />
                  <path d="M746.7 981.3c-236 0-656.7-416.9-703.4-697-3.9-23.2 11.8-45.2 35.1-49.1 23.4-3.9 45.2 11.8 49.1 35.1C166.4 504.2 554.1 896 746.7 896c23.6 0 42.7 19.1 42.7 42.7s-19.2 42.6-42.7 42.6z" />
                  <path d="M781.8 543.2c-14.1 0-27.9-7-36.1-19.8-60.1-94.8-141.6-177.3-235.7-238.6-19.7-12.9-25.3-39.3-12.4-59 12.9-19.7 39.3-25.3 59.1-12.4 104.2 67.9 194.5 159.3 261.1 264.4 12.6 19.9 6.7 46.3-13.2 58.9-7.1 4.4-15 6.5-22.8 6.5zM945.2 485.7c-14.7 0-29-7.6-36.9-21.2-81.8-140.8-199-259.2-338.9-342.5-20.2-12.1-26.9-38.2-14.8-58.5 12-20.2 38.2-26.9 58.5-14.8 152.4 90.7 280 219.7 369 372.9 11.8 20.4 4.9 46.5-15.5 58.3-6.7 4-14.1 5.8-21.4 5.8z" />
                </svg>
              </button>
            </div>

            {/* کارت 3 - ایمیل */}
            <div className="flex h-24 bg-white rounded-xl overflow-hidden shadow-lg items-center">
              <svg width={16} height={96} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 8 0 
       Q 4 4.8, 8 9.6 
       T 8 19.2 
       Q 4 24, 8 28.8 
       T 8 38.4 
       Q 4 43.2, 8 48 
       T 8 57.6 
       Q 4 62.4, 8 67.2 
       T 8 76.8 
       Q 4 81.6, 8 86.4 
       T 8 96 
       L 0 96 
       L 0 0 
       Z"
                  fill="#93C5FD"
                  stroke="#93C5FD"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>

              <div className="mx-2.5 overflow-hidden w-full">
                <p className="mt-1.5 text-xl font-bold text-blue-700 leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                  ایمیل ما
                </p>
                <p className="overflow-hidden leading-5 break-all text-blue-400 max-h-10">
                  info@parsteb.com
                </p>
              </div>
              <button className="w-16 cursor-pointer focus:outline-none">
                <svg viewBox="0 -0.5 1025 1025" fill="#3B82F6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M509.3 606.2c-27.9 0-55.6-9-78.7-26.9L36.4 245.7c-18-15.2-20.2-42.2-5-60.1 15.2-18 42.2-20.2 60.1-5L484.3 513c14.4 11.1 36.5 11.1 52.4-1.2l396.2-331.4c18.1-15.1 45-12.8 60.1 5.4 15.1 18.1 12.7 45-5.4 60.1L590.1 578.3c-24.1 18.7-52.6 27.9-80.8 27.9z" />
                  <path d="M894.8 938.6H129.4c-71.3 0-129.4-58-129.4-129.4v-552c0-71.3 58-129.4 129.4-129.4h765.4c71.3 0 129.4 58 129.4 129.4v552.1c0 71.3-58.1 129.3-129.4 129.3zM129.4 213.2c-24.3 0-44 19.8-44 44v552.1c0 24.3 19.8 44 44 44h765.4c24.3 0 44-19.8 44-44V257.2c0-24.3-19.8-44-44-44H129.4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:h- gap-8">
            {/* نقشه گوگل */}
            <div className="flex-1 h-[700px] rounded-lg overflow-hidden shadow-lg relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=شیراز، بلوار گلستان، حد فاصل کلبه و چهارراه ادبیات، نبش کوچه هشتم، ساختمان آدرینا، طبقه ۶+(آزمایشگاه پارس طب)&ie=UTF8&t=&z=15&iwloc=B&output=embed"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.9)" }}
              />
            </div>

            {/* فرم تماس */}
            <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">ارتباط با ما</h2>
              <p className="text-blue-700 mb-6">
                برای دریافت اطلاعات بیشتر یا رزرو نوبت، فرم زیر را پر کنید. ما در سریع‌ترین زمان ممکن با شما تماس خواهیم گرفت.
              </p>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-blue-900 font-medium mb-2">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-blue-900 font-medium mb-2">
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    placeholder="شماره تماس خود را وارد کنید"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-blue-900 font-medium mb-2">
                    ایمیل (اختیاری)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-blue-900 font-medium mb-2">
                    پیام شما
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    placeholder="پیام خود را بنویسید..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>




      {/*وبلاگ*/}



      <section id="recent-posts" className="py-12 ">

        <div className="container mx-auto text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">پست‌های اخیر وبلاگ</h2>
          <>

            <button
              className=" mt-2 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
              type="button"
            >
              <div className="bg-blue-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="25px"
                  width="25px"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#000000"
                  />
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="translate-x-2 mt-4">دیدن مطالب بیشتر ما</p>
            </button>
          </>

        </div>
        {/* End Section Title */}
        <div className="container mx-auto px-4 items-center justify-center flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12  sm:gap-6 md:gap-16 lg:gap-48">
            {/* Post 1 */}
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/آزمایش-سیتولوژی-ادرار.webp"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 28شهریور403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  شرایط بیمار قبل از آزمایش سیتولوژی ادرار
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  از بررسی های سیتولوژی می توان در تشخیص انواع سرطان ها و همچنین بیماری های التهابی و عفونی استفاده کرد …           </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>

            <div className="relative flex mt-4 w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/آزمایش-کورتیزول.webp"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">

                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  شرایط بیمار قبل از آزمایش کورتیزول
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  انجام آزمایش کورتیزول جهت تشخیص کم‌کاری و یا پرکاری غدد فوق ‌کلیوی …            </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
            <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="img/آزمایش-پروستات.webp"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">

                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  شرایط بیمار قبل از آزمایش پروستات PSA
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  پروستات غده‌ای به اندازه‌ی گردو است که زیر مثانه قرار دارد. این غده به تولید مایع منی کمک می‌کند …
                </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
            <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/تست-پاپ-اسمیر.webp"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">

                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  شرایط بیمار قبل از تست پاپ اسمیر
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  برای تشخیص زودهنگام سرطان دهانه رحم علاوه بر امکان تشخیص التهاب و عفونت دهانه رحم انجام می شود …           </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
