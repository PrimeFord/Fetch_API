import React from "react";

const DrinkCard = (props) => {
  return (
    <div className="rounded-[1rem] flex h-[20rem] w-[100%] border-solid border-2 border-[grey] bg-white ">
      <div className="w-[100%] flex flex-col lg:flex-row">
        <div className="lg:w-[25%] w-[100%] h-[80%] lg:h-[100%]">
          <img
            className="w-[100%] h-[100%] rounded-t-[1rem] lg:rounded-l-[1rem] "
            src={props.image}
            alt=""
          />
        </div>
        <div className="w-[100%] lg:w-[80%] py-[1rem] px-[1rem]">
          <h3 className="text-center font-[500] text-[1.5rem] lg:border-solid lg:border-2 lg:border-[#000] mb-2">
            {props.name}
          </h3>
          <div className="my-6">
            <p>
              <strong>Category:</strong> {props.category}
            </p>
            <p>
              <strong>Occassion:</strong> {props.occassion}
            </p>
            <p>
              <strong>Type:</strong> {props.type}
            </p>
            <p>
              <strong>Glass:</strong> {props.glass}
            </p>
          </div>
          <p className="">
            <strong>Instructions</strong> <p>{props.instruction}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
