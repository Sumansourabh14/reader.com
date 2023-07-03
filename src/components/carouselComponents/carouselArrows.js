import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ children, disabled, onClick }) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        //   right: "1%",
        //   opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </Button>
  );
}

// Click on left arrow
export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isFirstItemVisible
  );

  useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <ArrowBackIosNewIcon />
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );

  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <ArrowForwardIosIcon />
    </Arrow>
  );
}
