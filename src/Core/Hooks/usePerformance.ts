import { MetricService } from "danielbonifacio-sdk";
import { useCallback, useState } from "react";
import { ChartProps } from "../../Components/Chart/Chart";
import transformEditorMonthlyEaningsIntoChartJs from "../Utils/TransformEditorMonthlyEarningsIntoChartJs";

export default function usePerformance() {
  const [performance, setPerformance] = useState<ChartProps["data"]>();

  const fetchPerformance = useCallback(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEaningsIntoChartJs)
      .then(setPerformance);
  }, []);

  return {
    performance,
    fetchPerformance,
  };
}