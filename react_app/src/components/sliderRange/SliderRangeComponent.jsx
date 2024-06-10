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


  return (
    <div
      className={`slider-range-container ${orient}`}
      style={{ width: width,
        height: orient === "slider-vertical" ? heightSliderVertical : "100%",
    }}
    >
      {showRangeValue && (
        <div className={`range-value ${orient}`} 
        style={{width: orient === "slider-vertical" ? spaceBetweenRangeAndSliderVertical : spaceBetweenRangeAndSliderHorizontal}}>
          {sortedValues.map((value, index) => (
            <p
              key={index}
              style={{
                fontSize: rangeValueFontSize,
                color: rangeValueColor,
                left:
                orient === "slider-horizontal"
                    ? `${(index / (sortedValues.length - 1)) * 100}%`
                    : "auto",
                bottom:
                orient === "slider-vertical"
                    ? `${(index / (sortedValues.length - 1)) * 100}%`
                    : "auto",
                transform:
                orient === "slider-horizontal"
                    ? "translate(-50%, 0)"
                    : "translateY(50%)",
              }}
            >
              {value}
            </p>
          ))}
        </div>
      )}
      <input
        type="range"
        min={0}
        max={sortedValues.length - 1}
        value={currentIndex}
        onChange={handleChange}
        step={1}
        className="input-range"
        style={{ accentColor: colorSlider }}
        disabled={disabled}
        orient={orient === "slider-vertical" ? "vertical" : "horizontal"}
      />
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
