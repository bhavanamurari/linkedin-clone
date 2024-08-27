import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Jobs for women exclusively", "Top news - 9,989 readers")}
      {newsArticle("Coronavirus: India updates", "Top news - 98,879 readers")}
      {newsArticle(
        "Shadowfax raises $100 million",
        "Top news - 17,850 readers"
      )}
      {newsArticle("Moglix to hire 500", "Top news - 16,048 readers")}
      {newsArticle("Grooming women CEOs in finance")}
    </div>
  );
}

export default Widgets;
