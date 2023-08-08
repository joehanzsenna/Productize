import { Box } from '@chakra-ui/react';
import React from 'react';
import navData from './navData.js';

interface NavList {
  id: number;
  li: string;
}

const Wrapper: React.FC = () => {
  const listData = navData.map((list: NavList) => {
    const isList4 = list.id === 4;
    const listStyle: React.CSSProperties = {
      color: isList4 ? `#000` : undefined,
      backgroundColor: isList4 ? `#fff` : undefined,
      border: isList4 ? `1px solid #1E2323` : undefined,
      borderRadius: isList4 ? `24px` : undefined,
      padding: isList4 ? `.625rem 1.25rem` : undefined,
      display: isList4 ? 'flex' : undefined,
      marginLeft: isList4 ? `-.938rem` : undefined,
      marginRight: isList4 ? `-.938rem` : undefined,
      alignItems: isList4 ? `center` : undefined,
      marginTop: isList4 ? `-.75rem` : undefined,
      boxShadow: isList4 ? `2px 2px 0px 0.5px #0E0A2D` : undefined,
    };

    return (
      <Box key={list.id} style={listStyle}>
        {list.li}
      </Box>
    );
  });

  return (
    <Box>
      <Box
        as='ul'
        display='flex'
        gap='28px'
        paddingX='6rem'
        paddingTop='2.875rem'
        marginTop='-.75rem'
        whiteSpace='nowrap'
        fontSize='sm'
        cursor='pointer'
      >
        {listData}
      </Box>
    </Box>
  );
};

export default Wrapper;

// import { Box } from '@chakra-ui/react';
// import React from 'react';
// import navData from './navData.ts';

// const Wrapper: React.FC = () => {
//   const listData = navData.map((list: any, id: any) => {
//     const isList4 = list.id === 4;
//     const listStyle = {
//       color: isList4 ? `#000` : `null`,
//       backgroundColor: isList4 ? `#fff` : `null`,
//       border: isList4 ? `1px solid #1E2323` : `null`,
//       borderRadius: isList4 ? `24px` : '',
//       padding: isList4 ? `1rem 2rem` : '',
//       display: isList4 ? 'flex' : ``,
//       marginLeft: isList4 ? `-15px` : ``,
//       marginRight: isList4 ? `-15px` : ``,
//       alignItems: isList4 ? `center` : ``,
//       marginTop: isList4 ? `-1.2rem` : ``,
//       boxShadow: isList4 ? `2px 2px 0px 0.5px #0E0A2D` : ``,
//     };

//     return (
//       <div key={id} style={listStyle}>
//         {list.li}
//       </div>
//     );
//   });

//   return (
//     <Box>
//       <Box
//         as={`ul`}
//         display={`flex`}
//         gap={`28px`}
//         px={`8.95rem`}
//         pt={`4.6rem`}
//         mt={`-1.2rem`}
//         whiteSpace={`nowrap`}
//         fontSize={`1.4rem`}
//         cursor={`pointer`}
//       >
//         {listData}
//       </Box>
//     </Box>
//   );
// };

// export default Wrapper;
