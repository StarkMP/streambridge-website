import type { JSX, SVGProps } from 'react';

export const DiscordSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      {...props}
      width='24'
      height='19'
      viewBox='0 0 24 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Discord'>
        <path
          id='Vector'
          d='M20.3303 1.55593C18.7767 0.829058 17.1156 0.300797 15.3789 0C15.1656 0.385611 14.9164 0.904266 14.7446 1.31685C12.8985 1.03922 11.0693 1.03922 9.25716 1.31685C9.08539 0.904266 8.83055 0.385611 8.61536 0C6.87681 0.300797 5.21376 0.830999 3.66019 1.55978C0.526643 6.29499 -0.322811 10.9126 0.101917 15.4646C2.18025 17.0166 4.19441 17.9595 6.17457 18.5764C6.66349 17.9035 7.09953 17.1882 7.47518 16.4344C6.75975 16.1626 6.07453 15.8271 5.42707 15.4376C5.59884 15.3104 5.76686 15.1773 5.92918 15.0404C9.87819 16.8875 14.1689 16.8875 18.0707 15.0404C18.235 15.1773 18.403 15.3104 18.5728 15.4376C17.9235 15.829 17.2364 16.1645 16.521 16.4363C16.8966 17.1882 17.3308 17.9055 17.8216 18.5783C19.8036 17.9614 21.8197 17.0186 23.898 15.4646C24.3964 10.1876 23.0467 5.61246 20.3303 1.55593ZM8.01318 12.6651C6.82772 12.6651 5.85555 11.5585 5.85555 10.2108C5.85555 8.86309 6.80696 7.75449 8.01318 7.75449C9.21942 7.75449 10.1916 8.86115 10.1708 10.2108C10.1727 11.5585 9.21942 12.6651 8.01318 12.6651ZM15.9867 12.6651C14.8013 12.6651 13.8291 11.5585 13.8291 10.2108C13.8291 8.86309 14.7805 7.75449 15.9867 7.75449C17.193 7.75449 18.1651 8.86115 18.1444 10.2108C18.1444 11.5585 17.193 12.6651 15.9867 12.6651Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};