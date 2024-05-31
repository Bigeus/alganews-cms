
import { useCallback, useState } from "react";
import { ChartProps } from "../../Components/Chart/Chart";
import transformEditorMonthlyEaningsIntoChartJs from "../Utils/TransformEditorMonthlyEarningsIntoChartJs";
import { MetricsService } from "bigeus-sdk";

export default function usePerformance() {
  const [performance, setPerformance] = useState<ChartProps["data"]>();

  const fetchPerformance = useCallback(() => {
    MetricsService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEaningsIntoChartJs)
      .then(setPerformance);
  }, []);

  return {
    performance,
    fetchPerformance,
  };
}