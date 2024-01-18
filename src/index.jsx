// CustomLoader.js

import './css/style.css'


const CustomLoader = ({ height, width, pt, pr, pb, pl, mt, mr, mb, ml }) => {
    const customstyled = {
      width: width,
      height: height,
      paddingTop: pt,
      paddingRight: pr,
      paddingBottom: pb,
      paddingLeft: pl,
      marginTop: mt,
      marginRight: mr,
      marginBottom: mb,
      marginLeft: ml,
      display: 'block',
      borderRadius: '5px',
    };
  
    return (<div className="custom-loader-css" style={customstyled}></div>);
  };
  
  export default CustomLoader;
  