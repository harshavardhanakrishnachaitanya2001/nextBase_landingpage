import Link from "next/link";

const NewsletterSection = () => {
  return (
    <section id="newsletter">
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="bg-blue-500 overflow-hidden relative z-10 rounded-sm py-10 px-12 sm:px-8 lg:flex items-center justify-between">
          <div className="mb-6 lg:mb-0 md:max-w-[400px] w-full">
            <h2 className="font-bold text-white text-2xl sm:text-3xl leading-snug sm:leading-snug">
              Want to get all the latest updates from SaaS?
            </h2>
          </div>

          <div className="lg:max-w-[520px] w-full">
            <form className="sm:flex items-center justify-between">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="lg:max-w-[350px] w-full sm:mr-4 mb-4 sm:mb-0 bg-white rounded-sm py-3 px-6 text-body-color placeholder-body-color outline-none focus-visible:shadow-none"
              />
              <Link
                href=""
                type="submit"
                className="bg-black text-white hover:shadow-signUp transition rounded-sm py-3 px-12 sm:px-8 md:px-10 text-base font-semibold duration-300 ease-in-out"
              >
                Subscribe
              </Link>
            </form>
          </div>

          <div className="absolute w-full h-full top-0 left-0 z-[-1]">
            <svg
              width="1170"
              height="180"
              viewBox="0 0 1170 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_32:22"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1170"
                height="181"
              >
                <rect
                  y="0.000488281"
                  width="1170"
                  height="180"
                  rx="2"
                  fill="#4A6CF7"
                ></rect>
              </mask>
              <g mask="url(#mask0_32:22)">
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M517.924 0.362991C474.865 29.7973 337.151 43.6819 333.289 -65.9782C332.164 -98.1277 176.271 18.7043 123.154 -42.7352C91.2589 -32.0459 9.36359 -61.1568 9.36359 -61.1568C119.505 -13.6184 74.9786 -4.84753 74.9786 -4.84753C148.455 20.9409 182.866 59.4467 257.666 70.5996L258.92 70.786C341.923 82.9137 427.15 70.7086 517.626 0.518265L517.924 0.362991Z"
                  fill="url(#paint0_linear_32:22)"
                ></path>
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M116.56 135.053C73.5018 164.488 -64.2122 178.372 -68.0741 68.7122C-69.1992 36.5627 -225.092 153.395 -278.21 91.9552C-310.105 102.645 -392 73.5336 -392 73.5336C-281.859 121.072 -326.385 129.843 -326.385 129.843C-252.909 155.631 -218.497 194.137 -143.697 205.29L-142.444 205.476C-59.4408 217.604 25.7864 205.399 116.262 135.209L116.56 135.053Z"
                  fill="url(#paint1_linear_32:22)"
                ></path>
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M859.047 123.309C793.674 165.5 597.387 170.368 609.423 -7.857C612.962 -60.107 374.646 109.284 309.583 2.9043C262.931 16.1446 152.159 -41.5239 152.159 -41.5239C299.8 49.6279 235.653 58.1412 235.653 58.1412C335.089 109.347 377.446 176.161 481.081 203.816L482.818 204.279C597.858 234.563 719.91 225.696 858.602 123.522L859.047 123.309Z"
                  fill="url(#paint2_linear_32:22)"
                ></path>
                <path
                  opacity="0.2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1000 38.936C1046.89 8.71569 1187.67 5.22891 1179.04 132.886C1176.5 170.311 1347.43 48.9816 1394.09 125.178C1427.55 115.694 1507 157 1507 157C1401.11 91.7113 1447.12 85.6135 1447.12 85.6135C1375.8 48.9366 1345.42 1.07942 1271.09 -18.7287L1269.84 -19.0601C1187.33 -40.7523 1099.79 -34.4009 1000.32 38.7831L1000 38.936Z"
                  fill="url(#paint3_linear_32:22)"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M439 216C456.118 216 470 202.345 470 185.5C470 168.656 456.118 155 439 155C421.882 155 408 168.656 408 185.5C408 202.345 421.882 216 439 216Z"
                  fill="#FFDDF7"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.7408 -12.6863C21.3674 -15.9137 18.272 -18.6247 14.7499 -20.6024C11.1896 -22.5818 7.25873 -23.8046 3.20375 -24.1941C3.0226 -24.2134 2.83781 -24.2391 2.65018 -24.2486L2.09689 -24.2813C1.72268 -24.2984 1.35241 -24.33 0.988197 -24.3298C0.61172 -24.3298 0.242724 -24.3378 -0.13165 -24.3341L-1.24763 -24.2897C-2.73739 -24.2005 -4.21866 -24.0036 -5.67997 -23.7004C-7.14348 -23.3773 -8.58317 -22.9543 -9.98887 -22.4344C-11.3877 -21.8915 -12.7544 -21.2506 -14.0705 -20.5223C-15.3654 -19.7783 -16.6237 -18.9498 -17.8167 -18.0292C-19.0006 -17.093 -20.1164 -16.0809 -21.1625 -14.9899C-22.191 -13.8897 -23.1401 -12.7151 -24.0055 -11.4795C-24.8602 -10.2388 -25.6226 -8.93694 -26.2865 -7.58448C-26.4586 -7.20945 -26.6476 -6.84287 -26.8134 -6.45691L-27.2835 -5.31476L-27.7122 -4.14311C-27.8497 -3.75037 -27.9607 -3.3536 -28.085 -2.95883C-28.5476 -1.36754 -28.8799 0.258775 -29.0785 1.90401C-29.1101 2.31206 -29.164 2.72337 -29.1924 3.13688L-29.2644 4.37944L-29.2756 5.62213C-29.2704 6.0308 -29.2381 6.44446 -29.2287 6.86042C-29.1369 8.51276 -28.9042 10.1543 -28.5332 11.767C-26.8531 19.1994 -22.1123 25.8119 -15.7011 29.891C-14.6891 30.5502 -13.6223 31.1147 -12.5479 31.6505L-11.7169 32.0171L-11.3062 32.2026L-10.8836 32.3667L-10.0389 32.6939C-9.75931 32.7996 -9.47472 32.8927 -9.18808 32.9896C-8.62076 33.1939 -8.03547 33.3454 -7.45345 33.5121C-7.16086 33.5982 -6.87126 33.6581 -6.57534 33.7289C-6.28153 33.7961 -5.99208 33.8768 -5.69389 33.9305C-5.09858 34.0361 -4.50232 34.1642 -3.90245 34.2356L-3.00445 34.3608L-2.104 34.4481C-1.54408 34.5135 -0.982016 34.5193 -0.418604 34.5486C-0.139873 34.5686 0.143884 34.5554 0.424358 34.5574L1.27074 34.5508L2.1174 34.5028C2.39857 34.485 2.68443 34.4754 2.96682 34.4386C3.52512 34.375 4.08589 34.3366 4.64663 34.2351C6.8821 33.9002 9.07112 33.3164 11.1771 32.5049C11.5227 32.3673 11.8523 32.2231 12.1948 32.0801C12.3601 32.0089 12.5287 31.9432 12.701 31.8631L13.1952 31.6252C13.5164 31.4664 13.8552 31.3169 14.1782 31.1402L15.138 30.6152C15.2965 30.5322 15.4589 30.4348 15.61 30.339L16.0763 30.0528C16.3899 29.8597 16.6969 29.6763 16.9978 29.4613L17.9014 28.8388L18.7685 28.1742C19.9091 27.268 21.0113 26.2952 21.9969 25.2258C22.9958 24.1585 23.9275 23.0377 24.7398 21.8364C26.8381 18.8087 28.3322 15.4044 29.1402 11.8104C29.9301 8.29603 30.034 4.66221 29.4464 1.10845C29.182 -0.485233 28.7992 -2.07361 28.2972 -3.61627C27.7775 -5.1475 27.1551 -6.64621 26.3621 -8.01968C26.2944 -8.15792 26.2224 -8.28271 26.1475 -8.3913L25.9384 -8.69072C25.8373 -8.83876 25.7271 -8.98033 25.6085 -9.11472C25.4085 -9.3138 25.2714 -9.36212 25.1656 -9.2719C25.0599 -9.18168 25.0825 -8.76366 25.1871 -8.24599C25.3018 -7.73175 25.4412 -7.09088 25.6587 -6.56679C26.2175 -5.12953 26.6751 -3.65498 27.0284 -2.15394C27.1032 -1.77206 27.1993 -1.39526 27.2735 -1.01429C27.3381 -0.628969 27.4134 -0.246181 27.4897 0.138433C27.5442 0.527186 27.6092 0.913431 27.6668 1.30765C27.7234 1.70005 27.7682 2.09313 27.8177 2.49443C28.2844 6.35271 27.8374 10.3742 26.5377 14.1388C25.4727 17.2232 23.885 20.1013 21.844 22.6473C20.6945 24.0639 19.4371 25.3777 18.0298 26.5581C16.6312 27.7324 15.0912 28.7672 13.4244 29.6032L11.9314 30.362C10.3461 31.1154 8.68714 31.7029 6.98093 32.1151C6.69925 32.1951 6.41454 32.249 6.13198 32.3064L5.27461 32.4832L4.41618 32.6158L3.99118 32.679C3.84689 32.698 3.70222 32.7139 3.55725 32.7267L2.68783 32.8195C2.39913 32.8453 2.11163 32.8521 1.81925 32.8716C1.24727 32.9116 0.660716 32.9054 0.0901288 32.9057C-0.206459 32.9179 -0.490423 32.8887 -0.784739 32.8837C-1.07363 32.8672 -1.35627 32.8615 -1.64989 32.8368C-2.21945 32.7758 -2.8063 32.7478 -3.37183 32.6517C-3.66213 32.6117 -3.94983 32.5762 -4.23207 32.529L-5.07966 32.3651L-5.51251 32.2883L-5.93462 32.1884L-6.77013 31.9822L-7.63999 31.7375L-8.07523 31.6148L-8.4991 31.4697L-9.35579 31.1847L-10.1888 30.8568L-10.6103 30.6946L-11.0286 30.5171L-11.8473 30.1507L-12.6508 29.7475L-13.0577 29.5476L-13.451 29.329L-14.2303 28.8839L-14.9922 28.4057L-15.3736 28.1657C-15.5046 28.0859 -15.6185 27.9938 -15.7501 27.9131L-16.4861 27.3957C-16.7246 27.214 -16.9555 27.0243 -17.1945 26.8417L-17.5491 26.5642C-17.664 26.4703 -17.7725 26.3665 -17.8885 26.2708L-18.5688 25.6812C-18.7842 25.4764 -19.0023 25.2671 -19.2102 25.0544C-19.3404 24.934 -19.4705 24.8137 -19.5915 24.6881C-19.7217 24.5677 -19.8348 24.435 -19.9564 24.3085C-20.1996 24.0555 -20.4505 23.8105 -20.6755 23.5469C-20.9102 23.2877 -21.1443 23.0295 -21.3693 22.7659C-21.4904 22.6403 -21.5943 22.5023 -21.7079 22.3687L-22.0288 21.9602L-22.3593 21.5559C-22.4638 21.4171 -22.5597 21.2721 -22.6641 21.1333C-22.8644 20.8494 -23.0739 20.5707 -23.2752 20.285C-23.6416 19.6926 -24.0373 19.1124 -24.3537 18.4802C-25.146 17.0238 -25.8966 15.4922 -26.54 14.0202C-26.718 13.6068 -26.8807 13.0936 -27.024 12.614C-27.4005 11.2466 -27.6719 9.85131 -27.8631 8.44736C-28.0261 7.0355 -28.0999 5.61477 -28.0844 4.19362C-28.071 3.92236 -28.0673 3.65548 -28.0635 3.38857C-28.0657 3.25865 -28.0698 3.12507 -28.0618 2.99171L-28.0378 2.59168C-28.0213 2.32588 -28.0052 2.05915 -27.979 1.789C-27.9528 1.51886 -27.9016 1.25001 -27.8615 0.982808C-27.6513 -0.209646 -27.3641 -1.3737 -27.0496 -2.53283C-26.8721 -3.1089 -26.7117 -3.6934 -26.5151 -4.25742C-26.4136 -4.54434 -26.3264 -4.83511 -26.2217 -5.11656L-25.9007 -5.96983C-25.3192 -7.50781 -24.4558 -8.95716 -23.5838 -10.3495C-22.4561 -12.143 -21.1196 -13.7963 -19.6024 -15.2749C-18.0919 -16.7603 -16.4092 -18.0524 -14.6152 -19.1732C-10.4876 -21.7627 -5.70083 -23.2949 -0.882395 -23.6153C1.21771 -23.764 3.33145 -23.6364 5.4063 -23.303C7.47572 -22.9579 9.50721 -22.4051 11.4976 -21.7132C12.0656 -21.5287 12.6225 -21.2794 13.1894 -21.0336C13.4673 -20.9099 13.7466 -20.7627 14.0217 -20.6227C14.2989 -20.4792 14.5831 -20.3445 14.8484 -20.1795C15.1212 -20.0225 15.3941 -19.8655 15.6583 -19.7023C15.9322 -19.5435 16.1935 -19.3641 16.4513 -19.1911C16.9845 -18.8565 17.4847 -18.4738 17.9852 -18.1118C19.2875 -17.1353 20.5016 -16.0462 21.6132 -14.857C22.7228 -13.6712 23.7379 -12.3969 24.612 -11.0302C24.7803 -10.8018 24.9297 -10.5639 25.0946 -10.3203C25.2601 -10.0758 25.4409 -9.82556 25.6553 -9.55949C25.0446 -10.7225 24.4641 -11.728 23.7408 -12.6863Z"
                  fill="#FF88E4"
                  fill-opacity="0.48"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_32:22"
                  x1="239.699"
                  y1="-19.4459"
                  x2="377.873"
                  y2="146.769"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2DDFE" stop-opacity="0.01"></stop>
                  <stop
                    offset="1"
                    stop-color="#E2DDFE"
                    stop-opacity="0.88"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_32:22"
                  x1="-161.665"
                  y1="115.244"
                  x2="-23.4902"
                  y2="281.46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2DDFE" stop-opacity="0.01"></stop>
                  <stop
                    offset="1"
                    stop-color="#E2DDFE"
                    stop-opacity="0.88"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_32:22"
                  x1="470.113"
                  y1="55.5749"
                  x2="674.521"
                  y2="314.05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2DDFE" stop-opacity="0.01"></stop>
                  <stop
                    offset="1"
                    stop-color="#E2DDFE"
                    stop-opacity="0.88"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_32:22"
                  x1="1235.5"
                  y1="11.5005"
                  x2="1047.87"
                  y2="-80.0782"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2DDFE" stop-opacity="0.01"></stop>
                  <stop
                    offset="1"
                    stop-color="#E2DDFE"
                    stop-opacity="0.88"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
