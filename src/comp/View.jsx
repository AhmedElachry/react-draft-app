import { memo } from "react";
function View({ value }) {
  console.log("view component mounted");
  return (
    <div>
      {" "}
      <p>{"value"}</p>
    </div>
  );
}

export default memo(View);
