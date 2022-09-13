import React from 'react'
function Pros(props) {
  console.log(props);
  const { value } = props;
  console.log(props.value);
  return (
    <div>
      <p>Props {props.value}</p>
      <p>2.{value}</p>
    </div>
// git remote add origin https://github.com/Sushant-saud/test.git
// git branch -M main
// git push -u origin main
  )
}

export default Pros;