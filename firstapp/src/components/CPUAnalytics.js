import React, { useState, useEffect, useRef } from 'react';


const CPUAnalytics = () => {
  const canvasRef = useRef(null);
  const [selectedCrop, setSelectedCrop] = useState('rice');

  const cropData = {
    rice: [150, 200, 180, 250, 300, 280, 320, 280, 250, 200, 180, 150],
    wheat: [100, 180, 120, 200, 280, 240, 280, 260, 220, 180, 160, 140],
    chilli: [80, 150, 130, 170, 200, 210, 240, 220, 200, 150, 120, 100],
    potato: [120, 160, 140, 180, 220, 200, 260, 220, 200, 160, 140, 120],
    tomato: [100, 140, 120, 160, 180, 200, 240, 220, 200, 180, 160, 140],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const barWidth = canvasWidth / 17;
    const barSpacing = 10;
    const barColors = [' #808080', ' #808080', ' #808080', ' #808080', ' #808080'];

    const cropProductionData = cropData[selectedCrop];

    const maxValue = Math.max(...cropProductionData);

    function calculateBarHeight(value) {
      return (value / maxValue) * (canvasHeight - 60);
    }

    function drawBars() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      for (let i = 0; i < cropProductionData.length; i++) {
        const cropProduction = cropProductionData[i];
        const x = i * (barWidth + barSpacing);
        const y = canvasHeight - 40;
        const barHeight = calculateBarHeight(cropProduction);

        ctx.fillStyle = barColors[i % 5];
        ctx.fillRect(x, y - barHeight, barWidth, barHeight);

        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(
          cropProduction.toString(),
          x + barWidth / 2,
          y - barHeight - 5
        );

        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(getMonthLabel(i), x + barWidth / 2, canvasHeight - 20);
      }
    }

    drawBars();
  }, [selectedCrop]);

  function getMonthLabel(monthIndex) {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[monthIndex];
  }

  function handleCropChange(event) {
    setSelectedCrop(event.target.value);
  }

  return (
    <div className="analytics">
      <h1>Analytics Page 2022</h1>
      <p>  

      </p>
      <p>Select crop to find its respective production in the year 2022</p>
      <div className="crop-selection">
        <label htmlFor="crop">Select Crop: </label>
        <select id="crop" value={selectedCrop} onChange={handleCropChange}>
          <option value="rice">Rice</option>
          <option value="wheat">Wheat</option>
          <option value="chilli">Red Chilli</option>
          <option value="potato">Potato</option>
          <option value="tomato">Tomato</option>
        </select>
      </div>
      <canvas ref={canvasRef} width={1000} height={500} className="bar-graph" />
    </div>
  );
};

export default CPUAnalytics;