import React from "react";
import { toStayOrNot } from "@/utils/redirect";
import DashBoard from "@/components/DashBoard";

const dashboard = async () => {
  const email = await toStayOrNot();
  return (
    <div>
      <DashBoard email={email} />
    </div>
  );
};

export default dashboard;
