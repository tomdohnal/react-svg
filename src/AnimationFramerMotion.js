import React, { useState } from "react";
import { motion } from "framer-motion";

function Icon1() {
  return (
    <g>
      <path
        fill="#f2f2f2"
        d="M308.992 277.192h68.977l34.488-59.735-34.488-59.736h-68.977l-34.489 59.736z"
        transform="translate(-252.02 -137.577)"
      ></path>
      <path
        fill="#ccc"
        d="M386.712 297.336h-86.463a5.014 5.014 0 01-4.33-2.5l-43.232-74.88a5.015 5.015 0 010-5l43.232-74.879a5.014 5.014 0 014.33-2.5h86.463a5.014 5.014 0 014.33 2.5l43.232 74.88a5.014 5.014 0 010 5l-43.232 74.879a5.013 5.013 0 01-4.33 2.5zm-86.463-157.759a3.008 3.008 0 00-2.598 1.5l-43.232 74.88a3.009 3.009 0 000 3l43.232 74.879a3.008 3.008 0 002.598 1.5h86.463a3.008 3.008 0 002.598-1.5l43.232-74.88a3.008 3.008 0 000-3l-43.232-74.879a3.008 3.008 0 00-2.598-1.5z"
        transform="translate(-252.02 -137.577)"
      ></path>
      <path
        fill="#6c63ff"
        d="M343.417 194.485a18.005 18.005 0 10-26.06 24.85q.295.31.604.605l26.068 26.068 25.455-25.455a18.438 18.438 0 00-26.067-26.068z"
        transform="translate(-252.02 -137.577)"
      ></path>
    </g>
  );
}

function Icon2() {
  return (
    <g>
      <path
        fill="#f2f2f2"
        d="M308.992 491.192h68.977l34.488-59.735-34.488-59.736h-68.977l-34.489 59.736z"
        transform="translate(-252.02 -137.577)"
      ></path>
      <path
        fill="#ccc"
        d="M386.712 512.376h-86.463a5.014 5.014 0 01-4.33-2.5l-43.232-74.88a5.015 5.015 0 010-5l43.232-74.879a5.014 5.014 0 014.33-2.5h86.463a5.014 5.014 0 014.33 2.5l43.232 74.88a5.014 5.014 0 010 5l-43.232 74.88a5.013 5.013 0 01-4.33 2.5zm-86.463-157.759a3.008 3.008 0 00-2.598 1.5l-43.232 74.88a3.009 3.009 0 000 3l43.232 74.88a3.008 3.008 0 002.598 1.5h86.463a3.008 3.008 0 002.598-1.5l43.232-74.88a3.008 3.008 0 000-3l-43.232-74.88a3.008 3.008 0 00-2.598-1.5z"
        transform="translate(-252.02 -137.577)"
      ></path>
      <path
        fill="#6c63ff"
        d="M343.48 398.48a32.977 32.977 0 1032.977 32.977 32.977 32.977 0 00-32.977-32.977zm0 9.893a9.893 9.893 0 11-9.893 9.893 9.893 9.893 0 019.893-9.893zm0 47.626a24.023 24.023 0 01-19.786-10.559c.159-6.595 13.191-10.226 19.786-10.226s19.628 3.63 19.786 10.226a24.063 24.063 0 01-19.786 10.559z"
        transform="translate(-252.02 -137.577)"
      ></path>
    </g>
  );
}

function Icon3() {
  return (
    <g>
      <path
        fill="#f2f2f2"
        d="M308.992 707.192h68.977l34.488-59.735-34.488-59.736h-68.977l-34.489 59.736z"
        transform="translate(-252.02 -137.577)"
      ></path>
      <path
        fill="#ccc"
        d="M386.712 727.416h-86.463a5.014 5.014 0 01-4.33-2.5l-43.232-74.88a5.013 5.013 0 010-5l43.232-74.879a5.014 5.014 0 014.33-2.5h86.463a5.014 5.014 0 014.33 2.5l43.232 74.88a5.014 5.014 0 010 5l-43.232 74.88a5.013 5.013 0 01-4.33 2.5zm-86.463-157.759a3.008 3.008 0 00-2.598 1.5l-43.232 74.88a3.008 3.008 0 000 3l43.232 74.88a3.008 3.008 0 002.598 1.5h86.463a3.008 3.008 0 002.598-1.5l43.232-74.88a3.008 3.008 0 000-3l-43.232-74.88a3.008 3.008 0 00-2.598-1.5z"
        transform="translate(-252.02 -137.577)"
      ></path>
      <path
        fill="#6c63ff"
        d="M364.716 627.48c0 11.727-21.236 37.473-21.236 37.473s-21.235-25.746-21.235-37.474a21.235 21.235 0 1142.47-.035z"
        transform="translate(-252.02 -137.577)"
      ></path>
      <circle cx="91.461" cy="489.902" r="8.342" fill="#fff"></circle>
      <circle cx="90.703" cy="542.767" r="8.342" fill="#6c63ff"></circle>
    </g>
  );
}

const variants = {
  hidden: {
    scale: 0,
    rotate: 360,
  },
  visible: {
    scale: 1,
    rotate: 0,
  },
};

function AnimationFramerMotion() {
  const [toggle, setToggle] = useState(false);
  const icons = [<Icon1 />, <Icon2 />, <Icon3 />];

  const animatedIcons = icons.map((animatedStyle, index) => {
    return (
      <motion.g
        variants={variants}
        // is not applied properly, see https://github.com/framer/motion/issues/870
        initial={false}
        animate={toggle ? "visible" : "hidden"}
        key={index}
        transition={{
          delay: index * 0.05,
          type: "spring",
        }}
      >
        {icons[index]}
      </motion.g>
    );
  });

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle animation
        </button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="695.962"
        height="624.846"
        data-name="Layer 1"
        viewBox="-200 -200 895.962 824.846"
      >
        {animatedIcons}
        <path
          fill="#f2f2f2"
          d="M932.516 707.4c-6.078 21.085-23.826 35.845-42.338 48.383q-3.878 2.627-7.757 5.133c-.018.008-.036.024-.054.032-.124.08-.249.16-.365.24l-1.597 1.029.29.13s.286.152-.026.025c-.093-.04-.19-.074-.283-.113-10.755-4.338-21.7-8.995-29.942-17.12-8.55-8.438-13.546-21.673-8.917-32.758a21.164 21.164 0 012.292-4.113c.375-.537.78-1.052 1.2-1.556a22.685 22.685 0 0138.963 6.893c1.36-12.663-9.082-23.27-19.13-31.097-10.053-7.823-21.477-16.342-23.42-28.935-1.086-7.007 1.35-13.797 5.79-19.248.137-.165.274-.33.415-.492a33.107 33.107 0 0121.28-11.416c15.415-1.602 30.388 6.558 41.587 17.276 18.025 17.244 28.921 43.732 22.012 67.706z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <path
          fill="#fff"
          d="M903.54 679.82a56.28 56.28 0 016.743 14.87 48.868 48.868 0 011.69 14.434 62.613 62.613 0 01-8.201 28.494 90.114 90.114 0 01-13.594 18.165q-3.878 2.627-7.757 5.133c-.018.008-.036.024-.054.032-.124.08-.249.16-.365.24l-1.597 1.029s.576.282.264.155c-.093-.04-.19-.074-.283-.113a49.813 49.813 0 00-15.94-42.89 50.24 50.24 0 00-20.627-11.1c.375-.538.78-1.053 1.2-1.557a52.088 52.088 0 018.599 3.253 51.04 51.04 0 0123.077 22.25 52.182 52.182 0 015.682 28.634c.441-.4.884-.81 1.313-1.215 8.172-7.619 15.431-16.365 20.343-26.458a58.249 58.249 0 006.1-27.56c-.401-10.41-4.549-20.053-10.555-28.447a121.926 121.926 0 00-23.111-23.82 138.544 138.544 0 00-28.745-17.745.996.996 0 01-.5-1.279.847.847 0 01.415-.492.738.738 0 01.64.027c1.269.584 2.528 1.176 3.777 1.793a140.116 140.116 0 0128.949 19.096c8.521 7.265 16.543 15.565 22.537 25.07z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <path
          fill="#2f2e41"
          d="M749.026 369.02c-7.097-3.301-15.81-4.383-23.032-1.315s-12.144 10.931-9.81 17.89c1.06 3.156 3.47 6.259 2.531 9.445-.723 2.453-3.245 4.073-5.722 5.224s-5.187 2.12-6.979 4.062-2.165 5.285.073 6.791c.737.496 1.659.731 2.374 1.254a3.772 3.772 0 011.164 4.223 8.893 8.893 0 01-2.85 3.75c-2.541 2.191-5.899 4.699-5.11 7.809a5.478 5.478 0 003.697 3.458 18.368 18.368 0 005.427.716l74.966 2.362a28.422 28.422 0 007.402-.414 8.762 8.762 0 005.813-3.905c1.435-2.657.493-5.93-1.28-8.412s-4.282-4.438-6.355-6.717-3.77-5.122-3.404-8.067c.292-2.358 1.847-4.395 2.963-6.537s1.764-4.818.319-6.789c-2.037-2.776-6.927-2.525-9.243-5.113-1.748-1.952-1.41-4.763-1.584-7.28-.418-6.057-4.611-11.777-10.58-14.433a20.83 20.83 0 00-18.954 1.29z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <path
          fill="#a0616a"
          d="M449.634 611.598L437.893 608.07 445.912 561.103 463.241 566.31 449.634 611.598z"
        ></path>
        <path
          fill="#2f2e41"
          d="M701.229 761.456l-37.86-11.375.145-.479a15.386 15.386 0 0119.162-10.308h.001l23.123 6.947z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <path
          fill="#a0616a"
          d="M560.431 611.995L548.171 611.994 542.339 564.706 560.433 564.707 560.431 611.995z"
        ></path>
        <path
          fill="#2f2e41"
          d="M815.577 761.456l-39.531-.002v-.5a15.386 15.386 0 0115.386-15.386h.001l24.144.001zM795.432 713.806a4.5 4.5 0 01-4.442-3.788l-18.203-113.555a3.5 3.5 0 00-6.688-.79L718.937 709.21a4.516 4.516 0 01-5.578 2.544l-17.035-5.679a4.485 4.485 0 01-2.966-5.26l38.65-171.022a4.525 4.525 0 013.37-3.392l51.833-12.032a4.562 4.562 0 013.708.77c34.13 24.799 31.247 105.821 24.886 193.798a4.502 4.502 0 01-4.294 4.173l-15.882.692a6.653 6.653 0 01-.197.004z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <circle cx="499.781" cy="271.969" r="24.561" fill="#a0616a"></circle>
        <path
          fill="#ccc"
          d="M752.86 536.844a39.899 39.899 0 01-17.024-3.935l-.182-.085-.073-.188-22.03-57.076-.418-9.917a23.773 23.773 0 0125.09-24.74l23.388 1.317a23.787 23.787 0 0122.437 23.61c.607 1.167 4.921 10.292-3.533 18.865-.316 1.953-3.274 22.248 7.886 33.408l.314.313-.274.349c-.178.226-14.51 18.076-35.58 18.079z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <path
          fill="#a0616a"
          d="M785.702 541.15a10.056 10.056 0 005.277-14.489l23.359-27.043-18.414-2.397-19.36 26.048a10.11 10.11 0 009.138 17.88zM742.89 535.452a10.056 10.056 0 01-10.438-11.348l-31.957-15.992 16.08-9.288 27.881 16.61a10.11 10.11 0 01-1.565 20.018z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <path
          fill="#ccc"
          d="M800.307 520.276a4.49 4.49 0 01-2.47-.74l-11.552-7.577a4.491 4.491 0 01-1.399-6.064l8.364-14.052a6.272 6.272 0 00-2.824-8.932l-24.028-10.772a14.324 14.324 0 01-8.112-15.915 14.24 14.24 0 0120.432-9.754l36.452 18.679a19.177 19.177 0 016.805 28.289l-18.02 24.97a4.489 4.489 0 01-3.648 1.868zM725.293 524.711a4.49 4.49 0 01-1.92-.432l-27.862-13.11a19.176 19.176 0 01-7.753-28.044l22.836-34a14.24 14.24 0 0122.6-1.37 14.324 14.324 0 01.615 17.852l-15.8 21.067a6.273 6.273 0 001.858 9.182l14.125 8.239a4.49 4.49 0 011.715 5.982l-6.435 12.227a4.49 4.49 0 01-3.979 2.407z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <path
          fill="#2f2e41"
          d="M726.673 406.055c7.757-.623 14.196-8.372 13.39-16.111a13.01 13.01 0 0011.141 13.246c3.558.392 7.458-.685 10.555 1.11 3.43 1.988 4.528 6.816 8.101 8.533 3.453 1.659 7.838-.604 9.544-4.033s1.287-7.55.156-11.21a31.652 31.652 0 00-52.69-12.975c-3.26 3.28-5.85 7.461-6.27 12.068s1.717 9.605 5.854 11.675z"
          transform="translate(-252.02 -137.577)"
        ></path>
        <path
          fill="#3f3d56"
          d="M946.98 762.296h-381a1 1 0 010-2h381a1 1 0 010 2z"
          transform="translate(-252.02 -137.577)"
        ></path>
      </svg>
    </>
  );
}

export default AnimationFramerMotion;
