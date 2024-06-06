// # Main Import
import React, { useState } from "react";

// # Import Component Style
import "./SliderRange.css";

function SliderRangeComponent({
    times = [],
    color = "blue",
    showCurrentTime = true,
    unitOfTime = "s",
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

    return (
        <div className="slider-container">
            <input
                type="range"
                min={sortedTimes[0]}
                max={sortedTimes[sortedTimes.length - 1]}
                value={sliderValue}
                onChange={handleChange}
                step={1}
                className="slider"
                style={{ accentColor: color }}
            />
            {showCurrentTime && (
                <div className="current-value">
                    Time: {sliderValue} {unitOfTime}
                </div>
            )}
        </div>
    );
};

export default SliderRangeComponent;
