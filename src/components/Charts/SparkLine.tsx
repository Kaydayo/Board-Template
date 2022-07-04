import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts' 


type ChartType = "Line" | "Column" | "WinLoss" | "Pie" | "Area" | undefined
type SparkLineProps = {
  id: string,
  height: string,
  width: string,
  color: string,
  data: { x: number, yval: number }[],
  type: ChartType,
  currentColor: string
}

const SparkLine = ({ id, height, width, color, data, type, currentColor }: SparkLineProps) => {
   
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName='yval'
      type={type}
      tooltipSettings={
        {
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible:true
          }
        }  
      }
    >
    <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default SparkLine