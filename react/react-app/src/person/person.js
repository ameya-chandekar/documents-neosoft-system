import React from 'react';
const person = (props) => {
return (
<div>
<p>presented by  { props.name}</p>
<p>{props.children}</p>
</div>
)};
 export default person;