// # Main Import
import React, { useState } from "react";
import PropTypes from "prop-types";

// # Import Component Style
import "./SliderRange.css";

function SliderRange ({
  times = [],
  colorSlider = "blue",
  showRangeValue = true,
  showLabels = true,
  label = "Time",
  unit = "s",
  disabled = false,
  rangeValueFontSize = "12px",
  rangeValueColor = "#000",
  labelMarginTopHorizontal = "10px",
  labelMarginTopVertical = "10px",
  currentValueFontSize = "16px",
  width = "50%",
  orient = "slider-horizontal", // To vertical use slider-vertical
  heightSliderVertical = "200px",
  spaceBetweenRangeAndSliderVertical = "8px",
  spaceBetweenRangeAndSliderHorizontal = "100%"
}) {
    // Sort the array values in ascending order
    const sortedTimes = [...times].sort((a, b) => a - b);

    const [sliderValue, setSliderValue] = useState(sortedTimes[0]);

    // Function to change the step value
    const handleStep = (value) => {
        return sortedTimes.reduce((prev, curr) =>
            Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
        );
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value);
        const step = handleStep(value);
        setSliderValue(step);
    };

      {showLabels && (
        <div
          style={{
            marginTop:
            orient === "slider-horizontal" ? labelMarginTopHorizontal : "0",
            marginLeft: orient === "slider-vertical" ? labelMarginTopVertical : "0",
            fontSize: currentValueFontSize,
          }}
        >
          {label && unit !== ""
            ? `${label}: ${sortedValues[currentIndex]} ${unit}`
            : null}
        </div>
      )}
    </div>
  );
};

export default SliderRange;

SliderRange.propTypes = {
  times: PropTypes.array.isRequired,
};
