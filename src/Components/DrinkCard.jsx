import React, { useState } from "react";
import { trauncateString } from "../More";

const DrinkCard = (props) => {
  const [fullstring, setFullstring] = useState(false);
  return (
    <div className="rounded-[1rem] flex min-h-[20rem] w-[100%] border-solid border-2 border-[grey] bg-white ">
      <div className="w-[100%] flex flex-col lg:flex-row">
        <div className="lg:w-[25%] w-[100%] h-[80%] lg:h-[100%]">
          <img
            className="w-[100%] h-[100%] rounded-t-[1rem] lg:rounded-tr-none lg:rounded-l-[1rem] "
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
          <p className="hidden lg:block">
            <strong>Instructions</strong> <p>{props.instruction}</p>
          </p>
          <div className="lg:hidden flex flex-col items-center">
            <p className="">
              {/* <strong>Instructions</strong> <p>{props.instruction}</p> */}
              {fullstring === false
                ? trauncateString(props.instruction)
                : props.instruction}
            </p>
            <button
              className={
                fullstring == false
                  ? "mt-0 text-center border-solid border-2 border-[#000] rounded-[.5rem] m-auto w-fit p-1"
                  : "mt-4 text-center border-solid border-2 border-[#000] rounded-[.5rem] m-auto w-fit p-1"
              }
              onClick={() => setFullstring(!fullstring)}
            >
              {fullstring == false ? "See Instructions" : "Done"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
