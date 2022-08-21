import React from 'react';
import { styled } from '@mui/material/styles';

import { Typography, Link as LinkOuter } from '@mui/material';
import { Link } from 'react-router-dom';

const FooterCustom = styled('footer')(({ theme }) => ({
  display: 'block',
  minHeight: '70px',
  padding: '1.5rem 0',
}));

const FooterContainer = styled('div')({
  paddingInline: '24px',
  maxWidth: '1280px',
  marginInline: 'auto',
});

const GridCustom = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 8rem',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    alignItems: 'center',
    rowGap: '1rem',
  },
}));

const GridItemCustom = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  },
}));

const ListCustom = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'left',
  padding: '0',
  columnGap: '1.5rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    columnGap: '0',
  },
}));

const ListItemCustom = styled('li')(({ theme }) => ({
  display: 'inline-block',
  paddingLeft: '0',
  width: 'auto',
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    alignText: 'right',
  },
  '&:hover': {
    backgroundColor: 'white',
  },
  '&::after': {
    content: '""',
    display: 'block',
    marginTop: '0.5rem',
    width: '0',
    height: '2px',
    background: 'black',
    transition: 'width .25s',
  },
  '&:hover::after': {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    paddingRight: '0',
  },
}));

const Footer = () => {
  return (
    <FooterCustom>
      <FooterContainer>
        <GridCustom>
          <GridItemCustom>
            <Typography>
              <b>Menu</b>
            </Typography>
            <ListCustom>
              <ListItemCustom>
                <Link to="/textbook">Textbook</Link>
              </ListItemCustom>
              <ListItemCustom>
                <Link to="/games">Games</Link>
              </ListItemCustom>
              <ListItemCustom>
                <Link to="/statisticks">Statistics</Link>
              </ListItemCustom>
            </ListCustom>
          </GridItemCustom>
          <GridItemCustom>
            <Typography>
              <b>Socials</b>
            </Typography>
            <ListCustom>
              <ListItemCustom>
                <LinkOuter href="https://github.com/malinna13" target="_blank">
                  malinna13
                </LinkOuter>
              </ListItemCustom>
              <ListItemCustom>
                <LinkOuter href="https://github.com/vyach-g" target="_blank">
                  vyach-g
                </LinkOuter>
              </ListItemCustom>
              <ListItemCustom>
                <LinkOuter href="https://github.com/mamonten0k" target="_blank">
                  mamonten0k
                </LinkOuter>
              </ListItemCustom>
            </ListCustom>
          </GridItemCustom>
          <GridItemCustom>
            <LinkOuter href="https://rs.school/" target="_blank">
              <svg
                width="80"
                height="33"
                viewBox="0 0 90 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M46.4653 10.9303L50.7471 10.657C50.8448 11.3482 51.0239 11.8625 51.3169 12.2323C51.7891 12.8109 52.4403 13.1002 53.3032 13.1002C53.9381 13.1002 54.4428 12.9556 54.7847 12.6502C55.1104 12.4091 55.3057 12.0233 55.3057 11.6214C55.3057 11.2357 55.1266 10.866 54.8173 10.6248C54.4917 10.3355 53.7265 10.0462 52.5217 9.789C50.5517 9.355 49.1353 8.77633 48.305 8.03693C47.4747 7.34574 47.0025 6.33308 47.0351 5.25612C47.0351 4.51671 47.263 3.7773 47.6863 3.16649C48.1748 2.47531 48.8423 1.92879 49.64 1.62338C50.5029 1.25368 51.7077 1.06079 53.2218 1.06079C55.0778 1.06079 56.4942 1.39835 57.4711 2.08953C58.4479 2.76464 59.034 3.85767 59.2131 5.35256L54.9801 5.59367C54.8661 4.95071 54.6382 4.48456 54.2638 4.17916C53.8893 3.87375 53.4009 3.72908 52.7659 3.72908C52.2449 3.72908 51.8542 3.8416 51.5937 4.05056C51.3495 4.24345 51.1867 4.53278 51.203 4.85426C51.203 5.09538 51.3332 5.32041 51.5286 5.46508C51.7402 5.65797 52.2449 5.83478 53.0427 5.99552C55.0127 6.41345 56.4128 6.83137 57.2757 7.26537C58.1386 7.69937 58.7572 8.22981 59.1317 8.8567C59.5224 9.49966 59.7178 10.2391 59.7015 10.9945C59.7015 11.8947 59.441 12.7948 58.92 13.5503C58.3828 14.338 57.6339 14.9488 56.7547 15.3185C55.8267 15.7203 54.6545 15.9293 53.2543 15.9293C50.7797 15.9293 49.0702 15.4631 48.1096 14.5148C47.1491 13.5664 46.5792 12.3769 46.4653 10.9303ZM1.02569 15.6882L1.02569 1.31798L8.53112 1.31798C9.91498 1.31798 10.9895 1.43049 11.7221 1.6716C12.4385 1.89664 13.0734 2.36279 13.4967 2.98968C13.9689 3.68086 14.1968 4.48456 14.1805 5.32041C14.2294 6.73493 13.4967 8.08515 12.2431 8.79241C11.7547 9.06566 11.2174 9.25855 10.6639 9.355C11.0709 9.46751 11.4779 9.6604 11.8361 9.88544C12.1129 10.1105 12.3408 10.3677 12.5525 10.6409C12.7967 10.9142 13.0083 11.2196 13.1874 11.5411L15.369 15.7042H10.2569L7.84732 11.2839C7.53799 10.7213 7.2775 10.3516 7.03329 10.1748C6.70767 9.94974 6.31693 9.83722 5.92619 9.83722H5.53546V15.6721H1.02569V15.6882ZM5.53546 7.13678H7.4403C7.84732 7.10463 8.23806 7.04034 8.6288 6.94389C8.92185 6.89567 9.18235 6.73493 9.36143 6.49382C9.80101 5.91515 9.73589 5.09538 9.19863 4.59708C8.90557 4.35597 8.33575 4.22738 7.52171 4.22738H5.53546V7.13678ZM0 28.0009L4.28184 27.7276C4.37952 28.4188 4.55861 28.9332 4.85166 29.3029C5.30753 29.8815 5.97504 30.187 6.83792 30.187C7.47287 30.187 7.97757 30.0423 8.31946 29.7369C8.64508 29.4797 8.84045 29.11 8.84045 28.7081C8.84045 28.3224 8.66136 27.9527 8.35203 27.7116C8.02641 27.4222 7.26122 27.1329 6.04016 26.8757C4.07019 26.4417 2.65376 25.863 1.82344 25.1236C0.993126 24.4324 0.520984 23.4198 0.553546 22.3428C0.553546 21.6034 0.781476 20.864 1.20478 20.2532C1.6932 19.562 2.36071 19.0155 3.15847 18.7101C4.02135 18.3404 5.22612 18.1475 6.74023 18.1475C8.59624 18.1475 10.0127 18.4851 10.9895 19.1762C11.9664 19.8674 12.5362 20.9444 12.7153 22.4393L8.48227 22.6804C8.36831 22.0374 8.14038 21.5713 7.76592 21.2659C7.40774 20.9605 6.90304 20.8158 6.26809 20.8319C5.74711 20.8319 5.35637 20.9444 5.09588 21.1694C4.83538 21.3623 4.68886 21.6516 4.70514 21.9731C4.70514 22.2142 4.83538 22.4393 5.03075 22.5839C5.2424 22.7768 5.74711 22.9536 6.54486 23.1144C8.51483 23.5323 9.91498 23.9502 10.7779 24.3842C11.6407 24.8182 12.2594 25.3487 12.6339 25.9756C13.0246 26.6185 13.22 27.3579 13.22 28.0973C13.22 28.9975 12.9432 29.8815 12.4385 30.637C11.9012 31.4247 11.1523 32.0355 10.2732 32.4052C9.34515 32.807 8.17294 33.016 6.77279 33.016C4.29812 33.016 2.58864 32.5498 1.62808 31.6015C0.667511 30.637 0.130246 29.4475 0 28.0009H0Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M21.6534 26.8759L25.5933 28.0493C25.3817 29.0298 24.9421 29.9621 24.3397 30.7819C23.7862 31.5052 23.0535 32.0678 22.2232 32.4375C21.3766 32.8072 20.3021 33.0001 18.9996 33.0001C17.4204 33.0001 16.1179 32.7751 15.1248 32.325C14.1154 31.8749 13.2525 31.0712 12.5199 29.93C11.7873 28.7887 11.4291 27.326 11.4291 25.5418C11.4291 23.1628 12.064 21.3304 13.3502 20.0605C14.6364 18.7907 16.4435 18.1477 18.788 18.1477C20.6277 18.1477 22.0604 18.5174 23.1187 19.2407C24.1606 19.9801 24.9421 21.1053 25.4631 22.6163L21.4906 23.4843C21.3929 23.1467 21.2464 22.8092 21.051 22.5198C20.8068 22.1823 20.4975 21.9251 20.123 21.7322C19.7485 21.5393 19.3252 21.459 18.9019 21.459C17.8763 21.459 17.0948 21.8608 16.5575 22.6806C16.1505 23.2753 15.9388 24.2237 15.9388 25.5096C15.9388 27.1009 16.1831 28.194 16.6715 28.7887C17.1599 29.3835 17.8437 29.6728 18.7391 29.6728C19.602 29.6728 20.2532 29.4317 20.6928 28.9655C21.1324 28.4672 21.458 27.7761 21.6534 26.8759ZM30.852 18.3888H35.3455V23.42H40.2623V18.3888L44.7883 18.3888V32.759H40.2623V26.9402H35.3455V32.759H30.852V18.3888Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M44.1697 25.5739C44.1697 23.2271 44.8372 21.3946 46.1559 20.0926C47.4747 18.7906 49.3307 18.1316 51.6914 18.1316C54.1172 18.1316 55.9732 18.7746 57.292 20.0605C58.6107 21.3464 59.262 23.1467 59.262 25.4613C59.262 27.1491 58.9689 28.5154 58.3991 29.5924C57.8455 30.6533 56.9826 31.5213 55.9244 32.0999C54.8336 32.6947 53.4823 33.0001 51.8705 33.0001C50.2261 33.0001 48.8748 32.7429 47.8003 32.2285C46.6932 31.682 45.7815 30.8301 45.1791 29.7853C44.5116 28.6601 44.1697 27.2616 44.1697 25.5739ZM48.6632 25.5899C48.6632 27.0366 48.94 28.0814 49.4772 28.7244C50.0145 29.3513 50.7634 29.6727 51.7077 29.6727C52.6682 29.6727 53.4172 29.3673 53.9544 28.7405C54.4917 28.1136 54.7522 27.0045 54.7522 25.3971C54.7522 24.0468 54.4754 23.0502 53.9219 22.4394C53.3683 21.8125 52.6194 21.5071 51.6751 21.5071C50.8448 21.475 50.047 21.8286 49.4935 22.4555C48.94 23.0824 48.6632 24.1272 48.6632 25.5899ZM63.8694 25.5739C63.8694 23.2271 64.5369 21.3946 65.8557 20.0926C67.1744 18.7906 69.0304 18.1316 71.3911 18.1316C73.8169 18.1316 75.6892 18.7746 76.9917 20.0605C78.2942 21.3464 78.9617 23.1467 78.9617 25.4613C78.9617 27.1491 78.6686 28.5154 78.0988 29.5924C77.5452 30.6533 76.6824 31.5213 75.6241 32.0999C74.5333 32.6947 73.182 33.0001 71.5702 33.0001C69.9258 33.0001 68.5745 32.7429 67.5 32.2285C66.3929 31.682 65.4812 30.8301 64.8788 29.7853C64.2113 28.6601 63.8694 27.2616 63.8694 25.5739ZM68.3629 25.5899C68.3629 27.0366 68.6397 28.0814 69.1769 28.7244C69.7142 29.3513 70.4631 29.6727 71.4074 29.6727C72.368 29.6727 73.1169 29.3673 73.6541 28.7405C74.1914 28.1136 74.4519 27.0045 74.4519 25.3971C74.4519 24.0468 74.1751 23.0502 73.6216 22.4394C73.068 21.8125 72.3191 21.5071 71.3748 21.5071C70.5445 21.475 69.7305 21.8286 69.1932 22.4555C68.6397 23.0824 68.3629 24.1272 68.3629 25.5899Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M78.4895 18.3887H82.983V29.2226H90V32.7589H78.4732V18.3887H78.4895Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M73.5367 17.5593C78.0607 14.1933 79.4557 8.4876 76.6526 4.81511C73.8495 1.14262 67.9097 0.894082 63.3857 4.25999C58.8617 7.62589 57.4667 13.3316 60.2698 17.0041C63.0729 20.6766 69.0127 20.9252 73.5367 17.5593Z"
                    stroke="#1E1E1E"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M63.8857 9.8534L65.5137 8.72822L67.5163 11.5412C67.8582 11.9912 68.1187 12.4735 68.314 13.0039C68.428 13.4058 68.3954 13.8398 68.2326 14.2255C68.021 14.7078 67.6791 15.1096 67.2232 15.3989C66.686 15.7686 66.2301 15.9776 65.8394 16.0419C65.4649 16.1062 65.0742 16.0419 64.716 15.8812C64.3252 15.6883 63.9833 15.415 63.7229 15.0614L65.123 13.7755C65.237 13.9523 65.3835 14.113 65.5463 14.2416C65.6603 14.322 65.7905 14.3702 65.937 14.3702C66.051 14.3702 66.165 14.322 66.2464 14.2577C66.4092 14.1612 66.5231 13.9684 66.5069 13.7755C66.458 13.5022 66.3441 13.2289 66.165 13.02L63.8857 9.8534ZM68.7699 11.6376L70.2514 10.4803C70.4142 10.6732 70.6259 10.8178 70.8538 10.8982C71.1794 10.9947 71.5213 10.9304 71.7981 10.7214C71.9935 10.5928 72.1563 10.416 72.2214 10.191C72.3191 9.90162 72.1563 9.58014 71.8632 9.4837C71.8144 9.46762 71.7656 9.45155 71.7167 9.45155C71.5213 9.43548 71.1794 9.51585 70.6747 9.72481C69.8444 10.0624 69.1932 10.191 68.7048 10.1427C68.2326 10.0945 67.793 9.8534 67.5326 9.45155C67.3372 9.17829 67.2395 8.85681 67.2232 8.53533C67.2232 8.16563 67.3209 7.79592 67.5326 7.49052C67.8419 7.05652 68.2163 6.68681 68.6722 6.39748C69.356 5.93134 69.9584 5.7063 70.4794 5.7063C71.0004 5.7063 71.4888 5.94741 71.9446 6.4457L70.4794 7.58696C70.1863 7.21726 69.6328 7.13689 69.2583 7.42622L69.2095 7.47444C69.0467 7.57089 68.9327 7.71555 68.8676 7.89237C68.8187 8.02096 68.8513 8.16563 68.9327 8.27814C68.9978 8.35851 69.0955 8.42281 69.2095 8.42281C69.3397 8.43889 69.5676 8.37459 69.8933 8.22992C70.7073 7.89237 71.326 7.69948 71.7493 7.63518C72.1075 7.57089 72.4819 7.60304 72.8238 7.7477C73.1331 7.87629 73.3936 8.10133 73.5727 8.37459C73.8006 8.69607 73.9309 9.08185 73.9472 9.4837C73.9635 9.90162 73.8495 10.3035 73.6216 10.6571C73.3285 11.0911 72.954 11.4608 72.5145 11.7501C71.619 12.3609 70.8864 12.6181 70.3003 12.5217C69.6653 12.4252 69.1443 12.1038 68.7699 11.6376Z"
                    fill="#1E1E1E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="90" height="33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </LinkOuter>
            <Typography sx={{ pt: '0.5rem' }}>RSSchool, 2022</Typography>
          </GridItemCustom>
        </GridCustom>
      </FooterContainer>
    </FooterCustom>
  );
};

export { Footer };
