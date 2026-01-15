import React from 'react';

const Task2Page = () => {

  const commentsData = [
    {
      id: 1,
      user: "Vinay",
      text: "This is a great post!",
      replies: [
        {
          id: 11,
          user: "Amit",
          text: "Totally agree",
          replies: [
            {
              id: 111,
              user: "Neha",
              text: "Same here!",
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: 2,
      user: "Rahul",
      text: "Very helpful",
      replies: []
    }
  ];

  return (
    <div>

      {commentsData.map((item) => {

        return (
          <StyledComponent data={item}></StyledComponent>

        )





      })}

    </div>
  );
}

export default Task2Page;


function StyledComponent({ data }) {
  console.log(data)
  return (

    <>
      <div>
        <h1>{data.id}</h1>
        <h1>{data.user}</h1>
        <p>{data.text}</p>
        <span>{data?.replies?.map((item) => <StyledComponent data={item} />)}</span>
      </div>

    </>



  )

}
